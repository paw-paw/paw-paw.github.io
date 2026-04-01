# Roadmap

Usa este roadmap para ejecutar la realineacion narrativa del portfolio y la implementacion de un blog profesional sin romper la precedencia documental ni abrir un rediseño amplio fuera de alcance.

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Metadatos

- Nombre: `Sprint 2 - Portfolio Narrative Realignment + Professional Blog`
- Estado: `done`
- Ultima actualizacion: `2026-04-01`
- Owner: `pawpaw + Codex`
- Depende de:
  - `docs/README.md`
  - `docs/strategy/portfolio-strategy.md`
  - `docs/architecture/site-architecture.md`
  - `docs/content/content-system.md`
  - `docs/architecture/i18n-spec.md`
  - `docs/delivery/deployment.md`
  - `docs/delivery/seo-spec.md`
  - `docs/plans/sprint-1/roadmap.md`
  - `docs/plans/sprint-2/block-0.md`
- Desbloquea:
  - estrategia contractual realineada con el nuevo positioning del portfolio
  - propagacion narrativa del nuevo positioning a las superficies clave del portfolio
  - arquitectura y sistema editorial del blog alineados con la nueva tesis
  - implementacion de contenido recurrente sin acoplar runtime a fuentes externas

---

## 1. Objetivo general

El objetivo de esta etapa es realinear la narrativa del portfolio con la tesis aprobada en `Bloque 0` y, sobre esa base, incorporar un blog profesional coherente con el sitio. Al cerrar este roadmap deben existir contratos actualizados de estrategia y contenido, una propagacion downstream de esa nueva direccion hacia las superficies narrativas clave del portfolio, una arquitectura contractual aprobada para el blog, una implementacion Astro mantenible y una primera tanda de contenido lista para una salida `public release ready` desde el repo. La publicacion efectiva sigue dependiendo de promover a `main` y validar `GitHub Pages`.

---

## 2. Fuente de verdad aplicable

- `docs/README.md`
- documentos contractuales aplicables:
  - `docs/strategy/portfolio-strategy.md`
  - `docs/architecture/site-architecture.md`
  - `docs/content/content-system.md`
  - `docs/architecture/i18n-spec.md`
  - `docs/delivery/deployment.md`
- documentos auxiliares aplicables:
  - `docs/delivery/seo-spec.md`
  - `docs/governance/decision-log.md`
  - `docs/content/content-master.md`
  - `docs/plans/sprint-2/block-0.md`
- roadmaps o planes historicos relacionados:
  - `docs/plans/sprint-1/roadmap.md`
  - `docs/plans/roadmap-template.md`

Nota:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- este roadmap no puede contradecir documentos contractuales
- `Bloque 0` ya fue ejecutado y debe tratarse como insumo aprobado, no como trabajo reabierto

---

## 3. Alcance general

### Si entra

- [ ] materializar en contratos el rebalanceo aprobado entre `business development`, `partnerships` y `project delivery`
- [ ] propagar esa nueva tesis a contenido maestro y copy clave del portfolio actual
- [ ] extender la arquitectura del sitio para incluir el blog sin romper consistencia narrativa
- [ ] definir modelo de contenido editorial para posts, series y taxonomias minimas
- [ ] implementar blog multipagina en Astro con fuente editable local
- [ ] preparar SEO, i18n y navegacion consistentes para la nueva superficie y para los ajustes narrativos downstream
- [ ] publicar una primera tanda curada de posts alineados con la nueva tesis del portfolio

### No entra

- [ ] rediseño visual amplio del portfolio
- [ ] reescritura exhaustiva de todos los case studies o de toda la experiencia historica
- [ ] newsletter, RSS avanzado o automatizaciones de distribucion externas si no se documentan aparte
- [ ] comentarios publicos, sistema de cuentas o features sociales
- [ ] CMS externo o acople directo a fuentes remotas
- [ ] expansion a un tercer idioma
- [ ] convertir el blog en una linea editorial ajena a la tesis aprobada en `Bloque 0`

---

## 4. Secuencia de fases o bloques

### Bloque 0

- Objetivo: cerrar el encaje estrategico del blog y del rebalanceo narrativo del portfolio antes de tocar contratos o runtime
- Entregables:
  - [x] `docs/plans/sprint-2/block-0.md`
  - [x] tesis superior aprobada
  - [x] lectura de los primeros 10 segundos aprobada
  - [x] audiencia, pilares editoriales, politica de idioma y cadence aprobadas
  - [x] redlines preliminares para `portfolio-strategy` y `content-system`
