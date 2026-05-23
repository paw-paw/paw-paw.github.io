# Handover: blog-index-proportion-refinement

Este documento preserva la fuente de entrada del cambio para trazabilidad. No sustituye contratos vigentes en `docs/`.

---

## Fuente original

- Captura anotada aportada por el usuario sobre `/blog`
- Contexto de captura:
  - navegador al `100%`
  - resolucion `1920x1080`
- Observaciones marcadas:
  - rectangulo rojo: una franja de `Latest Writing` se asoma debajo de la portada
  - rectangulo verde: los logos de `Editorial Background` se perciben pequenos respecto al espacio disponible
  - rectangulo azul: el excerpt del featured queda truncado antes de completar una idea visible

---

## Intencion preservada

El cambio busca refinar la composicion ya implementada del `blog index`, no abrir un rediseño nuevo.

Objetivos deseados:

1. Incrementar el tamano efectivo de la portada superior (`hero + featured`) para que `Latest Writing` no se asome dentro del primer viewport en desktop de referencia.
2. Aumentar la escala visual de los logos de `Editorial Background`.
3. Expandir la capacidad visible del excerpt en el featured desde el clamp actual de `2` lineas hacia una representacion mas generosa, potencialmente `5` o `6` lineas.
4. Revisar si el sistema editorial y los skills del blog deben explicitar una guia de longitud para `excerpt`, dado que hoy solo existe la nocion cualitativa de `excerpt breve`.

---

## Hallazgos previos ya comprobados

- `docs/content/content-system.md` exige `excerpt`, pero no fija longitud.
- `docs/content/content-master.md` habla de `excerpt breve`, sin cuantificar.
- `src/content.config.ts` usa `z.string()` sin limites de largo.
- `blog-new` infiere un `short summary`, pero tampoco define rango.
- `blog-edit` y `blog-preflight` no gobiernan longitud de `excerpt`.
- Los excerpts actuales publicados rondan aproximadamente:
  - `145–180` caracteres
  - `23–29` palabras
- La UI actual usa `-webkit-line-clamp: 2` tanto para featured como para cards regulares.

---

## Lectura preliminar

La desalineacion actual parece provenir de la UI, no de excerpts manifiestamente demasiado largos segun el sistema editorial vigente.

La direccion deseada es expandir la interfaz para representar mejor los excerpts actuales, y decidir si ademas conviene formalizar una guia editorial cuantitativa para futuros posts.
