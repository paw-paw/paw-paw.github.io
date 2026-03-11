# AGENTS.md

## 1) Propósito de esta carpeta

`/docs` contiene especificaciones contractuales del portfolio.

Su función es definir decisiones de producto, contenido, estructura, visualidad y deployment antes o junto con la implementación.

---

## 2) Regla principal

Si implementación y documentación no coinciden, la documentación manda hasta que se actualice explícitamente.

No uses una implementación existente como excusa para asumir que la spec cambió.

---

## 3) Documentos contractuales mínimos esperados

Esta carpeta debería contener, como mínimo:

- `README.md`
- `strategy/portfolio-strategy.md`
- `architecture/site-architecture.md`
- `architecture/i18n-spec.md`
- `content/content-system.md`
- `visual/visual-system.md`
- `delivery/deployment.md`

Si alguno falta y es necesario para una tarea:
- señálalo en el reporte final
- no inventes una nueva verdad implícita
- no crees specs grandes por iniciativa propia salvo que la tarea lo pida explícitamente

Organización esperada de `/docs`:

- `governance/`: auditoría, decisiones y contexto operativo
- `strategy/`: estrategia y posicionamiento
- `architecture/`: estructura del sitio e i18n
- `content/`: sistema de contenido y contenido maestro
- `visual/`: sistema visual, assets e interacción
- `delivery/`: deployment, SEO y release
- `plans/`: roadmap y planes por fase

---

## 4) Reglas de escritura

- Escribe de forma seca, concreta y operativa.
- Evita lenguaje aspiracional o ambiguo.
- Cada documento debe tener un propósito claro.
- Si una decisión no está tomada, márcala como abierta.
- No dupliques contenido ya resuelto en otro documento.
- Si un documento depende de otro, referencia el archivo correcto.

---

## 5) Qué no hacer

- No convertir `docs/` en una wiki inflada.
- No crear documentos redundantes para temas pequeños.
- No repartir una sola decisión en varios archivos si eso vuelve difusa la fuente de verdad.
- No esconder decisiones de producto únicamente en código.

---

## 6) Actualización de specs

Actualiza o señala actualización pendiente cuando cambie cualquiera de estas áreas:

- objetivo del portfolio
- audiencia o posicionamiento
- estructura del sitio
- propósito de secciones
- reglas de contenido
- sistema visual
- idiomas soportados
- deployment o dominio
- SEO estructural

---

## 7) Relación con el root AGENTS

Este archivo refina las reglas del `AGENTS.md` raíz para trabajo dentro de `/docs`.

Si hay conflicto:
- la precedencia documental la define `docs/README.md`
- las reglas operativas generales siguen viniendo del `AGENTS.md` raíz
