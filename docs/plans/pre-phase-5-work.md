# Pre-Phase 5 Work Plan

## Metadatos

- Fase: `pre-phase-5`
- Estado: `active`
- Ultima actualizacion: `2026-03-14`
- Owner: `Codex + user`
- Tipo: `auxiliar extraordinario`
- Depende de:
  - `docs/README.md`
  - `docs/plans/roadmap.md`
  - `docs/plans/phase-4.md`
  - `docs/architecture/site-architecture.md`
  - `docs/content/content-master.md`
  - `docs/content/content-system.md`
  - `docs/visual/visual-system.md`
- Desbloquea:
  - `docs/plans/phase-5.md`
  - cierre visual real de Fase 4
  - base mas estable para i18n, SEO y deployment

---

## 1. Objetivo del trabajo

Ejecutar una pasada de correccion estructural y visual entre Fase 4 y Fase 5 para resolver bugs de legibilidad, limpiar affordances engañosas y mejorar el balance de las paginas activas.

Este trabajo existe para cerrar deuda visible detectada en la UI actual antes de introducir i18n, SEO y deploy real, e incorporar un ajuste recruiter-facing controlado en home y contacto. Al terminar, el sitio debe renderizar con una base visual mas confiable, con mejor legibilidad en dark mode, previews mas honestas, layouts editoriales mejor equilibrados en `/work/` y `/experience/`, y una arquitectura de conversion mas clara mediante una pagina dedicada de contacto.

---

## 2. Fuente de verdad aplicable

- `docs/README.md`
- `docs/plans/roadmap.md`
- documentos contractuales aplicables:
  - `docs/architecture/site-architecture.md`
  - `docs/content/content-system.md`
  - `docs/content/content-master.md`
  - `docs/strategy/portfolio-strategy.md`
  - `docs/visual/visual-system.md`
- documentos auxiliares aplicables:
  - `docs/plans/phase-4.md`
  - `temp/screenshots/*`

Nota:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- este plan no crea una nueva fase del roadmap
- este plan no puede contradecir documentos contractuales
- este plan si puede incluir ajustes estructurales limitados, pero solo si sincroniza antes los documentos contractuales afectados
- si un fix visible exige sincronizacion documental, debe actualizarse el documento correcto antes de cerrar el trabajo

---

## 3. Inputs requeridos

### Documentos

- [x] `docs/content/content-master.md` en estado utilizable
- [x] `docs/content/content-system.md` en estado `done`
- [x] `docs/visual/visual-system.md` en estado `done`
- [x] `docs/architecture/site-architecture.md` en estado `done`
- [x] `docs/plans/phase-4.md` con implementacion ya ejecutada

### Decisiones previas

- [x] dark mode se mantiene con paridad real respecto a light mode
- [x] `/work/` y `/experience/` conservan la arquitectura aprobada
- [x] los previews de `Selected Work` no deben insinuar case studies individuales inexistentes
- [x] el ajuste de `/work/` y `/experience/` debe usar la columna vacia como panel contextual
- [x] la variacion visual entre secciones debe venir de densidad y composicion, no de romper el sistema base
- [x] el header debe priorizar identidad personal visible: `Paulo Cesar Tuya`
- [x] `Contact` deja de vivir en home y pasa a una pagina dedicada `/contact/`
- [x] `Contact` en navbar se convierte en boton y apunta a `/contact/`
- [x] el CTA principal del hero sigue siendo `View selected work`
- [x] el CTA secundario del hero pasa a `See experience`
- [x] `How I Work` baja en el flujo de home: despues de `Experience snapshot` y antes de `Capability Clusters`
- [x] la descripcion de `Selected Work` cambia a una version mas recruiter-readable y outcome-oriented
- [x] `temp/newpicture.png` debe reemplazar la imagen actual del hero

### Estado tecnico

