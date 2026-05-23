# Branching Workflow

## Estado

- Tipo: `gobierno operativo`
- Rama de produccion: `main`
- Rama de trabajo: `dev`

---

## Regla base

`main` es produccion. Debe representar la superficie publica vigente del portfolio, incluyendo dominio, deployment, SEO estructural, contenido publicado y runtime.

`dev` es la rama de trabajo. Debe nacer desde `main` y conservar un commit operativo base:

```text
chore(dev): add local SDD and Codex workflow
```

Ese commit existe para habilitar trabajo local con SDD, skills, agentes, validaciones auxiliares y documentacion operativa. No debe cambiar la superficie publica del portfolio.

Cuando no haya trabajo de producto pendiente, `dev` puede diferir de `main` por una pila acotada de commits operativos SDD/Codex, validacion local o gobierno de workflow. Cada commit debe usar Conventional Commits, mantener una sola superficie y ser claramente excluible de una integracion hacia `main`, salvo decision explicita documentada.

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
- excluir el commit operativo base SDD/Codex y cualquier commit operativo local de integraciones hacia `main`
- mantener `main` alineada con `pauloctuya.com`, `public/CNAME` y el contrato vigente de deployment

Despues de integrar a `main`, actualizar `dev` sobre el nuevo `main` manteniendo encima el commit operativo base y, si siguen vigentes, los commits operativos locales necesarios. Si el historial se ensucia, recrear `dev` desde `main` y reaplicar la pila operativa vigente es preferible a acumular merges confusos.

---

## Ramas legacy

`rebuild-portfolio` y `web-release-from-rebuild` fueron ramas transitorias del rebuild. Una vez creada y validada `dev`, deben borrarse localmente y, si existen en remoto, tambien del remoto.

Antes de borrarlas, confirmar que:

- `dev` existe localmente y en `origin/dev`
- `dev` contiene el commit operativo base SDD/Codex y cualquier commit operativo local vigente esta justificado
- `main` conserva dominio, deployment y runtime productivo
- no hay diferencias de producto pendientes entre `main` y `dev`

---

## Convencion de commits

Desde esta version, el repo usa Conventional Commits como formato esperado para commits nuevos:

```text
type(scope): resumen breve en imperativo o infinitivo
```

Reglas:

- `type` describe la naturaleza principal del cambio.
- `scope` describe la superficie afectada, por ejemplo `blog`, `seo`, `sdd`, `test`, `governance`, `dev`.
- el resumen debe ser corto, especifico y revisable.
- un commit debe mantener una sola intencion y una sola superficie principal.
- no mezclar superficie publica del portfolio con superficie operativa SDD/Codex.

Ejemplos:

```text
fix(blog): prevent mobile overflow in blog index hero
docs(sdd): record blog index responsive drift resolution
chore(test): add Playwright validation tooling
docs(governance): define commit naming policy
```

### Types esperados

| Type | Uso | Destino normal |
| --- | --- | --- |
| `feat` | Nueva funcionalidad o superficie publica aprobada. | `main` si es producto publicable; `dev` mientras este en trabajo. |
| `fix` | Correccion de bug o regresion. | `main` si corrige runtime publico; `dev` si corrige tooling operativo. |
| `docs` | Documentacion contractual, publica, SDD u operativa. | Depende del scope y la superficie. |
| `chore` | Mantenimiento sin cambio directo de producto. | Normalmente `dev`; `main` solo si sostiene build/deploy publico. |
| `test` | Tests versionados, fixtures o cobertura automatizada. | `main` si verifica producto publico; `dev` si es soporte operativo SDD. |
| `refactor` | Cambio interno sin alterar comportamiento esperado. | `main` si toca runtime publico y esta validado. |
| `style` | Formato o estilo de codigo sin cambio funcional. | Misma rama que la superficie afectada. |
| `perf` | Mejora de rendimiento. | `main` si afecta runtime publico. |
| `build` | Build system, bundler, empaquetado o dependencias de build. | `main` si afecta build/deploy publico; si no, `dev`. |
| `ci` | Workflows de CI/CD. | `main` si gobierna release publico; si no, `dev`. |
| `revert` | Reversion explicita de un commit anterior. | Misma superficie que el commit revertido. |

### Scopes recomendados

Scopes de producto publico:

- `home`
- `blog`
- `work`
- `experience`
- `contact`
- `seo`
- `i18n`
- `assets`
- `ui`
- `content`
- `visual`

Scopes operativos o de gobierno:

- `sdd`
- `dev`
- `codex`
- `governance`
- `test`
- `build`
- `ci`

El scope no decide por si solo si un commit va a `main` o `dev`; manda la superficie real tocada.

### Main vs dev por tipo y scope

Pueden integrarse a `main`:

- `feat(...)` y `fix(...)` que cambian producto publico y estan validados.
- `docs(strategy)`, `docs(content)`, `docs(architecture)`, `docs(visual)`, `docs(delivery)` cuando son documentacion contractual publica o acompanian producto.
- `perf(...)`, `refactor(...)` y `style(...)` si afectan runtime publico y pasan validaciones.
- `build(...)` o `ci(...)` solo cuando afectan build, deploy o release publico y estan documentados.
- `test(...)` cuando agrega cobertura versionada necesaria para producto publico.

Deben quedarse en `dev` salvo decision explicita:

- `docs(sdd)` y cambios bajo `sdd/**`.
- `chore(dev)` y el commit operativo SDD/Codex.
- `chore(codex)` y cambios bajo `.codex/**`.
- `chore(test)` cuando solo agrega tooling auxiliar de validacion local.
- `test(sdd)` o validaciones que existan solo para sostener el workflow SDD.

Casos que requieren criterio:

- `chore(test)`: si solo instala o ajusta tooling local, se queda en `dev`; si formaliza tooling publico del repo o CI de release, puede promoverse a `main` con documentacion y validacion.
- `docs(governance)`: puede ir a `main` si gobierna el repo publico o la politica general de ramas; debe quedarse en `dev` si solo gobierna SDD/Codex local.
- `build(deps)`: si actualiza dependencias que afectan runtime o build publico, tratarlo como candidato a `main`; si solo sostiene tooling local, mantenerlo en `dev`.

### Tests y validaciones

- Tests y validaciones deben acompanar al tipo de cambio que verifican.
- No usar un commit de tests o tooling para colar cambios de producto.
- No usar un commit de producto para colar cambios SDD/Codex.
- Si un commit modifica comportamiento visible, debe registrar o referir la validacion correspondiente.
- Si `npm run lint` no existe, reportarlo; no inventar un comando sustituto.
