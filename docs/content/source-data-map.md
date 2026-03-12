# Source Data Map

## Estado

- Tipo: `auxiliar`
- Fase inicial: `1`
- Estado: `done`
- Ultima actualizacion: `2026-03-12`

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

- Resueltas en `Fase 1`. Ver decisiones mas abajo.

---

## Preguntas que deben resolverse en Fase 2

- Resueltas en `Fase 2`. Ver mapping estructural mas abajo.

---

## Decisiones cerradas en Fase 1

### Rol estrategico de `truth`

- `temp/truth/` se usa para validar estrategia, detectar evidencia util y definir exclusiones.
- `temp/truth/` no se usa todavia para seleccionar items finales por seccion.
- `temp/truth/` no se convierte en copy aprobado ni en input directo de implementacion.

### Nivel de fidelidad

- El portfolio exige fidelidad alta en hechos.
- La seleccion y el framing seran fuertemente curados.
- El objetivo no es representar todo el archivo personal, sino una narrativa profesional coherente.

### Politica general de inclusion

Entran al portfolio, a nivel estrategico:

- `summary.md` como insumo narrativo de posicionamiento
- `experience/` como pilar de evidencia
- `projects/` como pilar equivalente de evidencia
- `skills/` como soporte de capacidades y clusters de expertise
- `education/` como soporte de credibilidad y contexto, no como eje narrativo
- partes seleccionadas de `personal.yaml` para identidad profesional y canales de contacto intencionales

Quedan fuera o relegados:

- `*.Zone.Identifier`
- `_schema.md` como fuente de contenido del sitio
- datos sensibles o innecesariamente privados
- exhaustividad historica por defecto
- metadata editorial del schema original que no aporte al portfolio publicado

### Evidencia vs archivo personal

Cuenta como evidencia util:

- ownership de delivery
- operaciones complejas
- coordinacion cross-functional
- handoff entre negocio y ejecucion
- resultados, volumen, escala o indicadores defendibles
- trabajo con stakeholders, vendors, talento o partners

Cuenta como archivo personal o soporte secundario:

- detalle historico exhaustivo
- items verdaderos pero no diferenciales
- datos personales no necesarios para credibilidad o contacto
- estructura ATS/CV del schema original

### Politica de publicabilidad por tipo de dato

Por defecto son publicables:

- nombre profesional
- ciudad o pais a nivel general cuando aporte contexto
- LinkedIn
- Instagram
- email profesional o intencional
- idiomas

Por defecto no son publicables sin decision posterior explicita:

- telefono
- direccion exacta
- documentos de identidad
- datos fiscales
- cualquier dato personal sensible

---

## Decisiones cerradas en Fase 2

### Arquitectura objetivo

- la home funciona como `overview estrategico + conversion`
- existen superficies principales `/`, `/work` y `/experience`
- `contact` permanece como ancla en `/`
- la futura capa normalizada del repo vivira en `src/data/`

### Entidades principales del portfolio

- `hero`
- `how_i_work`
- `selected_work_preview`
- `selected_work_case_study`
- `experience_preview`
- `experience_item`
- `skills_cluster`
- `contact_channel`
- `footer_cta`

### Politica de contacto publica actualizada

Canales visibles en home:

- email
- LinkedIn
- Instagram

Canales explicitamente fuera:

- telefono

---

## Mapping estructural `truth -> entidades del portfolio`

### `summary.md`

Alimenta:

- `hero`
- framing editorial de `how_i_work`
- mensajes base de `experience_preview` y `selected_work_preview`

Transformacion:

- resumir
- destilar tesis
- evitar copiar literal el summary largo

### `personal.yaml`

Alimenta:

- `contact_channel`
- identidad base
- idiomas

Campos aceptados:

- nombre profesional
- ubicacion general
- email
- linkedin
- instagram cuando exista como canal publico definido
- idiomas

Campos descartados o no visibles:

- telefono
- cualquier dato sensible adicional

### `experience/`

Alimenta:

- `experience_item`
- `experience_preview`
- claims de `hero` y `how_i_work` cuando corresponda

Transformacion:

- seleccionar roles relevantes
- condensar highlights
- traducir lenguaje de CV a evidencia narrativa de portfolio

### `projects/`

Alimenta:

- `selected_work_case_study`
- `selected_work_preview`

Transformacion:

- seleccionar casos relevantes
- sintetizar challenge, scope, execution y result
- evitar copiar el schema de CV o archivo original

### `skills/`

Alimenta:

- `skills_cluster`

Transformacion:

- agrupar por capability cluster
- evitar listas largas de herramientas sin contexto

### `education/`

Alimenta:

- soporte de credibilidad
- posibles elementos secundarios de experiencia o about futuro

Transformacion:

- uso selectivo
- no convertir education en eje de home

### `_schema.md`

Alimenta:

- solo entendimiento del modelo original

Se descarta de runtime:

- `selection_policy`
- CV packs
- estructura ATS
- cualquier metadata editorial que no aporte al sitio

---

## Inventario inicial de categorias

### `personal.yaml`

Posible uso:

- identidad base
- biografia
- datos de contacto
- idiomas

Decision de `Fase 1`:

- entra de forma parcial
- sirve para identidad profesional y politica de visibilidad
- telefono y cualquier dato sensible quedan fuera por defecto

### `education/`

Posible uso:

- timeline academico
- credenciales
- contexto de formacion

Decision de `Fase 1`:

- entra como soporte de credibilidad
- no define la tesis central del portfolio
- el nivel de detalle y la seleccion exacta quedan para `Fase 2`

### `experience/`

Posible uso:

- experiencia profesional
- narrativa de carrera
- logros y responsabilidades

Decision de `Fase 1`:

- entra como pilar de evidencia
- sostiene la narrativa principal de delivery / operations
- la forma final de representacion queda para `Fase 2`

### `projects/`

Posible uso:

- case studies
- proof of execution
- selected work

Decision de `Fase 1`:

- entra como pilar equivalente de evidencia respecto a `experience/`
- no sustituye la tesis principal del portfolio
- su seleccion final y estructura contractual quedan para `Fase 2`

### `skills/`

Posible uso:

- clusters de capacidades
- proof points de expertise
- soporte para secciones de services o strengths

Decision de `Fase 1`:

- entra como soporte para clusters de capacidad y lenguaje de strengths
- no debe convertirse en lista aislada sin evidencia
- la taxonomia final queda para `Fase 2`

### `summary.md`

Posible uso:

- insumo narrativo para posicionamiento
- insumo para bio corta o descripcion del perfil

Decision de `Fase 1`:

- entra como insumo narrativo fuerte para posicionamiento
- no funciona como copy aprobado
- debe tensionarse contra la tesis del portfolio, no copiarse literal

### `_schema.md`

Posible uso:

- entender el modelo original de la fuente

Decision de `Fase 1`:

- sirve solo para entender el modelo original
- no debe sobrevivir al portfolio como estructura visible
- formatos de CV packs, selection policies y metadata editorial no deben transferirse automaticamente al sitio

---

## Regla de salida

Antes de llegar a implementacion, cualquier uso de `truth` debe convertirse en una salida normalizada propia del repo.

Esa salida todavia no esta definida y dependera de:

- `strategy/portfolio-strategy.md`
- `architecture/site-architecture.md`
- `content/content-system.md`

Hasta entonces, `temp/truth/` debe tratarse solo como material de analisis y apoyo.
