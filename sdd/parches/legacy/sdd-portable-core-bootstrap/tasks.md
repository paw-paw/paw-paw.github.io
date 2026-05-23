# Tasks: SDD Portable Core Bootstrap

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

- Change id: `sdd-portable-core-bootstrap`
- Program id: `sdd-portable-core`
- Estado: `ready-for-backlog`
- Ultima actualizacion: `2026-05-06`
- Owner: `paw-paw`
- Depende de:
  - `docs/sdd/parches/sdd-portable-core-bootstrap/definicion.md`
  - `docs/sdd/parches/sdd-portable-core-bootstrap/plan.md`
  - `docs/sdd/parches/sdd-portable-core-bootstrap/decision.log`
- Desbloquea:
  - `docs/sdd/parches/sdd-portable-core-bootstrap/backlog/fase1.md`
  - ejecucion controlada de la migracion SDD migration-first

---

## 1. Fuente de verdad aplicable

- `docs/README.md`
- `AGENTS.md`
- `docs/sdd/parches/sdd-portable-core-bootstrap/definicion.md`
- `docs/sdd/parches/sdd-portable-core-bootstrap/plan.md`
- `docs/sdd/parches/sdd-portable-core-bootstrap/decision.log`
- documentos contractuales aplicables:
  - `docs/README.md`
- documentos auxiliares aplicables:
  - `docs/AGENTS.md`
  - `README.md`
  - `docs/sdd/parches/README.md`
  - `docs/sdd/orchestration/README.md`
  - `docs/sdd/templates/tasks.md`
  - `.codex/skills/*/SKILL.md`
  - `.codex/agents/*.toml`

Nota:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- este `tasks.md` no contradice `definicion.md`, `plan.md` ni documentos contractuales
- la secuencia macro conserva el orden del plan y no ejecuta cambios por si misma

---

## 2. Preflight

- [x] `definicion.md` existe y corresponde al mismo `change-id`
- [x] `plan.md` existe y corresponde al mismo `change-id`
- [x] no hay decisiones abiertas que bloqueen la division en fases
- [x] no hay contradiccion visible entre `plan.md` y contratos aplicables
- [x] no hay drift documental que obligue a actualizar `definicion.md` o `plan.md` antes de seguir

Resultado: `ready`

Notas:
- El plan fija este patch como migration-first y difiere micro-core completo, manifest, `sdd-close`, tooling de validacion, writer audit, CI y link checker.

---

## 3. Resumen del plan

Este cambio ejecutara el bootstrap estructural del programa `sdd-portable-core`, moviendo el sistema SDD desde `docs/sdd/` hacia una raiz `sdd/` con autoridad minima y compatibilidad transicional.

Las fases siguen los cuatro bloques del plan: crear autoridad minima de ruta, migrar artifacts SDD, reconciliar contratos y referencias operativas, y preparar reporte/cierre de migracion.

No hay decisiones humanas abiertas que bloqueen `sdd-phase-backlog`. Las validaciones deben centrarse en rutas, referencias, clasificacion de legacy/transicional/normativo y ausencia de alcance diferido dentro de este patch.

---

## 4. Fases

### Fase 1 - Autoridad minima de ruta `sdd/`

- Objetivo: crear la raiz objetivo y los READMEs minimos que permitan migrar artifacts sin dejar rutas nuevas sin semantica.
- Origen en `plan.md`:
  - Bloque 1 - Autoridad minima de ruta `sdd/`
- Precondiciones:
  - `plan.md` esta en estado `ready-for-tasks`
  - no existe raiz `sdd/` activa antes de la fase
  - `sdd/core/` completo sigue fuera de alcance
- Tareas:
  - [ ] Crear la estructura minima `sdd/` necesaria para alojar patches, legacy, templates y orquestacion transicional.
  - [ ] Redactar `sdd/README.md` como indice operativo breve, sin duplicar doctrina extensa.
  - [ ] Redactar `sdd/parches/README.md` para declarar workspace futuro y relacion con legacy.
  - [ ] Redactar `sdd/parches/legacy/README.md` para declarar no normatividad historica.
  - [ ] Redactar READMEs transicionales para `sdd/templates/` y `sdd/orchestration/` si esas carpetas nacen en esta fase.
- Archivos o areas probables:
  - `sdd/README.md`
  - `sdd/parches/README.md`
  - `sdd/parches/legacy/README.md`
  - `sdd/templates/README.md`
  - `sdd/orchestration/README.md`
- Validaciones:
  - [ ] verificar que no se crea `sdd/core/` completo
  - [ ] verificar que los READMEs no convierten templates u orquestacion transicional en fuente final
  - [ ] verificar alineacion con `docs/README.md` y `AGENTS.md`
- Criterio de cierre: la raiz `sdd/` existe con autoridad minima suficiente y sin ampliar el patch hacia micro-core completo.

### Fase 2 - Migracion fisica controlada de artifacts SDD

