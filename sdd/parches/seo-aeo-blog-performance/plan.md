# Plan: SEO/AEO, blog metadata y performance

---

## Estado

- Change id: `seo-aeo-blog-performance`
- Patch kind: `batch`
- Lifecycle: `spec-first`
- Estado: `ready-for-tasks`
- Ultima actualizacion: `2026-05-24`
- Owner: `paw-paw`

---

## 1. Fuente de verdad aplicable

- `docs/README.md`
- `AGENTS.md`
- `sdd/parches/seo-aeo-blog-performance/patch.yaml`
- `sdd/parches/seo-aeo-blog-performance/definicion.md`
- `sdd/parches/seo-aeo-blog-performance/decision.log`
- `docs/strategy/portfolio-strategy.md`
- `docs/architecture/site-architecture.md`
- `docs/content/content-system.md`
- `docs/architecture/i18n-spec.md`
- `docs/delivery/deployment.md`
- `docs/delivery/seo-spec.md`
- `docs/delivery/release-checklist.md`
- `docs/visual/interaction-spec.md`

---

## 2. Lectura del batch

- lista cerrada de items:
  - contratos y documentacion SEO/AEO/performance
  - schema SEO/AEO
  - robots IA
  - first viewport performance
  - optimizacion general de imagenes
  - skills editoriales
- criterio global de cierre:
  - cada item debe cerrarse o diferirse explicitamente
  - no se deben crear `/about`, `/resume`, `/cv` ni `/work/[case-study]`
  - build/test deben pasar al cierre tecnico
  - validaciones manuales/externas deben quedar registradas
- dependencias internas detectadas:
  - schema depende de definir `modified_date`, entidad `@id` y `sameAs`
  - robots depende de decision humana sobre entrenamiento/model improvement
  - first viewport depende de resolver drift con `docs/visual/interaction-spec.md`
  - skills dependen de las reglas finales de schema y `modified_date`
- senales de split:
  - el batch es legible si se ejecuta por patches/fases independientes
  - no conviene mezclar schema, robots, performance, imagenes y skills en una misma fase de ejecucion

---

## 3. Assumptions

- `modified_date` sera opcional en el schema de contenido, con fallback tecnico a `publish_date` para `dateModified`.
- `BlogPosting` se emitira solo para posts publicados generados por `/en/blog/[slug]/` y `/es/blog/[slug]/`.
- `Person.@id` estable sera `https://pauloctuya.com/#person`.
- `Person.url` apuntara a `https://pauloctuya.com/en/`, porque `/en/` es la ruta localizada indexable default.
- No se agregaran rutas nuevas ni paginas de case study.
- La optimizacion de cache/CDN queda fuera de implementacion local.

---

## 4. Mapa por item

### Item 1 - Contratos y documentacion SEO/AEO/performance

- Cambio esperado:
  - actualizar documentos aplicables antes de tocar runtime cuando el cambio altere reglas de metadata, contenido editorial, robots o motion.
- Superficies afectadas:
  - `docs/delivery/seo-spec.md`
  - `docs/content/content-system.md`
  - `docs/visual/interaction-spec.md`
  - opcionalmente `docs/delivery/release-checklist.md`
- Dependencias:
  - decisiones humanas sobre robots de entrenamiento y GitHub visible.
  - reconciliacion de first viewport con la spec de interaction.
- Criterio de cierre:
  - docs reflejan las nuevas reglas o dejan diferimientos explicitos.
- Validaciones asociadas:
  - revision documental contra `docs/README.md`.

### Item 2 - Schema SEO/AEO

- Cambio esperado:
  - extender `Layout.astro` o crear helper reusable para emitir `Person`, `ProfilePage`, `WebSite` y `BlogPosting` con `@id` estable.
  - agregar soporte `modified_date` en `src/content.config.ts`.
  - pasar `BlogPosting` desde las paginas de detail EN/ES al layout o a un componente/schema helper.
  - incluir GitHub en `sameAs` si se confirma como perfil externo verificable.
- Superficies afectadas:
  - `src/layouts/Layout.astro`
  - `src/utils/me.ts`
  - `src/utils/seo.ts` o nuevo helper en `src/utils/`
  - `src/content.config.ts`
  - `src/pages/en/blog/[slug].astro`
  - `src/pages/es/blog/[slug].astro`
  - `src/content/blog/*.md`, solo si se decide poblar `modified_date`
- Dependencias:
  - resuelta por decision `1A`: GitHub entra en `sameAs`, sin agregarlo a Contact en este patch.
