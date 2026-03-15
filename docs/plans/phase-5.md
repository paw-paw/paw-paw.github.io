# Phase 5 Plan

## Metadatos

- Fase: `5`
- Estado: `done`
- Ultima actualizacion: `2026-03-15`
- Owner: `Codex + user`
- Depende de:
  - `docs/README.md`
  - `docs/plans/roadmap.md`
  - `docs/strategy/portfolio-strategy.md`
  - `docs/architecture/site-architecture.md`
  - `docs/content/content-system.md`
  - `docs/visual/visual-system.md`
  - `docs/content/content-master.md`
  - `docs/delivery/deployment.md`
  - cierre efectivo de `Fase 4`
- Desbloquea:
  - `docs/delivery/seo-spec.md`
  - `docs/delivery/release-checklist.md`
  - deploy multiidioma real en `Fase 6`

---

## 1. Objetivo de la fase

Introducir internacionalizacion real sin reabrir estrategia, arquitectura base ni contenido maestro en ingles. Al cerrar la fase deben existir una spec contractual de i18n, una implementacion consistente para ingles y español, y una estructura de rutas localizadas coherente con la politica elegida de prefijos.

La fase existe para pasar del sitio monoidioma actual a una base multiidioma mantenible. Al cerrarla, el portfolio debe poder renderizar y navegarse en `en` y `es`, con ownership editorial claro, sin residuos activos del template heredado en aleman y con un `LanguageSwitcher` visible y multipagina.

---

## 2. Fuente de verdad aplicable

- `docs/README.md`
- `docs/plans/roadmap.md`
- documentos contractuales aplicables:
  - `docs/strategy/portfolio-strategy.md`
  - `docs/architecture/site-architecture.md`
  - `docs/content/content-system.md`
  - `docs/visual/visual-system.md`
  - `docs/delivery/deployment.md`
- documentos auxiliares aplicables:
  - `docs/content/content-master.md`
  - `docs/governance/decision-log.md`
  - `docs/plans/pre-phase-5-fixes/pre-phase-5-work.md`

Nota:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- este plan no puede contradecir documentos contractuales
- la `i18n-spec` que nace en esta fase pasa a ser contractual y debe prevalecer sobre decisiones tecnicas heredadas

---

## 3. Inputs requeridos

### Documentos

- [x] `docs/strategy/portfolio-strategy.md` en estado `done`
- [x] `docs/architecture/site-architecture.md` en estado `done`
- [x] `docs/content/content-system.md` en estado `done`
- [x] `docs/content/content-master.md` en estado `done`
- [x] `docs/delivery/deployment.md` en estado `v2`
- [x] `docs/plans/phase-4.md` formalmente cerrado o actualizado para no bloquear `Fase 5`

### Decisiones previas

- [x] idioma maestro del sitio: `ingles`
- [x] idiomas activos objetivo para `Fase 5`: `ingles + español`
- [x] politica de rutas: todos los locales con prefijo (`/en/`, `/es/`)
- [x] politica de localizacion: traduccion adaptada por mercado, no literal estricta
- [x] aleman heredado debe salir del runtime en esta fase
- [x] `LanguageSwitcher` debe volver como componente minimo y multipagina

### Estado tecnico

- [x] el sitio actual compila en monoidioma
- [x] existe wiring residual de traducciones en `src/utils/i18n.ts`
- [x] existe `src/i18n/en.json`
- [x] existe `src/i18n/de.json` como residuo heredado
- [x] hoy no existen rutas localizadas activas en `src/pages/`

---

## 4. Entregables documentales

### Crear

- [x] `docs/architecture/i18n-spec.md`

### Actualizar

- [x] `docs/delivery/deployment.md`
- [x] `docs/governance/decision-log.md`
- [x] `docs/plans/phase-5.md`

### No tocar

- [ ] `docs/strategy/portfolio-strategy.md` salvo contradiccion real
- [ ] `docs/content/content-system.md` salvo contradiccion real
- [ ] `docs/content/content-master.md` como canon del idioma maestro
- [ ] `docs/visual/visual-system.md` salvo que el `LanguageSwitcher` exija una regla visual nueva no cubierta

---

## 5. Alcance de implementacion

### Si entra

