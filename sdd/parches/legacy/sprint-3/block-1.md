# Phase Plan

Usa este plan para ejecutar el Bloque 1 del roadmap de Sprint 3.

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

Antes de usarlo:

- confirma que `docs/sdd/parches/sprint-3/roadmap.md` sigue siendo el roadmap activo para esta etapa
- revisa `docs/README.md`
- revisa `AGENTS.md`
- toma `docs/sdd/parches/sprint-3/block-0.md` como insumo preparatorio

---

## Metadatos

- Fase: `Sprint 3 - Bloque 1 - Alineacion documental y registros operativos`
- Estado: `done`
- Ultima actualizacion: `2026-04-25`
- Owner: `pawpaw + Codex`
- Depende de:
  - `docs/README.md`
  - `AGENTS.md`
  - `docs/sdd/parches/sprint-3/roadmap.md`
  - `docs/sdd/parches/sprint-3/implementation-report.md`
  - `docs/sdd/parches/sprint-3/block-0.md`
- Desbloquea:
  - creacion de estructura `.codex/skills/` con convencion documentada
  - implementacion de las 7 skills SDD
  - registros operativos alineados antes de tocar archivos de skills

---

## 1. Objetivo de la fase

Esta fase debe alinear la documentacion y los registros operativos del repo para que el sistema SDD Skills tenga una base explicita antes de crear archivos de skill. Al cerrarla, `docs/README.md` debe reconocer `docs/sdd/` como carpeta auxiliar operativa, `AGENTS.md` debe apuntar a `.codex/skills/`, y `.atl/skill-registry.md` no debe contradecir la ubicacion activa de skills ni la futura existencia de `sdd-*`.

---

## 2. Fuente de verdad aplicable

- `docs/README.md`
- roadmap activo o historico aplicable en `docs/sdd/`:
  - `docs/sdd/parches/sprint-3/roadmap.md`
  - `docs/sdd/parches/sprint-3/implementation-report.md`
  - `docs/sdd/parches/sprint-3/block-0.md`
  - `docs/sdd/templates/backlog-faseN.md`
- documentos contractuales aplicables:
  - no hay contrato de producto nuevo en esta fase
- documentos auxiliares aplicables:
  - `AGENTS.md`
  - `.atl/skill-registry.md`
  - `docs/governance/decision-log.md`

Nota:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- este plan no puede contradecir documentos contractuales
- `docs/sdd/` debe declararse auxiliar, no contractual superior

---

## 3. Inputs requeridos

### Documentos

- [ ] `docs/README.md`
- [ ] `AGENTS.md`
- [ ] `.atl/skill-registry.md`
- [ ] `docs/sdd/parches/sprint-3/roadmap.md`
- [ ] `docs/sdd/parches/sprint-3/implementation-report.md`
- [ ] `docs/governance/decision-log.md`

### Decisiones previas

- [ ] `docs/sdd/` sera auxiliar operativo
- [ ] las skills locales viven en `.codex/skills/`
- [ ] `AGENTS.md` gobierna y las skills operan
- [ ] no se agregan dependencias ni scripts en el primer corte

### Estado tecnico

- [ ] `.codex/skills/` es la ubicacion prevista
- [ ] `_inbox/` esta ignorado por git
- [ ] no se requiere tocar `src/`

---

## 4. Entregables documentales

### Crear

- [ ] `docs/sdd/parches/sprint-3/block-1.md`

### Actualizar

- [ ] `docs/README.md`
- [ ] `AGENTS.md`
- [ ] `.atl/skill-registry.md`
- [ ] `docs/governance/decision-log.md` si se registra decision de Sprint 3

### No tocar

- [ ] `docs/strategy/`
- [ ] `docs/architecture/`
- [ ] `docs/content/`
- [ ] `docs/visual/`
- [ ] `docs/delivery/`
- [ ] `src/`
- [ ] `.github/`

---

## 5. Alcance de implementacion

### Si entra

- [ ] actualizar la organizacion documental de `docs/README.md` para incluir `sdd/`
- [ ] actualizar `AGENTS.md` para ubicar skills locales en `.codex/skills/`
- [ ] actualizar tabla de skills locales existentes
- [ ] actualizar `.atl/skill-registry.md` para rutas de proyecto y reglas de resolucion
- [ ] registrar decision si se considera relevante para trazabilidad

### No entra

