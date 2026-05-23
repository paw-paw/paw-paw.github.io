# Plan: Orchestration Docs

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

- Change id: `orchestration-docs`
- Estado: `done`
- Ultima actualizacion: `2026-04-25`
- Owner: `pawpaw + Codex`
- Depende de:
  - `docs/README.md`
  - `AGENTS.md`
  - `docs/AGENTS.md`
  - `docs/sdd/parches/orchestration-docs/definicion.md`
  - `docs/sdd/parches/orchestration-docs/handover.md`
  - `docs/sdd/parches/orchestration-docs/decision.log`
- Desbloquea:
  - `sdd-tasks` para dividir la creacion documental en fases macro

---

## 1. Fuente de verdad aplicable

- `docs/README.md`
- `AGENTS.md`
- `docs/AGENTS.md`
- `docs/sdd/parches/orchestration-docs/definicion.md`
- `docs/sdd/parches/orchestration-docs/handover.md`
- `docs/sdd/parches/orchestration-docs/decision.log`
- documentos contractuales aplicables:
  - ninguno de producto por defecto
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
- este plan no amplia el alcance aprobado en `definicion.md`
- `docs/sdd/orchestration/` debe tratarse como documentacion auxiliar operativa bajo demanda

---

## 2. Lectura brownfield

El repo ya tiene una base local de orquestacion Codex:

- `AGENTS.md` documenta gobierno operativo, estructura `docs/sdd/`, `.codex/skills/`, `.codex/agents/` y `.codex/config.toml`.
- `docs/README.md` define `docs/sdd/` como artefactos auxiliares operativos que no sustituyen contratos.
- `docs/AGENTS.md` refina reglas de escritura dentro de `docs/`.
- `.codex/skills/` contiene las skills SDD activas: `sdd-intake`, `sdd-plan`, `sdd-tasks`, `sdd-phase-backlog`, `sdd-execute-phase`, `sdd-sync-drift` y `astro-pages-verify`.
- `.codex/agents/` contiene subagentes read-only/advisory: `sdd-repo-mapper`, `sdd-docs-checker`, `sdd-risk-reviewer`, `sdd-test-reviewer`, `sdd-drift-reviewer` y `astro-verifier`.
- `.codex/config.toml` limita la orquestacion con `max_threads`, `max_depth` y `job_max_runtime_seconds`.
- No existe actualmente `.codex/skills/sdd-router/SKILL.md`.
- No existe actualmente `docs/sdd/orchestration/`.

Drift o deuda relevante:

- El handover pide documentar `sdd-router`, pero esa skill no existe en el repo. La documentacion futura no debe presentarla como skill activa salvo que se cree en otro cambio.
- El handover pide politicas de modelo con nombres concretos. Esa informacion puede volverse obsoleta, por lo que debe redactarse como orientacion operativa sujeta al runtime disponible.
- La carpeta futura vive bajo `docs/sdd/`; por contrato documental debe seguir siendo auxiliar, no canon superior.

Restricciones tecnicas:

- No tocar runtime Astro.
- No tocar `.codex/skills/`, `.codex/agents/`, `.codex/config.toml` ni `AGENTS.md` en la ejecucion de este cambio, salvo que el usuario amplie alcance.
- No crear scripts ni dependencias.
- Mantener los documentos secos, operativos y sin duplicar todo el contenido de `AGENTS.md` o las skills.

---

## 3. Zonas afectadas

### Docs

- `docs/sdd/orchestration/README.md`
- `docs/sdd/orchestration/orchestration-rules.md`
- `docs/sdd/orchestration/skill-routing.md`
- `docs/sdd/orchestration/artifact-state-machine.md`
- `docs/sdd/orchestration/subagent-policy.md`
- `docs/sdd/orchestration/model-policy.md`
- `docs/sdd/orchestration/decision-gates.md`
- `docs/sdd/orchestration/drift-policy.md`
- `docs/sdd/parches/orchestration-docs/plan.md`
- `docs/sdd/parches/orchestration-docs/decision.log`

### Codigo

- ninguno

### Configuracion, tests o build

- ninguno previsto

---

## 4. Bloques de implementacion

### Bloque A - Base e indice de orquestacion

- Objetivo: crear la carpeta `docs/sdd/orchestration/` y su indice operativo.
- Cambios esperados:
  - crear `README.md`
  - establecer cuando leer o no leer la carpeta
  - mapear documentos por problema
  - fijar el principio central: `AGENTS.md` gobierna, skills operan, subagentes asesoran y la sesion principal decide
- Dependencias:
  - `docs/README.md`
  - `AGENTS.md`
  - handover
- Riesgos:
  - duplicar `AGENTS.md` en vez de referenciarlo

### Bloque B - Routing, estados y decisiones humanas

- Objetivo: documentar como se mueve un cambio dentro del flujo SDD sin crear una nueva skill.
- Cambios esperados:
  - crear `skill-routing.md`
  - crear `artifact-state-machine.md`
  - crear `decision-gates.md`
  - documentar `sdd-router` como concepto de routing solicitado por el handover, no como skill activa existente, salvo decision posterior
- Dependencias:
  - skills SDD actuales
  - templates actuales en `docs/sdd/templates/`
- Riesgos:
  - afirmar que `sdd-router` existe cuando no existe
  - permitir transiciones invalidas como idea directa a ejecucion en cambios sustanciales

### Bloque C - Subagentes, modelos y drift

