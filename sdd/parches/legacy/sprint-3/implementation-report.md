# Reporte tecnico: implementacion del sistema SDD Skills

## Estado del reporte

- Fuente base: handover local `_inbox/handover_sistema_skills_sdd.md`
- Fecha: 2026-04-25
- Tipo: plan tecnico de implementacion
- Alcance: definir como implementar el sistema local de skills SDD en este repo
- No alcance: crear todavia las skills, modificar runtime Astro o ejecutar migraciones de documentos SDD reales

## Decisiones tomadas para este plan

### 1. Estatus de los artefactos SDD

Decision: los artefactos en `docs/sdd/` deben ser **auxiliares operativos bajo `docs/`**.

Implicacion:

- `docs/sdd/<change-id>/` conserva trazabilidad de cambios amplios.
- No redefine contratos superiores como `strategy/portfolio-strategy.md`, `architecture/site-architecture.md` o `content/content-system.md`.
- Si un artefacto SDD contradice documentos contractuales, mandan los documentos contractuales segun `docs/README.md`.
- Si una ejecucion SDD descubre que un contrato debe cambiar, debe proponer o ejecutar una actualizacion documental explicita en el documento contractual correspondiente.

### 2. Alcance de primera implementacion

Decision: implementar el sistema completo de 7 skills en una sola entrega.

Skills a crear:

- `sdd-intake`
- `sdd-plan`
- `sdd-tasks`
- `sdd-phase-backlog`
- `sdd-execute-phase`
- `sdd-sync-drift`
- `astro-pages-verify`

Implicacion:

- La entrega debe ser completa pero contenida.
- Cada skill debe ser minima, enfocada y facil de revisar.
- No se deben introducir scripts, dependencias o automatizaciones complejas en el primer corte salvo necesidad tecnica objetiva.

### 3. Convencion de nombres de artefactos

Decision: usar convencion hibrida:

```text
docs/sdd/<change-id>/
  handover.md
  definicion.md
  plan.md
  tasks.md
  decision.log
  backlog/
    fase1.md
    fase2.md
```

Implicacion:

- `definicion.md` y `faseN.md` preservan el idioma operativo del repo.
- `plan.md`, `tasks.md` y `decision.log` preservan nombres tecnicos simples y compatibles con el handover.
- Las skills deben tratar estos nombres como convencion inicial, no como verdad inmutable de producto.

---

## Objetivo tecnico

Implementar un sistema local de skills que permita operar desarrollo dirigido por especificacion en este portfolio sin convertir el repo en un sistema burocratico.

El sistema debe ayudar a Codex a transformar cambios grandes o ambiguos mediante esta secuencia:

```text
Intake -> Definition -> Plan -> Tasks -> Phase Backlog -> Phase Execution -> Drift Sync -> Repo Verification
```

El sistema debe reforzar estas reglas existentes:

- `AGENTS.md` gobierna.
- `docs/` manda sobre codigo cuando hay conflicto.
- La documentacion debe preceder cambios grandes.
- Las decisiones relevantes deben quedar registradas.
- La ejecucion debe reportar drift entre documentos e implementacion.
- Las validaciones deben usar `npm` y no inventar scripts inexistentes.

---

## Arquitectura propuesta

### Estructura documental

Crear soporte para esta estructura:

```text
docs/sdd/
  <change-id>/
    handover.md
    definicion.md
    plan.md
    tasks.md
    decision.log
    backlog/
      fase1.md
      fase2.md
```

Reglas:

- `docs/sdd/` almacena artefactos auxiliares operativos.
- Cada `<change-id>` debe ser slug estable en kebab-case.
- Cada cambio SDD debe tener al menos `definicion.md` antes de planificar implementacion.
- `decision.log` debe existir cuando el cambio tenga decisiones de scope, contratos, schemas, compatibilidad, validacion o secuencia macro.
- `backlog/` solo debe existir cuando haya fases listas para ejecucion.

### Estructura de skills

Crear las carpetas:

