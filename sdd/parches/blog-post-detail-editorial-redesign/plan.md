# Plan: blog-post-detail-editorial-redesign

Usa este documento como plan tecnico brownfield para el patch `blog-post-detail-editorial-redesign`.

---

## Estado

- Change id: `blog-post-detail-editorial-redesign`
- Patch kind: `spec`
- Lifecycle: `spec-anchored`
- Estado: `ready-for-tasks`
- Ultima actualizacion: `2026-05-18`
- Owner: `usuario`
- Depende de:
  - sincronizacion documental previa de los contratos afectados
- Desbloquea:
  - implementacion del nuevo `blog post detail`

---

## 1. Fuente de verdad aplicable

- `docs/README.md`
- `sdd/parches/blog-post-detail-editorial-redesign/patch.yaml`
- `sdd/parches/blog-post-detail-editorial-redesign/definicion.md`
- `sdd/parches/blog-post-detail-editorial-redesign/decision.log`
- documentos contractuales aplicables:
  - `docs/strategy/portfolio-strategy.md`
  - `docs/architecture/site-architecture.md`
  - `docs/content/content-system.md`
  - `docs/visual/visual-system.md`
  - `docs/architecture/i18n-spec.md`
- documentos auxiliares aplicables:
  - ninguno identificado como necesario para planificar

---

## 2. Lectura brownfield

- estructura existente:
  - `/en/blog/[slug]/` y `/es/blog/[slug]/` comparten la misma estructura: header panel, imagen full-width, body card y CTA final.
  - `BlogPostMeta` ya resuelve la jerarquia completa `Category -> Angle -> Domain` y metadata temporal.
  - los posts publicados viven en markdown bajo `src/content/blog/` y hoy no usan headings ni blockquotes de forma consistente.
  - Astro ya expone headings renderizados desde markdown mediante `post.render()`.
- patrones existentes:
  - componentes Astro pequenos y especializados.
  - strings visibles centralizados en `src/i18n/en.json` y `src/i18n/es.json`.
  - estilos del blog centralizados en `src/styles/global.css`.
  - las superficies editoriales usan `surface-muted`, `surface-card`, chips y acentos suaves del sistema visual.
- deuda o drift relevante:
  - `docs/content/content-system.md` aun dice que el cuerpo del post no exige sub-bloques internos obligatorios.
  - la UI actual no ofrece navegacion interna ni tratamiento visible para `blockquote`.
  - el corpus publicado necesita retrofit editorial para soportar el nuevo contrato.
- restricciones tecnicas:
  - no se deben crear campos nuevos en `blog_post`.
  - el rail debe derivarse de headings reales, idealmente `h2`.
  - el rediseño debe preservar paridad entre `en` y `es`, dark mode y la politica i18n vigente.
  - la pagina no debe depender de una gran card unica como gesto visual dominante.

---

## 3. Assumptions

- No quedan assumptions criticas sin resolver.
- El label visible `Key idea` reutiliza `excerpt`; no introduce metadata nueva.
- El rail puede ocultarse en mobile si eso protege la lectura, pero en desktop debe existir como parte estable del detail.
- El nuevo estandar editorial es firme, pero su aplicacion debe conservar criterio y naturalidad entre posts.

---

## 4. Zonas afectadas

### Docs

- `docs/architecture/site-architecture.md`
- `docs/content/content-system.md`
- posiblemente `docs/visual/visual-system.md`

### Codigo

- `src/pages/en/blog/[slug].astro`
- `src/pages/es/blog/[slug].astro`
- `src/components/blog/BlogPostMeta.astro`
- `src/styles/global.css`
- `src/i18n/en.json`
- `src/i18n/es.json`
- `src/content/blog/*.md`

### Configuracion, tests o build

- `tests/blog-es-detail-alignment.test.mjs`
- `package.json` confirma scripts reales disponibles:
  - `npm run build`
  - `npm test`
- revision manual de `/en/blog/[slug]/` y `/es/blog/[slug]/`

---

## 5. Bloques de implementacion

### Bloque 1 - Sincronizacion contractual del detail

