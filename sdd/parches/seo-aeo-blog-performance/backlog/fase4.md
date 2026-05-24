# Backlog Fase 4 - First viewport performance

---

## Estado

* Change id: `seo-aeo-blog-performance`
* Patch kind: `batch`
* Lifecycle: `spec-first`
* Fase: `4 - First viewport performance`
* Estado: `done`
* Ultima actualizacion: `2026-05-24`
* Owner: `paw-paw`
* Depende de: Fase 1
* Desbloquea: Fase 5 imagenes

---

## 1. Fuente de verdad aplicable

* `docs/README.md`
* `AGENTS.md`
* `sdd/parches/seo-aeo-blog-performance/patch.yaml`
* `sdd/parches/seo-aeo-blog-performance/definicion.md`
* `sdd/parches/seo-aeo-blog-performance/plan.md`
* `sdd/parches/seo-aeo-blog-performance/tasks.md`
* `sdd/parches/seo-aeo-blog-performance/decision.log`
* `docs/visual/interaction-spec.md`

---

## 2. Objetivo de la fase

* Resultado esperado: el primer viewport muestra headline, supporting text, CTAs y visual principal sin depender de AOS/JS.
* Razon de la fase: reducir render delay del LCP y bloqueo por recursos de animacion/fuentes.
* Cambio que queda habilitado al cerrar: la fase de imagenes puede tratar LCP y assets sin confundirlo con visibilidad por JS.

---

## 3. Rama obligatoria por tipo

### Si `patch_kind = batch`

* items cerrados cubiertos por esta fase: Item 4.
* criterio global de cierre que esta fase acerca: performance del primer viewport mejora sin regresion visible.
* criterio de cierre por item: headline y CTAs son visibles sin JS/AOS.
* split check: fase tecnica autocontenida.

---

## 4. Assumptions

* AOS puede seguir activo para secciones below-the-fold.
* GSAP/ScrollTrigger debe conservar sus animaciones locales, pero no necesita CDN si ya se importa desde dependencia npm.
* La optimizacion de Google Fonts debe reducir bloqueo sin cambiar familias tipograficas.

---

## 5. Precondiciones

### Documentos

* [x] Fase 1 cerrada
* [x] `docs/visual/interaction-spec.md` exige primer viewport visible por defecto

### Decisiones previas

* [x] `3A` registrada en `decision.log`

### Estado tecnico

* [x] `Hero.astro` usa `data-aos`
* [x] `Buttons.astro` aplica `data-aos` a todos los botones
* [x] `Layout.astro` carga AOS/GSAP desde CDN

---

## 6. Alcance

### Si entra

* [x] editar `src/components/sections/Hero.astro`
* [x] editar `src/components/ui/Buttons.astro`
* [x] editar `src/layouts/Layout.astro`
* [x] editar `src/scripts/animations.js`

### No entra

* [x] no redisenar hero
* [x] no cambiar copy
* [x] no eliminar AOS de secciones below-the-fold
* [x] no agregar dependencias

---

## 7. Archivos y superficies de trabajo

### Leer antes de editar

* `src/components/sections/Hero.astro`
* `src/components/ui/Buttons.astro`
* `src/layouts/Layout.astro`
* `src/scripts/animations.js`

### Editar

* `src/components/sections/Hero.astro`
* `src/components/ui/Buttons.astro`
* `src/layouts/Layout.astro`
* `src/scripts/animations.js`

### Validar

* `npm test`
* `npm run build`
* inspeccion HTML generada del home
* revision visual/manual

### No tocar

* contenido i18n
* assets

---

## 8. Checklist de ejecucion

### Bloque A - Relectura de fuentes

* [x] leer contrato de first viewport en `docs/visual/interaction-spec.md`
* [x] leer componentes de hero, botones, layout y animaciones

### Bloque B - Inspeccion de estado actual

