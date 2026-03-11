# Source Data Map

## Estado

- Tipo: `auxiliar`
- Fase inicial: `1`
- Estado: `draft`
- Ultima actualizacion: `2026-03-11`

---

## Objetivo

Definir como se interpreta y transforma una fuente externa cruda antes de que influya en la arquitectura, el sistema de contenido o la implementacion del portfolio.

Este documento no sustituye a `content/content-system.md`, `content/content-master.md` ni a la estrategia del portfolio.

---

## Fuente externa actual

La fuente externa actualmente disponible es:

- `temp/truth/`

Su contenido observado incluye:

- `_schema.md`
- `summary.md`
- `personal.yaml`
- `education/`
- `experience/`
- `projects/`
- `skills/`

Tambien existen archivos `*.Zone.Identifier`, que no forman parte de la fuente util.

---

## Rol dentro del repo

- `temp/truth/` es una fuente upstream cruda.
- `temp/truth/` no es contractual.
- `temp/truth/` no debe consumirse directamente desde `src/`.
- `temp/truth/` no define por si solo la narrativa, arquitectura o copy del portfolio.
- `docs/` sigue siendo la fuente de verdad principal.

---

## Reglas de precedencia

- Si `temp/truth/` contradice `docs/README.md`, manda `docs/README.md`.
- Si `temp/truth/` contradice un documento contractual, manda el documento contractual.
- `content/content-master.md` sera la version canonica aprobada del contenido aunque use `truth` como apoyo.
- Ninguna categoria o campo de `truth` entra al sitio sin pasar antes por decision estrategica y mapeo estructural.

---

## Preguntas que deben resolverse en Fase 1

- ¿Que categorias de `truth` aportan valor real al portfolio?
- ¿Que categorias deben quedar fuera del sitio aunque sean ciertas?
- ¿Que nivel de fidelidad historica necesita el portfolio para cumplir su objetivo?
- ¿Que datos funcionan como prueba de credibilidad y cuales solo como archivo personal?

---

## Preguntas que deben resolverse en Fase 2

- ¿Que entidades internas del portfolio existen realmente?
- ¿Que categorias de `truth` alimentan hero, about, skills, timeline/experience, case studies, CTA o social proof?
- ¿Que campos deben transformarse, resumirse o combinarse?
- ¿Que datos pasan a una capa normalizada propia del repo y cuales quedan solo como referencia?

---

## Inventario inicial de categorias

### `personal.yaml`

Posible uso:

- identidad base
- biografia
- datos de contacto
- idiomas

Pendiente:

- decidir que partes son publicables
- decidir que partes son solo referencia privada

### `education/`

Posible uso:

- timeline academico
- credenciales
- contexto de formacion

Pendiente:

- decidir nivel de detalle
- decidir si todas las entradas viven en timeline o solo una seleccion

### `experience/`

Posible uso:

- experiencia profesional
- narrativa de carrera
- logros y responsabilidades

Pendiente:

- decidir si se muestra como timeline, resume, cases o combinacion

### `projects/`

Posible uso:

- case studies
- proof of execution
- selected work

Pendiente:

- decidir cuales proyectos son portfolio-worthy
- decidir estructura contractual minima por proyecto

### `skills/`

Posible uso:

- clusters de capacidades
- proof points de expertise
- soporte para secciones de services o strengths

Pendiente:

- decidir taxonomia final del sitio
- decidir que queda como skill, capability o proof point

### `summary.md`

Posible uso:

- insumo narrativo para posicionamiento
- insumo para bio corta o descripcion del perfil

Pendiente:

- decidir si es solo referencia o si alimenta copy compuesto

### `_schema.md`

Posible uso:

- entender el modelo original de la fuente

Pendiente:

- decidir que partes del schema original no deben sobrevivir al portfolio

---

## Regla de salida

Antes de llegar a implementacion, cualquier uso de `truth` debe convertirse en una salida normalizada propia del repo.

Esa salida todavia no esta definida y dependera de:

- `strategy/portfolio-strategy.md`
- `architecture/site-architecture.md`
- `content/content-system.md`

Hasta entonces, `temp/truth/` debe tratarse solo como material de analisis y apoyo.