```text
.codex/skills/sdd-intake/SKILL.md
.codex/skills/sdd-plan/SKILL.md
.codex/skills/sdd-tasks/SKILL.md
.codex/skills/sdd-phase-backlog/SKILL.md
.codex/skills/sdd-execute-phase/SKILL.md
.codex/skills/sdd-sync-drift/SKILL.md
.codex/skills/astro-pages-verify/SKILL.md
```

Reglas:

- Cada skill debe seguir la convencion de `skill-creator`.
- Cada `SKILL.md` debe tener frontmatter con `name`, `description`, `license` y metadata minima.
- No crear `README.md`, changelogs ni documentacion auxiliar dentro de cada skill en el primer corte.
- No duplicar `AGENTS.md` dentro de cada skill.
- No crear scripts en el primer corte salvo que una validacion manual repetida demuestre necesidad.
- `.codex/skills/` es la ubicacion publica prevista para skills de Codex especificas del repo.
- Si existe un archivo `.codex` en la raiz, debe reemplazarse por el directorio `.codex/` antes de crear las skills.
- Las skills editoriales existentes deben vivir tambien bajo `.codex/skills/`; no debe recrearse una carpeta `skills/` en la raiz.

### Actualizaciones de registro

Actualizar:

- `AGENTS.md`, seccion `Skills locales del repo`
- `.atl/skill-registry.md`, si se mantiene como registro operativo vigente
- `docs/README.md`, para declarar `docs/sdd/` como carpeta auxiliar operativa

Nota: `.atl/skill-registry.md` hoy dice que se excluyeron `sdd-*` segun una convencion previa de `sdd-init`. Al implementar este sistema, ese registro debe actualizarse o regenerarse para no contradecir la nueva decision.

---

## Contratos y precedencia documental

La implementacion debe actualizar `docs/README.md` para incluir `docs/sdd/` dentro de la organizacion documental:

```text
- `sdd/`: artefactos auxiliares operativos para cambios spec-driven; no sustituyen documentos contractuales.
```

Tambien debe agregar una regla de precedencia:

- Los artefactos SDD son auxiliares operativos.
- Pueden registrar definicion, plan y ejecucion de un cambio.
- No pueden contradecir documentos contractuales.
- Cuando un cambio SDD requiere modificar estrategia, arquitectura, contenido, visual, i18n, SEO o deployment, debe actualizar el documento contractual correspondiente.

No hace falta convertir `docs/sdd/` en un nuevo contrato primario.

---

## Definicion tecnica por skill

### `sdd-intake`

Proposito:

- Convertir un handover, brief o idea amplia en un workspace SDD inicial.

Inputs:

- handover o brief fuente
- nombre o slug del cambio, si existe
- contexto documental relevante

Outputs:

- `docs/sdd/<change-id>/handover.md`
- `docs/sdd/<change-id>/definicion.md`
- `docs/sdd/<change-id>/decision.log`, si hay decisiones iniciales relevantes

Responsabilidades:

- Leer `docs/README.md` y `AGENTS.md`.
- Identificar documentos contractuales que gobiernan el cambio.
- Crear una definicion con objetivo, no objetivos, alcance, fuentes de verdad, riesgos, decisiones abiertas y criterio de cierre.
- No planificar implementacion tecnica todavia.
- No crear tasks ni backlog.

Guardrails:

- Si el input implica cambios grandes de arquitectura, i18n, SEO, deployment o sistema visual sin respaldo documental, marcarlo como decision abierta.
- Si el cambio es pequeno y no amerita SDD, recomendar no usar el pipeline completo.

### `sdd-plan`

Proposito:

- Traducir una `definicion.md` en un plan tecnico brownfield del repo.

Inputs:

- `docs/sdd/<change-id>/definicion.md`
- `decision.log`, si existe
- documentos contractuales aplicables
- estado actual del codigo relevante

Outputs:

- `docs/sdd/<change-id>/plan.md`
- entradas nuevas en `decision.log`, si aparecen decisiones relevantes

Responsabilidades:

