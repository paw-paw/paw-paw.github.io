# Tasks: SDD Portable Core Post-Bootstrap

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

- Change id: `sdd-portable-core-post-bootstrap`
- Program id: `sdd-portable-core`
- Estado: `ready-for-backlog`
- Ultima actualizacion: `2026-05-09`
- Owner: `paw-paw`
- Depende de:
  - `sdd/parches/sdd-portable-core-post-bootstrap/definicion.md`
  - `sdd/parches/sdd-portable-core-post-bootstrap/plan.md`
  - `sdd/parches/sdd-portable-core-post-bootstrap/decision.log`
- Desbloquea:
  - `sdd-phase-backlog` para Fase 1

---

## 1. Fuente de verdad aplicable

- `docs/README.md`
- `AGENTS.md`
- `sdd/parches/sdd-portable-core-post-bootstrap/definicion.md`
- `sdd/parches/sdd-portable-core-post-bootstrap/plan.md`
- `sdd/parches/sdd-portable-core-post-bootstrap/decision.log`
- documentos contractuales aplicables:
  - `docs/README.md`
  - `docs/AGENTS.md`, solo si una fase modifica reglas dentro de `docs/`
  - `AGENTS.md`, solo si una fase modifica reglas operativas globales
- documentos auxiliares aplicables:
  - `sdd/README.md`
  - `sdd/parches/README.md`
  - `sdd/templates/README.md`
  - `sdd/templates/tasks.md`
  - `sdd/orchestration/**`
  - `.codex/config.toml`
  - `.codex/agents/*.toml`
  - `.codex/skills/*/SKILL.md`

Nota:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- este `tasks.md` preserva la secuencia macro registrada en `plan.md` y `decision.log`
- las tareas son de fase macro; los checklists operativos pertenecen a `backlog/faseN.md`
- no se debe crear ni ejecutar mas de un backlog de fase a la vez salvo instruccion explicita posterior

---

## 2. Preflight

- [x] `definicion.md` existe y corresponde al mismo `change-id`
- [x] `plan.md` existe y corresponde al mismo `change-id`
- [x] no hay decisiones abiertas que bloqueen la division en fases
- [x] no hay contradiccion visible entre `plan.md` y contratos aplicables
- [x] no hay drift documental que obligue a actualizar `definicion.md` o `plan.md` antes de seguir

Resultado: `ready`

Notas:

- El patch se mantiene como unidad, pero debe ejecutarse por fases estrictas.
- `docs/sdd/parches/sdd-portable-core-bootstrap/**` se conserva hasta la Fase 7.
- La validacion SDD inicia como comando directo bajo `sdd/tools/`; no se modifica `package.json` salvo nueva decision humana.

---

## 3. Resumen del plan

Este cambio completa el programa post-bootstrap `sdd-portable-core` como un unico patch SDD con fases estrictas. El trabajo empieza por un micro-core portable, introduce el modelo formal de patch y manifest, define cierre, crea validacion local, actualiza skills/templates, audita writers y termina con reconciliacion y cierre del patch.

No hay decisiones humanas abiertas que bloqueen `sdd-tasks`. Las validaciones combinan revision documental, `rg`, `git diff --check`, validador SDD local cuando exista y `npm` solo si una fase toca runtime Astro o integra validacion al runner npm.

---

## 4. Fases

### Fase 1 - Micro-core SDD estricto

- Objetivo: crear `sdd/core/**` como autoridad metodologica minima y portable, sin convertirlo en enciclopedia.
- Origen en `plan.md`:
  - Bloque 1 - Micro-core SDD estricto
- Precondiciones:
  - `plan.md` esta `ready-for-tasks`
  - decisiones sobre patch unico y promocion `orchestration` -> `core` estan registradas
- Tareas:
  - [ ] Crear la estructura inicial `sdd/core/**` con los cuatro documentos previstos por el handover.
  - [ ] Destilar desde `sdd/orchestration/**` solo reglas estables compartidas por 3+ skills/artifacts.
  - [ ] Mantener routing concreto, subagentes, modelos y output contracts como soporte operativo en `sdd/orchestration/**`.
  - [ ] Actualizar referencias minimas necesarias para que `sdd/` apunte al nuevo core sin duplicar doctrina en `AGENTS.md`.
  - [ ] Registrar hallazgos o drift si una regla candidata no cabe claramente en core u orchestration.
- Archivos o areas probables:
  - `sdd/core/README.md`
  - `sdd/core/patch-model.md`
  - `sdd/core/artifact-lifecycle.md`
  - `sdd/core/decision-drift-policy.md`
  - `sdd/README.md`
  - `sdd/orchestration/**`
  - `AGENTS.md`, solo si hace falta una referencia operativa minima
- Validaciones:
  - [ ] revision documental contra `docs/README.md` y `AGENTS.md`
  - [ ] `rg` para detectar duplicacion innecesaria entre `sdd/core`, `sdd/orchestration` y `AGENTS.md`
  - [ ] `git diff --check`
- Criterio de cierre:
  - `sdd/core/**` existe, las reglas promovidas son justificablemente compartidas y no hay decision abierta que bloquee el modelo de patch.

### Fase 2 - Modelo formal de patch y manifest

- Objetivo: introducir el modelo formal de patch y el manifest liviano `patch.yaml`.
- Origen en `plan.md`:
  - Bloque 2 - Modelo formal de patch y manifest
- Precondiciones:
  - Fase 1 cerrada
  - `sdd/core/patch-model.md` y `sdd/core/artifact-lifecycle.md` existen
- Tareas:
  - [ ] Definir campos, enums y matriz `patch_kind + lifecycle` en el core.
  - [ ] Crear `patch.yaml` para `sdd-portable-core-post-bootstrap` sin reemplazar artifacts existentes.
  - [ ] Definir la excepcion legacy: `sdd/parches/legacy/**` no recibe manifest obligatorio.
  - [ ] Separar claramente `patch_kind`, `lifecycle`, `status`, `program_id` y `related_docs`.
  - [ ] Registrar cualquier cambio estructural de manifest en `decision.log`.
- Archivos o areas probables:
  - `sdd/core/patch-model.md`
  - `sdd/core/artifact-lifecycle.md`
  - `sdd/parches/sdd-portable-core-post-bootstrap/patch.yaml`
  - `sdd/templates/**`, solo si se necesita template transicional
- Validaciones:
  - [ ] revision manual de matriz permitida/prohibida
  - [ ] revision de compatibilidad entre `patch.yaml`, `definicion.md`, `plan.md`, `tasks.md` y `decision.log`
  - [ ] `git diff --check`
- Criterio de cierre:
  - el manifest existe, el modelo esta documentado y no impone obligatoriedad que las skills todavia no puedan respetar.

### Fase 3 - Lifecycle, cierre y `sdd-close`

- Objetivo: definir cierre formal de patches y crear el flujo `sdd-close`.
- Origen en `plan.md`:
  - Bloque 3 - Lifecycle, cierre y `sdd-close`
- Precondiciones:
  - Fase 2 cerrada
  - `patch.yaml` y core lifecycle existen
  - decision registrada de crear `sdd-close` mediante `skill-creator`
- Tareas:
  - [ ] Definir niveles de cierre y responsabilidades de `cierre.md`.
  - [ ] Mantener `decision.log` como log de decisiones durante ejecucion y `cierre.md` como sintesis de cierre.
  - [ ] Crear `sdd-close` con `skill-creator` durante la fase, sin tratarlo como skill activa antes de existir.
  - [ ] Definir template o asset de `cierre.md` segun la ubicacion que corresponda.
  - [ ] Mantener el bootstrap transicional sin mover hasta Fase 7.
- Archivos o areas probables:
  - `sdd/core/artifact-lifecycle.md`
  - `sdd/core/decision-drift-policy.md`
  - `.codex/skills/sdd-close/SKILL.md`
  - `.codex/skills/sdd-close/assets/**` o template transicional equivalente
  - `sdd/parches/sdd-portable-core-post-bootstrap/decision.log`
- Validaciones:
  - [ ] revision de responsabilidades `decision.log` vs `cierre.md`
  - [ ] revision de que `sdd-close` no contradice skills SDD existentes
  - [ ] `git diff --check`
