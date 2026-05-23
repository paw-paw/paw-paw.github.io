# Definicion: blog-post-detail-editorial-redesign

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

- Change id: `blog-post-detail-editorial-redesign`
- Program id: `none`
- Patch kind: `spec`
- Lifecycle: `spec-anchored`
- Estado: `active`
- Fuente: `_inbox/blogpost_improvements/`
- Ultima actualizacion: `2026-05-18`
- Owner: `usuario`

---

## 1. Objetivo

Redefinir contractualmente y luego habilitar la futura implementacion de un `blog post detail` mas editorial, autoral y escaneable para `/blog/[slug]`, manteniendo el modelo de contenido actual y la coherencia visual del portfolio.  
El cambio debe resolver como conviven el hero abierto, el uso visible de `excerpt`, una lectura mas estructurada y una navegacion interna derivada de headings con los contratos actuales del blog.  
Al cerrar el cambio, la superficie de detalle debe quedar descrita de forma coherente en docs antes de que su implementacion pueda considerarse cerrada.

---

## 2. No objetivos

- [ ] Crear metadata nueva como `key_idea` o `sources`.
- [ ] Introducir botones de share, referencias visibles o nuevas taxonomias.
- [ ] Crear rutas nuevas o reabrir la arquitectura publica del blog fuera de `/blog/[slug]`.
- [ ] Convertir cada post en una landing compleja o romper el tono profesional del portfolio.
- [ ] Redisenar `blog index` o `blog category pages` salvo ajustes documentales estrictamente derivados si hicieran falta.

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
  - ninguno identificado como necesario para el intake inicial
- fuentes externas o handovers:
  - `_inbox/blogpost_improvements/handoff_blogpost_detail_redesign.md`
  - `_inbox/blogpost_improvements/ChatGPT Image 18 may 2026, 11_19_14 a.m..png`
  - `sdd/parches/blog-post-detail-editorial-redesign/handover.md`

---

## 4. Alcance

### Si entra

- [ ] Definir la nueva composicion objetivo del hero de `blog post detail`, incluyendo `Back to blog`, jerarquia editorial completa, metadata de fecha/lectura, `excerpt` visible e imagen en panel controlado.
- [ ] Definir el tratamiento esperado del cuerpo para una lectura mas abierta, con headings mas presentes y menor dependencia de una card unica dominante.
- [ ] Convertir en contrato que los articulos publicados usen `3-4` secciones principales y `1-2` `blockquote` por articulo.
- [ ] Definir el rail lateral `On this page` como parte obligatoria del detail, generado desde headings reales del cuerpo e incluyendo su comportamiento esperado por breakpoint.
- [ ] Mantener el modelo actual de `blog_post` sin nuevos campos obligatorios.
- [ ] Preservar dark mode, equivalencia entre `en` y `es`, jerarquia `Category -> Angle -> Domain` y politica i18n vigente del blog.

### Fuera de alcance

- [ ] Cambios al schema obligatorio de `blog_post` salvo decision posterior explicita.
- [ ] Nuevas rutas publicas, archives adicionales, breadcrumbs o navegacion editorial secundaria mas alla del rail interno del post.
- [ ] Redefinir la estrategia general del portfolio o el sistema visual base.
- [ ] Crear una politica editorial global para futuros formatos de post fuera de este nuevo estandar del detail.

---

## 5. Superficies afectadas

### Docs

- `docs/architecture/site-architecture.md`
- `docs/content/content-system.md`
- posiblemente `docs/visual/visual-system.md` si se decide volver contractual el nuevo patron de lectura editorial del detail
- posiblemente `docs/architecture/i18n-spec.md` solo si se requiere precisar comportamiento del rail o labels localizados

### Codigo o contenido

- `src/pages/en/blog/[slug].astro`
- `src/pages/es/blog/[slug].astro`
- `src/components/blog/BlogPostMeta.astro`
- `src/content/blog/*.md`
- `src/i18n/en.json`
- `src/i18n/es.json`
- posibles estilos o componentes locales del detalle, a definir en `sdd-plan`

### Configuracion o validacion

- validaciones reales disponibles del repo, a concretar en `sdd-plan`
- revision visual/manual de `/en/blog/[slug]/` y `/es/blog/[slug]/`

---

## 6. Decisiones conocidas

- decision: el handoff representa una evolucion intencional de la experiencia de `blog post detail`, no un simple ajuste cosmetico.
  - razon: cambia composicion, ritmo de lectura y navegacion interna de una superficie ya comprometida por contrato.
  - documentos o areas afectadas: `docs/architecture/site-architecture.md`, `docs/content/content-system.md`, futuras rutas `src/pages/*/blog/[slug].astro`
