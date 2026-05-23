# Tasks: sdd-portable-core-reconciliation

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

- Change id: `sdd-portable-core-reconciliation`
- Estado: `ready-for-backlog`
- Ultima actualizacion: `2026-05-17`
- Owner: `paw-paw`
- Depende de: `definicion.md`, `plan.md`, `decision.log`
- Desbloquea: `backlog/fase1.md`

---

## 1. Fuente de verdad aplicable

- `docs/README.md`
- `sdd/parches/sdd-portable-core-reconciliation/definicion.md`
- `sdd/parches/sdd-portable-core-reconciliation/plan.md`
- `sdd/parches/sdd-portable-core-reconciliation/decision.log`
- documentos contractuales aplicables:
  - no hay contratos de producto adicionales que gobiernen directamente este cambio metodologico
- documentos auxiliares aplicables:
  - `AGENTS.md`
  - `docs/AGENTS.md`
  - `README.md`
  - `sdd/README.md`
  - `sdd/parches/README.md`
  - `sdd/core/**`
  - `sdd/orchestration/**`
  - `.codex/skills/sdd-*/**`
  - `sdd/tools/**`
  - `sdd/tests/**`

Nota:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- este `tasks.md` conserva el orden macro de `plan.md`
- la Fase 1 es la excepcion autorizada que crea `patch.yaml` para este workspace antes de continuar con el resto del flujo

---

## 2. Preflight

- [x] `definicion.md` existe y corresponde al mismo `change-id`
- [x] `plan.md` existe y corresponde al mismo `change-id`
- [x] no hay decisiones abiertas que bloqueen la división en fases
- [x] no hay contradicción visible entre `plan.md` y contratos aplicables
- [x] el drift inicial entre intake y tooling esta explicitado y queda contenido por una primera fase de manifest aprobada

Resultado: `ready`

Notas:

- El workspace aun no tiene `patch.yaml`; eso no bloquea `sdd-tasks` porque `plan.md` aprueba expresamente una Fase 1 de formalizacion del manifest.

---

## 3. Resumen del plan

El patch reconciliara la arquitectura viva del sistema SDD portable sin restaurar literalmente el handover original. Primero formalizara su propio manifest bajo el contrato vigente, luego promovera la nueva doctrina y routing a fuentes vivas, despues actualizara skills y assets para volver ejecutable la semantica `spec` / `batch`, y por ultimo cerrara schema, tooling, fixtures y sincronizacion final. No quedan decisiones humanas abiertas; el cierre del cambio depende de validaciones documentales, del validador SDD, de fixtures y de `npm test`.

---

## 4. Fases

### Fase 1 - Formalizar el patch activo

- Objetivo: crear el `patch.yaml` inicial del propio workspace y fijar las fuentes vivas afectadas.
- Origen en `plan.md`:
  - Bloque 1 - Formalizacion inicial del patch
- Precondiciones:
  - `definicion.md`, `plan.md` y `decision.log` vigentes
  - ausencia de decisiones humanas abiertas
- Tareas:
  - [x] crear `patch.yaml` bajo el contrato vivo actual con clasificacion `spec` / `spec-anchored`
  - [x] fijar `related_docs` para las fuentes vivas que el patch reconciliara
  - [x] registrar la excepcion transicional y la futura auto-migracion del manifest
- Archivos o areas probables:
  - `sdd/parches/sdd-portable-core-reconciliation/patch.yaml`
  - `sdd/parches/sdd-portable-core-reconciliation/decision.log`
- Validaciones:
  - [ ] `node sdd/tools/validate-sdd.mjs`
  - [ ] revision documental contra `definicion.md` y `plan.md`
- Criterio de cierre:
  - el patch valida bajo el contrato vigente y las fuentes vivas afectadas quedan explicitadas.

### Fase 2 - Reconciliar doctrina y routing

- Objetivo: convertir la arquitectura aprobada en onboarding, doctrina portable y routing vivo.
- Origen en `plan.md`:
  - Bloque 2 - Doctrina y routing reconciliados
- Precondiciones:
  - Fase 1 cerrada
- Tareas:
  - [x] crear `sdd-triage` y documentar su frontera con `sdd-intake` y `sdd-router`
  - [x] actualizar docs vivos para reflejar `sdd/core`, retirar referencias a `sdd/templates/**` y sacar `docs/sdd` de la narrativa ordinaria
  - [x] reconciliar core y orquestacion con manifest, assumptions, batch y cierre formal
- Archivos o areas probables:
  - `README.md`
  - `AGENTS.md`
  - `docs/README.md`
  - `docs/AGENTS.md`
  - `sdd/README.md`
  - `sdd/parches/README.md`
  - `sdd/core/**`
  - `sdd/orchestration/**`
  - `.codex/skills/sdd-triage/SKILL.md`
- Validaciones:
  - [ ] busquedas dirigidas sobre `sdd/templates`, `docs/sdd`, `sdd-triage`
  - [ ] revision manual de coherencia entre docs vivas
