# Phase Plan

Usa este plan para ejecutar el Bloque 4 del roadmap de Sprint 2.

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

Antes de usarlo:

- confirma que `docs/plans/sprint-2/roadmap.md` sigue siendo el roadmap activo para esta etapa
- revisa `docs/README.md`
- toma `docs/plans/sprint-2/block-0.md`, `docs/plans/sprint-2/block-1.md`, `docs/plans/sprint-2/block-2.md` y `docs/plans/sprint-2/block-3.md` como insumos aprobados y cerrados
- ejecuta este bloque en modo altamente interactivo, con checkpoints de aprobacion explicitos antes de editar runtime, contenido estructurado o componentes compartidos

---

## Metadatos

- Fase: `Sprint 2 - Bloque 4 - Blog and Portfolio Runtime Implementation`
- Estado: `done`
- Ultima actualizacion: `2026-03-16`
- Owner: `pawpaw + Codex`
- Depende de:
  - `docs/README.md`
  - `docs/plans/sprint-2/roadmap.md`
  - `docs/plans/sprint-2/block-0.md`
  - `docs/plans/sprint-2/block-1.md`
  - `docs/plans/sprint-2/block-2.md`
  - `docs/plans/sprint-2/block-3.md`
  - `docs/strategy/portfolio-strategy.md`
  - `docs/architecture/site-architecture.md`
  - `docs/content/content-system.md`
  - `docs/architecture/i18n-spec.md`
  - `docs/delivery/seo-spec.md`
  - `docs/content/content-master.md`
- Desbloquea:
  - blog funcional en Astro con contenido local editable
  - portfolio principal alineado en runtime con la tesis realineada
  - base implementada para cierre SEO, i18n y publicacion de `Bloque 5`

---

## 1. Objetivo de la fase

Esta fase debe implementar en Astro la capa tecnica del blog y aterrizar los ajustes narrativos prioritarios del portfolio que ya fueron aprobados documentalmente. Al cerrarla, el sitio debe renderizar `blog index`, `blog post detail` y `category`, integrar `Blog` en la navegacion principal, soportar contenido editorial local mediante `astro:content`, mostrar al menos dos posts reales en `en`, y reflejar en runtime la nueva tesis del portfolio en home, navbar, footer y paginas clave. Esta fase existe para cerrar la brecha entre contratos/documentacion y sitio publicado.

---

## 2. Fuente de verdad aplicable

- `docs/README.md`
- roadmap activo o historico aplicable en `docs/plans/`:
  - `docs/plans/sprint-2/roadmap.md`
  - `docs/plans/sprint-2/block-0.md`
  - `docs/plans/sprint-2/block-1.md`
  - `docs/plans/sprint-2/block-2.md`
  - `docs/plans/sprint-2/block-3.md`
  - `docs/plans/phase-template.md`
- documentos contractuales aplicables:
  - `docs/strategy/portfolio-strategy.md`
  - `docs/architecture/site-architecture.md`
  - `docs/content/content-system.md`
  - `docs/architecture/i18n-spec.md`
- documentos auxiliares aplicables:
  - `docs/delivery/seo-spec.md`
  - `docs/content/content-master.md`
  - `docs/governance/decision-log.md`

Nota:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- este plan no puede contradecir documentos contractuales
- `Bloque 4` implementa contratos ya cerrados; no debe reabrir taxonomias, arquitectura base ni politica editorial del blog

---

## 3. Inputs requeridos

### Documentos

- [x] `docs/README.md`
- [x] `docs/plans/sprint-2/roadmap.md`
- [x] `docs/plans/sprint-2/block-0.md`
- [x] `docs/plans/sprint-2/block-1.md`
- [x] `docs/plans/sprint-2/block-2.md`
- [x] `docs/plans/sprint-2/block-3.md`
- [x] `docs/strategy/portfolio-strategy.md`
- [x] `docs/architecture/site-architecture.md`
- [x] `docs/content/content-system.md`
- [x] `docs/architecture/i18n-spec.md`
- [x] `docs/delivery/seo-spec.md`
- [x] `docs/content/content-master.md`

### Decisiones previas

- [x] el blog se implementa con `astro:content` como fuente local editable
- [x] `Bloque 4` debe implementar `blog index`, `blog post detail` y `category`
- [x] la primera tanda de contenido real incluye 2 posts en `en`
- [x] `es` puede salir con index operativo y sin equivalencia exacta de posts
- [x] el `LanguageSwitcher` debe implementar la excepcion para `blog post detail`
- [x] el portfolio principal debe aterrizar en runtime los cambios downstream definidos en `Bloque 2`
- [x] la primera tanda de posts puede compartir temporalmente una sola `header_image`

### Estado tecnico

- [x] el repo ya tiene rutas localizadas para `home`, `work`, `experience` y `contact`
- [x] no existe aun coleccion de contenido para blog
- [x] el runtime actual sigue desalineado con la narrativa contractual en home y SEO
- [x] `npm run build` existe y debe ejecutarse al cierre de esta fase

