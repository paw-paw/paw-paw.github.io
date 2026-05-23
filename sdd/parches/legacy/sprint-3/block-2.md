# Phase Plan

Usa este plan para ejecutar el Bloque 2 del roadmap de Sprint 3.

Este documento es auxiliar. No redefine precedencia, no sustituye contratos y no introduce nuevas decisiones de producto por si solo.

Antes de usarlo:

- confirma que `Bloque 1` esta cerrado o que sus cambios documentales ya estan claros
- revisa `docs/sdd/parches/sprint-3/roadmap.md`
- revisa `docs/sdd/parches/sprint-3/implementation-report.md`
- confirma el estado de `.codex/`

---

## Metadatos

- Fase: `Sprint 3 - Bloque 2 - Preparacion de filesystem Codex`
- Estado: `done`
- Ultima actualizacion: `2026-04-25`
- Owner: `pawpaw + Codex`
- Depende de:
  - `docs/README.md`
  - `AGENTS.md`
  - `docs/sdd/parches/sprint-3/roadmap.md`
  - `docs/sdd/parches/sprint-3/block-1.md`
- Desbloquea:
  - creacion de las 7 skills SDD
  - ubicacion estable para skills locales de Codex
  - eliminacion de ambiguedad entre `skills/` y `.codex/skills/`

---

## 1. Objetivo de la fase

Esta fase debe preparar el filesystem para que las skills locales vivan en `.codex/skills/`. Al cerrarla, `.codex` debe ser un directorio, `.codex/skills/` debe existir, no debe haber un archivo `.codex` bloqueante, y no debe recrearse una carpeta `skills/` en la raiz del repo. Esta fase existe para que la implementacion posterior de skills no arrastre una estructura equivocada.

---

## 2. Fuente de verdad aplicable

- `docs/README.md`
- roadmap activo o historico aplicable en `docs/sdd/`:
  - `docs/sdd/parches/sprint-3/roadmap.md`
  - `docs/sdd/parches/sprint-3/implementation-report.md`
  - `docs/sdd/parches/sprint-3/block-1.md`
- documentos contractuales aplicables:
  - no hay contrato de producto nuevo en esta fase
- documentos auxiliares aplicables:
  - `AGENTS.md`
  - `.atl/skill-registry.md`

Nota:

- si hay conflicto, manda la precedencia definida en `docs/README.md`
- este plan no puede contradecir documentos contractuales
- esta fase solo prepara estructura de skills; no implementa contenido de las 7 skills SDD

---

## 3. Inputs requeridos

### Documentos

- [ ] `docs/sdd/parches/sprint-3/roadmap.md`
- [ ] `docs/sdd/parches/sprint-3/implementation-report.md`
- [ ] `AGENTS.md`
- [ ] `.atl/skill-registry.md`

### Decisiones previas

- [ ] `.codex/skills/` es la ubicacion activa para skills locales
- [ ] `skills/` root no debe recrearse
- [ ] las skills editoriales existentes deben vivir bajo `.codex/skills/`

### Estado tecnico

- [ ] `git status --short` revisado
- [ ] `.codex` revisado con `file .codex`
- [ ] permisos del filesystem permiten crear directorios en el repo

---

## 4. Entregables documentales

### Crear

- [ ] `docs/sdd/parches/sprint-3/block-2.md`

### Actualizar

- [ ] ninguno por defecto

### No tocar

- [ ] `docs/strategy/`
- [ ] `docs/architecture/`
- [ ] `docs/content/`
- [ ] `docs/visual/`
- [ ] `docs/delivery/`
- [ ] `src/`
- [ ] `package.json`
- [ ] `.github/`

---

## 5. Alcance de implementacion

### Si entra

- [ ] asegurar que `.codex` sea directorio
- [ ] crear `.codex/skills/`
- [ ] mover skills editoriales existentes a `.codex/skills/` si aun no estan ahi
- [ ] confirmar que root `skills/` queda ausente o vacio sin archivos trackeados

### No entra

