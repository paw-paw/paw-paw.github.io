# Docs README

Este directorio contiene las especificaciones contractuales del portfolio.

## Reglas de precedencia y uso documental

Este `README.md` es la fuente única de verdad para la estructura documental de `/docs`.

Si hay conflicto entre documentos de esta carpeta, usa esta precedencia:

1. `README.md`
2. documentos contractuales
3. `plans/roadmap.md` para secuencia, dependencias y momento de creación
4. documentos auxiliares, siempre que no contradigan niveles superiores

Entre documentos contractuales, usa esta precedencia:

1. `strategy/portfolio-strategy.md`
2. `architecture/site-architecture.md`
3. `content/content-system.md`
4. `visual/visual-system.md`
5. `architecture/i18n-spec.md`
6. `delivery/deployment.md`

Reglas adicionales:

- Los documentos auxiliares no pueden contradecir a los contractuales.
- La fase listada para cada documento es su fase inicial de creación, no su cierre definitivo.
- Hasta el inicio de la Fase 5, el sitio se considera explícitamente monoidioma.
- Si un conflicto no puede resolverse con esta precedencia, debe señalarse explícitamente. No asumir silenciosamente una nueva verdad.

---

## Organización por carpetas

La documentación se organiza por dominio de trabajo, no por fase.

- `governance/`: auditoría, decisiones y contexto operativo
- `strategy/`: estrategia y posicionamiento del portfolio
- `architecture/`: estructura del sitio e i18n
- `content/`: sistema de contenido y contenido maestro
- `visual/`: sistema visual, assets e interacción
- `delivery/`: deployment, SEO y release
- `plans/`: roadmap y planes operativos por fase

---

## Mapa documental acordado

| Documento | Tipo final | Fase inicial | Estado | Notas de alcance |
|-----------|------------|--------------|--------|------------------|
| `README.md` | Gobierno | Pre-Fase 0 | Preservar y expandir | Define precedencia, taxonomía documental, fases iniciales y reglas de mantenimiento. No contiene decisiones de producto, diseño o implementación. |
| `plans/roadmap.md` | Gobierno | Pre-Fase 0 | Preservar y actualizar | Define secuencia de trabajo, dependencias, checklist y criterio de cierre por fase. No redefine la precedencia ni sustituye contratos. |
| `governance/decision-log.md` | Auxiliar | Fase 0 | Crear y preservar | Registra decisiones tomadas, cambios de criterio y documentos afectados. No introduce verdad contractual nueva por sí solo. |
| `governance/template-audit.md` | Auxiliar | Fase 0 | Preservar | Documenta inventario del template, incoherencias, riesgos y decisiones de conservación o reescritura. No define el estado final del sitio. |
| `delivery/deployment.md` | Contractual | Fase 0 | Preservar | Define dominio, hosting, build/deploy, base path y restricciones estructurales de routing, SEO y assets. No lista copy SEO por página. |
| `strategy/portfolio-strategy.md` | Contractual | Fase 1 | Preservar | Define objetivo del portfolio, audiencia, posicionamiento, tono y CTA. No define arquitectura detallada ni copy final por sección. |
| `architecture/site-architecture.md` | Contractual | Fase 2 | Preservar | Define secciones, orden, navegación, anchors y páginas. No define reglas de copy, sistema visual ni detalle técnico de datos. |
| `content/content-system.md` | Contractual | Fase 2 | Preservar | Define propósito de secciones, reglas de copy, claims permitidos, estructura mínima de contenido y consistencia editorial. No contiene el texto final aprobado. |
| `visual/visual-system.md` | Contractual | Fase 3 | Preservar | Define dirección visual, paleta, tipografía, dark mode y reglas de componentes. No funciona como plan operativo de assets ni como spec de motion detallada. |
| `visual/asset-plan.md` | Auxiliar | Fase 3 | Preservar | Lista assets a producir, reemplazar o conseguir y su estado. No define reglas visuales de uso. |
| `content/content-master.md` | Auxiliar | Fase 4 | Preservar | Reúne el texto aprobado y la versión canónica del idioma maestro lista para implementación. No redefine reglas del sistema de contenido. |
| `architecture/i18n-spec.md` | Contractual | Fase 5 | Preservar | Define idiomas soportados, locale por defecto, política de prefijos y reglas de localización. No cambia estrategia ni estructura del sitio. |
| `delivery/seo-spec.md` | Auxiliar | Fase 6 | Preservar | Detalla títulos, descriptions, OG, canonicals y alternates. No sustituye las decisiones estructurales de deployment. |
| `delivery/release-checklist.md` | Auxiliar | Fase 6 | Preservar | Lista verificaciones operativas previas a publicación o cierre de fase. No reemplaza criterios contractuales ni estrategia. |
| `visual/interaction-spec.md` | Auxiliar | Fase 7 | Preservar | Define motion, tono de interacción e intensidad por componente. No redefine el sistema visual base ni la jerarquía de contenido. |

---

## Contenido mínimo esperado por documento

### `README.md`
Debe responder:
- ¿Qué tipos de documentos existen en `/docs`?
- ¿Qué documento manda cuando hay conflicto?
- ¿En qué fase inicial debe aparecer cada documento?
- ¿Qué reglas de mantenimiento y alineación deben cumplirse?

