# Backlog Fase 1: Sincronizacion contractual, runtime brownfield y cierre

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

- Change id: `blog-angle-domain-i18n`
- Fase: `1 - Sincronizacion contractual, runtime brownfield y cierre`
- Estado: `done`
- Ultima actualizacion: `2026-04-26`
- Owner: `pawpaw + Codex`
- Depende de:
  - `docs/sdd/parches/blog-angle-domain-i18n/definicion.md`
  - `docs/sdd/parches/blog-angle-domain-i18n/plan.md`
  - `docs/sdd/parches/blog-angle-domain-i18n/tasks.md`
  - `docs/sdd/parches/blog-angle-domain-i18n/decision.log`
- Desbloquea:
  - cierre del cambio `blog-angle-domain-i18n`

---

## 1. Fuente de verdad aplicable

- `docs/README.md`
- `AGENTS.md`
- `docs/sdd/parches/blog-angle-domain-i18n/definicion.md`
- `docs/sdd/parches/blog-angle-domain-i18n/plan.md`
- `docs/sdd/parches/blog-angle-domain-i18n/tasks.md`
- `docs/sdd/parches/blog-angle-domain-i18n/decision.log`
- documentos contractuales aplicables:
  - `docs/content/content-system.md`
  - `docs/content/content-master.md`
  - `docs/architecture/site-architecture.md`
  - `docs/architecture/i18n-spec.md`
  - `docs/governance/decision-log.md`
- documentos auxiliares aplicables:
  - `docs/sdd/templates/backlog-faseN.md`
  - `docs/sdd/parches/blog-taxonomy-vision/definicion.md`
  - `docs/sdd/parches/blog-taxonomy-vision/tasks.md`
  - `package.json`

Nota:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- este backlog ejecuta una sola fase
- si aparece drift contra `plan.md` o `tasks.md`, registralo antes de resolverlo

---

## 2. Objetivo de la fase

Cerrar el cambio completo en una sola fase ejecutable.
Al terminar, los contratos, el schema, las utilidades, el frontmatter, las traducciones y los componentes del blog deben usar `angle` y `domain` como claves internas estables con labels visibles localizados en `en` y `es`.
La fase existe para eliminar el acoplamiento actual a labels monolingues en ingles sin abrir taxonomias navegables nuevas.
El cierre exige confirmar que `category` sigue siendo la unica taxonomy navegable y que no aparecen rutas, archives ni indices nuevos para `angle` o `domain`.

---

## 3. Precondiciones

### Documentos

- [x] `definicion.md` vigente
- [x] `plan.md` vigente
- [x] `tasks.md` con la fase seleccionada
- [x] contratos aplicables revisados

### Decisiones previas

- [x] mapping localizado resuelto: claves estables en dominio y labels visibles en `src/i18n/en.json` y `src/i18n/es.json`
- [x] `category` ratificada como unica taxonomy navegable
- [x] vocabulario controlado de `angle` y `domain` ratificado sin reabrir valores

### Estado tecnico

- [ ] no hay ejecucion parcial previa que deje mezcla de labels visibles y claves internas
- [x] la migracion brownfield se ejecuta como un solo corte entre schema, contenido, UI y tests
- [x] no se introducen rutas, archives o indices nuevos para `angle` o `domain`

---

## 4. Alcance

### Si entra

- [x] sincronizar los contratos que todavia describen `angle` y `domain` como labels visibles en ingles
- [x] actualizar `docs/governance/decision-log.md` si hace falta consolidar la trazabilidad global de continuidad con `blog-taxonomy-vision`
- [x] migrar `angle` y `domain` a claves internas estables en schema, utilidades, frontmatter, i18n y componentes del blog
- [x] ajustar tests y ejecutar `npm run build` y `npm test`
- [x] revisar manualmente que `category` siga siendo la unica taxonomy navegable y que no existan rutas nuevas para `angle` o `domain`

### No entra

- [x] crear navegacion, archives, filtros o indices publicos para `angle` o `domain`
- [x] redefinir la semantica editorial o el set aprobado de valores de `angle` y `domain`
- [x] cambiar routing global, deployment, SEO estructural o estrategia general de i18n
- [x] redisenar cards, detail o layout del blog fuera de lo necesario para renderizar labels localizados

---

## 5. Checklist de ejecucion

Actualiza este checklist durante la ejecucion, no solo al final.

### Bloque A - Sincronizacion contractual y trazabilidad

