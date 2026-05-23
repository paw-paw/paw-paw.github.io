# Handover: blog-post-translation-identity

## Origen

La revisión de posts publicados del blog reveló que:

- `A shirt, a license, and a loophole` y `Una camiseta, una licencia y una oportunidad` son traducciones editoriales evidentes entre sí.
- El runtime actual solo detecta equivalencia exacta entre locales cuando dos posts comparten el mismo `slug`.
- En la colección plana `src/content/blog/`, el `slug` deriva hoy del nombre del archivo, por lo que exigir el mismo `slug` a dos posts traducidos con URLs localizadas vuelve impracticable esa equivalencia.

## Decisión de producto ya tomada

El usuario aprobó resolver el problema con una identidad editorial estable separada del slug visible por idioma, mediante una clave común tipo `translation_key` o equivalente.

## Intención del cambio

Permitir que:

- cada locale conserve slugs naturales y localizados;
- el sistema pueda reconocer traducciones reales entre posts;
- el `LanguageSwitcher` preserve la página equivalente cuando exista traducción;
- sigan siendo válidos los posts escritos solo en un idioma.

## Límites explícitos

- No se busca obligar a que todos los posts tengan traducción.
- No se busca cambiar la taxonomía editorial del blog.
- No se busca resolver todavía el diseño técnico detallado ni la implementación.
