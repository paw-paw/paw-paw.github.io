# Roadmap

Usa este roadmap para implementar el sistema local de SDD Skills del repo sin romper la precedencia documental, sin mover el portfolio hacia un framework burocratico y sin mezclar infraestructura de agente con runtime publico innecesario.

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo. La fuente tecnica principal para este sprint es `docs/sdd/parches/sprint-3/implementation-report.md`.

---

## Metadatos

- Nombre: `Sprint 3 - SDD Skills System`
- Estado: `done`
- Ultima actualizacion: `2026-04-25`
- Owner: `pawpaw + Codex`
- Depende de:
  - `docs/README.md`
  - `AGENTS.md`
  - `docs/sdd/parches/sprint-3/implementation-report.md`
  - `docs/sdd/templates/tasks.md`
  - convencion de skills definida por `skill-creator`
- Desbloquea:
  - sistema local de 7 skills SDD bajo `.codex/skills/`
  - uso de `docs/sdd/` como espacio auxiliar operativo para cambios spec-driven
  - workflows repetibles para intake, planificacion, tareas, backlog, ejecucion, drift sync y verificacion Astro
  - mejor trazabilidad entre idea, documento, plan, ejecucion y validacion

---

## 1. Objetivo general

El objetivo de Sprint 3 es implementar un sistema local de skills de Codex para operar cambios grandes o ambiguos mediante desarrollo dirigido por especificacion dentro de este portfolio Astro. Al cerrar este roadmap deben existir 7 skills bajo `.codex/skills/`, debe quedar declarada la funcion auxiliar de `docs/sdd/`, y los registros operativos del repo deben reflejar la nueva convencion sin contradecir `docs/README.md` ni `AGENTS.md`. El sistema debe ayudar a estructurar trabajo futuro sin convertir cada cambio pequeno en un proceso pesado.

Este sprint existe porque el repo ya tiene una filosofia documentacion-led: los contratos viven en `docs/`, la implementacion debe seguirlos y las decisiones relevantes no deben quedar escondidas en codigo. Las skills SDD deben hacer esa filosofia mas repetible para trabajo futuro.

Cuando este sprint se cierre, un desarrollador o agente nuevo debe poder entender que `AGENTS.md` gobierna, que `docs/sdd/` almacena artefactos auxiliares por cambio, que las skills operan como herramientas de transicion entre artefactos y que la verificacion del sitio Astro sigue usando las validaciones disponibles en `npm`.

---

## 2. Fuente de verdad aplicable

- `docs/README.md`
- documentos contractuales aplicables:
  - no hay contrato de producto nuevo para este sprint
  - los contratos existentes siguen mandando si una skill SDD toca estrategia, arquitectura, contenido, visual, i18n, SEO o deployment en trabajos futuros
- documentos auxiliares aplicables:
  - `docs/sdd/parches/sprint-3/implementation-report.md`
  - `docs/governance/decision-log.md`
  - `.atl/skill-registry.md`
  - `docs/sdd/templates/tasks.md`
- roadmaps o planes historicos relacionados:
  - `docs/sdd/parches/sprint-1/roadmap.md`
  - `docs/sdd/parches/sprint-2/roadmap.md`

Nota:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- este roadmap no puede contradecir documentos contractuales
- `AGENTS.md` gobierna la conducta operativa del repo; las skills no lo sustituyen
- `docs/sdd/parches/sprint-3/implementation-report.md` define las decisiones tecnicas aprobadas para este sprint
- `_inbox/` es staging local e ignorado por git; no debe usarse como fuente publica final

---

## 3. Alcance general

### Si entra

