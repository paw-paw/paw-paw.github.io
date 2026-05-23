# Backlog Fase 2: Migracion fisica controlada de artifacts SDD

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

* Change id: `sdd-portable-core-bootstrap`
* Fase: `2 - Migracion fisica controlada de artifacts SDD`
* Estado: `done`
* Ultima actualizacion: `2026-05-06`
* Owner: `paw-paw`
* Depende de:
  * `docs/sdd/parches/sdd-portable-core-bootstrap/backlog/fase1.md` en estado `done`
  * `docs/sdd/parches/sdd-portable-core-bootstrap/tasks.md`
  * `docs/sdd/parches/sdd-portable-core-bootstrap/plan.md`
* Desbloquea:
  * `docs/sdd/parches/sdd-portable-core-bootstrap/backlog/fase3.md`

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
  * `docs/sdd/parches/README.md`
  * `docs/sdd/orchestration/README.md`
  * `docs/sdd/templates/backlog-faseN.md`
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

* Resultado esperado: templates, orquestacion y workspaces historicos se reubican desde `docs/sdd/` hacia `sdd/` segun la estructura transicional definida por Fase 1.
* Razon de la fase: la ruta activa SDD debe dejar de depender fisicamente de `docs/sdd/` para avanzar hacia el modelo portable.
* Cambio que queda habilitado al cerrar: Fase 3 puede actualizar contratos, skills y agentes contra rutas reales ya migradas.

---

## 3. Precondiciones

### Documentos

* [x] `definicion.md` vigente
* [x] `plan.md` vigente
* [x] `tasks.md` con Fase 2 seleccionada
* [x] `backlog/fase1.md` en estado `done`
* [x] READMEs creados en Fase 1 revisados

### Decisiones previas

* [x] Confirmar que `sdd-portable-core-bootstrap` sigue como excepcion transicional bajo `docs/sdd/parches/`.
* [x] Confirmar que legacy no recibe `patch.yaml`.
* [x] Confirmar que `docs/sdd/orchestration/` y `docs/sdd/templates/` migran tal cual, sin rewrite semantico.

### Estado tecnico

* [x] Ejecutar `find docs/sdd -maxdepth 3 -type f | sort` para listar fuentes antes de mover.
* [x] Ejecutar `find sdd -maxdepth 3 -type f | sort` para verificar destino creado por Fase 1.

---

## 4. Alcance

### Si entra

* [x] Mover `docs/sdd/templates/**` a `sdd/templates/**`.
* [x] Mover `docs/sdd/orchestration/**` a `sdd/orchestration/**`.
* [x] Mover workspaces historicos de `docs/sdd/parches/**` a `sdd/parches/legacy/**`, excepto el workspace bootstrap activo.
* [x] Preservar `docs/sdd/parches/sdd-portable-core-bootstrap/**` en su ruta actual durante esta fase.
* [x] Mantener notas transicionales o legacy creadas por Fase 1.

### No entra

* [x] No editar contenido de templates u orquestacion salvo ajustes minimos de ruta necesarios para no romper referencias de carpeta.
* [x] No actualizar `docs/README.md`, `AGENTS.md`, `README.md`, skills ni agents; eso pertenece a Fase 3.
* [x] No crear `patch.yaml`.
* [x] No crear `sdd/core/`, `sdd-close`, schemas ni scripts.
* [x] No mover el workspace bootstrap salvo decision explicita registrada al cierre.

---

## 5. Archivos y superficies de trabajo

### Leer antes de editar

* `docs/sdd/parches/sdd-portable-core-bootstrap/backlog/fase1.md`
* `docs/sdd/parches/sdd-portable-core-bootstrap/tasks.md`
* `docs/sdd/parches/sdd-portable-core-bootstrap/plan.md`
* `docs/sdd/parches/sdd-portable-core-bootstrap/decision.log`
* `sdd/README.md`
* `sdd/parches/README.md`
* `sdd/parches/legacy/README.md`
* `sdd/templates/README.md`
* `sdd/orchestration/README.md`

### Editar

* `docs/sdd/templates/**` mediante movimiento a `sdd/templates/**`
* `docs/sdd/orchestration/**` mediante movimiento a `sdd/orchestration/**`
* `docs/sdd/parches/**` mediante movimiento de workspaces historicos a `sdd/parches/legacy/**`
* `docs/sdd/parches/sdd-portable-core-bootstrap/backlog/fase2.md`, solo para actualizar estado, findings, decisiones, validaciones y cierre
* `docs/sdd/parches/sdd-portable-core-bootstrap/decision.log`, solo si aparece una decision significativa

