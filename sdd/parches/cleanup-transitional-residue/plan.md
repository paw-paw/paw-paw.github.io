# Plan: cleanup-transitional-residue

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

- Change id: `cleanup-transitional-residue`
- Estado: `ready-for-tasks`
- Ultima actualizacion: 2026-05-09
- Owner: usuario
- Depende de: `definicion.md`, `handover.md`, `decision.log`
- Desbloquea: `tasks.md`

---

## 1. Fuente de verdad aplicable

- `docs/README.md`
- `AGENTS.md`
- `sdd/parches/cleanup-transitional-residue/definicion.md`
- `sdd/parches/cleanup-transitional-residue/decision.log`
- documentos contractuales aplicables:
  - `docs/architecture/i18n-spec.md`
  - `docs/architecture/site-architecture.md`
  - `docs/visual/visual-system.md`
  - `docs/delivery/deployment.md`
- documentos auxiliares aplicables:
  - `docs/AGENTS.md`
  - `docs/visual/asset-plan.md`
  - `docs/governance/template-audit.md`
  - `docs/governance/decision-log.md`
  - `docs/delivery/seo-spec.md`
  - `sdd/README.md`
  - `sdd/core/README.md`
  - `sdd/core/patch-model.md`
  - `sdd/parches/README.md`
  - `.codex/skills/sdd-*/SKILL.md`
  - `sdd/tools/validate-sdd.mjs`

Nota:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- este plan no amplia el alcance aprobado en `definicion.md`
- el patch necesita una fase inicial de manifest porque fue creado despues del modelo de `patch.yaml`

---

## 2. Lectura brownfield

- estructura existente:
  - `docs/sdd/parches/sdd-portable-core-bootstrap/**` contiene 11 archivos del bootstrap portable transicional.
  - `sdd/parches/legacy/**` ya contiene memoria historica SDD y queda preservada.
  - `sdd/templates/**` contiene 6 archivos: README y templates/copias transicionales.
  - `.codex/skills/sdd-*` ya tiene assets propios para `definicion.md`, `plan.md`, `tasks.md`, `backlog-faseN.md` y `cierre.md`.
  - `src/i18n/de.json` existe, pero `src/utils/i18n.ts` y `astro.config.mjs` solo activan `en` y `es`.
- patrones existentes:
  - cambios SDD formales recientes usan `patch.yaml`, `plan.md`, `tasks.md`, `backlog/faseN.md` y `cierre.md`.
  - las referencias historicas dentro de legacy se preservan para trazabilidad.
  - docs contractuales mandan sobre runtime cuando hay conflicto.
- deuda o drift relevante:
  - `docs/README.md`, `sdd/README.md`, `sdd/core/README.md` y skills aun describen `sdd/templates/**` como superficie transicional.
  - `docs/README.md`, `docs/AGENTS.md`, `sdd/parches/README.md` y `sdd/tools/validate-sdd.mjs` aun permiten o mencionan el bootstrap bajo `docs/sdd`.
  - `tests/public-release-closure.test.mjs` aun lee `docs/sdd/parches/sprint-2/roadmap.md`, ruta historica ya migrada.
  - `docs/visual/asset-plan.md` conserva nombres antiguos de headers (`pcftc.jpg`, `dld2.jpg`, `ewc.jpg`) que no coinciden con `src/assets/work-headers/**`.
  - `src/scripts/theme.js` no tiene referencias activas; `ThemeToggle.astro` importa `theme-toggle.js`.
- restricciones tecnicas:
  - no tocar `sdd/tests/fixtures/**`.
  - no deduplicar imagenes ni assets sociales.
  - no reescribir `sdd/parches/legacy/**` existente, salvo agregar el bootstrap movido.
  - no introducir cambios visibles de routing, SEO, contenido o motion.

---

## 3. Zonas afectadas

### Docs

- `docs/README.md`
- `docs/AGENTS.md`
- `docs/architecture/i18n-spec.md`
- `docs/visual/asset-plan.md`
- `docs/governance/template-audit.md`
- `docs/governance/decision-log.md`, solo si hace falta corregir referencia viva no historica

### SDD

