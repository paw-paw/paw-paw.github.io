# Backlog Fase 4: Revision documental y cierre

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

- Change id: `orchestration-docs`
- Fase: `4 - Revision documental y cierre`
- Estado: `done`
- Ultima actualizacion: `2026-04-25`
- Owner: `pawpaw + Codex`
- Depende de:
  - `docs/sdd/parches/orchestration-docs/definicion.md`
  - `docs/sdd/parches/orchestration-docs/plan.md`
  - `docs/sdd/parches/orchestration-docs/tasks.md`
  - `docs/sdd/parches/orchestration-docs/decision.log`
  - cierre de la Fase 1
  - cierre de la Fase 2
  - cierre de la Fase 3
- Desbloquea:
  - cierre del cambio `orchestration-docs`

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
  - `docs/sdd/orchestration/*.md`

Nota:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- este backlog ejecuta solo la Fase 4
- si aparece drift contra `plan.md` o `tasks.md`, registralo antes de resolverlo

---

## 2. Objetivo de la fase

Revisar y cerrar el set documental de `docs/sdd/orchestration/` contra el handover, el plan, las tasks y las reglas de precedencia.

Esta fase existe para asegurar que los documentos finales son completos, acotados y no introducen drift contra el repo.

Al cerrarla el cambio `orchestration-docs` debe quedar listo para reporte final o commit, segun lo pida el usuario.

---

## 3. Precondiciones

### Documentos

- [x] `definicion.md` vigente
- [x] `plan.md` vigente
- [x] `tasks.md` con la fase seleccionada
- [x] contratos aplicables revisados
- [x] Fase 1 cerrada
- [x] Fase 2 cerrada
- [x] Fase 3 cerrada

### Decisiones previas

- [x] decision vigente de no elevar `docs/sdd/orchestration/` a contrato superior
- [x] decision vigente de no presentar `sdd-router` como skill activa existente
- [x] decisiones significativas nuevas de Fases 1-3 registradas, si aparecieron

### Estado tecnico

- [x] todos los documentos solicitados por el handover existen en `docs/sdd/orchestration/`
- [x] no hay cambios no previstos en runtime Astro
- [x] no hay cambios no previstos en `.codex/`, `AGENTS.md` ni docs contractuales

---

## 4. Alcance

### Si entra

- [x] revisar que existen exactamente los documentos solicitados por el handover
- [x] revisar que cada documento es bajo demanda y no una wiki redundante
- [x] revisar que `docs/sdd/orchestration/` se mantiene auxiliar operativo
- [x] revisar que ninguna referencia presenta `sdd-router` como skill activa existente
- [x] actualizar `docs/sdd/parches/orchestration-docs/decision.log` solo si aparecieron decisiones significativas nuevas

### No entra

- [x] crear nuevos documentos fuera de la lista solicitada
- [x] reescribir las fases ya cerradas salvo drift documentado
- [x] modificar runtime Astro
- [x] modificar `.codex/`, `AGENTS.md` o docs contractuales sin escalacion
- [x] ejecutar `npm run build` si no hubo cambios de runtime

---

## 5. Checklist de ejecucion

Actualiza este checklist durante la ejecucion, no solo al final.

### Bloque A - Inventario documental

- [x] confirmar existencia de `docs/sdd/orchestration/README.md`
- [x] confirmar existencia de `docs/sdd/orchestration/orchestration-rules.md`
- [x] confirmar existencia de `docs/sdd/orchestration/skill-routing.md`
- [x] confirmar existencia de `docs/sdd/orchestration/artifact-state-machine.md`
- [x] confirmar existencia de `docs/sdd/orchestration/subagent-policy.md`
- [x] confirmar existencia de `docs/sdd/orchestration/model-policy.md`
- [x] confirmar existencia de `docs/sdd/orchestration/decision-gates.md`
- [x] confirmar existencia de `docs/sdd/orchestration/drift-policy.md`
- [x] confirmar que no hay documentos extra en `docs/sdd/orchestration/` salvo decision registrada

### Bloque B - Revision de consistencia

- [x] verificar que cada documento se presenta como auxiliar operativo bajo demanda
- [x] verificar que los documentos no duplican reglas completas de `AGENTS.md` o skills
- [x] verificar que referencias cruzadas apuntan a rutas reales
- [x] verificar que `sdd-router` no aparece como skill activa existente
- [x] verificar que las politicas de modelo no prometen disponibilidad permanente de modelos concretos

### Bloque C - Cierre y reporte

- [x] actualizar `decision.log` si aparecieron decisiones significativas nuevas
- [x] justificar que no aplica `npm run build` si no hubo runtime Astro
- [x] registrar resultados de busqueda textual y revision manual
- [x] preparar reporte final con resultado, archivos tocados, validaciones, supuestos, desalineaciones, pendientes y riesgos

