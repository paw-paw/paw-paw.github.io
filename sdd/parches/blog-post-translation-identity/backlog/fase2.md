# Backlog Fase 2: Implementacion, migracion y validacion

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

* Change id: `blog-post-translation-identity`
* Patch kind: `spec`
* Lifecycle: `spec-first`
* Fase: `2 - Implementacion, migracion y validacion`
* Estado: `done`
* Ultima actualizacion: `2026-05-18`
* Owner: `usuario`
* Depende de: `Fase 1`
* Desbloquea: cierre del patch

---

## 1. Fuente de verdad aplicable

* `docs/README.md`
* `AGENTS.md`
* `sdd/parches/blog-post-translation-identity/patch.yaml`
* `sdd/parches/blog-post-translation-identity/definicion.md`
* `sdd/parches/blog-post-translation-identity/plan.md`
* `sdd/parches/blog-post-translation-identity/tasks.md`
* `sdd/parches/blog-post-translation-identity/decision.log`
* contratos actualizados en Fase 1

---

## 2. Objetivo de la fase

* Resultado esperado: `i18n_key` funciona en runtime, Burger King enlaza entre locales y los posts monolingües conservan fallback.
* Razon de la fase: convertir el contrato nuevo en comportamiento verificable.
* Cambio que queda habilitado al cerrar: cierre formal del patch.

---

## 3. Rama obligatoria por tipo

### Si `patch_kind = spec`

* fuente viva o alcance de spec que esta fase modifica: schema de contenido, contenido publicado, utilidad de equivalencias y cobertura de tests.
* reconciliacion esperada: implementacion refleja los contratos ya actualizados.

---

## 4. Assumptions

* los posts sin traduccion seguiran omitiendo `i18n_key`
* la pareja Burger King compartira `i18n_key: burger-king-stevenage`

---

## 5. Precondiciones

### Documentos

* [x] Fase 1 cerrada

### Decisiones previas

* [x] `i18n_key` aprobado y documentado

### Estado tecnico

* [x] rutas detail y tests existentes inspeccionados

---

## 6. Alcance

### Si entra

* [x] extender schema con `i18n_key`
* [x] migrar la pareja Burger King
* [x] resolver equivalencias por `i18n_key`
* [x] ampliar tests de caso positivo y fallback
* [x] ejecutar validaciones tecnicas y revisar rutas afectadas

### No entra

* [ ] traducir nuevos posts
* [ ] reorganizar carpetas del blog

---

## 7. Archivos y superficies de trabajo

### Leer antes de editar

* `src/content.config.ts`
* `src/utils/blog.ts`
* `src/content/blog/*.md`
* `tests/blog-es-detail-alignment.test.mjs`
* `tests/public-release-closure.test.mjs`

### Editar

* `src/content.config.ts`
* `src/utils/blog.ts`
* `src/content/blog/a-shirt-a-license-and-a-loophole.md`
* `src/content/blog/una-camiseta-una-licencia-y-una-oportunidad.md`
* `tests/blog-es-detail-alignment.test.mjs`
* `tests/public-release-closure.test.mjs`

### Validar

* `npm test`
* `npm run build`
* rutas `/en/blog/a-shirt-a-license-and-a-loophole/` y `/es/blog/una-camiseta-una-licencia-y-una-oportunidad/`

### No tocar

* `src/pages/**`
* otros posts sin traduccion

---

## 8. Checklist de ejecucion

### Bloque A - Relectura de fuentes

* [x] releer schema, helper de equivalencias, posts objetivo y tests existentes

### Bloque B - Inspeccion de estado actual

* [x] confirmar que la equivalencia actual depende de `slug`
* [x] confirmar que Burger King ya tiene traduccion real con slugs distintos

### Bloque C - Edicion por archivo

* [x] añadir `i18n_key` opcional al schema
* [x] añadir el mismo `i18n_key` a la pareja Burger King
* [x] reemplazar la busqueda por `slug` con busqueda por `i18n_key` cuando exista
* [x] conservar fallback al `blog index` cuando falte `i18n_key`
* [x] ajustar tests para cubrir equivalente exacto y fallback monolingüe

### Bloque D - Registro de decisiones, hallazgos o blockers

* [x] registrar cualquier ajuste de compatibilidad descubierto durante la implementacion

### Bloque E - Validacion

* [x] ejecutar `npm test`
* [x] ejecutar `npm run build`
* [x] revisar output generado para alternates y links de idioma en los details afectados

### Bloque F - Cierre

* [x] marcar la fase como `done` si todas las validaciones requeridas pasan

---

## 9. Drift detectado

* No detectado.

---

## 10. Hallazgos durante ejecucion

* Fecha: `2026-05-18`
  * hallazgo: el caso positivo de equivalencia puede cubrirse sin tocar rutas detail ni layouts, porque `localeUrls` ya centraliza alternates y switcher.
  * impacto: el cambio queda mas pequeño y menos riesgoso que una refactorizacion de paginas.
  * accion: se concentro la implementacion en schema, contenido y `src/utils/blog.ts`.

---

## 11. Blockers

* [x] ninguno

---

## 12. Decisiones tomadas

* No adicionales al inicio.

---

## 13. Validaciones

### Documentales

* [x] verificar alineacion con contratos actualizados

### Tecnicas

* [x] `npm test`
* [x] `npm run build`

### Manuales

* [x] inspeccion de alternates y switcher en detail

### Resultados

* Validacion: tests automatizados
  * comando o revision: `npm test`
  * resultado esperado: tests de equivalencia y fallback pasan
  * resultado obtenido: `3` tests pasaron
  * estado: `pass`
  * notas: incluye cobertura positiva para la pareja Burger King y fallback monolingüe con `dont-marry-claude`
* Validacion: build Astro
  * comando o revision: `npm run build`
  * resultado esperado: build estatica correcta
  * resultado obtenido: build completada con `27 page(s) built`
  * estado: `pass`
  * notas: una ejecucion inicial paralela a `npm test` fallo por carrera temporal en `node_modules/.astro/data-store.json`; la repeticion secuencial paso correctamente
* Validacion: inspeccion de output generado
  * comando o revision: lectura de `dist/en/blog/a-shirt-a-license-and-a-loophole/index.html`, `dist/es/blog/una-camiseta-una-licencia-y-una-oportunidad/index.html` y `dist/en/blog/dont-marry-claude/index.html`
  * resultado esperado: equivalente real enlaza detail localizado; post monolingüe cae al `blog index`
  * resultado obtenido: comportamiento esperado confirmado
  * estado: `pass`
  * notas: alternates `en`, `es` y `x-default` quedaron coherentes

---

## 14. Cierre

La fase solo se considera cerrada si:

* [x] checklist completo o pendientes explicitamente diferidos
* [x] assumptions criticas resueltas, aceptadas o escaladas
* [x] decisiones relevantes registradas
* [x] blockers resueltos o diferidos con razon
* [x] drift documentado o resuelto
* [x] validaciones requeridas ejecutadas o justificadas
* [x] resultados de validacion registrados

---

## 15. Riesgos y pendientes

### Riesgos

* que el caso positivo tape una regresion del fallback monolingüe.

### Pendientes

* cerrar el patch SDD.
