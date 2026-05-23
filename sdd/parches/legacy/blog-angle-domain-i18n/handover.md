# Handover: Blog Angle Domain I18n

## Brief

El usuario quiere que las tags `angle` y `domain` de los blog posts soporten i18n mediante una slug interna estable y una representacion visual localizada en `en` y `es`.

El blog ya usa `category`, `angle` y `domain`.

Este cambio no introduce una taxonomia nueva. Ajusta la forma de representar `angle` y `domain` para que puedan mantenerse como dato estable y renderizarse con label localizado segun locale.

## Objetivo del cambio

Dejar preparado el sistema editorial del blog para que `angle` y `domain`:

- conserven una clave interna estable apta para contenido, filtros o UI
- expongan labels visibles localizados en `en` y `es`
- mantengan coherencia con el modelo actual `category -> angle -> domain`
- no generen rutas ni archivos archive nuevos para `angle` o `domain`

## Decision ya aprobada por el usuario

Slugs internas y representacion localizada aprobadas:

### `angle`

- `field-notes` -> `Field Notes` / `Nota de Campo`
- `delivery-framework` -> `Delivery Framework` / `Framework de Trabajo`
- `industry-analysis` -> `Industry Analysis` / `Analisis de Industria`
- `career-reflection` -> `Career Reflection` / `Reflexion Profesional`

### `domain`

- `gaming` -> `Gaming` / `Gaming`
- `esports` -> `Esports` / `Esports`
- `ai-and-tech` -> `AI & Tech` / `IA & Tech`
- `remote-ops` -> `Remote Ops` / `Operacion Remota`

## Alcance

Dentro de alcance:

- formalizar que `angle` y `domain` dejan de depender de labels hardcodeados monolingues
- preparar una representacion con slug estable y label localizado por locale
- preservar el uso existente de `category`, `angle` y `domain` en el blog
- reflejar el cambio en la capa documental y de implementacion necesaria

Fuera de alcance:

- crear taxonomias adicionales
- reabrir la semantica editorial de `category`, `angle` o `domain`
- crear paginas archive, rutas o indices dedicados para `angle`
- crear paginas archive, rutas o indices dedicados para `domain`
- cambiar la politica de i18n general del sitio fuera de este caso

## Restricciones

- `category` sigue existiendo y no se sustituye por `angle` ni `domain`
- la lectura visible del blog debe seguir siendo calmada y minimal, no una nube de tags abierta
- `angle` y `domain` no deben convertirse en sistema de tags libre
- la slug interna debe ser estable entre idiomas
- la representacion visible debe localizarse en `en` y `es`
- no se deben crear archives nuevos para `angle` o `domain`

## Criterios visibles de cierre

- un post puede seguir guardando `angle` y `domain` como claves estables no dependientes del idioma visible
- la UI del blog puede mostrar el label correcto para `angle` y `domain` en `en`
- la UI del blog puede mostrar el label correcto para `angle` y `domain` en `es`
- el orden editorial visible sigue siendo compatible con `category -> angle -> domain`
- no aparecen nuevas rutas blog archive para `angle` ni para `domain`

## Riesgos y puntos a vigilar

- drift entre slugs internas y labels visibles si la tabla localizada no queda centralizada
- mezcla de contenido antiguo basado en strings visibles con contenido nuevo basado en slugs
- acoplar la UI del blog a labels localizados en vez de a claves internas estables
- introducir i18n parcial que funcione para render visual pero no para futuras superficies de filtro o metadata

## Necesidades de la siguiente etapa

- definir la fuente de verdad interna para el mapping `slug -> label por locale`
- identificar las superficies visibles donde hoy se renderizan `angle` y `domain`
- confirmar si el contenido existente necesita migracion de strings a slugs
- planificar validaciones para asegurar que no nazcan archives nuevos para `angle` o `domain`