- [x] definir y documentar `en` y `es` como locales reales soportados
- [x] activar configuracion i18n real en `astro.config.mjs`
- [x] migrar el sitio a rutas localizadas con prefijo para todos los idiomas
- [x] recrear un `LanguageSwitcher` minimo, multipagina y consistente con la navegacion actual
- [x] crear contenido localizado en español sobre la base del contenido maestro en ingles
- [x] retirar el aleman heredado del runtime y limpiar wiring asociado
- [x] ajustar links internos, metadata base y helpers para el nuevo modelo de locales

### No entra

- [ ] añadir portugués como idioma activo en runtime
- [ ] reabrir estrategia, arquitectura de paginas o secciones principales
- [ ] introducir diferencias fuertes de posicionamiento por idioma
- [ ] crear SEO final por pagina, OG final por locale o release final de deploy
- [ ] reabrir visual system salvo ajustes minimos de integracion del switcher

---

## 6. Tareas detalladas

### Bloque A — Spec contractual de i18n

- [x] crear `docs/architecture/i18n-spec.md`
- [x] documentar locales soportados: `en`, `es`
- [x] documentar que el idioma maestro sigue siendo `en`
- [x] documentar que todos los locales llevan prefijo
- [x] documentar ownership editorial de cada idioma
- [x] documentar politica de traduccion adaptada por mercado
- [x] documentar que terminos se conservan en ingles y cuales se adaptan
- [x] documentar politica de fallback y manejo de gaps de traduccion

### Bloque B — Sync contractual y tecnico previo

- [x] actualizar `docs/delivery/deployment.md` con implicaciones de routing multiidioma
- [x] registrar en `docs/governance/decision-log.md` la reintroduccion controlada de i18n
- [x] revisar si `docs/architecture/site-architecture.md` necesita aclaracion sobre variantes localizadas de las mismas paginas
- [x] dejar explicitamente cerrado el destino de `src/i18n/de.json`

### Bloque C — Estructura tecnica de locales

- [x] definir configuracion i18n final en `astro.config.mjs`
- [x] decidir y aplicar estructura final de `src/pages/` acorde a locales prefijados
- [x] alinear `src/utils/i18n.ts` con `en` y `es`
- [x] eliminar del runtime referencias activas a `de`
- [x] revisar `Layout.astro` para que `lang`, canonical base y metadata no queden atados al monoidioma previo

### Bloque D — Contenido localizado

- [x] preservar `src/i18n/en.json` como implementacion del idioma maestro
- [x] crear `src/i18n/es.json` alineado con el contenido maestro y adaptado por mercado
- [x] verificar que `nav`, `hero`, previews, `/work`, `/experience`, `/contact` y `footer` queden cubiertos en ambos idiomas
- [x] detectar y resolver gaps de traduccion relevantes antes de cerrar la fase
- [x] evitar que `de.json` quede como fallback silencioso o fuente activa accidental

### Bloque E — Navegacion localizada

- [x] recrear `src/components/ui/LanguageSwitcher.astro`
- [x] integrarlo en navbar y, si aplica, en navegacion movil
- [x] asegurar que el switcher preserve la pagina actual entre idiomas cuando exista equivalente localizable
- [x] revisar enlaces internos para que apunten al locale correcto
- [x] verificar que CTAs principales y secundarios respeten el locale activo

### Bloque F — Limpieza y consistencia

- [x] limpiar residuos heredados del template aleman en UI, metadata y helpers
- [x] verificar que no queden strings del template original visibles en `src/i18n/de.json` o wiring residual activo
- [x] actualizar el checklist y estado de `docs/plans/phase-5.md`
- [x] registrar decisiones de cierre en `docs/governance/decision-log.md`

### Checkpoints interactivos previstos

- [x] Checkpoint 1: aprobar `docs/architecture/i18n-spec.md` antes de tocar routing
- [x] Checkpoint 2: aprobar criterio editorial de adaptacion `en` -> `es`
- [x] Checkpoint 3: aprobar UX minima del `LanguageSwitcher`
- [x] Checkpoint 4: validar si la estructura final de rutas requiere actualizar arquitectura o deployment mas de lo previsto

---

## 7. Archivos probables a tocar

### Docs

- `docs/architecture/i18n-spec.md`
- `docs/delivery/deployment.md`
- `docs/governance/decision-log.md`
- `docs/plans/phase-5.md`
- `docs/architecture/site-architecture.md` si aparece contradiccion real de rutas

### Codigo

- `astro.config.mjs`
- `src/i18n/en.json`
- `src/i18n/es.json`
- `src/i18n/de.json` o su eliminacion del runtime
- `src/utils/i18n.ts`
- `src/components/ui/LanguageSwitcher.astro`
- `src/components/layout/Navbar.astro`
- `src/layouts/Layout.astro`
- `src/pages/**`

