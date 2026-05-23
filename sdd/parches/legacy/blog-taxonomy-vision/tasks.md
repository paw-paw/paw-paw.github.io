# Tasks: Blog Taxonomy Vision

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

- Change id: `blog-taxonomy-vision`
- Estado: `done`
- Ultima actualizacion: `2026-04-26`
- Owner: `pawpaw + Codex`
- Depende de:
  - `docs/sdd/parches/blog-taxonomy-vision/definicion.md`
  - `docs/sdd/parches/blog-taxonomy-vision/plan.md`
  - `docs/sdd/parches/blog-taxonomy-vision/decision.log`
- Desbloquea:
  - `docs/sdd/parches/blog-taxonomy-vision/backlog/fase1.md`

---

## 1. Fuente de verdad aplicable

- `docs/README.md`
- `AGENTS.md`
- `docs/AGENTS.md`
- `docs/sdd/parches/blog-taxonomy-vision/definicion.md`
- `docs/sdd/parches/blog-taxonomy-vision/plan.md`
- `docs/sdd/parches/blog-taxonomy-vision/decision.log`
- documentos contractuales aplicables:
  - `docs/content/content-system.md`
  - `docs/content/content-master.md`
  - `docs/architecture/site-architecture.md`
  - `docs/architecture/i18n-spec.md`
  - `docs/delivery/seo-spec.md`
- documentos auxiliares aplicables:
  - `docs/sdd/parches/blog-taxonomy-vision/handover.md`
  - `docs/sdd/templates/tasks.md`

Nota:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- este `tasks.md` no puede contradecir `definicion.md`, `plan.md` ni documentos contractuales
- si hace falta cambiar la secuencia macro del plan, registra la decision antes de seguir

---

## 2. Resumen del plan

El cambio amplía la taxonomia del blog de una sola categoria a tres capas visibles: `category`, `angle` y `domain`.
La documentacion contractual debe actualizarse primero para que el cambio no rompa precedencia.
Despues se ajustan schema, contenido y componentes del blog para mostrar las tres capas sin crear rutas nuevas.
El cierre se verifica con build, tests y revision manual del blog publicado.

---

## 3. Fases

### Fase 1 - Contrato y modelo editorial

- Objetivo:
  - dejar documentado y contractualmente aprobado el nuevo modelo de taxonomia del blog
- Precondiciones:
  - `definicion.md` vigente
  - `plan.md` vigente
  - no hay drift contractual sin registrar
- Tareas:
  - [ ] actualizar `docs/content/content-system.md`
  - [ ] actualizar `docs/content/content-master.md`
  - [ ] registrar la decision de alcance en `decision.log`
- Archivos o areas probables:
  - `docs/content/content-system.md`
  - `docs/content/content-master.md`
  - `docs/sdd/parches/blog-taxonomy-vision/decision.log`
- Validaciones:
  - [ ] verificar alineacion con `docs/README.md`
  - [ ] verificar alineacion con contratos aplicables
- Criterio de cierre:
  - el contrato deja claro que `category` sigue siendo principal y que `angle`/`domain` son capas editoriales visibles

### Fase 2 - Implementacion runtime y migracion de contenido

- Objetivo:
  - llevar la taxonomia al schema, a los posts publicados y a la UI del blog
- Precondiciones:
  - Fase 1 cerrada
  - contrato actualizado
- Tareas:
  - [ ] ampliar schema de `blog`
  - [ ] definir listas controladas de `angle` y `domain`
  - [ ] actualizar helpers de blog
  - [ ] actualizar componentes y paginas del blog
  - [ ] migrar los posts publicados
- Archivos o areas probables:
  - `src/content.config.ts`
  - `src/utils/blog.ts`
  - `src/components/blog/*.astro`
  - `src/pages/*/blog/*.astro`
  - `src/content/blog/*.md`
- Validaciones:
  - [ ] `npm run build`
  - [ ] `npm test`
  - [ ] revision visual/manual del blog
- Criterio de cierre:
  - el blog renderiza las tres capas de taxonomia de forma consistente en index, featured y detail

### Fase 3 - Verificacion y cierre

- Objetivo:
  - confirmar que el cambio no introdujo drift ni roturas en la superficie publica
- Precondiciones:
  - Fase 2 cerrada
- Tareas:
  - [ ] revisar resultados de build y tests
  - [ ] revisar manualmente rutas publicas del blog
  - [ ] cerrar pendientes menores si aparecen
- Archivos o areas probables:
  - `tests/*.mjs`
  - `dist/`
- Validaciones:
  - [ ] inspeccion textual y visual de la salida
- Criterio de cierre:
  - el cambio queda listo para reporte final y sin drift documental abierto

---

## 4. Dependencias entre fases

- Fase 1 bloquea:
  - Fase 2
  - Fase 3
- Fase 2 bloquea:
  - Fase 3

---

## 5. Decisiones y bloqueos

### Decisiones abiertas

- [ ] ninguna bloqueante en esta iteracion

### Bloqueos

- [x] no ejecutar runtime antes de actualizar contrato

### Escalaciones requeridas

- [ ] si se decide crear rutas o archives nuevos para `angle` o `domain`

---

## 6. Tareas diferidas

- [ ] evaluar si conviene convertir la taxonomia en una capa derivada de datos estructurados

---

## 7. Validaciones globales

### Documentales

- [ ] verificar alineacion con `docs/README.md`
- [ ] verificar alineacion con documentos contractuales aplicables
- [ ] verificar trazabilidad desde `plan.md`

### Tecnicas

- [ ] `npm run build`
- [ ] `npm test`
- [ ] otra validacion relevante

### Manuales

- [ ] revision visual/manual del blog
- [ ] revision de navegacion, metadata y labels

---

## 8. Criterio de cierre

Este `tasks.md` queda listo para `sdd-phase-backlog` solo si:

- [x] cada fase tiene objetivo, precondiciones, tareas, validaciones y criterio de cierre
- [x] no hay decisiones abiertas que bloqueen la fase seleccionada
- [x] cada tarea es trazable al `plan.md`
- [x] las validaciones son reales y no inventan scripts

---

## 9. Registro de cambios

- 2026-04-25:
  - cambio: creacion inicial de `tasks.md` para `blog-taxonomy-vision`
  - razon: convertir el plan tecnico en fases macro ejecutables
- 2026-04-26:
  - cambio: sync de drift para mover `angle` y `domain` a vocabulario controlado dentro de Fase 2
  - razon: alinear las tareas con la taxonomia cerrada pedida para runtime
