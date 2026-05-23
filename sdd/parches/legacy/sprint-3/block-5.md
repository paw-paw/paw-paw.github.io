# Phase Plan

Usa este plan para ejecutar el Bloque 5 del roadmap de Sprint 3.

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

Antes de usarlo:

- confirma que las 7 skills SDD existen bajo `.codex/skills/`
- revisa `AGENTS.md`
- revisa `.atl/skill-registry.md`
- revisa cada `SKILL.md` creado

---

## Metadatos

- Fase: `Sprint 3 - Bloque 5 - Registro, coherencia y verificacion manual de skills`
- Estado: `done`
- Ultima actualizacion: `2026-04-25`
- Owner: `pawpaw + Codex`
- Depende de:
  - `docs/README.md`
  - `AGENTS.md`
  - `.atl/skill-registry.md`
  - `docs/sdd/parches/sprint-3/roadmap.md`
  - `docs/sdd/parches/sprint-3/block-4.md`
  - las 7 skills SDD creadas
- Desbloquea:
  - cierre del sprint
  - uso confiable de las skills en trabajo futuro
  - validacion final de consistencia documental

---

## 1. Objetivo de la fase

Esta fase debe asegurar que el sistema SDD Skills queda registrado y coherente. Al cerrarla, `AGENTS.md`, `.atl/skill-registry.md` y las rutas reales bajo `.codex/skills/` no deben contradecirse; los triggers de las 7 skills deben ser distinguibles; y ninguna skill debe funcionar como catch-all o reemplazo de `AGENTS.md`. Esta fase existe para evitar que el sistema nazca completo pero dificil de usar.

---

## 2. Fuente de verdad aplicable

- `docs/README.md`
- roadmap activo o historico aplicable en `docs/sdd/`:
  - `docs/sdd/parches/sprint-3/roadmap.md`
  - `docs/sdd/parches/sprint-3/implementation-report.md`
  - `docs/sdd/parches/sprint-3/block-4.md`
- documentos contractuales aplicables:
  - no hay contrato de producto nuevo en esta fase
- documentos auxiliares aplicables:
  - `AGENTS.md`
  - `.atl/skill-registry.md`
  - `docs/governance/decision-log.md`

Nota:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- este plan no puede contradecir documentos contractuales
- este bloque valida coherencia; no amplia el sistema

---

## 3. Inputs requeridos

### Documentos

- [ ] `AGENTS.md`
- [ ] `.atl/skill-registry.md`
- [ ] `docs/sdd/parches/sprint-3/implementation-report.md`
- [ ] los 7 `SKILL.md` SDD

### Decisiones previas

- [ ] las 7 skills SDD ya fueron creadas
- [ ] `.codex/skills/` es ubicacion activa
- [ ] `skills/` root es ruta obsoleta

### Estado tecnico

- [ ] `find .codex/skills -maxdepth 2 -type f -name SKILL.md` lista todas las skills esperadas
- [ ] no hay archivos trackeados bajo root `skills/`
- [ ] no se agregaron dependencias

---

## 4. Entregables documentales

### Crear

- [ ] `docs/sdd/parches/sprint-3/block-5.md`

### Actualizar

- [ ] `AGENTS.md` si falta alguna skill o ruta
- [ ] `.atl/skill-registry.md`
- [ ] `docs/governance/decision-log.md` si se registra cierre de decision

### No tocar

- [ ] `src/`
- [ ] `package.json`
- [ ] `.github/`
- [ ] documentos contractuales de producto salvo contradiccion real

---

## 5. Alcance de implementacion

### Si entra

- [ ] actualizar registry con las 7 skills SDD
- [ ] revisar que las 5 skills editoriales existentes apuntan a `.codex/skills/`
- [ ] revisar que `sdd-*` no este excluido si pasa a ser activo
- [ ] revisar manualmente triggers y solapamientos
- [ ] registrar riesgos residuales

### No entra

- [ ] reescribir todas las skills por estilo
- [ ] crear nuevos recursos o scripts
- [ ] ejecutar una prueba real end-to-end con artefactos SDD si no esta aprobada
- [ ] modificar runtime

---

## 6. Tareas detalladas

### Bloque A - Verificacion de rutas reales

