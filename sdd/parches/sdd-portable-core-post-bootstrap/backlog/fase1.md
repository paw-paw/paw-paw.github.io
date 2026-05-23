# Backlog Fase 1: Micro-core SDD estricto

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

* Change id: `sdd-portable-core-post-bootstrap`
* Fase: `1 - Micro-core SDD estricto`
* Estado: `done`
* Ultima actualizacion: `2026-05-09`
* Owner: `paw-paw`
* Depende de:
  * `sdd/parches/sdd-portable-core-post-bootstrap/definicion.md`
  * `sdd/parches/sdd-portable-core-post-bootstrap/plan.md`
  * `sdd/parches/sdd-portable-core-post-bootstrap/tasks.md`
  * `sdd/parches/sdd-portable-core-post-bootstrap/decision.log`
* Desbloquea:
  * `sdd-phase-backlog` para Fase 2, si esta fase cierra sin decisiones abiertas que afecten `patch.yaml`

Nota:

* No marcar `done` si quedan checks de cierre abiertos, salvo que esten explicitamente diferidos.
* Este backlog ejecuta una sola fase. No crear `patch.yaml`, `sdd-close`, tooling, fixtures, cambios de skills ni audit de writers en esta fase.

---

## 1. Fuente de verdad aplicable

* `docs/README.md`
* `AGENTS.md`
* `docs/AGENTS.md`, solo como regla de no recrear `docs/sdd/` como ruta activa
* `sdd/parches/sdd-portable-core-post-bootstrap/definicion.md`
* `sdd/parches/sdd-portable-core-post-bootstrap/plan.md`
* `sdd/parches/sdd-portable-core-post-bootstrap/tasks.md`
* `sdd/parches/sdd-portable-core-post-bootstrap/decision.log`
* documentos auxiliares aplicables:
  * `sdd/README.md`
  * `sdd/parches/README.md`
  * `sdd/templates/README.md`
  * `sdd/orchestration/README.md`
  * `sdd/orchestration/orchestration-rules.md`
  * `sdd/orchestration/artifact-state-machine.md`
  * `sdd/orchestration/decision-gates.md`
  * `sdd/orchestration/drift-policy.md`
  * `sdd/orchestration/skill-routing.md`
  * `sdd/orchestration/subagent-policy.md`
  * `sdd/orchestration/model-policy.md`

Nota:

* si hay conflicto, manda la precedencia definida en `docs/README.md`
* este backlog ejecuta una sola fase
* si aparece drift contra `plan.md`, `tasks.md` o contratos aplicables, registrarlo antes de resolverlo

---

## 2. Objetivo de la fase

* Resultado esperado: crear `sdd/core/README.md`, `sdd/core/patch-model.md`, `sdd/core/artifact-lifecycle.md` y `sdd/core/decision-drift-policy.md` como micro-core metodologico minimo.
* Razon de la fase: establecer autoridad, capas y reglas compartidas antes de introducir `patch.yaml`, cierre, validacion local o type-awareness de skills.
* Cambio que queda habilitado al cerrar: Fase 2 puede definir el modelo formal de patch y manifest sobre una autoridad core ya existente.

---

## 3. Precondiciones

### Documentos

* [x] `definicion.md` vigente y con mismo `change-id`
* [x] `plan.md` vigente y con Bloque 1 trazable
* [x] `tasks.md` con Fase 1 seleccionada
* [x] contratos aplicables revisados: `docs/README.md`, `AGENTS.md`, `docs/AGENTS.md`

### Decisiones previas

* [x] decision de patch unico con fases estrictas registrada en `decision.log`
* [x] decision de promover a core solo reglas compartidas por 3+ skills/artifacts registrada en `decision.log`
* [x] no hay decision humana abierta que bloquee Fase 1

### Estado tecnico

* [x] `sdd/` existe como raiz operativa
* [x] `sdd/orchestration/**` existe como soporte operativo transicional
* [x] `sdd/core/**` no existe antes de la fase y debe crearse

