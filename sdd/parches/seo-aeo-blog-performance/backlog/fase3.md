# Backlog Fase 3 - Robots IA

---

## Estado

* Change id: `seo-aeo-blog-performance`
* Patch kind: `batch`
* Lifecycle: `spec-first`
* Fase: `3 - Robots IA`
* Estado: `done`
* Ultima actualizacion: `2026-05-24`
* Owner: `paw-paw`
* Depende de: Fase 1
* Desbloquea: fases de performance e imagenes

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

---

## 2. Objetivo de la fase

* Resultado esperado: `public/robots.txt` diferencia search, fetch iniciado por usuario y entrenamiento/model improvement.
* Razon de la fase: conservar visibilidad SEO/AEO sin habilitar bots de entrenamiento.
* Cambio que queda habilitado al cerrar: las siguientes fases pueden enfocarse en performance sin drift de robots.

---

## 3. Rama obligatoria por tipo

### Si `patch_kind = batch`

* items cerrados cubiertos por esta fase: Item 3.
* criterio global de cierre que esta fase acerca: AI search permitido y training restringido.
* criterio de cierre por item: search, training y user-fetch quedan diferenciados.
* split check: fase de configuracion autocontenida.

---

## 4. Assumptions

* `Googlebot` queda permitido por estrategia SEO/AEO.
* `Google-Extended`, `GPTBot` y `ClaudeBot` quedan restringidos por entrenamiento/model improvement.
* `Sitemap` canonico no cambia.

---

## 5. Precondiciones

### Documentos

* [x] Fase 1 cerrada
* [x] `docs/delivery/seo-spec.md` contiene matriz de user-agents

### Decisiones previas

* [x] `2C` registrada en `decision.log`

### Estado tecnico

* [x] `public/robots.txt` existe

---

## 6. Alcance

### Si entra

* [x] editar `public/robots.txt`

### No entra

* [x] no cambiar dominio ni sitemap
* [x] no cambiar metadata de paginas
* [x] no agregar dependencia externa

---

## 7. Archivos y superficies de trabajo

### Leer antes de editar

* `docs/delivery/seo-spec.md`
* `public/robots.txt`

### Editar

* `public/robots.txt`

### Validar

* revision manual de `public/robots.txt`
* `npm test`

### No tocar

* `src/layouts/Layout.astro`
* `src/pages/**`

---

## 8. Checklist de ejecucion

### Bloque A - Relectura de fuentes

* [x] leer matriz de robots IA en `docs/delivery/seo-spec.md`
* [x] leer decision `2C` en `decision.log`

### Bloque B - Inspeccion de estado actual

* [x] confirmar que `public/robots.txt` permite actualmente bots de entrenamiento

### Bloque C - Edicion por archivo

* [x] permitir `OAI-SearchBot`
* [x] permitir `ChatGPT-User`
* [x] permitir `PerplexityBot`
* [x] permitir `Perplexity-User`
* [x] permitir `Claude-SearchBot`
* [x] permitir `Claude-User`
* [x] permitir `Googlebot`
* [x] restringir `GPTBot`
* [x] restringir `ClaudeBot`
* [x] restringir `Google-Extended`
* [x] conservar `Sitemap: https://pauloctuya.com/sitemap-index.xml`

### Bloque D - Registro de decisiones, hallazgos o blockers

* [x] registrar hallazgos si aparece drift

### Bloque E - Validacion

* [x] revisar manualmente `public/robots.txt`
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
  * decision: aplicar la matriz ya documentada sin cambiar sitemap ni rutas indexables.
  * razon: el alcance de la fase es robots IA, no arquitectura SEO.
  * documentos o areas afectadas: `public/robots.txt`.

---

## 13. Validaciones

### Documentales

* [x] verificar alineacion con `docs/delivery/seo-spec.md`

### Tecnicas

* [x] `npm test`

### Manuales

* [x] revision manual de `public/robots.txt`

### Resultados

* Validacion:
  * comando o revision: revision manual de `public/robots.txt`
  * resultado esperado: search/user-fetch permitido y training restringido.
  * resultado obtenido: pass; `Googlebot`, `OAI-SearchBot`, `ChatGPT-User`, `PerplexityBot`, `Perplexity-User`, `Claude-SearchBot` y `Claude-User` permitidos; `GPTBot`, `ClaudeBot` y `Google-Extended` restringidos.
  * estado: `pass`
  * notas: sitemap canonico conservado.
* Validacion:
  * comando o revision: `npm test`
  * resultado esperado: pass
  * resultado obtenido: pass; 3 tests, 0 failures.
  * estado: `pass`
  * notas:
