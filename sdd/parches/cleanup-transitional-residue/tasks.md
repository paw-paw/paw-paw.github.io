# Tasks: cleanup-transitional-residue

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

- Change id: `cleanup-transitional-residue`
- Estado: `ready-for-backlog`
- Ultima actualizacion: 2026-05-09
- Owner: usuario
- Depende de: `definicion.md`, `plan.md`, `decision.log`
- Desbloquea: cierre formal

---

## 1. Fuente de verdad aplicable

- `docs/README.md`
- `sdd/parches/cleanup-transitional-residue/definicion.md`
- `sdd/parches/cleanup-transitional-residue/plan.md`
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
  - `sdd/README.md`
  - `sdd/core/README.md`
  - `sdd/core/patch-model.md`
  - `sdd/parches/README.md`
  - `.codex/skills/sdd-*/SKILL.md`
  - `sdd/tools/validate-sdd.mjs`

Nota:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- este `tasks.md` no contradice `definicion.md`, `plan.md` ni documentos contractuales
- la primera fase crea el manifest requerido para fases formales posteriores

---

## 2. Preflight

- [x] `definicion.md` existe y corresponde al mismo `change-id`
- [x] `plan.md` existe y corresponde al mismo `change-id`
- [x] no hay decisiones abiertas que bloqueen la division en fases
- [x] no hay contradiccion visible entre `plan.md` y contratos aplicables
- [x] no hay drift documental que obligue a actualizar `definicion.md` o `plan.md` antes de seguir

Resultado: `ready`

Notas:
- `patch.yaml` todavia no existe; Fase 1 lo crea segun el plan.

---

## 3. Resumen del plan

El cambio limpia residuos transicionales activos sin tocar legacy historico existente, fixtures ni duplicados de imagenes aprobados.

La secuencia viene del plan: primero manifest formal, luego limpieza SDD estructural, luego limpieza i18n/script/drift con validaciones tecnicas.

No hay decisiones humanas abiertas. El cierre requiere `node sdd/tools/validate-sdd.mjs`, `npm test`, `npm run build` y `git diff --check`, mas revision manual de superficies fuera de alcance.

---

## 4. Fases

### Fase 1 - Manifest formal del patch

- Objetivo: crear `patch.yaml` para desbloquear fases formales posteriores y cierre.
- Origen en `plan.md`:
  - Bloque 1 - Manifest del patch
- Precondiciones:
  - `definicion.md`, `plan.md` y `decision.log` existen.
  - `sdd/core/patch-model.md` existe.
- Tareas:
  - [x] Crear `sdd/parches/cleanup-transitional-residue/patch.yaml` con campos requeridos por el modelo.
  - [x] Marcar `patch_kind: spec`, `lifecycle: spec-anchored`, `status: active`.
  - [x] Incluir `related_docs` para contratos y fuentes vivas afectadas.
  - [x] Validar manifest contra `sdd/tools/validate-sdd.mjs` si el validador lo permite antes de fases posteriores.
- Archivos o areas probables:
  - `sdd/parches/cleanup-transitional-residue/patch.yaml`
  - `sdd/core/patch-model.md`
  - `sdd/tools/validate-sdd.mjs`
- Validaciones:
  - [x] revision manual de campos requeridos
  - [x] `node sdd/tools/validate-sdd.mjs`
- Criterio de cierre:
  - `patch.yaml` existe, es compatible con el modelo y no introduce decisiones nuevas fuera del alcance.

### Fase 2 - Limpieza SDD estructural

- Objetivo: retirar `docs/sdd` activo y `sdd/templates` como superficies transicionales vivas.
- Origen en `plan.md`:
  - Bloque 2 - Limpieza SDD estructural
- Precondiciones:
  - Fase 1 cerrada.
  - `patch.yaml` existe.
- Tareas:
  - [x] Mover `docs/sdd/parches/sdd-portable-core-bootstrap/**` a `sdd/parches/legacy/sdd-portable-core-bootstrap/**`.
  - [x] Eliminar `sdd/templates/**`.
  - [x] Actualizar docs vivos que describen `docs/sdd` o `sdd/templates` como rutas transicionales vigentes.
  - [x] Actualizar skills SDD para que no mencionen `sdd/templates/**` como copia transicional.
  - [x] Actualizar `sdd/tools/validate-sdd.mjs` para reflejar la ausencia de `sdd/templates` y `docs/sdd`.
  - [x] Actualizar tests vivos que aun leen rutas `docs/sdd` no existentes.
- Archivos o areas probables:
  - `docs/README.md`
  - `docs/AGENTS.md`
  - `sdd/README.md`
  - `sdd/core/README.md`
  - `sdd/parches/README.md`
  - `.codex/skills/sdd-*/SKILL.md`
  - `sdd/tools/validate-sdd.mjs`
  - `tests/public-release-closure.test.mjs`
