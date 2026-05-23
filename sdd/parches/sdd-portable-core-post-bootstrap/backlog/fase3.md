# Backlog Fase 3: Lifecycle, cierre y sdd-close

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

* Change id: `sdd-portable-core-post-bootstrap`
* Fase: `3 - Lifecycle, cierre y sdd-close`
* Estado: `done`
* Ultima actualizacion: `2026-05-09`
* Owner: `paw-paw`
* Depende de:
  * `sdd/parches/sdd-portable-core-post-bootstrap/backlog/fase2.md`
  * `sdd/parches/sdd-portable-core-post-bootstrap/patch.yaml`
  * `sdd/core/artifact-lifecycle.md`
  * `sdd/core/decision-drift-policy.md`
  * `sdd/parches/sdd-portable-core-post-bootstrap/decision.log`
* Desbloquea:
  * `sdd-phase-backlog` para Fase 4, si `sdd-close` existe y el cierre formal esta especificado

---

## 1. Fuente de verdad aplicable

* `docs/README.md`
* `AGENTS.md`
* `sdd/core/README.md`
* `sdd/core/artifact-lifecycle.md`
* `sdd/core/decision-drift-policy.md`
* `sdd/core/patch-model.md`
* `sdd/parches/sdd-portable-core-post-bootstrap/patch.yaml`
* `sdd/parches/sdd-portable-core-post-bootstrap/tasks.md`
* `sdd/parches/sdd-portable-core-post-bootstrap/decision.log`
* `/home/pawpaw/.codex/skills/.system/skill-creator/SKILL.md`

Nota:

* si hay conflicto, manda la precedencia definida en `docs/README.md`
* este backlog ejecuta una sola fase
* `sdd-close` no se trata como skill activa hasta que exista

---

## 2. Objetivo de la fase

* Resultado esperado: cierre formal documentado en el core, skill `.codex/skills/sdd-close/SKILL.md` creada y asset/template de `cierre.md` disponible.
* Razon de la fase: habilitar cierre de patches antes de validacion SDD local y type-awareness de skills.
* Cambio que queda habilitado al cerrar: Fase 4 puede validar estructura, manifest y cierre.

---

## 3. Precondiciones

### Documentos

* [x] Fase 2 cerrada como `done`
* [x] `patch.yaml` existe
* [x] `sdd/core/artifact-lifecycle.md` existe
* [x] `sdd/core/decision-drift-policy.md` existe
* [x] decision de crear `sdd-close` mediante `skill-creator` registrada

### Decisiones previas

* [x] crear `sdd-close` mediante `skill-creator`
* [x] mantener bootstrap transicional intacto hasta Fase 7

### Estado tecnico

* [x] `.codex/skills/sdd-close/` no existe antes de ejecutar
* [x] `skill-creator` disponible como skill de sistema

---

## 4. Alcance

### Si entra

* [ ] Definir niveles de cierre en `sdd/core/artifact-lifecycle.md`.
* [ ] Definir responsabilidades de `decision.log` vs `cierre.md` en core.
* [ ] Crear `.codex/skills/sdd-close/` con `skill-creator`.
* [ ] Escribir `.codex/skills/sdd-close/SKILL.md` como workflow de cierre, no como skill activa retroactiva.
* [ ] Crear asset/template `.codex/skills/sdd-close/assets/cierre.md`.
* [ ] Registrar decision o hallazgo si el cierre requiere modificar una fuente viva.

### No entra

* [ ] No cerrar este patch todavia.
* [ ] No mover ni cerrar `docs/sdd/parches/sdd-portable-core-bootstrap/**`.
* [ ] No crear validador, schema ni fixtures.
* [ ] No actualizar todas las skills SDD para type-awareness.
* [ ] No tocar runtime Astro, `src/**`, `public/**`, routing, i18n, SEO, deployment, dependencias ni `package.json`.

---

## 5. Archivos y superficies de trabajo

### Leer antes de editar

* `sdd/core/artifact-lifecycle.md`
* `sdd/core/decision-drift-policy.md`
* `sdd/core/patch-model.md`
* `sdd/parches/sdd-portable-core-post-bootstrap/tasks.md`
* `sdd/parches/sdd-portable-core-post-bootstrap/decision.log`
* `/home/pawpaw/.codex/skills/.system/skill-creator/SKILL.md`

### Editar

* `sdd/core/artifact-lifecycle.md`
* `sdd/core/decision-drift-policy.md`
* `.codex/skills/sdd-close/SKILL.md`
* `.codex/skills/sdd-close/assets/cierre.md`
* `.codex/skills/sdd-close/agents/openai.yaml`
* `sdd/parches/sdd-portable-core-post-bootstrap/backlog/fase3.md`

### Validar

* `.codex/skills/sdd-close/**`
* `sdd/core/**`
* comandos:
  * `python3 /home/pawpaw/.codex/skills/.system/skill-creator/scripts/quick_validate.py .codex/skills/sdd-close`
  * `rg -n 'decision\\.log|cierre\\.md|minimal|standard|batch|anchored|drift-heavy|patch.yaml|sdd-close' sdd/core .codex/skills/sdd-close`
  * `git diff --check`

### No tocar

* `src/**`
* `public/**`
* `package.json`
* `sdd/tools/**`
* `sdd/tests/**`
* `sdd/parches/legacy/**`
* `docs/sdd/parches/sdd-portable-core-bootstrap/**`

