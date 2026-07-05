import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { basename, extname, join, relative, resolve } from 'node:path';

import { createDiagnostic } from '../validation/diagnostics.mjs';
import { createValidationResult } from '../validation/validation-result.mjs';

export const EXPECTED_ANTIGRAVITY_RULE_FILES = [
  '00-core-operating-rules.md',
  '30-testing-and-validation.md',
  '90-antigravity-troubleshooting.md',
];

export const EXPECTED_ANTIGRAVITY_WORKFLOW_FILES = [
  'audit-code.md',
  'implement-feature.md',
  'prepare-handoff.md',
  'validate-agent-config.md',
];

const ALLOWED_RULE_TRIGGERS = new Set(['always_on', 'model_decision', 'glob', 'manual']);
const LEGACY_RULE_PATTERN = /^paw-.*\.md$/;
const LEGACY_WORKFLOWS = new Set(['paw-diagnose.md']);

function toRepoPath(root, absolutePath) {
  return relative(root, absolutePath).replaceAll('\\', '/');
}

function diagnostic(code, message, sourcePath, field = null) {
  return createDiagnostic({
    code,
    message: field ? `${message}: ${field}` : message,
    path: sourcePath,
  });
}

function listFiles(root, directoryPath, directoryRepoPath) {
  try {
    if (!existsSync(directoryPath)) {
      return {
        files: [],
        diagnostics: [
          diagnostic('ANTIGRAVITY_DIRECTORY_MISSING', 'Required Antigravity directory is missing', directoryRepoPath),
        ],
      };
    }

    return {
      files: readdirSync(directoryPath, { withFileTypes: true })
        .filter((entry) => entry.isFile())
        .map((entry) => entry.name)
        .sort(),
      diagnostics: [],
    };
  } catch (error) {
    return {
      files: [],
      diagnostics: [
        diagnostic(
          'ANTIGRAVITY_DIRECTORY_READ_ERROR',
          `Failed to read Antigravity directory (${error.message})`,
          directoryRepoPath,
        ),
      ],
    };
  }
}

