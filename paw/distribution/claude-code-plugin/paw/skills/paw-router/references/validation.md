# Validation Notes

For repository work, run only commands that exist in the repo.

Minimum structural checks for this Claude plugin distribution candidate:

- every `skills/*/SKILL.md` has YAML frontmatter and `description`;
- every skill states status, load order, allowed work, forbidden work, and output;
- every `agents/*.md` is advisory and read-only by default;
- no `settings.json`, `.mcp.json`, secrets, absolute paths, or broad approvals;
- no `.agents/**`, `.gemini/**`, or `.antigravity/**` are created by this patch.

Plugin validation in Claude Code is manual evidence. If it is not executed, close
as `distribution-files-candidate`, not `distribution-adapter-candidate`.
