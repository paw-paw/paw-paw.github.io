# AGENTS.md

## 1) Propósito del repo

Este repo existe para construir y mantener mi portfolio público en Astro a partir de un template base.

### Objetivo principal
- Conseguir empleo y desarrollar una marca personal híbrida mediante un sitio público coherente, profesional y mantenible.

### No-objetivos
- No usar este repo como sandbox de experimentación sin especificación previa.
- No introducir features o rediseños grandes sin respaldo documental en `docs/`.
- No resolver aquí problemas ajenos al portfolio público.

---

## 2) Fuentes de verdad

Si hay conflicto entre documentación y código, manda la documentación.

### Precedencia
1. `docs/README.md`
2. documentos contractuales en `docs/`
3. `AGENTS.md`
4. estado actual del código
5. comentarios inline

### Regla
- `docs/` es contractual.
- No conviertas una decisión implícita en código en una “nueva verdad”.
- Si falta especificación para una decisión importante, señálalo. No la inventes como definitiva.

### Archivos derivados
Si existen archivos generados o derivados, no los uses como fuente de verdad principal.

### Fuentes externas temporales
- `temp/` puede contener fuentes externas crudas de trabajo.
- `temp/truth/` es una fuente upstream auxiliar, no contractual.
- No usar `temp/truth/` como fuente directa de runtime ni como sustituto de `docs/`.
- Si un schema externo entra en conflicto con la documentación contractual, manda `docs/`.
- Metadatos del sistema operativo como `*.Zone.Identifier` no forman parte de la fuente útil y deben ignorarse.

---

## 3) Límites operativos

### Siempre
- Leer primero los archivos relevantes antes de editar.
- Proponer siempre un mini plan antes de hacer cambios.
- Mantener cambios pequeños, claros y fáciles de revisar.
- Mantener consistencia entre contenido, navegación, metadata y estructura.
- Si detectas desalineación entre `docs/` y código, reportarla explícitamente.
- Si el cambio modifica comportamiento visible y no hubo actualización previa de docs, flaggear la desalineación y exigir sincronización.

### Preguntar antes
- Añadir dependencias nuevas.
- Hacer cambios grandes de estructura o arquitectura.
- Cambiar routing, i18n, SEO estructural, deployment o dominio.
- Eliminar páginas, componentes, assets o secciones existentes.
- Introducir una convención nueva no documentada.
- Conectar una fuente externa o un schema externo directamente a `src/` o al runtime.

### Nunca
- No sobrescribir decisiones documentadas por criterio propio.
- No hacer cambios destructivos de git.
- No borrar checks, validaciones o scripts para “hacer pasar” una tarea.
- No dejar placeholders silenciosos como solución final.
- No mezclar refactor amplio, rediseño amplio y cambio masivo de contenido en una sola entrega sin necesidad clara.

### Sugerir, no ejecutar
- Si detectas componentes, páginas o assets posiblemente muertos, sugiérelo en el reporte final. No los elimines automáticamente.

---

## 4) Workflow esperado

Para cada tarea:

1. Leer contexto, docs y archivos relevantes.
2. Identificar qué documento manda.
3. Proponer un mini plan breve.
4. Implementar el cambio mínimo correcto.
5. Ejecutar validaciones relevantes si existen.
6. Entregar reporte final con:
   - resultado
   - archivos tocados
   - validaciones ejecutadas
   - supuestos
   - desalineaciones docs ↔ código
   - pendientes
   - riesgos

---

## 5) Validación

Usa `npm`.

### Regla general
- No inventes comandos ni resultados.
- Si el repo todavía no tiene scripts, dilo explícitamente.
- Corre solo las validaciones relevantes al alcance del cambio.

### Criterio esperado
- cambios estructurales: correr `npm run build`
- cambios de código o configuración menor: correr validaciones disponibles si aplican
- cambios puramente visuales o de contenido: reportar que la validación principal pendiente es revisión visual/manual

### Scripts esperados a futuro
- `npm run dev`
- `npm run build`
- `npm run preview`
- `npm run lint`

