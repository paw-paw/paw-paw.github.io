# Plan: blog-index-proportion-refinement

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

- Change id: `blog-index-proportion-refinement`
- Patch kind: `spec`
- Lifecycle: `spec-first`
- Estado: `ready-for-tasks`
- Ultima actualizacion: `2026-05-18`
- Owner: `usuario`
- Depende de: `sdd/parches/blog-index-proportion-refinement/definicion.md`
- Desbloquea: `sdd-tasks`

---

## 1. Fuente de verdad aplicable

- `docs/README.md`
- `AGENTS.md`
- `sdd/parches/blog-index-proportion-refinement/patch.yaml`
- `sdd/parches/blog-index-proportion-refinement/definicion.md`
- `sdd/parches/blog-index-proportion-refinement/decision.log`
- documentos contractuales aplicables:
  - `docs/architecture/site-architecture.md`
  - `docs/content/content-system.md`
  - `docs/visual/visual-system.md`
  - `docs/architecture/i18n-spec.md`
- documentos auxiliares aplicables:
  - `docs/content/content-master.md`
  - `docs/visual/asset-plan.md`

---

## 2. Lectura brownfield

- estructura existente:
  - `/en/blog/` y `/es/blog/` comparten la misma composicion: `BlogIntroPanel`, `BlogFeaturedPanel` y grilla de `BlogCard`.
  - `EditorialBackgroundStrip` ya existe dentro del intro y renderiza seis logos aprobados.
  - `featured` y cards regulares leen el mismo campo `excerpt` del modelo `blog_post`.
- patrones existentes:
  - la narrativa del blog ya esta contratada en docs y no necesita reescritura.
  - la UI concentra ajustes de proporcion en `src/styles/global.css`; los componentes blog son simples y composicionales.
  - los skills editoriales del blog ya consultan `docs/content/content-system.md` como contrato activo.
- deuda o drift relevante:
  - `content-system.md` y `content-master.md` hablan de `excerpt breve`, pero no fijan una guia cuantitativa.
  - la UI clampa `excerpt` a `2` lineas tanto en featured como en cards, aunque los excerpts publicados actuales rondan `23–29` palabras.
  - el featured actual y el bloque `Editorial Background` quedan subrepresentados respecto al objetivo visual descrito en el handover.
- restricciones tecnicas:
  - no se cambia taxonomy, routing, i18n, SEO estructural, schema ni narrativa aprobada.
  - la paridad `en` / `es` debe conservarse porque ambas rutas comparten componentes y reglas editoriales.
  - la mejora visual debe validarse en varios breakpoints; `1920x1080` funciona como referencia, no como unico objetivo.

---

## 3. Assumptions

- assumption: los excerpts publicados actuales son una muestra valida de la densidad editorial buscada.
  - clasificacion: `accepted`
  - evidencia: handover y posts publicados existentes.
- assumption: la mejora puede resolverse con docs, skills y CSS/componentes existentes sin cambiar schema.
  - clasificacion: `accepted`
  - evidencia: `src/content.config.ts` no impone longitud y la definicion excluye cambios de modelo salvo decision posterior.
- assumption: la nueva guia editorial debe ser suave, no un hard limit bloqueante de schema.
  - clasificacion: `accepted`
  - evidencia: `decision.log` define guia cuantitativa suave y el patch excluye reescritura masiva de excerpts.

---

## 4. Zonas afectadas

### Docs

- `docs/content/content-system.md`
- `docs/content/content-master.md`

### Codigo

- `src/styles/global.css`
- `src/components/blog/EditorialBackgroundStrip.astro`
- `src/components/blog/BlogFeaturedPanel.astro`
- `src/components/blog/BlogCard.astro`

### Skills

- `.codex/skills/blog-new/SKILL.md`
- `.codex/skills/blog-edit/SKILL.md`
- `.codex/skills/blog-preflight/SKILL.md`

### Configuracion, tests o build

- `package.json`
- `tests/public-release-closure.test.mjs`
- validacion manual de `/en/blog/` y `/es/blog/`

---

## 5. Bloques de implementacion

### Bloque 1 - Reconciliar politica editorial de `excerpt`

