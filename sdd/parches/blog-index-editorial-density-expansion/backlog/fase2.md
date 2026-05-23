# Backlog Fase 2: Densificacion visual del primer viewport

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

* Change id: `blog-index-editorial-density-expansion`
* Patch kind: `spec`
* Lifecycle: `spec-anchored`
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
* `sdd/parches/blog-index-editorial-density-expansion/patch.yaml`
* `sdd/parches/blog-index-editorial-density-expansion/definicion.md`
* `sdd/parches/blog-index-editorial-density-expansion/plan.md`
* `sdd/parches/blog-index-editorial-density-expansion/tasks.md`
* `sdd/parches/blog-index-editorial-density-expansion/decision.log`
* `docs/content/content-system.md`
* `docs/content/content-master.md`

---

## 2. Objetivo de la fase

* Resultado esperado: el primer viewport de `/blog` refleja la nueva direccion editorial mas densa elegida por el usuario.
* Razon de la fase: la nueva composicion ya fue reconciliada en docs y ahora debe vivir en la UI.
* Cambio que queda habilitado al cerrar: verificacion Astro y cierre formal.

---

## 3. Rama obligatoria por tipo

### Si `patch_kind = spec`

* fuente viva o alcance de spec que esta fase modifica:
  * `src/styles/global.css`
  * `src/components/blog/EditorialBackgroundStrip.astro`
  * `src/components/blog/BlogFeaturedPanel.astro`
* reconciliacion esperada: la UI expresa dos filas de logos, fecha visible y jerarquia completa de tags en el featured.

### Si `patch_kind = batch`

* items cerrados cubiertos por esta fase: `no aplica`
* criterio global de cierre que esta fase acerca: `no aplica`
* criterio de cierre por item: `no aplica`
* split check: `no aplica`

---

## 4. Assumptions

* La fecha puede reutilizar `formatBlogDate`.
* La jerarquia secundaria de tags puede resolverse con una variante visual existente o una variante CSS leve sin crear una nueva convencion amplia.
* El centrado visual puede mejorar ajustando la distribucion interna del intro sin tocar rutas ni layout global.

---

## 5. Precondiciones

### Documentos

* [x] Fase 1 cerrada
* [x] docs reconciliados

### Decisiones previas

* [x] dos filas de logos aprobadas
* [x] fecha y tags secundarios aprobados para featured

### Estado tecnico

* [x] labels de `angle` y `domain` ya existen
* [x] helper de fecha ya existe

---

## 6. Alcance

### Si entra

* [x] distribucion del intro
* [x] grilla de logos
* [x] fecha y tags del featured

### No entra

* [x] cards regulares
* [x] schema
* [x] routing / SEO / i18n

---

## 7. Archivos y superficies de trabajo

### Leer antes de editar

* `src/styles/global.css`
* `src/components/blog/EditorialBackgroundStrip.astro`
* `src/components/blog/BlogFeaturedPanel.astro`
* `src/utils/blog.ts`

### Editar

* `src/styles/global.css`
* `src/components/blog/EditorialBackgroundStrip.astro`
* `src/components/blog/BlogFeaturedPanel.astro`
* `tests/public-release-closure.test.mjs`

### Validar

* `npm test`
* `npm run build`
* `git diff --check`

### No tocar

* `src/pages/*`
* `src/content.config.ts`
* `src/components/blog/BlogCard.astro`

---

## 8. Checklist de ejecucion

### Bloque A - Relectura de fuentes

* [x] releer featured, logos y estilos actuales
* [x] releer helpers de labels y fecha

### Bloque B - Inspeccion de estado actual

* [x] confirmar grilla actual de una fila
* [x] confirmar ausencia de fecha y tags secundarios en featured

### Bloque C - Edicion por archivo

* [x] editar `EditorialBackgroundStrip.astro` y/o CSS para soportar dos filas de logos
* [x] editar `global.css` para mejorar centrado vertical del intro y mantener balance responsive
* [x] editar `BlogFeaturedPanel.astro` para mostrar fecha despues de la imagen y mover tags debajo del titulo
* [x] editar `global.css` para diferenciar visualmente tags secundarios

### Bloque D - Registro de decisiones, hallazgos o blockers

* [x] registrar cualquier ajuste de implementacion que afecte la lectura futura del patch

### Bloque E - Validacion

* [x] actualizar `tests/public-release-closure.test.mjs` para reflejar la nueva jerarquia visible del featured
* [x] ejecutar `npm test`
* [x] ejecutar `npm run build`
* [x] ejecutar `git diff --check`
* [ ] revisar visualmente `/en/blog/` y `/es/blog/` cuando el entorno lo permita

### Bloque F - Cierre

* [x] marcar la fase como `done` con resultados registrados

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
  * hallazgo: `tests/public-release-closure.test.mjs` aun afirmaba que `Gaming` no debia aparecer en el `blog index`.
  * impacto: la prueba quedo obsoleta frente a la nueva verdad documental del featured.
  * accion: actualizar la prueba para exigir `Industry Analysis` y `Gaming` visibles en el featured.
* Fecha: `2026-05-18`
  * hallazgo: Playwright no pudo abrir el preview porque el entorno no tiene una distribucion de Chrome instalada.
  * impacto: queda pendiente la revision visual real de breakpoints.
  * accion: diferir la comprobacion visual y mantener el riesgo residual visible en el cierre.

---

## 11. Blockers

* [ ] ninguno detectado

---

## 12. Decisiones tomadas

* Fecha: `2026-05-18`
  * decision: usar `angle` y `domain` como tags secundarios con una variante cromatica mas tenue que `category`.
  * razon: conserva la jerarquia editorial decidida sin hacer que los tres tags compitan por igual.
  * documentos o areas afectadas: `BlogFeaturedPanel.astro`, `global.css`.

---

## 13. Validaciones

### Documentales

* [x] verificar que la UI sigue la verdad viva actualizada

### Tecnicas

* [x] `npm test`
* [x] `npm run build`
* [x] `git diff --check`

### Manuales

* [ ] revision visual de `/en/blog/` y `/es/blog/`

### Resultados

* Validacion:
  * comando o revision: `npm test`
  * resultado esperado: suite existente en verde
  * resultado obtenido: `3` tests passed
  * estado: `pass`
  * notas: la primera corrida expuso un test obsoleto, actualizado para reflejar la nueva verdad documental.
* Validacion:
  * comando o revision: `npm run build`
  * resultado esperado: build Astro exitoso
  * resultado obtenido: build exitoso
  * estado: `pass`
  * notas:
* Validacion:
  * comando o revision: `git diff --check`
  * resultado esperado: sin whitespace errors
  * resultado obtenido: sin salida
  * estado: `pass`
  * notas:
* Validacion:
  * comando o revision: revision visual asistida de `/en/blog/` y `/es/blog/`
  * resultado esperado: revisar densidad, centrado y jerarquia en breakpoints
  * resultado obtenido: no ejecutada por ausencia de Chrome en el entorno
  * estado: `skipped`
  * notas: requiere navegador disponible.

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

* densificar de mas el featured
* que dos filas de logos se sientan demasiado prominentes en mobile

### Pendientes

* verificacion visual real cuando haya navegador disponible