- [x] existe implementacion real de `/`, `/work/` y `/experience/`
- [x] hoy no existe `/contact/` como pagina dedicada
- [x] hoy `Contact` sigue siendo una seccion activa en home
- [x] el bug de legibilidad en dark mode ya fue reproducido visualmente
- [x] existen screenshots de referencia en `temp/screenshots/`
- [x] el sitio compila antes de empezar este trabajo

---

## 4. Entregables documentales

### Crear

- [x] `docs/plans/pre-phase-5-work.md`

### Actualizar si aplica

- [x] `docs/architecture/site-architecture.md`
- [x] `docs/content/content-master.md`
- [x] `docs/content/content-system.md` si el cambio de CTA o contacto afecta reglas de superficie
- [x] `docs/content/content-master.md` si cambia wording visible de CTA o labels
- [ ] `docs/plans/phase-4.md` si se decide registrar cierre visual real de Fase 4
- [x] `docs/governance/decision-log.md` si aparece una decision nueva que sobreviva a Fase 5

### No tocar salvo contradiccion real

- [x] `docs/strategy/portfolio-strategy.md`
- [x] `docs/architecture/site-architecture.md`
- [x] `docs/visual/visual-system.md`
- [x] `docs/architecture/i18n-spec.md`

---

## 5. Alcance de implementacion

### Si entra

- [x] sincronizacion documental previa para reflejar los cambios recruiter-facing aprobados
- [x] reemplazar la imagen actual del hero por `temp/newpicture.png`
- [x] actualizar el header para mostrar `Paulo Cesar Tuya` como label visible
- [x] convertir `Contact` en boton del navbar
- [x] crear `/contact/` como pagina dedicada y mover alli el contenido actual de contacto
- [x] retirar el bloque `Contact` de la home
- [x] hacer que el `FooterCTA` y el boton de `Contact` apunten a `/contact/`
- [x] reordenar la home a `Hero -> Selected Work -> Experience snapshot -> How I Work -> Capability Clusters -> Start a Conversation -> Footer`
- [x] mantener el hero copy actual sin cambios
- [x] actualizar la jerarquia de CTA del hero a `View selected work` y `See experience`
- [x] actualizar la descripcion de `Selected Work` a la version recruiter-readable aprobada
- [x] corregir legibilidad y contraste de dark mode en home y superficies compartidas
- [x] corregir el artefacto visual cortado del hero
- [x] reforzar contraste de metadata, chips y labels en light mode donde hoy se siente demasiado tenue
- [x] agregar estado activo claro en navbar
- [x] cambiar CTA de previews de `Selected Work` para que no prometan case studies individuales y no compitan con la nueva CTA del hero
- [x] reequilibrar el intro layout de `/work/` y `/experience/` usando la columna vacia como panel contextual
- [x] introducir mas variacion de ritmo visual por densidad y composicion entre `How I Work`, `Selected Work` y `Experience`
- [ ] ejecutar validacion tecnica y revision visual/manual sobre light y dark mode

### No entra

- [ ] crear slugs individuales para case studies
- [ ] crear paginas nuevas fuera de `/contact/`
- [ ] reabrir estrategia del portfolio
- [ ] reabrir el sistema visual contractual salvo contradiccion real
- [ ] introducir i18n real
- [ ] introducir SEO detallado de Fase 6
- [ ] limpiar assets heredados por iniciativa propia sin una decision separada

---

## 6. Tareas detalladas

### Phase A - Sincronizacion documental previa

- [x] actualizar `docs/architecture/site-architecture.md` para reflejar `/contact/` como pagina real
- [x] actualizar `docs/content/content-master.md` para reflejar:
  - [x] branding visible del header
  - [x] CTA secundaria del hero: `See experience`
  - [x] nueva descripcion de `Selected Work`
  - [x] salida del bloque `Contact` de home
  - [x] `FooterCTA` y conversion orientados a `/contact/`
  - [x] contenido base de la nueva pagina `/contact/`
- [x] actualizar `docs/content/content-system.md` si hace falta explicitar la nueva funcion de `Contact` como pagina y no como bloque de home
- [x] registrar en `docs/governance/decision-log.md` las decisiones recruiter-facing aprobadas

