# Backlog Fase 4 - Refinamiento de featured y cards del index

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

* Change id: `blog-index-editorial-redesign`
* Patch kind: `spec`
* Lifecycle: `spec-first`
* Fase: `4 - Refinamiento de featured y cards del index`
* Estado: `done`
* Ultima actualizacion: `2026-05-18`
* Owner: `usuario`
* Depende de: `Fase 1`
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

* Resultado esperado: featured y cards regulares del index siguen la jerarquia visual resumida aprobada.
* Razon de la fase: el estado actual aun expone chips equivalentes y CTAs redundantes.
* Cambio que queda habilitado al cerrar: verificacion integrada final del rediseño.

---

## 3. Rama obligatoria por tipo

### Si `patch_kind = spec`

* fuente viva o alcance de spec que esta fase modifica:
  * `BlogFeaturedPanel`
  * `BlogCard`
  * tests que capturan el output visible del blog index
* reconciliacion esperada:
  * la presentacion resumida del index refleja el contrato actualizado sin cambiar el modelo editorial base.

### Si `patch_kind = batch`

* items cerrados cubiertos por esta fase: `no aplica`
* criterio global de cierre que esta fase acerca: `no aplica`
* criterio de cierre por item: `no aplica`
* split check: `no aplica`

---

## 4. Assumptions

* Las pruebas existentes del blog index deben actualizarse para afirmar el nuevo output visible, no conservar expectations obsoletas.

---

## 5. Precondiciones

### Documentos

* [x] Fase 1 cerrada

### Decisiones previas

* [x] el index puede mostrar solo `category` como chip primario

### Estado tecnico

* [x] `BlogFeaturedPanel` y `BlogCard` existentes
* [x] tests de salida visible identificados

---

## 6. Alcance

### Si entra

* [x] reestructurar featured
* [x] reestructurar cards regulares
* [x] añadir estilos de clamp, foco y flecha inline
* [x] actualizar tests afectados por el nuevo output visible

### No entra

* [ ] cambiar `BlogPostMeta`
* [ ] cambiar detail pages o category pages

---

## 7. Archivos y superficies de trabajo

### Leer antes de editar

* `src/components/blog/BlogFeaturedPanel.astro`
* `src/components/blog/BlogCard.astro`
* `src/styles/global.css`
* `tests/public-release-closure.test.mjs`
* `tests/blog-es-detail-alignment.test.mjs`

### Editar

* `src/components/blog/BlogFeaturedPanel.astro`
* `src/components/blog/BlogCard.astro`
* `src/styles/global.css`
* `tests/public-release-closure.test.mjs`
* `tests/blog-es-detail-alignment.test.mjs`

### Validar

* `npm run build`
* `npm run test`
* `astro-pages-verify`

### No tocar

* `src/components/blog/BlogPostMeta.astro`
* `src/pages/**/blog/[slug].astro`
* `src/pages/**/blog/category/[category].astro`

---

## 8. Checklist de ejecucion

### Bloque A - Relectura de fuentes

* [x] releer componentes actuales
* [x] releer tests que inspeccionan output del index

### Bloque B - Inspeccion de estado actual

* [x] confirmar chips equivalentes en featured/cards
* [x] confirmar CTA separada en cards regulares
* [x] confirmar tests anclados a strings antiguas del index

### Bloque C - Edicion por archivo

* [x] simplificar `BlogFeaturedPanel` a `category`, title, excerpt y CTA textual
* [x] convertir `BlogCard` en una card clickeable con flecha inline y sin boton separado
* [x] añadir estilos de clamp, focus y reduced motion necesarios
* [x] actualizar tests afectados por labels y taxonomia visible del index

### Bloque D - Registro de decisiones, hallazgos o blockers

* [x] registrar hallazgo si los tests revelan dependencia no documentada del output anterior
* [x] registrar blocker si la nueva semantica obliga a cambiar detail/category

### Bloque E - Validacion

* [x] ejecutar `npm run build`
* [x] ejecutar `npm run test`
* [x] usar `astro-pages-verify` sobre `/en/blog/` y `/es/blog/`

### Bloque F - Cierre

* [x] registrar resultados
* [x] marcar la fase como `done`

---

## 9. Drift detectado

* Fecha: `2026-05-18`
  * fuente esperada: output visible del `blog index`
  * diferencia encontrada: featured y cards seguian mostrando la jerarquia antigua de chips y CTA redundante
  * impacto: runtime no seguia el contrato actualizado de presentacion resumida
  * accion: se reestructuraron ambos componentes y se ajustaron estilos asociados
  * requiere decision: `no`

---

## 10. Hallazgos durante ejecucion

* Fecha: `2026-05-18`
  * hallazgo: las pruebas existentes anclaban explicitamente strings y taxonomia visibles del output anterior (`Featured post`, `All posts`, `Gaming`)
  * impacto: los tests debian evolucionar junto con la especificacion visible aprobada
  * accion: se actualizaron expectations para el nuevo output del index sin tocar detail/category

---

## 11. Blockers

* [x] ninguno

---

## 12. Decisiones tomadas

* Fecha: `2026-05-18`
  * decision: hacer toda la `BlogCard` clickeable mediante una sola ancla envolvente
  * razon: elimina CTA duplicada sin perder señal de interaccion ni introducir anclas anidadas
  * documentos o areas afectadas: `src/components/blog/BlogCard.astro`, `src/styles/global.css`

---

## 13. Validaciones

### Documentales

* [x] runtime sigue la presentacion resumida aprobada

### Tecnicas

* [x] `npm run build`
* [x] `npm run test`

### Manuales

* [x] `astro-pages-verify` de index localizado

### Resultados

* Validacion:
  * comando o revision: `npm run build`
  * resultado esperado: build estructural exitoso tras cambios visibles de cards
  * resultado obtenido: build exitoso
  * estado: `pass`
  * notas: sin errores de compilacion
* Validacion:
  * comando o revision: `npm run test`
  * resultado esperado: suites ajustadas al nuevo output visible pasan
  * resultado obtenido: 3 suites / 3 tests pasaron
  * estado: `pass`
  * notas: las expectations antiguas del index fueron actualizadas
* Validacion:
  * comando o revision: `astro-pages-verify` (reuso del preview local + intento de inspeccion MCP)
  * resultado esperado: verificacion visible de `/en/blog/` y `/es/blog/`
  * resultado obtenido: MCP no ejecutable en este entorno por ausencia de navegador disponible
  * estado: `skipped`
  * notas: mismo limite ambiental detectado en Fase 3

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

* una card completamente clickeable podria introducir problemas si se agregan enlaces anidados por accidente

### Pendientes

* revision visible MCP sigue pendiente por limite ambiental del navegador local
