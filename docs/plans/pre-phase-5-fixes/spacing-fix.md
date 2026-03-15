# Spacing Fix Plan

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
  - `docs/plans/pre-phase-5-fixes/darkmode-fix.md`
- Desbloquea:
  - una home con mejor ritmo vertical y mejor separacion entre bloques
  - una pagina `/contact/` mas compacta y menos fragmentada
  - una base visual mas consistente antes de Fase 5

---

## 1. Objetivo del trabajo

Corregir problemas puntuales de ritmo vertical y separacion entre bloques en home y `/contact/`, sin reabrir arquitectura ni rediseñar el sistema visual. Al cerrar este patch, la home debe usar el espacio de forma mas intencional y `/contact/` debe evitar la sensacion de doble bloque demasiado separado.

Este trabajo existe porque el sitio actual usa un espaciado relativamente uniforme entre secciones, pero no todas las superficies tienen suficiente señal visual para justificarlo. En algunos casos conviene introducir una banda suave de seccion; en otros, reducir spacing.

---

## 2. Fuente de verdad aplicable

- `docs/README.md`
- `docs/plans/roadmap.md`
- documentos contractuales aplicables:
  - `docs/visual/visual-system.md`
  - `docs/architecture/site-architecture.md`
  - `docs/content/content-master.md`
- documentos auxiliares aplicables:
  - `docs/plans/pre-phase-5-fixes/pre-phase-5-work.md`
  - `docs/plans/pre-phase-5-fixes/darkmode-fix.md`
  - `temp/spacing/home.png`
  - `temp/spacing/contact.png`
  - `temp/spacing/og_template.png`

Nota:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- este plan no puede contradecir documentos contractuales
- este plan no reabre la direccion visual; solo ajusta ritmo, separacion y uso de bandas suaves

---

## 3. Inputs requeridos

### Documentos

- [x] `docs/README.md`
- [x] `docs/visual/visual-system.md`
- [x] `docs/plans/pre-phase-5-fixes/pre-phase-5-work.md`
- [x] `docs/plans/pre-phase-5-fixes/darkmode-fix.md`

### Decisiones previas

- [x] el patch se limita a home y `/contact/`
- [x] `Capability Clusters` debe recibir una banda visual suave
- [x] `Selected Work` tambien debe recibir una banda visual suave
- [x] `/contact/` debe resolverse reduciendo spacing, no agregando otra banda de fondo
- [x] el documento debe ser un patch plan corto y acotado

### Estado técnico

- [x] la home actual usa `section-padding` relativamente uniforme entre secciones
- [x] `Values` y `Timeline` ya usan `bg-section-wash`
- [x] `Projects` y `Skills` hoy renderizan sobre el canvas general
- [x] `/contact/` tiene una combinacion de intro de pagina + bloque `Contact` que deja demasiado aire entre ambos
- [x] existen capturas de referencia en `temp/spacing/`

---

## 4. Entregables documentales

### Crear

- [x] `docs/plans/pre-phase-5-fixes/spacing-fix.md`

### Actualizar si aplica

- [ ] `docs/governance/decision-log.md` si durante la ejecucion aparece una regla reusable de ritmo vertical que sobreviva a Fase 5
- [ ] `docs/plans/pre-phase-5-fixes/pre-phase-5-work.md` si este patch se integra explicitamente como parte del trabajo puente activo

### No tocar salvo contradiccion real

- [x] `docs/strategy/portfolio-strategy.md`
- [x] `docs/content/content-master.md`
- [x] `docs/architecture/site-architecture.md`
- [x] `docs/architecture/i18n-spec.md`

---

## 5. Alcance de implementacion

### Si entra

- [x] revisar y ajustar el ritmo vertical de la home
- [x] introducir banda visual suave para `Selected Work`
- [x] introducir banda visual suave para `Capability Clusters`
- [x] revisar si alguna de esas dos bandas necesita ajuste fino de padding vertical
- [x] reducir spacing en `/contact/` entre el intro de pagina y el bloque de cards
- [ ] validar que los cambios no sobrefragmenten la home
- [ ] ejecutar validacion tecnica y revision visual/manual de home y `/contact/`

### No entra

- [ ] revisar `/work/` o `/experience/`
- [ ] cambiar copy, arquitectura o CTA
- [ ] introducir mas de dos bandas nuevas en home
- [ ] convertir cada seccion en una alternancia sistematica de fondos
- [ ] usar color fuerte donde solo hace falta compacidad

---

## 6. Tareas detalladas

### Bloque A - Auditoria de ritmo actual

- [x] revisar spacing real entre:
  - [x] `Hero -> Selected Work`
  - [x] `Selected Work -> Experience`
  - [x] `Experience -> How I Work`
  - [x] `How I Work -> Capability Clusters`
  - [x] `Capability Clusters -> Footer CTA`
- [x] revisar spacing real en `/contact/` entre:
  - [x] intro de pagina
  - [x] bloque `Contact`
  - [x] footer
- [x] confirmar que el problema principal en home es falta de señal visual entre ciertos bloques y no solo exceso de padding global

### Bloque B - Banda suave para `Selected Work`

- [x] definir una banda visual suave coherente con el sistema actual
- [x] aplicarla a `Selected Work` sin competir con el hero
- [ ] validar que la banda ayude a marcar inicio de un bloque nuevo y no vuelva el home demasiado rayado
- [x] revisar si el padding vertical de esa seccion necesita ajuste leve una vez aplicada la banda

