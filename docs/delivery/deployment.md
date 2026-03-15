# Deployment

## Estado

- Tipo: `contractual`
- Fase inicial: `0B`
- Estado: `v2`
- Ultima actualizacion: `2026-03-15`

---

## Objetivo

Definir la verdad tecnica de publicacion del sitio durante las fases previas al deployment final y su transicion desde monoidioma a multiidioma controlado.

Esta version sigue sin fijar dominio custom final, pero ya incorpora la politica estructural de i18n nacida en `Fase 5`.

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

- hasta el inicio de `Fase 5`, el sitio fue monoidioma y publico una sola base canonica en `/`
- desde `Fase 5`, los locales activos reales son `en` y `es`
- todos los locales activos deben llevar prefijo
- las rutas publicas principales pasan a ser:
  - `/en/`
  - `/en/work/`
  - `/en/experience/`
  - `/en/contact/`
  - `/es/`
  - `/es/work/`
  - `/es/experience/`
  - `/es/contact/`
- `/` deja de ser la home canonica de contenido y pasa a funcionar como entrada inteligente de locale
- la entrada inteligente de `/` debe resolver locale con esta prioridad:
  - preferencia persistida del usuario
  - idioma del navegador si coincide con un locale soportado
  - fallback a `/en/`
- no deben existir ni promoverse rutas `/de/`

### SEO y metadata

- sitemap y canonicals deben alinearse con `https://paw-paw.github.io/`
- mientras no cierre `Fase 6`, esta spec solo obliga a que la estructura multiidioma no rompa canonicals ni metadata base
- los detalles finales de alternates, `hreflang` y estrategia SEO por locale pertenecen a `Fase 6`
- cualquier JSON-LD o metadata que use dominio o identidad heredados debe seguir neutralizado

### Assets

- assets y referencias publicas no deben asumir dominio custom ni base path
- nombres o referencias heredadas que generen confusion operativa deben neutralizarse en `0B`

---

## Pendientes deliberados para fases posteriores

- definir dominio custom final
- definir workflow final de deploy si deja de usarse GitHub Pages
- definir estrategia SEO final de `Fase 6`
- ajustar publish/release final multiidioma de `Fase 6`
