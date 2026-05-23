# Backlog Fase 1: Contrato y modelo editorial

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

- Change id: `blog-taxonomy-vision`
- Fase: `1 - Contrato y modelo editorial`
- Estado: `done`
- Ultima actualizacion: `2026-04-26`
- Owner: `pawpaw + Codex`
- Depende de:
  - `docs/sdd/parches/blog-taxonomy-vision/definicion.md`
  - `docs/sdd/parches/blog-taxonomy-vision/plan.md`
  - `docs/sdd/parches/blog-taxonomy-vision/tasks.md`
  - `docs/sdd/parches/blog-taxonomy-vision/decision.log`
- Desbloquea:
  - `docs/sdd/parches/blog-taxonomy-vision/backlog/fase2.md`

---

## 1. Fuente de verdad aplicable

- `docs/README.md`
- `AGENTS.md`
- `docs/AGENTS.md`
- `docs/sdd/parches/blog-taxonomy-vision/definicion.md`
- `docs/sdd/parches/blog-taxonomy-vision/plan.md`
- `docs/sdd/parches/blog-taxonomy-vision/tasks.md`
- `docs/sdd/parches/blog-taxonomy-vision/decision.log`
- documentos contractuales aplicables:
  - `docs/content/content-system.md`
  - `docs/content/content-master.md`
- documentos auxiliares aplicables:
  - `docs/sdd/parches/blog-taxonomy-vision/handover.md`
  - `docs/sdd/templates/backlog-faseN.md`

Nota:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- este backlog ejecuta solo la Fase 1
- si aparece drift contra `plan.md` o `tasks.md`, registralo antes de resolverlo

---

## 2. Objetivo de la fase

Dejar contractualmente aprobado el nuevo modelo editorial del blog.
Al cerrar la fase, `content-system` y `content-master` deben reflejar la lectura de tres capas del blog y la decision de que no existen archives nuevos para `angle` o `domain`.

---

## 3. Precondiciones

### Documentos

- [x] `definicion.md` vigente
- [x] `plan.md` vigente
- [x] `tasks.md` con la fase seleccionada
- [x] contratos aplicables revisados

### Decisiones previas

- [x] decision de mantener `category` como taxonomia principal navegable

### Estado tecnico

- [x] no ejecutar runtime antes de cerrar contrato

---

## 4. Alcance

### Si entra

- [x] actualizar `docs/content/content-system.md`
- [x] actualizar `docs/content/content-master.md`
- [x] registrar la decision editorial en `decision.log`

### No entra

- [x] tocar `src/`
- [x] tocar tests
- [x] crear rutas nuevas

---

## 5. Checklist de ejecucion

### Bloque A - Contrato de contenido

- [x] ampliar `blog_post` con `angle` y `domain`
- [x] dejar explicito que `category` sigue siendo el eje navegable principal

### Bloque B - Copy de blog master

- [x] alinear la descripcion del featured/blog cards con la nueva lectura de tres capas
- [x] mantener el tono soberbio y compacto

### Bloque C - Registro

- [x] dejar la decision escrita en `decision.log`
- [x] validar que no haya contradicciones con `docs/README.md`

---

## 6. Archivos o areas probables

### Docs

- `docs/content/content-system.md`
- `docs/content/content-master.md`
- `docs/sdd/parches/blog-taxonomy-vision/decision.log`

### Codigo

- ninguno

### Configuracion o tests

- ninguno

---

## 7. Hallazgos durante ejecucion

- 2026-04-25:
  - hallazgo:
    el contrato actual solo aprueba `category`
  - impacto:
    la fase debe editar docs antes de runtime
  - accion:
    pendiente de ejecucion
- 2026-04-26:
  - hallazgo:
    el contrato ya quedo sincronizado, pero el runtime sigue sin vocabulario controlado para `angle` y `domain`
  - impacto:
    la siguiente fase debe ejecutar schema, contenido y tests contra la taxonomia cerrada
  - accion:
    preparar `backlog/fase2.md`

---

## 8. Blockers

- [x] no ejecutar fase sin contrato actualizado

---

## 9. Decisiones tomadas

- 2026-04-25:
  - decision:
    tratar `angle` y `domain` como capas editoriales visibles, no como archives propios
  - razon:
    evitar scope creep y mantener la arquitectura vigente
  - documentos o areas afectadas:
    `docs/content/content-system.md`, `docs/content/content-master.md`
- 2026-04-26:
  - decision:
    cerrar `angle` y `domain` como vocabularios controlados manteniendo a `category` como unica taxonomia navegable
  - razon:
    el cambio pedido exige consistencia contractual y validacion fuerte en schema y contenido
  - documentos o areas afectadas:
    `docs/content/content-system.md`, `docs/sdd/parches/blog-taxonomy-vision/definicion.md`, `docs/sdd/parches/blog-taxonomy-vision/plan.md`, `docs/sdd/parches/blog-taxonomy-vision/tasks.md`

---

## 10. Validaciones

### Documentales

- [x] verificar alineacion con `docs/README.md`
- [x] verificar alineacion con contratos aplicables
- [x] verificar que el backlog sigue trazable a `tasks.md`

### Tecnicas

- [x] no aplica `npm run build`
- [x] no aplica `npm test`

### Manuales

- [x] revision editorial de claridad operativa

### Resultados

- Comando o revision:
- Resultado:
- Notas:

---

## 11. Cierre

La fase solo se considera cerrada si:

- [ ] checklist completo o pendientes explicitamente diferidos
- [ ] decisiones relevantes registradas
- [ ] validaciones requeridas ejecutadas o justificadas
- [ ] drift documentado o resuelto
- [ ] reporte final listo

---

## 12. Riesgos y pendientes

### Riesgos

- riesgo: reescribir el contrato sin dejar claro que no hay rutas nuevas

### Pendientes

- pendiente: preparar `backlog/fase2.md` con la taxonomia controlada ya sincronizada

---

## 13. Registro de cambios

- 2026-04-25:
  - cambio: creacion inicial del backlog de Fase 1
  - razon: preparar la ejecucion contractual del cambio
- 2026-04-25:
  - cambio: ejecucion y cierre de la Fase 1
  - razon: actualizar el contrato editorial y dejar trazada la decision
- 2026-04-26:
  - cambio: sync de drift sobre el cierre de Fase 1
  - razon: reflejar la decision nueva de vocabulario controlado para `angle` y `domain`
