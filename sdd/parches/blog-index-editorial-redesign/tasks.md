# Tasks: blog-index-editorial-redesign

Usa este documento para convertir el plan aprobado del patch `blog-index-editorial-redesign` en fases macro y tareas ejecutables.

---

## Estado

- Change id: `blog-index-editorial-redesign`
- Patch kind: `spec`
- Lifecycle: `spec-first`
- Estado: `ready-for-backlog`
- Ultima actualizacion: `2026-05-18`
- Owner: `usuario`

---

## 1. Fuente de verdad aplicable

- `docs/README.md`
- `sdd/parches/blog-index-editorial-redesign/patch.yaml`
- `sdd/parches/blog-index-editorial-redesign/definicion.md`
- `sdd/parches/blog-index-editorial-redesign/plan.md`
- `sdd/parches/blog-index-editorial-redesign/decision.log`

---

## 2. Preflight

- [x] `definicion.md` vigente
- [x] `plan.md` vigente
- [x] assumptions criticas clasificadas antes de dividir fases
- [x] no hay decisiones abiertas bloqueantes

---

## 3. Resumen del plan

- resumen:
  - primero se reconcilian los contratos del blog index;
  - despues se promueven los logos editoriales aprobados a runtime;
  - luego se implementa el nuevo intro localizado;
  - despues se ajustan featured y cards regulares;
  - finalmente se valida la superficie completa en docs, build y navegador.

---

## 4. Fases

### Fase 1 - Sincronizacion contractual del blog index

- Objetivo:
  - dejar alineados los documentos que gobiernan el speech, la jerarquia visual resumida del index y la metadata SEO antes de tocar runtime.
- Origen en `plan.md`:
  - `Bloque 1 - Sincronizacion contractual del blog index`
- Precondiciones:
  - decisiones de intake y plan registradas.
- Tareas:
  - actualizar `content-system` para distinguir modelo editorial general vs. presentacion resumida del `blog index`.
  - actualizar `content-master` con el nuevo speech aprobado de `/blog`, reglas del featured teaser y alcance de `Editorial Background`.
  - actualizar `seo-spec` para que metadata e intro visible cuenten la misma historia.
  - verificar que la nueva redaccion siga respondiendo a `site-architecture` y `portfolio-strategy`.
- Archivos o areas probables:
  - `docs/content/content-system.md`
  - `docs/content/content-master.md`
  - `docs/delivery/seo-spec.md`
- Validaciones:
  - revision documental cruzada con `docs/README.md`, `docs/architecture/site-architecture.md` y `docs/strategy/portfolio-strategy.md`.
- Criterio de cierre:
  - los contratos ya describen sin contradiccion el nuevo comportamiento esperado de `/blog`.

### Fase 2 - Promocion de assets editoriales aprobados

- Objetivo:
  - convertir los seis logos del inbox en assets runtime gobernados por el repo.
- Origen en `plan.md`:
  - `Bloque 2 - Promocion controlada de assets editoriales`
- Precondiciones:
  - fase 1 cerrada.
- Tareas:
  - registrar los nuevos logos editoriales en `asset-plan`.
  - promover los seis assets aprobados desde `_inbox` a una ubicacion coherente bajo `src/assets/`.
  - dejar definido el tratamiento esperado para su uso en light/dark mode dentro del sistema visual vigente.
- Archivos o areas probables:
  - `docs/visual/asset-plan.md`
  - `src/assets/...`
- Validaciones:
  - revision documental contra `visual-system`.
  - revision visual posterior de assets dentro de la superficie implementada; si ya hay render temporal disponible, revisar legibilidad en ambos temas.
- Criterio de cierre:
  - los logos dejan de ser solo staging y pasan a estar documentados y disponibles para runtime.

### Fase 3 - Nuevo intro editorial localizado

- Objetivo:
  - rehacer el intro de `/blog` con speech alineado, `Editorial Background` y anchor integrado.
- Origen en `plan.md`:
  - `Bloque 3 - Reestructuracion del intro de /blog`
- Precondiciones:
  - fases 1 y 2 cerradas.
- Tareas:
  - actualizar strings EN/ES del blog conforme al speech documental aprobado.
  - introducir la estructura necesaria para `Editorial Background`.
  - añadir el enlace `Explore articles ↓` hacia `#latest-writing`.
  - conservar composicion y paridad real entre `/en/blog/` y `/es/blog/`.
