# Prompt para Codex: crear documentación de soporte para orquestación SDD

Quiero que generes una carpeta de documentación contractual en:

`docs/sdd/orchestration/`

Esta documentación debe servir como soporte bajo demanda para orquestar cambios SDD en el repo. No debe reemplazar `AGENTS.md`, no debe duplicar el contenido completo de las skills y no debe modificar código fuente.

## Contexto del repo

El repo es un portfolio público en Astro. Según `AGENTS.md`:

- `docs/` es contractual.
- La documentación manda sobre el código si hay conflicto.
- Los cambios grandes no deben implementarse sin respaldo documental.
- Las skills locales viven en `.codex/skills/`.
- El sistema SDD tiene estas skills:
  - `sdd-router`
  - `sdd-intake`
  - `sdd-plan`
  - `sdd-tasks`
  - `sdd-phase-backlog`
  - `sdd-execute-phase`
  - `sdd-sync-drift`
  - `astro-pages-verify`
- Los subagentes viven en `.codex/agents/`.
- La sesión principal de Codex actúa como manager runtime.
- Los subagentes son advisory/read-only por defecto.

## Objetivo de esta carpeta

Crear documentos de referencia para que las skills SDD puedan leerlos solo cuando el usuario pida orquestar un cambio SDD o cuando una skill detecte que necesita reglas más profundas de coordinación.

Esta carpeta debe responder:

- cómo se mueve un cambio dentro del sistema SDD
- cuándo usar cada skill
- cuándo usar subagentes
- cuándo escalar modelo/razonamiento
- cuándo detenerse por decisión humana
- cómo manejar drift
- cómo preservar trazabilidad entre artefactos
- cómo evitar sobre-orquestar cambios pequeños

No debe convertirse en una segunda copia de `AGENTS.md`.

---

# Archivos a crear

Crear exactamente estos archivos:

```text
docs/sdd/orchestration/
  README.md
  orchestration-rules.md
  skill-routing.md
  artifact-state-machine.md
  subagent-policy.md
  model-policy.md
  decision-gates.md
  drift-policy.md
```

---

# 1. `docs/sdd/orchestration/README.md`

## Propósito

Documento índice de la carpeta.

Debe explicar:

- qué es esta carpeta
- cuándo debe leerse
- cuándo no debe leerse
- qué archivo consultar según el problema
- cómo se relaciona con `AGENTS.md`, skills, subagentes y `docs/sdd/<change-id>/`

## Contenido esperado

Incluir secciones:

1. `Purpose`
   - Explicar que esta carpeta contiene reglas bajo demanda para orquestar cambios SDD.
   - Aclarar que no reemplaza `AGENTS.md`.

2. `When to read this folder`
   - Leer cuando el usuario pida orquestar un cambio SDD.
   - Leer cuando el estado del cambio sea ambiguo.
   - Leer cuando haya que decidir entre varias skills.
   - Leer cuando haya drift, decisiones, subagentes o escalamiento de modelo.
   - Leer cuando una fase SDD esté en ejecución y aparezcan riesgos.

3. `When not to read this folder`
   - No leer para cambios pequeños, locales y obvios.
   - No leer para tareas editoriales simples.
   - No leer si el usuario pidió explícitamente una skill concreta y el contexto es claro.
   - No leer como paso ceremonial obligatorio.

4. `Document map`
   - `orchestration-rules.md`: reglas generales del orquestador.
   - `skill-routing.md`: cuándo usar cada skill.
   - `artifact-state-machine.md`: estados y transiciones de artefactos SDD.
   - `subagent-policy.md`: cuándo usar subagentes.
   - `model-policy.md`: modelo/esfuerzo por defecto y escalada.
   - `decision-gates.md`: cuándo detenerse por decisión humana.
   - `drift-policy.md`: cómo detectar y manejar drift.

5. `Core principle`
   - Incluir esta frase o equivalente:
     > AGENTS.md governs. SDD skills operate. Subagents advise. The active Codex session owns the final decision.

---

# 2. `docs/sdd/orchestration/orchestration-rules.md`

## Propósito

Documento central de reglas de orquestación.

Debe definir qué es el orquestador en este repo.

## Contenido esperado

Incluir secciones:

