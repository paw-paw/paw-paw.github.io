# Security Remediation Roadmap

## Metadatos

- Fase: `6.5`
- Estado: `active`
- Ultima actualizacion: `2026-03-15`
- Owner: `Codex + user`
- Naturaleza: `roadmap auxiliar intermedio entre Fase 6 y Fase 7`
- Depende de:
  - `docs/README.md`
  - `docs/plans/roadmap.md`
  - `docs/plans/phase-6.md`
  - `docs/delivery/deployment.md`
  - `docs/delivery/seo-spec.md`
  - cierre efectivo de `Fase 6`
- Desbloquea:
  - ejecucion mas segura de `Fase 7`
  - reduccion del riesgo de advisories en la rama publicada

---

## 1. Objetivo del roadmap

Definir un plan completo y ejecutable para reducir las vulnerabilidades reportadas por `npm audit` sin romper la base ya aprobada en `Fase 5` y `Fase 6`. Este roadmap no sustituye el roadmap principal; lo complementa como una intervencion intermedia entre SEO/deploy real y la fase de motion/polish.

El resultado esperado no es solo “actualizar dependencias”, sino dejar el sitio con una base de runtime mas segura, lockfile regenerado, dependencias transitivas reevaluadas y una decision tecnica explicita sobre `astro-compress`.

---

## 2. Fuente de verdad aplicable

- `docs/README.md`
- `docs/plans/roadmap.md`
- documentos contractuales aplicables:
  - `docs/delivery/deployment.md`
  - `docs/architecture/i18n-spec.md`
  - `docs/architecture/site-architecture.md`
  - `docs/visual/visual-system.md`
- documentos auxiliares aplicables:
  - `docs/plans/phase-6.md`
  - `docs/delivery/seo-spec.md`
  - `docs/delivery/release-checklist.md`
  - `docs/governance/decision-log.md`

Nota:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- este roadmap no redefine el roadmap principal; organiza una remediacion tecnica intermedia
- `Fase 7` no debe absorber esta remediacion de manera implicita

---

## 3. Baseline actual del problema

### Estado observado

- `npm audit` reporta actualmente:
  - `9 high`
  - `3 moderate`
  - `2 low`
  - `0 critical`
  - `14` paquetes afectados
- los paquetes directos mas relevantes hoy son:
  - `astro`
  - `preact`
  - `astro-compress`
- los paquetes transitivos mas relevantes hoy son:
  - `devalue`
  - `h3`
  - `rollup`
  - `vite`
  - `minimatch`
  - `glob`
  - `js-yaml`
  - `mdast-util-to-hast`
  - `svgo`
  - `brace-expansion`
  - `diff`

### Snapshot tecnico confirmado en `SR-0`

- baseline ejecutado el `2026-03-15`
- `npm run build`: `OK`
- `npm audit`: ejecutado con red, baseline confirmado
- el build actual sigue completando sobre:
  - `astro@5.7.13`
  - `@astrojs/preact@4.1.1`
  - `preact@10.27.2`
  - `astro-compress@2.3.8`
- el grafo confirmado de origen de advisories hoy queda asi:
  - directos:
    - `astro`
    - `preact`
    - `astro-compress`
  - transitivos via `astro`:
    - `devalue`
    - `diff`
    - `js-yaml`
    - `mdast-util-to-hast`
    - `h3`
    - `vite`
    - `rollup`
  - transitivos via `tailwindcss -> sucrase -> glob`:
    - `glob`
    - `minimatch`
  - transitivos via `astro-compress`:
    - `svgo`
  - transitivos menores:
    - `brace-expansion`

### Dependencias directas actuales relacionadas

- `astro@^5.7.13`
- `@astrojs/preact@^4.1.1`
- `preact@^10.27.2`
- `astro-compress@^2.3.8`

### Principio de remediacion aprobado

- la estrategia sera amplia, no minima
- la remediacion debe perseguir:
  - `0 high`
  - `0 moderate`
- los `low` quedan como objetivo secundario; si se resuelven dentro del mismo movimiento tecnico, mejor
- las validaciones exigidas por fase seran:
  - `npm run build`
  - `npm audit`
- `astro-compress` no queda fijado todavia ni como “se mantiene” ni como “se elimina”; debe pasar por una fase de decision tecnica

---

## 4. Objetivo de cierre global

Este roadmap solo se considera completo si:

- no quedan advisories `high`
- no quedan advisories `moderate`
- el sitio sigue buildando correctamente
- no se rompe routing, i18n, metadata, assets ni deploy por `GitHub Pages`
- la decision sobre `astro-compress` queda cerrada y documentada
- `Fase 7` puede empezar sobre una base tecnica mas estable que la actual

