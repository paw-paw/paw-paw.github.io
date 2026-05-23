# Backlog Fase 1: Base e indice de orquestacion

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

- Change id: `orchestration-docs`
- Fase: `1 - Base e indice de orquestacion`
- Estado: `done`
- Ultima actualizacion: `2026-04-25`
- Owner: `pawpaw + Codex`
- Depende de:
  - `docs/sdd/parches/orchestration-docs/definicion.md`
  - `docs/sdd/parches/orchestration-docs/plan.md`
  - `docs/sdd/parches/orchestration-docs/tasks.md`
  - `docs/sdd/parches/orchestration-docs/decision.log`
- Desbloquea:
  - `docs/sdd/parches/orchestration-docs/backlog/fase2.md`
  - `docs/sdd/parches/orchestration-docs/backlog/fase3.md`
  - ejecucion de la Fase 1 con `sdd-execute-phase`

---

## 1. Fuente de verdad aplicable

- `docs/README.md`
- `AGENTS.md`
- `docs/AGENTS.md`
- `docs/sdd/parches/orchestration-docs/definicion.md`
- `docs/sdd/parches/orchestration-docs/plan.md`
- `docs/sdd/parches/orchestration-docs/tasks.md`
- `docs/sdd/parches/orchestration-docs/decision.log`
- documentos contractuales aplicables:
  - ninguno de producto por defecto
- documentos auxiliares aplicables:
  - `docs/sdd/parches/orchestration-docs/handover.md`
  - `docs/sdd/templates/backlog-faseN.md`

Nota:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- este backlog ejecuta solo la Fase 1
- si aparece drift contra `plan.md` o `tasks.md`, registralo antes de resolverlo

---

## 2. Objetivo de la fase

Crear la base documental de `docs/sdd/orchestration/` mediante un indice y reglas operativas iniciales.

Esta fase existe para que las fases posteriores tengan una entrada clara y una regla comun de precedencia.

Al cerrarla deben existir `README.md` y `orchestration-rules.md` sin convertir la carpeta en contrato superior ni duplicar `AGENTS.md`.

---

## 3. Precondiciones

### Documentos

- [x] `definicion.md` vigente
- [x] `plan.md` vigente
- [x] `tasks.md` con la fase seleccionada
- [x] contratos aplicables revisados

### Decisiones previas

- [x] decision registrada de usar `docs/sdd/orchestration/` como target documental futuro
- [x] decision registrada de mantener `docs/sdd/orchestration/` como documentacion auxiliar operativa

### Estado tecnico

- [x] no existe todavia `docs/sdd/orchestration/`
- [x] no se requiere modificar runtime Astro
- [x] no se requiere modificar `.codex/`, `AGENTS.md` ni docs contractuales

---

## 4. Alcance

### Si entra

- [x] crear `docs/sdd/orchestration/README.md`
- [x] crear `docs/sdd/orchestration/orchestration-rules.md`
- [x] documentar cuando leer y cuando no leer la carpeta de orquestacion
- [x] mapear cada documento futuro por problema operativo
- [x] declarar el principio: `AGENTS.md` gobierna, skills operan, subagentes asesoran y la sesion principal decide

### No entra

- [x] crear documentos de routing, estados, decision gates, subagentes, modelos o drift
- [x] crear o modificar skills
- [x] modificar agentes, config Codex, `AGENTS.md` o runtime Astro
- [x] elevar `docs/sdd/orchestration/` a contrato superior

---

## 5. Checklist de ejecucion

Actualiza este checklist durante la ejecucion, no solo al final.

### Bloque A - Carpeta e indice

- [x] crear `docs/sdd/orchestration/`
- [x] crear `docs/sdd/orchestration/README.md`
- [x] explicar proposito auxiliar de la carpeta
- [x] listar los documentos de soporte y el problema que resuelve cada uno

### Bloque B - Reglas operativas base

- [x] crear `docs/sdd/orchestration/orchestration-rules.md`
- [x] documentar cuando usar la carpeta y cuando no usarla
- [x] documentar la relacion entre `AGENTS.md`, skills, subagentes y sesion principal
- [x] documentar limites de alcance para cambios pequenos o rutinarios