---

## 4. Alcance

### Si entra

* [x] Crear los cuatro documentos iniciales bajo `sdd/core/`.
* [x] Destilar reglas estables compartidas por 3+ skills/artifacts desde `sdd/orchestration/**`, `AGENTS.md` y artifacts SDD activos.
* [x] Definir separacion entre `docs/`, `sdd/core`, `sdd/orchestration`, `sdd/templates`, `.codex/skills`, `.codex/agents` y artifacts vivos.
* [x] Definir responsabilidades de decisions, assumptions, blockers, findings y tasks.
* [x] Definir frontera conceptual entre routing, drift sync y cierre sin crear `sdd-close`.
* [x] Actualizar referencias minimas en `sdd/README.md` para reconocer `sdd/core/`.
* [x] Registrar hallazgos o drift si una regla candidata no cabe claramente en core u orchestration.

### No entra

* [x] No crear `patch.yaml`.
* [x] No modificar `package.json`, scripts npm, dependencias o runtime Astro.
* [x] No modificar `src/**`, `public/**`, routing, i18n, SEO, deployment o dominio.
* [x] No crear `sdd-close`, `cierre.md`, `sdd/tools/**`, `sdd/tests/**` ni fixtures.
* [x] No mover ni cerrar `docs/sdd/parches/sdd-portable-core-bootstrap/**`.
* [x] No modificar `.codex/skills/**`, `.codex/agents/**`, `.codex/config.toml` ni `AGENTS.md` salvo que aparezca un blocker y el usuario lo apruebe.

---

## 5. Archivos y superficies de trabajo

### Leer antes de editar

* `docs/README.md`
* `AGENTS.md`
* `docs/AGENTS.md`
* `sdd/README.md`
* `sdd/parches/README.md`
* `sdd/templates/README.md`
* `sdd/orchestration/README.md`
* `sdd/orchestration/orchestration-rules.md`
* `sdd/orchestration/artifact-state-machine.md`
* `sdd/orchestration/decision-gates.md`
* `sdd/orchestration/drift-policy.md`
* `sdd/orchestration/skill-routing.md`
* `sdd/orchestration/subagent-policy.md`
* `sdd/orchestration/model-policy.md`
* `sdd/parches/sdd-portable-core-post-bootstrap/handover.md`
* `sdd/parches/sdd-portable-core-post-bootstrap/definicion.md`
* `sdd/parches/sdd-portable-core-post-bootstrap/plan.md`
* `sdd/parches/sdd-portable-core-post-bootstrap/tasks.md`
* `sdd/parches/sdd-portable-core-post-bootstrap/decision.log`

### Editar

* `sdd/core/README.md`
* `sdd/core/patch-model.md`
* `sdd/core/artifact-lifecycle.md`
* `sdd/core/decision-drift-policy.md`
* `sdd/README.md`
* `sdd/parches/sdd-portable-core-post-bootstrap/backlog/fase1.md`

### Validar

* `sdd/core/**`
* `sdd/README.md`
* `sdd/orchestration/**`
* `sdd/parches/sdd-portable-core-post-bootstrap/backlog/fase1.md`
* comandos:
  * `rg -n 'docs/sdd|sdd/core|patch.yaml|sdd-close|cierre\\.md|decision\\.log' AGENTS.md README.md docs sdd .codex/skills .codex/agents package.json`
  * `rg -n 'regla compartida|3\\+ skills|source of truth|fuente de verdad|patch.yaml|sdd-close|cierre\\.md' sdd/core sdd/orchestration AGENTS.md`
  * `git diff --check`

### No tocar

* `src/**`
* `public/**`
* `package.json`
* `.github/**`
* `.codex/skills/**`
* `.codex/agents/**`
* `.codex/config.toml`
* `docs/sdd/parches/sdd-portable-core-bootstrap/**`
* `sdd/parches/legacy/**`
* `_inbox/**`
* `temp/**`

