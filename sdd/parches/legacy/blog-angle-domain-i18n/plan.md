# Plan: Blog Angle Domain I18n

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

- Change id: `blog-angle-domain-i18n`
- Estado: `done`
- Ultima actualizacion: `2026-04-26`
- Owner: `pawpaw + Codex`
- Depende de:
  - `docs/sdd/parches/blog-angle-domain-i18n/definicion.md`
  - `docs/sdd/parches/blog-angle-domain-i18n/decision.log`
- Desbloquea:
  - `docs/sdd/parches/blog-angle-domain-i18n/tasks.md`

---

## 1. Fuente de verdad aplicable

- `docs/README.md`
- `docs/sdd/parches/blog-angle-domain-i18n/definicion.md`
- `docs/sdd/parches/blog-angle-domain-i18n/decision.log`
- documentos contractuales aplicables:
  - `docs/architecture/site-architecture.md`
  - `docs/architecture/i18n-spec.md`
  - `docs/content/content-system.md`
  - `docs/content/content-master.md`
- documentos auxiliares aplicables:
  - `docs/governance/decision-log.md`
  - `docs/sdd/templates/plan.md`
  - `docs/sdd/parches/blog-taxonomy-vision/definicion.md`
  - `docs/sdd/parches/blog-taxonomy-vision/tasks.md`

Nota:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- este plan mantiene el alcance aprobado: `angle` y `domain` pasan a claves internas estables con labels localizados, sin reabrir su semantica editorial
- `category` sigue siendo la taxonomy principal y navegable; este cambio no crea rutas, archives ni indices nuevos para `angle` o `domain`

---

## 2. Lectura brownfield

Resume el estado real del repo que condiciona el cambio:

- estructura existente:
  - `src/content.config.ts` valida `angle` y `domain` con `z.enum(blogAngles)` y `z.enum(blogDomains)`
  - `src/utils/blog.ts` concentra arrays y tipos de `angle` y `domain` usando labels visibles
  - `src/content/blog/*.md` guarda valores visibles en ingles dentro del frontmatter
  - `BlogCard.astro`, `BlogFeaturedPanel.astro` y `BlogPostMeta.astro` renderizan `angle` y `domain` tal cual llegan del contenido
  - `src/i18n/en.json` y `src/i18n/es.json` son la superficie natural para labels localizados de runtime
- patrones existentes:
  - el blog ya usa `category` como superficie navegable principal
  - el runtime actual acopla dato editorial, validacion y label visible a la misma string en ingles
  - los tests actuales validan labels visibles en ingles y reflejan el contrato legado
- deuda o drift relevante:
  - `docs/content/content-system.md` y artefactos derivados todavia describen `angle` y `domain` como labels visibles monolingues
  - el contenido persistido en posts no esta desacoplado de la UI ni del locale
  - la cobertura automatizada hoy espera el modelo anterior en al menos `tests/public-release-closure.test.mjs` y `tests/blog-es-detail-alignment.test.mjs`
- restricciones tecnicas:
  - el cambio debe ser brownfield y preservar el modelo editorial `category -> angle -> domain`
  - no se agregan rutas nuevas ni taxonomias navegables secundarias
  - el set de valores aprobado para `angle` y `domain` no se reabre en este parche

---

## 3. Zonas afectadas

### Docs

- `docs/content/content-system.md`
- `docs/content/content-master.md`
- `docs/architecture/site-architecture.md`
- `docs/architecture/i18n-spec.md`
- `docs/governance/decision-log.md`

### Codigo

- `src/content.config.ts`
- `src/utils/blog.ts`
- `src/components/blog/BlogCard.astro`
- `src/components/blog/BlogFeaturedPanel.astro`
- `src/components/blog/BlogPostMeta.astro`
- `src/i18n/en.json`
- `src/i18n/es.json`
- `src/content/blog/*.md`

### Configuracion, tests o build

- `package.json`
- `tests/public-release-closure.test.mjs`
- `tests/blog-es-detail-alignment.test.mjs`

---

## 4. Bloques de implementacion

### Bloque A - Sincronizacion contractual y trazabilidad

- Objetivo:
  - alinear los contratos para que `angle` y `domain` dejen de describirse como labels visibles en ingles y queden definidos como claves internas con representacion localizada
- Cambios esperados:
  - sincronizar `docs/content/content-system.md` y `docs/content/content-master.md` con el nuevo contrato de representacion
  - reafirmar en `docs/architecture/site-architecture.md` y `docs/architecture/i18n-spec.md` que `category` sigue siendo la unica taxonomy navegable y que no nacen rutas nuevas
  - registrar la continuidad con `blog-taxonomy-vision` en `docs/governance/decision-log.md` si hace falta consolidar trazabilidad global
- Dependencias:
  - `definicion.md`
  - `decision.log`
- Riesgos:
  - dejar drift entre contratos y migracion si se implementa runtime antes de cerrar la forma documental objetivo

### Bloque B - Runtime brownfield y migracion de contenido

- Objetivo:
  - desacoplar el dato estable del label visible sin romper el flujo editorial existente ni la navegacion basada en `category`
- Cambios esperados:
  - convertir `src/utils/blog.ts` desde arrays de labels visibles a claves estables y resolver labels por locale
  - adaptar `src/content.config.ts` para validar claves internas en vez de strings visibles
  - introducir labels localizados en `src/i18n/en.json` y `src/i18n/es.json`
  - actualizar `src/content/blog/*.md` para persistir claves estables en frontmatter
  - cambiar `BlogCard.astro`, `BlogFeaturedPanel.astro` y `BlogPostMeta.astro` para renderizar labels localizados en runtime
