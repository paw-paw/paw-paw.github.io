# Plan

## Strategy

Use PAW v2 manually as the governing workflow for a small visual change. Keep operational PAW material on `dev-paw` and the pilot branch. Keep public product changes separable for later selective promotion to `main`.

## Phases

1. PAW v2 adoption and patch definition.
2. Visual contract and implementation.
3. Validation, closure, and PAW effectiveness report.

## Affected Surfaces

- Operational: `.codex/**`, `paw/**`.
- Live docs: `docs/visual/interaction-spec.md`.
- Runtime public code: `src/styles/global.css`, `src/scripts/animations.js`.
- Evidence: `paw/parches/paw-11-pilot-portfolio-codex/**`.

## Validation

- `node paw/tools/validate-patches.mjs --json`
- `node paw/tools/validate-adoption.mjs --json`
- `npm run build`
- `npm test`
- Manual visual review for EN/ES Work and Blog, light/dark, hover/focus, and reduced motion.

## Rollback

- Revert the product commits for visual behavior.
- Keep or remove PAW v2 from `dev-paw` by explicit close decision.
- Do not merge PAW v2 candidate into `main`.
