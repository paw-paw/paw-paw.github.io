# Plan de Fase 2

Este documento detalla la ejecucion de la `Fase 2 — Arquitectura de informacion y secciones`.

Es un documento auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

Referencias base:

- `docs/README.md`
- `docs/plans/sprint-1/roadmap.md`
- `docs/plans/phase-template.md`
- `docs/strategy/portfolio-strategy.md`
- `docs/content/source-data-map.md`
- `docs/governance/decision-log.md`

---

## Metadatos

- Fase: `2`
- Estado: `done`
- Ultima actualizacion: `2026-03-12`
- Owner: `Codex + usuario`
- Depende de:
  - `Fase 1`
- Desbloquea:
  - `Fase 3`
  - primera version de `docs/architecture/site-architecture.md`
  - primera version de `docs/content/content-system.md`
  - actualizacion estructural de `docs/content/source-data-map.md`

---

## 1. Objetivo de la fase

Definir la arquitectura del sitio y el sistema base de entidades de contenido antes de entrar a visual, copy final o implementacion de datos.

Al cerrar esta fase debe quedar resuelto:

- que estructura de paginas y secciones tendra el sitio
- que piezas del template sobreviven, se renombran o desaparecen
- como se mapea `temp/truth/` a entidades internas del portfolio
- que debe existir como dato estructurado, que sera copy compuesto y que se descarta

Esta fase existe para evitar que `Fase 3` y `Fase 4` rediseñen o escriban sobre una arquitectura ambigua.

---

## 2. Fuente de verdad aplicable

- `docs/README.md`
- `docs/plans/sprint-1/roadmap.md`
- documentos contractuales aplicables:
  - `docs/strategy/portfolio-strategy.md`
  - `docs/architecture/site-architecture.md` cuando se cree en esta fase
  - `docs/content/content-system.md` cuando se cree en esta fase
- documentos auxiliares aplicables:
  - `docs/content/source-data-map.md`
  - `docs/governance/decision-log.md`
  - `docs/delivery/deployment.md` como restriccion tecnica ya definida
  - `docs/plans/sprint-1/phase-1.md`

Notas:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- este plan no puede contradecir documentos contractuales
- Fase 2 define arquitectura y entidades, no copy final aprobado ni sistema visual final
- `temp/truth/` sigue siendo una fuente a inspeccionar y mapear, no una fuente de runtime

---

## 3. Inputs requeridos

### Documentos

- [x] `docs/README.md`
- [x] `docs/plans/sprint-1/roadmap.md`
- [x] `docs/plans/phase-template.md`
- [x] `docs/plans/sprint-1/phase-1.md`
- [x] `docs/strategy/portfolio-strategy.md`
- [x] `docs/content/source-data-map.md`
- [x] `docs/governance/decision-log.md`
- [x] `docs/delivery/deployment.md`

### Decisiones previas

- [x] la tesis del portfolio es `delivery / operations first`, con puente controlado hacia partnerships y business development
- [x] la audiencia primaria son hiring managers, founders y leaders de operations o partnerships en gaming, esports y sectores adyacentes
- [x] la CTA principal es `View selected work`
- [x] `experience/` y `projects/` entran como pilares equivalentes de evidencia
- [x] `education/` entra como soporte de credibilidad y no como eje narrativo
- [x] el sitio tendra arquitectura multi-page amplia desde esta fase
- [x] `Projects` se reintroduce conceptualmente como `Selected Work / Case Studies`, no como la seccion heredada del template
- [x] `Values` se convertira en `How I Work` o `Approach`
- [x] `Timeline` se convertira en `Experience`
- [x] `Contact` y `FooterCTA` se mantienen, con roles distintos
- [x] la futura capa normalizada propia del repo vivira en `src/data/`, pero no se implementa todavia
- [x] el modo de trabajo sera interactivo, con checkpoints por decision arquitectonica
- [x] la politica publica de contacto se alinea a `email + LinkedIn + Instagram`, sin telefono visible

### Estado tecnico

- [x] `Fase 1` cerrada
- [x] la home actual sigue siendo una one-page basada en secciones del template
- [x] `Projects` sigue apagada en `src/pages/index.astro`
- [x] no existe todavia `src/data/` como capa normalizada activa

---

## 4. Entregables documentales

### Crear

- [x] `docs/architecture/site-architecture.md`
- [x] `docs/content/content-system.md`
- [x] `docs/plans/sprint-1/phase-2.md`

### Actualizar

- [x] `docs/content/source-data-map.md`
- [x] `docs/governance/decision-log.md`

### No tocar

- [ ] `docs/content/content-master.md`
- [ ] `docs/visual/visual-system.md`
- [ ] `docs/visual/asset-plan.md`
- [ ] `docs/architecture/i18n-spec.md`
- [ ] copy final aprobado por seccion

---

## 5. Alcance de implementacion

### Si entra

