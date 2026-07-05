# Backlog Fase 2: Visual Contract And Implementation

## Read First

- `docs/visual/interaction-spec.md`
- `docs/visual/visual-system.md`
- `docs/visual/asset-plan.md`
- `docs/content/content-system.md`
- `src/styles/global.css`
- `src/scripts/animations.js`

## Checklist

- [x] Update `docs/visual/interaction-spec.md` with the Work + Blog reversible tint rule.
- [x] Add CSS transitions so Work, Blog cards, and Blog featured overlays reduce or remove tint on hover/focus.
- [x] Add CSS zoom for Work header images.
- [x] Preserve reduced-motion behavior.
- [x] Remove or neutralize stale GSAP project-card hover code targeting `#projects .group`.
- [x] Record implementation drift and resolution in `decision.log`.
- [x] Run relevant validations after implementation.

## No-Touch Surfaces

- `origin/dev`
- `sdd/**`
- routing, i18n policy, deployment, domain, dependencies
- hero/contact/logo image treatment

## Closure Criteria

- Work and Blog behavior is implemented.
- No unclassified drift remains.
- Build/test results are recorded.

## Execution Notes

- Work image zoom and overlay removal now use CSS on hover/focus-within.
- Blog card and featured image zoom and overlay removal now use CSS on hover/focus-within.
- Reduced motion keeps transforms disabled.
- Stale GSAP project-card hover logic was removed because it targeted `#projects`, while the live section is `#selected-work`.
- Validation passed for PAW patch, PAW adoption catalogs, Astro build, and repository tests.
- Browser review loaded the requested routes in light/dark and confirmed Work/Blog image-overlay selectors render. The in-app browser session did not activate CSS `:hover` from pointer movement, so hover behavior was verified by CSS contract/source and not by live pointer state.
