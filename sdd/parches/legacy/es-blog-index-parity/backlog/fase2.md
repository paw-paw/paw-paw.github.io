# Backlog Fase N Template

## Estado

- Change id: `es-blog-index-parity`
- Fase: `2`
- Estado: `done`
- Ultima actualizacion: `2026-04-26`
- Owner: Codex
- Depende de: `docs/sdd/parches/es-blog-index-parity/tasks.md`
- Desbloquea: `docs/sdd/parches/es-blog-index-parity/backlog/fase3.md`

## 1. Fuente de verdad aplicable

- `docs/README.md`
- `docs/sdd/parches/es-blog-index-parity/definicion.md`
- `docs/sdd/parches/es-blog-index-parity/plan.md`
- `docs/sdd/parches/es-blog-index-parity/tasks.md`
- documentos contractuales aplicables:
  - `docs/architecture/i18n-spec.md`
  - `docs/content/content-system.md`
  - `docs/delivery/release-checklist.md`
  - `docs/governance/decision-log.md`
- documentos auxiliares aplicables:
  - `src/i18n/es.json`

## 2. Objetivo de la fase

Actualizar los contratos y el registro de decisiones para que `/es/blog/` figure como una superficie activa con posts publicados, no como un placeholder en preparacion. Esta fase existe para eliminar el drift documental que quedaria si solo se cambiara el runtime. Al cerrarla, la semantica del blog en español queda alineada en docs y checklist.

## 3. Precondiciones

### Documentos

- [x] `definicion.md` vigente
- [x] `plan.md` vigente
- [x] `tasks.md` con la fase seleccionada
- [x] contratos aplicables revisados

### Decisiones previas

- [x] decision requerida antes de ejecutar

### Estado tecnico

- [x] fase 1 ejecutada

## 4. Alcance

### Si entra

- [x] `docs/architecture/i18n-spec.md` refleja la semantica activa del blog en es
- [x] `docs/content/content-system.md` explicita el uso de placeholder solo cuando no hay posts publicados
- [x] `docs/governance/decision-log.md` registra la nueva decision y supersede la historia `en-first` para esta superficie
- [x] `docs/delivery/release-checklist.md` deja de hablar de empty states como estado final del blog en es

### No entra

- [x] cambios adicionales de runtime
- [x] tests y validacion

## 5. Checklist de ejecucion

### Bloque A - Contrato i18n

- [x] dejar explicito que `es/blog` muestra posts publicados cuando existen
- [x] mantener la distincion entre placeholder para ausencia real de contenido y blog activo en es

### Bloque B - Contrato de contenido y release

- [x] actualizar el lenguaje del sistema de contenido para reflejar la nueva semantica
- [x] actualizar el release checklist para la historia real del blog en es

### Bloque C - Registro de decisiones

- [x] añadir la nueva decision en decision log
- [x] asegurarse de que la decision vieja no siga siendo la unica historia visible para esta superficie

## 6. Archivos o areas probables

### Docs

- `docs/architecture/i18n-spec.md`
- `docs/content/content-system.md`
- `docs/delivery/release-checklist.md`
- `docs/governance/decision-log.md`

### Codigo

- `src/...`

### Configuracion o tests

- `tests/...`

## 7. Hallazgos durante ejecucion

- Fecha:
  - hallazgo:
  - impacto:
  - accion:

## 8. Blockers

- [ ] ninguno por ahora

## 9. Decisiones tomadas

- Fecha:
  - decision:
  - razon:
  - documentos o areas afectadas:

## 10. Validaciones

### Documentales

- [ ] verificar alineacion con `docs/README.md`
- [ ] verificar alineacion con contratos aplicables
- [ ] verificar que la decision log y el checklist ya no describen `/es/blog/` como placeholder final

### Tecnicas

- [ ] otra validacion relevante

### Manuales

- [x] revision de contenido documental

### Resultados

- Comando o revision: inspeccion manual de docs contractuales y auxiliares actualizados
- Resultado: la documentacion deja de describir `/es/blog/` como placeholder editorial
- Notas: la historia `en-first` quedo supersedida para esta superficie

## 11. Cierre

La fase solo se considera cerrada si:

- [x] checklist completo o pendientes explicitamente diferidos
- [x] decisiones relevantes registradas
- [x] validaciones requeridas ejecutadas o justificadas
- [x] drift documentado o resuelto
- [x] reporte final listo

## 12. Riesgos y pendientes

### Riesgos

- riesgo: dejar texto documental viejo aunque runtime ya cambió

### Pendientes

- pendiente: fase 3 para tests y validaciones

## 13. Registro de cambios

- 2026-04-26:
  - cambio: se abre el backlog de la fase 2 para sincronizar docs con la nueva semantica del blog en es
  - razon: la historia de producto necesita quedar cerrada en el contrato, no solo en el runtime
