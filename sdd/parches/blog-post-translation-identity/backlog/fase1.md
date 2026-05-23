# Backlog Fase 1: Contrato de identidad traducible

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

* Change id: `blog-post-translation-identity`
* Patch kind: `spec`
* Lifecycle: `spec-first`
* Fase: `1 - Contrato de identidad traducible`
* Estado: `done`
* Ultima actualizacion: `2026-05-18`
* Owner: `usuario`
* Depende de: `decision.log`
* Desbloquea: `Fase 2`

---

## 1. Fuente de verdad aplicable

* `docs/README.md`
* `AGENTS.md`
* `sdd/parches/blog-post-translation-identity/patch.yaml`
* `sdd/parches/blog-post-translation-identity/definicion.md`
* `sdd/parches/blog-post-translation-identity/plan.md`
* `sdd/parches/blog-post-translation-identity/tasks.md`
* `sdd/parches/blog-post-translation-identity/decision.log`

---

## 2. Objetivo de la fase

* Resultado esperado: contratos vivos describen `i18n_key`, equivalencia real y fallback monolingüe.
* Razon de la fase: este repo exige que la verdad documental preceda a cambios visibles o de modelo.
* Cambio que queda habilitado al cerrar: implementacion segura del runtime en Fase 2.

---

## 3. Rama obligatoria por tipo

### Si `patch_kind = spec`

* fuente viva o alcance de spec que esta fase modifica: contrato de `blog_post`, politica i18n de equivalencias y auxiliares SEO/release.
* reconciliacion esperada: docs dejan de implicar que la equivalencia exacta dependa solo de `slug`.

---

## 4. Assumptions

* `i18n_key` es el nombre contractual final.
* `i18n_key` no convierte la traduccion en obligatoria para todos los posts.

---

## 5. Precondiciones

### Documentos

* [x] artifacts vigentes

### Decisiones previas

* [x] decision sobre `i18n_key` registrada

### Estado tecnico

* [x] limitacion actual de equivalencia por `slug` ya inspeccionada

---

## 6. Alcance

### Si entra

* [x] editar `docs/content/content-system.md`
* [x] editar `docs/architecture/i18n-spec.md`
* [x] reconciliar `docs/delivery/seo-spec.md`
* [x] reconciliar `docs/delivery/release-checklist.md`

### No entra

* [ ] editar runtime
* [ ] crear nuevas traducciones

---

## 7. Archivos y superficies de trabajo

### Leer antes de editar

* `docs/content/content-system.md`
* `docs/architecture/i18n-spec.md`
* `docs/delivery/seo-spec.md`
* `docs/delivery/release-checklist.md`

### Editar

* `docs/content/content-system.md`
* `docs/architecture/i18n-spec.md`
* `docs/delivery/seo-spec.md`
* `docs/delivery/release-checklist.md`

### Validar

* definicion y plan del patch

### No tocar

* `src/**`
* `tests/**`

---

## 8. Checklist de ejecucion

### Bloque A - Relectura de fuentes

* [x] releer las secciones de `blog_post`, equivalencias i18n, SEO de detail y checklist de release

### Bloque B - Inspeccion de estado actual

* [x] confirmar que los docs actuales permiten posts sin equivalente pero no modelan una identidad comun separada del `slug`

### Bloque C - Edicion por archivo

* [x] añadir `i18n_key` al contrato de `blog_post` con regla de uso y relacion con `slug`
* [x] aclarar en `i18n-spec` que la equivalencia exacta de blog detail se preserva por identidad comun cuando exista
* [x] actualizar `seo-spec` para distinguir detail con equivalente real frente a fallback al index
* [x] actualizar `release-checklist` para validar ambos casos

### Bloque D - Registro de decisiones, hallazgos o blockers

* [x] registrar hallazgos o drift si la redaccion contractual fuerza una decision nueva

### Bloque E - Validacion

* [x] contrastar la redaccion final con `definicion.md` y `plan.md`

### Bloque F - Cierre

* [x] marcar la fase como `done` si no quedan blockers

---

## 9. Drift detectado

* No detectado.

---

## 10. Hallazgos durante ejecucion

* Fecha: `2026-05-18`
  * hallazgo: los contratos ya contemplaban fallback sin equivalente, pero no distinguian identidad editorial comun de `slug`.
  * impacto: el cambio podia documentarse de forma acotada sin reabrir arquitectura general.
  * accion: se añadieron reglas explicitas de `i18n_key` y alternates.

---

## 11. Blockers

* [x] ninguno

---

## 12. Decisiones tomadas

* Fecha: `2026-05-18`
  * decision: usar `i18n_key` como nombre contractual final.
  * razon: decision explicita del usuario.
  * documentos o areas afectadas: contratos y futura implementacion del blog.

---

## 13. Validaciones

### Documentales

* [x] verificar alineacion con contratos aplicables

### Tecnicas

* [x] no aplica en esta fase

### Manuales

* [x] revision manual de coherencia documental

### Resultados

* Validacion: coherencia documental
  * comando o revision: contraste manual contra `definicion.md`, `plan.md`, `docs/content/content-system.md`, `docs/architecture/i18n-spec.md`
  * resultado esperado: contratos describen `i18n_key`, equivalencia real y fallback sin contradiccion
  * resultado obtenido: contratos alineados y alcance preservado
  * estado: `pass`
  * notas: no se detectaron decisiones nuevas ni drift residual

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

* que la nueva identidad comun quede descrita como obligacion universal por una redaccion imprecisa.

### Pendientes

* pasar a Fase 2 para implementar schema, migracion y validacion tecnica.
