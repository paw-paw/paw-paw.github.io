# Phase Plan

Usa este plan para ejecutar el Bloque 0 del roadmap de Sprint 3.

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

Antes de usarlo:

- confirma que `docs/sdd/parches/sprint-3/roadmap.md` sigue siendo el roadmap activo para esta etapa
- revisa `docs/README.md`
- revisa `AGENTS.md`
- revisa `docs/sdd/parches/sprint-3/implementation-report.md`
- revisa el estado local con `git status --short`

---

## Metadatos

- Fase: `Sprint 3 - Bloque 0 - Preparacion y control de precedencia`
- Estado: `done`
- Ultima actualizacion: `2026-04-25`
- Owner: `pawpaw + Codex`
- Depende de:
  - `docs/README.md`
  - `AGENTS.md`
  - `docs/sdd/parches/sprint-3/roadmap.md`
  - `docs/sdd/parches/sprint-3/implementation-report.md`
  - convencion de `skill-creator`
- Desbloquea:
  - alineacion documental del sistema SDD
  - preparacion segura de `.codex/skills/`
  - `Bloque 1` del roadmap de Sprint 3

---

## 1. Objetivo de la fase

Esta fase debe confirmar el contexto real del repo antes de implementar el sistema SDD Skills. Al cerrarla, el ejecutor debe entender la precedencia documental, la ubicacion correcta de skills bajo `.codex/skills/`, el rol auxiliar de `docs/sdd/`, el estado del worktree y los cambios locales que no deben mezclarse con Sprint 3. Esta fase existe para evitar que el sprint empiece copiando convenciones equivocadas desde el root `skills/` o publicando staging local.

---

## 2. Fuente de verdad aplicable

- `docs/README.md`
- roadmap activo o historico aplicable en `docs/sdd/`:
  - `docs/sdd/parches/sprint-3/roadmap.md`
  - `docs/sdd/parches/sprint-3/implementation-report.md`
  - `docs/sdd/templates/backlog-faseN.md`
- documentos contractuales aplicables:
  - no hay contrato de producto nuevo en este bloque
- documentos auxiliares aplicables:
  - `AGENTS.md`
  - `.atl/skill-registry.md`
  - `docs/governance/decision-log.md`

Nota:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- este plan no puede contradecir documentos contractuales
- `AGENTS.md` gobierna la conducta operativa del repo; las skills operan bajo esa capa

---

## 3. Inputs requeridos

### Documentos

- [ ] `docs/README.md`
- [ ] `AGENTS.md`
- [ ] `docs/sdd/parches/sprint-3/roadmap.md`
- [ ] `docs/sdd/parches/sprint-3/implementation-report.md`
- [ ] `.atl/skill-registry.md`

### Decisiones previas

- [ ] las skills locales de Codex deben vivir bajo `.codex/skills/`
- [ ] `docs/sdd/` debe ser auxiliar operativo, no contrato superior
- [ ] `_inbox/` debe quedar como staging local ignorado
- [ ] las 7 skills SDD se implementan en una sola entrega del sprint

### Estado tecnico

- [ ] `git status --short` revisado
- [ ] `.codex` existe como directorio y no como archivo bloqueante
- [ ] no hay cambios locales no entendidos dentro del alcance del sprint
- [ ] no se requiere tocar `src/`, `package.json` ni `.github/` en este bloque

---

## 4. Entregables documentales

### Crear

- [ ] `docs/sdd/parches/sprint-3/block-0.md`

### Actualizar

- [ ] ninguno por defecto

### No tocar

- [ ] `docs/strategy/`
- [ ] `docs/architecture/`
- [ ] `docs/content/`
- [ ] `docs/visual/`
- [ ] `docs/delivery/`
- [ ] `src/`
- [ ] `.github/`
- [ ] `_inbox/`

---

## 5. Alcance de implementacion

### Si entra

- [ ] revisar estado de archivos y commits recientes
- [ ] confirmar ubicacion `.codex/skills/`
- [ ] confirmar que `skills/` no se recrea en root
- [ ] identificar referencias historicas que aun apunten a `skills/`
- [ ] listar riesgos de precedencia o staging local antes de editar

### No entra

