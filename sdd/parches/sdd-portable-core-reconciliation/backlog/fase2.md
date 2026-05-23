# Backlog Fase 2: Reconciliar doctrina y routing

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

* Change id: `sdd-portable-core-reconciliation`
* Patch kind: `spec`
* Lifecycle: `spec-anchored`
* Fase: `2 - Reconciliar doctrina y routing`
* Estado: `done`
* Ultima actualizacion: `2026-05-17`
* Owner: `paw-paw`
* Depende de: `backlog/fase1.md`
* Desbloquea: `backlog/fase3.md`

---

## 1. Fuente de verdad aplicable

* `docs/README.md`
* `AGENTS.md`
* `docs/AGENTS.md`
* `sdd/parches/sdd-portable-core-reconciliation/definicion.md`
* `sdd/parches/sdd-portable-core-reconciliation/plan.md`
* `sdd/parches/sdd-portable-core-reconciliation/tasks.md`
* `sdd/parches/sdd-portable-core-reconciliation/decision.log`
* documentos contractuales aplicables:
  * no hay contratos de producto adicionales que gobiernen esta fase
* documentos auxiliares aplicables:
  * `README.md`
  * `sdd/README.md`
  * `sdd/parches/README.md`
  * `sdd/core/**`
  * `sdd/orchestration/**`
  * `.codex/skills/sdd-intake/SKILL.md`
  * `.codex/skills/sdd-router/SKILL.md`

---

## 2. Objetivo de la fase

* Resultado esperado: la arquitectura reconciliada queda descrita en fuentes vivas y existe `sdd-triage` como skill de entrada previa al patch formal.
* Razon de la fase: antes de tocar templates y tooling, la doctrina comun debe tener una forma estable.
* Cambio que queda habilitado al cerrar: actualizar skills y assets con una frontera ya definida y sin narrativa viva obsoleta.

---

## Assumptions

* No critical assumptions.

---

## 3. Precondiciones

### Documentos

* [x] `definicion.md` vigente
* [x] `plan.md` vigente
* [x] `tasks.md` con la fase seleccionada
* [x] contratos aplicables revisados

### Decisiones previas

* [x] Fase 1 cerrada y manifest activo disponible

### Estado tecnico

* [x] `README.md` aun referencia `sdd/templates/**`
* [x] `docs/README.md` y `docs/AGENTS.md` aun mencionan `docs/sdd`
* [x] `sdd-triage` aun no existe

---

## 4. Alcance

### Si entra

* [x] crear `.codex/skills/sdd-triage/SKILL.md`
* [x] actualizar onboarding vivo y docs SDD para describir la arquitectura reconciliada
* [x] retirar referencias vivas a `sdd/templates/**`
* [x] retirar `docs/sdd` de la narrativa ordinaria y conservar la defensa en tooling/tests
* [x] actualizar core/orquestacion con triage, manifest, batch, assumptions y cierre

### No entra

* [ ] cambiar aun assets ejecutables de skills
* [ ] tocar schema, validator o tests
* [ ] editar runtime publico

---

## 5. Archivos y superficies de trabajo

### Leer antes de editar

* `README.md`
* `AGENTS.md`
* `docs/README.md`
* `docs/AGENTS.md`
* `sdd/README.md`
* `sdd/parches/README.md`
* `sdd/core/README.md`
* `sdd/core/patch-model.md`
* `sdd/core/artifact-lifecycle.md`
* `sdd/core/decision-drift-policy.md`
* `sdd/orchestration/README.md`
* `sdd/orchestration/skill-routing.md`
* `sdd/orchestration/artifact-state-machine.md`

### Editar

* `README.md`
* `AGENTS.md`
* `docs/README.md`
* `docs/AGENTS.md`
* `sdd/README.md`
* `sdd/parches/README.md`
* `sdd/core/README.md`
* `sdd/core/patch-model.md`
* `sdd/core/artifact-lifecycle.md`
* `sdd/core/decision-drift-policy.md`
* `sdd/orchestration/README.md`
* `sdd/orchestration/skill-routing.md`
* `sdd/orchestration/artifact-state-machine.md`
* `.codex/skills/sdd-triage/SKILL.md`

### Validar

* `README.md`
* `docs/README.md`
* `docs/AGENTS.md`
* `sdd/**`
* `.codex/skills/sdd-triage/SKILL.md`

### No tocar

* `.codex/skills/sdd-intake/assets/**`
* `sdd/tools/**`
* `src/**`
* `public/**`

---

## 6. Checklist de ejecucion

### Bloque A - Relectura de fuentes

* [x] releer las decisiones cerradas del handover preservado sobre triage, docs/sdd, assumptions y batch
* [x] releer la doctrina actual en `sdd/core/**` y el routing actual en `sdd/orchestration/**`

### Bloque B - Inspeccion de estado actual

* [x] localizar menciones vivas a `sdd/templates/**`
* [x] localizar menciones vivas a `docs/sdd`
* [x] confirmar ausencia de `sdd-triage`

### Bloque C - Edicion por archivo

