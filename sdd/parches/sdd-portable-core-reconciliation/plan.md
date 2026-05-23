# Plan: sdd-portable-core-reconciliation

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

- Change id: `sdd-portable-core-reconciliation`
- Patch kind: `spec`
- Lifecycle: `spec-anchored`
- Estado: `ready-for-tasks`
- Ultima actualizacion: `2026-05-17`
- Owner: `paw-paw`
- Depende de: `definicion.md`, `decision.log`
- Desbloquea: `tasks.md`

---

## 1. Fuente de verdad aplicable

- `docs/README.md`
- `sdd/parches/sdd-portable-core-reconciliation/definicion.md`
- `sdd/parches/sdd-portable-core-reconciliation/decision.log`
- documentos contractuales aplicables:
  - no hay contratos de producto adicionales que gobiernen directamente este cambio metodologico
- documentos auxiliares aplicables:
  - `AGENTS.md`
  - `docs/AGENTS.md`
  - `README.md`
  - `sdd/README.md`
  - `sdd/parches/README.md`
  - `sdd/core/README.md`
  - `sdd/core/patch-model.md`
  - `sdd/core/artifact-lifecycle.md`
  - `sdd/core/decision-drift-policy.md`
  - `sdd/orchestration/README.md`
  - `sdd/orchestration/skill-routing.md`
  - `sdd/orchestration/artifact-state-machine.md`
  - skills SDD vivas bajo `.codex/skills/`
  - `sdd/tools/schemas/patch.schema.json`
  - `sdd/tools/validate-sdd.mjs`
  - `sdd/tests/fixtures/**`

Nota:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- este plan no amplia el alcance aprobado en `definicion.md`
- el propio plan autoriza una primera fase de creacion de manifest para resolver la excepcion transicional con la que nacio este workspace
- la arquitectura objetivo del handover sigue siendo input de cambio hasta quedar reconciliada en fuentes vivas

---

## 2. Lectura brownfield

- estructura existente:
  - `sdd/` ya existe como raiz operativa con `core/`, `orchestration/`, `parches/`, tooling y fixtures locales
  - la familia SDD actual cubre intake, routing, planificacion, tasks, backlog, ejecucion, drift sync y cierre; `sdd-triage` aun no existe
  - los templates ejecutables ya viven como assets de skills, no bajo `sdd/templates/`
- patrones existentes:
  - manifests `patch.yaml` ya existen en patches no legacy cerrados
  - `decision.log` registra decisiones estructurales
  - la doctrina portable se reparte entre `sdd/core/**` y `sdd/orchestration/**`
  - la validacion SDD actual se concentra en `sdd/tools/validate-sdd.mjs` y fixtures bajo `sdd/tests/fixtures/**`
- deuda o drift relevante:
  - `README.md` sigue referenciando `sdd/templates/**`, ruta ya retirada
  - `docs/README.md` y `docs/AGENTS.md` aun narran `docs/sdd` como cicatriz viva
  - `sdd-intake` permite intake previo al manifest, mientras `validate-sdd` ya exige `patch.yaml` en workspaces no legacy
  - el manifest actual no modela `created_at` ni `closed_at`
  - la type-awareness `spec` / `batch` es declarativa, no semantica fuerte
  - las assumptions existen en doctrina pero aun no son first-class en los assets ejecutables
- restricciones tecnicas:
  - no se deben tocar runtime Astro ni superficies publicas del portfolio
  - los cambios deben preservar legacy como memoria historica y evitar reescritura masiva de patches cerrados
  - el patch debe auto-regularse bajo contratos vivos actuales antes de promover la arquitectura reconciliada

---

## 3. Assumptions

- No critical assumptions.

---

## 4. Zonas afectadas

### Docs

- `README.md`
- `AGENTS.md`
- `docs/README.md`
- `docs/AGENTS.md`
- `sdd/README.md`
- `sdd/parches/README.md`
- `sdd/core/README.md`
- `sdd/core/patch-model.md`
- `sdd/core/artifact-lifecycle.md`
- `sdd/core/decision-drift-policy.md`
- `sdd/orchestration/README.md`
- `sdd/orchestration/skill-routing.md`
- `sdd/orchestration/artifact-state-machine.md`

### Codigo

