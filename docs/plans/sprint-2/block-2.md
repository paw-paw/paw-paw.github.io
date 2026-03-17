# Phase Plan

Usa este plan para ejecutar el Bloque 2 del roadmap de Sprint 2.

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

Antes de usarlo:

- confirma que `docs/plans/sprint-2/roadmap.md` sigue siendo el roadmap activo para esta etapa
- revisa `docs/README.md`
- toma `docs/plans/sprint-2/block-0.md` y `docs/plans/sprint-2/block-1.md` como insumos aprobados y cerrados
- ejecuta este bloque en modo altamente interactivo, con checkpoints de aprobacion explicitos antes de editar copy canonico

---

## Metadatos

- Fase: `Sprint 2 - Bloque 2 - Downstream Narrative Propagation`
- Estado: `done`
- Ultima actualizacion: `2026-03-16`
- Owner: `pawpaw + Codex`
- Depende de:
  - `docs/README.md`
  - `docs/plans/sprint-2/roadmap.md`
  - `docs/plans/sprint-2/block-0.md`
  - `docs/plans/sprint-2/block-1.md`
  - `docs/strategy/portfolio-strategy.md`
  - `docs/content/content-system.md`
  - `docs/content/content-master.md`
- Desbloquea:
  - contenido maestro alineado con la nueva tesis del portfolio
  - lista aprobada de superficies que deben cambiar copy en implementacion
  - brief downstream para `Bloque 4`

---

## 1. Objetivo de la fase

Esta fase debe propagar la nueva tesis aprobada en `Bloque 0` y materializada contractualmente en `Bloque 1` hacia el contenido maestro del portfolio. Al cerrarla, `content-master` debe reflejar la nueva direccion en las superficies narrativas clave del sitio, los casos y bloques de experiencia deben quedar alineados al menos en su framing principal, y debe existir un brief claro de cambios downstream para implementacion. Esta fase no debe abrir todavia arquitectura del blog, entidad `blog_post` ni cambios de runtime.

---

## 2. Fuente de verdad aplicable

- `docs/README.md`
- roadmap activo o historico aplicable en `docs/plans/`:
  - `docs/plans/sprint-2/roadmap.md`
  - `docs/plans/sprint-2/block-0.md`
  - `docs/plans/sprint-2/block-1.md`
  - `docs/plans/phase-template.md`
- documentos contractuales aplicables:
  - `docs/strategy/portfolio-strategy.md`
  - `docs/content/content-system.md`
- documentos auxiliares aplicables:
  - `docs/content/content-master.md`
  - `docs/governance/decision-log.md`

Nota:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- este plan no puede contradecir documentos contractuales
- `content-master` debe responder a la estrategia y al sistema de contenido ya actualizados en `Bloque 1`

---

## 3. Inputs requeridos

### Documentos

- [x] `docs/README.md`
- [x] `docs/plans/sprint-2/roadmap.md`
- [x] `docs/plans/sprint-2/block-0.md`
- [x] `docs/plans/sprint-2/block-1.md`
- [x] `docs/strategy/portfolio-strategy.md`
- [x] `docs/content/content-system.md`
- [x] `docs/content/content-master.md`

### Decisiones previas

- [x] la nueva tesis superior del portfolio aprobada en `Bloque 0`
- [x] la nueva lectura de los primeros 10 segundos aprobada en `Bloque 0`
- [x] `portfolio-strategy` y `content-system` ya actualizados en `Bloque 1`
- [x] `View selected work` sigue siendo la CTA principal
- [x] `operations` se mantiene como soporte y credibilidad operativa
- [x] este bloque actualiza primero superficies marco y luego framing de casos/experiencia solo donde contradigan la nueva tesis
- [x] metadata y labels clave se revisan como copy en `content-master`, no como cambio directo a `seo-spec`

### Estado tecnico

- [x] no se requiere tocar runtime en esta fase
- [x] no se actualizan todavia arquitectura, i18n, `seo-spec` ni entidad `blog_post`
- [x] cualquier impacto tecnico detectado debe registrarse como brief para bloques posteriores, no resolverse aqui por defecto

---

## 4. Entregables documentales

### Crear

- [x] `docs/plans/sprint-2/block-2.md`

### Actualizar

