# Decision Log

## 2026-03-11 — Baseline tecnico de Fase 0A

### Estado

- Tipo: `hallazgo confirmado`
- Fase: `0A`

### Decision / registro

- El baseline tecnico de la fase se considera ejecutado y valido
- Un bloqueo inicial de build no se atribuye al codigo del proyecto, sino al sandbox

### Evidencia

- `node_modules` no existia al inicio
- `npm install` fue necesario y completo correctamente
- `npm run build` fallo primero por permisos en `~/.config/astro`
- `npm run build` luego completo correctamente fuera del sandbox

### Impacto

- El proyecto actual compila
- La auditoria puede seguir sobre una base ejecutable
- El fallo inicial debe registrarse como particularidad del entorno, no como bug del template

### Documentos afectados

- `docs/plans/phase-0a.md`
- `docs/governance/template-audit.md`

---

## 2026-03-11 — Baseline heredado de deployment, SEO y motion

### Estado

- Tipo: `hallazgo confirmado`
- Fase: `0A`

### Decision / registro

- El template ya trae una capa activa de deployment, SEO y motion
- No debe tratarse `Fase 6` o `Fase 7` como si partieran desde cero

### Evidencia

- `astro.config.mjs` ya define `site`, sitemap, headers e i18n
- `netlify.toml` ya define pipeline de deployment
- `Layout.astro` ya monta canonical, OG, Twitter, `hreflang` y JSON-LD
- `Layout.astro` carga AOS y GSAP por CDN
- `src/scripts/animations.js` contiene motion distribuido

### Impacto

- `0B` debe neutralizar o acotar superficies heredadas que hoy ya condicionan el sitio
- las fases posteriores deben construirse sobre una base ya auditada y no sobre supuestos vacios

### Documentos afectados

- `docs/governance/template-audit.md`
- `docs/plans/phase-0a.md`

### Pendiente relacionado

- continuar con auditoria de i18n
- continuar con auditoria de superficies incompletas

---

## 2026-03-11 — Direccion provisional para contradiccion de i18n

### Estado

- Tipo: `decision provisional`
- Fase: `0A`

### Decision / registro

- La contradiccion entre i18n activo y plan monoidioma no se resuelve en `0A`
- La direccion recomendada para `0B` sera rollback temporal a monoidioma canonico en `/`

### Razon

- El sistema documental actual exige sitio explicitamente monoidioma hasta `Fase 5`
- El template hoy tiene i18n activo en config, rutas, UI y metadata
- Para alinear docs y codigo sin ambiguedad, la opcion mas coherente es rollback fuerte y no una latencia parcial

### Alcance previsto para `0B`

- retirar o desactivar `LanguageSwitcher`
- retirar configuracion i18n activa
- retirar promocion de rutas `en/` y `de/`
- dejar `/` como ruta canonica unica
- retirar `hreflang` y alternates multilenguaje temporales

### Documentos afectados

- `docs/plans/phase-0a.md`
- `docs/governance/template-audit.md`
- `docs/plans/roadmap.md`

---

## 2026-03-11 — Clasificacion provisional de `Projects`

### Estado

- Tipo: `decision provisional`
- Fase: `0A`

### Decision / registro

- `Projects` queda clasificada como `mantener apagada`

### Razon

- la seccion depende hoy de rutas inexistentes
- la seccion depende hoy de assets inexistentes
- ya esta comentada en las paginas principales, lo que confirma que no forma parte de la base activa
- conviene dejar que `Fase 2` decida su destino final sin cargar deuda tecnica prematura

### Implicacion para fases siguientes

- `0B` no deberia reactivar `Projects`
- `Fase 2` debera decidir si la superficie:
  - se mantiene fuera
  - se redefine
  - reaparece como `Case Studies`

### Documentos afectados

- `docs/plans/phase-0a.md`
- `docs/governance/template-audit.md`

---

## 2026-03-11 — Perimetro de limpieza para `0B`

### Estado

- Tipo: `decision provisional`
- Fase: `0A`

### Decision / registro

- `0B` trabajara con perimetro amplio de saneamiento
- el alcance incluye:
  - sitio activo
  - metadata estructural
  - repo raiz como activo publico

### Razon

- los residuos heredados ya no viven solo en runtime o en `me.ts`
- la identidad del template condiciona dominio, metadata, CTAs, datos estructurados y presentacion publica del repo
- dejar el repo raiz fuera del saneamiento mantendria una contradiccion visible entre sistema y activo publicado

### Implicacion para fases siguientes

- `0B` debe cerrar saneamiento base antes de `Fase 1`
- `Fase 1` no deberia construir estrategia sobre branding, dominio o i18n heredados

