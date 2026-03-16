# SR-1 Plan

## Metadatos

- Fase: `SR-1`
- Estado: `done`
- Ultima actualizacion: `2026-03-15`
- Owner: `Codex + user`
- Depende de:
  - `docs/README.md`
  - `docs/plans/roadmap.md`
  - `docs/plans/security-remediation-roadmap.md`
  - `docs/plans/phase-6.md`
  - `docs/delivery/deployment.md`
  - `docs/delivery/seo-spec.md`
  - cierre efectivo de `SR-0`
- Desbloquea:
  - `SR-2`
  - reevaluacion real del conteo de advisories tras upgrades directos

---

## 1. Objetivo de la fase

Ejecutar la primera ola de remediacion atacando dependencias directas de alto impacto, con prioridad en `astro`, `@astrojs/preact` y `preact`. Esta subfase existe para comprobar cuanto del riesgo actual desaparece al actualizar el core del stack antes de entrar a transitivas, lockfile fino u otras decisiones mas sensibles como `astro-compress`.

Al cerrarla, el sitio debe seguir buildando, el stack directo debe quedar actualizado y debe existir una nueva foto de `npm audit` que permita decidir `SR-2` con datos reales.

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
  - `docs/plans/security-remediation-roadmap.md`
  - `docs/delivery/seo-spec.md`
  - `docs/delivery/release-checklist.md`
  - `docs/governance/decision-log.md`

Nota:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- este plan no puede contradecir documentos contractuales
- `SR-1` no debe reabrir decisiones de routing, i18n, SEO o deployment cerradas en `Fase 5` y `Fase 6`

---

## 3. Inputs requeridos

### Documentos

- [x] `docs/plans/security-remediation-roadmap.md` en estado `active`
- [x] `docs/plans/phase-6.md` en estado `done`
- [x] `docs/delivery/deployment.md` en estado vigente
- [x] `docs/delivery/seo-spec.md` en estado vigente

### Decisiones previas

- [x] `SR-1` es la siguiente subfase despues de `SR-0`
- [x] la estrategia de remediacion sera amplia, no minima
- [x] `astro` puede saltar a la version mas reciente disponible aunque implique cambio mayor
- [x] `@astrojs/preact` y `preact` se tratan como bloque acoplado al upgrade de `astro`
- [x] el plan puede refrescar otras dependencias directas cercanas si la compatibilidad lo exige
- [x] el plan puede incluir integraciones Astro cercanas si el salto a `Astro 6` lo exige, especialmente:
  - `@astrojs/sitemap`
  - `@astrojs/tailwind`
- [x] `overrides` solo se permiten como contingencia explicita, no como camino principal
- [x] la validacion debe evitar revision manual, pero ser mas segura que solo `build + audit`

### Estado tecnico

- [x] baseline de `SR-0` confirmado
- [x] `npm run build` actual en verde
- [x] `npm audit` actual confirmado:
  - `9 high`
  - `3 moderate`
  - `2 low`
- [x] dependencias directas relevantes actuales:
  - `astro@^5.7.13`
  - `@astrojs/preact@^4.1.1`
  - `preact@^10.27.2`
  - `astro-compress@^2.3.8`

---

## 4. Entregables documentales

### Crear

- [x] `docs/plans/SR/SR1.md`

### Actualizar

- [x] `docs/plans/security-remediation-roadmap.md`
- [x] `docs/governance/decision-log.md`

### No tocar

- [ ] `docs/architecture/i18n-spec.md` salvo contradiccion real
- [ ] `docs/delivery/deployment.md` salvo que un cambio directo del stack exija ajuste contractual
- [ ] `docs/delivery/seo-spec.md` salvo contradiccion real
- [ ] `docs/visual/visual-system.md`

---

## 5. Alcance de implementacion

### Si entra