- `docs/sdd/parches/sdd-portable-core-bootstrap/**`
- `sdd/parches/legacy/sdd-portable-core-bootstrap/**`
- `sdd/templates/**`
- `sdd/README.md`
- `sdd/core/README.md`
- `sdd/parches/README.md`
- `.codex/skills/sdd-intake/SKILL.md`
- `.codex/skills/sdd-plan/SKILL.md`
- `.codex/skills/sdd-tasks/SKILL.md`
- `.codex/skills/sdd-phase-backlog/SKILL.md`
- `.codex/skills/sdd-execute-phase/SKILL.md`
- `.codex/skills/sdd-sync-drift/SKILL.md`
- `sdd/tools/validate-sdd.mjs`

### Codigo

- `src/i18n/de.json`
- `src/scripts/theme.js`
- `src/scripts/theme-toggle.js`, solo comentario si queda referencia a `theme.js`
- `astro.config.mjs`, solo verificacion
- `src/utils/i18n.ts`, solo verificacion

### Configuracion, tests o build

- `tests/public-release-closure.test.mjs`
- `package.json`
- `npm test`
- `npm run build`
- `node sdd/tools/validate-sdd.mjs`
- `git diff --check`

---

## 4. Bloques de implementacion

### Bloque 1 - Manifest del patch

- Objetivo: crear `patch.yaml` para que el patch pueda pasar por las skills SDD formales y cierre.
- Superficies afectadas:
  - `sdd/parches/cleanup-transitional-residue/patch.yaml`
- Cambios esperados:
  - manifest con `schema_version`, `change_id`, `program_id`, `patch_kind`, `lifecycle`, `status` y `related_docs`.
  - `lifecycle: spec-anchored` porque toca documentos contractuales y auxiliares vivos.
- Dependencias:
  - `definicion.md`
  - `sdd/core/patch-model.md`
- Riesgos:
  - manifest incompleto bloquea `sdd-tasks`, backlogs, ejecucion o cierre.
- Validaciones asociadas:
  - revisar campos contra `sdd/core/patch-model.md`
  - `node sdd/tools/validate-sdd.mjs`, cuando sea posible

### Bloque 2 - Limpieza SDD estructural

- Objetivo: retirar superficies transicionales SDD que ya no deben operar como vivas.
- Superficies afectadas:
  - `docs/sdd/parches/sdd-portable-core-bootstrap/**`
  - `sdd/parches/legacy/sdd-portable-core-bootstrap/**`
  - `sdd/templates/**`
  - `docs/README.md`
  - `docs/AGENTS.md`
  - `sdd/README.md`
  - `sdd/core/README.md`
  - `sdd/parches/README.md`
  - `.codex/skills/sdd-*/SKILL.md`
  - `sdd/tools/validate-sdd.mjs`
- Cambios esperados:
  - mover bootstrap transicional a legacy.
  - eliminar `sdd/templates/**`.
  - retirar referencias vivas a `sdd/templates/**` y a la excepcion `docs/sdd/parches/sdd-portable-core-bootstrap/**`.
  - actualizar el validador para que no requiera `sdd/templates` ni permita `docs/sdd` como ruta activa.
- Dependencias:
  - Bloque 1.
- Riesgos:
  - referencias historicas dentro de legacy pueden seguir apareciendo en busquedas; deben clasificarse como memoria, no como drift vivo.
- Validaciones asociadas:
  - `rg` sobre referencias vivas fuera de legacy y artifacts historicos.
  - `node sdd/tools/validate-sdd.mjs`.

### Bloque 3 - Limpieza i18n, script y drift documental

- Objetivo: eliminar residuos activos no deseados fuera de `en`/`es`, limpiar script no usado y corregir drift de nombres de assets.
- Superficies afectadas:
  - `docs/architecture/i18n-spec.md`
  - `docs/delivery/deployment.md`, si conserva referencia viva a `/de/`
  - `docs/governance/template-audit.md`, si conserva una referencia no historica a `src/i18n/de.json`
  - `src/i18n/de.json`
  - `src/scripts/theme.js`
  - `src/scripts/theme-toggle.js`
  - `docs/visual/asset-plan.md`
  - `tests/public-release-closure.test.mjs`
- Cambios esperados:
  - eliminar `src/i18n/de.json`.
  - actualizar i18n spec para expresar solo `en` y `es` como idiomas soportados actuales, sin mantener una seccion vigente de idioma heredado.
  - eliminar referencias vivas a `de`, `pt` y `src/i18n/de.json` fuera de historia/legacy cuando apliquen.
  - eliminar `src/scripts/theme.js` y retirar comentario de `theme-toggle.js` que lo menciona.
  - corregir headers reales en `docs/visual/asset-plan.md`.
  - actualizar test que aun lee un path `docs/sdd` ya historico.
