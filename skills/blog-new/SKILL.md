---
name: blog-new
description: >
  Creates a new `blog_post` draft in this repo with schema-valid frontmatter.
  Trigger: When the user wants to create a new blog post draft for the portfolio blog.
license: Apache-2.0
metadata:
  author: paw-paw
  version: "1.0"
---

## When to Use

- Create a new `blog_post` draft under `src/content/blog/`
- Start a post with the required frontmatter already present
- Keep blog authoring inside the repo-local markdown workflow

## Inputs to Collect

- `slug` for the file name (used as the canonical route identity)
- `title`
- `excerpt`
- `publish_date`
- `category`
- `locale`
- `reading_time`
- `header_image`
- enough source material to write a minimal draft body or outline

## Critical Patterns

- Operate only on `blog_post`
- Create files inside `src/content/blog/`
- Include required frontmatter fields from `src/content.config.ts`
- Preserve the current frontmatter order used by existing posts
- Default only:
  - `status: draft`
  - `featured: false`
- Derive route identity from the file name unless the repo later adopts explicit slug metadata
- Keep the body intentionally draft-grade, but not empty
- Do not treat routine draft creation as a docs/governance change

## Workflow

1. Read the active contract before writing:
   - `docs/content/content-system.md`
   - `src/content.config.ts`
   - `src/utils/blog.ts`
   - one existing example in `src/content/blog/*.md`
2. Confirm that `src/content/blog/{slug}.md` does not already exist.
3. Validate the requested metadata:
   - `category` must be one of:
     - `project-delivery`
     - `bd-and-partnerships`
     - `operations`
     - `career-and-industry-lessons`
   - `locale` must be `en` or `es`
   - `publish_date` must be parseable as a date
   - `header_image` must point to a valid repo asset path pattern
4. Create the draft with this frontmatter shape:

```md
---
title: <title>
excerpt: <excerpt>
publish_date: <YYYY-MM-DD>
category: <approved-category>
locale: <en|es>
status: draft
reading_time: <e.g. 5 min>
featured: false
header_image: <repo-relative image path>
---
```

5. Add a minimal body that is explicitly useful as a draft:
   - preferred: a brief opening plus a short outline
   - acceptable: a concise editorial outline derived from the user request
   - avoid empty bodies or silent placeholder text
6. Report the created path, slug, locale, and any assumptions made.

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
