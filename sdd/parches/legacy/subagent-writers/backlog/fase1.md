# Backlog Fase 1: Gobierno y documentacion de writers

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

- Change id: `subagent-writers`
- Fase: `Fase 1 - Gobierno y documentación de writers`
- Estado: `done`
- Ultima actualizacion: `2026-04-26`
- Owner: `pawpaw + Codex`
- Depende de:
  - `docs/sdd/parches/subagent-writers/definicion.md`
  - `docs/sdd/parches/subagent-writers/plan.md`
  - `docs/sdd/parches/subagent-writers/tasks.md`
- Desbloquea:
  - `Fase 2 - Perfiles writer y autorización explícita por skill`

---

## 1. Fuente de verdad aplicable

- `docs/README.md`
- `docs/sdd/parches/subagent-writers/definicion.md`
- `docs/sdd/parches/subagent-writers/plan.md`
- `docs/sdd/parches/subagent-writers/tasks.md`
- `docs/sdd/parches/subagent-writers/decision.log`
- documentos contractuales aplicables:
  - ninguno de producto
- documentos auxiliares aplicables:
  - `AGENTS.md`
  - `docs/AGENTS.md`
  - `docs/sdd/orchestration/README.md`
  - `docs/sdd/orchestration/orchestration-rules.md`
  - `docs/sdd/orchestration/subagent-policy.md`
  - `docs/sdd/orchestration/model-policy.md`
  - `docs/sdd/orchestration/decision-gates.md`

Nota:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- este backlog ejecuta una sola fase
- si aparece drift contra `plan.md` o `tasks.md`, registralo antes de resolverlo

---

## 2. Objetivo de la fase

Dejar sincronizado el gobierno local con la nueva estructura de subagentes: advisory read-only por defecto y dos writers controlados. Al terminar la fase, la documentación debe describir correctamente quién puede escribir, bajo qué condiciones y por qué el manager sigue teniendo ownership centralizado.

---

## 3. Precondiciones

### Documentos

- [x] `definicion.md` vigente
- [x] `plan.md` vigente
- [x] `tasks.md` con la fase seleccionada
- [x] contratos aplicables revisados

### Decisiones previas

- [x] decision requerida antes de ejecutar

### Estado tecnico

- [x] condicion tecnica requerida

---

## 4. Alcance

### Si entra

- [x] actualizar `AGENTS.md`
- [x] actualizar `docs/sdd/orchestration/README.md`
- [x] actualizar `docs/sdd/orchestration/orchestration-rules.md`
- [x] actualizar `docs/sdd/orchestration/subagent-policy.md`
- [x] actualizar `docs/sdd/orchestration/model-policy.md`
- [x] actualizar `docs/sdd/orchestration/decision-gates.md`

### No entra

- [x] crear o editar perfiles writer
- [x] editar skills SDD

---

## 5. Checklist de ejecucion

Actualiza este checklist durante la ejecucion, no solo al final.

### Bloque A - Gobierno raiz

- [x] actualizar `AGENTS.md` para describir advisory read-only por defecto y writers controlados
- [x] revisar que la tabla de agentes locales incluya los dos perfiles nuevos previstos

### Bloque B - Politicas de orquestacion

- [x] actualizar `docs/sdd/orchestration/README.md`
- [x] actualizar `docs/sdd/orchestration/orchestration-rules.md`
- [x] actualizar `docs/sdd/orchestration/subagent-policy.md`
- [x] actualizar `docs/sdd/orchestration/model-policy.md`
- [x] actualizar `docs/sdd/orchestration/decision-gates.md`

### Bloque C - Cierre de fase

- [x] registrar hallazgos relevantes
- [x] dejar la fase lista para Fase 2

---

## 6. Archivos o areas probables

### Docs

- `AGENTS.md`
- `docs/sdd/orchestration/README.md`
- `docs/sdd/orchestration/orchestration-rules.md`
- `docs/sdd/orchestration/subagent-policy.md`
- `docs/sdd/orchestration/model-policy.md`
- `docs/sdd/orchestration/decision-gates.md`

### Codigo

- ninguno

### Configuracion o tests

- ninguno

---

## 7. Hallazgos durante ejecucion

- Fecha: `2026-04-26`
  - hallazgo: `docs/sdd/orchestration/` y `AGENTS.md` describían los perfiles locales como read-only/advisory, por lo que el brief nuevo implicaba drift documental directo
  - impacto: sin sincronización, la implementación de writers quedaría falseada por la documentación vigente
  - accion: actualizar primero gobierno y políticas antes de crear perfiles writer

---

## 8. Blockers

- [ ] Ninguno

---

## 9. Decisiones tomadas

- Fecha: `2026-04-26`
  - decision: Fase 1 se limita a gobierno y documentación; la creación de perfiles y autorización por skill queda en Fase 2
  - razon: preserva trazabilidad y evita introducir writers antes de documentar su marco de uso
  - documentos o areas afectadas: `tasks.md`, `backlog/fase1.md`, futuro `backlog/fase2.md`

---

## 10. Validaciones

### Documentales

- [x] verificar alineacion con `docs/README.md`
- [x] verificar alineacion con contratos aplicables
- [x] verificar que el backlog sigue trazable a `tasks.md`

### Tecnicas

- [x] `npm run build`, si aplica
- [x] `npm test`, si aplica
- [x] otra validacion relevante

### Manuales

- [x] revision visual/manual, si aplica
- [x] revision funcional, si aplica

### Resultados

- Comando o revision: revisión documental y trazabilidad local
- Resultado: completada; no aplica validación `npm` en esta fase porque no hay cambios de runtime ni lógica cubierta por tests
- Notas: la comprobación técnica real se difiere a búsquedas textuales en Fase 2, donde ya existirán los perfiles writer

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

- que Fase 2 amplíe el scope a skills no SDD

### Pendientes

- crear `backlog/fase2.md`
- ejecutar Fase 2

---

## 13. Registro de cambios

- 2026-04-26:
  - cambio: creacion y cierre de backlog de Fase 1
  - razon: documentar la fase de gobierno antes de crear los perfiles writer
