# Phase 4 Plan

## Metadatos

- Fase: `4`
- Estado: `active`
- Ultima actualizacion: `2026-03-12`
- Owner: `Codex + user`
- Depende de:
  - `docs/README.md`
  - `docs/plans/roadmap.md`
  - `docs/strategy/portfolio-strategy.md`
  - `docs/architecture/site-architecture.md`
  - `docs/content/content-system.md`
  - `docs/content/source-data-map.md`
  - `docs/visual/visual-system.md`
- Desbloquea:
  - `docs/architecture/i18n-spec.md`
  - `docs/delivery/seo-spec.md`
  - implementacion real del contenido en el idioma maestro

---

## 1. Objetivo de la fase

Construir la version canonica del portfolio en ingles a partir de la estrategia, arquitectura y sistema de contenido ya aprobados. Al cerrar la fase deben existir tanto el documento [`docs/content/content-master.md`](/home/pawpaw/paw-paw.github.io/docs/content/content-master.md) como la implementacion real del contenido maestro en la UI.

La fase existe para reemplazar placeholders estructurales por contenido aprobado, defendible y publicable. Al cerrarla, el sitio debe comunicar una identidad profesional concreta, evidencias seleccionadas y canales de contacto alineados con la politica documental vigente.

---

## 2. Fuente de verdad aplicable

- [`docs/README.md`](/home/pawpaw/paw-paw.github.io/docs/README.md)
- [`docs/plans/roadmap.md`](/home/pawpaw/paw-paw.github.io/docs/plans/roadmap.md)
- documentos contractuales aplicables:
  - [`docs/strategy/portfolio-strategy.md`](/home/pawpaw/paw-paw.github.io/docs/strategy/portfolio-strategy.md)
  - [`docs/architecture/site-architecture.md`](/home/pawpaw/paw-paw.github.io/docs/architecture/site-architecture.md)
  - [`docs/content/content-system.md`](/home/pawpaw/paw-paw.github.io/docs/content/content-system.md)
  - [`docs/visual/visual-system.md`](/home/pawpaw/paw-paw.github.io/docs/visual/visual-system.md)
- documentos auxiliares aplicables:
  - [`docs/content/source-data-map.md`](/home/pawpaw/paw-paw.github.io/docs/content/source-data-map.md)
  - [`docs/visual/asset-plan.md`](/home/pawpaw/paw-paw.github.io/docs/visual/asset-plan.md)
  - [`docs/governance/decision-log.md`](/home/pawpaw/paw-paw.github.io/docs/governance/decision-log.md)

Nota:

- si hay conflicto, manda la precedencia definida en [`docs/README.md`](/home/pawpaw/paw-paw.github.io/docs/README.md)
- este plan no puede contradecir documentos contractuales

---

## 3. Inputs requeridos

Lista de condiciones previas para ejecutar la fase.

### Documentos

- [x] [`docs/strategy/portfolio-strategy.md`](/home/pawpaw/paw-paw.github.io/docs/strategy/portfolio-strategy.md) en estado `done`
- [x] [`docs/architecture/site-architecture.md`](/home/pawpaw/paw-paw.github.io/docs/architecture/site-architecture.md) en estado `done`
- [x] [`docs/content/content-system.md`](/home/pawpaw/paw-paw.github.io/docs/content/content-system.md) en estado `done`
- [x] [`docs/content/source-data-map.md`](/home/pawpaw/paw-paw.github.io/docs/content/source-data-map.md) actualizado con mapping estructural
- [x] [`docs/visual/visual-system.md`](/home/pawpaw/paw-paw.github.io/docs/visual/visual-system.md) en estado `done`

### Decisiones previas

- [x] nombre profesional visible: `Paulo Tuya`
- [x] marca visual: `Pawpaw`
- [x] voz narrativa del sitio: primera persona
- [x] idioma maestro: ingles
- [x] canales publicos en home: `email + LinkedIn + Instagram`
- [x] `Selected Work` y `Experience` siguen siendo pilares equivalentes de evidencia
- [x] `Skills` sigue siendo soporte y no lidera el relato
- [x] hasta Fase 5 el sitio sigue siendo monoidioma

### Estado tecnico

