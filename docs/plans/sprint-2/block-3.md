# Phase Plan

Usa este plan para ejecutar el Bloque 3 del roadmap de Sprint 2.

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

Antes de usarlo:

- confirma que `docs/plans/sprint-2/roadmap.md` sigue siendo el roadmap activo para esta etapa
- revisa `docs/README.md`
- toma `docs/plans/sprint-2/block-0.md`, `docs/plans/sprint-2/block-1.md` y `docs/plans/sprint-2/block-2.md` como insumos aprobados y cerrados
- ejecuta este bloque en modo altamente interactivo, con checkpoints de aprobacion explicitos antes de editar contratos de arquitectura o sistema editorial

---

## Metadatos

- Fase: `Sprint 2 - Bloque 3 - Blog Architecture and Editorial System`
- Estado: `done`
- Ultima actualizacion: `2026-03-16`
- Owner: `pawpaw + Codex`
- Depende de:
  - `docs/README.md`
  - `docs/plans/sprint-2/roadmap.md`
  - `docs/plans/sprint-2/block-0.md`
  - `docs/plans/sprint-2/block-1.md`
  - `docs/plans/sprint-2/block-2.md`
  - `docs/architecture/site-architecture.md`
  - `docs/content/content-system.md`
  - `docs/architecture/i18n-spec.md`
  - `docs/delivery/seo-spec.md`
- Desbloquea:
  - arquitectura contractual del blog alineada con la nueva tesis del portfolio
  - entidad editorial `blog_post` aprobada en el sistema de contenido
  - decision de rutas y comportamiento de locales para el blog
  - backlog inicial de temas para implementacion y publicacion controlada

---

## 1. Objetivo de la fase

Esta fase debe incorporar el blog a la arquitectura contractual del sitio y definir su sistema editorial minimo sin tocar todavia runtime ni implementacion Astro. Al cerrarla, el portfolio debe reconocer `Blog` como una superficie principal coherente con la narrativa ya realineada, `content-system` debe definir la entidad `blog_post` con metadata obligatoria y taxonomia minima por `category`, y deben quedar explicitados los impactos reales sobre i18n y SEO. Esta fase existe para evitar que `Bloque 4` implemente una superficie editorial sin contratos suficientes.

---

## 2. Fuente de verdad aplicable

- `docs/README.md`
- roadmap activo o historico aplicable en `docs/plans/`:
  - `docs/plans/sprint-2/roadmap.md`
  - `docs/plans/sprint-2/block-0.md`
  - `docs/plans/sprint-2/block-1.md`
  - `docs/plans/sprint-2/block-2.md`
  - `docs/plans/phase-template.md`
- documentos contractuales aplicables:
  - `docs/architecture/site-architecture.md`
  - `docs/content/content-system.md`
  - `docs/architecture/i18n-spec.md`
- documentos auxiliares aplicables:
  - `docs/delivery/seo-spec.md`
  - `docs/content/content-master.md`
  - `docs/governance/decision-log.md`

Nota:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- este plan no puede contradecir documentos contractuales
- `Bloque 3` debe extender la arquitectura y el sistema editorial para el blog sin reabrir la tesis aprobada en `Bloque 0` ni la propagacion narrativa cerrada en `Bloque 2`

---

## 3. Inputs requeridos

### Documentos

- [x] `docs/README.md`
- [x] `docs/plans/sprint-2/roadmap.md`
- [x] `docs/plans/sprint-2/block-0.md`
- [x] `docs/plans/sprint-2/block-1.md`
- [x] `docs/plans/sprint-2/block-2.md`
- [x] `docs/architecture/site-architecture.md`
- [x] `docs/content/content-system.md`
- [x] `docs/architecture/i18n-spec.md`
- [x] `docs/delivery/seo-spec.md`

### Decisiones previas

- [x] `Blog` debe existir como nueva superficie top-level del sitio
- [x] la arquitectura minima del blog debe incluir `blog index`, `blog post detail` y definicion contractual de `category`
- [x] `blog index` debe existir en ambos locales activos
- [x] los posts pueden no tener equivalente exacto entre locales
- [x] el switcher debe caer al `blog index` del locale destino cuando no exista equivalente del post
- [x] `category` es la taxonomia minima a comprometer en este bloque
- [x] `series` no entra en esta fase, ni como metadata interna ni como superficie contractual
- [x] `Bloque 3` debe tocar primero `site-architecture` y `content-system`, y solo bajar a `i18n-spec` o `seo-spec` si el impacto contractual lo exige
- [x] el backlog inicial del blog debe ser corto, tematico y sin briefs completos

### Estado tecnico

- [x] no se requiere tocar runtime en esta fase
- [x] el blog todavia no existe en `src/` ni en rutas implementadas
- [x] cualquier decision que abra implementacion, UI o taxonomias navegables adicionales debe diferirse a `Bloque 4` salvo necesidad contractual real

---

## 4. Entregables documentales

### Crear

- [x] `docs/plans/sprint-2/block-3.md`

### Actualizar

