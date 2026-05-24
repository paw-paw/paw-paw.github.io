# Definicion: SEO/AEO, blog metadata y performance

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

- Change id: `seo-aeo-blog-performance`
- Program id: `portfolio-seo-aeo`
- Patch kind: `batch`
- Lifecycle: `spec-first`
- Estado: `done`
- Fuente: `_inbox/handoff_seo_aeo_blog_performance.md`
- Ultima actualizacion: `2026-05-24`
- Owner: `paw-paw`

---

## 1. Objetivo global

Mejorar la base SEO/AEO y performance del portfolio existente sin abrir rutas ni arquitectura nueva.

El batch cierra cuando:

- los posts publicados pueden emitir structured data `BlogPosting` consistente;
- la entidad personal queda modelada con `@id` estable y perfiles externos verificables;
- `robots.txt` refleja decisiones separadas para search, entrenamiento y fetch iniciado por usuario;
- el primer viewport deja de depender de animaciones o recursos no criticos para mostrar headline y CTA;
- las imagenes locales relevantes se sirven con tamanos y atributos mas adecuados;
- las skills editoriales previenen drift SEO/AEO en futuros posts.

---

## 2. Lista cerrada de items

- Item 1:
  - criterio de cierre: los documentos contractuales o auxiliares aplicables reflejan los cambios que modifican reglas de metadata, contenido editorial, robots o motion antes de tocar implementacion publica.
  - nombre: Contratos y documentacion SEO/AEO/performance.
- Item 2:
  - criterio de cierre: `BlogPosting`, `Person`, `ProfilePage`, `@id` estable, `sameAs` y `datePublished`/`dateModified` quedan implementados sin claims invisibles y con validacion sobre posts EN/ES.
  - nombre: Schema SEO/AEO.
- Item 3:
  - criterio de cierre: `robots.txt` distingue search, entrenamiento y fetch iniciado por usuario, incluyendo el tratamiento correcto de `Googlebot` y `Google-Extended`.
  - nombre: Robots IA.
- Item 4:
  - criterio de cierre: hero, headline, navbar y CTAs renderizan sin depender de JS/AOS; PageSpeed mobile se vuelve a medir y el estado LCP queda clasificado.
  - nombre: First viewport performance.
- Item 5:
  - criterio de cierre: work cards, logos y assets locales relevantes usan tamanos responsive, formatos adecuados y `width`/`height` sin deformar layout.
  - nombre: Optimizacion general de imagenes.
- Item 6:
  - criterio de cierre: `blog-new`, `blog-edit`, `blog-preflight` y, si aplica, `blog-unpublish` reflejan las reglas de SEO/AEO por blogpost.
  - nombre: Skills editoriales.

---

## 3. Criterio global de cierre

- [x] todos los items incluidos estan cerrados o diferidos explicitamente
- [x] no aparecieron dependencias internas complejas que requieran split fuera del batch
- [x] no se crearon `/about`, `/resume`, `/cv` ni `/work/[case-study]`
- [x] `npm run build` pasa
- [x] `npm test` pasa
- [x] las validaciones manuales o externas requeridas quedan registradas

---

## 4. Fuentes de verdad aplicables

- `docs/README.md`
- `AGENTS.md`
- documentos contractuales aplicables:
  - `docs/strategy/portfolio-strategy.md`
  - `docs/architecture/site-architecture.md`
  - `docs/content/content-system.md`
  - `docs/architecture/i18n-spec.md`
  - `docs/delivery/deployment.md`
  - `docs/visual/interaction-spec.md`
- documentos auxiliares aplicables:
  - `docs/delivery/seo-spec.md`
  - `docs/delivery/release-checklist.md`
- fuentes externas o handovers:
  - `_inbox/handoff_seo_aeo_blog_performance.md`
  - `_inbox/reporte_seo_aeo_portafolio_personal.md`
  - `_inbox/correcciones_handoff_seo_aeo_performance.md`

---

## 5. Alcance

### Si entra

