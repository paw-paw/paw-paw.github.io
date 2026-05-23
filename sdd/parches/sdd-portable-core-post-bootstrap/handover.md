# Handover: SDD Portable Core Post-Bootstrap

Este documento preserva el alcance restante del handover consolidado de rearquitectura SDD portable, excluyendo lo ya declarado e implementado por el patch `sdd-portable-core-bootstrap`.

No es `definicion.md`, `plan.md`, `tasks.md`, `patch.yaml` ni `cierre.md`. Su funcion es dejar una fuente de entrada filtrada para ejecutar `sdd-intake` posteriormente.

---

## Estado

- Change id tentativo: `sdd-portable-core-post-bootstrap`
- Program id: `sdd-portable-core`
- Tipo de artifact: handover filtrado
- Estado: handover-only
- Fuente primaria: `_inbox/megapatch/handover_rearquitectura_sdd_portable_consolidado.md`
- Exclusion principal: `docs/sdd/parches/sdd-portable-core-bootstrap/**`
- Ruta vigente para nuevos workspaces: `sdd/parches/`
- Fecha de preparacion: `2026-05-09`
- Owner esperado: `paw-paw`

---

## 1. Proposito

Preparar el input para continuar el programa `sdd-portable-core` despues del bootstrap migration-first.

El bootstrap ya resolvio la separacion inicial entre `docs/` y `sdd/`, la migracion fisica de artifacts SDD, la clasificacion de legacy y la reconciliacion minima de rutas. Este handover conserva solamente el trabajo conceptual restante del programa portable.

Este documento no decide todavia si el siguiente intake debe producir un patch unico, varios patches secuenciales o un batch. Esa decision corresponde al siguiente `sdd-intake` o a una triage previa si se incorpora una skill dedicada.

---

## 2. Confirmacion de superficie vigente

La superficie historica `docs/sdd/` no es ruta activa general.

Estado vigente confirmado por `docs/README.md`, `sdd/README.md`, `sdd/parches/README.md` y el drift sync del bootstrap:

- `sdd/` es la raiz operativa actual del sistema SDD portable del repo.
- `sdd/parches/` es el workspace contractual activo para nuevos cambios SDD.
- `sdd/parches/legacy/` contiene memoria historica no normativa.
- `docs/sdd/parches/sdd-portable-core-bootstrap/` permanece como excepcion transicional documentada.
- `docs/sdd/` fuera de esa excepcion debe tratarse como residuo historico o drift, no como patron vigente.

---

## 3. Fuente y metodo de filtrado

Fuente completa:

```text
_inbox/megapatch/handover_rearquitectura_sdd_portable_consolidado.md
```

Patch excluido:

```text
docs/sdd/parches/sdd-portable-core-bootstrap/
```

Se excluye lo que el bootstrap declaro como alcance propio:

- crear autoridad minima de ruta `sdd/`;
- crear READMEs minimos de `sdd/`, `sdd/parches/`, `sdd/parches/legacy/`, `sdd/templates/` y `sdd/orchestration/`;
- migrar templates desde `docs/sdd/templates/` hacia `sdd/templates/`;
- migrar orquestacion desde `docs/sdd/orchestration/` hacia `sdd/orchestration/`;
- migrar workspaces historicos hacia `sdd/parches/legacy/`;
- conservar `docs/sdd/parches/sdd-portable-core-bootstrap/` como excepcion transicional;
- reconciliar referencias operativas y contractuales minimas hacia `sdd/...`;
- documentar reporte de migracion y drift sync;
- dejar diferidos micro-core, manifest, `sdd-close`, validation tooling, type-awareness completa, writer audit, CI, link checker y evals.

---

## 4. Alcance restante del programa

El resto del programa apunta a convertir la raiz `sdd/` ya migrada en un sistema portable completo, estricto y reusable.

### 4.1 Micro-core SDD

Crear un micro-core, no un core enciclopedico, con reglas compartidas que afectan multiples skills.

Rutas conceptuales pendientes:

```text
sdd/core/README.md
sdd/core/patch-model.md
sdd/core/artifact-lifecycle.md
sdd/core/decision-drift-policy.md
```

Temas que debe cubrir:

- autoridad metodologica de `sdd/core`;
- relacion entre spec activa, contratos vivos y memoria historica;
- separacion entre host, SDD core, skills Codex y agents;
- ownership: core como contrato, skill como procedimiento, template como forma, artifact como instancia viva;
- categorias `decisions`, `assumptions`, `blockers`, `findings` y `tasks`;
- frontera entre `sdd-triage`, `sdd-router`, `sdd-sync-drift` y `sdd-close`.

