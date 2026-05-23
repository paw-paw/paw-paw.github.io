# Phase Plan

Usa este plan para ejecutar el Bloque 3 del roadmap de Sprint 3.

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

Antes de usarlo:

- confirma que `Bloque 2` dejo lista la estructura `.codex/skills/`
- revisa `skill-creator`
- revisa una skill existente bajo `.codex/skills/`
- revisa `docs/sdd/parches/sprint-3/implementation-report.md`

---

## Metadatos

- Fase: `Sprint 3 - Bloque 3 - Implementacion de skills centrales`
- Estado: `done`
- Ultima actualizacion: `2026-04-25`
- Owner: `pawpaw + Codex`
- Depende de:
  - `docs/README.md`
  - `AGENTS.md`
  - `docs/sdd/parches/sprint-3/roadmap.md`
  - `docs/sdd/parches/sprint-3/implementation-report.md`
  - `docs/sdd/parches/sprint-3/block-2.md`
  - convencion de `skill-creator`
- Desbloquea:
  - nucleo del flujo SDD desde definicion hasta ejecucion de fase
  - implementacion de skills de borde en `Bloque 4`
  - revision de solapamiento y registro en `Bloque 5`

---

## 1. Objetivo de la fase

Esta fase debe crear las cuatro skills centrales del sistema SDD: `sdd-plan`, `sdd-tasks`, `sdd-phase-backlog` y `sdd-execute-phase`. Al cerrarla, el repo debe tener instrucciones operativas claras para convertir una definicion en plan tecnico, un plan en fases, una fase en backlog vivo y un backlog en ejecucion controlada. Esta fase existe porque estas transiciones son el nucleo mas usado y mas riesgoso del sistema.

---

## 2. Fuente de verdad aplicable

- `docs/README.md`
- roadmap activo o historico aplicable en `docs/sdd/`:
  - `docs/sdd/parches/sprint-3/roadmap.md`
  - `docs/sdd/parches/sprint-3/implementation-report.md`
  - `docs/sdd/parches/sprint-3/block-2.md`
  - `docs/sdd/templates/backlog-faseN.md`
- documentos contractuales aplicables:
  - no hay contrato de producto nuevo en esta fase
- documentos auxiliares aplicables:
  - `AGENTS.md`
  - `.atl/skill-registry.md`
  - `skill-creator`

Nota:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- este plan no puede contradecir documentos contractuales
- las skills no deben duplicar `AGENTS.md`; deben operar bajo su gobierno

---

## 3. Inputs requeridos

### Documentos

- [ ] `docs/sdd/parches/sprint-3/implementation-report.md`
- [ ] `docs/sdd/parches/sprint-3/roadmap.md`
- [ ] `AGENTS.md`
- [ ] una skill existente bajo `.codex/skills/`
- [ ] `skill-creator`

### Decisiones previas

- [ ] no crear scripts en el primer corte
- [ ] cada skill debe tener una sola responsabilidad
- [ ] templates de artefactos viven como instruccion, no como archivos extra
- [ ] `sdd-execute-phase` debe detenerse ante decisiones de alto impacto

### Estado tecnico

- [ ] `.codex/skills/` existe
- [ ] no hay archivo `.codex` bloqueante
- [ ] no hay que tocar runtime

---

## 4. Entregables documentales

### Crear

- [ ] `docs/sdd/parches/sprint-3/block-3.md`

### Actualizar

- [ ] ninguno por defecto

### No tocar

- [ ] `docs/README.md`, salvo contradiccion detectada
- [ ] `AGENTS.md`, salvo que falte una referencia necesaria
- [ ] `.atl/skill-registry.md`, queda para `Bloque 5`
- [ ] `src/`
- [ ] `package.json`

---

## 5. Alcance de implementacion

### Si entra

- [ ] crear `.codex/skills/sdd-plan/SKILL.md`
- [ ] crear `.codex/skills/sdd-tasks/SKILL.md`
- [ ] crear `.codex/skills/sdd-phase-backlog/SKILL.md`
- [ ] crear `.codex/skills/sdd-execute-phase/SKILL.md`
- [ ] definir triggers claros y no solapados
- [ ] incluir inputs, outputs, workflow y guardrails en cada skill

### No entra

- [ ] crear `sdd-intake`
- [ ] crear `sdd-sync-drift`
- [ ] crear `astro-pages-verify`
- [ ] crear scripts auxiliares
- [ ] crear artefactos reales en `docs/sdd/`
- [ ] ejecutar una fase real de otro cambio

---

## 6. Tareas detalladas

### Bloque A - Diseno comun de las skills centrales

