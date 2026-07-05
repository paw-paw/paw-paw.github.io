# Triage

## Classification

- Patch mode: `doc-anchored`
- Reason: the requested visible behavior is governed by existing live docs under `docs/`, especially visual and interaction specs.
- Family: `content-knowledge`
- Documentation preset: `docs-content-knowledge`
- Implementation preset: `content-astro-static`
- Profile: `content-delivery-surface`
- Concern: `public-exposure`

## Preconditions

- Current work branch: `codex/paw-11-pilot-portfolio-codex`.
- Operational base branch: `dev-paw`, created from `origin/main`.
- Prohibited source: `origin/dev` because it contains SDD v1 workflow material.
- Prohibited namespace: `sdd/**`.

## Initial Findings

- The repo has contractual documentation in `docs/`.
- `package.json` provides `dev`, `test`, `build`, and `preview`; no `lint` script exists.
- Existing Work headers already use reversible CSS overlays.
- Blog cards already zoom images on hover and use overlays.
- `src/scripts/animations.js` contains a stale GSAP selector for `#projects .group`; the live section is `#selected-work`.

## Next Operation

Proceed to intake/definition, then plan, tasks, phase backlog, and one visual implementation phase.