### Bloque C - Revision local

- [x] verificar que ambos documentos remiten a `AGENTS.md` y `docs/README.md` sin duplicarlos completo
- [x] verificar que ambos documentos declaran su caracter auxiliar
- [x] verificar que no hay menciones falsas a documentos aun no creados como ya existentes, salvo referencias como "documentos de esta carpeta"

---

## 6. Archivos o areas probables

### Docs

- `docs/sdd/orchestration/README.md`
- `docs/sdd/orchestration/orchestration-rules.md`

### Codigo

- ninguno

### Configuracion o tests

- ninguno

---

## 7. Hallazgos durante ejecucion

- 2026-04-25:
  - hallazgo:
    el handover menciona `sdd-router`, pero el repo no contiene `.codex/skills/sdd-router/SKILL.md`
  - impacto:
    los documentos de base no deben presentarlo como skill activa
  - accion:
    `orchestration-rules.md` lo trata como routing conceptual o posible cambio futuro

---

## 8. Blockers

- [x] Ningun blocker actual para ejecutar la Fase 1.

---

## 9. Decisiones tomadas

- 2026-04-25:
  - decision:
    mantener `sdd-router` como concepto de routing y no como skill activa existente
  - razon:
    evita drift contra `.codex/skills/` y `AGENTS.md`
  - documentos o areas afectadas:
    `docs/sdd/orchestration/orchestration-rules.md`

---

## 10. Validaciones

### Documentales

- [x] verificar alineacion con `docs/README.md`
- [x] verificar alineacion con `AGENTS.md`
- [x] verificar que el backlog sigue trazable a `tasks.md`
- [x] verificar que `README.md` presenta la carpeta como auxiliar operativa
- [x] verificar que `orchestration-rules.md` no duplica reglas completas de `AGENTS.md`
- [x] verificar que no redefine precedencia documental

### Tecnicas

- [x] no aplica `npm run build` porque la fase no toca runtime Astro
- [x] no aplica `npm test` porque la fase no toca logica cubierta por tests
- [x] usar busqueda textual para confirmar rutas y nombres esperados

### Manuales

- [x] revision editorial/manual de claridad operativa

### Resultados

- Comando o revision: `test -f docs/sdd/orchestration/README.md && test -f docs/sdd/orchestration/orchestration-rules.md`
- Resultado: OK
- Notas: existen los dos documentos esperados de Fase 1.

- Comando o revision: `rg -n "AGENTS.md governs|auxiliary|docs/README.md|sdd-router|does not currently contain|not replace|not a new source" docs/sdd/orchestration/README.md docs/sdd/orchestration/orchestration-rules.md`
- Resultado: OK
- Notas: las referencias criticas aparecen y `sdd-router` no se presenta como skill activa existente.

- Comando o revision: revision manual
- Resultado: OK
- Notas: no aplica `npm` porque no hay cambios de runtime Astro.

---

## 11. Cierre

La fase solo se considera cerrada si:

- [x] checklist completo o pendientes explicitamente diferidos
- [x] decisiones relevantes registradas
- [x] validaciones requeridas ejecutadas o justificadas
- [x] drift documentado o resuelto
- [x] reporte final listo

---

## 12. Riesgos y pendientes

### Riesgos

- duplicar `AGENTS.md` en vez de referenciarlo
- presentar `docs/sdd/orchestration/` como fuente contractual superior
- dejar el indice demasiado generico para orientar el uso bajo demanda

### Pendientes

- ejecutar Fase 2 con `sdd-execute-phase`
- ejecutar Fase 3 con `sdd-execute-phase`

---

## 13. Registro de cambios

- 2026-04-25:
  - cambio: creacion inicial del backlog de Fase 1
  - razon: convertir `tasks.md` en checklist operativo de ejecucion para la base documental
- 2026-04-25:
  - cambio: ejecucion y cierre de Fase 1
  - razon: crear indice y reglas base de `docs/sdd/orchestration/`
