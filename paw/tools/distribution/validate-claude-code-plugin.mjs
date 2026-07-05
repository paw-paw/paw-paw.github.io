import { createHash } from 'node:crypto';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { isAbsolute, join, relative, resolve } from 'node:path';

import { createDiagnostic } from '../validation/diagnostics.mjs';
import { createValidationResult } from '../validation/validation-result.mjs';

export const CLAUDE_CODE_PLUGIN_ROOT = 'paw/distribution/claude-code-plugin/paw';

export const EXPECTED_CLAUDE_PLUGIN_SKILLS = [
  'paw-conformance',
  'paw-execute-phase',
  'paw-intake',
  'paw-phase-backlog',
  'paw-plan',
  'paw-router',
  'paw-sync-drift',
  'paw-tasks',
];

export const EXPECTED_CLAUDE_PLUGIN_AGENTS = [
  'paw-docs-checker',
  'paw-risk-reviewer',
  'paw-test-reviewer',
];

const ALLOWED_CANDIDATE_STATUSES = new Set([
  'distribution-design-candidate',
  'distribution-files-candidate',
  'distribution-adapter-candidate',
]);

const FORBIDDEN_PREFIXES = [
  '.agents/',
  '.gemini/',
  '.antigravity/',
  'hooks/',
];

const FORBIDDEN_MANIFEST_SOURCES = [
  '_inbox/',
  '.agents/',
  '.gemini/',
  '.antigravity/',
  'paw/parches/',
  'sdd/parches/',
];

export const REQUIRED_CLAUDE_PLUGIN_PATHS = [
  '.claude-plugin/plugin.json',
  'README.md',
  'manifest.json',
  'mcp/README.md',
  ...EXPECTED_CLAUDE_PLUGIN_SKILLS.map((skill) => `skills/${skill}/SKILL.md`),
  ...EXPECTED_CLAUDE_PLUGIN_AGENTS.map((agent) => `agents/${agent}.md`),
];

function diagnostic(code, message, path) {
  return createDiagnostic({ code, message, path });
}

function isObject(value) {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}

function normalizePath(path) {
  return path.replaceAll('\\', '/');
}

function isRelativeSafePath(value) {
  return typeof value === 'string'
    && value !== ''
    && !isAbsolute(value)
    && !value.includes('\\')
    && !value.split('/').includes('..');
}

function toBuffer(content) {
  if (Buffer.isBuffer(content)) return content;
  return Buffer.from(String(content));
}

function contentText(content) {
  return toBuffer(content).toString('utf8');
}

function sha256(content) {
  return createHash('sha256').update(toBuffer(content)).digest('hex');
}

function readJsonFromFiles(files, path, diagnostics, sourcePath) {
  if (files[path] === undefined) return null;
  try {
    return JSON.parse(contentText(files[path]));
  } catch (error) {
    diagnostics.push(diagnostic(
      'CLAUDE_PLUGIN_JSON_INVALID',
      `Invalid JSON in ${path}: ${error.message}`,
      `${sourcePath}/${path}`,
    ));
    return null;
  }
}

function collectFiles(directory, root = directory, files = {}) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const absolute = join(directory, entry.name);
    if (entry.isDirectory()) {
      collectFiles(absolute, root, files);
    } else if (entry.isFile()) {
      files[normalizePath(relative(root, absolute))] = readFileSync(absolute);
    }
  }
  return files;
}

function validatePluginJson(pluginJson, diagnostics, sourcePath) {
  if (!isObject(pluginJson)) {
    diagnostics.push(diagnostic(
      'CLAUDE_PLUGIN_MANIFEST_INVALID',
      'Claude plugin manifest must be an object.',
      `${sourcePath}/.claude-plugin/plugin.json`,
    ));
    return;
  }

  if (typeof pluginJson.name !== 'string' || pluginJson.name === '' || /\s/.test(pluginJson.name)) {
    diagnostics.push(diagnostic(
      'CLAUDE_PLUGIN_NAME_INVALID',
      'Claude plugin manifest name must be a non-empty token without whitespace.',
      `${sourcePath}/.claude-plugin/plugin.json`,
    ));
  }

  if (pluginJson.version === '0.1.0') {
    diagnostics.push(diagnostic(
      'CLAUDE_PLUGIN_STABLE_CLAIM',
      'Claude plugin candidate must not claim stable 0.1.0 release version.',
      `${sourcePath}/.claude-plugin/plugin.json`,
    ));
  }
}

