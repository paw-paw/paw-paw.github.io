# Plan: Blog Taxonomy Vision

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

- Change id: `blog-taxonomy-vision`
- Estado: `done`
- Ultima actualizacion: `2026-04-26`
- Owner: `pawpaw + Codex`
- Depende de:
  - `docs/README.md`
  - `AGENTS.md`
  - `docs/AGENTS.md`
  - `docs/sdd/parches/blog-taxonomy-vision/definicion.md`
  - `docs/sdd/parches/blog-taxonomy-vision/decision.log`
- Desbloquea:
  - `docs/sdd/parches/blog-taxonomy-vision/tasks.md`

---

## 1. Fuente de verdad aplicable

- `docs/README.md`
- `AGENTS.md`
- `docs/AGENTS.md`
- `docs/sdd/parches/blog-taxonomy-vision/definicion.md`
- `docs/sdd/parches/blog-taxonomy-vision/decision.log`
- documentos contractuales aplicables:
  - `docs/content/content-system.md`
  - `docs/content/content-master.md`
  - `docs/architecture/site-architecture.md`
  - `docs/architecture/i18n-spec.md`
  - `docs/delivery/seo-spec.md`
- documentos auxiliares aplicables:
  - `docs/sdd/parches/blog-taxonomy-vision/handover.md`
  - `docs/sdd/templates/plan.md`

Nota:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- este plan no puede ampliar el alcance aprobado en `definicion.md`
- si el plan descubre drift contractual, detente o registra la decision antes de generar tasks

---

## 2. Lectura brownfield

El repo ya tiene un blog operativo con una taxonomia simple:

- `src/content.config.ts` define el schema del collection `blog`
- `src/utils/blog.ts` concentra la taxonomia actual, rutas y helpers de locale
- `src/components/blog/*.astro` renderiza featured, cards y metadata del post
- `src/pages/en/blog/*.astro` y `src/pages/es/blog/*.astro` exponen index, detail y category
- `src/content/blog/*.md` contiene las entradas publicadas
- `tests/*.mjs` fija parte del comportamiento publico y la simetria de rutas

Deuda o drift relevante:

- `docs/content/content-system.md` ya aprueba `category`, `angle` y `domain`, pero el runtime sigue tratando `angle` y `domain` como `string` libre
- la taxonomia pedida ahora exige listas controladas explicitas para `angle` y `domain`
- el contenido publicado sigue usando valores previos fuera del vocabulario cerrado pedido
- los tests publicos todavia reflejan labels antiguos como `Framework`

Restricciones tecnicas:

- no crear rutas nuevas para `angle` o `domain`
- no tocar deployment ni i18n estructural
- mantener `category` como eje navegable y los nuevos campos como capas editoriales visibles
- convertir `angle` y `domain` en vocabularios controlados validados por schema

---

## 3. Zonas afectadas

### Docs

- `docs/content/content-system.md`
- `docs/content/content-master.md`

### Codigo

- `src/content.config.ts`
- `src/utils/blog.ts`
- `src/components/blog/BlogCard.astro`
- `src/components/blog/BlogFeaturedPanel.astro`
- `src/components/blog/BlogPostMeta.astro`
- `src/pages/en/blog/index.astro`
- `src/pages/es/blog/index.astro`
- `src/pages/en/blog/[slug].astro`
- `src/pages/es/blog/[slug].astro`
- `src/content/blog/*.md`

### Configuracion, tests o build

- `tests/public-release-closure.test.mjs`
- `tests/blog-es-detail-alignment.test.mjs`
- `package.json` para validar scripts existentes

---

## 4. Bloques de implementacion

### Bloque A - Contrato de contenido

- Objetivo:
  - ampliar el contrato editorial del blog para incluir `angle` y `domain`
- Cambios esperados:
  - actualizar `docs/content/content-system.md`
  - ajustar `docs/content/content-master.md` para alinear la lectura del featured/blog cards
  - registrar la decision en `decision.log`
  - dejar explicitos los valores aprobados para `angle` y `domain`
- Dependencias:
  - handover
  - lectura brownfield del blog actual
- Riesgos:
  - contradiccion con el contrato vigente de `blog_post`
  - introducir ambiguedad si el contrato no deja claro que no hay rutas nuevas

### Bloque B - Schema, contenido y UI

- Objetivo:
  - implementar el nuevo modelo en schema, contenido publicado y componentes del blog
- Cambios esperados:
  - ampliar `src/content.config.ts`
  - actualizar `src/utils/blog.ts`
  - modificar componentes y paginas del blog para mostrar `category`, `angle` y `domain`
  - migrar los posts publicados a los valores aprobados
- Dependencias:
  - Bloque A cerrado
  - contrato de contenido actualizado
- Riesgos:
  - desalinear cards, featured panel y detail si cada bloque se toca de forma distinta
  - romper tests o frontmatter existente si no se migra todo el corpus publicado

### Bloque C - Validacion y cierre

- Objetivo:
  - verificar que el cambio compila, preserva rutas y refleja la nueva lectura editorial
- Cambios esperados:
  - actualizar tests afectados
  - correr `npm run build`
  - correr `npm test`
  - revisar visualmente blog index, detail y category pages
- Dependencias:
  - Bloque B cerrado
- Riesgos:
  - dejar drift entre docs y runtime
  - pasar build con una taxonomia incoherente en contenido real

---

## 5. Datos, schemas y contratos

- Contratos documentales afectados:
  - `docs/content/content-system.md`
  - `docs/content/content-master.md`
- Datos o contenido afectados:
  - `src/content/blog/*.md`
- Schemas o modelos afectados:
  - collection `blog` en `src/content.config.ts`
  - helpers de taxonomia en `src/utils/blog.ts`
- Compatibilidad esperada:
  - `category` sigue siendo la taxonomia navegable principal
  - `angle` y `domain` se muestran como capas editoriales visibles
  - `angle` y `domain` aceptan solo un valor aprobado por post
  - no se crean archives nuevos para esas capas

---

## 6. Validaciones

### Documentales

- [ ] verificar alineacion con `docs/README.md`
- [ ] verificar alineacion con contratos aplicables

### Tecnicas

- [ ] `npm run build`
- [ ] `npm test`
- [ ] inspeccion puntual de rutas publicas del blog

### Manuales

- [ ] revision visual/manual del blog index, detail y featured
- [ ] revision de consistencia de etiquetas y orden visual

---

## 7. Riesgos y mitigaciones

- riesgo:
  - impacto: romper el contrato actual de taxonomy
  - mitigacion: actualizar docs antes del runtime

- riesgo:
  - impacto: cards y featured demasiado cargados
  - mitigacion: usar chips compactos y un orden estable

- riesgo:
  - impacto: posts existentes incompletos
  - mitigacion: migrar todo el corpus publicado en la misma entrega

---

## 8. Decisiones que requieren humano

- [ ] ninguna bloqueante en esta iteracion

---

## 9. Criterio de cierre tecnico

El plan queda listo para `sdd-tasks` solo si:

- [x] el alcance respeta `definicion.md`
- [x] las zonas afectadas estan identificadas
- [x] los bloques de implementacion son secuenciables
- [x] las validaciones son reales y proporcionales
- [x] no hay decisiones abiertas que bloqueen la division en fases

---

## 10. Registro de cambios

- 2026-04-25:
  - cambio: creacion inicial del plan `blog-taxonomy-vision`
  - razon: convertir la definicion en un plan tecnico brownfield
- 2026-04-26:
  - cambio: sync de drift para incorporar vocabulario controlado en `angle` y `domain`
  - razon: alinear el plan con la taxonomia cerrada pedida para el cambio