- Criterio de cierre:
  - `BlogPosting` valido en un post EN y ES.
  - `author` referencia `https://pauloctuya.com/#person`.
  - `datePublished` y `dateModified` son consistentes.
- Validaciones asociadas:
  - `npm run build`
  - `npm test`
  - inspeccion HTML generada
  - validador externo de schema/Rich Results cuando sea posible.

### Item 3 - Robots IA

- Cambio esperado:
  - actualizar `public/robots.txt` con bloques diferenciados para search, entrenamiento y fetch iniciado por usuario.
  - documentar en `docs/delivery/seo-spec.md` que `Googlebot` controla elegibilidad en Google Search/AI Overviews/AI Mode, no `Google-Extended`.
- Superficies afectadas:
  - `public/robots.txt`
  - `docs/delivery/seo-spec.md`
- Dependencias:
  - resuelta por decision `2C`: permitir search/user-triggered fetchers y restringir entrenamiento/model improvement.
- Criterio de cierre:
  - robots distingue `OAI-SearchBot`, `PerplexityBot`, `Claude-SearchBot`, `GPTBot`, `ClaudeBot`, `Googlebot`, `Google-Extended` y user-triggered fetchers segun decision.
- Validaciones asociadas:
  - revision manual de `robots.txt`
  - `npm run build`, si docs/runtime cambian dentro del patch.

### Item 4 - First viewport performance

- Cambio esperado:
  - quitar dependencia de `data-aos` en hero y CTAs criticos.
  - asegurar que headline, subheadline, navbar y CTAs aparezcan sin JS.
  - auditar carga global de AOS/GSAP y fuentes criticas sin retirar GSAP por principio.
- Superficies afectadas:
  - `docs/visual/interaction-spec.md`
  - `src/components/sections/Hero.astro`
  - `src/components/ui/Buttons.astro`, si `data-aos` global en botones afecta CTAs criticos
  - `src/layouts/Layout.astro`
  - `src/scripts/animations.js`
  - `src/styles/global.css`
- Dependencias:
  - resuelta por decision `3A`: actualizar `docs/visual/interaction-spec.md` antes de tocar runtime de first viewport.
- Criterio de cierre:
  - first viewport no depende de AOS/JS para aparecer.
  - PageSpeed mobile se vuelve a medir o queda pendiente externo documentado.
- Validaciones asociadas:
  - `npm run build`
  - `npm test`
  - revision visual mobile/desktop
  - PageSpeed mobile externo.

### Item 5 - Optimizacion general de imagenes

- Cambio esperado:
  - reemplazar `<img>` manuales relevantes por `Image`/`Picture` de Astro donde aporte responsive sizing.
  - agregar `width`/`height` explicitos donde no deformen layout.
  - mantener lazy loading below-the-fold.
- Superficies afectadas:
  - `src/components/sections/Projects.astro`
  - `src/pages/en/work.astro`
  - `src/pages/es/work.astro`
  - `src/components/sections/Timeline.astro`
  - `src/pages/en/experience.astro`
  - `src/pages/es/experience.astro`
  - `src/components/ui/BrandLockup.astro`
  - `src/styles/global.css`
- Dependencias:
  - cierre o avance suficiente del first viewport, para no confundir mejoras de imagen con LCP del CTA.
- Criterio de cierre:
  - work cards y logos no sirven assets sobredimensionados innecesarios.
  - layout no se deforma en light/dark ni mobile/desktop.
- Validaciones asociadas:
  - `npm run build`
  - `npm test`
  - revision visual
  - PageSpeed para `/en/work/` si se quiere medir esta fase.

### Item 6 - Skills editoriales

- Cambio esperado:
  - actualizar skills para que nuevos posts, ediciones y preflight mantengan metadata SEO/AEO.
- Superficies afectadas:
  - `.codex/skills/blog-new/SKILL.md`
  - `.codex/skills/blog-edit/SKILL.md`
  - `.codex/skills/blog-preflight/SKILL.md`
  - `.codex/skills/blog-unpublish/SKILL.md`
- Dependencias:
  - reglas finales de `modified_date` y `BlogPosting`.
- Criterio de cierre:
  - `blog-preflight` bloquea o reporta metadata minima.
  - `blog-edit` define cuando actualizar `modified_date`.
  - `blog-new` crea drafts compatibles.
  - `blog-unpublish` preserva que drafts no aparezcan en rutas/sitemap/schema.
- Validaciones asociadas:
  - revision documental de skills.
  - `npm test` si el cambio afecta tests o contratos validados.

---

## 5. Riesgos y split check

