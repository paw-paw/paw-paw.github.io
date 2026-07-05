# Adoption Adapters

## Purpose

Adapters bind portable PAW adoption contracts to a specific repository, stack, or
agent runtime. Adapter types are disjoint: sharing a file or implementation detail is
not approval to share responsibilities.

## Repo Adapter

A repo adapter maps local repository facts:

- authority and documentation index;
- repository paths;
- real commands;
- documentation map;
- public, operational, and private surfaces;
- local VCS policy;
- repository-specific rules;
- root detection strategy.

It must not contain universal PAW rules, define catalog values, or override live
documentation precedence.

The materialized schema lives at
`paw/tools/schemas/adoption/repo-adapter.schema.json`.

## Stack Adapter

A stack adapter records technical reality:

- real stack and versions;
- development, build, test, and validation commands;
- deployment and operability facts;
- available checks;
- differences from an adopted implementation preset;
- brownfield constraints.

It must not choose the software family, choose the agentic runtime, or become an
implicit implementation preset.

The materialized schema lives at
`paw/tools/schemas/adoption/stack-adapter.schema.json`.

## Runtime Adapter

A runtime adapter maps PAW capabilities to an agent runtime:

- runtime paths and packaging;
- triggers;
- assets and references;
- scripts and permissions;
- approvals;
- subagents, hooks, or optional capabilities.

It must not modify architecture, stack, required documentation, methodology, or
catalog identity.

The materialized schema lives at
`paw/tools/schemas/adoption/runtime-adapter.schema.json`.

Runtime adapters that claim concrete candidate support must also declare:

- operation mappings from portable PAW operation IDs to runtime entrypoints;
- capability status for progressive context loading, subagents, hooks, scripts,
  permissions, approvals, and artifacts where relevant;
- source freshness with a checked date and source status;
- gap disposition for missing or blocked runtime capabilities;
- activation state, which must remain explicit opt-in before cutover.

The current candidate runtime adapter evidence lives under
`paw/adoption/adapters/runtime/`:

- `codex.json`: implemented candidate mapping to `.codex/**` skills, agents,
  runtime map, and toolkit.
- `claude-code.json`: candidate mapping to Claude Code project skills,
  supporting files, tool controls, advisory subagents, deferred hooks, and
  forked skill context based on official docs checked on 2026-06-21. Patch
  `paw-10b-claude-code-physical-adapter` materialized repo-local `.claude/**`
  files, and `paw-10f-runtime-validation-reconciliation` records manual Claude
  Code 2.1.59 discovery evidence that promotes those files to
  `physical-adapter-candidate`. Patch
  `paw-10e-claude-code-distribution-adapter` stages a Claude Code plugin
  candidate under `paw/distribution/claude-code-plugin/paw/**` with deterministic
  file validation only; local Claude Code plugin runtime validation remains a
  deferred gap before any stronger distribution-adapter claim.
- `antigravity.json`: Antigravity-first candidate mapping to repo-local
  `.agents/**` physical files. Patch `paw-10c-antigravity-first-physical-adapter`
  materialized skills, rules, and a thin workflow. Patch
  `paw-10f-runtime-validation-reconciliation` records partial runtime validation:
  `.agents/skills/**` are runtime-discovered, while the original
  `.agents/rules/**` and `.agents/workflows/**` files were ordinary files.
  Patch `paw-10c-fix-antigravity-rules-workflows` replaces those files with a
  smaller frontmatter-based structure and adds deterministic static validation.
  Patch `paw-10d-reopen-antigravity-runtime-evidence` records a 2026-07-04
  manual Antigravity PASS on Windows with Gemini 3.1 Pro (High): `.agents/`
  was detected as the Workspace Customizations Root, rules were recognized as
  runtime configuration, skills were registered as native runtime skills, and
  workflows were registered as slash-commands. This promotes `.agents/**` to
  `physical-adapter-candidate`. Patch
  `paw-10d-antigravity-distribution-adapter` closes Antigravity distribution as
  `distribution-design-candidate` in
  `paw/distribution/antigravity-design-candidate.md`; it does not implement an
  Antigravity plugin, bundle, installer, marketplace package, or stable
  distribution adapter.

These files are evidence for adapter behavior. Runtime evidence may point to
physical adapter files when a governed patch creates them, but it does not create
stable support, `.antigravity/**`, `.gemini/**`, `paw/parches/**`, or a change to
the active SDD v1 workflow.

## Resolution Rule

When adapters disagree, treat the mismatch as evidence of drift or local constraint.
Do not let an adapter silently rewrite a catalog, core contract, or repository
authority source.

The deterministic adapter validator lives under `paw/tools/adoption/**` and is
exposed through `node paw/tools/validate-adoption.mjs --fixtures`. It validates
contract examples, fixtures, and the static `.agents/rules/**` /
`.agents/workflows/**` file shape used by the Antigravity candidate; it is not a
runtime adapter implementation.
