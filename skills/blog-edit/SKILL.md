---
name: blog-edit
description: >
  Updates an existing `blog_post` in this repo while staying inside the user-requested scope.
  Trigger: When the user wants to edit blog post body or metadata without breaking schema validity.
license: Apache-2.0
metadata:
  author: paw-paw
  version: "1.0"
---

## When to Use

- Edit an existing post in `src/content/blog/`
- Update body content, metadata, or both
- Keep edits scoped to the user-requested change

## Inputs to Collect

- target post path or slug
- exact requested scope:
  - body
  - metadata fields
  - or both
- any source text or constraints needed for the requested edit

## Critical Patterns

- Operate only on an existing `blog_post`
- Modify only the fields or body sections the user asked to change
- Preserve schema validity after the edit
- Do not silently change slug/locale/status/featured unless explicitly requested
- Treat file rename / slug change as a public route change and call it out explicitly before doing it
- Keep frontmatter order stable unless there is a strong repo-wide reason to change it
- Treat routine post edits as local content workflow, not as docs/governance changes by default

## Workflow

1. Read the target post and restate the requested scope before editing.
2. Read the governing inputs relevant to the change:
   - `docs/content/content-system.md`
   - `src/content.config.ts`
   - `src/utils/blog.ts`
3. Edit only the requested surfaces:
   - body copy
   - selected frontmatter fields
   - or both
4. Preserve contract-valid metadata:
   - approved `category`
   - valid `locale`
   - parseable `publish_date`
   - `featured` remains boolean
5. Never widen the change on your own:
   - do not rewrite the whole article if the request is narrow
   - do not change `status`, `featured`, `locale`, or route identity unless the user explicitly asked
6. If the user explicitly requests a slug/path change, treat it as a route-affecting edit and call that out in the report.
7. Summarize exactly what changed and what was intentionally left untouched.
8. Flag docs/governance sync only if the edit changes site behavior or editorial policy, not for routine content maintenance.

## Commands

```bash
npm test
npm run build
```

## Resources

- **Documentation**: `docs/content/content-system.md`
- **Schema**: `src/content.config.ts`
- **Rules**: `src/utils/blog.ts`
- **Examples**: `src/content/blog/*.md`
