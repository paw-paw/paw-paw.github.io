# Phase Plan

Usa este plan para ejecutar el Bloque 0 del roadmap de Sprint 2.

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

Antes de usarlo:

- confirma que `docs/plans/sprint-2/roadmap.md` sigue siendo el roadmap activo para esta etapa
- revisa `docs/README.md`
- revisa los contratos actuales que hoy fijan la tesis y el sistema de contenido
- ejecuta este bloque en modo altamente interactivo, con checkpoints de aprobacion explicitos

---

## Metadatos

- Fase: `Sprint 2 - Bloque 0 - Strategic Fit for Professional Blog`
- Estado: `done`
- Ultima actualizacion: `2026-03-16`
- Owner: `pawpaw + Codex`
- Depende de:
  - `docs/README.md`
  - `docs/plans/sprint-2/roadmap.md`
  - `docs/strategy/portfolio-strategy.md`
  - `docs/content/content-system.md`
  - decisiones interactivas ya tomadas para este bloque
- Desbloquea:
  - cierre estrategico del rol del blog dentro del portfolio
  - insumos aprobados para ajustar `portfolio-strategy` y `content-system`
  - `Bloque 1` del roadmap de Sprint 2

---

## 1. Objetivo de la fase

Esta fase debe resolver si el blog profesional refuerza de forma clara la estrategia del portfolio y bajo que reglas debe hacerlo. Al cerrarla debe existir una direccion aprobada donde `project management / delivery` y `business development / partnerships` queden como ejes principales, `operations` quede como soporte, el blog tenga una audiencia priorizada, lineas tematicas aprobadas, politica de idioma definida y una cadencia editorial objetivo validada. Tambien debe quedar preparado el terreno para revisar y actualizar despues los contratos de estrategia y contenido sin improvisar en runtime.

---

## 2. Fuente de verdad aplicable

- `docs/README.md`
- roadmap activo o historico aplicable en `docs/plans/`:
  - `docs/plans/sprint-2/roadmap.md`
  - `docs/plans/roadmap-template.md`
  - `docs/plans/phase-template.md`
- documentos contractuales aplicables:
  - `docs/strategy/portfolio-strategy.md`
  - `docs/content/content-system.md`
- documentos auxiliares aplicables:
  - `docs/governance/decision-log.md`
  - `docs/content/content-master.md`

Nota:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- este plan no puede contradecir documentos contractuales
- este bloque no debe cerrar cambios de arquitectura, i18n, SEO o runtime sin pasar por los bloques posteriores

---

## 3. Inputs requeridos

### Documentos

- [x] `docs/README.md`
- [x] `docs/plans/sprint-2/roadmap.md`
- [x] `docs/strategy/portfolio-strategy.md`
- [x] `docs/content/content-system.md`
- [x] `docs/governance/decision-log.md`

### Decisiones previas

- [x] prioridad narrativa aprobada: `project management / delivery` + `business development / partnerships`, con `operations` como soporte
- [x] audiencia inicial aprobada: hiring managers y founders con sensibilidad comercial como audiencia primaria, con networking y recruiters como capas secundarias
- [x] lineas tematicas aprobadas para explorar: `delivery`, `operations`, `partnerships`, `business development bridge`, aprendizajes transferibles desde gaming/esports
- [x] politica editorial inicial del blog: idioma flexible por post
- [x] regla de fallback preferida para posts sin equivalente de locale: caer al index del blog o a la home del locale destino
- [x] cadencia a validar: quincenal
- [x] alcance documental de este bloque: revisar y preparar cambios para `portfolio-strategy` y `content-system`; dejar arquitectura, i18n y SEO para `Bloque 1`

### Estado tecnico

- [x] no se requiere tocar runtime en esta fase
- [x] el sitio publicado sigue operando bajo la arquitectura vigente sin blog activo
- [x] cualquier impacto tecnico detectado debe registrarse como input para `Bloque 1`, no resolverse aqui por defecto

---

## 4. Entregables documentales

### Crear

- [x] `docs/plans/sprint-2/block-0.md`
- [x] resumen aprobado de decisiones estrategicas del bloque dentro de este mismo documento o en la conversacion de trabajo

### Actualizar

