# Backlog Fase 2: Routing, estados y decisiones humanas

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

- Change id: `orchestration-docs`
- Fase: `2 - Routing, estados y decisiones humanas`
- Estado: `done`
- Ultima actualizacion: `2026-04-25`
- Owner: `pawpaw + Codex`
- Depende de:
  - `docs/sdd/parches/orchestration-docs/definicion.md`
  - `docs/sdd/parches/orchestration-docs/plan.md`
  - `docs/sdd/parches/orchestration-docs/tasks.md`
  - `docs/sdd/parches/orchestration-docs/decision.log`
  - cierre de la Fase 1
- Desbloquea:
  - `docs/sdd/parches/orchestration-docs/backlog/fase4.md`
  - ejecucion de la Fase 2 con `sdd-execute-phase`

---

## 1. Fuente de verdad aplicable

- `docs/README.md`
- `AGENTS.md`
- `docs/AGENTS.md`
- `docs/sdd/parches/orchestration-docs/definicion.md`
- `docs/sdd/parches/orchestration-docs/plan.md`
- `docs/sdd/parches/orchestration-docs/tasks.md`
- `docs/sdd/parches/orchestration-docs/decision.log`
- documentos contractuales aplicables:
  - ninguno de producto por defecto
- documentos auxiliares aplicables:
  - `docs/sdd/parches/orchestration-docs/handover.md`
  - `docs/sdd/templates/backlog-faseN.md`
  - `.codex/skills/sdd-intake/SKILL.md`
  - `.codex/skills/sdd-plan/SKILL.md`
  - `.codex/skills/sdd-tasks/SKILL.md`
  - `.codex/skills/sdd-phase-backlog/SKILL.md`
  - `.codex/skills/sdd-execute-phase/SKILL.md`
  - `.codex/skills/sdd-sync-drift/SKILL.md`

Nota:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- este backlog ejecuta solo la Fase 2
- si aparece drift contra `plan.md` o `tasks.md`, registralo antes de resolverlo

---

## 2. Objetivo de la fase

Documentar como se mueve un cambio dentro del flujo SDD, que skill corresponde a cada estado y cuando una decision requiere intervencion humana.

Esta fase existe para hacer navegable el flujo sin crear una nueva skill ni introducir atajos invalidos.

Al cerrarla deben existir `skill-routing.md`, `artifact-state-machine.md` y `decision-gates.md`.

---

## 3. Precondiciones

### Documentos

- [x] `definicion.md` vigente
- [x] `plan.md` vigente
- [x] `tasks.md` con la fase seleccionada
- [x] contratos aplicables revisados
- [x] Fase 1 cerrada

### Decisiones previas

- [x] decision vigente de no presentar `sdd-router` como skill activa existente
- [x] decision vigente de documentar routing sin crear una nueva skill

### Estado tecnico

- [x] `docs/sdd/orchestration/README.md` existe
- [x] `docs/sdd/orchestration/orchestration-rules.md` existe
- [x] no existe `.codex/skills/sdd-router/SKILL.md`
- [x] no se requiere modificar runtime Astro

---

## 4. Alcance

### Si entra

- [x] crear `docs/sdd/orchestration/skill-routing.md`
- [x] crear `docs/sdd/orchestration/artifact-state-machine.md`
- [x] crear `docs/sdd/orchestration/decision-gates.md`
- [x] documentar routing SDD sin afirmar que `.codex/skills/sdd-router/SKILL.md` existe
- [x] describir transiciones validas entre `handover.md`, `definicion.md`, `plan.md`, `tasks.md`, `backlog/faseN.md`, ejecucion y drift sync

### No entra

- [x] crear una skill real `sdd-router`
- [x] modificar las skills SDD existentes
- [x] cambiar la secuencia macro de `tasks.md`
- [x] ejecutar fases de implementacion documental fuera de esta fase

---

## 5. Checklist de ejecucion

Actualiza este checklist durante la ejecucion, no solo al final.

### Bloque A - Routing de skills

- [x] crear `docs/sdd/orchestration/skill-routing.md`
- [x] mapear artefacto o situacion a skill SDD aplicable
- [x] declarar que `sdd-router` es concepto de routing solicitado o posible cambio futuro, no skill activa existente
- [x] incluir criterios de no usar SDD para cambios pequenos o rutinarios

### Bloque B - Maquina de estados

