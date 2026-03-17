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

- `docs/plans/sprint-1/phase-0a.md`
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
- `docs/plans/sprint-1/phase-0a.md`

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

- `docs/plans/sprint-1/phase-0a.md`
- `docs/governance/template-audit.md`
- `docs/plans/sprint-1/roadmap.md`

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

- `docs/plans/sprint-1/phase-0a.md`
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

- `docs/plans/sprint-1/phase-0a.md`
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
- `docs/plans/sprint-1/phase-0b.md`

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

## 2026-03-15 — Mecanismo real de deploy en GitHub Pages

### Estado

- Tipo: `decision ejecutada`
- Fase: `6`

### Decision / registro

- el deploy real del sitio en `GitHub Pages` queda resuelto mediante `GitHub Pages Actions`
- el workflow vigente debe vivir en `.github/workflows/deploy.yml`
- la rama `main` se considera la rama de publicacion para el workflow

### Razon

- el sitio Astro genera salida estatica en `dist/`
- el repo no debe depender de publicar artefactos buildados por branch ni de commitear `dist/`
- el mecanismo por `Actions` es coherente con la verdad tecnica aprobada en `docs/delivery/deployment.md`

### Documentos afectados

- `docs/delivery/deployment.md`
- `docs/delivery/release-checklist.md`

---

## 2026-03-15 — Inicio formal de la remediacion de seguridad post-Fase 6

### Estado

- Tipo: `decision ejecutada`
- Fase: `6.5`

### Decision / registro

- se aprueba y ejecuta `SR-0` del roadmap auxiliar de remediacion de seguridad
- la remediacion queda formalmente ubicada entre `Fase 6` y `Fase 7`

---

## 2026-03-16 — Segunda tentativa de Fase 7 con motion conservadora

### Estado

- Tipo: `decision ejecutada`
- Fase: `7`

### Decision / registro

- la segunda tentativa de `Fase 7` queda activada tras el backtrack completo del intento anterior
- `AOS` se mantiene como motor principal de reveals simples
- `GSAP` queda acotado a microinteraccion y refuerzos puntuales
- la regla de visibilidad no vuelve al modelo totalmente conservador:
  - ciertos bloques pueden iniciar ocultos
  - pero solo con fallback explicito por eventos de viewport y refresh

### Razon

- el intento anterior demostro que una capa nueva de reveals dependientes de scroll podia dejar huecos persistentes en capturas y estados de refresh
- la ruta mas segura para esta fase es pulir el sistema heredado, no reemplazarlo otra vez
- se preserva margen para ciertos reveals visibles, pero con restricciones tecnicas mas claras

### Documentos afectados

- `docs/plans/sprint-1/phase-7.md`
- `docs/visual/interaction-spec.md`
- el baseline tecnico de seguridad queda confirmado antes de cualquier upgrade

### Evidencia

- `npm audit` confirma:
  - `9 high`
  - `3 moderate`
  - `2 low`
  - `14` paquetes afectados
- `npm run build` completa correctamente
- el origen confirmado del riesgo hoy se concentra en:
  - directos:
    - `astro`
    - `preact`
    - `astro-compress`
  - transitivos:
    - `devalue`
    - `h3`
    - `rollup`
    - `vite`
    - `glob`
    - `minimatch`
    - `js-yaml`
    - `mdast-util-to-hast`
    - `svgo`

### Impacto

- `SR-1` queda desbloqueada
- la remediacion deja de ser una idea general y pasa a un frente tecnico activo
- `Fase 7` no deberia ejecutarse sobre el stack actual sin resolver antes este frente o aceptarlo explicitamente

### Documentos afectados

- `docs/plans/sprint-1/security-remediation-roadmap.md`

---

## 2026-03-15 — Cierre de SR-1 sobre la ruta segura de Astro 5

### Estado

- Tipo: `decision ejecutada`
- Fase: `6.5 / SR-1`

### Decision / registro

