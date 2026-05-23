# Cierre: cleanup-transitional-residue

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

- Change id: `cleanup-transitional-residue`
- Program id: `sdd-portable-core`
- Patch kind: `spec`
- Lifecycle: `spec-anchored`
- Status final: `closed`
- Fecha de cierre: 2026-05-09
- Owner: usuario
- Nivel de cierre: `anchored`

---

## 1. Resumen

- Objetivo original: cerrar residuos transicionales activos detectados en la auditoria: bootstrap bajo `docs/sdd`, `sdd/templates`, idioma heredado fuera de `en`/`es`, script de tema no usado y drift de nombres de headers.
- Resultado ejecutado: se completo el flujo SDD con manifest, plan, tasks, tres backlogs ejecutados y reconciliacion de fuentes vivas.
- Alcance cerrado:
  - `docs/sdd/parches/sdd-portable-core-bootstrap/**` movido a `sdd/parches/legacy/sdd-portable-core-bootstrap/**`.
  - `sdd/templates/**` eliminado.
  - referencias vivas a `sdd/templates` y a la excepcion bootstrap bajo `docs/sdd` retiradas.
  - `src/i18n/de.json` eliminado.
  - `src/scripts/theme.js` eliminado.
  - `docs/architecture/i18n-spec.md`, `docs/delivery/deployment.md`, `docs/governance/template-audit.md` y `docs/governance/decision-log.md` limpiados de referencias vigentes a idiomas no soportados.
  - `docs/visual/asset-plan.md` actualizado con nombres reales de headers.
  - `tests/public-release-closure.test.mjs` actualizado hacia `sdd/parches/legacy/sprint-2/roadmap.md`.
- Alcance diferido:
  - no deduplicar imagenes sociales o headers, por decision del usuario.
  - no normalizar historia dentro de `sdd/parches/legacy/**`.
  - no redisenar motion ni sustituir AOS/GSAP.

---

## 2. Artifacts revisados

- `patch.yaml`
- `definicion.md`
- `plan.md`
- `tasks.md`
- `backlog/fase1.md`
- `backlog/fase2.md`
- `backlog/fase3.md`
- `decision.log`

---

## 3. Decisiones relevantes

- decision: agrupar la limpieza como patch SDD.
  - fuente: `decision.log`
  - impacto: se ejecuto con plan, tasks, backlogs, manifest y cierre formal.
- decision: mover bootstrap transicional a legacy.
  - fuente: `handover.md`, `decision.log`
  - impacto: `docs/sdd/` deja de existir como ruta activa.
- decision: eliminar `sdd/templates/**`.
  - fuente: `handover.md`, `decision.log`
  - impacto: las skills SDD dependen de assets propios o instrucciones directas, no de carpeta compartida de templates.
- decision: limitar limpieza i18n a runtime activo y documentacion viva.
  - fuente: `decision.log`
  - impacto: no se reescribio `sdd/parches/legacy/**`.

---

## 4. Assumptions, blockers y findings

### Assumptions

- assumption: las referencias historicas dentro de legacy no deben normalizarse.
  - estado: validada
  - evidencia: decision del usuario de preservar `sdd/parches/legacy/**` como esta y decision registrada en `decision.log`.

### Blockers

- blocker: ninguno al cierre.
  - estado: no aplica
  - resolucion o razon de diferimiento: no hubo decision humana adicional requerida.

### Findings

- finding: `npm run build` fallo una vez por ejecutarse en paralelo con `npm test`, que tambien ejecuta build y escribe `dist`.
  - evidencia: backlog Fase 3.
  - impacto: no afecta cierre; build en serie paso despues.
- finding: `sdd/tests/fixtures/**` aparece como untracked por cambios preexistentes del workspace.
  - evidencia: `git status --short src/assets sdd/tests/fixtures`.
  - impacto: no fue tocado por este patch; se mantiene como superficie no tocada.

---

## 5. Drift

- drift:
  - categoria: `operational`
  - fuente esperada: `docs/README.md`, `docs/AGENTS.md`, `sdd/parches/README.md`
  - diferencia encontrada: `docs/sdd/parches/sdd-portable-core-bootstrap/**` seguia como excepcion transicional.
  - accion: movido a `sdd/parches/legacy/sdd-portable-core-bootstrap/**` y docs vivos actualizados.
  - estado: resuelto
- drift:
  - categoria: `operational`
  - fuente esperada: `.codex/skills/sdd-*`, `sdd/README.md`, `sdd/core/README.md`
  - diferencia encontrada: `sdd/templates/**` seguia descrito como copia transicional.
  - accion: eliminado y referencias vivas retiradas.
  - estado: resuelto
