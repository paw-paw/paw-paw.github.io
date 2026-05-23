# Handover: Reconciliacion del sistema SDD portable post-handover

## 1. Proposito del documento

Este handover consolida la reconciliacion decidida despues de auditar la implementacion real del programa SDD portable contra el handover inicial de rearquitectura.

No es `definicion.md`, `plan.md`, `tasks.md`, `patch.yaml` ni `cierre.md`.

Su funcion es servir como input completo para abrir un nuevo flujo SDD formal que implemente, en un solo patch coherente, la arquitectura SDD que ahora debe pasar a ser canonica.

La premisa central de esta reconciliacion es:

```text
El handover original fue una intencion inicial.
La implementacion posterior drifteo.
Algunos drifts maduraron el sistema y deben preservarse.
Otros lo dejaron incompleto o desalineado y deben corregirse.
```

Este handover no pide restaurar literalmente el handover original. Pide convertir en verdad viva la version reconciliada del sistema que resulto de evaluar criticamente el handover, la implementacion actual y las decisiones posteriores.

---

## 2. Clasificacion sugerida para intake

### Change id tentativo

```text
sdd-portable-core-reconciliation
```

### Program id

```text
sdd-portable-core
```

### Patch kind sugerido

```text
spec
```

### Lifecycle sugerido

```text
spec-anchored
```

### Razon de la clasificacion

El cambio no es un batch de limpiezas inconexas. Es una reconciliacion coherente del modelo vivo SDD y modifica fuentes vivas ya existentes:

- gobierno del repo;
- doctrina del core SDD;
- routing y lifecycle;
- skills locales;
- templates/assets;
- schema y tooling de validacion.

Por ello debe tratarse como una `spec` anclada a contratos y superficies vivas existentes.

### Related docs / live sources probables

Esta lista debera confirmarse durante `sdd-intake`, pero el cambio probablemente afecte al menos:

- `README.md`
- `AGENTS.md`
- `docs/README.md`
- `docs/AGENTS.md`
- `sdd/README.md`
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
- `sdd/tools/schemas/patch.schema.json`
- `sdd/tools/validate-sdd.mjs`

---

## 3. Contexto que motiva el cambio

La auditoria del estado actual encontro que gran parte del sistema SDD portable ya existe y funciona:

- `sdd/` opera como raiz SDD;
- `sdd/core/` existe como micro-core;
- `sdd/parches/legacy/` existe y conserva memoria historica;
- `patch.yaml`, schema, fixtures y `validate-sdd` existen;
- `sdd-close` y `cierre.md` existen;
- los templates finales viven hoy como assets de skills;
- los writers estan acotados y ya tuvieron un audit documental.

Sin embargo, la implementacion real no coincide por completo con el handover inicial ni con la arquitectura que ahora se considera mas sana.

Se detectaron, entre otras, estas brechas:

- no existe `sdd-triage`;
- `sdd-intake` actualmente puede operar antes del manifest y hoy incluso evita crearlo;
- el manifest real no incluye `created_at` ni `closed_at`;
- la type-awareness actual es principalmente lectura de `patch.yaml`, no semantica fuerte por tipo;
- `assumptions` no son first-class en todo el lifecycle;
- `README.md` conserva referencias rotas a `sdd/templates/**`;
- `AGENTS.md` no referencia explicitamente `sdd/core`;
- `docs/README.md` y `docs/AGENTS.md` conservan menciones vivas a `docs/sdd`;
- no existe aun un checker de links/rutas markdown internas vivas.

La reconciliacion decidida no busca deshacer todos los drifts. Busca:

- preservar los drifts que simplificaron o maduraron el sistema;
- revertir los drifts que dejaron contratos incompletos, routing ambiguo o documentacion viva desalineada.

---

## 4. Decisiones ya cerradas

### 4.1 Autoridad del handover original

El handover consolidado original pasa a ser:

```text
antecedente historico, no contrato vivo
```

La reconciliacion debe promover como verdad viva la arquitectura decidida ahora, no restaurar automaticamente la intencion inicial.

### 4.2 Arquitectura de entrada al flujo SDD

Debe existir una skill nueva:

```text
sdd-triage
```

Responsabilidad esperada:

- clasificar entrada nueva antes de que exista un patch formal;
- decidir si aplica SDD o no;
- proponer `change-id`;
- clasificar `patch_kind`;
- clasificar `lifecycle`;
- proponer `program_id` cuando aplique;
- detectar necesidad de split;
- detectar preguntas humanas bloqueantes;
- derivar a `sdd-router` si ya existe workspace.

Frontera aprobada:

```text
sdd-triage clasifica entrada nueva.
sdd-intake formaliza un patch ya clasificado.
sdd-router diagnostica workspaces existentes.
```