### Bloque C - Banda suave para `Capability Clusters`

- [x] aplicar una banda visual suave a `Capability Clusters`
- [ ] validar que esa seccion deje de sentirse como “mas cards sobre el mismo canvas”
- [x] revisar si la banda funciona mejor con el spacing actual o con un ajuste menor de padding
- [ ] asegurar que la densidad de la seccion siga sintiendose controlada

### Bloque D - Ajuste de `/contact/`

- [x] revisar la combinacion actual de `section-padding` del intro de pagina
- [x] revisar la combinacion actual de `section-padding` dentro del bloque `Contact`
- [x] reducir spacing entre intro y cards sin introducir un nuevo fondo de seccion
- [ ] asegurar que `/contact/` se lea como una sola pagina compacta, no como dos capitulos artificialmente separados
- [ ] validar que el footer no quede demasiado pegado tras el ajuste

### Bloque E - QA y cierre

- [ ] revisar visualmente home con foco en:
  - [ ] entrada a `Selected Work`
  - [ ] transicion hacia `Capability Clusters`
  - [ ] equilibrio del cierre con `Footer CTA`
- [ ] revisar visualmente `/contact/` con foco en:
  - [ ] distancia entre intro y cards
  - [ ] distancia entre cards y footer
- [ ] ejecutar `npm run build`
- [ ] confirmar que los cambios no degradan dark mode ni la paridad visual ya aprobada

---

## 7. Checkpoints interactivos

- [x] Checkpoint 1: receta exacta de la banda suave para `Selected Work`
- [x] Checkpoint 2: receta exacta de la banda suave para `Capability Clusters`
- [x] Checkpoint 3: nivel final de compacidad en `/contact/`
- [ ] Checkpoint 4: revision visual/manual de cierre

---

## 8. Archivos probables a tocar

### Docs

- `docs/plans/pre-phase-5-fixes/spacing-fix.md`
- `docs/governance/decision-log.md`
- `docs/plans/pre-phase-5-fixes/pre-phase-5-work.md`

### Codigo

- `src/styles/global.css`
- `src/components/sections/Projects.astro`
- `src/components/sections/Skills.astro`
- `src/components/sections/FooterCTA.astro`
- `src/pages/contact.astro`
- `src/components/sections/Contact.astro`

### Inputs externos de trabajo

- `temp/spacing/home.png`
- `temp/spacing/contact.png`
- `temp/spacing/og_template.png`

---

## 9. Dependencias y bloqueos

### Dependencias

- [ ] que las capturas de `temp/spacing/` sigan representando bien el problema
- [ ] que la banda suave actual del sistema (`bg-section-wash`) pueda reutilizarse o adaptarse sin romper consistencia
- [ ] que el ajuste de spacing en `/contact/` no choque con la estructura actual de `Contact.astro`

### Bloqueos posibles

- [ ] que una banda nueva en `Selected Work` vuelva la home demasiado fragmentada
- [ ] que una banda nueva en `Capability Clusters` se sienta redundante respecto a `How I Work`
- [ ] que reducir spacing en `/contact/` genere un cierre demasiado comprimido cerca del footer

### Mitigacion

- validar cada ajuste por seccion, no como cambio global ciego
- limitar las bandas nuevas a dos casos concretos
- preferir reduccion de spacing en `/contact/` antes que introducir otra superficie de color

---

## 10. Validaciones

### Documentales

- [ ] verificar alineacion con `docs/README.md`
- [ ] verificar alineacion con `docs/visual/visual-system.md`
- [ ] verificar que no se introdujo una nueva convencion de seccion fuera de contrato sin registrarla

### Tecnicas

- [ ] `npm run build`

### Manuales

- [ ] revisar home contra `temp/spacing/home.png`
- [ ] revisar `/contact/` contra `temp/spacing/contact.png`
- [ ] contrastar el resultado con la referencia de `temp/spacing/og_template.png` sin copiar el template literalmente

---

## 11. Criterio de cierre

El patch solo se considera cerrado si:

- [ ] `Selected Work` se percibe mejor separado del bloque anterior
- [ ] `Capability Clusters` deja de sentirse como cards sueltas sobre el mismo canvas
- [ ] `/contact/` pierde la sensacion de doble bloque demasiado separado
- [ ] la home no queda sobrefragmentada por exceso de cambios de fondo
- [ ] `npm run build` pasa
- [ ] la revision visual/manual confirma mejora real de ritmo vertical

---

## 12. Riesgos y notas

### Riesgos

- meter demasiadas bandas visuales puede volver la home mas fragmentada que intencional
- ajustar spacing en `/contact/` sin revisar el cierre puede pegar demasiado el footer
- resolver todo con padding global seria un arreglo pobre porque el problema no es uniforme

### Notas operativas

- la prioridad es mejorar legibilidad estructural y ritmo, no introducir decoracion nueva
- si durante la ejecucion una banda suave no aporta mejora clara, debe preferirse el ajuste de spacing antes que insistir con color

---

## 13. Registro de cambios del plan

- `2026-03-15`
  - cambio: creacion inicial del patch plan de spacing
  - razon: corregir ritmo vertical y separacion de bloques en home y `/contact/`
