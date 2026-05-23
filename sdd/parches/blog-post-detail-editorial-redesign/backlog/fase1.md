# Backlog Fase 1 - Sincronizacion contractual del blog detail

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

* Change id: `blog-post-detail-editorial-redesign`
* Patch kind: `spec`
* Lifecycle: `spec-anchored`
* Fase: `1 - Sincronizacion contractual del blog detail`
* Estado: `active`
* Ultima actualizacion: `2026-05-18`
* Owner: `usuario`
* Depende de: `decision.log`
* Desbloquea: `Fase 2`, `Fase 3`

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

* Resultado esperado: contratos del detail alineados con hero editorial, `Key idea`, cuerpo estructurado y rail interno obligatorio.
* Razon de la fase: los docs vigentes aun describen un cuerpo sin sub-bloques obligatorios.
* Cambio que queda habilitado al cerrar: retrofit editorial del corpus e implementacion runtime sin drift documental.

---

## 3. Rama obligatoria por tipo

### Si `patch_kind = spec`

* fuente viva o alcance de spec que esta fase modifica:
  * `docs/architecture/site-architecture.md`
  * `docs/content/content-system.md`
* reconciliacion esperada:
  * describir la nueva superficie del detail y reemplazar la regla antigua del cuerpo libre por el nuevo contrato editorial.

### Si `patch_kind = batch`

* items cerrados cubiertos por esta fase: `no aplica`
* criterio global de cierre que esta fase acerca: `no aplica`
* criterio de cierre por item: `no aplica`
* split check: `no aplica`

---

## 4. Assumptions

* No critical assumptions.

---

## 5. Precondiciones

### Documentos

* [x] artifacts SDD vigentes

### Decisiones previas

* [x] decisiones de intake cerradas por el usuario

### Estado tecnico

* [x] no se requiere tocar runtime en esta fase

---

## 6. Alcance

### Si entra

* [ ] actualizar rol y contenido esperado de `/blog/[slug]`
* [ ] actualizar reglas estructurales de `blog_post`
* [ ] fijar el uso visible de `Key idea` sin nuevo campo

### No entra

* [ ] editar `src/**`
* [ ] reescribir posts publicados

---

## 7. Archivos y superficies de trabajo

### Leer antes de editar

* `docs/architecture/site-architecture.md`
* `docs/content/content-system.md`
* `docs/visual/visual-system.md`

### Editar

* `docs/architecture/site-architecture.md`
* `docs/content/content-system.md`

### Validar

* `docs/README.md`
* `sdd/parches/blog-post-detail-editorial-redesign/decision.log`

### No tocar

* `src/**`

---

## 8. Checklist de ejecucion

### Bloque A - Relectura de fuentes

* [x] releer rol vigente de `/blog/[slug]`
* [x] releer reglas vigentes de `blog_post`
* [x] releer decisiones de intake cerradas por el usuario

### Bloque B - Inspeccion de estado actual

* [x] confirmar que `content-system` aun dice que el cuerpo no exige sub-bloques internos obligatorios
* [x] confirmar que `site-architecture` no describe aun `Key idea` ni rail interno

### Bloque C - Edicion por archivo

* [x] editar `site-architecture` para describir hero, `Key idea`, cuerpo estructurado y rail
* [x] editar `content-system` para fijar estructura obligatoria, blockquotes y mantenimiento editorial flexible

### Bloque D - Registro de decisiones, hallazgos o blockers

* [x] registrar que no hizo falta tocar `visual-system`

### Bloque E - Validacion

* [x] releer ambos contratos juntos y comprobar que reflejan las decisiones aprobadas

### Bloque F - Cierre

* [x] actualizar resultados de validacion
* [x] marcar fase como `done`

---

## 9. Drift detectado

* Fecha: `2026-05-18`
  * fuente esperada: `docs/content/content-system.md`
  * diferencia encontrada: el contrato vigente mantenia cuerpo libre mientras el patch aprobado exige estructura obligatoria y rail interno.
  * impacto: bloqueaba implementar runtime sin drift contractual.
  * accion: reconciliado en esta fase.
  * requiere decision: `no`

---

## 10. Hallazgos durante ejecucion

* Fecha: `2026-05-18`
  * hallazgo: `visual-system` ya permitia una direccion editorial con texto dominante y asset contenido, por lo que no hizo falta ampliarlo.
  * impacto: el alcance documental pudo mantenerse acotado.
  * accion: no se editaron contratos visuales.

---

## 11. Blockers

* [x] ninguno

---

## 12. Decisiones tomadas

* Fecha: `2026-05-18`
  * decision: mantener `visual-system` sin cambios.
  * razon: la nueva composicion ya cabe dentro de las reglas visuales vigentes.
  * documentos o areas afectadas: `docs/visual/visual-system.md`

---

## 13. Validaciones

### Documentales

* [x] verificar alineacion con contratos aplicables

### Tecnicas

* [x] no aplica en esta fase

### Manuales

* [x] lectura cruzada de contratos editados

### Resultados

* Validacion:
  * comando o revision: lectura cruzada de `site-architecture` y `content-system`
  * resultado esperado: contratos alineados con las decisiones del patch
  * resultado obtenido: contratos actualizados sin contradiccion abierta
  * estado: `pass`
  * notas: `visual-system` no requirio cambio

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

* convertir estructura obligatoria en mecanica editorial pobre

### Pendientes

* ninguno dentro de esta fase
