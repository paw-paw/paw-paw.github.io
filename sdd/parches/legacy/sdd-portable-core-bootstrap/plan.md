# Plan: SDD Portable Core Bootstrap

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

- Change id: `sdd-portable-core-bootstrap`
- Program id: `sdd-portable-core`
- Estado: `ready-for-tasks`
- Ultima actualizacion: `2026-05-06`
- Owner: `paw-paw`
- Depende de:
  - `docs/sdd/parches/sdd-portable-core-bootstrap/definicion.md`
  - `docs/sdd/parches/sdd-portable-core-bootstrap/decision.log`
  - `docs/sdd/parches/sdd-portable-core-bootstrap/handover.md`
- Desbloquea:
  - `docs/sdd/parches/sdd-portable-core-bootstrap/tasks.md`
  - futura migracion estructural controlada de `docs/sdd/` hacia `sdd/`
  - future patches del programa `sdd-portable-core`

---

## 1. Fuente de verdad aplicable

- `docs/README.md`
- `AGENTS.md`
- `docs/sdd/parches/sdd-portable-core-bootstrap/definicion.md`
- `docs/sdd/parches/sdd-portable-core-bootstrap/decision.log`
- documentos contractuales aplicables:
  - `docs/README.md`
- documentos auxiliares aplicables:
  - `docs/AGENTS.md`
  - `README.md`
  - `docs/sdd/parches/README.md`
  - `docs/sdd/orchestration/README.md`
  - `docs/sdd/orchestration/skill-routing.md`
  - `docs/sdd/orchestration/artifact-state-machine.md`
  - `docs/sdd/orchestration/decision-gates.md`
  - `docs/sdd/orchestration/drift-policy.md`
  - `docs/sdd/orchestration/subagent-policy.md`
  - `docs/sdd/orchestration/model-policy.md`
  - `docs/sdd/templates/plan.md`
  - `.codex/skills/*/SKILL.md`
  - `.codex/agents/*.toml`

Nota:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- este plan no amplia el alcance aprobado en `definicion.md`
- el handover preservado informa la direccion objetivo, pero no sustituye `docs/README.md` ni `AGENTS.md`
- la migracion debe reconciliar contratos vivos; no puede dejar la nueva ruta `sdd/` como verdad implicita solo por mover archivos

---

## 2. Lectura brownfield

- estructura existente:
  - no existe una raiz `sdd/`
  - la estructura SDD real vive bajo `docs/sdd/`
  - `docs/sdd/templates/` contiene templates activos de definicion, plan, tasks, backlog y decision log
  - `docs/sdd/orchestration/` contiene soporte operativo transversal
  - `docs/sdd/parches/` contiene workspaces historicos y activos, incluido este bootstrap
- patrones existentes:
  - las skills SDD actuales leen y escriben bajo `docs/sdd/parches/`
  - los writers controlados estan acotados a `docs/sdd/parches/<change-id>/`
  - los artifacts SDD actuales no usan `patch.yaml`
  - la validacion de cambios documentales se hace con lectura, `rg`, revision manual y `git diff --check`
- deuda o drift relevante:
  - `docs/README.md` ya referencia `sdd/...` como mapa documental, pero las rutas reales siguen bajo `docs/sdd/...`
  - `AGENTS.md`, `.codex/skills/*` y `.codex/agents/*` siguen apuntando a `docs/sdd/...`
  - `README.md` apunta a `docs/sdd/sprint-3/roadmap.md`, ruta que no existe en la estructura real actual
  - `docs/sdd/parches/README.md` enumera solo algunos workspaces y quedo incompleto frente al estado real
- restricciones tecnicas:
  - no debe ejecutarse una migracion que deje a la vez `docs/sdd/` y `sdd/` como rutas activas equivalentes
  - no debe introducirse `patch.yaml` en este patch
  - no debe crearse `sdd/core/` completo en este patch; la autoridad minima de ruta se resuelve con READMEs de migracion, y el micro-core queda como future patch
  - el bootstrap puede usar `docs/sdd/parches/sdd-portable-core-bootstrap/` como workspace vivo hasta cerrar la migracion, porque las skills actuales aun dependen de esa ruta

---

## 3. Zonas afectadas

### Docs

- `docs/README.md`
- `AGENTS.md`
- `README.md`
- `docs/AGENTS.md`
- `docs/sdd/**`
- futura raiz `sdd/**`
- `docs/sdd/parches/sdd-portable-core-bootstrap/plan.md`
- `docs/sdd/parches/sdd-portable-core-bootstrap/decision.log`

### Codigo

- ninguno previsto

### Configuracion, tests o build

- `.codex/skills/*/SKILL.md`
- `.codex/agents/*.toml`
- `.codex/config.toml`, solo lectura esperada
- `package.json`, solo lectura para confirmar que no hay validacion npm necesaria por defecto

---

## 4. Bloques de implementacion

