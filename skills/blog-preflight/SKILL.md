---
name: blog-preflight
description: >
  Checks whether a single `blog_post` is ready for publication using editorial and repo validations.
  Trigger: When the user wants a publish-readiness check for one blog post in this repo.
license: Apache-2.0
metadata:
  author: gentleman-programming
  version: "1.0"
---

## When to Use

- Validate one `blog_post` before publication
- Check metadata readiness and repo-level build/test health
- Report blocking issues without silently fixing them

## Critical Patterns

- Run per-post, not as a collection-wide editorial audit
- Check the target post against the active schema and blog rules
- Report blocking issues explicitly
- Reuse repo validations:
  - `npm test`
  - `npm run build`
- Do not silently modify the post while running preflight
- Treat routine readiness checks as local workflow, not as docs/governance changes by default

## Workflow

1. Resolve a single target post in `src/content/blog/`.
2. Check per-post readiness:
   - required frontmatter fields exist
   - `publish_date` is parseable
   - `category` belongs to the approved list
   - `locale` is `en` or `es`
   - `status` is valid
   - `reading_time` is present
   - `header_image` is present
   - body content exists and is not effectively empty
3. Check post-level editorial fit:
   - the piece still reads like a `blog_post`, not random notes
   - it supports the portfolio thesis rather than generic motivational content
4. Check relevant invariant risk for the target post:
   - if the post is marked `featured: true`, confirm it would not violate the one-featured-published-post-per-locale rule
5. Run repo validations exactly as checks, not as side effects:
   - `npm test`
   - `npm run build`
6. Return a structured readiness result:
   - `ready: true|false`
   - blocking issues
   - checks run
7. Never fix the blocking issues automatically as part of preflight.
8. Flag docs/governance sync only if the workflow or policy changed, not because a post failed readiness.

## Blocking Conditions

- missing required frontmatter
- invalid category or locale
- effectively empty body
- featured conflict for a published post
- failing `npm test`
- failing `npm run build`

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