- Dependencias:
  - `docs/strategy/portfolio-strategy.md`
  - `docs/content/content-system.md`
- Criterio de cierre:
  - [x] bloque ejecutado y registrado en `docs/governance/decision-log.md`

### Bloque 1

- Objetivo: materializar el rebalanceo aprobado dentro de los contratos de estrategia y contenido
- Entregables:
  - actualizacion de `docs/strategy/portfolio-strategy.md`
  - actualizacion de `docs/content/content-system.md`
  - decision registrada en `docs/governance/decision-log.md`
- Dependencias:
  - cierre de `Bloque 0`
- Criterio de cierre:
  - la tesis contractual del portfolio ya refleja el nuevo puente entre `business development`, `partnerships` y `project delivery`
  - el sistema de contenido deja de estar definido como `delivery / operations first`
  - las reglas de tono, claims y evidencia siguen defendibles despues del rebalanceo

### Bloque 2

- Objetivo: propagar la nueva tesis a contenido maestro y copy clave del portfolio antes de crear la capa editorial nueva del blog
- Entregables:
  - actualizacion de `docs/content/content-master.md`
  - lista aprobada de superficies del portfolio que deben ajustar copy
  - metadata y labels clave revisados donde aplique
  - brief de cambios downstream para implementacion
- Dependencias:
  - cierre de `Bloque 1`
- Criterio de cierre:
  - hero, previews de evidencia, CTA y mensajes clave del portfolio ya tienen direccion aprobada compatible con la nueva tesis
  - el portfolio principal y el blog futuro ya no compiten narrativamente entre si

### Bloque 3

- Objetivo: actualizar la arquitectura contractual y el sistema editorial del blog sobre la narrativa ya realineada
- Entregables:
  - actualizacion de `docs/architecture/site-architecture.md`
  - decision de rutas del blog compatible con `i18n-spec`
  - definicion de entidad editorial `blog_post` o equivalente
  - reglas de metadata obligatoria por post
  - taxonomias minimas aprobadas
  - backlog inicial de temas
- Dependencias:
  - cierre de `Bloque 2`
- Criterio de cierre:
  - la arquitectura contractual ya contempla el blog y su rol dentro del sitio
  - el sistema de contenido ya define la unidad editorial minima del blog
  - la taxonomia y el backlog inicial respetan el perimetro aprobado en `Bloque 0`

### Bloque 4

- Objetivo: implementar la capa tecnica del blog y los ajustes downstream prioritarios del portfolio en Astro
- Entregables:
  - pagina indice del blog
  - pagina de detalle de post
  - capa de contenido editable local
  - componentes reutilizables para cards, hero/listado y metadata de posts
  - integracion de navegacion hacia el blog
  - implementacion del copy actualizado en superficies clave del portfolio
- Dependencias:
  - cierre de `Bloque 3`
- Criterio de cierre:
  - el blog compila y renderiza con al menos dos posts reales de prueba
  - el portfolio principal ya refleja la nueva direccion narrativa en sus superficies clave
  - el runtime no depende de `temp/` ni de una fuente externa directa

### Bloque 5

- Objetivo: cerrar SEO, i18n, discoverability interna y validacion de publicacion del portfolio realineado y del blog
- Entregables:
  - metadata reusable para index y detalle de blog
  - decision ejecutada sobre localizacion de rutas y posts
  - linking interno desde home, work o experience cuando aporte contexto
  - validacion final de build, rutas, canonicals y alternates aplicables
  - primera tanda de posts publicada o lista para release
- Dependencias:
  - cierre de `Bloque 4`
  - actualizaciones documentales cerradas en `Bloque 1`, `Bloque 2` y `Bloque 3`
- Criterio de cierre:
  - blog y portfolio principal heredan reglas SEO e i18n coherentes con el sitio
  - las nuevas rutas y los cambios downstream quedan cubiertos por metadata y navegacion
  - la superficie completa queda `public release ready` a nivel repo, sin asumir todavia merge a `main` ni verificacion publica final de `GitHub Pages`

---

## 5. Entregables documentales

### Crear

- [ ] `docs/plans/sprint-2/roadmap.md`
- [ ] documento o seccion editorial para backlog inicial de posts si hace falta separarlo del roadmap

### Actualizar

- [ ] `docs/strategy/portfolio-strategy.md`
- [ ] `docs/content/content-system.md`
- [ ] `docs/content/content-master.md`
- [ ] `docs/architecture/site-architecture.md`
- [ ] `docs/architecture/i18n-spec.md`
- [ ] `docs/delivery/seo-spec.md`
- [ ] `docs/governance/decision-log.md`
- [ ] `docs/delivery/release-checklist.md`

