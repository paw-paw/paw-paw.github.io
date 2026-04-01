---
name: blog-feature
description: >
  Marks a published `blog_post` as featured while preserving the one-featured-per-locale rule.
  Trigger: When the user wants to feature a published blog post in the portfolio blog.
license: Apache-2.0
metadata:
  author: gentleman-programming
  version: "1.0"
---

## When to Use

- Set the featured post for a locale
- Replace the current featured post with another published one
- Keep locale featured state clean without requiring a featured fallback

## Critical Patterns

- Only published posts can become featured
- Keep at most one featured published post per locale
- If another published post in the locale is already featured, unfeature it
- Zero featured posts in a locale is still valid
- Treat featuring as routine editorial state, not as a docs/governance change by default

## Workflow

1. Resolve the target post in `src/content/blog/`.
2. Confirm the target post is `published`.
   - If not, stop and report the blocker.
3. Read the target locale from frontmatter.
4. Inspect the other blog posts in `src/content/blog/` for the same locale.
5. Apply the featured mutation cleanly:
   - set the target post to `featured: true`
   - set any other `published` post in the same locale to `featured: false`
6. Do not require selecting a replacement featured post for future operations.
7. Report:
   - which post is now featured
   - which post(s), if any, were automatically unfeatured
   - that zero featured remains valid when no feature action is taken
8. Do not trigger docs/governance sync unless the workflow or policy itself changes.

## Blocking Conditions

- target file does not exist
- target post is not `published`
- metadata is malformed enough that locale or publish state cannot be trusted

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
