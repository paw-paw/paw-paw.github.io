# Roadmap ejecutable para personalizar `astro-multilingual-portfolio-template` con Codex

Este roadmap está pensado para ejecutar la personalización del template por fases, minimizando retrabajo y separando claramente:

- lo que se debe definir
- lo que se debe modificar
- lo que se puede definir o modificar
- los archivos involucrados
- las dependencias
- el criterio de cierre

La lógica general del orden es:

0A. bootstrap técnico y auditoría baseline
0B. saneamiento y neutralización del template
1. estrategia del portfolio
2. arquitectura de información y secciones
3. sistema visual y branding
4. contenido maestro en idioma principal
5. internacionalización y localización
6. SEO, metadata y deploy real
7. motion, polish y diferenciación premium

---

## Nota documental

El mapa documental, las categorías y la precedencia viven en `docs/README.md`.

Este roadmap solo define:

- cuándo debe nacer cada documento
- en qué fase se usa
- qué dependencias tiene
- qué cambios de implementación desbloquea

---

## Fase 0A — Bootstrap técnico y auditoría baseline

### Objetivo
Confirmar que la base técnica del template es operable y dejar auditadas las superficies que hoy pueden romper o distorsionar el roadmap.

### Debes definir
- [ ] **Documento `docs/governance/template-audit.md`**
  - [ ] Inventario de incoherencias del template
  - [ ] Bootstrap técnico mínimo y baseline de validación real
  - [ ] Estado actual de i18n y contradicción con el plan monoidioma
  - [ ] Estado real de `Projects` y otras superficies incompletas
  - [ ] Auditoría de deployment, motion, SEO y residuos técnicos
  - [ ] Lista de bugs/contratos rotos detectados
- [ ] **Documento `docs/governance/decision-log.md`**
  - [ ] decisiones abiertas
  - [ ] decisiones cerradas
  - [ ] fecha, razón y documentos afectados

### Debes validar / auditar
- [ ] Instalar dependencias y confirmar que el proyecto puede correr validaciones básicas
- [ ] Ejecutar baseline técnico
  - [ ] `npm run build`
  - [ ] documentar scripts disponibles reales
  - [ ] documentar qué validaciones faltan hoy
- [ ] Auditar i18n existente
  - [ ] `astro.config.mjs`
  - [ ] `src/pages/en/**`
  - [ ] `src/pages/de/**`
  - [ ] `src/components/ui/LanguageSwitcher.astro`
  - [ ] `src/layouts/Layout.astro`
- [ ] Auditar secciones o rutas incompletas
  - [ ] `Projects`
  - [ ] rutas `/projects`
  - [ ] assets esperados que no existen
- [ ] Auditar deployment y entorno real
  - [ ] `astro.config.mjs`
  - [ ] `public/robots.txt`
  - [ ] `netlify.toml`
  - [ ] sitemap y canonical actuales
- [ ] Auditar baseline de SEO y motion ya activos
  - [ ] metadata actual
  - [ ] hreflang
  - [ ] JSON-LD
  - [ ] AOS
  - [ ] GSAP
  - [ ] scripts en `src/scripts/`
- [ ] Auditar residuos técnicos
  - [ ] archivos fuera de lugar en `src/assets/`
  - [ ] artefactos del template que no aportan al producto final

### Puedes definir / documentar dentro de `docs/governance/template-audit.md`
- [ ] Inventario de componentes existentes
  - [ ] qué componente existe
  - [ ] qué función cumple
  - [ ] si se mantiene, renombra o elimina
- [ ] Riesgos técnicos
  - [ ] dependencias de i18n
  - [ ] secciones con contenido hardcodeado
  - [ ] riesgos de tocar routing tarde
- [ ] Baseline de consistencia actual
  - [ ] qué ya está activo aunque todavía no esté documentado
  - [ ] qué contradice el sistema documental vigente

### Archivos a tocar
- [ ] `package.json` si hace falta documentar o ajustar scripts mínimos
- [ ] `package-lock.json` si hay que instalar dependencias
- [ ] `astro.config.mjs`
- [ ] `public/robots.txt`
- [ ] `netlify.toml`
- [ ] `src/utils/me.ts`
- [ ] `src/utils/i18n.ts`
- [ ] `src/layouts/Layout.astro`
- [ ] `src/pages/en/**`
- [ ] `src/pages/de/**`
- [ ] `src/pages/impressum.astro` y/o equivalentes legales
- [ ] `src/pages/datenschutz.astro` y/o equivalentes legales
- [ ] `src/components/ui/LanguageSwitcher.astro`
- [ ] `src/components/sections/Projects.astro`
- [ ] `src/scripts/*`
- [ ] `src/assets/*`