- [ ] declarar `docs/sdd/` como carpeta auxiliar operativa dentro de `docs/README.md`
- [ ] mantener claro que `docs/sdd/` no sustituye documentos contractuales
- [ ] reemplazar el archivo vacio `.codex` por un directorio `.codex/` si sigue existiendo como archivo local
- [ ] crear `.codex/skills/` como ubicacion publica prevista para skills Codex especificas del repo
- [ ] crear las 7 skills SDD:
  - `sdd-intake`
  - `sdd-plan`
  - `sdd-tasks`
  - `sdd-phase-backlog`
  - `sdd-execute-phase`
  - `sdd-sync-drift`
  - `astro-pages-verify`
- [ ] escribir cada `SKILL.md` con responsabilidad unica, trigger claro y workflow aplicable
- [ ] actualizar `AGENTS.md` para documentar las skills locales nuevas y su ubicacion bajo `.codex/skills/`
- [ ] actualizar `.atl/skill-registry.md` para que no contradiga la existencia de skills `sdd-*`
- [ ] registrar decisiones relevantes en `docs/governance/decision-log.md` si la implementacion confirma o ajusta criterios del report
- [ ] validar que no se introdujeron dependencias, scripts o runtime innecesarios

### No entra

- [ ] implementar cambios en `src/`
- [ ] cambiar routing, i18n, SEO, deployment o dominio del portfolio
- [ ] crear automatizaciones con scripts antes de validar friccion real
- [ ] agregar dependencias nuevas
- [ ] recrear una carpeta `skills/` en la raiz
- [ ] dejar skills locales repartidas entre `skills/` y `.codex/skills/`
- [ ] crear artefactos SDD reales para otro cambio de producto, salvo un ejemplo minimo si se documenta como prueba manual
- [ ] convertir `docs/sdd/` en nueva capa contractual superior
- [ ] publicar `_inbox/` o handovers crudos
- [ ] hacer deploy o asumir verificacion publica en GitHub Pages

---

## 4. Secuencia de fases o bloques

### Bloque 0 - Preparacion y control de precedencia

- Objetivo: confirmar el estado real del repo y preparar la implementacion sin pisar cambios locales ni violar la precedencia documental.
- Entregables:
  - [ ] lectura de `docs/README.md`
  - [ ] lectura de `AGENTS.md`
  - [ ] lectura de `docs/sdd/parches/sprint-3/implementation-report.md`
  - [ ] lectura de `skill-creator` o referencia equivalente disponible en el entorno
  - [ ] revision de `git status --short`
  - [ ] decision operativa sobre el archivo vacio `.codex` si sigue existiendo
- Dependencias:
  - este roadmap
  - `docs/sdd/parches/sprint-3/implementation-report.md`
- Criterio de cierre:
  - [ ] el ejecutor entiende que las nuevas skills van en `.codex/skills/`, no en `skills/`
  - [ ] queda claro que `_inbox/` no debe entrar al commit
  - [ ] no hay cambios locales confundidos con el alcance de Sprint 3

### Bloque 1 - Alineacion documental y registros operativos

- Objetivo: dejar la documentacion base lista para soportar el sistema SDD antes de crear las skills.
- Entregables:
  - [ ] `docs/README.md` actualizado con `sdd/` como carpeta auxiliar operativa
  - [ ] regla explicita de que `docs/sdd/` no sustituye contratos
  - [ ] `AGENTS.md` actualizado para listar las 7 skills nuevas y su ubicacion
  - [ ] `docs/governance/decision-log.md` actualizado si se registra la decision de Sprint 3
- Dependencias:
  - cierre de `Bloque 0`
- Criterio de cierre:
  - [ ] la documentacion puede explicar a un tercero que `AGENTS.md` gobierna y que las skills operan
  - [ ] `docs/README.md` conserva su precedencia sin elevar `docs/sdd/` por encima de contratos existentes
  - [ ] no se modifican contratos de producto que no aplican al sistema SDD

### Bloque 2 - Preparacion de filesystem Codex