1. `Definition`
   - Explicar que el orquestador no es una sola skill.
   - El orquestador es el sistema compuesto por:
     - `AGENTS.md`
     - `sdd-router`
     - las 7 skills SDD
     - subagentes TOML
     - `.codex/config.toml`
     - `docs/sdd/<change-id>/`
     - la sesión principal de Codex
     - el humano como approval gate

2. `Runtime manager`
   - La sesión principal de Codex es el manager runtime.
   - El manager mantiene ownership del resultado final.
   - El manager consolida, no concatena.
   - El manager decide si usar skills, subagentes o pedir revisión humana.

3. `Role separation`
   - `AGENTS.md`: gobierno permanente.
   - `sdd-router`: diagnóstico y routing.
   - Skills SDD: transición operativa entre artefactos.
   - Subagentes: evidencia especializada.
   - `docs/sdd`: memoria contractual.
   - Humano: decisiones de alto impacto.

4. `Default operating mode`
   - No usar SDD para cambios triviales.
   - No usar subagentes por defecto.
   - No escalar modelo por defecto.
   - Leer solo los documentos necesarios.
   - Mantener cambios pequeños y trazables.

5. `Centralized manager rules`
   - El manager debe:
     - leer contexto relevante antes de decidir
     - elegir una skill principal
     - usar subagentes solo si aportan evidencia real
     - resolver contradicciones entre subagentes
     - detenerse si aparece una decisión humana
     - actualizar o proponer actualización documental cuando haya drift

6. `Anti-patterns`
   - No convertir `sdd-router` en una mega-skill.
   - No usar todos los subagentes en cada paso.
   - No crear artefactos por ceremonia.
   - No permitir que subagentes escriban archivos por defecto.
   - No usar código como nueva verdad si contradice docs.
   - No saltar de idea a implementación sin definición/plan cuando el cambio es sustancial.

---

# 3. `docs/sdd/orchestration/skill-routing.md`

## Propósito

Documento para decidir qué skill corresponde usar.

Debe ser el archivo más útil para `sdd-router`.

## Contenido esperado

Incluir secciones:

1. `Routing overview`
   - Explicar que el sistema sigue:
     `intake → plan → tasks → phase backlog → execution → drift sync → Astro verification`

2. `Use sdd-router when`
   - El usuario no sabe qué paso sigue.
   - Hay artefactos incompletos.
   - El estado de cambio es ambiguo.
   - Hay posible drift.
   - Se necesita decidir si el cambio requiere SDD.

3. `Use sdd-intake when`
   - Hay idea, handover o brief.
   - No existe workspace SDD.
   - No existe `definicion.md`.
   - El cambio necesita convertirse en punto de partida contractual.
   - No debe planificar ni implementar.

4. `Use sdd-plan when`
   - Existe `definicion.md`.
   - No existe `plan.md`.
   - Se necesita traducción técnica/brownfield.
   - Hay que entender zonas afectadas, riesgos y validaciones.
   - No debe generar tasks ni implementar.

5. `Use sdd-tasks when`
   - Existe `plan.md`.
   - No existe `tasks.md`.
   - Se necesita dividir el plan en fases macro.
   - No debe crear checklist detallado ni implementar.

6. `Use sdd-phase-backlog when`
   - Existe `tasks.md`.
   - Hay una fase específica seleccionada.
   - No existe `backlog/faseN.md`.
   - Se necesita checklist vivo de ejecución.
   - No debe implementar.

7. `Use sdd-execute-phase when`
   - Existe `backlog/faseN.md`.
   - La fase está lista para ejecución.
   - El usuario quiere avanzar trabajo real.
   - Debe mantener el backlog vivo y registrar hallazgos/validaciones.

8. `Use sdd-sync-drift when`
   - La ejecución diverge de definición, plan, tasks o backlog.
   - Aparece una decisión no registrada.
   - El backlog ya no refleja la realidad.
   - Hay conflicto docs ↔ código.

9. `Use astro-pages-verify when`
   - El cambio afecta Astro build.
   - El cambio afecta rutas, navegación, SEO, metadata, assets públicos, contenido visible o GitHub Pages.
   - Hay que correr validaciones reales desde `package.json`.

10. `Use no SDD when`
   - El cambio es pequeño, local, reversible y no introduce decisiones.
   - No afecta docs contractuales.
   - No afecta comportamiento visible significativo.
   - Puede resolverse con el workflow normal de `AGENTS.md`.

