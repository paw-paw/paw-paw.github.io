# Backlog Fase 2: Implementacion runtime y migracion de contenido

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

- Change id: `blog-taxonomy-vision`
- Fase: `2 - Implementacion runtime y migracion de contenido`
- Estado: `done`
- Ultima actualizacion: `2026-04-26`
- Owner: `pawpaw + Codex`
- Depende de:
  - `docs/sdd/parches/blog-taxonomy-vision/definicion.md`
  - `docs/sdd/parches/blog-taxonomy-vision/plan.md`
  - `docs/sdd/parches/blog-taxonomy-vision/tasks.md`
  - `docs/sdd/parches/blog-taxonomy-vision/decision.log`
  - `docs/sdd/parches/blog-taxonomy-vision/backlog/fase1.md`
- Desbloquea:
  - `docs/sdd/parches/blog-taxonomy-vision/backlog/fase3.md`

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
  - `docs/sdd/parches/blog-taxonomy-vision/backlog/fase1.md`
  - `docs/sdd/templates/backlog-faseN.md`
  - `package.json`

Nota:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- este backlog ejecuta solo la Fase 2
- si aparece drift contra `plan.md` o `tasks.md`, registralo antes de resolverlo

---

## 2. Objetivo de la fase

Implementar la taxonomia controlada del blog en schema, helpers, contenido y superficies visibles.
Al cerrar la fase, cada post publicado debe validar un `category`, un `angle` y un `domain` aprobados, sin crear rutas nuevas.
La fase existe para cerrar el gap entre el contrato ya sincronizado y el runtime real del blog.

---

## 3. Precondiciones

### Documentos

- [x] `definicion.md` vigente
- [x] `plan.md` vigente
- [x] `tasks.md` con la fase seleccionada
- [x] contratos aplicables revisados

### Decisiones previas

- [x] `category` sigue siendo la unica taxonomia navegable
- [x] `angle` y `domain` quedan cerrados como vocabulario controlado

### Estado tecnico

- [x] el contrato ya fue actualizado antes de tocar runtime

---

## 4. Alcance

### Si entra

- [x] ampliar schema de `blog` para validar listas controladas
- [x] exponer tipos y listas controladas en helpers del blog
- [x] migrar los posts publicados al vocabulario aprobado
- [x] alinear tests de build y detail con la taxonomia nueva

### No entra

- [x] crear rutas o archives nuevos para `angle` o `domain`
- [x] tocar deployment, SEO estructural o i18n base
- [x] reabrir el contrato documental fuera del drift ya sincronizado

---

## 5. Checklist de ejecucion

### Bloque A - Schema y helpers

- [x] definir listas controladas de `angle` y `domain`
- [x] usar esas listas en `src/content.config.ts`
- [x] exponer tipos reutilizables para metadata del blog

### Bloque B - Contenido y superficies

- [x] migrar los posts publicados a valores aprobados
- [x] alinear los tipos consumidos por componentes del blog
- [x] preservar el orden visible `Category -> Angle -> Domain`

### Bloque C - Tests y validacion

- [x] actualizar tests que esperaban labels antiguos
- [x] correr `npm run build`
- [x] correr `npm test`

---

## 6. Archivos o areas probables

### Docs

- `docs/sdd/parches/blog-taxonomy-vision/decision.log`
- `docs/sdd/parches/blog-taxonomy-vision/backlog/fase2.md`

### Codigo

- `src/content.config.ts`
- `src/utils/blog.ts`
- `src/components/blog/BlogPostMeta.astro`
- `src/content/blog/*.md`

### Configuracion o tests

- `tests/public-release-closure.test.mjs`
- `tests/blog-es-detail-alignment.test.mjs`

---

## 7. Hallazgos durante ejecucion

- 2026-04-26:
  - hallazgo:
    el runtime ya mostraba `angle` y `domain`, pero no los validaba ni tipaba como vocabulario controlado
  - impacto:
    el schema y los tests podian aceptar etiquetas fuera del contrato nuevo
  - accion:
    cerrar listas controladas en schema, helpers, contenido y tests

---

## 8. Blockers

- [ ] ninguno activo

---

## 9. Decisiones tomadas

- 2026-04-26:
  - decision:
    mapear `Framework` a `Delivery Framework` y `Operating Lesson` a `Field Notes`
  - razon:
    mantener la intencion editorial de los posts existentes dentro del vocabulario aprobado
  - documentos o areas afectadas:
    `src/content/blog/*.md`, `tests/public-release-closure.test.mjs`

---

## 10. Validaciones

### Documentales

- [x] verificar alineacion con `docs/README.md`
- [x] verificar alineacion con contratos aplicables
- [x] verificar que el backlog sigue trazable a `tasks.md`

### Tecnicas

- [x] `npm run build`, si aplica
- [x] `npm test`, si aplica
- [x] otra validacion relevante

### Manuales

- [ ] revision visual/manual, si aplica
- [ ] revision funcional, si aplica

### Resultados

- Comando o revision: `npm run build`
- Resultado: ok
- Notas: paso en secuencia; un intento previo en paralelo con `npm test` produjo una carrera en `dist/` y se descarto como validacion invalida
- Comando o revision: `npm test`
- Resultado: ok
- Notas: `2` tests passed
- Comando o revision: revision de scripts en `package.json`
- Resultado: ok
- Notas: existen `build`, `test`, `dev` y `preview`; `lint` no existe

---

## 11. Cierre

La fase solo se considera cerrada si:

- [x] checklist completo o pendientes explicitamente diferidos
- [x] decisiones relevantes registradas
- [x] validaciones requeridas ejecutadas o justificadas
- [x] drift documentado o resuelto
- [x] reporte final listo

---

## 12. Riesgos y pendientes

### Riesgos

- riesgo: dejar algun post o fixture temporal con etiquetas fuera del vocabulario aprobado
- riesgo: que tests sigan validando strings heredados del contrato viejo

### Pendientes

- pendiente: ninguno para cerrar la Fase 2

---

## 13. Registro de cambios

- 2026-04-26:
  - cambio: creacion inicial del backlog de Fase 2
  - razon: preparar la ejecucion controlada del runtime del blog
- 2026-04-26:
  - cambio: ejecucion y cierre de la Fase 2
  - razon: cerrar schema, contenido, helpers y tests contra la taxonomia controlada aprobada
