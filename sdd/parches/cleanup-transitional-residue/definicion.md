# Definicion: cleanup-transitional-residue

## Estado

- Change id: `cleanup-transitional-residue`
- Estado: `active`
- Fuente: decisiones del usuario preservadas en `handover.md`
- Ultima actualizacion: 2026-05-09
- Owner: usuario

---

## 1. Objetivo

Cerrar residuos transicionales y duplicaciones operativas que quedaron identificadas despues de la auditoria del repo.

El cambio existe porque el repo ya completo el bootstrap SDD portable y ahora hay decisiones explicitas para retirar excepciones transicionales que ya no deben operar como superficie vigente: `docs/sdd/parches/sdd-portable-core-bootstrap/**`, `sdd/templates/**`, referencias activas a idiomas no soportados y scripts de tema no usados.

Al cerrar el cambio, la estructura viva debe quedar mas limpia sin borrar memoria historica aprobada ni alterar duplicados de assets que el usuario decidio conservar.

---

## 2. No objetivos

- [ ] No modificar ni reescribir el contenido existente bajo `sdd/parches/legacy/**`, salvo agregar alli el workspace bootstrap movido desde `docs/sdd/parches/`.
- [ ] No tocar `sdd/tests/fixtures/**`.
- [ ] No deduplicar imagenes sociales, headers, `.gitkeep` ni fixtures.
- [ ] No hacer refactor amplio de motion, AOS, GSAP o `src/scripts/animations.js`.
- [ ] No cambiar idiomas soportados, routing, SEO estructural ni politica i18n mas alla de retirar residuos de idiomas no activos.
- [ ] No crear `patch.yaml`, `tasks.md` ni `backlog/` durante intake.

---

## 3. Fuentes de verdad aplicables

- `docs/README.md`
- `AGENTS.md`
- documentos contractuales aplicables:
  - `docs/architecture/i18n-spec.md`
  - `docs/architecture/site-architecture.md`
  - `docs/visual/visual-system.md`
  - `docs/delivery/deployment.md`
- documentos auxiliares aplicables:
  - `docs/AGENTS.md`
  - `docs/visual/asset-plan.md`
  - `docs/governance/template-audit.md`
  - `docs/governance/decision-log.md`
  - `docs/delivery/seo-spec.md`
  - `sdd/README.md`
  - `sdd/core/README.md`
  - `sdd/parches/README.md`
  - `.codex/skills/*/SKILL.md` relevantes
- fuentes externas o handovers:
  - `sdd/parches/cleanup-transitional-residue/handover.md`

Nota:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- `sdd/` es auxiliar operativo, no contrato superior
- si el cambio requiere modificar i18n, estructura SDD o documentacion auxiliar, los contratos y READMEs vivos deben actualizarse antes o junto con la implementacion

---

## 4. Alcance

### Si entra

- [ ] Mover `docs/sdd/parches/sdd-portable-core-bootstrap/**` a `sdd/parches/legacy/sdd-portable-core-bootstrap/**`.
- [ ] Actualizar referencias vivas que describen `docs/sdd/parches/sdd-portable-core-bootstrap/**` como excepcion transicional.
- [ ] Eliminar `sdd/templates/**`.
- [ ] Actualizar `docs/README.md`, `AGENTS.md`, `sdd/README.md`, `sdd/core/README.md`, `sdd/parches/README.md` y skills SDD que aun referencien `sdd/templates/**` como copia transicional.
- [ ] Eliminar referencias vigentes a idiomas no soportados por runtime activo, incluyendo `de`, `pt` y `src/i18n/de.json` si sigue presente.
- [ ] Actualizar `docs/architecture/i18n-spec.md` y docs pertinentes para que solo `en` y `es` queden como idiomas activos/documentados del presente.
- [ ] Eliminar `src/scripts/theme.js` si se confirma sin wiring activo.
- [ ] Corregir drift de nombres de headers en `docs/visual/asset-plan.md`.
- [ ] Mantener duplicados exactos de imagenes aprobados por el usuario.

### Fuera de alcance

- [ ] Reescribir historia o decision logs dentro de legacy.
- [ ] Normalizar todos los documentos historicos que mencionan rutas antiguas o idiomas antiguos.
- [ ] Redisenar la estrategia OG o crear assets OG nuevos.
- [ ] Cambiar comportamiento visible de routing, idioma, SEO o contenido.
- [ ] Crear nueva arquitectura de scripts o motion.
- [ ] Migrar fixtures SDD, modificar validador SDD o cambiar politica de `patch.yaml`.

---

## 5. Superficies afectadas

### Docs

- `docs/README.md`
- `docs/AGENTS.md`
- `docs/architecture/i18n-spec.md`
- `docs/visual/asset-plan.md`
- `docs/governance/template-audit.md`
- `docs/governance/decision-log.md`
- `docs/delivery/seo-spec.md` si alguna referencia a OG o idiomas queda desalineada

### SDD