- Identificar zonas afectadas: docs, skills, src, tests, config, assets, i18n, SEO.
- Separar cambios documentales, cambios de implementacion y validaciones.
- Definir bloques de implementacion.
- Registrar riesgos, dependencias y decisiones bloqueantes.
- No generar checklist detallado ni ejecutar codigo.

Guardrails:

- No inventar convenciones nuevas sin registrarlas.
- Si hay conflicto entre definicion y docs contractuales, detener y pedir sincronizacion.

### `sdd-tasks`

Proposito:

- Convertir `plan.md` en fases macro y tareas ejecutables.

Inputs:

- `definicion.md`
- `plan.md`
- `decision.log`

Outputs:

- `docs/sdd/<change-id>/tasks.md`

Responsabilidades:

- Organizar fases coherentes.
- Definir tareas concretas, acotadas y trazables.
- Asociar cada fase a precondiciones, archivos probables y validaciones.
- Distinguir tareas obligatorias, opcionales y diferidas.
- Preparar insumos para `sdd-phase-backlog`.

Guardrails:

- No bajar a microchecklist por archivo todavia.
- No reabrir decisiones ya tomadas salvo que haya drift claro.

### `sdd-phase-backlog`

Proposito:

- Convertir una fase de `tasks.md` en un checklist operativo vivo.

Inputs:

- `tasks.md`
- numero o nombre de fase
- `plan.md`
- `decision.log`

Outputs:

- `docs/sdd/<change-id>/backlog/faseN.md`

Responsabilidades:

- Crear checklist ejecutable para una fase especifica.
- Incluir precondiciones, alcance, no alcance, tareas, validaciones, blockers, hallazgos y criterio de cierre.
- Preparar la superficie para que `sdd-execute-phase` actualice estados durante trabajo real.

Guardrails:

- No implementar.
- No cambiar la secuencia macro sin registrar decision.
- No crear backlog para fases que todavia no tienen suficiente definicion.

### `sdd-execute-phase`

Proposito:

- Ejecutar una fase usando `backlog/faseN.md` como registro vivo.

Inputs:

- `backlog/faseN.md`
- `tasks.md`
- `plan.md`
- documentos y codigo relevantes

Outputs:

- cambios documentales o de codigo segun la fase
- `backlog/faseN.md` actualizado
- `decision.log` actualizado cuando corresponda

Responsabilidades:

- Leer contexto antes de editar.
- Actualizar checklist durante ejecucion.
- Registrar hallazgos, blockers y ajustes.
- Detenerse ante decisiones con impacto en contratos, schemas, compatibilidad, validacion o secuencia macro.
- Ejecutar validaciones relevantes segun `AGENTS.md`.

Guardrails:

- No marcar una fase como completa si la validacion relevante fallo.
- No ocultar drift documental.
- No ampliar scope por conveniencia durante ejecucion.

### `sdd-sync-drift`

Proposito:

- Resincronizar artefactos SDD cuando la ejecucion revela drift.

Inputs:

- `definicion.md`
- `plan.md`
- `tasks.md`
- `decision.log`
- backlogs ejecutados
- estado actual del codigo/documentos

Outputs:

- propuesta o cambios en artefactos SDD
- entradas en `decision.log`
- lista de documentos contractuales que deben actualizarse, si aplica

Responsabilidades:

- Comparar intencion original, plan, tareas y resultado real.
- Identificar drift aceptable, drift que requiere decision y drift que requiere update documental.
- Ajustar artefactos auxiliares para que reflejen lo aprendido.
- No usar drift sync como excusa para redisenar todo.

Guardrails:

- No modificar documentos contractuales sin declarar por que.
- No convertir hallazgos menores en reapertura de alcance.

### `astro-pages-verify`

Proposito:

- Verificar que un cambio sigue funcionando dentro de este portfolio Astro y GitHub Pages.

Inputs:

- resumen del cambio
- archivos tocados
- rutas afectadas
- scripts disponibles en `package.json`

Outputs:

- reporte de validacion
- lista de checks ejecutados
- riesgos residuales y revision manual pendiente

Responsabilidades:

