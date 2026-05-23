# Tasks: Blog Angle Domain I18n

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

- Change id: `blog-angle-domain-i18n`
- Estado: `done`
- Ultima actualizacion: `2026-04-26`
- Owner: `pawpaw + Codex`
- Depende de:
  - `docs/sdd/parches/blog-angle-domain-i18n/definicion.md`
  - `docs/sdd/parches/blog-angle-domain-i18n/plan.md`
  - `docs/sdd/parches/blog-angle-domain-i18n/decision.log`
- Desbloquea:
  - `docs/sdd/parches/blog-angle-domain-i18n/backlog/fase1.md`

---

## 1. Fuente de verdad aplicable

- `docs/README.md`
- `docs/sdd/parches/blog-angle-domain-i18n/definicion.md`
- `docs/sdd/parches/blog-angle-domain-i18n/plan.md`
- `docs/sdd/parches/blog-angle-domain-i18n/decision.log`
- documentos contractuales aplicables:
  - `docs/content/content-system.md`
  - `docs/content/content-master.md`
  - `docs/architecture/site-architecture.md`
  - `docs/architecture/i18n-spec.md`
  - `docs/governance/decision-log.md`
- documentos auxiliares aplicables:
  - `docs/sdd/templates/tasks.md`
  - `docs/sdd/parches/blog-taxonomy-vision/definicion.md`
  - `docs/sdd/parches/blog-taxonomy-vision/tasks.md`

Nota:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- este `tasks.md` no puede contradecir `definicion.md`, `plan.md` ni documentos contractuales
- este cambio mantiene que `category` sigue siendo la unica taxonomy navegable y que no nacen rutas nuevas para `angle` o `domain`

---

## 2. Resumen del plan

- El cambio ejecuta en un solo corte la sincronizacion contractual, el ajuste brownfield de schema/runtime/contenido y la validacion final del modelo localizado para `angle` y `domain`.
- Viene trazado al Bloque A del `plan.md` para actualizar contratos y dejar explicito que `category` sigue siendo la unica taxonomy navegable.
- Viene trazado al Bloque B del `plan.md` para migrar `angle` y `domain` a claves internas estables, resolver labels visibles desde `src/i18n/en.json` y `src/i18n/es.json`, y adaptar contenido y componentes.
- Viene trazado al Bloque C del `plan.md` para ajustar checks existentes y cerrar el parche con `npm run build`, `npm test` y revision manual en `en` y `es`.
- No hay decisiones abiertas que bloqueen `tasks.md`; la forma del mapping localizado ya quedo cerrada en `decision.log`.

---

## 3. Fases

### Fase 1 - Sincronizacion contractual, runtime brownfield y cierre

- Objetivo:
  - cerrar el cambio completo en una sola fase ejecutable, alineando contratos, migrando `angle` y `domain` a claves estables con labels localizados y validando que `category` siga siendo la unica taxonomy navegable sin crear rutas nuevas
- Precondiciones:
  - `definicion.md`, `plan.md` y `decision.log` del cambio siguen vigentes y sin conflicto
  - se mantiene el vocabulario controlado ya aprobado para `angle` y `domain`
  - no se introduce ninguna ruta, archive o indice nuevo para `angle` o `domain`
- Tareas:
  - [ ] ejecutar el Bloque A del `plan.md`: sincronizar `docs/content/content-system.md`, `docs/content/content-master.md` y los contratos de arquitectura/i18n necesarios para dejar explicito que `angle` y `domain` pasan a claves internas con labels localizados y que `category` sigue siendo la unica taxonomy navegable
  - [ ] ejecutar el Bloque B del `plan.md`: adaptar `src/utils/blog.ts`, `src/content.config.ts`, `src/i18n/en.json`, `src/i18n/es.json`, `src/content/blog/*.md` y las superficies de render del blog para que `angle` y `domain` persistan claves estables y resuelvan labels visibles por locale
  - [ ] ejecutar el Bloque C del `plan.md`: ajustar `tests` existentes a la nueva representacion, verificar que no haya fuga de claves internas a UI y cerrar el parche con build, test y revision manual en `en` y `es`
  - [ ] verificar durante la ejecucion que cualquier navegacion, archive o superficie taxonomy siga anclada exclusivamente a `category`, sin derivar rutas ni indices para `angle` o `domain`