`sdd-triage` debe poder devolver explicitamente:

```text
no SDD
```

cuando el cambio sea pequeno, local, reversible y mejor atendido por el workflow normal de `AGENTS.md`.

### 4.3 Outputs de `sdd-triage`

`sdd-triage` no debe crear artifacts persistentes por defecto.

Debe devolver un reporte estructurado suficiente para que `sdd-intake` pueda formalizar el patch. Si existe material fuente que convenga preservar, triage puede recomendar que intake lo conserve luego como `handover.md`.

### 4.4 Momento exacto de creacion de `patch.yaml`

La decision final es:

```text
patch.yaml se crea al inicio de sdd-intake,
usando la clasificacion aprobada por sdd-triage.
```

Interpretacion:

- antes de `sdd-intake` puede existir exploracion o triage sin manifest;
- desde que empieza `sdd-intake`, el cambio ya nace como patch formal;
- `created_at` registra la fecha de nacimiento formal del patch;
- ningun patch formal nuevo debe avanzar a artifacts posteriores sin manifest.

### 4.5 Contrato reconciliado de `patch.yaml`

El manifest debe seguir siendo liviano.

Debe conservar:

- `schema_version`
- `change_id`
- `program_id`
- `patch_kind`
- `lifecycle`
- `status`
- `related_docs`

Debe anadir:

- `created_at`
- `closed_at`

No se incorporan como campos requeridos del contrato vivo:

- `updated_at`
- `related_skills`

Semantica aprobada:

```text
created_at = fecha en que inicia sdd-intake y nace el patch formal
closed_at  = fecha en que sdd-close marca status: closed
```

`related_docs` debe seguir presente siempre como array:

- puede ser `[]` en `spec-first`;
- debe ser no vacio en `spec-anchored`.

### 4.6 Type-awareness fuerte

La type-awareness debe pasar de lectura pasiva del manifest a semantica real por tipo.

La arquitectura aprobada es hibrida:

#### Templates separados por tipo

- `definicion`:
  - variant `spec`
  - variant `batch`
- `plan`:
  - variant `spec`
  - variant `batch`
- `tasks`:
  - variant `spec`
  - variant `batch`

#### Templates compartidos con ramas obligatorias por tipo

- `backlog/faseN.md`
- `cierre.md`

#### Template compartido sin bifurcacion relevante

- `decision.log`

Las skills deben seguir siendo una sola familia comun, pero deben:

- seleccionar el asset correcto cuando corresponda;
- aplicar stop conditions distintas cuando corresponda;
- producir artifactos semanticamente distintos cuando el patch sea `spec` o `batch`.

### 4.7 Contrato minimo de `batch`

El contrato minimo aprobado para `batch` es:

- lista cerrada de items;
- criterio global de cierre;
- criterio de cierre por item;
- ausencia de dependencias internas complejas que conviertan el batch en falsa spec.

No se vuelve requisito minimo universal:

- una razon explicita de agrupacion;
- validacion por item en todos los casos.

No se introduce limite numerico fijo contractual.

Regla de split aprobada:

```text
triage debe recomendar split cuando el batch pierda legibilidad,
mezcle lifecycles incompatibles o presente dependencias internas complejas.
```

### 4.8 Assumptions first-class

`assumptions` deben ser first-class en:

- `definicion.md`
- `plan.md`
- `backlog/faseN.md`
- `cierre.md`

Regla aprobada:

```text
Si no hay assumptions criticas, usar:
No critical assumptions.
```

No deben ser decorativas. Readiness y cierre deben confirmar que las assumptions relevantes quedaron:

- resueltas;
- aceptadas explicitamente;
- o escaladas como decision / blocker.

### 4.9 Politica final sobre `docs/sdd`

`docs/sdd` debe salir de la documentacion viva.

La arquitectura final no debe seguir explicandose por su antigua migracion. Las menciones vivas a `docs/sdd` deben retirarse de onboarding, mapas y reglas operativas ordinarias.

La prohibicion de reintroducir `docs/sdd` debe quedar en:

- tooling;
- tests.

No en narrativa viva de onboarding.

### 4.10 Link checker interno

Debe implementarse ahora un chequeo automatico de links/rutas markdown internas vivas.

Alcance aprobado:

- validar enlaces relativos entre archivos markdown;
- validar rutas internas referenciadas dentro de:
  - `docs/`
  - `sdd/` no legacy
  - `.codex/skills/`
- excluir:
  - URLs externas;
  - `sdd/parches/legacy/**`;
  - artifacts cerrados que no sean fuente viva declarada.

El objetivo es proteger superficies vivas sin convertir memoria historica en deuda activa.

---

## 5. Drifts que deben preservarse

