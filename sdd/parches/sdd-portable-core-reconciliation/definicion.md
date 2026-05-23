# Definicion: sdd-portable-core-reconciliation

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

- Change id: `sdd-portable-core-reconciliation`
- Program id: `sdd-portable-core`
- Estado: `active`
- Fuente: `sdd/parches/sdd-portable-core-reconciliation/handover.md`
- Ultima actualizacion: `2026-05-17`
- Owner: `paw-paw`

---

## 1. Objetivo

Reconciliar la arquitectura viva del sistema SDD portable despues del handover inicial y de los drifts posteriores que ya fueron evaluados criticamente.

El cambio existe porque parte de la implementacion actual maduro el sistema y debe preservarse, mientras otras superficies quedaron incompletas o desalineadas: frontera de entrada al flujo, semantica del manifest, type-awareness, assumptions, documentacion viva y validacion de rutas internas.

Al cerrar el patch, la verdad viva del sistema SDD debe reflejar la arquitectura reconciliada, no una restauracion literal del handover original ni una acumulacion de residuos transicionales.

---

## 2. No objetivos

- [ ] No restaurar literalmente el handover original como contrato vivo.
- [ ] No reabrir la migracion historica desde `docs/sdd` hacia `sdd/`.
- [ ] No reescribir masivamente `sdd/parches/legacy/**`.
- [ ] No recrear `sdd/templates/`.
- [ ] No introducir un core enciclopedico nuevo fuera del micro-core ya aprobado.
- [ ] No crear skills completas separadas para `spec` y `batch`.
- [ ] No crear un workspace formal de programa para reemplazar `program_id`.
- [ ] No anadir `updated_at`, `related_skills` ni un limite numerico fijo de items por batch.
- [ ] No convertir el link checker en crawler de URLs externas.
- [ ] No mezclar este trabajo con runtime Astro, UI publica, routing publico, SEO del portfolio o contenido visible fuera de lo necesario para validar el propio sistema SDD.

---

## 3. Fuentes de verdad aplicables

- `docs/README.md`
- `AGENTS.md`
- documentos contractuales aplicables:
  - no hay contratos de producto adicionales que gobiernen directamente este cambio metodologico
- documentos auxiliares aplicables:
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
  - `.codex/skills/sdd-intake/SKILL.md`
  - `.codex/skills/sdd-router/SKILL.md`
  - `.codex/skills/sdd-plan/SKILL.md`
  - `.codex/skills/sdd-tasks/SKILL.md`
  - `.codex/skills/sdd-phase-backlog/SKILL.md`
  - `.codex/skills/sdd-execute-phase/SKILL.md`
  - `.codex/skills/sdd-sync-drift/SKILL.md`
  - `.codex/skills/sdd-close/SKILL.md`
  - `.codex/skills/sdd-*/assets/**` relevantes
  - `sdd/tools/schemas/patch.schema.json`
  - `sdd/tools/validate-sdd.mjs`
  - `sdd/tests/fixtures/**`
- fuentes externas o handovers:
  - `sdd/parches/sdd-portable-core-reconciliation/handover.md`

Nota:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- `sdd/` es auxiliar operativo, no contrato superior
- este patch es `spec-anchored` porque pretende modificar fuentes vivas existentes de gobierno, metodologia, routing, skills y tooling
- la arquitectura deseada del handover es fuente de entrada para este cambio; hasta reconciliarse, no sustituye por si sola a las reglas vivas actuales

---

## 4. Alcance

### Si entra

- [ ] Formalizar la frontera `sdd-triage` -> `sdd-intake` -> `sdd-router` y crear `sdd-triage` como entrada de clasificacion previa al patch formal.
- [ ] Reconciliar la semantica futura de `patch.yaml`, incluyendo `created_at`, `closed_at` y el nacimiento formal del patch al inicio de `sdd-intake`.
- [ ] Fortalecer la type-awareness `spec` / `batch` con variantes reales para `definicion`, `plan` y `tasks`, y ramas obligatorias por tipo en `backlog` y `cierre`.
- [ ] Hacer first-class las `assumptions` en definicion, plan, backlog y cierre, con impacto real en readiness y cierre.
- [ ] Actualizar la documentacion viva para retirar referencias rotas o narrativas obsoletas y alinear `README.md`, `AGENTS.md`, `docs/**`, `sdd/core/**` y `sdd/orchestration/**`.
- [ ] Mantener preservados los drifts que maduraron el sistema: manifest liviano, ausencia de `sdd/templates/`, `program_id` sin workspace formal y legacy historico sin normalizacion retroactiva.
- [ ] Incorporar validacion automatica de links/rutas markdown internas vivas con exclusiones explicitas para legacy, URLs externas y artifacts cerrados que no sean fuente viva.
- [ ] Actualizar schema, validador, fixtures y tests necesarios para sostener la arquitectura reconciliada.
- [ ] Ejecutar el cambio como flujo SDD completo hasta cierre formal del propio patch.

