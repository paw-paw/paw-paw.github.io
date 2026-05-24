---
name: blog-edit
description: >
  Updates an existing `blog_post` in this repo while staying inside the user-requested scope.
  Trigger: When the user wants to edit blog post body or metadata without breaking schema validity.
license: Apache-2.0
metadata:
  author: paw-paw
  version: "1.2"
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
- When the requested scope includes `excerpt`, preserve or adjust it toward the documented recommended range of `24–32` words unless the user explicitly asks otherwise
- When the requested scope changes the article substantially, evaluate whether `modified_date` must be set or updated
- Treat file rename / slug change as a public route change and call it out explicitly before doing it
- Keep frontmatter order stable unless there is a strong repo-wide reason to change it
- Treat routine post edits as local content workflow, not as docs/governance changes by default
- Do not update `modified_date` for typo, spacing, formatting, link formatting, or other minor corrections that do not change the article's substance

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
   - approved stable-key `angle`
   - approved stable-key `domain`
   - valid `locale`
   - parseable `publish_date`
   - parseable optional `modified_date`, when present
   - `featured` remains boolean
   - when `excerpt` is in scope, keep it aligned with the documented recommended range of `24–32` words unless the user explicitly requests a different editorial shape
   - if `angle` or `domain` are edited, write the stable frontmatter keys, not the visible localized labels
5. Classify whether the edit is substantial for `modified_date`:
   - update or add `modified_date` when the edit changes thesis, data, examples, claims, structure, context, public metadata, or the article's SEO/AEO description
   - leave `modified_date` untouched for minor copy cleanup, typo fixes, whitespace, formatting-only changes, or non-substantive link cleanup
   - if the user explicitly asks not to update `modified_date` after a substantial edit, flag the SEO/AEO risk in the report
6. Never widen the change on your own:
   - do not rewrite the whole article if the request is narrow
   - do not change `status`, `featured`, `locale`, or route identity unless the user explicitly asked
7. If the user explicitly requests a slug/path change, treat it as a route-affecting edit and call that out in the report.
8. Summarize exactly what changed and what was intentionally left untouched, including whether `modified_date` changed and why.
9. Flag docs/governance sync only if the edit changes site behavior or editorial policy, not for routine content maintenance.

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