- [x] subir `astro` a la version mas reciente viable
- [x] subir `@astrojs/preact` a una version compatible con el nuevo `astro`
- [x] subir `preact` a una version compatible y no afectada
- [x] subir dependencias directas cercanas si la compatibilidad del nuevo core lo exige
- [x] subir integraciones Astro cercanas si el salto mayor de `astro` lo exige
- [x] regenerar `package-lock.json`
- [x] reevaluar `npm audit` despues del upgrade
- [x] ejecutar verificaciones automatizadas adicionales sobre `dist/`

### No entra

- [ ] decidir aun el destino final de `astro-compress`
- [ ] introducir nuevas dependencias funcionales
- [ ] reabrir copy, i18n, SEO visible o deployment como frente de producto
- [ ] resolver transitivas residuales de manera exhaustiva si requieren trabajo propio de `SR-2`
- [ ] usar `overrides` como solucion por defecto

---

## 6. Tareas detalladas

### Bloque A — Reconfirmacion de baseline antes del upgrade

- [x] registrar la foto previa de versiones directas en `package.json`
- [x] registrar la foto previa de advisories relevantes
- [x] confirmar que el working tree esta en estado apto para intervenir dependencias
- [x] reconfirmar que `npm run build` parte desde verde

### Bloque B — Upgrade del core directo

- [x] investigar version objetivo mas reciente de `astro`
- [x] investigar version compatible mas reciente de `@astrojs/preact`
- [x] investigar version segura mas reciente de `preact`
- [x] investigar si `@astrojs/sitemap` y `@astrojs/tailwind` deben entrar por compatibilidad del salto mayor
- [x] actualizar `package.json`
- [x] ejecutar `npm install`
- [x] regenerar `package-lock.json`

### Bloque C — Ajustes tecnicos de compatibilidad

- [x] revisar si el nuevo core exige cambios en:
  - [x] `astro.config.mjs`
  - [x] `src/layouts/Layout.astro`
  - [x] `src/utils/i18n.ts`
  - [x] `src/utils/seo.ts`
  - [x] `src/pages/en/**`
  - [x] `src/pages/es/**`
- [x] aplicar el cambio minimo correcto si aparece una incompatibilidad real
- [x] no introducir refactors colaterales

### Bloque D — Validacion tecnica sin revision manual

- [x] ejecutar `npm run build`
- [x] ejecutar `npm audit`
- [x] ejecutar verificacion automatizada adicional sobre `dist/` para confirmar:
  - [x] generacion de `/en/`
  - [x] generacion de `/es/`
  - [x] generacion de `/en/work/`
  - [x] generacion de `/es/work/`
  - [x] existencia de `sitemap-index.xml`
  - [x] presencia de metadata base en paginas localizadas
  - [x] existencia de rutas puente no indexables

### Bloque E — Evaluacion de resultado y handoff

- [x] comparar conteo de advisories antes y despues
- [x] determinar cuanto riesgo resolvio realmente el upgrade directo
- [x] documentar que advisories quedan vivos y por que
- [x] decidir si `SR-2` necesita:
  - [x] solo refresh transitivo normal
  - [ ] trabajo con `overrides`
  - [ ] investigacion adicional por incompatibilidades
- [x] actualizar `docs/plans/security-remediation-roadmap.md`
- [x] registrar decisiones y resultado en `docs/governance/decision-log.md`

### Checkpoints interactivos previstos

- [x] Checkpoint 1: aprobar salto de version de `astro` si abre incompatibilidad importante
- [x] Checkpoint 2: decidir si una dependencia directa adicional entra o no en alcance por compatibilidad
- [ ] Checkpoint 3: decidir si un `override` de contingencia se acepta o se pospone a `SR-2`
- [x] Checkpoint 4: aprobar cierre de `SR-1` segun el nuevo baseline de advisories

---

## 7. Archivos probables a tocar

### Docs

- `docs/plans/SR/SR1.md`
- `docs/plans/security-remediation-roadmap.md`
- `docs/governance/decision-log.md`

### Codigo y config