### Fuera de alcance

- [ ] Reescribir memoria historica bajo `sdd/parches/legacy/**`.
- [ ] Restaurar `sdd/templates/` o promoverlo otra vez como superficie viva.
- [ ] Separar familias completas de skills por tipo de patch.
- [ ] Convertir el patch en batch o dividirlo sin nuevo conflicto real que fuerce revisar la clasificacion aprobada.
- [ ] Cambiar contratos de producto del portfolio que no sean necesarios para la reconciliacion metodologica.
- [ ] Cambiar runtime Astro, paginas publicas, contenido visible o deployment del portfolio.

---

## 5. Superficies afectadas

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

### Codigo o contenido

- ninguno del runtime publico previsto durante intake
- `.codex/skills/sdd-triage/SKILL.md`
- `.codex/skills/sdd-intake/SKILL.md`
- `.codex/skills/sdd-router/SKILL.md`
- `.codex/skills/sdd-plan/SKILL.md`
- `.codex/skills/sdd-tasks/SKILL.md`
- `.codex/skills/sdd-phase-backlog/SKILL.md`
- `.codex/skills/sdd-execute-phase/SKILL.md`
- `.codex/skills/sdd-sync-drift/SKILL.md`
- `.codex/skills/sdd-close/SKILL.md`
- `.codex/skills/sdd-*/assets/**` relevantes

### Configuracion o validacion

- `sdd/tools/schemas/patch.schema.json`
- `sdd/tools/validate-sdd.mjs`
- `sdd/tests/fixtures/**`
- tests o tooling nuevos para link/ruta markdown interna viva, ausencia de `docs/sdd` como ruta viva y contrato reconciliado del manifest

---

## 6. Decisiones conocidas

- decision: usar SDD formal para este cambio como patch `spec` y `spec-anchored` dentro del programa `sdd-portable-core`.
  - razon: modifica fuentes vivas ya existentes de gobierno, metodologia, routing, skills y validacion; no es un conjunto de limpiezas locales reversibles.
  - documentos o areas afectadas: `sdd/parches/sdd-portable-core-reconciliation/**`, futuras fuentes vivas reconciliadas
- decision: usar `sdd-portable-core-reconciliation` como `change-id` y `sdd-portable-core` como `program_id`.
  - razon: el handover lo propone, no existe colision actual y mantiene continuidad con el programa existente.
  - documentos o areas afectadas: `sdd/parches/sdd-portable-core-reconciliation/**`
- decision: tratar el handover original consolidado como antecedente historico, no como contrato vivo.
  - razon: la arquitectura final debe salir de la reconciliacion entre handover, implementacion real y decisiones posteriores, no de una restauracion automatica.
  - documentos o areas afectadas: `handover.md`, `sdd/core/**`, `sdd/orchestration/**`, skills SDD
- decision: preservar los drifts aprobados y corregir solo los drifts que dejan contratos incompletos o documentacion viva desalineada.
  - razon: parte del drift posterior simplifico y maduro el sistema.
  - documentos o areas afectadas: `README.md`, `AGENTS.md`, `sdd/**`, `.codex/skills/**`, tooling SDD
- decision: no crear `patch.yaml` durante este intake.
  - razon: las reglas vivas actuales de `sdd-intake` todavia permiten intake previo al manifest y prohiben crearlo sin fase aprobada o pedido explicito; la nueva semantica de nacimiento formal del manifest es alcance a implementar por este mismo patch.
  - documentos o areas afectadas: `sdd/parches/sdd-portable-core-reconciliation/**`, futura reconciliacion de `sdd-intake`, `sdd/core/patch-model.md` y tooling