- `SR-1` queda cerrada sin saltar a `Astro 6`
- el intento de salto mayor se descarta en esta subfase por conflicto formal de peer dependency con `@astrojs/tailwind`
- el upgrade directo efectivo se cierra sobre:
  - `astro@5.18.1`
  - `@astrojs/preact@4.1.3`
  - `preact@10.29.0`
  - `@astrojs/sitemap@3.7.1`

### Evidencia

- `npm install` completa correctamente
- `npm run build` completa correctamente
- `npm audit` baja de:
  - `9 high / 3 moderate / 2 low / 14 paquetes`
  - a `5 high / 1 moderate / 1 low / 7 paquetes`
- checks automatizados sobre `dist/` confirman:
  - paginas localizadas generadas
  - sitemap presente
  - metadata base presente en locales
  - rutas puente siguen no indexables

### Impacto

- el bloque directo mas riesgoso queda saneado
- `SR-2` queda desbloqueada
- el riesgo residual se concentra ahora en transitivas y en `astro-compress`

### Documentos afectados

- `docs/plans/sprint-1/SR/SR1.md`
- `docs/plans/sprint-1/security-remediation-roadmap.md`

---

## 2026-03-15 — Cierre de SR-2 con residual de seguridad en cero

### Estado

- Tipo: `decision ejecutada`
- Fase: `6.5 / SR-2`

### Decision / registro

- `SR-2` queda cerrada con `npm audit = 0`
- entra una mejora incidental permitida de `astro-compress`
- se aplican `overrides` dirigidos para resolver las transitivas residuales
- `SR-3` deja de ser necesaria por ahora como subfase operativa

### Evidencia

- `npm install` completa correctamente
- `npm run build` completa correctamente
- `npm audit` queda en:
  - `0 high`
  - `0 moderate`
  - `0 low`
  - `0` paquetes afectados
- checks automatizados sobre `dist` siguen confirmando:
  - paginas localizadas generadas
  - sitemap presente
  - metadata base presente
  - rutas puente no indexables

### Impacto

- el roadmap de remediacion ya no arrastra deuda tecnica viva de advisories
- `SR-4` puede enfocarse en cierre documental y handoff
- `Fase 7` queda desbloqueada sin deuda de seguridad relevante en el stack actual

### Documentos afectados

- `docs/plans/sprint-1/SR/SR2.md`
- `docs/plans/sprint-1/security-remediation-roadmap.md`

---

## 2026-03-15 — Cierre del roadmap auxiliar de remediacion de seguridad

### Estado

- Tipo: `decision ejecutada`
- Fase: `6.5 / SR-4`

### Decision / registro

- el roadmap auxiliar de remediacion de seguridad queda cerrado
- `SR-4` se resuelve como handoff y cierre documental, no como una nueva ola tecnica
- `SR-3` queda desactivada salvo que reaparezcan advisories o regresiones ligadas a compresion

### Evidencia

- `SR-0` ejecutada
- `SR-1` ejecutada
- `SR-2` ejecutada
- baseline final de seguridad:
  - `npm audit = 0`
- build final:
  - `npm run build` en verde

### Impacto

- `Fase 7` queda desbloqueada sin deuda activa de advisories
- el stack actual queda en mejor estado para futuros upgrades o cambios visuales
- los `overrides` actuales pasan a formar parte del baseline tecnico aceptado mientras no introduzcan regresiones

### Documentos afectados

- `docs/plans/sprint-1/security-remediation-roadmap.md`

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
- `docs/plans/sprint-1/phase-3.md`

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
- `docs/plans/sprint-1/pre-phase-5-fixes/pre-phase-5-work.md`

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
- `docs/plans/sprint-1/pre-phase-5-fixes/work-headers-patch.md`
- `src/data/selected-work.ts`
- `src/pages/work.astro`
- `src/components/sections/Projects.astro`
- `docs/plans/sprint-1/pre-phase-5-fixes/exp-logos-patch.md`
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
- `docs/plans/sprint-1/phase-0b.md`

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
- `docs/plans/sprint-1/phase-1.md`

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
- `docs/plans/sprint-1/phase-1.md`

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
- `docs/plans/sprint-1/phase-1.md`

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
- `docs/plans/sprint-1/phase-2.md`

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
- `docs/plans/sprint-1/phase-2.md`

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
- `docs/plans/sprint-1/phase-4.md`

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

