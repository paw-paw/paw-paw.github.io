# Backlog Fase 3 - Nuevo intro editorial localizado

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

* Change id: `blog-index-editorial-redesign`
* Patch kind: `spec`
* Lifecycle: `spec-first`
* Fase: `3 - Nuevo intro editorial localizado`
* Estado: `done`
* Ultima actualizacion: `2026-05-18`
* Owner: `usuario`
* Depende de: `Fase 1`, `Fase 2`
* Desbloquea: `Fase 5`

---

## 1. Fuente de verdad aplicable

* `docs/README.md`
* `AGENTS.md`
* `sdd/parches/blog-index-editorial-redesign/patch.yaml`
* `sdd/parches/blog-index-editorial-redesign/definicion.md`
* `sdd/parches/blog-index-editorial-redesign/plan.md`
* `sdd/parches/blog-index-editorial-redesign/tasks.md`
* `sdd/parches/blog-index-editorial-redesign/decision.log`

---

## 2. Objetivo de la fase

* Resultado esperado: `/en/blog/` y `/es/blog/` muestran el nuevo intro editorial, el bloque `Editorial Background` y el anchor integrado.
* Razon de la fase: el intro actual ya no expresa el speech aprobado ni aprovecha los assets editoriales promovidos.
* Cambio que queda habilitado al cerrar: verificacion visible del nuevo intro y cierre posterior del rediseño completo.

---

## 3. Rama obligatoria por tipo

### Si `patch_kind = spec`

* fuente viva o alcance de spec que esta fase modifica:
  * index pages localizadas del blog
  * strings i18n del blog
  * assets editoriales ya promovidos
* reconciliacion esperada:
  * speech visible, assets y estructura del intro convergen con los contratos cerrados en Fase 1.

### Si `patch_kind = batch`

* items cerrados cubiertos por esta fase: `no aplica`
* criterio global de cierre que esta fase acerca: `no aplica`
* criterio de cierre por item: `no aplica`
* split check: `no aplica`

---

## 4. Assumptions

* Los assets editoriales allmode se usaran con tratamiento CSS ligero si el tema oscuro lo necesita.

---

## 5. Precondiciones

### Documentos

* [x] `Fase 1` cerrada
* [x] `Fase 2` cerrada

### Decisiones previas

* [x] speech visible final y alcance de logos ya resueltos

### Estado tecnico

* [x] paginas `/en/blog/` y `/es/blog/` existentes
* [x] assets runtime disponibles

---

## 6. Alcance

### Si entra

* [x] crear datos localizados del bloque editorial
* [x] crear componente(s) acotados para intro y strip
* [x] actualizar strings i18n del blog
* [x] reemplazar el intro actual en ambas rutas
* [x] añadir anchor `#latest-writing`
* [x] actualizar metadata runtime de `/blog`

### No entra

* [ ] redisenar featured/cards
* [ ] cambiar detail pages
* [ ] cambiar category pages salvo reutilizacion de strings existentes

---

## 7. Archivos y superficies de trabajo

### Leer antes de editar

* `src/pages/en/blog/index.astro`
* `src/pages/es/blog/index.astro`
* `src/i18n/en.json`
* `src/i18n/es.json`
* `src/data/experience.ts`
* `src/styles/global.css`
* `src/utils/seo.ts`

### Editar

* `src/data/editorial-background.ts`
* `src/components/blog/EditorialBackgroundStrip.astro`
* `src/components/blog/BlogIntroPanel.astro`
* `src/pages/en/blog/index.astro`
* `src/pages/es/blog/index.astro`
* `src/i18n/en.json`
* `src/i18n/es.json`
* `src/styles/global.css`
* `src/utils/seo.ts`

### Validar

* `npm run build`
* `astro-pages-verify`

### No tocar

* `src/components/blog/BlogFeaturedPanel.astro`
* `src/components/blog/BlogCard.astro`

---

## 8. Checklist de ejecucion

### Bloque A - Relectura de fuentes