- Criterio de cierre:
  - `sdd-close` existe, el cierre formal esta especificado y el bootstrap transicional sigue intacto para Fase 7.

### Fase 4 - Validacion SDD local

- Objetivo: crear validacion SDD operacional para manifest, estructura y cierre.
- Origen en `plan.md`:
  - Bloque 4 - Validacion SDD local
- Precondiciones:
  - Fase 3 cerrada
  - manifest, lifecycle y cierre tienen reglas documentadas
  - decision registrada de iniciar con comando directo bajo `sdd/tools/`
- Tareas:
  - [ ] Crear schema y validador local bajo `sdd/tools/**`.
  - [ ] Crear fixtures SDD positivos y negativos para la matriz minima del handover.
  - [ ] Validar estructura base `sdd/`, legacy, manifest, enums, matriz y cierre.
  - [ ] Mantener `package.json` sin cambios salvo nueva decision humana.
  - [ ] Registrar limitaciones de validacion manual vs automatica.
- Archivos o areas probables:
  - `sdd/tools/schemas/patch.schema.json`
  - `sdd/tools/validate-sdd.mjs`
  - `sdd/tests/fixtures/**`
  - `sdd/core/**`
  - `package.json`, no tocar salvo nueva decision
- Validaciones:
  - [ ] ejecutar comando directo del validador SDD
  - [ ] ejecutar fixtures `spec-first`, `spec-anchored`, `batch`, `legacy read-only`, `missing patch.yaml`, `blocked patch`, `close`
  - [ ] `git diff --check`
- Criterio de cierre:
  - el validador corre por comando directo, cubre fixtures minimos y no depende de `npm` como contrato inicial.

### Fase 5 - Type-awareness de skills SDD

- Objetivo: actualizar skills SDD para operar con manifest, lifecycle y cierre sin mezclar todavia la disposicion final de templates.
- Origen en `plan.md`:
  - Bloque 5 - Type-awareness de skills y templates finales
- Precondiciones:
  - Fase 4 cerrada
  - validador SDD local disponible
  - `sdd-close` existe si sus reglas deben integrarse
- Tareas:
  - [ ] Actualizar skills SDD para leer `patch.yaml` cuando exista.
  - [ ] Definir stop condition por falta de `patch.yaml` en patches nuevos, excluyendo intake y legacy segun el modelo.
  - [ ] Validar que skills de planning no creen backlogs ni ejecuten cambios.
  - [ ] Registrar cualquier cambio de comportamiento de skills como decision si afecta convenciones vivas.
- Archivos o areas probables:
  - `.codex/skills/sdd-intake/SKILL.md`
  - `.codex/skills/sdd-router/SKILL.md`
  - `.codex/skills/sdd-plan/SKILL.md`
  - `.codex/skills/sdd-tasks/SKILL.md`
  - `.codex/skills/sdd-phase-backlog/SKILL.md`
  - `.codex/skills/sdd-execute-phase/SKILL.md`
  - `.codex/skills/sdd-sync-drift/SKILL.md`
  - `.codex/skills/sdd-close/**`
- Validaciones:
  - [ ] `rg` sobre skills para `patch.yaml`, `sdd/templates`, `sdd-close`, `backlog/faseN.md`
  - [ ] ejecutar validador SDD local
  - [ ] `git diff --check`
- Criterio de cierre:
  - skills SDD son type-aware y siguen respetando los limites intake/plan/tasks/backlog/execution.

### Fase 6 - Templates finales y superficie transicional

- Objetivo: resolver la transicion de templates sin convertir `sdd/templates/**` en fuente final por inercia.
- Origen en `plan.md`:
  - Bloque 5 - Type-awareness de skills y templates finales
- Precondiciones:
  - Fase 5 cerrada
  - skills SDD ya tienen comportamiento type-aware definido