- [x] `docs/content/content-master.md`
- [ ] `docs/governance/decision-log.md` si el cierre del bloque exige registrar ajuste material adicional

### No tocar

- [ ] `docs/strategy/portfolio-strategy.md`
- [ ] `docs/content/content-system.md`
- [ ] `docs/architecture/site-architecture.md`
- [ ] `docs/architecture/i18n-spec.md`
- [ ] `docs/delivery/seo-spec.md`
- [ ] `docs/delivery/deployment.md`
- [ ] cualquier archivo de `src/`, `public/` o configuracion de runtime, salvo que se detecte una urgencia no prevista y se acuerde explicitamente

---

## 5. Alcance de implementacion

### Si entra

- [x] actualizacion de superficies marco en `content-master`
- [x] revision de CTAs secundarias y labels donde la nueva tesis lo exija
- [x] revision de `/work`, `/experience`, `/contact` y footer
- [x] revision de framing de casos y experiencia solo cuando contradigan la nueva tesis
- [x] creacion de brief downstream para implementacion en `Bloque 4`

### No entra

- [ ] reescritura exhaustiva de todos los casos o todos los roles
- [ ] cambios de arquitectura o rutas
- [ ] entidad `blog_post`
- [ ] cambios en `seo-spec`, `i18n-spec` o deployment
- [ ] implementacion en runtime

---

## 6. Tareas detalladas

### Bloque A - Relectura de `content-master` contra contratos actualizados

- [x] releer `content-master` con foco en tensiones frente a `portfolio-strategy` y `content-system`
- [x] identificar superficies marco que hoy siguen hablando desde la tesis anterior
- [x] identificar casos, summaries o highlights que contradigan de forma clara el nuevo positioning

### Bloque B - Actualizacion interactiva de superficies marco

- [x] revisar `site metadata`
- [x] revisar `home.hero`
- [x] revisar `home.how_i_work`
- [x] revisar `home.selected_work_preview`
- [x] revisar `home.experience_preview`
- [x] revisar `home.skills`
- [x] revisar `home.footer_cta`
- [x] revisar `contact_page`
- [x] revisar `footer`
- [x] revisar headers y subtitulos de `/work` y `/experience`

### Bloque C - Casos y experiencia aprobados

- [x] revisar summaries y highlights de `Selected Work` solo donde el framing siga anclado a la tesis anterior
- [x] revisar bloques de experiencia aprobados solo donde el framing necesite reflejar mejor `partnerships / BD + delivery`
- [x] no reescribir metricas ni inventarios salvo contradiccion clara

### Bloque D - Labels, metadata y consistencia de navegacion narrativa

- [x] revisar labels y metadatos de copy dentro de `content-master`
- [x] dejar nota explicita de que cambios deben bajar luego a metadata SEO o a labels de UI
- [x] evitar resolver aqui contratos que pertenecen a `seo-spec` o arquitectura

### Bloque E - Brief downstream para implementacion

- [x] listar superficies del portfolio que deberan cambiar en implementacion
- [x] separar cambios de copy obligatorios de cambios opcionales o polish
- [x] identificar que items quedan para `Bloque 3` y cuales para `Bloque 4`

### Bloque F - Modo de trabajo interactivo

- [x] trabajar por superficies pequenas y verificables
- [x] presentar recomendaciones y hasta dos alternativas cuando aparezca ambiguedad relevante
- [x] pedir aprobacion explicita antes de editar copy con mas de una lectura razonable
- [x] no reabrir strategy ni content-system salvo contradiccion contractual real
- [x] si aparece una nueva ambiguedad, detenerse y resolverla antes de seguir

Recomendacion:

- usar el orden `superficies marco -> /work y /experience -> casos/experiencia -> labels/brief`
- priorizar coherencia narrativa sobre volumen de reescritura

---

## 7. Archivos probables a tocar

### Docs

- `docs/plans/sprint-2/block-2.md`
- `docs/content/content-master.md`
- `docs/governance/decision-log.md` si se decide registrar cierre material adicional

### Codigo

- no se esperan cambios de codigo en esta fase

---

## 8. Dependencias y bloqueos

### Dependencias

