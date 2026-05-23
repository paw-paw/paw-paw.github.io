# Tasks: Orchestration Docs

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

- Change id: `orchestration-docs`
- Estado: `done`
- Ultima actualizacion: `2026-04-25`
- Owner: `pawpaw + Codex`
- Depende de:
  - `docs/README.md`
  - `AGENTS.md`
  - `docs/AGENTS.md`
  - `docs/sdd/parches/orchestration-docs/definicion.md`
  - `docs/sdd/parches/orchestration-docs/plan.md`
  - `docs/sdd/parches/orchestration-docs/decision.log`
- Desbloquea:
  - `sdd-phase-backlog` para una fase seleccionada

---

## 1. Fuente de verdad aplicable

- `docs/README.md`
- `AGENTS.md`
- `docs/AGENTS.md`
- `docs/sdd/parches/orchestration-docs/definicion.md`
- `docs/sdd/parches/orchestration-docs/plan.md`
- `docs/sdd/parches/orchestration-docs/decision.log`
- documentos contractuales aplicables:
  - ninguno de producto por defecto
- documentos auxiliares aplicables:
  - `docs/sdd/parches/orchestration-docs/handover.md`
  - `docs/sdd/templates/tasks.md`
  - `.codex/skills/sdd-intake/SKILL.md`
  - `.codex/skills/sdd-plan/SKILL.md`
  - `.codex/skills/sdd-tasks/SKILL.md`
  - `.codex/skills/sdd-phase-backlog/SKILL.md`
  - `.codex/skills/sdd-execute-phase/SKILL.md`
  - `.codex/skills/sdd-sync-drift/SKILL.md`
  - `.codex/skills/astro-pages-verify/SKILL.md`
  - `.codex/agents/*.toml`
  - `.codex/config.toml`

Nota:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- este `tasks.md` no puede contradecir `definicion.md`, `plan.md` ni documentos contractuales
- `docs/sdd/orchestration/` debe mantenerse como documentacion auxiliar operativa

---

## 2. Resumen del plan

El cambio crea documentacion de soporte bajo demanda para orquestacion SDD en `docs/sdd/orchestration/`.

Las fases siguen los bloques del `plan.md`: base e indice, routing/estados/decisiones, politicas de subagentes/modelos/drift, y revision documental de cierre.

Las decisiones abiertas no bloquean la division en fases: `sdd-router` debe documentarse como concepto o routing solicitado, no como skill activa existente; `model-policy.md` debe evitar una dependencia rigida de modelos concretos.

El cambio cierra con validaciones documentales y busquedas textuales. No se esperan validaciones `npm` porque no toca runtime Astro.

---

## 3. Fases

### Fase 1 - Base e indice de orquestacion

- Objetivo:
  - crear la carpeta documental futura y su punto de entrada operativo sin duplicar `AGENTS.md`
- Precondiciones:
  - `plan.md` activo
  - decision registrada de usar `docs/sdd/orchestration/` como target documental
  - no ejecutar cambios en `.codex/`, `AGENTS.md` ni runtime Astro
- Tareas:
  - [ ] crear `docs/sdd/orchestration/README.md`
  - [ ] crear `docs/sdd/orchestration/orchestration-rules.md`
  - [ ] documentar cuando leer y cuando no leer la carpeta de orquestacion
  - [ ] mapear cada documento futuro por problema operativo
  - [ ] fijar el principio: `AGENTS.md` gobierna, skills operan, subagentes asesoran y la sesion principal decide
- Archivos o areas probables:
  - `docs/sdd/orchestration/README.md`
  - `docs/sdd/orchestration/orchestration-rules.md`
- Validaciones:
  - [ ] verificar que `README.md` presenta la carpeta como auxiliar operativa
  - [ ] verificar que `orchestration-rules.md` no duplica reglas completas de `AGENTS.md`
  - [ ] verificar que no redefine precedencia documental
  - [ ] verificar que no duplica reglas completas de `AGENTS.md`
