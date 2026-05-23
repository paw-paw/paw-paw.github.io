# Tasks: blog-index-editorial-density-expansion

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

- Change id: `blog-index-editorial-density-expansion`
- Patch kind: `spec`
- Lifecycle: `spec-anchored`
- Estado: `ready-for-backlog`
- Ultima actualizacion: `2026-05-18`
- Owner: `usuario`

---

## 1. Fuente de verdad aplicable

- `docs/README.md`
- `sdd/parches/blog-index-editorial-density-expansion/patch.yaml`
- `sdd/parches/blog-index-editorial-density-expansion/definicion.md`
- `sdd/parches/blog-index-editorial-density-expansion/plan.md`
- `sdd/parches/blog-index-editorial-density-expansion/decision.log`

---

## 2. Preflight

- [x] `definicion.md` vigente
- [x] `plan.md` vigente
- [x] assumptions criticas clasificadas antes de dividir fases
- [x] no hay decisiones abiertas bloqueantes

---

## 3. Resumen del plan

- resumen: el patch se divide en una fase de reconciliacion documental del featured mas denso y una fase de implementacion visual del primer viewport.

---

## 4. Fases

### Fase 1 - Reconciliacion editorial del featured

- Objetivo: actualizar la verdad viva para admitir fecha y taxonomia secundaria en el featured del `blog index`.
- Origen en `plan.md`: `Bloque 1 - Reconciliar la nueva presentacion editorial del featured`
- Precondiciones:
  - definicion y decisiones iniciales vigentes.
- Tareas:
  - editar `docs/content/content-system.md`.
  - editar `docs/content/content-master.md`.
  - dejar clara la diferencia entre featured mas rico y cards regulares compactas.
- Archivos o areas probables:
  - `docs/content/content-system.md`
  - `docs/content/content-master.md`
- Validaciones:
  - revision documental.
- Criterio de cierre:
  - los docs autorizan la nueva presentacion sin contradicciones internas.

### Fase 2 - Densificacion visual del primer viewport

- Objetivo: implementar la composicion elegida por el usuario en `Editorial Background` y en el featured.
- Origen en `plan.md`: `Bloque 2 - Densificar el primer viewport`
- Precondiciones:
  - Fase 1 cerrada.
- Tareas:
  - recentrar elementos flotantes del intro.
  - pasar logos a dos filas.
  - añadir fecha y tags secundarios al featured.
  - ajustar CSS para jerarquia y responsive.
- Archivos o areas probables:
  - `src/styles/global.css`
  - `src/components/blog/EditorialBackgroundStrip.astro`
  - `src/components/blog/BlogFeaturedPanel.astro`
- Validaciones:
  - `npm test`
  - `npm run build`
  - revision visual.
- Criterio de cierre:
  - la composicion elegida aparece en `en` y `es`, con docs ya reconciliados y validaciones tecnicas en verde.

---

## 5. Dependencias entre fases

- Fase 1 bloquea: `Fase 2`

---

## 6. Decisiones y bloqueos

- decisiones abiertas bloqueantes: `none`
- decisiones abiertas no bloqueantes: `none`

---

## 7. Validaciones globales

- [ ] consistencia documental
- [ ] `npm test`
- [ ] `npm run build`
- [ ] `git diff --check`
- [ ] revision visual de `/en/blog/` y `/es/blog/`

---

## 8. Criterio de cierre

- [x] cada fase tiene objetivo, precondiciones, tareas, validaciones y criterio de cierre
- [x] cada tarea es trazable al `plan.md`
- [x] las validaciones son reales

---

## 9. Registro de cambios

- Fecha: `2026-05-18`
  - cambio: creacion inicial de fases macro.
  - razon: preparar ejecucion ordenada con docs antes de UI.
