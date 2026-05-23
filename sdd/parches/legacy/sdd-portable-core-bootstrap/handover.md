# Handover consolidado: Rearquitectura SDD portable

## 1. Proposito del documento

Este dossier consolida el handover conceptual original de la rearquitectura SDD portable y los cinco batches posteriores de refinamiento.

No es `definicion.md`, `plan.md` ni `tasks.md`. Su funcion es dejar un input completo, depurado y operativo para que un flujo SDD posterior pueda hacer intake formal sin reabrir decisiones ya cerradas conceptualmente.

El documento cubre el programa completo de rearquitectura SDD portable. No ejecuta migracion, no crea rutas, no modifica skills, no crea schemas, no valida links y no reemplaza los artifacts formales que deberan nacer en el intake.

## 2. Estado conceptual del programa

El programa esta conceptualmente definido como una rearquitectura del sistema SDD actual hacia un modelo portable, estricto y reusable.

La direccion aprobada es:

```text
repo host      = producto concreto, contratos vivos, contenido, stack y deployment
sdd/           = sistema operativo de cambios spec-driven
sdd/core/      = doctrina operativa reusable del sistema SDD
sdd/parches/   = workspaces SDD del repo actual
.codex/        = runtime Codex: skills, agents y config
```

La rearquitectura completa no debe ejecutarse como un unico patch ni como un batch. Debe tratarse como un programa ligero de patches relacionados mediante `program_id`.

No se detectaron contradicciones materiales bloqueantes entre el handover original y los batches. Los batches refinan el handover original en puntos donde este dejaba opciones abiertas o propuestas mas amplias.

## 3. Decisiones consolidadas

### 3.1 Autoridad, portabilidad y arquitectura base

Se adopta el modelo **SDD portable-core** con **micro-core**, no un core completo.

El micro-core inicial debe agrupar solo las reglas compartidas que definen el sistema y afectan multiples skills:

```text
sdd/core/README.md
sdd/core/patch-model.md
sdd/core/artifact-lifecycle.md
sdd/core/decision-drift-policy.md
```

Reglas de autoridad:

- `sdd/core` manda sobre metodologia SDD.
- El host manda sobre producto, contenido, stack, deployment, validaciones locales y restricciones propias.
- `.codex/skills` implementa el core como adapter ejecutable de Codex.
- `.codex/agents` apoya ejecucion o revision bajo control del agente principal.
- `AGENTS.md` gobierna la operacion del host y referencia `sdd/core`; no debe duplicar doctrina SDD extensa.
- `docs/` contiene contratos vivos del producto host.

Filosofia aprobada:

```text
La spec gobierna el cambio.
Los contratos vivos gobiernan el sistema.
Se reconcilian en el cierre.
```

Los patches cerrados son historicos por defecto. No deben quedar como fuente viva escondida. Si un patch `spec-anchored` introduce reglas vivas, el cierre debe reconciliarlas hacia `docs/`, `sdd/core` o `AGENTS.md`, segun corresponda.

Cambios sustantivos al core requieren patch formal `spec-anchored`. Correcciones menores de typos, links o formato pueden ser patch directo si no cambian significado.

### 3.2 Migracion estructural y compatibilidad historica

La migracion aprobada es directa:

```text
docs/sdd deja de ser ruta activa.
sdd/ pasa a ser la raiz estricta del sistema SDD portable.
```

No debe quedar `docs/sdd/README.md` como puente. `docs/README.md` debe eliminar `docs/sdd` de su estructura viva sin nota historica.

El legacy debe migrarse fisicamente a:

```text
sdd/parches/legacy/
```

El legacy queda visible por trazabilidad, pero no normativo. Debe quedar explicado mediante:

```text
sdd/parches/README.md
sdd/parches/legacy/README.md
```

Las referencias antiguas no deben reescribirse masivamente. Las referencias normativas vigentes deben actualizarse a rutas nuevas. Las referencias historicas pueden preservarse con notas cuando puedan confundirse con rutas vigentes.

Los templates actuales migran transicionalmente a `sdd/templates/`. Los documentos de orquestacion migran tal cual a `sdd/orchestration/`. En ambos casos, el estado transicional se declara por README de carpeta, no con marcas archivo por archivo.

El root `README.md` debe orientar hacia `docs/README.md` y `sdd/README.md`.

