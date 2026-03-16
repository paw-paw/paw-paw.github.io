# SR-2 Plan

## Metadatos

- Fase: `SR-2`
- Estado: `done`
- Ultima actualizacion: `2026-03-15`
- Owner: `Codex + user`
- Depende de:
  - `docs/README.md`
  - `docs/plans/sprint-1/roadmap.md`
  - `docs/plans/sprint-1/security-remediation-roadmap.md`
  - `docs/plans/sprint-1/SR/SR1.md`
  - cierre efectivo de `SR-1`
- Desbloquea:
  - `SR-3`
  - baseline residual final previo a la decision sobre `astro-compress`

---

## 1. Objetivo de la fase

Resolver la mayor parte posible de las vulnerabilidades transitivas que sobreviven tras `SR-1`, sin convertir esta subfase en una decision encubierta sobre `astro-compress`. Esta fase existe para limpiar el grafo residual, reevaluar el lockfile y dejar separado qué riesgo puede cerrarse con refresh transitivo normal y qué riesgo queda realmente concentrado en el frente de compresion.

Al cerrarla, el sitio debe seguir buildando, el baseline residual debe quedar mas acotado y `SR-3` debe arrancar con un problema claramente aislado.

---

## 2. Fuente de verdad aplicable

- `docs/README.md`
- `docs/plans/sprint-1/roadmap.md`
- documentos contractuales aplicables:
  - `docs/delivery/deployment.md`
  - `docs/architecture/i18n-spec.md`
  - `docs/architecture/site-architecture.md`
  - `docs/visual/visual-system.md`
- documentos auxiliares aplicables:
  - `docs/plans/sprint-1/security-remediation-roadmap.md`
  - `docs/plans/sprint-1/SR/SR1.md`
  - `docs/plans/sprint-1/phase-6.md`
  - `docs/delivery/release-checklist.md`
  - `docs/governance/decision-log.md`

Nota:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- este plan no puede contradecir documentos contractuales
- `SR-2` no debe reabrir decisiones visibles de producto, routing, i18n o SEO
- la decision final sobre `astro-compress` sigue reservada a `SR-3`

---

## 3. Inputs requeridos

### Documentos

- [x] `docs/plans/sprint-1/security-remediation-roadmap.md` en estado `active`
- [x] `docs/plans/sprint-1/SR/SR1.md` en estado `done`
- [x] `docs/delivery/deployment.md` vigente

### Decisiones previas

- [x] `SR-2` parte del baseline post-`SR-1`
- [x] `overrides` se permiten en `SR-2`, pero solo como herramienta controlada y documentada
- [x] `SR-2` puede tocar `package.json` si hace falta destrabar transitivas
- [x] el criterio de cierre debe resolver todo lo posible salvo lo que quede explicitamente reservado a `SR-3`
- [x] la validacion debe seguir evitando revision manual
- [x] `astro-compress` y `svgo` pueden beneficiarse de mitigaciones incidentales si caen gratis, pero su decision final no se toma aqui

### Estado tecnico

- [x] baseline residual post-`SR-1` confirmado:
  - `5 high`
  - `1 moderate`
  - `1 low`
  - `7` paquetes afectados
- [x] paquetes residuales actuales:
  - `astro-compress`
  - `svgo`
  - `rollup`
  - `glob`
  - `minimatch`
  - `mdast-util-to-hast`
  - `brace-expansion`
- [x] `npm run build` sigue en verde tras `SR-1`

---

## 4. Entregables documentales

### Crear

- [x] `docs/plans/sprint-1/SR/SR2.md`

### Actualizar

- [x] `docs/plans/sprint-1/security-remediation-roadmap.md`
- [x] `docs/governance/decision-log.md`

### No tocar

- [ ] `docs/delivery/deployment.md` salvo contradiccion real
- [ ] `docs/delivery/seo-spec.md`
- [ ] `docs/architecture/i18n-spec.md`
- [ ] `docs/visual/visual-system.md`

---

## 5. Alcance de implementacion

### Si entra

- [x] reevaluar el lockfile residual tras `SR-1`
- [x] intentar resolver transitivas no ligadas necesariamente a decisiones de producto
- [x] tocar `package.json` si hace falta destrabar transitivas
- [x] introducir `overrides` solo si una mitigacion limpia no existe y el beneficio es defendible
- [x] reevaluar si `astro-compress` o `svgo` mejoran incidentalmente por refresh transitivo
- [x] dejar documentado qué queda realmente reservado a `SR-3`

### No entra

- [ ] decidir el destino final de `astro-compress`
- [ ] retirar o sustituir `astro-compress` por criterio propio
- [ ] introducir nuevas dependencias funcionales
- [ ] reabrir cambios visuales, de contenido o de metadata como objetivo de esta subfase
- [ ] convertir `SR-2` en otra ola general de upgrades directos amplios

---

## 6. Tareas detalladas

### Bloque A — Baseline residual y mapeo fino

- [x] registrar la foto residual de advisories tras `SR-1`
- [x] mapear cada paquete residual a su origen en el grafo
- [x] separar:
  - [x] transitivas generales
  - [x] transitivas de tooling de build
  - [x] transitivas ligadas a `astro-compress`

### Bloque B — Resolucion transitiva sin overrides

- [x] intentar refresh limpio del lockfile y de transitivas residuales
- [x] evaluar si `rollup`, `glob`, `minimatch`, `mdast-util-to-hast` y `brace-expansion` se resuelven sin `overrides`
- [x] tocar `package.json` solo si una version directa cercana destraba transitivas de forma razonable
- [x] evitar arrastrar una nueva ola de upgrades amplios