### Validar

* `docs/sdd/`
* `sdd/templates/`
* `sdd/orchestration/`
* `sdd/parches/legacy/`
* `docs/sdd/parches/sdd-portable-core-bootstrap/`

### No tocar

* `docs/README.md`
* `AGENTS.md`
* `docs/AGENTS.md`
* `README.md`
* `.codex/skills/**`
* `.codex/agents/**`
* `sdd/core/**`
* `src/**`
* `public/**`
* `_inbox/**`

---

## 6. Checklist de ejecucion

### Bloque A - Relectura de fuentes

* [x] Leer Fase 2 en `tasks.md` y confirmar dependencias desde Fase 1.
* [x] Leer Bloque 2 en `plan.md` y confirmar que la migracion es fisica/controlada.
* [x] Leer `decision.log`, decisiones de `Migrar orquestacion y templates como transicionales` y `Tratar el bootstrap como excepcion transicional hasta cierre`.
* [x] Leer READMEs creados en Fase 1 para confirmar destinos y wording transicional.

### Bloque B - Inspeccion de estado actual

* [x] Ejecutar `find docs/sdd -maxdepth 3 -type f | sort` y guardar la lista para comparar.
* [x] Ejecutar `find docs/sdd/parches -maxdepth 1 -mindepth 1 -type d | sort` para listar workspaces.
* [x] Verificar que `docs/sdd/parches/sdd-portable-core-bootstrap/` existe y no se incluira en movimientos de legacy.
* [x] Ejecutar `find sdd -maxdepth 3 -type f | sort` y confirmar que destinos existen.

### Bloque C - Edicion por archivo

* [x] Mover `docs/sdd/templates/definicion.md` a `sdd/templates/definicion.md`.
* [x] Mover `docs/sdd/templates/plan.md` a `sdd/templates/plan.md`.
* [x] Mover `docs/sdd/templates/tasks.md` a `sdd/templates/tasks.md`.
* [x] Mover `docs/sdd/templates/backlog-faseN.md` a `sdd/templates/backlog-faseN.md`.
* [x] Mover `docs/sdd/templates/decision.log` a `sdd/templates/decision.log`.
* [x] Mover documentos de `docs/sdd/orchestration/` a `sdd/orchestration/` preservando nombres.
* [x] Mover cada workspace historico bajo `docs/sdd/parches/` a `sdd/parches/legacy/`, excepto `sdd-portable-core-bootstrap`.
* [x] Verificar que no se crea ningun `patch.yaml` durante movimientos.
* [x] Eliminar carpetas vacias de `docs/sdd/templates/`, `docs/sdd/orchestration/` y workspaces movidos solo si quedaron sin archivos.

### Bloque D - Registro de decisiones, hallazgos o blockers

* [x] Registrar finding si un workspace parece activo y no deberia moverse a legacy sin decision humana.
* [x] Registrar blocker si mover un workspace historico rompe la trazabilidad del bootstrap.
* [x] Registrar en `decision.log` cualquier decision de dejar un workspace fuera de legacy.
* [x] Registrar drift si aparecen archivos bajo `docs/sdd/` que no encajan en templates, orquestacion, parches historicos o bootstrap activo.

### Bloque E - Validacion

* [x] Ejecutar `find sdd/templates sdd/orchestration sdd/parches/legacy -maxdepth 3 -type f | sort`.
* [x] Ejecutar `find docs/sdd -maxdepth 3 -type f | sort`, adaptado si `docs/sdd` fue eliminado o queda solo bootstrap.
* [x] Ejecutar `find sdd/parches/legacy -name patch.yaml -print` y esperar salida vacia.
* [x] Ejecutar `test -d docs/sdd/parches/sdd-portable-core-bootstrap && printf 'bootstrap preserved\n' || printf 'bootstrap missing\n'`.
* [x] Ejecutar `git diff --check`.
* [x] No ejecutar `npm run build` salvo que se haya tocado runtime Astro; si se omite, registrar `skipped` con razon.

### Bloque F - Cierre

