# Dark Mode Fix Plan

## Metadatos

- Fase: `pre-phase-5`
- Estado: `active`
- Ultima actualizacion: `2026-03-15`
- Owner: `Codex + user`
- Tipo: `auxiliar extraordinario`
- Depende de:
  - `docs/README.md`
  - `docs/visual/visual-system.md`
  - `docs/plans/pre-phase-5-fixes/pre-phase-5-work.md`
  - `docs/plans/pre-phase-5-fixes/exp-logos-patch.md`
  - `docs/plans/pre-phase-5-fixes/work-headers-patch.md`
- Desbloquea:
  - una base visual dark mode mas coherente antes de Fase 5
  - cierre mas confiable del trabajo visual pre-Fase 5
  - futuras correcciones visuales sobre una paleta y jerarquia mas estables

---

## 1. Objetivo del trabajo

Corregir los problemas sistémicos de dark mode detectados en `temp/darkmode_issues/` sin reabrir la dirección visual ni convertir este trabajo en una fase de rediseño. Al cerrar este patch, dark mode debe usar una aplicación coherente de la paleta aprobada, con superficies, badges y nested panels que mantengan la misma atmósfera y legibilidad de light mode.

Este trabajo existe para resolver inconsistencias internas reales:

- mezcla de tokens variables y colores Tailwind estáticos
- nested cards demasiado claras
- badges que destacan más de lo debido en dark mode
- overlays y fondos que siguen cargando lógica visual de light mode

---

## 2. Fuente de verdad aplicable

- `docs/README.md`
- `docs/plans/roadmap.md`
- documentos contractuales aplicables:
  - `docs/visual/visual-system.md`
  - `docs/content/content-system.md`
  - `docs/architecture/site-architecture.md`
- documentos auxiliares aplicables:
  - `docs/plans/pre-phase-5-fixes/pre-phase-5-work.md`
  - `docs/plans/pre-phase-5-fixes/exp-logos-patch.md`
  - `docs/plans/pre-phase-5-fixes/work-headers-patch.md`
  - `temp/darkmode_issues/*`

Nota:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- este plan no puede contradecir documentos contractuales
- este plan sí puede recalibrar la aplicación real de la paleta dark sin reabrir la paleta contractual, salvo que durante la ejecución aparezca una contradicción real en `docs/visual/visual-system.md`

---

## 3. Inputs requeridos

### Documentos

- [x] `docs/README.md`
- [x] `docs/visual/visual-system.md`
- [x] `docs/plans/pre-phase-5-fixes/pre-phase-5-work.md`
- [x] `docs/plans/pre-phase-5-fixes/exp-logos-patch.md`
- [x] `docs/plans/pre-phase-5-fixes/work-headers-patch.md`

### Decisiones previas

- [x] el fix debe ser sistémico en tokens, superficies compartidas, badges y nested cards
- [x] no deben tocarse assets salvo que alguno esté objetivamente mal preparado para dark mode
- [x] la paleta contractual aprobada se mantiene; se recalibra su aplicación real
- [x] los badges en dark mode deben sentirse más embebidos en la superficie
- [x] el plan debe incluir cleanup de CSS legado si interfiere o confunde el dark mode

### Estado técnico

- [x] existen screenshots de referencia en `temp/darkmode_issues/`
- [x] el sitio ya reproduce problemas visibles en dark mode
- [x] el repo usa una mezcla de:
  - CSS variables de tema en `src/styles/global.css`
  - colores estáticos en `tailwind.config.mjs`
  - utilidades `dark:*` directamente en componentes
- [x] existen nested panels y badges problemáticos en:
  - `/work/`
  - `/experience/`
  - `navbar`
  - `experience logos`
  - `Footer CTA`
- [x] el sitio compila antes de empezar este trabajo

---

## 4. Entregables documentales

### Crear

- [x] `docs/plans/pre-phase-5-fixes/darkmode-fix.md`

### Actualizar si aplica

- [ ] `docs/visual/visual-system.md` solo si durante la ejecución se confirma que hay contradicción contractual real y no solo un problema de implementación
- [x] `docs/governance/decision-log.md` si se aprueba una regla de aplicación dark mode que deba sobrevivir a Fase 5
- [ ] `docs/plans/pre-phase-5-fixes/pre-phase-5-work.md` si este patch se integra explícitamente como parte del trabajo puente activo

### No tocar salvo contradicción real

- [x] `docs/strategy/portfolio-strategy.md`
- [x] `docs/content/content-master.md`
- [x] `docs/architecture/site-architecture.md`
- [x] `docs/architecture/i18n-spec.md`

---

## 5. Alcance de implementación

### Si entra

- [x] auditar y corregir la mezcla inconsistente entre variables CSS de tema y colores Tailwind estáticos
- [x] recalibrar fondos base y overlays del `body` en dark mode
- [x] recalibrar `surface-card` y `surface-muted` en dark mode
- [x] recalibrar nested cards de los paneles derechos de `/work/` y `/experience/`
- [x] corregir badges demasiado claros:
  - [x] brand badge del navbar/footer
  - [x] badges de logos de experiencia
  - [x] period pills y chips secundarios si quedan desbalanceados