---

## 6. Archivos o areas probables

### Docs

- `docs/sdd/orchestration/*.md`
- `docs/sdd/parches/orchestration-docs/decision.log`
- `docs/sdd/parches/orchestration-docs/backlog/fase1.md`
- `docs/sdd/parches/orchestration-docs/backlog/fase2.md`
- `docs/sdd/parches/orchestration-docs/backlog/fase3.md`
- `docs/sdd/parches/orchestration-docs/backlog/fase4.md`

### Codigo

- ninguno

### Configuracion o tests

- ninguno

---

## 7. Hallazgos durante ejecucion

- 2026-04-25:
  - hallazgo:
    los artefactos SDD principales mantenian estados previos (`draft`/`active`) despues de completar las fases
  - impacto:
    podia quedar drift menor de cierre
  - accion:
    se actualizaron `definicion.md`, `plan.md` y `tasks.md` a `done`
- 2026-04-25:
  - hallazgo:
    `docs/sdd/parches/orchestration-docs/decision.log` queda ignorado por el patron global `*.log`
  - impacto:
    un commit normal con `git add docs/sdd/parches/orchestration-docs/` no incluiria el decision log
  - accion:
    dejar el riesgo visible; para commitear ese archivo se requiere `git add -f` o una decision futura sobre `.gitignore`

---

## 8. Blockers

- [x] Fases 1, 2 y 3 deben estar cerradas antes de ejecutar esta fase.
- [x] Todos los documentos solicitados por el handover deben existir antes del cierre.

---

## 9. Decisiones tomadas

- 2026-04-25:
  - decision:
    cerrar los estados de `definicion.md`, `plan.md` y `tasks.md` como drift menor de cierre
  - razon:
    los ocho documentos finales fueron creados y las cuatro fases quedaron completadas
  - documentos o areas afectadas:
    `docs/sdd/parches/orchestration-docs/definicion.md`, `docs/sdd/parches/orchestration-docs/plan.md`, `docs/sdd/parches/orchestration-docs/tasks.md`

---

## 10. Validaciones

### Documentales

- [x] verificar alineacion con `docs/README.md`
- [x] verificar alineacion con `AGENTS.md`
- [x] verificar que el backlog sigue trazable a `tasks.md`
- [x] ejecutar busqueda textual de rutas y nombres esperados
- [x] verificar que no se crearon archivos fuera de la lista solicitada
- [x] verificar que `docs/sdd/orchestration/` se mantiene auxiliar operativo

### Tecnicas

- [x] no aplica `npm run build` porque la fase no toca runtime Astro
- [x] no aplica `npm test` porque la fase no toca logica cubierta por tests
- [x] usar busqueda textual para confirmar rutas, nombres y ausencia de referencias falsas

### Manuales

- [x] revision editorial/manual de claridad operativa

### Resultados

- Comando o revision: `find docs/sdd/orchestration -maxdepth 1 -type f -printf '%f\n' | sort`
- Resultado: OK
- Notas: lista exactamente los ocho documentos solicitados por el handover.

- Comando o revision: `rg -l -i "auxiliary|auxiliar" docs/sdd/orchestration/*.md`
- Resultado: OK
- Notas: los ocho documentos declaran caracter auxiliar.

- Comando o revision: `rg -n "sdd-router|\\.codex/skills/sdd-router|skill activa|active" docs/sdd/orchestration docs/sdd/parches/orchestration-docs/decision.log`
- Resultado: OK
- Notas: las referencias no presentan `sdd-router` como skill activa existente; las coincidencias de `active` tambien incluyen "active Codex session".

- Comando o revision: `git diff -- AGENTS.md .codex src public package.json astro.config.mjs`
- Resultado: OK
- Notas: sin diff en runtime Astro, `.codex/`, `AGENTS.md` ni configuracion revisada.

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

- cerrar el cambio con documentos faltantes
- dejar referencias cruzadas rotas
- presentar soporte auxiliar como contrato superior
- omitir una decision significativa aparecida durante ejecucion
- omitir `decision.log` en un commit por el patron global `*.log`

### Pendientes

- cambio `orchestration-docs` listo para commit si el usuario lo pide; incluir `decision.log` requiere `git add -f` o decision futura sobre `.gitignore`

---

## 13. Registro de cambios

- 2026-04-25:
  - cambio: creacion inicial del backlog de Fase 4
  - razon: convertir revision documental y cierre en checklist operativo
- 2026-04-25:
  - cambio: ejecucion y cierre de Fase 4
  - razon: validar inventario, consistencia y cierre del cambio `orchestration-docs`
