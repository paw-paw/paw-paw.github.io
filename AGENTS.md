# AGENTS.md

## 1) Propósito del repo

Este repo existe para construir y mantener mi portfolio público en Astro a partir de un template base.

### Objetivo principal
- Conseguir empleo y desarrollar una marca personal híbrida mediante un sitio público coherente, profesional y mantenible.

### No-objetivos
- No usar este repo como sandbox de experimentación sin especificación previa.
- No introducir features o rediseños grandes sin respaldo documental en `docs/`.
- No resolver aquí problemas ajenos al portfolio público.

---

## 2) Fuentes de verdad

Si hay conflicto entre documentación y código, manda la documentación.

### Precedencia
1. `docs/README.md`
2. documentos contractuales en `docs/`
3. `AGENTS.md`
4. estado actual del código
5. comentarios inline

### Regla
- `docs/` es contractual.
- No conviertas una decisión implícita en código en una “nueva verdad”.
- Si falta especificación para una decisión importante, señálalo. No la inventes como definitiva.

### Archivos derivados
Si existen archivos generados o derivados, no los uses como fuente de verdad principal.

### Fuentes externas temporales
- `temp/` puede contener fuentes externas crudas de trabajo.
- `temp/truth/` es una fuente upstream auxiliar, no contractual.
- No usar `temp/truth/` como fuente directa de runtime ni como sustituto de `docs/`.
- Si un schema externo entra en conflicto con la documentación contractual, manda `docs/`.
- Metadatos del sistema operativo como `*.Zone.Identifier` no forman parte de la fuente útil y deben ignorarse.

---

## 3) Límites operativos

### Siempre
- Leer primero los archivos relevantes antes de editar.
- Proponer siempre un mini plan antes de hacer cambios.
- Mantener cambios pequeños, claros y fáciles de revisar.
- Mantener consistencia entre contenido, navegación, metadata y estructura.
- Si detectas desalineación entre `docs/` y código, reportarla explícitamente.
- Si el cambio modifica comportamiento visible y no hubo actualización previa de docs, flaggear la desalineación y exigir sincronización.

### Preguntar antes
- Añadir dependencias nuevas.
- Hacer cambios grandes de estructura o arquitectura.
- Cambiar routing, i18n, SEO estructural, deployment o dominio.
- Eliminar páginas, componentes, assets o secciones existentes.
- Introducir una convención nueva no documentada.
- Conectar una fuente externa o un schema externo directamente a `src/` o al runtime.

### Nunca
- No sobrescribir decisiones documentadas por criterio propio.
- No hacer cambios destructivos de git.
- No borrar checks, validaciones o scripts para “hacer pasar” una tarea.
- No dejar placeholders silenciosos como solución final.
- No mezclar refactor amplio, rediseño amplio y cambio masivo de contenido en una sola entrega sin necesidad clara.

### Sugerir, no ejecutar
- Si detectas componentes, páginas o assets posiblemente muertos, sugiérelo en el reporte final. No los elimines automáticamente.

---

## 4) Workflow esperado

Para cada tarea:

1. Leer contexto, docs y archivos relevantes.
2. Identificar qué documento manda.
3. Proponer un mini plan breve.
4. Implementar el cambio mínimo correcto.
5. Ejecutar validaciones relevantes si existen.
6. Entregar reporte final con:
   - resultado
   - archivos tocados
   - validaciones ejecutadas
   - supuestos
   - desalineaciones docs ↔ código
   - pendientes
   - riesgos

---

## 5) Validación

Usa `npm`.

### Regla general
- No inventes comandos ni resultados.
- Si el repo todavía no tiene scripts, dilo explícitamente.
- Corre solo las validaciones relevantes al alcance del cambio.

### Criterio esperado
- cambios estructurales: correr `npm run build`
- cambios de código o configuración menor: correr validaciones disponibles si aplican
- cambios puramente visuales o de contenido: reportar que la validación principal pendiente es revisión visual/manual

### Scripts esperados a futuro
- `npm run dev`
- `npm run build`
- `npm run preview`
- `npm run lint`

Si alguno no existe, repórtalo; no lo asumas.

---

## 6) Criterios de completitud

Una tarea no está completa si:

- contradice documentación vigente
- requiere una decisión grande no documentada
- rompe consistencia entre secciones, navegación, idioma o metadata
- modifica comportamiento visible sin flaggear desalineación documental
- omite validaciones relevantes disponibles
- deja supuestos importantes escondidos en el código

---

## 7) Convenciones de implementación

### Contenido
- No escribir copy “definitivo” sin revisar antes la doc estratégica correspondiente.
- Mantener coherencia entre hero, navegación, secciones, CTA y footer.
- Si una sección cambia de propósito, actualizar también labels, anchors y metadata relacionada.

### UI
- Reutilizar componentes existentes antes de crear nuevos.
- Evitar variantes visuales innecesarias.
- Mantener consistencia con el sistema visual documentado.

### Estructura
- Preferir nombres explícitos y composición simple.
- Evitar hardcodear contenido que debería vivir en datos o archivos editables.
- No crear abstracciones prematuras por cambios pequeños.
- No adaptar el portfolio al schema de una fuente externa; adaptar la fuente externa al modelo definido por el portfolio.

---

## 8) Estructura del repo

Ajustar esta sección cuando la estructura real quede definida.

- `src/pages/`: rutas y páginas
- `src/components/`: componentes y secciones
- `src/layouts/`: layouts compartidos
- `src/assets/`: imágenes y branding
- `src/i18n/`: contenido por idioma
- `src/utils/`: utilidades
- `public/`: archivos públicos estáticos
- `docs/`: especificaciones contractuales
- `temp/`: fuentes externas crudas y staging no contractual

---

## 9) Reglas para documentación

El flujo ideal es:
1. cambia la documentación
2. cambia la implementación

Si eso no ocurre, el agente debe:
- flaggear la desalineación
- indicar qué documento necesita actualización
- evitar presentar el cambio como totalmente cerrado si la sincronización documental no ocurrió

Actualizar `docs/` cuando cambie cualquiera de estas cosas:
- estrategia del portfolio
- arquitectura de secciones
- modelo de contenido
- rol o transformación de una fuente externa como `temp/truth/`
- sistema visual
- idiomas soportados
- SEO estructural
- deployment

No usar el código como único lugar donde vive una decisión de producto.

---

## 10) Guías específicas por carpeta

Si existe un `AGENTS.md` más cercano, sus instrucciones refinan este archivo para ese contexto.

Este archivo raíz define gobierno general del repo.