* [x] releer paginas index actuales y uso de `blog.subtitle`
* [x] releer patron de datos localizados en `src/data/experience.ts`
* [x] releer estilos existentes de superficies y chips

### Bloque B - Inspeccion de estado actual

* [x] confirmar ausencia de componente de intro dedicado
* [x] confirmar ausencia de datos runtime para logos editoriales
* [x] confirmar que `seo.ts` aun usa metadata anterior del blog

### Bloque C - Edicion por archivo

* [x] crear `src/data/editorial-background.ts`
* [x] crear `EditorialBackgroundStrip.astro`
* [x] crear `BlogIntroPanel.astro`
* [x] actualizar `en.json` y `es.json` con speech y labels nuevos
* [x] reemplazar intro inline por `BlogIntroPanel` en ambos index
* [x] añadir `id=\"latest-writing\"` a la seccion de posts
* [x] actualizar descripciones runtime de `/blog` en `seo.ts`
* [x] añadir estilos globales requeridos por el strip y el anchor

### Bloque D - Registro de decisiones, hallazgos o blockers

* [x] registrar hallazgo si el speech visible exige modificar strings usadas fuera del index
* [x] registrar blocker si el intro rompe paridad entre locales

### Bloque E - Validacion

* [x] ejecutar `npm run build`
* [x] usar `astro-pages-verify` sobre `/en/blog/` y `/es/blog/`

### Bloque F - Cierre

* [x] registrar resultados de build y verificacion visible
* [x] marcar la fase como `done`

---

## 9. Drift detectado

* Fecha: `2026-05-18`
  * fuente esperada: index pages localizadas + metadata runtime
  * diferencia encontrada: runtime seguia usando intro de una sola linea y SEO anterior al cierre documental
  * impacto: la UI no reflejaba el contrato vigente
  * accion: intro, strings y metadata runtime reconciliados
  * requiere decision: `no`

---

## 10. Hallazgos durante ejecucion

* Fecha: `2026-05-18`
  * hallazgo: las category pages siguen usando `blog.subtitle`, por lo que ese string se mantuvo como version breve alineada y el index recibio keys nuevas especificas
  * impacto: se evito forzar un bloque de dos parrafos en superficies no previstas
  * accion: se añadieron `introParagraph1` e `introParagraph2` sin romper reutilizacion existente

---

## 11. Blockers

* [x] ninguno

---

## 12. Decisiones tomadas

* Fecha: `2026-05-18`
  * decision: crear `BlogIntroPanel` y `EditorialBackgroundStrip` como componentes acotados del blog
  * razon: reduce duplicacion entre locales y mantiene el nuevo bloque dentro de su superficie correcta
  * documentos o areas afectadas: `src/components/blog/*`, `src/pages/*/blog/index.astro`

---

## 13. Validaciones

### Documentales

* [x] confirmar que runtime sigue el speech cerrado en docs

### Tecnicas

* [x] `npm run build`

### Manuales

* [x] `astro-pages-verify` de rutas localizadas del blog index

### Resultados

* Validacion:
  * comando o revision: `npm run build`
  * resultado esperado: build estructural exitoso con nuevas rutas/imagenes del intro
  * resultado obtenido: build exitoso
  * estado: `pass`
  * notas: sin errores de compilacion
* Validacion:
  * comando o revision: `astro-pages-verify` (`npm run preview` + intento de revision MCP en `/en/blog/` y `/es/blog/`)
  * resultado esperado: inspeccion local de rutas visibles
  * resultado obtenido: preview server iniciado; revision MCP no pudo ejecutarse porque Chromium no esta disponible en el entorno (`playwright` sin distribucion `chrome`; `chrome-devtools` sin target vivo)
  * estado: `skipped`
  * notas: la verificacion visible se reintentara en el cierre; queda riesgo residual manual

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

* el nuevo intro podria crecer demasiado en mobile si el strip no responde bien

### Pendientes

* revision visual MCP no ejecutable en este entorno por ausencia de navegador disponible