- [x] cierre aprobado de `Bloque 1`
- [x] acuerdo en que este bloque se concentra en `content-master`
- [x] acuerdo en mantener `View selected work` como CTA principal
- [x] acuerdo en revisar framing de casos y experiencia solo cuando contradigan la nueva tesis
- [x] acuerdo en dejar blog, arquitectura y SEO para bloques posteriores

### Bloqueos posibles

- [ ] que la propagacion downstream se convierta en reescritura total del portfolio
- [ ] que el framing general cambie pero los casos y experiencia sigan sonando desde la tesis anterior
- [ ] que labels o metadata de copy empujen decisiones que en realidad pertenecen a `seo-spec`
- [ ] que la alineacion narrativa abra presion para tocar runtime antes de tiempo

### Mitigacion

- limitar el bloque a superficies narrativas clave y a contradicciones claras
- usar `content-master` como fuente canonica para copy aprobado
- documentar los cambios downstream como brief y no implementarlos aqui
- mantener el mismo filtro de tono, evidencia y claims defendibles de `Bloque 1`

---

## 9. Validaciones

### Documentales

- [x] verificar alineacion con `docs/README.md`
- [x] verificar alineacion con `docs/plans/sprint-2/roadmap.md`
- [x] verificar alineacion con `portfolio-strategy` y `content-system`
- [x] verificar que no se introdujeron decisiones de arquitectura, blog, i18n o SEO fuera de contrato

### Tecnicas

- [x] confirmar que no hubo cambios de runtime en esta fase

### Manuales

- [x] revision conjunta del nuevo `content-master`
- [x] revision conjunta de superficies que cambian downstream
- [x] revision conjunta de items diferidos a `Bloque 3` y `Bloque 4`

---

## 10. Criterio de cierre

La fase solo se considera cerrada si:

- [x] `content-master` ya refleja la nueva tesis en las superficies narrativas clave
- [x] `/work`, `/experience`, `/contact` y footer ya tienen framing compatible con la nueva direccion
- [x] los casos y bloques de experiencia mas sensibles ya no contradicen el positioning aprobado
- [x] existe un brief downstream claro para implementacion
- [x] quedan listos los insumos para ejecutar `Bloque 3` y `Bloque 4`

---

## 11. Riesgos y notas

### Riesgos

- riesgo de que este bloque crezca hacia reescritura exhaustiva de contenido
- riesgo de dejar casos o experiencia con framing viejo mientras el marco general ya cambio
- riesgo de mezclar decisiones de copy con decisiones de SEO, arquitectura o blog

### Notas operativas

- este bloque debe correr como una conversacion de trabajo con checkpoints frecuentes
- cuando una superficie admita mas de una lectura razonable, no se edita hasta cerrar la decision contigo
- el objetivo es alinear copy canonico, no implementar todavia en el sitio
- si aparece una contradiccion fuerte con contratos vigentes, se documenta y se decide si realmente pertenece a este bloque

### Brief downstream para implementacion

- Superficies con cambio obligatorio en implementacion:
  - site metadata base
  - `Hero`
  - `How I Work`
  - `Selected Work` preview
  - `Experience` preview
  - `Skills`
  - `FooterCTA`
  - `Contact` page
  - `Footer`
  - headers y subtitulos de `/work` y `/experience`
  - labels y claims visibles derivados de `content-master`
- Cambios opcionales o de polish:
  - afinar cards de `How I Work` si el runtime necesita mas explicitud comercial
  - microajustes de labels de UI si alguna pantalla queda demasiado larga o rigida
  - revisar si algun summary de caso necesita una segunda iteracion despues de verse implementado
- Items diferidos a `Bloque 3`:
  - entidad `blog_post`
  - arquitectura y rutas del blog
  - reglas contractuales para labels o superficies nuevas del blog
  - impacto formal en i18n y metadata estructural del blog
- Items diferidos a `Bloque 4`:
  - implementacion en `src/` de todo el copy ya aprobado
  - ajuste final de labels visibles en componentes reales
  - propagacion del contenido maestro al runtime activo
  - verificacion visual de que el framing aprobado funciona bien en layout real

---

## 12. Registro de cambios del plan

- Fecha: `2026-03-16`
  - cambio: se crea el plan detallado para ejecutar el Bloque 2 del roadmap de Sprint 2
  - razon: ordenar la propagacion narrativa de la nueva tesis hacia `content-master` y preparar el brief downstream antes de tocar arquitectura o runtime