- Tareas:
  - [ ] Decidir por template si vive como asset de skill, queda transicional o se degrada.
  - [ ] Mover o duplicar templates finales hacia assets de skills cuando corresponda.
  - [ ] Mantener templates como forma de artifact, no como manual largo de ejecucion.
  - [ ] Actualizar referencias a `sdd/templates/**` solo donde el nuevo destino este definido.
  - [ ] Registrar drift si alguna skill depende de un template que ya no debe ser fuente activa.
- Archivos o areas probables:
  - `sdd/templates/**`
  - `.codex/skills/*/assets/**`
  - `.codex/skills/*/SKILL.md`
  - `sdd/templates/README.md`
- Validaciones:
  - [ ] `rg` sobre `sdd/templates`, `.codex/skills/*/assets`, y skills SDD
  - [ ] ejecutar validador SDD local
  - [ ] `git diff --check`
- Criterio de cierre:
  - cada template tiene destino o rol explicito y ninguna skill depende de una fuente transicional sin clasificar.

### Fase 7 - Writer audit y reglas de confianza

- Objetivo: auditar writers antes de cualquier ampliacion de confianza, permisos o superficies.
- Origen en `plan.md`:
  - Bloque 6 - Writer audit y reglas de confianza
- Precondiciones:
  - Fase 6 cerrada
  - reglas core, cierre y skills type-aware disponibles para evaluar writers
- Tareas:
  - [ ] Definir rubric simple para writers.
  - [ ] Evaluar casos base: artifact simple, artifact con contradiccion, codigo local simple, cambio con validacion, decision gate y drift.
  - [ ] Producir evidencia comparativa, no solo opinion narrativa.
  - [ ] Confirmar que no se amplian permisos sin decision registrada.
  - [ ] Registrar hallazgos y recomendaciones de confianza.
- Archivos o areas probables:
  - `.codex/agents/sdd-artifact-writer.toml`
  - `.codex/agents/sdd-phase-worker.toml`
  - `sdd/core/decision-drift-policy.md`
  - `sdd/parches/sdd-portable-core-post-bootstrap/**`
- Validaciones:
  - [ ] revision de perfiles writer contra rubric
  - [ ] ejecutar validador SDD local si cubre agent/skill invariants
  - [ ] `git diff --check`
- Criterio de cierre:
  - audit completado con evidencia y sin ampliacion implicita de permisos.

### Fase 8 - Reconciliacion, self-validation y cierre del patch

- Objetivo: reconciliar el patch unico, resolver residuos transicionales y cerrar con evidencia.
- Origen en `plan.md`:
  - Bloque 7 - Reconciliacion, self-validation y cierre del patch
- Precondiciones:
  - Fases 1 a 7 cerradas
  - `sdd-close` y validador SDD local disponibles
- Tareas:
  - [ ] Clasificar residuos del bootstrap transicional y decidir tratamiento final dentro del cierre.
  - [ ] Ejecutar self-validation del sistema SDD resultante.
  - [ ] Reconciliar reglas vivas hacia `docs/`, `sdd/core` o `AGENTS.md` solo si corresponde.
  - [ ] Registrar validaciones como automated, manual, not applicable o deferred.
  - [ ] Crear `cierre.md` del patch usando el flujo definido.
- Archivos o areas probables:
  - `sdd/parches/sdd-portable-core-post-bootstrap/**`
  - `docs/sdd/parches/sdd-portable-core-bootstrap/**`
  - `sdd/README.md`
  - `sdd/parches/README.md`
  - `docs/README.md`, `docs/AGENTS.md`, `AGENTS.md` solo si hay drift contractual real
- Validaciones:
  - [ ] ejecutar validador SDD local
  - [ ] `rg` de referencias normativas/historicas/transicionales
  - [ ] `git diff --check`
  - [ ] `npm run build` solo si una fase previa toco runtime Astro o output publico
- Criterio de cierre:
  - patch cerrado con `cierre.md`, drift clasificado, validaciones registradas y sin decisiones abiertas ocultas.

---

## 5. Dependencias entre fases

- Fase 1 bloquea:
  - Fase 2, porque el manifest necesita autoridad y lifecycle conceptual minimo.
  - Fase 3, porque cierre depende del lifecycle.
- Fase 2 bloquea:
  - Fase 3, porque cierre usa status y manifest.
  - Fase 4, porque el validador necesita schema/modelo.
  - Fase 5, porque type-awareness depende de `patch.yaml`.
