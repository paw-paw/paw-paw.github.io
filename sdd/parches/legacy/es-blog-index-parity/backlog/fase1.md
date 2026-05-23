# Backlog Fase N Template

## Estado

- Change id: `es-blog-index-parity`
- Fase: `1`
- Estado: `done`
- Ultima actualizacion: `2026-04-26`
- Owner: Codex
- Depende de: `docs/sdd/parches/es-blog-index-parity/tasks.md`
- Desbloquea: `docs/sdd/parches/es-blog-index-parity/backlog/fase2.md`

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
  - `src/pages/es/blog/index.astro`
  - `src/pages/es/blog/category/[category].astro`

## 2. Objetivo de la fase

Sustituir el placeholder del blog en español por la misma estructura editorial que ya usa el blog en ingles, de modo que `/es/blog/` y `/es/blog/category/[category]/` muestren posts publicados cuando existan. Esta fase existe para cerrar primero la experiencia visible antes de documentarla y probarla. Al cerrarla, el blog en español deja de comportarse como una superficie en preparacion en runtime.

## 3. Precondiciones

### Documentos

- [x] `definicion.md` vigente
- [x] `plan.md` vigente
- [x] `tasks.md` con la fase seleccionada
- [x] contratos aplicables revisados

### Decisiones previas

- [x] decision requerida antes de ejecutar

### Estado tecnico

- [x] existe contenido publicado en `src/content/blog/` para locale `es`

## 4. Alcance

### Si entra

- [x] `src/pages/es/blog/index.astro` pasa a listar featured post y grilla de posts publicados
- [x] `src/pages/es/blog/category/[category].astro` pasa a listar posts publicados por categoria
- [x] `src/i18n/es.json` se actualiza para retirar copy de preparacion del blog activo

### No entra

- [x] actualizacion de contratos documentales
- [x] actualizacion de tests y validacion global

## 5. Checklist de ejecucion

### Bloque A - Paridad runtime del blog en es

- [x] convertir `/es/blog/` en la version localizada del index editorial del blog
- [x] convertir `/es/blog/category/[category]/` en la version localizada de category pages del blog
- [x] revisar el copy del locale es para que no siga diciendo que el blog esta en preparacion

### Bloque B - Soporte editorial reutilizado

- [x] conservar el uso de `BlogCard` y `BlogFeaturedPanel` para mantener la misma jerarquia visual
- [x] conservar `BlogEmptyState` solo como fallback real para contextos sin posts publicados

### Bloque C - Revisión funcional

- [x] confirmar que la pagina generada sigue ofreciendo navegacion hacia detail pages y back to blog

## 6. Archivos o areas probables

### Docs

- `docs/...`

### Codigo

- `src/pages/es/blog/index.astro`
- `src/pages/es/blog/category/[category].astro`
- `src/i18n/es.json`

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
- [ ] verificar que el backlog sigue trazable a `tasks.md`

### Tecnicas

- [ ] otra validacion relevante

### Manuales

- [ ] revision visual/manual de `/es/blog/`
- [ ] revision funcional de category pages en `es`

### Resultados

- Comando o revision: inspeccion del output generado mediante `npm test` y `npm run build`
- Resultado: `/es/blog/` y `/es/blog/category/[category]/` renderizan posts publicados y conservan fallback real
- Notas: el runtime quedo alineado con la semantica activa del blog en es

## 11. Cierre

La fase solo se considera cerrada si:

- [x] checklist completo o pendientes explicitamente diferidos
- [x] decisiones relevantes registradas
- [x] validaciones requeridas ejecutadas o justificadas
- [x] drift documentado o resuelto
- [x] reporte final listo

## 12. Riesgos y pendientes

### Riesgos

- riesgo: dejar el blog en español con copy obsoleto aunque el runtime ya liste posts

### Pendientes

- pendiente: fase 2 y fase 3 para docs y validacion

## 13. Registro de cambios

- 2026-04-26:
  - cambio: se abre el backlog de la fase 1 para la paridad runtime del blog en español
  - razon: primero se debe activar la superficie visible antes de cerrar documentos y tests
