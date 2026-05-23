# Handover

## Resumen del cambio

El usuario quiere que `/es/blog` muestre posts publicados igual que `/en/blog/`, y que esa paridad quede bien cerrada a nivel de producto con los cambios documentales y de tests necesarios.

## Estado observado

- `/en/blog/` ya lista posts publicados con un featured panel y una grilla de cards.
- `/es/blog/` sigue mostrando una superficie placeholder con `BlogEmptyState`.
- `/es/blog/category/[category]/` también sigue en estado vacío.
- El contrato documental actual sigue describiendo `/es/blog/` como una superficie en preparación o en un estado `en-first` que no refleja la nueva intención del usuario.

## Fuentes relevantes

- `docs/README.md`
- `AGENTS.md`
- `docs/architecture/i18n-spec.md`
- `docs/content/content-system.md`
- `docs/content/content-master.md`
- `docs/delivery/seo-spec.md`
- `docs/governance/decision-log.md`
- `src/pages/en/blog/index.astro`
- `src/pages/en/blog/category/[category].astro`
- `src/pages/es/blog/index.astro`
- `src/pages/es/blog/category/[category].astro`
- `src/utils/blog.ts`
- `src/utils/seo.ts`
- `src/i18n/en.json`
- `src/i18n/es.json`
- `tests/public-release-closure.test.mjs`
- `tests/blog-es-detail-alignment.test.mjs`

## Restricciones y contexto

- `en` sigue siendo el idioma maestro.
- `angle` y `domain` ya usan claves internas estables con labels localizados.
- El cambio no debe introducir nuevas taxonomías ni nuevos archives.
- La solución debe mantener canonical y alternates coherentes entre locales.

## Resultado esperado

- `/es/blog/` lista posts publicados con la misma estructura editorial que `/en/blog/`.
- `/es/blog/category/[category]/` lista posts publicados de esa categoría cuando existan.
- Las docs contractuales y auxiliares reflejan la nueva semántica.
- Los tests validan la nueva paridad de blog en español sin dejar el placeholder como verdad vigente.