- Leer `package.json`.
- Ejecutar validaciones relevantes con `npm`.
- Reportar si falta `npm run lint` u otro script esperado.
- Para cambios estructurales, correr `npm run build`.
- Para cambios cubiertos por tests, correr `npm test`.
- Para cambios visuales o contenido, declarar revision visual/manual pendiente.
- Revisar rutas, metadata, canonical/alternates y assets cuando el cambio toque superficies publicas.

Guardrails:

- No inventar comandos.
- No cambiar codigo para hacer pasar checks.
- No publicar ni hacer deploy.

---

## Templates iniciales de artefactos

### `definicion.md`

Estructura sugerida:

```md
# Definicion: <change title>

## Estado

- Change id:
- Estado:
- Fuente:

## Objetivo

## No objetivos

## Fuentes de verdad aplicables

## Alcance

## Fuera de alcance

## Decisiones conocidas

## Decisiones abiertas

## Riesgos

## Criterio de cierre
```

### `plan.md`

Estructura sugerida:

```md
# Plan: <change title>

## Estado

## Fuente de verdad aplicable

## Lectura brownfield

## Zonas afectadas

## Bloques de implementacion

## Datos, schemas y contratos

## Validaciones

## Riesgos y mitigaciones

## Decisiones que requieren humano

## Criterio de cierre tecnico
```

### `tasks.md`

Estructura sugerida:

```md
# Tasks: <change title>

## Estado

## Fases

### Fase 1 - <nombre>

- Objetivo:
- Precondiciones:
- Tareas:
- Validaciones:
- Criterio de cierre:

## Dependencias entre fases

## Tareas diferidas
```

### `backlog/faseN.md`

Estructura sugerida:

```md
# Backlog fase N: <nombre>

## Estado

- Fase:
- Estado:

## Precondiciones

## Alcance

## No alcance

## Checklist

- [ ] ...

## Hallazgos durante ejecucion

## Blockers

## Decisiones tomadas

## Validaciones

## Cierre
```

### `decision.log`

Formato sugerido:

```md
## YYYY-MM-DD - <decision breve>

- Estado:
- Tipo:
- Contexto:
- Decision:
- Razon:
- Impacto:
- Documentos afectados:
- Implementacion afectada:
```

---

## Orden de implementacion recomendado

Aunque el alcance sea implementar las 7 skills en una entrega, conviene hacerlo en este orden:

1. Actualizar contratos operativos:
   - `docs/README.md`
   - `AGENTS.md`
2. Crear estructura base de skills:
   - 7 carpetas bajo `.codex/skills/`
   - 7 archivos `SKILL.md`
3. Implementar skills centrales maduras:
   - `sdd-plan`
   - `sdd-tasks`
   - `sdd-phase-backlog`
   - `sdd-execute-phase`
4. Implementar skills de borde:
   - `sdd-intake`
   - `sdd-sync-drift`
   - `astro-pages-verify`
5. Actualizar registro:
   - `.atl/skill-registry.md`
6. Validar:
   - revision manual de cada `SKILL.md`
   - `npm run build` si se modifica documentacion o estructura que el sitio consume
   - no correr `npm test` si solo cambian docs/skills y no hay tests relevantes para skills

---

## Detalle de archivos a tocar en la implementacion

### Crear

- `.codex/skills/sdd-intake/SKILL.md`
- `.codex/skills/sdd-plan/SKILL.md`
- `.codex/skills/sdd-tasks/SKILL.md`
- `.codex/skills/sdd-phase-backlog/SKILL.md`
- `.codex/skills/sdd-execute-phase/SKILL.md`
- `.codex/skills/sdd-sync-drift/SKILL.md`
- `.codex/skills/astro-pages-verify/SKILL.md`

### Actualizar

- `docs/README.md`
- `AGENTS.md`
- `.atl/skill-registry.md`

### No tocar en primera implementacion

- `src/`
- `package.json`
- `package-lock.json`
- `.github/`
- `docs/strategy/`
- `docs/architecture/`
- `docs/content/`
- `docs/visual/`
- `docs/delivery/`
- `skills/`, no debe recrearse como destino de skills locales

