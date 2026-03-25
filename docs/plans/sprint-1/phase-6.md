# Phase 6 Plan

## Metadatos

- Fase: `6`
- Estado: `done`
- Ultima actualizacion: `2026-03-15`
- Owner: `Codex + user`
- Depende de:
  - `docs/README.md`
  - `docs/plans/sprint-1/roadmap.md`
  - `docs/strategy/portfolio-strategy.md`
  - `docs/architecture/site-architecture.md`
  - `docs/content/content-system.md`
  - `docs/visual/visual-system.md`
  - `docs/architecture/i18n-spec.md`
  - `docs/delivery/deployment.md`
  - cierre efectivo de `Fase 5`
- Desbloquea:
  - `docs/visual/interaction-spec.md`
  - cierre de publicacion base antes de `Fase 7`

---

## 1. Objetivo de la fase

Cerrar la capa real de SEO, metadata y deploy sobre la base multiidioma ya aprobada en `Fase 5`. Al terminar, el sitio debe tener politica SEO utilizable para `en` y `es`, metadata consistente por pagina, `canonical` y `alternates` bien resueltos, y publicacion real coherente con `GitHub Pages` sobre el dominio publico vigente en esa fase.

La fase existe para pasar de una implementacion multiidioma funcional a una publicacion tecnicamente presentable y revisable. Al cerrarla, el sitio debe quedar listo para publicacion sin deuda basica de routing, metadata ni release operacional.

---

## 2. Fuente de verdad aplicable

- `docs/README.md`
- `docs/plans/sprint-1/roadmap.md`
- documentos contractuales aplicables:
  - `docs/strategy/portfolio-strategy.md`
  - `docs/architecture/site-architecture.md`
  - `docs/content/content-system.md`
  - `docs/visual/visual-system.md`
  - `docs/architecture/i18n-spec.md`
  - `docs/delivery/deployment.md`
- documentos auxiliares aplicables:
  - `docs/content/content-master.md`
  - `docs/governance/decision-log.md`
  - `docs/plans/sprint-1/phase-5.md`

Nota:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- este plan no puede contradecir documentos contractuales
- `deployment.md` sigue mandando en decisiones estructurales de dominio, hosting, base path y restricciones de routing
- `seo-spec.md` que nace en esta fase sera auxiliar y no debe contradecir `deployment.md` ni `i18n-spec.md`

---

## 3. Inputs requeridos

### Documentos

- [x] `docs/architecture/i18n-spec.md` en estado `v1`
- [x] `docs/delivery/deployment.md` en estado `v2`
- [x] `docs/plans/sprint-1/phase-5.md` formalmente cerrada
- [x] `docs/strategy/portfolio-strategy.md` en estado `done`
- [x] `docs/architecture/site-architecture.md` en estado `done`

### Decisiones previas

- [x] hosting real de esta fase: `GitHub Pages`
- [x] dominio real de esta fase: el dominio publico vigente de `GitHub Pages` en ese momento
- [x] todos los locales activos llevan prefijo
- [x] `en` y `es` son los unicos locales activos
- [x] `/` no es home canonica de contenido
- [x] `/` debe quedar fuera de la estrategia SEO primaria
- [x] la estrategia OG de esta fase usara una imagen base compartida, no una bateria nueva de assets OG por pagina

### Estado tecnico

- [x] las rutas localizadas `en/es` ya compilan
- [x] existen bridges inteligentes en `/`, `/work/`, `/experience/` y `/contact/`
- [x] `astro.config.mjs -> site` ya apunta al dominio aprobado para la fase
- [x] existe sitemap generado por Astro
- [x] el sitio ya tiene metadata base funcional, pero no una spec SEO final por pagina

---

## 4. Entregables documentales

### Crear

- [x] `docs/delivery/seo-spec.md`
- [x] `docs/delivery/release-checklist.md`

### Actualizar

- [x] `docs/delivery/deployment.md`
- [x] `docs/governance/decision-log.md`
- [x] `docs/plans/sprint-1/phase-6.md`

### No tocar

- [ ] `docs/strategy/portfolio-strategy.md` salvo contradiccion real
- [ ] `docs/architecture/site-architecture.md` salvo contradiccion real de routing publico
- [ ] `docs/content/content-master.md` como canon del idioma maestro
- [ ] `docs/visual/visual-system.md` salvo que la capa OG o metadata requiera una aclaracion visual minima

---

## 5. Alcance de implementacion

### Si entra

- [ ] cerrar `deployment.md` para `GitHub Pages` como publicacion real de esta fase
- [ ] definir metadata por pagina para:
  - [ ] `/en/`
  - [ ] `/en/work/`
  - [ ] `/en/experience/`
  - [ ] `/en/contact/`
  - [ ] `/es/`
  - [ ] `/es/work/`
  - [ ] `/es/experience/`
  - [ ] `/es/contact/`
