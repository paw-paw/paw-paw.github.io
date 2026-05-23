# Cierre: blog-index-proportion-refinement

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

- Change id: `blog-index-proportion-refinement`
- Program id: `none`
- Patch kind: `spec`
- Lifecycle: `spec-first`
- Status final: `closed`
- Fecha de cierre: `2026-05-18`
- Owner: `usuario`
- Nivel de cierre: `standard`

---

## 1. Resumen

- Objetivo original: refinar las proporciones del `blog index`, dar mas presencia al bloque `Editorial Background`, representar mejor los excerpts y decidir si hacia falta una guia editorial explicita.
- Resultado ejecutado:
  - se promovio una guia editorial suave de `excerpt` de `24–32` palabras a docs y skills editoriales del blog;
  - el featured paso a mostrar `6` lineas visibles;
  - las cards regulares ampliaron su clamp a `4` lineas;
  - los logos editoriales ganaron escala visual;
  - la portada superior usa una altura minima desktop proporcional al viewport para cerrar mejor el primer frame.
- Alcance cerrado:
  - contratos editoriales aplicables;
  - skills `blog-new`, `blog-edit`, `blog-preflight`;
  - composicion visible de `/en/blog/` y `/es/blog/`.
- Alcance diferido:
  - revision visual real en navegador de `375px`, `768px` y `1440px`, diferida por falta de Chrome disponible en el entorno.

---

## 2. Rama obligatoria por tipo

### Si `patch_kind = spec`

- fuente viva reconciliada:
  - `docs/content/content-system.md`
  - `docs/content/content-master.md`
- cambio promovido:
  - `excerpt` queda definido como resumen editorial compacto con rango recomendado de `24–32` palabras, expresamente no bloqueante a nivel de schema/publicacion automatica.

### Si `patch_kind = batch`

- estado por item: `no aplica`
- criterio global de cierre: `no aplica`
- item diferido, si existe: `no aplica`

---

## 3. Artifacts revisados

- `patch.yaml`
- `definicion.md`
- `plan.md`
- `tasks.md`
- `backlog/fase1.md`
- `backlog/fase2.md`
- `decision.log`

---

## 4. Decisiones relevantes

- decision: expandir la UI antes que recortar excerpts existentes.
  - fuente: `decision.log`
  - impacto: preservo el modelo editorial actual y oriento la interfaz hacia una representacion mas fiel.
- decision: fijar el featured en `6` lineas visibles de excerpt.
  - fuente: `decision.log`
  - impacto: definio el objetivo de densidad visual del teaser principal.
- decision: crear una guia editorial cuantitativa suave para `excerpt`.
  - fuente: `decision.log`
  - impacto: exigio reconciliar docs y skills antes de tocar UI.
- decision: alinear tambien las cards regulares con la nueva politica.
  - fuente: `decision.log`
  - impacto: evito que featured y cards diverjan sobre el mismo campo editorial.

---

## 5. Assumptions, blockers y findings

### Assumptions

- Los excerpts publicados actuales representan una densidad editorial valida para el sistema.
- La guia nueva debe mantenerse suave y fuera del schema.
- La composicion puede resolverse con patrones existentes sin rediseño nuevo ni cambios de routing.

### Blockers

- blocker: revision visual asistida no ejecutable en este entorno por ausencia de distribucion de Chrome para Playwright/DevTools.
  - estado: `deferred`
  - resolucion o razon de diferimiento: se documenta como validacion diferida; no bloquea la integracion tecnica, pero deja riesgo residual visual.

### Findings

- finding: `npm test` y `npm run build` no deben ejecutarse en paralelo en este repo cuando compiten por `.astro/content-assets.mjs`.
  - evidencia: primera corrida paralela produjo `ENOENT` en `astro build`; la corrida secuencial posterior paso.
  - impacto: la validacion limpia debe ejecutarse de forma secuencial.
- finding: la misma guia de `excerpt` pudo propagarse sin tocar `src/content.config.ts`.
  - evidencia: docs y skills actualizados; `excerpt` permanece como `z.string()`.
  - impacto: no hubo necesidad de migracion de contenido ni cambio de modelo.

---

## 6. Drift

- drift:
  - categoria: `minor`
  - fuente esperada: `backlog/fase2.md`
  - diferencia encontrada: la revision visual planeada no pudo ejecutarse por falta de navegador disponible.
  - accion: registrar la validacion como `deferred` y dejar riesgo residual visible.
  - estado: `documentado`
- drift:
  - categoria: `confirmed`
  - fuente esperada: `backlog/fase2.md` y este cierre dejaron pendiente revisar `/en/blog/` y `/es/blog/` en `375px`, `768px` y `1440px`.
  - diferencia encontrada: validacion post-cierre con Playwright CLI/Chromium sobre `/es/blog/` confirma overflow en `375x812`; `body.scrollWidth` mide `764` y el intro/featured se renderizan a aproximadamente `740px` dentro de un viewport de `375px`.
  - accion: registrar el hallazgo como drift post-cierre del mismo patch y preparar correccion minima centrada en `src/styles/global.css`.
  - estado: `resuelto`
  - evidencia de resolucion: Playwright CLI/Chromium post-fix confirma `bodyScrollWidth` igual al viewport en `/en/blog/` y `/es/blog/` para `375x812`, `768x1024` y `1440x900`.

