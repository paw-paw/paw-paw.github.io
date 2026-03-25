# Template Audit

## Estado

- Fase origen: `0A`
- Estado: `done`
- Ultima actualizacion: `2026-03-11`

---

## Baseline tecnico

### Entorno observado

- `node`: `v24.14.0`
- `npm`: `11.11.0`
- `node_modules`: ausente al inicio de la fase

### Bootstrap ejecutado

- Se ejecuto `npm install`
- Resultado: instalacion completada correctamente
- Resultado adicional: `507` paquetes modificados, `508` auditados
- Vulnerabilidades reportadas por `npm`: `14`
  - `2` low
  - `3` moderate
  - `9` high

### Validacion base ejecutada

- Se ejecuto `npm run build`
- Primer resultado: fallo por sandbox
  - Astro intento escribir en `~/.config/astro`
  - Error observado: `EACCES: permission denied, mkdir '/home/pawpaw/.config/astro'`
- Segundo resultado: build completado correctamente fuera del sandbox

### Conclusión del baseline

- La base tecnica del template es operable
- El proyecto compila y genera salida estatica
- El baseline tecnico real actual depende de:
  - `npm install`
  - `npm run build`
  - revision manual de warnings y contradicciones detectadas

---

## Hallazgos tecnicos confirmados

### Build

- El build genera `9` paginas
- Se genera `sitemap-index.xml`
- `astro-compress` corre correctamente al final del build

### Warnings y senales detectadas

- Faltan traducciones:
  - `contact.phoneTitle`
  - `contact.phoneButtonText`
- Los faltantes ocurren en `en` y `de`
- Vite reporta un chunk vacio:
  - `Skills.astro_astro_type_script_index_0_lang`
- Browserslist reporta base de datos desactualizada:
  - `caniuse-lite` tiene `10` meses de antiguedad

### Interpretacion actual

- El proyecto no esta roto a nivel de build
- Sí existen incoherencias de contenido y/o estructura de i18n
- El baseline tecnico ya permite pasar de hipotesis a auditoria concreta

---

## Implicaciones para Fase 0B

- `0B` no necesita resolver un repo que no compila
- `0B` sí debe considerar:
  - contradicciones de i18n
  - faltantes de traduccion
  - residuos del template
  - configuraciones que requieren permisos o entorno especifico para validar

---

## Auditoria de i18n vs plan monoidioma

### Estado observado

- `astro.config.mjs` tiene i18n activo
  - `defaultLocale: 'en'`
  - `locales: ['en', 'de']`
  - `prefixDefaultLocale: false`
- Existen rutas localizadas reales:
  - `src/pages/en/**`
  - `src/pages/de/**`
- `src/components/ui/LanguageSwitcher.astro` esta activo
- `src/layouts/Layout.astro` genera:
  - `hreflang`
  - `og:locale`
  - alternates por locale
- Navbar y footer enlazan distinto segun locale

### Contradiccion detectada

- El sistema documental define que hasta `Fase 5` el sitio debe considerarse explicitamente monoidioma
- La implementacion actual contradice esa regla y ya opera como sitio multilenguaje

### Direccion recomendada para `0B`

- Hacer rollback temporal a monoidioma canonico en `/`
- En `0B` deberia:
  - retirarse o desactivarse `LanguageSwitcher`
  - retirarse la configuracion i18n activa
  - retirarse la promocion de rutas `en/` y `de/`
  - dejarse `/` como ruta canonica unica hasta `Fase 5`
  - retirarse `hreflang` y alternates multilenguaje temporales

### Implicacion para fases posteriores

- `Fase 5` debe tratarse como reintroduccion controlada de i18n
- no conviene seguir construyendo arquitectura o metadata sobre la base multilenguaje actual

---

## Auditoria de `Projects`

### Estado observado

- `src/components/sections/Projects.astro` existe
- La seccion esta importada pero comentada en:
  - `src/pages/index.astro`
  - `src/pages/en/index.astro`
  - `src/pages/de/index.astro`
- La implementacion actual depende de:
  - rutas `/projects` y `/projects/[slug]` inexistentes
  - assets `/images/projects/*` inexistentes en `public/`
