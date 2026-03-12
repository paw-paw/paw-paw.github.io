# Phase 3 Plan

## Metadatos

- Fase: `3`
- Estado: `done`
- Ultima actualizacion: `2026-03-12`
- Owner: `Codex + user`
- Depende de:
  - `docs/README.md`
  - `docs/plans/roadmap.md`
  - `docs/strategy/portfolio-strategy.md`
  - `docs/architecture/site-architecture.md`
  - `docs/content/content-system.md`
  - `docs/plans/phase-2.md`
- Desbloquea:
  - `docs/content/content-master.md`
  - implementacion visual base coherente para `/`, `/work` y `/experience`

---

## 1. Objetivo de la fase

Definir y aplicar la primera version real del sistema visual del portfolio para que el sitio deje de percibirse como template y pase a reflejar una identidad propia, coherente con la estrategia y la arquitectura ya cerradas.

Al cerrar esta fase debe existir:

- un sistema visual contractual en `docs/visual/visual-system.md`
- un plan operativo de assets en `docs/visual/asset-plan.md`
- una implementacion base real de tokens, tipografia, paleta, navbar, botones, hero y cards visibles clave

Esta fase existe para separar:

- decisiones visuales estructurales
- produccion de contenido maestro
- motion premium y polish fino

---

## 2. Fuente de verdad aplicable

- `docs/README.md`
- `docs/plans/roadmap.md`
- documentos contractuales aplicables:
  - `docs/strategy/portfolio-strategy.md`
  - `docs/architecture/site-architecture.md`
  - `docs/content/content-system.md`
- documentos auxiliares aplicables:
  - `docs/governance/decision-log.md`
  - `docs/governance/template-audit.md`
  - `docs/plans/phase-2.md`

Notas:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- este plan no puede redefinir estrategia, arquitectura ni contenido final

---

## 3. Inputs requeridos

### Documentos

- [x] `docs/strategy/portfolio-strategy.md`
- [x] `docs/architecture/site-architecture.md`
- [x] `docs/content/content-system.md`
- [x] `docs/plans/phase-2.md`

### Decisiones previas

- [x] direccion visual principal: `tech-modern` limpia y propia
- [x] dark mode se mantiene con paridad real, sin ser la identidad principal
- [x] branding base: `wordmark o monograma tipografico simple`
- [x] la foto principal sigue siendo parte del sistema, con placeholder temporal permitido
- [x] Fase 3 debe incluir implementacion visual base real
- [x] se permite cambiar stack tipografico si mejora la identidad
- [x] la paleta actual azul/cyan del template debe abandonarse
- [x] `asset-plan.md` debe listar assets reales, placeholders aceptables y blockers
- [x] el theme toggle se mantiene visible
- [x] los checkpoints del trabajo seran por decision visual mayor

### Estado tecnico

- [x] arquitectura multipagina base implementada en `/`, `/work` y `/experience`
- [x] navbar multipagina ya existe
- [x] dark mode funcional ya existe como baseline
- [x] el sitio compila al cierre de Fase 2

---

## 4. Entregables documentales

### Crear

- [x] `docs/visual/visual-system.md`
- [x] `docs/visual/asset-plan.md`

### Actualizar

- [x] `docs/governance/decision-log.md`
- [x] `docs/plans/phase-3.md`

### No tocar

- [ ] `docs/strategy/portfolio-strategy.md`
- [ ] `docs/architecture/site-architecture.md`
- [ ] `docs/content/content-system.md`
- [ ] `docs/content/content-master.md`
- [ ] `docs/architecture/i18n-spec.md`

---

## 5. Alcance de implementacion

### Si entra

- [x] definicion de direccion visual, paleta, tipografia y reglas de contraste
- [x] decision formal sobre light/dark y rol del theme toggle
- [x] definicion de wordmark o monograma tipografico base
- [x] reemplazo o neutralizacion de logos e iconos heredados del template
- [x] redefinicion de tokens visuales en `tailwind.config.mjs`
- [x] ajuste de estilos base en `src/styles/global.css`
- [x] alineacion visual de navbar, botones, hero, previews/cards visibles y footer CTA
- [x] definicion de reglas visuales que funcionen en `/`, `/work` y `/experience`
- [x] planificacion de assets faltantes y placeholders permitidos

### No entra

- [ ] copy final aprobado por seccion
- [ ] migracion de contenido real desde `temp/truth/`
- [ ] i18n y localizacion
- [ ] SEO final por pagina
- [ ] deploy final
- [ ] motion premium o rediseño completo de animaciones
- [ ] selecciones finales de casos o experiencia para contenido maestro

---

## 6. Tareas detalladas

### Bloque A — Auditoria visual y decisiones base

- [x] auditar la identidad visual actual del template en colores, tipografia, logos, imagenes y dark mode
- [x] cerrar la direccion visual de referencia para el sitio
- [x] cerrar el rol exacto de dark mode dentro del sistema
- [x] cerrar el enfoque de branding base: wordmark o monograma tipografico simple
- [x] registrar decisiones y rationale en `docs/governance/decision-log.md`

### Bloque B — Documento contractual del sistema visual

- [x] crear `docs/visual/visual-system.md`
- [x] documentar paleta principal y paleta dark mode
- [x] documentar stack tipografico y reglas de uso
- [x] documentar reglas de color, contraste y fondos
- [x] documentar reglas de botones, cards, chips, iconografia y spacing
- [x] documentar el rol visual de navbar, hero, previews y footer CTA

### Bloque C — Plan operativo de assets

