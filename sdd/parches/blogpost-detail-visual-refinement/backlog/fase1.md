# Backlog Fase 1 - Refinamiento visual del blog post detail

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

* Change id: `blogpost-detail-visual-refinement`
* Patch kind: `spec`
* Lifecycle: `spec-anchored`
* Fase: `1 - Refinamiento visual del blog post detail`
* Estado: `done`
* Ultima actualizacion: `2026-05-19`
* Owner: `usuario`
* Depende de: `definicion.md`, `plan.md`, `tasks.md`
* Desbloquea: `sdd-close`

---

## 1. Fuente de verdad aplicable

* `docs/README.md`
* `AGENTS.md`
* `sdd/parches/blogpost-detail-visual-refinement/patch.yaml`
* `sdd/parches/blogpost-detail-visual-refinement/definicion.md`
* `sdd/parches/blogpost-detail-visual-refinement/plan.md`
* `sdd/parches/blogpost-detail-visual-refinement/tasks.md`

---

## 2. Objetivo de la fase

* Resultado esperado: `/blog/[slug]` queda mas equilibrado visualmente, con `Key idea` iniciando la lectura y blockquotes mas editoriales.
* Razon de la fase: el cambio afecta una superficie publica visible ya redisenada y requiere sincronizacion puntual de contrato.
* Cambio que queda habilitado al cerrar: cierre formal del patch.

---

## 3. Rama obligatoria por tipo

### Si `patch_kind = spec`

* fuente viva o alcance de spec que esta fase modifica: `docs/architecture/site-architecture.md` y runtime detail EN/ES.
* reconciliacion esperada: `Key idea` deja de estar descrito como parte del hero y pasa al area de lectura.

### Si `patch_kind = batch`

* items cerrados cubiertos por esta fase: `no aplica`
* criterio global de cierre que esta fase acerca: `no aplica`
* criterio de cierre por item: `no aplica`
* split check: `no aplica`

---

## 4. Assumptions

* No critical assumptions.

---

## 5. Precondiciones

### Documentos

* [x] `definicion.md`, `plan.md` y `tasks.md` vigentes

### Decisiones previas

* [x] no hay decisiones abiertas bloqueantes

### Estado tecnico

* [x] rutas detail EN/ES y CSS compartido existen

---

## 6. Alcance

### Si entra

* [x] contrato puntual de estructura detail
* [x] rutas detail EN/ES
* [x] CSS compartido del blog detail

### No entra

* [x] posts markdown
* [x] schema `blog_post`
* [x] blog index, category pages, SEO estructural o deployment

---

## 7. Archivos y superficies de trabajo

### Leer antes de editar

* `docs/README.md`
* `docs/architecture/site-architecture.md`
* `docs/content/content-system.md`
* `docs/visual/visual-system.md`
* `src/pages/en/blog/[slug].astro`
* `src/pages/es/blog/[slug].astro`
* `src/styles/global.css`

### Editar

* `docs/architecture/site-architecture.md`
* `src/pages/en/blog/[slug].astro`
* `src/pages/es/blog/[slug].astro`
* `src/styles/global.css`
* `sdd/parches/blogpost-detail-visual-refinement/backlog/fase1.md`

### Validar

* `npm run build`
* `git diff --check`

### No tocar

* `src/content/blog/*.md`
* `src/content.config.ts`
* `src/i18n/*.json`
* rutas fuera de `src/pages/*/blog/[slug].astro`

---

## 8. Checklist de ejecucion

### Bloque A - Relectura de fuentes

* [x] leer handoff y contratos aplicables
* [x] confirmar que no hay cambio de schema ni contenido

### Bloque B - Inspeccion de estado actual

* [x] ubicar `Key idea` actual dentro del hero
* [x] ubicar estilos actuales de hero, image shell, reading layout, TOC y blockquote

### Bloque C - Edicion por archivo

* [x] editar `site-architecture.md` para mover `Key idea` al area de lectura
* [x] editar ruta EN para mover `blog-key-idea` antes de `<Content />` y aplicar H1 compacto
* [x] editar ruta ES con el mismo cambio que EN
* [x] editar CSS para balance de hero, imagen `3 / 2`, H1 local y blockquote editorial

### Bloque D - Registro de decisiones, hallazgos o blockers