### Phase B - Bugs visuales y legibilidad base

- [x] auditar tokens y usos reales de texto secundario, metadata, tags y surfaces en dark mode
- [x] identificar todos los componentes donde el contraste de dark mode cae por debajo de una legibilidad razonable
- [x] ajustar color, opacidad, overlay y separacion entre canvas y cards en dark mode sin romper la paridad con light mode
- [x] auditar metadata, chips, overlines y labels en light mode
- [x] reforzar contraste de metadata y chips en light mode manteniendo la sobriedad del sistema
- [x] localizar el elemento visual cortado del hero
- [x] corregir overflow, clipping o posicionamiento del artefacto del hero
- [x] correr `npm run build` despues de los fixes base

### Phase C - Header, navegacion y arquitectura de contacto

- [x] promover `temp/newpicture.png` a asset controlado del repo para uso del hero
- [x] sustituir la imagen actual del hero por el nuevo asset aprobado
- [ ] validar que el nuevo asset respete el panel editorial del hero en light y dark mode
- [x] actualizar el branding visible del header a `Paulo Cesar Tuya`
- [x] convertir `Contact` del navbar en boton
- [x] agregar estado activo claro en navbar para `/`, `/work/` y `/experience/`
- [x] definir tambien el comportamiento visual de estado activo para `/contact/`
- [x] crear `src/pages/contact.astro`
- [x] mover el contenido actual de contacto a la nueva pagina dedicada sin perder consistencia de copy y estilo
- [x] retirar el bloque `Contact` de la home
- [x] apuntar `FooterCTA` a `/contact/`
- [ ] validar que el estado activo y el boton `Contact` funcionen en light y dark mode sin introducir ruido visual

### Phase D - Hero, orden de home y affordance de previews

- [x] mantener el hero copy actual sin cambios de headline ni supporting line
- [x] actualizar la CTA secundaria del hero a `See experience`
- [x] asegurar que la CTA primaria siga siendo `View selected work`
- [x] reordenar la home para que `How I Work` aparezca despues de `Experience snapshot`
- [x] actualizar la descripcion de `Selected Work` a la version recruiter-readable aprobada
- [x] localizar todas las instancias del CTA de preview de `Selected Work`
- [x] sustituir el wording actual por una opcion honesta alineada con la experiencia real
- [x] verificar si el nuevo CTA final requiere otra sincronizacion menor de `content-master.md`

### Phase E - Rebalanceo editorial de `/work/`

- [x] auditar la composicion actual del intro de `/work/`
- [x] definir el panel contextual lateral de `/work/` usando informacion ya aprobada en contrato
- [x] implementar un panel contextual que complemente el bloque principal sin competir con el headline
- [x] asegurar que el panel lateral use informacion ya aprobada: filtros de lectura, framing, criterios o contexto de seleccion
- [x] ajustar spacing, ancho y jerarquia del intro para evitar la masa vacia a la derecha
- [x] revisar la relacion visual entre intro y cards para que la pagina no se sienta partida en dos sistemas distintos

### Phase F - Rebalanceo editorial de `/experience/`

- [x] auditar la composicion actual del intro de `/experience/`
- [x] definir el panel contextual lateral de `/experience/` usando informacion ya aprobada en contrato
- [x] implementar el panel lateral con contexto profesional util: lectura de trayectoria, ubicacion, idiomas o criterios de curacion ya aprobados
- [x] ajustar ancho, spacing y jerarquia del intro para que la pagina se sienta intencional y no desbalanceada
- [x] verificar que el intro y la lista de experiencia mantengan continuidad editorial

### Phase G - Ritmo visual entre secciones

- [x] auditar la repeticion excesiva de composicion entre `How I Work`, `Selected Work`, `Experience`, `Skills` y `Contact`
- [x] introducir variacion por densidad, jerarquia y composicion sin romper la identidad del sistema
- [x] mantener `How I Work` como bloque mas conceptual
- [x] mantener `Selected Work` como bloque claramente card-driven
- [x] reforzar que `Experience` se sienta mas editorial y secuencial que `Selected Work`
- [ ] asegurar que la eliminacion del bloque `Contact` no deje la home desequilibrada en su cierre
- [x] validar que la variacion venga de layout y ritmo, no de decoracion extra o superficies arbitrarias

