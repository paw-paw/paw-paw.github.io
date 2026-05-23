# Backlog Fase N Template

## Estado

- Change id: `es-blog-index-parity`
- Fase: `3`
- Estado: `done`
- Ultima actualizacion: `2026-04-26`
- Owner: Codex
- Depende de: `docs/sdd/parches/es-blog-index-parity/tasks.md`
- Desbloquea: cierre del change id

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
  - `tests/public-release-closure.test.mjs`
  - `tests/blog-es-detail-alignment.test.mjs`

## 2. Objetivo de la fase

Cerrar la cobertura de tests para que reflejen `/es/blog/` como superficie activa con posts publicados. Esta fase existe para confirmar que la paridad no solo se ve en el runtime sino tambien en las validaciones del repo. Al cerrarla, el cambio queda listo para verificacion final y limpieza del branch.

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
- [x] fase 2 ejecutada

## 4. Alcance

### Si entra

- [x] `tests/public-release-closure.test.mjs` debe esperar posts publicados en `dist/es/blog/index.html`
- [x] `tests/blog-es-detail-alignment.test.mjs` debe seguir validando fallback de detail y puede sumar una asercion ligera del blog index en es
- [x] `npm test` y `npm run build` deben ejecutarse como validacion final

### No entra

- [x] cambios adicionales de runtime
- [x] cambios adicionales de docs

## 5. Checklist de ejecucion

### Bloque A - Cobertura del blog index en es

- [x] actualizar aserciones del test de release para el index de blog en espanol
- [x] verificar que el blog en es ya no depende de copy de preparacion en los tests

### Bloque B - Cobertura de detail y SEO

- [x] revisar si el test de detail necesita confirmar que el index de es sigue disponible como fallback
- [x] mantener las aserciones de canonical y alternates coherentes

### Bloque C - Validacion final

- [x] ejecutar `npm test`
- [x] ejecutar `npm run build`

## 6. Archivos o areas probables

### Docs

- `docs/...`

### Codigo

- `src/...`

### Configuracion o tests

- `tests/public-release-closure.test.mjs`
- `tests/blog-es-detail-alignment.test.mjs`

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
- [ ] verificar que el backlog sigue trazable a `tasks.md`

### Tecnicas

- [ ] `npm run build`
- [ ] `npm test`

### Manuales

- [x] revision visual/manual del output de blog en `en` y `es`

### Resultados

- Comando o revision: `npm test` y `npm run build`
- Resultado: ambas validaciones pasaron y el build genero `/es/blog/` con posts publicados
- Notas: no quedaron regresiones de SEO ni de routing en el blog

## 11. Cierre

La fase solo se considera cerrada si:

- [x] checklist completo o pendientes explicitamente diferidos
- [x] decisiones relevantes registradas
- [x] validaciones requeridas ejecutadas o justificadas
- [x] drift documentado o resuelto
- [x] reporte final listo

## 12. Riesgos y pendientes

### Riesgos

- riesgo: dejar tests que siguen esperando un blog en es vacio

### Pendientes

- pendiente: cierre final del change id y propuesta de commits

## 13. Registro de cambios

- 2026-04-26:
  - cambio: se abre el backlog de la fase 3 para validar el blog en es con tests y build
  - razon: el cambio de producto necesita cobertura real antes de limpiar el branch