- [x] `docs/governance/decision-log.md` al cierre del bloque, si las decisiones quedan aprobadas
- [x] preparar redlines o cambios propuestos para `docs/strategy/portfolio-strategy.md`
- [x] preparar redlines o cambios propuestos para `docs/content/content-system.md`

### No tocar

- [ ] `docs/architecture/site-architecture.md`
- [ ] `docs/architecture/i18n-spec.md`
- [ ] `docs/delivery/seo-spec.md`
- [ ] `docs/delivery/deployment.md`
- [ ] cualquier archivo de `src/`, `public/` o configuracion de runtime, salvo que se detecte una urgencia no prevista y se acuerde explicitamente

---

## 5. Alcance de implementacion

### Si entra

- [x] analisis estrategico del encaje del blog dentro del portfolio
- [x] revision critica de la tesis actual frente al nuevo peso de `partnerships / business development`
- [x] definicion de audiencia principal y secundarias del blog
- [x] definicion de lineas tematicas y limites editoriales
- [x] definicion de politica operativa de idioma flexible por post
- [x] validacion de una cadencia quincenal realista
- [x] preparacion de cambios propuestos para contratos de estrategia y contenido

### No entra

- [ ] implementacion de rutas del blog
- [ ] cambios en navbar, paginas o componentes
- [ ] schema final de `blog_post`
- [ ] reglas finales de SEO, canonical o alternates para posts
- [ ] cambios en `LanguageSwitcher` o comportamiento de locale switching
- [ ] publicacion de posts reales o carga de contenido en runtime

---

## 6. Tareas detalladas

### Bloque A - Relectura dirigida de contratos vigentes

- [x] extraer de `portfolio-strategy` la tesis actual, audiencias, tono y CTA que hoy podrian entrar en tension con el blog
- [x] extraer de `content-system` las reglas que hoy limitan o condicionan una expansion hacia blog y `partnerships / business development`
- [x] identificar que partes siguen siendo validas sin cambios y que partes requieren rebalanceo

### Bloque B - Reframing estrategico interactivo

- [x] presentar una formulacion recomendada de tesis ajustada para el portfolio completo
- [x] presentar alternativas acotadas cuando la formulacion recomendada no cierre del todo
- [x] cerrar con aprobacion explicita la jerarquia: `delivery` primero, `partnerships / business development` como co-pilar visible, `operations` como soporte
- [x] definir que cambia en la lectura del portfolio durante los primeros 10 segundos

### Bloque C - Audiencia y lineas tematicas del blog

- [x] traducir la audiencia primaria aprobada a necesidades concretas del blog
- [x] definir audiencias secundarias sin quitar foco a la principal
- [x] convertir las lineas tematicas en 3 a 5 pilares editoriales operables
- [x] definir que temas quedan fuera para evitar un blog demasiado generalista

### Bloque D - Politica editorial operativa

- [x] definir como funcionara el idioma flexible por post sin contradecir la experiencia multi-locale del sitio
- [x] fijar la regla de fallback documentada cuando no exista post equivalente en el otro idioma
- [x] validar si una cadencia quincenal es sostenible con el nivel de calidad esperado
- [x] definir condiciones de salida para bajar cadence o pasar a temporadas si la realidad operativa lo exige

### Bloque E - Preparacion de cambios contractuales para bloque siguiente

- [x] redactar lista de cambios propuestos para `portfolio-strategy`
- [x] redactar lista de cambios propuestos para `content-system`
- [x] separar con claridad que cambios son estrategicos, cuales son editoriales y cuales deben esperar a arquitectura/i18n/SEO
- [x] registrar decisiones aprobadas y temas abiertos para `Bloque 1`

### Bloque F - Modo de trabajo interactivo

- [x] trabajar por rondas cortas de decision, no por documento completo de una sola vez
- [x] en cada ronda, presentar una recomendacion y hasta dos alternativas
- [x] pedir aprobacion explicita antes de consolidar decisiones importantes
- [x] no convertir dudas en verdad contractual silenciosa
- [x] si queda un tema sin cerrar, marcarlo como abierto o bloqueado en lugar de asumirlo

Recomendacion:

- usar el orden `tesis -> audiencia -> pilares editoriales -> idioma/fallback -> cadence -> redlines`
- mantener cada ronda lo bastante pequena para que puedas corregir direccion rapidamente

---

## 7. Archivos probables a tocar

### Docs