### Phase H - QA, cierre y sincronizacion documental

- [ ] revisar visualmente `/` en light mode
- [ ] revisar visualmente `/` en dark mode
- [ ] revisar visualmente `/contact/` en light mode
- [ ] revisar visualmente `/contact/` en dark mode
- [ ] revisar visualmente `/work/` en light mode
- [ ] revisar visualmente `/work/` en dark mode
- [ ] revisar visualmente `/experience/` en light mode
- [ ] revisar visualmente `/experience/` en dark mode
- [ ] verificar navegacion, CTA y estado activo del navbar
- [x] ejecutar `npm run build`
- [x] actualizar docs afectadas si algun fix cambia wording visible o deja una decision persistente
- [ ] decidir si este trabajo permite marcar Fase 4 como `done`

### Checkpoints interactivos previstos

- [x] Checkpoint 1: CTA exacta de previews de `Selected Work`
- [x] Checkpoint 2: contenido exacto del panel contextual de `/work/`
- [x] Checkpoint 3: contenido exacto del panel contextual de `/experience/`
- [ ] Checkpoint 4: equilibrio final del cierre de home tras retirar `Contact`
- [ ] Checkpoint 5: alcance de la variacion visual entre secciones si aparece mas de una solucion razonable

---

## 7. Archivos probables a tocar

### Docs

- `docs/plans/pre-phase-5-work.md`
- `docs/architecture/site-architecture.md`
- `docs/content/content-system.md`
- `docs/content/content-master.md`
- `docs/plans/phase-4.md`
- `docs/governance/decision-log.md`

### Codigo

- `src/components/layout/Navbar.astro`
- `src/components/sections/Hero.astro`
- `src/components/sections/Contact.astro`
- `src/components/sections/FooterCTA.astro`
- `src/components/sections/Projects.astro`
- `src/components/sections/Timeline.astro`
- `src/components/sections/Values.astro`
- `src/components/sections/Skills.astro`
- `src/pages/index.astro`
- `src/pages/contact.astro`
- `src/pages/work.astro`
- `src/pages/experience.astro`
- `src/assets/*`
- `src/styles/global.css`
- `tailwind.config.mjs`
- `src/layouts/Layout.astro`

### Referencias visuales a inspeccionar

- `temp/screenshots/darkmode.jpg`
- `temp/screenshots/work1.jpg`
- `temp/screenshots/work2.jpg`
- `temp/screenshots/exp1.jpg`
- `temp/screenshots/exp2.jpg`
- `temp/screenshots/Screenshot_495.jpg`
- `temp/screenshots/Screenshot_496.jpg`
- `temp/screenshots/Screenshot_497.jpg`
- `temp/screenshots/Screenshot_498.jpg`
- `temp/screenshots/Screenshot_499.jpg`
- `temp/screenshots/Screenshot_500.jpg`
- `temp/screenshots/Screenshot_501.jpg`

---

## 8. Dependencias y bloqueos

### Dependencias

- [x] Fase 4 implementada
- [x] sistema visual base ya cerrado
- [x] screenshots de referencia disponibles

### Bloqueos posibles

- [ ] la introduccion de `/contact/` puede requerir ajustar mas de un contrato si aparecen dependencias ocultas
- [ ] el CTA exacto de previews de `Selected Work` admite mas de una lectura razonable
- [ ] el panel contextual de `/work/` admite varias soluciones con distinto peso editorial
- [ ] el panel contextual de `/experience/` admite varias soluciones con distinto peso informativo
- [ ] la correccion de dark mode puede requerir tocar tokens globales y no solo componentes aislados
- [ ] la variacion visual entre secciones puede derivar en cambios que rocen una decision de sistema visual mas amplia