- `docs/plans/sprint-1/pre-phase-5-fixes/darkmode-fix.md`

---

## 2026-03-15 — Reintroduccion controlada de i18n para Fase 5

### Estado

- Tipo: `decision ejecutada`
- Fase: `5`

### Decision / registro

- `Fase 5` reintroduce i18n real con dos locales activos:
  - `en`
  - `es`
- `en` sigue siendo el idioma maestro
- todos los locales activos llevan prefijo
- `/` deja de ser la home canonica y pasa a ser una entrada inteligente de locale
- la resolucion del locale en `/` sigue esta prioridad:
  - preferencia persistida del usuario
  - idioma del navegador
  - fallback a `/en/`
- el español aprobado para el sitio es `espanol neutro LATAM` con ligera preferencia peruana
- la localizacion de `es` es adaptada por mercado, no traduccion literal estricta
- `de` deja de formar parte del runtime activo
- `LanguageSwitcher` vuelve como componente minimo y multipagina

### Razon

- el sitio ya cerro su version canonica en ingles y necesita abrir una segunda lengua sin reactivar la logica heredada del template
- la politica de prefijos para todos los locales evita ambiguedad estructural entre idioma por defecto y rutas secundarias
- el root inteligente permite una UX razonable sin volver `/` una home duplicada
- el español debe sonar natural para hiring y networking en LATAM sin perder neutralidad profesional

### Documentos afectados

- `docs/architecture/i18n-spec.md`
- `docs/delivery/deployment.md`
- `docs/plans/sprint-1/phase-5.md`

### Implementacion afectada

- `astro.config.mjs`
- `src/i18n/*`
- `src/utils/i18n.ts`
- `src/pages/**`
- `src/components/ui/LanguageSwitcher.astro`
- `src/components/layout/Navbar.astro`
- `src/layouts/Layout.astro`

---

## 2026-03-15 — Cierre aprobado de Fase 5

### Estado

- Tipo: `decision ejecutada`
- Fase: `5`

### Decision / registro

- `Fase 5` queda formalmente cerrada
- la estructura multiidioma aprobada para el sitio activo queda establecida como:
  - `/en/`
  - `/en/work/`
  - `/en/experience/`
  - `/en/contact/`
  - `/es/`
  - `/es/work/`
  - `/es/experience/`
  - `/es/contact/`
- `/`, `/work/`, `/experience/` y `/contact/` quedan aceptadas como rutas puente inteligentes
- el `LanguageSwitcher` multipagina queda aprobado
- los ajustes editoriales de `es` quedan suficientemente cerrados para avanzar, aunque puedan seguir afinandose en fases posteriores

### Razon

- la implementacion tecnica ya compilaba correctamente con la nueva estructura
- la revision manual del usuario aprobo el comportamiento general de rutas, switcher y cobertura visible por locale
- los gaps visibles mas relevantes de localizacion quedaron resueltos sin reabrir estrategia ni arquitectura

### Documentos afectados

- `docs/plans/sprint-1/phase-5.md`

### Desbloquea

- `docs/delivery/seo-spec.md`
- `docs/delivery/release-checklist.md`
- trabajo de `Fase 6`

---

## 2026-03-15 — Politica SEO estructural de Fase 6

### Estado

- Tipo: `decision ejecutada`
- Fase: `6`

### Decision / registro

- `GitHub Pages` en `https://paw-paw.github.io/` se trata como publicacion real de `Fase 6`
- cada pagina localizada usa `self-canonical`
- cada pagina localizada emite:
  - alternate `en`
  - alternate `es`
  - `x-default`
