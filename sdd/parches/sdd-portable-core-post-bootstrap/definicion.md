# Definicion: SDD Portable Core Post-Bootstrap

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

- Change id: `sdd-portable-core-post-bootstrap`
- Program id: `sdd-portable-core`
- Estado: `active`
- Fuente: `sdd/parches/sdd-portable-core-post-bootstrap/handover.md`
- Ultima actualizacion: `2026-05-09`
- Owner: `paw-paw`

---

## 1. Objetivo

Normalizar el alcance post-bootstrap del programa `sdd-portable-core` despues de la migracion inicial desde `docs/sdd/` hacia `sdd/`.

El cambio existe porque el bootstrap dejo una raiz SDD operativa y transicional, pero difirio el micro-core, el modelo formal de patch, el cierre, la type-awareness de skills, templates finales, validacion local y audit de writers.

Cuando este intake cierre, debe existir una definicion trazable para ejecutar el resto del handover como un unico patch SDD, con fases estrictas, decision gates explicitos y validacion por fase.

---

## 2. No objetivos

- [ ] No modificar runtime Astro, `src/`, `public/`, routing, i18n, SEO ni deployment.
- [ ] No cambiar estrategia, arquitectura, contenido, visualidad o delivery del portfolio publico.
- [ ] No introducir CI, link checker completo, OpenAI Evals ni evals formales dentro de este patch salvo decision humana posterior.
- [ ] No crear un workspace formal de programa si `program_id` sigue siendo suficiente.
- [ ] No ampliar permisos o autonomia de writers sin audit y decision registrada.
- [ ] No convertir `sdd/core/` en una enciclopedia ni mover doctrina host hacia el core portable.
- [ ] No tratar legacy bajo `sdd/parches/legacy/` como patron vigente para nuevos workspaces.
- [ ] No ejecutar fases sin `tasks.md`, `backlog/faseN.md`, validaciones proporcionales y gates claros.

---

## 3. Fuentes de verdad aplicables

- `docs/README.md`
- `AGENTS.md`
- documentos contractuales aplicables:
  - `docs/README.md`
  - `docs/AGENTS.md`, si una fase futura toca reglas operativas dentro de `docs/`
  - cualquier documento contractual de `docs/` que una fase futura declare afectado
- documentos auxiliares aplicables:
  - `sdd/README.md`
  - `sdd/parches/README.md`
  - `sdd/templates/definicion.md`
  - `sdd/orchestration/README.md`
  - `sdd/orchestration/skill-routing.md`
  - `sdd/orchestration/artifact-state-machine.md`
  - `sdd/orchestration/decision-gates.md`
  - `sdd/orchestration/drift-policy.md`
  - `sdd/orchestration/subagent-policy.md`
  - `sdd/orchestration/model-policy.md`
  - `.codex/skills/sdd-intake/SKILL.md`
- fuentes externas o handovers:
  - `sdd/parches/sdd-portable-core-post-bootstrap/handover.md`
  - `_inbox/megapatch/handover_rearquitectura_sdd_portable_consolidado.md`, como fuente upstream auxiliar ya filtrada por el handover
  - `docs/sdd/parches/sdd-portable-core-bootstrap/**`, solo como excepcion transicional e historial del bootstrap

Nota:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- `sdd/` es auxiliar operativo; no reemplaza los contratos vivos del portfolio
- `sdd/parches/` es el workspace contractual activo para cambios SDD posteriores al bootstrap
- `docs/sdd/parches/sdd-portable-core-bootstrap/**` sigue siendo una excepcion transicional documentada, no el patron vigente para nuevos workspaces
- el handover preservado es fuente de entrada para este intake, no fuente contractual viva por si mismo

---

## 4. Alcance

### Si entra

- [ ] Definir el cambio `sdd-portable-core-post-bootstrap` como continuacion SDD formal del programa `sdd-portable-core`.
- [ ] Preservar que el bootstrap ya resolvio la migracion estructural inicial y que el trabajo restante empieza desde `sdd/`.
- [ ] Capturar las areas restantes del programa: micro-core, patch manifest, lifecycle/cierre, type-awareness de skills, templates finales, validacion local, writer audit y pendientes diferidos.
- [ ] Ejecutar el resto del handover como un unico patch, pero dividido en fases estrictas, secuenciales y revisables.
- [ ] Exigir que cada fase tenga backlog propio, validaciones proporcionales y criterio de cierre antes de abrir fases dependientes.
- [ ] Identificar decisiones abiertas que deben resolverse antes o durante `sdd-plan`.
- [ ] Mantener visibles los riesgos heredados del handover y del drift sync bootstrap.

### Fuera de alcance

- [ ] Cambios de producto o superficie publica del portfolio.
- [ ] Cambios de routing, i18n, SEO estructural, deployment, dominio o dependencias runtime.
- [ ] CI, link checker completo, OpenAI Evals o evals formales.
- [ ] Expansion avanzada del core mas alla del micro-core inicial aprobado.
- [ ] Workspace formal de programa, salvo que `program_id` quede insuficiente y el usuario lo apruebe.
- [ ] Cambios destructivos sobre legacy o sobre el workspace bootstrap transicional.

---

## 5. Superficies afectadas

### Docs

- `sdd/parches/sdd-portable-core-post-bootstrap/handover.md`
- `sdd/parches/sdd-portable-core-post-bootstrap/definicion.md`
- posible `sdd/parches/sdd-portable-core-post-bootstrap/decision.log`
- futuras fases, si son aprobadas en `sdd-plan`, podrian afectar:
  - `docs/README.md`
  - `AGENTS.md`
  - `docs/AGENTS.md`
  - `sdd/README.md`
  - `sdd/parches/README.md`
  - `sdd/templates/README.md`
  - `sdd/orchestration/**`
  - `sdd/core/**`
  - `sdd/tools/**`
  - `sdd/tests/**`
  - `.codex/skills/**`
  - `.codex/agents/**`

