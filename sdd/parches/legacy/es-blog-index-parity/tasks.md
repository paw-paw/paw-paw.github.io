# Tasks Template

## Estado

- Change id: `es-blog-index-parity`
- Estado: `done`
- Ultima actualizacion: `2026-04-26`
- Owner: Codex
- Depende de: `docs/sdd/parches/es-blog-index-parity/definicion.md`, `docs/sdd/parches/es-blog-index-parity/plan.md`
- Desbloquea: backlog de fase para implementacion del blog en español

## 1. Fuente de verdad aplicable

- `docs/README.md`
- `docs/sdd/parches/es-blog-index-parity/definicion.md`
- `docs/sdd/parches/es-blog-index-parity/plan.md`
- documentos contractuales aplicables:
  - `docs/architecture/i18n-spec.md`
  - `docs/content/content-system.md`
  - `docs/delivery/release-checklist.md`
  - `docs/governance/decision-log.md`
- documentos auxiliares aplicables:
  - `tests/public-release-closure.test.mjs`
  - `tests/blog-es-detail-alignment.test.mjs`

## 2. Resumen del plan

El cambio convierte `/es/blog/` y `/es/blog/category/[category]/` en superficies editoriales activas con posts publicados, usando la misma estructura que el blog en ingles. El plan queda dividido en tres bloques: primero el runtime y el copy del locale, luego la sincronizacion documental y por ultimo la validacion con tests y build. La decision abierta sobre el blog en preparacion ya no debe seguir vigente en los documentos finales. El cierre requiere `npm run build` y `npm test` pasando.

## 3. Fases

### Fase 1 - Paridad runtime del blog en es

- Objetivo:
  - reemplazar el placeholder de `/es/blog/` y activar el listado de posts publicados en `/es/blog/category/[category]/`
- Precondiciones:
  - existen posts publicados en `src/content/blog/` para locale `es`
  - el contrato del blog ya soporta `angle` y `domain` como claves internas localizadas
- Tareas:
  - [ ] actualizar `src/pages/es/blog/index.astro` para renderizar featured panel y grilla de posts publicados
  - [ ] actualizar `src/pages/es/blog/category/[category].astro` para renderizar posts publicados por categoria con fallback real solo cuando corresponda
  - [ ] revisar `src/i18n/es.json` para eliminar copy de preparacion del blog activo
- Archivos o areas probables:
  - `src/pages/es/blog/index.astro`
  - `src/pages/es/blog/category/[category].astro`
  - `src/i18n/es.json`
- Validaciones:
  - [ ] revision visual/manual de la salida local generada para `/es/blog/`
  - [ ] comprobar que la navegacion hacia detail pages sigue funcionando
- Criterio de cierre:
  - `/es/blog/` y `/es/blog/category/[category]/` muestran contenido publicado cuando existe y ya no dependen del placeholder para el caso activo

### Fase 2 - Contratos y copy documental

- Objetivo:
  - alinear docs contractuales y auxiliares con la nueva semantica del blog en español
- Precondiciones:
  - la paridad runtime ya esta implementada
  - la decision de producto sobre el blog en espanol ya esta clara
- Tareas:
  - [ ] actualizar `docs/architecture/i18n-spec.md` con la semantica activa del blog en es
  - [ ] actualizar `docs/content/content-system.md` para dejar explicito que los placeholders solo aplican cuando no hay posts publicados
  - [ ] registrar la nueva decision en `docs/governance/decision-log.md`
  - [ ] ajustar `docs/delivery/release-checklist.md` para reemplazar la historia `en-first` por la nueva paridad del blog en es
- Archivos o areas probables:
  - `docs/architecture/i18n-spec.md`
  - `docs/content/content-system.md`
  - `docs/delivery/release-checklist.md`
  - `docs/governance/decision-log.md`
- Validaciones:
  - [ ] revisar que no queden referencias contradictorias a `en-first` para `/es/blog/`
  - [ ] revisar que SEO, i18n y release checklist sigan contando la misma historia
- Criterio de cierre:
  - la documentacion contractual y auxiliar describe `/es/blog/` como una superficie activa con posts publicados cuando existen

### Fase 3 - Validacion y cobertura

- Objetivo:
  - cerrar la paridad con tests y validaciones reales del repo
- Precondiciones:
  - runtime y docs ya quedaron sincronizados
- Tareas:
  - [ ] actualizar `tests/public-release-closure.test.mjs` para esperar posts publicados en `dist/es/blog/index.html`
  - [ ] revisar si `tests/blog-es-detail-alignment.test.mjs` necesita una asercion adicional sobre el blog index en es
  - [ ] ejecutar `npm test`
  - [ ] ejecutar `npm run build`
- Archivos o areas probables:
  - `tests/public-release-closure.test.mjs`
  - `tests/blog-es-detail-alignment.test.mjs`
- Validaciones:
  - [ ] `npm test`
  - [ ] `npm run build`
  - [ ] revision manual del render de `/en/blog/`, `/es/blog/` y category pages
- Criterio de cierre:
  - tests y build pasan, y la salida generada confirma paridad de blog en es sin regresiones de SEO o routing

## 4. Dependencias entre fases

- Fase 1 bloquea: Fase 2 y Fase 3
- Fase 2 bloquea: Fase 3
- Fase 3 bloquea: cierre del change id

## 5. Decisiones y bloqueos

### Decisiones abiertas

- [x] ningun bloqueo de producto adicional

### Bloqueos

- [ ] ninguno identificado por ahora

### Escalaciones requeridas

- [ ] ninguna

## 6. Tareas diferidas

- [ ] ninguna por ahora
- [ ] posible refinamiento futuro del copy del blog si el usuario quiere una voz distinta para el locale es

## 7. Validaciones globales

### Documentales

- [ ] verificar alineacion con `docs/README.md`
- [ ] verificar alineacion con documentos contractuales aplicables
- [ ] verificar trazabilidad desde `plan.md`

### Tecnicas

- [ ] `npm run build`, si el cambio toca estructura Astro o output publico
- [ ] `npm test`, si el cambio toca logica cubierta por tests
- [ ] otra validacion relevante

### Manuales

- [ ] revision visual/manual, si el cambio toca UI, copy o contenido visible
- [ ] revision de navegacion, metadata o rutas, si aplica

## 8. Criterio de cierre

Este `tasks.md` queda listo para `sdd-phase-backlog` solo si:

- [x] cada fase tiene objetivo, precondiciones, tareas, validaciones y criterio de cierre
- [x] no hay decisiones abiertas que bloqueen la fase seleccionada
- [x] cada tarea es trazable al `plan.md`
- [x] las validaciones son reales y no inventan scripts

## 9. Registro de cambios

- 2026-04-26:
  - cambio: se estructuran fases macro para la paridad del blog en español
  - razon: el cambio necesita separarse en runtime, docs y validacion antes de ejecutar