---

## 6. Checklist de ejecucion

### Bloque A - Relectura de fuentes

* [x] Leer core lifecycle y decision/drift.
* [x] Leer `skill-creator` y usar su script de init.
* [x] Leer skill SDD existentes para mantener estilo compacto.

### Bloque B - Inspeccion de estado actual

* [x] Confirmar que `.codex/skills/sdd-close/` no existe.
* [x] Confirmar que `patch.yaml` existe y esta `active`.

### Bloque C - Edicion por archivo

* [x] Inicializar `.codex/skills/sdd-close/` con `skill-creator`.
* [x] Reemplazar placeholder de `SKILL.md` por workflow de cierre.
* [x] Crear template `assets/cierre.md`.
* [x] Actualizar core con niveles de cierre y frontera `decision.log`/`cierre.md`.
* [x] No tratar `sdd-close` como ejecutado para este patch.

### Bloque D - Registro de decisiones, hallazgos o blockers

* [x] Registrar hallazgo si `skill-creator` genera metadata que requiere ajuste.
* [x] No agregar `decision.log` si se ejecuta la decision ya registrada de crear `sdd-close`.

### Bloque E - Validacion

* [x] Ejecutar `python3 /home/pawpaw/.codex/skills/.system/skill-creator/scripts/quick_validate.py .codex/skills/sdd-close`.
* [x] Ejecutar `rg -n 'decision\\.log|cierre\\.md|minimal|standard|batch|anchored|drift-heavy|patch.yaml|sdd-close' sdd/core .codex/skills/sdd-close`.
* [x] Ejecutar `git diff --check`.

### Bloque F - Cierre

* [x] Confirmar que `sdd-close` existe.
* [x] Confirmar que Fase 4 queda desbloqueada sin crear validador todavia.
* [x] Actualizar `Estado` a `done` solo si checklist, drift, validaciones y cierre estan completos.

---

## 7. Drift detectado

* Ninguno detectado al crear el backlog.

---

## 8. Hallazgos durante ejecucion

* 2026-05-09:

  * hallazgo: `skill-creator` fallo dentro del sandbox con `Read-only file system` al crear `.codex/skills/sdd-close`.
  * impacto: bloqueo tecnico de escritura, no drift del plan.
  * accion: se rerun con escalacion aprobada para crear la skill requerida por Fase 3.
* 2026-05-09:

  * hallazgo: `quick_validate.py` rechazo la descripcion inicial de `sdd-close` porque contenia caracteres `<` y `>`.
  * impacto: fallo de validacion de skill.
  * accion: se reemplazo el trigger del frontmatter para evitar angle brackets y la validacion paso.

---

## 9. Blockers

* [x] Ninguno.

---

## 10. Decisiones tomadas

* Ninguna durante la creacion del backlog.

---

## 11. Validaciones

### Documentales

* [x] verificar responsabilidades `decision.log` vs `cierre.md`
* [x] verificar que `sdd-close` no contradice skills SDD existentes

### Tecnicas

* [x] `python3 /home/pawpaw/.codex/skills/.system/skill-creator/scripts/quick_validate.py .codex/skills/sdd-close`
* [x] `rg -n 'decision\\.log|cierre\\.md|minimal|standard|batch|anchored|drift-heavy|patch.yaml|sdd-close' sdd/core .codex/skills/sdd-close`
* [x] `git diff --check`

### Manuales

* [x] confirmar que bootstrap transicional sigue intacto

### Resultados

* Validacion:

  * comando o revision: `python3 /home/pawpaw/.codex/skills/.system/skill-creator/scripts/quick_validate.py .codex/skills/sdd-close`
  * resultado esperado: skill valida
  * resultado obtenido: `Skill is valid!`
  * estado: `pass`
  * notas: primer intento fallo por angle brackets en description; corregido y rerun paso
* Validacion:

  * comando o revision: `rg -n 'decision\\.log|cierre\\.md|minimal|standard|batch|anchored|drift-heavy|patch.yaml|sdd-close' sdd/core .codex/skills/sdd-close`
  * resultado esperado: referencias a cierre, manifest, niveles y responsabilidades
  * resultado obtenido: hits en `sdd/core/**`, `.codex/skills/sdd-close/SKILL.md` y `assets/cierre.md`
  * estado: `pass`
  * notas: `decision.log` y `cierre.md` mantienen responsabilidades separadas
* Validacion:

  * comando o revision: `git diff --check`
  * resultado esperado: sin errores de whitespace
  * resultado obtenido: sin salida
  * estado: `pass`
  * notas: aplica a cambios acumulados hasta Fase 3
* Validacion:

  * comando o revision: `test -e docs/sdd/parches/sdd-portable-core-bootstrap && echo present || echo absent`
  * resultado esperado: `present`
  * resultado obtenido: `present`
  * estado: `pass`
  * notas: bootstrap transicional sigue intacto para Fase 7

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

* Crear una skill demasiado larga o procedural que duplique el core.
* Confundir `cierre.md` con `decision.log`.

### Pendientes

* Crear backlog de Fase 4.

---

## 14. Registro de cambios

* 2026-05-09:

  * cambio: creacion inicial del backlog de Fase 3
  * razon: preparar cierre formal y `sdd-close`
* 2026-05-09:

  * cambio: cierre de Fase 3 como `done`
  * razon: `sdd-close` creado, cierre formal especificado y validaciones completadas