---

## 8. Dependencias y bloqueos

### Dependencias

- [x] `Fase 4` formalmente cerrada o desbloqueada para no arrastrar ambiguedad de contenido
- [x] contenido maestro en ingles estable
- [x] deployment temporal sigue alineado con GitHub Pages

### Bloqueos posibles

- [x] ambiguedad sobre si `/` deja de existir como ruta publica principal cuando todos los locales llevan prefijo
- [ ] necesidad de rehacer demasiados links o estructuras de pagina para soportar locales
- [ ] divergencia editorial excesiva entre ingles y español
- [ ] residuos tecnicos del template aleman mas acoplados de lo previsto
- [ ] impacto colateral en canonicals, metadata o sitemap que empuje la fase hacia `SEO` o `Fase 6`

### Mitigacion

- resolver `i18n-spec` antes de tocar `astro.config.mjs`
- separar la migracion de rutas del trabajo editorial de traduccion
- mantener `es` como adaptacion controlada, no como version estrategicamente distinta
- tratar SEO final como fuera de alcance salvo wiring minimo necesario para que el sitio no quede roto

---

## 9. Validaciones

### Documentales

- [x] verificar alineacion con `docs/README.md`
- [x] verificar alineacion con `docs/plans/roadmap.md`
- [x] verificar que `docs/architecture/i18n-spec.md` no contradiga estrategia, arquitectura ni deployment

### Tecnicas

- [x] `npm run build`
- [x] verificar que rutas localizadas compilen sin errores
- [x] verificar que no queden imports o helpers apuntando a `de` en runtime

### Manuales

- [x] revisar navegacion entre `en` y `es`
- [x] revisar que cada pagina principal exista en ambos locales
- [x] revisar que el `LanguageSwitcher` preserve contexto de pagina
- [x] revisar que no queden gaps de traduccion importantes ni strings heredados del template

---

## 10. Criterio de cierre

La fase solo se considera cerrada si:

- [x] existe `docs/architecture/i18n-spec.md` en estado utilizable y alineado con el resto del sistema documental
- [x] `en` y `es` funcionan como locales reales y visibles
- [x] todos los locales activos usan prefijo como fue decidido
- [x] el aleman heredado salio del runtime y no deja residuos visibles
- [x] el `LanguageSwitcher` funciona en la navegacion principal
- [x] no hay gaps de traduccion importantes en `/`, `/work`, `/experience` y `/contact`
- [x] el sitio compila con la nueva estructura de i18n

---

## 11. Riesgos y notas

### Riesgos

- mover el ingles desde `/` a `/en/` puede amplificar trabajo en rutas, canonicals y links internos
- si la localizacion se vuelve demasiado libre, ingles y español pueden divergir mas de lo sostenible
- el wiring residual de `src/utils/i18n.ts` puede ocultar dependencias del aleman heredado
- recrear el `LanguageSwitcher` puede abrir una pequena decision visual si no encaja del todo con el navbar actual

### Notas operativas

- `docs/content/content-master.md` sigue siendo la fuente canonica del idioma maestro
- `src/i18n/es.json` debe nacer desde ese contenido, no desde el template ni desde `de.json`
- esta fase reintroduce i18n de forma controlada; no debe reactivar la logica heredada del template por inercia

---

## 12. Registro de cambios del plan

- Fecha: `2026-03-15`
  - cambio: creacion inicial de `docs/plans/phase-5.md`
  - razon: preparar la ejecucion de `Fase 5` a partir del roadmap y de las decisiones cerradas sobre locales, prefijos, localizacion y switcher
- Fecha: `2026-03-15`
  - cambio: activacion del plan y cierre del bloque documental inicial
  - razon: ya existe `i18n-spec`, `deployment` fue sincronizado y `Fase 4` quedo formalmente cerrada para desbloquear implementacion
- Fecha: `2026-03-15`
  - cambio: cierre tecnico de implementacion y preflight de localizacion
  - razon: la estructura prefijada `en/es` compila, el wiring heredado de `de` salio del runtime y los gaps de traduccion detectados en UI fueron corregidos antes de la revision manual
- Fecha: `2026-03-15`
  - cambio: cierre formal de `Fase 5`
  - razon: el usuario aprobo la revision manual de rutas localizadas, switcher y cobertura visible de `en/es`, por lo que la fase queda cerrada y desbloquea el trabajo de `Fase 6`
