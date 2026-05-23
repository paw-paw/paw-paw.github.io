# Backlog Fase 1: Formalizar el patch activo

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

* Change id: `sdd-portable-core-reconciliation`
* Patch kind: `spec`
* Lifecycle: `spec-anchored`
* Fase: `1 - Formalizar el patch activo`
* Estado: `done`
* Ultima actualizacion: `2026-05-17`
* Owner: `paw-paw`
* Depende de: `tasks.md`
* Desbloquea: `backlog/fase2.md`

Nota:

* No marcar `done` si quedan checks de cierre abiertos, salvo que esten explicitamente diferidos.

---

## 1. Fuente de verdad aplicable

* `docs/README.md`
* `AGENTS.md`
* `sdd/parches/sdd-portable-core-reconciliation/definicion.md`
* `sdd/parches/sdd-portable-core-reconciliation/plan.md`
* `sdd/parches/sdd-portable-core-reconciliation/tasks.md`
* `sdd/parches/sdd-portable-core-reconciliation/decision.log`
* documentos contractuales aplicables:
  * no hay contratos de producto adicionales que gobiernen esta fase
* documentos auxiliares aplicables:
  * `sdd/core/patch-model.md`
  * `.codex/skills/sdd-plan/SKILL.md`
  * `.codex/skills/sdd-tasks/SKILL.md`
  * `sdd/tools/schemas/patch.schema.json`
  * `sdd/tools/validate-sdd.mjs`

Nota:

* si hay conflicto, manda la precedencia definida en `docs/README.md`
* este backlog ejecuta una sola fase
* la fase es la excepcion autorizada que crea el manifest faltante bajo el contrato vivo actual

---

## 2. Objetivo de la fase

* Resultado esperado: el workspace cuenta con `patch.yaml` valido bajo el contrato vigente y con `related_docs` suficientes para describir su anclaje.
* Razon de la fase: sin manifest, el validador SDD actual trata el patch como incompleto.
* Cambio que queda habilitado al cerrar: ejecutar el resto del flujo sin la excepcion inicial de manifest faltante.

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

* [x] decision de usar `spec` / `spec-anchored` registrada

### Estado tecnico

* [x] `patch.yaml` aun no existe en el workspace
* [x] `node sdd/tools/validate-sdd.mjs` falla hoy solo por la ausencia del manifest de este patch

---

## 4. Alcance

### Si entra

* [x] crear `patch.yaml` con el contrato vigente
* [x] fijar `related_docs` para las fuentes vivas afectadas
* [x] registrar la auto-migracion futura del manifest cuando entren `created_at` y `closed_at`

### No entra

* [x] modificar aun el schema de `patch.yaml`
* [x] actualizar doctrina, routing, skills o tooling fuera del workspace

---

## 5. Archivos y superficies de trabajo

### Leer antes de editar

* `sdd/parches/sdd-portable-core-reconciliation/definicion.md`
* `sdd/parches/sdd-portable-core-reconciliation/plan.md`
* `sdd/parches/sdd-portable-core-reconciliation/decision.log`
* `sdd/core/patch-model.md`
* `sdd/tools/schemas/patch.schema.json`

### Editar

* `sdd/parches/sdd-portable-core-reconciliation/patch.yaml`
* `sdd/parches/sdd-portable-core-reconciliation/decision.log`

### Validar

* `sdd/tools/validate-sdd.mjs`

### No tocar

* `src/**`
* `public/**`
* `sdd/parches/legacy/**`
* `.codex/skills/**`

---

## 6. Checklist de ejecucion

### Bloque A - Relectura de fuentes

* [x] releer la clasificacion aprobada en `definicion.md`
* [x] releer el Bloque 1 de `plan.md` y la Fase 1 de `tasks.md`

### Bloque B - Inspeccion de estado actual

* [x] confirmar que `patch.yaml` no existe aun
* [x] confirmar que la validacion actual falla por manifest faltante

### Bloque C - Edicion por archivo

* [x] crear `patch.yaml` con `schema_version`, `change_id`, `program_id`, `patch_kind`, `lifecycle`, `status` y `related_docs`
* [x] poblar `related_docs` con las fuentes vivas que el patch modificara
* [x] agregar a `decision.log` la decision de manifest transicional y auto-upgrade posterior

### Bloque D - Registro de decisiones, hallazgos o blockers

* [x] registrar el hallazgo de drift intake/tooling si aun no quedo suficientemente visible
* [x] dejar blockers en `none` si el manifest valida bajo el contrato vigente

### Bloque E - Validacion

* [x] ejecutar `node sdd/tools/validate-sdd.mjs`
* [x] confirmar que el fallo por manifest faltante desaparece

### Bloque F - Cierre

* [x] actualizar estado de la fase a `done`
* [x] registrar resultados de validacion y dejar listo `backlog/fase2.md`

---

## 7. Drift detectado

* Fecha: `2026-05-17`

  * fuente esperada: `.codex/skills/sdd-intake/SKILL.md`
  * diferencia encontrada: intake aun permite workspaces sin manifest, mientras `sdd/tools/validate-sdd.mjs` ya exige `patch.yaml` para no legacy.
  * impacto: el propio patch nacio en una ventana transicional que el validador considera incompleta.
  * accion: contener el drift creando manifest en esta fase y reconciliar la semantica definitiva en fases posteriores.
  * requiere decision: `no`

---

## 8. Hallazgos durante ejecucion

* Fecha: `2026-05-17`

  * hallazgo: `related_docs` necesita cubrir fuentes vivas de docs, doctrina, routing, skills y tooling, no solo documentos bajo `docs/`.
  * impacto: el cierre del patch debera reconciliar varias capas del sistema SDD.
  * accion: mantener una lista explicita y amplia en el manifest.

---

## 9. Blockers

* [x] ninguno

---

## 10. Decisiones tomadas

* Fecha: `2026-05-17`

  * decision: crear primero un manifest compatible con el contrato vigente y auto-upgradearlo cuando el nuevo schema quede activo.
  * razon: evita usar campos aun no soportados por las fuentes vivas y desbloquea el resto del flujo.
  * documentos o areas afectadas: `patch.yaml`, `decision.log`, tooling futuro del patch

---

## 11. Validaciones

### Documentales

* [x] verificar alineacion con `docs/README.md`
* [x] verificar alineacion con contratos aplicables
* [x] verificar trazabilidad contra `tasks.md`

### Tecnicas

* [x] `node sdd/tools/validate-sdd.mjs`

### Manuales

* [x] revision manual de coherencia entre manifest, definicion y plan

### Resultados

* Validacion:

  * comando o revision: `node sdd/tools/validate-sdd.mjs`
  * resultado esperado: `SDD repo validation passed`
  * resultado obtenido: `SDD repo validation passed`
  * estado: `pass`
  * notas: la creacion de `patch.yaml` elimino el fallo por manifest faltante.

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

* introducir antes de tiempo campos futuros en el manifest y volverlo incoherente con el contrato vivo actual

### Pendientes

* auto-upgrade del manifest a la forma final con `created_at` / `closed_at` en Fase 4

---

## 14. Registro de cambios

* Fecha: `2026-05-17`

  * cambio: backlog inicial creado para la formalizacion del manifest del patch.
  * razon: ejecutar primero la excepcion transicional que desbloquea el resto del flujo.
* Fecha: `2026-05-17`

  * cambio: `patch.yaml` creado, decision registrada y fase cerrada tras validacion SDD exitosa.
  * razon: el patch ya puede continuar bajo el contrato vivo vigente.
