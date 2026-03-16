# SEO Spec

## Estado

- Tipo: `auxiliar`
- Fase inicial: `6`
- Estado: `v1`
- Ultima actualizacion: `2026-03-15`

---

## Objetivo

Definir la capa SEO operativa del sitio para sus locales activos `en` y `es`, incluyendo `title`, `description`, politica de `canonical`, `alternates`, OG y tratamiento de rutas puente.

Este documento no redefine deployment ni routing estructural. Su funcion es detallar la implementacion SEO por pagina sobre la base ya fijada en `docs/delivery/deployment.md` y `docs/architecture/i18n-spec.md`.

---

## Politica general

### Estructura de `title`

- Home:
  - `Paulo Tuya | Project Delivery, Partnerships, Operations`
  - `Paulo Tuya | Delivery de proyectos, alianzas y operaciones`
- Paginas internas:
  - `Page | Paulo Tuya | Project Delivery, Partnerships, Operations`
  - `Pagina | Paulo Tuya | Delivery de proyectos, alianzas y operaciones`

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

- title: `Paulo Tuya | Project Delivery, Partnerships, Operations`
- description: `Paulo Tuya is a project delivery and partnerships operator across gaming, esports, and remote programs, with experience in activations, live operations, and partner-facing execution.`

### `/es/`

- title: `Paulo Tuya | Delivery de proyectos, alianzas y operaciones`
- description: `Paulo Tuya es un operador de delivery de proyectos y alianzas en gaming, esports y programas remotos, con experiencia en activaciones, operaciones en vivo y ejecucion con partners.`

### `/en/work/`

- title: `Work | Paulo Tuya | Project Delivery, Partnerships, Operations`
- description: `Selected work by Paulo Tuya across gaming, esports, retail activations, live operations, and partner-facing project delivery.`

### `/es/work/`

- title: `Trabajo | Paulo Tuya | Delivery de proyectos, alianzas y operaciones`
- description: `Trabajo seleccionado de Paulo Tuya en gaming, esports, activaciones retail, operaciones en vivo y delivery de proyectos de cara a partners.`

### `/en/experience/`

- title: `Experience | Paulo Tuya | Project Delivery, Partnerships, Operations`
- description: `Experience of Paulo Tuya across tournament operations, partnerships, account-facing delivery, and founder-led execution in gaming and esports.`

### `/es/experience/`

- title: `Experiencia | Paulo Tuya | Delivery de proyectos, alianzas y operaciones`
- description: `Experiencia de Paulo Tuya en operaciones de torneos, alianzas, delivery de cara a cuentas y ejecucion founder-led en gaming y esports.`

### `/en/contact/`

- title: `Contact | Paulo Tuya | Project Delivery, Partnerships, Operations`
- description: `Contact Paulo Tuya for project delivery, partnerships, operations, and partner-facing execution roles across gaming, esports, and remote programs.`

### `/es/contact/`

- title: `Contacto | Paulo Tuya | Delivery de proyectos, alianzas y operaciones`
- description: `Contacta a Paulo Tuya para roles de delivery de proyectos, alianzas, operaciones y ejecucion con partners en gaming, esports y programas remotos.`

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