La implementacion no debe intentar revertir estos drifts:

1. El handover inicial ya no gobierna como contrato vivo.
2. El manifest debe mantenerse liviano; no reintroducir `updated_at` ni `related_skills`.
3. No debe recrearse `sdd/templates/`.
4. No debe crearse un workspace formal de programa para reemplazar `program_id`.
5. No debe introducirse un limite numerico fijo para batches.
6. No deben separarse skills completas por tipo; la bifurcacion vive en assets y semantica, no en duplicar toda la familia de skills.
7. La memoria historica bajo `sdd/parches/legacy/**` debe preservarse como historia, no normalizarse retroactivamente.

---

## 6. Drifts que deben corregirse

La implementacion debe corregir como minimo:

1. Falta de `sdd-triage`.
2. Frontera actual ambigua entre clasificacion inicial e intake.
3. Semantica actual de intake que permite avanzar sin manifest.
4. Manifest sin `created_at` / `closed_at`.
5. Type-awareness debil para `spec` vs `batch`.
6. Falta de assumptions first-class en templates y gates previos al cierre.
7. `README.md` con referencias rotas a `sdd/templates/**`.
8. Falta de referencia explicita a `sdd/core` en `AGENTS.md`.
9. Menciones vivas a `docs/sdd` en documentacion de onboarding / gobierno que ya no deben operar como verdad viva.
10. Falta de link checker interno para markdown/rutas vivas.

---

## 7. Alcance esperado del patch

### 7.1 Gobierno y documentacion viva

Actualizar la documentacion viva para reflejar la arquitectura reconciliada:

- root `README.md`;
- `AGENTS.md`;
- `docs/README.md`;
- `docs/AGENTS.md`;
- `sdd/README.md`;
- `sdd/core/**`;
- `sdd/orchestration/**` cuando haga falta para routing y state machine.

### 7.2 Skills SDD

Crear:

- `.codex/skills/sdd-triage/SKILL.md`

Actualizar como minimo:

- `sdd-intake`;
- `sdd-router`;
- `sdd-plan`;
- `sdd-tasks`;
- `sdd-phase-backlog`;
- `sdd-execute-phase`;
- `sdd-sync-drift`;
- `sdd-close`.

### 7.3 Assets / templates

Separar assets por tipo para:

- `definicion`;
- `plan`;
- `tasks`.

Mantener assets compartidos con ramas por tipo para:

- `backlog`;
- `cierre`.

Mantener `decision.log` compartido.

Agregar secciones y gates de assumptions donde corresponda.

### 7.4 Tooling y tests

Actualizar:

- `sdd/tools/schemas/patch.schema.json`;
- `sdd/tools/validate-sdd.mjs`;
- fixtures SDD existentes;
- tests o fixtures nuevos requeridos por:
  - `created_at`;
  - `closed_at`;
  - frontera triage -> intake;
  - contrato de `batch`;
  - link checker interno;
  - ausencia de `docs/sdd` como ruta viva.

### 7.5 Cierre del propio patch

Este cambio debe ejecutarse como flujo SDD completo y cerrar con:

- `patch.yaml`;
- `handover.md`;
- `definicion.md`;
- `plan.md`;
- `tasks.md`;
- `backlog/faseN.md`;
- `decision.log`, si aplica;
- `cierre.md`.

---

## 8. No objetivos

Este patch no debe:

- reabrir la migracion historica desde `docs/sdd` hacia `sdd/`;
- reescribir masivamente `sdd/parches/legacy/**`;
- restaurar literalmente el handover inicial;
- recrear `sdd/templates/`;
- introducir un core enciclopedico nuevo fuera del micro-core ya aprobado;
- crear skills separadas completas para `spec` y `batch`;
- introducir un workspace formal de programa;
- anadir `updated_at` o `related_skills` al manifest;
- imponer un limite numerico fijo de items por batch;
- convertir el link checker en crawler de URLs externas;
- mezclar este trabajo con cambios de runtime Astro, UI publica, routing publico, SEO del portfolio o contenido visible que no sean necesarios para validar el propio sistema SDD.

---

## 9. Criterios de exito

El patch se considera exitoso si al cierre:

1. existe `sdd-triage` y su frontera con `sdd-intake` y `sdd-router` queda explicita;
2. `patch.yaml` nace al inicio de `sdd-intake`;
3. el schema y el validador reconocen `created_at` y `closed_at` con la semantica aprobada;
4. `definicion`, `plan` y `tasks` tienen variantes reales `spec` / `batch`;
5. `backlog` y `cierre` mantienen templates compartidos con ramas obligatorias por tipo;
6. `decision.log` sigue compartido;
7. los batches tienen lista cerrada, cierre global, cierre por item y guardrail de split por complejidad;
8. assumptions son first-class y afectan readiness/cierre;
9. la documentacion viva deja de depender de `docs/sdd` como cicatriz narrativa;
10. `README.md` y `AGENTS.md` quedan alineados con la arquitectura viva;
11. existe validacion automatica de links/rutas markdown internas vivas con exclusiones explicitas;
12. las validaciones SDD y fixtures pasan;
13. el cierre del patch deja reconciliadas las fuentes vivas y clasifica cualquier residual.

