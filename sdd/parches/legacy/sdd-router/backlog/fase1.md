# Backlog Fase 1: Sincronizacion documental y de inventario

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

- Change id: `sdd-router`
- Fase: `1 - Sincronizacion documental y de inventario`
- Estado: `done`
- Ultima actualizacion: `2026-04-25`
- Owner: `pawpaw + Codex`
- Depende de:
  - `docs/sdd/parches/sdd-router/definicion.md`
  - `docs/sdd/parches/sdd-router/plan.md`
  - `docs/sdd/parches/sdd-router/tasks.md`
  - `docs/sdd/parches/sdd-router/decision.log`
- Desbloquea:
  - `docs/sdd/parches/sdd-router/backlog/fase2.md`
  - ejecucion de la Fase 1 con `sdd-execute-phase`

---

## 1. Fuente de verdad aplicable

- `docs/README.md`
- `AGENTS.md`
- `docs/AGENTS.md`
- `docs/sdd/parches/sdd-router/definicion.md`
- `docs/sdd/parches/sdd-router/plan.md`
- `docs/sdd/parches/sdd-router/tasks.md`
- `docs/sdd/parches/sdd-router/decision.log`
- documentos contractuales aplicables:
  - ninguno de producto por defecto
- documentos auxiliares aplicables:
  - `docs/sdd/orchestration/README.md`
  - `docs/sdd/orchestration/orchestration-rules.md`
  - `docs/sdd/orchestration/skill-routing.md`

Nota:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- esta fase solo sincroniza documentacion y el indice de skills

---

## 2. Objetivo de la fase

Actualizar la documentacion auxiliar de orquestacion y el inventario de skills para que `sdd-router` aparezca como skill real y no como futura o inexistente.

Al cerrar la fase, la base documental y el indice de skills deben coincidir con la nueva realidad del repo.

---

## 3. Precondiciones

### Documentos

- [x] `definicion.md` vigente
- [x] `plan.md` vigente
- [x] `tasks.md` con la fase seleccionada
- [x] contratos aplicables revisados

### Decisiones previas

- [x] decision de crear `sdd-router` como skill real
- [x] decision de mantenerla ligera y read-only

### Estado tecnico

- [x] no existe todavia `.codex/skills/sdd-router/SKILL.md`
- [x] no se requiere modificar runtime Astro
- [x] no se requiere modificar dependencias

---

## 4. Alcance

### Si entra

- [x] actualizar `AGENTS.md` para incluir `sdd-router` en la tabla de skills locales
- [x] actualizar `docs/sdd/orchestration/orchestration-rules.md`
- [x] actualizar `docs/sdd/orchestration/skill-routing.md`
- [x] revisar si `docs/sdd/orchestration/README.md` necesita un ajuste minimo de referencia

### No entra

- [x] crear `.codex/skills/sdd-router/SKILL.md`
- [x] tocar runtime Astro
- [x] crear dependencias o scripts nuevos
- [x] convertir `sdd-router` en manager completo

---

## 5. Checklist de ejecucion

Actualiza este checklist durante la ejecucion, no solo al final.

### Bloque A - Orquestacion auxiliar

- [x] actualizar `docs/sdd/orchestration/orchestration-rules.md`
- [x] actualizar `docs/sdd/orchestration/skill-routing.md`
- [x] revisar y ajustar `docs/sdd/orchestration/README.md` si hace falta

### Bloque B - Inventario de skills

- [x] actualizar `AGENTS.md` para incluir `sdd-router`
- [x] revisar la coherencia del listado de skills locales

### Bloque C - Revision local

- [x] verificar que `sdd-router` deja de presentarse como ausente o futuro
- [x] verificar que la carpeta de orquestacion sigue siendo auxiliar
- [x] verificar que no hay referencias falsas en el inventario de skills

---

## 6. Archivos o areas probables

### Docs

- `AGENTS.md`
- `docs/sdd/orchestration/README.md`
- `docs/sdd/orchestration/orchestration-rules.md`
- `docs/sdd/orchestration/skill-routing.md`

### Codigo

- ninguno

### Configuracion o tests

- ninguno

---

## 7. Hallazgos durante ejecucion

- 2026-04-25:
  - hallazgo:
    los documentos de orquestacion siguen diciendo que `sdd-router` no existe o seria futuro
  - impacto:
    hace falta sincronizacion documental en esta fase
  - accion:
    actualizar `docs/sdd/orchestration/` y `AGENTS.md` en la misma entrega

---

## 8. Blockers

- [x] Ningun blocker actual para ejecutar la Fase 1.

---

## 9. Decisiones tomadas

- 2026-04-25:
  - decision:
    no crear metadata UI adicional para esta skill en esta entrega
  - razon:
    no hace falta para el flujo local del repo
  - documentos o areas afectadas:
    `.codex/skills/sdd-router/SKILL.md`

---

## 10. Validaciones

### Documentales

- [x] verificar alineacion con `docs/README.md`
- [x] verificar alineacion con `AGENTS.md`
- [x] verificar que `README.md` no necesita cambio significativo
- [x] verificar que `orchestration-rules.md` y `skill-routing.md` ya no tratan `sdd-router` como ausente o futuro

### Tecnicas

- [x] no aplica `npm run build`
- [x] no aplica `npm test`
- [x] usar busqueda textual para confirmar rutas y nombres esperados

### Manuales

- [x] revision editorial/manual de claridad operativa

### Resultados

- Comando o revision:
- `rg -n 'does not currently contain|future change creates|If a future \`sdd-router\`|sdd-router.*future|sdd-router.*does not exist|sdd-router.*ausent|sdd-router.*inexist' AGENTS.md docs/sdd/orchestration/README.md docs/sdd/orchestration/orchestration-rules.md docs/sdd/orchestration/skill-routing.md .codex/skills/sdd-router/SKILL.md`
- Resultado: exit 1 y sin coincidencias de texto viejo
- Notas: la unica salida fue el inventario actualizado de `sdd-router`

---

## 11. Cierre

La fase solo se considera cerrada si:

- [ ] checklist completo o pendientes explicitamente diferidos
- [ ] decisiones relevantes registradas
- [ ] validaciones requeridas ejecutadas o justificadas
- [ ] drift documentado o resuelto
- [ ] reporte final listo

---

## 12. Riesgos y pendientes

### Riesgos

- riesgo:
  - impacto: dejar una referencia residual que siga diciendo que `sdd-router` no existe
  - mitigacion: busqueda textual y revision manual al final

### Pendientes

- pendiente:
  - crear la skill local en la Fase 2

---

## 13. Registro de cambios

- 2026-04-25:
  - cambio: creacion inicial del backlog de Fase 1
  - razon: preparar la sincronizacion documental y de inventario
- 2026-04-25:
  - cambio: cierre del backlog de Fase 1
  - razon: la sincronizacion documental y del inventario quedo ejecutada