- [x] actualizar docs aplicables cuando el cambio modifique reglas visibles o contractuales
- [x] agregar schema `BlogPosting` para posts publicados
- [x] revisar `Person` / `ProfilePage` y usar `@id` estable
- [x] agregar o revisar GitHub en `sameAs`
- [x] agregar `modified_date` o soporte equivalente con fallback tecnico
- [x] revisar `robots.txt` con matriz search/training/user-fetch
- [x] quitar dependencia de AOS/JS en contenido critico del primer viewport
- [x] optimizar fuentes criticas dentro de una estrategia conservadora
- [x] optimizar imagenes locales relevantes con Astro Image/Picture o atributos/tamanos adecuados
- [x] actualizar skills editoriales para sostener las nuevas reglas

### Fuera de alcance

- [x] no crear `/about`
- [x] no crear `/resume` o `/cv`
- [x] no crear `/work/[case-study]`
- [x] no redisenar arquitectura de informacion
- [x] no cambiar dominio, deployment o politica de rutas localizada
- [x] no usar schema externo como verdad sobre `docs/`
- [x] no ejecutar cambios de cache/CDN para assets `_astro`, que el usuario revisara manualmente

---

## 6. Assumptions

- El batch es SDD-eligible porque toca metadata, contenido editorial, robots, performance visible, skills y validaciones.
- `modified_date` sera inicialmente opcional con fallback tecnico a `publish_date`, salvo decision humana posterior.
- GitHub puede entrar en `sameAs` solo si se confirma como perfil publico verificable y coherente con la identidad profesional.
- Los cambios de performance deben priorizar first viewport/LCP antes de optimizacion general de imagenes.
- La arquitectura actual del sitio se conserva.

---

## 7. Decisiones abiertas

- [x] Visibilidad publica de GitHub:
  - por que bloquea: define si GitHub se agrega solo a schema o tambien a superficies visibles como Contact/Footer.
  - quien debe decidir: usuario.
  - resolucion: `1A`, incluir GitHub en `sameAs` sin agregarlo a Contact en este patch.
- [x] Entrenamiento IA:
  - por que bloquea: define si `GPTBot`, `ClaudeBot` y `Google-Extended` quedan permitidos o restringidos.
  - quien debe decidir: usuario.
  - resolucion: `2C`, permitir search/user-fetch y restringir entrenamiento/model improvement.
- [x] Contratos antes de performance/motion:
  - por que bloquea: `docs/visual/interaction-spec.md` permite AOS en hero con intensidad media, pero el handoff prioriza quitar AOS del primer viewport por LCP; puede requerir sync documental.
  - quien debe decidir: usuario o fase documental.
  - resolucion: `3A`, actualizar docs primero para evitar drift cuando la decision este cerrada.

---

## 8. Riesgos

- riesgo: mezclar schema, robots, performance, imagenes y skills en un solo patch de implementacion.
  - impacto: regresiones dificiles de atribuir.
  - mitigacion: ejecutar por fases/patches internos separados.
- riesgo: usar `Google-Extended` como control de AI Overviews o AI Mode.
  - impacto: decision tecnica incorrecta.
  - mitigacion: documentar separacion entre Google Search/Googlebot y Google-Extended.
- riesgo: diferir AOS sin quitarlo del hero.
  - impacto: empeorar render delay o aparicion del CTA.
  - mitigacion: first viewport visible por defecto antes de diferir AOS.
- riesgo: `BlogPosting` con datos no visibles.
  - impacto: schema enganoso.
  - mitigacion: solo usar datos visibles o respaldados por frontmatter/contenido.
- riesgo: dimensiones explicitas de imagen mal definidas.
  - impacto: deformacion visual.
  - mitigacion: validacion visual mobile/desktop y light/dark.

---

## 9. Criterio de readiness

La definicion queda lista para `sdd-plan` solo si:

- [x] la lista de items esta cerrada
- [x] existe criterio global de cierre
- [x] cada item tiene criterio de cierre
- [x] no hay dependencias internas complejas sin resolver para planificar
- [x] assumptions criticas resueltas, aceptadas o escaladas

Las decisiones abiertas registradas no bloquean `sdd-plan`; si siguen abiertas tras plan, deben bloquear `sdd-tasks` o aislarse como opciones por fase.

---

## 10. Registro de cambios

- Fecha: `2026-05-24`
  - cambio: creacion de definicion batch desde handoff.
  - razon: iniciar flujo SDD completo solicitado por el usuario.
- Fecha: `2026-05-24`
  - cambio: cierre de decisiones abiertas con respuestas `1A`, `2C`, `3A`.
  - razon: desbloquear `sdd-tasks` con decisiones humanas explicitas.
