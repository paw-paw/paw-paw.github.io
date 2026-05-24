---
name: blog-preflight
description: >
  Checks whether a single `blog_post` is ready for publication using editorial and repo validations.
  Trigger: When the user wants a publish-readiness check for one blog post in this repo.
license: Apache-2.0
metadata:
  author: paw-paw
  version: "1.2"
---

## When to Use

- Validate one `blog_post` before publication
- Check metadata readiness and repo-level build/test health
- Check per-post SEO/AEO readiness for `BlogPosting`
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
   - optional `modified_date` is parseable when present
   - if `modified_date` is present, it does not precede `publish_date`
   - `category` belongs to the approved list
   - `angle` belongs to the approved stable-key list
   - `domain` belongs to the approved stable-key list
   - `locale` is `en` or `es`
   - `status` is valid
   - `reading_time` is present
   - `header_image` is present
   - body content exists and is not effectively empty
   - `angle` and `domain` are stored as stable frontmatter keys, not visible localized labels
   - `excerpt` fit against the documented recommended range of `24–32` words; report outliers as editorial guidance, not as automatic blocking issues
3. Check per-post SEO/AEO readiness:
   - `title` is specific to the article and suitable for `headline`
   - `excerpt` can serve as the meta description and `BlogPosting.description`
   - `header_image` resolves to a repo asset suitable for social metadata and `BlogPosting.image`
   - the post can derive a localized canonical URL from locale and slug/file name
   - `datePublished` can derive from `publish_date`
   - `dateModified` can derive from `modified_date` or fall back technically to `publish_date`
   - `author.@id` can reference `https://pauloctuya.com/#person`
   - body headings and key idea support the stated title/excerpt without hidden claims
4. Check post-level editorial fit:
   - the piece still reads like a `blog_post`, not random notes
   - it supports the portfolio thesis rather than generic motivational content
5. Check relevant invariant risk for the target post:
   - if the post is marked `featured: true`, confirm it would not violate the one-featured-published-post-per-locale rule
6. Run repo validations exactly as checks, not as side effects:
   - `npm test`
   - `npm run build`
7. Return a structured readiness result:
   - `ready: true|false`
   - blocking issues
   - SEO/AEO guidance
   - checks run
8. Never fix the blocking issues automatically as part of preflight.
9. Flag docs/governance sync only if the workflow or policy changed, not because a post failed readiness.

## Blocking Conditions

- missing required frontmatter
- invalid category, angle, domain, or locale
- invalid `publish_date` or malformed `modified_date`
- `modified_date` earlier than `publish_date`
- effectively empty body
- missing or unresolved `header_image`
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