### Bloque 1 - Autoridad minima de ruta `sdd/`

- Objetivo: crear la raiz objetivo con autoridad documental minima antes de mover artifacts.
- Superficies afectadas: `sdd/README.md`, `sdd/parches/README.md`, `sdd/parches/legacy/README.md`, posiblemente `sdd/templates/README.md` y `sdd/orchestration/README.md`.
- Cambios esperados: declarar que `sdd/` es el sistema operativo SDD portable, que `sdd/parches/` sera workspace activo futuro, que `sdd/parches/legacy/` es historico no normativo, y que `sdd/templates/` y `sdd/orchestration/` son transicionales.
- Dependencias: `docs/README.md`, `AGENTS.md`, handover preservado.
- Riesgos: crear doctrina SDD extensa dentro de READMEs de migracion.
- Validaciones asociadas: revision documental de precedencia y ausencia de claims de core completo.

### Bloque 2 - Migracion fisica controlada de artifacts SDD

- Objetivo: mover la estructura SDD actual desde `docs/sdd/` hacia `sdd/` sin perder trazabilidad ni declarar legacy como normativo.
- Superficies afectadas: `docs/sdd/**`, `sdd/parches/**`, `sdd/templates/**`, `sdd/orchestration/**`.
- Cambios esperados: migrar `docs/sdd/templates/` a `sdd/templates/`, migrar `docs/sdd/orchestration/` a `sdd/orchestration/`, mover workspaces historicos a `sdd/parches/legacy/`, y tratar el workspace bootstrap como excepcion transicional hasta cierre.
- Dependencias: Bloque 1.
- Riesgos: romper el flujo SDD activo si se mueve el bootstrap antes de cerrar la ejecucion, o mezclar workspaces activos con legacy historico.
- Validaciones asociadas: `find`, `rg` de rutas antiguas, revision manual de clasificacion legacy/transicional/normativa.

### Bloque 3 - Reconciliacion contractual y operativa

- Objetivo: alinear los contratos vivos y referencias operativas con la nueva raiz `sdd/`.
- Superficies afectadas: `docs/README.md`, `AGENTS.md`, `docs/AGENTS.md`, `README.md`, `.codex/skills/*/SKILL.md`, `.codex/agents/*.toml`.
- Cambios esperados: eliminar `docs/sdd/` como ruta activa, actualizar referencias normativas vigentes a `sdd/...`, conservar o marcar referencias historicas cuando correspondan, y ajustar skill/agent docs al nuevo workspace activo solo en la medida necesaria para que las siguientes fases del programa puedan operar.
- Dependencias: Bloque 2.
- Riesgos: actualizar en masa referencias historicas que deben quedar como memoria, o dejar referencias vigentes apuntando a rutas muertas.
- Validaciones asociadas: `rg` con clasificacion de hallazgos, lectura de documentos contractuales y auxiliares actualizados.

### Bloque 4 - Reporte de migracion y cierre preparatorio

- Objetivo: dejar evidencia de que la migracion estructural inicial es trazable y que el trabajo restante queda diferido como future patches.
- Superficies afectadas: artifact de reporte dentro del workspace o documento de cierre disponible segun el flujo SDD vigente, `decision.log` si aparecen decisiones significativas.
- Cambios esperados: registrar estructura creada, rutas eliminadas, legacy migrado, referencias antiguas encontradas, clasificacion de hallazgos, notas agregadas, riesgos residuales y pendientes asignados.
- Dependencias: Bloques 1 a 3.
- Riesgos: presentar el patch como cierre completo del programa portable cuando solo cubre bootstrap migration-first.
- Validaciones asociadas: revision manual contra `definicion.md`, `decision.log`, handover preservado y lista de future patch candidates.

---

## 5. Datos, schemas y contratos

- Contratos documentales afectados:
  - `docs/README.md`: debe reconciliar la taxonomia documental para que `sdd/` deje de ser una ruta inexistente y `docs/sdd/` deje de ser ruta activa
  - `AGENTS.md`: debe actualizar estructura del repo, reglas SDD y ownership de agentes/skills si cambian las rutas operativas
  - `README.md`: debe apuntar a la documentacion inicial correcta y eliminar referencias a rutas SDD antiguas o inexistentes
- Datos o contenido afectados:
  - no aplica a contenido del portfolio
  - afecta solo artifacts SDD, templates, orquestacion y memoria historica
- Schemas o modelos afectados:
  - no se crea `patch.yaml`
  - no se crea `sdd/tools/schemas/patch.schema.json`
  - el modelo de manifest queda diferido para un future patch del programa
- Compatibilidad esperada:
  - el bootstrap puede ser el ultimo patch gestionado desde `docs/sdd/parches/`
  - despues de la migracion, nuevos workspaces deberian nacer bajo `sdd/parches/`
  - legacy debe quedar visible, pero no como patron vigente
  - las skills deben quedar al menos documentadas contra la ruta nueva o explicitamente marcadas como pendientes si su actualizacion queda fuera del patch

