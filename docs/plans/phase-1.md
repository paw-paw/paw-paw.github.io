# Plan de Fase 1

Este documento detalla la ejecucion de la `Fase 1 — Estrategia del portfolio`.

Es un documento auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

Referencias base:

- `docs/README.md`
- `docs/plans/roadmap.md`
- `docs/plans/phase-template.md`
- `docs/content/source-data-map.md`
- `docs/governance/decision-log.md`

---

## Metadatos

- Fase: `1`
- Estado: `done`
- Ultima actualizacion: `2026-03-11`
- Owner: `Codex + usuario`
- Depende de:
  - `Fase 0B`
- Desbloquea:
  - `Fase 2`
  - primera version de `docs/strategy/portfolio-strategy.md`
  - actualizacion estrategica de `docs/content/source-data-map.md`

---

## 1. Objetivo de la fase

Definir la tesis estrategica del portfolio antes de entrar a arquitectura, sistema de contenido o copy final.

Al cerrar esta fase debe quedar resuelto:

- para que existe el sitio y que oportunidad principal persigue
- a quien le habla primero y a quien debe seguir resultando comprensible
- cual es la narrativa profesional central del perfil
- como debe usarse `temp/truth/` como apoyo sin convertirlo en la voz ni en la estructura del portfolio

Esta fase existe para evitar que `Fase 2`, `Fase 3` y `Fase 4` construyan sobre una mezcla ambigua de CV, archivo personal y template reciclado.

---

## 2. Fuente de verdad aplicable

- `docs/README.md`
- `docs/plans/roadmap.md`
- documentos contractuales aplicables:
  - `docs/strategy/portfolio-strategy.md` cuando se cree en esta fase
- documentos auxiliares aplicables:
  - `docs/content/source-data-map.md`
  - `docs/governance/decision-log.md`
  - `docs/delivery/deployment.md` como restriccion tecnica ya definida

Notas:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- este plan no puede contradecir documentos contractuales
- `temp/truth/` se usa aqui como fuente a inspeccionar, no como fuente contractual ni como input directo de implementacion
- Fase 1 define estrategia y criterios de inclusion/exclusion, no la arquitectura detallada del sitio ni el contenido final por seccion

---

## 3. Inputs requeridos

### Documentos

- [x] `docs/README.md`
- [x] `docs/plans/roadmap.md`
- [x] `docs/plans/phase-template.md`
- [x] `docs/content/source-data-map.md`
- [x] `docs/governance/decision-log.md`
- [x] `docs/delivery/deployment.md`

### Decisiones previas

- [x] el portfolio sera hibrido, orientado a oportunidades profesionales de alto valor, con sesgo principal a empleo remoto y roles de operations / program-project / partnerships en gaming, esports y sectores adyacentes
- [x] la audiencia primaria sera hiring managers, founders y lideres de operaciones o partnerships en gaming, esports y sectores adyacentes
- [x] la audiencia secundaria seguira incluyendo recruiters generalistas y managers de tech o no especializados
- [x] la narrativa principal sera operador de delivery / project-program management en gaming y esports, con puente claro hacia partnerships y business development
- [x] en los primeros 10 segundos debe quedar claro que conviertes objetivos ambiguos en programas ejecutables y confiables en gaming, esports y proyectos remotos, con coordinacion cross-functional y delivery solido
- [x] `temp/truth/` se usara para validar estrategia, definir exclusiones y detectar evidencia util, sin seleccionar todavia items finales por seccion
- [x] la publicabilidad se definira en esta fase por tipo de dato, no por cada campo final
- [x] el portfolio exigira fidelidad alta en hechos, con curacion fuerte en seleccion y framing
- [x] `portfolio-strategy.md` debe quedar como documento contractual completo con mensajes por audiencia y criterios de descarte narrativo
- [x] `source-data-map.md` debe cerrar categorias que entran, categorias que no entran y reglas de uso, dejando el mapping por seccion para `Fase 2`
- [x] el modo de trabajo sera interactivo, con checkpoints por decision estrategica

### Estado tecnico

- [x] `Fase 0B` cerrada
- [x] base del sitio neutralizada y monoidioma
- [x] `temp/truth/` disponible para inspeccion
- [x] el repo no depende todavia de una capa normalizada de datos

---

## 4. Entregables documentales

### Crear

- [x] `docs/strategy/portfolio-strategy.md`
- [x] `docs/plans/phase-1.md`

### Actualizar

- [x] `docs/content/source-data-map.md`
- [x] `docs/governance/decision-log.md`

