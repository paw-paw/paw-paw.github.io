# Writer Audit: SDD Portable Core Post-Bootstrap

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

- Change id: `sdd-portable-core-post-bootstrap`
- Fecha: `2026-05-09`
- Estado: `complete`
- Perfiles revisados:
  - `.codex/agents/sdd-artifact-writer.toml`
  - `.codex/agents/sdd-phase-worker.toml`

---

## Rubric

| Resultado | Significado |
| --- | --- |
| `pass` | el perfil contiene restriccion clara y evidencia suficiente |
| `warn` | el perfil puede operar, pero necesita supervision explicita |
| `fail` | el perfil no debe usarse para ese caso sin cambio previo |

---

## Evidencia comparativa

| Caso base | `sdd-artifact-writer` | `sdd-phase-worker` | Evidencia |
| --- | --- | --- | --- |
| artifact simple | `pass` | `warn` | artifact-writer limita targets a handover, definicion, plan, tasks, decision.log y backlog; phase-worker es para fases, no artifacts sueltos |
| artifact con contradiccion | `pass` | `warn` | artifact-writer debe detenerse si source artifacts conflictuan; phase-worker reporta blockers/drift pero no es el writer preferido para artifact aislado |
| codigo local simple | `fail` | `pass` | artifact-writer prohibe `src/`, `public/`, `package.json` e implementation files; phase-worker permite implementation files solo si manager delega zona acotada |
| cambio con validacion | `warn` | `pass` | artifact-writer preserva evidencia pero no ejecuta implementacion; phase-worker reporta validation results |
| decision gate | `pass` | `pass` | ambos perfiles instruyen detenerse ante decision no representada o trade-off/scope unclear |
| drift | `pass` | `pass` | artifact-writer marca gaps/blockers/risks; phase-worker reporta blockers, drift, assumptions y evidence gaps |

---

## Hallazgos

- No hay evidencia para ampliar permisos.
- `sdd-artifact-writer` debe seguir limitado a un artifact SDD asignado bajo `sdd/parches/<change-id>/`.
- `sdd-phase-worker` debe seguir limitado a una fase aprobada y zona de implementacion asignada.
- Ningun writer debe tocar contractual docs, routing, SEO, deployment, i18n, dependencias o scope no delegado sin decision humana.

---

## Recomendacion

Mantener permisos y reglas actuales.

Usar writers solo cuando una skill SDD lo autorice explicitamente, con ownership acotado y manager responsable de integracion, validacion y reporte.
