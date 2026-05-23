---
name: astro-pages-verify
description: >
  Verify changes to this Astro portfolio and GitHub Pages surface using real scripts from `package.json`
  and browser-assisted review when local route inspection is needed.
  Trigger: When the user needs validation for visible pages, routing, metadata, assets, build output,
  visual/UI changes, or release readiness. Use after implementation or for verification-only work.
  Do not use to deploy, invent npm scripts, edit code to make checks pass, or replace SDD execution.
license: Apache-2.0
metadata:
  author: paw-paw
  version: "1.0"
---

## When to Use

- Validate changes that affect Astro pages, routing, metadata, assets, or release readiness
- Decide whether `npm run build`, `npm test`, preview, or manual review applies
- Report missing validation commands honestly

## Inputs

- Summary of the change
- Files touched
- Routes or public surfaces affected
- `package.json`
- Applicable docs, especially delivery, i18n, SEO, and release docs when touched

## Critical Patterns

- Read `package.json` before choosing commands
- Use `npm`; do not invent scripts
- Current expected scripts include `dev`, `build`, `preview`, and `test`; `lint` may be absent
- Build is required for structural Astro changes
- Tests apply when runtime, utilities, schemas, or test-covered behavior changed
- Visual/content-only changes need manual review unless automated coverage exists
- MCP browser review is validation, not implementation
- Use Playwright MCP for route navigation, screenshots, responsive checks, links, and visible page states
- Use Chrome DevTools MCP for CSS/layout diagnosis, console errors, network issues, hydration issues, and performance signals
- Do not claim visual validation unless the affected route was actually opened in browser tooling
- If MCP tools are unavailable, report MCP-assisted review as not run; do not simulate it from code inspection

## Workflow

1. Read `package.json` and list available scripts.
2. Identify affected public surfaces: routes, metadata, canonicals, alternates, assets, sitemap, or content.
3. Choose validations based on scope:
   - `npm run build` for structural Astro or public output changes
   - `npm test` for test-covered runtime or utility changes
   - `npm run preview` when local route inspection is needed
   - MCP-assisted browser review when UI, layout, responsive behavior, navigation, metadata rendering, assets, or visible content changed
   - manual visual review for visual/content-only changes when automated coverage is absent
4. If MCP-assisted browser review applies:
   - Start the preview server using an available package script
   - Open affected routes locally
   - Check relevant viewports:
     - 375px mobile
     - 768px tablet
     - 1440px desktop
   - Use Playwright MCP first for navigation, route state, screenshots, and responsive checks
   - Use Chrome DevTools MCP only when diagnosis is needed for CSS, layout, console, network, hydration, or performance issues
   - Capture concrete findings: route, viewport, symptom, suspected cause, and severity
5. Run selected commands and capture pass/fail status.
6. If `npm run lint` is absent, report it instead of inventing a substitute.
7. Do not edit implementation while verifying; report failures for a separate fix.
8. Return a validation report with residual risks.

## Report

- Scripts available
- Commands run and outcomes
- Routes or surfaces checked
- MCP tools used, if any
- Viewports checked
- Visual findings
- Console/network/layout issues observed
- Missing scripts, including `npm run lint` when absent
- MCP-assisted review not run and why, when applicable
- Manual review still needed
- Residual risks and blockers

## Guardrails

- Do not use MCP browser review as a substitute for `npm run build` when build is required.
- Do not use screenshots as proof of SEO, sitemap, canonical, or metadata correctness unless the underlying output was also inspected.
- Do not edit implementation while verifying; report failures for a separate fix.
- Do not broaden visual review beyond affected routes unless the change touches shared layout, global CSS, navigation, or site shell.
