# Backlog Fase 1: Autoridad minima de ruta `sdd/`

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

* Change id: `sdd-portable-core-bootstrap`
* Fase: `1 - Autoridad minima de ruta sdd/`
* Estado: `done`
* Ultima actualizacion: `2026-05-06`
* Owner: `paw-paw`
* Depende de:
  * `docs/sdd/parches/sdd-portable-core-bootstrap/tasks.md`
  * `docs/sdd/parches/sdd-portable-core-bootstrap/plan.md`
  * `docs/sdd/parches/sdd-portable-core-bootstrap/decision.log`
* Desbloquea:
  * `docs/sdd/parches/sdd-portable-core-bootstrap/backlog/fase2.md`

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
  * `docs/sdd/parches/README.md`
  * `docs/sdd/orchestration/README.md`
  * `docs/sdd/templates/backlog-faseN.md`

Nota:

* si hay conflicto, manda la precedencia definida en `docs/README.md`
* este backlog ejecuta una sola fase
* si aparece drift contra `plan.md`, `tasks.md` o contratos aplicables, registrarlo antes de resolverlo

---

## 2. Objetivo de la fase

* Resultado esperado: existe una raiz `sdd/` con READMEs minimos para explicar ruta activa futura, workspace de parches, legacy no normativo, templates transicionales y orquestacion transicional.
* Razon de la fase: la migracion fisica de artifacts no debe ocurrir hacia carpetas sin autoridad documental minima.
* Cambio que queda habilitado al cerrar: Fase 2 puede mover artifacts a `sdd/` sin crear ambiguedad basica de ruta.

---

## 3. Precondiciones

### Documentos

* [x] Leer `docs/sdd/parches/sdd-portable-core-bootstrap/tasks.md`, seccion `Fase 1 - Autoridad minima de ruta sdd/`.
* [x] Leer `docs/sdd/parches/sdd-portable-core-bootstrap/plan.md`, seccion `Bloque 1 - Autoridad minima de ruta sdd/`.
* [x] Leer `docs/sdd/parches/sdd-portable-core-bootstrap/decision.log`, decision `Resolver migration-first con autoridad minima de ruta`.
* [x] Leer `docs/README.md`, secciones de precedencia y organizacion por carpetas.
* [x] Leer `AGENTS.md`, secciones `Fuentes de verdad`, `Limites operativos`, `Estructura del repo` y `Orquestacion local de Codex`.

### Decisiones previas

* [x] Confirmar que `sdd/core/` completo sigue diferido y no se creara en esta fase.
* [x] Confirmar que `patch.yaml`, `sdd-close` y tooling de validacion siguen fuera de alcance.

### Estado tecnico

* [x] Ejecutar `test ! -e sdd && printf 'no root sdd\n' || printf 'root sdd exists\n'`.
* [x] Si `sdd/` ya existe, registrar drift en la seccion 7 antes de editar.

---

## 4. Alcance

### Si entra

* [x] Crear directorios minimos: `sdd/`, `sdd/parches/`, `sdd/parches/legacy/`, `sdd/templates/`, `sdd/orchestration/`.
* [x] Crear `sdd/README.md` como indice operativo breve.
* [x] Crear `sdd/parches/README.md` para describir workspace futuro y relacion con legacy.
* [x] Crear `sdd/parches/legacy/README.md` para declarar no normatividad historica.
* [x] Crear `sdd/templates/README.md` para declarar estado transicional.
* [x] Crear `sdd/orchestration/README.md` para declarar estado transicional.

### No entra

* [x] No crear `sdd/core/`.
* [x] No mover archivos desde `docs/sdd/`.
* [x] No editar `docs/README.md`, `AGENTS.md`, `README.md`, `.codex/skills/` ni `.codex/agents/`.
* [x] No crear `patch.yaml`, schemas, scripts, `sdd-close`, `cierre.md` ni `tasks.md` nuevos.
* [x] No tocar runtime Astro, `src/`, `public/`, `package.json` ni tests.

---

## 5. Archivos y superficies de trabajo

### Leer antes de editar

* `docs/README.md`
* `AGENTS.md`
* `docs/AGENTS.md`
* `docs/sdd/parches/sdd-portable-core-bootstrap/definicion.md`
* `docs/sdd/parches/sdd-portable-core-bootstrap/plan.md`
* `docs/sdd/parches/sdd-portable-core-bootstrap/tasks.md`
* `docs/sdd/parches/sdd-portable-core-bootstrap/decision.log`

### Editar