### Documentos afectados

- `docs/plans/phase-0a.md`
- `docs/governance/template-audit.md`

---

## 2026-03-11 — Verdad tecnica temporal de deployment para `0B`

### Estado

- Tipo: `decision provisional`
- Fase: `0B`

### Decision / registro

- la publicacion temporal del sitio se tratara como `GitHub Pages` en modo `user site`
- la URL temporal canonica sera `https://paw-paw.github.io/`
- no se definira `base`
- `Netlify` deja de ser la verdad tecnica activa del proyecto

### Razon

- el repo remoto actual ya coincide con el patron `paw-paw.github.io`
- el modelo `user site` reduce complejidad tecnica frente a un `project site`
- esta decision permite unificar `site`, sitemap, canonicals y ownership tecnico sin esperar al dominio final

### Implicacion para `0B`

- crear primera version de `docs/delivery/deployment.md`
- actualizar config y metadata base al dominio temporal acordado
- revisar si `netlify.toml` se elimina o queda solo como residuo temporal

### Documentos afectados

- `docs/delivery/deployment.md`
- `docs/plans/phase-0b.md`

---

## 2026-03-11 — Saneamiento ejecutado de `0B`

### Estado

- Tipo: `decision ejecutada`
- Fase: `0B`

### Decision / registro

- `0B` deja la base publicada en modo monoidioma fuerte
- `GitHub Pages` queda como verdad tecnica activa
- `netlify.toml` se elimina
- las legal pages heredadas se retiran
- la identidad publica heredada se reemplaza por placeholders neutros

### Evidencia

---

## 2026-03-12 — Direccion visual base de Fase 3

### Estado

- Tipo: `decision ejecutada`
- Fase: `3`

### Decision / registro

- la direccion visual del portfolio pasa a `tech-modern` limpia y propia
- la paleta base aprobada es `graphite + mineral teal + bone`
- dark mode se mantiene con paridad real, sin dominar la identidad
- el branding visible base se resuelve con monograma `P` y wordmark `Pawpaw`
- el hero usa `pawpaw-portrait.png` como asset aprobado de esta fase
- el favicon visible deja de depender del icono heredado del template y pasa a una version tipografica provisional

### Razon

- Fase 3 debe romper la dependencia visual del template antes de entrar a contenido maestro
- la estrategia pide una identidad sobria, confiable y orientada a delivery, no una estetica gaming-neon ni un SaaS template generico
- el asset aprobado del hero aporta personalidad suficiente sin exigir aun una bateria completa de branding final

### Documentos afectados

- `docs/visual/visual-system.md`
- `docs/visual/asset-plan.md`
- `docs/plans/phase-3.md`

---

## 2026-03-14 — Ajuste recruiter-facing pre-Fase 5

### Estado

- Tipo: `decision ejecutada`
- Fase: `pre-phase-5`

### Decision / registro

- el header pasa a priorizar identidad personal visible como `Paulo Cesar Tuya`
- `Contact` deja de vivir como bloque de home y pasa a `/contact`
- `Contact` en navbar se vuelve boton hacia `/contact`
- el hero mantiene su copy, pero la CTA secundaria pasa a `See experience`
- la home cambia su flujo para mostrar evidencia y trayectoria antes de `How I Work`
- la descripcion de `Selected Work` se vuelve mas recruiter-readable y outcome-oriented
- el asset del hero debe pasar de `pawpaw-portrait.png` a `temp/newpicture.png` al ejecutar el trabajo

### Razon

- el feedback experto prioriza una lectura mas clara como portfolio profesional personal
- la conversion se simplifica mejor con una pagina dedicada de contacto
- evidencia y trayectoria deben aparecer antes que metodologia en la home

### Documentos afectados

- `docs/architecture/site-architecture.md`
- `docs/content/content-system.md`
- `docs/content/content-master.md`
- `docs/plans/pre-phase-5-work.md`

---

## 2026-03-14 — Reversion del lockup de marca en Baumans y minusculas

### Estado

- Tipo: `decision ejecutada`
- Fase: `pre-phase-5`

### Decision / registro

- se revierte el ajuste reciente del lockup de marca en navbar y footer
- el lockup vuelve a monograma textual `P`
- el wordmark deja de usar `Baumans` y deja de renderizarse en minusculas
- el favicon deja de reemplazar al monograma dentro del lockup
- el favicon del sitio se mantiene como asset propio, pero fuera del lockup visible

### Razon

- el tratamiento reciente no funciono bien visualmente en el wordmark
- conviene volver al lockup tipografico simple previo sin cambiar el resto del sistema

