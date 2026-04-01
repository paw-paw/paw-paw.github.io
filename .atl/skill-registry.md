# Skill Registry

- Generated: 2026-04-01
- Project: `paw-paw.github.io`
- Working directory: `/home/pawpaw/paw-paw.github.io`
- Resolved SDD persistence: `engram`
- Current git branch: `rebuild-portfolio`
- User-stated branch goal: introducir una sección de blog

## Resolution Rules

- Se escanearon skills de usuario y de proyecto.
- Las skills de proyecto tienen prioridad sobre las de usuario cuando apliquen al mismo workflow.
- Se excluyeron `sdd-*`, `_shared` y `skill-registry` según la convención del skill `sdd-init`.

## Resolved Skills

| Skill | Source | Path | Trigger / purpose |
| --- | --- | --- | --- |
| `blog-new` | project | `skills/blog-new/SKILL.md` | Crear drafts de `blog_post` con frontmatter válido en `src/content/blog/`. |
| `blog-edit` | project | `skills/blog-edit/SKILL.md` | Editar `blog_post` existente dentro del alcance pedido. |
| `blog-feature` | project | `skills/blog-feature/SKILL.md` | Marcar como featured un `blog_post` publicado manteniendo unicidad por locale. |
| `blog-unpublish` | project | `skills/blog-unpublish/SKILL.md` | Retirar de publicación un `blog_post` pasándolo a draft y limpiando `featured`. |
| `blog-preflight` | project | `skills/blog-preflight/SKILL.md` | Validar la readiness de publicación de un `blog_post`. |
| `go-testing` | user | `/home/pawpaw/.claude/skills/go-testing/SKILL.md` | Go testing patterns para sesiones que agregan o corrigen tests en Go. |
| `imagegen` | user | `/home/pawpaw/.codex/skills/.system/imagegen/SKILL.md` | Generación o edición de imágenes raster cuando el trabajo lo requiera. |
| `openai-docs` | user | `/home/pawpaw/.codex/skills/.system/openai-docs/SKILL.md` | Consultas de documentación oficial de OpenAI y uso actualizado de productos OpenAI. |
| `peon-ping-config` | user | `/home/pawpaw/.claude/skills/peon-ping-config/SKILL.md` | Cambios de configuración de peon-ping. |
| `peon-ping-log` | user | `/home/pawpaw/.claude/skills/peon-ping-log/SKILL.md` | Registro de ejercicio / reps en peon trainer. |
| `peon-ping-toggle` | user | `/home/pawpaw/.claude/skills/peon-ping-toggle/SKILL.md` | Activar o pausar sonidos de peon-ping en sesión. |
| `peon-ping-use` | user | `/home/pawpaw/.claude/skills/peon-ping-use/SKILL.md` | Selección del voice pack de peon-ping. |
| `plugin-creator` | user | `/home/pawpaw/.codex/skills/.system/plugin-creator/SKILL.md` | Scaffolding de plugins locales para Codex. |
| `skill-creator` | user | `/home/pawpaw/.claude/skills/skill-creator/SKILL.md` | Creación o documentación de nuevas skills para agentes. |
| `skill-installer` | user | `/home/pawpaw/.codex/skills/.system/skill-installer/SKILL.md` | Instalación de skills curadas o desde repositorios. |

## Project Conventions

### Root convention files detected

- `AGENTS.md` — gobierno operativo general del repo.

### Referenced convention files read from the repo

- `docs/README.md` — precedencia contractual dentro de `docs/`.
- `docs/AGENTS.md` — refinamiento operativo para trabajo documental.
- `docs/architecture/site-architecture.md` — el blog ya es superficie principal contractual.
- `docs/content/content-system.md` — la entidad `blog_post` ya forma parte del sistema contractual.
- `docs/architecture/i18n-spec.md` — exige rutas localizadas `/en/blog/...` y `/es/blog/...`.
- `docs/delivery/deployment.md` — fija GitHub Pages y routing público con prefijos de locale.

## Repo Context Relevant to SDD

- Stack principal: Astro 5 (`astro@5.18.1`) con TypeScript ESM, Tailwind CSS, integración Preact y build estático.
- Runtime editorial: `src/content.config.ts` define la colección `blog`; `src/utils/blog.ts` centraliza categorías, paths y filtros.
- Locales activos documentados y configurados: `en`, `es`.
- Validaciones disponibles hoy: `npm test`, `npm run dev`, `npm run build`, `npm run preview`; no existe `npm run lint`.
- CI/CD: `.github/workflows/deploy.yml` publica en GitHub Pages sobre `main`.

## Current Change Surface: Blog

- La documentación contractual ya contempla `/blog`, `/blog/[slug]` y `/blog/category/[category]`.
- El código ya contiene `src/pages/en/blog/index.astro`, `src/pages/en/blog/[slug].astro`, `src/pages/en/blog/category/[category].astro`, `src/pages/es/blog/index.astro`, `src/pages/es/blog/[slug].astro` y `src/pages/es/blog/category/[category].astro`.
- La superficie del blog ya soporta detail pages localizadas para `en` y `es`, con la release editorial vigente todavía definida como `en-first`.
- También sobreviven rutas puente sin prefijo (`src/pages/index.astro`, `work.astro`, `experience.astro`, `contact.astro`), coherentes con el bridge descrito en docs, pero requieren cuidado para no tratarlas como canonicals de contenido.

## SDD Initialization Decision

- Backend elegido: `engram`.
- Motivo: Engram está disponible, no existe `openspec/` previo y este repo tiene reglas explícitas para evitar cambios estructurales grandes sin necesidad documental.
- Implicación: no se crea `openspec/`; los artefactos SDD se podrán persistir en Engram y este registry queda en `.atl/` como infraestructura local.
