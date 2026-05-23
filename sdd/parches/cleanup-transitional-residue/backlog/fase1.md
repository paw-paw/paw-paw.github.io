# Backlog Fase 1: Manifest formal del patch

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

* Change id: `cleanup-transitional-residue`
* Fase: `1 - Manifest formal del patch`
* Estado: `done`
* Ultima actualizacion: 2026-05-09
* Owner: usuario
* Depende de: `definicion.md`, `plan.md`, `tasks.md`, `decision.log`
* Desbloquea: Fase 2

Nota:

* No marcar `done` si quedan checks de cierre abiertos, salvo que esten explicitamente diferidos.

---

## 1. Fuente de verdad aplicable

* `docs/README.md`
* `AGENTS.md`
* `sdd/parches/cleanup-transitional-residue/definicion.md`
* `sdd/parches/cleanup-transitional-residue/plan.md`
* `sdd/parches/cleanup-transitional-residue/tasks.md`
* `sdd/parches/cleanup-transitional-residue/decision.log`
* documentos auxiliares aplicables:
  * `sdd/core/patch-model.md`
  * `sdd/tools/validate-sdd.mjs`

Nota:

* si hay conflicto, manda la precedencia definida en `docs/README.md`
* este backlog ejecuta una sola fase
* si aparece drift contra `plan.md`, `tasks.md` o contratos aplicables, registrarlo antes de resolverlo

---

## 2. Objetivo de la fase

* Resultado esperado: `patch.yaml` existe y declara la identidad formal del patch.
* Razon de la fase: los patches formales no legacy creados despues del modelo de manifest necesitan `patch.yaml` antes de ejecutar fases posteriores.
* Cambio que queda habilitado al cerrar: Fase 2 puede ejecutarse con manifest presente.

---

## 3. Precondiciones

### Documentos

* [x] `definicion.md` vigente
* [x] `plan.md` vigente
* [x] `tasks.md` con la fase seleccionada
* [x] contratos aplicables revisados

### Decisiones previas

* [x] decision de crear manifest incluida en `plan.md` y `tasks.md`

### Estado tecnico

* [x] `patch.yaml` no existe antes de ejecutar
* [x] `sdd/core/patch-model.md` existe

---

## 4. Alcance

### Si entra

* [x] crear `sdd/parches/cleanup-transitional-residue/patch.yaml`
* [x] validar campos minimos del manifest

### No entra

* [ ] mover `docs/sdd/**`
* [ ] eliminar `sdd/templates/**`
* [ ] editar runtime, tests o docs contractuales

---

## 5. Archivos y superficies de trabajo

### Leer antes de editar

* `sdd/core/patch-model.md`
* `sdd/parches/cleanup-transitional-residue/definicion.md`
* `sdd/parches/cleanup-transitional-residue/plan.md`
* `sdd/parches/cleanup-transitional-residue/tasks.md`

### Editar

* `sdd/parches/cleanup-transitional-residue/patch.yaml`
* `sdd/parches/cleanup-transitional-residue/backlog/fase1.md`

### Validar

* `sdd/tools/validate-sdd.mjs`

### No tocar

* `docs/**`
* `src/**`
* `sdd/templates/**`
* `sdd/tests/fixtures/**`

---

## 6. Checklist de ejecucion

### Bloque A - Relectura de fuentes

* [x] Leer `sdd/core/patch-model.md` con foco en campos requeridos.
* [x] Leer `definicion.md`, `plan.md` y `tasks.md` para confirmar `change_id`, lifecycle y related docs.

### Bloque B - Inspeccion de estado actual

* [x] Confirmar que `sdd/parches/cleanup-transitional-residue/patch.yaml` no existe.

### Bloque C - Edicion por archivo

* [x] Crear `patch.yaml` con `schema_version`, `change_id`, `program_id`, `patch_kind`, `lifecycle`, `status` y `related_docs`.
* [x] Usar `patch_kind: spec`, `lifecycle: spec-anchored`, `status: active`.
* [x] Incluir related docs que cubran docs, SDD core, skills, runtime i18n y validacion.

### Bloque D - Registro de decisiones, hallazgos o blockers

* [x] Registrar finding si el validador no puede correr antes de fases posteriores.
* [x] Registrar blocker si el manifest contradice `sdd/core/patch-model.md`.

### Bloque E - Validacion

* [x] Ejecutar `node sdd/tools/validate-sdd.mjs`.
* [x] Registrar resultado real de la validacion.

### Bloque F - Cierre

* [x] Confirmar que la fase queda lista para Fase 2.
* [x] Marcar checklist y cierre de fase.

---

## 7. Drift detectado

* Fecha:

  * fuente esperada:
  * diferencia encontrada:
  * impacto:
  * accion:
  * requiere decision: `si` | `no`

---

## 8. Hallazgos durante ejecucion

* Fecha:

  * hallazgo:
  * impacto:
  * accion:

* Fecha: 2026-05-09

  * hallazgo: el validador SDD corre correctamente despues de crear `patch.yaml`.
  * impacto: Fase 2 puede ejecutarse con manifest formal presente.
  * accion: continuar con limpieza SDD estructural.

---

## 9. Blockers

* [x] ninguno

---

## 10. Decisiones tomadas

* Fecha:

  * decision:
  * razon:
  * documentos o areas afectadas:

---

## 11. Validaciones

### Documentales

* [x] verificar alineacion con `docs/README.md`
* [x] verificar alineacion con `sdd/core/patch-model.md`
* [x] verificar trazabilidad contra `tasks.md`

### Tecnicas

* [x] `node sdd/tools/validate-sdd.mjs`

### Manuales

* [x] revision manual de campos del manifest

### Resultados

* Validacion:

  * comando o revision: `node sdd/tools/validate-sdd.mjs`
  * resultado esperado: validacion SDD sin errores.
  * resultado obtenido: `SDD repo validation passed`
  * estado: `pass`
  * notas: el manifest nuevo satisface campos requeridos y matriz permitida.

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

* `node sdd/tools/validate-sdd.mjs` puede fallar por residuos que seran resueltos en Fase 2; si pasa eso, registrar el fallo como esperado y no cerrar como validacion final del patch.

### Pendientes

* ejecutar Fase 2 despues de cerrar esta fase.

---

## 14. Registro de cambios

* Fecha: 2026-05-09

  * cambio: creacion inicial del backlog de Fase 1
  * razon: preparar ejecucion controlada del manifest formal

* Fecha: 2026-05-09

  * cambio: cierre de Fase 1 como `done`
  * razon: `patch.yaml` fue creado y validado correctamente
