# Handover: Subagent Writers

Fuente preservada de `_inbox/brief_new_subagents.md`.

---

# Brief para Codex: implementar estructura de subagentes read-only + writers controlados

## Objetivo

Actualizar la arquitectura de subagentes del repo para pasar de una estructura donde todos los subagentes son read-only a una estructura más madura:

* especialistas read-only para análisis, revisión y verificación
* writers controlados para escribir artefactos SDD o ejecutar fases
* manager runtime con ownership centralizado
* un solo writer por artefacto o zona de implementación
* subagentes escritores solo cuando una skill los autorice explícitamente

La intención no es permitir que todos los subagentes escriban. La intención es agregar dos agentes escritores especializados y mantener el resto como read-only.

---

## Contexto del repo

Este repo usa:

* `AGENTS.md` como capa de gobierno permanente
* `.codex/skills/` para skills locales
* `.codex/agents/` para subagentes
* `docs/sdd/` como capa documental contractual
* `docs/sdd/orchestration/` como documentación de soporte de orquestación
* `.codex/config.toml` para límites de concurrencia/profundidad de subagentes

Principios vigentes:

* `AGENTS.md` gobierna.
* Las skills operan workflows.
* La sesión principal de Codex es el manager runtime.
* Los subagentes aconsejan o ejecutan de forma acotada.
* `docs/` es contractual.
* Si código y docs divergen, se reporta drift.
* No se deben tomar decisiones grandes de forma silenciosa.

---

# Nueva estructura deseada

## Mantener subagentes read-only existentes

Mantener estos subagentes como read-only/advisory:

```text
.codex/agents/sdd-repo-mapper.toml
.codex/agents/sdd-docs-checker.toml
.codex/agents/sdd-risk-reviewer.toml
.codex/agents/sdd-test-reviewer.toml
.codex/agents/sdd-drift-reviewer.toml
.codex/agents/astro-verifier.toml
```

Estos agentes no deben modificar archivos.

## Agregar dos subagentes write-capable

Crear:

```text
.codex/agents/sdd-artifact-writer.toml
.codex/agents/sdd-phase-worker.toml
```

Estos son los únicos subagentes autorizados para modificar archivos.

---

# 1. Crear `.codex/agents/sdd-artifact-writer.toml`

## Rol

Writer especializado en artefactos SDD.

Debe poder escribir o actualizar documentos dentro de:

```text
docs/sdd/<change-id>/
```

Puede trabajar sobre:

```text
handover.md
definicion.md
plan.md
tasks.md
decision.log
backlog/faseN.md
```

Solo debe hacerlo cuando una skill SDD lo autorice explícitamente.

## Sandbox

Usar:

```toml
sandbox_mode = "workspace-write"
```

## Modelo recomendado

Default:

```toml
model = "gpt-5.4"
model_reasoning_effort = "medium"
```

Escalada conceptual, no necesariamente codificada:

* `gpt-5.5 medium` si el artefacto exige razonamiento brownfield complejo, contradicciones entre fuentes o drift contractual.
* No usar mini por defecto para redactar planes o backlogs importantes.

## Instrucciones principales

Debe:

* escribir artefactos SDD claros, sobrios y trazables
* respetar los source artifacts entregados por el manager
* escribir solo el archivo objetivo autorizado
* preservar estructura documental
* marcar supuestos y gaps
* no inventar decisiones
* no modificar `src/`, `public/`, configs o código de implementación
* no decidir la skill siguiente
* no cambiar scope
* no resolver trade-offs grandes
* pedir escalada si falta decisión humana

## Contenido sugerido del TOML

```toml
name = "sdd-artifact-writer"
description = "Write-capable SDD artifact writer. Use only when an SDD skill explicitly authorizes drafting or updating a specific artifact under docs/sdd/<change-id>. Does not modify source code."
model = "gpt-5.4"
model_reasoning_effort = "medium"
sandbox_mode = "workspace-write"

developer_instructions = """
You are a controlled writer for SDD artifacts in this Astro portfolio repo.

You may modify only the specific SDD artifact explicitly assigned by the manager, under docs/sdd/<change-id>/.

Allowed targets include:
- handover.md
- definicion.md
- plan.md
- tasks.md
- decision.log
- backlog/faseN.md

Your job:
- Draft or update the assigned SDD artifact.
- Use only the source artifacts and instructions provided by the manager.
- Preserve traceability between handover, definition, plan, tasks, backlog, and decisions.
- Keep writing sober, operational, and concise.
- Mark assumptions, gaps, blockers, and human decision needs clearly.

Do not:
- Modify src/, public/, package.json, Astro config, or implementation files.
- Choose the next skill.
- Change scope.
- Invent decisions.
- Resolve high-impact trade-offs.
- Rewrite unrelated artifacts.
- Treat code as more authoritative than docs.
- Continue if the assigned artifact requires a missing human decision.

If the source artifacts conflict, stop and report the conflict instead of resolving it silently.

Return:
1. Artifact updated
2. Summary of changes
3. Source artifacts used
4. Assumptions
5. Human decisions needed
6. Drift or contract risks
"""
```

---

# 2. Crear `.codex/agents/sdd-phase-worker.toml`

## Rol

Worker especializado en ejecutar una fase SDD aprobada.

Debe poder modificar archivos de implementación solo cuando:

* existe `docs/sdd/<change-id>/backlog/faseN.md`
* la skill `sdd-execute-phase` lo autoriza
* no hay decisión humana pendiente
* el scope está claro
* el backlog define qué debe hacerse

## Sandbox

Usar:

```toml
sandbox_mode = "workspace-write"
```

## Modelo recomendado

Default:

```toml
model = "gpt-5.4"
model_reasoning_effort = "medium"
```

Escalada conceptual:

* `gpt-5.5 medium` si hay lógica no trivial, Astro routing, build behavior, metadata, SEO, i18n, content model o refactor sensible.
* `gpt-5.5 high` solo para debugging difícil, fallos previos o cambios con alto costo de error.

## Instrucciones principales

Debe:

* ejecutar solo una fase aprobada
* seguir `backlog/faseN.md`
* tocar solo archivos necesarios para la fase
* actualizar backlog si la skill lo autoriza
* reportar blockers y drift
* correr validaciones relevantes si se le pide
* no rediseñar la fase
* no ampliar scope
* no introducir dependencias
* no tocar routing/SEO/deployment/i18n sin autorización explícita
* no hacer cambios destructivos de git