- Objetivo: documentar politicas de soporte para trabajo SDD complejo.
- Cambios esperados:
  - crear `subagent-policy.md`
  - crear `model-policy.md`
  - crear `drift-policy.md`
  - mantener subagentes como advisory/read-only por defecto
  - redactar modelos/esfuerzo como politica operativa, no como garantia permanente
- Dependencias:
  - `.codex/agents/*.toml`
  - `.codex/config.toml`
  - `sdd-sync-drift`
  - `astro-pages-verify`
- Riesgos:
  - sobre-orquestar cambios pequenos
  - dejar politica de modelos demasiado rigida

### Bloque D - Revision documental y cierre

- Objetivo: asegurar que la carpeta nueva conversa con los contratos y no introduce drift.
- Cambios esperados:
  - revisar que cada documento se mantenga bajo demanda
  - revisar que no se modifiquen runtime, skills ni `AGENTS.md`
  - revisar que no queden afirmaciones falsas sobre skills inexistentes
  - actualizar `decision.log` si aparece una decision significativa
- Dependencias:
  - Bloques A-C
- Riesgos:
  - presentar soporte auxiliar como contrato superior

---

## 5. Datos, schemas y contratos

- Contratos documentales afectados:
  - ninguno por defecto
  - `docs/README.md` solo deberia cambiar si se decide elevar `docs/sdd/orchestration/` dentro del mapa documental; no es necesario segun la definicion actual
- Datos o contenido afectados:
  - ninguno
- Schemas o modelos afectados:
  - ninguno
- Compatibilidad esperada:
  - la documentacion nueva debe ser compatible con la estructura SDD actual:
    - `definicion.md`
    - `plan.md`
    - `tasks.md`
    - `backlog/faseN.md`
    - `decision.log`
  - la documentacion no debe exigir `sdd-router` como skill activa mientras no exista

---

## 6. Validaciones

### Documentales

- [ ] verificar alineacion con `docs/README.md`
- [ ] verificar alineacion con `AGENTS.md`
- [ ] verificar que `docs/sdd/orchestration/` se presenta como auxiliar operativo
- [ ] verificar que los documentos no duplican contenido completo de skills o `AGENTS.md`
- [ ] verificar que `sdd-router` no se presenta como skill activa existente
- [ ] verificar que no se crearon documentos fuera de la lista solicitada

### Tecnicas

- [ ] no aplica `npm run build` salvo que el alcance derive inesperadamente a runtime Astro
- [ ] no aplica `npm test` salvo que se modifique logica cubierta por tests
- [ ] usar busqueda textual para confirmar rutas, nombres y ausencia de referencias falsas

### Manuales

- [ ] revision editorial/manual de claridad operativa
- [ ] revision de que cada documento responde al contenido esperado del handover

---

## 7. Riesgos y mitigaciones

- riesgo:
  - impacto: crear una mini-wiki redundante dentro de `docs/sdd/orchestration/`
  - mitigacion: cada documento debe resolver una decision de orquestacion concreta y remitir a `AGENTS.md` o skills en vez de copiarlas completas
- riesgo:
  - impacto: documentar componentes no existentes como activos
  - mitigacion: `sdd-router` debe tratarse como concepto o pieza pendiente mientras no exista `SKILL.md`
- riesgo:
  - impacto: sobre-especificar modelos concretos
  - mitigacion: describir defaults como orientacion y mantener gatillos de escalada/de-escalada
- riesgo:
  - impacto: convertir `docs/sdd/orchestration/` en contrato superior accidental
  - mitigacion: declarar que `docs/README.md`, contratos y `AGENTS.md` mantienen precedencia
- riesgo:
  - impacto: abrir scope para modificar skills o agentes
  - mitigacion: mantener cualquier actualizacion de `.codex/` como cambio futuro separado

---

## 8. Decisiones que requieren humano

- [ ] Decidir si se debe crear una skill real `sdd-router` en un cambio futuro.
  - opciones:
    - documentar solo routing bajo demanda sin crear skill
    - crear una skill `sdd-router` en otro SDD
  - recomendacion:
    - documentar routing sin afirmar que `sdd-router` existe; evaluar la skill despues de usar el flujo una vez
  - impacto:
    - evita introducir una convencion nueva no documentada dentro de este cambio

- [ ] Decidir si `model-policy.md` debe listar modelos exactos o clases de capacidad.
  - opciones:
    - usar los nombres exactos del handover
    - usar una politica menos versionada basada en capacidad/costo/riesgo
  - recomendacion:
    - combinar ambos: usar defaults orientativos y aclarar que dependen del runtime disponible
  - impacto:
    - reduce obsolescencia sin ignorar el handover

---

## 9. Criterio de cierre tecnico

El plan queda listo para `sdd-tasks` solo si:

- [x] el alcance respeta `definicion.md`
- [x] las zonas afectadas estan identificadas
- [x] los bloques de implementacion son secuenciables
- [x] las validaciones son reales y proporcionales
- [x] las decisiones abiertas no bloquean dividir el trabajo en fases, porque pueden quedar como tareas o criterios de redaccion dentro de los documentos

---

## 10. Registro de cambios

- 2026-04-25:
  - cambio: creacion inicial del plan `orchestration-docs`
  - razon: convertir la definicion en una secuencia brownfield sin implementar los documentos finales todavia
- 2026-04-25:
  - cambio: cierre de estado del plan
  - razon: los bloques de implementacion fueron ejecutados y validados
