# Plan Template

## Estado

- Change id: `es-blog-index-parity`
- Estado: `done`
- Ultima actualizacion: `2026-04-26`
- Owner: Codex
- Depende de: `docs/sdd/parches/es-blog-index-parity/definicion.md`
- Desbloquea: implementacion runtime, sincronizacion documental y validacion de paridad del blog en español

## 1. Fuente de verdad aplicable

- `docs/README.md`
- `docs/sdd/parches/es-blog-index-parity/definicion.md`
- documentos contractuales aplicables:
  - `docs/architecture/i18n-spec.md`
  - `docs/content/content-system.md`
  - `docs/content/content-master.md`
  - `docs/delivery/seo-spec.md`
  - `docs/governance/decision-log.md`
- documentos auxiliares aplicables:
  - `docs/delivery/release-checklist.md`
  - `tests/public-release-closure.test.mjs`
  - `tests/blog-es-detail-alignment.test.mjs`

## 2. Lectura brownfield

Resume el estado real del repo que condiciona el cambio:

- estructura existente:
  - `src/pages/en/blog/index.astro` y `src/pages/en/blog/category/[category].astro` ya renderizan featured panel y grilla de posts publicados
  - `src/pages/es/blog/index.astro` y `src/pages/es/blog/category/[category].astro` siguen montados sobre `BlogEmptyState`
  - `src/components/blog/BlogCard.astro` y `src/components/blog/BlogFeaturedPanel.astro` ya resuelven labels localizados de `category`, `angle` y `domain`
- patrones existentes:
  - el blog usa utilidades compartidas en `src/utils/blog.ts` para listados, featured singular y categorías
  - el SEO del blog ya está definido por locale en `src/utils/seo.ts`
  - los textos visibles del blog viven en `src/i18n/en.json` y `src/i18n/es.json`
- deuda o drift relevante:
  - `docs/governance/decision-log.md` conserva una historia `en-first` para `/es/blog/` que ya no refleja la nueva intención del producto
  - `docs/delivery/release-checklist.md` todavía habla de empty states de blog en `es`
  - `src/i18n/es.json` conserva copy de preparación que deja de ser coherente cuando ya hay posts publicados
- restricciones tecnicas:
  - el cambio debe mantener canonical, alternates y sitemap coherentes
  - no se deben inventar archives nuevas para `angle` o `domain`
  - el blog en español debe seguir usando el mismo contrato de contenido que el blog en ingles, solo localizando copy visible

## 3. Zonas afectadas

### Docs

- `docs/architecture/i18n-spec.md`
- `docs/content/content-system.md`
- `docs/delivery/release-checklist.md`
- `docs/governance/decision-log.md`

### Codigo

- `src/pages/es/blog/index.astro`
- `src/pages/es/blog/category/[category].astro`
- `src/i18n/es.json`

### Configuracion, tests o build

- `tests/public-release-closure.test.mjs`
- `tests/blog-es-detail-alignment.test.mjs`

## 4. Bloques de implementacion

### Bloque A - Paridad runtime del blog en es

- Objetivo: hacer que el index y las categorías del blog en español usen la misma estructura que `en` cuando existan posts publicados
- Cambios esperados:
  - reemplazar el placeholder del index por featured panel y grilla de `BlogCard`
  - hacer que las category pages en `es` rendericen posts cuando existan, con `BlogEmptyState` solo como fallback real
  - ajustar copy de `es.json` para que el blog activo no comunique una fase de preparacion
- Dependencias:
  - utilidades ya existentes en `src/utils/blog.ts`
  - cards y panel ya existentes en `src/components/blog/`
- Riesgos:
  - dejar una paridad incompleta si solo cambia el index y no las categorías
  - romper el orden o la visibilidad del featured si se copia la pagina sin usar la misma logica compartida

### Bloque B - Contratos y copy documental

