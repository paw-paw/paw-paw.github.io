# Backlog Fase 2: Refinamiento proporcional del `blog index`

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

* Change id: `blog-index-proportion-refinement`
* Patch kind: `spec`
* Lifecycle: `spec-first`
* Fase: `2`
* Estado: `done`
* Ultima actualizacion: `2026-05-18`
* Owner: `usuario`
* Depende de: `Fase 1`
* Desbloquea: `astro-pages-verify`, `sdd-close`

---

## 1. Fuente de verdad aplicable

* `docs/README.md`
* `AGENTS.md`
* `sdd/parches/blog-index-proportion-refinement/patch.yaml`
* `sdd/parches/blog-index-proportion-refinement/definicion.md`
* `sdd/parches/blog-index-proportion-refinement/plan.md`
* `sdd/parches/blog-index-proportion-refinement/tasks.md`
* `sdd/parches/blog-index-proportion-refinement/decision.log`
* `docs/content/content-system.md`
* `docs/content/content-master.md`
* `docs/visual/visual-system.md`
* `docs/visual/asset-plan.md`

---

## 2. Objetivo de la fase

* Resultado esperado: `/en/blog/` y `/es/blog/` muestran una portada superior mas cerrada, featured con `6` lineas visibles, cards alineadas con la politica de excerpt y logos editoriales con mejor presencia.
* Razon de la fase: representar en UI la politica ya reconciliada y corregir la desproporcion observada en el handover.
* Cambio que queda habilitado al cerrar: verificacion Astro y cierre formal del patch.

---

## 3. Rama obligatoria por tipo

### Si `patch_kind = spec`

* fuente viva o alcance de spec que esta fase modifica:
  * `src/styles/global.css`
  * `src/components/blog/EditorialBackgroundStrip.astro`
  * `src/components/blog/BlogFeaturedPanel.astro`
  * `src/pages/en/blog/index.astro`
  * `src/pages/es/blog/index.astro`
* reconciliacion esperada: la UI representa los excerpts con mas fidelidad y mantiene la narrativa/arquitectura aprobada sin tocar schema ni rutas.

### Si `patch_kind = batch`

* items cerrados cubiertos por esta fase: `no aplica`
* criterio global de cierre que esta fase acerca: `no aplica`
* criterio de cierre por item: `no aplica`
* split check: `no aplica`

---

## 4. Assumptions

* La solucion correcta puede permanecer en CSS y composicion existente; no hace falta crear nuevos componentes.
* El featured debe mostrar `6` lineas visibles, mientras cards regulares necesitan mas aire que el clamp actual de `2` lineas para alinearse con la nueva guia editorial.
* Un hero grid con altura minima desktop relativa al viewport es una forma proporcional de cerrar el primer frame sin convertir `1920x1080` en una excepcion hardcodeada.

---

## 5. Precondiciones

### Documentos

* [x] Fase 1 cerrada
* [x] politica editorial de `excerpt` reconciliada en docs y skills

### Decisiones previas

* [x] featured debe mostrar `6` lineas
* [x] cards regulares deben alinearse con la nueva politica de `excerpt`

### Estado tecnico

* [x] rutas `en` y `es` comparten la misma composicion de blog index
* [x] los logos editoriales ya existen y estan aprobados

---

## 6. Alcance

### Si entra

* [x] clamps de featured y cards
* [x] proporcion desktop de la portada superior
* [x] escala visual del bloque `Editorial Background`
* [x] paridad `en` / `es`

### No entra

* [x] schema de contenido
* [x] taxonomy, routing, i18n o SEO estructural
* [x] rediseño del blog post detail o category pages

---

## 7. Archivos y superficies de trabajo

### Leer antes de editar

* `src/styles/global.css`
* `src/components/blog/BlogIntroPanel.astro`
* `src/components/blog/EditorialBackgroundStrip.astro`
* `src/components/blog/BlogFeaturedPanel.astro`
* `src/components/blog/BlogCard.astro`
* `src/pages/en/blog/index.astro`
* `src/pages/es/blog/index.astro`

### Editar

* `src/styles/global.css`
* `src/components/blog/EditorialBackgroundStrip.astro`
* `src/components/blog/BlogFeaturedPanel.astro`
* `src/pages/en/blog/index.astro`
* `src/pages/es/blog/index.astro`

### Validar

* `npm test`
* `npm run build`
* `/en/blog/`
* `/es/blog/`

### No tocar

* `src/content.config.ts`
* `src/content/blog/*`
* `docs/*`

---

## 8. Checklist de ejecucion

### Bloque A - Relectura de fuentes

* [x] releer docs y decision log que fijan la nueva politica de `excerpt`
* [x] releer componentes y CSS actuales del `blog index`

