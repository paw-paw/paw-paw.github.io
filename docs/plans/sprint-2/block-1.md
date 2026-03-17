# Phase Plan

Usa este plan para ejecutar el Bloque 1 del roadmap de Sprint 2.

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

Antes de usarlo:

- confirma que `docs/plans/sprint-2/roadmap.md` sigue siendo el roadmap activo para esta etapa
- revisa `docs/README.md`
- toma `docs/plans/sprint-2/block-0.md` como insumo aprobado y cerrado
- ejecuta este bloque en modo altamente interactivo, con checkpoints de aprobacion explicitos antes de editar contratos

---

## Metadatos

- Fase: `Sprint 2 - Bloque 1 - Contractual Realignment`
- Estado: `done`
- Ultima actualizacion: `2026-03-16`
- Owner: `pawpaw + Codex`
- Depende de:
  - `docs/README.md`
  - `docs/plans/sprint-2/roadmap.md`
  - `docs/plans/sprint-2/block-0.md`
  - `docs/strategy/portfolio-strategy.md`
  - `docs/content/content-system.md`
- Desbloquea:
  - estrategia contractual alineada con la tesis aprobada en `Bloque 0`
  - sistema de contenido operativo alineado con la nueva estrategia
  - `Bloque 2` del roadmap de Sprint 2

---

## 1. Objetivo de la fase

Esta fase debe materializar en documentos contractuales el rebalanceo aprobado en `Bloque 0`. Al cerrarla, `portfolio-strategy` debe reflejar de forma clara el nuevo puente entre `business development`, `partnerships` y `project delivery`, y `content-system` debe traducir esa direccion a reglas operativas para las entidades clave del portfolio. Tambien debe quedar registrado el cambio en `decision-log` sin adelantar todavia la propagacion downstream del copy ni la arquitectura del blog.

---

## 2. Fuente de verdad aplicable

- `docs/README.md`
- roadmap activo o historico aplicable en `docs/plans/`:
  - `docs/plans/sprint-2/roadmap.md`
  - `docs/plans/sprint-2/block-0.md`
  - `docs/plans/phase-template.md`
- documentos contractuales aplicables:
  - `docs/strategy/portfolio-strategy.md`
  - `docs/content/content-system.md`
- documentos auxiliares aplicables:
  - `docs/governance/decision-log.md`
  - `docs/content/content-master.md`

Nota:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- este plan no puede contradecir documentos contractuales
- `portfolio-strategy` debe ajustarse primero y `content-system` debe responder a esa estrategia actualizada

---

## 3. Inputs requeridos

### Documentos

- [x] `docs/README.md`
- [x] `docs/plans/sprint-2/roadmap.md`
- [x] `docs/plans/sprint-2/block-0.md`
- [x] `docs/strategy/portfolio-strategy.md`
- [x] `docs/content/content-system.md`
- [x] `docs/governance/decision-log.md`

### Decisiones previas

- [x] la nueva tesis superior del portfolio aprobada en `Bloque 0`
- [x] la nueva lectura de los primeros 10 segundos aprobada en `Bloque 0`
- [x] la audiencia prioritaria del blog y del positioning aprobada en `Bloque 0`
- [x] `operations` debe permanecer explicita como capacidad de soporte y credibilidad operativa, no como eje principal
- [x] la CTA principal `View selected work` se mantiene en esta fase y su copy downstream se revisa recien en `Bloque 2`
- [x] este bloque actualiza primero `portfolio-strategy` y luego `content-system`
- [x] `decision-log` se actualiza con una sola entrada de cierre del bloque

### Estado tecnico

- [x] no se requiere tocar runtime en esta fase
- [x] no se actualizan todavia `content-master`, arquitectura, i18n o SEO salvo deteccion de contradiccion contractual que deba registrarse
- [x] cualquier impacto downstream detectado debe registrarse como input para `Bloque 2` o `Bloque 3`, no resolverse aqui por defecto

---

## 4. Entregables documentales

### Crear

