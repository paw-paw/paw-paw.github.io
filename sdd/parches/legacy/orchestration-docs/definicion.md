# Definicion: Orchestration Docs

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

- Change id: `orchestration-docs`
- Estado: `done`
- Fuente: `_inbox/codex_sdd_orchestration_docs_prompt.md`
- Ultima actualizacion: `2026-04-25`
- Owner: `pawpaw + Codex`

---

## 1. Objetivo

Crear una definicion inicial para producir documentacion de soporte bajo demanda para la orquestacion SDD del repo. El handover fuente pide una carpeta futura en `docs/sdd/orchestration/` con reglas de coordinacion, routing de skills, maquina de estados de artefactos, uso de subagentes, politica de modelo, decision gates y manejo de drift.

El objetivo de este intake es dejar trazable el cambio `orchestration-docs` antes de planificarlo. La ejecucion posterior debe ayudar a que las skills SDD tengan referencias operativas mas profundas sin duplicar `AGENTS.md`, sin reescribir las skills todavia y sin tocar runtime Astro.

---

## 2. No objetivos

- [ ] No crear todavia `docs/sdd/orchestration/`.
- [ ] No modificar codigo fuente ni runtime Astro.
- [ ] No modificar las skills en esta fase de intake.
- [ ] No modificar `AGENTS.md` en esta fase de intake.
- [ ] No convertir `docs/sdd/orchestration/` en una fuente contractual superior a `docs/README.md`.
- [ ] No implementar una skill `sdd-router` durante este intake.

---

## 3. Fuentes de verdad aplicables

- `docs/README.md`
- `AGENTS.md`
- `docs/AGENTS.md`
- `docs/sdd/parches/orchestration-docs/handover.md`
- `docs/sdd/templates/definicion.md`
- documentos contractuales aplicables:
  - ninguno de producto por defecto; si la ejecucion futura toca estrategia, arquitectura, contenido, visual, i18n, SEO o deployment, debera escalar y actualizar el contrato correspondiente
- documentos auxiliares aplicables:
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
- `docs/sdd/` es auxiliar operativo, no contrato superior
- el handover fuente debe tratarse como input preservado, no como decision ya implementada

---

## 4. Alcance

### Si entra

- [ ] Conservar el handover fuente dentro del workspace `docs/sdd/parches/orchestration-docs/`.
- [ ] Definir el alcance inicial para documentacion de soporte SDD bajo demanda.
- [ ] Identificar que la ejecucion futura probablemente debe crear exactamente estos documentos:
  - `docs/sdd/orchestration/README.md`
  - `docs/sdd/orchestration/orchestration-rules.md`
  - `docs/sdd/orchestration/skill-routing.md`
  - `docs/sdd/orchestration/artifact-state-machine.md`
  - `docs/sdd/orchestration/subagent-policy.md`
  - `docs/sdd/orchestration/model-policy.md`
  - `docs/sdd/orchestration/decision-gates.md`
  - `docs/sdd/orchestration/drift-policy.md`
- [ ] Mantener la futura documentacion como soporte bajo demanda para orquestacion SDD.
- [ ] Preservar la regla central: `AGENTS.md` gobierna, las skills operan, los subagentes asesoran y la sesion principal de Codex decide.

### Fuera de alcance

- [ ] Escribir los documentos finales de `docs/sdd/orchestration/` durante intake.
- [ ] Cambiar `.codex/skills/`.
- [ ] Cambiar `.codex/agents/`.
- [ ] Cambiar `.codex/config.toml`.
- [ ] Cambiar `AGENTS.md`.
- [ ] Cambiar docs contractuales de producto.
- [ ] Ejecutar validaciones Astro.

---

## 5. Superficies afectadas

### Docs

- `docs/sdd/parches/orchestration-docs/handover.md`
- `docs/sdd/parches/orchestration-docs/definicion.md`
- `docs/sdd/parches/orchestration-docs/decision.log`
- futura ejecucion: `docs/sdd/orchestration/*.md`

### Codigo o contenido

- ninguno previsto

### Configuracion o validacion

- ninguna prevista para intake
- futura ejecucion: validacion documental por lectura/revision; `npm run build` no deberia aplicar salvo drift de alcance

---

## 6. Decisiones conocidas

- decision:
  - usar `orchestration-docs` como `change-id`
  - razon: el usuario lo pidio explicitamente
  - documentos o areas afectadas: `docs/sdd/parches/orchestration-docs/`
- decision:
  - preservar el handover completo en `handover.md`
  - razon: el source material es extenso y define archivos esperados, restricciones y contenido por documento
  - documentos o areas afectadas: `docs/sdd/parches/orchestration-docs/handover.md`
- decision:
  - tratar `docs/sdd/orchestration/` como documentacion auxiliar operativa bajo demanda, no como contrato superior
  - razon: `docs/README.md` define `docs/sdd/` como auxiliar operativo
  - documentos o areas afectadas: futura carpeta `docs/sdd/orchestration/`

---

## 7. Decisiones abiertas

- [ ] Confirmar si la ejecucion futura debe crear literalmente `docs/sdd/orchestration/` aunque el workspace del cambio sea `docs/sdd/parches/orchestration-docs/`.
  - por que bloquea: afecta rutas y referencias internas de la documentacion nueva
  - quien debe decidir: usuario o `sdd-plan` si no hay contradiccion
- [ ] Resolver como documentar `sdd-router`.
  - por que bloquea: el handover lo menciona como parte del sistema, pero la skill no existe actualmente bajo `.codex/skills/`
  - quien debe decidir: usuario si se quiere crear la skill; `sdd-plan` si solo se documenta como futura pieza/no existente
- [ ] Confirmar si `model-policy.md` debe listar modelos concretos tal como aparecen en el handover o usar una politica menos versionada.
  - por que bloquea: los modelos disponibles pueden cambiar y una politica demasiado especifica puede quedar obsoleta
  - quien debe decidir: usuario durante planning
- [ ] Confirmar si la documentacion futura debe considerarse soporte auxiliar o parte de un contrato operativo estable.
  - por que bloquea: afecta si se debe actualizar `docs/README.md` o solo crear documentos auxiliares dentro de `docs/sdd/`
  - quien debe decidir: usuario si se cambia la taxonomia documental

---

## 8. Riesgos

- riesgo:
  - impacto: duplicar `AGENTS.md` o las skills dentro de `docs/sdd/orchestration/`
  - mitigacion: mantener los documentos como referencia bajo demanda y citar reglas en vez de copiarlas completas
- riesgo:
  - impacto: documentar `sdd-router` como activo cuando no existe en el repo
  - mitigacion: marcarlo como decision abierta o futuro componente hasta que exista
- riesgo:
  - impacto: convertir `docs/sdd/orchestration/` en una capa contractual accidental
  - mitigacion: repetir que `docs/README.md` y los contratos superiores mandan
- riesgo:
  - impacto: sobre-orquestar cambios pequenos con demasiadas reglas
  - mitigacion: incluir criterios claros de "no usar SDD" y "no leer esta carpeta"
- riesgo:
  - impacto: politica de modelos demasiado rigida u obsoleta
  - mitigacion: tratarla como orientacion operativa, no como requisito fijo

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

- 2026-04-25:
  - cambio: creacion inicial de la definicion `orchestration-docs`
  - razon: iniciar el flujo SDD desde `_inbox/codex_sdd_orchestration_docs_prompt.md`
- 2026-04-25:
  - cambio: cierre de estado de la definicion
  - razon: las fases del cambio fueron ejecutadas y validadas
