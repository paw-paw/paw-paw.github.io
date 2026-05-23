# Handover: cleanup-transitional-residue

## Fuente

Este handover preserva las decisiones tomadas por el usuario despues de la auditoria read-only de duplicaciones, legacy y residuos transicionales del repo.

Fecha: 2026-05-09

## Decisiones del usuario

### Preservado intencional

- `sdd/parches/legacy/**` se queda como esta.
- `docs/sdd/parches/sdd-portable-core-bootstrap/**` debe moverse a `sdd/parches/legacy/`, actualizando la documentacion donde corresponda.
- `sdd/templates/**` debe eliminarse y dejar de ser referenciado como copia transicional.
- `sdd/tests/fixtures/**` no debe tocarse.
- Cualquier referencia i18n a idiomas que no sean `en` o `es` debe eliminarse y la documentacion pertinente debe actualizarse.

### Duplicacion exacta detectada

- Mantener los duplicados exactos de imagenes sociales y headers:
  - `src/assets/paulo-hero.png`
  - `src/assets/social/home-social.png`
  - `src/assets/social/contact-social.png`
  - `src/assets/work-headers/limamajor.jpg`
  - `src/assets/social/work-social.jpg`
  - `src/assets/work-headers/esports-world-cup.jpg`
  - `src/assets/social/experience-social.jpg`
- Mantener duplicados esperados de fixtures y `.gitkeep`.

### Candidatos reales de limpieza aprobados

- Limpiar `src/scripts/theme.js` si se confirma que no tiene wiring activo.
- Mantener el tratamiento de AOS/GSAP/`src/scripts/animations.js` solo si la documentacion vigente lo sigue preservando; no hacer limpieza amplia de motion fuera de alcance.

### Drift documental aprobado para correccion

- Actualizar drift documental en `docs/visual/asset-plan.md` sobre nombres reales de headers de `Selected Work`.

## Interpretacion de alcance

La instruccion de eliminar referencias i18n a idiomas distintos de `en` o `es` se interpreta sobre runtime activo, docs contractuales y docs auxiliares vigentes.

No se reescriben referencias historicas dentro de `sdd/parches/legacy/**` ni decision logs historicos salvo que una fase posterior lo apruebe explicitamente, porque el usuario tambien decidio que legacy queda como esta.

## Resultado esperado

El repo queda sin residuos transicionales activos conocidos:

- `docs/sdd/parches/sdd-portable-core-bootstrap/**` queda bajo legacy.
- `sdd/templates/**` deja de existir y las skills SDD apuntan solo a sus assets propios o a `sdd/core/` cuando aplique.
- `en` y `es` quedan como unicos idiomas activos tambien en la documentacion vigente.
- `src/scripts/theme.js` se elimina si no esta referenciado.
- El drift de nombres de assets queda corregido.