La migracion debe cerrar con reporte de migracion: estructura creada, rutas eliminadas, legacy migrado, referencias antiguas encontradas, clasificacion de hallazgos, notas agregadas, riesgos residuales y pendientes asignados.

### 3.3 Modelo de patch, manifest y escala del trabajo

Todo patch formal nuevo debe tener:

```text
sdd/parches/<change-id>/patch.yaml
```

Legacy no recibe `patch.yaml`.

El manifest es liviano. Declara identidad, tipo, lifecycle, estado y relaciones basicas. No reemplaza `handover.md`, `definicion.md`, `plan.md`, `tasks.md`, `backlog/`, `decision.log` ni `cierre.md`.

Enums aprobados:

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

`program` existe como concepto ligero, no como `patch_kind`. Los trabajos mayores se agrupan mediante:

```yaml
program_id: sdd-portable-core
```

La rearquitectura SDD portable debe ejecutarse como programa ligero de varios patches relacionados por `program_id`.

Split requerido solo cuando existe:

- lifecycle incompatible;
- blocker parcial fuerte;
- scope creep estructural evidente.

No hay limite numerico para batches. Un batch se evalua por integridad operativa, lista cerrada de items, validacion por item, ausencia de lifecycle incompatible y capacidad de cierre claro.

Los items de batch viven en `definicion.md`, no en `patch.yaml`.

`current_phase` no va en `patch.yaml`.

### 3.4 Lifecycle de artifacts, skills y templates

Ownership aprobado:

```text
core     = contrato
skill    = procedimiento
template = forma
artifact = instancia viva
```

Los contratos funcionales de artifacts viven en:

```text
sdd/core/artifact-lifecycle.md
```

Los templates finales viven en:

```text
.codex/skills/*/assets/
```

`sdd/templates/` es transicional y no debe sobrevivir como fuente final de templates ejecutables.

Debe existir skill dedicada:

```text
sdd-close
```

Todo patch formal nuevo debe cerrar con:

```text
cierre.md
```

Niveles de cierre aprobados:

- `minimal`
- `standard`
- `batch`
- `anchored`
- `drift-heavy`

El nivel de cierre se deriva de `patch_kind`, `lifecycle`, `status`, drift, decisions, assumptions, validaciones e impacto contractual. Si la inferencia tiene ambiguedad o impacto, `sdd-close` pregunta.

`assumptions` es categoria first-class en `definicion.md`, `plan.md`, `backlog/faseN.md` y `cierre.md`. Si no hay assumptions criticas, usar:

```text
No critical assumptions.
```

`decision.log` vive separado durante la ejecucion. `cierre.md` resume las decisiones relevantes y verifica reconciliacion.

Las categorias `decisions`, `assumptions`, `blockers`, `findings` y `tasks` se definen en `sdd/core/decision-drift-policy.md`.

Frontera entre skills:

```text
sdd-triage clasifica entrada nueva.
sdd-router diagnostica workspace existente.
router deriva a triage si detecta tipo incorrecto.
triage deriva a router si ya existe workspace.
```

`sdd-router` recomienda reclasificacion, pero no corrige directamente `patch.yaml`. Cambiar `patch_kind` o `lifecycle` es decision estructural.

Todas las skills SDD deben leer `patch.yaml` si existe. La falta de `patch.yaml` en un patch nuevo es stop condition salvo para `sdd-intake` o legacy.

### 3.5 Calidad, validacion, writers y guardrails

Principio aprobado:

```text
Automatizar forma.
Revisar manualmente intencion.
Cerrar reconciliando ambas.
```

La validacion debe ser operacional, no enterprise.

`patch.yaml` debe tener schema y script:

```text
sdd/tools/schemas/patch.schema.json
sdd/tools/validate-sdd.mjs
```

Primero script local portable; CI queda para future patch.

Los smoke tests son conceptuales. Los fixtures viven en:

```text
sdd/tests/fixtures/
```

El writer audit se disena dentro del programa, pero su ejecucion real queda como future patch propio.

Writers bajo reglas actuales:

- no ampliar permisos;
- no ampliar superficies;
- no usarlos para cambios core o contractuales sensibles sin autorizacion explicita;
- no tratar el audit pendiente como aprobacion implicita;
- bloquear cualquier ampliacion futura de confianza hasta ejecutar audit.

Casos base del writer audit:

1. artifact simple;
2. artifact con contradiccion;
3. codigo local simple;
4. cambio con validacion;
5. decision gate;
6. drift.

