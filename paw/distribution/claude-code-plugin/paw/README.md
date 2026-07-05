# PAW Claude Code Plugin Candidate

This directory is a staged Claude Code plugin candidate for PAW.

Status: `distribution-files-candidate` until local Claude Code plugin runtime
validation proves install, discovery, namespaced skill invocation, agent
visibility, and removal behavior.

The plugin derives from the validated repo-local `.claude/**` physical adapter.
It does not replace PAW core, does not activate PAW v2, does not publish a
marketplace, and does not make `paw/parches/**` active before the approved
cutover.

## Contents

- `.claude-plugin/plugin.json`: Claude Code plugin metadata.
- `skills/`: PAW skills packaged from `.claude/skills/**`.
- `agents/`: read-only advisory PAW agents packaged from `.claude/agents/**`.
- `manifest.json`: PAW plugin inventory, checksums, gaps, and lifecycle notes.
- `mcp/README.md`: future-only MCP notes. No `.mcp.json` is installed.

Hooks, MCP servers, local marketplace files, public marketplace publishing,
auto-update, and stable support claims are out of scope for this candidate.

## Local Development Load

Use Claude Code's local plugin loading path when available:

```bash
claude --plugin-dir ./paw/distribution/claude-code-plugin/paw
```

Inside Claude Code, plugin skills should be namespaced with the plugin name, for
example:

```text
/paw:paw-router
/paw:paw-intake
/paw:paw-plan
```

If files change while Claude Code is running, use `/reload-plugins` or restart
Claude Code before retesting agents and non-skill components.

## Manual Install Plan

This repository does not publish a public marketplace for this candidate.

For a manual copy into a local plugin directory:

1. Inspect the target plugin directory before writing.
2. Confirm whether a plugin named `paw` already exists.
3. Compare the target with `manifest.json`.
4. Require explicit approval before overwriting any existing file.
5. Copy only files declared in `manifest.json`.
6. Preserve a backup for every overwritten owned file.
7. Run post-install verification against `manifest.json`.
8. Start Claude Code with the plugin or reload plugins.
9. Confirm namespaced skills and packaged agents are visible.

Do not edit global or project settings automatically.

## Upgrade

1. Read the installed plugin's previous `manifest.json`.
2. Compare previous and new `files[]` entries by destination and checksum.
3. Preserve files that are not owned by the previous manifest.
4. Require approval before replacing changed owned files.
5. Keep backups for overwritten files.
6. Run post-upgrade verification before removing backups.

If ownership cannot be proven, stop instead of overwriting.

## Rollback And Uninstall

Rollback restores the previous backed-up owned files.

Uninstall may remove only files that:

- are declared in the installation record;
- still match the recorded checksum;
- are not local user customizations.

Do not delete parent directories unless they are empty and known to be owned by
this plugin. Do not delete source-repository `.claude/**`, `sdd/parches/**`, or
`paw/parches/**`.

## Validation

Deterministic validation:

```bash
node --test paw/tests/contract/distribution-validation.test.mjs
node paw/tools/validate-distribution.mjs --json
```

Claude Code validation, when available:

```bash
claude plugin validate ./paw/distribution/claude-code-plugin/paw
claude --plugin-dir ./paw/distribution/claude-code-plugin/paw
```

If Claude Code plugin validation is unavailable in the current environment, keep
the status at `distribution-files-candidate`.

## Known Gaps

- No local Claude Code plugin runtime validation is recorded in this directory.
- Hooks are deferred.
- MCP is future-only.
- Public marketplace publication is out of scope.
- Only the 3 agents validated in `.claude/**` are packaged.
- `paw-conformance` is packaged instead of the handoff-local `paw-verify` name.
