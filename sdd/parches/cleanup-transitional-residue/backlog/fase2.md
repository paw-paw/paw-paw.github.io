# Backlog Fase 2: Limpieza SDD estructural

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

* Change id: `cleanup-transitional-residue`
* Fase: `2 - Limpieza SDD estructural`
* Estado: `done`
* Ultima actualizacion: 2026-05-09
* Owner: usuario
* Depende de: Fase 1
* Desbloquea: Fase 3

Nota:

* No marcar `done` si quedan checks de cierre abiertos, salvo que esten explicitamente diferidos.

---

## 1. Fuente de verdad aplicable

* `docs/README.md`
* `AGENTS.md`
* `docs/AGENTS.md`
* `sdd/parches/cleanup-transitional-residue/patch.yaml`
* `sdd/parches/cleanup-transitional-residue/definicion.md`
* `sdd/parches/cleanup-transitional-residue/plan.md`
* `sdd/parches/cleanup-transitional-residue/tasks.md`
* `sdd/parches/cleanup-transitional-residue/decision.log`
* documentos auxiliares aplicables:
  * `sdd/README.md`
  * `sdd/core/README.md`
  * `sdd/parches/README.md`
  * `.codex/skills/sdd-*/SKILL.md`
  * `sdd/tools/validate-sdd.mjs`

Nota:

* si hay conflicto, manda la precedencia definida en `docs/README.md`
* este backlog ejecuta una sola fase
* si aparece drift contra `plan.md`, `tasks.md` o contratos aplicables, registrarlo antes de resolverlo

---

## 2. Objetivo de la fase

* Resultado esperado: `docs/sdd/**` deja de existir como ruta activa, `sdd/templates/**` queda eliminado, y referencias vivas se actualizan.
* Razon de la fase: retirar superficies transicionales SDD que el usuario aprobo cerrar.
* Cambio que queda habilitado al cerrar: Fase 3 puede limpiar runtime/i18n/drift sin rutas SDD transicionales vivas.

---

## 3. Precondiciones

### Documentos

* [x] `definicion.md` vigente
* [x] `plan.md` vigente
* [x] `tasks.md` con la fase seleccionada
* [x] contratos aplicables revisados

### Decisiones previas

* [x] usuario aprobo mover bootstrap a legacy
* [x] usuario aprobo eliminar `sdd/templates/**`
* [x] usuario aprobo no tocar `sdd/tests/fixtures/**`

### Estado tecnico

* [x] `patch.yaml` existe
* [x] `docs/sdd/parches/sdd-portable-core-bootstrap/**` existe antes de ejecutar
* [x] `sdd/templates/**` existe antes de ejecutar

---

## 4. Alcance

### Si entra

* [x] mover `docs/sdd/parches/sdd-portable-core-bootstrap/**` a `sdd/parches/legacy/sdd-portable-core-bootstrap/**`
* [x] eliminar `sdd/templates/**`
* [x] actualizar docs vivos que referencien la excepcion `docs/sdd` o `sdd/templates`
* [x] actualizar skills SDD que mencionen `sdd/templates`
* [x] actualizar `sdd/tools/validate-sdd.mjs`
* [x] actualizar tests vivos que lean rutas `docs/sdd` obsoletas

### No entra

* [ ] tocar `sdd/tests/fixtures/**`
* [ ] deduplicar imagenes
* [ ] eliminar `src/i18n/de.json`
* [ ] eliminar `src/scripts/theme.js`
* [ ] corregir drift de asset names

---

## 5. Archivos y superficies de trabajo

### Leer antes de editar

* `docs/README.md`
* `docs/AGENTS.md`
* `sdd/README.md`
* `sdd/core/README.md`
* `sdd/parches/README.md`
* `.codex/skills/sdd-*/SKILL.md`
* `sdd/tools/validate-sdd.mjs`
* `tests/public-release-closure.test.mjs`

### Editar

* `docs/sdd/parches/sdd-portable-core-bootstrap/**` mediante movimiento
* `sdd/parches/legacy/sdd-portable-core-bootstrap/**` mediante movimiento
* `sdd/templates/**` mediante eliminacion
* `docs/README.md`
* `docs/AGENTS.md`
* `sdd/README.md`
* `sdd/core/README.md`
* `sdd/parches/README.md`
* `.codex/skills/sdd-intake/SKILL.md`
* `.codex/skills/sdd-plan/SKILL.md`
* `.codex/skills/sdd-tasks/SKILL.md`
* `.codex/skills/sdd-phase-backlog/SKILL.md`
* `.codex/skills/sdd-execute-phase/SKILL.md`
* `.codex/skills/sdd-sync-drift/SKILL.md`
* `sdd/tools/validate-sdd.mjs`
* `tests/public-release-closure.test.mjs`
* `sdd/parches/cleanup-transitional-residue/backlog/fase2.md`

### Validar

* `sdd/tools/validate-sdd.mjs`
* `tests/public-release-closure.test.mjs`
* busquedas `rg` dirigidas

### No tocar

* `sdd/tests/fixtures/**`
* `src/assets/**`
* `src/i18n/**`
* `src/scripts/**`

---

## 6. Checklist de ejecucion

### Bloque A - Relectura de fuentes

* [x] Leer `patch.yaml`, `plan.md`, `tasks.md`, `decision.log`.
* [x] Leer docs y skills listados en "Leer antes de editar".

