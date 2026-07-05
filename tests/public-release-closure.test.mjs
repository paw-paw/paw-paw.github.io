import { before, test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';

const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm';

function runBuild() {
  execFileSync(npmCommand, ['run', 'build'], {
    env: { ...process.env, ASTRO_TELEMETRY_DISABLED: '1' },
    shell: process.platform === 'win32',
    stdio: 'ignore',
  });
}

function read(path) {
  return readFileSync(path, 'utf8');
}

before(() => {
  runBuild();
});

test('release docs stay aligned on public release ready while external publication remains pending', { concurrency: false }, () => {
  const checklist = read('docs/delivery/release-checklist.md');
  const decisionLog = read('docs/governance/decision-log.md');

  assert.match(checklist, /Pasos externos para publicacion efectiva/);
  assert.match(checklist, /release branch a `main`/);
  assert.match(checklist, /GitHub Pages/);
  assert.match(decisionLog, /public release ready/);
  assert.match(decisionLog, /Blog index parity for `es`/);
  assert.match(decisionLog, /\/es\/blog\//);
  assert.match(decisionLog, /\/en\/blog\//);
  assert.match(decisionLog, /posts publicados/);
});

test('blog launch remains discoverable from primary surfaces and the english blog index still feels curated', { concurrency: false }, () => {
  const homeEn = read('dist/en/index.html');
  const homeEs = read('dist/es/index.html');
  const blogIndexEn = read('dist/en/blog/index.html');

  assert.match(homeEn, /href=\/en\/blog\//);
  assert.match(homeEn, /Read the blog/);
  assert.match(homeEs, /href=\/es\/blog\//);
  assert.match(homeEs, /Leer el blog/);

  assert.match(blogIndexEn, /Featured/);
  assert.match(blogIndexEn, /Latest Writing/);
  assert.match(blogIndexEn, /href=\/en\/blog\/a-shirt-a-license-and-a-loophole\//);
  assert.match(blogIndexEn, /A shirt, a license, and a loophole/);
  assert.match(blogIndexEn, /One-Off Tournaments Are Not Enough for Brands/);
  assert.match(blogIndexEn, /BD and partnerships/);
  assert.match(blogIndexEn, /Industry Analysis/);
  assert.match(blogIndexEn, />Gaming</);
});

test('spanish blog index mirrors published posts and preserves localized metadata', { concurrency: false }, () => {
  const blogIndexEs = read('dist/es/blog/index.html');

  assert.match(blogIndexEs, /Destacado/);
  assert.match(blogIndexEs, /Ultimos textos/);
  assert.match(blogIndexEs, /Una camiseta, una licencia y una oportunidad/);
  assert.match(blogIndexEs, /llevar los esports al centro comercial/);
  assert.match(blogIndexEs, /Analisis de Industria/);
  assert.match(blogIndexEs, />Gaming</);
  assert.doesNotMatch(blogIndexEs, /name=robots[^>]*content=noindex|content=noindex[^>]*name=robots/);
  assert.match(blogIndexEs, /href=https:\/\/pauloctuya\.com\/es\/blog\/ rel=canonical/);
  assert.match(blogIndexEs, /href=https:\/\/pauloctuya\.com\/en\/blog\/ rel=alternate hreflang=en/);
  assert.match(blogIndexEs, /href=https:\/\/pauloctuya\.com\/en\/blog\/ rel=alternate hreflang=x-default/);
  assert.ok(existsSync('dist/es/blog/category/project-delivery/index.html'));
});

test('bridge routes stay outside primary SEO while english blog detail keeps localized alternate metadata', { concurrency: false }, () => {
  const bridgePages = [
    read('dist/index.html'),
    read('dist/work/index.html'),
    read('dist/experience/index.html'),
    read('dist/contact/index.html'),
  ];
  const sitemap = read('dist/sitemap-0.xml');
  const englishDetail = read('dist/en/blog/a-shirt-a-license-and-a-loophole/index.html');

  for (const html of bridgePages) {
    assert.match(html, /name=robots[^>]*content=noindex|content=noindex[^>]*name=robots/);
    assert.doesNotMatch(html, /rel=canonical/);
    assert.doesNotMatch(html, /hreflang=/);
  }

  assert.doesNotMatch(sitemap, /<loc>https:\/\/pauloctuya\.com\/work\/<\/loc>/);
  assert.doesNotMatch(sitemap, /<loc>https:\/\/pauloctuya\.com\/contact\/<\/loc>/);
  assert.match(sitemap, /<loc>https:\/\/pauloctuya\.com\/en\/blog\/<\/loc>/);
  assert.match(sitemap, /<loc>https:\/\/pauloctuya\.com\/es\/blog\/<\/loc>/);

  assert.match(englishDetail, /href=https:\/\/pauloctuya\.com\/en\/blog\/a-shirt-a-license-and-a-loophole\/ rel=canonical/);
  assert.match(englishDetail, /href=https:\/\/pauloctuya\.com\/es\/blog\/una-camiseta-una-licencia-y-una-oportunidad\/ rel=alternate hreflang=es/);
  assert.match(englishDetail, /href=https:\/\/pauloctuya\.com\/en\/blog\/a-shirt-a-license-and-a-loophole\/ rel=alternate hreflang=x-default/);
  assert.match(englishDetail, /(?=[^>]*class=language-switcher-link)(?=[^>]*href=\/es\/blog\/)[^>]*>/);
});
