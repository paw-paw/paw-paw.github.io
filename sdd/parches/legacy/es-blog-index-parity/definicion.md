# Definicion Template

## Estado

- Change id: `es-blog-index-parity`
- Estado: `done`
- Fuente: pedido del usuario para que `/es/blog` muestre posts publicados igual que `/en/blog/`
- Ultima actualizacion: `2026-04-26`
- Owner: Codex

## 1. Objetivo

Hacer que la superficie `/es/blog/` deje de comportarse como placeholder y pase a listar publicaciones publicadas del locale español con la misma estructura editorial que el índice inglés. El mismo cambio debe extenderse a las categorías del blog en español para evitar una paridad incompleta.

El cierre debe actualizar runtime, documentación y tests para que el estado del sitio y su contrato sigan contando la misma historia.

## 2. No objetivos

- [ ] crear nuevas taxonomías, archives o rutas de blog fuera de las ya existentes
- [ ] cambiar el idioma maestro del sitio
- [ ] reabrir la estrategia global del portfolio fuera del blog

## 3. Fuentes de verdad aplicables

- `docs/README.md`
- `AGENTS.md`
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
- fuentes externas o handovers:
  - `docs/sdd/parches/es-blog-index-parity/handover.md`

Nota:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- `docs/sdd/` es auxiliar operativo, no contrato superior
- si el cambio requiere modificar estrategia, arquitectura, contenido, visual, i18n, SEO o deployment, declara que contrato debe actualizarse

## 4. Alcance

### Si entra

- [x] reemplazar el placeholder de `/es/blog/` por la grilla editorial de posts publicados
- [x] mantener featured panel en español cuando exista un featured publicado
- [x] habilitar la misma lógica para `/es/blog/category/[category]/`
- [x] sincronizar docs contractuales y auxiliares que describen la semántica del blog español
- [x] actualizar tests para reflejar la nueva paridad

### Fuera de alcance

- [x] crear archives nuevas para `angle` o `domain`
- [x] cambiar la política de locales soportados
- [x] modificar la estrategia del home bridge o rutas fuera del blog

## 5. Superficies afectadas

### Docs

- `docs/architecture/i18n-spec.md`
- `docs/content/content-system.md`
- `docs/content/content-master.md`
- `docs/delivery/seo-spec.md`
- `docs/governance/decision-log.md`

### Codigo o contenido

- `src/pages/es/blog/index.astro`
- `src/pages/es/blog/category/[category].astro`
- `src/components/blog/BlogFeaturedPanel.astro`
- `src/components/blog/BlogCard.astro`
- `src/components/blog/BlogEmptyState.astro`
- `src/utils/blog.ts`
- `src/i18n/es.json`
- `src/content/blog/`

### Configuracion o validacion

- `tests/public-release-closure.test.mjs`
- `tests/blog-es-detail-alignment.test.mjs`
- `package.json`

## 6. Decisiones conocidas

- decision:
  - `/es/blog/` y `/es/blog/category/[category]/` deben dejar de usar la semántica placeholder cuando ya existen posts publicados en español
  - razon: el cambio pedido es de producto, no solo de contenido, y el usuario quiere paridad visible con `/en/blog/`
  - documentos o areas afectadas: i18n, contenido, SEO, decision log, tests, runtime del blog
- decision:
  - la paridad debe conservar `self-canonical` por locale y `hreflang` coherente
  - razon: la estrategia i18n ya está activada para `en` y `es`
  - documentos o areas afectadas: `docs/architecture/i18n-spec.md`, `docs/delivery/seo-spec.md`, `src/utils/seo.ts`

## 7. Decisiones abiertas

- [ ] si el copy del índice español debe seguir mencionando que el blog en español estaba "en preparacion" o si debe pasar a copy neutro de disponibilidad
  - por que bloquea: el texto visible debe reflejar la nueva semántica sin arrastrar el placeholder anterior
  - quien debe decidir: Codex con base en el contrato documental vigente

## 8. Riesgos

- riesgo: dejar `/es/blog/` y `/es/blog/category/[category]/` desalineados entre sí
  - impacto: experiencia editorial inconsistente
  - mitigacion: cambiar ambos en la misma entrega y validar render local
- riesgo: no actualizar las decisiones documentales que todavía hablan de `en-first`
  - impacto: drift docs-código
  - mitigacion: actualizar `decision-log` y specs relacionadas
- riesgo: romper alternates/canonicals en blog detail o category
  - impacto: SEO y navegación localizadas inconsistentes
  - mitigacion: correr build y tests de blog completos

## 9. Criterio de cierre

La definicion queda lista para `sdd-plan` solo si:

- [x] objetivo y no objetivos estan claros
- [x] las fuentes de verdad aplicables estan listadas
- [x] el alcance y fuera de alcance no se contradicen
- [x] las decisiones abiertas estan visibles
- [x] los riesgos principales estan identificados

## 10. Registro de cambios

- 2026-04-26:
  - cambio: se crea la definicion inicial para el cambio de paridad del blog en español
  - razon: el usuario quiere que `/es/blog` liste posts publicados como `/en/blog/` y que el contrato y tests lo reflejen
