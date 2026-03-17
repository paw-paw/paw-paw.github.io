# Phase Plan

Usa este plan para ejecutar el Bloque 5 del roadmap de Sprint 2.

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

Antes de usarlo:

- confirma que `docs/plans/sprint-2/roadmap.md` sigue siendo el roadmap activo para esta etapa
- revisa `docs/README.md`
- toma `docs/plans/sprint-2/block-0.md`, `docs/plans/sprint-2/block-1.md`, `docs/plans/sprint-2/block-2.md`, `docs/plans/sprint-2/block-3.md` y `docs/plans/sprint-2/block-4.md` como insumos aprobados y cerrados
- ejecuta este bloque en modo altamente interactivo, con checkpoints de aprobacion explicitos antes de editar metadata final, linking interno o checklist de release

---

## Metadatos

- Fase: `Sprint 2 - Bloque 5 - SEO, I18n, Discoverability and Release Closure`
- Estado: `done`
- Ultima actualizacion: `2026-03-17`
- Owner: `pawpaw + Codex`
- Depende de:
  - `docs/README.md`
  - `docs/plans/sprint-2/roadmap.md`
  - `docs/plans/sprint-2/block-0.md`
  - `docs/plans/sprint-2/block-1.md`
  - `docs/plans/sprint-2/block-2.md`
  - `docs/plans/sprint-2/block-3.md`
  - `docs/plans/sprint-2/block-4.md`
  - `docs/architecture/i18n-spec.md`
  - `docs/delivery/seo-spec.md`
  - `docs/delivery/release-checklist.md`
- Desbloquea:
  - release controlada del portfolio realineado y del blog
  - cierre fino de SEO e i18n sobre la nueva superficie editorial
  - checklist de publicacion actualizado con las rutas y comportamientos reales del sitio

---

## 1. Objetivo de la fase

Esta fase debe cerrar la capa fina de SEO, i18n, discoverability interna y verificacion de release del portfolio realineado y del blog ya implementado. Al cerrarla, el sitio debe tener metadata y alternates coherentes con las rutas reales, linking interno minimo pero util hacia el blog, una estrategia `en-first` explicitada para esta primera release, y un checklist de publicacion actualizado y ejecutable. Esta fase existe para dejar la superficie lista para release controlada sin reabrir arquitectura ni implementacion base.

---

## 2. Fuente de verdad aplicable

- `docs/README.md`
- roadmap activo o historico aplicable en `docs/plans/`:
  - `docs/plans/sprint-2/roadmap.md`
  - `docs/plans/sprint-2/block-0.md`
  - `docs/plans/sprint-2/block-1.md`
  - `docs/plans/sprint-2/block-2.md`
  - `docs/plans/sprint-2/block-3.md`
  - `docs/plans/sprint-2/block-4.md`
  - `docs/plans/phase-template.md`
- documentos contractuales aplicables:
  - `docs/architecture/i18n-spec.md`
  - `docs/delivery/deployment.md`
- documentos auxiliares aplicables:
  - `docs/delivery/seo-spec.md`
  - `docs/delivery/release-checklist.md`
  - `docs/governance/decision-log.md`
  - `docs/content/content-master.md`

Nota:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- este plan no puede contradecir documentos contractuales
- `Bloque 5` no debe reinventar arquitectura, taxonomias, entidad `blog_post` ni estructura base del runtime

---

## 3. Inputs requeridos

### Documentos

- [x] `docs/README.md`
- [x] `docs/plans/sprint-2/roadmap.md`
- [x] `docs/plans/sprint-2/block-0.md`
- [x] `docs/plans/sprint-2/block-1.md`
- [x] `docs/plans/sprint-2/block-2.md`
- [x] `docs/plans/sprint-2/block-3.md`
- [x] `docs/plans/sprint-2/block-4.md`
- [x] `docs/architecture/i18n-spec.md`
- [x] `docs/delivery/seo-spec.md`
- [x] `docs/delivery/release-checklist.md`

### Decisiones previas

- [x] esta primera release del blog es `en-first`
- [x] `es` mantiene `blog index` y `category` operativos con empty states claros
- [x] el linking interno al blog debe ser contextual y minimo, sin volverlo protagonista
- [x] los posts sin equivalente exacto mantienen `self-canonical` y usan fallback solo para switcher y alternates aprobados
- [x] la fase debe cerrar con `npm run build`, `npm run preview` y QA manual guiado
- [x] el resultado esperado es `listo para release controlada`, no `deploy automatico asumido`

