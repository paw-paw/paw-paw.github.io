# Plan: sdd-router

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
  - `docs/sdd/parches/sdd-router/handover.md`
  - `docs/sdd/parches/sdd-router/decision.log`
- Desbloquea:
  - `sdd-tasks` para dividir la implementacion en fases macro

---

## 1. Fuente de verdad aplicable

- `docs/README.md`
- `AGENTS.md`
- `docs/AGENTS.md`
- `docs/sdd/parches/sdd-router/definicion.md`
- `docs/sdd/parches/sdd-router/handover.md`
- `docs/sdd/parches/sdd-router/decision.log`
- documentos contractuales aplicables:
  - ninguno de producto por defecto
- documentos auxiliares aplicables:
  - `docs/sdd/orchestration/README.md`
  - `docs/sdd/orchestration/orchestration-rules.md`
  - `docs/sdd/orchestration/skill-routing.md`
  - `docs/sdd/orchestration/artifact-state-machine.md`
  - `docs/sdd/orchestration/decision-gates.md`
  - `docs/sdd/orchestration/drift-policy.md`
  - `.codex/skills/.system/skill-creator/SKILL.md`
  - `.codex/skills/sdd-intake/SKILL.md`
  - `.codex/skills/sdd-plan/SKILL.md`
  - `.codex/skills/sdd-tasks/SKILL.md`
  - `.codex/skills/sdd-phase-backlog/SKILL.md`
  - `.codex/skills/sdd-execute-phase/SKILL.md`
  - `.codex/skills/sdd-sync-drift/SKILL.md`
  - `.codex/skills/astro-pages-verify/SKILL.md`

Nota:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- este plan no amplia el alcance aprobado en `definicion.md`
- `docs/sdd/parches/` es el workspace contractual del cambio
- `docs/sdd/orchestration/` sigue siendo documentacion auxiliar operativa

---

## 2. Lectura brownfield

El repo ya tiene una base de orquestacion SDD:

- `AGENTS.md` lista las skills SDD actuales, pero no incluye `sdd-router`.
- `docs/sdd/orchestration/skill-routing.md` dice que el routing actual lo hace la sesion activa y que `sdd-router` seria futuro.
- `docs/sdd/orchestration/orchestration-rules.md` repite que el repo no contiene todavía `.codex/skills/sdd-router/SKILL.md`.
- `.codex/skills/sdd-intake`, `sdd-plan`, `sdd-tasks`, `sdd-phase-backlog`, `sdd-execute-phase`, `sdd-sync-drift` y `astro-pages-verify` ya cubren el resto del flujo.
- El workspace SDD de `orchestration-docs` ya existe y documenta la orquestacion auxiliar, pero necesita alinearse con el hecho de que `sdd-router` deja de ser hipotetico.
- No existe `.codex/skills/sdd-router/SKILL.md`.

Restricciones tecnicas:

- No tocar runtime Astro.
- No introducir dependencias nuevas.
- Mantener la skill ligera, diagnostica y read-only.
- No convertir `sdd-router` en un manager completo.

---

## 3. Zonas afectadas

### Docs

- `AGENTS.md`
- `docs/sdd/orchestration/README.md`
- `docs/sdd/orchestration/orchestration-rules.md`
- `docs/sdd/orchestration/skill-routing.md`

### Codigo

- `.codex/skills/sdd-router/SKILL.md`

### Configuracion, tests o build

- ninguna prevista

---

## 4. Bloques de implementacion

### Bloque A - Sincronizacion documental de routing

- Objetivo:
  - dejar de describir `sdd-router` como ausente o futuro en la documentacion auxiliar y en el indice de skills del repo
- Cambios esperados:
  - actualizar `docs/sdd/orchestration/orchestration-rules.md`
  - actualizar `docs/sdd/orchestration/skill-routing.md`
  - ajustar `docs/sdd/orchestration/README.md` solo si hace falta para reflejar el nuevo routing
  - agregar `sdd-router` a la tabla de skills de `AGENTS.md`
