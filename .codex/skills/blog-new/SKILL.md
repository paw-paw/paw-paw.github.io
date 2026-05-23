---
name: blog-new
description: >
  Creates a new `blog_post` draft in this repo with schema-valid frontmatter.
  Trigger: When the user wants to create a new blog post draft for the portfolio blog.
license: Apache-2.0
metadata:
  author: paw-paw
  version: "1.2"
---

## When to Use

- Create a new `blog_post` draft under `src/content/blog/`
- Start a post with the required frontmatter already present
- Keep blog authoring inside the repo-local markdown workflow

## Inputs to Collect

### Required

- `title`
- `body` or a draft outline with enough material to infer a short summary
- `category`
- `angle`
- `domain`
- `header_image`

### Optional

- `locale`
- `publish_date`
- explicit `slug` if the user wants to override the inferred one

## Critical Patterns

- Operate only on `blog_post`
- Create files inside `src/content/blog/`
- Preserve the current frontmatter order used by existing posts
- Validate against the active schema in `src/content.config.ts`
- Infer when omitted:
  - `slug` from `title`
  - `excerpt` from the draft content, aiming for the documented recommended range of `24–32` words when viable
  - `reading_time` from content length
- Default when omitted:
  - `status: draft`
  - `featured: false`
  - `locale` from request context when possible, otherwise `en`
  - `publish_date` to the current date
- Derive route identity from the file name unless the repo later adopts explicit slug metadata
- Keep the body intentionally draft-grade, but not empty
- Do not treat routine draft creation as a docs/governance change
- Always report inferred values explicitly so the user can correct them

## Workflow

1. Read the active contract before writing:
   - `docs/content/content-system.md`
   - `src/content.config.ts`
   - `src/utils/blog.ts`
   - one existing example in `src/content/blog/*.md`
2. Collect the required inputs:
   - `title`
   - `body` or draft outline
   - `category`
   - `angle`
   - `domain`
   - `header_image`
3. Resolve optional inputs:
   - `locale` from the user request when provided, otherwise infer from request context or default to `en`
   - `publish_date` from the user request when provided, otherwise use today's date
   - `slug` from explicit user input only if provided; otherwise infer it from `title`
4. Validate the final metadata:
   - `category` must be one of:
     - `project-delivery`
     - `bd-and-partnerships`
     - `operations`
     - `career-and-industry-lessons`
   - `angle` must be one of:
     - `field-notes`
     - `delivery-framework`
     - `industry-analysis`
     - `career-reflection`
   - `domain` must be one of:
     - `gaming`
     - `esports`
     - `ai-and-tech`
     - `remote-ops`
   - `locale` must be `en` or `es`
   - `publish_date` must be parseable as a date
   - `header_image` must point to a valid repo asset path pattern
   - treat `angle` and `domain` as stable keys in frontmatter, not as visible localized labels
5. Infer the remaining fields:
   - `excerpt` from the draft content, aiming for the documented recommended range of `24–32` words when viable
   - `reading_time` from content length
   - `status: draft`
   - `featured: false`
6. Confirm that `src/content/blog/{slug}.md` does not already exist.
7. Create the draft with this frontmatter shape:

```md
---
title: <title>
excerpt: <inferred excerpt>
publish_date: <resolved date>
category: <approved-category>
angle: <approved-angle>
domain: <approved-domain>
locale: <resolved locale>
status: draft
reading_time: <inferred reading time>
featured: false
header_image: <repo-relative image path>
---
```

8. Add a minimal body that is explicitly useful as a draft:
   - preferred: a brief opening plus a short outline
   - acceptable: a concise editorial outline derived from the user request
   - avoid empty bodies or silent placeholder text
9. Report:
   - created path
   - resolved `slug`
   - resolved `locale`
   - resolved `publish_date`
   - resolved `category`
   - resolved `angle`
   - resolved `domain`
   - inferred `excerpt`
   - inferred `reading_time`
   - any assumptions made
   - if useful, the visible localized labels that correspond to the resolved `angle` and `domain`

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