* [x] crear `sdd-triage` con responsabilidad read-only y outputs estructurados
* [x] actualizar `README.md`, `AGENTS.md`, `docs/README.md`, `docs/AGENTS.md`, `sdd/README.md` y `sdd/parches/README.md`
* [x] actualizar `sdd/core/**` para manifest formal, created/closed semantics futuras, assumptions first-class y batch minimo
* [x] actualizar `sdd/orchestration/**` para insertar triage antes de intake y ajustar state machine/routing

### Bloque D - Registro de decisiones, hallazgos o blockers

* [x] registrar hallazgos de doc drift que la fase resuelva
* [x] dejar blockers en `none` si no aparece nueva decision humana

### Bloque E - Validacion

* [x] ejecutar `rg -n \"sdd/templates|docs/sdd\" README.md AGENTS.md docs/README.md docs/AGENTS.md sdd/README.md sdd/parches/README.md sdd/core sdd/orchestration`
* [x] revisar manualmente coherencia entre frontera de triage, intake y router

### Bloque F - Cierre

* [x] actualizar checklist y resultados
* [x] marcar la fase `done`
* [x] dejar lista Fase 3

---

## 7. Drift detectado

* Fecha: `2026-05-17`

  * fuente esperada: arquitectura reconciliada del handover
  * diferencia encontrada: onboarding y doctrina viva aun describen rutas o fronteras heredadas.
  * impacto: las skills futuras podrian seguir ejecutando contra una topologia ya superada.
  * accion: actualizar fuentes vivas antes de cambiar assets ejecutables.
  * requiere decision: `no`

---

## 8. Hallazgos durante ejecucion

* Fecha: `2026-05-17`

  * hallazgo: `README.md` es el unico onboarding vivo con referencias rotas a `sdd/templates/**`.
  * impacto: el lector llega a rutas inexistentes aun antes de entrar a las skills.
  * accion: sustituir esas referencias por core, skills y flujo SDD actual.
* Fecha: `2026-05-17`

  * hallazgo: las referencias restantes a `docs/sdd` y `sdd/templates` viven en patches historicos o en artifacts del patch actual, no en onboarding/core/routing vivo.
  * impacto: confirma que la limpieza documental viva puede cerrarse sin reescribir memoria historica.
  * accion: dejar la defensa contra regresion para tooling/tests en Fase 4.

---

## 9. Blockers

* [x] ninguno

---

## 10. Decisiones tomadas

* Fecha: `2026-05-17`

  * decision: ubicar la defensa contra `docs/sdd` en tooling/tests y no en narrativa ordinaria de onboarding.
  * razon: esa es la reconciliacion aprobada en el handover y evita que una cicatriz migratoria siga gobernando la lectura diaria.
  * documentos o areas afectadas: `docs/README.md`, `docs/AGENTS.md`, tooling futuro

---

## 11. Validaciones

### Documentales

* [x] verificar alineacion con `docs/README.md`
* [x] verificar alineacion con contratos aplicables
* [x] verificar trazabilidad contra `tasks.md`

### Tecnicas

* [x] `rg` dirigido para referencias vivas

### Manuales

* [x] revision manual de frontera `triage` / `intake` / `router`

### Resultados

* Validacion:

  * comando o revision: `rg -n "sdd/templates|docs/sdd" README.md AGENTS.md docs/README.md docs/AGENTS.md sdd/README.md sdd/parches/README.md sdd/core sdd/orchestration`
  * resultado esperado: sin hits en superficies vivas
  * resultado obtenido: sin hits
  * estado: `pass`
  * notas: los hits historicos quedan fuera del scope de esta comprobacion viva.
* Validacion:

  * comando o revision: revision manual de `README.md`, `AGENTS.md`, `sdd/README.md`, `sdd/core/**`, `sdd/orchestration/**` y `.codex/skills/sdd-triage/SKILL.md`
  * resultado esperado: frontera `triage` / `intake` / `router` consistente
  * resultado obtenido: frontera consistente y sin solapamiento persistente de artifacts
  * estado: `pass`
  * notas: `triage` clasifica, `intake` formaliza y `router` diagnostica workspaces existentes.

---

## 12. Cierre

La fase solo se considera cerrada si:

* [x] checklist completo o pendientes explicitamente diferidos
* [x] decisiones relevantes registradas
* [x] blockers resueltos o diferidos con razon
* [x] drift documentado o resuelto
* [x] validaciones requeridas ejecutadas o justificadas
* [x] resultados de validacion registrados
* [x] reporte final listo

---

## 13. Riesgos y pendientes

### Riesgos

* describir demasiado en onboarding y volver a dispersar doctrina

### Pendientes

* mover la defensa contra `docs/sdd` a tooling/tests en Fase 4

---

## 14. Registro de cambios

* Fecha: `2026-05-17`

  * cambio: backlog inicial creado para doctrina y routing.
  * razon: fijar la arquitectura viva antes de modificar skills y assets.
* Fecha: `2026-05-17`

  * cambio: `sdd-triage` creado y fuentes vivas de onboarding, core y routing reconciliadas.
  * razon: establecer la arquitectura aprobada antes de tocar assets ejecutables o tooling.
