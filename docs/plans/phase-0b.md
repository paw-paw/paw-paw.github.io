# Plan de Fase 0B

Este documento detalla la ejecucion de la `Fase 0B — Saneamiento y neutralizacion del template`.

Es un documento auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

Referencias base:

- `docs/README.md`
- `docs/plans/roadmap.md`
- `docs/plans/phase-template.md`
- `docs/plans/phase-0a.md`
- `docs/governance/template-audit.md`
- `docs/governance/decision-log.md`

---

## Metadatos

- Fase: `0B`
- Estado: `done`
- Ultima actualizacion: `2026-03-11`
- Owner: `Codex + usuario`
- Depende de:
  - `Fase 0A`
- Desbloquea:
  - `Fase 1`
  - primera version de `docs/delivery/deployment.md`

---

## 1. Objetivo de la fase

Neutralizar las contradicciones y residuos criticos del template para dejar una base coherente, monoidioma y tecnicamente alineada antes de entrar en estrategia.

Al cerrar esta fase debe quedar resuelto:

- el retiro efectivo del multilenguaje heredado
- la unificacion temporal de dominio y ownership tecnico
- la limpieza de identidad heredada en sitio, metadata estructural y repo raiz
- la desactivacion o neutralizacion de superficies heredadas que no deben seguir condicionando fases posteriores

Esta fase existe para evitar que `Fase 1` y las siguientes construyan sobre una base tecnicamente incoherente o publicamente confundida con el template original.

---

## 2. Fuente de verdad aplicable

- `docs/README.md`
- `docs/plans/roadmap.md`
- documentos contractuales aplicables:
  - ninguno de estrategia, arquitectura, contenido o visual todavia
  - `docs/delivery/deployment.md` cuando se cree en esta fase
- documentos auxiliares aplicables:
  - `docs/plans/phase-0a.md`
  - `docs/governance/template-audit.md`
  - `docs/governance/decision-log.md`

Notas:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- este plan no puede contradecir documentos contractuales
- hasta `Fase 5`, el sitio debe quedar explicitamente monoidioma
- `0B` no debe introducir estrategia de portfolio, branding final ni arquitectura final del producto

---

## 3. Inputs requeridos

### Documentos

- [x] `docs/README.md`
- [x] `docs/plans/roadmap.md`
- [x] `docs/plans/phase-template.md`
- [x] `docs/plans/phase-0a.md`
- [x] `docs/governance/template-audit.md`
- [x] `docs/governance/decision-log.md`

### Decisiones previas

- [x] `0B` trabajara con perimetro amplio: sitio activo, metadata estructural y repo raiz
- [x] el sitio debe volver a monoidioma fuerte en `/`
- [x] las rutas `/en/` y `/de/` deben salir de la base activa y dejar de generarse
- [x] `Projects` debe mantenerse apagada
- [x] las legal pages heredadas deben retirarse salvo necesidad tecnica explicita
- [x] `deployment.md` puede usar placeholder temporal si deja una sola fuente de verdad tecnica
- [x] el README raiz debe quedar neutro y honesto, sin vender el template original
- [x] se permiten refactors pequenos solo si estan directamente ligados al saneamiento
- [x] el modo de trabajo sera interactivo, con checkpoints orientados a decisiones de alcance

### Estado tecnico

- [x] dependencias instaladas
- [x] baseline tecnico validado en `0A`
- [x] contradicciones principales auditadas
- [x] existe una lista priorizada de correcciones obligatorias para `0B`

---

## 4. Entregables documentales

### Crear

- [x] `docs/delivery/deployment.md`
- [x] `docs/plans/phase-0b.md`

### Actualizar

- [x] `docs/governance/template-audit.md`
- [x] `docs/governance/decision-log.md`

### No tocar

- [ ] documentos contractuales de `strategy/`, `architecture/`, `content/` o `visual/`
- [ ] `docs/plans/roadmap.md`, salvo que aparezca una contradiccion nueva que obligue a refinar alcance

---

## 5. Alcance de implementacion

### Si entra

