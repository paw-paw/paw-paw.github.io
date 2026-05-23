# Drift Sync: SDD Portable Core Bootstrap

Este documento registra la sincronizacion de drift posterior a la ejecucion de las fases 1 a 4 del patch `sdd-portable-core-bootstrap`.

No reabre el diseno del programa `sdd-portable-core` y no sustituye `definicion.md`, `plan.md`, `tasks.md`, backlogs ni contratos vivos.

---

## Estado

- Change id: `sdd-portable-core-bootstrap`
- Program id: `sdd-portable-core`
- Fecha: `2026-05-09`
- Motivo: reconciliar drift detectado despues de ejecutar la migracion bootstrap.
- Resultado: `synced-with-residuals`

---

## Drift Clasificado

### 1. Bootstrap sigue bajo `docs/sdd/`

- Clasificacion: aceptable y transicional.
- Estado real: `docs/sdd/parches/sdd-portable-core-bootstrap/**` conserva handover, definicion, plan, tasks, backlogs, decision log, reporte y este drift sync.
- Contrato vigente: nuevos workspaces deben usar `sdd/parches/`.
- Accion: conservar como excepcion transicional; no mover durante drift sync.
- Pendiente: decidir en cierre si el bootstrap se mueve a `sdd/parches/` o queda como expediente historico transicional.

### 2. `docs/README.md` apuntaba a `sdd/parches/sprint-1/roadmap.md`

- Clasificacion: necesita actualizacion contractual.
- Estado real: Sprint 1 fue migrado a `sdd/parches/legacy/sprint-1/roadmap.md`.
- Accion: actualizar `docs/README.md` para apuntar al path legacy real y aclarar que no es patron vigente.
- Pendiente: ninguno para este item.

### 3. `docs/AGENTS.md` todavia describia `docs/sdd/` como ruta esperada

- Clasificacion: necesita actualizacion contractual operativa.
- Estado real: SDD operativo vive en root `sdd/`; `docs/sdd/` solo conserva el bootstrap transicional.
- Accion: actualizar `docs/AGENTS.md` para no recrear `docs/sdd/` como ruta activa y reconocer la excepcion bootstrap.
- Pendiente: ninguno para este item.

### 4. `definicion.md`, `plan.md` y `tasks.md` contienen referencias pre-migracion

- Clasificacion: aceptable como historial de planificacion, con nota de sync requerida.
- Estado real: el patch ya ejecuto las fases y las rutas activas cambiaron a `sdd/...`.
- Accion: agregar notas de sincronizacion sin reescribir el historial de planning.
- Pendiente: cierre formal del patch cuando exista flujo de cierre.

### 5. `decision.log` esta ignorado por `*.log`

- Clasificacion: necesita decision posterior o ajuste de versionado.
- Estado real: `.gitignore` ignora `decision.log`, incluidos los migrados a `sdd/`.
- Accion: registrar como riesgo residual, sin cambiar `.gitignore` en este sync.
- Pendiente: decidir si renombrar decision logs, ajustar `.gitignore` o usar `git add -f` al versionar.

### 6. `sdd/templates/` y `sdd/orchestration/` existen como transicionales

- Clasificacion: aceptable dentro del alcance bootstrap, diferido para future patch.
- Estado real: ambas carpetas fueron migradas y marcadas por README como transicionales.
- Accion: conservar; no consolidar hacia assets de skills ni micro-core en este sync.
- Pendiente: future patch para micro-core y consolidacion de templates/orchestration.

---

## Contratos Actualizados

- `docs/README.md`
- `docs/AGENTS.md`

Los cambios son de reconciliacion de ruta y no introducen una decision de producto del portfolio.

---

## Artefactos Auxiliares Sincronizados

- `docs/sdd/parches/sdd-portable-core-bootstrap/drift-sync.md`
- `docs/sdd/parches/sdd-portable-core-bootstrap/decision.log`
- `docs/sdd/parches/sdd-portable-core-bootstrap/definicion.md`
- `docs/sdd/parches/sdd-portable-core-bootstrap/plan.md`
- `docs/sdd/parches/sdd-portable-core-bootstrap/tasks.md`
- `docs/sdd/parches/sdd-portable-core-bootstrap/reporte-migracion.md`

---

## Drift No Resuelto

- El bootstrap activo permanece bajo `docs/sdd/parches/sdd-portable-core-bootstrap/`.
- `decision.log` sigue afectado por `*.log`.
- No existe `sdd/core/`.
- No existe `patch.yaml`.
- No existe `sdd-close` ni `cierre.md`.
- Las skills apuntan a rutas `sdd/...`, pero no son type-aware por manifest.

---

## Siguiente Accion Recomendada

Ejecutar cierre del patch cuando exista o se defina el flujo de cierre aplicable. Si se requiere cerrar antes de crear `sdd-close`, usar un cierre manual acotado que registre explicitamente la excepcion bootstrap y el tratamiento de `decision.log`.
