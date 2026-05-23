# Plan: blog-index-editorial-redesign

Usa este documento como plan tecnico brownfield para el patch `blog-index-editorial-redesign`.

---

## Estado

- Change id: `blog-index-editorial-redesign`
- Patch kind: `spec`
- Lifecycle: `spec-first`
- Estado: `ready-for-tasks`
- Ultima actualizacion: `2026-05-18`
- Owner: `usuario`
- Depende de:
  - sincronizacion documental de los contratos afectados antes de considerar cerrada la implementacion
- Desbloquea:
  - futura implementacion del nuevo `blog index`

---

## 1. Fuente de verdad aplicable

- `docs/README.md`
- `sdd/parches/blog-index-editorial-redesign/patch.yaml`
- `sdd/parches/blog-index-editorial-redesign/definicion.md`
- `sdd/parches/blog-index-editorial-redesign/decision.log`
- documentos contractuales aplicables:
  - `docs/strategy/portfolio-strategy.md`
  - `docs/architecture/site-architecture.md`
  - `docs/content/content-system.md`
  - `docs/visual/visual-system.md`
  - `docs/architecture/i18n-spec.md`
- documentos auxiliares aplicables:
  - `docs/content/content-master.md`
  - `docs/visual/asset-plan.md`
  - `docs/delivery/seo-spec.md`

---

## 2. Lectura brownfield

- estructura existente:
  - `/en/blog/` y `/es/blog/` comparten la misma composicion: intro izquierdo, `BlogFeaturedPanel` derecho y grilla de `BlogCard`.
  - `BlogFeaturedPanel` y `BlogCard` ya consumen `blog_post` y la capa i18n existente.
  - `src/utils/blog.ts` ya resuelve locales, `featured`, orden por fecha y labels de taxonomia.
  - `src/styles/global.css` ya contiene hooks visuales especificos para cards y featured.
- patrones existentes:
  - componentes Astro pequenos y especializados.
  - strings visibles centralizados en `src/i18n/en.json` y `src/i18n/es.json`.
  - assets aprobados viven bajo `src/assets/` y se documentan en `docs/visual/asset-plan.md`.
  - las superficies internas respetan `surface-muted`, `surface-card`, `section-eyebrow`, `tag-chip` y el sistema visual compartido.
- deuda o drift relevante:
  - el handoff objetivo ya no coincide con `docs/content/content-system.md` ni con `docs/content/content-master.md`.
  - el copy visible propuesto en el handoff tambien se aparta de la narrativa documentada de `/blog`, que centra la pagina en criterio profesional visible conectado a business development, partnerships y project delivery.
- restricciones tecnicas:
  - no se deben cambiar rutas, taxonomias ni modelo base de `blog_post`.
  - `en` y `es` deben mantener paridad real.
  - los assets nuevos no pueden consumirse desde `_inbox`; deben promoverse a runtime solo despues de quedar reflejados en docs.
  - la implementacion futura debe conservar accesibilidad, focus visible, dark mode y `prefers-reduced-motion`.

---

## 3. Assumptions

- No quedan assumptions criticas sin resolver.
- La simplificacion visual de taxonomia se limita al `blog index`; `angle` y `domain` siguen existiendo como capas del sistema editorial general.
- Los seis logos del inbox quedan aprobados para uso runtime dentro del alcance del patch y deberan normalizarse/promoverse de forma consistente.
- El handoff orienta layout y tratamiento visual, pero el copy final de intro y SEO debe alinearse con la narrativa contractual viva del blog.

---

## 4. Zonas afectadas

### Docs

- `docs/content/content-system.md`
- `docs/content/content-master.md`
- `docs/visual/asset-plan.md`
- `docs/delivery/seo-spec.md`

### Codigo