* `sdd/README.md`
* `sdd/parches/README.md`
* `sdd/parches/legacy/README.md`
* `sdd/templates/README.md`
* `sdd/orchestration/README.md`
* `docs/sdd/parches/sdd-portable-core-bootstrap/backlog/fase1.md`, solo para actualizar estado, findings, decisiones, validaciones y cierre
* `docs/sdd/parches/sdd-portable-core-bootstrap/decision.log`, solo si aparece una decision significativa

### Validar

* `sdd/`
* `sdd/parches/`
* `sdd/parches/legacy/`
* `sdd/templates/`
* `sdd/orchestration/`
* `docs/sdd/parches/sdd-portable-core-bootstrap/backlog/fase1.md`

### No tocar

* `docs/sdd/templates/**`
* `docs/sdd/orchestration/**`
* `docs/sdd/parches/**`, salvo el backlog de esta fase y `decision.log` si aplica
* `sdd/core/**`
* `.codex/skills/**`
* `.codex/agents/**`
* `src/**`
* `public/**`
* `_inbox/**`

---

## 6. Checklist de ejecucion

### Bloque A - Relectura de fuentes

* [x] Leer `tasks.md` y confirmar que Fase 1 bloquea Fase 2.
* [x] Leer `plan.md` y copiar localmente las restricciones de Bloque 1: autoridad minima, no core completo, READMEs breves.
* [x] Leer `decision.log` y confirmar que la decision de 2026-05-06 no autoriza `sdd/core/`.
* [x] Leer `docs/README.md` y anotar que sus referencias `sdd/...` son objetivo documental que aun debe reconciliarse.
* [x] Leer `AGENTS.md` y anotar que todavia describe `docs/sdd/...` como ruta viva.

### Bloque B - Inspeccion de estado actual

* [x] Ejecutar `find . -maxdepth 2 -type d -name sdd -print` y registrar si existe una raiz distinta de `docs/sdd`.
* [x] Ejecutar `find docs/sdd -maxdepth 2 -type d | sort` para confirmar carpetas fuente que no deben moverse en esta fase.
* [x] Ejecutar `test ! -e sdd/core && printf 'no sdd/core\n' || printf 'sdd/core exists\n'`.
* [x] Si `sdd/` o `sdd/core/` ya existen, registrar drift antes de crear o editar.

### Bloque C - Edicion por archivo

* [x] Crear directorios `sdd/parches/legacy`, `sdd/templates` y `sdd/orchestration`.
* [x] Editar `sdd/README.md` para declarar: proposito de `sdd/`, relacion con `docs/`, estado bootstrap, y deferred work.
* [x] Editar `sdd/parches/README.md` para declarar: workspace futuro, legacy separado, bootstrap transicional, no sustitucion de contratos.
* [x] Editar `sdd/parches/legacy/README.md` para declarar: historico visible, no normativo, no usar como patron vigente.
* [x] Editar `sdd/templates/README.md` para declarar: templates transicionales migrados desde `docs/sdd/templates/`, no fuente final de templates ejecutables.
* [x] Editar `sdd/orchestration/README.md` para declarar: soporte operativo transicional migrado desde `docs/sdd/orchestration/`, no micro-core.
* [x] Revisar cada README y eliminar cualquier afirmacion que haga parecer que `sdd/core/` ya existe.

### Bloque D - Registro de decisiones, hallazgos o blockers

* [x] Registrar finding si `docs/README.md` y estructura real siguen desalineados despues de crear `sdd/`; esa reconciliacion pertenece a Fase 3.
* [x] Registrar blocker si crear autoridad minima exige tocar `docs/README.md` o `AGENTS.md` antes de Fase 3.
* [x] Agregar entrada en `decision.log` solo si aparece una decision nueva no cubierta por las entradas del 2026-05-06.

### Bloque E - Validacion

* [x] Ejecutar `test ! -e sdd/core && printf 'no sdd/core\n' || printf 'sdd/core exists\n'` y esperar `no sdd/core`.
* [x] Ejecutar `find sdd -maxdepth 3 -type f | sort` y confirmar que solo hay READMEs esperados.
* [x] Ejecutar `rg -n "patch.yaml|sdd-close|sdd/core" sdd docs/sdd/parches/sdd-portable-core-bootstrap/backlog/fase1.md` y clasificar cualquier hallazgo como prohibido, deferred o falso positivo.
* [x] Ejecutar `git diff --check`.
* [x] No ejecutar `npm run build` salvo que se haya tocado runtime Astro; si se omite, registrar `skipped` con razon.

### Bloque F - Cierre

* [x] Actualizar checklist ejecutado en este backlog.
* [x] Registrar resultados de validacion en seccion 11.
* [x] Confirmar que Fase 2 queda desbloqueada.
* [x] Marcar esta fase `done` solo si no quedan blockers abiertos.

