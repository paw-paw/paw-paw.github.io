import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { mkdirSync } from 'node:fs';

const tempSpanishPostPath = 'src/content/blog/temp-es-detail-alignment.md';

function runBuild() {
  execFileSync('npm', ['run', 'build'], {
    stdio: 'ignore',
  });
}

function read(path) {
  return readFileSync(path, 'utf8');
}

function cleanupTempSpanishPost() {
  rmSync(tempSpanishPostPath, { force: true });
}

test('english detail pages link to localized detail when i18n_key equivalent exists', { concurrency: false }, () => {
  cleanupTempSpanishPost();
  runBuild();

  const html = read('dist/en/blog/a-shirt-a-license-and-a-loophole/index.html');

  assert.match(html, /<link href=https:\/\/pauloctuya\.com\/en\/blog\/a-shirt-a-license-and-a-loophole\/ rel=canonical>/);
  assert.match(html, /<link href=https:\/\/pauloctuya\.com\/es\/blog\/una-camiseta-una-licencia-y-una-oportunidad\/ rel=alternate hreflang=es>/);
  assert.match(html, /<a (?=[^>]*class=language-switcher-link)(?=[^>]*href=\/es\/blog\/una-camiseta-una-licencia-y-una-oportunidad\/)(?=[^>]*data-locale=es)[^>]*>/);
});

test('spanish detail pages build when spanish posts exist and keep fallback symmetry', { concurrency: false }, () => {
  mkdirSync('src/content/blog', { recursive: true });
  writeFileSync(
    tempSpanishPostPath,
    `---
title: Como convierto pedidos comerciales ambiguos en alcances ejecutables
excerpt: Version temporal de prueba para verificar que el detail del blog en espanol se genere correctamente cuando exista contenido publicado.
publish_date: 2026-03-13
category: project-delivery
angle: delivery-framework
domain: gaming
locale: es
status: published
reading_time: 4 min
featured: false
header_image: ../../assets/social/home-social.png
---

Post temporal para validar la generacion de rutas detail en espanol.

## Primera seccion

Texto temporal para sostener la primera seccion.

> Esta cita temporal permite validar el nuevo contrato editorial del detail.

## Segunda seccion

Texto temporal para sostener la segunda seccion.

## Tercera seccion

Texto temporal para sostener la tercera seccion.
`,
    'utf8',
  );

  try {
    runBuild();

    assert.ok(existsSync('dist/es/blog/temp-es-detail-alignment/index.html'));

    const spanishHtml = read('dist/es/blog/temp-es-detail-alignment/index.html');
    assert.match(spanishHtml, /<link href=https:\/\/pauloctuya\.com\/es\/blog\/temp-es-detail-alignment\/ rel=canonical>/);
    assert.match(spanishHtml, /<link href=https:\/\/pauloctuya\.com\/en\/blog\/ rel=alternate hreflang=en>/);
    assert.match(spanishHtml, /<a (?=[^>]*class=language-switcher-link)(?=[^>]*href=\/en\/blog\/)(?=[^>]*data-locale=en)[^>]*>/);
    assert.match(spanishHtml, /Framework de Trabajo/);
    assert.match(spanishHtml, /Gaming/);
    assert.doesNotMatch(spanishHtml, /delivery-framework/);

    const englishHtml = read('dist/en/blog/one-off-tourneys/index.html');
    assert.match(englishHtml, /<link href=https:\/\/pauloctuya\.com\/es\/blog\/por-que-los-torneos-one-off-no-alcanzan-para-las-marcas\/ rel=alternate hreflang=es>/);
    assert.match(englishHtml, /<a (?=[^>]*class=language-switcher-link)(?=[^>]*href=\/es\/blog\/por-que-los-torneos-one-off-no-alcanzan-para-las-marcas\/)(?=[^>]*data-locale=es)[^>]*>/);
  } finally {
    cleanupTempSpanishPost();
  }
});