- Objetivo: crear la ubicacion correcta para skills de Codex especificas del repo y resolver el conflicto actual con `.codex` si existe como archivo.
- Entregables:
  - [ ] si `.codex` existe como archivo vacio, eliminarlo o reemplazarlo por directorio `.codex/`
  - [ ] directorio `.codex/skills/`
  - [ ] estructura inicial de carpetas para las 7 skills
- Dependencias:
  - cierre de `Bloque 1`
- Criterio de cierre:
  - [ ] existe `.codex/skills/`
  - [ ] no existe un archivo `.codex` que bloquee el directorio
  - [ ] no se crean nuevas skills bajo `skills/`
  - [ ] no se toca `src/`, `package.json` ni configuracion de build

### Bloque 3 - Implementacion de skills centrales

- Objetivo: crear las skills que forman el nucleo del flujo SDD desde planificacion hasta ejecucion de fases.
- Entregables:
  - [ ] `.codex/skills/sdd-plan/SKILL.md`
  - [ ] `.codex/skills/sdd-tasks/SKILL.md`
  - [ ] `.codex/skills/sdd-phase-backlog/SKILL.md`
  - [ ] `.codex/skills/sdd-execute-phase/SKILL.md`
- Dependencias:
  - cierre de `Bloque 2`
  - convenciones de `skill-creator`
- Criterio de cierre:
  - [ ] cada skill tiene frontmatter valido
  - [ ] cada skill tiene trigger claro
  - [ ] cada skill define `When to Use`, inputs, critical patterns, workflow, outputs y guardrails
  - [ ] `sdd-plan` no genera tasks ni implementa
  - [ ] `sdd-tasks` no baja a checklist operacional
  - [ ] `sdd-phase-backlog` no implementa codigo
  - [ ] `sdd-execute-phase` ejecuta solo una fase existente y actualiza backlog vivo

### Bloque 4 - Implementacion de skills de borde y verificacion

- Objetivo: completar el sistema con intake inicial, sincronizacion de drift y validacion repo-especifica de Astro.
- Entregables:
  - [ ] `.codex/skills/sdd-intake/SKILL.md`
  - [ ] `.codex/skills/sdd-sync-drift/SKILL.md`
  - [ ] `.codex/skills/astro-pages-verify/SKILL.md`
- Dependencias:
  - cierre de `Bloque 3`
- Criterio de cierre:
  - [ ] `sdd-intake` crea workspace SDD inicial sin planificar implementacion
  - [ ] `sdd-sync-drift` resincroniza artefactos sin reabrir diseno por defecto
  - [ ] `astro-pages-verify` lee `package.json`, usa `npm`, no inventa comandos y no modifica codigo para hacer pasar checks
  - [ ] las tres skills respetan que `AGENTS.md` gobierna

### Bloque 5 - Registro, coherencia y verificacion manual de skills

- Objetivo: asegurar que los registros del repo reflejan las nuevas skills y que no hay contradicciones operativas.
- Entregables:
  - [ ] `.atl/skill-registry.md` actualizado o regenerado
  - [ ] revision manual de los 7 `SKILL.md`
  - [ ] verificacion de solapamiento entre triggers
  - [ ] lista de riesgos residuales
- Dependencias:
  - cierre de `Bloque 4`
- Criterio de cierre:
  - [ ] `.atl/skill-registry.md` ya no dice que `sdd-*` queda excluido si esas skills pasan a ser activas
  - [ ] `AGENTS.md` y `.atl/skill-registry.md` no se contradicen
  - [ ] no hay skills gigantes o catch-all
  - [ ] no hay duplicacion extensa de `AGENTS.md` dentro de las skills

### Bloque 6 - Cierre y validacion del sprint

- Objetivo: cerrar el sprint con una entrega revisable, sin cambios de runtime innecesarios y con comandos/reportes honestos.
- Entregables:
  - [ ] reporte final de archivos creados y actualizados
  - [ ] validaciones ejecutadas o razon de no ejecucion
  - [ ] riesgos residuales documentados
  - [ ] decision sobre si se necesita `npm run build`
