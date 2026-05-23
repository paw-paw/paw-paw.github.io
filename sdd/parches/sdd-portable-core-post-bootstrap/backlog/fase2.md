# Backlog Fase 2: Modelo formal de patch y manifest

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

* Change id: `sdd-portable-core-post-bootstrap`
* Fase: `2 - Modelo formal de patch y manifest`
* Estado: `done`
* Ultima actualizacion: `2026-05-09`
* Owner: `paw-paw`
* Depende de:
  * `sdd/parches/sdd-portable-core-post-bootstrap/backlog/fase1.md`
  * `sdd/core/patch-model.md`
  * `sdd/core/artifact-lifecycle.md`
  * `sdd/parches/sdd-portable-core-post-bootstrap/tasks.md`
  * `sdd/parches/sdd-portable-core-post-bootstrap/decision.log`
* Desbloquea:
  * `sdd-phase-backlog` para Fase 3, si el manifest existe y no contradice artifacts activos

---

## 1. Fuente de verdad aplicable

* `docs/README.md`
* `AGENTS.md`
* `sdd/core/README.md`
* `sdd/core/patch-model.md`
* `sdd/core/artifact-lifecycle.md`
* `sdd/parches/sdd-portable-core-post-bootstrap/definicion.md`
* `sdd/parches/sdd-portable-core-post-bootstrap/plan.md`
* `sdd/parches/sdd-portable-core-post-bootstrap/tasks.md`
* `sdd/parches/sdd-portable-core-post-bootstrap/decision.log`

Nota:

* si hay conflicto, manda la precedencia definida en `docs/README.md`
* este backlog ejecuta una sola fase
* `patch.yaml` identifica y clasifica el patch; no reemplaza artifacts existentes

---

## 2. Objetivo de la fase

* Resultado esperado: `patch.yaml` existe para `sdd-portable-core-post-bootstrap`, y el core documenta campos/enums/matriz suficientes para Fase 3.
* Razon de la fase: habilitar lifecycle y cierre formal sobre una identidad de patch explicita.
* Cambio que queda habilitado al cerrar: Fase 3 puede definir cierre y `sdd-close` usando `patch.yaml` y lifecycle base.

---

## 3. Precondiciones

### Documentos

* [x] Fase 1 cerrada como `done`
* [x] `sdd/core/patch-model.md` existe
* [x] `sdd/core/artifact-lifecycle.md` existe
* [x] `tasks.md` contiene Fase 2

### Decisiones previas

* [x] no crear `patch.yaml` durante intake ya no bloquea esta fase
* [x] no hay decision abierta sobre `patch_kind`, `lifecycle` o `program_id`

### Estado tecnico

* [x] no existe `patch.yaml` antes de ejecutar Fase 2
* [x] no existe schema automatizado todavia; validacion sera manual y `git diff --check`

---

## 4. Alcance

### Si entra

* [ ] Ajustar `sdd/core/patch-model.md` si hace falta para dejar campos, enums, matriz y excepcion legacy claros.
* [ ] Crear `sdd/parches/sdd-portable-core-post-bootstrap/patch.yaml`.
* [ ] Usar `patch_kind: spec`, `lifecycle: spec-first`, `status: active` y `program_id: sdd-portable-core` salvo contradiccion encontrada.
* [ ] Mantener `related_docs` vacio o no aplicable porque `spec-first` no exige documentos vivos anclados.
* [ ] Registrar en `decision.log` la introduccion del manifest para este patch.

### No entra

* [ ] No crear schema JSON.
* [ ] No crear validador SDD.
* [ ] No modificar skills para leer `patch.yaml`.
* [ ] No hacer obligatorio `patch.yaml` para legacy ni patches anteriores.
* [ ] No tocar runtime Astro, `src/**`, `public/**`, routing, i18n, SEO, deployment, dependencias ni `package.json`.

---

## 5. Archivos y superficies de trabajo

### Leer antes de editar