---

## 6. Checklist de ejecucion

### Bloque A - Relectura de fuentes

* [x] Leer `docs/README.md` y confirmar que `sdd/` es auxiliar y no sustituye contratos.
* [x] Leer `AGENTS.md` y confirmar limites: no dependencias, no runtime, no convenciones nuevas fuera del plan.
* [x] Leer `docs/AGENTS.md` y confirmar que `docs/sdd/` no debe recrearse como ruta activa.
* [x] Leer `sdd/README.md`, `sdd/parches/README.md` y `sdd/templates/README.md` para conservar roles transicionales.
* [x] Leer `sdd/orchestration/*.md` y listar mentalmente que reglas son core y cuales siguen siendo runtime manager.
* [x] Leer `handover.md`, `definicion.md`, `plan.md`, `tasks.md` y `decision.log` para conservar trazabilidad de Fase 1.

### Bloque B - Inspeccion de estado actual

* [x] Confirmar con `find sdd -maxdepth 2 -type d | sort` si `sdd/core/` existe antes de editar.
* [x] Confirmar con `find sdd/core -maxdepth 2 -type f | sort` despues de crear archivos, si el directorio existe.
* [x] Revisar con `rg -n 'sdd/core|micro-core|orchestration|patch.yaml|sdd-close|cierre\\.md' sdd/README.md sdd/orchestration sdd/parches/sdd-portable-core-post-bootstrap` las referencias actuales que condicionan el core.

### Bloque C - Edicion por archivo

* [x] Crear `sdd/core/README.md` con proposito, autoridad, capas, limites y criterio de incluir reglas core.
* [x] Crear `sdd/core/patch-model.md` con definicion conceptual de patch, manifest futuro, campos esperados, matriz permitida y limites de Fase 1.
* [x] Crear `sdd/core/artifact-lifecycle.md` con responsabilidades de artifacts, secuencia, estados, cierre conceptual y stop conditions.
* [x] Crear `sdd/core/decision-drift-policy.md` con responsabilidades de decisions, assumptions, blockers, findings, tasks y drift.
* [x] Editar `sdd/README.md` para reemplazar el estado "no contiene micro-core final" por una referencia a `sdd/core/` como micro-core inicial.
* [x] Mantener `sdd/orchestration/**` como adapter operativo; no mover ni borrar esos documentos en Fase 1.
* [x] Evitar duplicar output contracts, perfiles de subagentes o comandos concretos dentro del core salvo como referencia conceptual.

### Bloque D - Registro de decisiones, hallazgos o blockers

* [x] Registrar en esta seccion si alguna regla candidata se queda fuera del core por ser procedimental o especifica de una skill.
* [x] Registrar drift si `sdd/README.md`, `plan.md` o `tasks.md` ya no describen el estado real tras editar.
* [x] No agregar `decision.log` si solo se ejecutan decisiones ya registradas en `decision.log`.

### Bloque E - Validacion

* [x] Ejecutar `rg -n 'docs/sdd|sdd/core|patch.yaml|sdd-close|cierre\\.md|decision\\.log' AGENTS.md README.md docs sdd .codex/skills .codex/agents package.json` y registrar hallazgos relevantes.
* [x] Ejecutar `rg -n 'regla compartida|3\\+ skills|source of truth|fuente de verdad|patch.yaml|sdd-close|cierre\\.md' sdd/core sdd/orchestration AGENTS.md` y confirmar que el core no contiene procedimiento especifico de una sola skill.
* [x] Ejecutar `git diff --check`.
* [x] No ejecutar `npm run build` salvo que se toque runtime Astro, rutas publicas, metadata, assets publicos o configuracion de build.

### Bloque F - Cierre