- Dependencias:
  - cierre de `Bloque 5`
- Criterio de cierre:
  - [ ] existen las 7 skills bajo `.codex/skills/`
  - [ ] `docs/README.md`, `AGENTS.md` y `.atl/skill-registry.md` estan alineados
  - [ ] no se agregaron dependencias nuevas
  - [ ] no se tocaron superficies runtime fuera de alcance
  - [ ] queda claro que `docs/sdd/` es auxiliar operativo

---

## 5. Entregables documentales

### Crear

- [ ] `docs/sdd/parches/sprint-3/roadmap.md`
- [ ] opcional: `docs/sdd/` solo si se decide crear un ejemplo minimo o se necesita el directorio para documentar la convencion

### Actualizar

- [ ] `docs/README.md`
- [ ] `AGENTS.md`
- [ ] `.atl/skill-registry.md`
- [ ] `docs/governance/decision-log.md` si la decision de implementar el sistema completo debe quedar registrada

### Archivar o mover

- [ ] no mover `_inbox/`; queda como staging local ignorado

---

## 6. Entregables de implementacion

- [ ] `.codex/skills/sdd-intake/SKILL.md`
- [ ] `.codex/skills/sdd-plan/SKILL.md`
- [ ] `.codex/skills/sdd-tasks/SKILL.md`
- [ ] `.codex/skills/sdd-phase-backlog/SKILL.md`
- [ ] `.codex/skills/sdd-execute-phase/SKILL.md`
- [ ] `.codex/skills/sdd-sync-drift/SKILL.md`
- [ ] `.codex/skills/astro-pages-verify/SKILL.md`
- [ ] reemplazo del archivo vacio `.codex` por directorio `.codex/`, si todavia aplica
- [ ] actualizacion de registros que referencian skills locales

Cada `SKILL.md` debe incluir al menos:

- frontmatter:
  - `name`
  - `description`
  - `license`
  - `metadata.author`
  - `metadata.version`
- cuerpo:
  - `When to Use`
  - `Inputs`
  - `Critical Patterns`
  - `Workflow`
  - `Outputs` o `Report`
  - `Guardrails`

Las descripciones deben permitir que Codex elija la skill correcta sin cargar todas las skills. Evitar frases genericas como "use for SDD work" si no explican la transicion especifica.

---

## 7. Dependencias y bloqueos

### Dependencias

- [ ] `docs/sdd/parches/sprint-3/implementation-report.md` debe mantenerse como referencia tecnica del sprint
- [ ] `docs/README.md` debe seguir definiendo precedencia documental
- [ ] `AGENTS.md` debe seguir definiendo reglas operativas del repo
- [ ] convencion `skill-creator` para estructura de skills
- [ ] disponibilidad de comandos basicos de shell para crear carpetas y revisar archivos

### Bloqueos posibles

- [ ] `.codex` existe como archivo y bloquea crear `.codex/skills/`
- [ ] `.atl/skill-registry.md` contiene reglas previas que excluyen `sdd-*`
- [ ] referencias historicas a `skills/` pueden confundirse con la nueva ubicacion `.codex/skills/`
- [ ] una skill nueva queda demasiado amplia y se solapa con otra
- [ ] se intenta convertir `docs/sdd/` en contrato superior sin actualizar `docs/README.md` de forma coherente
- [ ] se agregan scripts o dependencias por comodidad sin necesidad real

### Mitigacion

- resolver `.codex` como primer paso de filesystem antes de crear skills
- tratar `skills/` como una ruta obsoleta; las skills locales deben vivir bajo `.codex/skills/`
- mantener una responsabilidad unica por skill
- actualizar `AGENTS.md` y `.atl/skill-registry.md` en la misma entrega que crea skills
- declarar `docs/sdd/` como auxiliar operativo, no contractual
- diferir scripts hasta que el uso real demuestre repeticion o fragilidad

