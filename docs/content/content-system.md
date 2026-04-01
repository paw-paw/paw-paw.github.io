# Content System

## Estado

- Tipo: `contractual`
- Fase inicial: `2`
- Estado: `done`
- Ultima actualizacion: `2026-03-18`

---

## Objetivo

Definir las entidades de contenido del portfolio, sus reglas de uso y la frontera entre dato estructurado, copy compuesto y contenido descartado.

Este documento no contiene el copy final aprobado.

Este documento define desde `Bloque 3` la entidad editorial `blog_post` como parte del sistema contractual del sitio.

---

## Principios del sistema

- la tesis principal conecta `business development`, `partnerships` y `project delivery`
- la tesis puede distribuirse entre `hero`, `Work`, `Experience` y `Contact` cuando la cadencia visual obligue a comprimir una superficie puntual
- `Selected Work` y `Experience` son pilares equivalentes de evidencia
- `Blog` amplifica autoridad y posicionamiento experto sin reemplazar la evidencia principal
- `operations` aporta soporte y credibilidad operativa, no liderazgo narrativo
- `Skills` apoya, pero no lidera el relato
- `Education` aporta credibilidad y contexto, no define la tesis
- el sitio prioriza evidencia defendible sobre exhaustividad
- la narrativa debe ser comprensible para audiencias especializadas y no especializadas

---

## Entidades internas del portfolio

### `hero`

Proposito:

- presentar positioning
- expresar promesa de valor
- orientar a la CTA principal

Debe incluir:

- headline o thesis line
- subheadline o supporting statement
- lenguaje capaz de expresar el puente entre business development, partnerships y project delivery, ya sea dentro del headline o distribuido entre headline, supporting statement y jerarquia top-level adyacente
- CTA principal
- CTA secundaria si aporta claridad

No debe incluir:

- bio exhaustiva
- listas largas de herramientas
- claims grandilocuentes no defendibles
- una compresion tan agresiva que convierta el perfil en puro `project delivery` sin señales visibles de contexto comercial o de partnerships en el mismo recorrido top-level

### `how_i_work`

Proposito:

- explicar el metodo operativo
- dar una capa de interpretacion sobre como se ejecuta el trabajo

Debe incluir:

- 3 a 4 principios o patrones operativos
- lenguaje orientado a ejecucion, claridad y ownership

No debe incluir:

- values abstractos sin traduccion operativa
- promesas de marca vagas

### `selected_work_preview`

Proposito:

- mostrar una vista breve de casos seleccionados
- empujar a `/work`

Debe incluir:

- seleccion breve de casos
- imagen o header visual cuando exista asset aprobado
- nombre
- contexto corto
- rol o angle de ejecucion comercial / operativa
- CTA a pagina profunda

No debe incluir:

- desarrollo completo del caso
- copy final exhaustivo

### `selected_work_case_study`

Proposito:

- ser la unidad minima de evidencia de proyecto o caso

Estructura contractual minima:

- imagen o header visual cuando exista asset aprobado
- nombre del caso
- contexto breve
- rol, incluyendo cuando aplique su dimension partner-facing o comercial
- objetivo o challenge
- scope y responsabilidades
- execution o approach, incluyendo cuando aplique restricciones comerciales o de partnerships
- resultado o evidencia, incluyendo cuando aplique traduccion de oportunidad comercial a delivery ejecutable
- herramientas, colaboradores o stakeholders si aportan contexto

No debe incluir:

- claims no sustentados
- exceso de detalle que convierta el caso en archivo bruto
- visuales decorativos sin relacion con el caso representado

Regla visual-estructural:

- cuando exista asset aprobado, `selected_work_case_study` debe poder renderizar una imagen/header del proyecto
- `selected_work_preview` puede usar una version reducida del mismo patron
- el tratamiento visual puede usar overlay o tinte reversible desde UI, no baked-in dentro del asset
- el sistema no debe depender de `temp/` en runtime

### `experience_preview`

Proposito:

- resumir trayectoria relevante
- empujar a `/experience`

Debe incluir:

- seleccion breve de roles o hitos
- identificador visual de empresa cuando exista asset aprobado
- titulo del rol
- organizacion
- location
- work mode
- contexto corto
- angle de ownership, delivery o partner-facing execution

### `experience_item`

Proposito:

- unidad base de trayectoria profesional mostrable

Debe incluir:

- identificador visual de empresa cuando exista asset aprobado
- rol
- organizacion
- periodo
- location
- work mode
- contexto, incluyendo cuando aplique business development, partnerships o handoff comercial
- highlights o pruebas de ownership, delivery o ejecucion con partners

No debe incluir:

- una lista de tareas sin framing
- detalle historico innecesario
- logos decorativos sin relacion con la empresa representada

Regla visual-estructural:

- cuando exista asset aprobado, `experience_item` debe poder renderizar un logo de empresa
- el logo funciona como identificador contextual, no como elemento protagonista
- el sistema debe soportar variantes `light` / `dark` y `allmode` sin depender de `temp/` en runtime
- la preview de experiencia en home puede usar una version reducida del mismo patron
- la metadata visible debe poder separar `period`, `location` y `work mode` en lineas distintas cuando el layout lo requiera

### `skills_cluster`

Proposito:

- agrupar capacidades y strengths de manera interpretable

Debe incluir:

- label de cluster
- descripcion breve
- capacidades, herramientas o proof points asociados

No debe incluir:

- inventarios largos sin relacion con la tesis
- taxonomia pensada solo para CV ATS

### `contact_channel`

Proposito:

- ofrecer contacto publico intencional

Canales permitidos en la pagina dedicada de contacto, segun politica vigente:

- email
- LinkedIn
- Instagram

Canales no permitidos por defecto:

- telefono
- direccion exacta
- datos sensibles