### Bloque C — Overrides de contingencia controlada

- [x] decidir si queda algun paquete residual que amerite `override`
- [x] aplicar `overrides` solo si:
  - [x] no existe ruta limpia razonable
  - [x] el beneficio reduce advisories reales
  - [x] no rompe build ni pipeline
- [x] documentar cualquier `override` como medida explicita, no silenciosa

### Bloque D — Reevaluacion de `astro-compress` sin invadir `SR-3`

- [x] observar si algun refresh transitivo reduce el riesgo de `astro-compress` o `svgo`
- [x] registrar el resultado
- [x] no cerrar aun la decision final sobre mantener, retirar o sustituir `astro-compress`

### Bloque E — Validacion tecnica sin revision manual

- [x] ejecutar `npm install`
- [x] ejecutar `npm run build`
- [x] ejecutar `npm audit`
- [x] ejecutar checks automatizados sobre `dist` para confirmar:
  - [x] paginas localizadas generadas
  - [x] sitemap presente
  - [x] metadata base presente en paginas localizadas
  - [x] rutas puente no indexables

### Bloque F — Cierre y handoff

- [x] comparar baseline antes/despues de `SR-2`
- [x] documentar que advisories residuales quedan
- [x] separar explicitamente:
  - [x] riesgo resuelto en `SR-2`
  - [x] riesgo que pasa a `SR-3`
- [x] actualizar `docs/plans/sprint-1/security-remediation-roadmap.md`
- [x] registrar decisiones y residual en `docs/governance/decision-log.md`

### Checkpoints interactivos previstos

- [x] Checkpoint 1: decidir si un refresh limpio basta o si hace falta tocar versiones directas cercanas
- [x] Checkpoint 2: aprobar cualquier `override` antes de aplicarlo
- [x] Checkpoint 3: decidir si una mejora incidental en `astro-compress/svgo` entra o se difiere
- [x] Checkpoint 4: aprobar el cierre de `SR-2` y el residual que pasa a `SR-3`

---

## 7. Archivos probables a tocar

### Docs

- `docs/plans/sprint-1/SR/SR2.md`
- `docs/plans/sprint-1/security-remediation-roadmap.md`
- `docs/governance/decision-log.md`

### Codigo y config

- `package.json`
- `package-lock.json`
- `astro.config.mjs`
- potencialmente archivos de config afectados por compatibilidad indirecta, si aparecen

Nota:

- la lista es preventiva
- el objetivo sigue siendo dejar `SR-2` enfocada en dependencias y lockfile

---

## 8. Dependencias y bloqueos

### Dependencias

- [x] `SR-1` cerrada
- [x] baseline residual post-`SR-1` confirmado
- [x] build actual en verde

### Bloqueos posibles

- [ ] que el refresh limpio no baje casi nada del baseline residual
- [ ] que la reduccion de advisories dependa de `overrides`
- [ ] que algun ajuste transitivo empuje una nueva incompatibilidad inesperada
- [ ] que el residual mas visible quede demasiado dominado por `astro-compress`

### Mitigacion

- intentar primero la ruta limpia
- introducir `overrides` solo por decision explicita
- no convertir `SR-2` en decision final sobre compresion

---

## 9. Validaciones

### Documentales

- [ ] verificar alineacion con `docs/README.md`
- [ ] verificar alineacion con `docs/plans/sprint-1/roadmap.md`
- [ ] verificar alineacion con `docs/plans/sprint-1/security-remediation-roadmap.md`
- [ ] verificar que `SR-2` no invada el scope final de `SR-3`

### Tecnicas

- [x] `npm install`
- [x] `npm run build`
- [x] `npm audit`
- [x] checks automatizados sobre `dist`

### Manuales

- [ ] ninguna obligatoria en `SR-2`

---

## 10. Criterio de cierre

La fase solo se considera cerrada si:

- [x] se resolvio todo lo posible fuera del frente final de `astro-compress`
- [x] cualquier `override` usado queda justificado y documentado
- [x] el sitio sigue buildando
- [x] existe una nueva foto de `npm audit`
- [x] el residual que pasa a `SR-3` queda claramente aislado

---

## 11. Riesgos y notas

### Riesgos

- usar `overrides` de forma apresurada puede dejar deuda de mantenimiento
- una fase pensada para transitivas puede degradarse rapidamente a “parches de lockfile” si no se controla
- el residual puede seguir viendose alto si `astro-compress` mantiene buena parte del problema

### Notas operativas

- `SR-2` debe ser mas corta que `SR-1`
- la metrica principal de exito es aislar el residual real que merezca `SR-3`
- si una mejora de `astro-compress` cae gratis por una transitiva, puede registrarse, pero no debe forzar una decision final aqui
- en la ejecucion real, `SR-2` logro llevar `npm audit` a `0`
- eso elimina la necesidad operativa inmediata de `SR-3`

---

## 12. Registro de cambios del plan

- `2026-03-15`
  - se crea el plan detallado de `SR-2`
  - se define politica de `overrides` controlados
  - se deja `astro-compress/svgo` en frontera flexible: mejora incidental permitida, decision final reservada a `SR-3`
- `2026-03-15`
  - `SR-2` se ejecuta y cierra con `npm audit = 0`
  - se aplica mejora incidental de `astro-compress`
  - se usan `overrides` dirigidos para transitivas residuales
  - `SR-3` deja de ser necesaria salvo que reaparezcan regresiones o nuevos advisories