- [x] revisar contraste de headings, subtítulos, metadata, pills y tags en dark mode
- [x] revisar overlay de `work-card-header` para que no ensucie innecesariamente la lectura dark
- [x] limpiar CSS legado del patrón viejo de experiencia si sigue estorbando o creando ambigüedad
- [ ] ejecutar validación técnica y revisión visual/manual de las superficies afectadas

### No entra

- [ ] rediseñar la dirección visual completa
- [ ] reabrir la paleta contractual salvo contradicción real
- [ ] cambiar branding o tipografías base
- [ ] rediseñar layouts fuera de lo estrictamente necesario para corregir dark mode
- [ ] editar destructivamente los assets de logos o headers por defecto
- [ ] introducir nuevas variantes visuales que no estén justificadas por el bug

---

## 6. Tareas detalladas

### Bloque A - Auditoría del sistema dark actual

- [x] inventariar todos los tokens y utilidades que hoy gobiernan dark mode
- [x] separar qué elementos usan variables CSS y cuáles usan colores Tailwind fijos
- [x] identificar componentes donde ambas estrategias conviven de forma inconsistente
- [x] mapear problemas visibles de `temp/darkmode_issues/` a causas concretas en CSS/markup
- [x] registrar qué problemas son:
  - [x] paleta aplicada mal
  - [x] nested surface demasiado clara
  - [x] badge demasiado brillante
  - [x] texto secundario demasiado tenue
  - [x] overlay/fondo mal calibrado

### Bloque B - Fondos base y superficies compartidas

- [x] revisar `body` y eliminar cualquier wash claro impropio en dark mode
- [x] recalibrar `surface-card` para que no se sienta demasiado levantada respecto al canvas dark
- [x] recalibrar `surface-muted` para que mantenga continuidad con el canvas sin perder separación
- [x] revisar sombras y bordes de dark mode para evitar contraste “gris claro sobre negro” demasiado agresivo
- [x] validar que las superficies compartidas sigan sintiéndose coherentes con el sistema visual contractual

### Bloque C - Nested panels y cards internas

- [x] revisar los nested cards del panel derecho de `/work/`
- [x] revisar los nested cards del panel derecho de `/experience/`
- [x] definir una receta dark consistente para nested panels:
  - [x] fondo
  - [x] borde
  - [x] label
  - [x] value
- [x] asegurar que en dark mode esas cards se sientan equivalentes a light mode: informativas, no protagonistas
- [ ] revisar también cualquier nested panel similar en `Footer CTA`, `Contact`, `Hero` o previews si comparte la misma receta

### Bloque D - Badges, pills y chips

- [x] revisar el `brand-badge` del navbar/footer
- [x] revisar los `experience-logo-badge`
- [x] revisar `experience-period-pill`
- [x] revisar tags y metric pills de `/work/`, `/experience/`, home y `Skills`
- [x] definir una regla consistente para badges embebidos en dark mode:
  - [x] menos brillo
  - [x] contraste suficiente
  - [x] separación clara del fondo
  - [x] menor sensación de “chip light mode pegado en dark mode”
- [ ] validar que el acento teal no quede sobreusado como solución rápida

### Bloque E - Texto secundario y jerarquía

- [x] auditar todos los usos de `dark:text-fog/...` con opacidades bajas
- [x] revisar subtítulos, metadata, monos, labels y copy de apoyo en:
  - [x] home
  - [x] `/work/`
  - [x] `/experience/`
  - [ ] `/contact/`
- [x] corregir opacidades o colores donde el texto pierde lectura real
- [x] asegurar que la jerarquía siga siendo clara:
  - [x] headings primero
  - [x] subtítulos segundo
  - [x] metadata/chips tercero

### Bloque F - Overlays y visuales específicos

- [x] revisar `work-card-header-overlay` en dark mode
- [x] confirmar si el overlay actual está ayudando o ensuciando la lectura de las cards
- [x] revisar el panel visual del hero en dark mode
- [x] confirmar si hay otros overlays, gradientes o masks que todavía carguen lógica clara en dark mode
- [x] corregir sin volver el dark mode dramático ni posterizado

### Bloque G - Cleanup técnico y deuda de estilos

- [x] identificar CSS legado del patrón viejo de experiencia ya no usado por el markup actual
- [x] eliminar o actualizar reglas que hoy solo introducen confusión para futuros fixes
- [ ] confirmar que el cleanup no cambie comportamiento visible no relacionado
- [x] dejar la capa de estilos más fácil de razonar para futuras iteraciones visuales

### Bloque H - QA y cierre

