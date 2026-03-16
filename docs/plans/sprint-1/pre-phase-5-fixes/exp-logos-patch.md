# Experience Logos Patch Plan

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
  - implementacion de logos de empresa en experiencia
  - decision estable sobre variantes `dark` / `light` / `allmode`
  - futura extension consistente a otras superficies si se aprueba

---

## 1. Objetivo de la fase

Definir e implementar una capa visual de logos de empresa para las experiencias laborales sin reabrir la arquitectura del sitio ni el sistema visual. Al cerrar este patch, `/experience/` y la preview de experiencia en home deben poder mostrar identificadores de empresa claros, consistentes con light/dark mode y mantenibles desde la capa de datos.

Este patch existe para mejorar reconocimiento de trayectoria y escaneabilidad recruiter-facing, tomando como referencia visual la idea de `temp/left_image.jpg` sin convertir la seccion en una galeria de marcas.

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

- [x] el patron visual deseado se parece a `temp/left_image.jpg`
- [x] el cambio debe aplicar a `/experience/` y a la preview de experiencia en home
- [x] desktop usa una estructura de 2 columnas compactas: logo + metadata a la izquierda, contenido a la derecha
- [x] mobile usa una fila superior con logo a la izquierda y metadata a la derecha, seguida del cuerpo full-width
- [x] se debe usar variante `dark` / `light` cuando exista y `allmode` como fallback
- [x] el logo debe vivir dentro de un badge o panel sobrio, no flotando sin contencion
- [x] la metadata de logo debe vivir en `src/data/experience.ts`
- [x] los assets deben promoverse desde `temp/logos/` a `src/assets/experience-logos/`
- [x] `location` y `work mode` deben renderizarse en lineas separadas

### Estado tecnico

- [x] existe `temp/left_image.jpg`
- [x] existe `temp/logos/`
- [x] los 5 `experienceItems` activos tienen logo disponible:
  - `xp`
  - `cg`
  - `4d`
  - `inf`
  - `lm`
- [x] la pagina `/experience/` ya consume `src/data/experience.ts`
- [x] la home ya tiene una preview estructural de experiencia reutilizable

---

## 4. Entregables documentales

### Crear

- [x] `docs/plans/sprint-1/pre-phase-5-fixes/exp-logos-patch.md`

### Actualizar

- [x] `docs/content/content-system.md` si la presencia de logos pasa a ser regla estructural de la seccion `experience`
- [x] `docs/visual/asset-plan.md` para registrar promotion de assets y variantes aprobadas
- [x] `docs/governance/decision-log.md` para registrar la decision ejecutada y el mapping de variantes
- [ ] `docs/plans/sprint-1/pre-phase-5-fixes/pre-phase-5-work.md` si este patch se integra como parte del trabajo puente ya activo

### No tocar

- [ ] `docs/strategy/portfolio-strategy.md`
- [ ] `docs/architecture/i18n-spec.md`
- [ ] `docs/delivery/deployment.md`

---

## 5. Alcance de implementacion

### Si entra

- [x] promover logos desde `temp/logos/` a `src/assets/experience-logos/`
- [x] ampliar `src/data/experience.ts` con metadata de logo por item
- [x] renderizar logos en las cards de `/experience/`
- [x] renderizar logos en la preview de experiencia de home
- [x] seleccionar asset correcto por tema con fallback `allmode`
- [x] resolver layout responsive: logo en columna izquierda en desktop, logo arriba del texto en mobile
- [x] aplicar badge/panel sobrio para alojar el logo
- [ ] validar contraste y legibilidad en light/dark mode

### No entra

- [ ] introducir logos en `Selected Work`
- [ ] usar `temp/` como fuente directa de runtime
- [ ] reabrir la taxonomia de `experienceItems`
- [ ] rediseñar todas las cards de experiencia fuera del cambio de logo/layout
- [ ] normalizar todas las marcas a monocromo por defecto
- [ ] crear una libreria generica de logos para todo el sitio

---

## 6. Tareas detalladas

### Bloque A - Sync documental previo

- [x] confirmar si el uso de logos en experiencia queda como regla estructural permanente o como enhancement puntual
- [x] actualizar `docs/content/content-system.md` si hace falta fijar `experience_item` con soporte de identificador de empresa
- [x] registrar en `docs/visual/asset-plan.md` los assets promovidos y sus variantes aprobadas
- [x] registrar la decision ejecutada en `docs/governance/decision-log.md`

### Bloque B - Promotion y organizacion de assets

- [x] crear carpeta destino `src/assets/experience-logos/`
- [ ] promover los siguientes assets desde `temp/logos/`:
  - [x] `xp_dark.png`
  - [x] `xp_light.png`
  - [x] `cg_all.png`
  - [x] `4d_dark.png`
  - [x] `4d_light.png`
  - [x] `inf_dark.png`
  - [x] `inf_light.png`
  - [x] `lm_dark.png`
  - [x] `lm_light.png`
- [x] verificar naming consistente y predecible por empresa y variante
- [x] dejar fuera del runtime cualquier asset no usado

### Bloque C - Modelo de datos

- [x] extender `ExperienceItem` en `src/data/experience.ts` con metadata de logo
- [x] definir forma minima recomendada:
  - `logoMode`: `light` | `dark` | `allmode-available`
  - `logoAlt`
  - `logoLight`
  - `logoDark`
  - `logoAll`
- [x] mapear cada empresa actual a su set de assets
- [x] asegurar que Community Gaming use `allmode`
- [x] mantener el contenido editorial separado del detalle de render

### Bloque D - `/experience/`

