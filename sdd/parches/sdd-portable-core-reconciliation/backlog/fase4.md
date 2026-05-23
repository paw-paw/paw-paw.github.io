# Backlog Fase 4: Endurecer tooling y reconciliar el estado final

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

* Change id: `sdd-portable-core-reconciliation`
* Patch kind: `spec`
* Lifecycle: `spec-anchored`
* Fase: `4 - Endurecer tooling y reconciliar el estado final`
* Estado: `done`
* Ultima actualizacion: `2026-05-17`
* Owner: `paw-paw`
* Depende de: `backlog/fase3.md`
* Desbloquea: `sdd-close`

---

## 1. Fuente de verdad aplicable

* `docs/README.md`
* `AGENTS.md`
* `sdd/parches/sdd-portable-core-reconciliation/patch.yaml`
* `sdd/parches/sdd-portable-core-reconciliation/definicion.md`
* `sdd/parches/sdd-portable-core-reconciliation/plan.md`
* `sdd/parches/sdd-portable-core-reconciliation/tasks.md`
* `sdd/parches/sdd-portable-core-reconciliation/decision.log`
* documentos contractuales aplicables:
  * no hay contratos de producto adicionales que gobiernen esta fase
* documentos auxiliares aplicables:
  * `sdd/core/patch-model.md`
  * `.codex/skills/sdd-*/**`
  * `sdd/tools/schemas/patch.schema.json`
  * `sdd/tools/validate-sdd.mjs`
  * `sdd/tests/**`
  * `tests/**`

---

## 2. Objetivo de la fase

* Resultado esperado: schema, validator, fixtures y artifacts activos hacen cumplir la arquitectura reconciliada y el repo valida completo.
* Razon de la fase: una arquitectura que no puede comprobarse tiende a volver a drift.
* Cambio que queda habilitado al cerrar: cierre formal del patch con fuentes vivas y tooling ya alineados.

---

## Assumptions

* No critical assumptions.

---

## 3. Precondiciones

### Documentos

* [x] `definicion.md` vigente
* [x] `plan.md` vigente
* [x] `tasks.md` con la fase seleccionada
* [x] assets y skills de Fase 3 actualizados

### Decisiones previas

* [x] Fases 1-3 cerradas

### Estado tecnico

* [x] manifests no legacy aun usan el contrato antiguo
* [x] `validate-sdd.mjs` aun no valida timestamps, batch contract ni links/rutas vivas

---

## 4. Alcance

### Si entra

* [x] actualizar schema y validator para `created_at`, `closed_at` y contrato minimo de batch
* [x] agregar link checker interno para markdown vivo
* [x] mover la defensa contra `docs/sdd` a tooling/tests
* [x] migrar manifests no legacy al contrato final
* [x] agregar fixtures y tests suficientes
* [x] sincronizar artifacts activos con assumptions first-class si corresponde

### No entra

* [ ] tocar legacy historico
* [ ] validar URLs externas
* [ ] tocar runtime publico

---

## 5. Archivos y superficies de trabajo

### Leer antes de editar

* `sdd/tools/schemas/patch.schema.json`
* `sdd/tools/validate-sdd.mjs`
* `sdd/tests/fixtures/**`
* `tests/**`
* manifests no legacy activos/cerrados bajo `sdd/parches/`
* artifacts activos de `sdd-portable-core-reconciliation`

### Editar

* `sdd/tools/schemas/patch.schema.json`
* `sdd/tools/validate-sdd.mjs`
* `sdd/tests/**`
* `tests/sdd-validation.test.mjs`
* `sdd/parches/*/patch.yaml` no legacy
* artifacts activos de `sdd-portable-core-reconciliation`

### Validar

* `sdd/tools/validate-sdd.mjs`
* `tests/sdd-validation.test.mjs`

### No tocar

* `sdd/parches/legacy/**`
* `src/**`
* `public/**`

---

## 6. Checklist de ejecucion

### Bloque A - Relectura de fuentes

* [x] releer el contrato final de manifest, batch y link checker en `handover.md`
* [x] releer manifests y fixtures actuales

### Bloque B - Inspeccion de estado actual

* [x] identificar todos los manifests no legacy que requieren migracion
* [x] identificar la ausencia de tests directos para validacion SDD

### Bloque C - Edicion por archivo

* [x] actualizar `patch.schema.json`
* [x] extender `validate-sdd.mjs` con timestamps, batch contract y checker de links/rutas markdown vivas
* [x] migrar manifests no legacy existentes y el manifest del propio patch
* [x] agregar fixtures de manifest y link checker
* [x] agregar `tests/sdd-validation.test.mjs`
* [x] sincronizar artifacts activos con secciones de assumptions cuando el nuevo contrato las vuelva obligatorias