- [ ] escribir las 7 skills SDD
- [ ] actualizar copy de skills
- [ ] cambiar runtime Astro
- [ ] modificar dependencias
- [ ] borrar skills existentes sin migracion

---

## 6. Tareas detalladas

### Bloque A - Verificacion de `.codex`

- [ ] ejecutar `file .codex`
- [ ] si `.codex` es archivo vacio, reemplazarlo por directorio `.codex/`
- [ ] si `.codex` ya es directorio, no tocarlo destructivamente
- [ ] reportar cualquier permiso o mount raro antes de insistir

### Bloque B - Creacion de directorios

- [ ] crear `.codex/skills/`
- [ ] verificar con `find .codex -maxdepth 2 -type d`
- [ ] no crear `.codex/skills/.system/` dentro del repo

### Bloque C - Migracion de skills existentes

- [ ] mover `blog-new` a `.codex/skills/blog-new`
- [ ] mover `blog-edit` a `.codex/skills/blog-edit`
- [ ] mover `blog-feature` a `.codex/skills/blog-feature`
- [ ] mover `blog-unpublish` a `.codex/skills/blog-unpublish`
- [ ] mover `blog-preflight` a `.codex/skills/blog-preflight`
- [ ] usar `git mv` cuando los archivos esten trackeados

### Bloque D - Verificacion de estructura

- [ ] ejecutar `find .codex/skills -maxdepth 2 -type f -name SKILL.md`
- [ ] ejecutar `find skills -maxdepth 2 -type f` si `skills/` existe
- [ ] confirmar que las rutas documentadas coinciden con archivos reales

---

## 7. Archivos probables a tocar

### Docs

- `docs/sdd/parches/sprint-3/block-2.md`

### Codigo

- `.codex/skills/**/SKILL.md`
- `skills/**/SKILL.md` solo como origen de `git mv`, no como destino final

---

## 8. Dependencias y bloqueos

### Dependencias

- [ ] cierre de `Bloque 1`
- [ ] permisos para modificar estructura del repo
- [ ] archivos existentes de skills locales si aplica

### Bloqueos posibles

- [ ] `.codex` aparece como archivo read-only
- [ ] `git mv` falla por permisos del index
- [ ] hay referencias en docs que aun esperan `skills/`

### Mitigacion

- resolver `.codex` antes de cualquier otro cambio
- pedir aprobacion de escalacion si el sandbox bloquea borrar el archivo vacio
- dejar referencias documentales para `Bloque 5` si no bloquean estructura

---

## 9. Validaciones

### Documentales

- [ ] verificar alineacion con `docs/sdd/parches/sprint-3/roadmap.md`
- [ ] verificar que no se recrea una convencion no documentada

### Tecnicas

- [ ] `file .codex`
- [ ] `find .codex/skills -maxdepth 2 -type f -name SKILL.md`
- [ ] `git status --short`
- [ ] no corresponde `npm run build`

### Manuales

- [ ] confirmar que la estructura resultante es entendible para un dev nuevo
- [ ] confirmar que no hay archivos crudos de `_inbox/` involucrados

---

## 10. Criterio de cierre

La fase solo se considera cerrada si:

- [ ] `.codex` es directorio
- [ ] `.codex/skills/` existe
- [ ] las skills locales existentes estan bajo `.codex/skills/`
- [ ] no hay archivos trackeados bajo root `skills/`
- [ ] no se tocaron runtime ni dependencias

---

## 11. Riesgos y notas

### Riesgos

- perder historial si se usa move no trackeado en vez de `git mv`
- eliminar una skill existente en vez de migrarla
- mezclar esta fase con la escritura de skills SDD

### Notas operativas

- este bloque puede requerir escalacion si `.codex` existe como archivo especial o read-only
- no crear las 7 skills SDD aqui; eso empieza en `Bloque 3`

---

## 12. Registro de cambios del plan

- Fecha: `2026-04-25`
  - cambio: creacion inicial del plan para `Bloque 2`
  - razon: detallar la preparacion de filesystem antes de crear skills SDD
