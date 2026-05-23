# Definicion: Blog Taxonomy Vision

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

- Change id: `blog-taxonomy-vision`
- Estado: `done`
- Fuente: `_inbox/handover_blog_taxonomy_vision.md`
- Ultima actualizacion: `2026-04-26`
- Owner: `pawpaw + Codex`

---

## 1. Objetivo

Actualizar el sistema editorial del blog para que cada post comunique una lectura de tres capas: `category`, `angle` y `domain`.
El cambio debe mantener `category` como eje principal y visible, pero ampliar el modelo de contenido y la UI para mostrar las tres capas de forma sobria y consistente.
El resultado debe reforzar la autoridad editorial del blog sin convertirlo en un sistema de tags abierto ni alterar la tesis general del portfolio.

---

## 2. No objetivos

- [ ] no crear una taxonomia abierta de tags
- [ ] no crear nuevas rutas o archives por `angle` o `domain`
- [ ] no convertir el blog en una linea editorial separada de la tesis del portfolio
- [ ] no tocar deployment, dominio ni i18n estructural fuera de lo necesario

---

## 3. Fuentes de verdad aplicables

- `docs/README.md`
- `AGENTS.md`
- `docs/AGENTS.md`
- documentos contractuales aplicables:
  - `docs/content/content-system.md`
  - `docs/content/content-master.md`
  - `docs/architecture/site-architecture.md`
  - `docs/architecture/i18n-spec.md`
  - `docs/delivery/seo-spec.md`
- documentos auxiliares aplicables:
  - `docs/sdd/parches/blog-taxonomy-vision/handover.md`
  - `docs/sdd/templates/definicion.md`
- fuentes externas o handovers:
  - `_inbox/handover_blog_taxonomy_vision.md`

Nota:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- `docs/sdd/` es auxiliar operativo, no contrato superior
- este cambio requiere actualizar contrato documental antes de cerrar la implementacion

---

## 4. Alcance

### Si entra

- ampliar el contrato de `blog_post` para incluir `angle` y `domain`
- actualizar el schema de contenido del blog
- actualizar la UI del blog para mostrar las tres capas en orden
- migrar los posts publicados existentes al nuevo modelo
- mantener `category` como superficie navegable principal

### Fuera de alcance

- crear archives o rutas dedicadas para `angle` o `domain`
- cambiar la arquitectura principal del sitio
- cambiar la estrategia general del portfolio
- introducir un sistema de tags abierto

---

## 5. Superficies afectadas

### Docs

- `docs/content/content-system.md`
- `docs/content/content-master.md`

### Codigo o contenido

- `src/content.config.ts`
- `src/utils/blog.ts`
- `src/components/blog/*.astro`
- `src/pages/*/blog/*.astro`
- `src/content/blog/*.md`

### Configuracion o validacion

- `tests/*.mjs`
- `package.json` si alguna validacion necesita ajuste

---

## 6. Decisiones conocidas

- decision:
  - `category` sigue siendo la taxonomia principal y navegable
  - `angle` y `domain` son capas editoriales visibles, no nuevos archives publicos
  - razon: mantener el blog minimal, defendible y compatible con la arquitectura vigente
  - documentos o areas afectadas:
    `docs/content/content-system.md`, `src/content.config.ts`, `src/components/blog/*.astro`

- decision:
  - `angle` y `domain` se implementan como vocabulario controlado desde esta entrega
  - razon: evitar drift editorial, normalizar el contenido publicado y hacer validable el schema del blog
  - documentos o areas afectadas:
    `docs/content/content-system.md`, `src/content/blog/*.md`, `src/content.config.ts`, `src/utils/blog.ts`, `src/components/blog/*.astro`

- decision:
  - los valores aprobados para `angle` son `Field Notes`, `Delivery Framework`, `Industry Analysis` y `Career Reflection`
  - razon: cerrar la taxonomia editorial pedida sin abrir un sistema de tags adicional
  - documentos o areas afectadas:
    `docs/content/content-system.md`, `src/content.config.ts`, `src/content/blog/*.md`, `tests/*.mjs`

- decision:
  - los valores aprobados para `domain` son `Gaming`, `Esports`, `AI & Tech` y `Remote Ops`
  - razon: fijar una capa contextual defendible y acotada para cada post
  - documentos o areas afectadas:
    `docs/content/content-system.md`, `src/content.config.ts`, `src/content/blog/*.md`, `tests/*.mjs`

- decision:
  - la migracion debe cubrir los posts publicados existentes
  - razon: el blog no debe quedar con contenido incompleto o inconsistente
  - documentos o areas afectadas:
    `src/content/blog/*.md`, `tests/*.mjs`

---

## 7. Decisiones abiertas

- [ ] ninguna bloqueante en esta iteracion

---

## 8. Riesgos

- riesgo:
  - impacto: romper el contrato actual que solo aprueba `category`
  - mitigacion: actualizar primero `docs/content/content-system.md`

- riesgo:
  - impacto: sobrecargar cards y featured panel con demasiados chips
  - mitigacion: usar una presentacion compacta y consistente

- riesgo:
  - impacto: dejar contenido existente sin las nuevas capas
  - mitigacion: migrar los posts publicados en la misma entrega

---

## 9. Criterio de cierre

La definicion queda lista para `sdd-plan` solo si:

- [x] objetivo y no objetivos estan claros
- [x] las fuentes de verdad aplicables estan listadas
- [x] el alcance y fuera de alcance no se contradicen
- [x] las decisiones abiertas estan visibles
- [x] los riesgos principales estan identificados

---

## 10. Registro de cambios

- 2026-04-25:
  - cambio: creacion inicial de la definicion `blog-taxonomy-vision`
  - razon: iniciar el SDD para la vision editorial de taxonomia del blog
- 2026-04-26:
  - cambio: sync de drift para pasar `angle` y `domain` a vocabulario controlado
  - razon: alinear el SDD con la taxonomia cerrada pedida para el blog