- Dependencias:
  - definicion aprobada
  - decision de mantener el router como skill ligera
- Riesgos:
  - duplicar `AGENTS.md`
  - dejar una referencia residual que siga diciendo que `sdd-router` no existe

### Bloque B - Implementacion de la skill local

- Objetivo:
  - crear `.codex/skills/sdd-router/SKILL.md` con contrato de routing diagnostico
- Cambios esperados:
  - definir cuando usar `sdd-router`
  - definir su salida estructurada
  - definir que subagentes son opcionales y solo advisory
  - definir la recomendacion de siguiente skill o no usar SDD
- Dependencias:
  - Bloque A para alinear el contrato que la skill debe respetar
  - guía `skill-creator`
- Riesgos:
  - convertir la skill en una mini-implementacion de `AGENTS.md`
  - hacerla demasiado pesada o dependiente de modelos concretos

### Bloque C - Cierre y consistencia

- Objetivo:
  - verificar que no quedaron referencias viejas ni contradicciones
- Cambios esperados:
  - revisar rutas, nombres y referencias cruzadas
  - confirmar que `sdd-router` aparece donde corresponde
  - confirmar que no se tocaron runtime ni dependencias
- Dependencias:
  - Bloques A y B
- Riesgos:
  - dejar drift en doc auxiliar o skill index

---

## 5. Datos, schemas y contratos

- Contratos documentales afectados:
  - `AGENTS.md`
  - `docs/sdd/orchestration/orchestration-rules.md`
  - `docs/sdd/orchestration/skill-routing.md`
- Datos o contenido afectados:
  - ninguno
- Schemas o modelos afectados:
  - ninguno
- Compatibilidad esperada:
  - la skill nueva debe ser compatible con el flujo SDD existente y no alterar el orden `intake -> plan -> tasks -> phase backlog -> execution -> drift sync -> Astro verification`

---

## 6. Validaciones

### Documentales

- [ ] verificar alineacion con `docs/README.md`
- [ ] verificar alineacion con `AGENTS.md`
- [ ] verificar alineacion con `docs/sdd/orchestration/README.md`
- [ ] verificar que `sdd-router` ya no se presenta como ausente o futuro

### Tecnicas

- [ ] no aplica `npm run build`
- [ ] no aplica `npm test`
- [ ] busqueda textual para confirmar rutas, nombres y ausencia de referencias falsas

### Manuales

- [ ] revision editorial/manual de claridad operativa
- [ ] revision de que el router siga siendo ligero y advisory

---

## 7. Riesgos y mitigaciones

- riesgo:
  - impacto: sobre-orquestar cambios pequenos
  - mitigacion: dejar un contrato claro de cuando no usar SDD
- riesgo:
  - impacto: que `sdd-router` duplique las skills SDD existentes
  - mitigacion: limitarlo a diagnosis y routing
- riesgo:
  - impacto: que la documentacion siga hablando de `sdd-router` como futuro
  - mitigacion: sincronizar docs y skill en la misma entrega

---

## 8. Decisiones que requieren humano

- [ ] ninguna por ahora; la metadata UI adicional no se considera necesaria para este repo

---

## 9. Criterio de cierre tecnico

El plan queda listo para `sdd-tasks` solo si:

- [ ] el alcance respeta `definicion.md`
- [ ] las zonas afectadas estan identificadas
- [ ] los bloques de implementacion son secuenciables
- [ ] las validaciones son reales y proporcionales
- [ ] no hay decisiones abiertas que bloqueen la division en fases

---

## 10. Registro de cambios

- 2026-04-25:
  - cambio: creacion inicial del plan `sdd-router`
  - razon: traducir la definicion a un camino brownfield ejecutable
- 2026-04-25:
  - cambio: cierre del plan `sdd-router`
  - razon: el trabajo fue ejecutado y validado documentalmente