- [ ] definir frontmatter comun con `name`, `description`, `license`, `metadata.author`, `metadata.version`
- [ ] definir tono conciso y operativo
- [ ] definir secciones comunes: `When to Use`, `Inputs`, `Critical Patterns`, `Workflow`, `Outputs`, `Guardrails`
- [ ] evitar explicaciones largas que dupliquen el implementation report

### Bloque B - `sdd-plan`

- [ ] definir trigger: cuando exista `definicion.md` y se necesite plan tecnico brownfield
- [ ] indicar que debe leer docs contractuales aplicables y estado real del codigo
- [ ] producir `plan.md`
- [ ] registrar decisiones relevantes en `decision.log`
- [ ] prohibir generar tasks o implementar

### Bloque C - `sdd-tasks`

- [ ] definir trigger: convertir `plan.md` en fases macro
- [ ] indicar inputs `definicion.md`, `plan.md`, `decision.log`
- [ ] producir `tasks.md`
- [ ] separar fases, dependencias, validaciones y tareas diferidas
- [ ] prohibir bajar a checklist operacional

### Bloque D - `sdd-phase-backlog`

- [ ] definir trigger: convertir una fase concreta en checklist vivo
- [ ] producir `backlog/faseN.md`
- [ ] incluir precondiciones, alcance, no alcance, checklist, validaciones, blockers y cierre
- [ ] prohibir implementar o cambiar la secuencia macro sin decision

### Bloque E - `sdd-execute-phase`

- [ ] definir trigger: ejecutar una fase con backlog existente
- [ ] exigir lectura de backlog, tasks, plan y docs relevantes
- [ ] actualizar checklist durante ejecucion
- [ ] registrar hallazgos y blockers
- [ ] detenerse ante decisiones de scope, contratos, schemas, compatibilidad, validacion o secuencia macro

### Bloque F - Revision cruzada

- [ ] revisar que `sdd-plan` y `sdd-tasks` no se solapan
- [ ] revisar que `sdd-phase-backlog` y `sdd-execute-phase` no se solapan
- [ ] revisar que ninguna skill promete hacer trabajo de `sdd-sync-drift`
- [ ] revisar que ninguna skill promete validacion Astro especializada de `astro-pages-verify`

---

## 7. Archivos probables a tocar

### Docs

- `docs/sdd/parches/sprint-3/block-3.md`

### Codigo

- `.codex/skills/sdd-plan/SKILL.md`
- `.codex/skills/sdd-tasks/SKILL.md`
- `.codex/skills/sdd-phase-backlog/SKILL.md`
- `.codex/skills/sdd-execute-phase/SKILL.md`

---

## 8. Dependencias y bloqueos

### Dependencias

- [ ] cierre de `Bloque 2`
- [ ] convencion de `skill-creator`
- [ ] implementation report de Sprint 3

### Bloqueos posibles

- [ ] skills demasiado largas
- [ ] triggers ambiguos
- [ ] `sdd-execute-phase` intenta cubrir todo el sistema
- [ ] templates demasiado detallados dentro de cada skill

### Mitigacion

- mantener cada skill bajo un enfoque de transicion unica
- dejar detalles extensos en report/roadmap, no en cada skill
- revisar triggers al final como conjunto

---

## 9. Validaciones

### Documentales

- [ ] verificar alineacion con `docs/sdd/parches/sprint-3/implementation-report.md`
- [ ] verificar que no se introdujeron decisiones fuera de contrato
- [ ] verificar que las skills no reemplazan `AGENTS.md`

### Tecnicas

- [ ] `find .codex/skills -maxdepth 2 -type f -name SKILL.md`
- [ ] revisar frontmatter de las 4 skills creadas
- [ ] no corresponde `npm run build`

### Manuales

- [ ] leer cada skill como agente nuevo
- [ ] confirmar que el output esperado de cada skill es inequívoco
- [ ] confirmar que ninguna skill pide dependencias nuevas

---

## 10. Criterio de cierre

La fase solo se considera cerrada si:

- [ ] existen las 4 skills centrales bajo `.codex/skills/`
- [ ] cada skill tiene trigger claro
- [ ] cada skill tiene responsabilidad unica
- [ ] no se crearon scripts ni recursos extra
- [ ] no se tocaron runtime ni dependencias

---

## 11. Riesgos y notas

### Riesgos

- crear skills tipo catch-all
- duplicar instrucciones del roadmap dentro de cada skill
- hacer que `sdd-execute-phase` ignore decisiones humanas necesarias

### Notas operativas

- este bloque debe priorizar usabilidad real por encima de exhaustividad
- las skills de borde se implementan en `Bloque 4`

---

## 12. Registro de cambios del plan

- Fecha: `2026-04-25`
  - cambio: creacion inicial del plan para `Bloque 3`
  - razon: detallar la implementacion de las skills centrales del sistema SDD
