# Cierre: sdd-portable-core-post-bootstrap

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

- Change id: `sdd-portable-core-post-bootstrap`
- Program id: `sdd-portable-core`
- Patch kind: `spec`
- Lifecycle: `spec-first`
- Status final: `closed`
- Fecha de cierre: `2026-05-09`
- Owner: `paw-paw`
- Nivel de cierre: `standard`

---

## 1. Resumen

- Objetivo original: completar el alcance post-bootstrap del programa SDD portable despues de migrar desde `docs/sdd/` hacia `sdd/`.
- Resultado ejecutado: micro-core creado, manifest introducido, cierre formal definido, validador local creado, skills type-aware, templates duplicados a assets, writers auditados y patch cerrado.
- Alcance cerrado: fases 1 a 8 de `tasks.md`.
- Alcance diferido: CI, link checker completo, evals formales, expansion avanzada del core y workspace formal de programa si `program_id` queda corto.

---

## 2. Artifacts revisados

- `patch.yaml`
- `definicion.md`
- `plan.md`
- `tasks.md`
- `backlog/fase1.md` a `backlog/fase8.md`
- `decision.log`
- `writer-audit.md`

---

## 3. Decisiones relevantes

- decision: ejecutar el handover restante como patch unico con fases estrictas.
  - fuente: `decision.log`
  - impacto: ocho fases secuenciales con backlogs vivos.
- decision: introducir `patch.yaml` con `patch_kind: spec` y `lifecycle: spec-first`.
  - fuente: `decision.log`, `patch.yaml`
  - impacto: manifest formal disponible para skills y cierre.
- decision: crear `sdd-close` mediante `skill-creator`.
  - fuente: `decision.log`, `.codex/skills/sdd-close/SKILL.md`
  - impacto: cierre formal queda como skill local.
- decision: no ampliar permisos de writers.
  - fuente: `writer-audit.md`
  - impacto: writers siguen acotados y bajo autorizacion explicita.

---

## 4. Assumptions, blockers y findings

### Assumptions

- assumption: el validador inicial puede ser operacional sin cubrir intencion completa.
  - estado: aceptado
  - evidencia: `sdd/tools/validate-sdd.mjs`, `backlog/fase4.md`

### Blockers

- blocker: escritura inicial en `.codex/skills/**` fallo por sandbox read-only.
  - estado: resuelto
  - resolucion o razon de diferimiento: escalacion aprobada para crear `sdd-close` y assets.

### Findings

- finding: `docs/sdd/parches/sdd-portable-core-bootstrap/**` sigue como excepcion transicional.
  - evidencia: `docs/README.md`, `backlog/fase8.md`
  - impacto: no es ruta activa general; queda preservado.
- finding: templates SDD ahora tienen assets preferidos por skill.
  - evidencia: `sdd/templates/README.md`, `.codex/skills/*/assets/**`
  - impacto: `sdd/templates/**` queda transicional.

---

## 5. Drift

- drift:
  - categoria: `minor`
  - fuente esperada: `sdd/README.md`
  - diferencia encontrada: decia que `sdd/core/**` no existia.
  - accion: actualizado durante Fase 1.
  - estado: resuelto
- drift:
  - categoria: `operational`
  - fuente esperada: `AGENTS.md`
  - diferencia encontrada: referencia obsoleta a `docs/sdd/orchestration/model-policy.md`.
  - accion: corregida a `sdd/orchestration/model-policy.md` con decision humana.
  - estado: resuelto
- drift:
  - categoria: `minor`
  - fuente esperada: `docs/README.md`
  - diferencia encontrada: bootstrap transicional bajo `docs/sdd/parches/sdd-portable-core-bootstrap/**`.
  - accion: preservado como excepcion documentada.
  - estado: aceptado

---

## 6. Reconciliacion de fuente viva

- fuente viva afectada: `AGENTS.md`
  - cambio requerido: corregir ruta obsoleta de model policy.
  - estado: `aplicado`
  - evidencia: `AGENTS.md`
- fuente viva afectada: `sdd/core/**`
  - cambio requerido: crear micro-core y cierre/lifecycle.
  - estado: `aplicado`
  - evidencia: `sdd/core/README.md`, `patch-model.md`, `artifact-lifecycle.md`, `decision-drift-policy.md`
- fuente viva afectada: `docs/`
  - cambio requerido: ninguno.
  - estado: `no aplica`
  - evidencia: no se cambio producto, contenido, arquitectura, visual, i18n, SEO ni deployment.

---

## 7. Validaciones

- validacion:
  - tipo: `automated`
  - comando o revision: `node sdd/tools/validate-sdd.mjs`
  - resultado esperado: repo SDD valido
  - resultado obtenido: `SDD repo validation passed`
  - estado: `pass`
  - evidencia: ejecucion final
- validacion:
  - tipo: `automated`
  - comando o revision: `node sdd/tools/validate-sdd.mjs --fixtures`
  - resultado esperado: fixtures SDD validos
  - resultado obtenido: `SDD fixture validation passed`
  - estado: `pass`
  - evidencia: ejecucion final
- validacion:
  - tipo: `automated`
  - comando o revision: `git diff --check`
  - resultado esperado: sin errores
  - resultado obtenido: sin salida
  - estado: `pass`
  - evidencia: ejecucion final
- validacion:
  - tipo: `not applicable`
  - comando o revision: `npm run build`
  - resultado esperado: no aplica
  - resultado obtenido: no ejecutado
  - estado: `skipped`
  - evidencia: no se toco runtime Astro, rutas, metadata, assets publicos ni build config.

---

## 8. Riesgos residuales

- riesgo: validador inicial valida forma y smoke tests, no intencion completa.
  - impacto: aun requiere revision humana/manager para decisiones y drift contractual.
  - mitigacion: decision gates y `sdd-sync-drift` siguen vigentes.
- riesgo: writers no fueron probados con evals formales.
  - impacto: confianza no aumenta mas alla del audit documental.
  - mitigacion: permisos no se ampliaron.

---

## 9. Pendientes

- pendiente: CI para `validate-sdd`.
  - owner: futuro patch
  - razon: diferido explicitamente en `tasks.md`.
- pendiente: link checker completo.
  - owner: futuro patch
  - razon: fuera de alcance.
- pendiente: evals formales para writers/skills.
  - owner: futuro patch
  - razon: fuera de alcance.

---

## 10. Criterio de cierre

- [x] fases seleccionadas cerradas o diferidas con razon
- [x] decisiones relevantes registradas
- [x] drift clasificado y resuelto o diferido
- [x] validaciones registradas
- [x] fuente viva reconciliada o marcada no aplicable
- [x] riesgos residuales visibles