### No tocar

- [ ] `docs/architecture/site-architecture.md`
- [ ] `docs/content/content-system.md`
- [ ] `docs/content/content-master.md`
- [ ] `docs/visual/visual-system.md`
- [ ] implementacion del sitio salvo cambios minimos estrictamente documentales si hicieran falta

---

## 5. Alcance de implementacion

### Si entra

- [x] definir objetivo, audiencia, posicionamiento y CTA principal del portfolio
- [x] definir tono profesional y atributos de marca iniciales
- [x] definir que no debe comunicar el sitio
- [x] definir mensajes base para audiencia primaria y secundaria
- [x] inspeccionar `temp/truth/` para identificar categorias utiles, categorias excluidas y limites de publicabilidad por tipo de dato
- [x] actualizar `source-data-map.md` con el rol estrategico de la fuente externa y reglas de seleccion
- [x] registrar decisiones y criterios de descarte en `decision-log.md`

### No entra

- [ ] definir orden de secciones, paginas, navegacion o anchors
- [ ] decidir aun el mapping exacto de categorias a hero/about/experience/projects
- [ ] escribir copy final aprobado por seccion
- [ ] transformar `temp/truth/` a capa normalizada del repo
- [ ] conectar `temp/truth/` o cualquier salida derivada a `src/`
- [ ] tocar sistema visual, interaccion, i18n o SEO final

---

## 6. Tareas detalladas

### Bloque A — Alineacion estrategica base

- [x] redactar la tesis central del portfolio
- [x] fijar objetivo principal del sitio y objetivos secundarios aceptables
- [x] fijar audiencia primaria y audiencia secundaria
- [x] definir la promesa de valor central en lenguaje no generico
- [x] fijar CTA principal y CTA secundaria a nivel estrategico
- [x] definir 3 a 5 atributos de marca
- [x] definir que no debe comunicar el sitio

### Bloque B — Narrativa profesional y framing

- [x] fijar narrativa principal del perfil
- [x] definir el puente permitido hacia partnerships y business development
- [x] redactar la idea que debe entenderse en los primeros 10 segundos
- [x] definir mensajes base para audiencia primaria
- [x] definir traduccion narrativa minima para audiencia secundaria no especializada
- [x] registrar criterios de descarte de narrativas alternativas que no seran la principal

### Bloque C — Inspeccion estrategica de `temp/truth/`

- [x] revisar `temp/truth/summary.md`
- [x] revisar `temp/truth/personal.yaml`
- [x] revisar `temp/truth/_schema.md` solo en la medida necesaria para entender la fuente
- [x] revisar categorias disponibles en `education/`, `experience/`, `projects/` y `skills/`
- [x] identificar que categorias aportan valor directo al portfolio
- [x] identificar que categorias deben quedar fuera aunque sean verdaderas
- [x] definir politica de publicabilidad por tipo de dato
- [x] definir que cuenta como evidencia de credibilidad vs archivo personal

### Bloque D — Persistencia documental

- [x] crear `docs/strategy/portfolio-strategy.md`
- [x] actualizar `docs/content/source-data-map.md`
- [x] registrar decisiones cerradas y rationale en `docs/governance/decision-log.md`
- [x] dejar explicitamente abiertas para `Fase 2` las decisiones de arquitectura y mapping por seccion

### Bloque E — Checkpoints interactivos

- [x] Checkpoint 1: confirmar objetivo del sitio, audiencias y sesgo de oportunidad principal
- [x] Checkpoint 2: confirmar narrativa principal, promesa central y mensaje de primeros 10 segundos
- [x] Checkpoint 3: confirmar que partes de `temp/truth/` entran, cuales quedan fuera y politica de publicabilidad por tipo de dato
- [x] Checkpoint 4: confirmar cierre de `portfolio-strategy.md` y actualizacion suficiente de `source-data-map.md` para desbloquear `Fase 2`

Recomendacion operativa:

- resolver primero tesis, audiencia y narrativa antes de profundizar en `truth`
- usar `truth` para probar o tensionar la estrategia, no para sustituirla
- registrar criterios de inclusion y exclusion en cuanto se acuerden
- detenerse cuando aparezca una nueva ambiguedad que afecte arquitectura, contenido final o publicabilidad sensible

---

## 7. Archivos probables a tocar

### Docs

- `docs/strategy/portfolio-strategy.md`
- `docs/content/source-data-map.md`
- `docs/governance/decision-log.md`
- `docs/plans/phase-1.md`