---

## 7. Reconciliacion de fuente viva

- fuente viva afectada:
  - `docs/content/content-system.md`
  - `docs/content/content-master.md`
- cambio requerido: incorporar la guia editorial suave de `excerpt` y alinear la expectativa del `blog index`.
- estado: `aplicado`
- evidencia: ambas fuentes ya contienen el rango `24–32` palabras y su relacion con featured/cards.

---

## 8. Validaciones

- validacion:
  - tipo: `automated`
  - comando o revision: `npm test`
  - resultado esperado: suite existente en verde
  - resultado obtenido: `3` tests passed
  - estado: `pass`
  - evidencia: salida de terminal del `2026-05-18`.
- validacion:
  - tipo: `automated`
  - comando o revision: `npm run build`
  - resultado esperado: build Astro exitoso
  - resultado obtenido: build exitoso en corrida secuencial
  - estado: `pass`
  - evidencia: salida de terminal del `2026-05-18`.
- validacion:
  - tipo: `automated`
  - comando o revision: `git diff --check`
  - resultado esperado: sin whitespace errors
  - resultado obtenido: sin salida
  - estado: `pass`
  - evidencia: salida de terminal del `2026-05-18`.
- validacion:
  - tipo: `deferred`
  - comando o revision: revision visual asistida de `/en/blog/` y `/es/blog/` en `375px`, `768px` y `1440px`
  - resultado esperado: confirmar primer viewport, jerarquia de logos y legibilidad de excerpts
  - resultado obtenido: no ejecutada por falta de Chrome disponible para Playwright/DevTools
  - estado: `skipped`
  - evidencia: error de Playwright indicando que no existe la distribucion `chrome` en el entorno.
- validacion:
  - tipo: `automated`
  - comando o revision: Playwright CLI/Chromium post-cierre sobre `/es/blog/` en `375x812`, `768x1024` y `1440x900`
  - resultado esperado: confirmar si el riesgo residual responsive seguia abierto o podia cerrarse
  - resultado obtenido: `375x812` falla por overflow horizontal real (`body.scrollWidth: 764`); `768x1024` y `1440x900` no muestran overflow horizontal medido.
  - estado: `fail`
  - evidencia: medicion Playwright del `2026-05-23` y capturas locales en `/tmp/es-blog-375.png`, `/tmp/es-blog-768.png`, `/tmp/es-blog-1440.png`.
- validacion:
  - tipo: `automated`
  - comando o revision: `npm run build`
  - resultado esperado: build Astro exitoso despues del fix CSS
  - resultado obtenido: build exitoso
  - estado: `pass`
  - evidencia: salida de terminal del `2026-05-23`.
- validacion:
  - tipo: `automated`
  - comando o revision: `npm test`
  - resultado esperado: suite existente en verde
  - resultado obtenido: `3` tests passed
  - estado: `pass`
  - evidencia: salida de terminal del `2026-05-23`.
- validacion:
  - tipo: `automated`
  - comando o revision: Playwright CLI/Chromium post-fix sobre `/en/blog/` y `/es/blog/` en `375x812`, `768x1024` y `1440x900`
  - resultado esperado: sin overflow horizontal y paneles clave dentro del viewport
  - resultado obtenido: pass; `bodyScrollWidth` coincide con el viewport en todos los casos medidos y en `375px` intro/featured quedan en `327px`.
  - estado: `pass`
  - evidencia: medicion Playwright del `2026-05-23` y capturas locales `/tmp/blog-fix-*.png`.
- validacion:
  - tipo: `not applicable`
  - comando o revision: `npm run lint`
  - resultado esperado: ejecutar si existiera script
  - resultado obtenido: `lint` no existe en `package.json`
  - estado: `skipped`
  - evidencia: inspeccion de `package.json`.

---

## 9. Riesgos residuales

- riesgo: Playwright MCP sigue sin Chrome del sistema y no puede usarse como herramienta primaria de revision visual.
  - impacto: la validacion asistida depende por ahora de Playwright CLI/Chromium y de revision humana opcional en dispositivo real.
  - mitigacion: conservar mediciones CLI como evidencia automatizada y revisar en dispositivo real antes de publicar si se quiere cerrar el riesgo visual al maximo.
- riesgo: la correccion del overflow mobile podria reducir demasiado la presencia de `Editorial Background` si se resuelve solo achicando logos.
  - impacto: degradaria uno de los objetivos visuales del patch original.
  - mitigacion: preferir grilla responsive dentro del ancho disponible antes que volver a una presencia minima del bloque.

---

## 10. Pendientes

- pendiente: correccion minima del overflow responsive mobile.
  - estado: `resuelto`
  - evidencia: `src/styles/global.css` actualizado y validaciones post-fix en verde.
- pendiente: revision visual humana en dispositivo real.
  - estado: `opcional`
  - razon: Playwright CLI/Chromium valido los breakpoints requeridos, pero MCP sigue bloqueado por Chrome del sistema.

---

## 11. Criterio de cierre

- [x] fases seleccionadas cerradas o diferidas con razon
- [x] assumptions criticas resueltas, aceptadas o escaladas
- [x] decisiones relevantes registradas
- [x] drift clasificado y resuelto o diferido
- [x] validaciones registradas
- [x] fuente viva reconciliada o marcada no aplicable
- [x] riesgos residuales visibles