- [x] existe implementacion base multipagina para `/`, `/work` y `/experience`
- [x] existe sistema visual aprobado en codigo
- [x] el sitio compila antes de empezar la fase
- [x] `temp/truth/` esta disponible como fuente auxiliar y no contractual

---

## 4. Entregables documentales

### Crear

- [x] [`docs/content/content-master.md`](/home/pawpaw/paw-paw.github.io/docs/content/content-master.md)

### Actualizar

- [x] [`docs/content/source-data-map.md`](/home/pawpaw/paw-paw.github.io/docs/content/source-data-map.md)
- [x] [`docs/governance/decision-log.md`](/home/pawpaw/paw-paw.github.io/docs/governance/decision-log.md)
- [x] [`docs/plans/phase-4.md`](/home/pawpaw/paw-paw.github.io/docs/plans/phase-4.md)

### No tocar

- [x] [`docs/strategy/portfolio-strategy.md`](/home/pawpaw/paw-paw.github.io/docs/strategy/portfolio-strategy.md) salvo que aparezca una contradiccion real
- [x] [`docs/architecture/site-architecture.md`](/home/pawpaw/paw-paw.github.io/docs/architecture/site-architecture.md) salvo que aparezca una contradiccion real
- [x] [`docs/visual/visual-system.md`](/home/pawpaw/paw-paw.github.io/docs/visual/visual-system.md)
- [x] [`docs/architecture/i18n-spec.md`](/home/pawpaw/paw-paw.github.io/docs/architecture/i18n-spec.md) porque sigue fuera de alcance

---

## 5. Alcance de implementacion

### Si entra

- [x] reescritura completa del idioma maestro en [`src/i18n/en.json`](/home/pawpaw/paw-paw.github.io/src/i18n/en.json)
- [x] implementacion real del contenido aprobado en `/`, `/work` y `/experience`
- [x] creacion de una capa minima en `src/data/` para `selected work`, `experience` y `skills` si ayuda a dejar la estructura limpia
- [x] reemplazo de placeholders de identidad visible por `Paulo Tuya`
- [x] aprobacion y aplicacion de claims, escalas y pruebas defendibles
- [x] alineacion de metadata base y labels con el contenido maestro si aplica

### No entra

- [ ] reabrir estrategia, arquitectura o sistema visual salvo contradiccion documentada
- [ ] introducir i18n real o contenido localizado adicional
- [ ] crear slugs individuales de case study
- [ ] abrir nuevas paginas como `/about` o `/resume`
- [ ] motion premium o polish de Fase 7
- [ ] SEO detallado por pagina propio de Fase 6

---

## 6. Tareas detalladas

### Bloque A — Curacion editorial y alcance de evidencia

- [x] revisar [`temp/truth/summary.md`](/home/pawpaw/paw-paw.github.io/temp/truth/summary.md) para destilar thesis line, supporting statement y framing de primera persona
- [x] revisar [`temp/truth/personal.yaml`](/home/pawpaw/paw-paw.github.io/temp/truth/personal.yaml) para identidad, ubicacion, idiomas y canales publicables
- [x] seleccionar 4 a 5 roles o hitos para `Experience`
- [x] seleccionar 4 a 6 casos para `Selected Work`
- [x] definir 3 clusters de `Skills` con pocas herramientas de apoyo
- [x] identificar metricas defendibles y separar cuales se vuelven publicas y cuales quedan fuera

### Bloque B — Documento contractual de contenido maestro

- [x] crear [`docs/content/content-master.md`](/home/pawpaw/paw-paw.github.io/docs/content/content-master.md)
- [x] documentar copy final aprobado para:
  - [x] `site`
  - [x] `nav`
  - [x] `hero`
  - [x] `how_i_work`
  - [x] `selected_work_preview`
  - [x] `experience_preview`
  - [x] `skills`
  - [x] `contact`
  - [x] `footer_cta`
  - [x] `footer`
  - [x] `/work`
  - [x] `/experience`
- [x] documentar los 4 a 6 casos aprobados para `Selected Work`
- [x] documentar los 4 a 5 roles aprobados para `Experience`
- [x] documentar claims y metricas aprobadas

### Bloque C — Capa de datos minima