- Archivos o areas probables:
  - `src/pages/en/blog/index.astro`
  - `src/pages/es/blog/index.astro`
  - `src/i18n/en.json`
  - `src/i18n/es.json`
  - nuevo componente acotado y/o modulo de datos local para el intro
  - `src/styles/global.css`
- Validaciones:
  - revision visual/manual responsive, foco de teclado y dark mode.
  - uso de `astro-pages-verify` tras la implementacion visible para revisar rutas, renderizado y paridad basica de `/en/blog/` y `/es/blog/`.
- Criterio de cierre:
  - ambos locales muestran el nuevo intro con speech coherente, strip editorial y anchor funcional.

### Fase 4 - Refinamiento de featured y cards del index

- Objetivo:
  - aplicar la jerarquia visual ligera del index a featured y cards regulares.
- Origen en `plan.md`:
  - `Bloque 4 - Ajuste de featured y cards regulares`
- Precondiciones:
  - fase 1 cerrada.
- Tareas:
  - actualizar featured para mostrar `category` primaria, excerpt breve y CTA textual.
  - simplificar cards regulares para retirar CTA separada, usar flecha inline en titulo y mantener metadata compacta.
  - ajustar hover, focus y reduced motion sin introducir anclas anidadas ni perder claridad de interaccion.
- Archivos o areas probables:
  - `src/components/blog/BlogFeaturedPanel.astro`
  - `src/components/blog/BlogCard.astro`
  - `src/styles/global.css`
- Validaciones:
  - `npm run build`
  - revision manual de interaccion y accesibilidad basica.
  - uso de `astro-pages-verify` despues de los cambios visibles para revisar renderizado de cards, metadata y comportamiento general del index en ambas rutas.
- Criterio de cierre:
  - featured y cards expresan la nueva jerarquia del index sin romper accesibilidad ni sistema visual.

### Fase 5 - Verificacion integrada y cierre tecnico

- Objetivo:
  - confirmar que docs, assets, i18n, SEO y UI ya forman un sistema coherente.
- Origen en `plan.md`:
  - `Bloque 5 - Verificacion integrada de la superficie`
- Precondiciones:
  - fases 1 a 4 cerradas.
- Tareas:
  - ejecutar validaciones tecnicas globales aplicables.
  - verificar coherencia final entre copy visible y metadata SEO.
  - revisar `/en/blog/` y `/es/blog/` en desktop/mobile y light/dark.
  - documentar cualquier riesgo residual o drift detectado.
- Archivos o areas probables:
  - docs actualizados del patch
  - superficies visibles `/en/blog/` y `/es/blog/`
- Validaciones:
  - `npm run build`
  - `npm run test` si las areas tocadas intersectan tests existentes.
  - uso de `astro-pages-verify` como verificacion final especializada de la superficie Astro/GitHub Pages antes de considerar el cambio listo para cierre.
- Criterio de cierre:
  - no quedan contradicciones documentales ni divergencias visibles relevantes entre locales, SEO y UI.

---

## 5. Dependencias entre fases

- Fase 1 bloquea:
  - Fase 2
  - Fase 3
  - Fase 4
- Fase 2 bloquea:
  - Fase 3
- Fases 3 y 4 bloquean:
  - Fase 5

---

## 6. Decisiones y bloqueos

- decisiones abiertas bloqueantes:
  - ninguna
- decisiones abiertas no bloqueantes:
  - ninguna

---

## 7. Validaciones globales

- [ ] validacion documental de contratos actualizados
- [ ] `npm run build`
- [ ] `npm run test` cuando corresponda por las superficies tocadas
- [ ] `astro-pages-verify` para cambios visibles del blog index y verificacion final de `/en/blog/` y `/es/blog/`

---

## 8. Criterio de cierre

- [x] cada fase tiene objetivo, precondiciones, tareas, validaciones y criterio de cierre
- [x] cada tarea es trazable al `plan.md`
- [x] las validaciones son reales

---

## 9. Registro de cambios

- Fecha: `2026-05-18`
  - cambio: creacion inicial de fases y tareas macro del patch.
  - razon: preparar la conversion del plan en backlogs ejecutables por fase.
