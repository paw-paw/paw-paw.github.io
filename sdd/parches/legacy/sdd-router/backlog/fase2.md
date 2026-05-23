# Backlog Fase 2: Implementacion de la skill local

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

- Change id: `sdd-router`
- Fase: `2 - Implementacion de la skill local`
- Estado: `done`
- Ultima actualizacion: `2026-04-25`
- Owner: `pawpaw + Codex`
- Depende de:
  - `docs/sdd/parches/sdd-router/definicion.md`
  - `docs/sdd/parches/sdd-router/plan.md`
  - `docs/sdd/parches/sdd-router/tasks.md`
  - `docs/sdd/parches/sdd-router/decision.log`
- Desbloquea:
  - `docs/sdd/parches/sdd-router/backlog/fase3.md`
  - ejecucion de la Fase 2 con `sdd-execute-phase`

---

## 1. Fuente de verdad aplicable

- `docs/README.md`
- `AGENTS.md`
- `docs/AGENTS.md`
- `docs/sdd/parches/sdd-router/definicion.md`
- `docs/sdd/parches/sdd-router/plan.md`
- `docs/sdd/parches/sdd-router/tasks.md`
- `docs/sdd/parches/sdd-router/decision.log`
- documentos contractuales aplicables:
  - ninguno de producto por defecto
- documentos auxiliares aplicables:
  - `.codex/skills/.system/skill-creator/SKILL.md`
  - `.codex/skills/sdd-intake/SKILL.md`
  - `.codex/skills/sdd-plan/SKILL.md`
  - `.codex/skills/sdd-tasks/SKILL.md`
  - `.codex/skills/sdd-phase-backlog/SKILL.md`
  - `.codex/skills/sdd-execute-phase/SKILL.md`
  - `.codex/skills/sdd-sync-drift/SKILL.md`
  - `.codex/skills/astro-pages-verify/SKILL.md`

Nota:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- esta fase solo crea la skill local

---

## 2. Objetivo de la fase

Crear `.codex/skills/sdd-router/SKILL.md` como una skill diagnostica y read-only que recomiende la siguiente skill o el workflow normal correcto.

Al cerrar la fase, la skill debe existir y describir su propio contrato de routing sin duplicar `AGENTS.md`.

---

## 3. Precondiciones

### Documentos

- [x] `definicion.md` vigente
- [x] `plan.md` vigente
- [x] `tasks.md` con la fase seleccionada
- [x] contratos aplicables revisados

### Decisiones previas

- [x] decision de crear `sdd-router` como skill real
- [x] decision de no crear metadata UI adicional en esta entrega

### Estado tecnico

- [x] `.codex/skills/sdd-router/SKILL.md` no existia al abrir la fase
- [x] no se requiere modificar runtime Astro
- [x] no se requiere modificar dependencias

---

## 4. Alcance

### Si entra

- [x] crear `.codex/skills/sdd-router/SKILL.md`
- [x] definir alcance, inputs, workflow, outputs y guardrails
- [x] mantener la skill read-only, advisory y no ejecutora

### No entra

- [x] modificar `AGENTS.md`
- [x] modificar `docs/sdd/orchestration/*`
- [x] crear metadata UI adicional
- [x] tocar runtime Astro

---

## 5. Checklist de ejecucion

Actualiza este checklist durante la ejecucion, no solo al final.

### Bloque A - Estructura del skill

- [x] crear `.codex/skills/sdd-router/SKILL.md`
- [x] incluir frontmatter valido
- [x] definir `When to Use`, `Inputs`, `Critical Patterns`, `Workflow`, `Output Contract` y `Guardrails`

### Bloque B - Comportamiento del router

- [x] definir rutas de recomendacion para intake, plan, tasks, backlog, execution, drift sync, Astro verification, no SDD y stop
- [x] explicitar que la skill es read-only y advisory
- [x] mantener la skill ligera y sin subagentes por defecto

### Bloque C - Revision local

- [x] verificar que la skill no duplica `AGENTS.md`
- [x] verificar que la skill no modifica archivos
- [x] verificar que la skill respeta el flujo SDD del repo

---

## 6. Archivos o areas probables

### Docs

- ninguno adicional

### Codigo

- `.codex/skills/sdd-router/SKILL.md`

### Configuracion o tests

- ninguno

---

## 7. Hallazgos durante ejecucion

- 2026-04-25:
  - hallazgo:
    la carpeta `.codex/skills/sdd-router/` no existia y el sandbox bloqueo la creacion por shell directo
  - impacto:
    fue necesario crear la carpeta con permiso escalado antes de escribir la skill
  - accion:
    crear la ruta y luego escribir `SKILL.md`

---

## 8. Blockers

- [x] Ningun blocker actual para ejecutar la Fase 2.

---

## 9. Decisiones tomadas

- 2026-04-25:
  - decision:
    no agregar `agents/openai.yaml` en esta entrega
  - razon:
    el repo no lo usa como requisito para las skills locales existentes
  - documentos o areas afectadas:
    `.codex/skills/sdd-router/`

---

## 10. Validaciones

### Documentales

- [x] verificar alineacion con `docs/README.md`
- [x] verificar alineacion con `AGENTS.md`
- [x] verificar que el skill refleja el contrato de routing correcto

### Tecnicas

- [x] no aplica `npm run build`
- [x] no aplica `npm test`
- [x] revisar que el archivo existe en `.codex/skills/sdd-router/SKILL.md`

### Manuales

- [x] revision editorial/manual de claridad operativa

### Resultados

- Comando o revision:
- revision del archivo `.codex/skills/sdd-router/SKILL.md`
- Resultado: skill creada y alineada con el contrato de routing
- Notas: no se agrego metadata UI adicional

---

## 11. Cierre

La fase solo se considera cerrada si:

- [ ] checklist completo o pendientes explicitamente diferidos
- [ ] decisiones relevantes registradas
- [ ] validaciones requeridas ejecutadas o justificadas
- [ ] drift documentado o resuelto
- [ ] reporte final listo

---

## 12. Riesgos y pendientes

### Riesgos

- riesgo:
  - impacto: convertir la skill en una mini-copia de `AGENTS.md`
  - mitigacion: mantenerla centrada en routing y salida estructurada

### Pendientes

- pendiente:
  - fase 3 de cierre y consistencia

---

## 13. Registro de cambios

- 2026-04-25:
  - cambio: creacion inicial del backlog de Fase 2
  - razon: preparar la implementacion de la skill local
- 2026-04-25:
  - cambio: cierre del backlog de Fase 2
  - razon: la skill local quedo implementada