- [x] `docs/architecture/site-architecture.md`
- [x] `docs/content/content-system.md`
- [x] `docs/architecture/i18n-spec.md` si el fallback entre locales del blog exige ajuste contractual explicito
- [x] `docs/delivery/seo-spec.md` si la nueva superficie del blog exige ajuste contractual explicito
- [x] `docs/governance/decision-log.md` al cierre del bloque si se materializa un cambio contractual suficiente

### No tocar

- [ ] `docs/strategy/portfolio-strategy.md`
- [ ] `docs/content/content-master.md`
- [ ] `docs/delivery/deployment.md`
- [ ] cualquier archivo de `src/`, `public/` o configuracion de runtime, salvo acuerdo explicito para una urgencia fuera de fase

---

## 5. Alcance de implementacion

### Si entra

- [x] definir el rol del blog dentro de la arquitectura del sitio
- [x] definir rutas contractuales minimas para `blog index`, `blog post detail` y `category`
- [x] definir la entidad `blog_post` con metadata obligatoria y reglas editoriales minimas
- [x] definir `category` como taxonomia aprobada del blog
- [x] definir comportamiento contractual de locales y fallback del switcher para posts sin equivalente
- [x] dejar backlog inicial de 6 a 10 ideas de posts alineadas con la nueva tesis

### No entra

- [ ] implementacion de paginas, componentes o colecciones en Astro
- [ ] escritura de posts finales o briefs completos de contenido
- [ ] taxonomias adicionales mas alla de `category`
- [ ] `series`
- [ ] pages navegables adicionales fuera de `blog index`, `blog post detail` y la definicion contractual de `category`
- [ ] cambios de UI, navegacion implementada o metadata SEO en runtime

---

## 6. Tareas detalladas

### Bloque A - Relectura contractual de arquitectura y sistema

- [x] releer `site-architecture` contra el roadmap y los cierres de `Bloque 0`, `Bloque 1` y `Bloque 2`
- [x] releer `content-system` con foco en la incorporacion de `blog_post`
- [x] identificar tensiones entre el blog como superficie top-level y la arquitectura actual del sitio
- [x] identificar si el fallback de locales del blog ya cabe en `i18n-spec` o si exige ajuste contractual

### Bloque B - Arquitectura del sitio para `Blog`

- [x] definir el rol de `Blog` dentro de la navegacion principal y del mapa de superficies del sitio
- [x] definir `blog index` como nueva pagina principal del portfolio
- [x] definir `blog post detail` como pagina de detalle editorial
- [x] definir `category` como agrupador contractual del blog y su lugar dentro de la arquitectura
- [x] dejar explicito que otras superficies editoriales quedan fuera de esta fase

### Bloque C - Sistema editorial y entidad `blog_post`

- [x] crear la definicion contractual de `blog_post` en `content-system`
- [x] definir metadata obligatoria por post
- [x] definir campos editoriales minimos para sostener index, detail y `category`
- [x] definir reglas de tono, evidencia y perimetro del blog segun los cierres de `Bloque 0`
- [x] dejar explicito que `series` queda fuera del sistema aprobado en esta fase

### Bloque D - Locales, i18n y SEO

- [x] validar si `i18n-spec` necesita incorporar el fallback del switcher hacia el `blog index` del locale destino
- [x] validar si `seo-spec` necesita reconocer el blog como nueva superficie con metadata estructural propia
- [x] registrar solo los impactos contractuales reales y diferir detalles de implementacion a `Bloque 4` o `Bloque 5`
- [x] evitar sobredocumentar canonicals, alternates o taxonomias antes de que existan rutas implementadas

### Bloque E - Backlog inicial del blog

- [x] definir de 6 a 10 ideas de posts alineadas con `delivery`, `partnerships`, `business development` y soporte operativo
- [x] asegurar que el backlog respete el perimetro editorial aprobado en `Bloque 0`
- [x] evitar briefs completos, outlines extensos o compromisos de series no aprobadas
- [x] dejar el backlog listo para priorizacion en implementacion o produccion de contenido

### Bloque F - Modo de trabajo interactivo

- [x] trabajar por documento y por decision pequena, no por lote grande
- [x] presentar recomendaciones y hasta dos alternativas cuando aparezca ambiguedad relevante
- [x] pedir aprobacion explicita antes de editar cuando una decision tenga mas de una lectura razonable
- [x] detenerse si aparece tension entre `site-architecture`, `content-system`, `i18n-spec` y el roadmap
- [x] no avanzar a implementacion ni a copy de posts durante esta fase

Recomendacion:

- usar el orden `site-architecture -> content-system -> i18n/seo impactos -> backlog`
- priorizar contratos minimos suficientes sobre taxonomias o superficies de mas

---

## 7. Archivos probables a tocar

### Docs

- `docs/plans/sprint-2/block-3.md`
- `docs/architecture/site-architecture.md`
- `docs/content/content-system.md`
- `docs/architecture/i18n-spec.md` si el fallback del blog exige ajuste contractual
- `docs/delivery/seo-spec.md` si la nueva superficie exige ajuste contractual
- `docs/governance/decision-log.md` al cierre, si corresponde

### Codigo

- no se esperan cambios de codigo en esta fase