Si alguno no existe, repórtalo; no lo asumas.

---

## 6) Criterios de completitud

Una tarea no está completa si:

- contradice documentación vigente
- requiere una decisión grande no documentada
- rompe consistencia entre secciones, navegación, idioma o metadata
- modifica comportamiento visible sin flaggear desalineación documental
- omite validaciones relevantes disponibles
- deja supuestos importantes escondidos en el código

---

## 7) Convenciones de implementación

### Contenido
- No escribir copy “definitivo” sin revisar antes la doc estratégica correspondiente.
- Mantener coherencia entre hero, navegación, secciones, CTA y footer.
- Si una sección cambia de propósito, actualizar también labels, anchors y metadata relacionada.

### UI
- Reutilizar componentes existentes antes de crear nuevos.
- Evitar variantes visuales innecesarias.
- Mantener consistencia con el sistema visual documentado.

### Estructura
- Preferir nombres explícitos y composición simple.
- Evitar hardcodear contenido que debería vivir en datos o archivos editables.
- No crear abstracciones prematuras por cambios pequeños.
- No adaptar el portfolio al schema de una fuente externa; adaptar la fuente externa al modelo definido por el portfolio.

---

## 8) Estructura del repo

Ajustar esta sección cuando la estructura real quede definida.

- `src/pages/`: rutas y páginas
- `src/components/`: componentes y secciones
- `src/layouts/`: layouts compartidos
- `src/assets/`: imágenes y branding
- `src/i18n/`: contenido por idioma
- `src/utils/`: utilidades
- `public/`: archivos públicos estáticos
- `docs/`: especificaciones contractuales
- `sdd/parches/`: espacio contractual de trabajo para cambios SDD en cualquier estado; agrupa handovers, definiciones, planes, tasks, backlogs y decisiones sin sustituir documentos contractuales
- `sdd/core/`: micro-core metodológico portable del sistema SDD; auxilia doctrina compartida sin sustituir `docs/`
- `sdd/`: artefactos auxiliares operativos transversales, orquestación y tooling para cambios spec-driven; no sustituye documentos contractuales
- `.codex/config.toml`: configuración local de orquestación Codex para limitar agentes, profundidad y tiempo de ejecución
- `.codex/agents/`: perfiles locales de subagentes Codex, read-only/advisory por defecto, con dos writers controlados bajo autorización explícita de skills SDD
- `.codex/skills/`: skills locales de Codex para workflows editoriales y operativos
- `temp/`: fuentes externas crudas y staging no contractual

---

## 9) Reglas para documentación

El flujo ideal es:
1. cambia la documentación
2. cambia la implementación

Si eso no ocurre, el agente debe:
- flaggear la desalineación
- indicar qué documento necesita actualización
- evitar presentar el cambio como totalmente cerrado si la sincronización documental no ocurrió

Actualizar `docs/` cuando cambie cualquiera de estas cosas:
- estrategia del portfolio
- arquitectura de secciones
- modelo de contenido
- rol o transformación de una fuente externa como `temp/truth/`
- sistema visual
- idiomas soportados
- SEO estructural
- deployment

No usar el código como único lugar donde vive una decisión de producto.

---

## 10) Guías específicas por carpeta

Si existe un `AGENTS.md` más cercano, sus instrucciones refinan este archivo para ese contexto.

Este archivo raíz define gobierno general del repo.

---

## 11) Skills locales del repo

Estas skills viven en `.codex/skills/{skill-name}/SKILL.md` y deben seguir la convención de `skill-creator`.