- Objetivo: alinear docs con la nueva semántica del blog español activo
- Cambios esperados:
  - actualizar la `i18n-spec` para explicitar que el blog en `es` renderiza posts publicados como superficie activa
  - ajustar `content-system` para dejar claro que los placeholders solo aplican cuando no hay posts publicados
  - cerrar el drift de `decision-log` y `release-checklist`
- Dependencias:
  - runtime ya definido en el bloque A
  - SEO spec ya describe `/es/blog/` como superficie activa, por lo que solo requiere verificacion de consistencia
- Riesgos:
  - dejar referencias `en-first` en documentos que ya no describen la realidad
  - producir una historia documental ambigua si el copy de preparación no se retira

### Bloque C - Validacion de paridad

- Objetivo: confirmar que la salida generada y los tests reflejan la nueva realidad del blog en español
- Cambios esperados:
  - actualizar `tests/public-release-closure.test.mjs` para esperar posts publicados en `dist/es/blog/index.html`
  - mantener `tests/blog-es-detail-alignment.test.mjs` como cobertura de fallback de detail y generar una revision minima de que el blog index sigue existiendo
  - correr `npm test` y `npm run build`
- Dependencias:
  - bloques A y B cerrados
- Riesgos:
  - test frágil si se acopla a un orden de posts no estable
  - dejar validacion obsoleta si sigue esperando empty states en `es`

## 5. Datos, schemas y contratos

- Contratos documentales afectados:
  - i18n por locale
  - semantica de blog index y category pages en `es`
  - release checklist y decision log
- Datos o contenido afectados:
  - posts publicados en `src/content/blog/`
  - copy visible del blog en `src/i18n/es.json`
- Schemas o modelos afectados:
  - ninguno nuevo; se reutiliza el contrato actual de `blog_post`
- Compatibilidad esperada:
  - `/en/blog/` no cambia
  - `/es/blog/[slug]/` no cambia su mecanismo de fallback
  - `/es/blog/` y `/es/blog/category/[category]/` pasan a mostrar contenido cuando exista, sin romper URLs previas

## 6. Validaciones

### Documentales

- [ ] verificar alineacion con `docs/README.md`
- [ ] verificar alineacion con contratos aplicables

### Tecnicas

- [ ] `npm run build`, porque el cambio toca rutas y output publico
- [ ] `npm test`, porque el cambio toca la cobertura del blog y la release

### Manuales

- [ ] revision visual/manual del index y category pages en `es`
- [ ] revision de metadata y alternates en blog index y detail

## 7. Riesgos y mitigaciones

- riesgo: el blog en español sigue mostrando copy de preparacion aun cuando ya hay posts publicados
  - impacto: drift visible entre contrato y runtime
  - mitigacion: actualizar `es.json`, docs y tests en la misma entrega
- riesgo: el featured panel y la grilla no se renderizan igual que en `en`
  - impacto: paridad editorial rota
  - mitigacion: copiar la misma estructura de componentes y usar las mismas utilidades de blog
- riesgo: tests acoplados a textos frágiles o a orden de lista no estable
  - impacto: falsos negativos en CI local
  - mitigacion: verificar por presencia de contenido y no por orden si no hay garantia real

## 8. Decisiones que requieren humano

- [ ] ninguna adicional por ahora
  - opciones:
    - mantener el blog español como placeholder
    - mostrar posts publicados igual que `en`
  - recomendacion: mostrar posts publicados igual que `en`
  - impacto: cambia la semantica visible de una superficie publica

## 9. Criterio de cierre tecnico

El plan queda listo para `sdd-tasks` solo si:

- [x] el alcance respeta `definicion.md`
- [x] las zonas afectadas estan identificadas
- [x] los bloques de implementacion son secuenciables
- [x] las validaciones son reales y proporcionales
- [x] no hay decisiones abiertas que bloqueen la division en fases

## 10. Registro de cambios

- 2026-04-26:
  - cambio: se crea el plan tecnico brownfield para paridad del blog en español
  - razon: el cambio afecta runtime, docs y tests, y necesita una ruta clara antes de implementar