Validaciones esperadas:

- links/rutas markdown internas basicas;
- ausencia de `docs/sdd` como ruta activa;
- legacy bajo `sdd/parches/legacy/` y no normativo;
- ownership de templates/assets;
- smoke conceptual de `sdd-close` para `spec-first`, `batch` y `spec-anchored`.

La validacion final vive en `cierre.md`. No crear `sdd-validation-report.md` por defecto.

Clasificacion de validaciones:

```text
automated
manual
not applicable
deferred
```

## 4. Filosofia SDD aprobada

El sistema no busca convertir cada spec en fuente viva permanente. Busca separar ejecucion, contratos vivos y memoria historica.

Reglas filosoficas:

- La spec gobierna mientras el cambio esta activo.
- Los contratos vivos gobiernan el sistema despues del cierre.
- El cierre reconcilia intencion, ejecucion, drift, decisions, assumptions y fuentes vivas.
- Los patches cerrados conservan trazabilidad, pero no son fuente viva por defecto.
- Un patch `spec-anchored` debe promover o reconciliar sus reglas hacia la fuente viva adecuada.
- El batch permite agrupar trabajo sin fingir unidad conceptual.
- El split existe como guardrail conservador, no como mecanismo de orden estetico.
- La portabilidad se basa en estructura estricta, no en adaptabilidad ilimitada de layout.

## 5. Arquitectura objetivo

Arquitectura conceptual:

```text
sdd/core       = doctrina SDD reusable
sdd/parches    = workspaces SDD del repo actual
sdd/tools      = tooling portable de validacion SDD
sdd/tests      = fixtures y pruebas conceptuales del sistema
.codex/skills  = procedimientos ejecutables que implementan el core
.codex/agents  = roles delegables bajo control del manager
docs/          = contratos vivos del host
AGENTS.md      = gobierno operativo host-level
README.md      = onboarding general
```

Conflictos:

- Si el conflicto es metodologico SDD, manda `sdd/core`, salvo excepcion explicita.
- Si el conflicto es de producto, contenido, stack, deployment, SEO, i18n o validaciones locales, manda el host.
- Si el conflicto es mixto, se trata como decision gate y se actualiza la fuente viva correspondiente.

## 6. Rutas canonicas objetivo

Rutas finales:

```text
sdd/
sdd/README.md
sdd/core/
sdd/core/README.md
sdd/core/patch-model.md
sdd/core/artifact-lifecycle.md
sdd/core/decision-drift-policy.md
sdd/parches/
sdd/parches/README.md
sdd/parches/legacy/
sdd/parches/legacy/README.md
sdd/tools/
sdd/tools/validate-sdd.mjs
sdd/tools/schemas/patch.schema.json
sdd/tests/fixtures/
.codex/skills/
.codex/skills/*/assets/
.codex/agents/
AGENTS.md
docs/
docs/README.md
README.md
```

Rutas transicionales:

```text
sdd/templates/
sdd/orchestration/
```

Notas:

- `sdd/templates/` existe solo durante la migracion de templates hacia `.codex/skills/*/assets/`.
- `sdd/orchestration/` recibe documentos actuales migrados tal cual mientras se consolida el micro-core.
- `docs/sdd/` deja de ser ruta activa y no debe conservar README puente.

## 7. Modelo operativo de patches

Workspace formal nuevo:

```text
sdd/parches/<change-id>/
  patch.yaml
  handover.md
  definicion.md
  plan.md
  tasks.md
  decision.log
  backlog/
    fase1.md
    fase2.md
  cierre.md
```

El workspace es comun para `spec` y `batch`. Cambia la semantica de los artifacts segun `patch_kind` y `lifecycle`.

`spec` representa un cambio con intencion coherente y superficie logica reconocible. Puede ser `spec-first` o `spec-anchored`.

`batch` representa un conjunto de items individuales que conviene ejecutar juntos sin fingir unidad conceptual. Siempre usa `lifecycle: spec-first`.

`patch directo` queda fuera del SDD formal. No tiene `patch.yaml`.

`program_id` agrupa patches relacionados sin crear todavia un workspace formal de programa.

## 8. Manifest `patch.yaml`

Campos obligatorios para todo patch formal nuevo:

```text
schema_version
change_id
patch_kind
lifecycle
status
created_at
```

Campos opcionales:

```text
updated_at
closed_at
related_docs
related_skills
program_id
```

