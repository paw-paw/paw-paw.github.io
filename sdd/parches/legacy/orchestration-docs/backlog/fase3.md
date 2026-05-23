# Backlog Fase 3: Politicas de subagentes, modelos y drift

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

- Change id: `orchestration-docs`
- Fase: `3 - Politicas de subagentes, modelos y drift`
- Estado: `done`
- Ultima actualizacion: `2026-04-25`
- Owner: `pawpaw + Codex`
- Depende de:
  - `docs/sdd/parches/orchestration-docs/definicion.md`
  - `docs/sdd/parches/orchestration-docs/plan.md`
  - `docs/sdd/parches/orchestration-docs/tasks.md`
  - `docs/sdd/parches/orchestration-docs/decision.log`
  - cierre de la Fase 1
- Desbloquea:
  - `docs/sdd/parches/orchestration-docs/backlog/fase4.md`
  - ejecucion de la Fase 3 con `sdd-execute-phase`

---

## 1. Fuente de verdad aplicable

- `docs/README.md`
- `AGENTS.md`
- `docs/AGENTS.md`
- `docs/sdd/parches/orchestration-docs/definicion.md`
- `docs/sdd/parches/orchestration-docs/plan.md`
- `docs/sdd/parches/orchestration-docs/tasks.md`
- `docs/sdd/parches/orchestration-docs/decision.log`
- documentos contractuales aplicables:
  - ninguno de producto por defecto
- documentos auxiliares aplicables:
  - `docs/sdd/parches/orchestration-docs/handover.md`
  - `docs/sdd/templates/backlog-faseN.md`
  - `.codex/skills/sdd-sync-drift/SKILL.md`
  - `.codex/skills/astro-pages-verify/SKILL.md`
  - `.codex/agents/*.toml`
  - `.codex/config.toml`

Nota:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- este backlog ejecuta solo la Fase 3
- si aparece drift contra `plan.md` o `tasks.md`, registralo antes de resolverlo

---

## 2. Objetivo de la fase

Documentar politicas de soporte para trabajos SDD complejos: uso de subagentes, seleccion de modelos/esfuerzo y manejo de drift.

Esta fase existe para que la orquestacion no dependa de decisiones improvisadas durante ejecucion compleja.

Al cerrarla deben existir `subagent-policy.md`, `model-policy.md` y `drift-policy.md` sin modificar `.codex/`.

---

## 3. Precondiciones

### Documentos

- [x] `definicion.md` vigente
- [x] `plan.md` vigente
- [x] `tasks.md` con la fase seleccionada
- [x] contratos aplicables revisados
- [x] Fase 1 cerrada

### Decisiones previas

- [x] decision de mantener subagentes como advisory/read-only por defecto
- [x] decision de redactar modelos como orientacion operativa dependiente del runtime disponible

### Estado tecnico

- [x] `docs/sdd/orchestration/README.md` existe
- [x] `docs/sdd/orchestration/orchestration-rules.md` existe
- [x] `.codex/agents/*.toml` existe como referencia read-only
- [x] `.codex/config.toml` existe como referencia de limites
- [x] no se requiere modificar runtime Astro

---

## 4. Alcance

### Si entra

- [x] crear `docs/sdd/orchestration/subagent-policy.md`
- [x] crear `docs/sdd/orchestration/model-policy.md`
- [x] crear `docs/sdd/orchestration/drift-policy.md`
- [x] mantener subagentes como advisory/read-only por defecto
- [x] redactar politica de modelos como orientacion operativa dependiente del runtime disponible
- [x] documentar cuando usar `sdd-sync-drift` y cuando solo registrar hallazgos

### No entra

- [x] modificar `.codex/agents/*.toml`
- [x] modificar `.codex/config.toml`
- [x] fijar disponibilidad permanente de modelos concretos
- [x] reemplazar las reglas del skill `sdd-sync-drift`
- [x] ejecutar verificacion Astro

---

## 5. Checklist de ejecucion

Actualiza este checklist durante la ejecucion, no solo al final.

### Bloque A - Subagentes

- [x] crear `docs/sdd/orchestration/subagent-policy.md`
- [x] listar cuando conviene usar subagentes y cuando no
- [x] documentar que los subagentes asesoran y no deciden ni editan salvo instruccion futura explicita
- [x] alinear la politica con `max_threads`, `max_depth` y `job_max_runtime_seconds`