- Existen traducciones relacionadas con proyectos en `src/i18n/en.json` y `src/i18n/de.json`

### Diagnostico

- `Projects` no esta lista para activarse
- hoy es una superficie incompleta del template, no una seccion operable del sitio

### Clasificacion provisional para `0A`

- `Projects` queda clasificada como `mantener apagada`

### Razon

- evita invertir en deuda del template antes de cerrar estrategia y arquitectura
- evita reactivar una seccion con rutas y assets inexistentes
- deja a `Fase 2` libertad para decidir si la superficie se descarta, se redefine o reaparece como `Case Studies`

### Implicacion para `0B`

- no reactivar `Projects`
- dejar explicito que la superficie permanece fuera de la base activa

---

## Auditoria de deployment, SEO, motion y residuos tecnicos

### Deployment y entorno real

- `astro.config.mjs` define hoy:
  - `site: 'https://garrettheath4.com/'`
  - i18n activo
  - `@astrojs/sitemap`
  - `astro-compress`
  - headers de cache
- `public/robots.txt` apunta hoy a:
  - `https://garrettheath4.com/sitemap-index.xml`
- `netlify.toml` ya define un camino de deployment en Netlify
  - `publish = "dist"`
  - `command = "npm run build"`
  - headers y processing propios

### Diagnostico de deployment

- el template ya trae una estrategia de deployment parcialmente implementada
- existen decisiones heredadas que pueden sobrevivir o entrar en conflicto con el deployment final
- `delivery/deployment.md` en `0B` no debe partir de cero; debe nacer desde esta realidad auditada

### SEO baseline activo

- `src/layouts/Layout.astro` ya define:
  - canonical
  - Open Graph
  - Twitter cards
  - `hreflang`
  - `x-default`
  - JSON-LD de `WebSite`
  - JSON-LD de `Person`
- Algunas decisiones son claramente heredadas o genéricas:
  - `alternateName: "Portfolio Website"`
  - `SearchAction` generica
  - `apple-touch-icon` referenciado sin evidencia de archivo existente en `public/`

### Diagnostico de SEO

- el proyecto no llega limpio a `Fase 6`
- ya existe una capa SEO activa que condiciona metadata, alternates y datos estructurados
- esa capa debe auditarse y posiblemente recortarse o reescribirse en `0B` y `6`

### Motion baseline activo

- El template carga AOS por CDN en `Layout.astro`
- El template carga GSAP y `ScrollTrigger` por CDN en `Layout.astro`
- `src/scripts/animations.js` contiene logica extensa de animaciones y hover effects
- `Contact.astro` tambien importa y usa GSAP

### Diagnostico de motion

- el proyecto no llega neutro a `Fase 7`
- ya existe una capa de motion activa y distribuida entre layout, scripts y componentes
- esa capa debe quedar catalogada y no puede tratarse como si empezara desde cero al final del roadmap

### Residuos tecnicos detectados

- existen archivos en `src/assets/` que parecen artefactos fuera de lugar:
  - `src/assets/astro.config.mjs`
  - `src/assets/tsconfig.json`
- existen assets con naming heredado del template:
  - `fb_logo.png`
  - `fb_logo_white.png`
- existen referencias de branding o identidad heredada en codigo y repo

### Residuos de identidad detectados

- `astro.config.mjs` usa dominio heredado `garrettheath4.com`
- `public/robots.txt` usa sitemap heredado de ese dominio
- `src/utils/me.ts` sigue con:
  - `Fabian Bitzer`
  - `fabian-bitzer.de`
  - `nicremo`
- `src/components/sections/FooterCTA.astro` enlaza a `https://github.com/nicremo`
- `src/components/layout/Navbar.astro` usa `fb_logo*`
- `README.md` del repo raiz sigue presentado como template de Fabian Bitzer / nicremo

### Implicaciones para `0B`

- `0B` debe incluir limpieza de identidad mas amplia que solo `me.ts`
- `0B` debe priorizar:
  - dominio y ownership tecnico
  - rollback temporal a monoidioma
  - limpieza de CTAs, metadata y enlaces heredados
  - decision sobre que configuracion de deployment sobrevive
  - decision sobre que capa SEO y motion base se mantiene, se reduce o se neutraliza temporalmente