- [x] decidir estructura minima de `src/data/selected-work.*`
- [x] decidir estructura minima de `src/data/experience.*`
- [x] decidir estructura minima de `src/data/skills.*`
- [x] asegurar que la capa normalizada solo contenga informacion aprobada y no replique el schema bruto de `truth`
- [x] actualizar [`docs/content/source-data-map.md`](/home/pawpaw/paw-paw.github.io/docs/content/source-data-map.md) con la salida normalizada efectivamente usada

### Bloque D — Implementacion del idioma maestro

- [x] reescribir [`src/i18n/en.json`](/home/pawpaw/paw-paw.github.io/src/i18n/en.json) con contenido final aprobado
- [x] alinear [`src/utils/me.ts`](/home/pawpaw/paw-paw.github.io/src/utils/me.ts) con la identidad publica aprobada
- [x] actualizar [`src/components/sections/Hero.astro`](/home/pawpaw/paw-paw.github.io/src/components/sections/Hero.astro) si el contenido final requiere small structural adjustments
- [x] actualizar previews de `Selected Work` y `Experience` en home
- [x] implementar `/work` con intro breve y 4 a 6 casos resumidos en una sola pagina
- [x] implementar `/experience` con intro breve y 4 a 5 roles/hitos curados
- [x] alinear `Contact`, `FooterCTA`, `Footer` y metadata visible con el contenido maestro

### Bloque E — Cierre y consistencia

- [x] registrar decisiones en [`docs/governance/decision-log.md`](/home/pawpaw/paw-paw.github.io/docs/governance/decision-log.md)
- [x] actualizar estado y checklist de [`docs/plans/phase-4.md`](/home/pawpaw/paw-paw.github.io/docs/plans/phase-4.md)
- [x] verificar consistencia entre home, `/work`, `/experience`, navbar, CTA y canales de contacto

### Checkpoints interactivos previstos

- [x] Checkpoint 1: identidad publica, thesis line y tono final del hero
- [x] Checkpoint 2: seleccion final de casos para `Selected Work`
- [x] Checkpoint 3: seleccion final de roles para `Experience`
- [x] Checkpoint 4: policy final de metricas, escalas y claims publicables

---

## 7. Archivos probables a tocar

Lista preventiva, no exhaustiva.

### Docs

- [`docs/content/content-master.md`](/home/pawpaw/paw-paw.github.io/docs/content/content-master.md)
- [`docs/content/source-data-map.md`](/home/pawpaw/paw-paw.github.io/docs/content/source-data-map.md)
- [`docs/governance/decision-log.md`](/home/pawpaw/paw-paw.github.io/docs/governance/decision-log.md)
- [`docs/plans/phase-4.md`](/home/pawpaw/paw-paw.github.io/docs/plans/phase-4.md)

### Codigo y contenido

- [`src/i18n/en.json`](/home/pawpaw/paw-paw.github.io/src/i18n/en.json)
- [`src/utils/me.ts`](/home/pawpaw/paw-paw.github.io/src/utils/me.ts)
- [`src/pages/work.astro`](/home/pawpaw/paw-paw.github.io/src/pages/work.astro)
- [`src/pages/experience.astro`](/home/pawpaw/paw-paw.github.io/src/pages/experience.astro)
- [`src/components/sections/Hero.astro`](/home/pawpaw/paw-paw.github.io/src/components/sections/Hero.astro)
- [`src/components/sections/Values.astro`](/home/pawpaw/paw-paw.github.io/src/components/sections/Values.astro)
- [`src/components/sections/Projects.astro`](/home/pawpaw/paw-paw.github.io/src/components/sections/Projects.astro)
- [`src/components/sections/Timeline.astro`](/home/pawpaw/paw-paw.github.io/src/components/sections/Timeline.astro)
- [`src/components/sections/Skills.astro`](/home/pawpaw/paw-paw.github.io/src/components/sections/Skills.astro)
- [`src/components/sections/Contact.astro`](/home/pawpaw/paw-paw.github.io/src/components/sections/Contact.astro)
- [`src/components/sections/FooterCTA.astro`](/home/pawpaw/paw-paw.github.io/src/components/sections/FooterCTA.astro)
- [`src/components/sections/Footer.astro`](/home/pawpaw/paw-paw.github.io/src/components/sections/Footer.astro)
- [`src/layouts/Layout.astro`](/home/pawpaw/paw-paw.github.io/src/layouts/Layout.astro)
- `src/data/*`

