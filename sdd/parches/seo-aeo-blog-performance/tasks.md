# Tasks: SEO/AEO, blog metadata y performance

---

## Estado

- Change id: `seo-aeo-blog-performance`
- Patch kind: `batch`
- Lifecycle: `spec-first`
- Estado: `done`
- Ultima actualizacion: `2026-05-24`
- Owner: `paw-paw`

---

## 1. Fuente de verdad aplicable

- `docs/README.md`
- `sdd/parches/seo-aeo-blog-performance/patch.yaml`
- `sdd/parches/seo-aeo-blog-performance/definicion.md`
- `sdd/parches/seo-aeo-blog-performance/plan.md`
- `sdd/parches/seo-aeo-blog-performance/decision.log`

---

## 2. Preflight

- [x] lista cerrada de items vigente
- [x] criterio global de cierre vigente
- [x] cada item conserva criterio de cierre
- [x] no hay dependencias internas complejas sin resolver

---

## 3. Mapa de ejecucion por item

### Item 1 - Contratos y documentacion SEO/AEO/performance

- Objetivo:
  - sincronizar docs antes de runtime para SEO/AEO, robots y first viewport motion.
- Tareas:
  - actualizar `docs/delivery/seo-spec.md` con schema, entidad `@id`, `modified_date`, robots IA por uso y Googlebot/Google-Extended.
  - actualizar `docs/content/content-system.md` con `modified_date` editorial y preflight SEO/AEO por blogpost.
  - actualizar `docs/visual/interaction-spec.md` con regla de first viewport visible por defecto.
  - actualizar `docs/delivery/release-checklist.md` si faltan checks de schema/robots/performance.
- Dependencias:
  - decisiones `1A`, `2C`, `3A` registradas.
- Validaciones:
  - revision documental.
- Criterio de cierre:
  - docs no contradicen las fases runtime posteriores.

### Item 2 - Schema SEO/AEO

- Objetivo:
  - emitir schema coherente y estable para entidad personal y blog posts.
- Tareas:
  - agregar helper o props para JSON-LD extra en `Layout.astro`.
  - incluir `github_url` en `sameAs` sin hacerlo canal visible de Contact.
  - agregar `@id` estable a `Person`.
  - revisar `ProfilePage` para referenciar la entidad estable.
  - agregar `modified_date` opcional a schema de contenido.
  - emitir `BlogPosting` en posts EN/ES con `datePublished`, `dateModified`, `mainEntityOfPage`, `author.@id`, `image`, `inLanguage`.
- Dependencias:
  - Item 1 docs.
- Validaciones:
  - `npm test`
  - `npm run build`
  - inspeccion HTML generada de un post EN y ES.
- Criterio de cierre:
  - schema valido y sin claims invisibles.

### Item 3 - Robots IA

- Objetivo:
  - alinear `robots.txt` con decision `2C`.
- Tareas:
  - permitir search bots y fetchers user-triggered segun doc.
  - restringir `GPTBot`, `ClaudeBot` y `Google-Extended`.
  - mantener `Googlebot` permitido por estrategia SEO/AEO en Google Search.
  - conservar sitemap canonico.
- Dependencias:
  - Item 1 docs.
- Validaciones:
  - revision manual de `public/robots.txt`.
- Criterio de cierre:
  - search, training y user-fetch quedan diferenciados.

### Item 4 - First viewport performance

- Objetivo:
  - quitar dependencia de AOS/JS para contenido critico del primer viewport.
- Tareas:
  - quitar `data-aos` del wrapper hero.
  - evitar `data-aos` automatico en botones criticos del hero mediante ajuste de `Buttons.astro` o props.
  - diferir AOS/GSAP solo si puede hacerse sin romper motion; si no, dejar hallazgo documentado.
  - revisar estrategia de fuentes sin introducir complejidad excesiva.
- Dependencias:
  - Item 1 docs.
- Validaciones:
  - `npm test`
  - `npm run build`
  - revision visual local/manual.
- Criterio de cierre:
  - headline y CTAs son visibles sin JS/AOS.

### Item 5 - Optimizacion general de imagenes

- Objetivo:
  - reducir assets sobredimensionados y agregar dimensiones explicitas donde corresponda.
