# Phase Plan

Usa este plan para ejecutar el Bloque 4 del roadmap de Sprint 3.

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

Antes de usarlo:

- confirma que `Bloque 3` creo las skills centrales
- revisa `docs/sdd/parches/sprint-3/implementation-report.md`
- revisa `AGENTS.md`
- revisa `package.json` para la skill de verificacion

---

## Metadatos

- Fase: `Sprint 3 - Bloque 4 - Implementacion de skills de borde y verificacion`
- Estado: `done`
- Ultima actualizacion: `2026-04-25`
- Owner: `pawpaw + Codex`
- Depende de:
  - `docs/README.md`
  - `AGENTS.md`
  - `docs/sdd/parches/sprint-3/roadmap.md`
  - `docs/sdd/parches/sprint-3/implementation-report.md`
  - `docs/sdd/parches/sprint-3/block-3.md`
  - `package.json`
- Desbloquea:
  - sistema SDD completo de 7 skills
  - verificacion repo-especifica de Astro
  - revision de coherencia y registro en `Bloque 5`

---

## 1. Objetivo de la fase

Esta fase debe completar el sistema con las tres skills de borde: `sdd-intake`, `sdd-sync-drift` y `astro-pages-verify`. Al cerrarla, el repo debe poder iniciar un cambio SDD desde un handover, resincronizar artefactos cuando la ejecucion descubre drift y validar cambios del portfolio con criterios propios de Astro/GitHub Pages. Esta fase existe para que el sistema no quede limitado a la planificacion central.

---

## 2. Fuente de verdad aplicable

- `docs/README.md`
- roadmap activo o historico aplicable en `docs/sdd/`:
  - `docs/sdd/parches/sprint-3/roadmap.md`
  - `docs/sdd/parches/sprint-3/implementation-report.md`
  - `docs/sdd/parches/sprint-3/block-3.md`
  - `docs/sdd/templates/backlog-faseN.md`
- documentos contractuales aplicables:
  - no hay contrato de producto nuevo en esta fase
- documentos auxiliares aplicables:
  - `AGENTS.md`
  - `package.json`
  - `.atl/skill-registry.md`

Nota:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- este plan no puede contradecir documentos contractuales
- `astro-pages-verify` debe reportar scripts disponibles, no inventarlos

---

## 3. Inputs requeridos

### Documentos

- [ ] `docs/sdd/parches/sprint-3/implementation-report.md`
- [ ] `docs/sdd/parches/sprint-3/block-3.md`
- [ ] `AGENTS.md`
- [ ] `package.json`
- [ ] las 4 skills centrales creadas en `Bloque 3`

### Decisiones previas

- [ ] el sistema completo contiene 7 skills
- [ ] no se crean scripts en el primer corte
- [ ] `astro-pages-verify` usa `npm` y no hace deploy
- [ ] `sdd-sync-drift` no reabre diseño por defecto

### Estado tecnico

- [ ] `.codex/skills/` existe
- [ ] las 4 skills centrales existen
- [ ] `package.json` contiene scripts reales disponibles

---

## 4. Entregables documentales

### Crear

- [ ] `docs/sdd/parches/sprint-3/block-4.md`

### Actualizar

- [ ] ninguno por defecto

### No tocar

- [ ] `docs/README.md`, salvo contradiccion detectada
- [ ] `AGENTS.md`, salvo que falte referencia necesaria
- [ ] `.atl/skill-registry.md`, queda para `Bloque 5`
- [ ] `src/`
- [ ] `package.json`

---

## 5. Alcance de implementacion

### Si entra

- [ ] crear `.codex/skills/sdd-intake/SKILL.md`
- [ ] crear `.codex/skills/sdd-sync-drift/SKILL.md`
- [ ] crear `.codex/skills/astro-pages-verify/SKILL.md`
- [ ] definir triggers claros y no solapados con skills centrales
- [ ] definir outputs y guardrails de cada skill

### No entra

- [ ] ejecutar un intake real de otro proyecto
- [ ] modificar artefactos SDD reales
- [ ] agregar tests o scripts
- [ ] ejecutar build como parte de crear la skill
- [ ] hacer deploy o verificar GitHub Pages remoto

---

## 6. Tareas detalladas

### Bloque A - `sdd-intake`