- [ ] crear las 7 skills SDD
- [ ] crear `docs/sdd/` con artefactos reales
- [ ] mover o eliminar runtime
- [ ] modificar workflows de GitHub
- [ ] agregar scripts de validacion nuevos

---

## 6. Tareas detalladas

### Bloque A - Actualizacion de `docs/README.md`

- [ ] agregar `sdd/` a la organizacion por carpetas
- [ ] declarar que `docs/sdd/` contiene artefactos auxiliares operativos
- [ ] aclarar que no sustituye documentos contractuales
- [ ] revisar que la precedencia documental no cambia de forma accidental

### Bloque B - Actualizacion de `AGENTS.md`

- [ ] cambiar la estructura del repo de `skills/` a `.codex/skills/`
- [ ] actualizar la seccion de skills locales
- [ ] asegurar que la tabla apunte a `.codex/skills/{skill-name}/SKILL.md`
- [ ] no duplicar reglas de `skill-creator` mas alla de la referencia necesaria

### Bloque C - Actualizacion de `.atl/skill-registry.md`

- [ ] actualizar rutas de skills de proyecto existentes
- [ ] revisar la regla que excluye `sdd-*`
- [ ] ajustar la regla para que no contradiga el roadmap de Sprint 3
- [ ] mantener separadas skills de usuario y skills de proyecto

### Bloque D - Registro de decision

- [ ] evaluar si `docs/governance/decision-log.md` debe registrar el cambio de ubicacion y el sistema SDD
- [ ] registrar solo decisiones relevantes, no ruido operacional
- [ ] si se registra, listar documentos y archivos afectados

---

## 7. Archivos probables a tocar

### Docs

- `docs/sdd/parches/sprint-3/block-1.md`
- `docs/README.md`
- `AGENTS.md`
- `.atl/skill-registry.md`
- `docs/governance/decision-log.md`

### Codigo

- no se esperan cambios de codigo en esta fase

---

## 8. Dependencias y bloqueos

### Dependencias

- [ ] cierre de `Bloque 0`
- [ ] acuerdo en que `.codex/skills/` es ubicacion activa
- [ ] acuerdo en que `docs/sdd/` es auxiliar operativo

### Bloqueos posibles

- [ ] `docs/README.md` podria volverse ambiguo si `docs/sdd/` parece contrato nuevo
- [ ] `.atl/skill-registry.md` podria seguir excluyendo `sdd-*`
- [ ] `AGENTS.md` podria quedar desalineado con archivos reales

### Mitigacion

- usar lenguaje explicito: auxiliar operativo, no contrato
- revisar rutas reales con `find .codex/skills`
- revisar referencias con `rg`

---

## 9. Validaciones

### Documentales

- [ ] verificar alineacion con `docs/README.md`
- [ ] verificar alineacion con `docs/sdd/parches/sprint-3/roadmap.md`
- [ ] verificar que no se introdujeron decisiones fuera de contrato
- [ ] verificar que `AGENTS.md` y `.atl/skill-registry.md` no se contradicen

### Tecnicas

- [ ] `rg -n 'skills/|\\.codex/skills' AGENTS.md docs .atl`
- [ ] `git status --short`
- [ ] no corresponde `npm run build` salvo que se toque una superficie consumida por Astro

### Manuales

- [ ] revisar si un desarrollador nuevo entenderia donde crear nuevas skills
- [ ] revisar si queda claro que `docs/sdd/` no reemplaza contratos

---

## 10. Criterio de cierre

La fase solo se considera cerrada si:

- [ ] `docs/README.md` reconoce `docs/sdd/` como auxiliar operativo
- [ ] `AGENTS.md` apunta a `.codex/skills/`
- [ ] `.atl/skill-registry.md` no contradice el sistema Sprint 3
- [ ] cualquier decision relevante quedo registrada o explicitamente diferida
- [ ] no se tocaron superficies runtime

---

## 11. Riesgos y notas

### Riesgos

- convertir `docs/sdd/` en una capa contractual accidental
- dejar registros con rutas antiguas
- sobrecargar `AGENTS.md` con instrucciones que pertenecen a skills

### Notas operativas

- este bloque debe ser documentacion-first
- las skills se crean recien en bloques posteriores

---

## 12. Registro de cambios del plan

- Fecha: `2026-04-25`
  - cambio: creacion inicial del plan para `Bloque 1`
  - razon: detallar la alineacion documental previa a crear las skills SDD