- `x-default` apunta a la version `en` equivalente
- `/`, `/work/`, `/experience/` y `/contact/` quedan fuera de la estrategia SEO primaria
- las rutas puente quedan fuera del sitemap
- la estrategia OG de esta fase usa una imagen base compartida, sin producir una bateria nueva de assets OG por pagina

### Razon

- `Fase 5` ya cerro la estructura i18n y dejo claro que las rutas puente no son home canonica ni contenido primario
- `Fase 6` necesita una politica SEO consistente con esa arquitectura, no una capa mezclada entre rutas localizadas y puentes inteligentes
- usar una OG base compartida permite cerrar metadata y deploy sin abrir produccion visual propia de `Fase 7`

### Documentos afectados

- `docs/delivery/deployment.md`
- `docs/delivery/seo-spec.md`
- `docs/delivery/release-checklist.md`
- `docs/plans/sprint-1/phase-6.md`

### Implementacion afectada

- `astro.config.mjs`
- `src/layouts/Layout.astro`
- `src/utils/seo.ts`
- `src/pages/en/**`
- `src/pages/es/**`

---

## 2026-03-15 — Cierre aprobado de Fase 6

### Estado

- Tipo: `decision ejecutada`
- Fase: `6`

### Decision / registro

- `Fase 6` queda formalmente cerrada
- el criterio de cierre aprobado para esta fase fue:
  - verificacion local completa
  - sin exigir deploy publico inmediato
- la capa SEO y metadata queda aprobada con:
  - `canonical` por locale
  - `hreflang` recíproco
  - `x-default` a `en`
  - rutas puente fuera del sitemap
  - rutas puente no indexables

### Razon

- el usuario aprobo que la fase no dependiera de una verificacion publica inmediata en `GitHub Pages`
- la verificacion local ya confirmo consistencia entre:
  - metadata por pagina
  - sitemap
  - `robots.txt`
  - rutas puente
  - build final

### Documentos afectados

- `docs/delivery/deployment.md`
- `docs/delivery/seo-spec.md`
- `docs/delivery/release-checklist.md`
- `docs/plans/sprint-1/phase-6.md`

### Desbloquea

- `docs/visual/interaction-spec.md`
- trabajo de `Fase 7`

---

## 2026-03-16 — Cierre aprobado de Fase 7

### Estado

- Tipo: `decision ejecutada`
- Fase: `7`

### Decision / registro

- `Fase 7` queda formalmente cerrada y aprobada
- la segunda tentativa de la fase se resuelve con una direccion deliberadamente conservadora
- `AOS` queda como motor principal de reveals simples
- `GSAP` queda acotado a microinteraccion y refuerzos puntuales
- la fase cierra con:
  - polish de CTA hierarchy
  - responsive polish en paginas activas
  - microinteraccion mas sobria en controles globales
  - ritmo de entrada afinado arriba del fold en `home`, `/work/` y `/experience/`

### Razon

- la primera tentativa de `Fase 7` demostro que una capa nueva de reveals mas agresiva introducia fragilidad en visibilidad y capturas
- el cierre aprobado de esta segunda tentativa confirma que el sitio ya gano craft y polish sin reabrir arquitectura ni depender de un sistema nuevo de motion

### Documentos afectados

- `docs/plans/sprint-1/phase-7.md`
- `docs/visual/interaction-spec.md`

### Implementacion afectada

- `src/scripts/animations.js`
- `src/styles/global.css`
- `src/components/layout/Navbar.astro`
- `src/components/ui/LanguageSwitcher.astro`
- `src/components/ui/ThemeToggle.astro`
- `src/components/sections/Hero.astro`
- `src/components/sections/Projects.astro`
- `src/components/sections/Timeline.astro`
- `src/components/sections/FooterCTA.astro`
- `src/components/sections/Contact.astro`
- `src/pages/en/**`
- `src/pages/es/**`

---

## 2026-03-16 — Root bridge con metadata social en ingles

### Estado

- Tipo: `decision ejecutada`
- Fase: `post-7`

### Decision / registro

- `/` sigue siendo un bridge inteligente de locale
- `/` no entra en la estrategia SEO primaria
- aun asi `/` ahora emite metadata social en ingles para previews de sharing