| Skill | Propósito | Ruta |
| --- | --- | --- |
| `blog-new` | Crear drafts de `blog_post` con frontmatter válido en `src/content/blog/`. | `.codex/skills/blog-new/SKILL.md` |
| `blog-edit` | Editar `blog_post` existente dentro del alcance explícitamente pedido. | `.codex/skills/blog-edit/SKILL.md` |
| `blog-feature` | Marcar como featured un `blog_post` publicado, manteniendo unicidad por locale. | `.codex/skills/blog-feature/SKILL.md` |
| `blog-unpublish` | Retirar de publicación un `blog_post` cambiándolo a draft y limpiando `featured`. | `.codex/skills/blog-unpublish/SKILL.md` |
| `blog-preflight` | Verificar si un `blog_post` está listo para publicación con checks editoriales y del repo. | `.codex/skills/blog-preflight/SKILL.md` |
| `sdd-triage` | Clasificar una entrada nueva antes de abrir un patch formal y derivar a intake o workflow normal. | `.codex/skills/sdd-triage/SKILL.md` |
| `sdd-intake` | Crear un workspace SDD inicial desde un handover, brief o idea amplia sin planificar implementación. | `.codex/skills/sdd-intake/SKILL.md` |
| `sdd-router` | Diagnosticar el estado de un cambio SDD y recomendar la siguiente skill o workflow correcto sin ejecutar cambios. | `.codex/skills/sdd-router/SKILL.md` |
| `sdd-plan` | Convertir una definición SDD en un plan técnico brownfield sin generar tareas ni implementar. | `.codex/skills/sdd-plan/SKILL.md` |
| `sdd-tasks` | Convertir un plan SDD en fases macro y tareas ejecutables sin bajar a checklist operativo. | `.codex/skills/sdd-tasks/SKILL.md` |
| `sdd-close` | Cerrar formalmente un patch SDD completo con reconciliación, validaciones y riesgos residuales. | `.codex/skills/sdd-close/SKILL.md` |
| `sdd-phase-backlog` | Convertir una fase SDD aprobada en un backlog vivo para ejecución controlada. | `.codex/skills/sdd-phase-backlog/SKILL.md` |
| `sdd-execute-phase` | Ejecutar una fase SDD existente desde su backlog vivo, registrando hallazgos y validaciones. | `.codex/skills/sdd-execute-phase/SKILL.md` |
| `sdd-sync-drift` | Resincronizar artefactos SDD cuando la ejecución revela drift entre plan, docs y realidad. | `.codex/skills/sdd-sync-drift/SKILL.md` |
| `astro-pages-verify` | Verificar cambios del portfolio Astro/GitHub Pages usando scripts reales de `package.json`. | `.codex/skills/astro-pages-verify/SKILL.md` |

---

## 12) Orquestación local de Codex

La orquestación local de Codex vive bajo `.codex/` y existe para apoyar trabajos documentados, especialmente flujos SDD. No reemplaza la precedencia documental de `docs/README.md` ni las reglas operativas de este archivo.

### Configuración

`.codex/config.toml` define límites de ejecución para subagentes:

- `agents.max_threads`: número máximo de trabajos paralelos permitidos.
- `agents.max_depth`: profundidad máxima de delegación. Debe mantenerse en `1` salvo decisión documentada.
- `agents.job_max_runtime_seconds`: tiempo máximo conservador para trabajos delegados.

### Agentes locales

Los perfiles en `.codex/agents/*.toml` deben ser perfiles acotados. Por defecto son read-only/advisory, salvo writers controlados autorizados de forma explícita por una skill SDD. El agente principal mantiene la responsabilidad de decidir, integrar, validar y reportar.

