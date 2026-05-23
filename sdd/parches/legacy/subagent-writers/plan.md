# Plan: Subagent Writers

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

- Change id: `subagent-writers`
- Estado: `done`
- Ultima actualizacion: `2026-04-26`
- Owner: `pawpaw + Codex`
- Depende de:
  - `docs/README.md`
  - `AGENTS.md`
  - `docs/AGENTS.md`
  - `docs/sdd/parches/subagent-writers/definicion.md`
  - `docs/sdd/parches/subagent-writers/decision.log`
- Desbloquea:
  - `sdd-tasks`

---

## 1. Fuente de verdad aplicable

- `docs/README.md`
- `docs/sdd/parches/subagent-writers/definicion.md`
- `docs/sdd/parches/subagent-writers/decision.log`
- documentos contractuales aplicables:
  - ninguno de producto; gobiernan `docs/README.md` y `AGENTS.md` como reglas operativas locales
- documentos auxiliares aplicables:
  - `docs/AGENTS.md`
  - `docs/sdd/orchestration/README.md`
  - `docs/sdd/orchestration/orchestration-rules.md`
  - `docs/sdd/orchestration/subagent-policy.md`
  - `docs/sdd/orchestration/model-policy.md`
  - `docs/sdd/orchestration/decision-gates.md`
  - `.codex/config.toml`
  - `.codex/agents/*.toml`
  - `.codex/skills/sdd-*.md`

Nota:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- este plan no puede ampliar el alcance aprobado en `definicion.md`
- si aparece drift entre gobierno local y la implementación de agentes o skills, debe sincronizarse antes de cerrar

---

## 2. Lectura brownfield

Resume el estado real del repo que condiciona el cambio:

- estructura existente:
  - existen seis perfiles `.codex/agents/*.toml`, todos `read-only`
  - `AGENTS.md` documenta agentes locales como “preferentemente de solo lectura” y lista solo perfiles advisory
  - `docs/sdd/orchestration/` ya existe y también describe subagentes como advisory/read-only por defecto
  - las skills `sdd-intake`, `sdd-plan`, `sdd-tasks`, `sdd-phase-backlog` y `sdd-execute-phase` no mencionan escritores controlados
- patrones existentes:
  - el manager runtime es la sesión principal de Codex
  - las skills SDD secuencian artefactos y ejecución por fases
  - `.codex/config.toml` mantiene `max_depth = 1`
- deuda o drift relevante:
  - si se agregan writers sin cambiar skills y docs, quedará una convención implícita no autorizada
  - `AGENTS.md` y `docs/sdd/orchestration/` quedarían falsos si siguen afirmando que todos los perfiles locales son read-only
- restricciones tecnicas:
  - no tocar runtime Astro ni assets públicos
  - no añadir dependencias
  - no abrir writers fuera de dos perfiles concretos

---

## 3. Zonas afectadas

### Docs

- `AGENTS.md`
- `docs/sdd/orchestration/README.md`
- `docs/sdd/orchestration/orchestration-rules.md`
- `docs/sdd/orchestration/subagent-policy.md`
- `docs/sdd/orchestration/model-policy.md`
- `docs/sdd/orchestration/decision-gates.md`
- `docs/sdd/parches/subagent-writers/*`

### Codigo

- ninguno

### Configuracion, tests o build

- `.codex/agents/sdd-artifact-writer.toml`
- `.codex/agents/sdd-phase-worker.toml`
- `.codex/skills/sdd-intake/SKILL.md`
- `.codex/skills/sdd-plan/SKILL.md`
- `.codex/skills/sdd-tasks/SKILL.md`
- `.codex/skills/sdd-phase-backlog/SKILL.md`
- `.codex/skills/sdd-execute-phase/SKILL.md`
- `.codex/config.toml`

---

## 4. Bloques de implementacion

### Bloque A - Gobierno y política de writers

- Objetivo:
  - sincronizar gobierno local y documentación de orquestación con la nueva estructura mixta
- Cambios esperados:
  - actualizar `AGENTS.md`
  - actualizar `docs/sdd/orchestration/README.md`
  - actualizar `docs/sdd/orchestration/orchestration-rules.md`
  - actualizar `docs/sdd/orchestration/subagent-policy.md`
  - actualizar `docs/sdd/orchestration/model-policy.md`
  - actualizar `docs/sdd/orchestration/decision-gates.md`