### Razon

- plataformas como WhatsApp leen el HTML del root bridge pero no ejecutan su redirect JS
- sin esa metadata, el preview de la URL principal muestra solo `Redirecting…`
- la solucion aprobada fue hacer `/` share-safe sin convertirlo en ruta canonica

### Documentos afectados

- `docs/architecture/i18n-spec.md`
- `docs/delivery/seo-spec.md`

### Implementacion afectada

- `src/pages/index.astro`

---

## 2026-03-16 — Cierre estrategico de Sprint 2 Bloque 0 para blog profesional

### Estado

- Tipo: `decision ejecutada`
- Fase: `Sprint 2 / Bloque 0`

### Decision / registro

- se aprueba usar el blog profesional como palanca de posicionamiento experto dentro del portfolio
- la tesis superior del portfolio se rebalancea para presentar un puente visible entre `business development`, `partnerships` y `project delivery`
- `operations` deja de leerse como eje principal y pasa a funcionar como capacidad de soporte y credibilidad operativa
- el blog queda orientado principalmente a hiring managers y founders que evalan capacidad de ejecucion con criterio comercial
- el blog adopta politica de idioma flexible por post con fallback editorial al blog index del locale destino y, si no existe, a su home
- la cadence objetivo aprobada es quincenal mientras se sostengan calidad y relevancia estrategica; si no, puede pasar a temporadas

### Razon

- el posicionamiento vigente reconocia `partnerships` y `business development`, pero los seguia presentando como puente subordinado a `delivery / operations`
- el nuevo objetivo del blog requiere una capa editorial que haga mas visible la conversion de oportunidades comerciales en ejecucion real
- cerrar estas decisiones antes de tocar arquitectura, i18n, SEO o runtime reduce retrabajo y evita convertir supuestos en verdad tecnica

### Documentos afectados

- `docs/plans/sprint-2/block-0.md`
- `docs/strategy/portfolio-strategy.md`
- `docs/content/content-system.md`

### Pendientes relacionados

- materializar el rebalanceo aprobado dentro de `docs/strategy/portfolio-strategy.md`
- materializar el rebalanceo aprobado dentro de `docs/content/content-system.md`
- resolver en `Bloque 1` el impacto en arquitectura, i18n y SEO del blog

---

## 2026-03-16 — Materializacion contractual de Sprint 2 Bloque 1

### Estado

- Tipo: `decision ejecutada`
- Fase: `Sprint 2 / Bloque 1`

### Decision / registro

- `Bloque 1` materializa contractualmente el rebalanceo aprobado en `Bloque 0`
- `docs/strategy/portfolio-strategy.md` deja de presentar `partnerships / business development` como capa subordinada a una tesis `delivery / operations first`
- `docs/content/content-system.md` se alinea con la nueva tesis y actualiza sus principios y entidades clave para soportar el puente entre oportunidad comercial y ejecucion
- `operations` queda explicitamente preservada como capacidad de soporte y credibilidad operativa, no como eje principal del positioning
- la CTA principal contractual `View selected work` se mantiene en esta fase
- `content-master`, arquitectura del blog, i18n y SEO se difieren a bloques posteriores

### Razon

- el cierre de `Bloque 0` ya habia cambiado la direccion estrategica del portfolio
- sin esta materializacion contractual, el roadmap habria dejado una contradiccion entre decisiones aprobadas y documentos contractuales vigentes
- cerrar primero strategy y content system reduce retrabajo antes de propagar copy y construir el blog

### Documentos afectados

- `docs/strategy/portfolio-strategy.md`
- `docs/content/content-system.md`
- `docs/plans/sprint-2/block-1.md`

### Pendientes relacionados

- propagar la nueva tesis a `docs/content/content-master.md` y al copy downstream del portfolio en `Bloque 2`
- resolver entidad editorial `blog_post`, arquitectura, rutas e impacto i18n/SEO del blog en `Bloque 3`

---
