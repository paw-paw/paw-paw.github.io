# Interaction Spec

## Estado

- Fase origen: `7`
- Estado: `active`
- Ultima actualizacion: `2026-03-16`

---

## 1. Objetivo

Definir una capa de interaccion y motion conservadora para el portfolio ya publicado. Esta spec existe para guiar la segunda tentativa de `Fase 7` despues del backtrack de la primera, y por tanto prioriza robustez, legibilidad y estabilidad visual sobre dramatismo o complejidad tecnica.

La meta no es introducir un sistema nuevo de animaciones. La meta es pulir el sistema existente para que el sitio se sienta mas propio, mas cuidado y mas premium sin depender de una capa fragil de reveals o estados ocultos.

---

## 2. Principios

- La interaccion debe reforzar claridad, no competir con el contenido.
- La evidencia principal del sitio no puede perder legibilidad por efecto visual.
- El motion debe sentirse intencional, sobrio y controlado.
- La segunda tentativa de `Fase 7` no debe recentrar el sitio en una arquitectura nueva de scroll-reveals.
- El sitio debe seguir siendo estable en scroll, resize, refresh y capturas.

---

## 3. Reparto de responsabilidades

### AOS

- `AOS` queda como motor principal de reveals simples de bloque.
- Se usa para entradas cortas y predecibles de secciones, cards y CTAs.
- Su uso debe seguir siendo declarativo por atributo cuando no haga falta logica personalizada.
- Los reveals de `AOS` deben seguir siendo de baja intensidad y compatibles con refresh.

### GSAP

- `GSAP` queda reservado a microinteraccion y refuerzos puntuales.
- No debe gobernar por defecto la visibilidad base de bloques estructurales largos.
- Sus usos aprobados en esta fase son:
  - navbar / pequenos refinamientos de scroll
  - hover states coordinados
  - microinteraccion de controles o superficies concretas
  - casos aislados donde la interaccion necesite mas control que `AOS`

### No aprobado

- reescribir toda la arquitectura de motion
- sustituir `AOS` como base general de reveals
- introducir una capa nueva de reveals distribuidos y dependientes de `ScrollTrigger`

---

## 4. Regla de visibilidad

La regla de visibilidad de esta fase queda deliberadamente mas flexible que en la recomendacion conservadora inicial, pero con limites estrictos:

- ciertos bloques pueden iniciar ocultos si el patron visual lo justifica
- ese estado oculto nunca puede quedar sin salida tecnica segura
- el fallback aprobado para esta fase es por eventos de viewport y refresh
- no se aprueba fallback por timeout como mecanismo principal

### Implicaciones

- si un reveal depende de scroll o refresco interno, la implementacion debe poder revalidar su estado al cambiar viewport o al refrescarse el sistema
- no se debe aceptar una superficie que pueda quedarse en blanco por haber perdido el trigger correcto
- si durante la fase se confirma que un bloque concreto sigue siendo fragil bajo esta regla, ese bloque debe migrar a una estrategia mas visible por defecto

---

## 5. Intensidad por superficie

### Layout / page-load

- presencia baja
- prioridad: estabilidad y sensacion de acabado

### Hero

- intensidad media
- puede sostener la entrada mas visible del sitio, pero sin teatralidad pesada

### Secciones editoriales

- intensidad baja
- reveals simples, limpios y previsibles

### Cards y listas de evidencia

- intensidad baja a media
- la animacion debe reforzar lectura, no esconder estructura

### CTA y botones

- intensidad media
- estados hover, focus y press deben sentirse mas refinados que el baseline heredado

### Tags, chips y metadata

- intensidad baja
- respuestas cortas, no llamativas

### Toggles y controles

- intensidad baja a media
- prioridad en claridad tactil y feedback inmediato

---

## 6. Limites tecnicos

- respetar `prefers-reduced-motion`
- evitar secuencias largas o cascadas excesivas
- evitar transformaciones agresivas en elementos de lectura
- evitar que hover states desplacen demasiado el layout percibido
- evitar dependencia de un orden exacto de scroll para que el contenido exista visualmente

---

## 7. Criterios de validacion

- el sitio debe seguir renderizando contenido completo en navegacion normal
- los reveals no deben dejar huecos persistentes tras scroll, refresh o resize
- el build debe seguir en verde
- la revision visual/manual debe confirmar que el sitio gana craft sin perder robustez
