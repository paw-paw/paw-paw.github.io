# Definicion: blog-index-editorial-redesign

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

- Change id: `blog-index-editorial-redesign`
- Program id: `none`
- Patch kind: `spec`
- Lifecycle: `spec-first`
- Estado: `active`
- Fuente: `_inbox/blog_improvements/`
- Ultima actualizacion: `2026-05-18`
- Owner: `usuario`

---

## 1. Objetivo

Redefinir contractualmente y luego habilitar la futura implementacion de un `blog index` mas autoral, escaneable y creible, sin romper la tesis general del portfolio ni el sistema visual vigente.  
El cambio debe resolver la tension entre la UI objetivo del handoff y los contratos actuales del blog, fijando una jerarquia editorial mas ligera para `/blog`, incorporando un bloque acotado de `Editorial Background` y preservando paridad real entre `en` y `es`.  
Al cerrar el cambio, la superficie `/blog` debe quedar descrita de forma coherente en docs antes de que su implementacion pueda considerarse cerrada.

---

## 2. No objetivos

- [ ] Redisenar `blog post detail`.
- [ ] Redisenar `blog category pages`.
- [ ] Crear newsletter, search, filters, pagination o nuevos archives.
- [ ] Convertir `Editorial Background` en entidad reusable global del portfolio.
- [ ] Reabrir navbar, footer, routing base, deployment o estrategia SEO estructural salvo ajustes documentales estrictamente derivados del nuevo intro del blog.
- [ ] Introducir una estetica visual nueva fuera del sistema ya aprobado.

---

## 3. Fuentes de verdad aplicables

- `docs/README.md`
- `AGENTS.md`
- documentos contractuales aplicables:
  - `docs/strategy/portfolio-strategy.md`
  - `docs/architecture/site-architecture.md`
  - `docs/content/content-system.md`
  - `docs/visual/visual-system.md`
  - `docs/architecture/i18n-spec.md`
- documentos auxiliares aplicables:
  - `docs/content/content-master.md`
  - `docs/visual/asset-plan.md`
  - `docs/delivery/seo-spec.md`
- fuentes externas o handovers:
  - `_inbox/blog_improvements/handoff_blog_index_redesign.md`
  - `_inbox/blog_improvements/blog-reference.png`
  - `_inbox/blog_improvements/*_all.png`
  - `sdd/parches/blog-index-editorial-redesign/handover.md`

---

## 4. Alcance

### Si entra

- [ ] Actualizar la verdad documental de `/blog` para reflejar un intro mas autoral y una jerarquia visual mas ligera en el index.
- [ ] Definir explicitamente que el `blog index` puede mostrar solo `category` como chip primario en sus superficies resumidas, sin que eso elimine `angle` y `domain` del modelo editorial general.
- [ ] Definir el comportamiento esperado del featured teaser del index, incluyendo excerpt breve y CTA controlado.
- [ ] Definir el bloque `Editorial Background` como apoyo de credibilidad acotado a `/blog`, con seis items y copy localizado.
- [ ] Fijar que la experiencia objetivo cubre `en` y `es`, respetando que `en` sigue siendo idioma maestro.
- [ ] Mantener compatibilidad con el sistema visual aprobado y con la arquitectura actual del blog.

### Fuera de alcance

- [ ] Cambios a la taxonomia interna de `blog_post`.
- [ ] Nuevas rutas publicas o cambios al routing i18n.
- [ ] Cambios a la estrategia general del portfolio fuera de lo necesario para reconciliar `/blog`.
- [ ] Promocion automatica de assets del inbox a runtime sin decision posterior y sin seguir las reglas de `asset-plan`.

---

## 5. Superficies afectadas

### Docs

- `docs/content/content-system.md`
- `docs/content/content-master.md`
- posiblemente `docs/visual/asset-plan.md` si se aprueban nuevos logos para uso runtime
- posiblemente `docs/delivery/seo-spec.md` solo si la reformulacion del intro altera metadata aprobada