### Fuentes a inspeccionar

- `temp/truth/_schema.md`
- `temp/truth/summary.md`
- `temp/truth/personal.yaml`
- `temp/truth/education/**`
- `temp/truth/experience/**`
- `temp/truth/projects/**`
- `temp/truth/skills/**`

---

## 8. Dependencias y bloqueos

### Dependencias

- [x] `Fase 0B` cerrada
- [x] existencia de `temp/truth/` como fuente upstream cruda
- [x] sistema documental actualizado para tratar fuentes externas
- [x] base tecnica ya neutralizada y sin contradicciones criticas del template

### Bloqueos posibles

- [ ] la narrativa principal entra en conflicto con demasiado material relevante de `truth`
- [ ] la audiencia primaria y secundaria exigen niveles de traduccion narrativa muy distintos
- [ ] aparecen datos verdaderos pero no claramente publicables
- [ ] el schema original de `truth` induce a pensar en estructura de CV en lugar de portfolio
- [ ] surge presion por adelantar decisiones que pertenecen a `Fase 2`

### Mitigacion

- priorizar siempre el objetivo del portfolio sobre la exhaustividad del archivo personal
- separar hecho verdadero de hecho publicable
- distinguir entre categoria relevante y item seleccionado
- dejar el mapping fino por seccion y la capa normalizada para `Fase 2`
- registrar explicitamente en `decision-log.md` toda exclusion importante o limite de publicabilidad

---

## 9. Validaciones

### Documentales

- [x] verificar alineacion con `docs/README.md`
- [x] verificar alineacion con `docs/plans/roadmap.md`
- [x] verificar que `portfolio-strategy.md` cubre el contenido minimo contractual definido en `README.md`
- [x] verificar que `source-data-map.md` no invade arquitectura detallada ni sistema de contenido
- [x] verificar que no se introdujeron decisiones de implementacion fuera de contrato

### Tecnicas

- [x] confirmar que no se toco `src/` ni configuracion del sitio salvo necesidad excepcional documentada
- [x] confirmar que `temp/truth/` sigue siendo fuente de inspeccion y no de runtime

### Manuales

- [x] revisar que la tesis del portfolio se entiende sin depender del template ni del CV
- [x] revisar que la audiencia primaria queda priorizada sin volver opaco el sitio para la audiencia secundaria
- [x] revisar que las exclusiones de `truth` son defensables frente al objetivo del portfolio

---

## 10. Criterio de cierre

La fase solo se considera cerrada si:

- [x] existe una tesis clara y una version canonica del positioning del portfolio
- [x] existe una audiencia primaria priorizada y una audiencia secundaria explicitamente reconocida
- [x] `docs/strategy/portfolio-strategy.md` queda creado y cubre el minimo contractual mas mensajes por audiencia y criterios de descarte narrativo
- [x] `docs/content/source-data-map.md` deja claro el rol de `temp/truth/`, que categorias entran, cuales no y que reglas de uso aplican
- [x] ya esta definida la politica de publicabilidad por tipo de dato
- [x] quedan explicitamente pospuestas a `Fase 2` la arquitectura detallada y el mapping por seccion

---

## 11. Riesgos y notas

### Riesgos

- Fase 1 puede derivar demasiado rapido a arquitectura si se empieza a mapear contenido por seccion antes de cerrar la tesis
- la amplitud del perfil puede empujar a un posicionamiento demasiado hibrido o poco memorable
- `truth` puede arrastrar lenguaje de CV o archivo historico que no conviene trasladar al portfolio
- decisiones de publicabilidad pueden tensionar la utilidad narrativa de algunos datos

### Notas operativas

- usar `summary.md` como insumo narrativo, no como copy aprobado
- usar `personal.yaml` para pensar visibilidad, no para asumir publicacion literal
- tratar `skills/`, `experience/` y `projects/` como bancos de evidencia y no como estructura del sitio
- si aparece una duda sobre secciones concretas, dejarla capturada para `Fase 2`

---

## 12. Registro de cambios del plan

- Fecha: `2026-03-11`
  - cambio: creacion inicial del plan de `Fase 1`
  - razon: preparar ejecucion estrategica del portfolio despues de cerrar `0A` y `0B`, incorporando `temp/truth/` como fuente auxiliar a inspeccionar
- Fecha: `2026-03-11`
  - cambio: ejecucion y cierre de `Fase 1`
  - razon: documentar la tesis estrategica del portfolio, cerrar el rol de `temp/truth/` y desbloquear `Fase 2`
