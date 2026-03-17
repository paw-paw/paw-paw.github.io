# Site Architecture

## Estado

- Tipo: `contractual`
- Fase inicial: `2`
- Estado: `done`
- Ultima actualizacion: `2026-03-16`

---

## Objetivo

Definir la estructura del sitio, sus superficies principales y el rol de cada pagina antes de entrar a contenido final, visual o implementacion de datos.

Esta arquitectura debe reforzar la tesis:

- business development, partnerships y project delivery como puente principal
- evidencia repartida entre `Selected Work` y `Experience`
- `Blog` como superficie editorial de autoridad y posicionamiento experto
- home como overview estrategico + conversion

---

## Mapa de paginas

Nota:

- las rutas reales activas deben respetar la politica de prefijos definida en `docs/architecture/i18n-spec.md`
- las rutas listadas aqui expresan la arquitectura conceptual minima del sitio

### Paginas principales

- `/`
- `/work`
- `/experience`
- `/blog`
- `/contact`

### Paginas utilitarias o derivadas

- `/blog/[slug]`
- `/blog/category/[category]`
- paginas futuras posibles, pero no comprometidas en esta fase:
  - `/about`
  - `/resume`

---

## Rol de cada pagina

### `/`

Rol:

- overview estrategico del perfil
- entrada principal del sitio
- superficie de conversion

Debe responder:

- quien eres
- por que confiar en tu evidencia
- donde profundizar (`/work`, `/experience`)
- como iniciar contacto o conversacion

### `/contact`

Rol:

- superficie dedicada de conversion
- punto unico de contacto publico

Debe responder:

- como iniciar una conversacion profesional
- que canales publicos estan habilitados
- que expectativa de contacto o seguimiento tiene sentido

### `/blog`

Rol:

- superficie editorial principal del sitio
- capa de autoridad, criterio y posicionamiento experto
- complemento de `Work` y `Experience`, no su reemplazo

Debe responder:

- que ideas o aprendizajes convierten tu experiencia en criterio profesional visible
- como conectas business development, partnerships y project delivery en piezas editoriales defendibles
- donde profundizar por post o por categoria

### `/blog/[slug]`

Rol:

- superficie de detalle editorial del blog
- unidad minima de publicacion profesional

Debe responder:

- cual es la idea principal del post
- que evidencia, experiencia o criterio sostiene esa idea
- como se conecta esa pieza con la tesis general del portfolio

### `/blog/category/[category]`

Rol:

- superficie secundaria de agrupacion editorial
- punto de entrada por tema dentro del blog

Debe responder:

- que posts pertenecen a una misma categoria
- que patron editorial o profesional conecta esas piezas
- como descubrir contenido relacionado sin reemplazar al `blog index`

### `/work`

Rol:

- superficie principal para `Selected Work / Case Studies`
- expansion de la CTA principal `View selected work`

Debe responder:

- que casos o proyectos seleccionados prueban mejor el perfil
- que tipo de trabajo has liderado o entregado
- como se expresa la ejecucion en casos concretos con contexto comercial o partner-facing cuando aplique

### `/experience`

Rol:

- superficie principal para trayectoria profesional y experiencia relevante

Debe responder:

- que roles y contextos sostienen la tesis del portfolio
- como evoluciona tu experiencia desde operations hacia partnerships, business development y project delivery
- que evidencia de ownership y coordinacion aparece en la carrera

---

## Estructura de la home

La home es una `overview page`, no una one-page exhaustiva.

Orden final:

1. `Hero`
2. `Selected Work` preview
3. `Experience` preview
4. `How I Work`
5. `Skills`
6. `FooterCTA`

Principio:

- la home presenta
- las paginas internas profundizan
- `Blog` vive como superficie principal independiente y no como bloque obligatorio dentro de la home

---

## Arquitectura de secciones

### `Hero`

Estado:

- se mantiene

Funcion:

- presentar tesis, promesa de valor y CTA principal
- empujar a `/work`

### `How I Work`

Estado:

- reemplaza a `Values`

Funcion:

- explicar metodo operativo
- reforzar atributos como estructura, claridad, ownership y confiabilidad

### `Selected Work` preview

Estado:

- reemplaza conceptualmente a `Projects`

Funcion:

- mostrar una seleccion breve de evidencia
- empujar a `/work`

### `Experience` preview

Estado:

- reemplaza a `Timeline`

Funcion:

- mostrar una vista resumida de trayectoria
- empujar a `/experience`

### `Skills`

Estado:

- se mantiene como seccion breve de soporte

Funcion:

- presentar clusters de capacidad
- apoyar la tesis del perfil
- no competir con `Selected Work` ni `Experience`

### `Contact page`

Estado:

- deja de vivir como bloque de home
- sobrevive como pagina dedicada `/contact`

Funcion:

- concentrar la conversion final del sitio
- ofrecer superficie practica de contacto
- respetar la politica de visibilidad publica vigente

### `Blog`

Estado:

- nueva superficie principal del sitio

Funcion:

- ampliar el posicionamiento experto del portfolio con piezas editoriales defendibles
- complementar `Work` y `Experience` con sintesis, criterio y aprendizaje aplicado
- soportar discoverability editorial sin desplazar la evidencia principal del perfil

### `FooterCTA`

Estado:

- se mantiene en home

Funcion:

- reforzar la CTA secundaria
- cerrar la pagina empujando a conversacion
- apuntar a `/contact`

---

## Navegacion principal

### Navbar

La navegacion principal debe dejar de ser puramente one-page.

Items base:

- `Home` -> `/`
- `Work` -> `/work`
- `Experience` -> `/experience`
- `Blog` -> `/blog`
- `Contact` -> `/contact`

### Anchors

No existe ya un anchor base obligatorio de `contact` en `/`.

Pueden existir anchors internos como detalle de implementacion, pero no forman parte de la navegacion principal.

---

## Superficies que no sobreviven como estaban

- `Values` no sobrevive con ese nombre ni con su funcion actual
- `Timeline` no sobrevive con ese nombre ni con su funcion actual
- `Projects` no sobrevive con ese nombre ni con su estructura heredada
- la arquitectura puramente one-page deja de ser la verdad del sitio

## Superficies editoriales comprometidas en esta fase

- `Blog` entra como superficie principal de navegacion
- `blog index` y `blog post detail` forman parte de la arquitectura minima comprometida
- `category` existe como superficie secundaria del blog, no como item principal de navegacion
- no se comprometen en esta fase archives adicionales, `series`, paginacion, breadcrumbs ni navegacion editorial secundaria

---

## Paginas y secciones no comprometidas en esta fase

No se compromete en esta fase la existencia de:

- `/about`
- `/resume`

Estas superficies podran evaluarse despues si la arquitectura real lo necesita.