* [x] Actualizar checklist ejecutado en este backlog.
* [x] Registrar resultados de validacion en seccion 11.
* [x] Confirmar que Fase 3 queda desbloqueada.
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

  * fuente esperada: tras Fase 2, `docs/sdd/` conserva solo el bootstrap activo o residuales transicionales para reconciliar.
  * diferencia encontrada: `docs/sdd/parches/README.md` queda como residual junto al workspace bootstrap.
  * impacto: referencia auxiliar antigua pendiente de Fase 3; no bloquea la migracion fisica de workspaces.
  * accion: conservar hasta reconciliacion contractual/operativa en Fase 3.
  * requiere decision: `no`

---

## 8. Hallazgos durante ejecucion

* Fecha:

  * hallazgo:
  * impacto:
  * accion:

* 2026-05-06:

  * hallazgo: todos los workspaces historicos bajo `docs/sdd/parches/`, excepto el bootstrap, fueron movidos a `sdd/parches/legacy/`.
  * impacto: legacy queda fisicamente separado de la ruta activa transicional.
  * accion: continuar con Fase 3.

* 2026-05-06:

  * hallazgo: `git mv` no pudo usarse porque el sandbox no pudo crear `.git/index.lock`; se usaron movimientos de filesystem dentro del workspace.
  * impacto: los cambios quedan como movimientos detectables por Git, sin alterar contenido.
  * accion: validar con `git diff --check` y `git status`.

---

## 9. Blockers

* [x] Espera Fase 1 cerrada antes de ejecutar.

---

## 10. Decisiones tomadas

* Fecha:

  * decision:
  * razon:
  * documentos o areas afectadas:

---

## 11. Validaciones

### Documentales

* [x] verificar trazabilidad contra `tasks.md`, Fase 2
* [x] verificar que legacy queda visible y no normativo
* [x] verificar que bootstrap activo queda preservado

### Tecnicas

* [x] `find sdd/templates sdd/orchestration sdd/parches/legacy -maxdepth 3 -type f | sort`
* [x] `find docs/sdd -maxdepth 3 -type f | sort`
* [x] `find sdd/parches/legacy -name patch.yaml -print`
* [x] `test -d docs/sdd/parches/sdd-portable-core-bootstrap && printf 'bootstrap preserved\n' || printf 'bootstrap missing\n'`
* [x] `git diff --check`

### Manuales

* [x] revision manual de que templates y orquestacion no fueron reescritos semanticamente
* [x] revision manual de workspaces movidos a legacy

### Resultados

* Validacion:

  * comando o revision: `find sdd/templates sdd/orchestration sdd/parches/legacy -maxdepth 3 -type f | sort`
  * resultado esperado: templates, orquestacion y workspaces legacy aparecen bajo `sdd/`.
  * resultado obtenido: templates migrados, orquestacion migrada y workspaces historicos bajo `sdd/parches/legacy/`.
  * estado: `pass`
  * notas:

* Validacion:

  * comando o revision: `find docs/sdd -maxdepth 3 -type f | sort`
  * resultado esperado: queda el bootstrap activo y residuales transicionales clasificados.
  * resultado obtenido: `docs/sdd/parches/sdd-portable-core-bootstrap/**` y `docs/sdd/parches/README.md`.
  * estado: `pass`
  * notas: `docs/sdd/parches/README.md` queda para Fase 3.

* Validacion:

  * comando o revision: `find sdd/parches/legacy -name patch.yaml -print`
  * resultado esperado: salida vacia.
  * resultado obtenido: salida vacia.
  * estado: `pass`
  * notas:

* Validacion:

  * comando o revision: `test -d docs/sdd/parches/sdd-portable-core-bootstrap && printf 'bootstrap preserved\n' || printf 'bootstrap missing\n'`
  * resultado esperado: `bootstrap preserved`
  * resultado obtenido: `bootstrap preserved`
  * estado: `pass`
  * notas:

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
  * notas: Fase 2 solo mueve documentacion SDD y no toca runtime Astro.

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

* Mover por error el workspace bootstrap activo.
* Enviar a legacy un workspace que todavia necesite operar como activo.
* Dejar `docs/sdd/` parcialmente activo sin clasificacion.

### Pendientes

* Fase 3 debe actualizar contratos y referencias despues de la migracion fisica.
* La decision final sobre mover el bootstrap queda para cierre o reporte.

---

## 14. Registro de cambios

* 2026-05-06:

  * cambio: creacion inicial del backlog de Fase 2
  * razon: preparar migracion fisica controlada sin ejecutarla
* 2026-05-06:

  * cambio: ejecucion y cierre de Fase 2
  * razon: migrar fisicamente templates, orquestacion y workspaces historicos hacia `sdd/`
