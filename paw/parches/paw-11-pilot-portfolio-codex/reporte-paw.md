# Reporte PAW: Piloto Portfolio

## Evaluación

La adopción manual de PAW v2 candidate fue suficiente para guiar este cambio, con una condición importante: hubo que adaptar piezas locales porque la distribución todavía no está estabilizada para un repo consumidor.

PAW respetó bien la autoridad documental del portfolio. El flujo obligó a actualizar primero `docs/visual/interaction-spec.md`, luego implementar CSS/JS, y finalmente clasificar drift en `decision.log`.

## Fricción

- La copia manual de superficies PAW fue viable, pero extensa.
- El validador de patches conservaba una ruta SDD (`sdd/parches`) y hubo que corregirlo a `paw/parches`.
- `validate-adoption` valida catálogos y fixtures, pero no el adoption record local creado en este patch.
- En Windows, los tests del portfolio necesitaban ajustes para invocar `npm.cmd` y evitar escritura de telemetría fuera del workspace.
- Correr build y test en paralelo provocó interferencia en `dist`; deben ejecutarse en serie.
- La revisión visual automatizada quedó parcialmente limitada por el browser runtime: cargó rutas y estilos, pero no activó `:hover`.

## Skills Y Contratos

Los skills y contratos PAW fueron útiles para ordenar el trabajo:

- `paw-router` y `paw-plan` ayudaron a ubicar intake, plan y autoridad.
- `paw-tasks`, `paw-phase-backlog` y `paw-execute-phase` dieron una secuencia clara para separar definición, implementación y validación.
- `paw-conformance` y `paw-close` empujaron a registrar drift, evidencias, rollback y gaps.
- `patch-model`, `authority-and-evidence`, `drift-policy`, `workflow` y `conformance` fueron suficientes para operar sin SDD v1.

La progressive disclosure funcionó de forma aceptable, pero el costo de contexto fue alto porque la adopción PAW v2 todavía exige leer varias piezas antes de crear artifacts con confianza.

## Artifacts

El adoption record, assessment, plan, tasks, backlog y decision log fueron útiles para este piloto. En particular:

- dejaron explícito que PAW v2 fue opt-in candidate;
- protegieron la prohibición de `origin/dev` y SDD v1;
- separaron superficie operativa PAW de superficie pública;
- hicieron visible el drift técnico de GSAP, validadores y tests.

## Hallazgos Para PAW

- La distribución PAW necesita un modo consumidor que copie solo superficies requeridas y registre la excepción de candidate/local.
- Los validadores deben dejar de heredar nombres/rutas SDD.
- `validate-adoption` debería poder validar adoption records reales dentro de patches.
- Sería útil un checklist PAW específico para entornos Windows y repos Astro.
- El cierre debería distinguir mejor entre revisión visual automatizada, inspección CSS y revisión humana pendiente.

## Recomendación

Mantener `dev-paw` como rama operativa de PAW v2 para próximos pilotos. No promover PAW v2 ni artifacts operativos a `main`.

Promover a producción solo el cambio público por cherry-pick/PR selectivo: documentación visual, CSS/JS y, si se decide conservarlos, los ajustes de test portability.
