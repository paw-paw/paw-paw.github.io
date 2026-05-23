# Legacy SDD

Esta carpeta preserva memoria historica de workspaces SDD creados antes de la raiz portable `sdd/`.

## Regla principal

El contenido en `legacy/` es trazabilidad historica, no fuente normativa vigente.

No usar estos artifacts como plantilla directa para patches nuevos si contradicen:

- `docs/README.md`;
- `AGENTS.md`;
- `sdd/README.md`;
- skills SDD vigentes;
- futuros contratos del micro-core.

## Uso permitido

- reconstruir contexto de decisiones;
- auditar cambios ya ejecutados;
- entender migraciones previas;
- conservar referencias historicas sin reescritura masiva.

## Uso no permitido

- inferir convenciones nuevas;
- tratar rutas antiguas como activas;
- crear patches nuevos siguiendo estructura legacy si existe una regla vigente diferente.