---

## Perimetro recomendado de limpieza para `0B`

### Decision fijada en `0A`

- `0B` debe trabajar con perimetro amplio
- el saneamiento esperado incluye:
  - sitio activo
  - metadata estructural
  - repo raiz como activo publico

### Interpretacion operativa

- `0B` no debe limitarse a fixes minimos en runtime
- `0B` debe neutralizar la identidad heredada donde ya condiciona:
  - navegacion
  - CTAs
  - datos estructurados
  - metadata
  - dominio
  - distribucion publica del repo

### Fuera de ese perimetro

- `0B` no debe cerrar estrategia final de marca
- `0B` no debe introducir arquitectura final del portfolio
- `0B` no debe reescribir contenido final aprobado

---

## Lista priorizada de correcciones obligatorias para `0B`

### Prioridad 1

- rollback efectivo a monoidioma canonico en `/`
- retirar `LanguageSwitcher`
- retirar i18n activo de config, rutas promovidas y metadata multilenguaje
- corregir dominio, sitemap y ownership tecnico heredados

### Prioridad 2

- neutralizar branding heredado en `me.ts`, navbar, footer y CTAs
- limpiar enlaces heredados del template
- dejar `Projects` fuera de la base activa

### Prioridad 3

- recortar o neutralizar metadata estructural heredada:
  - `alternateName`
  - JSON-LD generico
  - referencias inconsistentes a iconos o assets
- revisar naming de assets heredados si induce confusion operativa
- sanear `README.md` del repo raiz para que deje de presentarse como template original

### Dependencias para fases posteriores

- `Fase 1` no deberia empezar sobre dominio, identidad o i18n heredados
- `Fase 6` y `Fase 7` deben partir de una base ya neutralizada, no del baseline del template

---

## Salidas esperadas de `0A` hacia `0B`

- baseline tecnico confirmado
- contradiccion de i18n caracterizada con direccion de rollback
- `Projects` clasificada como `mantener apagada`
- perimetro de limpieza de `0B` fijado como amplio
- lista priorizada de correcciones obligatorias definida

---

## Estado despues de ejecutar `0B`

### Deployment y verdad tecnica activa

- `astro.config.mjs` ya apunta al dominio canonico vigente del sitio
- `public/robots.txt` ya apunta al sitemap del dominio canonico vigente
- `docs/delivery/deployment.md` existe como primera version contractual
- `netlify.toml` fue eliminado

### Estado del sitio generado

- la base activa genera solo `/`
- ya no se generan ni promueven rutas `/en/` ni `/de/`
- `LanguageSwitcher` fue retirado
- `hreflang`, `x-default` y metadata multilenguaje ya no se emiten

### Legal pages

- `impressum` y `datenschutz` fueron retiradas de la base activa
- sus enlaces publicos tambien fueron retirados

### Identidad y metadata base

- `src/utils/me.ts` ya no contiene identidad heredada del autor original
- la identidad publica temporal quedo neutralizada con placeholders del proyecto
- `README.md` raiz ya no presenta el template original
- `FooterCTA` ya no enlaza a `nicremo`
- `Layout.astro` ya no emite `SearchAction` ni `alternateName` heredados
- `sameAs` en JSON-LD se limita a enlaces realmente disponibles

### Motion y residuos pospuestos deliberadamente

- AOS, GSAP y `src/scripts/animations.js` permanecen temporalmente en la base
- no se consideran bloqueantes para cerrar `0B`
- su redefinicion profunda queda para fases posteriores, especialmente `Fase 7`
- los siguientes assets quedan documentados como residuos no activos pero no se eliminan en `0B`:
  - `src/assets/astro.config.mjs`
  - `src/assets/tsconfig.json`
  - `src/assets/fb_logo.png`
  - `src/assets/fb_logo_white.png`
  - `src/assets/portfolio-preview.png`
  - `src/assets/astro.svg`
  - `src/assets/background.svg`

### Validacion final de `0B`

- `npm run build` vuelve a completar correctamente
- el build actual genera una sola ruta estatica
- ya no quedan referencias criticas activas al autor original en la base publicada