* [x] registrar drift documental resuelto
* [x] registrar hallazgos de validacion

### Bloque E - Validacion

* [x] ejecutar `npm run build`
* [x] ejecutar `git diff --check`
* [x] registrar revision visual como manual o diferida segun entorno

### Bloque F - Cierre

* [x] registrar resultados
* [x] marcar fase como `done` si corresponde

---

## 9. Drift detectado

* Fecha: `2026-05-19`
  * fuente esperada: `docs/architecture/site-architecture.md`
  * diferencia encontrada: el contrato describe `Key idea` dentro del hero, pero el handoff aprobado lo mueve al area de lectura.
  * impacto: implementar sin actualizar docs generaria drift docs-codigo.
  * accion: actualizar contrato en esta fase.
  * requiere decision: `no`

---

## 10. Hallazgos durante ejecucion

* Fecha: `2026-05-19`
  * hallazgo: el refinamiento no requiere cambios a `content-system.md`; su regla vigente de `excerpt` como `Key idea` sigue siendo compatible porque no fija ubicacion en hero.
  * impacto: la reconciliacion documental queda acotada a `site-architecture.md`.
  * accion: no tocar `content-system.md`.
* Fecha: `2026-05-19`
  * hallazgo: Playwright MCP no puede iniciar Chromium porque falta la distribucion Chrome en `/opt/google/chrome/chrome`.
  * impacto: la revision visual responsive no puede contarse como ejecutada en este entorno.
  * accion: registrar revision visual manual como pendiente diferido.

---

## 11. Blockers

* [x] ninguno

---

## 12. Decisiones tomadas

* Fecha: `2026-05-19`
  * decision: resolver el refinamiento en una fase unica.
  * razon: el alcance es local a una superficie y no toca contenido, schema ni rutas nuevas.
  * documentos o areas afectadas: artifacts SDD, detail EN/ES, CSS.

---

## 13. Validaciones

### Documentales

* [x] verificar alineacion con contratos aplicables

### Tecnicas

* [x] `npm run build`
* [x] `npm test`
* [x] `git diff --check`

### Manuales

* [ ] revision visual de detail EN/ES en desktop/mobile

### Resultados

* Validacion:
  * comando o revision: revision documental de `docs/architecture/site-architecture.md`, `docs/content/content-system.md` y handoff
  * resultado esperado: sin contradiccion sobre ubicacion de `Key idea`
  * resultado obtenido: contrato arquitectonico actualizado; `content-system.md` compatible sin cambio
  * estado: `pass`
  * notas: drift documental resuelto
* Validacion:
  * comando o revision: `npm run build`
  * resultado esperado: build exitoso
  * resultado obtenido: build exitoso; 28 paginas generadas
  * estado: `pass`
  * notas: Browserslist reporto datos desactualizados, sin fallar build
* Validacion:
  * comando o revision: `npm test`
  * resultado esperado: suite exitosa
  * resultado obtenido: 3 tests pass, 0 fail
  * estado: `pass`
  * notas: incluye `tests/blog-es-detail-alignment.test.mjs`
* Validacion:
  * comando o revision: `git diff --check`
  * resultado esperado: sin errores de whitespace
  * resultado obtenido: sin salida, exit code 0
  * estado: `pass`
  * notas: no se detectaron errores
* Validacion:
  * comando o revision: Playwright MCP sobre preview local
  * resultado esperado: revision visual EN/ES en desktop/mobile
  * resultado obtenido: no ejecutada; Chromium distribution `chrome` no encontrada en `/opt/google/chrome/chrome`
  * estado: `skipped`
  * notas: revision manual diferida

---

## 14. Cierre

La fase solo se considera cerrada si:

* [x] checklist completo o pendientes explicitamente diferidos
* [x] assumptions criticas resueltas, aceptadas o escaladas
* [x] decisiones relevantes registradas
* [x] blockers resueltos o diferidos con razon
* [x] drift documentado o resuelto
* [x] validaciones requeridas ejecutadas o justificadas
* [x] resultados de validacion registrados

---

## 15. Riesgos y pendientes

### Riesgos

* ajuste visual fino puede requerir revision manual posterior.

### Pendientes

* revision visual manual responsive EN/ES por falta de Chrome en Playwright MCP.
