# Backlog Fase 3: Hacer type-aware las skills y assets

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

* Change id: `sdd-portable-core-reconciliation`
* Patch kind: `spec`
* Lifecycle: `spec-anchored`
* Fase: `3 - Hacer type-aware las skills y assets`
* Estado: `done`
* Ultima actualizacion: `2026-05-17`
* Owner: `paw-paw`
* Depende de: `backlog/fase2.md`
* Desbloquea: `backlog/fase4.md`

---

## 1. Fuente de verdad aplicable

* `docs/README.md`
* `AGENTS.md`
* `sdd/parches/sdd-portable-core-reconciliation/definicion.md`
* `sdd/parches/sdd-portable-core-reconciliation/plan.md`
* `sdd/parches/sdd-portable-core-reconciliation/tasks.md`
* `sdd/parches/sdd-portable-core-reconciliation/decision.log`
* documentos contractuales aplicables:
  * no hay contratos de producto adicionales que gobiernen esta fase
* documentos auxiliares aplicables:
  * `sdd/core/patch-model.md`
  * `sdd/core/artifact-lifecycle.md`
  * `sdd/core/decision-drift-policy.md`
  * `.codex/skills/sdd-*/SKILL.md`
  * `.codex/skills/sdd-*/assets/**`

---

## 2. Objetivo de la fase

* Resultado esperado: las skills SDD consumen assets y gates coherentes con `spec`, `batch`, lifecycle y assumptions first-class.
* Razon de la fase: la semantica aprobada aun no existe de forma ejecutable.
* Cambio que queda habilitado al cerrar: tooling y tests pueden validar un contrato ya materializado en assets reales.

---

## Assumptions

* No critical assumptions.

---

## 3. Precondiciones

### Documentos

* [x] `definicion.md` vigente
* [x] `plan.md` vigente
* [x] `tasks.md` con la fase seleccionada
* [x] doctrina de Fase 2 ya reconciliada

### Decisiones previas

* [x] Fase 2 cerrada

### Estado tecnico

* [x] `definicion`, `plan` y `tasks` usan hoy assets compartidos
* [x] `backlog` y `cierre` aun no obligan ramas por tipo ni assumptions first-class

---

## 4. Alcance

### Si entra

* [x] crear variantes `spec` / `batch` para `definicion`, `plan` y `tasks`
* [x] actualizar `backlog` y `cierre` compartidos con ramas por tipo y assumptions
* [x] mantener `decision.log` compartido
* [x] actualizar skills SDD para seleccionar assets por tipo y hacer cumplir los nuevos gates

### No entra

* [ ] modificar schema o validator
* [ ] crear aun fixtures o tests
* [ ] tocar runtime publico

---

## 5. Archivos y superficies de trabajo

### Leer antes de editar

* `.codex/skills/sdd-intake/SKILL.md`
* `.codex/skills/sdd-plan/SKILL.md`
* `.codex/skills/sdd-tasks/SKILL.md`
* `.codex/skills/sdd-phase-backlog/SKILL.md`
* `.codex/skills/sdd-execute-phase/SKILL.md`
* `.codex/skills/sdd-sync-drift/SKILL.md`
* `.codex/skills/sdd-close/SKILL.md`
* `.codex/skills/sdd-*/assets/**`

### Editar

* `.codex/skills/sdd-intake/SKILL.md`
* `.codex/skills/sdd-plan/SKILL.md`
* `.codex/skills/sdd-tasks/SKILL.md`
* `.codex/skills/sdd-phase-backlog/SKILL.md`
* `.codex/skills/sdd-execute-phase/SKILL.md`
* `.codex/skills/sdd-sync-drift/SKILL.md`
* `.codex/skills/sdd-close/SKILL.md`
* `.codex/skills/sdd-intake/assets/**`
* `.codex/skills/sdd-plan/assets/**`
* `.codex/skills/sdd-tasks/assets/**`
* `.codex/skills/sdd-phase-backlog/assets/backlog-faseN.md`
* `.codex/skills/sdd-close/assets/cierre.md`

### Validar

* `.codex/skills/sdd-*/SKILL.md`
* `.codex/skills/sdd-*/assets/**`

### No tocar

* `sdd/tools/**`
* `src/**`
* `public/**`

---

## 6. Checklist de ejecucion