---

## 5. Forma del roadmap

Este roadmap se descompone en `5` subfases finas para minimizar retrabajo y aislar riesgos:

1. `SR-0` — Baseline, freeze y mapeo de impacto
2. `SR-1` — Upgrade del core framework y dependencias directas
3. `SR-2` — Resolucion de transitivas y regeneracion controlada del lockfile
4. `SR-3` — Decision tecnica sobre `astro-compress` y pipeline de compresion
5. `SR-4` — Verificacion final, cierre documental y handoff a `Fase 7`

---

## 6. Subfases detalladas

### SR-0 — Baseline, freeze y mapeo de impacto

#### Objetivo

Congelar el baseline real antes de cambiar dependencias y dejar trazado que parte del riesgo esta en directas y que parte es transitiva.

#### Debe definir

- un snapshot del `npm audit` inicial
- un snapshot del grafo de dependencias relevantes
- un mapa `paquete vulnerable -> origen directo o transitivo`
- un inventario de superficies sensibles al cambio:
  - build Astro
  - i18n `en/es`
  - sitemap
  - metadata SEO
  - GitHub Pages Actions
  - compresion de assets

#### Debe ejecutar

- `npm audit`
- `npm ls` para paquetes vulnerables clave
- `npm run build`

#### Entregables

- actualizar este roadmap con baseline confirmado
- registrar en `decision-log` que la remediacion entra en ejecucion si se aprueba

#### Estado de ejecucion

- [x] `npm audit` ejecutado
- [x] `npm ls` de dependencias vulnerables ejecutado
- [x] `npm run build` ejecutado
- [x] snapshot de advisories confirmado en este documento
- [x] separacion directas vs transitivas documentada
- [x] baseline tecnico previo a upgrades confirmado

#### Riesgos

- asumir que todos los advisories requieren accion directa individual
- no distinguir bien entre impacto de framework y de tooling

#### Criterio de cierre

- ya esta confirmado el inventario real de vulnerabilidades
- ya estan separadas directas y transitivas
- ya existe baseline tecnico previo a upgrades

#### Resultado de cierre de `SR-0`

- `SR-0` queda `done`
- el roadmap pasa a estado `active`
- `SR-1` queda desbloqueada como siguiente subfase de ejecucion

---

### SR-1 — Upgrade del core framework y dependencias directas

#### Objetivo

Resolver la mayor parte del riesgo empezando por upgrades directos de alto impacto, especialmente `astro` y `preact`, sin abrir todavia una decision apresurada sobre `astro-compress`.

#### Debe modificar

- `package.json`
- `package-lock.json`

#### Debe intentar subir

- `astro` a una version no afectada por los advisories actuales
- `@astrojs/preact` a una version compatible con el nuevo `astro`
- `preact` a una version no afectada
- cualquier paquete directo arrastrado por compatibilidad del upgrade anterior
- integraciones Astro cercanas si el salto de version mayor lo exige, especialmente:
  - `@astrojs/sitemap`
  - `@astrojs/tailwind`

#### No debe hacer todavia

- retirar `astro-compress` por intuicion
- mezclar cambios visuales o de contenido
- reabrir Fase 5/6 como si fueran fases fallidas

#### Validaciones obligatorias

- `npm install`
- `npm run build`
- `npm audit`

#### Objetivo esperado de esta subfase

- bajar sustancialmente el conteo de advisories
- confirmar si `astro` arrastra una parte grande del problema, como es esperable

#### Riesgos

- incompatibilidades entre `astro` y `@astrojs/preact`
- incompatibilidades entre `astro` y las integraciones Astro cercanas
- cambios de comportamiento sutiles en build, metadata o i18n
- nuevos warnings de config por upgrade mayor o menor

#### Criterio de cierre

- el core directo queda actualizado
- el sitio sigue buildando
- existe una nueva foto de advisories para decidir la siguiente subfase

#### Resultado de ejecucion

- `SR-1` queda `done`
- el intento de salto a `Astro 6` se descarta en esta subfase por conflicto formal con `@astrojs/tailwind`
- la ruta efectiva de cierre queda en:
  - `astro@5.18.1`
  - `@astrojs/preact@4.1.3`
  - `preact@10.29.0`
  - `@astrojs/sitemap@3.7.1`
- el baseline de `npm audit` baja de:
  - `9 high / 3 moderate / 2 low / 14 paquetes`
  - a `5 high / 1 moderate / 1 low / 7 paquetes`
- desaparecen del baseline:
  - `astro`
  - `preact`
  - `devalue`
  - `h3`
  - `vite`
  - `js-yaml`