11. `Routing output contract`
   - Toda recomendación de routing debe devolver:
     - skill recomendada
     - motivo
     - artefactos existentes
     - artefactos faltantes
     - inputs requeridos
     - subagentes sugeridos, si aplica
     - riesgo
     - prompt siguiente

---

# 4. `docs/sdd/orchestration/artifact-state-machine.md`

## Propósito

Definir los estados documentales de un cambio SDD.

Debe ayudar a Codex a detectar dónde está un cambio y qué falta.

## Contenido esperado

Incluir secciones:

1. `Artifact sequence`
   - Definir esta secuencia:
     ```text
     handover.md
       → definicion.md
       → plan.md
       → tasks.md
       → backlog/faseN.md
       → execution updates
       → drift sync if needed
       → astro verification if needed
     ```

2. `Workspace structure`
   - Documentar estructura esperada:
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

3. `Artifact responsibilities`
   - `handover.md`: input limpio y preservado.
   - `definicion.md`: qué se quiere lograr, scope/out of scope, impacto.
   - `plan.md`: cómo implementarlo en el repo real.
   - `tasks.md`: fases macro y tareas ejecutables.
   - `backlog/faseN.md`: checklist vivo de una fase.
   - `decision.log`: decisiones significativas.
   - verification report: resultado de validación, si aplica.

4. `Valid transitions`
   - handover/idea → `sdd-intake`
   - definicion → `sdd-plan`
   - plan → `sdd-tasks`
   - tasks + selected phase → `sdd-phase-backlog`
   - backlog/faseN → `sdd-execute-phase`
   - drift detected → `sdd-sync-drift`
   - visible/Astro impact → `astro-pages-verify`

5. `Invalid transitions`
   - idea → ejecución, si el cambio es sustancial
   - definicion → tasks sin plan técnico, salvo cambio trivial documentado
   - plan → ejecución sin phase backlog, salvo decisión explícita
   - ejecución → code truth sin actualizar docs si hay drift
   - verification pass → “done” si hay revisión visual/manual pendiente

6. `State diagnosis`
   - Incluir tabla:
     - artefactos encontrados
     - estado detectado
     - siguiente skill probable
     - riesgo típico

7. `Completion`
   - Una fase está completa solo si:
     - checklist actualizado
     - validaciones relevantes reportadas
     - drift resuelto o documentado
     - decisiones registradas
     - pendientes/riesgos reportados

---

# 5. `docs/sdd/orchestration/subagent-policy.md`

## Propósito

Definir cuándo usar subagentes y cómo limitar su alcance.

## Contenido esperado

Incluir secciones:

1. `Default rule`
   - No usar subagentes por defecto.
   - Usarlos solo cuando compran evidencia, contexto limpio o revisión independiente.

2. `Subagent roles`
   - `sdd-repo-mapper`: archivos, rutas, componentes, configs, execution paths.
   - `sdd-docs-checker`: reglas docs, artefactos faltantes, drift documental.
   - `sdd-risk-reviewer`: riesgos, regresiones, scope creep, decisiones.
   - `sdd-test-reviewer`: validaciones, scripts npm, manual review.
   - `sdd-drift-reviewer`: comparación entre artefactos y realidad.
   - `astro-verifier`: Astro/GitHub Pages, build, rutas, SEO, metadata, assets.

3. `When to use subagents`
   - Tarea read-heavy.
   - Varias zonas del repo.
   - Riesgo de drift.
   - Riesgo de romper build/routing/SEO/deployment.
   - Necesidad de revisión independiente.
   - El manager se contaminaría con exploración/logs.

4. `When not to use subagents`
   - Cambio pequeño.
   - Archivos ya conocidos.
   - Siguiente paso obvio.
   - Trabajo de escritura de un solo documento.
   - Subagente tendría que releer todo el repo para aportar poco.

5. `Read-only default`
   - Todos los subagentes son read-only/advisory salvo autorización explícita.
   - El manager escribe.
   - No usar múltiples writers sobre los mismos archivos.

6. `Output discipline`
   - Cada subagente debe devolver evidencia acotada.
   - No debe escribir reportes largos innecesarios.
   - Debe devolver paths, riesgos, comandos o decisiones según su rol.
   - Debe recomendar escalada si el problema excede su capacidad.