### Estado tecnico

- [x] el blog ya existe en runtime
- [x] el portfolio principal ya fue realineado en runtime
- [x] existen 2 posts reales en `en`
- [x] `release-checklist` aun no contempla completamente el blog ni sus rutas

---

## 4. Entregables documentales

### Crear

- [x] `docs/plans/sprint-2/block-5.md`

### Actualizar

- [x] `docs/delivery/release-checklist.md`
- [ ] `docs/delivery/seo-spec.md` si el cierre fino exige ajuste auxiliar adicional
- [x] `docs/governance/decision-log.md` al cierre del bloque si se registra la superficie como lista para release controlada

### No tocar

- [ ] `docs/strategy/portfolio-strategy.md`
- [ ] `docs/architecture/site-architecture.md`
- [ ] `docs/content/content-system.md`
- [ ] `docs/content/content-master.md`
- [ ] `docs/plans/sprint-2/block-0.md`
- [ ] `docs/plans/sprint-2/block-1.md`
- [ ] `docs/plans/sprint-2/block-2.md`
- [ ] `docs/plans/sprint-2/block-3.md`
- [ ] `docs/plans/sprint-2/block-4.md`

---

## 5. Alcance de implementacion

### Si entra

- [x] ajuste fino de metadata SEO runtime para blog index, post detail y surfaces existentes si hace falta
- [x] revision y ajuste de `alternate`, `x-default` y fallback de locales en blog
- [x] linking interno contextual hacia el blog desde superficies clave
- [x] QA tecnico y manual con `build` y `preview`
- [x] actualizacion del checklist de release con rutas y verificaciones del blog
- [x] cierre de la superficie como `lista para release controlada`

### No entra

- [ ] nuevos posts reales en `es` para esta release
- [ ] expansion de taxonomias, paginacion o nuevas superficies editoriales
- [ ] rediseño visual amplio
- [ ] cambios de estrategia, arquitectura o modelo de contenido
- [ ] deploy automatico asumido sin intervencion de release

---

## 6. Tareas detalladas

### Bloque A - Relectura de SEO e i18n sobre runtime real

- [x] releer `i18n-spec`, `seo-spec` y `release-checklist`
- [x] contrastar contratos con el runtime realmente implementado en `Bloque 4`
- [x] identificar gaps de metadata, alternates o linking interno hacia el blog
- [x] identificar si hay que consolidar explicitamente la politica `en-first` de esta release

### Bloque B - Cierre SEO e i18n fino

- [x] ajustar `src/utils/seo.ts`, `Layout` u otras piezas runtime solo donde siga habiendo desalineacion real
- [x] revisar comportamiento de `canonical`, `alternate hreflang` y `x-default`
- [x] confirmar el tratamiento de posts sin equivalente exacto entre locales
- [x] evitar introducir optimizacion SEO avanzada fuera del alcance de la fase

### Bloque C - Discoverability interna del blog

- [x] definir y aplicar linking contextual minimo hacia el blog
- [x] revisar si home debe incluir una referencia editorial ligera al blog
- [x] revisar si `work` o `experience` deben enlazar al blog solo donde aporte contexto real
- [x] evitar competir con la CTA principal `View selected work`

### Bloque D - QA tecnico y manual

- [x] ejecutar `npm run build`
- [x] ejecutar `npm run preview`
- [x] revisar rutas principales de portfolio en `en` y `es`
- [x] revisar rutas del blog en `en` y empty states en `es`
- [x] revisar `LanguageSwitcher` en blog y en superficies principales
- [x] revisar `robots.txt` y sitemap generados

### Bloque E - Release checklist y cierre operativo

- [x] actualizar `docs/delivery/release-checklist.md` para contemplar el blog
- [x] registrar verificaciones realizadas y pendientes de release externa si corresponde
- [x] decidir si el bloque amerita entrada en `decision-log`
- [x] dejar la superficie marcada como `lista para release controlada`

### Bloque F - Modo de trabajo interactivo

- [x] trabajar por capas pequenas: SEO/i18n, linking, QA, checklist
- [x] detenerse antes de editar cuando aparezca una nueva ambiguedad contractual o de release
- [x] presentar recomendaciones y hasta dos alternativas cuando haya mas de una lectura razonable
- [x] no expandir el trabajo hacia nuevas features o nuevo contenido por inercia
- [x] no asumir deploy o push automatico sin acordarlo explicitamente