### `plans/roadmap.md`
Debe responder:
- ¿Qué fases existen y en qué orden se ejecutan?
- ¿Qué documentos deben nacer o cerrarse en cada fase?
- ¿Qué dependencias existen entre fases?
- ¿Qué cambios de implementación desbloquea cada fase?
- ¿Cuál es el criterio de cierre de cada fase?

### `governance/decision-log.md`
Debe responder:
- ¿Qué decisión se tomó?
- ¿Cuándo se tomó?
- ¿Por qué se tomó?
- ¿Qué documentos o áreas del proyecto afecta?
- ¿Reemplaza o ajusta alguna decisión previa?

### `governance/template-audit.md`
Debe responder:
- ¿Qué incoherencias, residuos o contratos rotos trae el template?
- ¿Qué componentes o páginas se conservan, se reescriben o se eliminan?
- ¿Qué riesgos técnicos hay en i18n, routing, contenido hardcodeado o estructura?
- ¿Qué deudas o dudas deben resolverse antes de personalizar más?

### `strategy/portfolio-strategy.md`
Debe responder:
- ¿Para qué existe el sitio?
- ¿A quién le habla primero?
- ¿Qué quiero que la persona entienda en los primeros 10 segundos?
- ¿Qué CTA principal debe empujar el sitio?
- ¿Qué tono debe comunicar?

### `architecture/site-architecture.md`
Debe responder:
- ¿Qué secciones existen?
- ¿En qué orden aparecen?
- ¿Qué páginas internas existen o no existen?
- ¿Cómo se navega el sitio?
- ¿Qué labels y anchors deben existir?

### `content/content-system.md`
Debe responder:
- ¿Qué propósito cumple cada sección?
- ¿Qué tipo de copy sí y no corresponde?
- ¿Qué claims están permitidos?
- ¿Qué estructura mínima deben seguir los case studies, si existen?
- ¿Qué vive en datos/archivos editables y qué no?
- ¿Cómo se mantiene consistencia entre hero, CTA, navegación, footer y metadata?

### `visual/visual-system.md`
Debe responder:
- ¿Cuál es la dirección visual?
- ¿Qué paleta se usa?
- ¿Qué tipografías se usan?
- ¿Cómo se comporta dark mode?
- ¿Qué reglas básicas deben seguir botones, cards, íconos y spacing?

### `visual/asset-plan.md`
Debe responder:
- ¿Qué assets hacen falta producir, reemplazar o conseguir?
- ¿Qué variantes deben existir para light/dark o contextos distintos?
- ¿Qué assets siguen siendo temporales y cuáles ya están aprobados?
- ¿Qué dependencias bloquean implementación visual o publicación?

### `content/content-master.md`
Debe responder:
- ¿Cuál es el copy final aprobado por sección en el idioma maestro?
- ¿Cuáles son los headlines, subheads y CTAs definitivos?
- ¿Qué claims, métricas y pruebas de credibilidad están aprobados?
- ¿Cuál es la versión canónica lista para pasar a implementación?

### `delivery/deployment.md`
Debe responder:
- ¿Cómo se publica en GitHub Pages?
- ¿Qué comandos o pasos de build/deploy son esperados?
- ¿Hay dominio custom o placeholder?
- ¿Existe base path?
- ¿Qué decisiones de routing, SEO o assets dependen del deployment?

### `architecture/i18n-spec.md`
Debe responder:
- ¿Qué idiomas soporta el sitio?
- ¿Cuál es el idioma por defecto?
- ¿El locale por defecto lleva prefijo o no?
- ¿Qué se traduce literal, qué se adapta y qué términos se conservan en inglés?
- ¿Quién mantiene cada idioma?

### `delivery/seo-spec.md`
Debe responder:
- ¿Qué títulos y descriptions debe tener cada página?
- ¿Qué estrategia OG se usa?
- ¿Qué canonicals deben existir?
- ¿Qué alternates por locale se necesitan, si aplica?

### `delivery/release-checklist.md`
Debe responder:
- ¿Qué validaciones mínimas deben ejecutarse antes de cerrar una fase o publicar?
- ¿Qué se debe revisar en build, preview, links, metadata y deploy?
- ¿Qué items son obligatorios y cuáles dependen del alcance de la fase?

### `visual/interaction-spec.md`
Debe responder:
- ¿Qué animaciones se mantienen, cambian o eliminan?
- ¿Qué tono de interacción debe comunicar el sitio?
- ¿Qué intensidad o complejidad de motion es aceptable por componente?
- ¿Qué límites deben respetarse para no afectar legibilidad, rendimiento o claridad?

---

## Reglas de mantenimiento

- El flujo ideal es: primero cambian docs, luego cambia implementación.
- Si implementación y docs se desalinean, la desalineación debe flaggearse.
- No tratar el código como sustituto de una spec faltante.
- No crear documentos nuevos sin una necesidad clara.
- Si hace falta un documento adicional, primero justificar por qué no cabe en uno existente.
- `plans/roadmap.md` debe mantenerse alineado con el mapa documental de este `README.md`.

---

## Estado actual

Este índice define la estructura mínima deseada para `/docs`, incluso si algunos archivos todavía no existen.