- `src/pages/en/blog/index.astro`
- `src/pages/es/blog/index.astro`
- `src/components/blog/BlogFeaturedPanel.astro`
- `src/components/blog/BlogCard.astro`
- nuevo componente acotado para el intro editorial y/o `Editorial Background`, si ayuda a mantener composicion simple
- posible modulo de datos local para el `Editorial Background`
- `src/i18n/en.json`
- `src/i18n/es.json`
- `src/styles/global.css`
- `src/assets/...` para logos promovidos desde el inbox

### Configuracion, tests o build

- `package.json` confirma scripts reales disponibles:
  - `npm run build`
  - `npm run test`
- revision manual de `/en/blog/` y `/es/blog/`

---

## 5. Bloques de implementacion

### Bloque 1 - Sincronizacion contractual del blog index

- Objetivo:
  - reconciliar docs con la nueva jerarquia editorial del index antes de tocar runtime.
- Superficies afectadas:
  - `docs/content/content-system.md`
  - `docs/content/content-master.md`
  - `docs/delivery/seo-spec.md`
- Cambios esperados:
  - permitir explicitamente que el `blog index` use una presentacion resumida con solo `category` como chip principal.
  - describir el featured teaser con excerpt breve y CTA textual controlado.
  - redefinir el speech visible de `/blog` para que siga respondiendo a la narrativa contractual: criterio profesional visible conectado a business development, partnerships y project delivery.
  - alinear SEO de `/blog` con ese mismo speech final.
- Dependencias:
  - decisiones ya registradas en `decision.log`.
- Riesgos:
  - confundir simplificacion de UI con cambio al modelo completo de `blog_post`.
- Validaciones asociadas:
  - revision documental contra `docs/README.md`, `site-architecture` y `content-system`.

### Bloque 2 - Promocion controlada de assets editoriales

- Objetivo:
  - convertir los seis logos aprobados del inbox en assets runtime gobernados por el repo.
- Superficies afectadas:
  - `docs/visual/asset-plan.md`
  - `src/assets/...`
- Cambios esperados:
  - registrar los logos editoriales aprobados y su rol visual.
  - promover/copiar los seis assets desde `_inbox` a una ubicacion runtime coherente.
  - definir variantes o tratamiento por tema si la implementacion lo necesita.
- Dependencias:
  - bloque 1 para mantener precedencia docs -> runtime.
- Riesgos:
  - inconsistencia visual entre logos o legibilidad deficiente en dark mode.
- Validaciones asociadas:
  - revision manual light/dark y consistencia con `visual-system`.

### Bloque 3 - Reestructuracion del intro de `/blog`

- Objetivo:
  - reemplazar el intro actual por una superficie mas autoral sin salir del sistema visual vigente.
- Superficies afectadas:
  - `src/pages/en/blog/index.astro`
  - `src/pages/es/blog/index.astro`
  - `src/i18n/en.json`
  - `src/i18n/es.json`
  - posible componente nuevo de intro / strip editorial
  - `src/styles/global.css`
- Cambios esperados:
  - pasar de un subtitulo unico a speech visible alineado con docs.
  - insertar `Editorial Background`.
  - añadir anchor `Explore articles ↓` hacia `#latest-writing`.
  - conservar paridad `en` / `es`.
- Dependencias:
  - bloques 1 y 2.
- Riesgos:
  - sobredimensionar el bloque editorial y desplazar la funcion principal del blog.
- Validaciones asociadas:
  - revision manual responsive, foco de teclado y dark mode.

### Bloque 4 - Ajuste de featured y cards regulares

- Objetivo:
  - hacer que el featured se sienta editorial y que las cards regulares sean mas limpias y escaneables.
- Superficies afectadas:
  - `src/components/blog/BlogFeaturedPanel.astro`
  - `src/components/blog/BlogCard.astro`
  - `src/styles/global.css`
- Cambios esperados:
  - featured con `category` primaria, excerpt breve y CTA textual.
  - cards regulares sin CTA separada, con flecha inline en titulo, excerpt clamp y metadata compacta.
  - hover/focus sobrios y respetuosos de reduced motion.
