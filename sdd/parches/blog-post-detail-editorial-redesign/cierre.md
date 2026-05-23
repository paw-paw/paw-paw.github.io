# Cierre: blog-post-detail-editorial-redesign

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

- Change id: `blog-post-detail-editorial-redesign`
- Program id: `none`
- Patch kind: `spec`
- Lifecycle: `spec-anchored`
- Status final: `closed`
- Fecha de cierre: `2026-05-18`
- Owner: `usuario`
- Nivel de cierre: `anchored`

---

## 1. Resumen

- Objetivo original: convertir `blog post detail` en una superficie mas editorial, autoral y escaneable sin ampliar el schema de `blog_post`.
- Resultado ejecutado: se reconciliaron contratos, se reestructuro el corpus publicado con headings y blockquotes, y se implemento un nuevo detail con hero editorial, `Key idea`, cuerpo abierto y rail interno derivado de headings.
- Alcance cerrado: docs vivas del detail, retrofit de posts publicados, rutas detail EN/ES, labels i18n, estilos y tests asociados.
- Alcance diferido: revision visual manual responsive por ausencia de navegador MCP utilizable en el entorno actual.

---

## 2. Rama obligatoria por tipo

### Si `patch_kind = spec`

- fuente viva reconciliada:
  - `docs/architecture/site-architecture.md`
  - `docs/content/content-system.md`
- cambio promovido:
  - estructura obligatoria del cuerpo, `Key idea` visible desde `excerpt`, rail `On this page` y nuevo patron de detalle editorial.

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
- `backlog/fase2.md`
- `backlog/fase3.md`
- `backlog/fase4.md`
- `decision.log`

---

## 4. Decisiones relevantes

- decision: hacer contractual la estructura `3-4` secciones + `1-2` blockquotes.
  - fuente: `decision.log`
  - impacto: obliga a reconciliar docs y corpus publicado.
- decision: hacer obligatorio el rail interno del detail.
  - fuente: `decision.log`
  - impacto: convierte headings reales en soporte estructural de navegacion.
- decision: incluir el retrofit de todos los posts publicados en el mismo patch.
  - fuente: `decision.log`
  - impacto: cierra el cambio como experiencia editorial completa.
- decision: mostrar `Key idea` reutilizando `excerpt` sin nuevo campo.
  - fuente: `decision.log`
  - impacto: cambia presentacion visible sin ampliar schema.
- decision: mantener estandar firme con aplicacion editorial flexible.
  - fuente: `decision.log`
  - impacto: evita que el nuevo contrato derive en una plantilla mecanica.

---

## 5. Assumptions, blockers y findings

### Assumptions

- No critical assumptions.

### Blockers

- blocker: browser review MCP no ejecutable por ausencia de Chrome distribuido en el entorno.
  - estado: `diferido`
  - resolucion o razon de diferimiento: la validacion visual queda pendiente de revision manual externa; no invalida build ni tests automatizados.

### Findings

- finding: `visual-system` ya cubria la nueva direccion de composicion editorial sin requerir cambios.
  - evidencia: lectura cruzada en `backlog/fase1.md`
  - impacto: se mantuvo acotada la reconciliacion contractual.
- finding: el fixture temporal del test espanol necesitaba headings bajo el nuevo contrato.
  - evidencia: `backlog/fase3.md` + actualizacion de `tests/blog-es-detail-alignment.test.mjs`
  - impacto: la suite quedo alineada con la nueva verdad documental.

---

## 6. Drift

- drift:
  - categoria: `contractual`
  - fuente esperada: `docs/content/content-system.md`
  - diferencia encontrada: el cuerpo del post aun figuraba sin sub-bloques internos obligatorios.
  - accion: regla reemplazada por el nuevo contrato estructural aprobado.
  - estado: `resuelto`
- drift:
  - categoria: `operational`
  - fuente esperada: tests de detail
  - diferencia encontrada: assertions fragiles asumian un orden fijo de atributos HTML.
  - accion: regex hechas tolerantes al orden sin cambiar la semantica comprobada.
  - estado: `resuelto`

---

## 7. Reconciliacion de fuente viva

- fuente viva afectada:
  - `docs/architecture/site-architecture.md`
  - `docs/content/content-system.md`
- cambio requerido:
  - describir el nuevo detail editorial y convertir la estructura interna del cuerpo en contrato vivo.
- estado: `aplicado`
- evidencia:
  - `backlog/fase1.md`
  - diff de docs contractuales

---

## 8. Validaciones

- validacion:
  - tipo: `automated`
  - comando o revision: `npm run build`
  - resultado esperado: build exitoso
  - resultado obtenido: build exitoso
  - estado: `pass`
  - evidencia: ejecucion del `2026-05-18`
- validacion:
  - tipo: `automated`
  - comando o revision: `npm test`
  - resultado esperado: suite exitosa
  - resultado obtenido: suite exitosa
  - estado: `pass`
  - evidencia: 3 archivos de test aprobados
- validacion:
  - tipo: `automated`
  - comando o revision: `git diff --check`
  - resultado esperado: sin errores de whitespace
  - resultado obtenido: sin errores
  - estado: `pass`
  - evidencia: ejecucion del `2026-05-18`
- validacion:
  - tipo: `deferred`
  - comando o revision: browser review EN/ES en 375px, 768px y 1440px
  - resultado esperado: revision visual completa del nuevo detail
  - resultado obtenido: no ejecutada; Playwright MCP no encontro distribucion Chrome
  - estado: `skipped`
  - evidencia: error de Playwright durante la Fase 4

---

## 9. Riesgos residuales

- riesgo: puede quedar algun ajuste fino de ritmo visual en breakpoints intermedios.
  - impacto: menor; no afecta build ni contrato funcional.
  - mitigacion: completar revision visual manual y abrir un patch pequeno si aparece una correccion real.

---

## 10. Pendientes

- pendiente: revision visual manual EN/ES en 375px, 768px y 1440px.
  - owner: `usuario`
  - razon: navegador MCP no utilizable en el entorno actual.

---

## 11. Criterio de cierre

- [x] fases seleccionadas cerradas o diferidas con razon
- [x] assumptions criticas resueltas, aceptadas o escaladas
- [x] decisiones relevantes registradas
- [x] drift clasificado y resuelto o diferido
- [x] validaciones registradas
- [x] fuente viva reconciliada o marcada no aplicable
- [x] riesgos residuales visibles
