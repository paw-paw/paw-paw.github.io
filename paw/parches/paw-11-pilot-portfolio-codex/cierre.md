# Cierre

## Resultado

Patch cerrado el 2026-07-05.

El piloto adoptó PAW v2 candidate en la rama operativa `dev-paw` y ejecutó la implementación visual en `codex/paw-11-pilot-portfolio-codex`, sin usar `origin/dev`, `sdd/**`, `.codex/skills/sdd-*` ni `.codex/agents/sdd-*`.

El cambio público queda acotado a:

- `docs/visual/interaction-spec.md`: regla contractual para tinte reversible en Work y Blog.
- `src/styles/global.css`: zoom y retiro de overlay/tinte en Work, Blog cards y Blog featured, con `prefers-reduced-motion`.
- `src/scripts/animations.js`: eliminación del bloque GSAP obsoleto que buscaba `#projects .group`.

## Validaciones

- `node paw/tools/validate-patches.mjs --json`: pass.
- `node paw/tools/validate-adoption.mjs --json`: pass para catálogos/fixtures PAW disponibles; no valida el adoption record local del patch porque el validador no descubre records de `paw/parches/**`.
- `ASTRO_TELEMETRY_DISABLED=1 npm.cmd run build`: pass.
- `ASTRO_TELEMETRY_DISABLED=1 npm.cmd test`: pass, 6 tests.
- `npm run lint`: no existe en `package.json`.

## Revisión visual

Rutas cargadas en browser local:

- `/en/`
- `/es/`
- `/en/work/`
- `/es/work/`
- `/en/blog/`
- `/es/blog/`

Light/dark:

- El toggle de tema cambia `html` a `dark`.
- Work y Blog cargan con sus imágenes y overlays en modo dark.

Hover/focus/reduced motion:

- La fuente CSS contiene las reglas de hover/focus-within para retirar overlays y aplicar zoom.
- La fuente CSS contiene las reglas `prefers-reduced-motion` para desactivar transiciones/transform.
- Limitación: la sesión de browser no activó `:hover` al mover el puntero y `domSnapshot()` falló en el runtime. Por eso la verificación de hover se registra como revisión de CSS + render de selectores, no como prueba visual automatizada completa.

## Drift

- PAW validator drift: `paw/tools/validation/validate-repository.mjs` todavía apuntaba a `sdd/parches`; se adaptó localmente a `paw/parches`.
- Test portability drift: tests invocaban `npm` de forma no portable en Windows; se ajustaron a `npm.cmd`, telemetría desactivada y `shell` en Windows.
- Validation execution drift: build y test no deben correr en paralelo porque ambos escriben a `dist`.
- Verification tooling gap: browser local no pudo activar `:hover` ni emitir snapshot DOM.

## Gaps Y Riesgos

- PAW v2 sigue siendo candidate; la adopción fue manual y no debe tratarse como release estable.
- `validate-adoption` no descubre el adoption record local del patch.
- `npm install` reportó vulnerabilidades existentes en dependencias; no se corrigieron porque están fuera del alcance del cambio visual.
- Build muestra advertencia de Browserslist/caniuse-lite desactualizado; no se actualizó por alcance.
- Queda pendiente una revisión visual humana fina de intensidad de tinte en hover real.

## Rollback

Para revertir solo el cambio visual público, retirar los commits de:

- `docs(visual): define reversible image tint behavior`
- `fix(visual): remove image tint on hover with zoom`
- commits de tests solo si no se desea conservar la portabilidad Windows.

`dev-paw` debe conservar PAW v2 y artifacts operativos. `main` no debe recibir PAW v2 ni `paw/parches/**`; la promoción pública debe hacerse por cherry-pick/PR selectivo de documentación visual y CSS/JS.
