# Plan: SDD Portable Core Post-Bootstrap

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

- Change id: `sdd-portable-core-post-bootstrap`
- Program id: `sdd-portable-core`
- Estado: `ready-for-tasks`
- Ultima actualizacion: `2026-05-09`
- Owner: `paw-paw`
- Depende de:
  - `sdd/parches/sdd-portable-core-post-bootstrap/definicion.md`
  - `sdd/parches/sdd-portable-core-post-bootstrap/decision.log`
  - decision registrada de ejecutar el handover restante como un unico patch con fases estrictas
- Desbloquea:
  - `sdd-tasks` para dividir este plan en fases macro
  - `sdd-phase-backlog` para preparar una fase por vez

---

## 1. Fuente de verdad aplicable

- `docs/README.md`
- `AGENTS.md`
- `sdd/parches/sdd-portable-core-post-bootstrap/definicion.md`
- `sdd/parches/sdd-portable-core-post-bootstrap/decision.log`
- documentos contractuales aplicables:
  - `docs/README.md`
  - `docs/AGENTS.md`, si una fase modifica reglas dentro de `docs/`
  - `AGENTS.md`, si una fase modifica reglas operativas del host
- documentos auxiliares aplicables:
  - `sdd/README.md`
  - `sdd/parches/README.md`
  - `sdd/templates/README.md`
  - `sdd/templates/plan.md`
  - `sdd/orchestration/README.md`
  - `sdd/orchestration/artifact-state-machine.md`
  - `sdd/orchestration/decision-gates.md`
  - `sdd/orchestration/drift-policy.md`
  - `sdd/orchestration/skill-routing.md`
  - `sdd/orchestration/subagent-policy.md`
  - `sdd/orchestration/model-policy.md`
  - `.codex/config.toml`
  - `.codex/agents/*.toml`
  - `.codex/skills/*/SKILL.md`

Nota:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- este plan no puede ampliar el alcance aprobado en `definicion.md`
- este patch se planifica como unidad, pero no puede ejecutarse como megapatch sin backlogs por fase
- `docs/sdd/parches/sdd-portable-core-bootstrap/**` permanece como excepcion transicional hasta una fase de cierre o reconciliacion explicita

---

## 2. Lectura brownfield

### Estructura existente

- `sdd/` existe como raiz operativa SDD portable.
- `sdd/parches/` es el workspace activo para nuevos cambios SDD.
- `sdd/parches/legacy/` contiene memoria historica no normativa.
- `sdd/templates/` existe como superficie transicional de templates.
- `sdd/orchestration/` existe como soporte operativo transicional.
- `docs/sdd/parches/sdd-portable-core-bootstrap/**` permanece como excepcion transicional documentada.

### Superficies ausentes que este patch debera introducir o decidir

- `sdd/core/**`
- `sdd/parches/<change-id>/patch.yaml`
- `sdd/tools/**`
- `sdd/tests/fixtures/**`
- `sdd-close`
- `cierre.md`
- assets finales bajo `.codex/skills/*/assets/`

### Patrones existentes

- Las skills SDD actuales operan con artifacts bajo `sdd/parches/<change-id>/`.
- `sdd-artifact-writer` puede escribir un artifact SDD asignado bajo `sdd/parches/<change-id>/`.
- `sdd-phase-worker` solo debe ejecutar una fase si existe `backlog/faseN.md`.
- `sdd/templates/tasks.md` espera fases macro antes de backlogs.
- `sdd/templates/backlog-faseN.md` exige checklist operativo por fase.
- `.codex/config.toml` limita subagentes a `max_threads = 4` y `max_depth = 1`.

### Deuda o drift relevante

