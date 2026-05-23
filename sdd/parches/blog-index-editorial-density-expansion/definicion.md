# Definicion: blog-index-editorial-density-expansion

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

- Change id: `blog-index-editorial-density-expansion`
- Program id: `none`
- Patch kind: `spec`
- Lifecycle: `spec-anchored`
- Estado: `draft`
- Fuente: captura anotada y decisiones explicitas del usuario sobre `/blog`
- Ultima actualizacion: `2026-05-18`
- Owner: `usuario`

---

## 1. Objetivo

Refinar la densidad editorial del primer viewport de `/blog` para que la composicion se sienta mas llena, intencional y verticalmente equilibrada sin abandonar la tesis profesional del portfolio.  
El cambio debe ampliar la presencia de `Editorial Background`, recentrar los elementos flotantes del intro y convertir el featured en una pieza mas explicitamente editorial mediante fecha visible y taxonomia secundaria.  
Al cerrar, el `blog index` debe conservar su funcion dentro del portfolio, pero con una portada mas expresiva y una jerarquia editorial deliberadamente mas rica.

---

## 2. No objetivos

- [ ] Redisenar de nuevo la arquitectura completa del `blog index`.
- [ ] Convertir `Editorial Background` en sustituto de `/experience`.
- [ ] Cambiar taxonomy, routing, i18n, SEO estructural o schema de `blog_post`.
- [ ] Alterar la presentacion resumida de las cards regulares salvo que una fase posterior lo requiera.
- [ ] Reescribir copy narrativo del intro mas alla de lo necesario para reconciliar la nueva decision editorial.

---

## 3. Fuentes de verdad aplicables

- `docs/README.md`
- `AGENTS.md`
- documentos contractuales aplicables:
  - `docs/content/content-system.md`
  - `docs/visual/visual-system.md`
- documentos auxiliares aplicables:
  - `docs/content/content-master.md`
  - `docs/visual/asset-plan.md`
- fuentes externas o handovers:
  - `sdd/parches/blog-index-editorial-density-expansion/handover.md`

---

## 4. Alcance

### Si entra

- [ ] Recentrar verticalmente los elementos flotantes del primer viewport.
- [ ] Reorganizar `Editorial Background` en dos filas de logos.
- [ ] Mantener logos como evidencia editorial, aun aceptando mayor protagonismo visual dentro del intro.
- [ ] Mostrar la fecha del featured inmediatamente despues de la imagen destacada.
- [ ] Mostrar `category`, `angle` y `domain` en el featured, con jerarquia cromatica diferenciada y tags debajo del titulo.
- [ ] Mantener paridad entre `en` y `es`.
- [ ] Reconciliar las fuentes vivas que hoy describen una presentacion mas compacta del `blog index`.

### Fuera de alcance

- [ ] Cambiar las cards regulares del `blog index`.
- [ ] Cambiar detail pages o category pages.
- [ ] Incorporar nombres de organizaciones o micro-cards al bloque `Editorial Background`.
- [ ] Introducir nuevas categorias, angles o domains.

---

## 5. Superficies afectadas

### Docs

- `docs/content/content-system.md`
- `docs/content/content-master.md`

### Codigo o contenido

- `src/styles/global.css`
- `src/components/blog/EditorialBackgroundStrip.astro`
- `src/components/blog/BlogFeaturedPanel.astro`
- `src/pages/en/blog/index.astro`
- `src/pages/es/blog/index.astro`

### Configuracion o validacion

- `package.json`
- revision visual/manual de `/en/blog/` y `/es/blog/`

---

## 6. Decisiones conocidas

- decision: `Editorial Background` pasa a dos filas de logos.
  - razon: el usuario prefiere una portada mas densa y acepta que el bloque gane peso frente al copy principal.
  - documentos o areas afectadas: `content-master`, UI del intro.
- decision: el featured mostrara `category`, `angle` y `domain`.
  - razon: el usuario eligio una lectura mas editorialmente explicita que la presentacion compacta vigente.
  - documentos o areas afectadas: `content-system`, `content-master`, featured panel.
- decision: la fecha del featured se mostrara inmediatamente despues de la imagen.
  - razon: refuerza el caracter de pieza editorial sin convertir el panel en una ficha larga.
  - documentos o areas afectadas: `content-master`, featured panel.
- decision: este cambio altera la decision previa que dejaba `angle` y `domain` fuera del `blog index` resumido.
  - razon: el usuario prefirio mayor densidad de señal visible para la portada.
  - documentos o areas afectadas: `content-system`, `content-master`, `decision.log`.

---

## 7. Assumptions

- La taxonomia secundaria puede mostrarse en el featured sin exigir cambios al schema, porque `angle` y `domain` ya existen como claves estables del modelo.
- La mayor densidad del primer viewport puede resolverse dentro de la composicion actual sin abrir una nueva arquitectura de pagina.
- La presentacion mas rica aplicara al featured; las cards regulares conservan su lectura mas compacta salvo decision posterior.

---

## 8. Decisiones abiertas

- No hay decisiones abiertas pendientes para pasar a `sdd-plan`.

---

## 9. Riesgos

- riesgo: la densidad adicional puede volver menos clara la jerarquia del featured.
  - impacto: el teaser podria leerse como ficha de metadata antes que como pieza recomendada.
  - mitigacion: usar color y peso secundarios mas contenidos para `angle` y `domain`.
- riesgo: dos filas de logos pueden acercar demasiado `Editorial Background` a una mini-seccion de trayectoria.
  - impacto: el intro podria competir mas de lo deseado con `/experience`.
  - mitigacion: mantener logos + periodos solamente, sin nombres expandidos ni narrativa adicional.
- riesgo: la nueva decision contradice docs vigentes si no se sincroniza primero.
  - impacto: drift contractual.
  - mitigacion: actualizar docs antes de tocar UI.

---

## 10. Criterio de cierre

La definicion queda lista para `sdd-plan` solo si:

- [x] objetivo y no objetivos estan claros
- [x] las fuentes de verdad aplicables estan listadas
- [x] el alcance y fuera de alcance no se contradicen
- [x] assumptions criticas resueltas, aceptadas o escaladas
- [x] las decisiones abiertas estan visibles
- [x] los riesgos principales estan identificados

---

## 11. Registro de cambios

- Fecha: `2026-05-18`
  - cambio: creacion inicial de la definicion del patch.
  - razon: formalizar la expansion de densidad editorial del `blog index`.