| Agente | Propósito | Ruta |
| --- | --- | --- |
| `astro-verifier` | Revisión read-only de build, rutas, contenido renderizado, metadata, SEO, assets y scripts npm del portfolio Astro/GitHub Pages. | `.codex/agents/astro-verifier.toml` |
| `sdd-docs-checker` | Revisión read-only de `AGENTS.md`, contratos en `docs/`, artefactos SDD, documentación faltante y riesgo de drift docs-código. | `.codex/agents/sdd-docs-checker.toml` |
| `sdd-drift-reviewer` | Revisión read-only de drift entre `definicion.md`, `plan.md`, `tasks.md`, backlogs, `decision.log` y estado real del repo. | `.codex/agents/sdd-drift-reviewer.toml` |
| `sdd-repo-mapper` | Mapeo read-only de archivos, rutas, componentes, configs, comandos y caminos de ejecución relevantes para una tarea SDD. | `.codex/agents/sdd-repo-mapper.toml` |
| `sdd-risk-reviewer` | Revisión read-only de riesgos, regresiones, scope creep, drift contractual y decisiones que requieren escalación. | `.codex/agents/sdd-risk-reviewer.toml` |
| `sdd-test-reviewer` | Revisión read-only de scripts npm, validaciones requeridas, checks opcionales y revisión manual necesaria por fase. | `.codex/agents/sdd-test-reviewer.toml` |
| `sdd-artifact-writer` | Writer controlado para redactar o actualizar un único artefacto SDD asignado bajo `sdd/parches/<change-id>/`. | `.codex/agents/sdd-artifact-writer.toml` |
| `sdd-phase-worker` | Worker controlado para ejecutar una sola fase SDD aprobada y, si la skill lo autoriza, actualizar su backlog vivo. | `.codex/agents/sdd-phase-worker.toml` |

### Reglas

- No usar subagentes para saltarse lectura de docs, mini plan, validaciones o reporte final.
- No convertir `.codex/agents/` en una fuente de verdad contractual.
- No añadir agentes nuevos sin una necesidad operativa clara y documentada.
- No usar writers por defecto; solo cuando una skill SDD lo autoriza explícitamente y con ownership acotado.
- Usar los modelos definidos en `.codex/agents/*.toml` como defaults operativos; escalar modelo o reasoning solo según `sdd/orchestration/model-policy.md`.
- No usar más de un writer sobre el mismo artefacto o zona de implementación al mismo tiempo.
- Si un agente detecta conflicto entre SDD y documentos contractuales, manda `docs/README.md`.

---

## 13) Ramas y commits

La política de ramas y la convención de commits viven en `docs/governance/branching-workflow.md` y deben respetarse antes de cualquier integración. Ese documento define la separación `main`/`dev`, el uso esperado de Conventional Commits, los `type(scope)` permitidos y qué superficies pueden promoverse a producción.

### Ramas vigentes

- `main`: rama de producción. Debe conservar dominio, deployment, SEO estructural, contenido publicado y runtime público vigentes.
- `dev`: rama de trabajo. Debe nacer desde `main` y conservar el commit operativo base SDD/Codex; cuando no haya trabajo de producto pendiente, solo debe diferir por commits operativos/locales claramente excluibles de `main`.

El commit operativo base esperado en `dev` es:

```text
chore(dev): add local SDD and Codex workflow
```

Ese commit puede contener `.codex/**`, `sdd/**`, gobierno operativo, validaciones SDD y reglas de versionado de decision logs. No debe cambiar la superficie pública del portfolio. Commits operativos posteriores pueden existir en `dev` si siguen la convención `type(scope)`, mantienen una sola superficie y son excluibles de producción.

### Integración

- No mergear `dev` completo hacia `main`.
- Para publicar, llevar a `main` solo commits de producto o documentación pública mediante cherry-pick, PR selectivo o rama de release limpia.
- Excluir siempre el commit operativo base SDD/Codex y los commits operativos locales de integraciones hacia `main`, salvo decisión futura explícita y documentada.

### Separación de commits

- Nunca mezclar en el mismo commit superficie SDD/Codex y superficie pública del portfolio.
- Cambios de producto visible deben acompañarse de documentación contractual cuando aplique.
- Cambios SDD/Codex deben mantenerse fuera de runtime público.
- Tests y validaciones deben acompañar el tipo de cambio que verifican, sin colar cambios de otra superficie.
- Usar Conventional Commits (`type(scope): resumen`) según la tabla vigente en `docs/governance/branching-workflow.md`.

### Ramas legacy

`rebuild-portfolio` y `web-release-from-rebuild` son ramas transitorias del rebuild. Tras validar y publicar `dev`, deben retirarse localmente y del remoto cuando existan.