- quedan vivos principalmente:
  - `astro-compress`
  - `svgo`
  - `rollup`
  - `glob`
  - `minimatch`
  - `mdast-util-to-hast`
  - `brace-expansion`
- `SR-2` queda desbloqueada sobre un baseline posterior y mas acotado

---

### SR-2 — Resolucion de transitivas y regeneracion controlada del lockfile

#### Objetivo

Atacar vulnerabilidades que sobrevivan al upgrade del core y que dependan de la cadena transitiva, especialmente `devalue`, `h3`, `rollup`, `vite`, `minimatch`, `glob`, `js-yaml` y `mdast-util-to-hast`.

#### Debe modificar

- `package-lock.json`
- `package.json` solo si hace falta fijar versiones mas nuevas o ajustar rangos para destrabar transitivas
- `overrides` si y solo si hace falta una mitigacion controlada y documentada

#### Debe evaluar

- si el upgrade del core ya elimina:
  - `devalue`
  - `h3`
  - `rollup`
  - `vite`
  - `js-yaml`
  - `mdast-util-to-hast`
- si quedan advisories residuales por tooling ajeno al runtime real
- si `tailwindcss -> sucrase -> glob/minimatch` sigue arrastrando advisories

#### Puede requerir

- un refresh mas amplio del lockfile
- revisar si el grafo queda mejor con upgrades parciales o con reinstall limpia
- usar `overrides` solo como herramienta controlada, no como parche por defecto

#### No debe hacer

- introducir nuevas dependencias
- romper el mecanismo de build o deploy por resolver un advisory menor

#### Validaciones obligatorias

- `npm install`
- `npm run build`
- `npm audit`

#### Riesgos

- reducir advisories a costa de un lockfile fragil
- esconder problemas reales bajo `overrides` innecesarios
- forzar tooling mas nuevo que el stack actual no tolere bien

#### Criterio de cierre

- ya esta claro que advisories sobreviven realmente al refresh de transitivas
- el lockfile queda coherente
- los `high` y `moderate` residuales, si existen, ya son entendibles y atribuibles

---

### SR-3 — Decision tecnica sobre `astro-compress` y pipeline de compresion

#### Objetivo

Cerrar de forma explicita si `astro-compress` se mantiene actualizado, se sustituye o se retira, en vez de arrastrarlo pasivamente como dependencia vulnerable.

#### Problema a resolver

- `astro-compress` hoy aparece afectado por `svgo`
- esta dependencia no es solo un paquete mas; afecta el pipeline de salida, compresion y posiblemente el tiempo de build

#### Alternativas que esta subfase debe comparar

1. Mantener `astro-compress` actualizado si una version segura y compatible resuelve el advisory.
2. Retirar `astro-compress` si el valor real para el sitio no compensa la superficie y el riesgo.
3. Sustituirlo por una alternativa solo si existe una razon fuerte y documentada.

#### Debe evaluar

- impacto real de quitar `astro-compress` sobre:
  - salida en `dist/`
  - peso de assets
  - GitHub Pages deploy
  - simplicidad del stack
- si el advisory de `svgo` desaparece al actualizar
- si aparecen regresiones visibles o de build

#### Validaciones obligatorias

- `npm run build`
- comparar output build antes/despues de la decision
- `npm audit`

#### Riesgos

- mantener una dependencia por inercia aunque ya no aporte lo suficiente
- quitarla demasiado pronto y degradar el pipeline sin necesidad

#### Criterio de cierre

- `astro-compress` queda:
  - mantenido
  - reemplazado
  - o retirado
- la decision queda documentada en `decision-log`
- el pipeline final de build sigue siendo coherente con `deployment.md`

---

### SR-4 — Verificacion final, cierre documental y handoff a Fase 7

#### Objetivo

Cerrar la remediacion como una intervencion completa, no como una serie de upgrades sueltos, y dejar a `Fase 7` desbloqueada sobre un baseline mas seguro.

#### Debe verificar

- `npm audit` final
- `npm run build` final
- consistencia de:
  - i18n
  - rutas puente
  - sitemap
  - canonicals
  - Pages Actions

#### Debe actualizar

- `docs/governance/decision-log.md`
- este roadmap
- `docs/delivery/release-checklist.md` si cambia algun paso operativo de build/deploy
- `docs/delivery/deployment.md` si la decision sobre compresion cambia el pipeline real

#### Debe dejar explicito

- conteo final de advisories
- si quedan `low` residuales
- que parte del riesgo se considero aceptable
- que parte quedo realmente resuelta

#### Criterio de cierre

- `0 high`
- `0 moderate`
- build estable
- deploy workflow coherente
- documentacion sincronizada
- `Fase 7` desbloqueada sin deuda de seguridad relevante pendiente