- Objetivo: convertir la nocion de `excerpt breve` en una guia cuantitativa suave alineada con la UI prevista.
- Superficies afectadas:
  - `docs/content/content-system.md`
  - `docs/content/content-master.md`
  - `.codex/skills/blog-new/SKILL.md`
  - `.codex/skills/blog-edit/SKILL.md`
  - `.codex/skills/blog-preflight/SKILL.md`
- Cambios esperados:
  - declarar un rango recomendado para `excerpt` sin endurecer schema ni convertirlo en limite de publicacion automatico.
  - hacer que los skills creen, editen y preflighteen posts usando esa misma guia.
- Dependencias:
  - decisiones ya registradas en `decision.log`.
- Riesgos:
  - sobreespecificar una guia demasiado estrecha.
  - dejar docs y skills con formulaciones divergentes.
- Validaciones asociadas:
  - revision documental de consistencia entre contratos y skills.

### Bloque 2 - Ajustar la composicion visible del `blog index`

- Objetivo: cerrar mejor el primer viewport, dar mas presencia a `Editorial Background` y representar mejor los excerpts.
- Superficies afectadas:
  - `src/styles/global.css`
  - `src/components/blog/EditorialBackgroundStrip.astro`
  - `src/components/blog/BlogFeaturedPanel.astro`
  - `src/components/blog/BlogCard.astro`
- Cambios esperados:
  - featured con `6` lineas visibles de excerpt.
  - cards regulares alineadas con la nueva politica editorial.
  - logos editoriales con mayor escala efectiva pero aun subordinados al intro.
  - portada superior con proporcion suficiente para evitar que `Latest Writing` se asome en el viewport desktop de referencia.
- Dependencias:
  - Bloque 1 cerrado para que la UI implemente una politica ya reconciliada.
- Riesgos:
  - ganar altura desktop degradando tablet o mobile.
  - hacer que los logos pasen de apoyo contextual a protagonista.
- Validaciones asociadas:
  - `npm run build`
  - `npm test`
  - revision visual de `/en/blog/` y `/es/blog/` en `375px`, `768px` y `1440px`.

---

## 6. Datos, schemas y contratos

- Contratos documentales afectados:
  - `docs/content/content-system.md`
  - `docs/content/content-master.md`
- Datos o contenido afectados:
  - politica editorial de `excerpt`
  - representacion visible de `excerpt` en featured y cards regulares
- Schemas o modelos afectados:
  - ninguno; `src/content.config.ts` conserva `excerpt: z.string()`.
- Compatibilidad esperada:
  - posts existentes siguen siendo validos.
  - la politica nueva orienta autoria y revision futura sin exigir migracion masiva.

---

## 7. Validaciones previstas

### Documentales

- [ ] verificar alineacion con `docs/README.md`
- [ ] verificar consistencia entre `content-system.md`, `content-master.md` y skills editoriales del blog

### Tecnicas

- [ ] `npm test`
- [ ] `npm run build`
- [ ] confirmar que `npm run lint` no existe antes de reportarlo como ausente

### Manuales

- [ ] revisar `/en/blog/` y `/es/blog/` en `375px`, `768px` y `1440px`
- [ ] confirmar que el primer viewport desktop ya no deja asomar `Latest Writing`
- [ ] confirmar que logos y excerpts ganan presencia sin romper jerarquia ni legibilidad

---

## 8. Riesgos y mitigaciones

- riesgo: usar `1920x1080` como target unico.
  - impacto: una mejora local podria producir regresiones responsive.
  - mitigacion: validar varios breakpoints y tratar la captura como referencia, no como contrato unico.
- riesgo: convertir la guia de excerpt en una regla mas dura que la decidida.
  - impacto: futuros posts podrian forzarse artificialmente.
  - mitigacion: documentar un rango recomendado y reservar los bloqueos a schema/invariantes ya existentes.
- riesgo: alterar la narrativa del blog index al perseguir solo proporcion.
  - impacto: el refinamiento se convertiria en rediseño encubierto.
  - mitigacion: limitar cambios a densidad, clamps y escala visual sin reescribir copy ni arquitectura.

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

- Fecha: `2026-05-18`
  - cambio: creacion inicial del plan tecnico brownfield.
  - razon: traducir la definicion aprobada a superficies, bloques y validaciones ejecutables.
