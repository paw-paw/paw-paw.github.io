# Backlog Fase 3 - Nueva superficie de blog post detail

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

* Change id: `blog-post-detail-editorial-redesign`
* Patch kind: `spec`
* Lifecycle: `spec-anchored`
* Fase: `3 - Nueva superficie de blog post detail`
* Estado: `done`
* Ultima actualizacion: `2026-05-18`
* Owner: `usuario`
* Depende de: `Fase 1`, `Fase 2`
* Desbloquea: `Fase 4`

---

## 1. Fuente de verdad aplicable

* `docs/README.md`
* `AGENTS.md`
* `sdd/parches/blog-post-detail-editorial-redesign/patch.yaml`
* `sdd/parches/blog-post-detail-editorial-redesign/definicion.md`
* `sdd/parches/blog-post-detail-editorial-redesign/plan.md`
* `sdd/parches/blog-post-detail-editorial-redesign/tasks.md`
* `sdd/parches/blog-post-detail-editorial-redesign/decision.log`

---

## 2. Objetivo de la fase

* Resultado esperado: detail pages EN/ES renderizan hero editorial, `Key idea`, rail y cuerpo abierto.
* Razon de la fase: la UI actual aun responde al contrato anterior.
* Cambio que queda habilitado al cerrar: verificacion integrada final del patch.

---

## 3. Rama obligatoria por tipo

### Si `patch_kind = spec`

* fuente viva o alcance de spec que esta fase modifica:
  * detail pages localizadas
  * strings i18n del blog
  * estilos globales del blog
  * fixture de test temporal del detail espanol
* reconciliacion esperada:
  * runtime visible alineado con contratos ya actualizados.

### Si `patch_kind = batch`

* items cerrados cubiertos por esta fase: `no aplica`
* criterio global de cierre que esta fase acerca: `no aplica`
* criterio de cierre por item: `no aplica`
* split check: `no aplica`

---

## 4. Assumptions

* Los headings `h2` son la fuente suficiente del rail.

---

## 5. Precondiciones

### Documentos

* [x] fases 1 y 2 cerradas

### Decisiones previas

* [x] labels `Key idea` y `On this page` aprobados

### Estado tecnico

* [x] corpus real ya contiene headings `h2`

---

## 6. Alcance

### Si entra

* [ ] actualizar labels i18n
* [ ] rehacer layout detail EN/ES
* [ ] estilizar rail, headings y blockquotes
* [ ] actualizar fixture temporal de test

### No entra

* [ ] cambiar schema
* [ ] redisenar index o category pages

---

## 7. Archivos y superficies de trabajo

### Leer antes de editar

* `src/pages/en/blog/[slug].astro`
* `src/pages/es/blog/[slug].astro`
* `src/i18n/en.json`
* `src/i18n/es.json`
* `src/styles/global.css`
* `tests/blog-es-detail-alignment.test.mjs`

### Editar

* mismos archivos listados arriba

### Validar

* `npm run build`
* `npm test`

### No tocar

* `src/content/blog/*.md`

---

## 8. Checklist de ejecucion

### Bloque A - Relectura de fuentes

* [x] releer rutas detail actuales y estilos del blog
* [x] releer fixture temporal del test espanol

### Bloque B - Inspeccion de estado actual

* [x] confirmar ausencia de labels i18n nuevos
* [x] confirmar ausencia de rail y blockquote styling especializado

### Bloque C - Edicion por archivo

* [x] añadir labels localizados
* [x] rehacer detail EN/ES con hero editorial, `Key idea`, rail y cuerpo abierto
* [x] añadir estilos globales necesarios
* [x] ampliar fixture temporal con headings y blockquote

### Bloque D - Registro de decisiones, hallazgos o blockers

* [x] registrar que se mantiene un layout duplicado por locale para respetar el patron actual del repo

### Bloque E - Validacion

* [x] ejecutar `npm run build`
* [x] ejecutar `npm test`

### Bloque F - Cierre

* [x] registrar resultados de validacion
* [x] marcar fase como `done`

---

## 9. Drift detectado

* Fecha: `2026-05-18`
  * fuente esperada: rutas detail EN/ES
  * diferencia encontrada: runtime seguia usando panel + imagen + card, sin rail ni `Key idea` visible.
  * impacto: UI desalineada con contratos actualizados.
  * accion: reconciliado en esta fase.
  * requiere decision: `no`

---

## 10. Hallazgos durante ejecucion

* Fecha: `2026-05-18`
  * hallazgo: el fixture temporal del test espanol tambien necesitaba estructura editorial para no renderizar un rail vacio bajo el nuevo contrato.
  * impacto: la suite de tests requeria ajuste coherente con la nueva verdad documental.
  * accion: se actualizo el markdown temporal generado por el test.

---

## 11. Blockers

* [x] ninguno

---

## 12. Decisiones tomadas

* Fecha: `2026-05-18`
  * decision: mantener rutas detail separadas EN/ES en vez de abstraerlas ahora.
  * razon: el repo ya usa ese patron y el cambio pedido no requiere una refactorizacion lateral.
  * documentos o areas afectadas: `src/pages/en/blog/[slug].astro`, `src/pages/es/blog/[slug].astro`

---

## 13. Validaciones

### Documentales

* [x] verificar alineacion con contratos aplicables

### Tecnicas

* [x] `npm run build`
* [x] `npm test`

### Manuales

* [ ] revision visual pendiente en Fase 4

### Resultados

* Validacion:
  * comando o revision: `npm run build`
  * resultado esperado: build exitoso
  * resultado obtenido: build exitoso
  * estado: `pass`
  * notas: UI detail compilada correctamente
* Validacion:
  * comando o revision: `npm test`
  * resultado esperado: suite exitosa
  * resultado obtenido: suite exitosa tras ajustar assertions de orden de atributos
  * estado: `pass`
  * notas: los tests conservan la semantica original con regex menos fragil

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

* rail visualmente demasiado dominante en desktop

### Pendientes

* ninguno dentro de esta fase