### Bloque A - Relectura de fuentes

* [x] releer la matriz `spec` / `batch` y las reglas de assumptions en `sdd/core/**`
* [x] releer paths de assets actuales de las siete skills SDD consumidoras

### Bloque B - Inspeccion de estado actual

* [x] confirmar que solo existen assets compartidos para `definicion`, `plan` y `tasks`
* [x] confirmar que `decision.log` debe mantenerse compartido

### Bloque C - Edicion por archivo

* [x] crear assets `spec` y `batch` para intake, plan y tasks
* [x] actualizar backlog y cierre compartidos con secciones obligatorias por tipo y assumptions
* [x] actualizar skills para leer manifest, elegir asset correcto y aplicar stop conditions de assumptions

### Bloque D - Registro de decisiones, hallazgos o blockers

* [x] registrar la decision de convencion de paths para assets type-aware
* [x] dejar blockers en `none` si no aparece trade-off humano

### Bloque E - Validacion

* [x] ejecutar `rg -n \"assets/(definicion|plan|tasks)\\.md|assets/(spec|batch)/|assumptions|patch_kind\" .codex/skills/sdd-*`
* [x] revisar manualmente que `decision.log` siga compartido y que backlog/cierre no se dupliquen

### Bloque F - Cierre

* [x] actualizar checklist y resultados
* [x] marcar la fase `done`
* [x] dejar lista Fase 4

---

## 7. Drift detectado

* Fecha: `2026-05-17`

  * fuente esperada: arquitectura reconciliada aprobada
  * diferencia encontrada: los assets ejecutables aun son shared-by-default donde ahora debe existir semantica por tipo.
  * impacto: el sistema puede leer `patch_kind` sin producir artifacts realmente distintos.
  * accion: separar solo los assets aprobados y dejar compartido lo que debe permanecer comun.
  * requiere decision: `no`

---

## 8. Hallazgos durante ejecucion

* Fecha: `2026-05-17`

  * hallazgo: `.codex/skills/` requiere escritura fuera del sandbox normal de esta sesion.
  * impacto: la fase necesita comandos autorizados para actualizar skills y assets locales.
  * accion: usar escritura escalada solo sobre la superficie acotada de `.codex/skills/sdd-*`.

---

## 9. Blockers

* [x] ninguno

---

## 10. Decisiones tomadas

* Fecha: `2026-05-17`

  * decision: usar subdirectorios `assets/spec/` y `assets/batch/` para `definicion`, `plan` y `tasks`.
  * razon: hace visible la bifurcacion por tipo sin duplicar toda la familia de skills.
  * documentos o areas afectadas: assets de `sdd-intake`, `sdd-plan`, `sdd-tasks`

---

## 11. Validaciones

### Documentales

* [x] verificar alineacion con `docs/README.md`
* [x] verificar alineacion con contratos aplicables
* [x] verificar trazabilidad contra `tasks.md`

### Tecnicas

* [x] `rg` dirigido sobre skills y assets

### Manuales

* [x] revision manual de frontera entre assets compartidos y assets bifurcados

### Resultados

* Validacion:

  * comando o revision: `rg -n "assets/(definicion|plan|tasks)\\.md|assets/(spec|batch)/|assumptions|patch_kind" .codex/skills/sdd-*`
  * resultado esperado: referencias nuevas a assets por tipo, gates de assumptions y ausencia de referencias a los assets shared retirados
  * resultado obtenido: referencias nuevas presentes; no quedaron referencias a `assets/definicion.md`, `assets/plan.md` ni `assets/tasks.md`
  * estado: `pass`
  * notas: `decision.log` sigue compartido y `backlog`/`cierre` conservan una sola plantilla compartida.

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

* duplicar mas superficie de la necesaria y abrir drift entre variantes

### Pendientes

* migrar tooling y fixtures al nuevo contrato en Fase 4

---

## 14. Registro de cambios

* Fecha: `2026-05-17`

  * cambio: backlog inicial creado para skills y assets type-aware.
  * razon: volver ejecutable la semantica aprobada sin tocar aun tooling.
* Fecha: `2026-05-17`

  * cambio: assets `spec`/`batch`, gates de assumptions y rutas de skills actualizados.
  * razon: materializar la semantica aprobada sin duplicar la familia completa de skills.
