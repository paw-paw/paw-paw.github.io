# Deployment

## Estado

- Tipo: `contractual`
- Fase inicial: `0B`
- Estado: `v4`
- Ultima actualizacion: `2026-03-24`

---

## Objetivo

Definir la verdad tecnica de publicacion del sitio en `GitHub Pages` con dominio custom real y surface publica multiidioma.

Esta version fija `pauloctuya.com` como dominio canonico vigente del portfolio.

---

## Publicacion real vigente

- Hosting vigente: `GitHub Pages`
- Modelo vigente: `user site`
- URL canonica vigente: `https://pauloctuya.com/`
- Dominio custom final: `pauloctuya.com`
- Base path: `no`

### Implicacion tecnica

- `astro.config.mjs -> site` debe apuntar a `https://pauloctuya.com/`
- no debe definirse `base`
- `public/robots.txt` debe apuntar al sitemap de `https://pauloctuya.com/`
- `public/CNAME` debe declarar `pauloctuya.com`
- canonicals y metadata derivadas del `site` deben construirse sobre esta URL canonica
- cualquier referencia heredada a `garrettheath4.com` debe eliminarse en `0B`

---

## Flujo esperado de build y deploy

### Build

- instalar dependencias con `npm install`
- generar salida estatica con `npm run build`
- publicar la carpeta `dist/`

### Deploy esperado

- el deployment vigente debe cerrar sobre `GitHub Pages`
- el mecanismo vigente de publicacion debe ser `GitHub Pages Actions`
- el workflow vigente debe vivir en `.github/workflows/deploy.yml`
- `Settings > Pages` debe usar `GitHub Actions` como source de build y deploy
- el workflow debe ejecutarse sobre `push` a `main` y permitir disparo manual
- `Netlify` no forma parte de la verdad tecnica activa del proyecto
- cualquier artefacto heredado de Netlify sigue siendo residuo tecnico y no debe condicionar el release actual

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

- sitemap y canonicals deben alinearse con `https://pauloctuya.com/`
- desde `Fase 6`, alternates, `hreflang`, `x-default` y metadata por pagina deben alinearse con la estrategia SEO aprobada
- cada pagina localizada debe usar `self-canonical`
- `x-default` debe apuntar a la version `en` equivalente
- las rutas puente no forman parte de la estrategia SEO primaria
- las rutas puente deben quedar fuera del sitemap
- cualquier JSON-LD o metadata que use dominio o identidad heredados debe seguir neutralizado

### Assets

- assets y referencias publicas no deben asumir un dominio distinto del canonico vigente ni base path
- nombres o referencias heredadas que generen confusion operativa deben neutralizarse en `0B`

---

## Pendientes deliberados para fases posteriores

- definir workflow final de deploy si deja de usarse GitHub Pages
- producir imagenes OG dedicadas si luego se consideran necesarias
