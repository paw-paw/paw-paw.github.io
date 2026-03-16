# Phase 7 Plan

## Metadatos

- Fase: `7`
- Estado: `done`
- Ultima actualizacion: `2026-03-16`
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
  - `docs/delivery/seo-spec.md`
  - `docs/plans/sprint-1/phase-6.md`
  - cierre efectivo de `Fase 6.5`
- Desbloquea:
  - cierre premium y estable del sitio publico
  - posible release final de polish sobre base ya publicada

---

## 1. Objetivo de la fase

Convertir el sitio ya correcto y publicable en una version mas refinada, mas propia y mas memorable sin reabrir arquitectura, routing, i18n, SEO estructural ni expansion de producto. Esta segunda tentativa de `Fase 7` debe ser deliberadamente mas conservadora que la anterior, priorizando robustez visual, claridad y craft antes que dramatismo de motion.

La fase existe para cerrar polish, legibilidad, CTA hierarchy, responsive y microinteraccion sin volver a introducir una capa fragil de reveals que pueda romper visibilidad, screenshots o estados de scroll. Al cerrarla, el sitio debe sentirse menos template y mas terminado, pero sin depender de animaciones para que el contenido importante exista visualmente.

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
  - `docs/governance/template-audit.md`
  - `docs/governance/decision-log.md`
  - `docs/delivery/seo-spec.md`
  - `docs/plans/sprint-1/phase-6.md`
  - `docs/plans/sprint-1/security-remediation-roadmap.md`

Nota:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- este plan no puede contradecir documentos contractuales
- `docs/visual/interaction-spec.md` nace en esta fase como documento auxiliar
- este segundo intento de `Fase 7` debe tratar el backtrack anterior como constraint operativo real, no como incidente menor

---

## 3. Inputs requeridos

### Documentos

- [x] `docs/strategy/portfolio-strategy.md` en estado estable
- [x] `docs/architecture/site-architecture.md` en estado estable
- [x] `docs/content/content-system.md` en estado estable
- [x] `docs/visual/visual-system.md` en estado `done`
- [x] `docs/architecture/i18n-spec.md` en estado `done`
- [x] `docs/delivery/deployment.md` en estado `v3`
- [x] `docs/plans/sprint-1/phase-6.md` formalmente cerrada
- [x] `docs/plans/sprint-1/security-remediation-roadmap.md` formalmente cerrado
- [x] backtrack completo de la primera tentativa fallida de `Fase 7`

### Decisiones previas

- [x] `Fase 7` no debe abrir nuevas paginas ni nuevas secciones estructurales por defecto
- [x] el alcance principal sera polish visual, responsive y microinteraccion sobre superficies existentes
- [x] la CTA hierarchy base se mantiene:
  - [x] CTA principal: `View selected work`
  - [x] CTA secundaria: `Start a conversation`
- [x] la estrategia de motion de esta nueva tentativa sera conservadora
- [x] la fase no debe volver a recentrar el sitio en una arquitectura nueva de scroll-reveals
- [x] el polish responsive entra en todas las paginas activas:
  - [x] `/en/`
  - [x] `/en/work/`
  - [x] `/en/experience/`
  - [x] `/en/contact/`
  - [x] `/es/`
  - [x] `/es/work/`
  - [x] `/es/experience/`
  - [x] `/es/contact/`

### Estado tecnico

- [x] el sitio builda y publica correctamente en `GitHub Pages`
- [x] `npm audit` quedo en `0` tras `Fase 6.5`
- [x] el sistema actual de motion sigue siendo el heredado/base
- [x] existe un antecedente reciente de fallo de `Fase 7` ligado a visibilidad y reveals
- [x] la estructura de home, `/work/`, `/experience/` y `/contact/` ya esta estable y no necesita otra ronda de arquitectura

---

## 4. Entregables documentales

### Crear

- [x] `docs/visual/interaction-spec.md`

### Actualizar

- [x] `docs/governance/decision-log.md`
- [x] `docs/plans/sprint-1/phase-7.md`

### Actualizar solo si aparece cambio contractual real

- [ ] `docs/visual/visual-system.md`
- [ ] `docs/content/content-system.md`
- [ ] `docs/strategy/portfolio-strategy.md`

### No tocar

- [ ] `docs/architecture/site-architecture.md` salvo contradiccion estructural real
- [ ] `docs/architecture/i18n-spec.md`
- [ ] `docs/delivery/deployment.md`
- [ ] `docs/delivery/seo-spec.md`
- [ ] `docs/content/content-master.md` como canon editorial aprobado

---

## 5. Alcance de implementacion

### Si entra

- [x] crear una spec de interaccion y motion conservadora por componente
- [x] revisar motion actual y decidir que:
  - [x] se mantiene
  - [x] se suaviza
  - [x] se elimina