function validatePawManifest(manifest, diagnostics, sourcePath) {
  if (!isObject(manifest)) {
    diagnostics.push(diagnostic(
      'CLAUDE_PLUGIN_PAW_MANIFEST_INVALID',
      'PAW Claude plugin manifest must be an object.',
      `${sourcePath}/manifest.json`,
    ));
    return;
  }

  if (manifest.runtime !== 'claude-code') {
    diagnostics.push(diagnostic(
      'CLAUDE_PLUGIN_RUNTIME_INVALID',
      'PAW Claude plugin manifest runtime must be claude-code.',
      `${sourcePath}/manifest.json`,
    ));
  }

  if (!ALLOWED_CANDIDATE_STATUSES.has(manifest.status)) {
    diagnostics.push(diagnostic(
      'CLAUDE_PLUGIN_STATUS_INVALID',
      'PAW Claude plugin manifest status must remain a distribution candidate status.',
      `${sourcePath}/manifest.json`,
    ));
  }

  if (manifest.version === '0.1.0') {
    diagnostics.push(diagnostic(
      'CLAUDE_PLUGIN_STABLE_CLAIM',
      'PAW Claude plugin manifest must not claim stable 0.1.0 release version.',
      `${sourcePath}/manifest.json`,
    ));
  }

  if (typeof manifest.derived_from !== 'string' || manifest.derived_from === '') {
    diagnostics.push(diagnostic(
      'CLAUDE_PLUGIN_DERIVATION_MISSING',
      'PAW Claude plugin manifest must record the physical adapter source patch.',
      `${sourcePath}/manifest.json`,
    ));
  }

  if (typeof manifest.validated_physical_adapter !== 'string' || manifest.validated_physical_adapter === '') {
    diagnostics.push(diagnostic(
      'CLAUDE_PLUGIN_PHYSICAL_VALIDATION_MISSING',
      'PAW Claude plugin manifest must record the validated physical adapter evidence.',
      `${sourcePath}/manifest.json`,
    ));
  }

  if (manifest.default_activation === true || manifest.paw_v2_default === true) {
    diagnostics.push(diagnostic(
      'CLAUDE_PLUGIN_DEFAULT_ACTIVATION',
      'Claude plugin candidate must not enable default activation or PAW v2 defaults.',
      `${sourcePath}/manifest.json`,
    ));
  }

  if (manifest.mcp_required === true) {
    diagnostics.push(diagnostic(
      'CLAUDE_PLUGIN_MCP_REQUIRED',
      'Claude plugin candidate must not require MCP for the initial distribution candidate.',
      `${sourcePath}/manifest.json`,
    ));
  }

  if (manifest.marketplace_status === 'public' || manifest.marketplace_status === 'published') {
    diagnostics.push(diagnostic(
      'CLAUDE_PLUGIN_MARKETPLACE_INVALID',
      'Claude plugin candidate must not publish or require a marketplace in this patch.',
      `${sourcePath}/manifest.json`,
    ));
  }
}

function validateRequiredFiles(files, diagnostics, sourcePath) {
  for (const path of REQUIRED_CLAUDE_PLUGIN_PATHS) {
    if (files[path] === undefined) {
      diagnostics.push(diagnostic(
        'CLAUDE_PLUGIN_REQUIRED_FILE_MISSING',
        `Required Claude plugin candidate file is missing: ${path}.`,
        `${sourcePath}/${path}`,
      ));
    }
  }

  for (const path of Object.keys(files)) {
    if (path === '.mcp.json'
      || path.endsWith('/.mcp.json')
      || FORBIDDEN_PREFIXES.some((prefix) => path.startsWith(prefix))) {
      diagnostics.push(diagnostic(
        'CLAUDE_PLUGIN_FORBIDDEN_SURFACE',
        'Claude plugin candidate contains a forbidden or deferred surface.',
        `${sourcePath}/${path}`,
      ));
    }
  }
}

