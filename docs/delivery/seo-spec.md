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
- en `blog post detail`, cuando exista equivalente exacto entre locales, los alternates deben apuntar a la version localizada equivalente aunque use un `slug` distinto
- en `blog post detail`, cuando no exista equivalente exacto en el locale destino, el alternate de ese locale debe caer al `blog index` localizado correspondiente
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
- description: `Professional writing by Paulo Tuya on business development, partnerships, project delivery, and the operating patterns behind reliable execution across gaming, esports, and remote programs.`

### `/es/blog/`

- title: `Blog | Paulo Tuya | Business Development, Alianzas y Delivery de Proyectos`
- description: `Escritos profesionales de Paulo Tuya sobre business development, alianzas, delivery de proyectos y los patrones de trabajo detras de una ejecucion confiable en gaming, esports y programas remotos.`

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

### Structured data

La entidad personal debe representarse con un identificador estable para evitar entidades paralelas entre locales y posts:

```txt
Person.@id = https://pauloctuya.com/#person
Person.url = https://pauloctuya.com/en/
```

Reglas:

- `Person`, `ProfilePage`, `WebSite` y `BlogPosting.author` deben referenciar la misma entidad mediante `@id`.
- `Person.url` debe apuntar a una ruta indexable localizada, no a `/`.
- `sameAs` debe incluir solo perfiles publicos verificables que representen a la misma persona.
- GitHub puede incluirse en `sameAs`, pero no se convierte por eso en canal visible de Contact.
- `knowsAbout`, si se usa, debe reflejar temas visibles y aprobados por la estrategia del portfolio, sin keyword stuffing.
- No emitir `Organization` para Paulo si representa de forma ambigua una entidad personal como organizacion.

### `BlogPosting`

Los posts publicados en `/en/blog/[slug]/` y `/es/blog/[slug]/` deben emitir structured data `BlogPosting`.

Campos esperados:

```txt
@context
@type
@id
headline
description
image
datePublished
dateModified
author.@id
mainEntityOfPage
inLanguage
url
```

Reglas:

- `@id` del post debe derivarse de la URL canonica localizada del detail.
- `mainEntityOfPage` y `url` deben apuntar a la URL canonica localizada.
- `author` debe referenciar `https://pauloctuya.com/#person`.
- `datePublished` debe usar `publish_date`.
- `dateModified` debe usar `modified_date` cuando exista y caer tecnicamente a `publish_date` cuando no exista.
- El fallback de `dateModified` a `publish_date` es tecnico para schema, no una afirmacion editorial visible de edicion.
- El schema no debe contener datos ocultos, claims no visibles ni perfiles no verificables.

### Robots IA y AI Search

`robots.txt` debe separar tres usos:

1. Search / indexacion para respuestas.
2. Entrenamiento o mejora de modelos.
3. Fetch iniciado por usuario.

Decision vigente:

- permitir search y fetch iniciado por usuario;
- restringir entrenamiento o model improvement.

Matriz vigente:

| Proveedor | User-agent | Uso | Decision |
| --- | --- | --- | --- |
| OpenAI | `OAI-SearchBot` | Search en ChatGPT | Permitir |
| OpenAI | `ChatGPT-User` | Fetch iniciado por usuario | Permitir |
| OpenAI | `GPTBot` | Entrenamiento/model improvement | Restringir |
| Perplexity | `PerplexityBot` | Search results en Perplexity | Permitir |
| Perplexity | `Perplexity-User` | Fetch iniciado por usuario | Permitir/documentar como user-triggered |
| Anthropic | `Claude-SearchBot` | Search/index quality para Claude | Permitir |
| Anthropic | `Claude-User` | Fetch iniciado por usuario | Permitir |
| Anthropic | `ClaudeBot` | Entrenamiento | Restringir |
| Google | `Googlebot` | Google Search, AI Overviews y AI Mode | Permitir |
| Google | `Google-Extended` | Uso en algunos sistemas generativos fuera del flujo normal de Search | Restringir |

Google Search, AI Overviews y AI Mode se controlan mediante Googlebot, indexabilidad y controles de snippets como `nosnippet`, `data-nosnippet`, `max-snippet` o `noindex`. `Google-Extended` no debe tratarse como mecanismo principal para controlar aparicion en AI Overviews o AI Mode.

---

## Fuera de alcance en esta fase

- crear imagenes OG dedicadas por pagina
- estrategia SEO para un dominio custom final no decidido
- optimizacion SEO avanzada por keyword research
- schema markup especifico por tipo de pagina mas alla del baseline utilizable
- matriz SEO completa para `/blog/category/[category]/`
