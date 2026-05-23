# Plan: blogpost-detail-visual-refinement

Usa este documento para convertir la definicion del patch en un plan tecnico brownfield.

---

## Estado

- Change id: `blogpost-detail-visual-refinement`
- Patch kind: `spec`
- Lifecycle: `spec-anchored`
- Estado: `ready-for-tasks`
- Ultima actualizacion: `2026-05-19`
- Owner: `usuario`
- Depende de: `blog-post-detail-editorial-redesign` cerrado
- Desbloquea: `tasks.md`

---

## 1. Fuente de verdad aplicable

- `docs/README.md`
- `sdd/parches/blogpost-detail-visual-refinement/patch.yaml`
- `sdd/parches/blogpost-detail-visual-refinement/definicion.md`
- documentos contractuales aplicables:
  - `docs/architecture/site-architecture.md`
  - `docs/content/content-system.md`
  - `docs/visual/visual-system.md`
  - `docs/architecture/i18n-spec.md`

---

## 2. Lectura brownfield

- estructura existente: rutas localizadas duplicadas para `en` y `es`, con `Key idea` actualmente dentro de `.blog-detail-hero-copy`.
- patrones existentes: CSS global con clases `blog-detail-*`, `blog-reading-layout`, `blog-prose` y `blog-toc`; `excerpt` ya se renderiza como `Key idea`; TOC ya sale de headings `h2`.
- deuda o drift relevante: `site-architecture.md` aun describe `Key idea` como parte del hero; debe reconciliarse antes de moverlo.
- restricciones tecnicas: no tocar schema ni contenido; mantener dark mode mediante variables CSS existentes; cambios locales al detail.

---

## 3. Assumptions

- No critical assumptions.

---

## 4. Zonas afectadas

### Docs

- `docs/architecture/site-architecture.md`

### Codigo

- `src/pages/en/blog/[slug].astro`
- `src/pages/es/blog/[slug].astro`
- `src/styles/global.css`

### Configuracion, tests o build

- `package.json` para scripts disponibles.

---

## 5. Bloques de implementacion

### Bloque 1 - Reconciliacion contractual puntual

- Objetivo: alinear `site-architecture` con la ubicacion nueva de `Key idea`.
- Superficies afectadas: `docs/architecture/site-architecture.md`.
- Cambios esperados: hero sin `Key idea`; reading area con `Key idea` como primer bloque junto al rail.
- Dependencias: definicion aprobada.
- Riesgos: sobredocumentar un ajuste visual puntual.
- Validaciones asociadas: lectura cruzada con `content-system`.

### Bloque 2 - Layout detail EN/ES

- Objetivo: mover `Key idea` a la columna principal del reading layout sin cambiar su fuente de datos.
- Superficies afectadas: rutas `src/pages/en/blog/[slug].astro` y `src/pages/es/blog/[slug].astro`.
- Cambios esperados: H1 con clase local compacta; `Key idea` antes de `<Content />`; rail alineado en la misma grid.
- Dependencias: bloque 1.
- Riesgos: divergencia entre locales.
- Validaciones asociadas: diff simetrico EN/ES y build.

### Bloque 3 - Ritmo visual y blockquotes

- Objetivo: ajustar CSS para hero mas balanceado, imagen `3 / 2`, `Key idea` en lectura y blockquotes editoriales.
- Superficies afectadas: `src/styles/global.css`.
- Cambios esperados: H1 local, spacing del hero, imagen, key idea, quote serif italic y responsive estable.
- Dependencias: bloque 2.
- Riesgos: ajustes visuales requieren review manual.
- Validaciones asociadas: `npm run build`, revision visual/manual.

---

## 6. Datos, schemas y contratos

- Contratos documentales afectados: `docs/architecture/site-architecture.md`.
- Datos o contenido afectados: ninguno.
- Schemas o modelos afectados: ninguno.
- Compatibilidad esperada: URLs, i18n y metadata se mantienen.

---

## 7. Validaciones previstas

### Documentales

- [x] verificar alineacion con `docs/README.md`

### Tecnicas

- [ ] `npm run build`
- [ ] `git diff --check`

### Manuales

- [ ] revision visual de `/en/blog/one-off-tourneys/` y `/es/blog/por-que-llevar-los-esports-al-centro-comercial/` en desktop/mobile, si el entorno lo permite

---

## 8. Riesgos y mitigaciones

- riesgo: no poder ejecutar browser review.
  - impacto: el balance visual fino queda pendiente de revision manual.
  - mitigacion: registrar el diferimiento y conservar build como validacion automatizada.

---

## 9. Decisiones humanas abiertas

- Estado: `none`

---

## 10. Criterio de cierre tecnico

- [x] el alcance respeta `definicion.md`
- [x] las zonas afectadas estan identificadas
- [x] los bloques de implementacion son secuenciables
- [x] las validaciones son reales y proporcionales
- [x] assumptions criticas resueltas, aceptadas o escaladas
- [x] no hay decisiones abiertas que bloqueen la division en fases

---

## 11. Registro de cambios

- Fecha: `2026-05-19`
  - cambio: creacion inicial del plan.
  - razon: preparar ejecucion acotada del refinamiento visual.
