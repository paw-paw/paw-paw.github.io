# Backlog Fase 1 - Sincronizacion contractual del blog index

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

* Change id: `blog-index-editorial-redesign`
* Patch kind: `spec`
* Lifecycle: `spec-first`
* Fase: `1 - Sincronizacion contractual del blog index`
* Estado: `done`
* Ultima actualizacion: `2026-05-18`
* Owner: `usuario`
* Depende de: `decision.log`
* Desbloquea: `Fase 2`, `Fase 3`, `Fase 4`

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

* Resultado esperado: contratos de contenido y SEO alineados con el nuevo `blog index`.
* Razon de la fase: el handoff objetivo contradice docs vigentes y no se debe implementar runtime contra una verdad obsoleta.
* Cambio que queda habilitado al cerrar: promocion de assets e implementacion visible sin drift documental.

---

## 3. Rama obligatoria por tipo

### Si `patch_kind = spec`

* fuente viva o alcance de spec que esta fase modifica:
  * `docs/content/content-system.md`
  * `docs/content/content-master.md`
  * `docs/delivery/seo-spec.md`
* reconciliacion esperada:
  * describir speech visible final de `/blog`;
  * permitir jerarquia resumida del index con `category` primaria;
  * fijar featured teaser con excerpt breve;
  * alinear metadata SEO con la narrativa final de la pagina.

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
* [x] contratos aplicables identificados

### Decisiones previas

* [x] el handoff se trata como cambio contractual intencional
* [x] el intro y el SEO deben reconciliarse con la narrativa contractual del blog

### Estado tecnico

* [x] no se requiere tocar runtime en esta fase

---

## 6. Alcance

### Si entra

* [x] ajustar speech de `/blog`
* [x] ajustar reglas resumidas del `blog index`
* [x] ajustar teaser `featured`
* [x] ajustar metadata SEO de `/blog`

### No entra

* [ ] editar paginas Astro
* [ ] mover assets
* [ ] redisenar detail pages o category pages

---

## 7. Archivos y superficies de trabajo

### Leer antes de editar

* `docs/strategy/portfolio-strategy.md`
* `docs/architecture/site-architecture.md`
* `docs/content/content-system.md`
* `docs/content/content-master.md`
* `docs/delivery/seo-spec.md`

### Editar

* `docs/content/content-system.md`
* `docs/content/content-master.md`
* `docs/delivery/seo-spec.md`

### Validar

* `docs/README.md`
* `docs/strategy/portfolio-strategy.md`
* `docs/architecture/site-architecture.md`

### No tocar

* `src/**`
* `_inbox/**`

---

## 8. Checklist de ejecucion

### Bloque A - Relectura de fuentes

* [x] releer la narrativa de `/blog` en `site-architecture`
* [x] releer la tesis del portfolio en `portfolio-strategy`
* [x] releer las reglas vigentes de `blog_post` e index en `content-system`
* [x] releer el copy maestro actual de `/blog`
* [x] releer la metadata SEO actual de `/blog`

### Bloque B - Inspeccion de estado actual

* [x] confirmar que `content-system` exige `Category -> Angle -> Domain` sin excepcion visible para index
* [x] confirmar que `content-master` describe un featured sin excerpt
* [x] confirmar que `content-master` no describe `Editorial Background`
* [x] confirmar que la metadata SEO actual aun usa el framing anterior

### Bloque C - Edicion por archivo

* [x] editar `content-system` para distinguir presentacion completa vs. resumida del `blog index`
* [x] editar `content-master` para fijar speech visible final, `Editorial Background`, `Latest Writing` y reglas del featured
* [x] editar `seo-spec` para que las descriptions de `/en/blog/` y `/es/blog/` sigan el mismo speech final

### Bloque D - Registro de decisiones, hallazgos o blockers

* [x] registrar hallazgo si la reconciliacion exige tocar otro contrato no previsto
* [x] registrar blocker si el speech final no puede resolverse sin decision humana

### Bloque E - Validacion

* [x] releer los tres documentos editados en conjunto
* [x] comprobar que no contradicen `site-architecture` ni `portfolio-strategy`

### Bloque F - Cierre

* [x] actualizar resultados de validacion
* [x] marcar la fase como `done` si no quedan blockers ni drift abierto

---

## 9. Drift detectado

* Fecha: `2026-05-18`
  * fuente esperada: `docs/content/content-system.md` y `docs/content/content-master.md`
  * diferencia encontrada: la docs vigente describia jerarquia completa obligatoria y featured sin excerpt, mientras el patch aprobado exige una presentacion resumida del index
  * impacto: bloqueaba implementar runtime sin drift contractual
  * accion: reconciliado dentro del alcance aprobado de la fase
  * requiere decision: `no`

---

## 10. Hallazgos durante ejecucion

* Fecha: `2026-05-18`
  * hallazgo: no fue necesario tocar `site-architecture`; su narrativa ya soportaba el nuevo speech al centrarse en criterio visible conectado a business development, partnerships y project delivery
  * impacto: el alcance documental pudo mantenerse acotado
  * accion: se mantuvo intacta la arquitectura y se ajustaron solo contratos derivados

---

## 11. Blockers

* [x] ninguno

---

## 12. Decisiones tomadas

* Fecha: `2026-05-18`
  * decision: usar el handoff como guia estructural, pero derivar el speech final visible desde la narrativa contractual viva del blog
  * razon: evitar que `/blog` hable con una voz distinta al resto del portfolio
  * documentos o areas afectadas: `docs/content/content-master.md`, `docs/delivery/seo-spec.md`

---

## 13. Validaciones

### Documentales

* [x] verificar alineacion con contratos aplicables

### Tecnicas

* [x] no aplica en esta fase

### Manuales

* [x] lectura cruzada de speech visible y SEO

### Resultados

* Validacion:
  * comando o revision: lectura cruzada de `content-system`, `content-master`, `seo-spec`, `site-architecture` y `portfolio-strategy`
  * resultado esperado: contratos coherentes y speech de `/blog` alineado
  * resultado obtenido: contratos reconciliados sin ampliar alcance fuera de `/blog`
  * estado: `pass`
  * notas: `site-architecture` no requirio cambios

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

* simplificar chips del index podria leerse por error como cambio al modelo editorial global

### Pendientes

* ninguno fuera de la ejecucion propia de la fase