- [x] rediseñar la estructura de cada `experience` card para soportar columna izquierda compacta de logo + metadata
- [x] colocar el logo dentro de un badge/panel sobrio
- [x] mantener titulo, org, summary, highlights y metrics con jerarquia clara en la columna derecha
- [x] separar `period`, `location` y `work mode` como metadata visible
- [x] evitar que el badge del logo compita con el contenido principal
- [x] hacer fallback correcto por tema:
  - `light mode` -> asset `light`
  - `dark mode` -> asset `dark`
  - sin variante -> `allmode`
- [x] en mobile, usar fila superior `logo + metadata` y contenido debajo

### Bloque E - Home preview

- [x] identificar el componente exacto de preview de experiencia en home
- [x] aplicar una version reducida del mismo patron de logo
- [x] asegurar consistencia con `/experience/` sin duplicar demasiado peso visual
- [x] mantener la preview como snapshot, no como lista completa

### Bloque F - Tema, contraste y fallback

- [ ] validar que cada logo tenga suficiente contraste en su modo correspondiente
- [ ] definir fallback visual si un asset no carga
- [x] revisar si el badge necesita fondo diferente por modo para marcas con mucho negro o mucho blanco
- [ ] asegurar que `allmode` no se vea degradado en dark mode

### Bloque G - QA y cierre

- [ ] revisar `/experience/` en desktop light mode
- [ ] revisar `/experience/` en desktop dark mode
- [ ] revisar `/experience/` en mobile light/dark
- [ ] revisar home preview en light/dark
- [ ] confirmar que el patch no rompa spacing, scanability ni performance percibida
- [x] ejecutar `npm run build`

---

## 7. Archivos probables a tocar

### Docs

- `docs/plans/sprint-1/pre-phase-5-fixes/exp-logos-patch.md`
- `docs/content/content-system.md`
- `docs/visual/asset-plan.md`
- `docs/governance/decision-log.md`
- `docs/plans/sprint-1/pre-phase-5-fixes/pre-phase-5-work.md`

### Codigo

- `src/data/experience.ts`
- `src/pages/experience.astro`
- `src/pages/index.astro`
- `src/components/sections/Timeline.astro`
- `src/styles/global.css`
- `src/assets/experience-logos/...`

### Inputs externos de trabajo

- `temp/left_image.jpg`
- `temp/logos/...`

---

## 8. Dependencias y bloqueos

### Dependencias

- [ ] que los logos de `temp/logos/` sean usables visualmente sin re-edicion pesada
- [ ] que el componente de preview de experiencia en home permita el ajuste sin rediseño mayor
- [ ] que el sistema visual soporte badges de logo sobrios sin romper consistencia

### Bloqueos posibles

- [ ] algun logo puede verse muy pequeno o muy contrastado dentro del badge
- [ ] la preview de home puede no tolerar bien una columna izquierda completa
- [ ] Community Gaming solo tiene `allmode`, lo que puede requerir un tratamiento mas neutro
- [ ] algunos assets pueden necesitar ajuste de padding interno por proporciones distintas

### Mitigacion

- usar contenedor de logo con padding y max-height consistente
- permitir una variante mas compacta del patron en home si la preview no soporta el layout completo
- usar `allmode` con badge neutro y contraste controlado
- validar visualmente marca por marca antes de cerrar

---

## 9. Validaciones

### Documentales

- [ ] verificar alineacion con `docs/README.md`
- [ ] verificar alineacion con `docs/plans/sprint-1/roadmap.md`
- [ ] verificar que no se introdujeron decisiones fuera de contrato
- [ ] verificar que `temp/` no se conecte al runtime

### Tecnicas

- [x] `npm run build`
- [x] confirmar imports correctos de assets promovidos
- [x] confirmar que no queden referencias a `temp/logos/` en codigo activo

### Manuales

- [ ] revision visual/manual de `/experience/` light mode
- [ ] revision visual/manual de `/experience/` dark mode
- [ ] revision visual/manual de home preview light/dark
- [ ] revision responsive de cards con logo

---

## 10. Criterio de cierre

La fase solo se considera cerrada si:

- [x] todos los `experienceItems` activos muestran logo correcto en `/experience/`
- [x] la home preview de experiencia muestra logos sin romper jerarquia ni densidad
- [x] el runtime usa solo assets promovidos a `src/assets/experience-logos/`
- [x] la seleccion de variantes `light` / `dark` / `allmode` funciona como se documento
- [ ] la UI mantiene consistencia con `visual-system.md`
- [x] `npm run build` pasa
- [x] las actualizaciones documentales necesarias quedaron sincronizadas

---

## 11. Riesgos y notas

### Riesgos

- el patron `left_image` puede ser demasiado pesado en la preview de home si no se simplifica
- las proporciones de logo no son uniformes y pueden requerir excepciones de padding o max-width
- una solucion demasiado llamativa puede competir con el contenido en vez de apoyarlo
- el cambio puede abrir una expectativa de logos tambien en `Selected Work`, fuera del alcance actual

### Notas operativas

- este patch no autoriza conectar `temp/` al runtime
- `Community Gaming` debe tratarse como caso especial de `allmode`
- si aparece una necesidad de re-editar assets, debe consultarse antes de implementarla
- si el patron de home no admite la misma estructura que `/experience/`, la version reducida debe quedar explicitamente documentada

---

## 12. Registro de cambios del plan

- Fecha: `2026-03-14`
  - cambio: creacion inicial del plan auxiliar para introducir logos de empresa en experiencia
  - razon: preparar implementacion consistente con `left_image.jpg`, la cobertura real de `temp/logos/` y el sistema visual vigente
