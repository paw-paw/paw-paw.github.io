# Tasks: sdd-router

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

- Change id: `sdd-router`
- Estado: `done`
- Ultima actualizacion: `2026-04-25`
- Owner: `pawpaw + Codex`
- Depende de:
  - `docs/README.md`
  - `AGENTS.md`
  - `docs/AGENTS.md`
  - `docs/sdd/parches/sdd-router/definicion.md`
  - `docs/sdd/parches/sdd-router/plan.md`
  - `docs/sdd/parches/sdd-router/decision.log`
- Desbloquea:
  - `sdd-phase-backlog` para la fase seleccionada

---

## 1. Fuente de verdad aplicable

- `docs/README.md`
- `AGENTS.md`
- `docs/AGENTS.md`
- `docs/sdd/parches/sdd-router/definicion.md`
- `docs/sdd/parches/sdd-router/plan.md`
- `docs/sdd/parches/sdd-router/decision.log`
- documentos contractuales aplicables:
  - ninguno de producto por defecto
- documentos auxiliares aplicables:
  - `docs/sdd/orchestration/README.md`
  - `docs/sdd/orchestration/orchestration-rules.md`
  - `docs/sdd/orchestration/skill-routing.md`
  - `.codex/skills/.system/skill-creator/SKILL.md`

Nota:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- este `tasks.md` no puede contradecir `definicion.md`, `plan.md` ni documentos contractuales

---

## 2. Resumen del plan

El cambio crea una skill local nueva llamada `sdd-router` y alinea la documentacion auxiliar para que deje de hablar de ella como futura o inexistente. Tambien actualiza `AGENTS.md` para incluirla en la tabla de skills locales.

El trabajo se divide en una fase documental de sincronizacion y una fase de implementacion de la skill, seguidas por una revision de cierre. No se esperan cambios de runtime ni validaciones `npm`.

---

## 3. Fases

### Fase 1 - Sincronizacion documental y de inventario

- Objetivo:
  - alinear la documentacion auxiliar de orquestacion y el inventario de skills para que `sdd-router` aparezca como skill real y no como futuro
- Precondiciones:
  - `definicion.md` vigente
  - `plan.md` vigente
  - decision de no crear metadata UI adicional
- Tareas:
  - [ ] actualizar `AGENTS.md` para incluir `sdd-router` en la tabla de skills locales
  - [ ] actualizar `docs/sdd/orchestration/orchestration-rules.md`
  - [ ] actualizar `docs/sdd/orchestration/skill-routing.md`
  - [ ] revisar si `docs/sdd/orchestration/README.md` requiere un ajuste minimo de referencia
- Archivos o areas probables:
  - `AGENTS.md`
  - `docs/sdd/orchestration/README.md`
  - `docs/sdd/orchestration/orchestration-rules.md`
  - `docs/sdd/orchestration/skill-routing.md`
- Validaciones:
  - [ ] busqueda textual para confirmar que `sdd-router` deja de presentarse como ausente o futuro
  - [ ] revision editorial/manual de que la carpeta sigue siendo auxiliar
- Criterio de cierre:
  - la documentacion y el indice de skills ya reconocen `sdd-router` como existente

### Fase 2 - Implementacion de la skill local

- Objetivo:
  - crear `.codex/skills/sdd-router/SKILL.md` como router diagnostico ligero
- Precondiciones:
  - Fase 1 cerrada
  - guia `skill-creator` revisada
- Tareas:
  - [ ] crear `.codex/skills/sdd-router/SKILL.md`
  - [ ] definir alcance, inputs, workflow, outputs y guardrails
  - [ ] mantener la skill read-only, advisory y no ejecutora
  - [ ] incluir las rutas de salida correctas y el criterio de no usar SDD
- Archivos o areas probables:
  - `.codex/skills/sdd-router/SKILL.md`
- Validaciones:
  - [ ] revisar que la skill no duplica `AGENTS.md`
  - [ ] revisar que la skill no exige subagentes ni modelo por defecto
  - [ ] revisar que la skill sigue la estructura de otras skills locales
- Criterio de cierre:
  - existe una skill utilizable que responde que paso SDD sigue y no reemplaza al manager

### Fase 3 - Cierre y consistencia

- Objetivo:
  - comprobar que no quedan contradicciones ni referencias obsoletas
- Precondiciones:
  - Fases 1 y 2 cerradas
- Tareas:
  - [ ] verificar que no quedan referencias a `sdd-router` como skill futura o ausente
  - [ ] verificar que no hay cambios fuera de docs y `.codex/skills/`
  - [ ] revisar si el `decision.log` necesita una nota final adicional
- Archivos o areas probables:
  - `docs/sdd/parches/sdd-router/*`
  - `AGENTS.md`
  - `docs/sdd/orchestration/*`
  - `.codex/skills/sdd-router/SKILL.md`
- Validaciones:
  - [ ] busqueda textual de las frases criticas del routing
  - [ ] revision manual de coherencia operacional
- Criterio de cierre:
  - el cambio queda trazable, coherente y listo para reportarse como completado

---

## 4. Dependencias entre fases

- Fase 1 bloquea:
  - Fase 2
  - Fase 3
- Fase 2 bloquea:
  - Fase 3
- Fase 3 bloquea:
  - cierre del cambio `sdd-router`

---

## 5. Decisiones y bloqueos

### Decisiones abiertas

- [ ] ninguna que bloquee la division en fases

### Bloqueos

- [ ] ninguno actual

### Escalaciones requeridas

- [ ] escalar solo si aparece necesidad de modificar `AGENTS.md` fuera del inventario de skills o se detecta drift contractual adicional

---

## 6. Tareas diferidas

- [ ] agregar metadata UI adicional si en el futuro hace falta para listar skills

---

## 7. Validaciones globales

### Documentales

- [ ] verificar alineacion con `docs/README.md`
- [ ] verificar alineacion con `AGENTS.md`
- [ ] verificar trazabilidad desde `plan.md`
- [ ] verificar que `sdd-router` aparece donde corresponde

### Tecnicas

- [ ] no aplica `npm run build`
- [ ] no aplica `npm test`
- [ ] busqueda textual para confirmar rutas, nombres y ausencia de referencias falsas

### Manuales

- [ ] revision editorial/manual de claridad operativa
- [ ] revision de que el router siga siendo ligero y advisory

---

## 8. Criterio de cierre

Este `tasks.md` queda listo para `sdd-phase-backlog` solo si:

- [ ] cada fase tiene objetivo, precondiciones, tareas, validaciones y criterio de cierre
- [ ] cada tarea es trazable al `plan.md`
- [ ] no hay decisiones abiertas que bloqueen la fase seleccionada
- [ ] las validaciones son reales y proporcionales

---

## 9. Registro de cambios

- 2026-04-25:
  - cambio: creacion inicial de `tasks.md` para `sdd-router`
  - razon: dividir el cambio en fases ejecutables
- 2026-04-25:
  - cambio: cierre de `tasks.md` para `sdd-router`
  - razon: las fases planificadas fueron ejecutadas