- Dependencias:
  - bloque 1 para evitar drift contractual.
- Riesgos:
  - perder señal de clickabilidad o introducir patrones de anclas anidadas.
- Validaciones asociadas:
  - build, revision manual de interaccion y accesibilidad basica.

### Bloque 5 - Verificacion integrada de la superficie

- Objetivo:
  - confirmar que el rediseño cierra de extremo a extremo sin drift entre docs, datos, i18n y UI.
- Superficies afectadas:
  - docs actualizados
  - `/en/blog/`
  - `/es/blog/`
- Cambios esperados:
  - ninguno adicional salvo correcciones derivadas de validacion.
- Dependencias:
  - bloques 1 a 4.
- Riesgos:
  - paridad incompleta entre locales o divergencia entre SEO y copy visible.
- Validaciones asociadas:
  - `npm run build`
  - `npm run test` si sigue siendo relevante al tocar rutas/helpers ya cubiertos
  - revision visual/manual EN/ES, desktop/mobile, light/dark.

---

## 6. Datos, schemas y contratos

- Contratos documentales afectados:
  - `content-system` para distinguir modelo editorial general vs. presentacion resumida del index.
  - `content-master` para speech visible y reglas del teaser featured.
  - `asset-plan` para nuevos logos editoriales aprobados.
  - `seo-spec` para alinear metadata con la narrativa final del blog.
- Datos o contenido afectados:
  - nuevos strings visibles del intro, labels de `Editorial Background`, anchor y seccion.
  - nueva coleccion/dato local de seis items editoriales.
- Schemas o modelos afectados:
  - no se anticipan cambios al schema de `blog_post`.
  - el nuevo dato de `Editorial Background` debe quedar acotado a la superficie `/blog`.
- Compatibilidad esperada:
  - se preservan rutas, taxonomias, slugs y `featured` singular por locale.
  - `angle` y `domain` siguen disponibles para detail pages y category pages aunque dejen de presentarse como chips principales en el index.

---

## 7. Validaciones previstas

### Documentales

- [ ] verificar alineacion con `docs/README.md`
- [ ] verificar que `content-system`, `content-master`, `asset-plan` y `seo-spec` no se contradigan entre si

### Tecnicas

- [ ] `npm run build`
- [ ] `npm run test` si los cambios tocan rutas, utilidades o comportamiento ya cubierto por tests existentes

### Manuales

- [ ] revision visual de `/en/blog/` y `/es/blog/`
- [ ] revision responsive desktop / tablet / mobile
- [ ] revision light mode / dark mode
- [ ] revision de foco de teclado, anchor interno y señales de clickabilidad
- [ ] comprobacion de coherencia entre copy visible y metadata SEO

---

## 8. Riesgos y mitigaciones

- riesgo: drift entre handoff, docs y runtime.
  - impacto: cierre invalido bajo `AGENTS.md`.
  - mitigacion: ejecutar primero el bloque documental y usarlo como canon para la implementacion.
- riesgo: speech del intro demasiado cercano a “gaming/esports operations” y demasiado lejano al posicionamiento general del portfolio.
  - impacto: `/blog` empezaria a hablar con otra voz que `Work`, `Experience` y SEO.
  - mitigacion: derivar copy final desde `site-architecture`, `content-system`, `content-master` y `portfolio-strategy`.
- riesgo: nuevos logos agreguen fragilidad visual.
  - impacto: strip inconsistente o ilegible en dark mode.
  - mitigacion: normalizacion, revision manual y reglas explicitas en `asset-plan`.
- riesgo: featured y cards compartan demasiada logica visual divergente.
  - impacto: duplicacion o mantenimiento torpe.
  - mitigacion: reutilizar patrones existentes y crear componentes nuevos solo donde reduzcan complejidad.

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
  - cambio: creacion inicial del plan brownfield.
  - razon: traducir la definicion aprobada a una ruta tecnica secuenciable y sin decisiones humanas abiertas.
