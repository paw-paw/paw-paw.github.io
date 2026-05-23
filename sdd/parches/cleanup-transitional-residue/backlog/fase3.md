# Backlog Fase 3: Limpieza i18n, script y drift documental

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

* Change id: `cleanup-transitional-residue`
* Fase: `3 - Limpieza i18n, script y drift documental`
* Estado: `done`
* Ultima actualizacion: 2026-05-09
* Owner: usuario
* Depende de: Fase 2
* Desbloquea: cierre

---

## 1. Fuente de verdad aplicable

* `docs/README.md`
* `AGENTS.md`
* `sdd/parches/cleanup-transitional-residue/patch.yaml`
* `sdd/parches/cleanup-transitional-residue/definicion.md`
* `sdd/parches/cleanup-transitional-residue/plan.md`
* `sdd/parches/cleanup-transitional-residue/tasks.md`
* `sdd/parches/cleanup-transitional-residue/decision.log`
* documentos contractuales aplicables:
  * `docs/architecture/i18n-spec.md`
  * `docs/delivery/deployment.md`
* documentos auxiliares aplicables:
  * `docs/visual/asset-plan.md`
  * `docs/governance/template-audit.md`
  * `docs/visual/interaction-spec.md`

Nota:

* si hay conflicto, manda la precedencia definida en `docs/README.md`
* este backlog ejecuta una sola fase

---

## 2. Objetivo de la fase

* Resultado esperado: residuos activos de `de`/`pt`, `src/scripts/theme.js` y nombres antiguos de headers quedan retirados o corregidos.
* Razon de la fase: aplicar las decisiones restantes del usuario despues de retirar superficies SDD transicionales.
* Cambio que queda habilitado al cerrar: cierre formal del patch.

---

## 3. Precondiciones

### Documentos

* [x] `definicion.md` vigente
* [x] `plan.md` vigente
* [x] `tasks.md` con la fase seleccionada
* [x] contratos aplicables revisados

### Decisiones previas

* [x] usuario aprobo eliminar referencias i18n no `en`/`es`
* [x] usuario aprobo limpiar candidatos reales de limpieza
* [x] usuario aprobo corregir drift documental

### Estado tecnico

* [x] Fase 2 cerrada
* [x] `src/i18n/de.json` existe antes de ejecutar
* [x] `src/scripts/theme.js` existe antes de ejecutar

---

## 4. Alcance

### Si entra

* [x] eliminar `src/i18n/de.json`
* [x] actualizar docs vivas con referencias semanticas a `de`, `pt`, `/de/` o `src/i18n/de.json`
* [x] eliminar `src/scripts/theme.js`
* [x] limpiar comentario de `src/scripts/theme-toggle.js`
* [x] corregir nombres de headers en `docs/visual/asset-plan.md`
* [x] ejecutar validaciones globales

### No entra

* [ ] tocar `sdd/tests/fixtures/**`
* [ ] deduplicar imagenes
* [ ] cambiar routing visible `en`/`es`
* [ ] refactorizar AOS/GSAP/`src/scripts/animations.js`

---

## 5. Archivos y superficies de trabajo

### Leer antes de editar

* `docs/architecture/i18n-spec.md`
* `docs/delivery/deployment.md`
* `docs/governance/template-audit.md`
* `docs/visual/asset-plan.md`
* `src/utils/i18n.ts`
* `astro.config.mjs`
* `src/components/ui/ThemeToggle.astro`
* `src/scripts/theme-toggle.js`

### Editar

* `docs/architecture/i18n-spec.md`
* `docs/delivery/deployment.md`
* `docs/governance/template-audit.md`
* `docs/visual/asset-plan.md`
* `src/i18n/de.json`
* `src/scripts/theme.js`
* `src/scripts/theme-toggle.js`
* `sdd/parches/cleanup-transitional-residue/backlog/fase3.md`

### Validar

* `package.json`
* `npm test`
* `npm run build`
* `node sdd/tools/validate-sdd.mjs`
* `git diff --check`

### No tocar

* `sdd/tests/fixtures/**`
* `src/assets/**`
* `src/pages/**`
* `src/layouts/**`
* `src/components/sections/**`

---

## 6. Checklist de ejecucion

### Bloque A - Relectura de fuentes

* [x] Leer docs i18n/deployment/template audit/asset plan.
* [x] Leer wiring i18n y theme toggle.

### Bloque B - Inspeccion de estado actual

* [x] Confirmar que `src/i18n/de.json` existe.
* [x] Confirmar que `src/scripts/theme.js` existe y no tiene referencias activas.
* [x] Confirmar drift de headers `pcftc`, `dld2`, `ewc`.

### Bloque C - Edicion por archivo

* [x] Eliminar `src/i18n/de.json`.
* [x] Actualizar `docs/architecture/i18n-spec.md` para retirar `de`, `pt` y la seccion `Aleman heredado`.
* [x] Actualizar `docs/delivery/deployment.md` para retirar referencia viva a `/de/`.
* [x] Actualizar `docs/governance/template-audit.md` para no describir `src/i18n/de.json` como residuo activo.
* [x] Eliminar `src/scripts/theme.js`.
* [x] Retirar comentario de `src/scripts/theme-toggle.js` que menciona `theme.js`.
* [x] Corregir headers en `docs/visual/asset-plan.md`.