### Bloque D - Registro de decisiones, hallazgos o blockers

* [x] registrar cualquier drift auxiliar detectado al auto-migrar artifacts activos
* [x] dejar blockers en `none` si todas las validaciones pasan

### Bloque E - Validacion

* [x] ejecutar `node sdd/tools/validate-sdd.mjs`
* [x] ejecutar `node sdd/tools/validate-sdd.mjs --fixtures`
* [x] ejecutar `npm test`
* [x] ejecutar `git diff --check`

### Bloque F - Cierre

* [x] actualizar checklist y resultados
* [x] marcar la fase `done`
* [x] dejar listo `sdd-close`

---

## 7. Drift detectado

* Fecha: `2026-05-17`

  * fuente esperada: contrato final reconciliado
  * diferencia encontrada: manifests, validator y artifacts activos aun reflejan el contrato anterior.
  * impacto: el sistema no puede exigir lo que ya declaro en doctrina.
  * accion: migrar tooling y artifacts no legacy de forma coordinada.
  * requiere decision: `no`

---

## 8. Hallazgos durante ejecucion

* Fecha: `2026-05-17`

  * hallazgo: el patch actual debe auto-sincronizar sus artifacts para no cerrar con un formato ya superado por la propia fase.
  * impacto: `definicion.md`, `plan.md` y los backlogs activos necesitan reflejar assumptions first-class.
  * accion: actualizar artifacts auxiliares activos al cierre de la fase.
* Fecha: `2026-05-17`

  * hallazgo: la primera version del checker tambien capturo historia textual y fixtures, fuera del alcance aprobado.
  * impacto: activaba falsos positivos sobre memoria preservada.
  * accion: limitarlo a enlaces relativos markdown vivos y excluir `legacy`, `sdd/tests/**` y artifacts cerrados no declarados como fuente viva.

---

## 9. Blockers

* [x] ninguno

---

## 10. Decisiones tomadas

* Fecha: `2026-05-17`

  * decision: integrar el link checker en `validate-sdd.mjs` y cubrirlo con fixtures + `npm test`.
  * razon: mantiene una sola entrada de validacion SDD sin abrir tooling disperso.
  * documentos o areas afectadas: `sdd/tools/validate-sdd.mjs`, `sdd/tests/**`, `tests/sdd-validation.test.mjs`

---

## 11. Validaciones

### Documentales

* [x] verificar alineacion con `docs/README.md`
* [x] verificar alineacion con contratos aplicables
* [x] verificar trazabilidad contra `tasks.md`

### Tecnicas

* [x] `node sdd/tools/validate-sdd.mjs`
* [x] `node sdd/tools/validate-sdd.mjs --fixtures`
* [x] `npm test`
* [x] `git diff --check`

### Manuales

* [x] revision manual de exclusiones del link checker

### Resultados

* Validacion:

  * comando o revision: `node sdd/tools/validate-sdd.mjs`
  * resultado esperado: `SDD repo validation passed`
  * resultado obtenido: `SDD repo validation passed`
  * estado: `pass`
  * notas: valida schema, manifests no legacy, ausencia de `docs/sdd` y links relativos vivos.
* Validacion:

  * comando o revision: `node sdd/tools/validate-sdd.mjs --fixtures`
  * resultado esperado: `SDD fixture validation passed`
  * resultado obtenido: `SDD fixture validation passed`
  * estado: `pass`
  * notas: incluye fixtures de batch valido/invalido y link checker valido/invalido.
* Validacion:

  * comando o revision: `npm test`
  * resultado esperado: suite completa en verde
  * resultado obtenido: `3` tests, `3` pass, `0` fail
  * estado: `pass`
  * notas: incorpora `tests/sdd-validation.test.mjs`.
* Validacion:

  * comando o revision: `git diff --check`
  * resultado esperado: sin whitespace errors
  * resultado obtenido: sin salida
  * estado: `pass`
  * notas: no se detectaron errores de whitespace.

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

* volver demasiado amplio el checker y activar deuda historica falsa

### Pendientes

* cierre formal con `closed_at`

---

## 14. Registro de cambios

* Fecha: `2026-05-17`

  * cambio: backlog inicial creado para tooling, tests y reconciliacion final.
  * razon: hacer verificable la arquitectura antes del cierre.
* Fecha: `2026-05-17`

  * cambio: schema, validator, fixtures, tests, manifests y artifacts activos sincronizados con el contrato final.
  * razon: convertir la arquitectura reconciliada en invariantes verificables antes del cierre.
