# I18n Spec

## Estado

- Tipo: `contractual`
- Fase inicial: `5`
- Estado: `v1`
- Ultima actualizacion: `2026-03-16`

---

## Objetivo

Definir los idiomas reales del sitio, su politica de routing y las reglas editoriales de localizacion sin reabrir estrategia, arquitectura base ni contenido maestro en ingles.

Esta spec existe para reintroducir i18n de forma controlada despues del rollback a monoidioma ejecutado en `0B`.

---

## Locales soportados

- `en`
- `es`

No forman parte del runtime activo en esta fase:

- `de`
- `pt`

### Notas

- `en` sigue siendo el idioma maestro del portfolio
- `es` se introduce como locale activo real en esta fase
- `pt` puede evaluarse en una fase posterior, pero no debe activarse ni condiciona la implementacion de `Fase 5`

---

## Politica de rutas

### Regla principal

Todos los locales activos llevan prefijo.

Rutas principales:

- `/en/`
- `/en/work/`
- `/en/experience/`
- `/en/contact/`
- `/en/blog/`
- `/en/blog/[slug]/`
- `/en/blog/category/[category]/`
- `/es/`
- `/es/work/`
- `/es/experience/`
- `/es/contact/`
- `/es/blog/`
- `/es/blog/[slug]/`
- `/es/blog/category/[category]/`

### Root `/`

La ruta `/` no funciona como home canonica de contenido.

Debe actuar como entrada inteligente de locale con esta prioridad:

1. locale persistido del usuario
2. idioma del navegador, si coincide con un locale soportado
3. fallback a `/en/`

### Metadata del root bridge

- `/` sigue sin ser home canonica de contenido ni URL SEO primaria
- aun asi puede emitir metadata social utilizable para previews al compartirse
- esa metadata debe:
  - estar en ingles
  - ser coherente con la home `en`
  - no convertir `/` en ruta indexable ni en canonical primaria

### Razon

Algunas plataformas de sharing como WhatsApp no ejecutan el redirect JS del bridge y solo leen el HTML crudo. Por eso `/` necesita metadata de share aunque siga fuera de la estrategia SEO primaria.

### Persistencia

La preferencia manual de idioma debe persistirse para visitas futuras.

Persistencia permitida:

- cookie
- `localStorage`

La implementacion concreta puede decidir una de las dos, pero debe producir el mismo comportamiento visible.

---

## Idioma maestro y relacion entre idiomas

### Idioma maestro

- idioma maestro: `en`

### Regla editorial

- `docs/content/content-master.md` sigue siendo la fuente canonica aprobada del idioma maestro
- `src/i18n/en.json` implementa ese idioma maestro
- `src/i18n/es.json` nace como localizacion controlada a partir del contenido maestro en ingles

### Regla de divergencia

- `es` puede adaptar formulaciones para sonar natural a hiring y networking en español
- `es` no debe introducir una estrategia, tesis o arquitectura narrativa distinta
- diferencias mayores de posicionamiento entre idiomas quedan fuera de esta fase

---

## Politica editorial del español

### Variante aprobada

- español neutro LATAM con ligera preferencia peruana

### Implicaciones

- evitar localismos fuertes o demasiado regionales
- permitir formulaciones naturales para el contexto profesional de Peru y LATAM
- priorizar claridad para audiencias de hiring internacionales dentro del mundo hispanohablante

### Tono

El tono en `es` debe conservar el equivalente de:

- claro
- sobrio
- operatorio
- evidence-led

No debe sonar:

- demasiado literal respecto al ingles
- inflado
- excesivamente corporativo
- excesivamente localista

---

## Traduccion vs adaptacion

### Regla base

La localizacion de `es` es adaptada por mercado, no traduccion literal estricta.

### Se permite

- reordenar frases para que suenen naturales en español
- sustituir formulas demasiado calcadas del ingles
- ajustar CTAs para claridad y naturalidad
- adaptar wording de delivery / operations / partnerships si mejora comprension

### No se permite

- cambiar la tesis principal del sitio
- convertir una pagina en algo estrategicamente distinto de su version en ingles
- introducir claims, metricas o prioridades que no existan en el idioma maestro aprobado

---

## Terminos que se conservan en ingles

### Regla aprobada

Se conservan solo terminos de marca, nombres propios o casos donde la traduccion pierde precision clara.

### Se traducen por defecto

- labels de navegacion
- nombres de seccion
- CTAs
- labels de paneles
- copy de apoyo

### Se pueden conservar en ingles

- nombres de plataformas o marcas:
  - `LinkedIn`
  - `Instagram`
- nombres oficiales de programas, ligas, eventos o proyectos
- siglas y nombres propios cuando la forma original sea la referencia real

### No deben conservarse por inercia

- `Selected Work`
- `Experience`
- `Start a conversation`
- `How I Work`

Si una expresion estrategica se conserva en ingles en `es`, debe haber una razon clara y no solo una preferencia estetica.

---

## Ownership editorial

### Ingles

- owner editorial: usuario
- soporte operativo y de implementacion: Codex

### Español

- owner editorial: usuario
- soporte operativo y de implementacion: Codex

### Implicacion

Ningun locale debe tratarse como salida autonoma sin revision del usuario.

---

## Language Switcher

### Estado requerido en `Fase 5`

Debe existir un `LanguageSwitcher` minimo y multipagina.

### Requisitos funcionales

- visible en la navegacion principal
- usable tambien en contexto movil si la navegacion movil existe
- debe intentar preservar la pagina equivalente entre idiomas
- si una equivalencia exacta no existiera, debe caer a la home del locale destino

### Excepcion para blog

- en `blog post detail`, si no existe una equivalencia exacta del post en el locale destino, el `LanguageSwitcher` debe caer al `blog index` de ese locale
- esta excepcion no cambia la regla general para otras superficies del sitio

### No requiere en esta fase

- selector complejo por bandera
- geolocalizacion avanzada
- selector de tres o mas idiomas

---

## Fallbacks y gaps de traduccion

### Regla deseada

No deben existir gaps de traduccion importantes en:

- `/en/` y `/es/`
- `/work`
- `/experience`
- `/contact`
- `/blog`
- navbar
- footer

### Regla tecnica

El sistema puede tener fallback tecnico a `en` durante desarrollo, pero la fase no se considera cerrada si ese fallback sigue tapando gaps visibles de `es`.

---

## Aleman heredado

`de` no forma parte del runtime activo del portfolio.

Implicaciones:

- `src/i18n/de.json` no debe seguir alimentando el sitio
- no deben existir rutas `/de/`
- no debe existir `LanguageSwitcher` que lo exponga
- cualquier residuo del template original en aleman debe retirarse del wiring activo

Su archivo puede eliminarse o quedar temporalmente fuera del runtime durante la implementacion, pero no debe seguir afectando el comportamiento visible del sitio.

---

## Restricciones de fase

Esta fase no debe:

- introducir `pt` como locale activo
- reabrir estrategia o arquitectura del sitio
- definir SEO final por locale
- resolver deploy final o dominio custom definitivo

---

## Relacion con otros documentos

- `docs/strategy/portfolio-strategy.md` sigue definiendo idioma maestro y posicionamiento
- `docs/architecture/site-architecture.md` sigue definiendo paginas y su rol; esta spec solo localiza esas mismas superficies
- `docs/content/content-master.md` sigue siendo canon del idioma maestro
- `docs/delivery/deployment.md` debe alinearse con esta spec para routing y publicacion