- `docs/plans/sprint-2/block-0.md`
- `docs/governance/decision-log.md`
- `docs/strategy/portfolio-strategy.md` si al cierre del bloque se decide materializar cambios aprobados
- `docs/content/content-system.md` si al cierre del bloque se decide materializar cambios aprobados

### Codigo

- no se esperan cambios de codigo en esta fase

---

## 8. Dependencias y bloqueos

### Dependencias

- [x] aprobacion explicita del rebalanceo estrategico del portfolio
- [x] acuerdo sobre el rol real de `partnerships / business development` dentro del sitio y del blog
- [x] acuerdo sobre audiencia prioritaria y audiencias secundarias
- [x] acuerdo sobre idioma flexible por post y su fallback
- [x] validacion honesta de si la cadencia quincenal es sostenible

### Bloqueos posibles

- [ ] que el rebalanceo deseado sea mas grande que un ajuste y termine exigiendo reabrir la estrategia base completa
- [ ] que la audiencia mixta se vuelva demasiado amplia y vuelva difusa la funcion del blog
- [ ] que idioma flexible por post choque despues con expectativas del `LanguageSwitcher`
- [ ] que una cadencia quincenal genere deuda editorial o baje calidad demasiado pronto
- [ ] que aparezcan implicaciones de arquitectura o SEO antes de tiempo y desordenen el bloque

### Mitigacion

- resolver primero el encaje estrategico y no tocar runtime
- documentar de forma explicita lo que cambia en estrategia y lo que queda para `Bloque 1`
- tratar el idioma flexible como decision editorial provisional sujeta a aterrizaje tecnico posterior
- validar cadence contra capacidad real de escritura, no contra aspiracion abstracta
- mantener un backlog curado y un perimetro tematico estrecho al inicio

---

## 9. Validaciones

### Documentales

- [x] verificar alineacion con `docs/README.md`
- [x] verificar alineacion con `docs/plans/sprint-2/roadmap.md`
- [x] verificar que no se introdujeron decisiones de arquitectura, i18n, SEO o runtime fuera de contrato
- [x] verificar que el rebalanceo propuesto sigue siendo coherente con evidencia real y no convierte el sitio en un perfil generico

### Tecnicas

- [x] confirmar que no hubo cambios de runtime en esta fase
- [ ] si excepcionalmente se tocara un contrato con impacto tecnico inmediato, dejar la validacion tecnica marcada como pendiente para `Bloque 1`

### Manuales

- [x] revision conjunta de la nueva tesis y del peso relativo entre `delivery`, `partnerships` y `operations`
- [x] revision conjunta de audiencias, pilares editoriales y limites del blog
- [x] revision conjunta de politica de idioma y fallback
- [x] revision conjunta de sostenibilidad editorial para cadence quincenal

---

## 10. Criterio de cierre

La fase solo se considera cerrada si:

- [x] existe una definicion aprobada del rol del blog dentro del portfolio
- [x] queda aprobada la jerarquia estrategica `delivery + partnerships`, con `operations` como soporte
- [x] la audiencia principal y las audiencias secundarias del blog estan priorizadas con claridad
- [x] existen pilares editoriales aprobados y limites tematicos explicitos
- [x] queda definida la politica de idioma flexible por post y su fallback esperado
- [x] queda validada o descartada con razon clara la cadence quincenal
- [x] existen cambios propuestos concretos para `portfolio-strategy` y `content-system`
- [x] quedan listos los insumos para ejecutar `Bloque 1`

---

## 11. Riesgos y notas

### Riesgos

- riesgo de diluir el posicionamiento si `partnerships / business development` desplaza demasiado el eje de ejecucion
- riesgo de que la audiencia amplia lleve a un blog demasiado generalista
- riesgo de prometer una cadence quincenal sin capacidad real de sostenerla
- riesgo de friccion futura entre idioma flexible por post y experiencia de locale switching

### Notas operativas

- este bloque debe correr como una conversacion de trabajo con checkpoints frecuentes
- el objetivo no es redactar todo `portfolio-strategy` o `content-system` de una sola pasada, sino cerrar direccion y preparar cambios
- si una decision cambia de forma material la narrativa general del portfolio, debe registrarse en `decision-log`
- si aparece una implicacion fuerte de arquitectura o SEO, se documenta y se pasa a `Bloque 1`

### Resumen aprobado del bloque