- [x] revisar `docs/content/content-system.md` para reemplazar cualquier descripcion de `angle` y `domain` como labels visibles monolingues por el contrato de claves internas + labels localizados
- [x] revisar `docs/content/content-master.md` para alinear el lenguaje editorial visible con la representacion localizada
- [x] revisar `docs/architecture/site-architecture.md` para confirmar que `category` sigue siendo la unica taxonomy navegable y que `angle`/`domain` no generan rutas nuevas
- [x] revisar `docs/architecture/i18n-spec.md` para dejar explicito que los labels visibles de `angle` y `domain` se resuelven por locale y no son la fuente estable del dato
- [x] evaluar si `docs/governance/decision-log.md` necesita una entrada global de continuidad con `blog-taxonomy-vision`; si aplica, registrarla sin duplicar ni contradecir `docs/sdd/parches/blog-angle-domain-i18n/decision.log`
- [x] verificar trazabilidad entre contratos, `definicion.md`, `plan.md`, `tasks.md` y `decision.log`

### Bloque B - Runtime brownfield y migracion de contenido

- [x] actualizar `src/utils/blog.ts` para que `angle` y `domain` expongan claves estables, tipos y helpers sin depender de labels visibles en ingles
- [x] adaptar `src/content.config.ts` para validar claves internas estables en el schema `blog_post`
- [x] cargar los labels visibles localizados de `angle` y `domain` en `src/i18n/en.json` y `src/i18n/es.json`
- [x] migrar `src/content/blog/*.md` para persistir claves internas estables en frontmatter
- [x] revisar `src/components/blog/BlogCard.astro`, `src/components/blog/BlogFeaturedPanel.astro` y `src/components/blog/BlogPostMeta.astro` para asegurar que renderizan labels localizados y no la clave cruda
- [x] revisar cualquier superficie en `src/pages/*/blog/*.astro` que pueda filtrar, exponer o enlazar `angle` o `domain` como si fueran taxonomias navegables
- [x] confirmar que el orden editorial visible sigue siendo `category -> angle -> domain` sin abrir enlaces nuevos para `angle` o `domain`

### Bloque C - Tests, validacion y cierre

- [x] ajustar `tests/public-release-closure.test.mjs` para dejar de depender de labels monolingues en ingles donde el contrato cambie
- [x] ajustar `tests/blog-es-detail-alignment.test.mjs` para validar labels visibles localizados y ausencia de regresion en `es`
- [x] revisar si existe algun otro test o helper de validacion afectado por el cambio de representacion de `angle` y `domain`
- [x] ejecutar `npm run build`
- [x] ejecutar `npm test`
- [x] revisar visualmente cards, featured panel y meta del post en `en`
- [x] revisar visualmente cards, featured panel y meta del post en `es`
- [x] confirmar manualmente que `category` sigue siendo la unica taxonomy navegable visible
- [x] confirmar manualmente que no existen rutas, archives ni indices nuevos para `angle` o `domain`

---

## 6. Archivos o areas probables

### Docs

- `docs/content/content-system.md`
- `docs/content/content-master.md`
- `docs/architecture/site-architecture.md`
- `docs/architecture/i18n-spec.md`
- `docs/governance/decision-log.md`
- `docs/sdd/parches/blog-angle-domain-i18n/decision.log`

### Codigo

- `src/content.config.ts`
- `src/utils/blog.ts`
- `src/i18n/en.json`
- `src/i18n/es.json`
- `src/content/blog/*.md`
- `src/components/blog/BlogCard.astro`
- `src/components/blog/BlogFeaturedPanel.astro`
- `src/components/blog/BlogPostMeta.astro`
- `src/pages/*/blog/*.astro`

### Configuracion o tests

- `package.json`
- `tests/public-release-closure.test.mjs`
- `tests/blog-es-detail-alignment.test.mjs`

---

## 7. Hallazgos durante ejecucion

- Fecha: `2026-04-26`
  - hallazgo:
    el estado brownfield no esta completamente limpio al abrir la fase: `src/content/blog/one-off-tourneys.md` ya trae cambios locales previos y existe un post en espanol sin trackear `src/content/blog/por-que-llevar-los-esports-al-centro-comercial.md`; ambos siguen usando labels visibles en ingles para `angle` y `domain`
  - impacto:
    la precondicion de "sin ejecucion parcial previa" no se cumple de forma estricta y la migracion debe convivir con cambios locales ajenos sin revertirlos
  - accion:
    registrar el drift en backlog, preservar esos archivos y aplicar la migracion estable sobre el estado actual en vez de intentar limpiar el arbol

- Fecha: `2026-04-26`
  - hallazgo:
    `npm run build` y `npm test` no deben ejecutarse en paralelo en esta fase porque `tests/blog-es-detail-alignment.test.mjs` dispara su propio `npm run build` con un fixture temporal en `src/content/blog/`
  - impacto:
    una validacion concurrente produjo un falso fallo inicial en `npm test`, aunque el codigo ya estaba correcto
  - accion:
    repetir validaciones en secuencia; `npm run build` y `npm test` cerraron en verde al rehacerse secuencialmente

---

## 8. Blockers

- [x] ninguno activo al abrir la fase

---

## 9. Decisiones tomadas

