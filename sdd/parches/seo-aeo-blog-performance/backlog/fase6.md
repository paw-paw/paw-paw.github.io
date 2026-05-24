# Backlog Fase 6 - Skills editoriales

---

## Estado

* Change id: `seo-aeo-blog-performance`
* Patch kind: `batch`
* Lifecycle: `spec-first`
* Fase: `6 - Skills editoriales`
* Estado: `done`
* Ultima actualizacion: `2026-05-24`
* Owner: `paw-paw`
* Depende de: Fases 1 y 2
* Desbloquea: cierre SDD

---

## 1. Fuente de verdad aplicable

* `docs/README.md`
* `AGENTS.md`
* `docs/content/content-system.md`
* `docs/delivery/seo-spec.md`
* `src/content.config.ts`
* `sdd/parches/seo-aeo-blog-performance/tasks.md`

---

## 2. Objetivo de la fase

* Resultado esperado: skills de blog sostienen `modified_date`, preflight SEO/AEO y reglas de publicacion.
* Razon de la fase: evitar drift editorial en futuros posts.
* Cambio que queda habilitado al cerrar: cierre SDD con workflow editorial actualizado.

---

## 3. Rama obligatoria por tipo

### Si `patch_kind = batch`

* items cerrados cubiertos por esta fase: Item 6.
* criterio global de cierre que esta fase acerca: el workflow editorial conserva las reglas implementadas.
* criterio de cierre por item: skills reflejan las reglas SEO/AEO nuevas.
* split check: fase documental-operativa autocontenida.

---

## 4. Assumptions

* `modified_date` es opcional y se omite en drafts nuevos salvo input explicito.
* Una edicion sustancial debe evaluar `modified_date`; una correccion menor no.
* El preflight no corrige posts automaticamente.

---

## 5. Precondiciones

### Documentos

* [x] Fase 1 cerrada
* [x] Fase 2 cerrada

### Decisiones previas

* [x] incluir revision de skills editoriales en alcance

### Estado tecnico

* [x] existen skills `blog-new`, `blog-edit`, `blog-preflight`, `blog-unpublish`

---

## 6. Alcance

### Si entra

* [x] editar `.codex/skills/blog-new/SKILL.md`
* [x] editar `.codex/skills/blog-edit/SKILL.md`
* [x] editar `.codex/skills/blog-preflight/SKILL.md`
* [x] editar `.codex/skills/blog-unpublish/SKILL.md`

### No entra

* [x] no cambiar contenido de posts
* [x] no cambiar scripts npm
* [x] no implementar nuevas skills

---

## 7. Archivos y superficies de trabajo

### Leer antes de editar

* `.codex/skills/blog-new/SKILL.md`
* `.codex/skills/blog-edit/SKILL.md`
* `.codex/skills/blog-preflight/SKILL.md`
* `.codex/skills/blog-unpublish/SKILL.md`

### Editar

* `.codex/skills/blog-new/SKILL.md`
* `.codex/skills/blog-edit/SKILL.md`
* `.codex/skills/blog-preflight/SKILL.md`
* `.codex/skills/blog-unpublish/SKILL.md`

### Validar

* revision documental de skills
* `npm test`

### No tocar

* `src/content/blog/**`
* runtime de blog

---

## 8. Checklist de ejecucion

### Bloque A - Relectura de fuentes

* [x] leer skills actuales

### Bloque B - Inspeccion de estado actual

* [x] confirmar ausencia de `modified_date` en skills
* [x] confirmar ausencia de checks SEO/AEO por post en preflight

### Bloque C - Edicion por archivo

* [x] actualizar `blog-new` con `modified_date` opcional y readiness metadata
* [x] actualizar `blog-edit` con regla de edicion sustancial
* [x] actualizar `blog-preflight` con checks SEO/AEO y schema readiness
* [x] actualizar `blog-unpublish` con rutas/sitemap/schema de posts no publicados

### Bloque D - Registro de decisiones, hallazgos o blockers

* [x] registrar hallazgos si aparece drift

### Bloque E - Validacion

* [x] revisar skills editadas
* [x] ejecutar `npm test`

### Bloque F - Cierre

* [x] marcar fase done si validaciones pasan

---

## 9. Drift detectado

* Fecha:
  * fuente esperada:
  * diferencia encontrada:
  * impacto:
  * accion:
  * requiere decision: `si` | `no`

---

## 10. Hallazgos durante ejecucion

* Fecha:
  * hallazgo:
  * impacto:
  * accion:

---

## 11. Blockers

* [x] sin blockers

---

## 12. Decisiones tomadas

* Fecha: `2026-05-24`
  * decision: tratar `modified_date` como campo opcional y editorial, no como requisito para drafts nuevos.
  * razon: evita afirmar actualizaciones editoriales invisibles y respeta fallback tecnico de schema.
  * documentos o areas afectadas: skills locales de blog.

---

## 13. Validaciones

### Documentales

* [x] revision documental de skills

### Tecnicas

* [x] `npm test`

### Manuales

* [x] comprobar que no se tocaron posts

### Resultados

* Validacion:
  * comando o revision: revision documental de skills
  * resultado esperado: skills reflejan `modified_date` y SEO/AEO por post.
  * resultado obtenido: pass; las cuatro skills contienen reglas nuevas de `modified_date`, `BlogPosting` o despublicacion segun corresponde.
  * estado: `pass`
  * notas: no se tocaron archivos en `src/content/blog/**`.
* Validacion:
  * comando o revision: `npm test`
  * resultado esperado: pass
  * resultado obtenido: pass; 3 tests, 0 failures.
  * estado: `pass`
  * notas:
