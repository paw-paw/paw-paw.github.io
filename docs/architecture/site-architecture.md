# Site Architecture

## Estado

- Tipo: `contractual`
- Fase inicial: `2`
- Estado: `done`
- Ultima actualizacion: `2026-03-12`

---

## Objetivo

Definir la estructura del sitio, sus superficies principales y el rol de cada pagina antes de entrar a contenido final, visual o implementacion de datos.

Esta arquitectura debe reforzar la tesis:

- delivery / operations first
- evidencia repartida entre `Selected Work` y `Experience`
- home como overview estrategico + conversion

---

## Mapa de paginas

### Paginas principales

- `/`
- `/work`
- `/experience`

### Paginas utilitarias o derivadas

- no se crea `/contact` como pagina propia en esta fase
- `contact` vive como seccion anclada en `/`
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
- como trabajas
- por que confiar en tu evidencia
- donde profundizar (`/work`, `/experience`)
- como iniciar contacto

### `/work`

Rol:

- superficie principal para `Selected Work / Case Studies`
- expansion de la CTA principal `View selected work`

Debe responder:

- que casos o proyectos seleccionados prueban mejor el perfil
- que tipo de trabajo has liderado o entregado
- como se expresa la ejecucion en casos concretos

### `/experience`

Rol:

- superficie principal para trayectoria profesional y experiencia relevante

Debe responder:

- que roles y contextos sostienen la tesis del portfolio
- como evoluciona tu experiencia en delivery / operations
- que evidencia de ownership y coordinacion aparece en la carrera

---

## Estructura de la home

La home es una `overview page`, no una one-page exhaustiva.

Orden final:

1. `Hero`
2. `How I Work`
3. `Selected Work` preview
4. `Experience` preview
5. `Skills`
6. `Contact`
7. `FooterCTA`

Principio:

- la home presenta
- las paginas internas profundizan

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

### `Contact`

Estado:

- se mantiene en home como ancla

Funcion:

- ofrecer superficie practica de contacto
- debe alinearse con la politica de visibilidad publica vigente

### `FooterCTA`

Estado:

- se mantiene en home

Funcion:

- reforzar la CTA secundaria
- cerrar la pagina empujando a conversacion
- apuntar a `#contact`

---

## Navegacion principal

### Navbar

La navegacion principal debe dejar de ser puramente one-page.

Items base:

- `Home` -> `/`
- `Work` -> `/work`
- `Experience` -> `/experience`
- `Contact` -> `/#contact`

### Anchors

Solo se consideran anchors base en `/`:

- `#contact`

Pueden existir otros anchors de seccion como detalle interno, pero no son obligatorios para la navegacion principal.

---

## Superficies que no sobreviven como estaban

- `Values` no sobrevive con ese nombre ni con su funcion actual
- `Timeline` no sobrevive con ese nombre ni con su funcion actual
- `Projects` no sobrevive con ese nombre ni con su estructura heredada
- la arquitectura puramente one-page deja de ser la verdad del sitio

---

## Paginas y secciones no comprometidas en esta fase

No se compromete en esta fase la existencia de:

- `/about`
- `/resume`
- `/contact` como pagina dedicada

Estas superficies podran evaluarse despues si la arquitectura real lo necesita.
