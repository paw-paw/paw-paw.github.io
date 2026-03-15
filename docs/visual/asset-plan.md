# Asset Plan

## Estado

- Tipo: `auxiliar`
- Fase inicial: `3`
- Estado: `done`
- Ultima actualizacion: `2026-03-12`

---

## Objetivo

Definir que assets visuales existen hoy, cuales se pueden usar en esta fase, cuales deben reemplazarse y que bloqueos quedan abiertos para fases posteriores.

Este documento no redefine el sistema visual. Lo operacionaliza.

---

## Assets aprobados para Fase 3

### Branding visible

- branding tipografico con monograma `P`
- wordmark `Pawpaw`

Estado:

- aprobado para navbar y footer
- no requiere logo ilustrado final en esta fase

### Hero visual principal

- `src/assets/pawpaw-portrait.png`

Origen:

- promovido desde `temp/bauhaus-paw.png`

Estado:

- aprobado para uso visible en hero durante Fase 3
- tratado como asset valido del sistema actual

### Favicon provisional

- `src/assets/favicon.svg`

Estado:

- aprobado como favicon tipografico provisional
- reemplaza la dependencia del favicon heredado del template

### Logos de experiencia

- `src/assets/experience-logos/xp_light.png`
- `src/assets/experience-logos/xp_dark.png`
- `src/assets/experience-logos/cg_all.png`
- `src/assets/experience-logos/4d_light.png`
- `src/assets/experience-logos/4d_dark.png`
- `src/assets/experience-logos/inf_light.png`
- `src/assets/experience-logos/inf_dark.png`
- `src/assets/experience-logos/lm_light.png`
- `src/assets/experience-logos/lm_dark.png`

Origen:

- promovidos desde `temp/logos/`

Estado:

- aprobados para `experience_item` en `/experience/`
- aprobados para version reducida en `experience_preview`
- deben usar variante por tema cuando exista y `allmode` como fallback

### Headers de `Selected Work`

- `src/assets/work-headers/interu.jpg`
- `src/assets/work-headers/pcftc.jpg`
- `src/assets/work-headers/amdgw.jpg`
- `src/assets/work-headers/dld2.jpg`
- `src/assets/work-headers/ewc.jpg`
- `src/assets/work-headers/limamajor.jpg`

Origen:

- promovidos desde `temp/headers/`

Estado:

- aprobados para `selected_work_case_study` en `/work/`
- aprobados para version reducida en `selected_work_preview`
- el tratamiento visual puede usar overlay/tinte reversible desde CSS o UI

---

## Assets temporales que pueden sobrevivir tecnicamente

- `src/assets/background.svg`
- `src/assets/portfolio-preview.png`

Estado:

- no forman parte del lenguaje visible principal aprobado
- pueden sobrevivir mientras no vuelvan al flujo activo sin decision posterior

---

## Assets heredados que no deben seguir visibles

- `src/assets/logo.png`
- `src/assets/logo_white.png`
- `src/assets/fb_logo.png`
- `src/assets/fb_logo_white.png`
- `src/assets/profile.png`

Estado:

- ya no deben alimentar navbar, footer, hero o branding visible
- pueden conservarse en el repo temporalmente, pero fuera del flujo activo

---

## Placeholders aceptables en Fase 3

- branding tipografico en lugar de logo final
- favicon tipografico provisional
- ilustracion aprobada del hero en lugar de retrato fotografico final
- previews y superficies internas sin visuales finales de casos

No son placeholders aceptables:

- logos del template original
- foto heredada del template
- iconos sociales o marks que contradigan el sistema visual

---

## Assets que siguen pendientes

### Pendientes deseables para fases posteriores

- logo exportado final light/dark si el sistema lo necesita
- retrato o foto principal final aprobada
- visuales o thumbnails para `Selected Work / Case Studies`
- OG image propia
- posibles variantes adicionales para favicon/app icon si el deploy final lo exige
- logos adicionales si entran nuevas experiencias al sitio
- headers adicionales si entran nuevos proyectos al sitio

### Blockers actuales

- no hay visuales finales de casos para `/work`
- no hay foto final alternativa al asset ilustrado actual
- no existe aun una bateria completa de branding exportado

Impacto:

- no bloquean Fase 3
- si bloquean parte del polish de Fase 4, Fase 6 o la publicacion final
