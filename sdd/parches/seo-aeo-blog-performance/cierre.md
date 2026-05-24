# Cierre: seo-aeo-blog-performance

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

- Change id: `seo-aeo-blog-performance`
- Program id: `portfolio-seo-aeo`
- Patch kind: `batch`
- Lifecycle: `spec-first`
- Status final: `closed`
- Fecha de cierre: `2026-05-24`
- Owner: `paw-paw`
- Nivel de cierre: `batch`

---

## 1. Resumen

- Objetivo original: ejecutar el handoff SEO/AEO, blog metadata y performance sin incorporar rutas nuevas de `about`, `resume` o `work` especifico.
- Resultado ejecutado: se sincronizaron docs, schema, robots IA, first viewport, imagenes y skills editoriales.
- Alcance cerrado: items 1-6 de `tasks.md`.
- Alcance diferido: cache TTL de assets `_astro`, PageSpeed externo post-deploy y validadores externos Rich Results/schema.

---

## 2. Rama obligatoria por tipo

### Si `patch_kind = batch`

- estado por item:
  - Item 1 - Contratos y documentacion: `done`
  - Item 2 - Schema SEO/AEO: `done`
  - Item 3 - Robots IA: `done`
  - Item 4 - First viewport performance: `done`
  - Item 5 - Optimizacion general de imagenes: `done`
  - Item 6 - Skills editoriales: `done`
- criterio global de cierre: schema estable, robots diferenciados, primer viewport visible por defecto, imagenes tratadas y workflow editorial actualizado.
- item diferido, si existe: ninguno dentro del batch aprobado.

---

## 3. Artifacts revisados

- `patch.yaml`
- `handover.md`
- `definicion.md`
- `plan.md`
- `tasks.md`
- `backlog/fase1.md`
- `backlog/fase2.md`
- `backlog/fase3.md`
- `backlog/fase4.md`
- `backlog/fase5.md`
- `backlog/fase6.md`
- `decision.log`

---

## 4. Decisiones relevantes

- decision: incluir GitHub solo en `sameAs`, no como canal visible de Contact.
  - fuente: `decision.log`
  - impacto: mejora entidad `Person` sin cambiar canales publicos de contacto.
- decision: permitir search/user-triggered fetchers y restringir entrenamiento/model improvement.
  - fuente: `decision.log`
  - impacto: `robots.txt` queda alineado con visibilidad SEO/AEO sin habilitar bots de training.
- decision: actualizar docs antes de cambiar first viewport motion.
  - fuente: `decision.log`
  - impacto: se evita drift documental para behavior visible.
- decision: mantener fuera de alcance nuevas rutas `/about`, `/resume`, `/cv` y case studies.
  - fuente: `decision.log`
  - impacto: el patch no altera arquitectura de rutas.

---

## 5. Assumptions, blockers y findings

### Assumptions

- `modified_date` es opcional y cae tecnicamente a `publish_date` en schema cuando no existe.
- Cache TTL de `_astro` queda fuera del patch por decision del usuario.

### Blockers

- No blockers.

### Findings

- finding: `Person` heredaba imagen/descripcion de pagina en algunos contextos.
  - evidencia: fase 2, inspeccion HTML previa y correccion en `src/layouts/Layout.astro`.
  - impacto: riesgo de entidad inconsistente para SEO/AEO.
- finding: GSAP/ScrollTrigger se cargaban desde CDN aunque `gsap` ya estaba en dependencias npm.
  - evidencia: fase 4, `src/layouts/Layout.astro` y `src/scripts/animations.js`.
  - impacto: descarga duplicada y bloqueo innecesario.
- finding: en mobile 375x812 el CTA del hero quedaba demasiado cerca del borde inferior.
  - evidencia: revision Playwright mobile 375x812 durante verificacion.
  - impacto: cumplimiento debil del criterio de CTA visible en primer viewport.
  - accion: ajuste minimo de espaciado mobile del hero.
- finding: Astro no genera variantes responsive que excedan el ancho fuente de los work headers.
  - evidencia: fase 5, HTML generado con `srcset`.
  - impacto: evita upscaling; comportamiento aceptado.

---

## 6. Drift

- drift: backlogs de fase requirieron hallazgos adicionales durante ejecucion.
  - categoria: `minor`
  - fuente esperada: `tasks.md` y backlogs vivos.
  - diferencia encontrada: detalles de implementacion no estaban en checklist inicial.
  - accion: backlogs actualizados con hallazgos, validaciones y cierre.
  - estado: `resuelto`

---

## 7. Reconciliacion de fuente viva