---

## 7. Drift detectado

* Fecha:

  * fuente esperada:
  * diferencia encontrada:
  * impacto:
  * accion:
  * requiere decision: `si` | `no`

* 2026-05-06:

  * fuente esperada: Fase 1 solo crea autoridad minima de ruta; reconciliacion de `docs/README.md` y `AGENTS.md` ocurre en Fase 3.
  * diferencia encontrada: despues de crear `sdd/`, `docs/README.md` y `AGENTS.md` siguen mezclando referencias objetivo `sdd/...` con ruta viva anterior `docs/sdd/...`.
  * impacto: drift transicional esperado hasta Fase 3.
  * accion: registrar y continuar; no tocar contratos en Fase 1.
  * requiere decision: `no`

---

## 8. Hallazgos durante ejecucion

* Fecha:

  * hallazgo:
  * impacto:
  * accion:

* 2026-05-06:

  * hallazgo: se creo `sdd/` con cinco READMEs minimos y sin `sdd/core/`.
  * impacto: Fase 2 queda desbloqueada para migrar artifacts.
  * accion: continuar con Fase 2.

---

## 9. Blockers

* [x] Ninguno registrado al crear el backlog.

---

## 10. Decisiones tomadas

* Fecha:

  * decision:
  * razon:
  * documentos o areas afectadas:

---

## 11. Validaciones

### Documentales

* [x] verificar alineacion de READMEs nuevos con `docs/README.md`
* [x] verificar alineacion de READMEs nuevos con `AGENTS.md`
* [x] verificar trazabilidad contra `tasks.md`, Fase 1

### Tecnicas

* [x] `test ! -e sdd/core && printf 'no sdd/core\n' || printf 'sdd/core exists\n'`
* [x] `find sdd -maxdepth 3 -type f | sort`
* [x] `rg -n "patch.yaml|sdd-close|sdd/core" sdd docs/sdd/parches/sdd-portable-core-bootstrap/backlog/fase1.md`
* [x] `git diff --check`

### Manuales

* [x] revision manual de que los READMEs son indices breves, no micro-core
* [x] revision manual de que templates y orquestacion quedan como transicionales

### Resultados

* Validacion:

  * comando o revision: `test ! -e sdd/core && printf 'no sdd/core\n' || printf 'sdd/core exists\n'`
  * resultado esperado: `no sdd/core`
  * resultado obtenido: `no sdd/core`
  * estado: `pass`
  * notas: confirma que no se creo micro-core.

* Validacion:

  * comando o revision: `find sdd -maxdepth 3 -type f | sort`
  * resultado esperado: solo READMEs minimos de ruta.
  * resultado obtenido: `sdd/README.md`, `sdd/orchestration/README.md`, `sdd/parches/README.md`, `sdd/parches/legacy/README.md`, `sdd/templates/README.md`
  * estado: `pass`
  * notas: no hay artifacts migrados todavia.

* Validacion:

  * comando o revision: `rg -n "patch.yaml|sdd-close|sdd/core" sdd docs/sdd/parches/sdd-portable-core-bootstrap/backlog/fase1.md`
  * resultado esperado: solo menciones de deferred work o controles del backlog.
  * resultado obtenido: menciones en READMEs y backlog como trabajo diferido o restricciones.
  * estado: `pass`
  * notas: no hay archivo `patch.yaml`, `sdd-close` ni `sdd/core/`.

* Validacion:

  * comando o revision: `git diff --check`
  * resultado esperado: sin errores.
  * resultado obtenido: sin errores.
  * estado: `pass`
  * notas:

* Validacion:

  * comando o revision: `npm run build`
  * resultado esperado: no aplicable.
  * resultado obtenido: no ejecutado.
  * estado: `skipped`
  * notas: Fase 1 solo crea documentacion SDD y no toca runtime Astro.

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

* Crear accidentalmente doctrina SDD reusable en READMEs de ruta.
* Crear `sdd/core/` o referencias que lo presenten como existente.
* Dejar `docs/sdd/` y `sdd/` como rutas activas equivalentes antes de Fase 3.

### Pendientes

* Fase 2 debe migrar artifacts despues de cerrar esta fase.
* Fase 3 debe reconciliar contratos y referencias operativas.

---

## 14. Registro de cambios

* 2026-05-06:

  * cambio: creacion inicial del backlog de Fase 1
  * razon: preparar ejecucion controlada de autoridad minima de ruta sin ejecutar migracion
* 2026-05-06:

  * cambio: ejecucion y cierre de Fase 1
  * razon: crear autoridad minima de ruta `sdd/` y desbloquear migracion fisica controlada