- riesgo: `docs/visual/interaction-spec.md` aprueba AOS como motor principal y hero con intensidad media, mientras el handoff pide retirar AOS del primer viewport.
  - impacto: drift docs-implementacion si se toca runtime sin actualizar contrato.
  - mitigacion: resolver como decision humana antes de `sdd-tasks` o aislar fase documental.
- riesgo: `docs/content/content-system.md` solo permite email, LinkedIn e Instagram como canales de contacto.
  - impacto: hacer GitHub visible en Contact podria contradecir la politica vigente.
  - mitigacion: decidir si GitHub va solo en `sameAs`, en Footer, o requiere cambio documental de canales.
- riesgo: bots de entrenamiento IA implican criterio de privacidad/licencia, no solo SEO.
  - impacto: robots podria permitir usos no deseados.
  - mitigacion: pedir decision humana antes de task breakdown.
- [x] el batch sigue legible
- [x] no mezcla lifecycles incompatibles
- [x] no presenta dependencias internas complejas si se ejecuta por fases separadas

---

## 6. Validaciones previstas

- [x] validacion documental global contra `docs/README.md`
- [x] `npm test`
- [x] `npm run build`
- [x] inspeccion de HTML generado para `/en/`, un post EN y un post ES
- [x] revision manual de `robots.txt`
- [x] revision visual mobile/desktop para performance/imagenes
- [x] PageSpeed externo para `/en/` y opcionalmente `/en/work/` registrado como diferido
- [x] Rich Results / schema validator externo para un post registrado como diferido

---

## 7. Decisiones humanas abiertas

- Estado: `none`

### Decision 1 - GitHub visible o solo schema

- Problema:
  - `github_url` existe en `src/utils/me.ts`, pero `docs/content/content-system.md` solo permite email, LinkedIn e Instagram como canales de la pagina de contacto.
- Opcion A - recomendada:
  - incluir GitHub en `sameAs` y revisar si ya aparece en Footer u otra superficie no-contact; no agregarlo a Contact en este patch.
- Opcion B:
  - incluir GitHub en `sameAs` y actualizar docs para permitirlo como canal visible.
- Opcion C:
  - no incluir GitHub hasta decidir una politica publica de perfiles tecnicos.
- Resolucion:
  - `1A`: incluir GitHub en `sameAs`; no agregarlo a Contact en este patch.

### Decision 2 - Bots de entrenamiento IA

- Problema:
  - search bots y user-triggered fetchers apoyan visibilidad/recuperacion; `GPTBot`, `ClaudeBot` y `Google-Extended` tocan uso para entrenamiento o sistemas generativos fuera del search normal.
- Opcion A - recomendada:
  - permitir search/user-triggered fetchers y mantener entrenamiento permitido solo si esa exposicion es aceptada explicitamente.
- Opcion B:
  - permitir todo por maxima visibilidad y reutilizacion.
- Opcion C:
  - permitir search/user-triggered fetchers, restringir entrenamiento/model improvement.
- Resolucion:
  - `2C`: permitir search/user-triggered fetchers y restringir entrenamiento/model improvement.

### Decision 3 - Sync de interaction spec antes de performance

- Problema:
  - `docs/visual/interaction-spec.md` aprueba AOS como motor principal y hero con intensidad media; quitar AOS del hero por performance modifica esa regla visible.
- Opcion A - recomendada:
  - actualizar primero `docs/visual/interaction-spec.md` para declarar que el primer viewport debe ser visible por defecto y no depender de AOS.
- Opcion B:
  - tratarlo como ajuste tecnico sin cambio documental, aceptando drift temporal.
- Opcion C:
  - no tocar AOS del hero y enfocar performance en fonts/scripts hasta nueva decision.
- Resolucion:
  - `3A`: actualizar docs primero para declarar que el primer viewport debe ser visible por defecto y no depender de AOS.

---

## 8. Criterio de cierre tecnico

- [x] la lista de items sigue cerrada
- [x] cada item conserva criterio de cierre
- [x] el criterio global de cierre sigue vigente
- [x] assumptions criticas resueltas, aceptadas o escaladas
- [x] no hay senales de split sin resolver

Este plan queda listo para `sdd-tasks`.

---

## 9. Registro de cambios

- Fecha: `2026-05-24`
  - cambio: creacion de plan tecnico batch.
  - razon: convertir la definicion en un mapa brownfield antes de task breakdown.
- Fecha: `2026-05-24`
  - cambio: cierre de decisiones humanas y cambio de estado a `ready-for-tasks`.
  - razon: el usuario eligio `1A`, `2C`, `3A`.
