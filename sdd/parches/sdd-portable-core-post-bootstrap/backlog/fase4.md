# Backlog Fase 4: Validacion SDD local

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

* Change id: `sdd-portable-core-post-bootstrap`
* Fase: `4 - Validacion SDD local`
* Estado: `done`
* Ultima actualizacion: `2026-05-09`
* Owner: `paw-paw`
* Depende de:
  * `sdd/parches/sdd-portable-core-post-bootstrap/backlog/fase3.md`
  * `sdd/parches/sdd-portable-core-post-bootstrap/patch.yaml`
  * `.codex/skills/sdd-close/SKILL.md`
  * `sdd/core/**`
* Desbloquea:
  * `sdd-phase-backlog` para Fase 5, si el validador directo corre contra repo y fixtures minimos

---

## 1. Fuente de verdad aplicable

* `docs/README.md`
* `AGENTS.md`
* `sdd/core/patch-model.md`
* `sdd/core/artifact-lifecycle.md`
* `sdd/parches/sdd-portable-core-post-bootstrap/tasks.md`
* `sdd/parches/sdd-portable-core-post-bootstrap/decision.log`

Nota:

* si hay conflicto, manda la precedencia definida en `docs/README.md`
* este backlog ejecuta una sola fase
* `package.json` no se toca en esta fase

---

## 2. Objetivo de la fase

* Resultado esperado: `node sdd/tools/validate-sdd.mjs` valida estructura SDD del repo y `node sdd/tools/validate-sdd.mjs --fixtures` valida fixtures minimos.
* Razon de la fase: dar verificacion operacional antes de actualizar skills y templates.
* Cambio que queda habilitado al cerrar: Fase 5 puede cambiar skills con una validacion local disponible.

---

## 3. Precondiciones

### Documentos

* [x] Fase 3 cerrada como `done`
* [x] `patch.yaml` existe
* [x] `sdd-close` existe
* [x] core lifecycle y patch model existen

### Decisiones previas

* [x] iniciar validacion SDD como comando directo bajo `sdd/tools/`
* [x] mantener `package.json` sin cambios salvo nueva decision humana

### Estado tecnico

* [x] `sdd/tools/**` no existe antes de ejecutar
* [x] `sdd/tests/fixtures/**` no existe antes de ejecutar

---

## 4. Alcance

### Si entra

* [ ] Crear `sdd/tools/schemas/patch.schema.json`.
* [ ] Crear `sdd/tools/validate-sdd.mjs` sin dependencias nuevas.
* [ ] Crear fixtures `spec-first`, `spec-anchored`, `batch`, `legacy-read-only`, `missing-patch-yaml`, `blocked-patch`, `close`.
* [ ] Validar estructura base `sdd/`, legacy, manifest, enums, matriz, `related_docs` y cierre.
* [ ] Registrar limitaciones de validacion manual vs automatica.

### No entra

* [ ] No tocar `package.json`.
* [ ] No crear CI.
* [ ] No actualizar skills SDD para type-awareness.
* [ ] No mover templates.
* [ ] No tocar runtime Astro, `src/**`, `public/**`, routing, i18n, SEO, deployment o dependencias.

---

## 5. Archivos y superficies de trabajo

### Leer antes de editar

* `sdd/core/patch-model.md`
* `sdd/core/artifact-lifecycle.md`
* `sdd/parches/sdd-portable-core-post-bootstrap/patch.yaml`
* `sdd/parches/sdd-portable-core-post-bootstrap/tasks.md`
* `package.json`

### Editar

* `sdd/tools/schemas/patch.schema.json`
* `sdd/tools/validate-sdd.mjs`
* `sdd/tests/fixtures/**`
* `sdd/parches/sdd-portable-core-post-bootstrap/backlog/fase4.md`

### Validar

* `node sdd/tools/validate-sdd.mjs`
* `node sdd/tools/validate-sdd.mjs --fixtures`
* `git diff --check`

### No tocar