Recomendacion:

- usar el orden `SEO/i18n fino -> discoverability interna -> QA -> checklist/release`
- priorizar cierre coherente y verificable sobre nuevas mejoras opcionales

---

## 7. Archivos probables a tocar

### Docs

- `docs/plans/sprint-2/block-5.md`
- `docs/delivery/release-checklist.md`
- `docs/delivery/seo-spec.md` si hace falta
- `docs/governance/decision-log.md` al cierre, si corresponde

### Codigo

- `src/utils/seo.ts`
- `src/layouts/Layout.astro`
- `src/components/layout/Navbar.astro`
- `src/components/ui/LanguageSwitcher.astro`
- `src/pages/en/index.astro`
- `src/pages/es/index.astro`
- superficies puntuales donde se agregue linking contextual al blog

---

## 8. Dependencias y bloqueos

### Dependencias

- [x] cierre aprobado de `Bloque 4`
- [x] blog ya funcional en runtime
- [x] disponibilidad de `npm run preview`
- [x] acuerdo en release `en-first` para posts del blog
- [x] acuerdo en actualizar `release-checklist`

### Bloqueos posibles

- [ ] que `alternate` y fallback de blog sin equivalencia sigan teniendo tensiones no resueltas
- [ ] que el linking interno al blog se pase de protagonismo o quede demasiado timido
- [ ] que aparezcan diferencias visibles entre `build` y `preview`
- [ ] que el checklist de release quede incompleto respecto al blog o a empty states de `es`
- [ ] que publicar ahora mismo dependa de operaciones externas fuera del entorno local

### Mitigacion

- mantener `self-canonical` en posts reales y fallback aprobado solo para navegacion/alternates
- usar discoverability interna minima y contextual
- validar en `preview` antes de considerar el sitio listo
- actualizar el checklist segun las rutas reales generadas
- separar claramente `listo para release` de `release ya ejecutada`

---

## 9. Validaciones

### Documentales

- [ ] verificar alineacion con `docs/README.md`
- [ ] verificar alineacion con `docs/plans/sprint-2/roadmap.md`
- [ ] verificar alineacion con `i18n-spec`, `seo-spec` y `release-checklist`
- [ ] verificar que la politica `en-first` de esta release quede explicitada sin cerrar decisiones futuras sobre el mix real de idiomas

### Tecnicas

- [ ] ejecutar `npm run build`
- [ ] ejecutar `npm run preview`
- [ ] verificar que `robots.txt` y sitemap reflejan la nueva superficie del blog
- [ ] verificar metadata y alternates de blog y portfolio

### Manuales

- [ ] revision conjunta de rutas principales del portfolio
- [ ] revision conjunta de blog `en`
- [ ] revision conjunta de empty states en `es`
- [ ] revision conjunta del `LanguageSwitcher`
- [ ] revision conjunta de discoverability interna hacia el blog

---

## 10. Criterio de cierre

La fase solo se considera cerrada si:

- [ ] SEO e i18n fino quedaron coherentes con las rutas reales del sitio
- [ ] el blog tiene discoverability interna minima y defendible
- [ ] `release-checklist` ya contempla la nueva superficie del blog
- [ ] `build` y `preview` quedaron validados
- [ ] la superficie completa queda marcada como `lista para release controlada`

---

## 11. Riesgos y notas

### Riesgos

- sobrecerrar decisiones de idioma que el roadmap todavia deja abiertas a futuro
- confundir `en-first para esta release` con una politica editorial definitiva del blog
- tocar demasiadas piezas runtime por polish y ensanchar el bloque de cierre
- dejar el checklist de release con supuestos que dependan de deploy no ejecutado

### Notas operativas

- `en-first` en este bloque aplica a esta primera release del blog, no a una politica permanente del sitio
- si durante el cierre aparece una contradiccion contractual nueva, debe resolverse antes de declarar la superficie lista
- el cierre de `Bloque 5` puede dejar pendientes operativos externos, pero no debe dejar ambiguedad documental ni tecnica interna

---

## 12. Registro de cambios del plan

- Fecha: `2026-03-16`
  - cambio: creacion inicial del plan para `Bloque 5`
  - razon: preparar el cierre de SEO, i18n, discoverability interna y release del portfolio realineado y del blog