- Objetivo: reubicar templates, orquestacion y memoria SDD desde `docs/sdd/` hacia `sdd/` preservando trazabilidad.
- Origen en `plan.md`:
  - Bloque 2 - Migracion fisica controlada de artifacts SDD
- Precondiciones:
  - Fase 1 cerrada
  - READMEs de ruta y legacy existen
  - el workspace bootstrap se mantiene como excepcion transicional hasta cierre
- Tareas:
  - [ ] Migrar `docs/sdd/templates/` a `sdd/templates/` como carpeta transicional.
  - [ ] Migrar `docs/sdd/orchestration/` a `sdd/orchestration/` como carpeta transicional.
  - [ ] Migrar workspaces historicos de `docs/sdd/parches/` a `sdd/parches/legacy/` cuando no sean el bootstrap activo.
  - [ ] Preservar `docs/sdd/parches/sdd-portable-core-bootstrap/` como workspace activo transicional salvo decision registrada de moverlo al final.
  - [ ] Evitar crear `patch.yaml` para legacy o para este bootstrap.
- Archivos o areas probables:
  - `docs/sdd/templates/**`
  - `docs/sdd/orchestration/**`
  - `docs/sdd/parches/**`
  - `sdd/templates/**`
  - `sdd/orchestration/**`
  - `sdd/parches/legacy/**`
- Validaciones:
  - [ ] verificar estructura con `find docs/sdd sdd -maxdepth 3 -type f | sort`, adaptado si `docs/sdd` deja de existir
  - [ ] verificar que legacy queda bajo `sdd/parches/legacy/`
  - [ ] verificar que el bootstrap activo mantiene trazabilidad
- Criterio de cierre: artifacts SDD migrados a sus rutas objetivo o transicionales, sin perder el workspace activo ni declarar legacy como vigente.

### Fase 3 - Reconciliacion contractual y operativa

- Objetivo: alinear contratos vivos, README principal, skills y agentes con la nueva raiz `sdd/`.
- Origen en `plan.md`:
  - Bloque 3 - Reconciliacion contractual y operativa
- Precondiciones:
  - Fase 2 cerrada
  - rutas objetivo existen y legacy esta clasificado
  - lista de referencias antiguas puede inspeccionarse con `rg`
- Tareas:
  - [ ] Actualizar `docs/README.md` para que la estructura documental coincida con la ruta `sdd/` real y no con rutas inexistentes.
  - [ ] Actualizar `AGENTS.md` para reflejar la nueva estructura operativa SDD sin duplicar doctrina core.
  - [ ] Actualizar `docs/AGENTS.md` y `README.md` para eliminar referencias vigentes a rutas antiguas o inexistentes.
  - [ ] Actualizar referencias normativas en `.codex/skills/*/SKILL.md` y `.codex/agents/*.toml` hacia la ruta nueva cuando sea necesario para seguir operando.
  - [ ] Clasificar referencias restantes a `docs/sdd/` como historicas, transicionales, falsos positivos o decisiones posteriores.
- Archivos o areas probables:
  - `docs/README.md`
  - `AGENTS.md`
  - `docs/AGENTS.md`
  - `README.md`
  - `.codex/skills/*/SKILL.md`
  - `.codex/agents/*.toml`
- Validaciones:
  - [ ] ejecutar busqueda con `rg -n "docs/sdd|sdd/templates|sdd/parches|sdd/orchestration|patch.yaml|sdd-close" AGENTS.md README.md docs .codex/skills .codex/agents package.json`
  - [ ] clasificar hallazgos segun el plan
  - [ ] verificar que no se introduce `patch.yaml` ni `sdd-close`
- Criterio de cierre: los documentos y referencias operativas vigentes apuntan a rutas coherentes, y los hallazgos residuales estan clasificados.

### Fase 4 - Reporte de migracion y cierre preparatorio

- Objetivo: dejar evidencia de migracion, riesgos residuales y future patches sin cerrar falsamente el programa completo.
- Origen en `plan.md`:
  - Bloque 4 - Reporte de migracion y cierre preparatorio
- Precondiciones:
  - Fases 1 a 3 cerradas
  - hallazgos de rutas antiguas clasificados
  - decisiones significativas registradas en `decision.log`
- Tareas:
  - [ ] Crear o actualizar un artifact de reporte dentro del workspace con estructura creada, rutas eliminadas y legacy migrado.
  - [ ] Registrar referencias antiguas encontradas y su clasificacion.
  - [ ] Registrar notas agregadas, riesgos residuales y pendientes asignados.
  - [ ] Actualizar `decision.log` solo si aparecieron decisiones significativas nuevas.
  - [ ] Dejar explicitamente diferidos micro-core, manifest, `sdd-close`, validation tooling, writer audit, CI, link checker y evals formales.