- [ ] crear nuevas skills
- [ ] editar `AGENTS.md`
- [ ] editar `docs/README.md`
- [ ] actualizar `.atl/skill-registry.md`
- [ ] correr migraciones
- [ ] modificar runtime Astro

---

## 6. Tareas detalladas

### Bloque A - Relectura de gobierno

- [ ] leer `docs/README.md` con foco en precedencia documental
- [ ] leer `AGENTS.md` con foco en workflow esperado, validacion y ubicacion de skills
- [ ] leer `docs/sdd/parches/sprint-3/implementation-report.md`
- [ ] leer `docs/sdd/parches/sprint-3/roadmap.md`

### Bloque B - Revision del estado local

- [ ] ejecutar `git status --short`
- [ ] verificar si hay cambios no relacionados al sprint
- [ ] confirmar si `.codex` es directorio
- [ ] confirmar si existe una carpeta `skills/` en root y si contiene archivos
- [ ] confirmar que `_inbox/` esta ignorado por git

### Bloque C - Lectura de convenciones de skills

- [ ] abrir una skill existente bajo `.codex/skills/`
- [ ] revisar frontmatter esperado
- [ ] revisar estructura comun de `SKILL.md`
- [ ] confirmar si hace falta leer `skill-creator`

### Bloque D - Preparacion de decisiones para bloque siguiente

- [ ] listar referencias que deben actualizarse en `Bloque 1`
- [ ] listar si `docs/README.md` ya contempla o no `docs/sdd/`
- [ ] listar si `.atl/skill-registry.md` contradice las nuevas skills SDD
- [ ] decidir si hace falta registrar decision en `docs/governance/decision-log.md`

---

## 7. Archivos probables a tocar

### Docs

- `docs/sdd/parches/sprint-3/block-0.md`

### Codigo

- no se esperan cambios de codigo en esta fase

---

## 8. Dependencias y bloqueos

### Dependencias

- [ ] acceso al worktree local
- [ ] roadmap de Sprint 3 disponible
- [ ] implementation report de Sprint 3 disponible

### Bloqueos posibles

- [ ] worktree contiene cambios no relacionados dificiles de separar
- [ ] `.codex` vuelve a aparecer como archivo
- [ ] referencias a `skills/` siguen mezclando habilidades profesionales de contenido con skills de Codex

### Mitigacion

- separar hallazgos por categoria antes de editar
- no tocar archivos fuera de alcance en este bloque
- reportar cualquier ambiguedad antes de avanzar a `Bloque 1`

---

## 9. Validaciones

### Documentales

- [ ] verificar alineacion con `docs/README.md`
- [ ] verificar alineacion con `docs/sdd/parches/sprint-3/roadmap.md`
- [ ] verificar que no se introdujeron decisiones fuera de contrato

### Tecnicas

- [ ] `git status --short`
- [ ] `find .codex/skills -maxdepth 2 -type f -name SKILL.md`
- [ ] no corresponde `npm run build` salvo que se haya tocado una superficie consumida por Astro

### Manuales

- [ ] confirmar que el ejecutor entiende que `.codex/skills/` es la ubicacion activa
- [ ] confirmar que `_inbox/` no debe entrar a commits

---

## 10. Criterio de cierre

La fase solo se considera cerrada si:

- [ ] el estado del worktree esta entendido y reportado
- [ ] la precedencia documental esta identificada
- [ ] la ubicacion `.codex/skills/` esta confirmada
- [ ] las referencias a corregir en `Bloque 1` estan identificadas
- [ ] no se hicieron cambios fuera de alcance

---

## 11. Riesgos y notas

### Riesgos

- mezclar limpieza de branch con implementacion de skills
- asumir que `skills/` en root sigue siendo ubicacion valida
- publicar `_inbox/` por error

### Notas operativas

- este bloque es preparatorio y debe ser corto
- si el worktree ya esta limpio y `.codex/skills/` existe, el bloque puede cerrarse rapido

---

## 12. Registro de cambios del plan

- Fecha: `2026-04-25`
  - cambio: creacion inicial del plan para `Bloque 0`
  - razon: detallar la preparacion necesaria antes de implementar el sistema SDD Skills