- [x] crear `docs/sdd/orchestration/artifact-state-machine.md`
- [x] documentar estados esperados de `definicion.md`, `plan.md`, `tasks.md`, `backlog/faseN.md` y ejecucion
- [x] documentar transiciones permitidas y transiciones invalidas
- [x] documentar donde registrar drift o bloqueos

### Bloque C - Decision gates

- [x] crear `docs/sdd/orchestration/decision-gates.md`
- [x] listar decisiones que requieren usuario antes de avanzar
- [x] diferenciar bloqueo real, decision abierta no bloqueante y tarea diferida
- [x] incluir criterios de escalacion para modificar `.codex/`, `AGENTS.md` o contratos

---

## 6. Archivos o areas probables

### Docs

- `docs/sdd/orchestration/skill-routing.md`
- `docs/sdd/orchestration/artifact-state-machine.md`
- `docs/sdd/orchestration/decision-gates.md`

### Codigo

- ninguno

### Configuracion o tests

- ninguno

---

## 7. Hallazgos durante ejecucion

- 2026-04-25:
  - hallazgo:
    el flujo necesita documentar routing sin crear `.codex/skills/sdd-router/SKILL.md`
  - impacto:
    `skill-routing.md` debe hablar de diagnostico de routing y no de una skill activa
  - accion:
    se explicito que el manager activo realiza routing hasta que exista una skill futura

---

## 8. Blockers

- [x] Fase 1 debe estar cerrada antes de ejecutar esta fase.

---

## 9. Decisiones tomadas

- 2026-04-25:
  - decision:
    no crear ni documentar `sdd-router` como skill activa durante Fase 2
  - razon:
    el alcance prohibe modificar skills y el repo no contiene esa skill
  - documentos o areas afectadas:
    `docs/sdd/orchestration/skill-routing.md`

---

## 10. Validaciones

### Documentales

- [x] verificar alineacion con `docs/README.md`
- [x] verificar alineacion con `AGENTS.md`
- [x] verificar que el backlog sigue trazable a `tasks.md`
- [x] verificar trazabilidad contra las skills SDD existentes
- [x] verificar que no habilita saltos invalidos de idea amplia a ejecucion
- [x] buscar referencias a `sdd-router` y confirmar que no se presenta como skill activa

### Tecnicas

- [x] no aplica `npm run build` porque la fase no toca runtime Astro
- [x] no aplica `npm test` porque la fase no toca logica cubierta por tests
- [x] usar busqueda textual para confirmar rutas y nombres esperados

### Manuales

- [x] revision editorial/manual de claridad operativa

### Resultados

- Comando o revision: `test -f docs/sdd/orchestration/skill-routing.md && test -f docs/sdd/orchestration/artifact-state-machine.md && test -f docs/sdd/orchestration/decision-gates.md`
- Resultado: OK
- Notas: existen los tres documentos esperados de Fase 2.

- Comando o revision: `rg -n "sdd-router|does not create|does not currently contain|future" docs/sdd/orchestration/*.md`
- Resultado: OK
- Notas: las menciones a `sdd-router` no lo presentan como skill activa existente.

- Comando o revision: `rg -n "idea -> execution|Use sdd-intake|Use sdd-plan|Use sdd-tasks|Use sdd-phase-backlog|Use sdd-execute-phase|Use sdd-sync-drift|Use astro-pages-verify" docs/sdd/orchestration/*.md`
- Resultado: OK
- Notas: rutas de skill y transiciones invalidas aparecen en los documentos de Fase 2.

---

## 11. Cierre

La fase solo se considera cerrada si:

- [x] checklist completo o pendientes explicitamente diferidos
- [x] decisiones relevantes registradas
- [x] validaciones requeridas ejecutadas o justificadas
- [x] drift documentado o resuelto
- [x] reporte final listo

---

## 12. Riesgos y pendientes

### Riesgos

- afirmar que `sdd-router` existe cuando no existe
- abrir transiciones invalidas que permitan saltar definicion, plan o backlog en cambios sustanciales
- duplicar contenido de las skills en vez de documentar routing operativo

### Pendientes

- Fase 2 cerrada
- evaluar en un cambio futuro si una skill real `sdd-router` aporta valor despues de usar el flujo

---

## 13. Registro de cambios

- 2026-04-25:
  - cambio: creacion inicial del backlog de Fase 2
  - razon: convertir routing, estados y decision gates en checklist operativo
- 2026-04-25:
  - cambio: ejecucion y cierre de Fase 2
  - razon: crear documentos de routing, estados y decision gates