- nueva tesis superior aprobada:
  - `I bridge business development, partnerships, and project delivery to turn commercial opportunities into executable, cross-functional programs.`
- nueva lectura aprobada para los primeros 10 segundos:
  - `This is a commercially fluent operator who turns partnerships and business opportunities into structured, cross-functional delivery.`
- jerarquia estrategica aprobada:
  - `business development / partnerships` y `project delivery` pasan a leerse como ejes visibles del positioning
  - `operations` queda como capacidad de soporte y de credibilidad operativa, no como titular principal
- audiencia aprobada para el blog:
  - primaria: hiring managers y founders que evaluan capacidad de ejecucion con criterio comercial
  - secundaria: recruiters y pares relevantes de industria
- pilares editoriales aprobados para el blog:
  - `Delivery Systems`
  - `Partnerships and BD`
  - `Remote Operations`
  - `Career, Leadership, and Industry Lessons with direct execution value`
- temas explicitamente fuera del blog:
  - opinionismo sectorial sin aplicacion operativa
  - hot takes de industria
  - contenido motivacional generico
  - diarios personales de carrera
  - tutoriales tacticos sin relacion con partnerships/delivery
- politica editorial aprobada para idioma:
  - un post puede existir en un solo locale
  - si no existe equivalente en el locale destino, el cambio de idioma debe caer al index del blog del locale destino
  - si ese index no existe, el fallback debe ser la home del locale destino
- cadence aprobada:
  - objetivo quincenal mientras se sostengan calidad y relevancia estrategica
  - si cae calidad, backlog o capacidad operativa, el blog puede pasar a modelo por temporadas sin tratarlo como fracaso

### Redlines preliminares para `portfolio-strategy`

- cambiar la tesis central del portfolio para dejar de presentar `partnerships / business development` solo como puente subordinado
- actualizar `Objetivo del sitio` y `sesgo principal` para reflejar mejor `project management / delivery` + `business development / partnerships`, con `operations` como soporte
- actualizar `Audiencias` para mantener hiring managers y founders como centro, pero con sensibilidad comercial mas explicita
- actualizar `Propuesta de valor central` para enfatizar conversion de oportunidades comerciales en programas ejecutables
- actualizar `Lo que debe entenderse en los primeros 10 segundos` con la nueva lectura aprobada
- revisar `Mensajes por audiencia` para que `commercial fluency`, `partner-facing execution` y `cross-functional delivery` queden mas visibles
- revisar `Lo que el sitio no debe comunicar` para seguir evitando un perfil de ventas puro, aun con mayor peso de BD/partnerships

### Redlines preliminares para `content-system`

- actualizar `Principios del sistema` para dejar de definir la tesis como `delivery / operations first`
- introducir de forma explicita la convivencia entre evidencia de delivery y evidencia de `partnerships / business development`
- revisar reglas de `hero` para que el positioning pueda expresar el nuevo puente entre oportunidad comercial y ejecucion
- revisar reglas de `selected_work_preview` y `selected_work_case_study` para permitir framing mas visible de `partner-facing execution`, `commercial constraints` y `business-development bridge`
- revisar reglas de `experience_preview` y `experience_item` para permitir que partnerships/BD aparezcan como parte legitima del angle de ownership, sin perder evidencia operativa
- dejar preparado el sistema para una futura entidad editorial de blog en `Bloque 1`, sin definir todavia schema final ni runtime
- conservar las restricciones de tono, claims defendibles y evidencia real para no deslizar el portfolio hacia branding vacio o opinionismo

### Temas abiertos para `Bloque 1`

- como se traducen estos cambios de posicionamiento a la arquitectura del sitio y a la existencia formal del blog
- como aterriza la politica de idioma flexible por post dentro del `LanguageSwitcher` y del routing multi-locale
- que paginas y labels nuevas necesita la arquitectura contractual
- que tratamiento SEO y metadata debe tener el blog index y cada post
- si el blog nace simultaneamente en `en` y `es` o si el soporte editorial se habilita por etapas

---

## 12. Registro de cambios del plan

- Fecha: `2026-03-16`
  - cambio: se crea el plan detallado para ejecutar el Bloque 0 del roadmap de Sprint 2
  - razon: ordenar una fase estrategica e interactiva antes de tocar contratos y runtime del blog profesional
