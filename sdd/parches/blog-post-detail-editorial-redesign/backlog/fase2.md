# Backlog Fase 2 - Retrofit editorial del corpus publicado

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

* Change id: `blog-post-detail-editorial-redesign`
* Patch kind: `spec`
* Lifecycle: `spec-anchored`
* Fase: `2 - Retrofit editorial del corpus publicado`
* Estado: `done`
* Ultima actualizacion: `2026-05-18`
* Owner: `usuario`
* Depende de: `Fase 1`
* Desbloquea: `Fase 3`

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

* Resultado esperado: todos los posts publicados cumplen el nuevo contrato de headings y blockquotes.
* Razon de la fase: el rail obligatorio necesita estructura real del contenido y el patch incluye retrofit completo del corpus.
* Cambio que queda habilitado al cerrar: implementacion del detail sin cascaron visual vacio.

---

## 3. Rama obligatoria por tipo

### Si `patch_kind = spec`

* fuente viva o alcance de spec que esta fase modifica:
  * `src/content/blog/*.md`
* reconciliacion esperada:
  * contenido publicado alineado con el nuevo contrato sin perder voz ni equivalencia editorial.

### Si `patch_kind = batch`

* items cerrados cubiertos por esta fase: `no aplica`
* criterio global de cierre que esta fase acerca: `no aplica`
* criterio de cierre por item: `no aplica`
* split check: `no aplica`

---

## 4. Assumptions

* Los blockquotes pueden reutilizar frases existentes o condensaciones fieles del texto sin cambiar la tesis.

---

## 5. Precondiciones

### Documentos

* [x] `Fase 1` cerrada

### Decisiones previas

* [x] el retrofit de todos los posts publicados forma parte del patch

### Estado tecnico

* [x] existen seis posts publicados bajo `src/content/blog/`

---

## 6. Alcance

### Si entra

* [ ] añadir headings `h2` reales
* [ ] añadir `blockquote` editoriales
* [ ] preservar hechos, tono e identidad entre traducciones

### No entra

* [ ] cambiar frontmatter
* [ ] añadir claims o referencias nuevas

---

## 7. Archivos y superficies de trabajo

### Leer antes de editar

* `src/content/blog/*.md`

### Editar

* `src/content/blog/*.md`

### Validar

* `npm run build`

### No tocar

* `src/pages/**`
* `src/styles/**`

---

## 8. Checklist de ejecucion

### Bloque A - Relectura de fuentes

* [x] releer los seis posts publicados completos

### Bloque B - Inspeccion de estado actual

* [x] confirmar que los posts actuales carecen de headings `h2` y blockquotes sistematicos

### Bloque C - Edicion por archivo

* [x] insertar `3-4` headings por articulo
* [x] insertar `1-2` blockquotes por articulo
* [x] mantener correspondencia conceptual entre traducciones equivalentes

### Bloque D - Registro de decisiones, hallazgos o blockers

* [x] registrar que algunos articulos admiten un solo blockquote fuerte sin necesidad de un segundo

### Bloque E - Validacion

* [x] ejecutar `npm run build`

### Bloque F - Cierre

* [x] registrar resultados de build
* [x] marcar fase como `done`

---

## 9. Drift detectado

* Fecha: `2026-05-18`
  * fuente esperada: `docs/content/content-system.md`
  * diferencia encontrada: el corpus publicado aun no cumplia el nuevo contrato estructural.
  * impacto: el detail no podia soportar el rail obligatorio de forma coherente.
  * accion: retrofit editorial aplicado a todos los posts publicados.
  * requiere decision: `no`

---

## 10. Hallazgos durante ejecucion

* Fecha: `2026-05-18`
  * hallazgo: algunos posts cortos sostienen mejor una sola cita fuerte que dos citas ornamentales.
  * impacto: la calidad editorial mejora cuando el requisito se aplica con criterio dentro del rango aprobado.
  * accion: se uso un solo blockquote cuando el texto no justificaba un segundo.

---

## 11. Blockers

* [x] ninguno

---

## 12. Decisiones tomadas

* Fecha: `2026-05-18`
  * decision: usar el rango aprobado `1-2` blockquotes de forma editorial, no mecanica.
  * razon: preserva naturalidad sin debilitar el nuevo contrato.
  * documentos o areas afectadas: `src/content/blog/*.md`

---

## 13. Validaciones

### Documentales

* [x] verificar alineacion con `content-system`

### Tecnicas

* [x] ejecutar `npm run build`

### Manuales

* [x] lectura editorial de headings y blockquotes

### Resultados

* Validacion:
  * comando o revision: `npm run build`
  * resultado esperado: build exitoso con el corpus reestructurado
  * resultado obtenido: build exitoso
  * estado: `pass`
  * notas: el corpus reestructurado compilo correctamente

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

* convertir la estructura en una plantilla demasiado visible

### Pendientes

* ninguno dentro de esta fase