---

## 7. Assumptions

- No critical assumptions.

---

## 8. Decisiones abiertas

- [ ] Ninguna decision bloqueante conocida antes de `sdd-plan`.

---

## 9. Riesgos

- riesgo: `sdd-triage` derive hacia pseudo-intake y empiece a producir mini-specs.
  - impacto: se difumina la frontera entre clasificacion y formalizacion del patch.
  - mitigacion: fijar contrato read-only, sin artifacts persistentes por defecto y con outputs estructurados de clasificacion.
- riesgo: la type-awareness genere duplicacion innecesaria o drift entre variantes.
  - impacto: el sistema gana complejidad sin mejorar semantica.
  - mitigacion: bifurcar solo `definicion`, `plan` y `tasks`; compartir `backlog`, `cierre` y `decision.log` segun la decision aprobada.
- riesgo: el contrato de `batch` quede demasiado permisivo.
  - impacto: batches opacos podrian esconder specs fragmentadas.
  - mitigacion: exigir lista cerrada, cierre global, cierre por item y stop conditions de split por complejidad o lifecycles incompatibles.
- riesgo: retirar menciones vivas a `docs/sdd` elimine tambien guardrails utiles.
  - impacto: la limpieza documental podria debilitar la proteccion contra regresion.
  - mitigacion: mover la defensa a tooling/tests y dejar memoria historica donde corresponde.
- riesgo: el link checker abarque demasiado.
  - impacto: legacy historico o URLs externas se convertirian en deuda activa falsa.
  - mitigacion: limitarlo a markdown vivo bajo `docs/`, `sdd/` no legacy y `.codex/skills/`, con exclusiones explicitas.
- riesgo: la brecha temporal entre el contrato vivo actual y la arquitectura objetivo genere secuencias ambiguas durante el propio patch.
  - impacto: el cambio podria intentar operar ya bajo reglas que aun no existen.
  - mitigacion: tratar esa brecha como drift intencional a reconciliar, mantener visibles las reglas actuales durante intake y cerrar la nueva semantica solo tras actualizar fuentes vivas y validacion.
- riesgo: el repo ya muestra drift entre intake y tooling porque `sdd-intake` permite intake sin manifest, mientras `sdd/tools/validate-sdd.mjs` exige `patch.yaml` para workspaces no legacy.
  - impacto: validaciones SDD del repo fallan durante la fase inicial del propio patch.
  - mitigacion: hacer de esa contradiccion un punto explicito de reconciliacion en `sdd-plan` y no ocultar el fallo de validacion actual.

---

## 10. Criterio de cierre

La definicion queda lista para `sdd-plan` solo si:

- [x] objetivo y no objetivos estan claros
- [x] las fuentes de verdad aplicables estan listadas
- [x] el alcance y fuera de alcance no se contradicen
- [x] las decisiones abiertas estan visibles
- [x] los riesgos principales estan identificados

El patch completo podra cerrarse solo si:

- [ ] existe `sdd-triage` y su frontera con `sdd-intake` y `sdd-router` queda explicita
- [ ] la semantica futura de `patch.yaml`, `created_at` y `closed_at` queda reconciliada en doctrina, schema y validacion
- [ ] `spec` y `batch` tienen diferencias reales donde fueron aprobadas y los batches conservan su contrato minimo
- [ ] `assumptions` son first-class y participan en readiness/cierre
- [ ] la documentacion viva deja de depender de `docs/sdd` como narrativa operativa y las referencias rotas a `sdd/templates/**` desaparecen de superficies vivas
- [ ] existe validacion automatica de links/rutas markdown internas vivas con exclusiones explicitas
- [ ] fixtures y validaciones SDD relevantes pasan con resultados reales
- [ ] el propio patch queda cerrado con artifacts SDD completos y cualquier residual clasificado

---

## 11. Registro de cambios

- Fecha: `2026-05-17`
  - cambio: intake inicial creado desde el handover de reconciliacion SDD portable post-handover.
  - razon: formalizar un patch SDD coherente antes de planificar la reconciliacion de doctrina, routing, skills, templates y tooling.
