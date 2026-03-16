# Work Headers Patch Plan

## Metadatos

- Fase: `pre-phase-5`
- Estado: `active`
- Ultima actualizacion: `2026-03-14`
- Owner: `Codex`
- Depende de:
  - `docs/README.md`
  - `docs/architecture/site-architecture.md`
  - `docs/content/content-system.md`
  - `docs/visual/visual-system.md`
  - `docs/content/content-master.md`
  - `docs/plans/sprint-1/pre-phase-5-fixes/pre-phase-5-work.md`
- Desbloquea:
  - implementacion de headers visuales por proyecto en `Selected Work`
  - decision estable sobre assets visuales por caso
  - futura extension consistente a slugs de caso si aparecen

---

## 1. Objetivo de la fase

Definir e implementar una capa visual de imagen/header para cada proyecto de `Selected Work` sin reabrir la arquitectura del sitio ni el sistema visual. Al cerrar este patch, `/work/` y la preview de `Selected Work` en home deben poder mostrar un header visual por proyecto, mantenido desde la capa de datos y alineado con el sistema visual actual.

Este patch existe para reforzar reconocimiento y lectura de casos con evidencia visual, tomando como referencia la idea de `temp/header_image.jpg` sin convertir las cards en posters decorativos.

---

## 2. Fuente de verdad aplicable

- `docs/README.md`
- `docs/plans/sprint-1/roadmap.md`
- documentos contractuales aplicables:
  - `docs/architecture/site-architecture.md`
  - `docs/content/content-system.md`
  - `docs/visual/visual-system.md`
- documentos auxiliares aplicables:
  - `docs/content/content-master.md`
  - `docs/plans/sprint-1/pre-phase-5-fixes/pre-phase-5-work.md`
  - `docs/visual/asset-plan.md`

Nota:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- este plan no puede contradecir documentos contractuales

---

## 3. Inputs requeridos

### Documentos

- [x] `docs/README.md`
- [x] `docs/architecture/site-architecture.md`
- [x] `docs/content/content-system.md`
- [x] `docs/visual/visual-system.md`
- [x] `docs/content/content-master.md`
- [x] `docs/plans/sprint-1/pre-phase-5-fixes/pre-phase-5-work.md`

### Decisiones previas

- [x] el patron visual deseado se parece a `temp/header_image.jpg`
- [x] el cambio debe aplicar a `/work/` y a la preview de `Selected Work` en home
- [x] la imagen debe vivir como header superior full-width dentro de cada card
- [x] el tratamiento visual debe usar overlay/tinte reversible
- [x] la metadata del header debe vivir en `src/data/selected-work.ts`
- [x] los assets deben promoverse desde `temp/headers/` a `src/assets/work-headers/`
- [x] la imagen pasa a ser parte estructural de `selected_work_case_study` y `selected_work_preview` cuando exista asset aprobado
- [x] el patron responsive mantiene header superior en todos los breakpoints, con altura adaptativa

### Estado tecnico

- [x] existe `temp/header_image.jpg`
- [x] existe `temp/headers/`
- [x] los 6 `selectedWork` activos tienen header disponible:
  - `interu`
  - `pcftc`
  - `amdgw`
  - `dld2`
  - `ewc`
  - `limamajor`
- [x] existen 2 headers adicionales no activos hoy:
  - `lpg`
  - `pcfsc`
- [x] `/work/` ya consume `src/data/selected-work.ts`
- [x] la home ya tiene una preview estructural de `Selected Work`

---

## 4. Entregables documentales

### Crear

- [x] `docs/plans/sprint-1/pre-phase-5-fixes/work-headers-patch.md`

### Actualizar

- [x] `docs/content/content-system.md` para fijar soporte estructural de imagen/header en `selected_work_case_study` y `selected_work_preview`
- [x] `docs/visual/asset-plan.md` para registrar promotion de headers y su estado
- [x] `docs/governance/decision-log.md` para registrar la decision ejecutada y el uso de overlay reversible
- [ ] `docs/plans/sprint-1/pre-phase-5-fixes/pre-phase-5-work.md` si este patch se integra al trabajo puente ya activo