### Mitigacion

- detenerse y consultar si una correccion deja de ser straightforward-fix
- sincronizar primero docs antes de implementar el cambio de `/contact/`
- priorizar composicion, jerarquia y densidad antes que decoracion nueva
- no introducir nuevas convenciones visuales fuera de `visual-system.md`
- si un ajuste cambia texto visible o promesa de UI, sincronizar `content-master.md`

---

## 9. Validaciones

### Documentales

- [ ] verificar alineacion con `docs/README.md`
- [ ] verificar alineacion con `docs/plans/roadmap.md`
- [ ] verificar que no se introdujeron decisiones fuera de contrato
- [ ] verificar si el CTA final de preview sigue alineado con `content-master.md`
- [ ] verificar que `site-architecture.md` y `content-master.md` ya contemplan `/contact/`

### Tecnicas

- [ ] `npm run build`

### Manuales

- [ ] revision visual/manual de `/` en light mode
- [ ] revision visual/manual de `/` en dark mode
- [ ] revision visual/manual de `/contact/` en light mode
- [ ] revision visual/manual de `/contact/` en dark mode
- [ ] revision visual/manual de `/work/` en light mode
- [ ] revision visual/manual de `/work/` en dark mode
- [ ] revision visual/manual de `/experience/` en light mode
- [ ] revision visual/manual de `/experience/` en dark mode
- [ ] revision de navegacion y estado activo del navbar

---

## 10. Criterio de cierre

Este trabajo solo se considera cerrado si:

- [ ] el dark mode vuelve a ser legible en home y superficies equivalentes
- [ ] el artefacto visual del hero desaparece
- [ ] metadata, chips y labels se leen con claridad suficiente en light mode
- [ ] el navbar muestra estado activo claro y sobrio
- [ ] el header ya comunica identidad personal de forma mas directa
- [ ] existe `/contact/` y concentra la conversion sin duplicacion innecesaria en home
- [ ] los previews de `Selected Work` ya no prometen un nivel de profundidad inexistente
- [ ] `/work/` y `/experience/` dejan de sentirse desbalanceadas en desktop
- [ ] existe mas ritmo visual entre secciones sin romper el sistema base
- [ ] `npm run build` pasa
- [ ] la documentacion afectada queda sincronizada

---

## 11. Riesgos y notas

### Riesgos

- este trabajo ya no es solo polish visual; incluye un ajuste arquitectonico controlado y exige disciplina documental
- este trabajo puede descubrir que algun ajuste de layout necesita una decision mas cercana a arquitectura que a polish visual
- un fix global de contraste puede alterar equilibrio de dark mode en paginas no cubiertas por screenshots
- el panel contextual lateral puede crecer demasiado y competir con el bloque principal si no se controla bien la densidad
- una variacion visual demasiado agresiva entre secciones podria debilitar la consistencia del sistema
- el nuevo asset del hero puede exigir pequenos ajustes de encuadre, escala o tratamiento para no romper el balance editorial ya aprobado

### Notas operativas

- ejecutar este trabajo con modo altamente interactivo
- preguntar antes de editar si aparece una nueva ambiguedad fuera de las ya cerradas
- tratar este documento como puente entre Fase 4 y Fase 5, no como sustituto de una fase del roadmap
- este documento asume como aprobados el cambio de branding visible del header y la introduccion de `/contact/` como pagina real
- no borrar residuos heredados del template durante este trabajo salvo instruccion explicita separada

---

## 12. Registro de cambios del plan

- Fecha: `2026-03-14`
  - cambio: creacion inicial del plan auxiliar `pre-phase-5-work`
  - razon: preparar una pasada estructural y visual antes de Fase 5 a partir del analisis de screenshots y decisiones del usuario
- Fecha: `2026-03-14`
  - cambio: incorporacion de cambios recruiter-facing en header, CTA, orden de home y arquitectura de contacto
  - razon: integrar feedback experto aceptado por el usuario antes de Fase 5 manteniendo consistencia documental y operativa