### Archivar o mover

- [ ] no aplica por ahora

---

## 6. Entregables de implementacion

- [ ] ajustes de copy en superficies clave del portfolio
- [ ] routing del blog para locales activos
- [ ] fuente de contenido local editable para posts
- [ ] componentes de listado, card y detalle
- [ ] metadata SEO para index y detalle
- [ ] integracion de navegacion principal y enlaces contextuales
- [ ] primera tanda de posts publicados

---

## 7. Dependencias y bloqueos

### Dependencias

- [ ] materializar primero los cambios aprobados en `portfolio-strategy` y `content-system`
- [ ] definir que superficies del portfolio deben cambiar copy en este sprint y cuales pueden esperar
- [ ] definir si el blog vive en ambos locales activos desde el primer release o si nace primero en `en`
- [ ] definir si la arquitectura publica usara `/en/blog/` y `/es/blog/` o una variante distinta compatible con `i18n-spec`
- [ ] definir estructura minima de `blog_post` y metadata editorial obligatoria
- [ ] validar capacidad real de mantenimiento editorial antes de comprometer frecuencia de publicacion

### Bloqueos posibles

- [ ] que el rebalanceo contractual crezca y arrastre una reescritura demasiado amplia del portfolio
- [ ] que el blog se alinee con la nueva tesis pero el portfolio principal quede con copy viejo
- [ ] complejidad extra de i18n si se obliga traduccion total post a post sin capacidad operativa real
- [ ] dispersion SEO si se crean taxonomias, paginas o archives sin estrategia clara
- [ ] sobrecarga editorial si la cadence objetivo no se sostiene con calidad

### Mitigacion

- actualizar primero contratos y luego propagacion de contenido y implementacion
- limitar la alineacion downstream a superficies narrativas clave, no a todo el sitio historico
- lanzar con taxonomia minima y backlog curado
- tratar el ingles como idioma maestro salvo decision documental distinta
- medir consistencia editorial por calidad y relevancia, no por volumen

---

## 8. Validaciones

### Documentales

- [ ] verificar alineacion con `docs/README.md`
- [ ] verificar alineacion con contratos aplicables
- [ ] confirmar que el portfolio principal y el blog responden a la misma tesis aprobada
- [ ] confirmar que estrategia, contenido, arquitectura, i18n y SEO quedaron sincronizados

### Tecnicas

- [ ] `npm run build`
- [ ] validar superficies de portfolio actualizadas
- [ ] validar rutas del blog en locales activos
- [ ] validar metadata de portfolio y de blog donde cambie
- [ ] validar que la fuente de contenido no dependa de runtime externo

### Manuales

- [ ] revision visual/manual del portfolio actualizado y del blog index/detalle
- [ ] revision funcional de navegacion y locale switching
- [ ] revision editorial de tono, claims y claridad

---

## 9. Criterio de cierre

Este roadmap solo se considera cerrado si:

- [x] el rebalanceo aprobado en `Bloque 0` ya esta reflejado en la documentacion contractual necesaria
- [x] el portfolio principal ya refleja esa direccion en sus superficies narrativas clave
- [x] el blog ya esta reflejado en la documentacion contractual necesaria
- [x] existe una implementacion Astro mantenible y consistente con el sistema actualizado
- [x] hay al menos una primera tanda de posts alineada con el posicionamiento experto aprobado
- [x] las nuevas rutas y los cambios downstream respetan i18n, SEO, deployment y navegacion del sitio
- [x] no quedan decisiones grandes de narrativa o blog viviendo solo en codigo
- [x] el estado final del sprint se interpreta como `public release ready` en el repo, con deploy publico y verificacion externa todavia fuera de este roadmap

---

## 10. Registro de cambios

- Fecha: `2026-03-16`
  - cambio: se crea roadmap draft para incorporar blog profesional como siguiente etapa del portfolio
  - razon: planificar la expansion del sitio sin contradecir contratos vigentes ni convertir una idea nueva en verdad implicita
- Fecha: `2026-03-16`
  - cambio: se readapta el roadmap para cubrir realineacion narrativa del portfolio mas implementacion del blog profesional
  - razon: evitar que el blog nazca con una tesis nueva mientras el portfolio principal sigue hablando desde una tesis anterior
- Fecha: `2026-04-01`
  - cambio: el roadmap deja de estar en `draft` y se cierra como ejecutado en estado `public release ready`
  - razon: alinear el estado del plan con el runtime real, el checklist de release y la decision de que la publicacion efectiva sigue siendo un paso externo sobre `main`