- Criterio de cierre:
  - existen un indice claro y reglas acotadas que permiten decidir que documento consultar sin convertir la carpeta en contrato superior

### Fase 2 - Routing, estados y decisiones humanas

- Objetivo:
  - documentar el movimiento del cambio dentro del flujo SDD y las decisiones que requieren humano
- Precondiciones:
  - Fase 1 cerrada
  - lista actual de skills SDD verificada
  - decision vigente de no presentar `sdd-router` como skill activa existente
- Tareas:
  - [ ] crear `docs/sdd/orchestration/skill-routing.md`
  - [ ] crear `docs/sdd/orchestration/artifact-state-machine.md`
  - [ ] crear `docs/sdd/orchestration/decision-gates.md`
  - [ ] documentar routing SDD sin afirmar que `.codex/skills/sdd-router/SKILL.md` existe
  - [ ] describir transiciones validas entre `handover.md`, `definicion.md`, `plan.md`, `tasks.md`, `backlog/faseN.md`, ejecucion y drift sync
- Archivos o areas probables:
  - `docs/sdd/orchestration/skill-routing.md`
  - `docs/sdd/orchestration/artifact-state-machine.md`
  - `docs/sdd/orchestration/decision-gates.md`
- Validaciones:
  - [ ] verificar trazabilidad contra las skills SDD existentes
  - [ ] verificar que no habilita saltos invalidos de idea amplia a ejecucion
  - [ ] buscar referencias a `sdd-router` y confirmar que no se presenta como skill activa
- Criterio de cierre:
  - el flujo queda navegable por estado, skill aplicable y decision humana requerida, sin crear una nueva convencion activa no existente

### Fase 3 - Politicas de subagentes, modelos y drift

- Objetivo:
  - documentar politicas de soporte para trabajos SDD complejos sin abrir scope de configuracion
- Precondiciones:
  - Fase 1 cerrada
  - `.codex/agents/*.toml` y `.codex/config.toml` verificados como referencias read-only
  - `sdd-sync-drift` y `astro-pages-verify` revisados para evitar duplicacion
- Tareas:
  - [ ] crear `docs/sdd/orchestration/subagent-policy.md`
  - [ ] crear `docs/sdd/orchestration/model-policy.md`
  - [ ] crear `docs/sdd/orchestration/drift-policy.md`
  - [ ] mantener subagentes como advisory/read-only por defecto
  - [ ] redactar politica de modelos como orientacion operativa dependiente del runtime disponible
  - [ ] documentar cuando usar `sdd-sync-drift` y cuando solo registrar hallazgos
- Archivos o areas probables:
  - `docs/sdd/orchestration/subagent-policy.md`
  - `docs/sdd/orchestration/model-policy.md`
  - `docs/sdd/orchestration/drift-policy.md`
- Validaciones:
  - [ ] verificar alineacion con `.codex/config.toml`
  - [ ] verificar alineacion con agentes locales read-only
  - [ ] verificar que `model-policy.md` no promete disponibilidad permanente de modelos concretos
  - [ ] verificar que `drift-policy.md` no contradice `sdd-sync-drift`
- Criterio de cierre:
  - las politicas ayudan a coordinar trabajo complejo sin delegar decisiones finales ni sobre-especificar modelos

### Fase 4 - Revision documental y cierre

- Objetivo:
  - cerrar la carpeta nueva revisando consistencia, alcance y ausencia de drift documental
- Precondiciones:
  - Fases 1, 2 y 3 cerradas
  - todos los documentos solicitados por el handover existen en `docs/sdd/orchestration/`
  - no hay cambios no previstos en runtime Astro, `.codex/`, `AGENTS.md` ni docs contractuales
- Tareas:
  - [ ] revisar que existen exactamente los documentos solicitados por el handover
  - [ ] revisar que cada documento es bajo demanda y no una wiki redundante
  - [ ] revisar que `docs/sdd/orchestration/` se mantiene auxiliar operativo
  - [ ] revisar que ninguna referencia presenta `sdd-router` como skill activa existente
  - [ ] actualizar `docs/sdd/parches/orchestration-docs/decision.log` solo si aparecieron decisiones significativas nuevas