* `package.json`
* `src/**`
* `public/**`
* `.codex/skills/**`
* `.codex/agents/**`
* `sdd/parches/legacy/**`
* `docs/sdd/parches/sdd-portable-core-bootstrap/**`

---

## 6. Checklist de ejecucion

### Bloque A - Relectura de fuentes

* [x] Leer patch model y lifecycle.
* [x] Leer `package.json` y confirmar no agregar script npm.

### Bloque B - Inspeccion de estado actual

* [x] Confirmar que no existen `sdd/tools/**` ni `sdd/tests/fixtures/**`.
* [x] Confirmar estructura actual de `sdd/`.

### Bloque C - Edicion por archivo

* [x] Crear schema JSON descriptivo.
* [x] Crear validador Node sin dependencias.
* [x] Crear fixtures minimos.
* [x] No modificar `package.json`.

### Bloque D - Registro de decisiones, hallazgos o blockers

* [x] Registrar limitaciones del validador.
* [x] Registrar drift si el repo actual falla reglas planificadas.

### Bloque E - Validacion

* [x] Ejecutar `node sdd/tools/validate-sdd.mjs`.
* [x] Ejecutar `node sdd/tools/validate-sdd.mjs --fixtures`.
* [x] Ejecutar `git diff --check`.

### Bloque F - Cierre

* [x] Confirmar que el validador corre por comando directo.
* [x] Confirmar que fixtures minimos cubren matriz esperada.
* [x] Actualizar `Estado` a `done` solo si checklist, drift, validaciones y cierre estan completos.

---

## 7. Drift detectado

* Ninguno detectado al crear el backlog.

---

## 8. Hallazgos durante ejecucion

* 2026-05-09:

  * hallazgo: el validador inicial usa parser YAML minimo para el manifest y valida forma, matriz y presencia de cierre; no interpreta Markdown ni decisiones humanas.
  * impacto: cubre smoke tests operacionales, pero no reemplaza revision manual ni gates humanos.
  * accion: limitacion registrada en este backlog; type-awareness y validaciones mas profundas quedan para fases posteriores.

---

## 9. Blockers

* [x] Ninguno.

---

## 10. Decisiones tomadas

* Ninguna durante la creacion del backlog.

---

## 11. Validaciones

### Documentales

* [x] verificar que `package.json` queda intacto
* [x] verificar limitaciones manuales vs automaticas

### Tecnicas

* [x] `node sdd/tools/validate-sdd.mjs`
* [x] `node sdd/tools/validate-sdd.mjs --fixtures`
* [x] `git diff --check`

### Manuales

* [x] confirmar que el validador no reemplaza decision gates humanos

### Resultados

* Validacion:

  * comando o revision: `node sdd/tools/validate-sdd.mjs`
  * resultado esperado: repo SDD valido
  * resultado obtenido: `SDD repo validation passed`
  * estado: `pass`
  * notas: comando directo sin npm
* Validacion:

  * comando o revision: `node sdd/tools/validate-sdd.mjs --fixtures`
  * resultado esperado: fixtures minimos validan expectativas
  * resultado obtenido: `SDD fixture validation passed`
  * estado: `pass`
  * notas: cubre `spec-first`, `spec-anchored`, `batch`, `legacy-read-only`, `missing-patch-yaml`, `blocked-patch`, `close`
* Validacion:

  * comando o revision: `git diff --check`
  * resultado esperado: sin errores de whitespace
  * resultado obtenido: sin salida
  * estado: `pass`
  * notas: aplica a cambios acumulados hasta Fase 4

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

* Validador inicial valida forma, no intencion.
* Fixtures son smoke tests conceptuales, no suite formal completa.

### Pendientes

* Crear backlog de Fase 5.

---

## 14. Registro de cambios

* 2026-05-09:

  * cambio: creacion inicial del backlog de Fase 4
  * razon: preparar validacion SDD local operacional
* 2026-05-09:

  * cambio: cierre de Fase 4 como `done`
  * razon: validador directo y fixtures ejecutados correctamente
