# Backlog Fase 5: Type-awareness de skills SDD

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

* Change id: `sdd-portable-core-post-bootstrap`
* Fase: `5 - Type-awareness de skills SDD`
* Estado: `done`
* Ultima actualizacion: `2026-05-09`
* Owner: `paw-paw`
* Depende de:
  * `sdd/parches/sdd-portable-core-post-bootstrap/backlog/fase4.md`
  * `sdd/parches/sdd-portable-core-post-bootstrap/patch.yaml`
  * `sdd/tools/validate-sdd.mjs`
  * `.codex/skills/sdd-close/SKILL.md`
* Desbloquea:
  * `sdd-phase-backlog` para Fase 6, si las skills SDD leen o respetan `patch.yaml`

---

## 1. Fuente de verdad aplicable

* `docs/README.md`
* `AGENTS.md`
* `sdd/core/patch-model.md`
* `sdd/core/artifact-lifecycle.md`
* `sdd/core/decision-drift-policy.md`
* `sdd/parches/sdd-portable-core-post-bootstrap/tasks.md`
* `sdd/parches/sdd-portable-core-post-bootstrap/decision.log`

Nota:

* si hay conflicto, manda la precedencia definida en `docs/README.md`
* este backlog ejecuta una sola fase
* no mover templates en esta fase

---

## 2. Objetivo de la fase

* Resultado esperado: skills SDD documentan como leer `patch.yaml`, cuando la ausencia del manifest bloquea y que limites mantienen.
* Razon de la fase: preparar workflows para manifest antes de resolver templates finales.
* Cambio que queda habilitado al cerrar: Fase 6 puede mover o degradar templates sin mezclar comportamiento type-aware.

---

## 3. Precondiciones

### Documentos

* [x] Fase 4 cerrada como `done`
* [x] validador SDD local disponible
* [x] `sdd-close` existe

### Decisiones previas

* [x] falta de `patch.yaml` en patch nuevo se vuelve stop condition salvo intake o legacy
* [x] Fase 5 no mueve templates

### Estado tecnico

* [x] skills SDD existen bajo `.codex/skills/`

---

## 4. Alcance

### Si entra

* [ ] Actualizar skills SDD para leer `patch.yaml` si existe.
* [ ] Definir stop condition por falta de manifest para patches formales no legacy.
* [ ] Mantener planning skills sin backlogs ni ejecucion.
* [ ] Registrar decision de comportamiento type-aware.

### No entra

* [ ] No mover templates.
* [ ] No modificar assets de templates salvo `sdd-close` ya creado.
* [ ] No cambiar validador salvo bug bloqueante.
* [ ] No tocar runtime Astro, `src/**`, `public/**`, routing, i18n, SEO, deployment, dependencias ni `package.json`.

---

## 5. Archivos y superficies de trabajo

### Leer antes de editar

* `.codex/skills/sdd-*/SKILL.md`
* `sdd/core/patch-model.md`
* `sdd/parches/sdd-portable-core-post-bootstrap/decision.log`

### Editar

* `.codex/skills/sdd-intake/SKILL.md`
* `.codex/skills/sdd-router/SKILL.md`
* `.codex/skills/sdd-plan/SKILL.md`
* `.codex/skills/sdd-tasks/SKILL.md`
* `.codex/skills/sdd-phase-backlog/SKILL.md`
* `.codex/skills/sdd-execute-phase/SKILL.md`
* `.codex/skills/sdd-sync-drift/SKILL.md`
* `.codex/skills/sdd-close/SKILL.md`
* `sdd/parches/sdd-portable-core-post-bootstrap/decision.log`
* `sdd/parches/sdd-portable-core-post-bootstrap/backlog/fase5.md`

### Validar

* `rg -n 'patch.yaml|sdd/templates|sdd-close|backlog/faseN.md' .codex/skills/sdd-*`
* `node sdd/tools/validate-sdd.mjs`
* `git diff --check`

### No tocar

* `sdd/templates/**`
* `package.json`
* `src/**`
* `public/**`

---