### No tocar

- [ ] `docs/strategy/portfolio-strategy.md`
- [ ] `docs/architecture/i18n-spec.md`
- [ ] `docs/delivery/deployment.md`

---

## 5. Alcance de implementacion

### Si entra

- [x] promover 6 headers activos desde `temp/headers/` a `src/assets/work-headers/`
- [x] ampliar `src/data/selected-work.ts` con metadata de header por proyecto
- [x] renderizar headers en las cards de `/work/`
- [x] renderizar headers en la preview de `Selected Work` en home
- [x] aplicar overlay/tinte reversible por CSS o capa de UI, no por edicion destructiva del asset
- [x] resolver altura adaptativa del header sin perder legibilidad del contenido
- [ ] validar que el header no compita con tags, titulo y metricas

### No entra

- [ ] promover los 2 headers adicionales no usados hoy (`lpg`, `pcfsc`)
- [ ] usar `temp/` como fuente directa de runtime
- [ ] abrir slugs individuales de case study
- [ ] editar destructivamente los assets para baked-in overlays
- [ ] convertir todas las cards de work en posters dominantes
- [ ] introducir galerias o carruseles de imagen

---

## 6. Tareas detalladas

### Bloque A - Sync documental previo

- [x] confirmar soporte estructural de imagen/header en `selected_work_case_study`
- [x] confirmar soporte reducido de imagen/header en `selected_work_preview`
- [x] actualizar `docs/content/content-system.md`
- [x] registrar headers activos en `docs/visual/asset-plan.md`
- [x] registrar decision ejecutada en `docs/governance/decision-log.md`

### Bloque B - Promotion y organizacion de assets

- [x] crear carpeta destino `src/assets/work-headers/`
- [ ] promover los 6 assets activos:
  - [x] `interu.jpg`
  - [x] `pcftc.jpg`
  - [x] `amdgw.jpg`
  - [x] `dld2.jpg`
  - [x] `ewc.jpg`
  - [x] `limamajor.jpg`
- [x] verificar naming consistente y predecible por proyecto
- [x] dejar fuera del runtime `lpg.jpg` y `pcfsc.jpg`

### Bloque C - Modelo de datos

- [x] extender `SelectedWorkItem` en `src/data/selected-work.ts` con metadata de header
- [x] definir forma minima recomendada:
  - `headerImage`
  - `headerAlt`
  - `headerOverlay`
- [x] mapear cada proyecto activo a su header
- [x] mantener el contenido editorial separado del detalle de render

### Bloque D - `/work/`

- [x] rediseñar cada card para soportar un header superior full-width
- [x] insertar la imagen antes del bloque de tags y contenido textual
- [x] aplicar overlay/tinte reversible
- [ ] mantener tags, titulo, summary y metricas claramente legibles
- [x] ajustar altura del header para que se sienta visualmente util y no decorativo
- [x] evitar que la imagen empuje demasiado abajo el contenido

### Bloque E - Home preview

- [x] identificar el patron exacto de `Selected Work` preview en home
- [x] aplicar una version reducida del mismo header visual
- [x] asegurar consistencia con `/work/` sin duplicar demasiado peso
- [x] mantener la preview como snapshot, no como showcase exhaustivo

### Bloque F - Overlay, contraste y reversibilidad

- [x] definir el overlay como tratamiento de UI reversible, no destructivo
- [x] asegurar que pueda retirarse o atenuarse sin reemplazar assets
- [ ] validar legibilidad de tags y texto encima o alrededor del header
- [ ] revisar si algunos headers requieren intensidad de overlay menor o mayor

### Bloque G - QA y cierre