- [x] `docs/plans/sprint-2/block-1.md`

### Actualizar

- [x] `docs/strategy/portfolio-strategy.md`
- [x] `docs/content/content-system.md`
- [x] `docs/governance/decision-log.md`

### No tocar

- [ ] `docs/content/content-master.md`
- [ ] `docs/architecture/site-architecture.md`
- [ ] `docs/architecture/i18n-spec.md`
- [ ] `docs/delivery/seo-spec.md`
- [ ] `docs/delivery/deployment.md`
- [ ] cualquier archivo de `src/`, `public/` o configuracion de runtime, salvo que se detecte una urgencia no prevista y se acuerde explicitamente

---

## 5. Alcance de implementacion

### Si entra

- [x] revision amplia pero contenida de `portfolio-strategy`
- [x] actualizacion de `content-system` en principios y entidades clave
- [x] preservacion explicita de `operations` como soporte y credibilidad operativa
- [x] mantenimiento de `View selected work` como CTA principal contractual en esta fase
- [x] registro del rebalanceo contractual en `decision-log`

### No entra

- [ ] propagacion de copy a `content-master`
- [ ] ajustes de hero, previews, CTA o metadata en runtime
- [ ] introduccion contractual de `blog_post`
- [ ] cambios de arquitectura, rutas, i18n o SEO del blog
- [ ] implementacion de componentes, paginas o navegacion

---

## 6. Tareas detalladas

### Bloque A - Relectura contractual orientada a cambio

- [x] releer `portfolio-strategy` para identificar todas las secciones afectadas por el nuevo rebalanceo
- [x] releer `content-system` para identificar principios y entidades ancladas todavia a `delivery / operations first`
- [x] separar que se puede resolver en estrategia, que se puede resolver en sistema y que debe esperar a `Bloque 2`

### Bloque B - Actualizacion interactiva de `portfolio-strategy`

- [x] revisar y proponer cambios en `Objetivo del sitio`
- [x] revisar y proponer cambios en `Audiencias`
- [x] revisar y proponer cambios en `Tesis central del portfolio`
- [x] revisar y proponer cambios en `Propuesta de valor central`
- [x] revisar y proponer cambios en `Lo que debe entenderse en los primeros 10 segundos`
- [x] revisar y proponer cambios en `Posicionamiento`
- [x] revisar y proponer cambios en `Mensajes por audiencia`
- [x] confirmar que `View selected work` sigue siendo la CTA principal contractual en este bloque

### Bloque C - Actualizacion interactiva de `content-system`

- [x] actualizar `Principios del sistema` para reflejar la nueva tesis
- [x] ajustar reglas de `hero` para soportar el nuevo puente entre oportunidad comercial y ejecucion
- [x] ajustar reglas de `selected_work_preview` y `selected_work_case_study`
- [x] ajustar reglas de `experience_preview` y `experience_item`
- [x] conservar restricciones de tono, claims defendibles y evidencia real
- [x] dejar explicitamente fuera la entidad `blog_post` hasta `Bloque 3`

### Bloque D - Control de precedencia y consistencia

- [x] validar que `content-system` ya responda a la estrategia actualizada y no la contradiga
- [x] detectar cualquier tension nueva con `site-architecture`, `i18n-spec` o `seo-spec`
- [x] registrar esas tensiones como pendientes para bloques posteriores sin resolverlas aqui por defecto

### Bloque E - Cierre documental

- [x] redactar una sola entrada de cierre para `decision-log`
- [x] dejar explicitados los cambios que se propagan en `Bloque 2`
- [x] dejar explicitado lo que se difiere a `Bloque 3`

### Bloque F - Modo de trabajo interactivo

- [x] trabajar primero `portfolio-strategy` y luego `content-system`
- [x] presentar recomendaciones y hasta dos alternativas cuando aparezca ambiguedad relevante
- [x] pedir aprobacion explicita antes de editar secciones con mas de una interpretacion razonable
- [x] no adelantar decisiones de CTA downstream, arquitectura o blog runtime
- [x] si aparece una nueva ambiguedad, detenerse y resolverla antes de seguir