### Documentos afectados

- `docs/visual/visual-system.md`
- `docs/governance/decision-log.md`
- `src/layouts/Layout.astro`
- `src/components/layout/Navbar.astro`
- `src/components/sections/Footer.astro`

---

## 2026-03-14 — Logos de empresa como parte estructural de `experience_item`

### Estado

- Tipo: `decision ejecutada`
- Fase: `pre-phase-5`

### Decision / registro

- los logos de empresa pasan a formar parte estructural de `experience_item` cuando exista asset aprobado
- la preview de experiencia en home tambien puede usar una version reducida del mismo patron
- las variantes `light` / `dark` se usan segun tema activo y `allmode` funciona como fallback
- los assets deben promoverse desde `temp/logos/` a `src/assets/experience-logos/`

### Razon

- mejora reconocimiento de trayectoria y escaneabilidad recruiter-facing
- existe cobertura real de assets para las 5 experiencias activas del sitio
- el patron deseado ya fue validado visualmente a partir de `temp/left_image.jpg`

### Documentos afectados

- `docs/content/content-system.md`
- `docs/visual/asset-plan.md`
- `docs/governance/decision-log.md`

---

## 2026-03-14 — Headers de proyecto como parte estructural de `Selected Work`

### Estado

- Tipo: `decision ejecutada`
- Fase: `pre-phase-5`

### Decision / registro

- las imagenes/header de proyecto pasan a formar parte estructural de `selected_work_case_study` cuando exista asset aprobado
- la preview de `Selected Work` en home tambien puede usar una version reducida del mismo patron
- el tratamiento visual usa overlay/tinte sutil, uniforme y reversible desde CSS
- los assets deben promoverse desde `temp/headers/` a `src/assets/work-headers/`
- los headers adicionales no activos (`lpg`, `pcfsc`) quedan fuera del runtime por ahora

### Razon

- mejora reconocimiento de casos y lectura recruiter-facing en `Selected Work`
- existe cobertura real de assets para los 6 proyectos activos
- el patron deseado ya fue validado visualmente a partir de `temp/header_image.jpg`
- el overlay debe seguir siendo reversible para no forzar una decision visual irreversible sobre los assets

### Documentos afectados

- `docs/content/content-system.md`
- `docs/visual/asset-plan.md`
- `docs/governance/decision-log.md`
- `docs/plans/work-headers-patch.md`
- `src/data/selected-work.ts`
- `src/pages/work.astro`
- `src/components/sections/Projects.astro`
- `docs/plans/exp-logos-patch.md`
- `src/data/experience.ts`
- `src/pages/experience.astro`
- `src/components/sections/Timeline.astro`

---

## 2026-03-14 — Estructura compacta de metadata en cards de experiencia

### Estado

- Tipo: `decision ejecutada`
- Fase: `pre-phase-5`

### Decision / registro

- las cards de experiencia abandonan la columna izquierda alta guiada por el badge
- desktop pasa a una estructura de 2 columnas:
  - izquierda compacta con logo, periodo, location y work mode
  - derecha con title, org, summary, highlights y metrics
- mobile pasa a una fila superior con logo a la izquierda y metadata a la derecha, seguida del cuerpo full-width
- `location` y `work mode` pasan a tratarse como metadata separada dentro de `experience_item`

### Razon

- el prototipo compacto elimina espacio vacio y da mejor balance visual que el badge alto
- el logo vuelve a actuar como identificador, no como columna dominante
- la metadata queda mejor agrupada y mas scanneable tanto en desktop como en mobile

### Documentos afectados

- `docs/content/content-system.md`
- `docs/governance/decision-log.md`
- `src/data/experience.ts`
- `src/pages/experience.astro`
- `src/components/sections/Timeline.astro`

- ya no existen rutas activas `/en/` ni `/de/`
- ya no existe `LanguageSwitcher`
- `astro.config.mjs` y `public/robots.txt` apuntan a `https://paw-paw.github.io/`
- el sitio generado vuelve a producir una sola ruta estatica
- `README.md` raiz ya no vende el template original

### Impacto

- `Fase 1` ya no arranca sobre dominio, i18n o identidad heredados
- el repo publico deja de presentarse como el template original
- las fases posteriores pueden definir estrategia, arquitectura y contenido sobre una base neutra

### Documentos afectados

- `docs/delivery/deployment.md`
- `docs/governance/template-audit.md`
- `docs/plans/phase-0b.md`

---

## 2026-03-11 — Posposiciones deliberadas tras `0B`

### Estado