- `package.json`
- `package-lock.json`
- `astro.config.mjs`
- `src/layouts/Layout.astro`
- `src/utils/i18n.ts`
- `src/utils/seo.ts`
- `src/pages/en/**`
- `src/pages/es/**`

Nota:

- la lista es preventiva
- el objetivo sigue siendo cambiar lo minimo necesario fuera de dependencias

---

## 8. Dependencias y bloqueos

### Dependencias

- [x] `SR-0` cerrada
- [x] baseline de advisories confirmado
- [x] deploy actual por `GitHub Pages Actions` ya establecido
- [x] i18n y SEO estructural ya cerrados

### Bloqueos posibles

- [ ] upgrade de `astro` incompatible con la version actual de `@astrojs/preact`
- [ ] upgrade de `astro` incompatible con `@astrojs/sitemap` o `@astrojs/tailwind`
- [ ] cambios de runtime o config no previstos por salto mayor
- [ ] advisories que no bajen casi nada pese al upgrade directo
- [ ] necesidad de `overrides` para evitar quedar bloqueados

### Mitigacion

- aislar `SR-1` en cambios de dependencias directas y compatibilidad inmediata
- no tocar `astro-compress` como decision final todavia
- si aparece bloqueo real, detenerse y abrir checkpoint antes de inventar una salida

---

## 9. Validaciones

### Documentales

- [ ] verificar alineacion con `docs/README.md`
- [ ] verificar alineacion con `docs/plans/roadmap.md`
- [ ] verificar alineacion con `docs/plans/security-remediation-roadmap.md`
- [ ] verificar que no se introdujeron decisiones fuera de contrato

### Tecnicas

- [x] `npm install`
- [x] `npm run build`
- [x] `npm audit`
- [x] verificacion automatizada adicional sobre `dist/`

### Manuales

- [ ] ninguna obligatoria en `SR-1`

---

## 10. Criterio de cierre

La fase solo se considera cerrada si:

- [x] el bloque directo `astro + @astrojs/preact + preact` queda actualizado
- [x] el sitio sigue buildando
- [x] existe una nueva foto de `npm audit`
- [x] se confirma cuanto riesgo bajo realmente
- [x] cualquier incompatibilidad abierta queda documentada
- [x] `SR-2` queda preparada con un baseline posterior al upgrade directo

---

## 11. Riesgos y notas

### Riesgos

- el salto mas reciente de `astro` puede exigir cambios de compatibilidad no triviales
- el upgrade directo puede no bajar tanto el conteo como se espera si muchas transitivas sobreviven
- una remediacion demasiado ambiciosa dentro de `SR-1` puede invadir trabajo propio de `SR-2`

### Notas operativas

- `SR-1` debe optimizar por impacto tecnico, no por perfeccion total
- el resultado de esta subfase se medira principalmente por reduccion real de advisories y estabilidad de build
- si `astro-compress` aparece como bloqueo fuerte, eso debe registrarse para `SR-3`, no resolverse por intuicion aqui
- el intento de salto a `Astro 6` quedo descartado dentro de `SR-1` por conflicto formal de peer dependency con `@astrojs/tailwind`
- el cierre real de `SR-1` se ejecuta sobre la ruta segura `Astro 5.18.1`

---

## 12. Registro de cambios del plan

- `2026-03-15`
  - se crea el plan detallado de `SR-1`
  - se fija estrategia de upgrade amplio del core directo
  - se deja `astro-compress` fuera de decision final en esta subfase
  - se define validacion sin revision manual, con checks automatizados sobre `dist/`
- `2026-03-15`
  - se amplia `SR-1` para permitir integraciones Astro cercanas
  - el salto a `Astro 6` deja explicitamente dentro de alcance a `@astrojs/sitemap` y `@astrojs/tailwind` si hace falta
- `2026-03-15`
  - `SR-1` se ejecuta y cierra sobre `Astro 5.18.1`
  - el baseline de advisories baja de `14` paquetes afectados a `7`
  - `SR-2` queda desbloqueada