## 6. Checklist de ejecucion

### Bloque A - Relectura de fuentes

* [x] Leer headings de skills SDD actuales.
* [x] Leer patch model.

### Bloque B - Inspeccion de estado actual

* [x] Ejecutar `rg -n 'patch.yaml|sdd/templates|sdd-close|backlog/faseN.md' .codex/skills/sdd-*` antes o despues de editar para revisar cobertura.

### Bloque C - Edicion por archivo

* [x] Agregar awareness de manifest a cada skill SDD.
* [x] Mantener excepcion de `sdd-intake` y legacy.
* [x] Mantener planning skills sin ejecucion.
* [x] Registrar decision en `decision.log`.

### Bloque D - Registro de decisiones, hallazgos o blockers

* [x] Registrar cambio de comportamiento type-aware en `decision.log`.

### Bloque E - Validacion

* [x] Ejecutar `rg -n 'patch.yaml|sdd/templates|sdd-close|backlog/faseN.md' .codex/skills/sdd-*`.
* [x] Ejecutar `node sdd/tools/validate-sdd.mjs`.
* [x] Ejecutar `git diff --check`.

### Bloque F - Cierre

* [x] Confirmar que Fase 6 queda desbloqueada.
* [x] Actualizar `Estado` a `done` solo si checklist, drift, validaciones y cierre estan completos.

---

## 7. Drift detectado

* Ninguno detectado al crear el backlog.

---

## 8. Hallazgos durante ejecucion

* 2026-05-09:

  * hallazgo: las skills siguen referenciando `sdd/templates/**`, como estaba previsto para Fase 5.
  * impacto: no bloquea Fase 5; Fase 6 resuelve destino o rol de templates.
  * accion: no se movieron templates en esta fase.

---

## 9. Blockers

* [x] Ninguno.

---

## 10. Decisiones tomadas

* 2026-05-09:

  * decision: agregar manifest awareness a skills SDD existentes.
  * razon: las transiciones deben respetar `patch.yaml` antes de operar sobre patches formales.
  * documentos o areas afectadas: `.codex/skills/sdd-*/SKILL.md`, `decision.log`.

---

## 11. Validaciones

### Documentales

* [x] verificar que skills de planning no creen backlogs ni ejecuten cambios

### Tecnicas

* [x] `rg -n 'patch.yaml|sdd/templates|sdd-close|backlog/faseN.md' .codex/skills/sdd-*`
* [x] `node sdd/tools/validate-sdd.mjs`
* [x] `git diff --check`

### Manuales

* [x] confirmar que templates no se movieron

### Resultados

* Validacion:

  * comando o revision: `rg -n 'patch.yaml|sdd/templates|sdd-close|backlog/faseN.md' .codex/skills/sdd-*`
  * resultado esperado: manifest awareness visible en skills SDD y referencias a templates aun existentes
  * resultado obtenido: hits en todas las skills SDD; templates siguen referenciados para Fase 6
  * estado: `pass`
  * notas: planning skills mantienen limites de no crear backlogs ni ejecutar
* Validacion:

  * comando o revision: `node sdd/tools/validate-sdd.mjs`
  * resultado esperado: repo SDD valido
  * resultado obtenido: `SDD repo validation passed`
  * estado: `pass`
  * notas: cambios de skills no rompen estructura SDD
* Validacion:

  * comando o revision: `git diff --check`
  * resultado esperado: sin errores de whitespace
  * resultado obtenido: sin salida
  * estado: `pass`
  * notas: aplica a cambios acumulados hasta Fase 5

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

* Romper workflows SDD actuales por exigir manifest a artifacts transicionales.
* Mezclar type-awareness con templates finales.

### Pendientes

* Crear backlog de Fase 6.

---

## 14. Registro de cambios

* 2026-05-09:

  * cambio: creacion inicial del backlog de Fase 5
  * razon: preparar type-awareness de skills SDD
* 2026-05-09:

  * cambio: cierre de Fase 5 como `done`
  * razon: skills SDD actualizadas y validaciones completadas