- [ ] definir politica final de `canonical` y `alternates` por locale
- [ ] revisar metadata base y JSON-LD en `Layout.astro`
- [ ] revisar `robots.txt`
- [ ] verificar `sitemap`
- [ ] definir politica SEO de rutas puente:
  - [ ] `/` no indexable
  - [ ] `/work/`, `/experience/`, `/contact/` no indexables como contenido principal
- [ ] dejar checklist operativo de release para build, QA y deploy

### No entra

- [ ] cambiar de hosting fuera de `GitHub Pages`
- [ ] fijar dominio custom final si todavia no existe
- [ ] producir una bateria nueva de imagenes OG por pagina
- [ ] reabrir copy editorial principal de paginas
- [ ] abrir cambios grandes de visual polish o motion propios de `Fase 7`

---

## 6. Tareas detalladas

### Bloque A — Cierre contractual de deployment

- [x] revisar `docs/delivery/deployment.md` contra el estado real post-`Fase 5`
- [x] cerrar `GitHub Pages` como hosting real de `Fase 6`
- [x] confirmar el dominio real vigente de la fase
- [x] documentar implicaciones reales entre:
  - [x] deploy
  - [x] routing multiidioma
  - [x] canonicals
  - [x] sitemap
  - [x] assets publicos
- [x] dejar explicito que el dominio custom final sigue fuera de alcance si no fue decidido

### Bloque B — Spec SEO por pagina

- [x] crear `docs/delivery/seo-spec.md`
- [x] definir politica de `title` por pagina y locale
- [x] definir `description` por pagina y locale
- [x] definir politica de `canonical`
- [x] definir politica de `hreflang` / alternates
- [x] definir tratamiento SEO de rutas puente:
  - [x] `/`
  - [x] `/work/`
  - [x] `/experience/`
  - [x] `/contact/`
- [x] definir estrategia OG base:
  - [x] una imagen compartida aprobada
  - [x] nombres de sitio y page title coherentes
  - [x] sin producir nuevos assets OG en esta fase

### Bloque C — Wiring tecnico de metadata

- [x] revisar `src/layouts/Layout.astro`
- [x] asegurar `title`, `description`, `canonical`, OG y Twitter por pagina/locale
- [x] asegurar `lang` correcto por pagina
- [x] introducir `alternates` por locale si la implementacion actual no los emite correctamente
- [x] revisar JSON-LD actual para que no contradiga locale, canonical o identidad
- [x] revisar `astro.config.mjs` por cualquier ajuste de sitemap o site necesario

### Bloque D — Robots, sitemap y rutas puente

- [x] revisar `public/robots.txt`
- [x] verificar que sitemap apunte a la URL correcta
- [x] verificar que el sitemap generado no promueva rutas incorrectas
- [x] decidir si las rutas puente deben salir del sitemap o quedar neutralizadas por metadata
- [x] verificar que las rutas puente no se comporten como contenido indexable primario

### Bloque E — Checklist de release

- [x] crear `docs/delivery/release-checklist.md`
- [x] incluir bloque reusable de:
  - [x] build
  - [x] preview
  - [x] links/routing
  - [x] metadata
  - [x] deploy/public verification
- [x] dejarlo usable para esta fase sin volverlo dependiente de un proveedor especifico distinto a `GitHub Pages`

### Bloque F — Verificacion y cierre

- [x] ejecutar `npm run build`
- [x] revisar manualmente metadata principal en paginas `en/es`
- [x] revisar manualmente canonicals y alternates
- [x] revisar manualmente bridges y rutas indexables/no indexables
- [x] registrar decisiones de cierre en `docs/governance/decision-log.md`
- [x] actualizar checklist y estado de `docs/plans/sprint-1/phase-6.md`

### Checkpoints interactivos previstos

- [x] Checkpoint 1: aprobar politica final de `canonical` y `alternates`
- [x] Checkpoint 2: aprobar tratamiento exacto de rutas puente en SEO y sitemap
- [x] Checkpoint 3: aprobar matriz final de metadata por pagina si aparecen ambiguedades de copy SEO
- [x] Checkpoint 4: aprobar criterio de cierre de release sobre `GitHub Pages`

---

## 7. Archivos probables a tocar

### Docs

- `docs/delivery/deployment.md`
- `docs/delivery/seo-spec.md`
- `docs/delivery/release-checklist.md`
- `docs/governance/decision-log.md`
- `docs/plans/sprint-1/phase-6.md`

### Codigo