### Dependencias
- [ ] Ninguna. Esta fase va primero.

### Criterio de cierre
- [ ] Existe un baseline técnico documentado y una validación mínima ejecutable
- [ ] Ya están identificadas las contradicciones reales entre template y roadmap
- [ ] Ya están auditados i18n, deployment, SEO, motion, residuos técnicos y superficies incompletas
- [ ] Existe una lista priorizada de correcciones obligatorias para neutralizar el template en Fase 0B

---

## Fase 0B — Saneamiento y neutralización del template

### Objetivo
Corregir las contradicciones y residuos críticos del template para dejar una base coherente, neutralizada y lista para entrar en estrategia sin arrastrar deuda obvia.

### Debes definir
- [ ] **Primera versión de `docs/delivery/deployment.md`**
  - [ ] Dominio final o estrategia temporal de dominio
  - [ ] Hosting objetivo: GitHub Pages, Vercel o Netlify
  - [ ] Si usarás path base o dominio raíz
  - [ ] Qué configuración actual de deployment sobrevive y cuál se descarta

### Debes modificar
- [ ] Unificar dominio y ownership técnico
  - [ ] `astro.config.mjs -> site`
  - [ ] `public/robots.txt -> Sitemap`
  - [ ] `src/utils/me.ts -> homepage_url`
- [ ] Limpiar identidad original del template en superficies visibles y técnicas
  - [ ] `src/utils/me.ts`
  - [ ] metadata base
  - [ ] alt text y enlaces hardcodeados
  - [ ] `README.md` del repo raíz si aplica al repositorio público
  - [ ] nombres o residuos de assets del template si generan confusión
- [ ] Hacer rollback temporal a monoidioma
  - [ ] retirar o desactivar `LanguageSwitcher`
  - [ ] decidir qué pasa con rutas `/en/` y `/de/`
  - [ ] dejar una ruta canónica única hasta Fase 5
  - [ ] desactivar hreflang o alternates que ya no apliquen temporalmente
- [ ] Neutralizar superficies rotas o incompletas detectadas en la auditoría
  - [ ] mantenerlas apagadas explícitamente
  - [ ] o corregirlas al mínimo si son necesarias para la base
- [ ] Confirmar qué hacer con páginas legales
  - [ ] mantenerlas
  - [ ] reescribirlas
  - [ ] eliminarlas y limpiar links
- [ ] Corregir o retirar residuos técnicos del template que no deban sobrevivir
  - [ ] artefactos fuera de lugar
  - [ ] configuraciones de deployment contradictorias
  - [ ] motion o SEO base que no deban seguir activos

### Puedes definir / actualizar
- [ ] Actualizar `docs/governance/template-audit.md` con decisiones de neutralización ejecutadas
- [ ] Actualizar `docs/governance/decision-log.md` con cambios de criterio y cleanup relevante
- [ ] Dejar explícito qué superficies quedan deliberadamente pospuestas para fases posteriores

### Archivos a tocar
- [ ] `astro.config.mjs`
- [ ] `public/robots.txt`
- [ ] `netlify.toml`
- [ ] `src/utils/me.ts`
- [ ] `src/utils/i18n.ts`
- [ ] `src/layouts/Layout.astro`
- [ ] `src/pages/index.astro`
- [ ] `src/pages/en/**`
- [ ] `src/pages/de/**`
- [ ] `src/pages/impressum.astro` y/o equivalentes legales
- [ ] `src/pages/datenschutz.astro` y/o equivalentes legales
- [ ] `src/components/layout/Navbar.astro`
- [ ] `src/components/ui/LanguageSwitcher.astro`
- [ ] `src/components/sections/*`
- [ ] `src/scripts/*`
- [ ] `src/assets/*`
- [ ] `README.md`

### Dependencias
- [ ] Requiere Fase 0A cerrada.

### Criterio de cierre
- [ ] Ya no quedan contradicciones críticas entre roadmap y estado real del template
- [ ] El sitio queda explícitamente monoidioma hasta Fase 5
- [ ] No queda ninguna referencia crítica al autor original en dominio, metadata base, contacto o CTAs principales
- [ ] El dominio, sitemap y ownership técnico apuntan al mismo sitio o al placeholder temporal decidido
- [ ] Ya sabes si legal pages se quedan o se van