7. `Conflict handling`
   - Si subagentes contradicen:
     - el manager no concatena
     - el manager compara evidencia
     - puede pedir revisión humana o escalar modelo
     - registra decisión si afecta contrato

8. `Concurrency limits`
   - Respetar `.codex/config.toml`.
   - Mantener `max_depth = 1`.
   - Evitar fan-out recursivo.
   - Usar el menor número de subagentes viable.

---

# 6. `docs/sdd/orchestration/model-policy.md`

## Propósito

Definir política de modelos y esfuerzo de razonamiento para optimizar consumo.

## Contenido esperado

Incluir secciones:

1. `Core principle`
   - Usar el modelo más barato competente.
   - Escalar cuando el error sería caro.
   - No usar “bomba nuclear para romper dos huevos”.

2. `Default policy`
   - `gpt-5.4-mini low`: lectura, docs checks, rutas, comandos, verificación simple.
   - `gpt-5.4-mini medium`: mapping con algo de criterio, test review, risk review inicial, drift inicial.
   - `gpt-5.4 medium`: planificación normal, ejecución normal, backlog con varias zonas, diagnóstico de validación.
   - `gpt-5.5 medium`: planificación ambigua, implementación no trivial, contradicciones, drift contractual.
   - `gpt-5.5 high`: debugging difícil, refactor sensible, arquitectura, deployment/routing/SEO crítico, fallos previos.

3. `Skill defaults`
   - `sdd-router`: mini/medium o manager normal, sin subagentes por defecto.
   - `sdd-intake`: mini medium; escalar si handover ambiguo.
   - `sdd-plan`: gpt-5.4 medium; escalar a 5.5 si brownfield sensible.
   - `sdd-tasks`: mini medium o gpt-5.4 medium si secuencia difícil.
   - `sdd-phase-backlog`: mini medium para fase clara; gpt-5.4 medium si hay dependencias.
   - `sdd-execute-phase`: gpt-5.4 medium; 5.5 si lógica/build/routing/refactor.
   - `sdd-sync-drift`: gpt-5.4 medium; 5.5 si drift contractual.
   - `astro-pages-verify`: mini low; escalar si build falla.

4. `Subagent defaults`
   - `sdd-docs-checker`: mini low.
   - `sdd-repo-mapper`: mini low/medium.
   - `sdd-test-reviewer`: mini medium.
   - `sdd-risk-reviewer`: mini medium, escalable.
   - `sdd-drift-reviewer`: mini medium.
   - `astro-verifier`: mini low.

5. `Escalation triggers`
   - Conflicto documental.
   - Varias zonas afectadas.
   - Contradicción entre subagentes.
   - Riesgo de routing, SEO, deployment, i18n, schema o arquitectura.
   - Drift contractual.
   - Build failure difícil.
   - Intento previo fallido.
   - Decisión irreversible.

6. `De-escalation triggers`
   - Cambio local y claro.
   - Artifact bien definido.
   - Solo lectura/extracción.
   - Solo verificación de comandos.
   - No hay impacto visible ni contractual.

7. `Token-saving practices`
   - Pasar paths exactos.
   - Pasar artefactos mínimos.
   - Evitar “review everything”.
   - Evitar subagentes si solo escribirán un documento.
   - Mantener `SKILL.md` compacto y referencias bajo demanda.
   - No cargar reglas profundas si no hay orquestación real.

---

# 7. `docs/sdd/orchestration/decision-gates.md`

## Propósito

Definir cuándo Codex debe parar y pedir decisión humana.

## Contenido esperado

Incluir secciones:

1. `Core rule`
   - Codex puede resolver decisiones pequeñas/locales.
   - Codex debe escalar decisiones con impacto de scope, contrato, arquitectura, visible behavior o validación.

2. `Always escalate`
   - Cambiar routing.
   - Cambiar i18n.
   - Cambiar SEO estructural.
   - Cambiar deployment o dominio.
   - Añadir dependencia.
   - Eliminar páginas, componentes, assets o secciones.
   - Introducir convención nueva.
   - Cambiar modelo de contenido.
   - Cambiar fuente de verdad.
   - Ampliar scope fuera del plan.
   - Contradecir docs contractuales.
   - Resolver trade-off grande sin instrucción del usuario.

3. `May resolve locally`
   - Ajustes menores dentro de scope.
   - Naming local no contractual.
   - Orden de tareas dentro de una fase.
   - Validación adicional no invasiva.
   - Corrección pequeña que no cambia comportamiento esperado.