- Objetivo: reconciliar docs con el nuevo estandar obligatorio antes de tocar runtime.
- Superficies afectadas: `site-architecture`, `content-system`, posiblemente `visual-system`.
- Cambios esperados:
  - describir el detail como superficie con hero editorial, `Key idea`, cuerpo estructurado y rail interno.
  - reemplazar la regla antigua de cuerpo libre por estructura obligatoria de `3-4` secciones y `1-2` `blockquote`, con aplicacion editorial flexible.
  - fijar que el rail se genera desde headings reales del cuerpo.
- Dependencias: decisiones ya registradas en intake.
- Riesgos: convertir estructura obligatoria en copy mecanico.
- Validaciones asociadas: lectura cruzada entre contratos.

### Bloque 2 - Retrofit editorial del corpus publicado

- Objetivo: llevar todos los posts publicados al nuevo contrato de estructura.
- Superficies afectadas: `src/content/blog/*.md`.
- Cambios esperados:
  - introducir `3-4` headings `h2` por articulo.
  - insertar `1-2` `blockquote` que reutilicen tesis reales del texto sin claims nuevos.
  - preservar voz, hechos y equivalencia editorial entre traducciones.
- Dependencias: bloque 1.
- Riesgos: headings decorativos o blockquotes de relleno.
- Validaciones asociadas: revision editorial manual y build.

### Bloque 3 - Nueva composicion del hero y rail

- Objetivo: implementar la nueva superficie visual de `blog post detail`.
- Superficies afectadas: detail pages EN/ES, i18n, CSS, posible ajuste de `BlogPostMeta`.
- Cambios esperados:
  - mover `Back to blog` al hero.
  - componer hero en dos columnas con resumen `Key idea` e imagen controlada.
  - renderizar rail `On this page` desde headings `h2`.
  - abrir la lectura del cuerpo y estilizar headings y blockquotes.
- Dependencias: bloques 1 y 2.
- Riesgos: divergencia entre locales o composicion demasiado magazine.
- Validaciones asociadas: build, tests, revision visual responsive.

### Bloque 4 - Verificacion integrada y cierre tecnico

- Objetivo: confirmar que docs, contenido y UI forman un sistema coherente.
- Superficies afectadas: docs, corpus publicado, rutas detail EN/ES.
- Cambios esperados: solo correcciones derivadas de validacion.
- Dependencias: bloques 1 a 3.
- Riesgos: tests o fixtures que aun asuman posts sin headings.
- Validaciones asociadas: `npm run build`, `npm test`, `astro-pages-verify`, revision manual.

---

## 6. Datos, schemas y contratos

- Contratos documentales afectados:
  - `site-architecture` para el rol y componentes esperados del detail.
  - `content-system` para estructura obligatoria del cuerpo, `Key idea` visible y rail derivado.
  - `visual-system` solo si hace falta fijar el nuevo patron como convencion visual compartida.
- Datos o contenido afectados:
  - todos los posts publicados actuales.
  - labels localizados de `Key idea` y `On this page`.
- Schemas o modelos afectados:
  - no se anticipan cambios al schema de `blog_post`.
- Compatibilidad esperada:
  - routing, i18n, SEO y metadata actuales deben mantenerse.

---

## 7. Validaciones previstas

### Documentales

- [ ] verificar alineacion con `docs/README.md`, `site-architecture`, `content-system` y `visual-system`

### Tecnicas

- [ ] `npm run build`
- [ ] `npm test`

### Manuales

- [ ] revisar detail EN/ES en mobile y desktop
- [ ] revisar light/dark, rail, headings, blockquotes y ausencia de drift visual relevante

---

## 8. Riesgos y mitigaciones

- riesgo: el nuevo contrato fuerce una plantilla sin vida.
  - impacto: baja calidad editorial pese a mejor estructura.
  - mitigacion: documentar criterio de calidad junto con los requisitos.
- riesgo: el rail dependa de headings ausentes en fixtures o contenido futuro.
  - impacto: UI incompleta o inconsistente.
  - mitigacion: actualizar corpus real y tests de fixtures junto con la implementacion.
- riesgo: `Key idea` parezca un nuevo campo del modelo.
  - impacto: confusion documental y futura duplicacion de metadata.
  - mitigacion: dejar explicito que es presentacion visible de `excerpt`.

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
  - razon: convertir la definicion aprobada en una secuencia ejecutable sin drift contractual.
