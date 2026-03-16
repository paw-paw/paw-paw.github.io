# Release Checklist

## Estado

- Tipo: `auxiliar`
- Fase inicial: `6`
- Estado: `v1`
- Ultima actualizacion: `2026-03-15`

---

## Objetivo

Listar las verificaciones operativas minimas antes de considerar una release publicable o el cierre de una fase con impacto en routing, metadata o deploy.

Este checklist debe seguir siendo reusable despues de `Fase 6`.

---

## Build

- [ ] `npm install` no deja errores
- [ ] `npm run build` completa sin errores bloqueantes
- [ ] `dist/` se genera correctamente

## Preview y QA local

- [ ] revisar `/en/`
- [ ] revisar `/en/work/`
- [ ] revisar `/en/experience/`
- [ ] revisar `/en/contact/`
- [ ] revisar `/es/`
- [ ] revisar `/es/work/`
- [ ] revisar `/es/experience/`
- [ ] revisar `/es/contact/`

## Routing y links

- [ ] validar links internos principales
- [ ] validar `LanguageSwitcher`
- [ ] validar rutas puente:
  - [ ] `/`
  - [ ] `/work/`
  - [ ] `/experience/`
  - [ ] `/contact/`

## Metadata y SEO

- [ ] verificar `title` y `description` por pagina
- [ ] verificar `canonical`
- [ ] verificar `hreflang` / alternates
- [ ] verificar `x-default`
- [ ] verificar OG y Twitter cards
- [ ] verificar `robots.txt`
- [ ] verificar sitemap

## Deploy y verificacion publica

- [ ] confirmar que `Settings > Pages` usa `GitHub Actions`
- [ ] confirmar que `.github/workflows/deploy.yml` existe y apunta a `main`
- [ ] dejar pasar el workflow de deploy de `GitHub Pages`
- [ ] verificar URLs publicas principales
- [ ] verificar que el sitemap publicado responda
- [ ] verificar que `robots.txt` publicado responda

## Cierre

- [ ] registrar decisiones finales en `docs/governance/decision-log.md`
- [ ] actualizar el plan de fase correspondiente
