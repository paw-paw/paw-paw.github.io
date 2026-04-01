import { before, test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';

function runBuild() {
  execFileSync('npm', ['run', 'build'], {
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
  const roadmap = read('docs/plans/sprint-2/roadmap.md');
  const checklist = read('docs/delivery/release-checklist.md');
  const decisionLog = read('docs/governance/decision-log.md');

  assert.match(roadmap, /public release ready/);
  assert.match(roadmap, /main/);
  assert.match(checklist, /Pasos externos para publicacion efectiva/);
  assert.match(checklist, /release branch a `main`/);
  assert.match(checklist, /GitHub Pages/);
  assert.match(decisionLog, /public release ready/);
  assert.match(decisionLog, /en-first/);
  assert.match(decisionLog, /\/es\/blog\//);
  assert.match(decisionLog, /\/en\/blog\//);
  assert.match(decisionLog, /indexable/);
});

test('blog launch remains discoverable from primary surfaces and the english blog index still feels curated', { concurrency: false }, () => {
  const homeEn = read('dist/en/index.html');
  const homeEs = read('dist/es/index.html');
  const blogIndexEn = read('dist/en/blog/index.html');

  assert.match(homeEn, /href=\/en\/blog\//);
  assert.match(homeEn, /Read the blog/);
  assert.match(homeEs, /href=\/es\/blog\//);
  assert.match(homeEs, /Leer el blog/);

  assert.match(blogIndexEn, /Featured post/);
  assert.match(blogIndexEn, /All posts/);
  assert.match(blogIndexEn, /href=\/en\/blog\/ambiguous-commercial-asks\//);
});

test('spanish blog index makes the en-first launch explicit and preserves localized metadata', { concurrency: false }, () => {
  const blogIndexEs = read('dist/es/blog/index.html');

  assert.match(blogIndexEs, /El blog en español esta en preparacion/);
  assert.match(blogIndexEs, /href=\/en\/blog\//);
  assert.match(blogIndexEs, /Ver blog en ingles/);
  assert.doesNotMatch(blogIndexEs, /name=robots[^>]*content=noindex|content=noindex[^>]*name=robots/);
  assert.match(blogIndexEs, /href=https:\/\/paw-paw\.github\.io\/es\/blog\/ rel=canonical/);
  assert.match(blogIndexEs, /href=https:\/\/paw-paw\.github\.io\/en\/blog\/ rel=alternate hreflang=en/);
  assert.match(blogIndexEs, /href=https:\/\/paw-paw\.github\.io\/en\/blog\/ rel=alternate hreflang=x-default/);
  assert.ok(existsSync('dist/es/blog/category/project-delivery/index.html'));
});

test('bridge routes stay outside primary SEO while english blog detail keeps self-canonical and spanish fallback metadata', { concurrency: false }, () => {
  const bridgePages = [
    read('dist/index.html'),
    read('dist/work/index.html'),
    read('dist/experience/index.html'),
    read('dist/contact/index.html'),
  ];
  const sitemap = read('dist/sitemap-0.xml');
  const englishDetail = read('dist/en/blog/ambiguous-commercial-asks/index.html');

  for (const html of bridgePages) {
    assert.match(html, /name=robots[^>]*content=noindex|content=noindex[^>]*name=robots/);
    assert.doesNotMatch(html, /rel=canonical/);
    assert.doesNotMatch(html, /hreflang=/);
  }

  assert.doesNotMatch(sitemap, /<loc>https:\/\/paw-paw\.github\.io\/work\/<\/loc>/);
  assert.doesNotMatch(sitemap, /<loc>https:\/\/paw-paw\.github\.io\/contact\/<\/loc>/);
  assert.match(sitemap, /<loc>https:\/\/paw-paw\.github\.io\/en\/blog\/<\/loc>/);
  assert.match(sitemap, /<loc>https:\/\/paw-paw\.github\.io\/es\/blog\/<\/loc>/);

  assert.match(englishDetail, /href=https:\/\/paw-paw\.github\.io\/en\/blog\/ambiguous-commercial-asks\/ rel=canonical/);
  assert.match(englishDetail, /href=https:\/\/paw-paw\.github\.io\/es\/blog\/ rel=alternate hreflang=es/);
  assert.match(englishDetail, /href=https:\/\/paw-paw\.github\.io\/en\/blog\/ambiguous-commercial-asks\/ rel=alternate hreflang=x-default/);
  assert.match(englishDetail, /class=language-switcher-link href=\/es\/blog\//);
});