- Archivos o areas probables:
  - `docs/sdd/orchestration/*.md`
  - `docs/sdd/parches/orchestration-docs/decision.log`
- Validaciones:
  - [ ] ejecutar busqueda textual de rutas y nombres esperados
  - [ ] verificar que no se crearon archivos fuera de la lista solicitada
  - [ ] verificar que no aplica `npm run build` por no tocar runtime Astro
  - [ ] revision editorial/manual de claridad operativa
- Criterio de cierre:
  - el set documental queda completo, trazable al plan y sin contradicciones con `docs/README.md`, `AGENTS.md` ni las skills existentes

---

## 4. Dependencias entre fases

- Fase 1 bloquea:
  - Fase 2
  - Fase 3
  - Fase 4
- Fase 2 bloquea:
  - Fase 4
- Fase 3 bloquea:
  - Fase 4
- Fase 4 bloquea:
  - cierre del cambio `orchestration-docs`

---

## 5. Decisiones y bloqueos

### Decisiones abiertas

- [ ] Decidir en un cambio futuro si conviene crear una skill real `sdd-router`.
- [ ] Decidir durante la redaccion si `model-policy.md` menciona modelos concretos solo como defaults orientativos o evita nombres propios.

### Bloqueos

- [ ] Ningun bloqueo actual para pasar Fase 1 a `sdd-phase-backlog`.

### Escalaciones requeridas

- [ ] Escalar al usuario si durante la ejecucion se necesita modificar `.codex/skills/`, `.codex/agents/`, `.codex/config.toml`, `AGENTS.md` o docs contractuales.
- [ ] Escalar al usuario si se detecta que el handover exige tratar `docs/sdd/orchestration/` como contrato superior.

---

## 6. Tareas diferidas

- [ ] Crear una skill real `sdd-router`, si despues de usar el flujo se justifica.
- [ ] Actualizar skills SDD para enlazar documentos de `docs/sdd/orchestration/`, si un cambio posterior lo aprueba.
- [ ] Actualizar `AGENTS.md` para mencionar `docs/sdd/orchestration/`, si se decide elevar su visibilidad en el mapa operativo.

---

## 7. Validaciones globales

### Documentales

- [ ] verificar alineacion con `docs/README.md`
- [ ] verificar alineacion con `AGENTS.md`
- [ ] verificar alineacion con `docs/AGENTS.md`
- [ ] verificar trazabilidad desde `plan.md`
- [ ] verificar que `docs/sdd/orchestration/` se presenta como auxiliar operativo
- [ ] verificar que no se duplican reglas completas de skills o `AGENTS.md`

### Tecnicas

- [ ] no aplica `npm run build` salvo que el cambio toque estructura Astro u output publico
- [ ] no aplica `npm test` salvo que el cambio toque logica cubierta por tests
- [ ] usar busqueda textual para confirmar rutas, nombres y ausencia de referencias falsas

### Manuales

- [ ] revision editorial/manual de claridad operativa
- [ ] revision de que cada documento responde al contenido esperado del handover

---

## 8. Criterio de cierre

Este `tasks.md` queda listo para `sdd-phase-backlog` solo si:

- [x] cada fase tiene objetivo, precondiciones, tareas, validaciones y criterio de cierre
- [x] no hay decisiones abiertas que bloqueen la fase seleccionada
- [x] cada tarea es trazable al `plan.md`
- [x] las validaciones son reales y no inventan scripts

---

## 9. Registro de cambios

- 2026-04-25:
  - cambio: creacion inicial de `tasks.md` para `orchestration-docs`
  - razon: convertir el plan aprobado en fases macro antes de crear backlogs de ejecucion
- 2026-04-25:
  - cambio: cierre de estado de `tasks.md`
  - razon: las fases 1 a 4 fueron ejecutadas en orden