- `docs/sdd/parches/sdd-portable-core-bootstrap/**`
- `sdd/parches/legacy/`
- `sdd/templates/**`
- `sdd/README.md`
- `sdd/core/README.md`
- `sdd/parches/README.md`
- `.codex/skills/sdd-intake/SKILL.md`
- `.codex/skills/sdd-plan/SKILL.md`
- `.codex/skills/sdd-tasks/SKILL.md`
- `.codex/skills/sdd-phase-backlog/SKILL.md`
- `.codex/skills/sdd-execute-phase/SKILL.md`
- `.codex/skills/sdd-sync-drift/SKILL.md`

### Codigo o contenido

- `src/i18n/de.json`
- `src/utils/i18n.ts`
- `astro.config.mjs`
- `src/scripts/theme.js`
- referencias a `de`, `pt` o `theme.js` bajo `src/**`, si existen

### Configuracion o validacion

- `package.json`
- `tests/**`
- `sdd/tools/validate-sdd.mjs`

---

## 6. Decisiones conocidas

- decision: `sdd/parches/legacy/**` existente se preserva.
  - razon: el usuario aprobo mantener legacy como memoria historica.
  - documentos o areas afectadas: `sdd/parches/legacy/**`, `sdd/parches/README.md`
- decision: el bootstrap transicional bajo `docs/sdd/parches/sdd-portable-core-bootstrap/**` debe pasar a legacy.
  - razon: `docs/sdd/` ya no debe quedar como excepcion viva.
  - documentos o areas afectadas: `docs/README.md`, `docs/AGENTS.md`, `sdd/parches/legacy/**`
- decision: `sdd/templates/**` debe eliminarse como superficie transicional.
  - razon: los assets ejecutables viven en skills y la copia transicional ya no debe seguir referenciada.
  - documentos o areas afectadas: `sdd/README.md`, `sdd/core/README.md`, `.codex/skills/*/SKILL.md`
- decision: los duplicados exactos de imagenes se conservan.
  - razon: el usuario decidio mantenerlos y la politica OG vigente permite imagen base compartida.
  - documentos o areas afectadas: `src/assets/**`, `docs/delivery/seo-spec.md`
- decision: cualquier limpieza i18n se limita a runtime activo y documentacion viva.
  - razon: eliminar menciones historicas dentro de legacy contradice la decision de conservar legacy como esta.
  - documentos o areas afectadas: `docs/architecture/i18n-spec.md`, `src/i18n/**`, `sdd/parches/legacy/**`

---

## 7. Decisiones abiertas

- [ ] Ninguna decision bloqueante conocida antes de `sdd-plan`.

---

## 8. Riesgos

- riesgo: borrar `sdd/templates/**` sin actualizar todas las skills o docs que lo mencionan.
  - impacto: las instrucciones SDD podrian seguir apuntando a una ruta inexistente.
  - mitigacion: usar `rg` antes y despues sobre `sdd/templates` y validar las skills SDD afectadas.
- riesgo: mover el bootstrap transicional rompa trazabilidad de decisiones previas.
  - impacto: referencias historicas a `docs/sdd/parches/sdd-portable-core-bootstrap/**` quedarian obsoletas.
  - mitigacion: actualizar referencias vivas y aceptar referencias historicas dentro de legacy como memoria.
- riesgo: eliminar referencias a `de` o `pt` de forma demasiado agresiva.
  - impacto: se podria reescribir historia o perder contexto de auditoria del template.
  - mitigacion: limitar limpieza a runtime activo y docs contractuales/auxiliares vigentes.
- riesgo: `src/scripts/theme.js` tenga consumo indirecto no capturado por busqueda textual simple.
  - impacto: podria degradarse el dark mode.
  - mitigacion: confirmar con `rg`, build y verificacion manual del toggle si entra en ejecucion.

---

## 9. Criterio de cierre

La definicion queda lista para `sdd-plan` solo si:

- [x] objetivo y no objetivos estan claros
- [x] las fuentes de verdad aplicables estan listadas
- [x] el alcance y fuera de alcance no se contradicen
- [x] las decisiones abiertas estan visibles
- [x] los riesgos principales estan identificados

El cambio completo podra cerrarse solo si:

- [ ] `docs/sdd/parches/sdd-portable-core-bootstrap/**` ya no existe en `docs/` y su contenido queda bajo `sdd/parches/legacy/`.
- [ ] `sdd/templates/**` ya no existe ni aparece como fuente transicional vigente.
- [ ] el runtime y la documentacion viva no conservan idiomas activos fuera de `en` y `es`.
- [ ] `src/scripts/theme.js` queda eliminado o se documenta una razon vigente para conservarlo.
- [ ] el drift de `docs/visual/asset-plan.md` queda corregido.
- [ ] las validaciones relevantes se ejecutan con resultados reales.

---

## 10. Registro de cambios

- Fecha: 2026-05-09
  - cambio: intake inicial creado desde decisiones del usuario posteriores a auditoria de duplicaciones y residuos.
  - razon: agrupar cambios pequenos pero transversales en un patch SDD antes de planificar e implementar.