Campo obligatorio condicional:

```text
related_docs es obligatorio si lifecycle = spec-anchored
```

Forma base:

```yaml
schema_version: 1
change_id:
patch_kind: spec
lifecycle: spec-first
status: active
created_at: 2026-05-04
updated_at:
closed_at:
related_docs:
related_skills:
program_id:
```

Reglas:

- `schema_version` versiona el contrato de manifest, no el patch.
- `created_at` es obligatorio desde la creacion.
- `updated_at` cambia cuando cambia `patch.yaml`.
- `closed_at` solo tiene valor cuando `status: closed`.
- `status: blocked` indica estado global; el detalle vive en artifacts.
- `status: abandoned` requiere explicacion en artifact correspondiente.
- Si un patch cambia de `spec-first` a `spec-anchored`, debe registrarse decision y declarar `related_docs`.
- `patch.yaml` no contiene items de batch.
- `patch.yaml` no contiene `current_phase`.

## 9. Lifecycle de artifacts

`definicion.md` en `spec` debe definir intencion unitaria, alcance, fuentes de verdad, decisiones abiertas o tomadas, riesgos, criterios de aceptacion y, si aplica, documentos vivos que quedaran gobernando despues.

`definicion.md` en `batch` debe definir proposito operativo, razon de agrupacion, lista cerrada de items, restricciones compartidas, dependencias, riesgos y criterios de cierre por item.

`plan.md` en `spec` convierte la definicion en estrategia tecnica o documental coherente.

`plan.md` en `batch` coordina items independientes por dependencias, area, riesgo, eficiencia y validacion por item.

`tasks.md` en `spec` descompone una intencion coherente en fases macro.

`tasks.md` en `batch` organiza items por area, riesgo, dependencia o eficiencia sin convertir el batch en falsa spec.

`backlog/faseN.md` es checklist vivo de ejecucion. Debe registrar precondiciones, checklist, findings, blockers, decisions, assumptions, validations y cierre de fase.

`decision.log` registra decisiones significativas durante el patch.

`cierre.md` cierra el patch y reconcilia intencion, ejecucion, decisions, assumptions, blockers, findings, drift, validaciones y fuente viva.

## 10. Skills y responsabilidades

Skills SDD type-aware esperadas:

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

Responsabilidades:

- `sdd-triage`: clasifica entrada nueva antes de crear artifacts pesados. Decide si aplica SDD formal, patch directo, `spec`, `batch`, lifecycle, split y preguntas humanas bloqueantes.
- `sdd-intake`: crea `patch.yaml`, `handover.md`, `definicion.md` y `decision.log` opcional para patches nuevos.
- `sdd-router`: diagnostica workspace existente, lee `patch.yaml`, detecta drift de tipo/lifecycle y recomienda siguiente skill o reclasificacion.
- `sdd-plan`: genera plan segun `spec` o `batch`, declara assumptions e identifica contratos vivos si es `spec-anchored`.
- `sdd-tasks`: crea fases macro type-aware sin esconder decisions en tasks.
- `sdd-phase-backlog`: crea backlog de fase con assumptions, blockers, findings, decisions y validations visibles.
- `sdd-execute-phase`: ejecuta desde backlog vivo, registra findings y escala blockers sin absorber scope nuevo automaticamente.
- `sdd-sync-drift`: clasifica y reconcilia drift segun `patch_kind` y `lifecycle`.
- `sdd-close`: propone nivel de cierre, crea o actualiza `cierre.md`, verifica reconciliacion y actualiza status/fechas del manifest.

No se crea `sdd-batch` como skill separada. Las skills existentes deben ajustar comportamiento mediante `patch.yaml`.

## 11. Templates y assets

Modelo aprobado:

```text
sdd/core/artifact-lifecycle.md = contrato funcional
.codex/skills/*/assets/       = templates concretos de salida
sdd/templates/                 = transicional, no fuente final
```

Reglas:

- Los templates definen estructura de salida, headings y placeholders minimos.
- Los templates no contienen reglas largas de ejecucion.
- Las skills definen trigger, inputs, procedimiento, outputs y stop conditions.
- El core define doctrina compartida y contratos funcionales.
- Si una regla afecta 3+ skills, vive en `sdd/core`.
- Si afecta una sola skill, vive en `SKILL.md`.
- Si solo define forma, vive en el template.

## 12. Cierre y reconciliacion