---

## Fase 1 — Estrategia del portfolio

### Objetivo
Definir qué va a ser el portfolio antes de escribir o diseñar.

### Debes definir
- [ ] **Documento `docs/strategy/portfolio-strategy.md`**
  - [ ] objetivo principal del sitio
  - [ ] audiencia primaria
  - [ ] audiencias secundarias
  - [ ] propuesta de valor central
  - [ ] tono profesional
  - [ ] CTA principal
  - [ ] CTA secundaria
  - [ ] idioma maestro
  - [ ] posicionamiento
  - [ ] 3–5 atributos de marca
  - [ ] qué NO debe comunicar el sitio
  - [ ] qué diferencia tu portfolio de uno genérico de “developer portfolio”

### Debes decidir
- [ ] ¿Es un portfolio para empleo, clientes, networking o híbrido?
- [ ] ¿Tu narrativa principal será PM/ops, esports-business, founder-builder o híbrida?
- [ ] ¿Qué quieres que piense alguien en los primeros 10 segundos?

### Puedes definir
- [ ] Mensajes por audiencia
- [ ] Versión “bridge” entre líneas profesionales
- [ ] Hipótesis de conversión por tipo de visitante

### Archivos a tocar
- [ ] Ninguno todavía, salvo si quieres crear `/docs`

### Dependencias
- [ ] Requiere Fase 0B cerrada.

### Criterio de cierre
- [ ] Existe una tesis clara del portfolio
- [ ] Existe una audiencia prioritaria
- [ ] Existe una versión canónica de tu positioning

---

## Fase 2 — Arquitectura de información y secciones

### Objetivo
Diseñar el esqueleto del sitio.

### Debes definir
- [ ] **Documento `docs/architecture/site-architecture.md`**
  - [ ] mapa de secciones
  - [ ] orden final de la home
  - [ ] propósito de cada sección
  - [ ] anchors del navbar
  - [ ] páginas extra si existirán
- [ ] **Documento `docs/content/content-system.md`**
  - [ ] propósito de cada sección
  - [ ] reglas de copy
  - [ ] claims permitidos
  - [ ] qué entidades existen: hero, skills, case studies, timeline items, CTAs, social proof
  - [ ] qué vive en JSON
  - [ ] qué vive hardcodeado en componentes
  - [ ] qué debería migrarse a datos
  - [ ] cómo se mantiene consistencia entre hero, CTA, navegación, footer y metadata
  - [ ] si existirán case studies, cuál es su estructura contractual mínima

### Debes modificar
- [ ] Definir si se mantienen, renombran o eliminan estas piezas:
  - [ ] `Hero`
  - [ ] `Values`
  - [ ] `Skills`
  - [ ] `Projects`
  - [ ] `Timeline`
  - [ ] `Contact`
  - [ ] `FooterCTA`
- [ ] Ajustar composición de `src/pages/index.astro`
- [ ] Ajustar navegación si cambian anchors o secciones

### Puedes modificar
- [ ] Convertir `Values` en `Approach`, `Services` o `How I Work`
- [ ] Convertir `Timeline` en `Experience`
- [ ] Convertir `Projects` en `Case Studies`
- [ ] Mover de one-page a home + páginas internas
- [ ] Crear `/resume`, `/projects`, `/about`, `/services`

### Archivos a tocar
- [ ] `src/pages/index.astro`
- [ ] `src/components/layout/Navbar.astro`
- [ ] componentes de `src/components/sections/*`

### Dependencias
- [ ] Requiere Fase 1 cerrada.

### Criterio de cierre
- [ ] Existe un mapa claro del sitio
- [ ] Sabes qué secciones sobreviven
- [ ] Sabes el orden final de la home

---

## Fase 3 — Sistema visual y branding

### Objetivo
Hacer que deje de verse como template.

### Debes definir
- [ ] **Documento `docs/visual/visual-system.md`**
  - [ ] dirección visual
  - [ ] paleta principal
  - [ ] paleta dark mode
  - [ ] tipografías
  - [ ] reglas de uso de color
  - [ ] estilo de botones/cards/chips
  - [ ] iconografía