- `src/layouts/Layout.astro`
- `astro.config.mjs`
- `public/robots.txt`
- `src/pages/en/**`
- `src/pages/es/**`
- `src/pages/index.astro`
- `src/pages/work.astro`
- `src/pages/experience.astro`
- `src/pages/contact.astro`
- assets OG actuales si requieren ajuste de referencia, sin producir nuevos assets dedicados

---

## 8. Dependencias y bloqueos

### Dependencias

- [x] `Fase 5` formalmente cerrada
- [x] estructura i18n activa estable
- [x] dominio y hosting reales de esta fase definidos sobre `GitHub Pages`

### Bloqueos posibles

- [ ] ambiguedad sobre si las rutas puente deben aparecer o no en sitemap
- [ ] conflicto entre canonical deseado y comportamiento de rutas inteligentes
- [ ] metadata actual demasiado acoplada a un modelo monoidioma previo
- [ ] necesidad de crear copy SEO por pagina mas especifico de lo esperado
- [ ] expectativa de dominio custom final antes de cerrar la fase

### Mitigacion

- cerrar primero `deployment.md` y `seo-spec.md` antes de tocar wiring fino
- tratar `/` y las rutas puente como problema SEO explicito, no como detalle secundario
- usar una OG base compartida para no abrir produccion de assets nuevos
- separar metadata estructural de cualquier polish visual o editorial que ya pertenezca a `Fase 7`

---

## 9. Validaciones

### Documentales

- [x] verificar alineacion con `docs/README.md`
- [x] verificar alineacion con `docs/plans/sprint-1/roadmap.md`
- [x] verificar que `docs/delivery/seo-spec.md` no contradiga `deployment.md` ni `i18n-spec.md`

### Tecnicas

- [x] `npm run build`
- [x] verificar sitemap generado
- [x] verificar `robots.txt`
- [x] verificar que canonicals y alternates se construyan con la URL correcta

### Manuales

- [x] revisar metadata visible y compartible en `/en/` y `/es/`
- [x] revisar metadata por pagina en `work`, `experience` y `contact` para ambos locales
- [x] revisar comportamiento de rutas puente frente a SEO esperado
- [x] revisar release final en `GitHub Pages` o equivalencia local previa a publicacion

---

## 10. Criterio de cierre

La fase solo se considera cerrada si:

- [x] existe `docs/delivery/seo-spec.md` utilizable y alineado con contratos
- [x] existe `docs/delivery/release-checklist.md` utilizable
- [x] `docs/delivery/deployment.md` refleja la realidad final de publicacion de la fase
- [x] metadata por pagina y locale es consistente
- [x] `canonical`, `alternates`, sitemap y `robots.txt` no se contradicen
- [x] las rutas puente no contaminan la estrategia SEO primaria
- [x] el sitio compila y queda listo para publicacion real en `GitHub Pages`

---

## 11. Riesgos y notas

### Riesgos

- las rutas puente inteligentes pueden complicar `canonical`, `alternates` y sitemap mas de lo esperado
- cerrar SEO completo sin dominio custom final puede obligar a una actualizacion futura cuando ese dominio exista
- si el copy SEO por locale diverge demasiado del contenido real, la capa de metadata puede sentirse artificial
- la base heredada de JSON-LD puede requerir mas ajuste del previsto para no quedar generica o inconsistente

### Notas operativas

- una OG image es la imagen de preview que usan redes y apps al compartir una URL
- en esta fase se usara una imagen OG base compartida; la produccion de imagenes OG dedicadas puede posponerse
- `Fase 6` debe dejar el sitio publicable, no necesariamente maximamente pulido
- cualquier refinamiento visual extra de previews o de social sharing puede diferirse a una pasada posterior si no bloquea consistencia

---

## 12. Registro de cambios del plan

- Fecha: `2026-03-15`
  - cambio: creacion inicial de `docs/plans/sprint-1/phase-6.md`
  - razon: preparar la ejecucion de `Fase 6` con `GitHub Pages` como deploy real, SEO completo para `en/es`, OG base compartida y rutas puente fuera de la estrategia SEO primaria
- Fecha: `2026-03-15`
  - cambio: activacion del plan y cierre del bloque tecnico-estructural inicial
  - razon: ya existe `seo-spec`, `release-checklist`, `deployment v3`, wiring de metadata por locale y sitemap limpio de rutas puente; la fase queda pendiente solo de revision manual y cierre operativo
- Fecha: `2026-03-15`
  - cambio: cierre formal de `Fase 6`
  - razon: la verificacion local aprobada como criterio de cierre confirmo metadata correcta, alternates correctos, rutas puente fuera del sitemap y build listo para publicacion sin exigir deploy publico inmediato