- Archivos o areas probables:
  - `docs/content/content-system.md`
  - `docs/content/content-master.md`
  - `docs/architecture/site-architecture.md`
  - `docs/architecture/i18n-spec.md`
  - `docs/governance/decision-log.md`
  - `src/content.config.ts`
  - `src/utils/blog.ts`
  - `src/i18n/en.json`
  - `src/i18n/es.json`
  - `src/content/blog/*.md`
  - `src/components/blog/*.astro`
  - `src/pages/*/blog/*.astro`
  - `tests/public-release-closure.test.mjs`
  - `tests/blog-es-detail-alignment.test.mjs`
  - `package.json`
- Validaciones:
  - [ ] validacion documental de alineacion con `docs/README.md`, contratos aplicables y trazabilidad con `blog-taxonomy-vision`
  - [ ] `npm run build`
  - [ ] `npm test`
  - [ ] revision manual de cards, featured panel, meta del post y superficies taxonomy en `en` y `es`
- Criterio de cierre:
  - contratos, schema, contenido, runtime y tests quedan alineados al mismo modelo
  - `angle` y `domain` funcionan como claves internas con labels visibles localizados
  - `category` sigue siendo la unica taxonomy navegable
  - no existen rutas, archives ni indices nuevos para `angle` o `domain`

---

## 4. Dependencias entre fases

- Fase 1 bloquea:
  - `docs/sdd/parches/blog-angle-domain-i18n/backlog/fase1.md`
- No se requieren fases adicionales para cerrar el objetivo actual

---

## 5. Decisiones y bloqueos

### Decisiones abiertas

- [ ] ninguna para ejecutar la Fase 1

### Bloqueos

- [ ] ninguno identificado en este estado

### Escalaciones requeridas

- [ ] ninguna mientras no aparezca conflicto entre contratos y realidad brownfield durante la ejecucion

---

## 6. Tareas diferidas

- [ ] ninguna necesaria para cerrar el objetivo actual
- [ ] cualquier fase adicional solo aplica si la ejecucion detecta drift contractual no previsto o una necesidad nueva fuera de alcance

---

## 7. Validaciones globales

### Documentales

- [ ] verificar alineacion con `docs/README.md`
- [ ] verificar alineacion con `docs/content/content-system.md`, `docs/content/content-master.md`, `docs/architecture/site-architecture.md`, `docs/architecture/i18n-spec.md` y `docs/governance/decision-log.md`
- [ ] verificar trazabilidad desde `plan.md` y continuidad con `docs/sdd/parches/blog-taxonomy-vision/*`

### Tecnicas

- [ ] `npm run build`
- [ ] `npm test`
- [ ] revisar que schema, contenido migrado, utilidades y componentes usen la misma forma de dato estable para `angle` y `domain`

### Manuales

- [ ] revision visual/manual de cards, featured panel y meta del post en `en`
- [ ] revision visual/manual de cards, featured panel y meta del post en `es`
- [ ] revision manual de que `category` siga siendo la unica taxonomy navegable visible y que no nazcan rutas para `angle` o `domain`

---

## 8. Criterio de cierre

Este `tasks.md` queda listo para `sdd-phase-backlog` solo si:

- [x] existe una Fase 1 suficiente para cerrar el cambio completo
- [x] la fase tiene objetivo, precondiciones, tareas, validaciones y criterio de cierre
- [x] cada tarea es trazable al `plan.md`
- [x] las validaciones son reales y no inventan scripts
- [x] queda explicito que `category` sigue siendo la unica taxonomy navegable
- [x] queda explicito que no nacen rutas nuevas para `angle` o `domain`

---

## 9. Registro de cambios

- Fecha: `2026-04-26`
  - cambio: creacion inicial de `tasks.md` con una sola Fase 1 ejecutable para cierre completo del parche
  - razon: el cambio es pequeno-mediano y no requiere fragmentacion adicional mas alla de la trazabilidad a sincronizacion contractual, runtime/migracion y validacion
