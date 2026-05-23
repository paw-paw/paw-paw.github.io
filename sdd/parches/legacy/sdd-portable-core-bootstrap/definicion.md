# Definicion: SDD Portable Core Bootstrap

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

- Change id: `sdd-portable-core-bootstrap`
- Program id: `sdd-portable-core`
- Estado: `active`
- Fuente: `docs/sdd/parches/sdd-portable-core-bootstrap/handover.md`
- Ultima actualizacion: `2026-05-05`
- Owner: `paw-paw`

---

## 1. Objetivo

Definir el primer patch controlado del programa `sdd-portable-core` para iniciar la migracion estructural del sistema SDD actual desde `docs/sdd/` hacia una arquitectura portable con raiz estricta `sdd/`.

El cambio existe porque el handover consolidado define una rearquitectura SDD reusable, separando contratos vivos del host, sistema operativo SDD, skills Codex y memoria historica.

Cuando este patch cierre, debera existir una ruta clara y trazable para la migracion estructural inicial, sin tratar el programa completo como un unico patch y sin ejecutar trabajo no planificado desde el intake.

---

## 2. No objetivos

- [ ] No ejecutar la migracion de archivos o carpetas durante intake.
- [ ] No crear la raiz `sdd/` durante intake.
- [ ] No crear `sdd/core/` durante intake.
- [ ] No crear ni exigir `patch.yaml` durante intake.
- [ ] No modificar `.codex/skills/` ni `.codex/agents/` durante intake.
- [ ] No crear `sdd-close`, tooling de validacion, schemas ni smoke tests durante intake.
- [ ] No crear `plan.md`, `tasks.md`, `backlog/` ni `cierre.md` durante intake.
- [ ] No reescribir referencias legacy ni clasificar hallazgos de rutas durante intake.
- [ ] No actualizar `docs/README.md`, `AGENTS.md` ni otros contratos vivos durante intake.

---

## 3. Fuentes de verdad aplicables

- `docs/README.md`
- `AGENTS.md`
- documentos contractuales aplicables:
  - `docs/README.md`
  - si la ejecucion futura cambia la taxonomia documental, estructura SDD activa o reglas operativas del repo, debera actualizarse el contrato correspondiente antes o durante el cierre del patch
- documentos auxiliares aplicables:
  - `docs/AGENTS.md`
  - `docs/sdd/templates/definicion.md`
  - `docs/sdd/orchestration/skill-routing.md`
  - `docs/sdd/orchestration/artifact-state-machine.md`
  - `docs/sdd/orchestration/decision-gates.md`
  - `docs/sdd/orchestration/drift-policy.md`
  - `docs/sdd/orchestration/subagent-policy.md`
  - `docs/sdd/orchestration/model-policy.md`
  - `.codex/skills/sdd-intake/SKILL.md`
- fuentes externas o handovers:
  - `docs/sdd/parches/sdd-portable-core-bootstrap/handover.md`
  - `_inbox/megapatch/handover_rearquitectura_sdd_portable_consolidado.md`

Nota:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- `docs/sdd/` es auxiliar operativo vigente en el repo actual, no contrato superior
- el handover preservado es fuente de entrada para este patch, no fuente contractual viva por si mismo
- la direccion objetivo `sdd/` debe tratarse como cambio contractual intencional que requiere planificacion, ejecucion y reconciliacion posteriores

---

## 4. Alcance

### Si entra

- [ ] Preservar el handover consolidado dentro del workspace `docs/sdd/parches/sdd-portable-core-bootstrap/`.
- [ ] Definir este workspace como primer patch del programa ligero `sdd-portable-core`.
- [ ] Fijar que el primer patch sera migration-first.
- [ ] Capturar la intencion de migrar la ruta activa SDD desde `docs/sdd/` hacia `sdd/`.
- [ ] Identificar la desalineacion actual entre rutas vivas, rutas documentadas y rutas objetivo.
- [ ] Listar las decisiones abiertas que `sdd-plan` debe resolver antes de bajar a tareas.
- [ ] Registrar decisiones iniciales significativas en `decision.log`.