- Fase 3 bloquea:
  - Fase 4, porque el validador debe entender cierre.
  - Fase 5, porque skills deben conocer `sdd-close` si existe.
- Fase 4 bloquea:
  - Fase 5, porque cambios de skills/templates deben poder validarse.
  - Fase 8, porque el cierre final necesita self-validation.
- Fase 5 bloquea:
  - Fase 6, porque los templates finales dependen del comportamiento type-aware de skills.
- Fase 6 bloquea:
  - Fase 7, porque writer audit debe evaluarse contra skills y templates estabilizados.
- Fase 7 bloquea:
  - Fase 8, porque cierre debe incluir hallazgos de writer audit.
- Fase 8 bloquea:
  - cierre del patch completo.

---

## 6. Decisiones y bloqueos

### Decisiones abiertas bloqueantes

- [x] ninguna

### Decisiones abiertas no bloqueantes

- [x] ninguna

### Escalaciones requeridas

- [ ] Agregar dependencias nuevas.
- [ ] Modificar `package.json` para exponer validacion SDD via npm.
- [ ] Ampliar permisos o autonomia de writers.
- [ ] Cambiar routing, i18n, SEO estructural, deployment, dominio o runtime Astro.
- [ ] Tratar `sdd-close` como skill activa antes de crearla.
- [ ] Expandir `sdd/core/**` mas alla del micro-core aprobado.
- [ ] Cambiar la secuencia macro de fases registrada en `decision.log`.

---

## 7. Tareas diferidas

- [ ] CI para `validate-sdd`.
- [ ] Link checker completo.
- [ ] OpenAI Evals o evals formales para writers/skills.
- [ ] Workspace formal de programa si `program_id` queda insuficiente.
- [ ] Expansion avanzada del core despues de probar el micro-core.
- [ ] Refinamiento avanzado de fixtures despues de smoke tests conceptuales.
- [ ] Compatibilidad o adapter de extraccion hacia otro runtime.
- [ ] Script npm para validacion SDD, hasta que el comando directo estabilice interfaz.

---

## 8. Validaciones globales

### Documentales

- [ ] verificar alineacion con `docs/README.md`
- [ ] verificar alineacion con `AGENTS.md`
- [ ] verificar trazabilidad desde `plan.md`
- [ ] verificar que `docs/sdd/` no reaparece como ruta activa general
- [ ] clasificar referencias a `docs/sdd`, `sdd/core`, `patch.yaml`, `sdd-close` y `cierre.md`

### Tecnicas

- [ ] `git diff --check`
- [ ] `rg -n 'docs/sdd|sdd/core|patch.yaml|sdd-close|cierre\\.md|decision\\.log' AGENTS.md README.md docs sdd .codex/skills .codex/agents package.json`
- [ ] comando directo del validador SDD cuando exista
- [ ] fixtures del validador SDD cuando existan
- [ ] `npm test`, solo si una fase toca logica cubierta por tests o integra validacion al runner npm
- [ ] `npm run build`, solo si una fase toca Astro, rutas publicas, metadata, assets publicos o configuracion de build

### Manuales

- [ ] revision manual de micro-core contra el criterio "regla compartida por 3+ skills/artifacts"
- [ ] revision manual de que cada fase posterior conserva precondiciones y stop conditions
- [ ] revision manual de writer audit antes de ampliar confianza
- [ ] revision manual del cierre y drift residual

---

## 9. Criterio de cierre

Este `tasks.md` queda listo para `sdd-phase-backlog` solo si:

- [x] cada fase tiene objetivo, precondiciones, tareas, validaciones y criterio de cierre
- [x] no hay decisiones abiertas que bloqueen la fase seleccionada
- [x] cada tarea es trazable al `plan.md`
- [x] las validaciones son reales y no inventan scripts

---

## 10. Registro de cambios

- 2026-05-09:
  - cambio: creacion inicial de `tasks.md` para el patch unico post-bootstrap
  - razon: convertir `plan.md` en fases macro listas para `sdd-phase-backlog`