- [ ] listar skills existentes bajo `.codex/skills/`
- [ ] confirmar que existen las 7 skills SDD
- [ ] confirmar que existen las 5 skills editoriales si siguen activas
- [ ] confirmar que no hay root `skills/` con archivos trackeados

### Bloque B - Actualizacion de registry

- [ ] actualizar `.atl/skill-registry.md` con rutas `.codex/skills/...`
- [ ] agregar las 7 skills SDD como project skills
- [ ] eliminar o ajustar regla que excluye `sdd-*`
- [ ] mantener metadata del repo y scripts disponibles actualizados

### Bloque C - Revision de `AGENTS.md`

- [ ] confirmar que lista skills editoriales y SDD relevantes
- [ ] confirmar que la ubicacion indicada es `.codex/skills/`
- [ ] confirmar que no duplica contenido extenso de skills

### Bloque D - Revision manual de triggers

- [ ] comparar `description` de `sdd-intake` contra `sdd-plan`
- [ ] comparar `sdd-plan` contra `sdd-tasks`
- [ ] comparar `sdd-phase-backlog` contra `sdd-execute-phase`
- [ ] comparar `sdd-sync-drift` contra `sdd-execute-phase`
- [ ] confirmar que `astro-pages-verify` es repo-specific

### Bloque E - Riesgos residuales

- [ ] listar cualquier solapamiento pendiente
- [ ] listar si algun comando de validacion queda manual
- [ ] listar si algun script futuro podria valer la pena

---

## 7. Archivos probables a tocar

### Docs

- `docs/sdd/parches/sprint-3/block-5.md`
- `.atl/skill-registry.md`
- `AGENTS.md`
- `docs/governance/decision-log.md`

### Codigo

- no se esperan cambios de runtime
- `.codex/skills/**/SKILL.md` solo si una correccion de coherencia es necesaria

---

## 8. Dependencias y bloqueos

### Dependencias

- [ ] cierre de `Bloque 4`
- [ ] existencia de las 7 skills SDD
- [ ] rutas reales bajo `.codex/skills/`

### Bloqueos posibles

- [ ] registry queda stale
- [ ] triggers de skills son demasiado parecidos
- [ ] `AGENTS.md` se convierte en duplicado de las skills

### Mitigacion

- hacer revision de triggers como conjunto
- limitar `AGENTS.md` a lista y reglas generales
- registrar riesgos residuales en vez de sobrerrefactorizar

---

## 9. Validaciones

### Documentales

- [ ] verificar alineacion con `docs/README.md`
- [ ] verificar alineacion con el roadmap de Sprint 3
- [ ] verificar que no se introdujeron decisiones fuera de contrato
- [ ] verificar que `AGENTS.md` y `.atl/skill-registry.md` coinciden

### Tecnicas

- [ ] `find .codex/skills -maxdepth 2 -type f -name SKILL.md`
- [ ] `rg -n 'skills/|\\.codex/skills' AGENTS.md .atl docs/sdd/parches/sprint-3`
- [ ] `git status --short`
- [ ] no corresponde `npm run build` salvo cambios en superficies consumidas por Astro

### Manuales

- [ ] leer cada `SKILL.md` como usuario nuevo
- [ ] confirmar que no hay catch-all skills
- [ ] confirmar que no hay duplicacion extensa de `AGENTS.md`

---

## 10. Criterio de cierre

La fase solo se considera cerrada si:

- [ ] registry y `AGENTS.md` estan alineados
- [ ] las 7 skills SDD estan listadas o intencionalmente documentadas como activas
- [ ] los triggers son distinguibles
- [ ] no quedan referencias erroneas a root `skills/`
- [ ] riesgos residuales quedan reportados

---

## 11. Riesgos y notas

### Riesgos

- registrar skills que aun no existen
- dejar excluidas las skills `sdd-*`
- hacer cambios de estilo innecesarios durante revision

### Notas operativas

- este bloque es de coherencia, no de ampliacion funcional
- si una skill necesita correccion importante, hacerlo con patch pequeño y reportarlo

---

## 12. Registro de cambios del plan

- Fecha: `2026-04-25`
  - cambio: creacion inicial del plan para `Bloque 5`
  - razon: detallar el registro y revision de coherencia del sistema SDD Skills