- `.codex/skills/sdd-triage/SKILL.md`
- `.codex/skills/sdd-intake/SKILL.md`
- `.codex/skills/sdd-router/SKILL.md`
- `.codex/skills/sdd-plan/SKILL.md`
- `.codex/skills/sdd-tasks/SKILL.md`
- `.codex/skills/sdd-phase-backlog/SKILL.md`
- `.codex/skills/sdd-execute-phase/SKILL.md`
- `.codex/skills/sdd-sync-drift/SKILL.md`
- `.codex/skills/sdd-close/SKILL.md`
- `.codex/skills/sdd-*/assets/**`

### Configuracion, tests o build

- `sdd/tools/schemas/patch.schema.json`
- `sdd/tools/validate-sdd.mjs`
- `sdd/tests/fixtures/**`
- tests nuevos o actualizados bajo `tests/**` para cubrir validacion SDD cuando aplique

---

## 5. Bloques de implementacion

### Bloque 1 - Formalizacion inicial del patch

- Objetivo: crear el `patch.yaml` transicional del propio workspace y fijar las fuentes vivas afectadas para que el resto del flujo pueda continuar bajo el contrato vigente.
- Superficies afectadas: `sdd/parches/sdd-portable-core-reconciliation/patch.yaml`, `decision.log`, artifacts activos del patch.
- Cambios esperados:
  - crear manifest bajo el contrato actual para desbloquear validaciones y fases posteriores
  - registrar que el patch se auto-upgradeara cuando la nueva semantica del manifest quede viva
  - dejar visible la lista de `related_docs` que ancla la reconciliacion
- Dependencias: `definicion.md`, `decision.log`
- Riesgos: crear demasiado pronto un manifest con campos aun no soportados por las fuentes vivas.
- Validaciones asociadas:
  - `node sdd/tools/validate-sdd.mjs`
  - revision documental de coherencia entre manifest, definicion y decision log

### Bloque 2 - Doctrina y routing reconciliados

- Objetivo: convertir la arquitectura aprobada en fuentes vivas de onboarding, core y orquestacion.
- Superficies afectadas: `README.md`, `AGENTS.md`, `docs/README.md`, `docs/AGENTS.md`, `sdd/README.md`, `sdd/parches/README.md`, `sdd/core/**`, `sdd/orchestration/**`, `.codex/skills/sdd-triage/SKILL.md`.
- Cambios esperados:
  - introducir la frontera `sdd-triage` -> `sdd-intake` -> `sdd-router`
  - retirar referencias vivas a `sdd/templates/**` y la narrativa operativa de `docs/sdd`
  - reconciliar el rol de `sdd/core/`, manifests, assumptions y cierre formal
  - documentar `sdd-triage` como clasificador sin artifacts persistentes por defecto
- Dependencias: Bloque 1
- Riesgos: que la limpieza documental borre guardrails utiles o que triage invada intake.
- Validaciones asociadas:
  - busquedas dirigidas con `rg`
  - revision manual de coherencia entre documentos vivos

### Bloque 3 - Skills y assets type-aware

- Objetivo: volver ejecutable la semantica aprobada para `spec`, `batch`, assumptions y lifecycle.
- Superficies afectadas: familia SDD bajo `.codex/skills/**` y assets de `definicion`, `plan`, `tasks`, `backlog`, `cierre`, `decision.log`.
- Cambios esperados:
  - separar assets `spec` / `batch` para `definicion`, `plan` y `tasks`
  - mantener assets compartidos con ramas obligatorias por tipo en `backlog` y `cierre`
  - mantener `decision.log` compartido
  - actualizar stop conditions, manifest handling y readiness/cierre para assumptions first-class
- Dependencias: Bloque 2
- Riesgos: duplicacion innecesaria entre variantes o ruptura de paths de assets usados por skills.
- Validaciones asociadas:
  - busquedas dirigidas sobre referencias de assets
  - revision manual de frontera entre skills

### Bloque 4 - Schema, tooling, fixtures y reconciliacion final

- Objetivo: hacer cumplir automaticamente la arquitectura reconciliada y dejar el propio patch alineado con ella.
- Superficies afectadas: `sdd/tools/schemas/patch.schema.json`, `sdd/tools/validate-sdd.mjs`, fixtures SDD, tests relevantes y artifacts activos del patch.
- Cambios esperados:
  - incorporar `created_at` y `closed_at`
  - hacer cumplir el contrato minimo de `batch`
  - agregar validacion de links/rutas markdown internas vivas con exclusiones aprobadas
  - mover la defensa contra `docs/sdd` a tooling/tests
  - auto-upgradear el manifest del propio patch y sincronizar artifacts activos si la nueva forma deja drift auxiliar
