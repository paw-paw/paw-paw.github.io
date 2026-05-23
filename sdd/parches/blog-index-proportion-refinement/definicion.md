# Definicion: blog-index-proportion-refinement

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

- Change id: `blog-index-proportion-refinement`
- Program id: `none`
- Patch kind: `spec`
- Lifecycle: `spec-first`
- Estado: `draft`
- Fuente: captura anotada y brief del usuario sobre `/blog`
- Ultima actualizacion: `2026-05-18`
- Owner: `usuario`

---

## 1. Objetivo

Refinar las proporciones del `blog index` ya implementado para que el primer viewport se lea como una portada editorial cerrada, el bloque `Editorial Background` tenga mejor presencia visual y el featured pueda representar los excerpts con una densidad mas acorde al contenido real.  
El cambio tambien debe decidir si la longitud de `excerpt` necesita una guia editorial explicita en los contratos y skills del blog para evitar futuras desalineaciones entre autoría e interfaz.  
Al cerrar, `/blog` debe conservar su narrativa vigente y ganar una relacion mas coherente entre composicion, evidencia visual y resumen editorial.

---

## 2. No objetivos

- [ ] Redisenar de nuevo la arquitectura del `blog index`.
- [ ] Cambiar la narrativa aprobada de `/blog`.
- [ ] Redisenar `blog post detail` o `category pages`.
- [ ] Cambiar taxonomy, routing, i18n o SEO estructural.
- [ ] Reescribir masivamente excerpts existentes salvo decision explicita posterior.
- [ ] Convertir este refinamiento en una revision global del sistema visual del sitio.

---

## 3. Fuentes de verdad aplicables

- `docs/README.md`
- `AGENTS.md`
- documentos contractuales aplicables:
  - `docs/architecture/site-architecture.md`
  - `docs/content/content-system.md`
  - `docs/visual/visual-system.md`
  - `docs/architecture/i18n-spec.md`
- documentos auxiliares aplicables:
  - `docs/content/content-master.md`
  - `docs/visual/asset-plan.md`
- skills editoriales aplicables:
  - `.codex/skills/blog-new/SKILL.md`
  - `.codex/skills/blog-edit/SKILL.md`
  - `.codex/skills/blog-preflight/SKILL.md`
- fuentes externas o handovers:
  - captura anotada aportada por el usuario
  - `sdd/parches/blog-index-proportion-refinement/handover.md`

---

## 4. Alcance

### Si entra

- [ ] Refinar la altura/proporcion de la portada superior del `blog index`.
- [ ] Aumentar la escala visual de los logos de `Editorial Background`.
- [ ] Expandir la representacion visible del excerpt en el featured.
- [ ] Resolver si debe existir una guia editorial explicita de longitud para `excerpt`.
- [ ] Si esa guia se aprueba, propagarla a los documentos y skills editoriales correspondientes.
- [ ] Mantener paridad entre `en` y `es`.

### Fuera de alcance

- [ ] Ajustes de copy narrativo de `/blog` que no sean necesarios para alinear excerpt policy.
- [ ] Cambios al schema de `blog_post` salvo que una decision posterior lo requiera.
- [ ] Cambios a assets nuevos o identidad visual fuera del bloque ya existente.

---

## 5. Superficies afectadas

### Docs

- `docs/content/content-system.md`
- posiblemente `docs/content/content-master.md`
- posiblemente `docs/visual/visual-system.md`

### Codigo o contenido

- `src/styles/global.css`
- `src/components/blog/BlogIntroPanel.astro`
- `src/components/blog/EditorialBackgroundStrip.astro`
- `src/components/blog/BlogFeaturedPanel.astro`

### Skills

- `.codex/skills/blog-new/SKILL.md`
- `.codex/skills/blog-edit/SKILL.md`
- `.codex/skills/blog-preflight/SKILL.md`

### Configuracion o validacion

- validaciones reales del repo a concretar en `sdd-plan`
- revision visual/manual de `/en/blog/` y `/es/blog/`

---

## 6. Decisiones conocidas

- decision: el objetivo es expandir la UI, no recortar por defecto los excerpts actuales.
  - razon: hoy no existe una politica editorial cuantitativa que declare excesivos los excerpts vigentes.
  - documentos o areas afectadas: `blog index`, posible politica de excerpt
- decision: la captura de referencia `1920x1080` al `100%` sirve como evidencia del problema visual actual.
  - razon: muestra la fuga de `Latest Writing` dentro del primer viewport y la subescala relativa de logos.
  - documentos o areas afectadas: futura validacion visual del `blog index`
- decision: el featured debe expandirse a `6` lineas visibles de excerpt.
  - razon: el sistema editorial vigente ya produce excerpts de aproximadamente `23–29` palabras y la UI debe representarlos con mas fidelidad.
  - documentos o areas afectadas: featured del `blog index`, lineamientos de excerpt
- decision: se debe crear una guia editorial cuantitativa suave para `excerpt`.
  - razon: hoy solo existe la nocion cualitativa de `breve`, lo que permite que autoría e interfaz vuelvan a divergir.
  - documentos o areas afectadas: `docs/content/content-system.md`, skills editoriales del blog
- decision: las cards regulares tambien deben alinearse con la nueva politica de excerpt.
  - razon: el campo `excerpt` pertenece al modelo general de `blog_post`, no solo al featured.
  - documentos o areas afectadas: cards regulares del `blog index`, futuros lineamientos editoriales

---

## 7. Assumptions

- Los excerpts actuales publicados son una muestra valida del tipo de resumen que el sistema editorial viene produciendo.
- El problema de truncamiento visible proviene principalmente del clamp actual de la UI, no de una longitud editorial ya declarada como incorrecta.
- La mejora buscada puede resolverse sin cambiar la narrativa general de `/blog`.

---

## 8. Decisiones abiertas

- No hay decisiones abiertas pendientes para pasar a `sdd-plan`.

---

## 9. Riesgos

- riesgo: tratar el viewport `1920x1080` como unico objetivo y degradar otros tamanos.
  - impacto: mejora puntual con regresiones responsive.
  - mitigacion: usarlo como referencia de cierre desktop, pero validar varios breakpoints.
- riesgo: ampliar demasiado la portada y perder eficiencia de escaneo.
  - impacto: el blog index podria sentirse pesado.
  - mitigacion: ajustar proporcion con revision visual en desktop, tablet y mobile.
- riesgo: documentar una politica de `excerpt` demasiado pronto o demasiado estrecha.
  - impacto: los skills de autoría podrian empezar a forzar resúmenes artificialmente cortos o largos.
  - mitigacion: decidir primero si la norma debe ser cuantitativa y, si se aprueba, anclarla a la interfaz real.

---

## 10. Criterio de cierre

La definicion queda lista para `sdd-plan` solo si:

- [x] objetivo y no objetivos estan claros
- [x] las fuentes de verdad aplicables estan listadas
- [x] el alcance y fuera de alcance no se contradicen
- [x] assumptions criticas resueltas, aceptadas o escaladas
- [x] las decisiones abiertas estan resueltas o aceptadas para pasar a planificacion
- [x] los riesgos principales estan identificados

---

## 11. Registro de cambios

- Fecha: `2026-05-18`
  - cambio: creacion inicial de la definicion del patch.
  - razon: formalizar el refinamiento proporcional del `blog index`.