- Dependencias:
  - Bloque 2.
- Riesgos:
  - buscar `de` o `pt` produce falsos positivos por palabras en español o rutas historicas; la validacion debe enfocarse en referencias semanticas a idiomas/rutas.
- Validaciones asociadas:
  - `rg` dirigido a `src/i18n/de.json`, rutas `/de/`, `locales`, `theme.js`, headers antiguos.
  - `npm test`
  - `npm run build`
  - `git diff --check`

---

## 5. Datos, schemas y contratos

- Contratos documentales afectados:
  - `docs/README.md`
  - `docs/architecture/i18n-spec.md`
  - `docs/delivery/deployment.md`, si menciona rutas no activas
- Datos o contenido afectados:
  - ningun contenido visible nuevo
  - eliminacion de `src/i18n/de.json` como residuo no activo
- Schemas o modelos afectados:
  - `sdd/tools/validate-sdd.mjs` debe reflejar que `sdd/templates` y `docs/sdd` ya no son superficies requeridas o permitidas.
- Compatibilidad esperada:
  - runtime visible debe permanecer igual para `en` y `es`
  - tests de release deben apuntar a la ruta legacy real cuando consulten memoria historica
  - legacy existente queda legible y no normativo

---

## 6. Validaciones previstas

Estas validaciones son planificadas. No registrar resultados de ejecucion en `plan.md`.

### Documentales

- [ ] verificar alineacion con `docs/README.md`
- [ ] verificar alineacion con `docs/architecture/i18n-spec.md`
- [ ] verificar ausencia de referencias vivas a `sdd/templates/**`
- [ ] verificar ausencia de `docs/sdd/**` activo fuera de referencias historicas aceptadas

### Tecnicas

- [ ] `node sdd/tools/validate-sdd.mjs`
- [ ] `npm test`
- [ ] `npm run build`
- [ ] `git diff --check`

### Manuales

- [ ] revision manual de que duplicados de assets aprobados no fueron tocados
- [ ] revision manual de que `sdd/tests/fixtures/**` no fue tocado
- [ ] revision manual de que no se cambio routing visible ni SEO estructural

---

## 7. Riesgos y mitigaciones

- riesgo: eliminar `sdd/templates/**` antes de actualizar skills.
  - impacto: instrucciones locales apuntarian a rutas inexistentes.
  - mitigacion: actualizar skills y validar con `rg -n 'sdd/templates' .codex/skills sdd docs AGENTS.md`.
- riesgo: mover bootstrap rompa tests o referencias documentales vivas.
  - impacto: validaciones fallan o docs siguen describiendo `docs/sdd` como excepcion.
  - mitigacion: actualizar tests y docs vivos; preservar historia en legacy.
- riesgo: eliminar `src/i18n/de.json` sin comprobar wiring.
  - impacto: si hubiera import indirecto, build fallaria.
  - mitigacion: verificar `src/utils/i18n.ts`, `astro.config.mjs`, `rg src/i18n/de.json`, `npm run build`.
- riesgo: busquedas de `de` tengan falsos positivos por idioma español.
  - impacto: limpieza excesiva o ruido de validacion.
  - mitigacion: validar patrones semanticos (`src/i18n/de.json`, `/de/`, `locales`, secciones i18n), no cada substring.

---

## 8. Decisiones humanas abiertas

- Estado: `none`
- No hay decisiones humanas abiertas que bloqueen `sdd-tasks`.

---

## 9. Criterio de cierre tecnico

El plan queda listo para `sdd-tasks` solo si:

- [x] el alcance respeta `definicion.md`
- [x] las zonas afectadas estan identificadas
- [x] los bloques de implementacion son secuenciables
- [x] las validaciones son reales y proporcionales
- [x] no hay decisiones abiertas que bloqueen la division en fases

---

## 10. Registro de cambios

- Fecha: 2026-05-09
  - cambio: creacion inicial del plan tecnico.
  - razon: desbloquear `sdd-tasks` para ejecutar la limpieza transicional completa con manifest, fases y validaciones.