- [x] unificar dominio temporal y ownership tecnico en config, metadata y utilidades base
- [x] retirar i18n activo de config, rutas, UI y metadata multilenguaje
- [x] dejar una sola ruta canonica activa en `/`
- [x] retirar o limpiar legal pages heredadas y sus enlaces
- [x] neutralizar branding heredado en navbar, footer, CTAs, datos estructurados y repo raiz
- [x] decidir que elementos de SEO y motion base sobreviven temporalmente y cuales se neutralizan
- [x] corregir o retirar residuos tecnicos del template que hoy generan confusion o contradiccion
- [x] dejar primera version util de `docs/delivery/deployment.md`

### No entra

- [ ] definir estrategia del portfolio
- [ ] escribir contenido final aprobado
- [ ] diseñar sistema visual final
- [ ] reintroducir i18n o localizacion
- [ ] reactivar `Projects`
- [ ] rehacer motion premium propio de `Fase 7`
- [ ] rehacer SEO final propio de `Fase 6`

---

## 6. Tareas detalladas

### Bloque A — Deployment y ownership tecnico

- [x] crear `docs/delivery/deployment.md`
- [x] fijar placeholder temporal de dominio si el dominio final aun no existe
- [x] unificar `astro.config.mjs -> site`
- [x] unificar `public/robots.txt -> sitemap`
- [x] unificar ownership tecnico en `src/utils/me.ts`
- [x] verificar si `netlify.toml` sobrevive tal cual, se simplifica o se deja como baseline temporal

### Bloque B — Rollback a monoidioma

- [x] retirar i18n activo de `astro.config.mjs`
- [x] retirar `LanguageSwitcher`
- [x] retirar generacion activa de rutas `/en/` y `/de/`
- [x] dejar `/` como unica home canonica
- [x] retirar `hreflang`, `x-default` y alternates multilenguaje que ya no apliquen
- [x] limpiar residuos de traduccion o wiring de i18n que dejen contradicciones visibles

### Bloque C — Limpieza de identidad heredada

- [x] limpiar identidad heredada en `src/utils/me.ts`
- [x] limpiar branding heredado en navbar, footer y CTAs principales
- [x] revisar nombres o referencias de assets heredados si inducen confusion
- [x] neutralizar datos estructurados o metadata generica del template que sigan atados al autor original
- [x] reescribir `README.md` raiz a un estado neutro y honesto del proyecto

### Bloque D — Superficies heredadas y residuos tecnicos

- [x] mantener `Projects` fuera de la base activa sin reactivarla
- [x] decidir tratamiento de legal pages heredadas y limpiar enlaces asociados
- [x] revisar artefactos fuera de lugar en `src/assets/`
- [x] decidir que parte del baseline de motion permanece temporalmente y cual se neutraliza
- [x] registrar cualquier superficie heredada que quede deliberadamente pospuesta

### Bloque E — Persistencia y cierre documental

- [x] actualizar `docs/governance/template-audit.md` con lo ejecutado en `0B`
- [x] actualizar `docs/governance/decision-log.md` con decisiones y cambios de criterio
- [x] registrar cambios tecnicos ejecutados vs decisiones aun pendientes
- [x] dejar claro que queda desbloqueado para `Fase 1`

### Bloque F — Checkpoints interactivos

- [x] Checkpoint 1: confirmar placeholder temporal de dominio, hosting y una sola fuente de verdad tecnica
- [x] Checkpoint 2: confirmar implementacion exacta del rollback a monoidioma antes de editar rutas y config
- [x] Checkpoint 3: confirmar tratamiento de legal pages heredadas antes de retirarlas o mantenerlas
- [x] Checkpoint 4: confirmar severidad del saneamiento de SEO, motion y repo raiz antes del cierre

Recomendacion operativa:

- ejecutar `0B` por bloques pequenos con validacion tecnica intermedia
- registrar decisiones en cuanto se fijen, no al final
- detenerse cuando aparezca una nueva ambiguedad de alcance o de producto

---

## 7. Archivos probables a tocar

### Docs

- `docs/delivery/deployment.md`
- `docs/governance/template-audit.md`
- `docs/governance/decision-log.md`
- `docs/plans/phase-0b.md`

### Codigo y config