- [x] crear `docs/visual/asset-plan.md`
- [x] listar assets vigentes que se conservan temporalmente
- [x] listar assets heredados que deben reemplazarse
- [x] definir placeholders permitidos para Fase 3
- [x] definir blockers de assets para Fase 4 o posteriores
- [x] definir necesidades minimas para logo, favicon, foto principal y visuales de casos

### Bloque D — Implementacion visual base

- [x] actualizar `tailwind.config.mjs` con tokens y escalas coherentes con el sistema visual
- [x] actualizar `src/styles/global.css` con estilos base y utilidades del nuevo lenguaje visual
- [x] ajustar carga y uso de tipografias en `src/layouts/Layout.astro`
- [x] alinear `src/components/layout/Navbar.astro` con nueva identidad, logo y dark mode
- [x] alinear `src/components/ui/Buttons.astro` y controles visibles con nuevas reglas
- [x] alinear `src/components/sections/Hero.astro` con nueva direccion visual
- [x] alinear previews/cards visibles de `Projects.astro` y `Timeline.astro`
- [x] alinear `FooterCTA.astro` y superficies de cierre con la nueva direccion visual

### Bloque E — Cierre y verificacion

- [x] revisar consistencia visual entre `/`, `/work` y `/experience`
- [x] revisar que no queden logos o assets heredados del template en superficies visibles
- [x] actualizar checklist y criterio de cierre de este plan
- [x] ejecutar build y registrar resultado

---

## 7. Archivos probables a tocar

### Docs

- `docs/visual/visual-system.md`
- `docs/visual/asset-plan.md`
- `docs/governance/decision-log.md`
- `docs/plans/phase-3.md`

### Codigo

- `tailwind.config.mjs`
- `src/styles/global.css`
- `src/layouts/Layout.astro`
- `src/components/layout/Navbar.astro`
- `src/components/ui/Buttons.astro`
- `src/components/ui/ThemeToggle.astro`
- `src/components/sections/Hero.astro`
- `src/components/sections/Projects.astro`
- `src/components/sections/Timeline.astro`
- `src/components/sections/FooterCTA.astro`
- `src/components/sections/Footer.astro`
- `src/pages/index.astro`
- `src/pages/work.astro`
- `src/pages/experience.astro`

### Assets

- `src/assets/*`

---

## 8. Dependencias y bloqueos

### Dependencias

- [x] Fase 2 cerrada
- [x] arquitectura multipagina ya fijada
- [x] politicas de contacto ya alineadas

### Bloqueos posibles

- [ ] no contar aun con logo final aprobado
- [ ] no contar aun con foto principal aprobada
- [ ] que el cambio tipografico requiera ajustar jerarquia y spacing mas de lo esperado
- [ ] que algunos assets heredados sigan siendo tecnicamente utiles aunque visualmente deban salir despues

### Mitigacion

- permitir placeholder temporal para foto principal
- usar branding tipografico base si no existe logo final
- documentar en `asset-plan.md` que assets faltan y cuales bloquean fases posteriores
- mantener el alcance centrado en sistema visual base, no en polish final

---

## 9. Validaciones

### Documentales

- [x] verificar alineacion con `docs/README.md`
- [x] verificar alineacion con `docs/plans/roadmap.md`
- [x] verificar que no se introdujeron decisiones fuera de contrato
- [x] verificar que `visual-system.md` y `asset-plan.md` no contradicen estrategia, arquitectura o content-system

### Tecnicas

- [x] `npm run build`

### Manuales

- [x] revision estructural de `/`
- [x] revision estructural de `/work`
- [x] revision estructural de `/experience`
- [x] revision estructural de light mode y dark mode
- [x] revision estructural de navbar, hero, cards, botones y footer CTA

---

## 10. Criterio de cierre

La fase solo se considera cerrada si:

- [x] existe `docs/visual/visual-system.md` en estado util para implementacion
- [x] existe `docs/visual/asset-plan.md` con assets, placeholders y blockers claros
- [x] el sitio ya no depende visualmente de la direccion cromatica o branding del template original
- [x] navbar, hero, botones y cards visibles reflejan la nueva direccion visual
- [x] light mode y dark mode funcionan con paridad razonable
- [x] no se introdujo contenido maestro definitivo ni decisiones fuera del alcance visual
- [x] `npm run build` pasa

---

## 11. Riesgos y notas

### Riesgos

- definir una direccion visual demasiado neutra y no suficientemente propia
- empujar demasiado el polish y convertir Fase 3 en mezcla de visual system + Fase 7
- compensar carencias de assets con demasiados placeholders silenciosos
- abrir cambios de copy o contenido bajo excusa visual

### Notas operativas

- los checkpoints interactivos se haran por decision visual mayor
- no eliminar assets heredados automaticamente si todavia conviene evaluarlos; documentarlos primero
- si aparece una decision grande de branding no documentada, se debe detener la ejecucion y consultar
- la fase se cierra con revision estructural y build validado; una revision visual en navegador real sigue siendo recomendable antes de Fase 4 o publicacion

---

## 12. Registro de cambios del plan

- Fecha: `2026-03-12`
  - cambio: creacion inicial del plan de Fase 3
  - razon: preparar la ejecucion del sistema visual y branding despues del cierre de Fase 2
- Fecha: `2026-03-12`
  - cambio: actualizacion del checklist con sistema visual, asset plan, implementacion base y build completados
  - razon: reflejar el progreso real de la ejecucion y dejar visible la revision manual pendiente
- Fecha: `2026-03-12`
  - cambio: cierre del plan tras pasada final de consistencia visual estructural y segundo build exitoso
  - razon: dejar Fase 3 lista para commit sin afirmar una QA visual de navegador que no se ejecuto
