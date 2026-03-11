# Plan de Fase 0A

Este documento detalla la ejecucion de la `Fase 0A — Bootstrap tecnico y auditoria baseline`.

Es un documento auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

Referencias base:

- `docs/README.md`
- `docs/plans/roadmap.md`
- `docs/plans/phase-template.md`

---

## Metadatos

- Fase: `0A`
- Estado: `done`
- Ultima actualizacion: `2026-03-11`
- Owner: `Codex + usuario`
- Depende de:
  - ninguna
- Desbloquea:
  - `Fase 0B`
  - creacion inicial de `docs/governance/template-audit.md`
  - creacion inicial de `docs/governance/decision-log.md`

---

## 1. Objetivo de la fase

Dejar un baseline tecnico auditado y documentado del template antes de neutralizarlo.

Al cerrar esta fase debe estar claro:

- si el repo puede validarse tecnicamente en su estado actual
- que contradicciones existen entre template y roadmap
- que superficies estan rotas, incompletas, activas sin contrato o mal alineadas
- que correcciones son obligatorias en `Fase 0B`

Esta fase permite cambios minimos de soporte a auditoria, pero no debe absorber saneamiento de producto ni neutralizacion fuerte del template.

---

## 2. Fuente de verdad aplicable

- `docs/README.md`
- `docs/plans/roadmap.md`
- documentos contractuales aplicables:
  - ninguno todavia, salvo el propio sistema documental
- documentos auxiliares aplicables:
  - `docs/governance/template-audit.md` cuando se cree
  - `docs/governance/decision-log.md` cuando se cree

Notas:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- este plan no puede contradecir documentos contractuales
- hasta el inicio de `Fase 5`, el sistema documental considera el sitio explicitamente monoidioma, asi que `0A` debe tratar el i18n activo como contradiccion a auditar

---

## 3. Inputs requeridos

### Documentos

- [x] `docs/README.md`
- [x] `docs/plans/roadmap.md`
- [x] `docs/plans/phase-template.md`
- [x] `docs/temp-roadmap-analysis.md`

### Decisiones previas

- [x] `0A` permite cambios minimos de soporte a auditoria
- [x] `0A` debe crear primera version de `docs/governance/template-audit.md`
- [x] `0A` debe crear primera version de `docs/governance/decision-log.md`
- [x] si `npm run build` sigue bloqueado, el bloqueo documentado cuenta como hallazgo valido de auditoria
- [x] el repo raiz puede auditarse como nota secundaria si afecta identidad, distribucion o deployment
- [x] `Projects` debe quedar clasificado con recomendacion provisional
- [x] el plan debe incluir checkpoints para trabajo interactivo

### Estado tecnico

- [x] existe `package.json`
- [x] existe `astro.config.mjs`
- [x] existe estructura `src/`, `public/` y `docs/`
- [x] dependencias instaladas y baseline tecnico confirmados

---

## 4. Entregables documentales

### Crear

- [x] `docs/governance/template-audit.md`
- [x] `docs/governance/decision-log.md`
- [x] `docs/plans/phase-0a.md`

### Actualizar

- [ ] `docs/plans/roadmap.md` solo si la auditoria descubre que `0A` sigue mal definida

### No tocar

- [ ] documentos contractuales de estrategia, arquitectura, contenido, visual o delivery mas alla de referencias necesarias

---

## 5. Alcance de implementacion

### Si entra

- [x] instalar dependencias si hace falta para ejecutar validaciones base
- [x] documentar scripts y baseline tecnico real del repo
- [x] auditar i18n actual y su contradiccion con el plan monoidioma
- [x] auditar `Projects` y otras superficies incompletas o rotas
- [x] auditar deployment real, SEO baseline, motion baseline y residuos tecnicos
- [x] registrar decisiones y hallazgos en `template-audit.md` y `decision-log.md`
- [ ] hacer cambios minimos solo si son necesarios para destrabar la propia auditoria

### No entra

- [ ] rollback efectivo a monoidioma
- [ ] limpieza amplia de identidad del template
- [ ] neutralizacion definitiva de superficies rotas
- [ ] reescritura de copy, branding o arquitectura final
- [ ] cambios de producto que pertenecen a `0B` o fases posteriores

---

## 6. Tareas detalladas

### Bloque A — Bootstrap tecnico

- [x] verificar disponibilidad de `node`, `npm` y dependencias instaladas
- [x] instalar dependencias si faltan y registrar el resultado
- [x] ejecutar `npm run build`
- [x] documentar si el build:
  - [x] funciona
  - [x] falla por entorno
  - [ ] falla por codigo
- [x] registrar scripts reales disponibles en `package.json`
- [x] registrar que validaciones faltan hoy (`lint`, tests, etc.)

### Bloque B — Auditoria de implementacion real

- [x] auditar configuracion real de `astro.config.mjs`
- [x] auditar `public/robots.txt`
- [x] auditar `netlify.toml`
- [x] auditar `src/layouts/Layout.astro`
- [x] auditar `src/utils/me.ts`
- [x] auditar `src/utils/i18n.ts`
- [x] auditar `src/pages/**`
- [x] auditar `src/components/**`
- [x] auditar `src/scripts/**`
- [x] auditar `src/assets/**` para detectar residuos tecnicos o artefactos fuera de lugar

### Bloque C — Auditoria de contradicciones frente al roadmap

