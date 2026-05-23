# Backlog Fase 6: Templates finales y superficie transicional

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

* Change id: `sdd-portable-core-post-bootstrap`
* Fase: `6 - Templates finales y superficie transicional`
* Estado: `done`
* Ultima actualizacion: `2026-05-09`
* Owner: `paw-paw`
* Depende de:
  * `sdd/parches/sdd-portable-core-post-bootstrap/backlog/fase5.md`
  * `.codex/skills/sdd-*/SKILL.md`
  * `sdd/templates/README.md`
* Desbloquea:
  * `sdd-phase-backlog` para Fase 7, si cada template tiene destino o rol explicito

---

## 1. Fuente de verdad aplicable

* `docs/README.md`
* `AGENTS.md`
* `sdd/templates/README.md`
* `sdd/parches/sdd-portable-core-post-bootstrap/tasks.md`
* `sdd/parches/sdd-portable-core-post-bootstrap/decision.log`

Nota:

* si hay conflicto, manda la precedencia definida en `docs/README.md`
* este backlog ejecuta una sola fase
* no redefinir behavior type-aware ya cerrado en Fase 5

---

## 2. Objetivo de la fase

* Resultado esperado: templates de salida viven como assets de skills y `sdd/templates/README.md` queda clasificado como transicional.
* Razon de la fase: evitar que `sdd/templates/**` siga siendo fuente final por inercia.
* Cambio que queda habilitado al cerrar: Fase 7 puede auditar writers contra skills/templates estabilizados.

---

## 3. Precondiciones

### Documentos

* [x] Fase 5 cerrada como `done`
* [x] skills SDD ya son type-aware

### Decisiones previas

* [x] templates finales deben vivir como assets de skills cuando corresponda

### Estado tecnico

* [x] `sdd/templates/**` existe

---

## 4. Alcance

### Si entra

* [ ] Duplicar templates de salida hacia `.codex/skills/*/assets/`.
* [ ] Actualizar skills para preferir assets propios.
* [ ] Mantener `sdd/templates/**` como referencia transicional, no fuente final.
* [ ] Actualizar `sdd/templates/README.md` con tabla de destino/rol.

### No entra

* [ ] No borrar `sdd/templates/**`.
* [ ] No redefinir type-awareness.
* [ ] No tocar runtime Astro, `src/**`, `public/**`, routing, i18n, SEO, deployment, dependencias ni `package.json`.

---

## 5. Archivos y superficies de trabajo

### Leer antes de editar

* `sdd/templates/**`
* `.codex/skills/sdd-*/SKILL.md`

### Editar

* `.codex/skills/sdd-intake/assets/definicion.md`
* `.codex/skills/sdd-plan/assets/plan.md`
* `.codex/skills/sdd-tasks/assets/tasks.md`
* `.codex/skills/sdd-phase-backlog/assets/backlog-faseN.md`
* `.codex/skills/sdd-intake/assets/decision.log`
* `.codex/skills/sdd-sync-drift/assets/decision.log`
* `.codex/skills/sdd-*/SKILL.md`, solo referencias de template
* `sdd/templates/README.md`
* `sdd/parches/sdd-portable-core-post-bootstrap/backlog/fase6.md`

### Validar

* `rg -n 'sdd/templates|assets/' .codex/skills/sdd-* sdd/templates/README.md`
* `node sdd/tools/validate-sdd.mjs`
* `git diff --check`

### No tocar

* `package.json`
* `src/**`
* `public/**`
* `sdd/tools/**`

---

## 6. Checklist de ejecucion

### Bloque A - Relectura de fuentes

* [x] Leer templates actuales y referencias en skills.

### Bloque B - Inspeccion de estado actual

* [x] Ejecutar `rg -n 'sdd/templates' .codex/skills/sdd-* sdd/templates/README.md`.

### Bloque C - Edicion por archivo

* [x] Crear assets de templates por skill.
* [x] Actualizar referencias de skills hacia assets propios.
* [x] Actualizar `sdd/templates/README.md`.

### Bloque D - Registro de decisiones, hallazgos o blockers

* [x] Registrar hallazgo si queda referencia transicional.

### Bloque E - Validacion

* [x] Ejecutar `rg -n 'sdd/templates|assets/' .codex/skills/sdd-* sdd/templates/README.md`.
* [x] Ejecutar `node sdd/tools/validate-sdd.mjs`.
* [x] Ejecutar `git diff --check`.

### Bloque F - Cierre

* [x] Confirmar que Fase 7 queda desbloqueada.
* [x] Actualizar `Estado` a `done` solo si checklist, drift, validaciones y cierre estan completos.

---

## 7. Drift detectado

* Ninguno detectado al crear el backlog.

---

## 8. Hallazgos durante ejecucion

* 2026-05-09:

  * hallazgo: `sdd/templates/**` se conserva con referencias transicionales explicitas.
  * impacto: no hay borrado ni migracion destructiva; las skills prefieren assets propios.
  * accion: `sdd/templates/README.md` clasifica destino y rol de cada template.

---

## 9. Blockers

* [x] Ninguno.

---

## 10. Decisiones tomadas

* Ninguna durante la creacion del backlog.

---

## 11. Validaciones

### Documentales

* [x] verificar destino o rol de cada template

### Tecnicas

* [x] `rg -n 'sdd/templates|assets/' .codex/skills/sdd-* sdd/templates/README.md`
* [x] `node sdd/tools/validate-sdd.mjs`
* [x] `git diff --check`

### Manuales

* [x] confirmar que `sdd/templates/**` no fue borrado

### Resultados

* Validacion:

  * comando o revision: `rg -n 'sdd/templates|assets/' .codex/skills/sdd-* sdd/templates/README.md`
  * resultado esperado: skills prefieren assets y `sdd/templates/**` queda transicional
  * resultado obtenido: hits en assets de skills y notas transicionales de `sdd/templates/**`
  * estado: `pass`
  * notas: no se borraron templates transicionales
* Validacion:

  * comando o revision: `node sdd/tools/validate-sdd.mjs`
  * resultado esperado: repo SDD valido
  * resultado obtenido: `SDD repo validation passed`
  * estado: `pass`
  * notas: assets de skills no rompen estructura SDD
* Validacion:

  * comando o revision: `git diff --check`
  * resultado esperado: sin errores de whitespace
  * resultado obtenido: sin salida
  * estado: `pass`
  * notas: aplica a cambios acumulados hasta Fase 6

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

* Duplicar templates sin dejar claro el rol transicional de `sdd/templates/**`.

### Pendientes

* Crear backlog de Fase 7.

---

## 14. Registro de cambios

* 2026-05-09:

  * cambio: creacion inicial del backlog de Fase 6
  * razon: preparar resolucion de templates finales
* 2026-05-09:

  * cambio: cierre de Fase 6 como `done`
  * razon: templates duplicados a assets, rol transicional documentado y validaciones completadas