- Validaciones:
  - [x] `rg -n 'sdd/templates|docs/sdd/parches/sdd-portable-core-bootstrap|docs/sdd/' ...` dirigido fuera de legacy y artifacts historicos
  - [x] `node sdd/tools/validate-sdd.mjs`
  - [x] `git diff --check`
- Criterio de cierre:
  - no quedan rutas vivas `docs/sdd/**` ni `sdd/templates/**`, y las referencias restantes estan clasificadas como historicas o dentro del patch actual.

### Fase 3 - Limpieza i18n, script y drift documental

- Objetivo: eliminar residuos activos de idioma no soportado, script no usado y drift de nombres de assets.
- Origen en `plan.md`:
  - Bloque 3 - Limpieza i18n, script y drift documental
- Precondiciones:
  - Fase 2 cerrada.
  - validacion SDD estructural sin blockers.
- Tareas:
  - [x] Eliminar `src/i18n/de.json`.
  - [x] Actualizar `docs/architecture/i18n-spec.md` para que solo `en` y `es` queden como idiomas del presente.
  - [x] Actualizar `docs/delivery/deployment.md` si mantiene una referencia viva a `/de/`.
  - [x] Actualizar `docs/governance/template-audit.md` si mantiene una referencia no historica a `src/i18n/de.json`.
  - [x] Eliminar `src/scripts/theme.js`.
  - [x] Retirar de `src/scripts/theme-toggle.js` el comentario que menciona `theme.js`.
  - [x] Corregir `docs/visual/asset-plan.md` con nombres reales de headers.
  - [x] Confirmar que no se tocaron imagenes duplicadas ni `sdd/tests/fixtures/**`.
- Archivos o areas probables:
  - `src/i18n/de.json`
  - `src/scripts/theme.js`
  - `src/scripts/theme-toggle.js`
  - `docs/architecture/i18n-spec.md`
  - `docs/delivery/deployment.md`
  - `docs/governance/template-audit.md`
  - `docs/visual/asset-plan.md`
- Validaciones:
  - [x] `rg -n 'src/i18n/de\\.json|/de/|locales:.*de|theme\\.js|pcftc|dld2|ewc' ...`
  - [x] `npm test`
  - [x] `npm run build`
  - [x] `git diff --check`
- Criterio de cierre:
  - runtime `en`/`es` sigue construyendo, tests pasan y los residuos definidos por el usuario quedan retirados.

---

## 5. Dependencias entre fases

- Fase 1 bloquea: Fase 2, Fase 3 y cierre.
- Fase 2 bloquea: Fase 3 y cierre.
- Fase 3 bloquea: cierre.

---

## 6. Decisiones y bloqueos

### Decisiones abiertas bloqueantes

- [x] ninguna

### Decisiones abiertas no bloqueantes

- [x] ninguna

### Escalaciones requeridas

- [x] ninguna conocida; el usuario ya aprobo mover bootstrap, eliminar templates, eliminar idiomas no activos y limpiar scripts candidatos.

---

## 7. Tareas diferidas

- [x] No deduplicar assets sociales o headers.
- [x] No normalizar referencias historicas dentro de `sdd/parches/legacy/**`.
- [x] No redisenar motion ni sustituir AOS/GSAP.

---

## 8. Validaciones globales

### Documentales

- [x] verificar alineacion con `docs/README.md`
- [x] verificar alineacion con documentos contractuales aplicables
- [x] verificar trazabilidad desde `plan.md`

### Tecnicas

- [x] `node sdd/tools/validate-sdd.mjs`
- [x] `npm test`
- [x] `npm run build`
- [x] `git diff --check`

### Manuales

- [x] revision manual de que assets duplicados aprobados no fueron tocados
- [x] revision manual de que `sdd/tests/fixtures/**` no fue tocado
- [x] revision manual de que no se cambio comportamiento visible de rutas, metadata o contenido

---

## 9. Criterio de cierre

Este `tasks.md` queda listo para `sdd-phase-backlog` solo si:

- [x] cada fase tiene objetivo, precondiciones, tareas, validaciones y criterio de cierre
- [x] no hay decisiones abiertas que bloqueen la fase seleccionada
- [x] cada tarea es trazable al `plan.md`
- [x] las validaciones son reales y no inventan scripts

---

## 10. Registro de cambios

- Fecha: 2026-05-09
  - cambio: creacion inicial de fases macro.
  - razon: preparar backlogs y ejecucion secuencial del patch completo.

- Fecha: 2026-05-09
  - cambio: checklist de fases y validaciones marcado como completado.
  - razon: fases 1, 2 y 3 ejecutadas con backlogs cerrados.
