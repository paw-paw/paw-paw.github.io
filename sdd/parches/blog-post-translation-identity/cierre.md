# Cierre: blog-post-translation-identity

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

- Change id: `blog-post-translation-identity`
- Program id: `none`
- Patch kind: `spec`
- Lifecycle: `spec-first`
- Status final: `closed`
- Fecha de cierre: `2026-05-18`
- Owner: `usuario`
- Nivel de cierre: `standard`

---

## 1. Resumen

- Objetivo original: separar identidad editorial comun y `slug` localizado para que las traducciones del blog puedan reconocerse sin compartir URL.
- Resultado ejecutado: se introdujo `i18n_key` como identidad comun opcional, se actualizo la verdad documental, se migro la pareja Burger King y el runtime ya enlaza traducciones reales entre locales.
- Alcance cerrado: contratos, schema, contenido publicado inicial, equivalencia runtime, tests y validacion de alternates.
- Alcance diferido: traduccion de posts que hoy siguen siendo monolingües.

---

## 2. Rama obligatoria por tipo

### Si `patch_kind = spec`

- fuente viva reconciliada: `docs/content/content-system.md`, `docs/architecture/i18n-spec.md`, `docs/delivery/seo-spec.md`, `docs/delivery/release-checklist.md`
- cambio promovido: `i18n_key` como identidad editorial comun para equivalencias exactas entre traducciones de `blog_post`

---

## 3. Artifacts revisados

- `patch.yaml`
- `definicion.md`
- `plan.md`
- `tasks.md`
- `backlog/fase1.md`
- `backlog/fase2.md`
- `decision.log`

---

## 4. Decisiones relevantes

- decision: usar una identidad comun separada del `slug`.
  - fuente: `decision.log`
  - impacto: habilita traducciones con URLs localizadas distintas.
- decision: nombrar el campo `i18n_key`.
  - fuente: decision explicita del usuario registrada en `decision.log`
  - impacto: fija la convencion contractual y tecnica usada por schema, contenido y runtime.

---

## 5. Assumptions, blockers y findings

### Assumptions

- Los posts sin traduccion pueden omitir `i18n_key`; esta assumption quedo validada por tests de fallback monolingüe.

### Blockers

- blocker: preview local para inspeccion browser-assisted no pudo iniciarse dentro del sandbox ordinario.
  - estado: resuelto parcialmente
  - resolucion o razon de diferimiento: se levanto preview con permiso escalado, pero Playwright no pudo abrir Chromium porque la distribucion no esta instalada en el entorno.

### Findings

- finding: la logica de equivalencia podia corregirse sin tocar rutas detail ni layouts.
  - evidencia: `src/utils/blog.ts` concentra `localeUrls`; build y tests pasaron tras cambiar solo schema, contenido, helper y tests.
  - impacto: el cambio se mantuvo pequeno y con baja superficie de regresion.
- finding: la primera ejecucion de `npm run build` fallo al correr en paralelo con `npm test`.
  - evidencia: error temporal `ENOENT` sobre `node_modules/.astro/data-store.json.tmp`; repeticion secuencial exitosa.
  - impacto: no indica regresion funcional, pero confirma que estas validaciones compiten por el content store si se lanzan juntas.

---

## 6. Drift

- drift: documentos vivos no describian aun una identidad editorial comun separada de `slug`.
  - categoria: `contractual`
  - fuente esperada: `docs/content/content-system.md` y `docs/architecture/i18n-spec.md`
  - diferencia encontrada: se permitian posts sin equivalente, pero no se modelaba como reconocer traducciones reales con slugs distintos.
  - accion: contratos actualizados antes del runtime.
  - estado: `resuelto`

---

## 7. Reconciliacion de fuente viva

- fuente viva afectada: docs de contenido, i18n, SEO y release.
- cambio requerido: describir `i18n_key`, equivalencia exacta localizada y validaciones positivas/negativas.
- estado: `aplicado`
- evidencia: diffs en `docs/content/content-system.md`, `docs/architecture/i18n-spec.md`, `docs/delivery/seo-spec.md`, `docs/delivery/release-checklist.md`

---

## 8. Validaciones

- validacion: tests automatizados
  - tipo: `automated`
  - comando o revision: `npm test`
  - resultado esperado: cobertura positiva y fallback sin regresiones
  - resultado obtenido: `3` tests pasaron
  - estado: `pass`
  - evidencia: salida del comando
- validacion: build Astro
  - tipo: `automated`
  - comando o revision: `npm run build`
  - resultado esperado: build estatica correcta
  - resultado obtenido: `27 page(s) built`
  - estado: `pass`
  - evidencia: salida del comando
- validacion: alternates generados en detail
  - tipo: `manual`
  - comando o revision: inspeccion de HTML generado en `dist/`
  - resultado esperado: Burger King enlaza entre locales; `dont-marry-claude` mantiene fallback al index
  - resultado obtenido: comportamiento esperado confirmado
  - estado: `pass`
  - evidencia: lectura de `dist/en/blog/a-shirt-a-license-and-a-loophole/index.html`, `dist/es/blog/una-camiseta-una-licencia-y-una-oportunidad/index.html`, `dist/en/blog/dont-marry-claude/index.html`
- validacion: review browser-assisted
  - tipo: `deferred`
  - comando o revision: preview local + Playwright MCP
  - resultado esperado: abrir rutas afectadas en navegador
  - resultado obtenido: preview disponible; Chromium no instalado para Playwright en este entorno
  - estado: `skipped`
  - evidencia: error de Playwright `Chromium distribution 'chrome' is not found`
- validacion: hygiene de diff
  - tipo: `automated`
  - comando o revision: `git diff --check`
  - resultado esperado: sin errores de whitespace
  - resultado obtenido: sin salida
  - estado: `pass`
  - evidencia: salida del comando

---

## 9. Riesgos residuales

- riesgo: futuros posts traducidos podrían olvidar compartir `i18n_key`.
  - impacto: el switcher volveria a caer al index aunque exista traduccion real.
  - mitigacion: usar el nuevo contrato y considerar una validacion editorial futura si el volumen de posts crece.

---

## 10. Pendientes

- pendiente: browser review real con Chromium disponible.
  - owner: entorno de verificacion
  - razon: la capacidad MCP no estuvo utilizable en esta sesion.

---

## 11. Criterio de cierre

- [x] fases seleccionadas cerradas o diferidas con razon
- [x] assumptions criticas resueltas, aceptadas o escaladas
- [x] decisiones relevantes registradas
- [x] drift clasificado y resuelto o diferido
- [x] validaciones registradas
- [x] fuente viva reconciliada o marcada no aplicable
- [x] riesgos residuales visibles
