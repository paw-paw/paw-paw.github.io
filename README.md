# Portfolio Website

This repository contains an Astro-based portfolio site in active customization.

Current status:

- temporary deployment target: `GitHub Pages` user site
- canonical URL: `https://pauloctuya.com/`
- current documentation system lives in `docs/`
- the site is intentionally mono-language until `Fase 5`

## Development

Requirements:

- `Node.js`
- `npm`

Commands:

```bash
npm install
npm run dev
npm run build
```

## Documentation

Start here:

- `docs/README.md`
- `docs/governance/branching-workflow.md`
- `sdd/core/README.md`
- `sdd/orchestration/skill-routing.md`

Governance and audit:

- `docs/governance/template-audit.md`
- `docs/governance/decision-log.md`
- `docs/governance/branching-workflow.md`

Deployment contract:

- `docs/delivery/deployment.md`

## Notes

- This repository is still under structural cleanup and documentation-first customization.
- `main` is the production branch.
- `dev` is the working branch and should differ from `main` by one operational SDD/Codex commit when no product work is pending.