- El handover aun menciona que `decision.log` estaba afectado por `*.log`, pero `.gitignore` ya contiene excepciones para `docs/**/decision.log` y `sdd/**/decision.log`.
- `sdd/templates/` y `sdd/orchestration/` estan marcados como transicionales; no deben consolidarse como fuente final por inercia.
- No existe comando SDD automatizado; cualquier validacion SDD inicial sera manual hasta crear `sdd/tools/validate-sdd.mjs`.
- Las skills ya documentan rutas `sdd/...`, pero no son type-aware por manifest.

### Restricciones tecnicas

- No tocar runtime Astro, `src/`, `public/`, routing, i18n, SEO, deployment ni dominio.
- No anadir dependencias sin aprobacion humana.
- No ampliar permisos de writers; el audit debe producir evidencia antes de cualquier cambio de confianza.
- No saltar `sdd-tasks`, `sdd-phase-backlog` ni `sdd-execute-phase`.
- No ejecutar varias fases en un mismo backlog.

---

## 3. Zonas afectadas

### Docs

- `sdd/parches/sdd-portable-core-post-bootstrap/**`
- `sdd/README.md`
- `sdd/parches/README.md`
- `sdd/templates/README.md`
- `sdd/orchestration/**`
- `sdd/core/**`
- `docs/README.md`, solo si una fase necesita reconciliacion contractual
- `docs/AGENTS.md`, solo si una fase cambia reglas operativas dentro de `docs/`
- `AGENTS.md`, solo si una fase cambia reglas operativas globales
- `docs/sdd/parches/sdd-portable-core-bootstrap/**`, solo como excepcion transicional, cierre o evidencia historica

### Codigo

- No se esperan cambios en `src/**` ni `public/**`.
- Posibles cambios de tooling no runtime:
  - `sdd/tools/**`
  - `sdd/tests/fixtures/**`
  - `.codex/skills/**`
  - `.codex/agents/**`

### Configuracion, tests o build

- `package.json`, solo si se aprueba exponer validacion SDD como script npm.
- `.gitignore`, no se espera tocar; ya permite `docs/**/decision.log` y `sdd/**/decision.log`.
- No hay `npm run lint`.
- `npm test` existe, pero cubre superficie Astro/public release, no SDD core.

---

## 4. Bloques de implementacion

### Bloque 1 - Micro-core SDD estricto

- Objetivo: crear la autoridad metodologica minima bajo `sdd/core/` sin convertirla en enciclopedia.
- Superficies afectadas:
  - `sdd/core/README.md`
  - `sdd/core/patch-model.md`
  - `sdd/core/artifact-lifecycle.md`
  - `sdd/core/decision-drift-policy.md`
  - referencias necesarias en `sdd/README.md` y, si aplica, `AGENTS.md`
- Cambios esperados:
  - definir autoridad de `sdd/core`
  - separar host, core, skills, agents, templates y artifacts
  - fijar responsabilidades de decisions, assumptions, blockers, findings y tasks
  - definir frontera conceptual entre routing, drift sync y cierre
- Dependencias:
  - definicion y decision de patch unico ya registradas
- Riesgos:
  - inflar el core con procedimiento que corresponde a skills
  - duplicar reglas ya existentes en `AGENTS.md`
- Validaciones asociadas:
  - revisar que cada regla del core afecte multiples skills o artifacts
  - `rg` para detectar duplicacion innecesaria entre `sdd/core`, `sdd/orchestration` y `AGENTS.md`

### Bloque 2 - Modelo formal de patch y manifest

- Objetivo: introducir `patch.yaml` como manifest liviano y validar sus reglas conceptuales.
- Superficies afectadas:
  - `sdd/core/patch-model.md`
  - `sdd/parches/sdd-portable-core-post-bootstrap/patch.yaml`
  - posible template o ejemplo bajo `sdd/templates/` solo si se mantiene transicional
  - futuro schema bajo `sdd/tools/schemas/patch.schema.json`