- [x] definir la arquitectura multi-page del sitio
- [x] definir el mapa de paginas principales y secundarias
- [x] definir que secciones vive en home y cuales viven en paginas internas
- [x] decidir anchors del navbar y rutas principales
- [x] definir entidades internas del portfolio y su proposito
- [x] definir la estructura minima de `Selected Work / Case Studies`
- [x] mapear categorias y campos de `temp/truth/` a entidades del portfolio
- [x] decidir que vivira como dato estructurado futuro en `src/data/`
- [x] ajustar composicion de `src/pages/index.astro` y navegacion si la arquitectura acordada ya lo exige
- [x] alinear la politica de contacto visible con la superficie publica acordada

### No entra

- [ ] escribir copy final aprobado por seccion
- [ ] implementar la capa normalizada en `src/data/`
- [ ] migrar datos reales a JSON o TS
- [ ] rehacer sistema visual o branding final
- [ ] definir SEO final por pagina
- [ ] implementar i18n o localizacion

---

## 6. Tareas detalladas

### Bloque A — Arquitectura del sitio

- [x] definir si la home sera overview, landing de conversion o mezcla de ambos
- [x] definir paginas principales del sitio
- [x] definir si existiran paginas secundarias o utilitarias desde esta fase
- [x] fijar el orden final de la home
- [x] fijar las rutas principales y su funcion
- [x] definir anchors del navbar y labels de navegacion

### Bloque B — Supervivencia y renombre de secciones

- [x] decidir el rol final de `Hero`
- [x] convertir `Values` en `How I Work` o `Approach`
- [x] decidir el rol final de `Skills`
- [x] convertir `Timeline` en `Experience`
- [x] definir `Selected Work / Case Studies` como sustituto conceptual de `Projects`
- [x] decidir si `Contact` y `FooterCTA` se mantienen en home o se redistribuyen
- [x] documentar que piezas del template se eliminan, renombran o sobreviven

### Bloque C — Sistema de contenido y entidades

- [x] crear `docs/content/content-system.md`
- [x] definir entidades internas del portfolio
- [x] definir el proposito de cada entidad
- [x] definir reglas de copy por entidad
- [x] definir claims permitidos y no permitidos
- [x] definir consistencia entre hero, navegacion, CTA, footer y metadata
- [x] definir la estructura contractual minima de `Selected Work / Case Studies`
- [x] definir que contenido sera dato estructurado futuro y que contenido sera copy compuesto

### Bloque D — Mapping estructural de `truth`

- [x] actualizar `docs/content/source-data-map.md`
- [x] mapear `summary.md` a entidades estrategicas pertinentes
- [x] mapear `personal.yaml` a identidad, contacto e idiomas
- [x] mapear `experience/` a `Experience` y otras entidades si aplica
- [x] mapear `projects/` a `Selected Work / Case Studies`
- [x] mapear `skills/` a clusters de capacidades o proof points
- [x] mapear `education/` a soporte de credibilidad
- [x] definir que campos se descartan
- [x] definir que informacion debera vivir luego en `src/data/`
- [x] actualizar politica de contacto publica dentro del mapping

### Bloque E — Persistencia documental y ajuste tecnico minimo

- [x] crear `docs/architecture/site-architecture.md`
- [x] registrar decisiones cerradas en `docs/governance/decision-log.md`
- [x] actualizar `src/pages/index.astro` si hace falta para reflejar la nueva composicion acordada
- [x] actualizar `src/components/layout/Navbar.astro` si hace falta para reflejar nuevos anchors o labels
- [x] actualizar `src/components/sections/Contact.astro` para reflejar la politica publica de contacto
- [x] dejar explicitamente pospuesto para `Fase 3` lo visual y para `Fase 4` el copy final

### Bloque F — Checkpoints interactivos

- [x] Checkpoint 1: confirmar arquitectura general del sitio, paginas principales y rol de la home
- [x] Checkpoint 2: confirmar renombre/supervivencia de `Values`, `Timeline`, `Projects`, `Contact` y `FooterCTA`
- [x] Checkpoint 3: confirmar entidades internas del portfolio y estructura minima de `Selected Work / Case Studies`
- [x] Checkpoint 4: confirmar mapping `truth -> entidades`, descarte de campos y definicion documental de `src/data/`
- [x] Checkpoint 5: confirmar politica publica de contacto y cierre de CTA secundaria

Recomendacion operativa:

- resolver primero la arquitectura general y la supervivencia de secciones antes de mapear campos finos de `truth`
- mantener separadas las decisiones de estructura de las decisiones de copy final
- usar `src/data/` solo como destino documental acordado, no como trabajo de implementacion en esta fase
- detenerse cuando una decision empiece a invadir visual, SEO, i18n o copy aprobado

---

## 7. Archivos probables a tocar

### Docs

- `docs/architecture/site-architecture.md`
- `docs/content/content-system.md`
- `docs/content/source-data-map.md`
- `docs/governance/decision-log.md`
- `docs/plans/sprint-1/phase-2.md`

### Fuentes a inspeccionar

