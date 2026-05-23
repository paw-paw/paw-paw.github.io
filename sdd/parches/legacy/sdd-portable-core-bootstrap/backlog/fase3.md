# Backlog Fase 3: Reconciliacion contractual y operativa

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

* Change id: `sdd-portable-core-bootstrap`
* Fase: `3 - Reconciliacion contractual y operativa`
* Estado: `done`
* Ultima actualizacion: `2026-05-06`
* Owner: `paw-paw`
* Depende de:
  * `docs/sdd/parches/sdd-portable-core-bootstrap/backlog/fase2.md` en estado `done`
  * `docs/sdd/parches/sdd-portable-core-bootstrap/tasks.md`
  * `docs/sdd/parches/sdd-portable-core-bootstrap/plan.md`
* Desbloquea:
  * `docs/sdd/parches/sdd-portable-core-bootstrap/backlog/fase4.md`

Nota:

* No marcar `done` si quedan checks de cierre abiertos, salvo que esten explicitamente diferidos.

---

## 1. Fuente de verdad aplicable

* `docs/README.md`
* `AGENTS.md`
* `docs/AGENTS.md`
* `docs/sdd/parches/sdd-portable-core-bootstrap/definicion.md`
* `docs/sdd/parches/sdd-portable-core-bootstrap/plan.md`
* `docs/sdd/parches/sdd-portable-core-bootstrap/tasks.md`
* `docs/sdd/parches/sdd-portable-core-bootstrap/decision.log`
* documentos contractuales aplicables:
  * `docs/README.md`
* documentos auxiliares aplicables:
  * `README.md`
  * `.codex/skills/*/SKILL.md`
  * `.codex/agents/*.toml`
  * `sdd/README.md`
  * `sdd/parches/README.md`
  * `sdd/parches/legacy/README.md`
  * `sdd/templates/README.md`
  * `sdd/orchestration/README.md`

Nota:

* si hay conflicto, manda la precedencia definida en `docs/README.md`
* este backlog ejecuta una sola fase
* si aparece drift contra `plan.md`, `tasks.md` o contratos aplicables, registrarlo antes de resolverlo

---

## 2. Objetivo de la fase

* Resultado esperado: contratos vivos, README principal, skills y agentes dejan de apuntar a `docs/sdd/` como ruta activa y quedan alineados con la estructura `sdd/` creada y migrada.
* Razon de la fase: despues de mover artifacts, las referencias vigentes deben apuntar a rutas reales para evitar docs-code drift.
* Cambio que queda habilitado al cerrar: Fase 4 puede producir reporte/cierre con rutas reconciliadas y hallazgos clasificados.

---

## 3. Precondiciones

### Documentos

* [x] `definicion.md` vigente
* [x] `plan.md` vigente
* [x] `tasks.md` con Fase 3 seleccionada
* [x] `backlog/fase2.md` en estado `done`
* [x] READMEs y artifacts migrados existen bajo `sdd/`

### Decisiones previas

* [x] Confirmar que este patch no introduce `patch.yaml`.
* [x] Confirmar que este patch no crea `sdd-close`.
* [x] Confirmar que referencias historicas pueden conservarse si estan claramente clasificadas o no son normativas.

### Estado tecnico

* [x] Ejecutar busqueda inicial de referencias antiguas con `rg`.
* [x] Confirmar que `sdd/templates/`, `sdd/orchestration/` y `sdd/parches/legacy/` existen.

---

## 4. Alcance

### Si entra

* [x] Actualizar `docs/README.md` para que la taxonomia documental refleje rutas reales y no rutas inexistentes.
* [x] Actualizar `AGENTS.md` para reflejar estructura operativa SDD nueva sin duplicar doctrina core.
* [x] Actualizar `docs/AGENTS.md` y `README.md` para eliminar referencias vigentes a rutas antiguas o inexistentes.
* [x] Actualizar referencias normativas en `.codex/skills/*/SKILL.md`.
* [x] Actualizar referencias normativas en `.codex/agents/*.toml`.
* [x] Clasificar referencias residuales a `docs/sdd/`.

### No entra

* [x] No mover archivos SDD; eso pertenece a Fase 2.
* [x] No crear ni implementar micro-core.
* [x] No crear `patch.yaml`, schema, scripts, `sdd-close` ni `cierre.md`.
* [x] No modificar runtime Astro, `src/`, `public/`, tests ni dependencias.
* [x] No actualizar referencias historicas dentro de legacy solo por estetica.

---

## 5. Archivos y superficies de trabajo

### Leer antes de editar

* `docs/README.md`
* `AGENTS.md`
* `docs/AGENTS.md`
* `README.md`
* `.codex/skills/*/SKILL.md`
* `.codex/agents/*.toml`
* `sdd/README.md`
* `sdd/parches/README.md`
* `sdd/templates/README.md`
* `sdd/orchestration/README.md`

### Editar

