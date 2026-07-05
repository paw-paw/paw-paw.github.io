# Handover

Source input:

- PAW root: `D:\repos\paw-agentic-workflow`
- PAW handoff: `D:\repos\paw-agentic-workflow\_inbox\final\11-pilot-portfolio-codex-handoff.md`
- Portfolio root: `D:\repos\paw-paw.github.io`

Pilot objective:

- Validate PAW v2 in a brownfield Astro portfolio using Codex.
- Preserve the portfolio repository as the Git base.
- Do not merge PAW repository history.
- Do not use the existing SDD v1 surface from `origin/dev`.
- Implement a small real product change: images in Work and Blog use a subtle default tint/overlay and remove or reduce that tint on hover/focus while preserving a gentle zoom where applicable.

Explicit local decision:

- This repository opts into PAW v2 candidate manually for this pilot.
- PAW v2 remains operational/development surface and must not be promoted to `main` with public portfolio changes.