- [ ] revisar `/work/` en desktop light mode
- [ ] revisar `/work/` en desktop dark mode
- [ ] revisar `/work/` en mobile light/dark
- [ ] revisar preview de home light/dark
- [ ] confirmar que el patch no rompa spacing, scanability ni performance percibida
- [x] ejecutar `npm run build`

---

## 7. Archivos probables a tocar

### Docs

- `docs/plans/sprint-1/pre-phase-5-fixes/work-headers-patch.md`
- `docs/content/content-system.md`
- `docs/visual/asset-plan.md`
- `docs/governance/decision-log.md`
- `docs/plans/sprint-1/pre-phase-5-fixes/pre-phase-5-work.md`

### Codigo

- `src/data/selected-work.ts`
- `src/pages/work.astro`
- `src/components/sections/Projects.astro`
- `src/styles/global.css`
- `src/assets/work-headers/...`

### Inputs externos de trabajo

- `temp/header_image.jpg`
- `temp/headers/...`

---

## 8. Dependencias y bloqueos

### Dependencias

- [ ] que los headers de `temp/headers/` sean usables visualmente sin re-edicion pesada
- [ ] que las cards actuales toleren bien un bloque visual superior
- [ ] que el sistema visual soporte overlay sobrio sin convertir las cards en posters

### Bloqueos posibles

- [ ] algun header puede perder legibilidad con un overlay uniforme
- [ ] la preview de home puede volverse demasiado pesada si el header es muy alto
- [ ] algunas imagenes pueden requerir recorte distinto para no perder informacion util
- [ ] el contenido textual puede caer demasiado abajo si la altura no se controla

### Mitigacion

- usar alturas de header controladas y adaptativas
- mantener overlay reversible y ajustable por CSS
- permitir una variante mas compacta del header en home
- validar visualmente proyecto por proyecto antes de cerrar

---

## 9. Validaciones

### Documentales

- [ ] verificar alineacion con `docs/README.md`
- [ ] verificar alineacion con `docs/plans/sprint-1/roadmap.md`
- [ ] verificar que no se introdujeron decisiones fuera de contrato
- [ ] verificar que `temp/` no se conecte al runtime

### Tecnicas

- [x] `npm run build`
- [x] confirmar imports correctos de headers promovidos
- [x] confirmar que no queden referencias a `temp/headers/` en codigo activo

### Manuales

- [ ] revision visual/manual de `/work/` light mode
- [ ] revision visual/manual de `/work/` dark mode
- [ ] revision visual/manual de preview de home light/dark
- [ ] revision responsive de cards con header

---

## 10. Criterio de cierre

La fase solo se considera cerrada si:

- [x] todos los `selectedWork` activos muestran header correcto en `/work/`
- [x] la preview de home muestra headers sin romper jerarquia ni densidad
- [x] el runtime usa solo assets promovidos a `src/assets/work-headers/`
- [x] el overlay sigue siendo reversible y no destructivo
- [ ] la UI mantiene consistencia con `visual-system.md`
- [x] `npm run build` pasa
- [x] las actualizaciones documentales necesarias quedaron sincronizadas

---

## 11. Riesgos y notas

### Riesgos

- el header puede volver demasiado pesada la preview de home si no se compacta bien
- algunos proyectos pueden requerir un recorte menos generico que otros
- un overlay demasiado fuerte puede matar valor documental de la imagen
- un overlay demasiado suave puede romper contraste o cohesion entre cards

### Notas operativas

- este patch no autoriza conectar `temp/` al runtime
- `lpg.jpg` y `pcfsc.jpg` quedan fuera salvo nueva decision
- el overlay debe poder desactivarse o ajustarse sin regenerar assets
- si algun header necesita tratamiento individual fuerte, debe consultarse antes de implementarlo

---

## 12. Registro de cambios del plan

- Fecha: `2026-03-14`
  - cambio: creacion inicial del plan auxiliar para introducir imagenes/header por proyecto en `Selected Work`
  - razon: preparar implementacion consistente con `header_image.jpg`, la cobertura real de `temp/headers/` y el sistema visual vigente