---

## 10. Riesgos a vigilar

### 10.1 `sdd-triage` se vuelve pseudo-intake

- Riesgo: que triage empiece a redactar definicion, alcance o mini-specs.
- Mitigacion esperada: mantenerlo como clasificador read-only sin artifacts persistentes por defecto.

### 10.2 Duplicacion excesiva por type-awareness

- Riesgo: que separar templates derive en duplicacion inutil o drift entre variantes.
- Mitigacion esperada: separar solo `definicion`, `plan` y `tasks`; compartir `backlog`, `cierre` y `decision.log`.

### 10.3 `batch` demasiado permisivo

- Riesgo: que el contrato medio de batch permita agrupaciones opacas.
- Mitigacion esperada: reforzar stop conditions de triage y split por dependencia/complejidad, aunque no se exija razon de agrupacion ni validacion por item universal.

### 10.4 Limpieza documental que borra guardrails utiles

- Riesgo: que retirar menciones vivas a `docs/sdd` quite tambien proteccion contra regresion.
- Mitigacion esperada: mover la defensa a tooling/tests y validarla de forma automatica.

### 10.5 Link checker demasiado amplio

- Riesgo: que el checker convierta legacy historico o URLs externas en deuda activa.
- Mitigacion esperada: scope estricto sobre superficies vivas y exclusiones explicitas.

---

## 11. Decisiones que no deben reabrirse durante intake salvo conflicto nuevo real

1. El handover original ya no es contrato vivo.
2. Debe existir `sdd-triage`.
3. `patch.yaml` nace al inicio de `sdd-intake`.
4. `created_at` y `closed_at` se agregan; `updated_at` y `related_skills` no.
5. La arquitectura de templates sera hibrida:
   - separar `definicion`, `plan`, `tasks`;
   - ramificar `backlog`, `cierre`;
   - compartir `decision.log`.
6. El contrato minimo de batch es el definido en este handover.
7. No habra limite numerico fijo de items por batch.
8. `assumptions` seran first-class y gatearan readiness/cierre.
9. `docs/sdd` saldra de la documentacion viva.
10. El link checker interno entra en este patch.

---

## 12. Preguntas abiertas permitidas para intake / plan

Estas preguntas pueden resolverse durante `sdd-intake` o `sdd-plan` sin reabrir la direccion general:

1. nombres finales exactos de los nuevos assets por tipo;
2. si el link checker vive dentro de `validate-sdd.mjs` o como helper invocado por el validador;
3. que fixtures adicionales son minimos pero suficientes para cubrir la nueva frontera triage -> intake;
4. que documentos de `sdd/orchestration/**` necesitan update directo y cuales pueden quedar sin cambio;
5. si `sdd-triage` necesita asset auxiliar propio o solo `SKILL.md`;
6. si el cierre por item de batch vive solo en artifacts o tambien requiere chequeo automatico minimo.

Estas preguntas son de implementacion o modelado fino. No deben usarse para reabrir las decisiones ya consolidadas.

---

## 13. Secuencia conceptual sugerida

Una secuencia logica posible para el patch completo seria:

1. reconciliar fuentes vivas y doctrina core;
2. introducir `sdd-triage` y redefinir frontera triage -> intake -> router;
3. actualizar `patch.yaml`, schema y lifecycle con `created_at` / `closed_at`;
4. implantar type-awareness fuerte con arquitectura hibrida de assets;
5. convertir assumptions en first-class a traves del lifecycle;
6. retirar drift documental vivo (`README`, `AGENTS`, `docs/sdd`);
7. implementar link checker de superficies vivas;
8. actualizar fixtures, validadores y smoke tests;
9. cerrar el patch con reconciliacion explicita de fuentes vivas.

Esta secuencia es sugerida, no reemplaza `plan.md` ni `tasks.md`.

---

## 14. Resultado esperado para el sistema

Al terminar el patch, el sistema SDD debe poder explicarse asi:

```text
El handover historico inspira.
Triage clasifica.
Intake formaliza.
El manifest identifica.
La spec o el batch gobiernan el cambio segun su tipo.
Las assumptions quedan visibles.
Los contratos vivos sobreviven al cierre.
El tooling protege la forma sin convertir la historia en deuda activa.
```