### Fuera de alcance

- [ ] Crear `sdd/`, `sdd/core/`, `sdd/parches/`, `sdd/tools/` o `sdd/tests/`.
- [ ] Mover `docs/sdd/` o cualquier legacy a `sdd/parches/legacy/`.
- [ ] Crear `patch.yaml` o su schema.
- [ ] Actualizar skills para leer `patch.yaml`.
- [ ] Migrar templates a `sdd/templates/` o `.codex/skills/*/assets/`.
- [ ] Crear o implementar `sdd-close`.
- [ ] Ejecutar validaciones Astro, npm, links o smoke tests.
- [ ] Convertir el handover completo en `plan.md` o `tasks.md`.

---

## 5. Superficies afectadas

### Docs

- `docs/sdd/parches/sdd-portable-core-bootstrap/handover.md`
- `docs/sdd/parches/sdd-portable-core-bootstrap/definicion.md`
- `docs/sdd/parches/sdd-portable-core-bootstrap/decision.log`
- futura ejecucion, si se aprueba en `sdd-plan`:
  - `docs/README.md`
  - `AGENTS.md`
  - `README.md`
  - `docs/sdd/**`
  - futura raiz `sdd/**`

### Codigo o contenido

- ninguno durante intake
- futura ejecucion: no se espera tocar runtime Astro salvo que `sdd-plan` detecte referencias operativas o validaciones acopladas a rutas antiguas

### Configuracion o validacion

- ninguna durante intake
- futura ejecucion posible:
  - validaciones documentales con `rg`
  - tooling SDD local si una fase posterior lo crea
  - `npm` solo si el plan futuro toca build, rutas publicas, assets o configuracion del sitio

---

## 6. Decisiones conocidas

- decision:
  - usar `sdd-portable-core-bootstrap` como `change-id`
  - razon: el usuario decidio separar el identificador del patch inicial del `program_id`
  - documentos o areas afectadas: `docs/sdd/parches/sdd-portable-core-bootstrap/`
- decision:
  - usar `sdd-portable-core` como `program_id`
  - razon: el handover define la rearquitectura como programa ligero de patches relacionados
  - documentos o areas afectadas: futuros workspaces SDD relacionados
- decision:
  - abrir un patch inicial, no una definicion paraguas del programa completo
  - razon: el handover indica que la rearquitectura completa no debe ejecutarse como un unico patch ni como batch
  - documentos o areas afectadas: `docs/sdd/parches/sdd-portable-core-bootstrap/`
- decision:
  - definir el primer patch como migration-first
  - razon: el usuario eligio priorizar la migracion estructural inicial antes que micro-core o manifest
  - documentos o areas afectadas: futura planificacion de `docs/sdd/**`, `sdd/**`, `docs/README.md`, `AGENTS.md`, `README.md`
- decision:
  - conservar el workspace bajo `docs/sdd/parches/` durante intake
  - razon: la raiz objetivo `sdd/` no existe todavia y el sistema vivo actual sigue usando `docs/sdd/parches/`
  - documentos o areas afectadas: `docs/sdd/parches/sdd-portable-core-bootstrap/`
- decision:
  - no crear `patch.yaml` durante intake
  - razon: el plan aprobado limita este paso a completar intake sin implementar reglas del modelo objetivo
  - documentos o areas afectadas: `docs/sdd/parches/sdd-portable-core-bootstrap/`

---

## 7. Decisiones abiertas

- [ ] Confirmar si el patch migration-first necesita crear un `sdd/README.md` minimo o un stub de `sdd/core/` antes de mover legacy.
  - por que bloquea: afecta el orden tecnico-documental de la migracion y evita dejar rutas nuevas sin autoridad minima
  - quien debe decidir: usuario durante `sdd-plan`, con lectura brownfield del repo