### Codigo o contenido

- ninguno durante intake
- futuras fases no deberian tocar runtime Astro salvo que `sdd-plan` detecte referencias SDD acopladas a build, scripts o superficie publica

### Configuracion o validacion

- ninguna durante intake
- futuras fases podrian afectar:
  - `package.json`, solo si se aprueba exponer validacion SDD por script npm
  - `sdd/tools/**`, si se aprueba validation tooling local
  - `.codex/skills/**` y `.codex/agents/**`, si se aprueba type-awareness o audit

---

## 6. Decisiones conocidas

- decision:
  - usar SDD formal para el trabajo post-bootstrap
  - razon: el alcance afecta metodologia SDD, estructura operativa, skills, validacion y cierre; excede un cambio local reversible
  - documentos o areas afectadas: `sdd/parches/sdd-portable-core-post-bootstrap/**`
- decision:
  - usar `sdd-portable-core-post-bootstrap` como `change-id`
  - razon: el usuario pidio completar intake para el cambio que vive en esa ruta y el handover ya lo declara como id tentativo
  - documentos o areas afectadas: `sdd/parches/sdd-portable-core-post-bootstrap/**`
- decision:
  - mantener `sdd-portable-core` como `program_id`
  - razon: el handover y el bootstrap ya modelan la rearquitectura como programa ligero de patches relacionados
  - documentos o areas afectadas: futuros workspaces SDD relacionados
- decision:
  - no crear `patch.yaml` durante este intake
  - razon: el modelo formal de manifest todavia es alcance pendiente del programa y no existe schema, core ni validacion que lo gobierne
  - documentos o areas afectadas: `sdd/parches/sdd-portable-core-post-bootstrap/**`
- decision:
  - no usar subagentes ni writers para este intake
  - razon: el workspace tiene handover unico, las rutas aplicables son claras y la skill autoriza writers solo opcionalmente
  - documentos o areas afectadas: esta definicion y el reporte de ejecucion
- decision:
  - ejecutar el contenido restante del handover como un unico patch con fases estrictas
  - razon: decision explicita del usuario; reduce fragmentacion de programa, pero requiere gates internos fuertes para evitar un megapatch descontrolado
  - documentos o areas afectadas: `sdd/parches/sdd-portable-core-post-bootstrap/plan.md`, futuro `tasks.md`, futuros `backlog/faseN.md`

---

## 7. Decisiones abiertas

- No hay decisiones abiertas que bloqueen `sdd-tasks`.
- Las decisiones de bootstrap transicional, promocion `orchestration` -> `core`, validacion SDD y creacion de `sdd-close` fueron cerradas el `2026-05-09` en `decision.log`.

---

## 8. Riesgos

- riesgo:
  - impacto: tratar el patch unico como un megapatch sin controles internos
  - mitigacion: exigir fases estrictas, dependencias explicitas, backlogs separados, validaciones por fase y decision gates antes de fases dependientes
- riesgo:
  - impacto: convertir `sdd/core/` en una enciclopedia en vez de micro-core reusable
  - mitigacion: limitar core inicial a reglas compartidas que afecten multiples skills y dejar detalles procedimentales en skills
- riesgo:
  - impacto: introducir `patch.yaml` antes de definir autoridad, schema y validacion
  - mitigacion: mantener manifest fuera de intake y planificarlo como bloque formal con reglas de lifecycle
- riesgo:
  - impacto: cerrar patches sin reconciliar reglas vivas hacia `docs/`, `sdd/core` o `AGENTS.md`
  - mitigacion: definir `sdd-close` y `cierre.md` antes de depender de cierre formal amplio
- riesgo:
  - impacto: ampliar confianza o permisos de writers sin audit
  - mitigacion: mantener writers bajo autorizacion explicita de skills y exigir audit antes de ampliar autonomia
- riesgo:
  - impacto: dejar `sdd/templates/` y `sdd/orchestration/` como fuentes finales por inercia
  - mitigacion: clasificarlas como transicionales y planificar migracion de templates a assets de skills cuando corresponda
- riesgo:
  - impacto: arrastrar residuales del bootstrap como si siguieran vigentes
  - mitigacion: contrastar cada residual durante `sdd-plan`; por ejemplo, `.gitignore` ya contiene excepciones para `docs/**/decision.log` y `sdd/**/decision.log`

---

## 9. Criterio de cierre

La definicion queda lista para `sdd-plan` solo si:

- [x] objetivo y no objetivos estan claros
- [x] las fuentes de verdad aplicables estan listadas
- [x] el alcance y fuera de alcance no se contradicen
- [x] las decisiones abiertas estan visibles
- [x] los riesgos principales estan identificados

- [x] la decision humana sobre patch unico versus split esta registrada

---

## 10. Registro de cambios

- 2026-05-09:
  - cambio: creacion inicial de la definicion `sdd-portable-core-post-bootstrap`
  - razon: completar intake desde el handover filtrado post-bootstrap y preparar el siguiente decision gate SDD
- 2026-05-09:
  - cambio: se registra decision de ejecutar el handover restante como un unico patch con fases estrictas
  - razon: decision explicita del usuario antes de ejecutar `sdd-plan`
- 2026-05-09:
  - cambio: se cierran las decisiones abiertas remanentes de intake/plan
  - razon: preparar `sdd-tasks` sin decision gates humanos pendientes