### `contact_page`

Proposito:

- concentrar la conversion profesional final
- introducir los canales publicos aprobados sin ruido adicional

Puede incluir:

- headline y subheadline breves
- retrato o asset square aprobado embebido dentro del mismo bloque intro
- refuerzo visual consistente con el `hero`, siempre que el bloque no se convierta en una pseudo pagina `about`

No debe incluir:

- storytelling autobiografico largo
- un asset heroico que opaque el canal principal de contacto
- datos o claims no relacionados con conversion

### `footer_cta`

Proposito:

- cerrar la home reforzando la CTA secundaria

Debe incluir:

- headline breve
- supporting line
- CTA hacia `/contact`

No debe competir con:

- `hero`
- `selected_work_preview`

### `blog_post`

Proposito:

- ser la unidad minima de publicacion editorial del blog
- traducir experiencia, criterio y aprendizaje profesional en piezas defendibles
- complementar `Selected Work` y `Experience` sin reemplazarlos

Metadata contractual obligatoria:

- `title`
- `excerpt`
- `publish_date`
- `category`
- `locale`
- `status`
- `reading_time`
- `featured`
- `header_image`

Contenido contractual minimo:

- `header_image` obligatoria
- `body` como contenido principal compuesto del post

Identidad de ruta obligatoria:

- cada post debe resolver a un `slug` canonico utilizable en `/blog/[slug]`
- ese `slug` puede venir de metadata explicita o derivarse del entry path definido por la fuente local del blog
- la implementacion no debe requerir duplicar un `slug` en frontmatter si la fuente ya lo resuelve de forma estable

Reglas de estructura:

- cada post debe pertenecer a una sola `category` primaria
- `category` debe tomarse de una lista controlada aprobada por el sistema
- la lista controlada inicial es:
  - `project-delivery`
  - `bd-and-partnerships`
  - `operations`
  - `career-and-industry-lessons`
- por locale puede existir como maximo un solo post `featured` publicado
- si un locale supera un `featured`, la build debe fallar
- el `blog index` puede usar ese `featured` singular como teaser lateral editorial en el intro
- el teaser del `featured` debe ser visualmente dominante y mas compacto que una `blog card` completa
- el teaser puede omitir excerpt y metadata larga si el post completo ya aparece mas abajo en la grilla general
- si un locale aun no tiene posts publicados, el intro puede conservar la columna lateral con placeholder minimo no interactivo
- el cuerpo del post no exige todavia sub-bloques internos obligatorios
- el sistema debe permitir posts sin equivalente exacto en el otro locale

Reglas editoriales:

- el post debe responder a la tesis aprobada del portfolio
- debe sostener claims con experiencia, observacion o criterio defendible
- no debe convertirse en opinionismo amplio, diario personal ni contenido motivacional generico
- debe poder convivir con fallback de locale hacia el `blog index` del locale destino cuando no exista equivalente

No debe incluir:

- taxonomias adicionales no aprobadas
- `series`
- metadata pensada solo para automatizaciones externas
- estructura interna excesivamente rigida antes de validarla en implementacion

---

## Reglas de copy

- el copy debe sonar claro, sobrio y evidence-led
- evitar jergas de nicho sin traduccion minima
- evitar tono autocelebratorio o inflado
- cada entidad debe tener una funcion narrativa clara
- una seccion no debe repetir literalmente el trabajo de otra

---

## Claims permitidos

Se permiten claims que:

- puedan defenderse con experiencia o proyectos reales
- expresen ownership, coordinacion, delivery o resultados con contexto
- traduzcan criterio editorial en aprendizaje profesional util
- traduzcan evidencia de `truth` a lenguaje claro

Se restringen claims que:

- dependan de superlativos vagos
- prometan seniority o alcance no sustentado
- exageren metricas o impacto

---

## Consistencia entre entidades clave

### `hero` <-> `selected_work_preview`

- el hero promete capacidad
- `selected_work_preview` muestra evidencia compatible con esa promesa

### `hero` <-> `experience_preview`

- el hero plantea tesis
- `experience_preview` la sostiene con trayectoria

### `hero` <-> `footer_cta`

- `hero` empuja primero a `/work`
- `footer_cta` cierra empujando a `/contact`

### `navigation` <-> paginas internas

- la navegacion debe reflejar superficies reales del sitio
- no debe anunciar una arquitectura que no exista

### `blog_post` <-> `Selected Work` / `Experience`

- `blog_post` amplifica criterio, aprendizaje y posicionamiento experto
- `Selected Work` y `Experience` siguen sosteniendo la evidencia principal del perfil
- el blog no debe reemplazar casos ni trayectoria cuando la evidencia operativa sea la superficie correcta

### `contact page` <-> politica de visibilidad

- la pagina de contacto debe concentrar los canales publicos habilitados
- la home ya no debe duplicar ese bloque completo
- no debe reintroducir telefono ni datos sensibles

---

## Dato estructurado vs copy compuesto

### Debe vivir en dato estructurado futuro (`src/data/`)

- selected work items
- experience items
- skills clusters
- education items si se usan
- identity/contact channels publicables
- idiomas
- blog posts
- categorias editoriales del blog

### Puede vivir como copy compuesto

- thesis line del hero
- supporting statements
- mensajes por audiencia
- subtitulos de seccion
- framing editorial de previews

### Debe descartarse o quedar fuera del runtime

- metadata editorial propia del schema original de `truth`
- `selection_policy`
- CV packs y estructuras ATS
- datos sensibles o privados
- detalle historico que no aporte al portfolio

---

## Uso de `truth`

- `truth` alimenta entidades a traves de mapping y curacion
- `truth` no se consume directo desde la app
- el formato de `truth` no define el formato del portfolio
- la salida normalizada futura vivira en `src/data/`
