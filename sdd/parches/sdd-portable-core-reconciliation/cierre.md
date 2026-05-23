# Cierre: sdd-portable-core-reconciliation

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

- Change id: `sdd-portable-core-reconciliation`
- Program id: `sdd-portable-core`
- Patch kind: `spec`
- Lifecycle: `spec-anchored`
- Status final: `closed`
- Fecha de cierre: `2026-05-17`
- Owner: `paw-paw`
- Nivel de cierre: `drift-heavy`

---

## 1. Resumen

- Objetivo original: reconciliar la arquitectura viva del sistema SDD portable despues del handover inicial y de los drifts posteriores evaluados.
- Resultado ejecutado:
  - se introdujo `sdd-triage` como clasificador previo al patch formal;
  - `patch.yaml` paso a nacer desde intake y ahora modela `created_at` / `closed_at`;
  - `spec` y `batch` quedaron diferenciados en assets reales;
  - assumptions pasaron a ser first-class en doctrina, assets y gates;
  - onboarding, core y routing quedaron reconciliados;
  - `validate-sdd` ahora protege manifests, contrato de batch, ausencia de `docs/sdd` y enlaces relativos markdown vivos.
- Alcance cerrado: todo el alcance aprobado en `definicion.md` y `tasks.md`.
- Alcance diferido: CI y evals formales siguen fuera de este patch.

---

## 2. Rama obligatoria por tipo

### Si `patch_kind = spec`

- fuente viva reconciliada:
  - `README.md`
  - `AGENTS.md`
  - `docs/README.md`
  - `docs/AGENTS.md`
  - `sdd/**`
  - `.codex/skills/sdd-*/**`
  - `sdd/tools/**`
- cambio promovido: la arquitectura reconciliada del sistema SDD portable paso de handover a fuentes vivas verificables.

### Si `patch_kind = batch`

- estado por item: `no aplica`
- criterio global de cierre: `no aplica`
- item diferido, si existe: `no aplica`

---

## 3. Artifacts revisados

- `patch.yaml`
- `definicion.md`
- `plan.md`
- `tasks.md`
- `backlog/fase1.md`
- `backlog/fase2.md`
- `backlog/fase3.md`
- `backlog/fase4.md`
- `decision.log`

---

## 4. Decisiones relevantes

- decision: tratar el handover original como antecedente historico y promover solo la arquitectura reconciliada.
  - fuente: `decision.log`
  - impacto: evita restaurar drifts ya superados y fija el criterio de reconciliacion.
- decision: separar solo assets `spec` / `batch` y mantener backlog, cierre y decision log compartidos.
  - fuente: `decision.log`
  - impacto: materializa type-awareness sin duplicar la familia completa de skills.
- decision: limitar el checker a enlaces relativos markdown vivos.
  - fuente: `decision.log`
  - impacto: protege superficies vivas sin convertir historia ni fixtures en deuda activa.

---

## 5. Assumptions, blockers y findings

### Assumptions

- No critical assumptions.

### Blockers

- blocker: ninguno abierto al cierre.
  - estado: `resuelto`
  - resolucion o razon de diferimiento: no aplica

### Findings

- finding: el primer checker amplio detecto falsos positivos sobre historia y fixtures.
  - evidencia: fallo inicial de `node sdd/tools/validate-sdd.mjs`
  - impacto: obligo a refinar el alcance para que coincidiera con la decision aprobada.
- finding: `.codex/skills/**` requirio escritura escalada durante la fase de assets.
  - evidencia: `mkdir` inicial devolvio `Read-only file system`
  - impacto: la ejecucion necesito aprobacion acotada para modificar skills locales.

---

## 6. Drift

- drift: intake y tooling no coincidían al inicio sobre la existencia de `patch.yaml`.
  - categoria: `contractual`
  - fuente esperada: arquitectura reconciliada final
  - diferencia encontrada: `sdd-intake` permitia avanzar sin manifest, pero `validate-sdd` ya lo exigia.
  - accion: Fase 1 creo manifest transicional; Fases 2-4 promovieron la nueva regla a doctrina, skills y tooling.
  - estado: `resuelto`
- drift: artifacts activos del propio patch nacieron antes de que assumptions fueran first-class.
  - categoria: `operational`
  - fuente esperada: assets reconciliados de Fase 3
  - diferencia encontrada: definicion, plan y backlogs iniciales no contenian assumptions explicitas.
  - accion: sincronizacion auxiliar en Fase 4 con `No critical assumptions.`
  - estado: `resuelto`

---

## 7. Reconciliacion de fuente viva

- fuente viva afectada:
  - onboarding (`README.md`, `AGENTS.md`, `docs/README.md`, `docs/AGENTS.md`)
  - doctrina (`sdd/core/**`)
  - routing (`sdd/orchestration/**`)
  - skills/plantillas (`.codex/skills/sdd-*/**`)
  - tooling (`sdd/tools/**`)
- cambio requerido: promover la arquitectura reconciliada y retirar las superficies vivas obsoletas.
- estado: `aplicado`
- evidencia: diffs del patch y validaciones finales SDD en verde.

---

## 8. Validaciones

- validacion:
  - tipo: `automated`
  - comando o revision: `node sdd/tools/validate-sdd.mjs`
  - resultado esperado: `SDD repo validation passed`
  - resultado obtenido: `SDD repo validation passed`
  - estado: `pass`
  - evidencia: ejecucion de Fase 4
- validacion:
  - tipo: `automated`
  - comando o revision: `node sdd/tools/validate-sdd.mjs --fixtures`
  - resultado esperado: `SDD fixture validation passed`
  - resultado obtenido: `SDD fixture validation passed`
  - estado: `pass`
  - evidencia: ejecucion de Fase 4
- validacion:
  - tipo: `automated`
  - comando o revision: `npm test`
  - resultado esperado: suite completa en verde
  - resultado obtenido: `3` tests, `3` pass, `0` fail
  - estado: `pass`
  - evidencia: ejecucion de Fase 4
- validacion:
  - tipo: `automated`
  - comando o revision: `git diff --check`
  - resultado esperado: sin errores de whitespace
  - resultado obtenido: sin salida
  - estado: `pass`
  - evidencia: ejecucion de Fase 4
- validacion:
  - tipo: `manual`
  - comando o revision: revision de frontera `triage` / `intake` / `router`
  - resultado esperado: responsabilidades no solapadas
  - resultado obtenido: frontera consistente
  - estado: `pass`
  - evidencia: Fase 2

---

## 9. Riesgos residuales

- riesgo: los manifests cerrados previos heredaron `created_at` por fecha documental disponible, no por timestamp original observado en tiempo real.
  - impacto: trazabilidad historica suficiente pero no forense.
  - mitigacion: los nuevos patches ya registran `created_at` desde intake.
- riesgo: el checker valida enlaces markdown relativos, no cualquier path textual en code spans.
  - impacto: referencias textuales rotas fuera de enlaces pueden sobrevivir.
  - mitigacion: ese alcance fue deliberado; rutas narrativas relevantes se cubren con revision documental y futuros tests si el sistema lo requiere.

---

## 10. Pendientes

- pendiente: ninguno dentro del alcance aprobado.
  - owner: `no aplica`
  - razon: no aplica

---

## 11. Criterio de cierre

- [x] fases seleccionadas cerradas o diferidas con razon
- [x] assumptions criticas resueltas, aceptadas o escaladas
- [x] decisiones relevantes registradas
- [x] drift clasificado y resuelto o diferido
- [x] validaciones registradas
- [x] fuente viva reconciliada o marcada no aplicable
- [x] riesgos residuales visibles