function parseFrontmatter(content, sourcePath) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  if (!match) {
    return {
      metadata: null,
      body: content,
      diagnostics: [
        diagnostic('ANTIGRAVITY_FRONTMATTER_MISSING', 'Antigravity file must start with YAML frontmatter', sourcePath),
      ],
    };
  }

  const metadata = {};
  for (const line of match[1].split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const separator = trimmed.indexOf(':');
    if (separator === -1) continue;
    const key = trimmed.slice(0, separator).trim();
    const rawValue = trimmed.slice(separator + 1).trim();
    metadata[key] = rawValue.replace(/^["']|["']$/g, '');
  }

  return {
    metadata,
    body: content.slice(match[0].length),
    diagnostics: [],
  };
}

function readContent(filePath, sourcePath) {
  try {
    return {
      content: readFileSync(filePath, 'utf8'),
      diagnostics: [],
    };
  } catch (error) {
    return {
      content: '',
      diagnostics: [
        diagnostic('ANTIGRAVITY_FILE_READ_ERROR', `Failed to read Antigravity file (${error.message})`, sourcePath),
      ],
    };
  }
}

function firstHeading(body) {
  return body
    .split(/\r?\n/)
    .map((line) => line.trim())
    .find((line) => line.length > 0 && line.startsWith('#'));
}

function validateRuleFile(root, filePath) {
  const sourcePath = toRepoPath(root, filePath);
  const { content, diagnostics } = readContent(filePath, sourcePath);
  if (diagnostics.length > 0) return diagnostics;

  const parsed = parseFrontmatter(content, sourcePath);
  diagnostics.push(...parsed.diagnostics);
  if (!parsed.metadata) return diagnostics;

  const trigger = parsed.metadata.trigger;
  if (!trigger) {
    diagnostics.push(diagnostic('ANTIGRAVITY_RULE_TRIGGER_MISSING', 'Rule frontmatter must define trigger', sourcePath));
  } else if (!ALLOWED_RULE_TRIGGERS.has(trigger)) {
    diagnostics.push(diagnostic('ANTIGRAVITY_RULE_TRIGGER_INVALID', 'Rule trigger is not allowed', sourcePath, trigger));
  }

  if (trigger === 'glob' && !parsed.metadata.globs && !parsed.metadata.glob) {
    diagnostics.push(diagnostic('ANTIGRAVITY_RULE_GLOB_MISSING', 'Glob-triggered rules must define globs or glob', sourcePath));
  }

  if (!parsed.metadata.description) {
    diagnostics.push(diagnostic('ANTIGRAVITY_DESCRIPTION_MISSING', 'Rule frontmatter must define description', sourcePath));
  }

  return diagnostics;
}

function validateWorkflowFile(root, filePath) {
  const sourcePath = toRepoPath(root, filePath);
  const { content, diagnostics } = readContent(filePath, sourcePath);
  if (diagnostics.length > 0) return diagnostics;

  const parsed = parseFrontmatter(content, sourcePath);
  diagnostics.push(...parsed.diagnostics);
  if (!parsed.metadata) return diagnostics;

  if (!parsed.metadata.description) {
    diagnostics.push(diagnostic('ANTIGRAVITY_DESCRIPTION_MISSING', 'Workflow frontmatter must define description', sourcePath));
  }

  const expectedCommand = `# /${basename(filePath, '.md')}`;
  const heading = firstHeading(parsed.body);
  if (heading !== expectedCommand) {
    diagnostics.push(diagnostic(
      'ANTIGRAVITY_WORKFLOW_COMMAND_MISMATCH',
      'Workflow first heading must match file stem slash command',
      sourcePath,
      expectedCommand,
    ));
  }

  return diagnostics;
}

function validateDirectoryFiles(root, directoryPath, expectedFiles, legacyCheck, unexpectedCode, missingCode) {
  const directoryRepoPath = toRepoPath(root, directoryPath);
  const { files, diagnostics } = listFiles(root, directoryPath, directoryRepoPath);
  const expected = new Set(expectedFiles);

  for (const fileName of expectedFiles) {
    if (!files.includes(fileName)) {
      diagnostics.push(diagnostic(missingCode, 'Expected Antigravity file is missing', `${directoryRepoPath}/${fileName}`));
    }
  }

  for (const fileName of files) {
    const sourcePath = `${directoryRepoPath}/${fileName}`;
    if (extname(fileName) !== '.md') {
      diagnostics.push(diagnostic('ANTIGRAVITY_NON_MARKDOWN_FILE', 'Antigravity rules/workflows must be Markdown files', sourcePath));
      continue;
    }
    if (!expected.has(fileName)) {
      diagnostics.push(diagnostic(unexpectedCode, 'Unexpected Antigravity file is present', sourcePath));
    }
    if (legacyCheck(fileName)) {
      diagnostics.push(diagnostic('ANTIGRAVITY_LEGACY_FILE', 'Legacy Antigravity candidate file must not be present', sourcePath));
    }
  }

  return diagnostics;
}

export function validateAntigravityFiles(root = process.cwd()) {
  const repoRoot = resolve(root);
  const rulesPath = join(repoRoot, '.agents', 'rules');
  const workflowsPath = join(repoRoot, '.agents', 'workflows');
  const diagnostics = [
    ...validateDirectoryFiles(
      repoRoot,
      rulesPath,
      EXPECTED_ANTIGRAVITY_RULE_FILES,
      (fileName) => LEGACY_RULE_PATTERN.test(fileName),
      'ANTIGRAVITY_RULE_UNEXPECTED_FILE',
      'ANTIGRAVITY_RULE_MISSING',
    ),
    ...validateDirectoryFiles(
      repoRoot,
      workflowsPath,
      EXPECTED_ANTIGRAVITY_WORKFLOW_FILES,
      (fileName) => LEGACY_WORKFLOWS.has(fileName),
      'ANTIGRAVITY_WORKFLOW_UNEXPECTED_FILE',
      'ANTIGRAVITY_WORKFLOW_MISSING',
    ),
  ];

  for (const fileName of EXPECTED_ANTIGRAVITY_RULE_FILES) {
    const filePath = join(rulesPath, fileName);
    if (existsSync(filePath)) diagnostics.push(...validateRuleFile(repoRoot, filePath));
  }

  for (const fileName of EXPECTED_ANTIGRAVITY_WORKFLOW_FILES) {
    const filePath = join(workflowsPath, fileName);
    if (existsSync(filePath)) diagnostics.push(...validateWorkflowFile(repoRoot, filePath));
  }

  return createValidationResult({
    diagnostics,
    validatedPaths: [
      ...EXPECTED_ANTIGRAVITY_RULE_FILES.map((fileName) => `.agents/rules/${fileName}`),
      ...EXPECTED_ANTIGRAVITY_WORKFLOW_FILES.map((fileName) => `.agents/workflows/${fileName}`),
    ],
    evidence: {
      antigravity_file_validation: 'static-structure-only',
      expected_rule_count: EXPECTED_ANTIGRAVITY_RULE_FILES.length,
      expected_workflow_count: EXPECTED_ANTIGRAVITY_WORKFLOW_FILES.length,
    },
  });
}
