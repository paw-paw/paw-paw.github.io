# SEO Spec

## Estado

- Tipo: `auxiliar`
- Fase inicial: `6`
- Estado: `v1`
- Ultima actualizacion: `2026-03-16`

---

## Objetivo

Definir la capa SEO operativa del sitio para sus locales activos `en` y `es`, incluyendo `title`, `description`, politica de `canonical`, `alternates`, OG y tratamiento de rutas puente.

Este documento no redefine deployment ni routing estructural. Su funcion es detallar la implementacion SEO por pagina sobre la base ya fijada en `docs/delivery/deployment.md` y `docs/architecture/i18n-spec.md`.

---

## Politica general

### Estructura de `title`

- Home:
  - `Paulo Tuya | Business Development, Partnerships, Project Delivery`
  - `Paulo Tuya | Business Development, Alianzas y Delivery de Proyectos`
- Paginas internas:
  - `Page | Paulo Tuya | Business Development, Partnerships, Project Delivery`
  - `Pagina | Paulo Tuya | Business Development, Alianzas y Delivery de Proyectos`

### Tono de `description`

- recruiter-facing fuerte
- orientado a discoverability
- sin keyword stuffing ni claims no aprobados

### Politica de `canonical`

- cada pagina localizada usa `self-canonical`
- ejemplos:
  - `/en/work/` -> canonical `/en/work/`
  - `/es/work/` -> canonical `/es/work/`

### Politica de `alternates`

- cada pagina localizada debe emitir:
  - alternate `en`
  - alternate `es`
  - `x-default`
- `x-default` apunta a la version `en` equivalente
- no debe apuntar a rutas puente

### Politica de rutas puente

Las siguientes rutas no forman parte de la estrategia SEO primaria:

- `/`
- `/work/`
- `/experience/`
- `/contact/`

Tratamiento requerido:

- `noindex`
- fuera de `canonical` primario
- fuera de `alternates`
- fuera del sitemap

Las rutas localizadas del blog si forman parte de la estrategia SEO primaria:

- `/en/blog/`
- `/es/blog/`
- `/en/blog/[slug]/`
- `/es/blog/[slug]/`

### Excepcion de share metadata para `/`

- `/` puede emitir `title`, `description`, OG y Twitter metadata para social sharing
- esa metadata debe estar en ingles y alineada con la home `en`
- esto no cambia su tratamiento SEO:
  - sigue siendo `noindex`
  - sigue fuera del sitemap
  - sigue fuera de `alternates`
  - no pasa a ser home canonica

### Politica OG

- se usa una imagen base compartida en esta fase
- no se producen imagenes OG nuevas por pagina
- `og:title` y `twitter:title` deben seguir los `title` definidos aqui
- `og:description` y `twitter:description` deben seguir las `description` definidas aqui

---

## Matriz por pagina

### `/en/`

- title: `Paulo Tuya | Business Development, Partnerships, Project Delivery`
- description: `Paulo Tuya is a commercially fluent operator connecting business development, partnerships, and project delivery across gaming, esports, and remote programs.`

### `/es/`

- title: `Paulo Tuya | Business Development, Alianzas y Delivery de Proyectos`
- description: `Paulo Tuya conecta business development, alianzas y delivery de proyectos en gaming, esports y programas remotos, con un enfoque claro de ejecucion cross-functional.`

### `/en/work/`

- title: `Work | Paulo Tuya | Business Development, Partnerships, Project Delivery`
- description: `Selected work by Paulo Tuya across gaming, esports, partnerships, commercial execution, and project delivery under real operating constraints.`

### `/es/work/`

- title: `Trabajo | Paulo Tuya | Business Development, Alianzas y Delivery de Proyectos`
- description: `Trabajo seleccionado de Paulo Tuya en gaming, esports, alianzas, ejecucion comercial y delivery de proyectos bajo condiciones reales de operacion.`

### `/en/experience/`

- title: `Experience | Paulo Tuya | Business Development, Partnerships, Project Delivery`
- description: `Experience of Paulo Tuya across operations, partnerships, business development, account-facing delivery, and founder-led execution in gaming and esports.`

### `/es/experience/`

- title: `Experiencia | Paulo Tuya | Business Development, Alianzas y Delivery de Proyectos`
- description: `Experiencia de Paulo Tuya en operaciones, alianzas, business development, delivery de cara a cuentas y ejecucion founder-led en gaming y esports.`

### `/en/contact/`

- title: `Contact | Paulo Tuya | Business Development, Partnerships, Project Delivery`
- description: `Contact Paulo Tuya for business development, partnerships, project delivery, and partner-facing execution roles across gaming, esports, and remote programs.`

### `/es/contact/`

- title: `Contacto | Paulo Tuya | Business Development, Alianzas y Delivery de Proyectos`
- description: `Contacta a Paulo Tuya para roles de business development, alianzas, delivery de proyectos y ejecucion con partners en gaming, esports y programas remotos.`

### `/en/blog/`

- title: `Blog | Paulo Tuya | Business Development, Partnerships, Project Delivery`
- description: `Professional writing by Paulo Tuya on business development, partnerships, project delivery, operations, and cross-functional execution across gaming, esports, and remote programs.`

### `/es/blog/`

- title: `Blog | Paulo Tuya | Business Development, Alianzas y Delivery de Proyectos`
- description: `Escritos profesionales de Paulo Tuya sobre business development, alianzas, delivery de proyectos, operaciones y ejecucion cross-functional en gaming, esports y programas remotos.`

### `/en/blog/[slug]/`

- title: `Post Title | Paulo Tuya | Business Development, Partnerships, Project Delivery`
- description: `Post-specific description focused on the main idea, category, and professional relevance of the article.`

### `/es/blog/[slug]/`

- title: `Titulo del post | Paulo Tuya | Business Development, Alianzas y Delivery de Proyectos`
- description: `Descripcion especifica del post enfocada en su idea principal, categoria y relevancia profesional.`

---

## Implementacion esperada

- la metadata debe centralizarse en una capa reusable, no dispersarse como hardcode aislado por pagina si eso rompe mantenibilidad
- `Layout.astro` debe emitir:
  - `canonical`
  - `alternate hreflang`
  - `x-default`
  - OG
  - Twitter
- el JSON-LD no debe apuntar a una ruta puente como URL principal indexable

---

## Fuera de alcance en esta fase

- crear imagenes OG dedicadas por pagina
- estrategia SEO para un dominio custom final no decidido
- optimizacion SEO avanzada por keyword research
- schema markup especifico por tipo de pagina mas alla del baseline utilizable
- matriz SEO completa para `/blog/category/[category]/`