### 4.2 Modelo de patch y manifest

Introducir el modelo formal de patch con manifest liviano.

Contrato conceptual pendiente:

```text
sdd/parches/<change-id>/patch.yaml
```

Enums aprobados por el handover:

```text
patch_kind: spec | batch
lifecycle: spec-first | spec-anchored
status: active | closed | blocked | abandoned
```

Matriz aprobada:

```text
spec  + spec-first    = permitido
spec  + spec-anchored = permitido
batch + spec-first    = permitido
batch + spec-anchored = no permitido
```

Reglas pendientes:

- `program_id` agrupa patches relacionados sin crear necesariamente un workspace formal de programa.
- `related_docs` es obligatorio si `lifecycle = spec-anchored`.
- `patch.yaml` no reemplaza `handover.md`, `definicion.md`, `plan.md`, `tasks.md`, `backlog/`, `decision.log` ni `cierre.md`.
- `patch.yaml` no contiene items de batch.
- `patch.yaml` no contiene `current_phase`.
- legacy no recibe `patch.yaml`.

### 4.3 Lifecycle de artifacts y cierre

Definir y ejecutar el cierre formal de patches.

Pendientes principales:

- crear o adaptar skill dedicada `sdd-close`;
- introducir `cierre.md` como artifact obligatorio de cierre para patches formales;
- definir niveles de cierre:
  - `minimal`
  - `standard`
  - `batch`
  - `anchored`
  - `drift-heavy`
- hacer que `cierre.md` reconcilie intencion, ejecucion, decisions, assumptions, blockers, findings, drift, validaciones y fuente viva post-cierre;
- mantener `decision.log` separado durante ejecucion y resumir decisiones relevantes en `cierre.md`.

### 4.4 Type-awareness de skills SDD

Actualizar skills SDD para operar segun `patch.yaml` cuando exista.

Skills esperadas por el handover:

```text
sdd-triage
sdd-intake
sdd-router
sdd-plan
sdd-tasks
sdd-phase-backlog
sdd-execute-phase
sdd-sync-drift
sdd-close
```

Reglas pendientes:

- las skills SDD deben leer `patch.yaml` si existe;
- la falta de `patch.yaml` en un patch nuevo debe ser stop condition salvo para `sdd-intake` o legacy;
- `sdd-router` diagnostica workspaces existentes, pero no corrige directamente `patch.yaml`;
- cambiar `patch_kind` o `lifecycle` es decision estructural;
- no crear `sdd-batch` como skill separada.

### 4.5 Templates finales y assets de skills

Resolver la transicion de templates.

Estado actual:

- `sdd/templates/` existe como carpeta transicional.
- `.codex/skills/*/assets/` debe ser la ubicacion final de templates concretos de salida cuando el sistema quede consolidado.

Pendientes:

- decidir que templates se mueven a assets de skills;
- evitar que templates contengan reglas largas de ejecucion;
- dejar en templates solo forma, headings y placeholders minimos;
- eliminar o degradar `sdd/templates/` cuando ya no sea fuente transicional necesaria.

### 4.6 Validacion SDD local

Crear validacion operacional, no enterprise.

Rutas conceptuales pendientes:

```text
sdd/tools/schemas/patch.schema.json
sdd/tools/validate-sdd.mjs
sdd/tests/fixtures/
```

Validaciones esperadas:

- estructura base `sdd/`;
- ausencia de `docs/sdd` como ruta activa;
- `patch.yaml` en patches nuevos;
- `schema_version`;
- campos requeridos;
- enums validos;
- matriz `patch_kind + lifecycle`;
- `related_docs` obligatorio para `spec-anchored`;
- legacy bajo `sdd/parches/legacy/`;
- ownership de templates/assets;
- existencia de `sdd-close`;
- `cierre.md` para patches cerrados.

Smoke tests conceptuales minimos:

```text
spec-first
spec-anchored
batch
legacy read-only
missing patch.yaml
blocked patch
close
```

La validacion final debe registrarse dentro de `cierre.md` con clasificacion:

```text
automated
manual
not applicable
deferred
```

### 4.7 Writers y audit

Mantener sospecha razonable sobre writers hasta auditar evidencia.

Reglas pendientes:

- no ampliar permisos;
- no ampliar superficies;
- no usar writers para cambios core o contractuales sensibles sin autorizacion explicita;
- exigir ownership acotado si una skill los autoriza;
- impedir que el audit pendiente se lea como aprobacion implicita.

Audit futuro:

- usar rubric simple `0-3` o `pass/warn/fail`;
- producir evidencia comparativa, no solo opinion narrativa;
- evaluar scope, trazabilidad, decision gates, validaciones, rework y respeto de artifacts.