- Dependencias: Bloques 1-3
- Riesgos: checker demasiado amplio, fixtures insuficientes o mismatch entre schema declarativo y validador real.
- Validaciones asociadas:
  - `node sdd/tools/validate-sdd.mjs`
  - `node sdd/tools/validate-sdd.mjs --fixtures`
  - `npm test`
  - `git diff --check`

---

## 6. Datos, schemas y contratos

- Contratos documentales afectados:
  - onboarding vivo (`README.md`, `AGENTS.md`, `docs/README.md`, `docs/AGENTS.md`)
  - doctrina portable (`sdd/core/**`)
  - routing operativo (`sdd/orchestration/**`)
  - contratos de skills SDD bajo `.codex/skills/**`
- Datos o contenido afectados:
  - manifests de patches no legacy
  - fixtures de manifests y fixtures del nuevo checker
- Schemas o modelos afectados:
  - `patch.yaml`
  - matriz `patch_kind` / `lifecycle`
  - modelo de assumptions
  - contrato minimo de `batch`
- Compatibilidad esperada:
  - legacy bajo `sdd/parches/legacy/**` permanece exento
  - manifests no legacy vigentes deben migrar a la nueva forma si el schema pasa a exigir nuevos campos
  - el propio patch debe quedar compatible con la version final del contrato

---

## 7. Validaciones previstas

Estas validaciones son planificadas. No registrar resultados de ejecucion en `plan.md`.

### Documentales

- [ ] verificar alineacion con `docs/README.md`
- [ ] verificar alineacion con `AGENTS.md`, `sdd/core/**` y `sdd/orchestration/**`
- [ ] verificar ausencia de referencias vivas a `sdd/templates/**`
- [ ] verificar que `docs/sdd` ya no opere como narrativa viva de onboarding

### Tecnicas

- [ ] `node sdd/tools/validate-sdd.mjs`
- [ ] `node sdd/tools/validate-sdd.mjs --fixtures`
- [ ] `npm test`
- [ ] `git diff --check`

### Manuales

- [ ] revision manual de fronteras `triage` / `intake` / `router`
- [ ] revision manual de correspondencia entre assets `spec` / `batch` y sus skills consumidoras

---

## 8. Riesgos y mitigaciones

- riesgo: mezclar la semantica futura con contratos aun no promovidos durante las primeras fases.
  - impacto: el propio flujo podria incumplir su fuente viva mientras intenta mejorarla.
  - mitigacion: abrir con manifest transicional, registrar el drift y auto-upgradear el patch solo despues de actualizar doctrina y tooling.
- riesgo: dispersar demasiado la nueva semantica entre docs, skills y tooling.
  - impacto: nuevas desalineaciones entre texto, templates y validador.
  - mitigacion: mantener un bloque especifico de reconciliacion final y validar rutas/referencias vivas automaticamente.
- riesgo: sobrecargar `batch` con reglas que lo vuelvan una falsa spec.
  - impacto: se pierde la ligereza operativa aprobada para agrupaciones pequenas.
  - mitigacion: conservar solo la lista cerrada, cierre global, cierre por item y guardrails de split por complejidad.
- riesgo: no migrar manifests existentes al nuevo schema.
  - impacto: la validacion del repo fallaria al activar `created_at` / `closed_at`.
  - mitigacion: incluir migracion de manifests no legacy vigentes dentro del bloque de tooling.

---

## 9. Decisiones humanas abiertas

- Estado: `none`
- No hay decisiones humanas abiertas que bloqueen `sdd-tasks`.

---

## 10. Criterio de cierre tecnico

El plan queda listo para `sdd-tasks` solo si:

- [x] el alcance respeta `definicion.md`
- [x] las zonas afectadas estan identificadas
- [x] los bloques de implementacion son secuenciables
- [x] las validaciones son reales y proporcionales
- [x] no hay decisiones abiertas que bloqueen la division en fases

---

## 11. Registro de cambios

- Fecha: `2026-05-17`
  - cambio: plan tecnico inicial creado desde la definicion y la lectura brownfield del sistema SDD vivo.
  - razon: secuenciar la reconciliacion sin mezclar formalizacion del patch, doctrina, skills y tooling en una sola entrega opaca.