- drift:
  - categoria: `minor`
  - fuente esperada: `docs/visual/asset-plan.md`
  - diferencia encontrada: nombres antiguos `pcftc.jpg`, `dld2.jpg`, `ewc.jpg`.
  - accion: actualizados a nombres reales de `src/assets/work-headers/**`.
  - estado: resuelto

---

## 6. Reconciliacion de fuente viva

- fuente viva afectada: `docs/README.md`
  - cambio requerido: retirar `sdd/templates/**` del mapa documental y clasificar `docs/sdd/` como drift si reaparece.
  - estado: `aplicado`
  - evidencia: `docs/README.md`
- fuente viva afectada: `docs/architecture/i18n-spec.md`
  - cambio requerido: conservar solo `en` y `es` como idiomas soportados del presente.
  - estado: `aplicado`
  - evidencia: `docs/architecture/i18n-spec.md`
- fuente viva afectada: `sdd/README.md`, `sdd/core/README.md`, `sdd/parches/README.md`
  - cambio requerido: retirar `sdd/templates/**` y excepcion bootstrap transicional.
  - estado: `aplicado`
  - evidencia: READMEs actualizados.
- fuente viva afectada: `.codex/skills/sdd-*`
  - cambio requerido: retirar referencias a `sdd/templates/**` como copia transicional.
  - estado: `aplicado`
  - evidencia: skills actualizadas.

---

## 7. Validaciones

- validacion:
  - tipo: `automated`
  - comando o revision: `node sdd/tools/validate-sdd.mjs`
  - resultado esperado: validacion SDD sin errores.
  - resultado obtenido: `SDD repo validation passed`
  - estado: `pass`
  - evidencia: backlog Fases 1, 2 y 3.
- validacion:
  - tipo: `automated`
  - comando o revision: `npm test`
  - resultado esperado: tests pasan.
  - resultado obtenido: 2 tests pass, 0 fail.
  - estado: `pass`
  - evidencia: backlog Fase 3.
- validacion:
  - tipo: `automated`
  - comando o revision: `npm run build`
  - resultado esperado: build Astro exitoso.
  - resultado obtenido: 26 pages built; build complete.
  - estado: `pass`
  - evidencia: backlog Fase 3.
- validacion:
  - tipo: `automated`
  - comando o revision: `git diff --check`
  - resultado esperado: sin errores de whitespace.
  - resultado obtenido: sin salida.
  - estado: `pass`
  - evidencia: backlog Fases 2 y 3.
- validacion:
  - tipo: `manual`
  - comando o revision: `test ! -e docs/sdd && test ! -e sdd/templates && test ! -e src/i18n/de.json && test ! -e src/scripts/theme.js`
  - resultado esperado: superficies retiradas ausentes.
  - resultado obtenido: superficies retiradas ausentes.
  - estado: `pass`
  - evidencia: revision de cierre.
- validacion:
  - tipo: `manual`
  - comando o revision: revision de `git status --short src/assets sdd/tests/fixtures`
  - resultado esperado: assets duplicados sin cambios y fixtures no tocados por este patch.
  - resultado obtenido: `src/assets/**` sin cambios; `sdd/tests/fixtures/**` aparece untracked por estado preexistente.
  - estado: `pass`
  - evidencia: backlog Fase 3.

---

## 8. Riesgos residuales

- riesgo: referencias historicas a rutas antiguas permanecen dentro de legacy y patches cerrados.
  - impacto: pueden aparecer en busquedas amplias.
  - mitigacion: tratarlas como memoria historica; las validaciones vivas excluyen legacy y artifacts cerrados.
- riesgo: `sdd/tests/fixtures/**` sigue como untracked preexistente.
  - impacto: puede aparecer en `git status` aunque no haya sido tocado por este patch.
  - mitigacion: reportarlo explicitamente y no mezclarlo con cambios de este patch.

---

## 9. Pendientes

- pendiente: ninguno para cerrar este patch.
  - owner: no aplica
  - razon: fases seleccionadas completas y validaciones en pass.

---

## 10. Criterio de cierre

- [x] fases seleccionadas cerradas o diferidas con razon
- [x] decisiones relevantes registradas
- [x] drift clasificado y resuelto o diferido
- [x] validaciones registradas
- [x] fuente viva reconciliada o marcada no aplicable
- [x] riesgos residuales visibles