---

## 6. Validaciones previstas

Estas validaciones son planificadas. No registrar resultados de ejecucion en `plan.md`.

### Documentales

- [ ] verificar alineacion con `docs/README.md`
- [ ] verificar alineacion con `AGENTS.md`
- [ ] verificar que `README.md` no apunte a rutas SDD inexistentes
- [ ] verificar que el handover preservado no se trate como contrato superior
- [ ] verificar que legacy quede bajo `sdd/parches/legacy/` y marcado como no normativo
- [ ] verificar que `sdd/templates/` y `sdd/orchestration/` queden declarados como transicionales

### Tecnicas

- [ ] `rg -n "docs/sdd|sdd/templates|sdd/parches|sdd/orchestration|patch.yaml|sdd-close" AGENTS.md README.md docs .codex/skills .codex/agents package.json`
- [ ] clasificar cada hallazgo como `normativo vigente`, `historico / legacy`, `transicional`, `falso positivo` o `requiere decision posterior`
- [ ] `find docs/sdd sdd -maxdepth 3 -type f | sort`, adaptado si `docs/sdd` deja de existir
- [ ] `git diff --check`
- [ ] `npm run build` solo si la ejecucion toca runtime Astro, build output, rutas publicas, assets o configuracion del sitio
- [ ] `npm test` solo si la ejecucion toca logica cubierta por tests

### Manuales

- [ ] revision manual de que `docs/sdd/` no queda como ruta activa
- [ ] revision manual de que `sdd/` no contiene doctrina core extensa creada por este patch
- [ ] revision manual de que referencias historicas no fueron reescritas indebidamente
- [ ] revision manual de pendientes diferidos: micro-core, manifest, `sdd-close`, validacion local, writer audit, CI, link checker

---

## 7. Riesgos y mitigaciones

- riesgo:
  - impacto: el cambio contractual de `docs/sdd/` a `sdd/` contradice la operacion actual de skills y agents
  - mitigacion: tratar este patch como bootstrap transicional, actualizar referencias operativas minimas y diferir type-awareness completa a future patch si excede el alcance
- riesgo:
  - impacto: mover el workspace bootstrap demasiado pronto y perder trazabilidad durante ejecucion
  - mitigacion: mantenerlo como excepcion transicional hasta cierre o migrarlo solo al final con nota de reporte
- riesgo:
  - impacto: crear un micro-core parcial sin el alcance completo aprobado por el handover
  - mitigacion: crear solo READMEs de ruta y diferir `sdd/core/*` a un future patch especifico
- riesgo:
  - impacto: dejar `docs/README.md` y `AGENTS.md` desalineados con la estructura final
  - mitigacion: incluir reconciliacion contractual como bloque obligatorio de este patch
- riesgo:
  - impacto: reescribir referencias historicas y perder memoria del proceso
  - mitigacion: clasificar hallazgos antes de cambiar referencias y conservar notas historicas solo donde eviten confusion
- riesgo:
  - impacto: agrandar el patch hasta cubrir manifest, close, validation tooling y audit
  - mitigacion: mantener esos temas como deferred/future patches salvo ajustes minimos de rutas necesarios para no romper la migracion

---

## 8. Decisiones humanas abiertas

- Estado: `none`
- No hay decisiones humanas abiertas que bloqueen `sdd-tasks`.

Decisiones de planning fijadas en este plan:

- crear autoridad minima de ruta con READMEs, no `sdd/core/` completo
- migrar `docs/sdd/orchestration/` tal cual a `sdd/orchestration/` como transicional
- migrar `docs/sdd/templates/` a `sdd/templates/` como transicional
- clasificar referencias antiguas antes de reescritura
- tratar el workspace bootstrap como excepcion transicional hasta cierre

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

- 2026-05-06:
  - cambio: creacion inicial del plan `sdd-portable-core-bootstrap`
  - razon: convertir la definicion migration-first en un plan brownfield listo para `sdd-tasks`

---

## 11. Nota de sincronizacion de drift

- 2026-05-09:
  - cambio: se agrega nota posterior a ejecucion.
  - razon: los bloques 1 a 4 ya fueron ejecutados y sus resultados estan documentados en backlogs y reporte de migracion.
  - clasificacion: la lectura brownfield y las rutas `docs/sdd/...` de este plan describen el estado pre-migracion que justifico el cambio.
  - estado actual: `sdd/` es la raiz operativa; `sdd/parches/legacy/` contiene legacy; `docs/sdd/parches/sdd-portable-core-bootstrap/` permanece como excepcion transicional.
  - contratos sincronizados: `docs/README.md` y `docs/AGENTS.md`.
  - drift sync: `docs/sdd/parches/sdd-portable-core-bootstrap/drift-sync.md`.