- Archivos o areas probables:
  - `docs/sdd/parches/sdd-portable-core-bootstrap/decision.log`
  - `docs/sdd/parches/sdd-portable-core-bootstrap/tasks.md`
  - artifact de reporte/cierre disponible segun el flujo SDD vigente
- Validaciones:
  - [ ] revisar trazabilidad con `definicion.md`, `plan.md` y handover preservado
  - [ ] verificar que el reporte no presenta el programa `sdd-portable-core` como completado
  - [ ] ejecutar `git diff --check`
- Criterio de cierre: el patch queda listo para cierre o drift sync posterior, con evidencia suficiente de migracion y deferred work.

---

## 5. Dependencias entre fases

- Fase 1 bloquea: Fase 2.
- Fase 2 bloquea: Fase 3.
- Fase 3 bloquea: Fase 4.
- Fase 4 bloquea: cierre del patch o drift sync si aparece desalineacion.

---

## 6. Decisiones y bloqueos

### Decisiones abiertas bloqueantes

- [ ] ninguna

### Decisiones abiertas no bloqueantes

- [ ] decidir durante cierre si el workspace bootstrap debe permanecer en ruta historica o migrarse al final con nota explicita
- [ ] decidir en future patch el alcance exacto de `sdd/core/*`
- [ ] decidir en future patch el contrato y schema de `patch.yaml`

### Escalaciones requeridas

- [ ] escalar si `sdd-phase-backlog` detecta que una fase requiere crear `sdd/core/` completo
- [ ] escalar si reconciliar `docs/README.md` o `AGENTS.md` exige cambiar reglas de precedencia no previstas en `plan.md`
- [ ] escalar si la actualizacion minima de skills no basta para que el sistema SDD siga operando despues de la migracion

---

## 7. Tareas diferidas

- [ ] Crear micro-core completo: `sdd/core/README.md`, `patch-model.md`, `artifact-lifecycle.md`, `decision-drift-policy.md`.
- [ ] Introducir `patch.yaml`, schema y validacion local.
- [ ] Crear o adaptar `sdd-close` y `cierre.md`.
- [ ] Migrar templates finales a `.codex/skills/*/assets/`.
- [ ] Actualizar skills para type-awareness completa por manifest.
- [ ] Ejecutar writer audit real.
- [ ] Crear CI, link checker completo u OpenAI Evals/evals formales.

---

## 8. Validaciones globales

### Documentales

- [ ] verificar alineacion con `docs/README.md`
- [ ] verificar alineacion con `AGENTS.md`
- [ ] verificar trazabilidad desde `plan.md`
- [ ] verificar que `README.md` no apunte a rutas SDD inexistentes
- [ ] verificar que legacy queda visible y no normativo

### Tecnicas

- [ ] `rg -n "docs/sdd|sdd/templates|sdd/parches|sdd/orchestration|patch.yaml|sdd-close" AGENTS.md README.md docs .codex/skills .codex/agents package.json`
- [ ] clasificar hallazgos como `normativo vigente`, `historico / legacy`, `transicional`, `falso positivo` o `requiere decision posterior`
- [ ] `find docs/sdd sdd -maxdepth 3 -type f | sort`, adaptado si `docs/sdd` deja de existir
- [ ] `git diff --check`
- [ ] `npm run build` solo si una fase toca runtime Astro, build output, rutas publicas, assets o configuracion del sitio
- [ ] `npm test` solo si una fase toca logica cubierta por tests

### Manuales

- [ ] revision manual de que `docs/sdd/` no queda como ruta activa
- [ ] revision manual de que `sdd/` no contiene doctrina core extensa creada por este patch
- [ ] revision manual de que referencias historicas no fueron reescritas indebidamente
- [ ] revision manual de que deferred work queda fuera del cierre de este patch

---

## 9. Criterio de cierre

Este `tasks.md` queda listo para `sdd-phase-backlog` solo si:

- [x] cada fase tiene objetivo, precondiciones, tareas, validaciones y criterio de cierre
- [x] no hay decisiones abiertas que bloqueen la fase seleccionada
- [x] cada tarea es trazable al `plan.md`
- [x] las validaciones son reales y no inventan scripts

---

## 10. Registro de cambios

- 2026-05-06:
  - cambio: creacion inicial de `tasks.md`
  - razon: convertir `plan.md` aprobado en fases macro listas para `sdd-phase-backlog`

---

## 11. Nota de sincronizacion de drift

- 2026-05-09:
  - cambio: se agrega nota posterior a ejecucion.
  - razon: las cuatro fases ya tienen backlogs en estado `done` y el repo refleja la migracion bootstrap.
  - clasificacion: las tareas sin marcar de este archivo son la planificacion macro original; el estado de ejecucion vive en `backlog/fase1.md` a `backlog/fase4.md`.
  - estado actual: el patch queda listo para cierre manual o future `sdd-close`; no se abre una nueva fase desde este sync.
  - drift sync: `docs/sdd/parches/sdd-portable-core-bootstrap/drift-sync.md`.