Casos base:

1. artifact simple;
2. artifact con contradiccion;
3. codigo local simple;
4. cambio con validacion;
5. decision gate;
6. drift.

### 4.8 Pendientes diferidos adicionales

Future patch candidates preservados:

- CI para `validate-sdd`;
- link checker completo;
- OpenAI Evals o evals formales para writers/skills;
- posible workspace formal de programa si `program_id` queda corto;
- consolidacion avanzada de orchestration docs despues de probar micro-core;
- expansion del core si aparece una regla que afecta 3+ skills y no cabe en los cuatro docs iniciales;
- refinamiento de fixtures despues de smoke tests conceptuales;
- compatibilidad o adapter de extraccion si `.codex/skills` debe portarse a otro runtime.

Pendientes residuales detectados tras bootstrap:

- decidir cierre o migracion final del workspace transicional `docs/sdd/parches/sdd-portable-core-bootstrap/`;
- resolver el tratamiento de `decision.log` frente al patron global `*.log` de `.gitignore`.

---

## 5. Fuera de alcance de este handover

Este handover no debe:

- ejecutar cambios;
- crear `definicion.md`;
- crear `plan.md`;
- crear `tasks.md`;
- crear `backlog/`;
- crear `decision.log`;
- crear `patch.yaml`;
- crear `sdd/core/`;
- crear `sdd/tools/`;
- crear `sdd/tests/`;
- modificar skills, agents, contratos, runtime Astro, package scripts o dependencias;
- cerrar el bootstrap;
- presentar todo el resto del programa como un unico patch ejecutable sin triage posterior.

---

## 6. Riesgos y guardrails heredados

Riesgos principales:

- confundir `patch_kind` con `lifecycle`;
- convertir batch en sprint o bolsa abierta de scope;
- hacer split excesivo y perder valor operativo;
- dejar templates como manual oculto;
- inflar `AGENTS.md` con doctrina SDD que debe vivir en `sdd/core`;
- ampliar confianza de writers sin audit;
- usar legacy como patron vigente;
- cerrar `spec-anchored` sin promover o reconciliar fuente viva;
- validar de forma falsa sin distinguir automatico, manual, diferido o no aplicable;
- dejar `sdd/templates/` o `sdd/orchestration/` como fuente final por inercia.

Guardrails:

- micro-core estricto;
- estructura canonica estricta;
- manifest obligatorio para patches nuevos una vez introducido el modelo;
- matriz `patch_kind + lifecycle` estricta;
- legacy visible pero no normativo;
- assumptions first-class;
- decisions separadas de tasks;
- blockers no tratados como pendientes simples;
- findings no entran automaticamente al scope;
- cierre explicito mediante `cierre.md`;
- validacion operacional, no enterprise;
- script local antes que CI;
- writer audit antes de ampliar confianza.

---

## 7. Criterios conceptuales de exito del programa restante

El programa restante sera exitoso si:

1. `sdd/core` existe como micro-core portable, no como enciclopedia.
2. `AGENTS.md` gobierna el host y referencia el core sin duplicarlo.
3. Todo patch formal nuevo tiene `patch.yaml` cuando el modelo exista.
4. El sistema distingue correctamente `patch_kind` de `lifecycle`.
5. `batch + spec-anchored` queda prohibido.
6. La rearquitectura sigue ejecutandose como programa ligero con `program_id`.
7. Templates finales viven como assets de skills.
8. Todas las skills SDD son type-aware.
9. Todo patch formal cierra con `cierre.md`.
10. `decision.log` y `cierre.md` tienen responsabilidades distintas.
11. Assumptions, decisions, blockers, findings y tasks no se mezclan.
12. `validate-sdd` automatiza forma sin reemplazar revision manual de intencion.
13. Writers no reciben mas autonomia sin audit real.
14. El sistema puede explicarse y extraerse a otro repo sin arrastrar reglas especificas del portfolio.

---

## 8. Preguntas no bloqueantes para el siguiente intake

- Si el siguiente workspace debe ser micro-core-first, patch-model-first, close-first o una triage de split.
- Si `sdd-portable-core-post-bootstrap` debe mantenerse como change-id del proximo patch o solo como handover staging.
- Si el tratamiento de `decision.log` ignorado por `*.log` entra en el siguiente patch o en un patch directo separado.
- Si cerrar o mover el workspace bootstrap transicional debe resolverse antes de introducir `patch.yaml`.
- Que parte de `sdd/orchestration/` debe promoverse a `sdd/core` y que parte debe quedar como apoyo transicional.