- [ ] definir trigger: convertir handover, brief o idea amplia en workspace SDD inicial
- [ ] indicar que crea `handover.md`, `definicion.md` y opcionalmente `decision.log`
- [ ] exigir lectura de `docs/README.md` y `AGENTS.md`
- [ ] incluir criterio para recomendar no usar SDD completo en cambios pequeños
- [ ] prohibir planificar implementacion o crear tasks

### Bloque B - `sdd-sync-drift`

- [ ] definir trigger: ejecucion revela drift entre artefactos y realidad
- [ ] indicar inputs: `definicion.md`, `plan.md`, `tasks.md`, `decision.log`, backlogs y estado real
- [ ] definir tipos de drift: aceptable, requiere decision, requiere update documental
- [ ] prohibir usar drift sync como excusa para rediseño continuo
- [ ] exigir trazabilidad en `decision.log`

### Bloque C - `astro-pages-verify`

- [ ] definir trigger: validar cambios visibles, estructurales o repo-especificos de Astro
- [ ] exigir lectura de `package.json`
- [ ] indicar uso de `npm test` y `npm run build` segun alcance
- [ ] indicar que si falta `npm run lint`, debe reportarlo y no inventarlo
- [ ] incluir revision de rutas, metadata, canonicals, alternates y assets cuando aplique
- [ ] prohibir modificar codigo para hacer pasar checks

### Bloque D - Revision de interaccion con skills centrales

- [ ] confirmar que `sdd-intake` desemboca en `sdd-plan`
- [ ] confirmar que `sdd-sync-drift` no reemplaza `sdd-execute-phase`
- [ ] confirmar que `astro-pages-verify` puede usarse despues de ejecucion, no durante cada microtarea
- [ ] confirmar que ninguna skill de borde duplica `sdd-plan`

---

## 7. Archivos probables a tocar

### Docs

- `docs/sdd/parches/sprint-3/block-4.md`

### Codigo

- `.codex/skills/sdd-intake/SKILL.md`
- `.codex/skills/sdd-sync-drift/SKILL.md`
- `.codex/skills/astro-pages-verify/SKILL.md`

---

## 8. Dependencias y bloqueos

### Dependencias

- [ ] cierre de `Bloque 3`
- [ ] scripts reales listados en `package.json`
- [ ] convenciones de `skill-creator`

### Bloqueos posibles

- [ ] `astro-pages-verify` se vuelve demasiado amplia
- [ ] `sdd-sync-drift` se confunde con planificacion nueva
- [ ] `sdd-intake` intenta resolver decisiones que deben escalarse

### Mitigacion

- mantener outputs acotados
- reforzar que el sistema no sustituye revision humana
- no agregar scripts ni dependencias

---

## 9. Validaciones

### Documentales

- [ ] verificar alineacion con `docs/sdd/parches/sprint-3/implementation-report.md`
- [ ] verificar que las nuevas skills no contradicen las centrales
- [ ] verificar que ninguna skill promete deploy

### Tecnicas

- [ ] `find .codex/skills -maxdepth 2 -type f -name SKILL.md`
- [ ] revisar frontmatter de las 3 skills creadas
- [ ] no corresponde `npm run build`

### Manuales

- [ ] leer cada skill como agente nuevo
- [ ] confirmar que el trigger de cada una es distinguible
- [ ] confirmar que `astro-pages-verify` enumera validaciones sin inventar comandos

---

## 10. Criterio de cierre

La fase solo se considera cerrada si:

- [ ] existen las 3 skills de borde bajo `.codex/skills/`
- [ ] el sistema suma 7 skills SDD
- [ ] no se crearon scripts ni dependencias
- [ ] `astro-pages-verify` respeta `package.json`
- [ ] no se tocaron runtime ni deploy

---

## 11. Riesgos y notas

### Riesgos

- crear una skill de verificacion demasiado generica
- permitir que drift sync reabra todo el sprint
- hacer que intake genere planes antes de tiempo

### Notas operativas

- `astro-pages-verify` es repo-specific, no una skill generica de testing
- este bloque completa el set funcional antes de registro final

---

## 12. Registro de cambios del plan

- Fecha: `2026-04-25`
  - cambio: creacion inicial del plan para `Bloque 4`
  - razon: detallar la implementacion de las skills de borde y verificacion del sistema SDD
