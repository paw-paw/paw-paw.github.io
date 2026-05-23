# Tasks: blog-index-proportion-refinement

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

- Change id: `blog-index-proportion-refinement`
- Patch kind: `spec`
- Lifecycle: `spec-first`
- Estado: `ready-for-backlog`
- Ultima actualizacion: `2026-05-18`
- Owner: `usuario`

---

## 1. Fuente de verdad aplicable

- `docs/README.md`
- `sdd/parches/blog-index-proportion-refinement/patch.yaml`
- `sdd/parches/blog-index-proportion-refinement/definicion.md`
- `sdd/parches/blog-index-proportion-refinement/plan.md`
- `sdd/parches/blog-index-proportion-refinement/decision.log`

---

## 2. Preflight

- [x] `definicion.md` vigente
- [x] `plan.md` vigente
- [x] assumptions criticas clasificadas antes de dividir fases
- [x] no hay decisiones abiertas bloqueantes

---

## 3. Resumen del plan

- resumen: el patch se divide en una fase documental-editorial que fija la nueva guia suave de `excerpt` y una fase de interfaz que ajusta la proporcion del `blog index` para representar esa politica con mas fidelidad.

---

## 4. Fases

### Fase 1 - Reconciliacion editorial de `excerpt`

- Objetivo: fijar la guia cuantitativa suave de `excerpt` en las fuentes vivas correctas antes de tocar la UI.
- Origen en `plan.md`: `Bloque 1 - Reconciliar politica editorial de excerpt`
- Precondiciones:
  - `definicion.md`, `plan.md` y `decision.log` vigentes.
  - sin decisiones abiertas sobre si la guia debe existir.
- Tareas:
  - actualizar `docs/content/content-system.md` con el rango recomendado y su caracter no bloqueante.
  - actualizar `docs/content/content-master.md` para que featured y cards regulares reflejen la misma expectativa editorial.
  - alinear `blog-new`, `blog-edit` y `blog-preflight` con la nueva guia.
  - registrar hallazgos o drift si las fuentes vivas no admiten la propagacion esperada.
- Archivos o areas probables:
  - `docs/content/content-system.md`
  - `docs/content/content-master.md`
  - `.codex/skills/blog-new/SKILL.md`
  - `.codex/skills/blog-edit/SKILL.md`
  - `.codex/skills/blog-preflight/SKILL.md`
- Validaciones:
  - revision documental de consistencia entre contrato y skills.
- Criterio de cierre:
  - la misma guia de `excerpt` queda declarada de forma compatible en docs y skills, sin cambiar schema ni exigir migracion masiva.

### Fase 2 - Refinamiento proporcional del `blog index`

- Objetivo: ajustar la interfaz de `/blog` para que la portada superior cierre mejor, los logos respiren mas y los excerpts se representen con mayor fidelidad.
- Origen en `plan.md`: `Bloque 2 - Ajustar la composicion visible del blog index`
- Precondiciones:
  - Fase 1 cerrada.
  - politica editorial de `excerpt` ya reconciliada.
- Tareas:
  - ajustar clamps y espaciado visible de featured y cards regulares.
  - aumentar la escala efectiva de `Editorial Background` sin volverlo protagonista.
  - modificar la proporcion superior del `blog index` con cambios minimos y responsivos.
  - ejecutar validaciones tecnicas y revision visual de las dos locales del blog index.
- Archivos o areas probables:
  - `src/styles/global.css`
  - `src/components/blog/EditorialBackgroundStrip.astro`
  - `src/components/blog/BlogFeaturedPanel.astro`
  - `src/components/blog/BlogCard.astro`
  - rutas `/en/blog/` y `/es/blog/`
- Validaciones:
  - `npm test`
  - `npm run build`
  - revision visual en `375px`, `768px` y `1440px`
- Criterio de cierre:
  - `Latest Writing` deja de asomarse en el primer viewport desktop de referencia, featured muestra `6` lineas, cards quedan alineadas con la politica editorial y no aparecen regresiones visuales evidentes en breakpoints revisados.

---

## 5. Dependencias entre fases

- Fase 1 bloquea: `Fase 2`

---

## 6. Decisiones y bloqueos

- decisiones abiertas bloqueantes: `none`
- decisiones abiertas no bloqueantes: `none`

---

## 7. Validaciones globales

- [ ] consistencia documental entre contratos y skills
- [ ] `npm test`
- [ ] `npm run build`
- [ ] revision visual manual/asistida de `/en/blog/` y `/es/blog/`

---

## 8. Criterio de cierre

- [x] cada fase tiene objetivo, precondiciones, tareas, validaciones y criterio de cierre
- [x] cada tarea es trazable al `plan.md`
- [x] las validaciones son reales

---

## 9. Registro de cambios

- Fecha: `2026-05-18`
  - cambio: creacion inicial de fases macro y tareas ejecutables.
  - razon: preparar el patch para ejecucion ordenada con docs primero y UI despues.