- Dependencias:
  - Bloque A completo o, como minimo, contrato documental suficientemente sincronizado para evitar ambiguedad
- Riesgos:
  - mezclar posts migrados y no migrados
  - mantener acoplamiento parcial si algun componente sigue imprimiendo la clave interna
  - introducir diferencias de locale sin cobertura de pruebas ajustada

### Bloque C - Validacion, ajuste de tests y cierre brownfield

- Objetivo:
  - verificar que el cambio mantiene comportamiento estructural estable y actualiza las expectativas automatizadas al nuevo contrato
- Cambios esperados:
  - ajustar `tests/public-release-closure.test.mjs` y `tests/blog-es-detail-alignment.test.mjs` para dejar de depender de labels visibles en ingles donde corresponda
  - ejecutar build y suite de tests del repo
  - hacer revision manual del detail y cards del blog en `en` y `es`
- Dependencias:
  - Bloque B completo
- Riesgos:
  - falsos positivos si los tests validan claves internas pero la UI no refleja labels localizados
  - cierre incompleto si se valida solo `es` y no se compara `en`

---

## 5. Datos, schemas y contratos

- Contratos documentales afectados:
  - `docs/content/content-system.md`
  - `docs/content/content-master.md`
  - `docs/architecture/site-architecture.md`
  - `docs/architecture/i18n-spec.md`
- Datos o contenido afectados:
  - frontmatter de `src/content/blog/*.md` para `angle` y `domain`
  - catalogo de labels localizados en `src/i18n/en.json` y `src/i18n/es.json`
- Schemas o modelos afectados:
  - schema `blog_post` en `src/content.config.ts`
  - tipos y utilidades de `src/utils/blog.ts`
- Compatibilidad esperada:
  - `category` permanece como taxonomy navegable principal
  - `angle` y `domain` siguen siendo metadatos editoriales no navegables
  - no se crean rutas nuevas ni cambia la arquitectura publica del blog
  - la migracion debe dejar contenido, schema y render alineados dentro del mismo parche

---

## 6. Validaciones

### Documentales

- [ ] verificar alineacion con `docs/README.md`
- [ ] verificar alineacion con `docs/content/content-system.md`, `docs/content/content-master.md`, `docs/architecture/site-architecture.md` y `docs/architecture/i18n-spec.md`
- [ ] verificar trazabilidad con `docs/sdd/parches/blog-taxonomy-vision/*` y `docs/sdd/parches/blog-angle-domain-i18n/decision.log`

### Tecnicas

- [ ] `npm run build`
- [ ] `npm test`
- [ ] revisar que el schema de contenido, los posts migrados y los componentes del blog usen la misma forma de dato

### Manuales

- [ ] revision visual/manual de cards, featured panel y meta del post en `en`
- [ ] revision visual/manual de cards, featured panel y meta del post en `es`
- [ ] revision de que `category` siga siendo la unica taxonomy navegable visible

---

## 7. Riesgos y mitigaciones

- riesgo:
  - impacto: drift contractual si se toca runtime sin sincronizar primero la descripcion contractual del modelo
  - mitigacion: ejecutar primero el bloque de sincronizacion contractual y mantener trazabilidad con `decision.log`

- riesgo:
  - impacto: posts con combinacion de labels visibles y claves internas durante la migracion
  - mitigacion: tratar schema, contenido y render como un mismo corte brownfield dentro del mismo parche

- riesgo:
  - impacto: fuga de claves internas a la UI por componentes que siguen renderizando el valor crudo
  - mitigacion: centralizar resolucion de labels localizados y revisar manualmente las superficies visibles

- riesgo:
  - impacto: cambio accidental de arquitectura si `angle` o `domain` empiezan a tratarse como taxonomias navegables
  - mitigacion: mantener como criterio contractual y tecnico que solo `category` genera navegacion taxonomy

---

## 8. Decisiones que requieren humano

- [x] forma contractual exacta del mapping de labels localizados
  - opciones evaluadas:
    - clave estable con diccionario `{ en, es }` centralizado
    - clave estable con labels resueltos exclusivamente desde `src/i18n/*.json`
  - resolucion asumida:
    - el parche adopta `src/i18n/en.json` y `src/i18n/es.json` como fuente de labels visibles; `src/utils/blog.ts` conserva claves estables, tipos y helpers
  - impacto:
    - fija el punto de acoplamiento entre schema, utilidades de blog y traducciones antes de bajar a `tasks.md`

---

## 9. Criterio de cierre tecnico

El plan queda listo para `sdd-tasks` solo si:

- [x] el alcance respeta `definicion.md`
- [x] las zonas afectadas estan identificadas
- [x] los bloques de implementacion son secuenciables
- [x] las validaciones son reales y proporcionales
- [x] no se proponen rutas nuevas ni taxonomias navegables adicionales
- [x] la decision sobre la forma exacta del mapping localizado esta resuelta y registrada en `decision.log`

---

## 10. Registro de cambios

- Fecha: `2026-04-26`
  - cambio: creacion inicial de `plan.md` para `blog-angle-domain-i18n`
  - razon: convertir la definicion activa en un plan brownfield secuenciado por contrato, runtime/migracion y validacion
- Fecha: `2026-04-26`
  - cambio: cierre de la decision sobre el mapping localizado
  - razon: destrabar el paso a `tasks.md` con una fuente de labels visible ya alineada al patron i18n del repo