- [x] pulir responsive en todas las paginas activas
- [x] mejorar legibilidad, densidad y continuidad visual entre bloques
- [x] reforzar visualmente la CTA hierarchy actual sin reabrir estrategia
- [x] mejorar microinteraccion de botones, controles, enlaces y superficies
- [x] asegurar que la fase cierre con una UI mas premium y estable, no con una capa mas compleja de runtime

### No entra

- [ ] crear nuevas paginas como `resume`, `services`, `FAQ`, `press` o similares
- [ ] introducir nuevas secciones estructurales como `testimonials`, `logos de clientes` o `featured wins`
- [ ] reabrir arquitectura del sitio
- [ ] reabrir i18n, SEO estructural o deployment
- [ ] cambiar la jerarquia base de CTA aprobada
- [ ] rehacer completamente el sistema de animaciones
- [ ] introducir una capa donde el contenido critico dependa de una animacion para verse

---

## 6. Tareas detalladas

### Bloque A — Postmortem operativo del intento fallido

- [x] documentar en el plan el fallo observado en la primera tentativa de `Fase 7`
- [x] identificar que partes del fallo fueron:
  - [x] de estrategia de motion
  - [x] de implementacion
  - [x] de robustez frente a scroll/capturas/refresh
- [x] dejar explicitamente fuera de esta nueva tentativa cualquier patron que vuelva a acoplar visibilidad critica a reveals fragiles

### Bloque B — Crear `interaction-spec` conservadora

- [x] crear `docs/visual/interaction-spec.md`
- [x] definir tono de interaccion aprobado para esta segunda tentativa
- [x] definir intensidad por tipo de componente:
  - [x] layout / page-load
  - [x] hero
  - [x] secciones editoriales
  - [x] cards
  - [x] tags / chips / metadata
  - [x] CTA / buttons
  - [x] toggles y controles
- [x] definir limites:
  - [x] legibilidad
  - [x] rendimiento
  - [x] accesibilidad / `prefers-reduced-motion`
  - [x] estabilidad visual en scroll, resize y capturas
- [x] dejar explicita la regla de visibilidad una vez quede decidida en ejecucion

### Bloque C — Auditar y racionalizar motion actual

- [x] releer el baseline de motion heredado en `template-audit.md`
- [x] revisar `Layout.astro`, `src/scripts/animations.js` y componentes con motion actual
- [x] catalogar motion actual por superficie:
  - [x] hero
  - [x] navbar
  - [x] cards y previews
  - [x] skills
  - [x] CTA y botones
  - [x] footer CTA
- [x] clasificar cada patron como:
  - [x] mantener
  - [x] suavizar
  - [x] eliminar
- [x] evitar cualquier cambio que implique otra vez rehacer todo el stack
- [x] corregir la doble inicializacion de `AOS` sin cambiar el reparto base `AOS/GSAP`
- [x] rebajar los patrones `GSAP` mas ruidosos sin retirar la capa heredada

### Bloque D — CTA hierarchy y microinteraccion

- [x] revisar hero, previews y footer CTA contra la jerarquia aprobada
- [x] reforzar visualmente la CTA principal sin volverla agresiva
- [x] asegurar que la CTA secundaria siga clara pero subordinada
- [x] pulir microinteraccion de botones, enlaces, toggles, language switcher y menu movil
- [x] revisar foco visual y continuidad entre CTA primaria y superficies de evidencia

### Bloque E — Responsive polish y densidad

- [x] revisar home en mobile, tablet y desktop
- [x] revisar `/work/` en mobile, tablet y desktop
- [x] revisar `/experience/` en mobile, tablet y desktop
- [x] revisar `/contact/` en mobile, tablet y desktop
- [x] pulir spacing, stacking, altura de bloques y densidad de metadata donde haga falta
- [x] asegurar que el polish responsive no rompa la paridad entre `en` y `es`

### Bloque F — Diferenciacion premium conservadora

- [x] revisar si el sitio ya comunica suficiente personalidad sin nuevas secciones
- [ ] elevar la sensacion premium a traves de:
  - [x] mejores estados hover
  - [x] continuidad entre bloques
  - [x] ritmo mas fino de carga/entrada
  - [x] mejor lectura de evidencia y CTA
- [x] verificar que el sitio ya no se sienta “template con tus datos”

### Bloque G — Verificacion y cierre

- [x] ejecutar `npm run build`
- [x] revisar consistencia visual en light mode
- [x] revisar consistencia visual en dark mode
- [x] revisar comportamiento responsive en paginas activas
- [x] revisar motion real y estabilidad visual en scroll/capturas si aplica
- [x] registrar decisiones finales en `docs/governance/decision-log.md`
- [x] actualizar checklist y estado de `docs/plans/sprint-1/phase-7.md`

### Checkpoints interactivos previstos

