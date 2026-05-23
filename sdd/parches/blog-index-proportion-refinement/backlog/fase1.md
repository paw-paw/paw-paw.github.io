# Backlog Fase 1: Reconciliacion editorial de `excerpt`

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

* Change id: `blog-index-proportion-refinement`
* Patch kind: `spec`
* Lifecycle: `spec-first`
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
* `sdd/parches/blog-index-proportion-refinement/patch.yaml`
* `sdd/parches/blog-index-proportion-refinement/definicion.md`
* `sdd/parches/blog-index-proportion-refinement/plan.md`
* `sdd/parches/blog-index-proportion-refinement/tasks.md`
* `sdd/parches/blog-index-proportion-refinement/decision.log`

---

## 2. Objetivo de la fase

* Resultado esperado: una guia cuantitativa suave para `excerpt` queda reconciliada en docs y skills editoriales aplicables.
* Razon de la fase: la UI no debe cristalizar una politica editorial que aun no vive en las fuentes correctas.
* Cambio que queda habilitado al cerrar: la interfaz puede ampliarse contra una expectativa editorial ya declarada.

---

## 3. Rama obligatoria por tipo

### Si `patch_kind = spec`

* fuente viva o alcance de spec que esta fase modifica:
  * `docs/content/content-system.md`
  * `docs/content/content-master.md`
  * `.codex/skills/blog-new/SKILL.md`
  * `.codex/skills/blog-edit/SKILL.md`
  * `.codex/skills/blog-preflight/SKILL.md`
* reconciliacion esperada: todas las fuentes describen el mismo rango recomendado de `excerpt` y su caracter de guia no bloqueante.

### Si `patch_kind = batch`

* items cerrados cubiertos por esta fase: `no aplica`
* criterio global de cierre que esta fase acerca: `no aplica`
* criterio de cierre por item: `no aplica`
* split check: `no aplica`

---

## 4. Assumptions

* Los excerpts actuales publicados (`23–29` palabras aprox.) son evidencia suficiente para proponer un rango recomendado cercano a esa densidad.
* La guia debe permanecer editorial y suave; no se convierte en limite de schema ni en condicion bloqueante automatica de publicacion.

---

## 5. Precondiciones

### Documentos

* [x] `definicion.md`, `plan.md`, `tasks.md` y `decision.log` vigentes

### Decisiones previas

* [x] existe decision registrada para crear una guia editorial cuantitativa suave

### Estado tecnico

* [x] `src/content.config.ts` no impone longitud maxima de `excerpt`

---

## 6. Alcance

### Si entra

* [x] declarar rango recomendado de `excerpt`
* [x] propagar la misma guia a docs y skills editoriales del blog

### No entra

* [x] cambiar schema
* [x] reescribir excerpts existentes
* [x] tocar componentes runtime

---

## 7. Archivos y superficies de trabajo

### Leer antes de editar

* `docs/content/content-system.md`
* `docs/content/content-master.md`
* `.codex/skills/blog-new/SKILL.md`
* `.codex/skills/blog-edit/SKILL.md`
* `.codex/skills/blog-preflight/SKILL.md`
* `src/content.config.ts`

### Editar

* `docs/content/content-system.md`
* `docs/content/content-master.md`
* `.codex/skills/blog-new/SKILL.md`
* `.codex/skills/blog-edit/SKILL.md`
* `.codex/skills/blog-preflight/SKILL.md`

### Validar

* consistencia textual entre docs y skills editados

### No tocar

* `src/content.config.ts`
* `src/components/blog/*`
* `src/styles/global.css`

---

## 8. Checklist de ejecucion

### Bloque A - Relectura de fuentes

* [x] leer las secciones de `excerpt` y presentacion resumida en `content-system.md`
* [x] leer la descripcion del panel featured y cards regulares en `content-master.md`
* [x] leer las reglas de autoria y preflight de los tres skills editoriales

### Bloque B - Inspeccion de estado actual

* [x] confirmar que hoy solo existe la nocion cualitativa de `excerpt breve`
* [x] confirmar que no hay limite cuantitativo en schema

### Bloque C - Edicion por archivo

* [x] editar `docs/content/content-system.md` para agregar una guia recomendada de `24–32` palabras y dejar claro que no es un hard limit
* [x] editar `docs/content/content-master.md` para sustituir `excerpt breve` por una expectativa alineada con el rango recomendado
* [x] editar `.codex/skills/blog-new/SKILL.md` para inferir excerpts dentro del rango recomendado cuando sea viable
* [x] editar `.codex/skills/blog-edit/SKILL.md` para preservar o ajustar excerpts contra la guia cuando el scope incluya ese campo
* [x] editar `.codex/skills/blog-preflight/SKILL.md` para revisar fit editorial del excerpt contra la guia sin convertirlo en blocker automatico

### Bloque D - Registro de decisiones, hallazgos o blockers

* [x] registrar si aparece drift entre docs o si la propagacion requiere una decision nueva

### Bloque E - Validacion

* [x] comparar que docs y skills usen el mismo rango y el mismo nivel de obligatoriedad

### Bloque F - Cierre

* [x] marcar la fase como `done` solo si la guia queda coherente y sin drift abierto

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
  * hallazgo: las cinco fuentes vivas aceptan la misma guia suave de `24–32` palabras sin requerir cambio de schema.
  * impacto: la Fase 2 puede ampliar la UI contra una politica editorial ya reconciliada.
  * accion: mantener `excerpt` como guia editorial no bloqueante y no abrir migracion masiva de contenido.

---

## 11. Blockers

* [ ] ninguno detectado

---

## 12. Decisiones tomadas

* Fecha: `2026-05-18`
  * decision: expresar la politica como rango recomendado de `24–32` palabras y conservarla fuera del schema.
  * razon: preserva la decision ya registrada de guia suave y encaja con la densidad de los excerpts publicados actuales.
  * documentos o areas afectadas: `docs/content/content-system.md`, `docs/content/content-master.md`, skills editoriales del blog.

---

## 13. Validaciones

### Documentales

* [x] verificar alineacion con contratos aplicables

### Tecnicas

* [x] no aplica en esta fase

### Manuales

* [x] lectura comparada de los cinco archivos editados

### Resultados

* Validacion:
  * comando o revision: lectura comparada de `content-system.md`, `content-master.md` y los tres skills editoriales
  * resultado esperado: mismo rango recomendado y misma naturaleza no bloqueante en todas las fuentes
  * resultado obtenido: todas las fuentes quedaron alineadas en `24–32` palabras como guia suave
  * estado: `pass`
  * notas: no se ejecutaron validaciones tecnicas porque la fase solo modifica contratos y skills.

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

* convertir una guia suave en una falsa regla dura por redaccion ambigua

### Pendientes

* ejecutar la Fase 2 una vez reconciliada la politica editorial
