# Backlog Fase 5 - Optimizacion general de imagenes

---

## Estado

* Change id: `seo-aeo-blog-performance`
* Patch kind: `batch`
* Lifecycle: `spec-first`
* Fase: `5 - Optimizacion general de imagenes`
* Estado: `done`
* Ultima actualizacion: `2026-05-24`
* Owner: `paw-paw`
* Depende de: Fase 4
* Desbloquea: verificacion visual/global y fase 6

---

## 1. Fuente de verdad aplicable

* `docs/README.md`
* `AGENTS.md`
* `sdd/parches/seo-aeo-blog-performance/patch.yaml`
* `sdd/parches/seo-aeo-blog-performance/definicion.md`
* `sdd/parches/seo-aeo-blog-performance/plan.md`
* `sdd/parches/seo-aeo-blog-performance/tasks.md`
* `docs/visual/interaction-spec.md`

---

## 2. Objetivo de la fase

* Resultado esperado: work cards usan imagenes responsive reales y logos/wordmark declaran dimensiones.
* Razon de la fase: responder los hallazgos PageSpeed sobre entrega de imagenes y atributos `width`/`height`.
* Cambio que queda habilitado al cerrar: verificacion visual/browser de performance y layout.

---

## 3. Rama obligatoria por tipo

### Si `patch_kind = batch`

* items cerrados cubiertos por esta fase: Item 5.
* criterio global de cierre que esta fase acerca: menos bytes de imagen sin deformacion visual.
* criterio de cierre por item: imagenes principales reportadas por PageSpeed quedan tratadas sin regresion visual.
* split check: fase tecnica autocontenida.

---

## 4. Assumptions

* `Image` de Astro es suficiente para work cards porque `headerImage` ya es `ImageMetadata`.
* Logos/wordmark pueden conservar `img` manual con `width`/`height` explicitos para no cambiar su tratamiento visual.
* No se cambia TTL de cache porque el usuario lo hara manualmente.

---

## 5. Precondiciones

### Documentos

* [x] Fase 1 cerrada

### Decisiones previas

* [x] usar `Image` de Astro o `Picture` para work cards/logos
* [x] generar tamanos responsive reales
* [x] agregar `width`/`height` si no afecta funcionamiento
* [x] cache TTL queda fuera de alcance

### Estado tecnico

* [x] Fase 4 cerrada o registrada
* [x] `src/data/selected-work.ts` expone `ImageMetadata`
* [x] `src/data/experience.ts` expone logos como `ImageMetadata`

---

## 6. Alcance

### Si entra

* [x] editar `src/components/sections/Projects.astro`
* [x] editar `src/pages/en/work.astro`
* [x] editar `src/pages/es/work.astro`
* [x] editar `src/components/sections/Timeline.astro`
* [x] editar `src/pages/en/experience.astro`
* [x] editar `src/pages/es/experience.astro`
* [x] editar `src/components/ui/BrandLockup.astro`

### No entra

* [x] no cambiar assets fuente
* [x] no cambiar contenido
* [x] no cambiar cache TTL
* [x] no redisenar cards

---

## 7. Archivos y superficies de trabajo

### Leer antes de editar

* `src/components/sections/Projects.astro`
* `src/pages/en/work.astro`
* `src/pages/es/work.astro`
* `src/components/sections/Timeline.astro`
* `src/pages/en/experience.astro`
* `src/pages/es/experience.astro`
* `src/components/ui/BrandLockup.astro`

### Editar

* `src/components/sections/Projects.astro`
* `src/pages/en/work.astro`
* `src/pages/es/work.astro`
* `src/components/sections/Timeline.astro`
* `src/pages/en/experience.astro`
* `src/pages/es/experience.astro`
* `src/components/ui/BrandLockup.astro`

### Validar

* `npm test`
* `npm run build`
* inspeccion HTML generada
* revision visual/manual

### No tocar

* `src/assets/**`
* cache/deployment config

---

## 8. Checklist de ejecucion

### Bloque A - Relectura de fuentes

* [x] leer componentes/paginas con work images
* [x] leer componentes/paginas con logos/wordmark

### Bloque B - Inspeccion de estado actual

* [x] confirmar `img` manual en work cards
* [x] confirmar logos sin `width`/`height`
* [x] confirmar wordmark/monogram sin `width`/`height`

### Bloque C - Edicion por archivo

* [x] usar `Image` con `widths`/`sizes` en Projects home
* [x] usar `Image` con `widths`/`sizes` en work EN
* [x] usar `Image` con `widths`/`sizes` en work ES
* [x] agregar dimensiones explicitas a logos en Timeline preview
* [x] agregar dimensiones explicitas a logos en experience EN
* [x] agregar dimensiones explicitas a logos en experience ES
* [x] agregar dimensiones explicitas a brand lockup

### Bloque D - Registro de decisiones, hallazgos o blockers

* [x] registrar hallazgos si aparece drift

### Bloque E - Validacion

* [x] ejecutar `npm test`
* [x] ejecutar `npm run build`
* [x] inspeccionar HTML generado para work/home/experience
* [x] revisar que work images tengan `srcset`/`sizes`
* [x] revisar que logos/wordmark tengan `width`/`height`

### Bloque F - Cierre

* [x] marcar fase done si validaciones pasan

---

## 9. Drift detectado

* Fecha:
  * fuente esperada:
  * diferencia encontrada:
  * impacto:
  * accion:
  * requiere decision: `si` | `no`

---

## 10. Hallazgos durante ejecucion

* Fecha: `2026-05-24`
  * hallazgo: Astro conserva solo variantes responsive que no exceden el ancho fuente de los work headers.
  * impacto: `widths` mayores solicitados en work pages no fuerzan upscaling; el HTML generado usa variantes reales.
  * accion: se acepta como comportamiento correcto de `Image` de Astro.

---

## 11. Blockers

* [x] sin blockers

---

## 12. Decisiones tomadas

* Fecha: `2026-05-24`
  * decision: usar `Image` solo para work headers y dimensiones explicitas para logos/brand.
  * razon: work headers necesitan responsive delivery; logos/brand necesitan estabilidad de layout sin cambiar render.
  * documentos o areas afectadas: componentes de work, experience y brand lockup.

---

## 13. Validaciones

### Documentales

* [x] verificar alineacion con handoff y decision de cache fuera de alcance

### Tecnicas

* [x] `npm test`
* [x] `npm run build`

### Manuales

* [x] inspeccion HTML generada
* [x] revision visual/manual

### Resultados

* Validacion:
  * comando o revision: `npm test`
  * resultado esperado: pass
  * resultado obtenido: pass; 3 tests, 0 failures.
  * estado: `pass`
  * notas:
* Validacion:
  * comando o revision: `npm run build`
  * resultado esperado: pass
  * resultado obtenido: pass; 30 paginas generadas; 60 imagenes optimizadas/generadas.
  * estado: `pass`
  * notas:
* Validacion:
  * comando o revision: inspeccion HTML generada
  * resultado esperado: `srcset`/`sizes` en work headers y `width`/`height` en logos/wordmark.
  * resultado obtenido: pass; work headers tienen `srcset`/`sizes`; experience logos, monogram y wordmark tienen `width`/`height`.
  * estado: `pass`
  * notas: la revision visual por navegador queda cubierta tambien en la verificacion global posterior.