4. `Decision.log usage`
   - Registrar decisiones significativas.
   - Incluir:
     - fecha si aplica
     - contexto
     - decisión
     - opciones consideradas
     - rationale
     - impacto
     - artefactos afectados
   - No llenar con microdecisiones irrelevantes.

5. `Stop conditions`
   - Si la decisión bloquea implementación.
   - Si hay varias rutas con trade-offs.
   - Si el usuario debe elegir scope.
   - Si la decisión afecta promesa pública del portfolio.
   - Si validación falla y corregir exige cambiar enfoque.

6. `Decision output contract`
   - Cuando se pida decisión humana, devolver:
     - situación
     - por qué importa
     - opciones
     - recomendación
     - impacto de cada opción
     - qué archivo se actualizaría después

---

# 8. `docs/sdd/orchestration/drift-policy.md`

## Propósito

Definir cómo detectar y manejar drift entre docs, artifacts SDD y código.

## Contenido esperado

Incluir secciones:

1. `Definition`
   - Drift es cualquier divergencia entre:
     - `definicion.md`
     - `plan.md`
     - `tasks.md`
     - `backlog/faseN.md`
     - `decision.log`
     - código real
     - validaciones reales
     - comportamiento visible

2. `Core rule`
   - El código no se convierte automáticamente en nueva verdad.
   - Si código y docs divergen, se debe reportar y sincronizar o pedir decisión humana.

3. `Drift categories`
   - `minor drift`: redacción, estado, nota de ejecución.
   - `operational drift`: cambia secuencia o checklist, pero no scope.
   - `contractual drift`: cambia definición, plan, comportamiento esperado, validación o fuente de verdad.
   - `blocking drift`: no se debe continuar sin decisión humana.

4. `Detection signals`
   - La fase requiere tareas no previstas.
   - El plan menciona archivos que no existen.
   - La implementación exige cambiar ruta/SEO/config.
   - El backlog no refleja lo ejecutado.
   - Validaciones esperadas no existen.
   - El código contradice docs.
   - Aparece decisión no registrada.

5. `Response by drift category`
   - minor: actualizar backlog o nota.
   - operational: actualizar backlog/tasks y registrar si afecta ejecución.
   - contractual: detener o proponer sync de plan/definicion/decision.log.
   - blocking: detener y pedir decisión humana.

6. `Use sdd-sync-drift when`
   - Hay drift operacional o mayor.
   - Hay decisión no registrada.
   - Hay conflicto entre docs y código.
   - Una fase no puede completarse fielmente.
   - El plan o tasks quedaron obsoletos.

7. `Do not use sdd-sync-drift when`
   - Solo falta marcar un checklist.
   - Es una corrección menor dentro de ejecución.
   - El cambio no afecta ningún artefacto superior.
   - Se está intentando rediseñar por ansiedad.

8. `Drift report contract`
   - Incluir:
     - drift summary
     - category
     - affected artifacts
     - recommended sync action
     - decision.log implications
     - human review required
     - files to update
     - risks if ignored

---

# Reglas de implementación

- Crear solo estos documentos.
- No modificar código fuente.
- No modificar las skills todavía.
- No modificar `AGENTS.md` todavía.
- No crear artefactos de un change-id específico.
- Mantener estilo sobrio, operativo y conciso.
- Evitar teoría larga.
- Evitar duplicar `AGENTS.md`.
- Usar headings claros y listas prácticas.
- Los documentos deben ser suficientemente completos para que Codex pueda usarlos como referencia bajo demanda.

## Nota de referencia técnica para el implementador

Estas decisiones se apoyan en prácticas documentadas de Codex:

- `AGENTS.md` funciona como instrucciones persistentes del repo que Codex lee antes de trabajar.
- Las skills deben mantenerse enfocadas y usar carga progresiva: metadata primero, `SKILL.md` cuando aplica y referencias/scripts solo cuando hacen falta.
- Los subagentes deben usarse con límites de concurrencia/profundidad y no deben generar fan-out innecesario.

Fuentes oficiales útiles:
- https://developers.openai.com/codex/guides/agents-md
- https://developers.openai.com/codex/skills
- https://developers.openai.com/codex/concepts/customization
- https://developers.openai.com/codex/subagents
- https://developers.openai.com/codex/config-reference

