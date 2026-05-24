# Backlog Fase 1 - Contratos y documentos

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

* Change id: `seo-aeo-blog-performance`
* Patch kind: `batch`
* Lifecycle: `spec-first`
* Fase: `1 - Contratos y documentos`
* Estado: `done`
* Ultima actualizacion: `2026-05-24`
* Owner: `paw-paw`
* Depende de: decisiones `1A`, `2C`, `3A`
* Desbloquea: Fase 2 schema, Fase 3 robots, Fase 4 first viewport

---

## 1. Fuente de verdad aplicable

* `docs/README.md`
* `AGENTS.md`
* `sdd/parches/seo-aeo-blog-performance/patch.yaml`
* `sdd/parches/seo-aeo-blog-performance/definicion.md`
* `sdd/parches/seo-aeo-blog-performance/plan.md`
* `sdd/parches/seo-aeo-blog-performance/tasks.md`
* `sdd/parches/seo-aeo-blog-performance/decision.log`

---

## 2. Objetivo de la fase

* Resultado esperado: docs aplicables reflejan las reglas SEO/AEO, robots IA, `modified_date`, entidad estable y first viewport antes de cambios runtime.
* Razon de la fase: evitar drift documental.
* Cambio que queda habilitado al cerrar: implementacion runtime de schema, robots y performance.

---

## 3. Rama obligatoria por tipo

### Si `patch_kind = batch`

* items cerrados cubiertos por esta fase: Item 1.
* criterio global de cierre que esta fase acerca: documentacion alineada antes de implementacion.
* criterio de cierre por item: docs no contradicen fases runtime posteriores.
* split check: fase documental autocontenida.

---

## 4. Assumptions

* Las fuentes oficiales verificadas para bots se usan solo para precisar docs de robots; no sustituyen contratos del repo.

---

## 5. Precondiciones

### Documentos

* [x] `definicion.md`, `plan.md`, `tasks.md` vigentes

### Decisiones previas

* [x] `1A` GitHub solo schema
* [x] `2C` search/user-fetch permitido, training restringido
* [x] `3A` docs primero para first viewport

### Estado tecnico

* [x] no requiere runtime previo

---

## 6. Alcance

### Si entra

* [x] editar `docs/delivery/seo-spec.md`
* [x] editar `docs/content/content-system.md`
* [x] editar `docs/visual/interaction-spec.md`
* [x] editar `docs/delivery/release-checklist.md`

### No entra

* [ ] no editar `src/**`
* [ ] no editar `public/robots.txt`
* [ ] no editar skills

---

## 7. Archivos y superficies de trabajo

### Leer antes de editar

* `docs/delivery/seo-spec.md`
* `docs/content/content-system.md`
* `docs/visual/interaction-spec.md`
* `docs/delivery/release-checklist.md`

### Editar

* `docs/delivery/seo-spec.md`
* `docs/content/content-system.md`
* `docs/visual/interaction-spec.md`
* `docs/delivery/release-checklist.md`

### Validar

* revision documental

### No tocar

* `src/**`
* `public/robots.txt`
* `.codex/skills/**`

---

## 8. Checklist de ejecucion

### Bloque A - Relectura de fuentes

* [x] leer docs aplicables

### Bloque B - Inspeccion de estado actual

* [x] confirmar SEO spec no cubre schema avanzado ni robots IA por uso
* [x] confirmar content system no cubre `modified_date`
* [x] confirmar interaction spec permite AOS en hero pero no regla first viewport visible por defecto

### Bloque C - Edicion por archivo

* [x] agregar a `docs/delivery/seo-spec.md` reglas de schema, `@id`, robots por uso y Googlebot/Google-Extended
* [x] agregar a `docs/content/content-system.md` reglas de `modified_date` y SEO/AEO editorial por post
* [x] agregar a `docs/visual/interaction-spec.md` regla first viewport visible por defecto
* [x] agregar a `docs/delivery/release-checklist.md` checks de schema/robots/first viewport

### Bloque D - Registro de decisiones, hallazgos o blockers

* [x] registrar hallazgos si aparece drift adicional

### Bloque E - Validacion

* [x] revisar que docs no contradicen decisiones `1A`, `2C`, `3A`

### Bloque F - Cierre

* [x] marcar fase como done si todos los checks documentales pasan

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

* Fecha:
  * hallazgo:
  * impacto:
  * accion:
* Fecha: `2026-05-24`
  * hallazgo: `docs/visual/interaction-spec.md` permitia hero con AOS/motion, pero no declaraba primer viewport visible por defecto.
  * impacto: runtime performance podia quedar en drift si se quitaba AOS del hero sin docs.
  * accion: se agrego regla explicita de primer viewport visible con HTML/CSS base.

---

## 11. Blockers

* [x] sin blockers

---

## 12. Decisiones tomadas

* Fecha: `2026-05-24`
  * decision: ejecutar docs antes de runtime.
  * razon: decision humana `3A`.
  * documentos o areas afectadas: `docs/visual/interaction-spec.md`, `docs/delivery/seo-spec.md`, `docs/content/content-system.md`.

---

## 13. Validaciones

### Documentales

* [x] verificar alineacion con contratos aplicables

### Tecnicas

* [x] no aplica en esta fase documental

### Manuales

* [x] revision manual de secciones editadas

### Resultados

* Validacion:
  * comando o revision: revision documental
  * resultado esperado: docs alineadas con decisiones
  * resultado obtenido: `docs/delivery/seo-spec.md`, `docs/content/content-system.md`, `docs/visual/interaction-spec.md` y `docs/delivery/release-checklist.md` reflejan `1A`, `2C`, `3A`.
  * estado: `pass`
  * notas: fase documental; no se ejecutan comandos tecnicos.

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

* mitigado: cambios documentales quedaron acotados a reglas requeridas por fases posteriores

### Pendientes

* ninguno
