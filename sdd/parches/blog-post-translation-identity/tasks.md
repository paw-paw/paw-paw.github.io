# Tasks: blog-post-translation-identity

## Estado

- Change id: `blog-post-translation-identity`
- Patch kind: `spec`
- Lifecycle: `spec-first`
- Estado: `ready-for-backlog`
- Ultima actualizacion: `2026-05-18`
- Owner: `usuario`

---

## 1. Fuente de verdad aplicable

- `docs/README.md`
- `sdd/parches/blog-post-translation-identity/patch.yaml`
- `sdd/parches/blog-post-translation-identity/definicion.md`
- `sdd/parches/blog-post-translation-identity/plan.md`
- `sdd/parches/blog-post-translation-identity/decision.log`

---

## 2. Preflight

- [x] `definicion.md` vigente
- [x] `plan.md` vigente
- [x] assumptions criticas clasificadas antes de dividir fases
- [x] no hay decisiones abiertas bloqueantes

---

## 3. Resumen del plan

- resumen: primero se actualizan los contratos vivos para introducir `i18n_key`; después se implementa el modelo en runtime, se migra la pareja ya traducida y se validan tanto el caso con equivalencia real como el fallback monolingüe.

---

## 4. Fases

### Fase 1 - Contrato de identidad traducible

- Objetivo: dejar documentada la separación entre identidad editorial común y `slug` localizado.
- Origen en `plan.md`: Bloque 1.
- Precondiciones: decisión `i18n_key` registrada.
- Tareas:
  - actualizar contrato de `blog_post` con la nueva identidad común;
  - aclarar equivalencia exacta y fallback en i18n;
  - reconciliar SEO/release checklist si corresponde.
- Archivos o areas probables:
  - `docs/content/content-system.md`
  - `docs/architecture/i18n-spec.md`
  - `docs/delivery/seo-spec.md`
  - `docs/delivery/release-checklist.md`
- Validaciones:
  - revisión documental contra definición y plan.
- Criterio de cierre:
  - los contratos describen `i18n_key` sin ambigüedad y sin exigir traducción universal.

### Fase 2 - Implementacion, migracion y validacion

- Objetivo: hacer que el runtime use `i18n_key` y verificar el comportamiento público resultante.
- Origen en `plan.md`: Bloque 2.
- Precondiciones: Fase 1 cerrada.
- Tareas:
  - extender schema;
  - migrar los posts de Burger King;
  - reemplazar equivalencia por slug por equivalencia por `i18n_key`;
  - ajustar tests positivos y de fallback;
  - ejecutar validaciones técnicas y revisión de rutas afectadas.
- Archivos o areas probables:
  - `src/content.config.ts`
  - `src/content/blog/*.md`
  - `src/utils/blog.ts`
  - `tests/blog-es-detail-alignment.test.mjs`
  - `tests/public-release-closure.test.mjs`
- Validaciones:
  - `npm test`
  - `npm run build`
  - revisión de alternates y switcher en detail.
- Criterio de cierre:
  - Burger King enlaza entre locales y los posts sin equivalencia conservan fallback al índice.

---

## 5. Dependencias entre fases

- Fase 1 bloquea: Fase 2

---

## 6. Decisiones y bloqueos

- decisiones abiertas bloqueantes: `none`
- decisiones abiertas no bloqueantes: `none`

---

## 7. Validaciones globales

- [ ] alineacion documental con contratos aplicables
- [ ] `npm test`
- [ ] `npm run build`

---

## 8. Criterio de cierre

- [x] cada fase tiene objetivo, precondiciones, tareas, validaciones y criterio de cierre
- [x] cada tarea es trazable al `plan.md`
- [x] las validaciones son reales

---

## 9. Registro de cambios

- Fecha: `2026-05-18`
  - cambio: creacion inicial de fases y tareas.
  - razon: preparar la ejecucion controlada del plan.