function validateManifestFileEntries(manifest, files, diagnostics, sourcePath) {
  if (!isObject(manifest)) return;

  if (!Array.isArray(manifest.files) || manifest.files.length === 0) {
    diagnostics.push(diagnostic(
      'CLAUDE_PLUGIN_FILES_REQUIRED',
      'PAW Claude plugin manifest must declare packaged files.',
      `${sourcePath}/manifest.json`,
    ));
    return;
  }

  manifest.files.forEach((entry, index) => {
    const entryPath = `${sourcePath}/manifest.json#files[${index}]`;
    if (!isObject(entry)) {
      diagnostics.push(diagnostic(
        'CLAUDE_PLUGIN_FILE_ENTRY_INVALID',
        'PAW Claude plugin manifest file entry must be an object.',
        entryPath,
      ));
      return;
    }

    if (!isRelativeSafePath(entry.path)) {
      diagnostics.push(diagnostic(
        'CLAUDE_PLUGIN_FILE_PATH_INVALID',
        'PAW Claude plugin manifest path must be a safe plugin-relative path.',
        entryPath,
      ));
    }

    if (typeof entry.source !== 'string' || entry.source === '') {
      diagnostics.push(diagnostic(
        'CLAUDE_PLUGIN_FILE_SOURCE_INVALID',
        'PAW Claude plugin manifest source must be a non-empty string.',
        entryPath,
      ));
    } else if (FORBIDDEN_MANIFEST_SOURCES.some((prefix) => entry.source.startsWith(prefix))) {
      diagnostics.push(diagnostic(
        'CLAUDE_PLUGIN_FORBIDDEN_SURFACE',
        'PAW Claude plugin manifest must not derive packaged files from forbidden surfaces.',
        entryPath,
      ));
    }

    if (typeof entry.checksum_sha256 !== 'string' || !/^[a-f0-9]{64}$/.test(entry.checksum_sha256)) {
      diagnostics.push(diagnostic(
        'CLAUDE_PLUGIN_CHECKSUM_INVALID',
        'PAW Claude plugin manifest checksum must be lowercase SHA-256 hex.',
        entryPath,
      ));
    }

    if (isRelativeSafePath(entry.path) && files[entry.path] === undefined) {
      diagnostics.push(diagnostic(
        'CLAUDE_PLUGIN_FILE_MISSING',
        'PAW Claude plugin manifest declares a missing packaged file.',
        entryPath,
      ));
    } else if (isRelativeSafePath(entry.path)
      && typeof entry.checksum_sha256 === 'string'
      && /^[a-f0-9]{64}$/.test(entry.checksum_sha256)
      && sha256(files[entry.path]) !== entry.checksum_sha256) {
      diagnostics.push(diagnostic(
        'CLAUDE_PLUGIN_FILE_CHECKSUM_MISMATCH',
        'PAW Claude plugin manifest checksum does not match packaged file content.',
        entryPath,
      ));
    }
  });
}

function validateReadme(files, diagnostics, sourcePath) {
  if (files['README.md'] === undefined) return;
  const readme = contentText(files['README.md']).toLowerCase();
  const requiredTerms = ['install', 'upgrade', 'rollback', 'uninstall'];
  const missing = requiredTerms.filter((term) => !readme.includes(term));

  if (missing.length > 0) {
    diagnostics.push(diagnostic(
      'CLAUDE_PLUGIN_README_MISSING_LIFECYCLE',
      `Claude plugin README must document install, upgrade, rollback, and uninstall. Missing: ${missing.join(', ')}.`,
      `${sourcePath}/README.md`,
    ));
  }
}

export function validateClaudeCodePluginCandidate(candidate, sourcePath = '<memory>') {
  const diagnostics = [];
  const files = isObject(candidate?.files) ? candidate.files : {};
  const pluginJson = candidate?.plugin_json
    ?? candidate?.pluginJson
    ?? readJsonFromFiles(files, '.claude-plugin/plugin.json', diagnostics, sourcePath);
  const manifest = candidate?.manifest
    ?? readJsonFromFiles(files, 'manifest.json', diagnostics, sourcePath);

  validatePluginJson(pluginJson, diagnostics, sourcePath);
  validatePawManifest(manifest, diagnostics, sourcePath);
  validateRequiredFiles(files, diagnostics, sourcePath);
  validateManifestFileEntries(manifest, files, diagnostics, sourcePath);
  validateReadme(files, diagnostics, sourcePath);

  return createValidationResult({
    schemaVersion: 1,
    diagnostics,
    validatedPaths: [sourcePath],
    evidence: {
      skill_count: EXPECTED_CLAUDE_PLUGIN_SKILLS.filter((skill) => files[`skills/${skill}/SKILL.md`] !== undefined).length,
      agent_count: EXPECTED_CLAUDE_PLUGIN_AGENTS.filter((agent) => files[`agents/${agent}.md`] !== undefined).length,
      file_count: Object.keys(files).length,
    },
  });
}

export function validateClaudeCodePluginDirectory(pluginRoot, { sourcePath = pluginRoot } = {}) {
  const root = resolve(pluginRoot);
  const diagnostics = [];

  if (!existsSync(root)) {
    diagnostics.push(diagnostic(
      'CLAUDE_PLUGIN_ROOT_MISSING',
      'Claude plugin candidate root directory is missing.',
      sourcePath,
    ));
    return createValidationResult({
      schemaVersion: 1,
      diagnostics,
      validatedPaths: [sourcePath],
    });
  }

  const files = collectFiles(root);
  const candidate = {
    plugin_json: readJsonFromFiles(files, '.claude-plugin/plugin.json', diagnostics, sourcePath),
    manifest: readJsonFromFiles(files, 'manifest.json', diagnostics, sourcePath),
    files,
  };
  const result = validateClaudeCodePluginCandidate(candidate, sourcePath);

  return createValidationResult({
    schemaVersion: 1,
    diagnostics: [...diagnostics, ...result.diagnostics],
    validatedPaths: [sourcePath, ...result.validatedPaths],
    evidence: result.evidence,
  });
}
