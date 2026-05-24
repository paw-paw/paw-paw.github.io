# Handover - SEO/AEO, blog metadata y performance

## Fuente

- `_inbox/handoff_seo_aeo_blog_performance.md`
- `_inbox/reporte_seo_aeo_portafolio_personal.md`
- `_inbox/correcciones_handoff_seo_aeo_performance.md`

---

## Resumen

El cambio consolida mejoras SEO/AEO y de performance del portfolio sin abrir arquitectura nueva.

La direccion acordada es mejorar las rutas existentes, especialmente blog posts, entidad personal, robots IA y primer viewport. No se incorporan `/about`, `/resume`, `/cv` ni `/work/[case-study]`.

---

## Decisiones del handoff

- Agregar structured data especifico `BlogPosting` para posts.
- Revisar `Person` / `ProfilePage` con `@id` estable para la entidad personal.
- Incluir GitHub en `sameAs` si corresponde como perfil publico verificable.
- Revisar `robots.txt` separando search, entrenamiento y fetch iniciado por usuario.
- Incluir `dateModified` con `modified_date` opcional y fallback tecnico a `publish_date`.
- Revisar skills editoriales para sostener SEO/AEO por blogpost.
- Tratar performance en patches separados: first viewport/LCP primero, optimizacion general de imagenes despues.

---

## No alcance explicito

- No crear `/about`.
- No crear `/resume` ni `/cv`.
- No crear `/work/[case-study]`.
- No redisenar arquitectura de informacion.
- No usar recomendaciones externas como contrato si contradicen `docs/`.

---

## Orden sugerido en el handoff

1. Documentacion y contratos.
2. Schema SEO/AEO.
3. Robots IA.
4. First viewport performance.
5. Optimizacion general de imagenes.
6. Skills editoriales.

---

## Preguntas humanas pendientes detectadas

- Confirmar si GitHub debe ser visible publicamente ademas de entrar en `sameAs`.
- Confirmar si se permite entrenamiento IA o solo search/user-triggered fetch.
- Confirmar si `modified_date` sera opcional o requerido para posts publicados.
- Confirmar si se actualizara documentacion contractual antes de tocar performance/motion.