---

## 4. Entregables documentales

### Crear

- [x] `docs/plans/sprint-2/block-4.md`

### Actualizar

- [x] `docs/governance/decision-log.md` si el cierre del bloque materializa un cambio implementado suficientemente relevante

### No tocar

- [ ] `docs/strategy/portfolio-strategy.md`
- [ ] `docs/architecture/site-architecture.md`
- [ ] `docs/content/content-system.md`
- [ ] `docs/architecture/i18n-spec.md`
- [ ] `docs/content/content-master.md`
- [ ] `docs/delivery/seo-spec.md`, salvo que aparezca una contradiccion nueva y no resoluble por implementacion

---

## 5. Alcance de implementacion

### Si entra

- [x] crear coleccion local `blog` con `astro:content`
- [x] implementar `blog index`, `blog post detail` y `category` para `en` y `es`
- [x] crear componentes reutilizables para listado, card, hero/listado y metadata de post
- [x] integrar `Blog` en navbar y navegacion movil
- [x] ajustar `LanguageSwitcher` para fallback a `blog index` en posts sin equivalente
- [x] actualizar home, footer, `/work`, `/experience` y `/contact` segun `content-master`
- [x] actualizar SEO runtime base para alinearlo con la nueva tesis y las nuevas rutas
- [x] cargar al menos 2 posts reales en `en`

### No entra

- [ ] traduccion completa de posts al `es`
- [ ] mas de una `header_image` nueva si no hace falta
- [ ] taxonomias adicionales, `series`, breadcrumbs o paginacion
- [ ] refinamiento SEO final de canonicals y alternates complejos fuera de lo necesario para compilar y respetar contrato
- [ ] rediseño visual amplio del sitio

---

## 6. Tareas detalladas

### Bloque A - Relectura del runtime y mapeo contra contratos

- [x] releer `Layout`, `Navbar`, `LanguageSwitcher`, `seo.ts`, paginas localizadas y secciones de home
- [x] identificar desalineaciones entre `content-master` y runtime actual
- [x] identificar el punto de integracion correcto para `astro:content`
- [x] identificar si hace falta adaptar utilidades compartidas de i18n o SEO para soportar blog

### Bloque B - Infraestructura de contenido del blog

- [x] crear schema de coleccion `blog` en `src/content.config.*` o equivalente
- [x] definir estructura local de contenido para posts
- [x] crear al menos 2 posts reales en `en`
- [x] usar una `header_image` compartida temporal compatible con el contrato actual
- [x] asegurar que los posts usen `category`, `locale`, `status`, `featured` y demas metadata obligatoria

### Bloque C - Paginas y componentes del blog

- [x] implementar `blog index`
- [x] implementar `blog post detail`
- [x] implementar pagina de `category`
- [x] crear componentes reutilizables para card/listado/metadata
- [x] asegurar que la UI del blog complemente el portfolio y no compita visualmente con `Work` y `Experience`

### Bloque D - Navegacion, locales e integracion compartida

- [x] agregar `Blog` a `Navbar` y navegacion movil
- [x] extender `LanguageSwitcher` para la excepcion contractual del blog
- [x] conectar las rutas localizadas del blog con las utilidades de locale existentes
- [x] mantener `es` operativo aunque los posts reales iniciales vivan solo en `en`

### Bloque E - Propagacion downstream del portfolio en runtime

- [x] actualizar home para reemplazar superficies heredadas por las aprobadas contractualmente
- [x] alinear `Hero`, previews, `How I Work`, `Skills` y `FooterCTA` con `content-master`
- [x] alinear `/work`, `/experience`, `/contact` y `Footer`
- [x] alinear labels y copy base de navegacion donde el contrato ya haya cambiado

### Bloque F - SEO runtime minimo y buildabilidad

- [x] actualizar `src/utils/seo.ts` a la nueva tesis y nuevas superficies
- [x] asegurar que `Layout` pueda emitir metadata correcta para blog index y post detail sin cerrar todavia todo `Bloque 5`
- [x] validar que las rutas del blog compilen para `en` y `es`
- [x] ejecutar `npm run build`

### Bloque G - Modo de trabajo interactivo

- [x] trabajar por subsistema pequeno: contenido, blog runtime, navegacion, downstream portfolio, SEO/build
- [x] detenerse antes de editar cuando una decision tenga mas de una lectura razonable
- [x] presentar recomendaciones y hasta dos alternativas cuando aparezca ambiguedad relevante
- [x] no implementar features de `Bloque 5` por inercia
- [x] no ampliar el numero de posts reales ni la taxonomia sin aprobacion explicita

Recomendacion:

- usar el orden `infra de contenido -> blog runtime -> navegacion/i18n -> downstream portfolio -> SEO/build`
- cerrar primero consistencia funcional y despues polish visual

---

