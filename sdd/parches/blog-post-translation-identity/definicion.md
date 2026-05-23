# Definicion: blog-post-translation-identity

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

- Change id: `blog-post-translation-identity`
- Program id: `none`
- Patch kind: `spec`
- Lifecycle: `spec-first`
- Estado: `active`
- Fuente: conversacion de producto sobre traducciones del blog
- Ultima actualizacion: `2026-05-18`
- Owner: `usuario`

---

## 1. Objetivo

Definir contractualmente una identidad editorial estable para vincular traducciones de `blog_post` sin depender de que compartan el mismo `slug`.  
El cambio debe preservar slugs localizados por idioma, permitir que el `LanguageSwitcher` encuentre la versión equivalente cuando exista y mantener como caso válido los posts publicados solo en un locale.  
Al cerrar el cambio, el blog debe distinguir con claridad entre identidad editorial común y URL localizada.

---

## 2. No objetivos

- [ ] Obligar a traducir todos los posts publicados.
- [ ] Unificar slugs visibles entre idiomas.
- [ ] Reorganizar toda la colección de `src/content/blog/` por locale.
- [ ] Cambiar la taxonomía editorial actual de `blog_post`.
- [ ] Rediseñar el blog index, category pages o post detail fuera de lo necesario para soportar equivalencias reales entre locales.

---

## 3. Fuentes de verdad aplicables

- `docs/README.md`
- `AGENTS.md`
- documentos contractuales aplicables:
  - `docs/content/content-system.md`
  - `docs/architecture/i18n-spec.md`
- documentos auxiliares aplicables:
  - `docs/delivery/seo-spec.md`
  - `docs/delivery/release-checklist.md`
- fuentes externas o handovers:
  - `sdd/parches/blog-post-translation-identity/handover.md`

---

## 4. Alcance

### Si entra

- [ ] Definir una identidad editorial común para traducciones de `blog_post`, separada del `slug` localizado.
- [ ] Aclarar en los contratos cómo se detecta una equivalencia exacta entre locales cuando dos posts sí son traducciones.
- [ ] Mantener el fallback vigente al `blog index` del locale destino cuando no exista traducción equivalente.
- [ ] Cubrir el impacto esperado sobre contenido existente, especialmente la pareja de posts de Burger King ya publicada.
- [ ] Identificar las superficies de SEO/alternates afectadas por el nuevo modelo de equivalencia.

### Fuera de alcance

- [ ] Crear traducciones nuevas de posts que hoy solo existen en un locale.
- [ ] Cambiar títulos, excerpts o cuerpos editoriales salvo ajustes mínimos estrictamente derivados del nuevo modelo.
- [ ] Introducir nuevos locales.
- [ ] Cambiar routing base, prefijos de locale o estructura global del sitio.

---

## 5. Superficies afectadas

### Docs

- `docs/content/content-system.md`
- `docs/architecture/i18n-spec.md`
- posiblemente `docs/delivery/seo-spec.md`
- posiblemente `docs/delivery/release-checklist.md`

### Codigo o contenido

- `src/content.config.ts`
- `src/content/blog/*.md`
- `src/utils/blog.ts`
- `src/pages/en/blog/[slug].astro`
- `src/pages/es/blog/[slug].astro`

### Configuracion o validacion

- `tests/blog-es-detail-alignment.test.mjs`
- posibles tests nuevos o ajustados sobre equivalencia exacta y fallback de locale

---

## 6. Decisiones conocidas

- decision: las traducciones deben vincularse por una identidad editorial estable distinta del `slug`.
  - razon: permite conservar URLs localizadas naturales sin perder la capacidad de reconocer equivalencias reales entre locales.
  - documentos o areas afectadas: `docs/content/content-system.md`, `docs/architecture/i18n-spec.md`, `src/content.config.ts`, `src/utils/blog.ts`
- decision: los posts sin traducción deben seguir siendo válidos.
  - razon: el contrato actual ya permite posts sin equivalente exacto y esa flexibilidad sigue siendo deseable para el blog.
  - documentos o areas afectadas: `docs/content/content-system.md`, `docs/architecture/i18n-spec.md`

---

## 7. Assumptions

- La pareja publicada sobre Burger King es el caso inicial de referencia para validar el nuevo modelo de equivalencia.
- La solución debe mantener slugs localizados por idioma como comportamiento editorial deseable.

---

## 8. Decisiones abiertas

- No hay decisiones abiertas pendientes para pasar a `sdd-plan`.

---

## 9. Riesgos

- riesgo: introducir la identidad común solo en código y no en docs.
  - impacto: drift contractual activo y cierre inválido bajo `AGENTS.md`.
  - mitigacion: actualizar primero los contratos afectados.
- riesgo: mezclar identidad editorial y routing localizado.
  - impacto: URLs menos naturales o modelo difícil de mantener cuando crezcan las traducciones.
  - mitigacion: mantener `slug` e identidad común como conceptos separados.
- riesgo: que el nuevo campo quede opcional sin una regla clara de uso.
  - impacto: equivalencias ambiguas o inconsistentes entre posts traducidos.
  - mitigacion: definir explícitamente cuándo debe existir y cómo se interpreta su ausencia.

---

## 10. Criterio de cierre

La definicion queda lista para `sdd-plan` solo si:

- [x] objetivo y no objetivos estan claros
- [x] las fuentes de verdad aplicables estan listadas
- [x] el alcance y fuera de alcance no se contradicen
- [x] assumptions criticas resueltas, aceptadas o escaladas
- [x] las decisiones abiertas estan visibles
- [x] los riesgos principales estan identificados

---

## 11. Registro de cambios

- Fecha: `2026-05-18`
  - cambio: creacion inicial de la definicion del patch.
  - razon: formalizar la necesidad de separar identidad editorial y slug localizado en traducciones del blog.
- Fecha: `2026-05-18`
  - cambio: cierre de la decision abierta sobre el nombre del campo comun como `i18n_key`.
  - razon: decision explicita del usuario antes de iniciar `sdd-plan`.