* `sdd/core/patch-model.md`
* `sdd/core/artifact-lifecycle.md`
* `sdd/parches/sdd-portable-core-post-bootstrap/definicion.md`
* `sdd/parches/sdd-portable-core-post-bootstrap/plan.md`
* `sdd/parches/sdd-portable-core-post-bootstrap/tasks.md`
* `sdd/parches/sdd-portable-core-post-bootstrap/decision.log`

### Editar

* `sdd/core/patch-model.md`, solo si falta claridad necesaria
* `sdd/parches/sdd-portable-core-post-bootstrap/patch.yaml`
* `sdd/parches/sdd-portable-core-post-bootstrap/decision.log`
* `sdd/parches/sdd-portable-core-post-bootstrap/backlog/fase2.md`

### Validar

* `sdd/parches/sdd-portable-core-post-bootstrap/patch.yaml`
* `sdd/core/patch-model.md`
* `sdd/parches/sdd-portable-core-post-bootstrap/{definicion.md,plan.md,tasks.md,decision.log}`
* comandos:
  * `rg -n 'patch_kind|lifecycle|status|program_id|related_docs|schema_version|batch \\+ spec-anchored|legacy' sdd/core/patch-model.md sdd/parches/sdd-portable-core-post-bootstrap/patch.yaml`
  * `test -f sdd/parches/sdd-portable-core-post-bootstrap/patch.yaml`
  * `git diff --check`

### No tocar

* `src/**`
* `public/**`
* `package.json`
* `.codex/skills/**`
* `.codex/agents/**`
* `sdd/tools/**`
* `sdd/tests/**`
* `sdd/parches/legacy/**`
* `docs/sdd/parches/sdd-portable-core-bootstrap/**`

---

## 6. Checklist de ejecucion

### Bloque A - Relectura de fuentes

* [x] Leer `sdd/core/patch-model.md` y confirmar campos/enums/matriz.
* [x] Leer `sdd/core/artifact-lifecycle.md` y confirmar que `status` de patch no reemplaza estado de fase.
* [x] Leer artifacts del patch y confirmar `change_id`, `program_id`, scope y estado.

### Bloque B - Inspeccion de estado actual

* [x] Ejecutar `test -f sdd/parches/sdd-portable-core-post-bootstrap/patch.yaml` antes de editar y registrar si no existe.
* [x] Revisar si `sdd/core/patch-model.md` necesita ajuste minimo para retirar wording limitado a Fase 1.

### Bloque C - Edicion por archivo

* [x] Editar `sdd/core/patch-model.md` solo si hace falta para Fase 2.
* [x] Crear `patch.yaml` con campos conceptuales aprobados.
* [x] Agregar entrada en `decision.log` para manifest inicial y su impacto.
* [x] No crear schema, validador ni type-awareness de skills.

### Bloque D - Registro de decisiones, hallazgos o blockers

* [x] Registrar decision de manifest inicial en `decision.log`.
* [x] Registrar drift si el manifest no puede expresar el patch sin cambiar `tasks.md` o `plan.md`.

### Bloque E - Validacion

* [x] Ejecutar `test -f sdd/parches/sdd-portable-core-post-bootstrap/patch.yaml`.
* [x] Ejecutar `rg -n 'patch_kind|lifecycle|status|program_id|related_docs|schema_version|batch \\+ spec-anchored|legacy' sdd/core/patch-model.md sdd/parches/sdd-portable-core-post-bootstrap/patch.yaml`.
* [x] Revisar manualmente compatibilidad entre `patch.yaml`, `definicion.md`, `plan.md`, `tasks.md` y `decision.log`.
* [x] Ejecutar `git diff --check`.

### Bloque F - Cierre

* [x] Confirmar que el manifest existe.
* [x] Confirmar que Fase 3 queda desbloqueada sin crear `sdd-close`.
* [x] Actualizar `Estado` a `done` solo si checklist, drift, validaciones y cierre estan completos.
* [x] Reportar resultado.