- Tipo: `decision provisional`
- Fase: `0B`

### Decision / registro

- la capa actual de motion base permanece temporalmente
- ciertos assets residuales del template se conservan por ahora como material no activo

### Razon

- no bloquean el cierre de `0B`
- retirarlos o rediseñarlos ahora ampliaria la fase sin aportar valor equivalente

### Alcance pospuesto

---

## 2026-03-11 — Tesis estrategica de `Fase 1`

### Estado

- Tipo: `decision ejecutada`
- Fase: `1`

### Decision / registro

- el portfolio sera hibrido, orientado a oportunidades profesionales de alto valor
- el sesgo principal sera empleo remoto y roles de operations / program-project / partnerships
- la audiencia primaria sera hiring managers, founders y leaders de operations o partnerships en gaming, esports y sectores adyacentes
- la audiencia secundaria seguira incluyendo recruiters generalistas y managers no especializados
- la narrativa principal sera operador de delivery / project-program management con puente controlado hacia partnerships y business development
- el mensaje prioritario sera que el perfil convierte objetivos ambiguos en programas ejecutables y confiables

### Razon

- el material de `truth` sostiene con mas fuerza una narrativa de delivery, ownership y coordinacion cross-functional
- la amplitud del perfil aporta valor cuando refuerza ejecucion y no cuando fragmenta el posicionamiento
- el sitio necesita seguir siendo interpretable para audiencias no especializadas sin diluir la ventaja competitiva principal

### Documentos afectados

- `docs/strategy/portfolio-strategy.md`
- `docs/content/source-data-map.md`
- `docs/plans/phase-1.md`

---

## 2026-03-11 — CTA, idioma maestro y tono inicial del portfolio

### Estado

- Tipo: `decision ejecutada`
- Fase: `1`

### Decision / registro

- el idioma maestro del portfolio sera ingles
- el CTA principal sera `View selected work`
- el CTA secundario sera `Start a conversation`
- el tono profesional sera claro, operatorio, confiable y sobrio
- los atributos iniciales de marca seran `reliable`, `structured`, `cross-functional`, `evidence-led` y `calm-under-pressure`

### Razon

- el ingles alinea mejor con la audiencia primaria y con la base actual de `truth`
- el CTA principal debe empujar primero credibilidad y evidencia antes de contacto
- el CTA secundario debe abrir conversacion sin encerrar el sitio en una sola modalidad de conversion
- el tono debe reforzar execution y confianza, no hype o autopromocion

### Documentos afectados

- `docs/strategy/portfolio-strategy.md`
- `docs/plans/phase-1.md`

---

## 2026-03-11 — Reglas estrategicas de uso de `temp/truth/`

### Estado

- Tipo: `decision ejecutada`
- Fase: `1`

### Decision / registro

- `temp/truth/` se usara en `Fase 1` para validar estrategia, detectar evidencia util y definir exclusiones
- `experience/` y `projects/` entran como pilares equivalentes de evidencia
- `education/` entra como soporte de credibilidad y contexto, no como eje narrativo
- `skills/` entra como soporte de capacidades, no como lista aislada sin evidencia
- `personal.yaml` entra solo de forma parcial y bajo politica de publicabilidad restringida
- la fidelidad a hechos sera alta, pero la seleccion y el framing seran curados

### Razon

- el portfolio necesita una narrativa profesional clara y no un volcado del archivo personal
- `truth` contiene evidencia fuerte, pero tambien estructura y metadata pensadas para otros usos
- la estrategia debe decidir que entra y que no antes de pasar a arquitectura y sistema de contenido

### Implicacion para fases siguientes

- `Fase 2` definira el mapping por seccion y entidades internas del sitio
- `Fase 4` podra usar evidencia seleccionada sin copiar el schema original

### Documentos afectados

- `docs/content/source-data-map.md`
- `docs/strategy/portfolio-strategy.md`
- `docs/plans/phase-1.md`

---

## 2026-03-12 — Arquitectura base de `Fase 2`

### Estado

- Tipo: `decision ejecutada`
- Fase: `2`

### Decision / registro

- la arquitectura base del sitio sera multipagina
- las superficies principales seran `/`, `/work` y `/experience`
- la home funcionara como `overview estrategico + conversion`
- `contact` se mantiene como ancla en `/`
- `Values` se reemplaza por `How I Work`
- `Timeline` se reemplaza por `Experience`
- `Projects` se reemplaza conceptualmente por `Selected Work / Case Studies`
- `Skills` permanece como soporte breve en home

### Razon