---

## 8. Validaciones

### Documentales

- [ ] verificar alineacion con `docs/README.md`
- [ ] verificar que `docs/sdd/parches/sprint-3/implementation-report.md` y este roadmap no se contradicen
- [ ] verificar que `docs/README.md` reconoce `docs/sdd/` como auxiliar operativo
- [ ] verificar que `AGENTS.md` lista la ubicacion correcta `.codex/skills/`
- [ ] verificar que `.atl/skill-registry.md` no excluye las nuevas skills SDD si se declaran activas
- [ ] verificar que ninguna skill presenta sus instrucciones como reemplazo de `AGENTS.md`

### Tecnicas

- [ ] revisar que existen exactamente estas rutas:
  - `.codex/skills/sdd-intake/SKILL.md`
  - `.codex/skills/sdd-plan/SKILL.md`
  - `.codex/skills/sdd-tasks/SKILL.md`
  - `.codex/skills/sdd-phase-backlog/SKILL.md`
  - `.codex/skills/sdd-execute-phase/SKILL.md`
  - `.codex/skills/sdd-sync-drift/SKILL.md`
  - `.codex/skills/astro-pages-verify/SKILL.md`
- [ ] verificar que `.codex` es directorio, no archivo
- [ ] verificar que no hay nuevas dependencias en `package.json`
- [ ] verificar que no se tocaron `src/`, `.github/` ni runtime del portfolio
- [ ] correr `npm run build` solo si se modifica una superficie consumida por Astro o si el ejecutor necesita una validacion estructural adicional
- [ ] correr `npm test` solo si se agregan tests, cambia runtime o hay riesgo cubierto por tests existentes

### Manuales

- [ ] revisar cada `SKILL.md` como si lo fuera a usar un agente nuevo
- [ ] confirmar que los triggers son distinguibles:
  - `sdd-intake`: de idea/handover a definicion
  - `sdd-plan`: de definicion a plan tecnico
  - `sdd-tasks`: de plan a fases macro
  - `sdd-phase-backlog`: de fase a checklist vivo
  - `sdd-execute-phase`: ejecutar una fase existente
  - `sdd-sync-drift`: reconciliar drift
  - `astro-pages-verify`: validar el sitio Astro/GitHub Pages
- [ ] confirmar que el sistema no fuerza cambios pequenos a usar pipeline completo
- [ ] confirmar que `astro-pages-verify` no promete deploy ni verificacion publica remota

---

## 9. Criterio de cierre

Este roadmap solo se considera cerrado si:

- [ ] existen las 7 skills bajo `.codex/skills/`
- [ ] `.codex` funciona como directorio y no como archivo bloqueante
- [ ] `docs/README.md` declara `docs/sdd/` como auxiliar operativo
- [ ] `AGENTS.md` lista las 7 skills y su ubicacion correcta
- [ ] `.atl/skill-registry.md` esta alineado con las skills activas
- [ ] cada skill tiene responsabilidad unica, trigger claro y workflow accionable
- [ ] ninguna skill duplica extensamente `AGENTS.md`
- [ ] ninguna skill introduce scripts, dependencias o runtime innecesario en el primer corte
- [ ] no se modifico `src/` ni configuracion de deploy como parte de este sprint
- [ ] queda registrada cualquier decision relevante en `docs/governance/decision-log.md`
- [ ] queda reportado que `docs/sdd/` no sustituye contratos documentales
- [ ] las validaciones documentales/manuales fueron ejecutadas y reportadas

---

## 10. Registro de cambios

- Fecha: `2026-04-25`
  - cambio: creacion inicial del roadmap de Sprint 3 a partir de `docs/sdd/parches/sprint-3/implementation-report.md`
  - razon: convertir el plan tecnico del sistema SDD Skills en una secuencia ejecutable para un desarrollador no familiarizado con el repo