- [ ] Definir que documentos actuales de `docs/sdd/orchestration/` migran tal cual a `sdd/orchestration/`.
  - por que bloquea: afecta alcance real de la primera migracion y riesgo de arrastrar doctrina transicional como fuente final
  - quien debe decidir: `sdd-plan`, escalando al usuario si aparece conflicto contractual
- [ ] Definir como clasificar referencias antiguas durante la migracion.
  - por que bloquea: el handover prohibe reescritura masiva indiscriminada, pero exige actualizar referencias normativas vigentes
  - quien debe decidir: `sdd-plan`, con criterios de historico, transicional, normativo vigente, falso positivo o decision posterior
- [ ] Definir la validacion minima requerida para cerrar el primer patch.
  - por que bloquea: la migracion afecta estructura SDD y necesita evidencia de rutas, referencias y no normatividad del legacy
  - quien debe decidir: `sdd-plan`
- [ ] Definir si el cambio debera actualizar contratos vivos durante la ejecucion o registrar algunos ajustes como pendientes de patches posteriores.
  - por que bloquea: `docs/README.md` y `AGENTS.md` todavia describen `docs/sdd/` como ruta viva, mientras el handover propone `sdd/`
  - quien debe decidir: usuario si el plan detecta un cambio contractual que no pueda cerrarse dentro del patch

---

## 8. Riesgos

- riesgo:
  - impacto: ejecutar una migracion estructural sin autoridad minima en `sdd/`
  - mitigacion: resolver en `sdd-plan` si se crea primero `sdd/README.md`, un micro-core minimo o una secuencia transicional explicita
- riesgo:
  - impacto: tratar el handover como contrato superior a `docs/README.md` y `AGENTS.md`
  - mitigacion: mantenerlo como fuente preservada y reconciliar cambios hacia contratos vivos durante cierre
- riesgo:
  - impacto: dejar `docs/sdd/` y `sdd/` simultaneamente como rutas activas ambiguas
  - mitigacion: planificar una migracion con criterio de ruta activa, legacy no normativo y reporte de referencias
- riesgo:
  - impacto: romper skills actuales que todavia apuntan a `docs/sdd/parches/` y `docs/sdd/templates/`
  - mitigacion: no tocar skills durante intake y tratar la actualizacion type-aware como fase posterior o patch relacionado
- riesgo:
  - impacto: convertir la primera migracion en un patch demasiado amplio
  - mitigacion: mantener `sdd-plan` enfocado en migration-first y diferir manifest, close, validation tooling y writer audit si exceden el cierre claro
- riesgo:
  - impacto: `docs/README.md` ya referencia rutas `sdd/...` que no existen mientras el repo conserva `docs/sdd/...`
  - mitigacion: registrar esta desalineacion como input principal para el plan y no asumir que las rutas objetivo ya existen

---

## 9. Criterio de cierre

La definicion queda lista para `sdd-plan` solo si:

- [x] objetivo y no objetivos estan claros
- [x] las fuentes de verdad aplicables estan listadas
- [x] el alcance y fuera de alcance no se contradicen
- [x] las decisiones abiertas estan visibles
- [x] los riesgos principales estan identificados

---

## 10. Registro de cambios

- 2026-05-05:
  - cambio: creacion inicial de la definicion `sdd-portable-core-bootstrap`
  - razon: completar intake desde el handover consolidado preservado y las decisiones de alcance aprobadas

---

## 11. Nota de sincronizacion de drift

- 2026-05-09:
  - cambio: se agrega nota posterior a ejecucion.
  - razon: las fases 1 a 4 ya fueron ejecutadas y el estado real del repo cambio de `docs/sdd/` hacia `sdd/`.
  - clasificacion: las referencias pre-migracion de esta definicion se conservan como contexto de intake, no como rutas vigentes.
  - estado actual: nuevos workspaces SDD deben usar `sdd/parches/`; este patch permanece en `docs/sdd/parches/sdd-portable-core-bootstrap/` como excepcion transicional registrada.
  - drift sync: `docs/sdd/parches/sdd-portable-core-bootstrap/drift-sync.md`.