- Criterio de cierre:
  - la arquitectura reconciliada queda descrita de forma consistente en las fuentes vivas de doctrina y routing.

### Fase 3 - Hacer type-aware las skills y assets

- Objetivo: volver ejecutable la semantica `spec` / `batch` y hacer first-class las assumptions.
- Origen en `plan.md`:
  - Bloque 3 - Skills y assets type-aware
- Precondiciones:
  - Fase 2 cerrada
- Tareas:
  - [x] separar assets `spec` / `batch` para `definicion`, `plan` y `tasks`
  - [x] actualizar assets compartidos de `backlog` y `cierre` con ramas obligatorias por tipo y assumptions
  - [x] actualizar skills SDD consumidoras para seleccionar assets, respetar manifest y aplicar gates de assumptions
- Archivos o areas probables:
  - `.codex/skills/sdd-intake/**`
  - `.codex/skills/sdd-plan/**`
  - `.codex/skills/sdd-tasks/**`
  - `.codex/skills/sdd-phase-backlog/**`
  - `.codex/skills/sdd-execute-phase/**`
  - `.codex/skills/sdd-sync-drift/**`
  - `.codex/skills/sdd-close/**`
- Validaciones:
  - [ ] busquedas dirigidas sobre referencias de assets y `assumptions`
  - [ ] revision manual de frontera entre skills
- Criterio de cierre:
  - cada skill usa la semantica correcta por tipo y los assets nuevos expresan el contrato aprobado.

### Fase 4 - Endurecer tooling y reconciliar el estado final

- Objetivo: hacer cumplir la arquitectura reconciliada y dejar el propio patch alineado con ella.
- Origen en `plan.md`:
  - Bloque 4 - Schema, tooling, fixtures y reconciliacion final
- Precondiciones:
  - Fases 1-3 cerradas
- Tareas:
  - [x] actualizar schema y validador para `created_at`, `closed_at`, contrato de `batch` y manifiestos existentes
  - [x] incorporar checker de links/rutas markdown internas vivas con exclusiones aprobadas
  - [x] actualizar fixtures y tests para manifest, batch, frontera de manifiesto y link checker
  - [x] auto-upgradear el manifest del propio patch y sincronizar artifacts activos si la nueva forma deja drift auxiliar
- Archivos o areas probables:
  - `sdd/tools/schemas/patch.schema.json`
  - `sdd/tools/validate-sdd.mjs`
  - `sdd/tests/**`
  - `tests/**`
  - `sdd/parches/sdd-portable-core-reconciliation/**`
- Validaciones:
  - [ ] `node sdd/tools/validate-sdd.mjs`
  - [ ] `node sdd/tools/validate-sdd.mjs --fixtures`
  - [ ] `npm test`
  - [ ] `git diff --check`
- Criterio de cierre:
  - tooling, fixtures, manifests y artifacts activos quedan alineados con la arquitectura final.

---

## 5. Dependencias entre fases

- Fase 1 bloquea: Fases 2, 3 y 4
- Fase 2 bloquea: Fases 3 y 4
- Fase 3 bloquea: Fase 4
- Fase 4 bloquea: cierre formal del patch

---

## 6. Decisiones y bloqueos

### Decisiones abiertas bloqueantes

- [x] ninguna

### Decisiones abiertas no bloqueantes

- [x] ninguna

### Escalaciones requeridas

- [x] ninguna prevista antes de empezar Fase 1

---

## 7. Tareas diferidas

- [ ] ninguna tarea aprobada queda fuera de esta entrega

---

## 8. Validaciones globales

### Documentales

- [ ] verificar alineacion con `docs/README.md`
- [ ] verificar alineacion con `AGENTS.md`, `sdd/core/**` y `sdd/orchestration/**`
- [ ] verificar trazabilidad desde `plan.md`

### Tecnicas

- [ ] `node sdd/tools/validate-sdd.mjs`
- [ ] `node sdd/tools/validate-sdd.mjs --fixtures`
- [ ] `npm test`
- [ ] `git diff --check`

### Manuales

- [ ] revision de la frontera `triage` / `intake` / `router`
- [ ] revision de correspondencia entre assets `spec` / `batch` y skills consumidoras

---

## 9. Criterio de cierre

Este `tasks.md` queda listo para `sdd-phase-backlog` solo si:

- [x] cada fase tiene objetivo, precondiciones, tareas, validaciones y criterio de cierre
- [x] no hay decisiones abiertas que bloqueen la fase seleccionada
- [x] cada tarea es trazable al `plan.md`
- [x] las validaciones son reales y no inventan scripts

---

## 10. Registro de cambios

- Fecha: `2026-05-17`
  - cambio: descomposicion inicial del plan en cuatro fases secuenciales.
  - razon: ejecutar primero la formalizacion del patch, luego doctrina, despues skills y por ultimo tooling/reconciliacion.
