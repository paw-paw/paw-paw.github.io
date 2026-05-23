# Backlog Fase 2 - Promocion de assets editoriales aprobados

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

* Change id: `blog-index-editorial-redesign`
* Patch kind: `spec`
* Lifecycle: `spec-first`
* Fase: `2 - Promocion de assets editoriales aprobados`
* Estado: `done`
* Ultima actualizacion: `2026-05-18`
* Owner: `usuario`
* Depende de: `Fase 1`
* Desbloquea: `Fase 3`

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

* Resultado esperado: seis logos editoriales promovidos a runtime y documentados en `asset-plan`.
* Razon de la fase: los assets no pueden consumirse directamente desde `_inbox`.
* Cambio que queda habilitado al cerrar: implementacion real del bloque `Editorial Background`.

---

## 3. Rama obligatoria por tipo

### Si `patch_kind = spec`

* fuente viva o alcance de spec que esta fase modifica:
  * `docs/visual/asset-plan.md`
  * `src/assets/editorial-logos/`
* reconciliacion esperada:
  * registrar los logos aprobados y moverlos desde staging a runtime sin alterar su rol ni inventar un sistema visual nuevo.

### Si `patch_kind = batch`

* items cerrados cubiertos por esta fase: `no aplica`
* criterio global de cierre que esta fase acerca: `no aplica`
* criterio de cierre por item: `no aplica`
* split check: `no aplica`

---

## 4. Assumptions

* Los seis archivos `_all.png` aprobados por el usuario son los assets fuente autorizados para runtime.

---

## 5. Precondiciones

### Documentos

* [x] `Fase 1` cerrada
* [x] `decision.log` registra aprobacion de los logos para runtime

### Decisiones previas

* [x] no se usaran lockups textuales como cierre principal de esta entrega

### Estado tecnico

* [x] los seis archivos fuente existen en `_inbox/blog_improvements/`

---

## 6. Alcance

### Si entra

* [x] crear carpeta runtime para logos editoriales
* [x] copiar los seis assets aprobados
* [x] registrar origen, estado y uso previsto en `asset-plan`

### No entra

* [ ] editar componentes visibles
* [ ] redibujar logos
* [ ] inspeccion visual exhaustiva de cada asset

---

## 7. Archivos y superficies de trabajo

### Leer antes de editar

* `docs/visual/visual-system.md`
* `docs/visual/asset-plan.md`
* `_inbox/blog_improvements/*.png`

### Editar

* `docs/visual/asset-plan.md`
* `src/assets/editorial-logos/*.png`

### Validar

* presencia y nombres de archivos runtime
* lectura cruzada con `visual-system`

### No tocar

* `src/pages/**`
* `src/components/**`

---

## 8. Checklist de ejecucion

### Bloque A - Relectura de fuentes

* [x] releer reglas de assets en `visual-system`
* [x] releer estado actual de assets en `asset-plan`
* [x] confirmar archivos fuente disponibles en `_inbox/blog_improvements/`

### Bloque B - Inspeccion de estado actual

* [x] confirmar que no existe aun `src/assets/editorial-logos/`
* [x] confirmar que `asset-plan` no registra logos editoriales

### Bloque C - Edicion por archivo

* [x] crear `src/assets/editorial-logos/`
* [x] copiar los seis logos aprobados a runtime
* [x] editar `asset-plan` para registrar los logos, su origen y reglas de uso

### Bloque D - Registro de decisiones, hallazgos o blockers

* [x] registrar hallazgo si algun archivo fuente falta o no puede promoverse
* [x] registrar blocker si la promocion exige una decision visual nueva

### Bloque E - Validacion

* [x] listar assets promovidos en runtime
* [x] comprobar que `asset-plan` no contradice `visual-system`

### Bloque F - Cierre

* [x] actualizar resultados de validacion
* [x] marcar la fase como `done`

---

## 9. Drift detectado

* Fecha: `2026-05-18`
  * fuente esperada: `docs/visual/asset-plan.md`
  * diferencia encontrada: los logos editoriales aprobados aun no existian como assets gobernados del repo
  * impacto: el intro no podia implementarse sin consumir staging directamente
  * accion: se promovieron los seis logos a `src/assets/editorial-logos/` y se documentaron
  * requiere decision: `no`

---

## 10. Hallazgos durante ejecucion

* Fecha: `2026-05-18`
  * hallazgo: los seis assets fuente estaban disponibles y pudieron copiarse sin ampliar alcance
  * impacto: la fase no requirio decisiones visuales adicionales
  * accion: se difirio la comprobacion visual final al momento de renderizarlos en la pagina

---

## 11. Blockers

* [x] ninguno

---

## 12. Decisiones tomadas

* Fecha: `2026-05-18`
  * decision: usar una carpeta dedicada `src/assets/editorial-logos/`
  * razon: mantiene separados los logos editoriales del blog frente a logos de experiencia y branding
  * documentos o areas afectadas: `src/assets/editorial-logos/`, `docs/visual/asset-plan.md`

---

## 13. Validaciones

### Documentales

* [x] verificar alineacion con `visual-system`

### Tecnicas

* [x] confirmar existencia de seis assets runtime

### Manuales

* [x] revision visual diferida a fases visibles

### Resultados

* Validacion:
  * comando o revision: `find src/assets/editorial-logos -maxdepth 1 -type f | sort` + lectura cruzada de `asset-plan`
  * resultado esperado: seis assets runtime presentes y documentados sin contradecir `visual-system`
  * resultado obtenido: seis assets presentes y `asset-plan` actualizado
  * estado: `pass`
  * notas: revision visual final queda reservada para fases con render real

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

* la paridad visual final de logos solo se podra comprobar al renderizarlos en la superficie real

### Pendientes

* ninguno fuera de la ejecucion propia de la fase
