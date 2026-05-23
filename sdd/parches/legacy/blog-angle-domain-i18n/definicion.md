# Definicion: Blog Angle Domain I18n

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

---

## Estado

- Change id: `blog-angle-domain-i18n`
- Estado: `done`
- Fuente: `docs/sdd/parches/blog-angle-domain-i18n/handover.md`
- Ultima actualizacion: `2026-04-26`
- Owner: `pawpaw + Codex`

---

## 1. Objetivo

Continuar el cambio `blog-taxonomy-vision` para que `angle` y `domain` de `blog_post` usen claves internas estables y labels visuales localizados en `en` y `es`.
El cambio debe preservar el modelo editorial ya aprobado `category -> angle -> domain`, sin convertir `angle` o `domain` en taxonomias navegables nuevas.
Cuando cierre esta linea de definicion, debe quedar explicito que `category` sigue siendo la capa principal y navegable, y que los contratos actuales deben dejar de listar `angle` y `domain` como labels visibles monolingues en ingles.

---

## 2. No objetivos

- [ ] no crear rutas, archives ni indices nuevos para `angle` o `domain`
- [ ] no reabrir la semantica editorial de `category`, `angle` o `domain`
- [ ] no cambiar la politica general de i18n del sitio fuera de esta representacion editorial
- [ ] no introducir taxonomias adicionales ni un sistema de tags libre

---

## 3. Fuentes de verdad aplicables

- `docs/README.md`
- `AGENTS.md`
- documentos contractuales aplicables:
  - `docs/content/content-system.md`
  - `docs/content/content-master.md`
  - `docs/architecture/site-architecture.md`
  - `docs/architecture/i18n-spec.md`
  - `docs/governance/decision-log.md`
- documentos auxiliares aplicables:
  - `docs/sdd/templates/definicion.md`
  - `docs/sdd/parches/blog-taxonomy-vision/definicion.md`
  - `docs/sdd/parches/blog-taxonomy-vision/tasks.md`
- fuentes externas o handovers:
  - `docs/sdd/parches/blog-angle-domain-i18n/handover.md`

Nota:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- `docs/sdd/` es auxiliar operativo, no contrato superior
- este cambio requiere actualizar contratos documentales porque `docs/content/content-system.md` hoy lista `angle` y `domain` con labels visibles en ingles

---

## 4. Alcance

### Si entra

- [ ] formalizar que `angle` y `domain` pasan a representarse como clave interna estable mas label visual localizado por locale
- [ ] mantener `category` como capa editorial principal y unica superficie navegable para taxonomy archive
- [ ] actualizar los contratos del sistema de contenido para reflejar la representacion localizada de `angle` y `domain` en `en` y `es`
- [ ] dejar trazado el impacto sobre contenido, schema y render de UI donde hoy se leen `angle` y `domain`
- [ ] preservar la continuidad con `blog-taxonomy-vision` sin cambiar el set aprobado de valores

### Fuera de alcance

- [ ] crear navegacion secundaria o SEO nuevo para `angle` o `domain`
- [ ] definir nuevas listas editoriales fuera de las ya aprobadas en el handover
- [ ] rediseñar cards, detail o arquitectura del blog mas alla de lo necesario para la representacion localizada
- [ ] cambiar routing, deployment o estrategia de locales del sitio

---

## 5. Superficies afectadas

### Docs

- `docs/content/content-system.md`
- `docs/content/content-master.md`
- `docs/governance/decision-log.md`
- `docs/sdd/parches/blog-taxonomy-vision/*` como antecedente de continuidad y trazabilidad

### Codigo o contenido

- `src/content.config.ts`
- `src/content/blog/*.md`
- `src/utils/blog.ts`
- `src/components/blog/*.astro`
- `src/pages/*/blog/*.astro`

### Configuracion o validacion

- `package.json` para validar si existen checks relevantes de schema/build
- validaciones editoriales o de contenido que cubran vocabulario controlado y rendering por locale

---

