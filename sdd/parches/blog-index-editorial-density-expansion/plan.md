# Plan: blog-index-editorial-density-expansion

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

- Change id: `blog-index-editorial-density-expansion`
- Patch kind: `spec`
- Lifecycle: `spec-anchored`
- Estado: `ready-for-tasks`
- Ultima actualizacion: `2026-05-18`
- Owner: `usuario`
- Depende de: `definicion.md`
- Desbloquea: `sdd-tasks`

---

## 1. Fuente de verdad aplicable

- `docs/README.md`
- `AGENTS.md`
- `sdd/parches/blog-index-editorial-density-expansion/patch.yaml`
- `sdd/parches/blog-index-editorial-density-expansion/definicion.md`
- `sdd/parches/blog-index-editorial-density-expansion/decision.log`
- documentos contractuales aplicables:
  - `docs/content/content-system.md`
  - `docs/visual/visual-system.md`
- documentos auxiliares aplicables:
  - `docs/content/content-master.md`
  - `docs/visual/asset-plan.md`

---

## 2. Lectura brownfield

- estructura existente:
  - el intro del `blog index` usa `BlogIntroPanel` y `EditorialBackgroundStrip`.
  - el featured vive en `BlogFeaturedPanel` y ya dispone de `category`, `angle`, `domain`, `publish_date`, `reading_time` y `header_image` desde `blog_post`.
  - `en` y `es` comparten la misma composicion y helpers i18n.
- patrones existentes:
  - `angle` y `domain` ya tienen labels localizados y son visibles en otras superficies del blog.
  - `formatBlogDate` ya existe en `src/utils/blog.ts`.
  - la direccion visual admite paneles editoriales con tags y metadata mono de bajo ruido.
- deuda o drift relevante:
  - los docs vigentes describen un featured mas compacto, con `category` visible y metadata larga omitida.
  - la eleccion del usuario reemplaza esa decision y exige sincronizacion documental previa.
  - el ultimo refinamiento proporcional dejo alturas mas generosas, pero no resolvio la alineacion vertical exacta ni la densidad deseada.
- restricciones tecnicas:
  - no se agregan nuevas entidades editoriales ni cambios de schema.
  - las cards regulares no entran en alcance.
  - `Editorial Background` debe seguir mostrando logos + periodos, sin nombres expandidos ni micro-cards.

---

## 3. Assumptions

- assumption: la jerarquia `Category -> Angle -> Domain` puede comprimirse en el featured con color secundario sin perder legibilidad.
  - clasificacion: `accepted`
- assumption: dos filas de logos son suficientes para densificar el bloque izquierdo sin requerir copy nuevo.
  - clasificacion: `accepted`
- assumption: recentrar los elementos flotantes puede resolverse ajustando la distribucion interna del intro y no la arquitectura global del primer viewport.
  - clasificacion: `accepted`

---

## 4. Zonas afectadas

### Docs

- `docs/content/content-system.md`
- `docs/content/content-master.md`

### Codigo

- `src/styles/global.css`
- `src/components/blog/EditorialBackgroundStrip.astro`
- `src/components/blog/BlogFeaturedPanel.astro`

### Configuracion, tests o build

- `package.json`
- `tests/public-release-closure.test.mjs`

---

## 5. Bloques de implementacion

### Bloque 1 - Reconciliar la nueva presentacion editorial del featured

- Objetivo: actualizar las fuentes vivas para permitir un featured mas rico en metadata.
- Superficies afectadas:
  - `docs/content/content-system.md`
  - `docs/content/content-master.md`
- Cambios esperados:
  - reemplazar la regla que limita el featured a `category` visible.
  - declarar fecha visible y tags `category`, `angle`, `domain` en el featured.
  - mantener la presentacion compacta de las cards regulares sin cambio.
- Dependencias:
  - decisiones ya registradas en `decision.log`.
- Riesgos:
  - ambiguedad entre featured y cards regulares.
- Validaciones asociadas:
  - lectura comparada de docs.

### Bloque 2 - Densificar el primer viewport

- Objetivo: implementar la composicion elegida en el intro y el featured.
- Superficies afectadas:
  - `src/styles/global.css`
  - `src/components/blog/EditorialBackgroundStrip.astro`
  - `src/components/blog/BlogFeaturedPanel.astro`
- Cambios esperados:
  - `Editorial Background` en grilla de dos filas.
  - mejor centrado vertical de los elementos flotantes del intro.
  - fecha bajo imagen en featured.
  - tags debajo del titulo, con `category` dominante y `angle` / `domain` secundarios.
- Dependencias:
  - Bloque 1 cerrado.
- Riesgos:
  - sobrecarga visual del featured.
  - quiebre de proporcion en mobile.
- Validaciones asociadas:
  - `npm test`
  - `npm run build`
  - revision visual de `/en/blog/` y `/es/blog/` en varios breakpoints.

---

## 6. Datos, schemas y contratos

- Contratos documentales afectados:
  - `docs/content/content-system.md`
  - `docs/content/content-master.md`
- Datos o contenido afectados:
  - presentacion visible de `angle`, `domain` y `publish_date` en el featured.
- Schemas o modelos afectados:
  - ninguno.
- Compatibilidad esperada:
  - todos los posts existentes siguen validos porque ya portan los campos requeridos.

---

## 7. Validaciones previstas

### Documentales

- [ ] verificar alineacion con `docs/README.md`
- [ ] verificar que featured y cards regulares queden descritos sin contradiccion

### Tecnicas

- [ ] `npm test`
- [ ] `npm run build`
- [ ] `git diff --check`

### Manuales

- [ ] revisar `/en/blog/` y `/es/blog/` en `375px`, `768px` y `1440px`
- [ ] confirmar que los elementos flotantes del intro se perciben centrados
- [ ] confirmar que el featured sigue leyendo como teaser antes que como ficha de metadata

---

## 8. Riesgos y mitigaciones

- riesgo: el featured se vuelva demasiado taxonomico.
  - impacto: pierde fuerza narrativa.
  - mitigacion: dejar `category` como tag dominante y degradar color/peso de los tags secundarios.
- riesgo: dos filas de logos introduzcan demasiado peso visual.
  - impacto: el intro compite con su propio copy.
  - mitigacion: mantener logo + periodo sin expandir nombres ni copy.
- riesgo: la decision nueva quede solo en codigo.
  - impacto: drift contractual.
  - mitigacion: cerrar primero la fase documental.

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
  - cambio: creacion inicial del plan tecnico.
  - razon: traducir la nueva decision editorial a bloques ejecutables.
