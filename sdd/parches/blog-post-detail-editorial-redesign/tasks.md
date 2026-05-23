# Tasks: blog-post-detail-editorial-redesign

Usa este documento para convertir el plan aprobado del patch `blog-post-detail-editorial-redesign` en fases macro y tareas ejecutables.

---

## Estado

- Change id: `blog-post-detail-editorial-redesign`
- Patch kind: `spec`
- Lifecycle: `spec-anchored`
- Estado: `ready-for-backlog`
- Ultima actualizacion: `2026-05-18`
- Owner: `usuario`

---

## 1. Fuente de verdad aplicable

- `docs/README.md`
- `sdd/parches/blog-post-detail-editorial-redesign/patch.yaml`
- `sdd/parches/blog-post-detail-editorial-redesign/definicion.md`
- `sdd/parches/blog-post-detail-editorial-redesign/plan.md`
- `sdd/parches/blog-post-detail-editorial-redesign/decision.log`

---

## 2. Preflight

- [x] `definicion.md` vigente
- [x] `plan.md` vigente
- [x] assumptions criticas clasificadas antes de dividir fases
- [x] no hay decisiones abiertas bloqueantes

---

## 3. Resumen del plan

- resumen:
  - primero se sincronizan los contratos del detail;
  - despues se reestructura todo el corpus publicado;
  - luego se implementa la nueva superficie visual del detail;
  - finalmente se valida la experiencia completa y se cierra tecnicamente.

---

## 4. Fases

### Fase 1 - Sincronizacion contractual del blog detail

- Objetivo: dejar alineados los contratos antes de modificar runtime o contenido.
- Origen en `plan.md`: `Bloque 1 - Sincronizacion contractual del detail`
- Precondiciones: decisiones de intake cerradas.
- Tareas:
  - actualizar `site-architecture` para describir hero editorial, `Key idea` y rail interno.
  - actualizar `content-system` para fijar estructura obligatoria del cuerpo, blockquotes y mantenimiento editorial flexible.
  - actualizar `visual-system` solo si el nuevo patron requiere precision contractual adicional.
- Archivos o areas probables:
  - `docs/architecture/site-architecture.md`
  - `docs/content/content-system.md`
  - `docs/visual/visual-system.md`
- Validaciones:
  - revision documental cruzada con `docs/README.md` y decisiones del patch.
- Criterio de cierre:
  - los contratos describen sin contradiccion la nueva experiencia objetivo.

### Fase 2 - Retrofit editorial del corpus publicado

- Objetivo: llevar todos los posts publicados al nuevo estandar estructural.
- Origen en `plan.md`: `Bloque 2 - Retrofit editorial del corpus publicado`
- Precondiciones: fase 1 cerrada.
- Tareas:
  - agregar `3-4` headings `h2` por post publicado.
  - agregar `1-2` `blockquote` por post sin introducir claims nuevos.
  - preservar equivalencia editorial entre posts traducidos.
- Archivos o areas probables:
  - `src/content/blog/*.md`
- Validaciones:
  - revision editorial manual y `npm run build`.
- Criterio de cierre:
  - todo el corpus publicado cumple el nuevo contrato sin pérdida evidente de voz.

### Fase 3 - Nueva superficie de blog post detail

- Objetivo: implementar hero editorial, rail interno y lectura abierta en EN/ES.
- Origen en `plan.md`: `Bloque 3 - Nueva composicion del hero y rail`
- Precondiciones: fases 1 y 2 cerradas.
- Tareas:
  - actualizar labels i18n para `Key idea` y `On this page`.
  - rehacer ambas rutas detail con hero en dos columnas, `Back to blog` arriba, rail y cuerpo abierto.
  - ajustar CSS de headings, blockquotes y rail manteniendo dark mode y mobile.
  - actualizar fixtures o tests que dependan de posts sin headings.
- Archivos o areas probables:
  - `src/pages/en/blog/[slug].astro`
  - `src/pages/es/blog/[slug].astro`
  - `src/i18n/en.json`
  - `src/i18n/es.json`
  - `src/styles/global.css`
  - `tests/blog-es-detail-alignment.test.mjs`
- Validaciones:
  - `npm run build`
  - `npm test`
  - `astro-pages-verify`
- Criterio de cierre:
  - ambas rutas detail renderizan la nueva experiencia de forma coherente y verificable.

### Fase 4 - Verificacion integrada y cierre tecnico

- Objetivo: confirmar que docs, contenido y runtime ya forman un sistema coherente.
- Origen en `plan.md`: `Bloque 4 - Verificacion integrada y cierre tecnico`
- Precondiciones: fases 1 a 3 cerradas.
- Tareas:
  - ejecutar validaciones globales aplicables.
  - revisar visualmente detail EN/ES en mobile y desktop.
  - documentar drift, riesgos residuales y resultados.
- Archivos o areas probables:
  - artefactos SDD del patch
  - superficies detail EN/ES
- Validaciones:
  - `npm run build`
  - `npm test`
  - `astro-pages-verify`
- Criterio de cierre:
  - no quedan contradicciones documentales ni fallos tecnicos relevantes.

---

## 5. Dependencias entre fases

- Fase 1 bloquea:
  - Fase 2
  - Fase 3
- Fase 2 bloquea:
  - Fase 3
- Fase 3 bloquea:
  - Fase 4

---

## 6. Decisiones y bloqueos

- decisiones abiertas bloqueantes:
  - ninguna
- decisiones abiertas no bloqueantes:
  - ninguna

---

## 7. Validaciones globales

- [ ] validacion documental
- [ ] `npm run build`
- [ ] `npm test`
- [ ] `astro-pages-verify`

---

## 8. Criterio de cierre

- [x] cada fase tiene objetivo, precondiciones, tareas, validaciones y criterio de cierre
- [x] cada tarea es trazable al `plan.md`
- [x] las validaciones son reales

---

## 9. Registro de cambios

- Fecha: `2026-05-18`
  - cambio: creacion inicial de fases y tareas macro del patch.
  - razon: preparar la conversion del plan en backlogs ejecutables por fase.
