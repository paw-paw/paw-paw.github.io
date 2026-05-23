# Backlog Fase 1: Reconciliacion editorial del featured

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

* Change id: `blog-index-editorial-density-expansion`
* Patch kind: `spec`
* Lifecycle: `spec-anchored`
* Fase: `1`
* Estado: `done`
* Ultima actualizacion: `2026-05-18`
* Owner: `usuario`
* Depende de: `plan.md`, `tasks.md`
* Desbloquea: `Fase 2`

---

## 1. Fuente de verdad aplicable

* `docs/README.md`
* `AGENTS.md`
* `sdd/parches/blog-index-editorial-density-expansion/patch.yaml`
* `sdd/parches/blog-index-editorial-density-expansion/definicion.md`
* `sdd/parches/blog-index-editorial-density-expansion/plan.md`
* `sdd/parches/blog-index-editorial-density-expansion/tasks.md`
* `sdd/parches/blog-index-editorial-density-expansion/decision.log`

---

## 2. Objetivo de la fase

* Resultado esperado: los docs permiten explicitamente fecha y tags secundarios en el featured del `blog index`.
* Razon de la fase: la implementacion nueva revierte una decision vigente y no debe nacer solo en codigo.
* Cambio que queda habilitado al cerrar: UI densa del featured y del intro.

---

## 3. Rama obligatoria por tipo

### Si `patch_kind = spec`

* fuente viva o alcance de spec que esta fase modifica:
  * `docs/content/content-system.md`
  * `docs/content/content-master.md`
* reconciliacion esperada: featured y cards regulares quedan descritos con diferencias explicitas y sin contradiccion.

### Si `patch_kind = batch`

* items cerrados cubiertos por esta fase: `no aplica`
* criterio global de cierre que esta fase acerca: `no aplica`
* criterio de cierre por item: `no aplica`
* split check: `no aplica`

---

## 4. Assumptions

* La nueva decision aplica al featured; las cards regulares conservan presentacion compacta.

---

## 5. Precondiciones

### Documentos

* [x] `definicion.md`, `plan.md`, `tasks.md` y `decision.log` vigentes

### Decisiones previas

* [x] el usuario eligio mostrar `category`, `angle`, `domain` y fecha en el featured

### Estado tecnico

* [x] `angle`, `domain` y `publish_date` ya existen en el modelo de datos

---

## 6. Alcance

### Si entra

* [x] actualizar la descripcion del featured
* [x] conservar diferenciacion con cards regulares

### No entra

* [x] cambiar schema
* [x] editar runtime

---

## 7. Archivos y superficies de trabajo

### Leer antes de editar

* `docs/content/content-system.md`
* `docs/content/content-master.md`

### Editar

* `docs/content/content-system.md`
* `docs/content/content-master.md`

### Validar

* lectura comparada de ambos docs

### No tocar

* `src/*`

---

## 8. Checklist de ejecucion

### Bloque A - Relectura de fuentes

* [x] releer la regla vigente de presentacion resumida del featured
* [x] releer la descripcion actual del panel derecho en `content-master.md`

### Bloque B - Inspeccion de estado actual

* [x] confirmar que hoy `angle` y `domain` no se muestran en el `blog index`
* [x] confirmar que la fecha del featured no esta documentada como visible

### Bloque C - Edicion por archivo

* [x] editar `docs/content/content-system.md` para permitir featured con `category`, `angle`, `domain` y fecha breve visible
* [x] editar `docs/content/content-master.md` para reflejar la nueva composicion del panel derecho

### Bloque D - Registro de decisiones, hallazgos o blockers

* [x] registrar cualquier contradiccion residual entre featured y cards regulares

### Bloque E - Validacion

* [x] verificar que la nueva decision no arrastra cambios no deseados a las cards regulares

### Bloque F - Cierre

* [x] marcar la fase como `done` solo si la fuente viva queda reconciliada

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
  * hallazgo: la nueva regla pudo limitarse al featured y conservar las cards regulares compactas.
  * impacto: el cambio queda acotado y no fuerza una revision global del index.
  * accion: documentar explicitamente la diferencia entre featured y cards.

---

## 11. Blockers

* [ ] ninguno detectado

---

## 12. Decisiones tomadas

* Fecha: `2026-05-18`
  * decision: hacer visible la jerarquia `category -> angle -> domain` solo en el featured del index.
  * razon: satisface la nueva intencion editorial sin perder la ligereza de las cards regulares.
  * documentos o areas afectadas: `content-system.md`, `content-master.md`.

---

## 13. Validaciones

### Documentales

* [x] verificar alineacion con contratos aplicables

### Tecnicas

* [x] no aplica

### Manuales

* [x] lectura comparada de ambos docs

### Resultados

* Validacion:
  * comando o revision: lectura comparada de `content-system.md` y `content-master.md`
  * resultado esperado: featured y cards descritos sin contradiccion
  * resultado obtenido: featured admite fecha + jerarquia completa; cards regulares conservan presentacion compacta
  * estado: `pass`
  * notas: no aplican validaciones tecnicas en esta fase.

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

* dejar una regla nueva implicita en vez de textual

### Pendientes

* ejecutar la Fase 2 tras reconciliar docs