### Codigo o contenido

- `src/pages/en/blog/index.astro`
- `src/pages/es/blog/index.astro`
- `src/components/blog/BlogFeaturedPanel.astro`
- `src/components/blog/BlogCard.astro`
- `src/i18n/en.json`
- `src/i18n/es.json`
- posibles nuevos componentes o datos locales del blog, a definir en `sdd-plan`
- posibles assets de logos promovidos desde el inbox, a decidir despues

### Configuracion o validacion

- validaciones reales disponibles del repo, a concretar en `sdd-plan`
- revision visual/manual de `/en/blog/` y `/es/blog/`

---

## 6. Decisiones conocidas

- decision: el handoff representa un cambio contractual intencional del `blog index`.
  - razon: pide una jerarquia visual distinta de la que hoy describen `content-system` y `content-master`.
  - documentos o areas afectadas: `docs/content/content-system.md`, `docs/content/content-master.md`, `src/components/blog/*`, `src/pages/*/blog/index.astro`
- decision: `Editorial Background` queda limitado a `/blog`.
  - razon: cumple una funcion de credibilidad editorial puntual y no necesita expandirse aun al modelo global del portfolio.
  - documentos o areas afectadas: docs del blog index, futura implementacion de `/blog`
- decision: el cambio debe cubrir `en` y `es`.
  - razon: las rutas del blog ya existen en ambos locales y la politica i18n exige paridad real cuando hay contenido publicado.
  - documentos o areas afectadas: `docs/architecture/i18n-spec.md`, `src/i18n/en.json`, `src/i18n/es.json`, rutas localizadas del blog

---

## 7. Assumptions

- La copy espanola del handoff es una base aceptada para el alcance del cambio, sujeta a refinamiento editorial menor sin alterar la tesis.
- La simplificacion visual de chips aplica al `blog index`; no implica eliminar `angle` ni `domain` del modelo, metadata o detalle editorial del blog.
- El handoff preserva intencion visual y estructural, pero el copy final visible del intro debe reconciliarse con la narrativa contractual ya documentada para `/blog`.

---

## 8. Decisiones abiertas

- No hay decisiones abiertas pendientes para pasar a `sdd-plan`.

---

## 9. Riesgos

- riesgo: implementar el mockup sin actualizar contratos puede dejar drift documental activo.
  - impacto: la entrega no podria considerarse cerrada bajo `AGENTS.md`.
  - mitigacion: resolver primero `content-system` y `content-master`.
- riesgo: la nueva capa de credibilidad editorial derive hacia una mini pagina de experiencia.
  - impacto: `/blog` perderia foco y competiría con `/experience`.
  - mitigacion: mantener `Editorial Background` como strip compacto y no como entidad global.
- riesgo: los assets de logos no tengan paridad visual suficiente entre temas.
  - impacto: dark mode o peso visual inconsistente.
  - mitigacion: validar assets antes de promoverlos o usar fallback textual.
- riesgo: la simplificacion de chips se interprete como cambio del modelo editorial completo.
  - impacto: drift con category pages, post detail y taxonomia existente.
  - mitigacion: documentar que el cambio modifica presentacion resumida del index, no el modelo base.

---

## 10. Criterio de cierre

La definicion queda lista para `sdd-plan` solo si:

- [x] objetivo y no objetivos estan claros
- [x] las fuentes de verdad aplicables estan listadas
- [x] el alcance y fuera de alcance no se contradicen
- [x] assumptions criticas resueltas, aceptadas o escaladas
- [x] las decisiones abiertas estan visibles
- [x] los riesgos principales estan identificados

---

## 11. Registro de cambios

- Fecha: `2026-05-18`
  - cambio: creacion inicial de la definicion del patch.
  - razon: formalizar el rediseño del `blog index` tras triage positivo.
