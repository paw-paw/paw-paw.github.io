# Phase Plan

Usa este plan para ejecutar el Bloque 6 del roadmap de Sprint 3.

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

Antes de usarlo:

- confirma que `Bloque 5` esta cerrado
- revisa `git status --short`
- revisa si el alcance ejecutado requiere `npm run build` o `npm test`
- prepara un reporte final con validaciones y riesgos residuales

---

## Metadatos

- Fase: `Sprint 3 - Bloque 6 - Cierre y validacion del sprint`
- Estado: `done`
- Ultima actualizacion: `2026-04-25`
- Owner: `pawpaw + Codex`
- Depende de:
  - `docs/README.md`
  - `AGENTS.md`
  - `docs/sdd/parches/sprint-3/roadmap.md`
  - `docs/sdd/parches/sprint-3/block-5.md`
  - las 7 skills SDD creadas
- Desbloquea:
  - cierre de Sprint 3
  - uso operativo del sistema SDD Skills en cambios futuros
  - posible apertura de un primer cambio real bajo `docs/sdd/`

---

## 1. Objetivo de la fase

Esta fase debe cerrar Sprint 3 con una entrega verificable y sin cambios fuera de alcance. Al cerrarla, deben existir las 7 skills SDD, la documentacion debe estar alineada, los registros deben apuntar a `.codex/skills/`, las validaciones pertinentes deben haberse ejecutado o justificado, y debe quedar claro que no se modifico runtime del portfolio por este sprint. Esta fase existe para que el sistema quede listo para uso sin deuda de trazabilidad inmediata.

---

## 2. Fuente de verdad aplicable

- `docs/README.md`
- roadmap activo o historico aplicable en `docs/sdd/`:
  - `docs/sdd/parches/sprint-3/roadmap.md`
  - `docs/sdd/parches/sprint-3/implementation-report.md`
  - `docs/sdd/parches/sprint-3/block-0.md`
  - `docs/sdd/parches/sprint-3/block-1.md`
  - `docs/sdd/parches/sprint-3/block-2.md`
  - `docs/sdd/parches/sprint-3/block-3.md`
  - `docs/sdd/parches/sprint-3/block-4.md`
  - `docs/sdd/parches/sprint-3/block-5.md`
- documentos contractuales aplicables:
  - no hay contrato de producto nuevo en esta fase
- documentos auxiliares aplicables:
  - `AGENTS.md`
  - `.atl/skill-registry.md`
  - `docs/governance/decision-log.md`
  - `package.json`

Nota:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- este plan no puede contradecir documentos contractuales
- no se debe hacer deploy en este bloque

---

## 3. Inputs requeridos

### Documentos

- [ ] roadmap de Sprint 3
- [ ] bloques 0 a 5 de Sprint 3
- [ ] `AGENTS.md`
- [ ] `.atl/skill-registry.md`
- [ ] `package.json`

### Decisiones previas

- [ ] sistema de 7 skills completado
- [ ] `docs/sdd/` declarado auxiliar operativo
- [ ] no se agregaron dependencias ni scripts
- [ ] no se tocaron superficies runtime fuera de alcance

### Estado tecnico

- [ ] `git status --short` revisado
- [ ] `.codex/skills/` contiene las skills esperadas
- [ ] no hay archivos crudos de `_inbox/` listos para commit
- [ ] estado de validaciones definido segun alcance

---

## 4. Entregables documentales

### Crear

- [ ] `docs/sdd/parches/sprint-3/block-6.md`
- [ ] reporte final en respuesta de cierre o documento si se decide formalizarlo

### Actualizar

- [ ] `docs/sdd/parches/sprint-3/roadmap.md` a `done` si todos los criterios se cumplen
- [ ] bloques ejecutados a `done` si se decide cerrar en docs
- [ ] `docs/governance/decision-log.md` si hay decisiones finales relevantes

### No tocar

- [ ] `src/`
- [ ] `.github/`
- [ ] `package.json`, salvo que realmente se haya agregado validacion aprobada
- [ ] documentos contractuales de producto salvo drift real

---

## 5. Alcance de implementacion

### Si entra

- [ ] revisar estructura final de `.codex/skills/`
- [ ] revisar estado final de docs y registry
- [ ] ejecutar validaciones documentales y tecnicas pertinentes
- [ ] reportar validaciones ejecutadas y warnings
- [ ] preparar commits o confirmar estado limpio si se pide

### No entra

