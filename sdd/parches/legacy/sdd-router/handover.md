# Handover: sdd-router

## Brief

Crear una skill local llamada `sdd-router` en `.codex/skills/sdd-router/SKILL.md`.
Su trabajo es diagnosticar el estado de un cambio SDD y recomendar el siguiente paso correcto:
`sdd-intake`, `sdd-plan`, `sdd-tasks`, `sdd-phase-backlog`, `sdd-execute-phase`, `sdd-sync-drift`, `astro-pages-verify`, no usar SDD, o detenerse por decisión humana/conflicto documental.

La skill debe ser ligera, diagnostica y no ejecutora. No reemplaza a `AGENTS.md` ni a las skills SDD existentes.

## Constraints from the user brief

- `sdd-router` debe ayudar al manager, no ser el manager completo.
- No debe crear artefactos finales ni ejecutar cambios.
- Debe respetar `AGENTS.md` y la precedencia documental del repo.
- Debe ser compatible con el flujo documental existente.

## Repo findings

- `docs/sdd/orchestration/skill-routing.md` y `docs/sdd/orchestration/orchestration-rules.md` todavía describen `sdd-router` como futuro o inexistente.
- `AGENTS.md` no lista `sdd-router` en la tabla de skills locales.
- Las skills SDD existentes cubren el resto del flujo, pero no la decisión de routing.
- El repositorio ya tiene un espacio SDD contractual para cambios en `docs/sdd/parches/`.

## Expected outputs

- `.codex/skills/sdd-router/SKILL.md`
- Actualizacion de `AGENTS.md` para incluir `sdd-router` en la tabla de skills
- Actualizacion de `docs/sdd/orchestration/` para dejar de tratar `sdd-router` como ausente

## Notes

- El skill debe ser read-only y advisory.
- El skill no debe duplicar `AGENTS.md`.
- El skill no debe convertirse en una mega-skill.
