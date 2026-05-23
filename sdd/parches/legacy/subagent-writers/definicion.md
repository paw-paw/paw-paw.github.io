# Definicion: Subagent Writers

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

- Change id: `subagent-writers`
- Estado: `done`
- Fuente: `_inbox/brief_new_subagents.md`
- Ultima actualizacion: `2026-04-26`
- Owner: `pawpaw + Codex`

---

## 1. Objetivo

Actualizar la arquitectura local de orquestación Codex para mantener los subagentes read-only existentes y agregar dos writers controlados con alcance acotado. El cambio debe dejar trazable qué agentes pueden escribir, bajo qué skills se autoriza esa escritura y cómo se preserva el ownership centralizado del manager runtime.

Al cerrar este cambio, el repo debe tener perfiles writer explícitos, skills SDD que los habiliten solo en pasos concretos, y documentación local sincronizada para evitar drift entre gobierno, orquestación y ejecución real.

---

## 2. No objetivos

- [ ] No convertir todos los subagentes en write-capable.
- [ ] No permitir escritura libre fuera de artefactos SDD o de una fase aprobada.
- [ ] No cambiar runtime Astro, rutas públicas, SEO, i18n o deployment.
- [ ] No introducir dependencias nuevas.
- [ ] No cambiar `agents.max_depth`.

---

## 3. Fuentes de verdad aplicables

- `docs/README.md`
- `AGENTS.md`
- `docs/AGENTS.md`
- `docs/sdd/orchestration/orchestration-rules.md`
- `docs/sdd/orchestration/subagent-policy.md`
- `docs/sdd/orchestration/model-policy.md`
- `docs/sdd/orchestration/decision-gates.md`
- documentos contractuales aplicables:
  - ninguno de producto; el cambio es de gobierno operativo local bajo `.codex/` y `docs/sdd/`
- documentos auxiliares aplicables:
  - `.codex/config.toml`
  - `.codex/agents/*.toml`
  - `.codex/skills/sdd-intake/SKILL.md`
  - `.codex/skills/sdd-plan/SKILL.md`
  - `.codex/skills/sdd-tasks/SKILL.md`
  - `.codex/skills/sdd-phase-backlog/SKILL.md`
  - `.codex/skills/sdd-execute-phase/SKILL.md`
  - `docs/sdd/templates/definicion.md`
- fuentes externas o handovers:
  - `docs/sdd/parches/subagent-writers/handover.md`

Nota:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- `docs/sdd/` es auxiliar operativo, no contrato superior
- si el cambio altera reglas estables de orquestación local, debe sincronizar `AGENTS.md` y la documentación de soporte correspondiente

---

## 4. Alcance

### Si entra

- [ ] Crear `.codex/agents/sdd-artifact-writer.toml`.
- [ ] Crear `.codex/agents/sdd-phase-worker.toml`.
- [ ] Mantener read-only los seis perfiles locales existentes.
- [ ] Actualizar `AGENTS.md` para reflejar la nueva mezcla de advisory read-only y writers controlados.
- [ ] Actualizar documentación de orquestación para dejar explícita la política de writers y el rol central del manager.
- [ ] Actualizar las skills SDD que autorizan drafting de artefactos o ejecución de fases para que mencionen cuándo puede usarse un writer.

### Fuera de alcance

- [ ] Cambiar skills no relacionadas con SDD.
- [ ] Crear nuevos workflows fuera de intake, plan, tasks, phase backlog y execute phase.
- [ ] Cambiar límites de concurrencia salvo que una contradicción real lo exija.
- [ ] Reescribir artefactos SDD históricos no relacionados.

---

## 5. Superficies afectadas

### Docs

- `AGENTS.md`
- `docs/sdd/orchestration/README.md`
- `docs/sdd/orchestration/orchestration-rules.md`
- `docs/sdd/orchestration/subagent-policy.md`
- `docs/sdd/orchestration/model-policy.md`
- `docs/sdd/orchestration/decision-gates.md`
- `docs/sdd/parches/subagent-writers/*`

### Codigo o contenido

- ninguna superficie pública del portfolio

### Configuracion o validacion

- `.codex/agents/sdd-artifact-writer.toml`
- `.codex/agents/sdd-phase-worker.toml`
- `.codex/skills/sdd-intake/SKILL.md`
- `.codex/skills/sdd-plan/SKILL.md`
- `.codex/skills/sdd-tasks/SKILL.md`
- `.codex/skills/sdd-phase-backlog/SKILL.md`
- `.codex/skills/sdd-execute-phase/SKILL.md`
- `.codex/config.toml`

---

## 6. Decisiones conocidas

- decision:
  - usar `subagent-writers` como `change-id`
  - razon: nombra el cambio por su efecto principal y evita colisión con workspaces existentes
  - documentos o areas afectadas: `docs/sdd/parches/subagent-writers/`
- decision:
  - mantener `max_depth = 1`
  - razon: el brief pide manager runtime con ownership centralizado y no habilita delegación recursiva
  - documentos o areas afectadas: `.codex/config.toml`, `AGENTS.md`, docs de orquestación
- decision:
  - los únicos perfiles write-capable serán `sdd-artifact-writer` y `sdd-phase-worker`
  - razon: el brief lo define explícitamente
  - documentos o areas afectadas: `.codex/agents/`, `AGENTS.md`, skills SDD, docs de orquestación

---

## 7. Decisiones abiertas

- [x] Ninguna abierta al cierre de esta entrega.

---

## 8. Riesgos

- riesgo:
  - impacto: introducir writers sin una autorización explícita por skill y abrir una convención implícita
  - mitigacion: actualizar cada `SKILL.md` relevante con límites concretos
- riesgo:
  - impacto: dejar drift entre `AGENTS.md`, perfiles `.toml` y docs de orquestación
  - mitigacion: sincronizar las tres capas en la misma ejecución
- riesgo:
  - impacto: convertir writers en reemplazo del manager
  - mitigacion: reforzar ownership centralizado y “un writer por artefacto o zona”
- riesgo:
  - impacto: que un writer parezca autorizado para tocar runtime fuera de fase
  - mitigacion: limitar `sdd-artifact-writer` a `docs/sdd/parches/<change-id>/` y `sdd-phase-worker` a una fase aprobada

---

## 9. Criterio de cierre

La definicion queda lista para `sdd-plan` solo si:

- [x] objetivo y no objetivos estan claros
- [x] las fuentes de verdad aplicables estan listadas
- [x] el alcance y fuera de alcance no se contradicen
- [x] las decisiones abiertas estan visibles
- [x] los riesgos principales estan identificados

---

## 10. Registro de cambios

- 2026-04-26:
  - cambio: creacion inicial de la definicion `subagent-writers`
  - razon: abrir un flujo SDD completo a partir del brief actualizado
- 2026-04-26:
  - cambio: cierre de estado de la definicion
  - razon: el plan, las tareas y la ejecucion cerraron sin decisiones humanas pendientes