## 7. Archivos probables a tocar

### Docs

- `docs/plans/sprint-2/block-4.md`
- `docs/governance/decision-log.md` si corresponde al cierre

### Codigo

- `src/content.config.*`
- `src/content/blog/**` o estructura equivalente
- `src/pages/en/blog/**`
- `src/pages/es/blog/**`
- `src/components/layout/Navbar.astro`
- `src/components/ui/LanguageSwitcher.astro`
- `src/layouts/Layout.astro`
- `src/utils/seo.ts`
- `src/utils/i18n.ts` si hace falta soporte adicional para blog
- `src/pages/en/index.astro`
- `src/pages/es/index.astro`
- `src/pages/en/work.astro`
- `src/pages/es/work.astro`
- `src/pages/en/experience.astro`
- `src/pages/es/experience.astro`
- `src/pages/en/contact.astro`
- `src/pages/es/contact.astro`
- componentes de seccion o UI que hoy sigan respondiendo a la tesis anterior
- assets de `src/assets/` para `header_image` compartida del blog si hace falta

---

## 8. Dependencias y bloqueos

### Dependencias

- [x] cierre aprobado de `Bloque 3`
- [x] disponibilidad de `astro:content` dentro del stack actual
- [x] acuerdo en implementar `category` ya en runtime
- [x] acuerdo en lanzar 2 posts reales en `en`
- [x] acuerdo en aterrizar runtime del portfolio principal junto al blog

### Bloqueos posibles

- [ ] que la home y las secciones actuales requieran mas reemplazos de lo previsto para alinearse con `content-master`
- [ ] que `LanguageSwitcher` necesite mas logica de la prevista para resolver posts sin equivalente
- [ ] que el runtime SEO actual requiera mas refactor del esperado
- [ ] que `category` empuje una navegacion secundaria mayor a la aprobada
- [ ] que la primera tanda de posts consuma demasiado tiempo editorial frente al trabajo tecnico

### Mitigacion

- limitar la implementacion del blog a lo ya aprobado por contrato
- usar una sola `header_image` temporal para la primera tanda de posts
- resolver `es` con index operativo y fallback contractual antes de pensar en traduccion completa
- implementar primero la base funcional y dejar refinamientos de SEO final para `Bloque 5`
- mantener el blog visualmente complementario al portfolio principal

---

## 9. Validaciones

### Documentales

- [x] verificar alineacion con `docs/README.md`
- [x] verificar alineacion con `docs/plans/sprint-2/roadmap.md`
- [x] verificar alineacion con `content-master`, `site-architecture`, `content-system`, `i18n-spec` y `seo-spec`
- [x] verificar que no se implementaron taxonomias o features fuera de contrato

### Tecnicas

- [x] ejecutar `npm run build`
- [x] confirmar que el blog renderiza `index`, `detail` y `category`
- [x] confirmar que `LanguageSwitcher` cumple la excepcion contractual del blog

### Manuales

- [x] revision conjunta del blog en `en`
- [x] revision conjunta del estado de `es` para blog index y fallback
- [x] revision conjunta del portfolio principal ya alineado en runtime
- [x] revision de navegacion principal y movil

---

## 10. Criterio de cierre

La fase solo se considera cerrada si:

- [x] el blog existe en runtime con `index`, `detail` y `category`
- [x] al menos 2 posts reales en `en` renderizan correctamente desde fuente local editable
- [x] el portfolio principal ya refleja en runtime la nueva direccion narrativa aprobada
- [x] `Blog` aparece en navegacion principal y movil
- [x] `npm run build` pasa
- [x] `Bloque 5` puede concentrarse en cierre SEO, i18n fino y publicacion, no en arquitectura ni base runtime faltante

---

## 11. Riesgos y notas

### Riesgos

- subestimar la desalineacion actual entre runtime y `content-master`
- sobrecargar `Bloque 4` con demasiado contenido editorial o demasiado polish
- dejar `es` en un estado confuso si el fallback del blog no queda claro
- implementar `category` de una manera que abra deuda extra de navegacion o SEO

### Notas operativas

- la imagen de header compartida para la primera tanda es una concesion temporal aprobada para este bloque, no una regla de producto final
- si durante la implementacion aparece necesidad de cambiar un contrato de docs, el bloque debe detenerse y resolverlo antes de seguir
- si `astro:content` exigiera una decision nueva de estructura no aprobada, esa decision debe escalarse antes de codificarla

---

## 12. Registro de cambios del plan

- Fecha: `2026-03-16`
  - cambio: creacion inicial del plan para `Bloque 4`
  - razon: preparar la implementacion del blog y de la realineacion downstream del portfolio despues del cierre de `Bloque 3`
- Fecha: `2026-03-16`
  - cambio: cierre ejecutado de `Bloque 4` con blog runtime, navegacion e implementacion downstream del portfolio
  - razon: dejar la base tecnica lista para el cierre fino de `Bloque 5`