- [x] Checkpoint 1: cerrar la regla exacta de visibilidad de contenido dentro de esta nueva tentativa
- [x] Checkpoint 2: aprobar que partes del motion heredado se mantienen y cuales se suavizan o eliminan
- [x] Checkpoint 3: aprobar refuerzos concretos de CTA hierarchy si aparece una lectura ambigua entre hero y footer CTA
- [x] Checkpoint 4: aprobar cualquier ajuste que empiece a rozar expansion de contenido o nueva superficie estructural

---

## 7. Archivos probables a tocar

### Docs

- `docs/visual/interaction-spec.md`
- `docs/governance/decision-log.md`
- `docs/plans/sprint-1/phase-7.md`
- `docs/visual/visual-system.md` solo si aparece una regla visual contractual nueva
- `docs/content/content-system.md` solo si cambia una regla visible de CTA o evidencia

### Codigo

- `src/layouts/Layout.astro`
- `src/scripts/animations.js`
- `src/styles/global.css`
- `src/components/ui/Buttons.astro`
- `src/components/ui/ThemeToggle.astro`
- `src/components/ui/LanguageSwitcher.astro`
- `src/components/layout/Navbar.astro`
- `src/components/sections/Hero.astro`
- `src/components/sections/Projects.astro`
- `src/components/sections/Timeline.astro`
- `src/components/sections/Skills.astro`
- `src/components/sections/Values.astro`
- `src/components/sections/FooterCTA.astro`
- `src/components/sections/Contact.astro`
- `src/pages/en/**`
- `src/pages/es/**`

---

## 8. Dependencias y bloqueos

### Dependencias

- [x] `Fase 6` formalmente cerrada
- [x] roadmap auxiliar `6.5` formalmente cerrado
- [x] routing `en/es`, SEO y deploy estables
- [x] estructura de contenido y secciones ya aprobada
- [x] backtrack completo de la primera tentativa fallida de `Fase 7`

### Bloqueos posibles

- [ ] dejar abierta demasiado tiempo la regla de visibilidad y volver a repetir el error anterior
- [ ] que un polish aparentemente pequeno vuelva a arrastrar una reestructuracion grande de motion
- [ ] que responsive polish choque con diferencias de longitud entre `en` y `es`
- [ ] que la diferenciacion premium quede demasiado timida por el enfoque conservador

### Mitigacion

- cerrar la regla de visibilidad antes de tocar runtime relevante
- evitar cambios amplios de stack o dependencia salvo necesidad muy clara
- validar con capturas y revision visual/manual, no solo con build
- priorizar craft, legibilidad y estabilidad antes que dramatismo

---

## 9. Validaciones

### Documentales

- [x] verificar alineacion con `docs/README.md`
- [x] verificar alineacion con `docs/plans/sprint-1/roadmap.md`
- [x] verificar que no se introdujeron decisiones fuera de contrato
- [x] verificar que `interaction-spec.md` no contradice `visual-system.md`

### Tecnicas

- [ ] `npm run build`
- [ ] verificar que el runtime no rompe rutas localizadas
- [ ] verificar que la capa de motion no introduce errores visibles ni dependencias nuevas no aprobadas

### Manuales

- [ ] revision visual/manual de home en `en/es`
- [ ] revision visual/manual de `/work/` en `en/es`
- [ ] revision visual/manual de `/experience/` en `en/es`
- [ ] revision visual/manual de `/contact/` en `en/es`
- [ ] revision manual de CTA hierarchy y responsive polish
- [ ] revision manual de estabilidad visual en scroll y capturas si aplica

---

## 10. Criterio de cierre

La fase solo se considera cerrada si:

- [ ] existe `docs/visual/interaction-spec.md` y fija claramente limites conservadores de motion
- [ ] el sitio ya no se siente “template con tus datos”
- [ ] la CTA principal es mas obvia sin reabrir estrategia
- [ ] la UI se siente mas refinada y consistente en `/`, `/work/`, `/experience/` y `/contact/`
- [ ] el responsive polish queda resuelto en `en` y `es`
- [ ] no reaparece una fragilidad donde bloques estructurales dependan de animacion para ser visibles

---

## 11. Riesgos y notas

### Riesgos

- que el miedo al fallo anterior vuelva la fase demasiado timida
- que una correccion puntual termine creciendo otra vez a refactor grande de motion
- que el polish se perciba insuficiente si no se traduce en una mejora visible y no solo tecnica

### Notas operativas

- esta segunda tentativa de `Fase 7` debe tratar el intento anterior como evidencia operativa, no como detalle anecdótico
- si durante la ejecucion vuelve a aparecer una direccion claramente mas amplia de motion, debe detenerse y consultarse antes
- la regla de visibilidad queda abierta por decision explicita del usuario y debe cerrarse mediante checkpoint antes de cualquier cambio que la toque de verdad

---

## 12. Registro de cambios del plan

- Fecha: `2026-03-16`
  - cambio: creacion inicial de la segunda tentativa de `phase-7.md`
  - razon: replanificar `Fase 7` despues del backtrack, con una direccion mas conservadora y robusta