- Dependencias:
  - `definicion.md`
  - brief preservado
- Riesgos:
  - dejar reglas duplicadas o contradictorias

### Bloque B - Perfiles write-capable

- Objetivo:
  - agregar los dos perfiles writer acotados sin alterar los perfiles advisory existentes
- Cambios esperados:
  - crear `.codex/agents/sdd-artifact-writer.toml`
  - crear `.codex/agents/sdd-phase-worker.toml`
  - mantener `sandbox_mode = "workspace-write"` solo en esos dos perfiles
- Dependencias:
  - Bloque A
  - `.codex/config.toml`
- Riesgos:
  - describir scopes demasiado amplios o ambiguos

### Bloque C - Autorización explícita por skill

- Objetivo:
  - hacer real la regla de que solo una skill puede autorizar un writer
- Cambios esperados:
  - actualizar `sdd-intake`, `sdd-plan`, `sdd-tasks` y `sdd-phase-backlog` para permitir `sdd-artifact-writer` solo cuando el manager decida delegar el artefacto asignado
  - actualizar `sdd-execute-phase` para permitir `sdd-phase-worker` solo en una fase aprobada y sin decisión humana pendiente
- Dependencias:
  - Bloque B
- Riesgos:
  - dejar autorización demasiado genérica y abrir scope

### Bloque D - Cierre y verificación documental

- Objetivo:
  - comprobar que la estructura resultante es coherente y no requiere cambios de runtime ni validaciones Astro
- Cambios esperados:
  - revisar búsquedas textuales
  - registrar decisiones significativas
  - dejar backlog y artifacts en estado verdadero
- Dependencias:
  - Bloques A-C
- Riesgos:
  - marcar cierre sin haber sincronizado todas las capas

---

## 5. Datos, schemas y contratos

- Contratos documentales afectados:
  - ninguno de producto
- Datos o contenido afectados:
  - ninguno
- Schemas o modelos afectados:
  - perfiles `.toml` de agentes locales y reglas de uso en `SKILL.md`
- Compatibilidad esperada:
  - los seis agentes advisory siguen `read-only`
  - solo dos perfiles nuevos usan `workspace-write`
  - la delegación sigue con `max_depth = 1` y manager centralizado

---

## 6. Validaciones

### Documentales

- [ ] verificar alineacion con `docs/README.md`
- [ ] verificar alineacion con `AGENTS.md`
- [ ] verificar consistencia entre `AGENTS.md`, `.codex/agents/*.toml`, `.codex/skills/` y `docs/sdd/orchestration/`
- [ ] verificar que solo existen dos perfiles write-capable

### Tecnicas

- [ ] no aplica `npm run build` porque no hay cambio de runtime Astro ni output publico
- [ ] no aplica `npm test` porque no cambia lógica del portfolio ni tests cubiertos
- [ ] usar busquedas textuales para comprobar perfiles, sandbox y referencias

### Manuales

- [ ] revision editorial/manual de claridad operativa
- [ ] revision manual de que cada skill relevante declara cuándo puede autorizar un writer

---

## 7. Riesgos y mitigaciones

- riesgo:
  - impacto: convertir a los writers en default operativo
  - mitigacion: mantener “read-only por defecto” y exigir autorización explícita por skill
- riesgo:
  - impacto: abrir múltiples writers sobre la misma zona
  - mitigacion: documentar “un writer por artefacto o zona de implementación”
- riesgo:
  - impacto: dejar `AGENTS.md` diciendo algo distinto al runtime real
  - mitigacion: actualizar la tabla y reglas de agentes locales en la misma fase

---

## 8. Decisiones que requieren humano

- [x] Ninguna bloqueante detectada para este plan.

---

## 9. Criterio de cierre tecnico

El plan queda listo para `sdd-tasks` solo si:

- [x] el alcance respeta `definicion.md`
- [x] las zonas afectadas estan identificadas
- [x] los bloques de implementacion son secuenciables
- [x] las validaciones son reales y proporcionales
- [x] no hay decisiones abiertas que bloqueen la division en fases

---

## 10. Registro de cambios

- 2026-04-26:
  - cambio: creacion inicial del plan `subagent-writers`
  - razon: traducir el brief a un enfoque brownfield ejecutable
- 2026-04-26:
  - cambio: cierre de estado del plan
  - razon: las fases previstas se ejecutaron sin necesidad de ampliar el alcance