### Fuentes a inspeccionar

- [`temp/truth/summary.md`](/home/pawpaw/paw-paw.github.io/temp/truth/summary.md)
- [`temp/truth/personal.yaml`](/home/pawpaw/paw-paw.github.io/temp/truth/personal.yaml)
- `temp/truth/experience/*`
- `temp/truth/projects/*`
- `temp/truth/skills/*`
- `temp/truth/education/*`

---

## 8. Dependencias y bloqueos

### Dependencias

- [x] Fase 3 cerrada
- [x] sistema visual y navegacion multipagina ya implementados
- [x] `temp/truth/` disponible como fuente auxiliar

### Bloqueos posibles

- [ ] mas de una lectura razonable para elegir casos o roles flagship
- [ ] datos o metricas verdaderas pero no suficientemente defendibles para publicacion
- [ ] exceso de contenido que empuje la fase hacia CV exhaustivo
- [ ] contradiccion entre copy aprobado y estructuras actuales de componentes
- [ ] necesidad de reabrir arquitectura si `/work` o `/experience` quedan demasiado densas

### Mitigacion

- usar checkpoints interactivos antes de cerrar hero, casos, roles o metricas
- priorizar evidencia defendible sobre cobertura amplia
- mover detalle excesivo a `content-master.md` y no forzarlo entero a la UI
- si aparece una contradiccion de arquitectura real, detenerse y consultarla antes de editar

---

## 9. Validaciones

### Documentales

- [x] verificar alineacion con [`docs/README.md`](/home/pawpaw/paw-paw.github.io/docs/README.md)
- [x] verificar alineacion con [`docs/plans/roadmap.md`](/home/pawpaw/paw-paw.github.io/docs/plans/roadmap.md)
- [x] verificar que `content-master.md` no contradiga estrategia, arquitectura ni sistema de contenido
- [x] verificar que la capa `src/data/` no replique el schema bruto de `truth`

### Tecnicas

- [x] `npm run build`

### Manuales

- [ ] revision visual/manual de `/`, `/work` y `/experience`
- [x] revision de labels, CTA, contacto y consistencia narrativa
- [x] revision de que no queden placeholders estructurales visibles de Fase 2

---

## 10. Criterio de cierre

La fase solo se considera cerrada si:

- [x] existe [`docs/content/content-master.md`](/home/pawpaw/paw-paw.github.io/docs/content/content-master.md) completo para el idioma maestro
- [x] la home ya no contiene copy placeholder de fases anteriores
- [x] `/work` contiene 4 a 6 casos resumidos aprobados
- [x] `/experience` contiene 4 a 5 roles o hitos curados aprobados
- [x] `Skills` funciona como soporte y no como inventario generico de tools
- [x] el nombre profesional visible es `Paulo Tuya` y la marca visual `Pawpaw` no compite con esa identidad
- [x] no aparecen keys crudas ni mensajes de “phase in progress” en la UI
- [x] todo el contenido importante esta alineado con la estrategia y la politica de visibilidad publica

---

## 11. Riesgos y notas

### Riesgos

- convertir Fase 4 en una mezcla de contenido final + rediseño estructural
- intentar meter demasiados casos o demasiada trayectoria y diluir la tesis
- introducir metricas debiles o poco defendibles solo para sonar mas impresionante
- acoplar demasiado la implementacion al schema original de `temp/truth/`

### Notas operativas

- `Selected Work` tendra 4 a 6 casos en la pagina `/work`, pero no slugs individuales en esta fase
- `Experience` tendra 4 a 5 roles o hitos curados, no una cronologia exhaustiva
- el contenido maestro debe escribirse en primera persona
- si algun dato de contacto o claim requiere una decision no cerrada en docs, se debe abrir checkpoint antes de editar

---

## 12. Registro de cambios del plan

- Fecha: `2026-03-12`
  - cambio: creacion inicial del plan de Fase 4
  - razon: preparar la ejecucion interactiva de contenido maestro y su implementacion en el idioma principal