---

## 7. Drift detectado

* Ninguno detectado durante ejecucion. El manifest pudo expresar el patch sin cambiar `definicion.md`, `plan.md` ni `tasks.md`.

---

## 8. Hallazgos durante ejecucion

* 2026-05-09:

  * hallazgo: `test -f sdd/parches/sdd-portable-core-post-bootstrap/patch.yaml` fallo antes de editar porque el manifest no existia.
  * impacto: esperado por precondicion de Fase 2; no es blocker.
  * accion: se creo `patch.yaml`.

---

## 9. Blockers

* [x] Ninguno.

---

## 10. Decisiones tomadas

* 2026-05-09:

  * decision: crear manifest inicial con `patch_kind: spec`, `lifecycle: spec-first`, `status: active`, `program_id: sdd-portable-core` y `related_docs: []`.
  * razon: coincide con `definicion.md`, `plan.md`, `tasks.md` y el modelo core.
  * documentos o areas afectadas: `patch.yaml`, `decision.log`, `sdd/core/patch-model.md`.

---

## 11. Validaciones

### Documentales

* [x] verificar matriz permitida/prohibida
* [x] verificar compatibilidad entre manifest y artifacts activos

### Tecnicas

* [x] `test -f sdd/parches/sdd-portable-core-post-bootstrap/patch.yaml`
* [x] `rg -n 'patch_kind|lifecycle|status|program_id|related_docs|schema_version|batch \\+ spec-anchored|legacy' sdd/core/patch-model.md sdd/parches/sdd-portable-core-post-bootstrap/patch.yaml`
* [x] `git diff --check`

### Manuales

* [x] confirmar que `patch.yaml` no reemplaza artifacts existentes
* [x] confirmar que legacy no recibe manifest obligatorio

### Resultados

* Validacion:

  * comando o revision: `test -f sdd/parches/sdd-portable-core-post-bootstrap/patch.yaml`
  * resultado esperado: exit code 0
  * resultado obtenido: exit code 0
  * estado: `pass`
  * notas: el manifest existe
* Validacion:

  * comando o revision: `rg -n 'patch_kind|lifecycle|status|program_id|related_docs|schema_version|batch \\+ spec-anchored|legacy' sdd/core/patch-model.md sdd/parches/sdd-portable-core-post-bootstrap/patch.yaml`
  * resultado esperado: campos del manifest y reglas del core visibles
  * resultado obtenido: hits en `patch.yaml` para `schema_version`, `program_id`, `patch_kind`, `lifecycle`, `status`, `related_docs`; hits en core para campos, legacy y matriz
  * estado: `pass`
  * notas: `batch + spec-anchored` permanece prohibido en la matriz del core
* Validacion:

  * comando o revision: revision manual de compatibilidad
  * resultado esperado: manifest no contradice artifacts activos
  * resultado obtenido: `change_id`, `program_id`, `patch_kind: spec`, `lifecycle: spec-first` y `status: active` son compatibles con `definicion.md`, `plan.md`, `tasks.md` y `decision.log`
  * estado: `pass`
  * notas: `related_docs: []` es valido porque no es `spec-anchored`
* Validacion:

  * comando o revision: `git diff --check`
  * resultado esperado: sin errores de whitespace
  * resultado obtenido: sin salida
  * estado: `pass`
  * notas: aplica a cambios acumulados hasta Fase 2

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

* Confundir `patch_kind` con `lifecycle`.
* Hacer obligatorio el manifest antes de que las skills sean type-aware.

### Pendientes

* Crear backlog de Fase 3.

---

## 14. Registro de cambios

* 2026-05-09:

  * cambio: creacion inicial del backlog de Fase 2
  * razon: preparar la introduccion controlada de `patch.yaml`
* 2026-05-09:

  * cambio: cierre de Fase 2 como `done`
  * razon: manifest creado, decision registrada y validaciones completadas
