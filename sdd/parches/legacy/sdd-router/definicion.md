# Definicion: sdd-router

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

- Change id: `sdd-router`
- Estado: `done`
- Fuente: `docs/sdd/parches/sdd-router/handover.md`
- Ultima actualizacion: `2026-04-25`
- Owner: `pawpaw + Codex`

---

## 1. Objetivo

Crear una skill local ligera llamada `sdd-router` para diagnosticar el estado de un cambio y recomendar la siguiente skill o el workflow normal correcto. El cierre del cambio debe dejar una puerta de entrada clara al flujo SDD sin reemplazar a `AGENTS.md` ni a las skills SDD existentes.

El cambio tambien debe sincronizar la documentacion auxiliar de orquestacion y el indice de skills del repo para que `sdd-router` deje de figurar como futuro o inexistente.

---

## 2. No objetivos

- [ ] No crear una skill ejecutora o manager completa.
- [ ] No reemplazar `AGENTS.md`.
- [ ] No modificar runtime Astro.
- [ ] No añadir dependencias nuevas.
- [ ] No convertir `sdd-router` en un requisito obligatorio para cambios pequenos.

---

## 3. Fuentes de verdad aplicables

- `docs/README.md`
- `AGENTS.md`
- `docs/sdd/orchestration/README.md`
- `docs/sdd/orchestration/orchestration-rules.md`
- `docs/sdd/orchestration/skill-routing.md`
- `docs/sdd/orchestration/artifact-state-machine.md`
- `docs/sdd/orchestration/decision-gates.md`
- `docs/sdd/orchestration/drift-policy.md`
- `docs/sdd/orchestration/subagent-policy.md`
- `docs/sdd/orchestration/model-policy.md`
- `.codex/skills/sdd-intake/SKILL.md`
- `.codex/skills/sdd-plan/SKILL.md`
- `.codex/skills/sdd-tasks/SKILL.md`
- `.codex/skills/sdd-phase-backlog/SKILL.md`
- `.codex/skills/sdd-execute-phase/SKILL.md`
- `.codex/skills/sdd-sync-drift/SKILL.md`
- `.codex/skills/astro-pages-verify/SKILL.md`
- `.codex/skills/.system/skill-creator/SKILL.md`
- `docs/sdd/parches/orchestration-docs/handover.md`
- `docs/sdd/parches/orchestration-docs/definicion.md`

Nota:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- `docs/sdd/parches/` es el workspace contractual del cambio
- `docs/sdd/orchestration/` es documentacion auxiliar operativa

---

## 4. Alcance

### Si entra

- [ ] crear `.codex/skills/sdd-router/SKILL.md`
- [ ] sincronizar `docs/sdd/orchestration/` para que `sdd-router` aparezca como skill existente y no como futura
- [ ] actualizar `AGENTS.md` para incluir `sdd-router` en la tabla de skills locales
- [ ] mantener el router ligero, diagnostico y advisory
- [ ] documentar claramente cuando usar `sdd-router` y cuando no usar SDD

### Fuera de alcance

- [ ] crear un manager nuevo o reemplazar la sesion principal
- [ ] cambiar runtime Astro o validaciones publicas del sitio
- [ ] abrir una convencion nueva fuera de la familia SDD
- [ ] crear `agents/openai.yaml` si no hace falta para este repo

---

## 5. Superficies afectadas

### Docs

- `AGENTS.md`
- `docs/sdd/orchestration/README.md`
- `docs/sdd/orchestration/orchestration-rules.md`
- `docs/sdd/orchestration/skill-routing.md`
- `docs/sdd/orchestration/artifact-state-machine.md`
- `docs/sdd/orchestration/decision-gates.md`
- `docs/sdd/orchestration/drift-policy.md`

### Codigo o contenido

- `.codex/skills/sdd-router/SKILL.md`

### Configuracion o validacion

- ninguna prevista para runtime

---

## 6. Decisiones conocidas

- decision:
  - crear `sdd-router` como skill real
  - razon: el repositorio ya tiene routing diagnosis documentado como necesidad y el usuario lo pidio expresamente
  - documentos o areas afectadas: `.codex/skills/sdd-router/SKILL.md`, `AGENTS.md`, `docs/sdd/orchestration/*`
- decision:
  - mantener `sdd-router` como skill ligera y read-only
  - razon: evitar duplicar `AGENTS.md` o convertir el router en un manager completo
  - documentos o areas afectadas: `.codex/skills/sdd-router/SKILL.md`
- decision:
  - sincronizar la documentacion de orquestacion para dejar de presentar `sdd-router` como ausente
  - razon: evitar drift documental con el nuevo estado del repo
  - documentos o areas afectadas: `docs/sdd/orchestration/*`

---

## 7. Decisiones abiertas

- [ ] decidir si hace falta `agents/openai.yaml` para esta skill
  - por que bloquea: podria ser un archivo extra innecesario si el repo no lo usa para todas las skills
  - quien debe decidir: `sdd-plan`
- [ ] decidir el grado exacto de detalle que debe devolver el router
  - por que bloquea: puede afectar el tamaño y la forma del skill
  - quien debe decidir: `sdd-plan`

---

## 8. Riesgos

- riesgo:
  - impacto: que `sdd-router` duplique `AGENTS.md` o la documentacion de orquestacion
  - mitigacion: mantenerlo corto, diagnostico y con salidas concretas
- riesgo:
  - impacto: que la documentacion siga diciendo que `sdd-router` no existe
  - mitigacion: sincronizar `docs/sdd/orchestration/` y `AGENTS.md` en la misma entrega
- riesgo:
  - impacto: sobre-orquestar cambios pequenos
  - mitigacion: incluir criterio claro de no usar SDD

---

## 9. Criterio de cierre

La definicion queda lista para `sdd-plan` solo si:

- [ ] objetivo y no objetivos estan claros
- [ ] las fuentes de verdad aplicables estan listadas
- [ ] el alcance y fuera de alcance no se contradicen
- [ ] las decisiones abiertas estan visibles
- [ ] los riesgos principales estan identificados

---

## 10. Registro de cambios

- 2026-04-25:
  - cambio: creacion inicial de la definicion `sdd-router`
  - razon: iniciar el flujo SDD desde el brief del usuario
- 2026-04-25:
  - cambio: cierre de la definicion `sdd-router`
  - razon: la skill, la documentacion auxiliar y el indice de skills quedaron sincronizados