### Bloque B - Modelos

- [x] crear `docs/sdd/orchestration/model-policy.md`
- [x] documentar seleccion por riesgo, complejidad, costo y necesidad de verificacion
- [x] evitar prometer disponibilidad permanente de modelos concretos
- [x] explicar como degradar o escalar esfuerzo cuando el runtime cambie

### Bloque C - Drift

- [x] crear `docs/sdd/orchestration/drift-policy.md`
- [x] distinguir drift documental, drift de implementacion y hallazgo no bloqueante
- [x] documentar cuando usar `sdd-sync-drift`
- [x] documentar como registrar drift en `decision.log`, backlogs o reporte final

---

## 6. Archivos o areas probables

### Docs

- `docs/sdd/orchestration/subagent-policy.md`
- `docs/sdd/orchestration/model-policy.md`
- `docs/sdd/orchestration/drift-policy.md`

### Codigo

- ninguno

### Configuracion o tests

- ninguno

---

## 7. Hallazgos durante ejecucion

- 2026-04-25:
  - hallazgo:
    la politica de modelos incluye nombres concretos del runtime como defaults orientativos
  - impacto:
    podria quedar obsoleta si el runtime cambia
  - accion:
    `model-policy.md` declara que los nombres son defaults dependientes del runtime y pide elegir el equivalente disponible

---

## 8. Blockers

- [x] Fase 1 debe estar cerrada antes de ejecutar esta fase.

---

## 9. Decisiones tomadas

- 2026-04-25:
  - decision:
    tratar modelos concretos como orientacion operativa, no como garantia permanente
  - razon:
    reduce obsolescencia sin ignorar el handover
  - documentos o areas afectadas:
    `docs/sdd/orchestration/model-policy.md`

---

## 10. Validaciones

### Documentales

- [x] verificar alineacion con `docs/README.md`
- [x] verificar alineacion con `AGENTS.md`
- [x] verificar que el backlog sigue trazable a `tasks.md`
- [x] verificar alineacion con `.codex/config.toml`
- [x] verificar alineacion con agentes locales read-only
- [x] verificar que `model-policy.md` no promete disponibilidad permanente de modelos concretos
- [x] verificar que `drift-policy.md` no contradice `sdd-sync-drift`

### Tecnicas

- [x] no aplica `npm run build` porque la fase no toca runtime Astro
- [x] no aplica `npm test` porque la fase no toca logica cubierta por tests
- [x] usar busqueda textual para confirmar rutas y nombres esperados

### Manuales

- [x] revision editorial/manual de claridad operativa

### Resultados

- Comando o revision: `test -f docs/sdd/orchestration/subagent-policy.md && test -f docs/sdd/orchestration/model-policy.md && test -f docs/sdd/orchestration/drift-policy.md`
- Resultado: OK
- Notas: existen los tres documentos esperados de Fase 3.

- Comando o revision: `rg -n 'max_threads|max_depth|job_max_runtime_seconds|read-only|advisory|gpt-5\\.4-mini|runtime-dependent|unavailable|does not replace|Use sdd-sync-drift|Do not use sdd-sync-drift' docs/sdd/orchestration/subagent-policy.md docs/sdd/orchestration/model-policy.md docs/sdd/orchestration/drift-policy.md`
- Resultado: OK
- Notas: la busqueda corregida confirma limites de config, defaults de modelo y relacion con `sdd-sync-drift`.

- Comando o revision: revision manual
- Resultado: OK
- Notas: no aplica `npm` porque no hay cambios de runtime Astro.

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

- sobre-orquestar cambios pequenos
- dejar politica de modelos demasiado rigida
- convertir subagentes en autoridad de decision en vez de soporte read-only
- duplicar el skill `sdd-sync-drift` en vez de referenciarlo

### Pendientes

- Fase 3 cerrada
- reevaluar politica de modelos si cambia el runtime disponible

---

## 13. Registro de cambios

- 2026-04-25:
  - cambio: creacion inicial del backlog de Fase 3
  - razon: convertir politicas de soporte SDD complejo en checklist operativo
- 2026-04-25:
  - cambio: ejecucion y cierre de Fase 3
  - razon: crear politicas de subagentes, modelos y drift
