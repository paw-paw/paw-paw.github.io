# Definicion

## Objetivo

Probar PAW v2 en el portfolio Astro mediante un cambio real, acotado y reversible: integrar mejor las imagenes naturales al sistema visual con un tinte/overlay por defecto y retirar o reducir ese tinte en hover/focus cuando la superficie usa zoom suave.

## Alcance

- Adoptar PAW v2 candidate en `dev-paw` sin usar SDD v1.
- Crear este patch bajo `paw/parches/paw-11-pilot-portfolio-codex/`.
- Actualizar la documentacion visual que gobierna el comportamiento.
- Implementar el comportamiento en Work y Blog.
- Validar con checks npm y revision manual.
- Cerrar con evidencia y reporte final de funcionamiento PAW.

## Fuera De Alcance

- No tocar `origin/dev`.
- No crear ni usar `sdd/**`.
- No promover PAW v2 candidate a `main`.
- No aplicar la regla a hero, contacto, logos o todas las imagenes publicas.
- No cambiar routing, i18n, SEO estructural, deployment o dominio.
- No introducir nuevas dependencias.

## Autoridad Viva

- `docs/README.md` gobierna precedencia documental.
- `docs/visual/visual-system.md` gobierna direccion visual.
- `docs/visual/interaction-spec.md` gobierna motion e interaccion.
- `docs/visual/asset-plan.md` y `docs/content/content-system.md` ya permiten overlay/tinte reversible para `Selected Work`.
- El codigo actual es evidencia brownfield, no autoridad.

## Criterios De Aceptacion

- El patch usa PAW v2 candidate y no SDD v1.
- Work y Blog muestran tinte/overlay por defecto.
- En hover/focus, el tinte se retira o reduce y el zoom sigue siendo suave.
- `prefers-reduced-motion` no ejecuta transformaciones.
- El drift `#projects` queda neutralizado.
- `npm run build` y `npm test` pasan o sus fallos quedan registrados.
- La revision manual queda documentada.
