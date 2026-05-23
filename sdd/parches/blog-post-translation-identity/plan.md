# Plan: blog-post-translation-identity

## Estado

- Change id: `blog-post-translation-identity`
- Patch kind: `spec`
- Lifecycle: `spec-first`
- Estado: `ready-for-tasks`
- Ultima actualizacion: `2026-05-18`
- Owner: `usuario`
- Depende de: `none`
- Desbloquea: equivalencias reales entre traducciones de `blog_post`

---

## 1. Fuente de verdad aplicable

- `docs/README.md`
- `AGENTS.md`
- `sdd/parches/blog-post-translation-identity/patch.yaml`
- `sdd/parches/blog-post-translation-identity/definicion.md`
- `sdd/parches/blog-post-translation-identity/decision.log`
- documentos contractuales aplicables:
  - `docs/content/content-system.md`
  - `docs/architecture/i18n-spec.md`
- documentos auxiliares aplicables:
  - `docs/delivery/seo-spec.md`
  - `docs/delivery/release-checklist.md`

---

## 2. Lectura brownfield

- estructura existente: todos los posts viven en una colección plana bajo `src/content/blog/`; el `slug` sale hoy del entry path y se usa para rutas localizadas.
- patrones existentes: el blog ya tolera posts sin equivalente exacto y resuelve `localeUrls` por utilidad compartida en `src/utils/blog.ts`.
- deuda o drift relevante: la equivalencia exacta se detecta hoy por igualdad de `slug`, pero las traducciones reales pueden requerir slugs localizados distintos.
- restricciones tecnicas: el contrato actual evita duplicar `slug` en frontmatter cuando el path ya lo resuelve; el cambio debe sumar identidad sin deshacer esa regla.

---

## 3. Assumptions

- `i18n_key` será opcional para posts sin traducción y obligatorio de facto cuando dos posts deban reconocerse como equivalentes.
- La ausencia de `i18n_key` mantiene el fallback actual al `blog index` del locale destino.
- La pareja Burger King será migrada como ejemplo publicado ya existente del nuevo contrato.

---

## 4. Zonas afectadas

### Docs

- `docs/content/content-system.md`
- `docs/architecture/i18n-spec.md`
- `docs/delivery/seo-spec.md`
- `docs/delivery/release-checklist.md`

### Codigo

- `src/content.config.ts`
- `src/content/blog/a-shirt-a-license-and-a-loophole.md`
- `src/content/blog/una-camiseta-una-licencia-y-una-oportunidad.md`
- `src/utils/blog.ts`

### Configuracion, tests o build

- `tests/blog-es-detail-alignment.test.mjs`
- `tests/public-release-closure.test.mjs`
- `npm test`
- `npm run build`

---

## 5. Bloques de implementacion

### Bloque 1 - Contrato editorial e i18n

- Objetivo: reconciliar la verdad documental con el nuevo modelo de identidad comun.
- Superficies afectadas: contratos de contenido, reglas de equivalencia/fallback, SEO y checklist de release.
- Cambios esperados: documentar `i18n_key`, separar identidad editorial de `slug`, aclarar comportamiento cuando existe o no equivalente real.
- Dependencias: decision cerrada sobre nombre del campo.
- Riesgos: introducir una convención duradera sin regla clara de opcionalidad.
- Validaciones asociadas: revisión documental contra `docs/README.md` y `AGENTS.md`.

### Bloque 2 - Modelo runtime y migracion inicial

- Objetivo: hacer operativa la equivalencia por `i18n_key` y migrar el caso ya publicado.
- Superficies afectadas: schema, contenido, helper de locale URLs, tests de detail/SEO.
- Cambios esperados: aceptar `i18n_key`, usarlo para detectar equivalencias, mantener fallback si falta, enlazar correctamente la pareja Burger King.
- Dependencias: Bloque 1 cerrado.
- Riesgos: regresión del fallback o alternates incorrectos.
- Validaciones asociadas: `npm test`, `npm run build`, inspección de rutas de detail afectadas.

---

## 6. Datos, schemas y contratos

- Contratos documentales afectados: identidad mínima de `blog_post`, equivalencia exacta entre locales, alternates de detail.
- Datos o contenido afectados: posts publicados de Burger King en `en` y `es`.
- Schemas o modelos afectados: schema de la colección `blog`, lógica de equivalencia en `src/utils/blog.ts`.
- Compatibilidad esperada: los posts sin `i18n_key` siguen siendo válidos y conservan fallback al índice del locale destino.

---

## 7. Validaciones previstas

### Documentales

- [ ] verificar alineacion con `docs/README.md`
- [ ] confirmar que el contrato no convierte `i18n_key` en obligación universal para posts monolingües

### Tecnicas

- [ ] `npm test`
- [ ] `npm run build`
- [ ] verificar alternates y `LanguageSwitcher` en detail con y sin equivalencia real

### Manuales

- [ ] revisar rutas detail de Burger King en `en` y `es`

---

## 8. Riesgos y mitigaciones

- riesgo: que `i18n_key` se use de forma inconsistente entre posts traducidos.
  - impacto: equivalencias rotas o ambiguas.
  - mitigacion: documentar la regla y cubrir el caso positivo en tests.
- riesgo: que la mejora positiva rompa el caso monolingüe vigente.
  - impacto: alternates incorrectos o navegación inesperada.
  - mitigacion: conservar y ampliar tests de fallback.

---

## 9. Decisiones humanas abiertas

- Estado: `none`

---

## 10. Criterio de cierre tecnico

- [x] el alcance respeta `definicion.md`
- [x] las zonas afectadas estan identificadas
- [x] los bloques de implementacion son secuenciables
- [x] las validaciones son reales y proporcionales
- [x] assumptions criticas resueltas, aceptadas o escaladas
- [x] no hay decisiones abiertas que bloqueen la division en fases

---

## 11. Registro de cambios

- Fecha: `2026-05-18`
  - cambio: creacion inicial del plan tecnico brownfield.
  - razon: convertir la definicion aprobada en una secuencia ejecutable.