Recomendacion:

- usar el orden `strategy -> content-system -> decision-log`
- editar por secciones pequenas y verificables, no por documento completo en una sola pasada

---

## 7. Archivos probables a tocar

### Docs

- `docs/plans/sprint-2/block-1.md`
- `docs/strategy/portfolio-strategy.md`
- `docs/content/content-system.md`
- `docs/governance/decision-log.md`

### Codigo

- no se esperan cambios de codigo en esta fase

---

## 8. Dependencias y bloqueos

### Dependencias

- [x] cierre aprobado de `Bloque 0`
- [x] acuerdo en que `portfolio-strategy` se actualiza antes que `content-system`
- [x] acuerdo en mantener `operations` como soporte explicito
- [x] acuerdo en mantener `View selected work` como CTA contractual por ahora
- [x] acuerdo en dejar `content-master` y `blog_post` para bloques posteriores

### Bloqueos posibles

- [ ] que la actualizacion de `portfolio-strategy` se vuelva tan amplia que deje de ser una revision contenida
- [ ] que `content-system` siga demasiado anclado a la tesis anterior aun despues de ajustar principios
- [ ] que aparezca una tension fuerte con arquitectura o i18n antes de tiempo
- [ ] que el nuevo peso de `partnerships / business development` empuje el portfolio demasiado hacia un perfil comercial puro

### Mitigacion

- respetar precedencia documental y actualizar primero estrategia
- limitar este bloque a contratos de estrategia y sistema
- preservar explicitamente tono, claims defendibles y evidencia real
- documentar cualquier tension nueva para `Bloque 2` o `Bloque 3` en vez de resolverla fuera de scope

---

## 9. Validaciones

### Documentales

- [x] verificar alineacion con `docs/README.md`
- [x] verificar alineacion con `docs/plans/sprint-2/roadmap.md`
- [x] verificar alineacion entre `portfolio-strategy` y `content-system`
- [x] verificar que no se introdujeron decisiones de arquitectura, i18n, SEO o runtime fuera de contrato

### Tecnicas

- [x] confirmar que no hubo cambios de runtime en esta fase

### Manuales

- [x] revision conjunta de la nueva estrategia contractual
- [x] revision conjunta del sistema de contenido actualizado
- [x] revision conjunta de pendientes para `Bloque 2` y `Bloque 3`

---

## 10. Criterio de cierre

La fase solo se considera cerrada si:

- [x] `portfolio-strategy` ya refleja la nueva tesis aprobada en `Bloque 0`
- [x] `content-system` ya traduce esa tesis a reglas operativas compatibles
- [x] `operations` queda explicitamente ubicado como soporte y credibilidad operativa
- [x] `View selected work` sigue contractual y no queda ambiguo en esta fase
- [x] existe una entrada de cierre en `decision-log`
- [x] quedan listos los insumos para ejecutar `Bloque 2`

---

## 11. Riesgos y notas

### Riesgos

- riesgo de sobrerreaccionar y reescribir mas estrategia de la necesaria
- riesgo de que `content-system` quede a medio camino entre la tesis vieja y la nueva
- riesgo de abrir decisiones de `blog_post`, arquitectura o CTA downstream antes de tiempo

### Notas operativas

- este bloque debe correr como una conversacion de trabajo con checkpoints frecuentes
- cuando una seccion admita mas de una lectura razonable, no se edita hasta cerrar la decision contigo
- el objetivo es actualizar contratos, no reescribir todavia copy final de paginas
- si aparece una contradiccion fuerte con otro contrato, se documenta y se pasa al bloque correspondiente

---

## 12. Registro de cambios del plan

- Fecha: `2026-03-16`
  - cambio: se crea el plan detallado para ejecutar el Bloque 1 del roadmap de Sprint 2
  - razon: ordenar la materializacion contractual del rebalanceo aprobado en `Bloque 0` antes de bajar el cambio a contenido y runtime
