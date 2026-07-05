# Antigravity Distribution Design Candidate

## Status

This document records an Antigravity `distribution-design-candidate`.

It is not an installable Antigravity plugin, bundle, marketplace package,
package-manager unit, global runtime configuration, or stable support claim.
No `.antigravity/**`, `.gemini/**`, plugin metadata, bundle files, installer, or
release automation are materialized by this candidate.

## Evidence Base

The design derives from the governed `.agents/**` physical adapter candidate:

- `.agents/README.md`;
- `.agents/rules/*.md`;
- `.agents/skills/paw-*/SKILL.md`;
- `.agents/workflows/*.md`;
- `paw/adoption/adapters/runtime/antigravity.json`;
- `sdd/parches/paw-10d-reopen-antigravity-runtime-evidence/cierre.md`.

The accepted manual runtime evidence records a 2026-07-04 Antigravity PASS on
Windows with Gemini 3.1 Pro (High): `.agents/` was detected as the Workspace
Customizations Root, rules were recognized as runtime configuration, skills were
registered as native runtime skills, and workflows were registered as
slash-commands.

That proves the repo-local physical adapter candidate. It does not prove an
installable distribution package format.

## Distribution Decision

`paw-10d-antigravity-distribution-adapter` closes as
`distribution-design-candidate` because the package route is not confirmed.

The current repository has no authoritative Antigravity package contract for:

- installable package root;
- required metadata file path and schema;
- plugin or bundle import command;
- package validation command;
- user-local versus repository-local installation target;
- upgrade, rollback, and uninstall ownership semantics for an Antigravity
  package.

Without that evidence, creating package files would invent a fake adapter.

## Candidate Package Shape

If a future governed patch confirms the Antigravity package format, the package
must be derived from the validated `.agents/**` files and must preserve their
candidate boundaries.

The future package must include or reference:

- the rules files that preserve PAW v1/v2 activation boundaries;
- the PAW skills mapped from portable operations;
- the workflow slash-commands accepted by Antigravity;
- a deterministic file manifest with SHA-256 checksums;
- install, upgrade, rollback, verify, and uninstall instructions;
- explicit evidence that package installation does not activate PAW v2 or replace
  `.codex/**`.

The future package must not include:

- private `_inbox/**` material;
- `sdd/parches/**` historical workspaces as runtime authority;
- `.gemini/**` or Gemini CLI configuration unless a separate governed patch
  explicitly owns that scope;
- unvalidated hooks, MCP servers, marketplace metadata, or release automation;
- defaults that make PAW v2 active before cutover.

## Manual Evaluation Boundary

Today, Antigravity evaluation is repository-local:

1. Open the repository root in Antigravity.
2. Let Antigravity discover `.agents/**` as workspace customization.
3. Validate rules, skills, and workflows through runtime interaction.
4. Record evidence in a governed SDD patch before promoting any status.

Do not copy this repository into a global Antigravity settings directory as a
distribution package. No supported target path is confirmed by this design.

## Future Materialization Gate

A future patch may create Antigravity distribution files only after it records
all of the following:

- primary Antigravity documentation or local runtime evidence for package path
  and metadata format;
- a deterministic validator for the package inventory and checksums;
- a manual or automated runtime validation that the installed package is
  discovered by Antigravity;
- rollback and uninstall behavior that removes only owned, unchanged files;
- explicit candidate-only status that does not claim stable support,
  marketplace availability, or PAW v2 activation.

Until that gate passes, this document is the complete distribution output for
Antigravity.