- `astro.config.mjs`
- `public/robots.txt`
- `netlify.toml`
- `src/utils/me.ts`
- `src/utils/i18n.ts`
- `src/layouts/Layout.astro`
- `src/pages/index.astro`
- `src/pages/en/**`
- `src/pages/de/**`
- `src/pages/impressum.astro`
- `src/pages/datenschutz.astro`
- `src/components/layout/Navbar.astro`
- `src/components/layout/Footer.astro`
- `src/components/ui/LanguageSwitcher.astro`
- `src/components/sections/FooterCTA.astro`
- `src/components/sections/Projects.astro`
- `src/scripts/**`
- `src/assets/**`
- `README.md`

---

## 8. Dependencias y bloqueos

### Dependencias

- [x] `Fase 0A` cerrada
- [x] acceso a `npm`
- [x] baseline tecnico reproducible
- [x] visibilidad completa de surfaces heredadas en sitio y repo

### Bloqueos posibles

- [ ] falta de dominio final obliga a usar placeholder temporal
- [ ] retirar i18n toca mas rutas o metadata de las previstas
- [ ] legal pages heredadas tienen dependencias de enlaces distribuidas
- [ ] motion o metadata heredadas estan demasiado entrelazadas con layout base
- [ ] `netlify.toml` y `astro.config.mjs` no coinciden con el deployment temporal deseado

### Mitigacion

- fijar una sola fuente de verdad tecnica aunque el dominio sea temporal
- separar rollback a monoidioma de cualquier decision de i18n futura
- hacer limpieza incremental con build de control entre bloques
- documentar lo que se pospone deliberadamente para fases posteriores

---

## 9. Validaciones

### Documentales

- [x] verificar alineacion con `docs/README.md`
- [x] verificar alineacion con `docs/plans/roadmap.md`
- [x] verificar que no se introdujeron decisiones fuera de contrato
- [x] verificar que `docs/delivery/deployment.md` distingue entre placeholder temporal y decisiones finales pendientes

### Tecnicas

- [x] `npm run build`
- [x] verificar que solo se genera la base monoidioma esperada
- [x] verificar que ya no se emiten alternates multilenguaje ni señales incoherentes con `0B`

### Manuales

- [x] revisar navegacion visible sin `LanguageSwitcher`
- [x] revisar que no queden CTAs o enlaces criticos al autor original
- [x] revisar que legal pages y links asociados quedaron en el estado decidido
- [x] revisar que README raiz ya no presenta el template original

---

## 10. Criterio de cierre

La fase solo se considera cerrada si:

- [x] existe una primera version util de `docs/delivery/deployment.md`
- [x] el sitio queda explicitamente monoidioma hasta `Fase 5`
- [x] ya no se generan ni promueven rutas `/en/` y `/de/`
- [x] dominio, sitemap y ownership tecnico apuntan a una sola verdad tecnica
- [x] no quedan referencias criticas al autor original en metadata base, contacto o CTAs principales
- [x] `Projects` sigue fuera de la base activa
- [x] ya se decidio y ejecuto el tratamiento de legal pages heredadas
- [x] `docs/governance/template-audit.md` y `docs/governance/decision-log.md` reflejan lo ejecutado en `0B`

---

## 11. Riesgos y notas

### Riesgos

- `0B` puede crecer demasiado si intenta resolver branding final en vez de neutralizar
- retirar i18n puede destapar dependencias tecnicas no visibles en `0A`
- una limpieza demasiado agresiva de motion o metadata puede romper la base mas de lo necesario
- el placeholder temporal de deployment puede confundirse con una decision final si no queda bien documentado

### Notas operativas

- si una tarea de `0B` abre una decision de producto que deberia vivir en `Fase 1` o `Fase 2`, hay que detenerse y consultarlo
- los auxiliares no pueden contradecir el sistema documental
- este plan favorece checkpoints por decisiones de alcance, no por cada archivo tocado

---

## 12. Registro de cambios del plan

- Fecha: `2026-03-11`
  - cambio: creacion inicial del plan de `Fase 0B`
  - razon: instanciar la fase de saneamiento y neutralizacion del template a partir de las decisiones cerradas en `0A`
- Fecha: `2026-03-11`
  - cambio: cierre operativo de `Fase 0B`
  - razon: la base tecnica y publica ya quedo neutralizada para desbloquear `Fase 1`