### Bloque B - Inspeccion de estado actual

* [x] Ejecutar `find docs/sdd -maxdepth 5 -type f | sort`.
* [x] Ejecutar `find sdd/templates -maxdepth 2 -type f | sort`.
* [x] Ejecutar `rg` dirigido para referencias vivas a `docs/sdd` y `sdd/templates`.

### Bloque C - Edicion por archivo

* [x] Mover `docs/sdd/parches/sdd-portable-core-bootstrap/` a `sdd/parches/legacy/sdd-portable-core-bootstrap/`.
* [x] Eliminar directorios vacios `docs/sdd/parches` y `docs/sdd` si quedan vacios.
* [x] Eliminar `sdd/templates/**`.
* [x] Actualizar `docs/README.md` para quitar `sdd/templates/**` del mapa vivo y describir `docs/sdd` como no existente esperado.
* [x] Actualizar `docs/AGENTS.md` para quitar la excepcion bootstrap bajo `docs/sdd`.
* [x] Actualizar `sdd/README.md`, `sdd/core/README.md`, `sdd/parches/README.md`.
* [x] Actualizar skills SDD para no mencionar `sdd/templates` como copia transicional.
* [x] Actualizar `sdd/tools/validate-sdd.mjs` para no requerir `sdd/templates` ni permitir `docs/sdd`.
* [x] Actualizar `tests/public-release-closure.test.mjs` para leer `sdd/parches/legacy/sprint-2/roadmap.md`.

### Bloque D - Registro de decisiones, hallazgos o blockers

* [x] Registrar finding si quedan referencias historicas aceptadas.
* [x] Registrar blocker si `docs/sdd` no puede moverse limpiamente.

### Bloque E - Validacion

* [x] Ejecutar `rg -n 'sdd/templates|docs/sdd/parches/sdd-portable-core-bootstrap|docs/sdd/' AGENTS.md docs sdd .codex/skills tests --glob '!sdd/parches/legacy/**' --glob '!sdd/parches/cleanup-transitional-residue/**'`.
* [x] Ejecutar `node sdd/tools/validate-sdd.mjs`.
* [x] Ejecutar `git diff --check`.

### Bloque F - Cierre

* [x] Confirmar que `sdd/tests/fixtures/**` no fue tocado.
* [x] Confirmar que Fase 3 queda desbloqueada.
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

  * hallazgo: `docs/sdd/` y `sdd/templates/` ya no existen; el bootstrap quedo bajo `sdd/parches/legacy/sdd-portable-core-bootstrap/`.
  * impacto: la ruta SDD viva queda concentrada en `sdd/` y `sdd/parches/`.
  * accion: continuar con Fase 3.

* Fecha: 2026-05-09

  * hallazgo: pueden quedar referencias historicas a `docs/sdd/...` dentro de `sdd/parches/legacy/**` y patches SDD cerrados.
  * impacto: no bloquea porque el alcance preserva memoria historica y no reescribe legacy.
  * accion: excluir historia en validaciones dirigidas y reportarlo como residual esperado.

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
* [x] verificar alineacion con contratos aplicables
* [x] verificar trazabilidad contra `tasks.md`

### Tecnicas

* [x] `node sdd/tools/validate-sdd.mjs`
* [x] `git diff --check`

### Manuales

* [x] revision manual de que `sdd/tests/fixtures/**` no fue tocado

### Resultados

* Validacion:

  * comando o revision: `test ! -e docs/sdd && test ! -e sdd/templates && test -d sdd/parches/legacy/sdd-portable-core-bootstrap`
  * resultado esperado: `docs/sdd` ausente, `sdd/templates` ausente, bootstrap en legacy.
  * resultado obtenido: `docs/sdd absent`; `sdd/templates absent`; `bootstrap in legacy`
  * estado: `pass`
  * notas:

* Validacion:

  * comando o revision: `rg -n 'sdd/templates|docs/sdd/parches/sdd-portable-core-bootstrap' AGENTS.md docs sdd .codex/skills tests --glob '!sdd/parches/legacy/**' --glob '!sdd/parches/cleanup-transitional-residue/**' --glob '!sdd/parches/sdd-portable-core-post-bootstrap/**'`
  * resultado esperado: sin referencias vivas a templates o bootstrap transicional.
  * resultado obtenido: sin salida
  * estado: `pass`
  * notas: se excluyeron legacy, el patch actual y el patch SDD post-bootstrap cerrado.

* Validacion:

  * comando o revision: `node sdd/tools/validate-sdd.mjs`
  * resultado esperado: validacion SDD sin errores.
  * resultado obtenido: `SDD repo validation passed`
  * estado: `pass`
  * notas:

* Validacion:

  * comando o revision: `git diff --check`
  * resultado esperado: sin errores de whitespace.
  * resultado obtenido: sin salida
  * estado: `pass`
  * notas:

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

* referencias a `docs/sdd` dentro de `docs/governance/decision-log.md` pueden ser historicas y no deben forzar reescritura masiva.

### Pendientes

* Fase 3 limpia i18n, script y drift documental de assets.

---

## 14. Registro de cambios

* Fecha: 2026-05-09

  * cambio: creacion inicial del backlog de Fase 2
  * razon: preparar limpieza SDD estructural

* Fecha: 2026-05-09

  * cambio: cierre de Fase 2 como `done`
  * razon: rutas transicionales retiradas y validaciones de fase en pass