* [x] confirmar `data-aos` en wrapper hero
* [x] confirmar `data-aos` automatico en botones
* [x] confirmar cargas CDN duplicadas o bloqueantes de AOS/GSAP

### Bloque C - Edicion por archivo

* [x] quitar `data-aos` del wrapper hero
* [x] agregar prop para desactivar AOS en botones concretos
* [x] desactivar AOS en CTAs del hero
* [x] mantener AOS default para botones fuera del hero
* [x] cargar Google Fonts de forma no bloqueante con fallback `noscript`
* [x] reemplazar AOS CDN por paquete local manteniendo opciones
* [x] retirar GSAP/ScrollTrigger CDN duplicado

### Bloque D - Registro de decisiones, hallazgos o blockers

* [x] registrar hallazgos si aparece drift

### Bloque E - Validacion

* [x] ejecutar `npm test`
* [x] ejecutar `npm run build`
* [x] inspeccionar HTML generado para home EN
* [x] revisar que el hero no tenga `data-aos`
* [x] revisar que los CTAs del hero no tengan `data-aos`

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
  * hallazgo: `Layout.astro` cargaba GSAP/ScrollTrigger desde CDN aunque `src/scripts/animations.js` ya importa `gsap` desde dependencia npm.
  * impacto: descarga duplicada y bloqueo innecesario en el arbol critico.
  * accion: se retiraron los scripts CDN y se conserva GSAP por bundle local.
* Fecha: `2026-05-24`
  * hallazgo: AOS se cargaba desde CDN y el wrapper del hero dependia de `data-aos`.
  * impacto: el primer viewport podia quedar condicionado por JS/CSS de AOS.
  * accion: AOS se inicializa desde dependencia local y el hero/CTAs criticos quedan visibles por defecto.
* Fecha: `2026-05-24`
  * hallazgo: en viewport mobile 375x812 el CTA secundario quedaba parcialmente fuera de la primera pantalla y el CTA primario muy pegado al borde inferior.
  * impacto: cumplimiento debil del criterio "headline y CTAs visibles" en mobile.
  * accion: se redujo espaciado mobile del hero sin cambiar copy ni layout desktop; el CTA primario queda visible en la primera pantalla.

---

## 11. Blockers

* [x] sin blockers

---

## 12. Decisiones tomadas

* Fecha: `2026-05-24`
  * decision: mantener AOS y GSAP como dependencias locales en vez de CDNs para esta fase.
  * razon: el repo ya declara ambas dependencias y el script local ya importa GSAP; evita bloqueo/duplicacion sin cambiar el modelo de animacion.
  * documentos o areas afectadas: `src/layouts/Layout.astro`, `src/scripts/animations.js`.

---

## 13. Validaciones

### Documentales

* [x] verificar alineacion con `docs/visual/interaction-spec.md`

### Tecnicas

* [x] `npm test`
* [x] `npm run build`

### Manuales

* [x] inspeccion HTML generada
* [x] revision visual/manual

### Resultados

* Validacion:
  * comando o revision: `npm test`
  * resultado esperado: pass
  * resultado obtenido: pass; 3 tests, 0 failures. Reejecutado despues del ajuste mobile.
  * estado: `pass`
  * notas:
* Validacion:
  * comando o revision: `npm run build`
  * resultado esperado: pass
  * resultado obtenido: pass; 30 paginas generadas. Reejecutado despues del ajuste mobile.
  * estado: `pass`
  * notas:
* Validacion:
  * comando o revision: inspeccion HTML home EN
  * resultado esperado: hero y CTAs sin `data-aos`; fonts/AOS/GSAP sin CDN bloqueante.
  * resultado obtenido: pass; hero y CTAs aparecen sin `data-aos`; no quedan `unpkg`, `cdnjs`, `gsap.min`, `ScrollTrigger.min`, `aos.js` ni `aos.css` externos en home/post generados.
  * estado: `pass`
  * notas: verificacion Playwright posterior cubrio home mobile 375px.
