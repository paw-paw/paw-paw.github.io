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

test('english detail pages fall back to /es/blog/ when no spanish equivalent exists', { concurrency: false }, () => {
  cleanupTempSpanishPost();
  runBuild();

  const html = read('dist/en/blog/ambiguous-commercial-asks/index.html');

  assert.match(html, /<link href=https:\/\/paw-paw\.github\.io\/en\/blog\/ambiguous-commercial-asks\/ rel=canonical>/);
  assert.match(html, /<link href=https:\/\/paw-paw\.github\.io\/es\/blog\/ rel=alternate hreflang=es>/);
  assert.match(html, /<a class=language-switcher-link href=\/es\/blog\/[^>]*data-locale=es/);
  assert.ok(existsSync('dist/es/blog/index.html'));
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
locale: es
status: published
reading_time: 4 min
featured: false
header_image: ../../assets/social/home-social.png
---

Post temporal para validar la generacion de rutas detail en espanol.
`,
    'utf8',
  );

  try {
    runBuild();

    assert.ok(existsSync('dist/es/blog/temp-es-detail-alignment/index.html'));

    const spanishHtml = read('dist/es/blog/temp-es-detail-alignment/index.html');
    assert.match(spanishHtml, /<link href=https:\/\/paw-paw\.github\.io\/es\/blog\/temp-es-detail-alignment\/ rel=canonical>/);
    assert.match(spanishHtml, /<link href=https:\/\/paw-paw\.github\.io\/en\/blog\/ rel=alternate hreflang=en>/);
    assert.match(spanishHtml, /<a class=language-switcher-link href=\/en\/blog\/[^>]*data-locale=en/);

    const englishHtml = read('dist/en/blog/ambiguous-commercial-asks/index.html');
    assert.match(englishHtml, /<link href=https:\/\/paw-paw\.github\.io\/es\/blog\/ rel=alternate hreflang=es>/);
  } finally {
    cleanupTempSpanishPost();
  }
});