---

## 8. Dependencias y bloqueos

### Dependencias

- [x] cierre aprobado de `Bloque 2`
- [x] acuerdo en que el blog sera una superficie top-level
- [x] acuerdo en que este bloque define `blog index`, `blog post detail` y `category`
- [x] acuerdo en que los posts pueden no tener equivalente entre locales
- [x] acuerdo en que `series` queda fuera
- [x] acuerdo en dejar implementacion y runtime para `Bloque 4`

### Bloqueos posibles

- [ ] que `Blog` compita arquitectonicamente con `Work` o `Experience` en vez de complementarlos
- [ ] que la definicion de `category` se convierta en taxonomia excesiva o prematura
- [ ] que el fallback entre locales contradiga el comportamiento actual documentado de i18n
- [ ] que el bloque derive en decisiones de SEO o implementacion demasiado finas para esta fase
- [ ] que el backlog inicial abra una linea editorial mas amplia que la tesis aprobada

### Mitigacion

- mantener el blog como superficie editorial complementaria y no como sustituto de evidencia operativa
- comprometer solo la taxonomia minima necesaria para discovery y organizacion editorial
- tocar `i18n-spec` y `seo-spec` solo si el impacto ya es contractual y no puede esperar
- diferir UI, rutas implementadas y metadata tecnica a los bloques de implementacion y cierre
- filtrar el backlog inicial por relevancia profesional, evidencia y sostenibilidad editorial

---

## 9. Validaciones

### Documentales

- [x] verificar alineacion con `docs/README.md`
- [x] verificar alineacion con `docs/plans/sprint-2/roadmap.md`
- [x] verificar alineacion con `docs/strategy/portfolio-strategy.md` y `docs/content/content-system.md`
- [x] verificar que no se introdujeron decisiones de implementacion fuera de contrato
- [x] verificar que `Blog` y `blog_post` respondan a la misma tesis aprobada en `Bloque 0`

### Tecnicas

- [x] confirmar que no hubo cambios de runtime en esta fase

### Manuales

- [x] revision conjunta de `site-architecture` actualizado
- [x] revision conjunta de `content-system` actualizado
- [x] revision conjunta de impactos reales en `i18n-spec` y `seo-spec`
- [x] revision conjunta del backlog inicial de temas

---

## 10. Criterio de cierre

La fase solo se considera cerrada si:

- [x] `site-architecture` ya contempla `Blog` como superficie principal del sitio
- [x] `content-system` ya define `blog_post` y `category` con alcance minimo suficiente
- [x] el comportamiento de locales del blog esta resuelto contractualmente o explicitamente diferido con criterio
- [x] el backlog inicial del blog respeta la tesis y el perimetro editorial aprobados
- [x] `Bloque 4` puede empezar sin tener que inventar arquitectura o sistema editorial

---

## 11. Riesgos y notas

### Riesgos

- sobredefinir taxonomias o superficies antes de validar la implementacion real del blog
- abrir tensiones entre locale symmetry y sostenibilidad editorial
- crear un blog demasiado amplio que opaque el portfolio principal
- dejar demasiado implicitas las reglas de metadata por post y bloquear la implementacion despues

### Notas operativas

- la inclusion de `category` en este bloque responde a una necesidad de sistema editorial, no a una obligacion de implementar archives o listados secundarios en esta misma fase
- cualquier decision sobre navegacion secundaria, breadcrumbs, paginacion o archives debe tratarse en `Bloque 4` o `Bloque 5` salvo que el contrato lo exija antes

### Backlog inicial del blog

- `project-delivery` - How I turn ambiguous commercial asks into executable project scopes
- `project-delivery` - What partner-facing delivery taught me about ownership, reporting, and stakeholder control
- `project-delivery` - Delivery under live constraints: what gaming and esports environments teach about execution discipline
- `bd-and-partnerships` - The gap between closing a partnership and actually delivering it well
- `bd-and-partnerships` - How I evaluate whether a partnership opportunity is operationally viable before it becomes a problem
- `bd-and-partnerships` - Translating business development goals into timelines, owners, and cross-functional follow-through
- `operations` - Remote operations as infrastructure: what still matters after the strategy deck is approved
- `career-and-industry-lessons` - What moving from operations into partnerships and delivery changed in how I read work

Notas del backlog:

- el backlog es intencionalmente hibrido: combina piezas evergreen aplicadas con aprendizajes anclados en experiencia real
- no constituye una promesa de orden de publicacion ni una serie cerrada
- puede priorizarse mas tarde segun capacidad editorial, relevancia profesional y necesidades de implementacion

---

## 12. Registro de cambios del plan

- Fecha: `2026-03-16`
  - cambio: creacion inicial del plan para `Bloque 3`
  - razon: preparar la fase contractual de arquitectura y sistema editorial del blog despues del cierre de `Bloque 2`
- Fecha: `2026-03-16`
  - cambio: cierre ejecutado de `Bloque 3` con arquitectura, sistema editorial, i18n y SEO auxiliar actualizados
  - razon: dejar el blog contractualmente definido antes de `Bloque 4`
