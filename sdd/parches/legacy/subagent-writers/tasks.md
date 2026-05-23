# Tasks: Subagent Writers

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

- Change id: `subagent-writers`
- Estado: `done`
- Ultima actualizacion: `2026-04-26`
- Owner: `pawpaw + Codex`
- Depende de:
  - `docs/README.md`
  - `docs/sdd/parches/subagent-writers/definicion.md`
  - `docs/sdd/parches/subagent-writers/plan.md`
  - `docs/sdd/parches/subagent-writers/decision.log`
- Desbloquea:
  - `sdd-phase-backlog`

---

## 1. Fuente de verdad aplicable

- `docs/README.md`
- `docs/sdd/parches/subagent-writers/definicion.md`
- `docs/sdd/parches/subagent-writers/plan.md`
- `docs/sdd/parches/subagent-writers/decision.log`
- documentos contractuales aplicables:
  - ninguno de producto
- documentos auxiliares aplicables:
  - `AGENTS.md`
  - `docs/AGENTS.md`
  - `docs/sdd/orchestration/*.md`
  - `.codex/agents/*.toml`
  - `.codex/skills/sdd-*.md`

Nota:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- este `tasks.md` no puede contradecir `definicion.md`, `plan.md` ni documentos contractuales
- la delegación write-capable debe seguir siendo explícita, localizada y trazable

---

## 2. Resumen del plan

El cambio agrega dos perfiles writer controlados y sincroniza la política de orquestación para que la delegación de escritura siga siendo excepcional. El trabajo se divide en una fase de gobierno y documentación, seguida por una fase de implementación de perfiles y autorización explícita por skill.

No hay decisiones humanas bloqueantes. El cierre depende de validación documental y búsquedas textuales; no se esperan validaciones `npm` porque no se toca runtime del portfolio.

---

## 3. Fases

### Fase 1 - Gobierno y documentación de writers

- Objetivo:
  - actualizar gobierno local y documentación de orquestación para describir correctamente la nueva estructura
- Precondiciones:
  - `plan.md` vigente
  - no cambiar runtime Astro ni dependencias
- Tareas:
  - [ ] actualizar `AGENTS.md` con la nueva clasificación de agentes locales
  - [ ] actualizar `docs/sdd/orchestration/README.md`
  - [ ] actualizar `docs/sdd/orchestration/orchestration-rules.md`
  - [ ] actualizar `docs/sdd/orchestration/subagent-policy.md`
  - [ ] actualizar `docs/sdd/orchestration/model-policy.md`
  - [ ] actualizar `docs/sdd/orchestration/decision-gates.md`
- Archivos o areas probables:
  - `AGENTS.md`
  - `docs/sdd/orchestration/*.md`
- Validaciones:
  - [ ] verificar que la política sigue siendo read-only por defecto
  - [ ] verificar que solo dos writers están previstos
  - [ ] verificar que el manager conserva ownership centralizado
- Criterio de cierre:
  - la documentación ya no afirma que todos los perfiles locales son read-only y describe el control por skill sin contradicciones

### Fase 2 - Perfiles writer y autorización explícita por skill

- Objetivo:
  - crear los perfiles writer y enlazarlos solo desde skills SDD concretas
- Precondiciones:
  - Fase 1 cerrada
  - alcance de los dos writers documentado
- Tareas:
  - [ ] crear `.codex/agents/sdd-artifact-writer.toml`
  - [ ] crear `.codex/agents/sdd-phase-worker.toml`
  - [ ] actualizar `sdd-intake`, `sdd-plan`, `sdd-tasks` y `sdd-phase-backlog` para autorizar `sdd-artifact-writer` solo cuando corresponda
  - [ ] actualizar `sdd-execute-phase` para autorizar `sdd-phase-worker` solo cuando exista backlog activo y no haya decisión humana pendiente
  - [ ] validar que los perfiles advisory existentes sigan `read-only`
- Archivos o areas probables:
  - `.codex/agents/*.toml`
  - `.codex/skills/*.md`
- Validaciones:
  - [ ] verificar `sandbox_mode` por perfil
  - [ ] verificar referencias textuales a los dos writers en skills y docs
  - [ ] verificar que `.codex/config.toml` sigue compatible y sin cambios
- Criterio de cierre:
  - los writers existen, están acotados y solo aparecen como opción delegable en skills SDD autorizadas

---

## 4. Dependencias entre fases

- Fase 1 bloquea:
  - Fase 2
- Fase 2 bloquea:
  - cierre del cambio `subagent-writers`

---

## 5. Decisiones y bloqueos

### Decisiones abiertas

- [x] Ninguna bloqueante para ejecutar la Fase 1.

### Bloqueos

- [x] Ningun bloqueo actual.

### Escalaciones requeridas

- [ ] Escalar al usuario si aparece necesidad de cambiar routing, deployment, i18n, SEO, runtime Astro o dependencias.

---

## 6. Tareas diferidas

- [ ] Evaluar en otro cambio si alguna skill no SDD necesita writers controlados.
- [ ] Evaluar en otro cambio si conviene endurecer validación automática de `.codex/agents/*.toml`.

---

## 7. Validaciones globales

### Documentales

- [ ] verificar alineacion con `docs/README.md`
- [ ] verificar alineacion con `AGENTS.md`
- [ ] verificar trazabilidad desde `plan.md`
- [ ] verificar consistencia entre docs, skills y perfiles `.toml`

### Tecnicas

- [ ] no aplica `npm run build`
- [ ] no aplica `npm test`
- [ ] usar busquedas textuales para confirmar perfiles y autorizaciones

### Manuales

- [ ] revision editorial/manual de claridad operativa
- [ ] revision manual de límites por skill y por perfil

---

## 8. Criterio de cierre

Este `tasks.md` queda listo para `sdd-phase-backlog` solo si:

- [x] cada fase tiene objetivo, precondiciones, tareas, validaciones y criterio de cierre
- [x] no hay decisiones abiertas que bloqueen la fase seleccionada
- [x] cada tarea es trazable al `plan.md`
- [x] las validaciones son reales y no inventan scripts

---

## 9. Registro de cambios

- 2026-04-26:
  - cambio: creacion inicial de `tasks.md` para `subagent-writers`
  - razon: dividir el plan en fases ejecutables
- 2026-04-26:
  - cambio: cierre de estado de `tasks.md`
  - razon: Fase 1 y Fase 2 quedaron ejecutadas y verificadas