## 6. Decisiones conocidas

- decision:
  - `blog-angle-domain-i18n` continua sobre `blog-taxonomy-vision`
  - razon: el modelo de tres capas ya fue aprobado; este cambio solo ajusta la representacion estable y localizada de `angle` y `domain`
  - documentos o areas afectadas:
    `docs/sdd/parches/blog-taxonomy-vision/*`, `docs/content/content-system.md`, `src/content.config.ts`

- decision:
  - `category` sigue siendo la capa principal y navegable; `angle` y `domain` no generan rutas ni archives nuevos
  - razon: el usuario lo ratifica en este cambio y ya existe contrato previo en arquitectura y governance
  - documentos o areas afectadas:
    `docs/content/content-system.md`, `docs/architecture/site-architecture.md`, `docs/architecture/i18n-spec.md`, UI del blog

- decision:
  - `angle` y `domain` deben usar claves internas estables y labels visuales localizados en `en` y `es`
  - razon: desacoplar dato estable de la etiqueta visible y eliminar la dependencia actual de labels monolingues en ingles
  - documentos o areas afectadas:
    `docs/content/content-system.md`, `src/content.config.ts`, `src/content/blog/*.md`, `src/utils/blog.ts`, componentes de render

- decision:
  - los valores aprobados en handover para `angle` y `domain` no se reabren en esta etapa
  - razon: el alcance es de representacion e i18n, no de redefinicion editorial
  - documentos o areas afectadas:
    `docs/sdd/parches/blog-angle-domain-i18n/handover.md`, `docs/content/content-system.md`, contenido del blog

---

## 7. Decisiones abiertas

- [ ] confirmar la forma contractual exacta del mapping `clave estable -> label por locale`
  - por que no bloquea esta definicion: la necesidad ya esta clara y puede detallarse en `sdd-plan`
  - quien debe decidir: `pawpaw + Codex` durante planificacion tecnica

- [ ] confirmar si el contenido existente ya guarda labels visibles en ingles o si parte del runtime ya usa slugs
  - por que no bloquea esta definicion: afecta estrategia de migracion, no el objetivo ni el alcance del cambio
  - quien debe decidir: `Codex` en el levantamiento tecnico de `sdd-plan`

---

## 8. Riesgos

- riesgo:
  - impacto: drift contractual si `content-system.md` sigue describiendo `angle` y `domain` como labels visibles en ingles mientras la implementacion cambia
  - mitigacion: actualizar primero los contratos documentales y mantener trazabilidad con `blog-taxonomy-vision`

- riesgo:
  - impacto: mezclar claves estables nuevas con contenido legado basado en labels visibles y dejar posts inconsistentes
  - mitigacion: relevar en plan las superficies con datos existentes y definir migracion o compatibilidad transitoria

- riesgo:
  - impacto: introducir i18n parcial que renderice labels localizados pero mantenga acoplamiento interno a texto visible
  - mitigacion: explicitar desde contrato la separacion entre dato estable y representacion visual

- riesgo:
  - impacto: abrir accidentalmente una nueva capa navegable o indexable para `angle` o `domain`
  - mitigacion: mantener como restriccion contractual que `category` es la unica capa navegable

---

## 9. Criterio de cierre

La definicion queda lista para `sdd-plan` solo si:

- [x] objetivo y no objetivos estan claros
- [x] las fuentes de verdad aplicables estan listadas
- [x] el alcance y fuera de alcance no se contradicen
- [x] las decisiones abiertas no bloqueantes estan visibles
- [x] los riesgos principales estan identificados
- [x] queda explicito que `content-system.md` debe actualizarse para dejar de listar `angle` y `domain` como labels visibles en ingles

---

## 10. Registro de cambios

- 2026-04-26:
  - cambio: creacion inicial de `definicion.md` para `blog-angle-domain-i18n`
  - razon: abrir el intake del ajuste i18n de `angle` y `domain` con continuidad sobre `blog-taxonomy-vision`