- [ ] modificar contenido de skills salvo bug final menor
- [ ] crear nuevas skills
- [ ] crear scripts
- [ ] hacer deploy
- [ ] abrir otro cambio SDD real

---

## 6. Tareas detalladas

### Bloque A - Verificacion final de estructura

- [ ] listar `.codex/skills/**/SKILL.md`
- [ ] confirmar que existen las 7 skills SDD
- [ ] confirmar que no hay root `skills/` activo
- [ ] confirmar que `_inbox/` no aparece en `git status`

### Bloque B - Verificacion documental

- [ ] revisar `docs/README.md` para `docs/sdd/`
- [ ] revisar `AGENTS.md` para rutas `.codex/skills/`
- [ ] revisar `.atl/skill-registry.md`
- [ ] revisar roadmap y bloques de Sprint 3

### Bloque C - Validaciones tecnicas

- [ ] decidir si corresponde `npm run build`
- [ ] decidir si corresponde `npm test`
- [ ] si se ejecutan, reportar resultado exacto
- [ ] si no se ejecutan, reportar razon

### Bloque D - Cierre de documentacion

- [ ] marcar bloques como `done` si se cierra formalmente
- [ ] marcar roadmap como `done` si todos los criterios se cumplen
- [ ] registrar cambios finales si aplica

### Bloque E - Reporte final

- [ ] listar resultado
- [ ] listar archivos tocados
- [ ] listar validaciones ejecutadas
- [ ] listar supuestos
- [ ] listar desalineaciones docs ↔ codigo si existen
- [ ] listar pendientes y riesgos

---

## 7. Archivos probables a tocar

### Docs

- `docs/sdd/parches/sprint-3/block-6.md`
- `docs/sdd/parches/sprint-3/roadmap.md`
- `docs/sdd/parches/sprint-3/block-0.md` a `block-5.md` si se marcan como `done`
- `docs/governance/decision-log.md` si aplica

### Codigo

- no se esperan cambios de codigo en esta fase

---

## 8. Dependencias y bloqueos

### Dependencias

- [ ] cierre de `Bloque 5`
- [ ] decisiones de validacion claras
- [ ] worktree entendible

### Bloqueos posibles

- [ ] validacion falla
- [ ] quedan referencias inconsistentes
- [ ] hay cambios no relacionados mezclados en el worktree
- [ ] no esta claro si marcar roadmap como `done`

### Mitigacion

- no marcar cierre si validaciones fallan
- separar cambios no relacionados
- reportar pendientes en vez de ocultarlos

---

## 9. Validaciones

### Documentales

- [ ] verificar alineacion con `docs/README.md`
- [ ] verificar alineacion con `docs/sdd/parches/sprint-3/roadmap.md`
- [ ] verificar que no se introdujeron decisiones fuera de contrato
- [ ] verificar que roadmap, bloques e implementation report no se contradicen

### Tecnicas

- [ ] `git status --short`
- [ ] `find .codex/skills -maxdepth 2 -type f -name SKILL.md`
- [ ] `rg -n 'skills/|\\.codex/skills' AGENTS.md .atl docs/sdd/parches/sprint-3`
- [ ] `npm run build` si corresponde por alcance
- [ ] `npm test` si corresponde por alcance

### Manuales

- [ ] revision final de triggers de skills
- [ ] revision final de que el sistema no fuerza cambios pequeños a SDD completo
- [ ] revision final de que no hay deploy ni runtime fuera de alcance

---

## 10. Criterio de cierre

La fase solo se considera cerrada si:

- [ ] estructura final de skills existe
- [ ] docs y registry estan alineados
- [ ] validaciones pertinentes pasaron o quedaron justificadas
- [ ] riesgos residuales estan reportados
- [ ] no quedan cambios fuera de alcance sin explicar
- [ ] Sprint 3 puede considerarse listo para uso operativo

---

## 11. Riesgos y notas

### Riesgos

- cerrar el sprint con registry desactualizado
- omitir validaciones relevantes
- marcar `done` sin que las 7 skills existan

### Notas operativas

- si solo se tocaron docs y skills, `npm run build` puede no ser obligatorio, pero debe justificarse
- si hay cambios acumulados de runtime por otro trabajo, separarlos antes del cierre

---

## 12. Registro de cambios del plan

- Fecha: `2026-04-25`
  - cambio: creacion inicial del plan para `Bloque 6`
  - razon: detallar cierre y validacion final de Sprint 3
