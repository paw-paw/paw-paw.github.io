# Backlog Fase 2: Perfiles writer y autorizacion explicita por skill

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

- Change id: `subagent-writers`
- Fase: `Fase 2 - Perfiles writer y autorización explícita por skill`
- Estado: `done`
- Ultima actualizacion: `2026-04-26`
- Owner: `pawpaw + Codex`
- Depende de:
  - `docs/sdd/parches/subagent-writers/definicion.md`
  - `docs/sdd/parches/subagent-writers/plan.md`
  - `docs/sdd/parches/subagent-writers/tasks.md`
  - `docs/sdd/parches/subagent-writers/backlog/fase1.md`
- Desbloquea:
  - cierre del cambio `subagent-writers`

---

## 1. Fuente de verdad aplicable

- `docs/README.md`
- `docs/sdd/parches/subagent-writers/definicion.md`
- `docs/sdd/parches/subagent-writers/plan.md`
- `docs/sdd/parches/subagent-writers/tasks.md`
- `docs/sdd/parches/subagent-writers/decision.log`
- documentos contractuales aplicables:
  - ninguno de producto
- documentos auxiliares aplicables:
  - `AGENTS.md`
  - `.codex/config.toml`
  - `.codex/agents/*.toml`
  - `.codex/skills/sdd-intake/SKILL.md`
  - `.codex/skills/sdd-plan/SKILL.md`
  - `.codex/skills/sdd-tasks/SKILL.md`
  - `.codex/skills/sdd-phase-backlog/SKILL.md`
  - `.codex/skills/sdd-execute-phase/SKILL.md`
  - `docs/sdd/orchestration/*.md`

Nota:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- este backlog ejecuta una sola fase
- si aparece drift contra `plan.md` o `tasks.md`, registralo antes de resolverlo

---

## 2. Objetivo de la fase

Crear los dos perfiles writer permitidos y amarrarlos a skills SDD concretas para que la escritura delegada siga siendo explícita, limitada y reversible. Al terminar la fase, la repo policy, los perfiles `.toml` y los `SKILL.md` deben contar la misma historia.

---

## 3. Precondiciones

### Documentos

- [x] `definicion.md` vigente
- [x] `plan.md` vigente
- [x] `tasks.md` con la fase seleccionada
- [x] contratos aplicables revisados

### Decisiones previas

- [x] decision requerida antes de ejecutar

### Estado tecnico

- [x] condicion tecnica requerida

---

## 4. Alcance

### Si entra

- [x] crear `.codex/agents/sdd-artifact-writer.toml`
- [x] crear `.codex/agents/sdd-phase-worker.toml`
- [x] actualizar skills SDD relevantes para autorizar writers de forma explícita
- [x] validar que los seis agentes existentes sigan `read-only`

### No entra

- [x] modificar runtime Astro
- [x] cambiar `.codex/config.toml`
- [x] tocar skills no SDD

---

## 5. Checklist de ejecucion

Actualiza este checklist durante la ejecucion, no solo al final.

### Bloque A - Perfiles writer

- [x] crear `.codex/agents/sdd-artifact-writer.toml`
- [x] crear `.codex/agents/sdd-phase-worker.toml`
- [x] validar que ambos usan `workspace-write`

### Bloque B - Skills autorizadoras

- [x] actualizar `sdd-intake`
- [x] actualizar `sdd-plan`
- [x] actualizar `sdd-tasks`
- [x] actualizar `sdd-phase-backlog`
- [x] actualizar `sdd-execute-phase`

### Bloque C - Verificacion de consistencia

- [x] comprobar que los perfiles advisory existentes siguen `read-only`
- [x] comprobar que solo skills SDD autorizadas mencionan los writers
- [x] registrar hallazgos y cierre

---

## 6. Archivos o areas probables

### Docs

- `docs/sdd/parches/subagent-writers/*`

### Codigo

- ninguno

### Configuracion o tests

- `.codex/agents/sdd-artifact-writer.toml`
- `.codex/agents/sdd-phase-worker.toml`
- `.codex/skills/sdd-intake/SKILL.md`
- `.codex/skills/sdd-plan/SKILL.md`
- `.codex/skills/sdd-tasks/SKILL.md`
- `.codex/skills/sdd-phase-backlog/SKILL.md`
- `.codex/skills/sdd-execute-phase/SKILL.md`

---

## 7. Hallazgos durante ejecucion

- Fecha: `2026-04-26`
  - hallazgo: las skills SDD existentes no prohibían writers, pero tampoco los autorizaban ni acotaban
  - impacto: sin cambios en `SKILL.md`, la nueva capacidad quedaría implícita y difícil de auditar
  - accion: documentar la delegación permitida por skill y su límite operativo

---

## 8. Blockers

- [ ] Ninguno

---

## 9. Decisiones tomadas

- Fecha: `2026-04-26`
  - decision: `sdd-artifact-writer` puede redactar o actualizar solo el artefacto que la skill le asigne dentro de `docs/sdd/parches/<change-id>/`
  - razon: alinea el brief con un ownership simple por artefacto
  - documentos o areas afectadas: `.codex/agents/sdd-artifact-writer.toml`, skills SDD de artefactos

- Fecha: `2026-04-26`
  - decision: `sdd-phase-worker` puede tocar backlog de fase solo cuando `sdd-execute-phase` se lo delega de forma explícita junto con la implementación
  - razon: la skill de ejecución exige backlog vivo y el worker necesita poder reflejar el progreso delegado sin ampliar scope
  - documentos o areas afectadas: `.codex/agents/sdd-phase-worker.toml`, `.codex/skills/sdd-execute-phase/SKILL.md`

---

## 10. Validaciones

### Documentales

- [x] verificar alineacion con `docs/README.md`
- [x] verificar alineacion con contratos aplicables
- [x] verificar que el backlog sigue trazable a `tasks.md`

### Tecnicas

- [x] `npm run build`, si aplica
- [x] `npm test`, si aplica
- [x] otra validacion relevante

### Manuales

- [x] revision visual/manual, si aplica
- [x] revision funcional, si aplica

### Resultados

- Comando o revision: búsquedas textuales de perfiles, `sandbox_mode` y referencias a writers
- Resultado: completado
- Notas: no aplica `npm run build` ni `npm test` porque no hubo cambios del portfolio ni de lógica test-covered

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

- que una skill futura use writers sin actualizar esta política

### Pendientes

- ninguno dentro del alcance aprobado

---

## 13. Registro de cambios

- 2026-04-26:
  - cambio: creacion y cierre de backlog de Fase 2
  - razon: ejecutar la fase de perfiles writer y autorización por skill