`sdd-close` es obligatorio como skill dedicada para patches formales.

Todo patch formal nuevo debe cerrar con `cierre.md`, aunque el cierre pueda ser breve.

Niveles:

- `minimal`: spec simple, sin drift relevante ni impacto contractual.
- `standard`: spec normal con plan/tasks/backlog y validacion cerrada.
- `batch`: resultado, validacion, diferidos y descartados por item.
- `anchored`: contratos vivos actualizados y fuente viva post-cierre.
- `drift-heavy`: drift relevante, clasificacion, decisiones, sincronizacion y residuales.

El cierre debe declarar:

- resultado;
- validaciones y tipo de validacion;
- decisions relevantes;
- assumptions resueltas, aceptadas o criticas;
- blockers resueltos o residuales;
- findings relevantes;
- drift resuelto o residual;
- fuente viva post-cierre;
- pendientes y future patches.

## 13. Migracion estructural

Resultado conceptual esperado:

- `docs/sdd` deja de existir como ruta activa.
- `sdd/` nace como raiz del sistema SDD portable.
- `sdd/core/README.md` declara rutas canonicas.
- `sdd/parches/README.md` declara gramática vigente.
- `sdd/parches/legacy/README.md` declara historia y no normatividad.
- Templates migran primero a `sdd/templates/` y luego a assets de skills.
- Orchestration docs migran tal cual a `sdd/orchestration/` como transicionales.
- `docs/README.md` elimina `docs/sdd` sin nota historica.
- Root `README.md` apunta a `docs/README.md` y `sdd/README.md`.
- La migracion cierra con reporte explicito.

Validacion minima de migracion:

```text
rg "docs/sdd|sdd/templates|sdd/parches|roadmap.md|sprint-|block-|phase-|SR/"
```

Cada hallazgo se clasifica como:

```text
normativo vigente
historico / legacy
transicional
falso positivo
requiere decision posterior
```

## 14. Validacion y calidad

La validacion automatica debe cubrir forma y estructura:

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

La revision manual debe cubrir intencion:

- si la spec realmente goberno el cambio;
- si la fuente viva quedo actualizada;
- si `cierre.md` reconcilia correctamente;
- si hay drift conceptual;
- si un batch debio splittearse;
- si assumptions criticas quedaron bien tratadas;
- si un writer interpreto de mas.

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

La validacion final se registra dentro de `cierre.md`, con clasificacion `automated`, `manual`, `not applicable` o `deferred`.

## 15. Writers y audit futuro

El sistema reconoce sospecha razonable sobre la calidad de subagentes writers frente a agentes read-only.

No se elimina `sdd-artifact-writer` ni `sdd-phase-worker` sin evidencia, pero tampoco se amplia su confianza.

Reglas hasta audit:

- mantener reglas actuales;
- no ampliar permisos;
- no ampliar superficies;
- no usar writers para cambios core/contractuales sensibles sin autorizacion explicita;
- exigir ownership acotado si una skill los autoriza;
- impedir que el audit pendiente se lea como aprobacion implicita.

Writer audit futuro:

- usa rubric simple `0-3` o `pass/warn/fail`;
- produce evidencia comparativa, no solo opinion narrativa;
- evalua scope, trazabilidad, decision gates, validaciones, rework y respeto de artifacts;
- bloquea cualquier ampliacion futura de permisos o autonomia.

Casos base:

1. artifact simple;
2. artifact con contradiccion;
3. codigo local simple;
4. cambio con validacion;
5. decision gate;
6. drift.

## 16. Non-goals del programa

Este handover consolidado no debe:

- ejecutar la migracion;
- crear `sdd/core` todavia;
- crear `patch.yaml` real todavia;
- modificar skills;
- mover templates;
- crear scripts;
- ejecutar writer audit;
- crear CI;
- validar links;
- editar `AGENTS.md`;
- editar `docs/README.md`;
- reemplazar `definicion.md`, `plan.md` o `tasks.md`;
- decidir por cuenta propia contradicciones bloqueantes entre fuentes;
- convertir el sistema en core completo;
- crear workspace formal de programa;
- hacer rewrite total de skills;
- introducir OpenAI Evals formal;
- crear link checker completo obligatorio;
- ejecutar end-to-end todas las skills;
- crear suite pesada de fixtures.

## 17. Future patch candidates

Future patches explicitos:

- writer audit real;
- CI para `validate-sdd`;
- link checker completo;
- OpenAI Evals o evals formales para writers/skills;
- posible programa workspace formal si `program_id` queda corto;
- consolidacion avanzada de orchestration docs despues de probar micro-core;
- expansion del core si aparece una regla que afecte 3+ skills y no cabe en los 4 docs iniciales;
- refinamiento de fixtures despues de smoke tests conceptuales;
- compatibilidad o adapter de extraccion si `.codex/skills` debe portarse a otro runtime.

## 18. Riesgos y guardrails

Riesgos principales:

- confundir `patch_kind` con `lifecycle`;
- convertir batch en sprint o bolsa abierta de scope;
- split excesivo que mate el valor operativo del batch;
- templates actuando como manual oculto;
- `AGENTS.md` inflado con doctrina SDD duplicada;
- writers ejecutando codigo con autonomia no auditada;
- drift por migracion de paths;
- legacy usado como patron vigente;
- `spec-anchored` cerrado sin promover fuente viva;
- validacion falsa sin distinguir automatico, manual, diferido o no aplicable;
- `sdd/templates/` o `sdd/orchestration/` sobreviviendo como fuente final por inercia.

Guardrails:

- micro-core estricto;
- estructura canonica estricta;
- `patch.yaml` obligatorio para patches nuevos;
- matriz `patch_kind + lifecycle` estricta;
- legacy visible pero no normativo;
- assumptions first-class;
- decisions separadas de tasks;
- blockers no tratados como pendientes simples;
- findings no entran automaticamente al scope;
- `cierre.md` obligatorio;
- validacion operacional, no enterprise;
- script local antes que CI;
- writer audit antes de ampliar confianza.

## 19. Secuencia conceptual sugerida

Secuencia logica de alto nivel para el programa:

1. Crear micro-core y rutas canonicas.
2. Migrar estructura desde `docs/sdd` hacia `sdd`.
3. Separar legacy bajo `sdd/parches/legacy/` y declarar no normatividad.
4. Introducir patch model y `patch.yaml`.
5. Representar la rearquitectura como programa ligero mediante `program_id`.
6. Actualizar skills para type-awareness por `patch.yaml`.
7. Migrar templates primero a `sdd/templates/` y luego a `.codex/skills/*/assets/`.
8. Introducir `sdd-close` y `cierre.md`.
9. Introducir `validate-sdd`, schema y smoke tests conceptuales.
10. Registrar future patches: writer audit real, CI, link checker completo y evals formales.

Esta secuencia no es `plan.md` ni `tasks.md`. El intake formal debera convertirla en patches, planes y fases concretas.

## 20. Criterios de exito conceptuales

El programa sera conceptualmente exitoso si:

1. `docs/` queda claramente separado de `sdd/`.
2. `sdd/core` existe como micro-core portable, no como enciclopedia.
3. `AGENTS.md` gobierna el host y referencia el core sin duplicarlo.
4. Todo patch formal nuevo tiene `patch.yaml`.
5. El sistema distingue correctamente `patch_kind` de `lifecycle`.
6. `batch + spec-anchored` queda prohibido.
7. La rearquitectura se ejecuta como programa ligero con `program_id`.
8. Legacy queda preservado, visible y no normativo.
9. Templates finales viven como assets de skills.
10. Todas las skills SDD son type-aware.
11. Todo patch formal cierra con `cierre.md`.
12. `decision.log` y `cierre.md` tienen responsabilidades distintas.
13. Assumptions, decisions, blockers, findings y tasks no se mezclan.
14. `validate-sdd` automatiza forma sin reemplazar revision manual de intencion.
15. Writers no reciben mas autonomia sin audit real.
16. El sistema puede explicarse y extraerse a otro repo sin arrastrar reglas especificas del portfolio.

## 21. Preguntas bloqueantes detectadas, si existen

No se detectaron contradicciones explicitas y materiales que bloqueen esta consolidacion.

Preguntas no bloqueantes para el intake SDD formal:

- Que patch inicial debe abrir el programa `sdd-portable-core`.
- Que `change_id` y `program_id` exactos usara el primer workspace formal.
- Si la primera ejecucion debe priorizar micro-core o migracion estructural.
- Que documentos actuales de `docs/sdd/orchestration/` entran tal cual en `sdd/orchestration/`.
- Que nivel de validacion minima se exigira para cerrar el primer patch del programa.