- Cambios esperados:
  - definir `patch_kind`, `lifecycle`, `status`, `program_id` y `related_docs`
  - prohibir `batch + spec-anchored`
  - declarar que `patch.yaml` no reemplaza handover, definicion, plan, tasks, backlog, decision log ni cierre
  - excluir legacy de manifest obligatorio
- Dependencias:
  - Bloque 1 debe definir autoridad y lifecycle conceptual minimo
- Riesgos:
  - confundir `patch_kind` con `lifecycle`
  - hacer obligatorio el manifest antes de que las skills sean compatibles
- Validaciones asociadas:
  - revisar matriz permitida/prohibida
  - comprobar que el manifest del patch actual no contradiga los artifacts existentes

### Bloque 3 - Lifecycle, cierre y `sdd-close`

- Objetivo: definir cierre formal de patches y crear el flujo minimo de cierre.
- Superficies afectadas:
  - `sdd/core/artifact-lifecycle.md`
  - `sdd/core/decision-drift-policy.md`
  - nueva skill `.codex/skills/sdd-close/SKILL.md`, si se aprueba crearla
  - template o asset de `cierre.md`
  - posible `sdd/parches/sdd-portable-core-post-bootstrap/cierre.md` al final del patch
- Cambios esperados:
  - definir niveles `minimal`, `standard`, `batch`, `anchored`, `drift-heavy`
  - separar responsabilidades entre `decision.log` y `cierre.md`
  - definir reconciliacion hacia `docs/`, `sdd/core` o `AGENTS.md`
  - decidir como tratar el bootstrap transicional antes o durante cierre
- Dependencias:
  - Bloque 1 para lifecycle base
  - Bloque 2 para manifest y status
- Riesgos:
  - cerrar `spec-anchored` sin promover fuente viva
  - mezclar cierre del patch actual con cierre historico del bootstrap
- Validaciones asociadas:
  - revisar que `cierre.md` no sustituya `decision.log`
  - verificar que el cierre registra automated/manual/not applicable/deferred

### Bloque 4 - Validacion SDD local

- Objetivo: crear validacion operacional, no enterprise, para estructura SDD y manifest.
- Superficies afectadas:
  - `sdd/tools/schemas/patch.schema.json`
  - `sdd/tools/validate-sdd.mjs`
  - `sdd/tests/fixtures/**`
  - `package.json`, solo si se aprueba script npm
- Cambios esperados:
  - validar estructura base `sdd/`
  - validar ausencia de `docs/sdd` como ruta activa, preservando excepcion bootstrap
  - validar `patch.yaml`, enums, matriz y `related_docs`
  - validar legacy read-only y cierre de patches cerrados
  - cubrir fixtures conceptuales minimos del handover
- Dependencias:
  - Bloque 2 para manifest y schema
  - Bloque 3 para reglas de cierre
- Riesgos:
  - validar forma sin validar intencion
  - introducir script npm sin decision humana
- Validaciones asociadas:
  - ejecutar el validador creado contra fixtures positivos y negativos
  - si se agrega script npm, ejecutar el script exacto
  - `git diff --check`

### Bloque 5 - Type-awareness de skills y templates finales

- Objetivo: actualizar skills SDD para leer manifest cuando exista y resolver la transicion de templates.
- Superficies afectadas:
  - `.codex/skills/sdd-intake/SKILL.md`
  - `.codex/skills/sdd-router/SKILL.md`
  - `.codex/skills/sdd-plan/SKILL.md`
  - `.codex/skills/sdd-tasks/SKILL.md`
  - `.codex/skills/sdd-phase-backlog/SKILL.md`
  - `.codex/skills/sdd-execute-phase/SKILL.md`
  - `.codex/skills/sdd-sync-drift/SKILL.md`
  - `.codex/skills/sdd-close/SKILL.md`, si existe para esta fase
  - `.codex/skills/*/assets/**`
  - `sdd/templates/**`