### Bloque B - Inspeccion de estado actual

* [x] confirmar clamp actual de `2` lineas en featured y cards
* [x] confirmar escala actual de logos en `2rem`
* [x] confirmar que ambas locales usan la misma grilla superior

### Bloque C - Edicion por archivo

* [x] editar `src/styles/global.css` para separar clamps, fijar `6` lineas en featured y ampliar cards regulares
* [x] editar `src/styles/global.css` para cerrar mejor el primer viewport desktop mediante una altura minima proporcional del hero grid
* [x] editar `src/styles/global.css` para aumentar la presencia del bloque `Editorial Background` sin romper mobile
* [x] editar `src/components/blog/EditorialBackgroundStrip.astro` para solicitar variantes de imagen acordes con la nueva escala
* [x] editar `src/components/blog/BlogFeaturedPanel.astro` para que el layout interno soporte mejor la mayor densidad de texto
* [x] editar `src/pages/en/blog/index.astro` y `src/pages/es/blog/index.astro` para exponer la clase de layout requerida por el nuevo hero grid

### Bloque D - Registro de decisiones, hallazgos o blockers

* [x] registrar si aparece drift visual o una necesidad no prevista de tocar schema/routing/docs

### Bloque E - Validacion

* [x] ejecutar `npm test`
* [x] ejecutar `npm run build`
* [ ] revisar `/en/blog/` y `/es/blog/` en `375px`, `768px` y `1440px`
* [x] reportar que `npm run lint` no existe si sigue ausente

### Bloque F - Cierre

* [x] marcar la fase como `done` solo si cambios y validaciones quedan registrados

---

## 9. Drift detectado

* Fecha:
  * fuente esperada:
  * diferencia encontrada:
  * impacto:
  * accion:
  * requiere decision: `no`

---

## 10. Hallazgos durante ejecucion

* Fecha: `2026-05-18`
  * hallazgo: la primera corrida paralela de `npm test` y `npm run build` produjo una colision en `.astro/content-assets.mjs`; la corrida secuencial posterior de `npm run build` paso correctamente.
  * impacto: el fallo inicial no evidencia regresion del cambio, pero invalida la ejecucion paralela como prueba limpia.
  * accion: conservar resultados validos de `npm test` y `npm run build` ejecutados sin colision.
* Fecha: `2026-05-18`
  * hallazgo: la revision visual asistida por MCP no pudo ejecutarse porque el entorno no tiene una distribucion de Chrome instalada para Playwright/DevTools.
  * impacto: queda pendiente la comprobacion visual real de breakpoints.
  * accion: registrar la revision visual como diferida y mantener el riesgo residual visible.

---

## 11. Blockers

* [ ] ninguno detectado

---

## 12. Decisiones tomadas

* Fecha: `2026-05-18`
  * decision: usar una altura minima desktop relativa al viewport para el hero grid en vez de hardcodear un alto fijo.
  * razon: corrige el primer frame sin convertir `1920x1080` en una excepcion rigida.
  * documentos o areas afectadas: `src/styles/global.css`, `/en/blog/`, `/es/blog/`.

---

## 13. Validaciones

### Documentales

* [x] verificar que la UI sigue representando la politica ya documentada

### Tecnicas

* [x] `npm test`
* [x] `npm run build`

### Manuales

* [ ] revision visual de `/en/blog/` y `/es/blog/` en `375px`, `768px` y `1440px`

### Resultados

* Validacion:
  * comando o revision: `npm test`
  * resultado esperado: suite existente en verde
  * resultado obtenido: `3` tests passed
  * estado: `pass`
  * notas: ejecutado correctamente.
* Validacion:
  * comando o revision: `npm run build`
  * resultado esperado: build Astro exitoso
  * resultado obtenido: build exitoso tras repetirlo secuencialmente
  * estado: `pass`
  * notas: la primera corrida paralela con `npm test` fallo por colision temporal de Astro sobre `.astro/content-assets.mjs`.
* Validacion:
  * comando o revision: revision visual asistida de `/en/blog/` y `/es/blog/`
  * resultado esperado: revisar `375px`, `768px` y `1440px`
  * resultado obtenido: no ejecutada; Playwright/Chrome DevTools no encontraron una distribucion de Chrome disponible en el entorno
  * estado: `skipped`
  * notas: requiere revision manual real o provisionar navegador en el entorno.

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

* ganar altura desktop a costa de una pagina menos eficiente en tablet o mobile
* sobredimensionar logos que contractualmente siguen siendo apoyo contextual

### Pendientes

* revision visual real de breakpoints en cuanto exista navegador disponible
