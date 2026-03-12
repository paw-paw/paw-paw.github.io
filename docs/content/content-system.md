# Content System

## Estado

- Tipo: `contractual`
- Fase inicial: `2`
- Estado: `done`
- Ultima actualizacion: `2026-03-12`

---

## Objetivo

Definir las entidades de contenido del portfolio, sus reglas de uso y la frontera entre dato estructurado, copy compuesto y contenido descartado.

Este documento no contiene el copy final aprobado.

---

## Principios del sistema

- la tesis principal es `delivery / operations first`
- `Selected Work` y `Experience` son pilares equivalentes de evidencia
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
- nombre
- contexto corto
- rol o angle operativo
- CTA a pagina profunda

No debe incluir:

- desarrollo completo del caso
- copy final exhaustivo

### `selected_work_case_study`

Proposito:

- ser la unidad minima de evidencia de proyecto o caso

Estructura contractual minima:

- nombre del caso
- contexto breve
- rol
- objetivo o challenge
- scope y responsabilidades
- execution o approach
- resultado o evidencia
- herramientas, colaboradores o stakeholders si aportan contexto

No debe incluir:

- claims no sustentados
- exceso de detalle que convierta el caso en archivo bruto

### `experience_preview`

Proposito:

- resumir trayectoria relevante
- empujar a `/experience`

Debe incluir:

- seleccion breve de roles o hitos
- titulo del rol
- organizacion
- contexto corto
- angle de ownership o delivery

### `experience_item`

Proposito:

- unidad base de trayectoria profesional mostrable

Debe incluir:

- rol
- organizacion
- periodo
- contexto
- highlights o pruebas de ownership / delivery

No debe incluir:

- una lista de tareas sin framing
- detalle historico innecesario

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

Canales permitidos en la home, segun politica vigente:

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
- CTA hacia `#contact`

No debe competir con:

- `hero`
- `selected_work_preview`

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
- `footer_cta` cierra empujando a `#contact`

### `navigation` <-> paginas internas

- la navegacion debe reflejar superficies reales del sitio
- no debe anunciar una arquitectura que no exista

### `contact` <-> politica de visibilidad

- la seccion de contacto debe respetar la politica de publicabilidad vigente
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
