# Tasks: blogpost-detail-visual-refinement

Usa este documento para convertir el plan aprobado en fases macro ejecutables.

---

## Estado

- Change id: `blogpost-detail-visual-refinement`
- Patch kind: `spec`
- Lifecycle: `spec-anchored`
- Estado: `ready-for-backlog`
- Ultima actualizacion: `2026-05-19`
- Owner: `usuario`

---

## 1. Fuente de verdad aplicable

- `docs/README.md`
- `sdd/parches/blogpost-detail-visual-refinement/patch.yaml`
- `sdd/parches/blogpost-detail-visual-refinement/definicion.md`
- `sdd/parches/blogpost-detail-visual-refinement/plan.md`

---

## 2. Preflight

- [x] `definicion.md` vigente
- [x] `plan.md` vigente
- [x] assumptions criticas clasificadas antes de dividir fases
- [x] no hay decisiones abiertas bloqueantes

---

## 3. Resumen del plan

- resumen: una fase unica sincroniza el contrato puntual, mueve `Key idea` al reading layout, compacta el hero y refuerza `blockquote`, seguida por build y cierre.

---

## 4. Fases

### Fase 1 - Refinamiento visual del blog post detail

- Objetivo: cerrar el ajuste visual solicitado sin reabrir schema, contenido ni arquitectura publica.
- Origen en `plan.md`: bloques 1, 2 y 3.
- Precondiciones: patch `blog-post-detail-editorial-redesign` ya cerrado y rutas detail existentes.
- Tareas:
  - actualizar `site-architecture.md` para que `Key idea` pertenezca al area de lectura.
  - mover `Key idea` en rutas EN/ES desde el hero a la columna principal del reading layout.
  - aplicar clase local de H1 compacto en detail.
  - ajustar CSS de hero, imagen, `Key idea`, reading layout y `blockquote`.
  - ejecutar validaciones disponibles y registrar revision visual diferida si aplica.
- Archivos o areas probables:
  - `docs/architecture/site-architecture.md`
  - `src/pages/en/blog/[slug].astro`
  - `src/pages/es/blog/[slug].astro`
  - `src/styles/global.css`
  - `sdd/parches/blogpost-detail-visual-refinement/backlog/fase1.md`
- Validaciones:
  - `npm run build`
  - `git diff --check`
- Criterio de cierre:
  - contrato, rutas y CSS reflejan el handoff; build pasa; pendientes visuales quedan registrados.

---

## 5. Dependencias entre fases

- Fase 1 bloquea: `sdd-close`

---

## 6. Decisiones y bloqueos

- decisiones abiertas bloqueantes: ninguna
- decisiones abiertas no bloqueantes: ninguna

---

## 7. Validaciones globales

- [ ] revision documental
- [ ] `npm run build`
- [ ] `git diff --check`

---

## 8. Criterio de cierre

- [x] cada fase tiene objetivo, precondiciones, tareas, validaciones y criterio de cierre
- [x] cada tarea es trazable al `plan.md`
- [x] las validaciones son reales

---

## 9. Registro de cambios

- Fecha: `2026-05-19`
  - cambio: creacion inicial de fase unica.
  - razon: el alcance es acotado y no requiere fases separadas de contenido o schema.