- [ ] **Documento `docs/visual/asset-plan.md`**
  - [ ] lista de assets a producir o buscar
  - [ ] logo light
  - [ ] logo dark
  - [ ] favicon
  - [ ] foto principal
  - [ ] imágenes de proyectos/casos

### Debes modificar
- [ ] Reemplazar assets en `src/assets/`
- [ ] Redefinir colores y tipografías en `tailwind.config.mjs`
- [ ] Decidir si dark mode se mantiene, se simplifica o se vuelve central
- [ ] Ajustar navbar/logo para light/dark

### Puedes modificar
- [ ] Rehacer el lenguaje visual completo
- [ ] Cambiar densidad y spacing
- [ ] Cambiar forma de botones y cards
- [ ] Reducir o reforzar contraste según tono de marca

### Archivos a tocar
- [ ] `src/assets/*`
- [ ] `tailwind.config.mjs`
- [ ] `src/components/layout/Navbar.astro`
- [ ] `src/styles/global.css`
- [ ] componentes UI en `src/components/ui/*`

### Dependencias
- [ ] Requiere Fase 2 cerrada.

### Criterio de cierre
- [ ] Ya existe sistema visual aprobado
- [ ] Ya no quedan logos/fotos/iconos del template original
- [ ] El sitio se reconoce como tuyo incluso sin leer el texto

---

## Fase 4 — Contenido maestro en idioma principal

### Objetivo
Construir la versión canónica del portfolio.

### Debes definir
- [ ] **Documento `docs/content/content-master.md`**
  - [ ] copy final de cada sección
  - [ ] headlines
  - [ ] subheads
  - [ ] CTAs
  - [ ] claims permitidos
  - [ ] métricas y social proof aprobados
  - [ ] si hay case studies, copy final de cada caso aprobado para implementación

### Debes modificar
- [ ] Reescribir todo el contenido del idioma maestro
  - [ ] `site.title`
  - [ ] `site.description`
  - [ ] `nav.*`
  - [ ] `hero.*`
  - [ ] `values.*`
  - [ ] `skills.*`
  - [ ] `projects.*`
  - [ ] `timeline.*`
  - [ ] `contact.*`
  - [ ] `footer*`
- [ ] Corregir contratos rotos de traducción
- [ ] Revisar contenido hardcodeado dentro de componentes

### Puedes modificar
- [ ] Migrar datos hardcodeados a JSON o TS data files
- [ ] Redefinir por completo taxonomía de “Skills”
- [ ] Volver “Projects” una sección de casos serios
- [ ] Reemplazar “Timeline” por narrativa de experiencia/logros

### Archivos a tocar
- [ ] `src/i18n/*.json`
- [ ] `src/components/sections/Skills.astro`
- [ ] `src/components/sections/Projects.astro`
- [ ] `src/components/sections/Contact.astro`
- [ ] `src/layouts/Layout.astro`

### Dependencias
- [ ] Requiere Fase 3 cerrada.

### Criterio de cierre
- [ ] Existe una versión completa en un idioma
- [ ] No aparecen keys crudas en UI
- [ ] Todo el contenido importante está alineado con la estrategia

---

## Fase 5 — Internacionalización y localización

### Objetivo
Agregar idiomas sin romper routing ni duplicar caos.

### Debes definir
- [ ] **Documento `docs/architecture/i18n-spec.md`**
  - [ ] idiomas soportados
  - [ ] idioma por defecto
  - [ ] si el default lleva prefijo o no
  - [ ] política de traducción literal vs adaptación
  - [ ] ownership de cada idioma
  - [ ] qué se traduce literal
  - [ ] qué se adapta por mercado
  - [ ] qué términos se dejan en inglés

### Debes modificar
- [ ] Configurar idiomas reales en `astro.config.mjs`
- [ ] Crear/ajustar archivos en `src/i18n/`
- [ ] Ajustar `LanguageSwitcher`
- [ ] Alinear estructura de `src/pages/` con la configuración i18n
- [ ] Revisar enlaces localizados

### Puedes modificar
- [ ] Crear contenido distinto por idioma y no solo traducido
- [ ] Priorizar proyectos distintos por mercado
- [ ] Añadir portugués si vas a trabajar Brasil

### Archivos a tocar
- [ ] `astro.config.mjs`
- [ ] `src/i18n/*.json`
- [ ] `src/utils/i18n.ts`
- [ ] `src/components/ui/LanguageSwitcher.astro`
- [ ] `src/pages/**`