* [x] Confirmar que los cuatro archivos de `sdd/core/**` existen.
* [x] Confirmar que Fase 2 queda desbloqueada sin crear `patch.yaml` en Fase 1.
* [x] Confirmar que `sdd/orchestration/**` sigue siendo soporte operativo transicional.
* [ ] Actualizar `Estado` a `done` solo si checklist, drift, validaciones y cierre estan completos.
* [ ] Reportar archivos tocados, artifacts creados/editados, validaciones, drift, riesgos y proximos pasos.

---

## 7. Drift detectado

* 2026-05-09:

  * fuente esperada: `sdd/README.md`
  * diferencia encontrada: el archivo decia que `sdd/core/**` no existia todavia como parte del estado bootstrap.
  * impacto: minor drift producido por la propia Fase 1 al crear el micro-core.
  * accion: `sdd/README.md` actualizado para declarar `sdd/core/` como micro-core inicial y mantener diferidos `patch.yaml`, `sdd-close`, tooling y audit.
  * requiere decision: `no`
* 2026-05-09:

  * fuente esperada: `AGENTS.md`
  * diferencia encontrada: `AGENTS.md` apuntaba a `docs/sdd/orchestration/model-policy.md`, ruta que `docs/README.md` declara no activa como ruta general.
  * impacto: operational drift en una referencia operativa global.
  * accion: se pidio decision humana; el usuario eligio corregir la ruta a `sdd/orchestration/model-policy.md`.
  * requiere decision: `si`, resuelta por el usuario con Opcion 1.

---

## 8. Hallazgos durante ejecucion

* 2026-05-09:

  * hallazgo: routing concreto, subagent policy, model policy y output contracts quedan fuera de `sdd/core/**` porque son coordinacion runtime o procedimiento especifico.
  * impacto: `sdd/orchestration/**` sigue siendo adapter operativo transicional y no fue movido ni borrado.
  * accion: el core referencia responsabilidades conceptuales; la coordinacion concreta queda en `sdd/orchestration/**`.
* 2026-05-09:

  * hallazgo: el `rg` amplio sobre `docs/sdd` devuelve muchos hits historicos en `sdd/parches/legacy/**` y en el handover/bootstrap transicional.
  * impacto: no bloquea Fase 1; coincide con la excepcion transicional y legacy documentado.
  * accion: no se movio ni borro legacy; Fase 7 debe clasificar residuos del bootstrap.
* 2026-05-09:

  * hallazgo: revision read-only de `sdd-docs-checker` reporto que no hay blockers documentales para Fase 1.
  * impacto: confirma que el limite principal es mantener `sdd/core/**` como micro-core estricto.
  * accion: se incorporo como evidencia advisory; el manager mantuvo ownership de edicion y validacion.

---

## 9. Blockers

* [x] Ninguno.

---

## 10. Decisiones tomadas

* Ninguna decision nueva durante la creacion del backlog. La fase aplica decisiones ya registradas en `decision.log`.
* 2026-05-09:

  * decision: corregir en `AGENTS.md` la referencia obsoleta `docs/sdd/orchestration/model-policy.md` por `sdd/orchestration/model-policy.md`.
  * razon: `docs/README.md` declara que `docs/sdd/` no es ruta activa general y la ruta viva de orquestacion es `sdd/orchestration/**`.
  * documentos o areas afectadas: `AGENTS.md`, validacion documental de Fase 1.

---

## 11. Validaciones

### Documentales

* [x] verificar alineacion con `docs/README.md`
* [x] verificar alineacion con `AGENTS.md`
* [x] verificar trazabilidad contra `tasks.md`
* [x] verificar que el core conserva roles transicionales de `sdd/orchestration/**` y `sdd/templates/**`

### Tecnicas

* [x] `rg -n 'docs/sdd|sdd/core|patch.yaml|sdd-close|cierre\\.md|decision\\.log' AGENTS.md README.md docs sdd .codex/skills .codex/agents package.json`
* [x] `rg -n 'regla compartida|3\\+ skills|source of truth|fuente de verdad|patch.yaml|sdd-close|cierre\\.md' sdd/core sdd/orchestration AGENTS.md`
* [x] `git diff --check`