* `docs/README.md`
* `AGENTS.md`
* `docs/AGENTS.md`
* `README.md`
* `.codex/skills/*/SKILL.md`, solo referencias normativas/rutas vigentes
* `.codex/agents/*.toml`, solo referencias normativas/rutas vigentes
* `docs/sdd/parches/sdd-portable-core-bootstrap/backlog/fase3.md`, solo para actualizar estado, findings, decisiones, validaciones y cierre
* `docs/sdd/parches/sdd-portable-core-bootstrap/decision.log`, solo si aparece una decision significativa

### Validar

* `docs/README.md`
* `AGENTS.md`
* `docs/AGENTS.md`
* `README.md`
* `.codex/skills/*/SKILL.md`
* `.codex/agents/*.toml`

### No tocar

* `sdd/parches/legacy/**`, salvo si una nota de clasificacion es imprescindible
* `sdd/core/**`
* `src/**`
* `public/**`
* `package.json`
* `_inbox/**`

---

## 6. Checklist de ejecucion

### Bloque A - Relectura de fuentes

* [x] Leer Fase 3 en `tasks.md` y confirmar que depende de Fase 2 cerrada.
* [x] Leer Bloque 3 en `plan.md` y extraer las superficies: `docs/README.md`, `AGENTS.md`, `docs/AGENTS.md`, `README.md`, skills y agents.
* [x] Leer `decision.log` para confirmar que bootstrap puede seguir como excepcion transicional.
* [x] Leer READMEs nuevos bajo `sdd/` para usar sus rutas como fuente de referencia operativa.

### Bloque B - Inspeccion de estado actual

* [x] Ejecutar `rg -n "docs/sdd|sdd/templates|sdd/parches|sdd/orchestration|patch.yaml|sdd-close" AGENTS.md README.md docs .codex/skills .codex/agents package.json`.
* [x] Separar hallazgos en una lista local por archivo.
* [x] Clasificar cada hallazgo como `normativo vigente`, `historico / legacy`, `transicional`, `falso positivo` o `requiere decision posterior`.
* [x] Registrar blocker si un hallazgo requiere cambiar precedencia de `docs/README.md` fuera del alcance del plan.

### Bloque C - Edicion por archivo

* [x] Editar `docs/README.md` para reemplazar referencias vigentes a `docs/sdd/` o rutas inexistentes por la estructura real `sdd/`.
* [x] Editar `AGENTS.md` para actualizar estructura del repo, workspace SDD y rutas de agentes/skills cuando sean operativas.
* [x] Editar `docs/AGENTS.md` para que su organizacion esperada no presente `docs/sdd/` como ruta activa.
* [x] Editar `README.md` para apuntar a `docs/README.md` y referencias SDD reales bajo `sdd/`.
* [x] Editar `.codex/skills/*/SKILL.md` para que inputs, outputs y templates normativos apunten a rutas vigentes.
* [x] Editar `.codex/agents/*.toml` para que writers y reviewers usen rutas vigentes cuando indiquen ownership.
* [x] Preservar referencias historicas dentro de legacy si cambiarlas destruiria trazabilidad.

### Bloque D - Registro de decisiones, hallazgos o blockers

* [x] Registrar finding si quedan referencias `docs/sdd/` por razones historicas o transicionales.
* [x] Registrar blocker si una skill no puede operar con la ruta nueva sin rediseño mayor.
* [x] Agregar entrada en `decision.log` si se decide diferir type-awareness completa o una referencia residual.

### Bloque E - Validacion

* [x] Reejecutar `rg -n "docs/sdd|sdd/templates|sdd/parches|sdd/orchestration|patch.yaml|sdd-close" AGENTS.md README.md docs .codex/skills .codex/agents package.json`.
* [x] Confirmar que cada hallazgo residual esta clasificado o documentado.
* [x] Ejecutar `test ! -e sdd/core && printf 'no sdd/core\n' || printf 'sdd/core exists\n'`.
* [x] Ejecutar `find sdd -maxdepth 3 -type f | sort`.
* [x] Ejecutar `git diff --check`.
* [x] No ejecutar `npm run build` salvo que se haya tocado runtime Astro; si se omite, registrar `skipped` con razon.

### Bloque F - Cierre

* [x] Actualizar checklist ejecutado en este backlog.
* [x] Registrar resultados de validacion en seccion 11.
* [x] Confirmar que Fase 4 queda desbloqueada.
* [x] Marcar esta fase `done` solo si no quedan blockers abiertos.

---

## 7. Drift detectado

* Fecha: `2026-05-06`

  * fuente esperada: contratos vivos y referencias operativas apuntan a `sdd/` como ruta activa.
  * diferencia encontrada: despues de la migracion fisica quedaban referencias normativas y operativas a `docs/sdd/` en `README.md`, `AGENTS.md`, `docs/README.md`, `docs/AGENTS.md`, `.codex/skills/*/SKILL.md` y `.codex/agents/*.toml`.
  * impacto: riesgo de operar contra rutas antiguas o inexistentes despues de Fase 2.
  * accion: referencias vigentes actualizadas a `sdd/...`; referencias residuales se clasifican como historicas, legacy o transicionales.
  * requiere decision: `no`

---

## 8. Hallazgos durante ejecucion