- `temp/truth/summary.md`
- `temp/truth/personal.yaml`
- `temp/truth/education/**`
- `temp/truth/experience/**`
- `temp/truth/projects/**`
- `temp/truth/skills/**`

### Codigo y estructura

- `src/pages/index.astro`
- `src/components/layout/Navbar.astro`
- `src/components/sections/Hero.astro`
- `src/components/sections/Values.astro`
- `src/components/sections/Skills.astro`
- `src/components/sections/Projects.astro`
- `src/components/sections/Timeline.astro`
- `src/components/sections/Contact.astro`
- `src/components/sections/FooterCTA.astro`

---

## 8. Dependencias y bloqueos

### Dependencias

- [x] `Fase 1` cerrada
- [x] tesis estrategica y criterios de inclusion ya definidos
- [x] `temp/truth/` ya clasificado a nivel estrategico
- [x] base tecnica ya neutralizada y monoidioma

### Bloqueos posibles

- [ ] la arquitectura multi-page amplia abre demasiada superficie para una sola fase
- [ ] la CTA principal `View selected work` presiona por definir antes de tiempo demasiados detalles de `Case Studies`
- [ ] el template actual empuja anchors y componentes pensados para una one-page
- [ ] surgen dudas sobre que informacion debe vivir en home vs paginas internas
- [ ] la frontera entre dato estructurado y copy compuesto no queda nitida

### Mitigacion

- priorizar el mapa de paginas y entidades antes de tocar implementacion
- definir estructura minima de `Selected Work / Case Studies` sin escribir todavia el contenido final
- usar la home como overview y las paginas internas como superficie de profundidad, si eso reduce conflicto
- dejar en `content-system.md` reglas claras sobre dato estructurado vs copy compuesto
- registrar en `decision-log.md` toda simplificacion o posposicion que proteja el alcance

---

## 9. Validaciones

### Documentales

- [x] verificar alineacion con `docs/README.md`
- [x] verificar alineacion con `docs/plans/sprint-1/roadmap.md`
- [x] verificar que `site-architecture.md` cubre el contenido minimo contractual definido en `README.md`
- [x] verificar que `content-system.md` cubre el contenido minimo contractual definido en `README.md`
- [x] verificar que `source-data-map.md` ya define el mapping estructural sin invadir copy final
- [x] verificar que no se introdujeron decisiones visuales o editoriales fuera de alcance

### Tecnicas

- [x] confirmar que cualquier cambio en `src/pages/index.astro` o navbar responde solo a arquitectura acordada
- [x] confirmar que no se implemento todavia la capa `src/data/`
- [x] confirmar que `temp/truth/` sigue fuera del runtime
- [x] ejecutar `npm run build`

### Manuales

- [x] revisar que la arquitectura elegida refuerza la tesis de delivery / operations first
- [x] revisar que `projects` y `experience` conviven sin competir por la tesis principal
- [x] revisar que la home y las paginas internas tienen roles distintos y comprensibles

---

## 10. Criterio de cierre

La fase solo se considera cerrada si:

- [x] existe un mapa claro del sitio con paginas, home y navegacion definidas
- [x] ya esta claro que secciones sobreviven, se renombran o se eliminan
- [x] `docs/architecture/site-architecture.md` queda creado con rutas, anchors y proposito de cada seccion
- [x] `docs/content/content-system.md` queda creado con entidades, reglas de copy y estructura minima de `Selected Work / Case Studies`
- [x] `docs/content/source-data-map.md` deja claro el mapping `truth -> entidades del portfolio`
- [x] ya esta definido documentalmente que la futura capa normalizada vivira en `src/data/`

---

## 11. Riesgos y notas

### Riesgos

- la arquitectura multi-page puede inflar la fase si se intenta definir demasiado detalle de cada pagina
- `Selected Work / Case Studies` puede absorber demasiado trabajo de contenido si no se controla su alcance
- el template actual puede sesgar la arquitectura hacia una one-page mas de lo deseado
- una separacion debil entre dato estructurado y copy compuesto puede complicar `Fase 4`

### Notas operativas

- `Hero`, `How I Work`, `Experience` y `Selected Work / Case Studies` deben responder a una tesis comun y no a secciones aisladas
- la home no necesita contener todo si las paginas internas cumplen mejor la funcion de profundidad
- `Contact` y `FooterCTA` pueden convivir siempre que no compitan por el mismo trabajo exacto
- si aparece una duda de tono, guardar la decision para `Fase 3` o `Fase 4` segun corresponda

---

## 12. Registro de cambios del plan

- Fecha: `2026-03-12`
  - cambio: creacion inicial del plan de `Fase 2`
  - razon: preparar la fase de arquitectura y sistema de contenido despues de cerrar `Fase 1`, incorporando una arquitectura multi-page amplia y el mapping estructural de `truth`
- Fecha: `2026-03-12`
  - cambio: ejecucion y cierre de `Fase 2`
  - razon: definir la arquitectura multipagina, crear los contratos de arquitectura y sistema de contenido, y dejar una alineacion estructural minima entre docs e implementacion