- decision: `excerpt` debe reutilizarse como resumen editorial visible del hero y no se crea `key_idea` en esta iteracion.
  - razon: el handoff lo fija explicitamente y el contrato actual ya define `excerpt` como resumen editorial compacto.
  - documentos o areas afectadas: `docs/content/content-system.md`, futura implementacion del hero del detail
- decision: el cambio debe preservar el modelo actual de `blog_post`, la jerarquia `Category -> Angle -> Domain` y la paridad entre `en` y `es`.
  - razon: son contratos vigentes del sistema editorial y de i18n.
  - documentos o areas afectadas: `docs/content/content-system.md`, `docs/architecture/i18n-spec.md`, `src/i18n/*`, rutas localizadas del blog
- decision: la nueva estructura editorial del cuerpo pasa a ser contractual para posts publicados.
  - razon: el usuario confirmo que `3-4` secciones principales y `1-2` `blockquote` no son solo una guia, sino parte del estandar deseado del blog.
  - documentos o areas afectadas: `docs/content/content-system.md`, `src/content/blog/*.md`
- decision: el rail `On this page` debe existir siempre en `blog post detail`.
  - razon: el usuario confirmo que la nueva experiencia debe incorporar navegacion interna obligatoria, no condicional.
  - documentos o areas afectadas: `docs/architecture/site-architecture.md`, `docs/content/content-system.md`, futuras rutas `src/pages/*/blog/[slug].astro`
- decision: el patch incluye la reestructuracion de todos los posts ya publicados.
  - razon: el usuario eligio cerrar el cambio con la experiencia editorial completa, no solo con el layout.
  - documentos o areas afectadas: `src/content/blog/*.md`, futura ejecucion del patch
- decision: el resumen visible del hero se rotulara como `Key idea` reutilizando `excerpt`.
  - razon: el usuario prefirio una etiqueta explicita aun sin introducir metadata nueva.
  - documentos o areas afectadas: `docs/content/content-system.md`, `src/i18n/en.json`, `src/i18n/es.json`, futura implementacion del hero

---

## 7. Assumptions

- El mockup recibido expresa direccion visual y jerarquia de informacion, no medidas obligatorias pixel-perfect.
- `On this page` puede derivarse de headings reales del markdown sin metadata manual adicional.
- La degradacion mobile del rail puede resolverse de forma mas simple que en desktop siempre que la lectura no empeore.
- En mobile, ocultar el rail es aceptable si preserva mejor la lectura.
- El label visible `Key idea` debe mapearse a `excerpt` y no implica un nuevo campo de contenido.
- Despues del retrofit inicial, el nuevo estandar editorial debe mantenerse como contrato firme con aplicacion editorial, no como plantilla mecanica identica entre posts.

---

## 8. Decisiones abiertas

- No hay decisiones abiertas pendientes para pasar a `sdd-plan`.

---

## 9. Riesgos

- riesgo: implementar el mockup sin actualizar contratos deja drift documental activo.
  - impacto: la entrega no podria considerarse cerrada bajo `AGENTS.md`.
  - mitigacion: resolver primero el estatus documental de estructura interna, rail y comportamiento esperado del detail.
- riesgo: convertir la nueva estructura obligatoria en una plantilla mecanica empobrezca algunos articulos.
  - impacto: posts forzados, headings decorativos o blockquotes de relleno.
  - mitigacion: documentar tambien criterios de calidad para que la obligacion estructural no se vuelva ornamental.
- riesgo: el rail lateral obligatorio dependa de una estructura de contenido que los posts actuales no cumplen de forma consistente.
  - impacto: el patch exige retrabajo editorial real sobre todo el corpus publicado.
  - mitigacion: incluir explicitamente ese retrofit en alcance y validarlo por locale.
- riesgo: el nuevo detail derive hacia una estetica de magazine ajena al portfolio.
  - impacto: incoherencia visual con el resto del sitio.
  - mitigacion: mantener la direccion dentro de `visual-system` vigente y usar el mockup como referencia, no como nueva fuente de verdad autonoma.

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
  - razon: formalizar el rediseño de `blog post detail` tras triage positivo.
- Fecha: `2026-05-18`
  - cambio: cierre de decisiones de intake tras cuestionario del usuario.
  - razon: dejar el patch listo para `sdd-plan` sin decisiones abiertas bloqueantes.