- la arquitectura one-page del template ya no representa la tesis del portfolio
- la CTA principal exige una superficie real para work/case studies
- `experience` y `projects` necesitan convivir como pilares equivalentes sin competir en la misma capa

### Documentos afectados

- `docs/architecture/site-architecture.md`
- `docs/content/content-system.md`
- `docs/content/source-data-map.md`
- `docs/plans/phase-2.md`

---

## 2026-03-12 — Politica publica de contacto alineada al portfolio

### Estado

- Tipo: `decision ejecutada`
- Fase: `2`

### Decision / registro

- el numero de telefono deja de ser visible en el sitio
- los canales publicos visibles pasan a ser:
  - email
  - LinkedIn
  - Instagram
- `FooterCTA` refuerza la CTA secundaria y apunta a `#contact`

### Razon

- la politica de visibilidad debe alinearse con el sistema documental y con un contacto publico intencional
- telefono agrega exposicion innecesaria para el uso actual del portfolio
- Instagram se acepta como canal publico complementario al perfil profesional

### Documentos afectados

- `docs/content/source-data-map.md`
- `docs/content/content-system.md`
- `docs/architecture/site-architecture.md`
- `docs/plans/phase-2.md`

---

## 2026-03-12 — Contenido maestro y capa normalizada de Fase 4

### Estado

- Tipo: `decision ejecutada`
- Fase: `4`

### Decision / registro

- el nombre profesional visible del sitio pasa a ser `Paulo Tuya`
- la marca visual `Pawpaw` se mantiene como capa de branding, no como identidad textual principal
- el hero aprobado equilibra `delivery + partnerships` con esta formula:
  - `I turn partner and project goals into clear execution.`
  - `I work across gaming, esports, and remote programs, connecting partner needs, scope, owners, timelines, and execution without losing operational control.`
- `Selected Work` se implementa con 6 casos curados
- `Experience` se implementa con 5 hitos curados
- `Skills` se implementa con 3 clusters de soporte narrativo
- la capa normalizada propia del repo nace en `src/data/`
- GitHub deja de ser una superficie visible del sitio activo

### Razon

- Fase 4 debia cerrar la identidad publica y reemplazar placeholders estructurales por contenido aprobado
- el contenido final debia alinearse con la estrategia contractual sin convertir el sitio en CV exhaustivo
- la capa `src/data/` permite separar runtime aprobado del schema bruto de `temp/truth/`
- la identidad publica visible debia concentrarse en canales y señales realmente alineados con el portfolio

### Documentos afectados

- `docs/content/content-master.md`
- `docs/content/source-data-map.md`
- `docs/plans/phase-4.md`

### Implementacion afectada

- `src/i18n/en.json`
- `src/utils/me.ts`
- `src/data/selected-work.ts`
- `src/data/experience.ts`
- `src/data/skills.ts`
- `src/components/sections/Projects.astro`
- `src/components/sections/Timeline.astro`
- `src/components/sections/Skills.astro`
- `src/pages/work.astro`
- `src/pages/experience.astro`

---

## 2026-03-15 — Recalibracion sistémica de dark mode

### Estado

- Tipo: `decision ejecutada`
- Fase: `pre-phase-5`

### Decision / registro

- dark mode deja de depender principalmente de una mezcla ad hoc entre variables CSS y colores Tailwind estaticos
- la direccion aprobada para este patch es una unificacion mas profunda basada en recetas semanticas de color
- las superficies, nested panels y badges en dark mode deben sentirse embebidos y sobrios, no como chips claros pegados sobre un canvas oscuro
- no se reabre la paleta contractual; se recalibra su aplicacion real

### Razon

- las screenshots de `temp/darkmode_issues/` confirmaron que el problema no era un solo componente, sino una inconsistencia sistemica
- el uso simultaneo de variables CSS tematicas y utilidades Tailwind estaticas estaba produciendo:
  - nested cards demasiado claras
  - badges demasiado brillantes
  - subtitulos y metadata con jerarquia debil
  - overlays y washes que seguian cargando logica de light mode

### Implementacion afectada

- `src/styles/global.css`
- `src/layouts/Layout.astro`
- `src/components/layout/Navbar.astro`
- `src/components/ui/Buttons.astro`
- `src/components/ui/ThemeToggle.astro`
- `src/components/sections/Hero.astro`
- `src/components/sections/Projects.astro`
- `src/components/sections/Timeline.astro`
- `src/components/sections/Skills.astro`
- `src/components/sections/FooterCTA.astro`
- `src/components/sections/Footer.astro`
- `src/pages/work.astro`
- `src/pages/experience.astro`

### Documentos afectados

- `docs/plans/darkmode-fix.md`