- Fecha: `2026-04-26`
  - decision:
    mantener la ejecucion en una sola fase y absorber el drift brownfield detectado dentro del mismo corte de migracion, sin revertir `one-off-tourneys.md` ni el post en espanol sin trackear
  - razon:
    el drift no cambia el alcance ni reabre decisiones editoriales; solo obliga a migrar sobre el estado real del workspace compartido
  - documentos o areas afectadas:
    `docs/sdd/parches/blog-angle-domain-i18n/backlog/fase1.md`, `src/content/blog/*.md`, `src/utils/blog.ts`, `src/content.config.ts`, componentes del blog y tests

- Fecha: `2026-04-26`
  - decision:
    no tocar `src/pages/*/blog/*.astro` porque la navegacion ya estaba correctamente anclada a `category` y el cambio requerido se resolvio en labels, schema y componentes
  - razon:
    no hacia falta expandir alcance a routing o plantillas de pagina para cumplir el contrato nuevo
  - documentos o areas afectadas:
    `src/pages/en/blog/[slug].astro`, `src/pages/es/blog/[slug].astro`, `src/pages/*/blog/category/[category].astro`, `src/components/blog/*.astro`

---

## 10. Validaciones

### Documentales

- [x] verificar alineacion con `docs/README.md`
- [x] verificar alineacion con `docs/content/content-system.md`, `docs/content/content-master.md`, `docs/architecture/site-architecture.md`, `docs/architecture/i18n-spec.md` y `docs/governance/decision-log.md`
- [x] verificar continuidad con `docs/sdd/parches/blog-taxonomy-vision/*`
- [x] verificar que el backlog sigue trazable a `tasks.md`

### Tecnicas

- [x] `npm run build`
- [x] `npm test`
- [x] revisar que schema, utilidades, frontmatter, i18n y componentes usen la misma forma de dato estable para `angle` y `domain`

### Manuales

- [x] revision visual/manual de cards, featured panel y meta del post en `en`
- [x] revision visual/manual de cards, featured panel y meta del post en `es`
- [x] revision manual de que `category` siga siendo la unica taxonomy navegable visible
- [x] revision manual de que no nazcan rutas para `angle` o `domain`

### Resultados

- Comando o revision: `npm run build`
- Resultado: ok en secuencia; build estatico completo con rutas blog limitadas a index, detail y category

- Comando o revision: `npm test`
- Resultado: ok en secuencia; `2/2` tests pasan despues de evitar ejecucion paralela con `build`

- Comando o revision: inspeccion manual de `dist/en/blog/index.html`, `dist/en/blog/ambiguous-commercial-asks/index.html`, `dist/en/blog/category/project-delivery/index.html`
- Resultado: `angle` y `domain` renderizan labels visibles en `en`; no aparece la clave cruda `delivery-framework`

- Comando o revision: inspeccion manual de `dist/es/blog/index.html` y evidencia del fixture temporal de `tests/blog-es-detail-alignment.test.mjs`
- Resultado: `es` mantiene la superficie actual sin rutas nuevas y el fixture temporal confirma render localizado `Framework de Trabajo` para detail cuando existe un post publicado en `es`

- Comando o revision: inspeccion de rutas generadas y arbol `dist`
- Resultado: no existen rutas, archives ni indices para `angle` o `domain`; `category` sigue siendo la unica taxonomy navegable
- Notas:

---

## 11. Cierre

La fase solo se considera cerrada si:

- [x] checklist completo o pendientes explicitamente diferidos
- [x] decisiones relevantes registradas
- [x] validaciones requeridas ejecutadas o justificadas
- [x] `npm run build` y `npm test` completados o bloqueados con causa documentada
- [x] no hay drift sin registrar entre contratos, runtime y tests
- [x] `category` sigue siendo la unica taxonomy navegable y no existen rutas nuevas para `angle` o `domain`
- [x] reporte final listo

---

## 12. Riesgos y pendientes

### Riesgos

- riesgo: dejar drift contractual si se migra runtime sin completar primero la sincronizacion documental minima
- riesgo: mezclar posts con labels visibles legados y posts con claves internas nuevas dentro del mismo corte
- riesgo: filtrar claves internas a UI si algun componente sigue renderizando el valor crudo
- riesgo: romper tests heredados que todavia esperan strings visibles en ingles
- riesgo: introducir sin querer enlaces, filtros o rutas nuevas para `angle` o `domain` al tocar componentes o paginas

### Pendientes

- pendiente: registrar hallazgos o drift si durante la ejecucion aparece una superficie adicional que consuma `angle` o `domain`

---

## 13. Registro de cambios

- 2026-04-26:
  - cambio: creacion inicial de `backlog/fase1.md`
  - razon: preparar la ejecucion controlada de la Fase 1 del cambio `blog-angle-domain-i18n`
- 2026-04-26:
  - cambio: cierre documental de la Fase 1
  - razon: reflejar que la implementacion, validaciones y revisiones manuales ya cerraron en verde