- [ ] revisar visualmente `/` en dark mode
- [ ] revisar visualmente `/work/` en dark mode
- [ ] revisar visualmente `/experience/` en dark mode
- [ ] revisar visualmente `/contact/` en dark mode
- [ ] revisar `navbar`, hero, nested panels, badges y pills contra `temp/darkmode_issues/`
- [ ] ejecutar `npm run build`
- [ ] verificar que no se degradó light mode por corregir dark mode

---

## 7. Checkpoints interactivos

- [ ] Checkpoint 1: estrategia exacta para unificar tokens dark sin reabrir la paleta contractual
- [ ] Checkpoint 2: receta final de nested panels en dark mode
- [ ] Checkpoint 3: receta final de badges embebidos en dark mode
- [ ] Checkpoint 4: revisión visual de cierre sobre home, `/work/`, `/experience/` y `/contact/`

---

## 8. Archivos probables a tocar

### Docs

- `docs/plans/pre-phase-5-fixes/darkmode-fix.md`
- `docs/governance/decision-log.md`
- `docs/plans/pre-phase-5-fixes/pre-phase-5-work.md`
- `docs/visual/visual-system.md` solo si aparece contradicción contractual real

### Código

- `src/styles/global.css`
- `tailwind.config.mjs`
- `src/components/layout/Navbar.astro`
- `src/components/ui/Buttons.astro`
- `src/pages/work.astro`
- `src/pages/experience.astro`
- `src/components/sections/Hero.astro`
- `src/components/sections/Projects.astro`
- `src/components/sections/Timeline.astro`
- `src/components/sections/Skills.astro`
- `src/components/sections/FooterCTA.astro`
- `src/components/sections/Footer.astro`
- `src/components/sections/Contact.astro`

### Inputs externos de trabajo

- `temp/darkmode_issues/Screenshot_500.jpg`
- `temp/darkmode_issues/Screenshot_501.jpg`
- `temp/darkmode_issues/Screenshot_502.jpg`
- `temp/darkmode_issues/Screenshot_503.jpg`
- `temp/darkmode_issues/Screenshot_504.jpg`

---

## 9. Dependencias y bloqueos

### Dependencias

- [ ] que los screenshots sigan siendo representativos del estado actual del sitio
- [ ] que el sistema visual contractual no contradiga las correcciones necesarias
- [ ] que los assets actuales de logos/headers no requieran edición destructiva para verse correctos en dark mode

### Bloqueos posibles

- [ ] detectar que algún problema visual fuerte proviene del propio asset y no solo del CSS
- [ ] corregir dark mode en una superficie puede desbalancear light mode si el token está demasiado compartido
- [ ] algunos componentes pueden usar recetas similares pero no idénticas, obligando a decidir si se unifican o se permiten excepciones

### Mitigación

- usar checkpoints interactivos antes de fijar una nueva receta visual reusable
- validar light y dark después de cada bloque sistémico importante
- preferir cambios semánticos de tokens/recetas antes que parches aislados por componente

---

## 10. Validaciones

### Documentales

- [ ] verificar alineación con `docs/README.md`
- [ ] verificar alineación con `docs/visual/visual-system.md`
- [ ] verificar que no se reabrió la paleta contractual sin decisión explícita

### Técnicas

- [ ] `npm run build`
- [ ] búsqueda final para detectar clases legacy ya no usadas en el patrón viejo de experiencia

### Manuales

- [ ] revisar capturas actuales vs `temp/darkmode_issues/`
- [ ] revisar visualmente badges, nested panels y chips en dark mode
- [ ] revisar visualmente que light mode no perdió equilibrio

---

## 11. Criterio de cierre

El patch solo se considera cerrado si:

- [ ] dark mode deja de mostrar badges o nested cards claramente más brillantes que el resto del sistema
- [ ] la jerarquía tipográfica en dark mode recupera legibilidad razonable en todas las páginas activas
- [ ] navbar, `/work/`, `/experience/` y `Footer CTA` se sienten parte del mismo sistema dark
- [ ] no queda CSS legado confuso del patrón viejo de experiencia si interfiere con el mantenimiento
- [ ] `npm run build` pasa
- [ ] la revisión visual/manual confirma mejora real frente a `temp/darkmode_issues/`

---

## 12. Riesgos y notas

### Riesgos

- corregir solo el badge o solo el texto sin tocar la receta sistémica puede producir otra inconsistencia distinta
- usar `fog` demasiado brillante como fondo en dark mode puede seguir reintroduciendo apariencia “light chip”
- tocar demasiadas utilidades Tailwind sin consolidar una receta semántica puede dejar el sistema más difícil de mantener

### Notas operativas

- la prioridad es consistencia sistémica, no un parche cosmético por screenshot
- si durante la ejecución se comprueba que algún asset tiene fondo baked-in claramente incompatible con dark mode, debe abrirse consulta antes de tratarlo como problema de asset

---

## 13. Registro de cambios del plan

- `2026-03-15`
  - cambio: creación inicial del patch plan para dark mode
  - razon: corregir inconsistencias sistémicas detectadas en `temp/darkmode_issues/`