* Fecha: `2026-05-06`

  * hallazgo: quedan menciones a `docs/sdd/` dentro de `docs/sdd/parches/sdd-portable-core-bootstrap/**`.
  * impacto: son transicionales porque este bootstrap sigue vivo bajo la ruta anterior hasta cierre.
  * accion: conservar y clasificar; no mover el workspace activo durante Fase 3.

* Fecha: `2026-05-06`

  * hallazgo: quedan menciones a `docs/sdd/` dentro de `sdd/parches/legacy/**` y en registros historicos como `docs/governance/decision-log.md`.
  * impacto: son memoria historica, no ruta activa.
  * accion: conservar para trazabilidad; no reescribir legacy por estetica.

* Fecha: `2026-05-06`

  * hallazgo: `sdd/parches/README.md` conserva una nota explicita sobre el origen antiguo `docs/sdd/parches/` y la excepcion transicional del bootstrap.
  * impacto: evita ambiguedad sobre por que el workspace actual sigue en `docs/sdd/`.
  * accion: conservar como nota transicional.

* Fecha: `2026-05-06`

  * hallazgo: la actualizacion de `.codex/skills/*/SKILL.md` y `.codex/agents/*.toml` requirio escalacion porque el sandbox no pudo crear archivos temporales bajo `.codex/`.
  * impacto: no cambio el alcance; solo afecto el mecanismo de escritura.
  * accion: actualizacion ejecutada con permiso escalado y limitada a referencias de ruta.

---

## 9. Blockers

* [x] Resuelto: Fase 2 estaba en estado `done` antes de cerrar esta fase.

---

## 10. Decisiones tomadas

* Fecha: `2026-05-06`

  * decision: no reescribir referencias historicas dentro de legacy ni del handover preservado.
  * razon: esas menciones documentan el estado anterior y son necesarias para trazabilidad; no son referencias normativas vigentes.
  * documentos o areas afectadas: `sdd/parches/legacy/**`, `docs/sdd/parches/sdd-portable-core-bootstrap/handover.md`, `docs/governance/decision-log.md`.

---

## 11. Validaciones

### Documentales

* [x] verificar alineacion con `docs/README.md`
* [x] verificar alineacion con `AGENTS.md`
* [x] verificar trazabilidad contra `tasks.md`, Fase 3

### Tecnicas

* [x] `rg -n "docs/sdd|sdd/templates|sdd/parches|sdd/orchestration|patch.yaml|sdd-close" AGENTS.md README.md docs .codex/skills .codex/agents package.json`
* [x] `test ! -e sdd/core && printf 'no sdd/core\n' || printf 'sdd/core exists\n'`
* [x] `find sdd -maxdepth 3 -type f | sort`
* [x] `git diff --check`

### Manuales

* [x] revision manual de hallazgos residuales clasificados
* [x] revision manual de que referencias historicas no fueron reescritas indebidamente

### Resultados

* Validacion:

  * comando o revision: `rg -n "docs/sdd|sdd/templates|sdd/parches|sdd/orchestration|patch.yaml|sdd-close" AGENTS.md README.md docs .codex/skills .codex/agents package.json`
  * resultado esperado: referencias normativas vigentes apuntan a `sdd/...`; residuos clasificados.
  * resultado obtenido: referencias vivas actualizadas; residuos limitados a bootstrap transicional, legacy/historia, handover preservado, notas de diferidos y menciones target.
  * estado: `pass`

* Validacion:

  * comando o revision: `test ! -e sdd/core && printf 'no sdd/core\n' || printf 'sdd/core exists\n'`
  * resultado esperado: `no sdd/core`
  * resultado obtenido: `no sdd/core`
  * estado: `pass`

* Validacion:

  * comando o revision: `find sdd -maxdepth 3 -type f | sort`
  * resultado esperado: estructura SDD existe bajo `sdd/`, con templates, orquestacion y legacy visibles.
  * resultado obtenido: `sdd/README.md`, READMEs de ruta, templates, orquestacion y workspaces legacy bajo `sdd/parches/legacy/`.
  * estado: `pass`

* Validacion:

  * comando o revision: `git diff --check`
  * resultado esperado: sin whitespace errors.
  * resultado obtenido: sin salida.
  * estado: `pass`

* Validacion:

  * comando o revision: `npm run build`
  * resultado esperado: no requerido si no se toca runtime Astro.
  * resultado obtenido: omitido; cambios documentales y operativos SDD, sin `src/`, `public/`, dependencias ni config de sitio.
  * estado: `skipped`

### Resultados

* Validacion:

  * comando o revision:
  * resultado esperado:
  * resultado obtenido:
  * estado: `pass` | `fail` | `skipped`
  * notas:

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

* Actualizar referencias historicas en legacy y perder trazabilidad.
* Dejar skills apuntando a rutas muertas.
* Cambiar reglas de precedencia sin decision humana.

### Pendientes

* Fase 4 debe registrar reporte de migracion y deferred work.
* Type-awareness completa por manifest sigue diferida salvo decision nueva.

---

## 14. Registro de cambios

* 2026-05-06:

  * cambio: creacion inicial del backlog de Fase 3
  * razon: preparar reconciliacion contractual y operativa sin ejecutarla