### Bloque D - Registro de decisiones, hallazgos o blockers

* [x] Registrar finding si quedan menciones historicas no tocadas.
* [x] Registrar blocker si build o tests fallan y la correccion requiere ampliar alcance.

### Bloque E - Validacion

* [x] Ejecutar `rg -n 'src/i18n/de\\.json|/de/|locales:.*de|theme\\.js|pcftc|dld2|ewc' docs src astro.config.mjs tests .codex/skills --glob '!sdd/parches/legacy/**' --glob '!sdd/parches/cleanup-transitional-residue/**' --glob '!sdd/parches/sdd-portable-core-post-bootstrap/**'`.
* [x] Ejecutar `node sdd/tools/validate-sdd.mjs`.
* [x] Ejecutar `npm test`.
* [x] Ejecutar `npm run build`.
* [x] Ejecutar `git diff --check`.

### Bloque F - Cierre

* [x] Confirmar que assets duplicados no fueron tocados.
* [x] Confirmar que `sdd/tests/fixtures/**` no fue tocado.
* [x] Marcar checklist y cierre de fase.

---

## 7. Drift detectado

* Fecha:

  * fuente esperada:
  * diferencia encontrada:
  * impacto:
  * accion:
  * requiere decision: `si` | `no`

---

## 8. Hallazgos durante ejecucion

* Fecha:

  * hallazgo:
  * impacto:
  * accion:

* Fecha: 2026-05-09

  * hallazgo: un `npm run build` lanzado en paralelo con `npm test` fallo por carrera en `dist/chunks`.
  * impacto: no cuenta como validacion final porque `npm test` ejecuta build internamente y ambas tareas escribieron sobre `dist`.
  * accion: rerun de `npm run build` en serie; resultado final `pass`.

* Fecha: 2026-05-09

  * hallazgo: `sdd/tests/fixtures/**` aparece como untracked en `git status` por cambios preexistentes del patch SDD anterior.
  * impacto: no hay diff de fixtures atribuible a esta fase.
  * accion: no tocar fixtures y reportar estado preexistente.

---

## 9. Blockers

* [x] ninguno

---

## 10. Decisiones tomadas

* Fecha:

  * decision:
  * razon:
  * documentos o areas afectadas:

---

## 11. Validaciones

### Documentales

* [x] verificar alineacion con `docs/architecture/i18n-spec.md`
* [x] verificar alineacion con `docs/visual/asset-plan.md`
* [x] verificar trazabilidad contra `tasks.md`

### Tecnicas

* [x] `node sdd/tools/validate-sdd.mjs`
* [x] `npm test`
* [x] `npm run build`
* [x] `git diff --check`

### Manuales

* [x] revision manual de que assets duplicados no fueron tocados
* [x] revision manual de que `sdd/tests/fixtures/**` no fue tocado

### Resultados

* Validacion:

  * comando o revision: `rg -n 'src/i18n/de\\.json|/de/|locales:.*de|theme\\.js|pcftc|dld2|ewc' docs src astro.config.mjs tests .codex/skills --glob '!sdd/parches/legacy/**' --glob '!sdd/parches/cleanup-transitional-residue/**' --glob '!sdd/parches/sdd-portable-core-post-bootstrap/**'`
  * resultado esperado: sin referencias vigentes a idioma retirado, script eliminado o headers antiguos.
  * resultado obtenido: sin salida
  * estado: `pass`
  * notas:

* Validacion:

  * comando o revision: `node sdd/tools/validate-sdd.mjs`
  * resultado esperado: validacion SDD sin errores.
  * resultado obtenido: `SDD repo validation passed`
  * estado: `pass`
  * notas:

* Validacion:

  * comando o revision: `npm test`
  * resultado esperado: tests pasan.
  * resultado obtenido: 2 tests pass, 0 fail.
  * estado: `pass`
  * notas:

* Validacion:

  * comando o revision: `npm run build`
  * resultado esperado: build Astro exitoso.
  * resultado obtenido: 26 pages built; build complete.
  * estado: `pass`
  * notas: el primer intento en paralelo fallo por carrera de `dist`; el resultado final en serie paso.

* Validacion:

  * comando o revision: `git diff --check`
  * resultado esperado: sin errores de whitespace.
  * resultado obtenido: sin salida
  * estado: `pass`
  * notas:

---

## 12. Cierre

La fase solo se considera cerrada si:

* [x] checklist completo o pendientes explicitamente diferidos
* [x] decisiones relevantes registradas
* [x] blockers resueltos o diferidos con razon
* [x] drift documentado o resuelto
* [x] validaciones requeridas ejecutadas o justificadas
* [x] resultados de validacion registrados
* [x] reporte final listo

---

## 13. Riesgos y pendientes

### Riesgos

* `rg` para `de` puede generar falsos positivos por palabras en español; se validan patrones semanticos.

### Pendientes

* cierre formal del patch.

---

## 14. Registro de cambios

* Fecha: 2026-05-09

  * cambio: creacion inicial del backlog de Fase 3
  * razon: preparar limpieza de residuos i18n, script y drift documental

* Fecha: 2026-05-09

  * cambio: cierre de Fase 3 como `done`
  * razon: residuos retirados y validaciones finales en pass