- Cambios esperados:
  - las skills SDD leen `patch.yaml` si existe
  - falta de `patch.yaml` en patch nuevo se vuelve stop condition, salvo intake o legacy
  - cambiar `patch_kind` o `lifecycle` queda como decision estructural
  - templates finales se mueven o duplican controladamente hacia assets de skills
  - `sdd/templates/` queda degradado, transicional o preservado con rol explicito
- Dependencias:
  - Bloque 2 para manifest
  - Bloque 3 para cierre
  - Bloque 4 para validar reglas nuevas
- Riesgos:
  - romper workflows SDD actuales
  - convertir templates en manuales largos
  - tocar `.codex/skills/**` sin gate humano cuando cambie convencion viva
- Validaciones asociadas:
  - revisar cada skill SDD afectada con `rg`
  - ejecutar validacion SDD local si ya existe
  - revisar que no se agreguen backlogs ni ejecucion dentro de skills de planning

### Bloque 6 - Writer audit y reglas de confianza

- Objetivo: auditar writers antes de ampliar confianza, permisos o superficies.
- Superficies afectadas:
  - `.codex/agents/sdd-artifact-writer.toml`
  - `.codex/agents/sdd-phase-worker.toml`
  - `sdd/core/decision-drift-policy.md`
  - posible artifact de audit bajo `sdd/parches/sdd-portable-core-post-bootstrap/`
- Cambios esperados:
  - rubric simple `0-3` o `pass/warn/fail`
  - evidencia comparativa para casos base: artifact simple, contradiccion, codigo local, validacion, decision gate y drift
  - no ampliar permisos sin decision registrada
- Dependencias:
  - Bloques 1, 3 y 5 para reglas de decision gates, cierre y skill behavior
- Riesgos:
  - leer el audit como aprobacion implicita de mas autonomia
  - evaluar opinion narrativa sin evidencia reproducible
- Validaciones asociadas:
  - revisar resultados de audit contra rubric
  - confirmar que perfiles writer siguen acotados

### Bloque 7 - Reconciliacion, self-validation y cierre del patch

- Objetivo: reconciliar el patch unico, registrar drift, validar el sistema SDD resultante y cerrar.
- Superficies afectadas:
  - `sdd/parches/sdd-portable-core-post-bootstrap/**`
  - `docs/sdd/parches/sdd-portable-core-bootstrap/**`, solo si se decide cierre/migracion final
  - `sdd/README.md`
  - `sdd/parches/README.md`
  - `docs/README.md`, `docs/AGENTS.md` o `AGENTS.md` solo si hay drift contractual real
- Cambios esperados:
  - clasificar residuos del bootstrap
  - ejecutar validador SDD y checks documentales
  - registrar validaciones como automated/manual/not applicable/deferred
  - producir `cierre.md` del patch si el flujo ya existe
- Dependencias:
  - todos los bloques anteriores
- Riesgos:
  - declarar completo con decisiones abiertas
  - cerrar sin reconciliar reglas vivas
- Validaciones asociadas:
  - validador SDD local
  - `rg` de referencias normativas/historicas/transicionales
  - `git diff --check`
  - `npm run build` solo si algun cambio toca runtime Astro o output publico, lo cual no esta previsto

---

## 5. Datos, schemas y contratos

- Contratos documentales afectados:
  - `docs/README.md` y `AGENTS.md` solo si el patch cambia reglas vivas que esos documentos deben reflejar
  - `sdd/core/**` sera el nuevo contrato metodologico auxiliar del sistema SDD
- Datos o contenido afectados:
  - ninguno del portfolio publico
- Schemas o modelos afectados:
  - nuevo modelo `patch.yaml`
  - nuevo schema `sdd/tools/schemas/patch.schema.json`
  - fixtures SDD bajo `sdd/tests/fixtures/**`
- Compatibilidad esperada:
  - legacy bajo `sdd/parches/legacy/` no recibe `patch.yaml`
  - `docs/sdd/parches/sdd-portable-core-bootstrap/**` sigue siendo excepcion transicional hasta decision de cierre
  - skills deben seguir respetando artifact order: intake -> plan -> tasks -> backlog -> execution -> drift/verification/cierre