- [x] mapear contradiccion entre i18n activo y plan monoidioma
- [x] mapear superficies activas sin contrato claro
- [x] mapear superficies rotas o incompletas
- [x] mapear residuos de identidad original del template
- [x] mapear decisiones de SEO y motion ya activas
- [x] mapear configuraciones reales de deployment que condicionan fases futuras

### Bloque D — Clasificaciones y recomendaciones provisionales

- [x] clasificar `Projects` como:
  - [x] mantener apagada
  - [ ] reparar despues
  - [ ] descartar
- [x] proponer rollback operativo de i18n para `0B`
- [x] proponer perimetro de limpieza de identidad para `0B`
- [x] proponer lista priorizada de correcciones obligatorias para `0B`

### Bloque E — Persistencia documental

- [x] crear `docs/governance/template-audit.md`
- [x] crear `docs/governance/decision-log.md`
- [x] registrar hallazgos tecnicos confirmados
- [x] registrar bloqueos y sus causas
- [x] registrar decisiones provisionales tomadas en `0A`
- [x] registrar dudas que pasan a `0B`

### Bloque F — Checkpoints interactivos

- [x] Checkpoint 1: confirmar bootstrap tecnico y baseline de validacion
- [x] Checkpoint 2: revisar contigo el hallazgo de i18n activo vs plan monoidioma
- [x] Checkpoint 3: revisar contigo clasificacion provisional de `Projects`
- [x] Checkpoint 4: revisar contigo lista priorizada de correcciones para `0B`

Recomendacion operativa:

- no completar todo el bloque documental al final
- registrar hallazgos y decisiones a medida que se confirman
- pausar en cada checkpoint antes de fijar recomendaciones que afecten `0B`

---

## 7. Archivos probables a tocar

### Docs

- `docs/governance/template-audit.md`
- `docs/governance/decision-log.md`
- `docs/plans/phase-0a.md`
- `docs/plans/roadmap.md` solo si la auditoria obliga a refinar alcance

### Codigo y config

- `package.json`
- `package-lock.json`
- `astro.config.mjs`
- `netlify.toml`
- `public/robots.txt`
- `src/layouts/Layout.astro`
- `src/utils/me.ts`
- `src/utils/i18n.ts`
- `src/pages/**`
- `src/components/**`
- `src/scripts/**`
- `src/assets/**`
- `README.md`

---

## 8. Dependencias y bloqueos

### Dependencias

- [x] acceso a `npm`
- [x] entorno con dependencias instalables
- [x] visibilidad completa del repo actual

### Bloqueos posibles

- [ ] `npm run build` falla por dependencias ausentes o entorno
- [ ] configuraciones del template no reflejan el estado real del deployment objetivo
- [ ] existe demasiado hardcode distribuido para auditar en una sola pasada
- [ ] algunas superficies parecen rotas pero en realidad estan solo desactivadas

### Mitigacion

- documentar cada bloqueo con evidencia concreta
- tratar bloqueo de build como hallazgo valido si queda bien caracterizado
- separar hechos observados de decisiones recomendadas
- dejar clasificaciones provisionales cuando no haya base suficiente para cerrar una decision final

---

## 9. Validaciones

### Documentales

- [x] verificar alineacion con `docs/README.md`
- [x] verificar alineacion con `docs/plans/roadmap.md`
- [x] verificar que no se introdujeron decisiones de producto fuera de contrato
- [x] verificar que `template-audit.md` y `decision-log.md` distinguen entre hecho, riesgo y recomendacion

### Tecnicas

- [x] `npm install` si aplica
- [x] `npm run build`
- [x] registrar resultado real de las validaciones ejecutadas

### Manuales

- [x] revisar rutas y archivos existentes vs lo que asume el roadmap
- [x] revisar i18n, SEO y motion visibles desde codigo
- [x] revisar residuos de identidad del template en superficie visible y tecnica

---

## 10. Criterio de cierre

La fase solo se considera cerrada si:

- [x] existe una primera version util de `docs/governance/template-audit.md`
- [x] existe una primera version util de `docs/governance/decision-log.md`
- [x] el baseline tecnico fue ejecutado o el bloqueo quedo caracterizado con evidencia suficiente
- [x] i18n, `Projects`, deployment, SEO, motion y residuos tecnicos fueron auditados
- [x] existe una lista priorizada de correcciones obligatorias para `0B`
- [x] `Projects` tiene clasificacion provisional recomendada
- [x] existe una propuesta operativa de rollback temporal a monoidioma para ejecutar en `0B`

---

## 11. Riesgos y notas

### Riesgos

- `0A` puede crecer demasiado si empieza a corregir en vez de solo auditar
- un bloqueo de build puede empujar cambios que en realidad pertenecen a `0B`
- la auditoria puede descubrir contradicciones suficientes como para exigir otro ajuste del roadmap

### Notas operativas

- el repo raiz se audita como superficie secundaria cuando afecta identidad, distribucion o deployment
- si aparece una correccion imprescindible para poder auditar, se permite como excepcion minima, pero debe registrarse en `decision-log.md`
- este plan favorece iteracion interactiva: no conviene ejecutar todo de corrido sin checkpoints

---

## 12. Registro de cambios del plan

- Fecha: `2026-03-11`
  - cambio: creacion inicial del plan de `Fase 0A`
  - razon: instanciar la nueva `Fase 0A` del roadmap con modo de trabajo interactivo
- Fecha: `2026-03-11`
  - cambio: cierre operativo de `Fase 0A`
  - razon: baseline tecnico, auditoria principal y decisiones provisionales para `0B` ya quedaron registradas
