# Backlog Fase 2 - Schema SEO/AEO

---

## Estado

* Change id: `seo-aeo-blog-performance`
* Patch kind: `batch`
* Lifecycle: `spec-first`
* Fase: `2 - Schema SEO/AEO`
* Estado: `done`
* Ultima actualizacion: `2026-05-24`
* Owner: `paw-paw`
* Depende de: Fase 1
* Desbloquea: Fase 6 skills editoriales

---

## 1. Fuente de verdad aplicable

* `docs/README.md`
* `AGENTS.md`
* `sdd/parches/seo-aeo-blog-performance/patch.yaml`
* `sdd/parches/seo-aeo-blog-performance/definicion.md`
* `sdd/parches/seo-aeo-blog-performance/plan.md`
* `sdd/parches/seo-aeo-blog-performance/tasks.md`
* `sdd/parches/seo-aeo-blog-performance/decision.log`
* `docs/delivery/seo-spec.md`
* `docs/content/content-system.md`

---

## 2. Objetivo de la fase

* Resultado esperado: posts EN/ES emiten `BlogPosting`; entidad personal usa `@id` estable; `modified_date` queda soportado.
* Razon de la fase: mejorar SEO/AEO por articulo y entidad sin crear rutas nuevas.
* Cambio que queda habilitado al cerrar: robots, performance e imagenes pueden avanzar con schema estable.

---

## 3. Rama obligatoria por tipo

### Si `patch_kind = batch`

* items cerrados cubiertos por esta fase: Item 2.
* criterio global de cierre que esta fase acerca: schema estable y validable.
* criterio de cierre por item: `BlogPosting` valido en posts EN/ES sin claims invisibles.
* split check: fase tecnica autocontenida.

---

## 4. Assumptions

* `modified_date` es opcional y cae a `publish_date`.
* GitHub entra solo en `sameAs`.

---

## 5. Precondiciones

### Documentos

* [x] Fase 1 cerrada

### Decisiones previas

* [x] `1A` GitHub solo schema

### Estado tecnico

* [x] `Layout.astro` centraliza JSON-LD base

---

## 6. Alcance

### Si entra

* [x] editar `src/content.config.ts`
* [x] editar `src/layouts/Layout.astro`
* [x] editar `src/pages/en/blog/[slug].astro`
* [x] editar `src/pages/es/blog/[slug].astro`

### No entra

* [x] no agregar rutas
* [x] no agregar GitHub a Contact
* [x] no editar contenido de posts salvo que build lo exija

---

## 7. Archivos y superficies de trabajo

### Leer antes de editar

* `src/layouts/Layout.astro`
* `src/content.config.ts`
* `src/pages/en/blog/[slug].astro`
* `src/pages/es/blog/[slug].astro`

### Editar

* `src/layouts/Layout.astro`
* `src/content.config.ts`
* `src/pages/en/blog/[slug].astro`
* `src/pages/es/blog/[slug].astro`

### Validar

* `npm test`
* `npm run build`
* inspeccion HTML generada

### No tocar

* `src/pages/*/contact.astro`
* `src/components/sections/Contact.astro`

---

## 8. Checklist de ejecucion

### Bloque A - Relectura de fuentes

* [x] leer fuentes de schema y paginas blog

### Bloque B - Inspeccion de estado actual

* [x] confirmar `sameAs` no incluye GitHub
* [x] confirmar no existe `modified_date`
* [x] confirmar posts detail no emiten `BlogPosting`

### Bloque C - Edicion por archivo

* [x] agregar `modified_date` opcional a `src/content.config.ts`
* [x] agregar `structuredData` extra y `Person.@id` en `Layout.astro`
* [x] incluir GitHub en `sameAs`
* [x] retirar `Organization` si representa ambiguamente a la persona
* [x] emitir `BlogPosting` en detail EN
* [x] emitir `BlogPosting` en detail ES

### Bloque D - Registro de decisiones, hallazgos o blockers

* [x] registrar hallazgos si aparece drift

### Bloque E - Validacion

* [x] ejecutar `npm test`
* [x] ejecutar `npm run build`
* [x] inspeccionar HTML generado para un post EN/ES

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

* Fecha: `2026-05-24`
  * hallazgo: el schema `Person` anterior heredaba imagen social y descripcion de pagina, lo que podia convertir un post en imagen/descripcion principal de la entidad personal.
  * impacto: riesgo de entidad inconsistente para SEO/AEO.
  * accion: `Person` y `ProfilePage.mainEntity` usan imagen de perfil y descripcion de sitio estables.

---

## 11. Blockers

* [x] sin blockers

---

## 12. Decisiones tomadas

* Fecha: `2026-05-24`
  * decision: usar `structuredData` extra en Layout en vez de hardcodear JSON-LD por pagina.
  * razon: mantener metadata centralizada.
  * documentos o areas afectadas: `src/layouts/Layout.astro`, blog detail pages.

---

## 13. Validaciones

### Documentales

* [x] verificar alineacion con `docs/delivery/seo-spec.md`

### Tecnicas

* [x] `npm test`
* [x] `npm run build`

### Manuales

* [x] inspeccion HTML generada

### Resultados

* Validacion:
  * comando o revision: `npm test`
  * resultado esperado: pass
  * resultado obtenido: pass; 3 tests, 0 failures.
  * estado: `pass`
  * notas: ejecutado en serie para evitar carrera sobre `dist/`.
* Validacion:
  * comando o revision: `npm run build`
  * resultado esperado: pass
  * resultado obtenido: pass; 30 paginas generadas.
  * estado: `pass`
  * notas: ejecutado en serie despues de `npm test`.
* Validacion:
  * comando o revision: inspeccion HTML generada EN/ES con `rg`.
  * resultado esperado: `BlogPosting`, `dateModified`, `Person.@id` y GitHub en `sameAs`.
  * resultado obtenido: pass en `dist/en/blog/dont-marry-claude/index.html` y `dist/es/blog/no-te-cases-con-claude/index.html`.
  * estado: `pass`
  * notas: `Person.image` queda en `paulo-hero` y no en imagen de articulo.
  * notas:

---

## 14. Cierre

La fase solo se considera cerrada si:

* [x] checklist completo o pendientes explicitamente diferidos
* [x] assumptions criticas resueltas, aceptadas o escaladas
* [x] decisiones relevantes registradas
* [x] blockers resueltos o diferidos con razon
* [x] drift documentado o resuelto
* [x] validaciones requeridas ejecutadas o justificadas
* [x] resultados de validacion registrados

---

## 15. Riesgos y pendientes

### Riesgos

* schema invalido por serializacion de fechas

### Pendientes

* validacion externa Rich Results queda manual/externa
