# Reporte de migracion: SDD Portable Core Bootstrap

Este reporte documenta el cierre preparatorio del patch `sdd-portable-core-bootstrap`.
No cierra el programa `sdd-portable-core` completo y no introduce doctrina core nueva.

---

## Resumen

El patch ejecuto una migracion estructural inicial desde el layout operativo anterior `docs/sdd/` hacia la raiz portable `sdd/`.

La ejecucion fue migration-first:

- creo autoridad minima de ruta bajo `sdd/`;
- migro templates, orquestacion y workspaces historicos;
- reconcilio referencias normativas y operativas hacia `sdd/...`;
- dejo clasificados los residuos `docs/sdd/...` como historicos o transicionales.

No se creo `sdd/core/`, `patch.yaml`, `sdd-close`, tooling de validacion, CI, link checker, evals ni cambios runtime Astro.

---

## Estructura creada

- `sdd/README.md`
- `sdd/parches/README.md`
- `sdd/parches/legacy/README.md`
- `sdd/templates/README.md`
- `sdd/orchestration/README.md`

Despues de la migracion fisica tambien quedan bajo `sdd/`:

- `sdd/templates/**`
- `sdd/orchestration/**`
- `sdd/parches/legacy/**`

---

## Rutas eliminadas o vaciadas

- `docs/sdd/templates/` fue migrado a `sdd/templates/`.
- `docs/sdd/orchestration/` fue migrado a `sdd/orchestration/`.
- Workspaces historicos bajo `docs/sdd/parches/` fueron migrados a `sdd/parches/legacy/`.
- `docs/sdd/parches/README.md` fue eliminado porque ya no describe una ruta activa.

Permanece como excepcion transicional:

- `docs/sdd/parches/sdd-portable-core-bootstrap/**`

Esa excepcion conserva la evidencia del patch activo y no valida `docs/sdd/` como ruta final.

---

## Legacy migrado

Los workspaces historicos migrados quedaron bajo `sdd/parches/legacy/`.
`sdd/parches/legacy/README.md` declara que esa memoria no es normativa y no debe usarse como patron vigente para nuevos patches.

Se conservaron referencias internas antiguas en legacy cuando reescribirlas habria destruido contexto historico.

---

## Referencias antiguas clasificadas

### Normativas vigentes actualizadas

Se actualizaron referencias operativas en:

- `README.md`
- `AGENTS.md`
- `docs/README.md`
- `docs/AGENTS.md`
- `.codex/skills/*/SKILL.md`
- `.codex/agents/*.toml`

Las referencias vigentes ahora apuntan a `sdd/...` cuando describen workspace SDD, templates u orquestacion.

### Historicas / legacy

Se conservan referencias `docs/sdd/...` dentro de:

- `sdd/parches/legacy/**`
- `docs/governance/decision-log.md`

Estas referencias describen decisiones, rutas y workspaces del layout anterior.

### Transicionales

Se conservan referencias `docs/sdd/...` dentro de:

- `docs/sdd/parches/sdd-portable-core-bootstrap/**`
- `sdd/parches/README.md`

Estas referencias documentan la excepcion del bootstrap activo y el origen de la migracion.

### Diferidos

Las menciones a `patch.yaml`, `sdd-close`, `sdd/core`, validation tooling, writer audit, CI, link checker y evals se conservan como trabajo futuro o restricciones explicitas de alcance.

---

## Notas de ejecucion

- `git mv` no pudo usarse durante Fase 2 porque el sandbox no pudo crear `.git/index.lock`; los movimientos se hicieron con `mv`.
- La actualizacion de `.codex/skills/*/SKILL.md` y `.codex/agents/*.toml` requirio escritura escalada porque el sandbox no podia crear archivos temporales bajo `.codex/`.
- `git check-ignore -v` confirma que `*.log` en `.gitignore` ignora los `decision.log`; al preparar commit habra que agregarlos explicitamente si deben versionarse.
- No se tocaron `src/**`, `public/**`, dependencias, runtime Astro ni configuracion de build del sitio.

---

## Validaciones ejecutadas

- `find sdd -maxdepth 4 -type f | sort`
- `find docs/sdd -maxdepth 4 -type f | sort`
- `rg -n "docs/sdd|sdd/templates|sdd/parches|sdd/orchestration|patch.yaml|sdd-close" AGENTS.md README.md docs sdd .codex/skills .codex/agents package.json`
- `test ! -e sdd/core && printf 'no sdd/core\n' || printf 'sdd/core exists\n'`
- `find sdd -maxdepth 3 -type f | sort`
- `git diff --check`

`npm run build` y `npm test` se omitieron porque el patch no modifica runtime Astro, `src/`, `public/`, dependencias ni logica cubierta por tests.

---

## Riesgos residuales

- El bootstrap activo permanece bajo `docs/sdd/parches/` como excepcion transicional.
- Los `decision.log` siguen afectados por el patron global `*.log` de `.gitignore`.
- Las skills ya documentan rutas `sdd/...`, pero no tienen type-awareness completa por manifest.
- El modelo de `patch.yaml` todavia no existe en este repo.
- `sdd/templates/` y `sdd/orchestration/` siguen siendo transicionales y deben consolidarse en future patches.
- Las referencias historicas a `docs/sdd/...` siguen visibles dentro de legacy y documentos de decision historica; estan clasificadas, no reescritas.

---

## Trabajo diferido

- Crear micro-core completo: `sdd/core/README.md`, `patch-model.md`, `artifact-lifecycle.md`, `decision-drift-policy.md`.
- Introducir `patch.yaml`, schema y validacion local.
- Crear o adaptar `sdd-close` y `cierre.md`.
- Implementar type-awareness de skills por manifest.
- Auditar writers y permisos despues del nuevo modelo de rutas.
- Evaluar CI, link checker y evals formales para SDD.
- Decidir cierre o migracion final del workspace bootstrap transicional.

---

## Siguiente paso

El patch queda preparado para cierre o para `sdd-sync-drift` si una revision posterior considera que el workspace bootstrap debe moverse antes de cerrar.

---

## Sincronizacion de drift

- 2026-05-09:
  - se ejecuto `sdd-sync-drift` sobre este patch.
  - se creo `docs/sdd/parches/sdd-portable-core-bootstrap/drift-sync.md`.
  - se actualizaron `docs/README.md` y `docs/AGENTS.md` para corregir drift contractual minimo de rutas.
  - se conservaron como pendientes: mover o cerrar definitivamente el bootstrap transicional, resolver `decision.log` ignorado por `*.log`, crear micro-core, manifest, `sdd-close` y validacion local.