### Dependencias
- [ ] Requiere Fase 4 cerrada.

### Criterio de cierre
- [ ] Los locales reales están definidos
- [ ] Rutas y carpetas coinciden con configuración
- [ ] No hay gaps de traducción importantes
- [ ] Default locale funciona como fue especificado

---

## Fase 6 — SEO, metadata y deploy real

### Objetivo
Dejar el sitio listo para publicar sin deuda básica.

### Debes definir
- [ ] **Documento `docs/delivery/seo-spec.md`**
  - [ ] títulos por página
  - [ ] descriptions por página
  - [ ] estrategia OG
  - [ ] canonical policy
  - [ ] locale alternates
- [ ] **Documento `docs/delivery/release-checklist.md`**
  - [ ] build
  - [ ] preview
  - [ ] links
  - [ ] metadata
  - [ ] deploy

### Debes modificar
- [ ] Cerrar versión final de `docs/delivery/deployment.md`
  - [ ] dominio definitivo
  - [ ] hosting final
  - [ ] base path final si aplica
  - [ ] dependencias reales entre deploy, routing, assets y SEO
- [ ] Revisar metadata por defecto en `Layout.astro`
- [ ] Revisar `site` definitivo en `astro.config.mjs`
- [ ] Revisar `robots.txt`
- [ ] Verificar sitemap
- [ ] Probar deploy final

### Puedes modificar
- [ ] Crear imágenes OG propias
- [ ] Añadir metadata por página interna
- [ ] Mejorar previews por idioma

### Archivos a tocar
- [ ] `src/layouts/Layout.astro`
- [ ] `astro.config.mjs`
- [ ] `public/robots.txt`
- [ ] assets de OG si los creas

### Dependencias
- [ ] Requiere Fase 5 cerrada si habrá multiidioma.
- [ ] Si solo habrá un idioma, puede arrancar al final de Fase 4.

### Criterio de cierre
- [ ] Metadata consistente
- [ ] Sitemap y canonical correctos
- [ ] Deploy funcionando en dominio real

---

## Fase 7 — Motion, polish y diferenciación premium

### Objetivo
Pasar de “sitio correcto” a “sitio memorable”.

### Debes definir
- [ ] **Documento `docs/visual/interaction-spec.md`**
  - [ ] qué animaciones se mantienen
  - [ ] qué animaciones se eliminan
  - [ ] tono de interacción
  - [ ] intensidad por componente

### Debes modificar
- [ ] Revisar motion actual
- [ ] Ajustar CTA hierarchy
- [ ] Pulir responsive
- [ ] Mejorar legibilidad y densidad
- [ ] Si cambian criterios de conversión, actualizar `docs/strategy/portfolio-strategy.md` y `docs/content/content-system.md`

### Puedes modificar
- [ ] Añadir testimonios
- [ ] Añadir logos de clientes
- [ ] Añadir featured wins
- [ ] Añadir speaking / press / resume page / services / FAQ
- [ ] Rehacer completamente animaciones

### Archivos a tocar
- [ ] scripts/animaciones si decides intervenirlos
- [ ] componentes UI y de secciones
- [ ] posibles nuevas páginas en `src/pages/`

### Dependencias
- [ ] Requiere Fase 6 cerrada o casi cerrada.

### Criterio de cierre
- [ ] El sitio ya no se siente “template con tus datos”
- [ ] El CTA principal es obvio
- [ ] Hay evidencia y personalidad suficientes

---

# Orden operativo recomendado para Codex

## Sprint 1
- [ ] Fase 0A completa
- [ ] Fase 0B completa
- [ ] Fase 1 completa
- [ ] Fase 2 completa

## Sprint 2
- [ ] Fase 3 completa
- [ ] Fase 4 en idioma maestro

## Sprint 3
- [ ] Fase 5
- [ ] Fase 6

## Sprint 4
- [ ] Fase 7
- [ ] extras premium

---

# Regla de oro para ejecutar esto con Codex

- [ ] **No pedirle a Codex que “customice el template” de una sola vez**
- [ ] **Sí pedirle tareas por fase, con contrato, archivos, criterio de cierre y límites**
- [ ] **Primero specs, después implementación**
- [ ] **Primero idioma maestro, después localización**
- [ ] **Primero estructura, después polish**
- [ ] **Los documentos auxiliares no contradicen a los contractuales**
- [ ] **La fase listada para cada documento es su fase inicial, no su cierre definitivo**
