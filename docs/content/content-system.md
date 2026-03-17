# Content System

## Estado

- Tipo: `contractual`
- Fase inicial: `2`
- Estado: `done`
- Ultima actualizacion: `2026-03-14`

---

## Objetivo

Definir las entidades de contenido del portfolio, sus reglas de uso y la frontera entre dato estructurado, copy compuesto y contenido descartado.

Este documento no contiene el copy final aprobado.

---

## Principios del sistema

- la tesis principal conecta `business development`, `partnerships` y `project delivery`
- `Selected Work` y `Experience` son pilares equivalentes de evidencia
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
- lenguaje capaz de expresar el puente entre business development, partnerships y project delivery
- CTA principal
- CTA secundaria si aporta claridad

No debe incluir:

- bio exhaustiva
- listas largas de herramientas
- claims grandilocuentes no defendibles

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
