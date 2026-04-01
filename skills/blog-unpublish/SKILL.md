---
name: blog-unpublish
description: >
  Removes a `blog_post` from active publication by reverting it to draft without deleting the file.
  Trigger: When the user wants to unpublish a blog post but keep it in the repo.
license: Apache-2.0
metadata:
  author: paw-paw
  version: "1.0"
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
6. Report that no replacement featured post is required.
7. Flag docs/governance sync only if the workflow or policy boundary changed, not for the unpublish action itself.

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
