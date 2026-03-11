# Deployment

## Estado

- Tipo: `contractual`
- Fase inicial: `0B`
- Estado: `v1`
- Ultima actualizacion: `2026-03-11`

---

## Objetivo

Definir la verdad tecnica temporal de publicacion del sitio durante las fases previas al deployment final.

Esta version no fija un dominio custom final. Fija una base coherente y unica para evitar que config, sitemap, canonicals y ownership tecnico apunten a destinos distintos.

---

## Publicacion temporal acordada

- Hosting temporal: `GitHub Pages`
- Modelo temporal: `user site`
- URL temporal canonica: `https://paw-paw.github.io/`
- Dominio custom final: `pendiente`
- Base path: `no`

### Implicacion tecnica

- `astro.config.mjs -> site` debe apuntar a `https://paw-paw.github.io/`
- no debe definirse `base`
- `public/robots.txt` debe apuntar al sitemap de `https://paw-paw.github.io/`
- canonicals y metadata derivadas del `site` deben construirse sobre esta URL temporal
- cualquier referencia heredada a `garrettheath4.com` debe eliminarse en `0B`

---

## Flujo esperado de build y deploy

### Build

- instalar dependencias con `npm install`
- generar salida estatica con `npm run build`
- publicar la carpeta `dist/`

### Deploy temporal esperado

- el deployment temporal debe quedar preparado para GitHub Pages
- `Netlify` deja de ser la verdad tecnica activa del proyecto
- si persisten artefactos de Netlify durante `0B`, deben tratarse como residuo temporal o eliminarse en esta misma fase

---

## Routing, SEO y assets dependientes del deployment

### Routing

- hasta `Fase 5`, el sitio debe ser monoidioma y publicar una sola base canonica en `/`
- no deben generarse ni promoverse rutas `/en/` y `/de/`

### SEO y metadata

- sitemap y canonicals deben alinearse con `https://paw-paw.github.io/`
- no deben emitirse `hreflang` ni alternates multilenguaje mientras el sitio siga monoidioma
- cualquier JSON-LD o metadata que use dominio o identidad heredados debe neutralizarse en `0B`

### Assets

- assets y referencias publicas no deben asumir dominio custom ni base path
- nombres o referencias heredadas que generen confusion operativa deben neutralizarse en `0B`

---

## Pendientes deliberados para fases posteriores

- definir dominio custom final
- definir workflow final de deploy si deja de usarse GitHub Pages
- definir estrategia SEO final de `Fase 6`
- definir reglas finales de i18n de `Fase 5`