### Manuales

* [x] revision manual de micro-core contra el criterio "regla compartida por 3+ skills/artifacts"
* [x] revision manual de que Fase 1 no crea `patch.yaml`, `sdd-close`, tooling ni cambios de skills

### Resultados

* Validacion:

  * comando o revision: `find sdd/core -maxdepth 2 -type f | sort`
  * resultado esperado: cuatro archivos core iniciales
  * resultado obtenido: `sdd/core/README.md`, `sdd/core/artifact-lifecycle.md`, `sdd/core/decision-drift-policy.md`, `sdd/core/patch-model.md`
  * estado: `pass`
  * notas: estructura esperada creada
* Validacion:

  * comando o revision: `rg -n 'docs/sdd|sdd/core|patch.yaml|sdd-close|cierre\\.md|decision\\.log' AGENTS.md README.md docs sdd .codex/skills .codex/agents package.json`
  * resultado esperado: referencias clasificables como activas, transicionales, historicas o pendientes
  * resultado obtenido: muchos hits, incluyendo legacy `sdd/parches/legacy/**`, bootstrap transicional y referencias activas del patch actual; la referencia obsoleta en `AGENTS.md` fue corregida con decision humana
  * estado: `pass`
  * notas: no se detecto hit que obligue a recrear `docs/sdd/` como ruta activa ni a tocar runtime
* Validacion:

  * comando o revision: `rg -n 'docs/sdd|sdd/core|patch.yaml|sdd-close|cierre\\.md|decision\\.log' AGENTS.md docs/README.md docs/AGENTS.md sdd/README.md sdd/core sdd/orchestration sdd/parches/sdd-portable-core-post-bootstrap .codex/skills .codex/agents package.json`
  * resultado esperado: despues de corregir `AGENTS.md`, no debe quedar la referencia `docs/sdd/orchestration/model-policy.md`
  * resultado obtenido: no aparece la referencia obsoleta en `AGENTS.md`; quedan hits esperados en docs, core, orchestration, patch activo y skills
  * estado: `pass`
  * notas: validacion repetida tras decision humana
* Validacion:

  * comando o revision: `rg -n 'regla compartida|3\\+ skills|source of truth|fuente de verdad|patch.yaml|sdd-close|cierre\\.md' sdd/core sdd/orchestration AGENTS.md`
  * resultado esperado: core conceptual y sin procedimiento concreto de una sola skill
  * resultado obtenido: hits esperados en `sdd/core/**`, `sdd/orchestration/**` y `AGENTS.md`
  * estado: `pass`
  * notas: routing, subagentes, modelos y output contracts no fueron movidos al core
* Validacion:

  * comando o revision: `git diff --check`
  * resultado esperado: sin errores de whitespace
  * resultado obtenido: sin salida
  * estado: `pass`
  * notas: aplica a los cambios de Fase 1
* Validacion:

  * comando o revision: `npm run build`
  * resultado esperado: no aplicable para Fase 1
  * resultado obtenido: no ejecutado
  * estado: `skipped`
  * notas: la fase solo toca documentacion SDD auxiliar; no toca Astro, rutas, metadata, assets publicos ni build config

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

* Riesgo residual: Fase 2 debera convertir el modelo conceptual de `patch.yaml` en manifest concreto sin contradecir estos limites.
* Riesgo residual: el core inicial debe probarse contra skills reales antes de expandirse.

### Pendientes

* Crear backlog de Fase 2.

---

## 14. Registro de cambios

* 2026-05-09:

  * cambio: creacion inicial del backlog de Fase 1
  * razon: convertir `tasks.md` en runbook operativo antes de ejecutar el micro-core
* 2026-05-09:

  * cambio: cierre de Fase 1 como `done`
  * razon: micro-core creado, drift registrado/resuelto y validaciones requeridas completadas