---

## 6. Validaciones previstas

Estas validaciones son planificadas. No registran resultados de ejecucion en este plan.

### Documentales

- [ ] verificar alineacion con `docs/README.md`
- [ ] verificar alineacion con `AGENTS.md`
- [ ] verificar que `docs/sdd/` no reaparece como ruta activa general
- [ ] clasificar hits de `docs/sdd`, `sdd/core`, `patch.yaml`, `sdd-close` y `cierre.md` como normativos, historicos, transicionales o decision-pending

### Tecnicas

- [ ] `git diff --check`
- [ ] `rg -n "docs/sdd|sdd/core|patch.yaml|sdd-close|cierre\\.md|decision\\.log" AGENTS.md README.md docs sdd .codex/skills .codex/agents package.json`
- [ ] validador SDD local, cuando exista dentro del patch
- [ ] fixtures del validador SDD: `spec-first`, `spec-anchored`, `batch`, `legacy read-only`, `missing patch.yaml`, `blocked patch`, `close`
- [ ] `npm test`, solo si una fase toca logica cubierta por tests o si se decide integrar validacion SDD al runner npm
- [ ] `npm run build`, solo si una fase toca Astro, rutas publicas, metadata, assets publicos o configuracion de build

### Manuales

- [ ] revision manual de micro-core contra el criterio "regla compartida que afecta multiples skills"
- [ ] revision manual de que cada fase posterior tiene precondiciones y stop conditions claras
- [ ] revision manual de writer audit antes de cualquier ampliacion de confianza
- [ ] revision manual de cierre y drift residual

---

## 7. Riesgos y mitigaciones

- riesgo:
  - impacto: el patch unico se convierte en megapatch dificil de revisar
  - mitigacion: `tasks.md` debe dividir fases macro secuenciales y cada fase debe tener un solo backlog activo
- riesgo:
  - impacto: una fase tardia cambia supuestos de una fase temprana
  - mitigacion: usar `sdd-sync-drift` si plan, tasks o backlog quedan obsoletos
- riesgo:
  - impacto: manifest se vuelve obligatorio antes de que skills y validation tooling lo soporten
  - mitigacion: introducir obligatoriedad solo despues de Bloques 2, 4 y 5
- riesgo:
  - impacto: cambios en `.codex/skills/**` alteran convenciones vivas sin decision
  - mitigacion: tratar type-awareness y `sdd-close` como fase con gate explicito y decision.log si cambia comportamiento
- riesgo:
  - impacto: validacion SDD da falso sentido de completitud
  - mitigacion: separar resultados automated, manual, not applicable y deferred
- riesgo:
  - impacto: cierre del bootstrap transicional se mezcla con cierre del patch actual
  - mitigacion: mantener bootstrap como excepcion hasta una decision explicita en Bloque 3 o 7

---

## 8. Decisiones humanas abiertas

Estado: `none`

- No hay decisiones humanas abiertas que bloqueen `sdd-tasks`.
- Decisiones cerradas en `decision.log`:
  - conservar el bootstrap transicional hasta Bloque 7;
  - promover a `sdd/core/**` solo reglas estables compartidas por 3+ skills/artifacts;
  - iniciar validacion SDD como comando directo bajo `sdd/tools/`;
  - crear `sdd-close` mediante `skill-creator` durante la fase correspondiente.

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

- 2026-05-09:
  - cambio: creacion inicial del plan post-bootstrap como patch unico con fases estrictas
  - razon: ejecutar la decision del usuario preservando gates, dependencias y validacion por fase
- 2026-05-09:
  - cambio: se cierran las decisiones humanas abiertas del plan
  - razon: preparar el paso a `sdd-tasks` sin gates pendientes