---

## 7. Archivos probables a tocar

### Docs

- `docs/plans/security-remediation-roadmap.md`
- `docs/governance/decision-log.md`
- `docs/delivery/deployment.md`
- `docs/delivery/release-checklist.md`
- posiblemente `docs/plans/phase-7.md` si se deja una nota de dependencia tecnica

### Codigo y config

- `package.json`
- `package-lock.json`
- `astro.config.mjs`
- `src/layouts/Layout.astro`
- `src/utils/seo.ts`
- `src/utils/i18n.ts`
- `src/pages/en/**`
- `src/pages/es/**`
- cualquier archivo afectado por cambios de compatibilidad del stack

Nota:

- esta lista es preventiva
- no implica que todos estos archivos deban cambiar

---

## 8. Dependencias y bloqueos

### Dependencias

- `Fase 6` cerrada
- deploy actual por `GitHub Pages` ya documentado
- i18n `en/es` ya establecida
- metadata SEO ya cerrada

### Bloqueos posibles

- upgrades directos que exijan ajustes de configuracion no previstos
- advisories transitivos que no desaparezcan con upgrades razonables
- necesidad de usar `overrides` como mitigacion temporal
- ruptura del pipeline de compresion si `astro-compress` cambia o sale
- discrepancia entre conteo de GitHub Dependabot y `npm audit` local por timing de advisories

### Mitigacion

- aislar cambios por subfase
- ejecutar `npm audit` tras cada ola de upgrades
- no mezclar seguridad con cambios visuales o editoriales
- documentar cualquier `override` como medida temporal y no silenciosa

---

## 9. Validaciones

### Documentales

- [ ] verificar alineacion con `docs/README.md`
- [ ] verificar alineacion con `docs/plans/roadmap.md`
- [ ] verificar que este roadmap se mantenga como intermedio entre `Fase 6` y `Fase 7`
- [ ] verificar que no se introduzcan decisiones nuevas de producto por resolver advisories

### Tecnicas

- [ ] `npm install`
- [ ] `npm run build`
- [ ] `npm audit`
- [ ] verificar workflow de GitHub Pages si cambia el pipeline de build

### Manuales

- [ ] smoke review de `/en/`
- [ ] smoke review de `/es/`
- [ ] smoke review de `/en/work/` y `/es/work/`
- [ ] smoke review de `/en/experience/` y `/es/experience/`
- [ ] smoke review de `/en/contact/` y `/es/contact/`

---

## 10. Criterio de cierre del roadmap

El roadmap solo se considera cerrado si:

- [ ] no quedan advisories `high`
- [ ] no quedan advisories `moderate`
- [ ] el build final queda en verde
- [ ] el mecanismo de deploy sigue siendo coherente con `GitHub Pages Actions`
- [ ] la decision sobre `astro-compress` queda cerrada y documentada
- [ ] la documentacion operativa queda sincronizada
- [ ] `Fase 7` puede empezar sin arrastrar deuda de seguridad relevante del stack

---

## 11. Riesgos y notas

### Riesgos

- perseguir `0 total` puede abrir trabajo desproporcionado sobre `low`
- un upgrade amplio del stack puede introducir regresiones ajenas a seguridad
- algunas vulnerabilidades pueden estar en tooling de build y no en runtime publico
- GitHub y `npm audit` no siempre reportaran exactamente el mismo set al mismo tiempo

### Notas operativas

- este roadmap no implica que haya que detener todo trabajo visual o de contenido indefinidamente
- pero si conviene cerrarlo antes de meter mas complejidad en `Fase 7`
- la subfase mas sensible tecnicamente sera la decision sobre `astro-compress`

---

## 12. Registro de cambios del plan

- `2026-03-15`
  - se crea roadmap auxiliar de remediacion de seguridad
  - se posiciona explicitamente entre `Fase 6` y `Fase 7`
  - se define objetivo de `0 high` y `0 moderate`
  - se aprueba estrategia amplia con `5` subfases
- `2026-03-15`
  - se ejecuta `SR-0`
  - se confirma baseline tecnico con `npm audit`, `npm ls` y `npm run build`
  - el roadmap pasa de `draft` a `active`
- `2026-03-15`
  - se aprueba que `SR-1` pueda ampliarse para incluir integraciones Astro cercanas
  - el salto a `Astro 6` queda permitido aunque arrastre `@astrojs/sitemap` y `@astrojs/tailwind`
- `2026-03-15`
  - `SR-1` se ejecuta y cierra sobre la ruta segura de `Astro 5`
  - el baseline de advisories queda reducido a `7` paquetes afectados
