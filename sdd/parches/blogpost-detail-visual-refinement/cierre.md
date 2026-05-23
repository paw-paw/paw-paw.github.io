# Cierre: blogpost-detail-visual-refinement

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

- Change id: `blogpost-detail-visual-refinement`
- Program id: `none`
- Patch kind: `spec`
- Lifecycle: `spec-anchored`
- Status final: `closed`
- Fecha de cierre: `2026-05-19`
- Owner: `usuario`
- Nivel de cierre: `anchored`

---

## 1. Resumen

- Objetivo original: refinar visualmente `/blog/[slug]` para balancear hero, mover `Key idea` al area de lectura y dar mas caracter editorial a los `blockquote`.
- Resultado ejecutado: contrato arquitectonico ajustado, rutas EN/ES actualizadas, CSS del detail refinado y validaciones automatizadas ejecutadas.
- Alcance cerrado: `Key idea` desde `excerpt` como primer bloque de lectura, H1 local mas compacto, imagen hero `3 / 2`, blockquotes serif italic y alineacion desktop con rail.
- Alcance diferido: revision visual responsive manual por falta de Chrome en Playwright MCP.

---

## 2. Rama obligatoria por tipo

### Si `patch_kind = spec`

- fuente viva reconciliada:
  - `docs/architecture/site-architecture.md`
- cambio promovido:
  - `Key idea` deja de pertenecer al hero y pasa al inicio del area de lectura, alineado con `On this page` en desktop.

### Si `patch_kind = batch`

- estado por item: `no aplica`
- criterio global de cierre: `no aplica`
- item diferido, si existe: `no aplica`

---

## 3. Artifacts revisados

- `patch.yaml`
- `definicion.md`
- `plan.md`
- `tasks.md`
- `backlog/fase1.md`
- `decision.log`: `no aplica`; no hubo decisiones adicionales que requirieran log separado.

---

## 4. Decisiones relevantes

- decision: resolver el refinamiento en una fase unica.
  - fuente: `backlog/fase1.md`
  - impacto: ejecucion acotada a contrato puntual, detail EN/ES y CSS compartido.
- decision: no tocar `content-system.md`.
  - fuente: `backlog/fase1.md`
  - impacto: su regla vigente de `excerpt` como `Key idea` sigue siendo compatible porque no fija ubicacion.

---

## 5. Assumptions, blockers y findings

### Assumptions

- No critical assumptions.

### Blockers

- blocker: Playwright MCP no puede iniciar Chromium porque falta Chrome en `/opt/google/chrome/chrome`.
  - estado: `diferido`
  - resolucion o razon de diferimiento: la validacion visual responsive queda pendiente de revision manual; build y tests pasan.

### Findings

- finding: el unico drift contractual era la ubicacion de `Key idea` en `site-architecture.md`.
  - evidencia: `backlog/fase1.md`
  - impacto: resuelto con actualizacion documental puntual.

---

## 6. Drift

- drift:
  - categoria: `contractual`
  - fuente esperada: `docs/architecture/site-architecture.md`
  - diferencia encontrada: `Key idea` estaba descrito como parte del hero, pero el handoff aprobado lo ubica en el area de lectura.
  - accion: contrato actualizado para separar hero, `Key idea` y rail.
  - estado: `resuelto`

---

## 7. Reconciliacion de fuente viva

- fuente viva afectada:
  - `docs/architecture/site-architecture.md`
- cambio requerido:
  - describir `Key idea` como primer bloque del area de lectura y alinear el rail con ese inicio en desktop.
- estado: `aplicado`
- evidencia:
  - diff de `docs/architecture/site-architecture.md`
  - `backlog/fase1.md`

---

## 8. Validaciones

- validacion:
  - tipo: `automated`
  - comando o revision: `npm run build`
  - resultado esperado: build exitoso
  - resultado obtenido: build exitoso; 28 paginas generadas
  - estado: `pass`
  - evidencia: ejecucion del `2026-05-19`
- validacion:
  - tipo: `automated`
  - comando o revision: `npm test`
  - resultado esperado: suite exitosa
  - resultado obtenido: 3 tests pass, 0 fail
  - estado: `pass`
  - evidencia: ejecucion del `2026-05-19`
- validacion:
  - tipo: `automated`
  - comando o revision: `git diff --check`
  - resultado esperado: sin errores de whitespace
  - resultado obtenido: sin salida, exit code 0
  - estado: `pass`
  - evidencia: ejecucion del `2026-05-19`
- validacion:
  - tipo: `deferred`
  - comando o revision: Playwright MCP sobre preview local
  - resultado esperado: revision visual EN/ES responsive
  - resultado obtenido: no ejecutada; Chromium distribution `chrome` no encontrada
  - estado: `skipped`
  - evidencia: error de Playwright MCP

---

## 9. Riesgos residuales

- riesgo: puede quedar ajuste fino de balance visual tras revisar en navegador real.
  - impacto: menor; no afecta build, rutas ni contratos.
  - mitigacion: completar revision manual responsive y abrir patch pequeno si aparece una correccion concreta.

---

## 10. Pendientes

- pendiente: revision visual manual EN/ES en desktop y mobile.
  - owner: `usuario`
  - razon: Playwright MCP no pudo iniciar Chrome en este entorno.

---

## 11. Criterio de cierre

- [x] fases seleccionadas cerradas o diferidas con razon
- [x] assumptions criticas resueltas, aceptadas o escaladas
- [x] decisiones relevantes registradas
- [x] drift clasificado y resuelto o diferido
- [x] validaciones registradas
- [x] fuente viva reconciliada o marcada no aplicable
- [x] riesgos residuales visibles
