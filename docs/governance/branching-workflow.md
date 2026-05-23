# Branching Workflow

## Estado

- Tipo: `gobierno operativo`
- Rama de produccion: `main`
- Rama de trabajo: `dev`

---

## Regla base

`main` es produccion. Debe representar la superficie publica vigente del portfolio, incluyendo dominio, deployment, SEO estructural, contenido publicado y runtime.

`dev` es la rama de trabajo. Debe nacer desde `main` y, cuando no haya trabajo de producto pendiente, diferir de `main` solo por un commit operativo:

```text
chore(dev): add local SDD and Codex workflow
```

Ese commit existe para habilitar trabajo local con SDD, skills, agentes, validaciones auxiliares y documentacion operativa. No debe cambiar la superficie publica del portfolio.

---

## Superficies separadas

Los commits deben mantener una sola intencion revisable.

Nunca mezclar en el mismo commit:

- superficie operativa SDD/Codex
- superficie publica del portfolio

Superficie operativa SDD/Codex:

- `.codex/**`
- `sdd/**`
- gobierno operativo de ramas, skills y agentes
- validaciones que existen para sostener el workflow SDD
- reglas de versionado de `decision.log`

Superficie publica del portfolio:

- `src/**`
- `public/**`
- `astro.config.mjs`
- `docs/delivery/deployment.md`
- `docs/strategy/**`
- `docs/content/**`
- `docs/architecture/**`
- `docs/visual/**`
- SEO, i18n, rutas, metadata, copy visible, assets y runtime

Si un cambio de producto necesita ajustar documentacion contractual, esos cambios pueden ir juntos en un commit de producto. Lo que no debe mezclarse es producto publico con infraestructura SDD/Codex.

---

## Integracion hacia produccion

No mergear `dev` completo hacia `main`.

Para publicar cambios:

- llevar a `main` solo commits de producto o documentacion publica mediante cherry-pick, PR selectivo o una rama de release limpia
- excluir el commit operativo SDD/Codex de cualquier integracion hacia `main`
- mantener `main` alineada con `pauloctuya.com`, `public/CNAME` y el contrato vigente de deployment

Despues de integrar a `main`, actualizar `dev` sobre el nuevo `main` manteniendo encima el commit operativo unico. Si el historial se ensucia, recrear `dev` desde `main` y reaplicar el commit operativo es preferible a acumular merges confusos.

---

## Ramas legacy

`rebuild-portfolio` y `web-release-from-rebuild` fueron ramas transitorias del rebuild. Una vez creada y validada `dev`, deben borrarse localmente y, si existen en remoto, tambien del remoto.

Antes de borrarlas, confirmar que:

- `dev` existe localmente y en `origin/dev`
- `dev` contiene el commit operativo SDD/Codex
- `main` conserva dominio, deployment y runtime productivo
- no hay diferencias de producto pendientes entre `main` y `dev`

---

## Guia breve de commits

- Usar mensajes con intencion clara, por ejemplo `feat(blog): ...`, `docs(strategy): ...`, `fix(seo): ...`, `chore(dev): ...`.
- Un commit de producto debe incluir la documentacion contractual necesaria cuando cambia comportamiento visible.
- Un commit SDD/Codex no debe tocar runtime publico.
- Un commit de dominio, deployment o SEO estructural debe estar documentado y validado antes de llegar a `main`.
- Tests y validaciones deben acompañar al tipo de cambio que verifican; no deben usarse para colar cambios de otra superficie.