- fuente viva afectada: `docs/delivery/seo-spec.md`
  - cambio requerido: schema, `BlogPosting`, robots IA y AI Search.
  - estado: `aplicado`
  - evidencia: fase 1.
- fuente viva afectada: `docs/content/content-system.md`
  - cambio requerido: `modified_date` y reglas editoriales SEO/AEO por post.
  - estado: `aplicado`
  - evidencia: fase 1.
- fuente viva afectada: `docs/visual/interaction-spec.md`
  - cambio requerido: primer viewport visible sin depender de AOS/JS/fuentes bloqueantes.
  - estado: `aplicado`
  - evidencia: fase 1.
- fuente viva afectada: `docs/delivery/release-checklist.md`
  - cambio requerido: checks de metadata, schema, robots y performance.
  - estado: `aplicado`
  - evidencia: fase 1.

---

## 8. Validaciones

- validacion:
  - tipo: `automated`
  - comando o revision: `npm test`
  - resultado esperado: pass
  - resultado obtenido: pass; 3 tests, 0 failures.
  - estado: `pass`
  - evidencia: ejecutado tras fases 2, 3, 4, 5, 6 y tras ajuste mobile final.
- validacion:
  - tipo: `automated`
  - comando o revision: `npm run build`
  - resultado esperado: pass
  - resultado obtenido: pass; 30 paginas generadas.
  - estado: `pass`
  - evidencia: ejecutado tras fases runtime y tras ajuste mobile final.
- validacion:
  - tipo: `manual`
  - comando o revision: inspeccion HTML generada con `rg`
  - resultado esperado: `BlogPosting`, `dateModified`, `Person.@id`, GitHub en `sameAs`, robots diferenciado, work images responsive y logos con dimensiones.
  - resultado obtenido: pass.
  - estado: `pass`
  - evidencia: backlogs fases 2, 3, 4 y 5.
- validacion:
  - tipo: `manual`
  - comando o revision: Playwright preview local
  - resultado esperado: home mobile, work tablet y experience desktop sin regresion visual evidente ni consola con warnings/errors.
  - resultado obtenido: pass; 0 console warnings/errors.
  - estado: `pass`
  - evidencia: rutas abiertas en preview local: `/en/` a 375px, `/en/work/` a 768px y `/en/experience/` a 1440px; screenshots temporales inspeccionados y limpiados.
- validacion:
  - tipo: `deferred`
  - comando o revision: PageSpeed Insights externo post-deploy
  - resultado esperado: confirmar FCP/LCP/render-blocking/image delivery en entorno publicado.
  - resultado obtenido: no ejecutado localmente.
  - estado: `skipped`
  - evidencia: requiere entorno externo/publicado.
- validacion:
  - tipo: `deferred`
  - comando o revision: Rich Results/schema validator externo
  - resultado esperado: confirmar structured data en herramienta externa.
  - resultado obtenido: no ejecutado localmente.
  - estado: `skipped`
  - evidencia: requiere herramienta externa.

---

## 9. Riesgos residuales

- riesgo: Google Fonts sigue siendo externo aunque ya no se carga como stylesheet bloqueante directo.
  - impacto: PageSpeed puede seguir reportando latencia de fuente externa segun red.
  - mitigacion: considerar self-hosting de fuentes en un patch futuro si PageSpeed sigue penalizando.
- riesgo: PageSpeed puede seguir reportando TTL de cache de `_astro`.
  - impacto: puntuacion performance/cache no totalmente cerrada.
  - mitigacion: owner manual segun decision del usuario.
- riesgo: validacion externa de schema no se ejecuto.
  - impacto: posible ajuste fino pendiente de Rich Results.
  - mitigacion: correr validador externo post-deploy.

---

## 10. Pendientes

- pendiente: revisar cache TTL de assets `_astro`.
  - owner: usuario
  - razon: explicitamente fuera de alcance del patch.
- pendiente: correr PageSpeed Insights en produccion.
  - owner: usuario/agente futuro
  - razon: requiere entorno externo y medicion real.
- pendiente: correr validador externo de structured data.
  - owner: usuario/agente futuro
  - razon: no forma parte de validaciones locales disponibles.

---

## 11. Criterio de cierre

- [x] fases seleccionadas cerradas o diferidas con razon
- [x] assumptions criticas resueltas, aceptadas o escaladas
- [x] decisiones relevantes registradas
- [x] drift clasificado y resuelto o diferido
- [x] validaciones registradas
- [x] fuente viva reconciliada o marcada no aplicable
- [x] riesgos residuales visibles
