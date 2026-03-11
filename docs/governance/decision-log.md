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

- redefinicion profunda de AOS, GSAP y `src/scripts/animations.js`
- limpieza final de residuos no activos en `src/assets/`
- redefinicion completa del contenido visible mas alla del copy critico neutralizado

### Documentos afectados

- `docs/governance/template-audit.md`
- `docs/plans/phase-0b.md`
