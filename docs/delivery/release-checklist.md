# Release Checklist

## Estado

- Tipo: `auxiliar`
- Fase inicial: `6`
- Estado: `v2`
- Ultima actualizacion: `2026-04-01`

---

## Objetivo

Listar las verificaciones operativas minimas antes de considerar una release publicable o el cierre de una fase con impacto en routing, metadata o deploy.

Este checklist debe seguir siendo reusable despues de `Fase 6`.

Nota:

- este checklist separa verificaciones resolubles desde el repo de pasos externos necesarios para considerar la publicacion efectiva
- `public release ready` no equivale a `release publica ejecutada`
- mientras el deploy siga dependiendo de `main`, la publicacion efectiva requiere merge/promocion, workflow exitoso y verificacion publica posterior

---

## Build

- [ ] `npm install` no deja errores
- [ ] `npm test` no deja errores
- [x] `npm run build` completa sin errores bloqueantes
- [x] `dist/` se genera correctamente

## Preview y QA local

- [x] revisar `/en/`
- [x] revisar `/en/work/`
- [x] revisar `/en/experience/`
- [x] revisar `/en/contact/`
- [x] revisar `/en/blog/`
- [x] revisar `/en/blog/[slug]/`
- [x] revisar `/en/blog/category/[category]/`
- [x] revisar `/es/`
- [x] revisar `/es/work/`
- [x] revisar `/es/experience/`
- [x] revisar `/es/contact/`
- [x] revisar `/es/blog/`
- [x] revisar `/es/blog/category/[category]/`
- [x] verificar empty states de blog en `es`

## Routing y links

- [ ] validar links internos principales
- [x] validar `LanguageSwitcher`
- [x] validar `LanguageSwitcher` en `blog post detail` sin equivalente exacto
- [x] validar linking contextual minimo hacia el blog
- [ ] validar rutas puente:
  - [x] `/`
  - [x] `/work/`
  - [x] `/experience/`
  - [x] `/contact/`

## Metadata y SEO

- [ ] verificar `title` y `description` por pagina
- [x] verificar `canonical`
- [x] verificar `hreflang` / alternates
- [x] verificar `x-default`
- [x] verificar OG y Twitter cards
- [x] verificar `robots.txt`
- [x] verificar sitemap
- [x] confirmar que los posts sin equivalente exacto mantienen `self-canonical`
- [x] confirmar que `alternate` de posts sin equivalente exacto cae al `blog index` del locale destino

## Pasos externos para publicacion efectiva

- [ ] promover la release branch a `main`
- [ ] confirmar que `Settings > Pages` usa `GitHub Actions`
- [x] confirmar que `.github/workflows/deploy.yml` existe y apunta a `main`
- [ ] dejar pasar el workflow de deploy de `GitHub Pages` sobre `main`
- [ ] verificar URLs publicas principales
- [ ] verificar que el sitemap publicado responda
- [ ] verificar que `robots.txt` publicado responda

## Cierre

- [x] confirmar release `en-first` para posts del blog en esta salida
- [x] registrar decisiones finales en `docs/governance/decision-log.md`
- [x] actualizar el plan de fase correspondiente
- [x] distinguir estado `public release ready` de publicacion publica efectivamente ejecutada
