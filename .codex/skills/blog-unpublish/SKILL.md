---
name: blog-unpublish
description: >
  Removes a `blog_post` from active publication by reverting it to draft without deleting the file.
  Trigger: When the user wants to unpublish a blog post but keep it in the repo.
license: Apache-2.0
metadata:
  author: paw-paw
  version: "1.1"
---

## When to Use

- Stop publishing an existing post
- Keep the post file and content history intact
- Clean featured state while unpublishing

## Critical Patterns

- Change `status` from `published` to `draft`
- Also set `featured: false`
- Never delete the markdown file as part of unpublish
- Do not require choosing a replacement featured post
- Published-state filtering must remove unpublished posts from public routes, sitemap, listing pages, and post-level schema generation
- Treat unpublish as routine editorial workflow, not as a docs/governance change by default

## Workflow

1. Resolve the target post in `src/content/blog/`.
2. Read the current `status` and `featured` values.
3. Apply the unpublish mutation:
   - set `status: draft`
   - set `featured: false`
4. Leave the file, body, and remaining metadata intact unless the user asked for more.
5. If the post is already `draft`, keep the operation idempotent:
   - ensure `featured: false`
   - report that the post was already unpublished
6. After mutation, verify the post no longer qualifies as public content:
   - it should not appear in localized blog listing data
   - it should not generate a public detail route
   - it should not appear in the sitemap
   - it should not emit `BlogPosting` structured data
7. Report that no replacement featured post is required.
8. Flag docs/governance sync only if the workflow or policy boundary changed, not for the unpublish action itself.

## Blocking Conditions

- target file does not exist
- frontmatter is malformed enough that the publish state cannot be trusted

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
