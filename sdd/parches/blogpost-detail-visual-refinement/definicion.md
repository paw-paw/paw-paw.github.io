# Definicion: blogpost-detail-visual-refinement

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

- Change id: `blogpost-detail-visual-refinement`
- Program id: `none`
- Patch kind: `spec`
- Lifecycle: `spec-anchored`
- Estado: `active`
- Fuente: `_inbox/handoff_blogpost_detail_visual_refinement.md`
- Ultima actualizacion: `2026-05-19`
- Owner: `usuario`

---

## 1. Objetivo

Refinar visualmente la pantalla `/blog/[slug]` despues del rediseño editorial ya implementado, sin reabrir el cambio completo. El cierre debe dejar un hero mas equilibrado, `Key idea` como primer bloque del area de lectura y `blockquote` con mayor presencia editorial sobria. El cambio debe preservar el modelo `blog_post`, dark mode, mobile, paridad `en`/`es` y el rail `On this page` derivado de headings reales.

---

## 2. No objetivos

- [x] Cambiar el schema de `blog_post` o crear campos como `key_idea`.
- [x] Crear rutas, taxonomias, share buttons, fuentes visibles o referencias nuevas.
- [x] Redisenar `blog index`, paginas de categoria, navbar o footer.
- [x] Reescribir editorialmente los posts publicados.
- [x] Cambiar SEO estructural, deployment o i18n.

---

## 3. Fuentes de verdad aplicables

- `docs/README.md`
- `AGENTS.md`
- documentos contractuales aplicables:
  - `docs/architecture/site-architecture.md`
  - `docs/content/content-system.md`
  - `docs/visual/visual-system.md`
  - `docs/architecture/i18n-spec.md`
- documentos auxiliares aplicables:
  - `sdd/parches/blog-post-detail-editorial-redesign/cierre.md`
- fuentes externas o handovers:
  - `_inbox/handoff_blogpost_detail_visual_refinement.md`
  - `sdd/parches/blogpost-detail-visual-refinement/handover.md`

---

## 4. Alcance

### Si entra

- [x] Ajustar la estructura contractual de `/blog/[slug]` para ubicar `Key idea` en el area de lectura.
- [x] Reducir el peso visual del H1 del detail sin afectar otros H1 del sitio.
- [x] Ajustar el panel de imagen hero hacia una presencia mas equilibrada.
- [x] Mover `Key idea` desde el hero hacia la columna principal del reading layout.
- [x] Alinear `Key idea` y `On this page` en desktop.
- [x] Reforzar `blockquote` con serif, italic, mayor tamano y tratamiento visual sobrio.
- [x] Validar build y registrar revision visual pendiente si no hay navegador automatizado disponible.

### Fuera de alcance

- [x] Cambios de contenido o metadata en posts.
- [x] Cambios en componentes de blog index o category pages.
- [x] Nuevas abstracciones compartidas salvo necesidad tecnica minima.

---

## 5. Superficies afectadas

### Docs

- `docs/architecture/site-architecture.md`

### Codigo o contenido

- `src/pages/en/blog/[slug].astro`
- `src/pages/es/blog/[slug].astro`
- `src/styles/global.css`

### Configuracion o validacion

- `package.json` solo como fuente de scripts disponibles.

---

## 6. Decisiones conocidas

- decision: `Key idea` sigue usando `excerpt`, pero pasa a pertenecer visualmente al area de lectura.
  - razon: el handoff lo fija como criterio de balance y no introduce metadata nueva.
  - documentos o areas afectadas: `docs/architecture/site-architecture.md`, rutas detail EN/ES.
- decision: el ajuste del H1 debe ser local al detail.
  - razon: el problema detectado es compositivo en `/blog/[slug]`, no una redefinicion global de escala tipografica.
  - documentos o areas afectadas: `src/pages/*/blog/[slug].astro`, `src/styles/global.css`.
- decision: el aspect ratio de imagen puede moverse a `3 / 2` si ayuda al balance.
  - razon: el handoff lo permite como ajuste opcional y no cambia assets ni metadata.
  - documentos o areas afectadas: `src/styles/global.css`.

---

## 7. Assumptions

- No critical assumptions.
- La review visual automatizada puede quedar diferida si el entorno no ofrece navegador MCP o preview verificable.

---

## 8. Decisiones abiertas

- No hay decisiones abiertas pendientes para pasar a `sdd-plan`.

---

## 9. Riesgos

- riesgo: el ajuste local de H1 puede requerir ajuste visual fino despues de ver imagenes reales en navegador.
  - impacto: menor; no afecta schema ni build.
  - mitigacion: registrar revision visual manual pendiente si no se puede ejecutar browser review.
- riesgo: un `blockquote` mas expresivo puede volverse ornamental.
  - impacto: incoherencia con el sistema visual sobrio.
  - mitigacion: usar serif fallback, borde/acento controlado y superficies del sistema.

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

- Fecha: `2026-05-19`
  - cambio: creacion inicial de definicion desde handoff.
  - razon: iniciar flujo SDD para refinamiento visual acotado.