- Tareas:
  - usar `Image` de Astro en work cards home/work.
  - usar `Image` de Astro o dimensiones explicitas en logos/wordmark/experience si no deforma layout.
  - definir `widths`/`sizes` realistas.
  - mantener lazy loading en assets below-the-fold.
- Dependencias:
  - Item 4 al menos cerrado o registrado para no confundir LCP.
- Validaciones:
  - `npm test`
  - `npm run build`
  - revision visual.
- Criterio de cierre:
  - imagenes principales reportadas por PageSpeed quedan tratadas sin regresion visual.

### Item 6 - Skills editoriales

- Objetivo:
  - evitar drift SEO/AEO en futuros posts.
- Tareas:
  - actualizar `blog-new` para `modified_date` opcional y criterios de metadata.
  - actualizar `blog-edit` con regla de edicion sustancial.
  - actualizar `blog-preflight` con checks SEO/AEO y schema readiness.
  - actualizar `blog-unpublish` para mencionar rutas/sitemap/schema de posts no publicados.
- Dependencias:
  - Items 1 y 2.
- Validaciones:
  - revision documental de skills.
  - `npm test`.
- Criterio de cierre:
  - skills reflejan las reglas implementadas.

---

## 4. Fases

### Fase 1 - Contratos y documentos

- Objetivo:
  - sincronizar docs contractuales/auxiliares antes de runtime.
- Items cubiertos:
  - Item 1.
- Tareas:
  - editar SEO spec, content system, interaction spec y release checklist.
- Validaciones:
  - revision documental.
- Criterio de cierre:
  - no hay drift contractual para fases 2-6.

### Fase 2 - Schema SEO/AEO

- Objetivo:
  - implementar entidad estable y `BlogPosting`.
- Items cubiertos:
  - Item 2.
- Tareas:
  - modificar content schema, Layout/schema helpers, blog detail pages y sameAs.
- Validaciones:
  - `npm test`
  - `npm run build`
  - inspeccion HTML.
- Criterio de cierre:
  - post EN/ES emiten schema correcto.

### Fase 3 - Robots IA

- Objetivo:
  - aplicar decision `2C` en robots.
- Items cubiertos:
  - Item 3.
- Tareas:
  - editar `public/robots.txt`.
- Validaciones:
  - revision manual.
- Criterio de cierre:
  - search/user-fetch permitido, training restringido.

### Fase 4 - First viewport performance

- Objetivo:
  - eliminar dependencia de AOS/JS en hero y CTAs criticos.
- Items cubiertos:
  - Item 4.
- Tareas:
  - ajustar Hero/Buttons/Layout/scripts/fonts si aplica.
- Validaciones:
  - `npm test`
  - `npm run build`
  - revision visual.
- Criterio de cierre:
  - contenido critico visible sin JS/AOS.

### Fase 5 - Optimizacion general de imagenes

- Objetivo:
  - optimizar work cards, logos y dimensiones.
- Items cubiertos:
  - Item 5.
- Tareas:
  - reemplazar img manuales por `Image`/dimensiones donde aplique.
- Validaciones:
  - `npm test`
  - `npm run build`
  - revision visual.
- Criterio de cierre:
  - no hay deformacion y se reducen assets sobredimensionados.

### Fase 6 - Skills editoriales

- Objetivo:
  - actualizar workflows editoriales locales.
- Items cubiertos:
  - Item 6.
- Tareas:
  - editar skills locales de blog.
- Validaciones:
  - revision documental de skills.
  - `npm test`.
- Criterio de cierre:
  - skills sostienen las reglas SEO/AEO nuevas.

---

## 5. Split check

- [x] el batch sigue legible
- [x] no mezcla lifecycles incompatibles
- [x] no aparecen dependencias internas complejas si se ejecuta por fases

---

## 6. Validaciones globales

- [x] validacion documental global
- [x] `npm test`
- [x] `npm run build`
- [x] revision HTML generada
- [x] revision visual/manual
- [x] PageSpeed externo registrado como diferido por requerir medicion externa/post-deploy
- [x] Rich Results/schema validator externo registrado como diferido por requerir herramienta externa

---

## 7. Criterio de cierre

- [x] todos los items mantienen trazabilidad al plan
- [x] las validaciones son reales
- [x] el batch sigue sin requerir split

---

## 8. Registro de cambios

- Fecha: `2026-05-24`
  - cambio: creacion de tasks por fases.
  - razon: desbloquear backlogs y ejecucion controlada.