Excepcion: si durante implementacion se decide que `docs/sdd/` debe aparecer tambien en un contrato especifico, debe registrarse como decision y no hacerlo silenciosamente.

---

## Validaciones de implementacion

Validaciones esperadas:

- Verificar que cada `SKILL.md` tiene frontmatter valido:
  - `name`
  - `description`
  - `license`
  - `metadata.author`
  - `metadata.version`
- Verificar que cada description tiene trigger claro y no se solapa demasiado con otra skill.
- Verificar que cada skill tiene:
  - When to Use
  - Inputs
  - Critical Patterns
  - Workflow
  - Outputs o Report
  - Guardrails
- Verificar que `AGENTS.md` lista las 7 nuevas skills.
- Verificar que `docs/README.md` no convierte `docs/sdd/` en contrato superior.
- Verificar que `.atl/skill-registry.md` ya no dice que `sdd-*` queda excluido si esas skills pasan a ser activas.

Comandos:

- Para cambios solo documentales/skills: no hay test automatico especifico.
- Si se modifica cualquier superficie consumida por Astro o rutas del sitio: `npm run build`.
- Si se agrega algun test o cambia runtime: `npm test` y `npm run build`.

---

## Riesgos

### Riesgo 1: solapamiento entre skills

Mitigacion:

- `sdd-intake` solo crea definicion inicial.
- `sdd-plan` solo planifica.
- `sdd-tasks` solo fasea tareas macro.
- `sdd-phase-backlog` solo crea checklist de una fase.
- `sdd-execute-phase` solo ejecuta una fase existente.
- `sdd-sync-drift` solo resincroniza cuando hay drift.
- `astro-pages-verify` solo valida el sitio.

### Riesgo 2: exceso de ceremonia

Mitigacion:

- Cada skill debe decir que no todo cambio requiere SDD completo.
- Cambios pequenos pueden seguir usando el workflow normal de `AGENTS.md`.
- No crear scripts ni templates duplicados hasta que haya friccion real.

### Riesgo 3: conflicto con precedencia documental

Mitigacion:

- `docs/sdd/` debe declararse auxiliar.
- Los contratos del portfolio siguen en sus carpetas actuales.
- Drift que afecte contratos debe apuntar al documento contractual correcto.

### Riesgo 4: registros desactualizados

Mitigacion:

- Actualizar `AGENTS.md` y `.atl/skill-registry.md` en la misma entrega que crea las skills.
- Evitar referencias a skills inexistentes o excluidas.

### Riesgo 5: `sdd-execute-phase` demasiado amplio

Mitigacion:

- Reforzar que solo ejecuta una fase ya definida.
- Debe detenerse ante decisiones de scope o contrato.
- Debe actualizar backlog durante ejecucion.

---

## Criterio de cierre de la implementacion

La implementacion del sistema esta completa cuando:

- existen las 7 skills bajo `.codex/skills/`
- `AGENTS.md` lista las 7 skills
- `docs/README.md` reconoce `docs/sdd/` como carpeta auxiliar operativa
- `.atl/skill-registry.md` no contradice la existencia de skills `sdd-*`
- cada skill tiene responsabilidad unica y trigger claro
- ninguna skill duplica `AGENTS.md`
- no se agregaron dependencias nuevas
- no se tocaron superficies runtime innecesarias
- queda reportado que los artefactos SDD no sustituyen contratos documentales

---

## Recomendacion final

Implementar el sistema completo en una sola entrega, pero mantenerlo deliberadamente liviano:

- 7 skills, cada una con `SKILL.md` conciso.
- Cero scripts iniciales.
- Cero dependencias nuevas.
- `docs/sdd/` como soporte auxiliar, no como nueva capa contractual superior.
- Templates descritos dentro de las skills o generados por la propia instruccion, no como archivos extra hasta que haya uso repetido.

La primera version debe priorizar claridad de responsabilidad y buen encaje con `AGENTS.md`. La automatizacion puede venir despues si el uso real demuestra friccion repetida.
