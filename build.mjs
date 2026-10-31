// Builds the portfolio into ./dist from content.json + ./static.
// No dependencies: run with `node build.mjs`.
import { readFileSync, writeFileSync, mkdirSync, cpSync, rmSync } from 'node:fs';

const c = JSON.parse(readFileSync('content.json', 'utf8'));
const esc = (s = '') =>
  String(s).replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[ch]);

const { site, profile: p, links: l } = c;
const today = new Date().toISOString().slice(0, 10);
const year = new Date().getFullYear();

const icon = {
  mail: '<path d="M3 6h18v12H3z"/><path d="m3 7 9 6 9-6"/>',
  phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
  linkedin: '<path d="M4 9h4v11H4zM6 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM10 9h4v1.5c.8-1.2 2-1.8 3.5-1.8 3 0 3.5 2 3.5 4.6V20h-4v-6c0-1.4-.3-2.3-1.6-2.3-1.4 0-1.9 1-1.9 2.4V20h-4z"/>',
  github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>',
  doc: '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/>',
  link: '<path d="M10 14a4 4 0 0 0 5.700 0l3-3a4 4 0 0 0-5.700-5.700l-1 1M14 10a4 4 0 0 0-5.700 0l-3 3a4 4 0 0 0 5.700 5.700l1-1"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.900 4.900l1.400 1.400M17.700 17.700l1.400 1.400M2 12h2M20 12h2M4.900 19.100l1.400-1.400M17.700 6.300l1.400-1.400"/>',
  moon: '<path d="M20 14.500A8 8 0 0 1 9.500 4 8 8 0 1 0 20 14.500z"/>',
  pin: '<path d="M12 21s7-6.200 7-11a7 7 0 1 0-14 0c0 4.800 7 11 7 11z"/><circle cx="12" cy="10" r="2.500"/>',
};
const svg = (name) =>
  `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${icon[name]}</svg>`;

const ext = (url) => (/^https?:/.test(url) ? ' target="_blank" rel="noopener noreferrer"' : '');

const nav = [
  ['about', 'About'],
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['skills', 'Skills'],
  ['certifications', 'Certifications'],
  ['education', 'Education'],
  ['contact', 'Contact'],
];

const highlights = c.highlights
  .map((h) => `<li><strong>${esc(h.value)}</strong><span>${esc(h.label)}</span></li>`)
  .join('');

const experience = c.experience
  .map(
    (e) => `
      <article class="job">
        <div class="job-head">
          <h3>${esc(e.role)}</h3>
          <p class="period">${esc(e.period)}</p>
        </div>
        <p class="company">${
          e.companyUrl ? `<a href="${esc(e.companyUrl)}"${ext(e.companyUrl)}>${esc(e.company)}</a>` : esc(e.company)
        }${e.location ? ` <span class="sep">·</span> ${esc(e.location)}` : ''}</p>
        <ul>${e.bullets.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>
      </article>`,
  )
  .join('');

const projects = c.projects
  .map(
    (pr) => `
      <article class="card project">
        <h3>${esc(pr.title)}</h3>
        <p>${esc(pr.description)}</p>
        <ul class="tags">${pr.tags.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
        <a class="more" href="${esc(pr.url)}"${ext(pr.url)}>View on GitHub <span aria-hidden="true">→</span></a>
      </article>`,
  )
  .join('');

const skills = c.skills
  .map(
    (g) => `
      <div class="skill-group">
        <h3>${esc(g.group)}</h3>
        <ul class="tags">${g.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
      </div>`,
  )
  .join('');

const certs = c.certifications
  .map((ce) => {
    const meta = [ce.issuer, ce.year].filter(Boolean).map(esc).join(' · ');
    const inner = `<h3>${esc(ce.name)}</h3>${meta ? `<p>${meta}</p>` : ''}`;
    return ce.url
      ? `<li class="card cert"><a href="${esc(ce.url)}"${ext(ce.url)}>${inner}<span class="verify">Verify ${svg('link')}</span></a></li>`
      : `<li class="card cert">${inner}</li>`;
  })
  .join('');

const education = c.education
  .map(
    (e) => `
      <li>
        <h3>${esc(e.school)}</h3>
        <p>${esc(e.program)}${e.period ? ` <span class="sep">·</span> <span class="period">${esc(e.period)}</span>` : ''}</p>
      </li>`,
  )
  .join('');

const languages = c.languages.map((x) => `<li><strong>${esc(x.name)}</strong> ${esc(x.level)}</li>`).join('');

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: p.name,
  jobTitle: 'Product Specialist',
  worksFor: { '@type': 'Organization', name: 'World Wide Technology' },
  address: { '@type': 'PostalAddress', addressLocality: 'San Jose', addressCountry: 'CR' },
  url: site.url,
  image: `${site.url}/${p.photo}`,
  sameAs: [l.linkedin, l.github],
};

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(site.title)}</title>
  <meta name="description" content="${esc(site.description)}">
  <meta name="author" content="${esc(p.name)}">
  <link rel="canonical" href="${esc(site.url)}/">
  <link rel="icon" href="favicon.svg" type="image/svg+xml">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${esc(site.title)}">
  <meta property="og:description" content="${esc(site.description)}">
  <meta property="og:url" content="${esc(site.url)}/">
  <meta property="og:image" content="${esc(site.url)}/${esc(p.photo)}">
  <meta name="twitter:card" content="summary">
  <meta name="color-scheme" content="light dark">
  <script>try{var t=localStorage.getItem('theme');if(t)document.documentElement.dataset.theme=t}catch(e){}</script>
  <link rel="stylesheet" href="style.css">
  <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
</head>
<body>
  <a class="skip" href="#main">Skip to content</a>
  <header class="topbar">
    <div class="wrap bar">
      <a class="brand" href="#top">${esc(p.name)}</a>
      <nav aria-label="Sections"><ul>${nav.map(([id, label]) => `<li><a href="#${id}">${label}</a></li>`).join('')}</ul></nav>
      <button class="theme" type="button" aria-label="Toggle light and dark theme">
        <span class="to-dark">${svg('moon')}</span><span class="to-light">${svg('sun')}</span>
      </button>
    </div>
  </header>

  <main id="main">
    <section class="hero" id="top">
      <div class="wrap hero-grid">
        <div class="hero-text">
          <p class="eyebrow">${svg('pin')} ${esc(p.location)}</p>
          <h1>${esc(p.name)}</h1>
          <p class="headline">${esc(p.headline)}</p>
          <p class="lead">${esc(p.tagline)}</p>
          <div class="actions">
            <a class="btn primary" href="${esc(l.resume)}"${ext(l.resume)}>${svg('doc')} Resume</a>
            <a class="btn" href="${esc(l.linkedin)}"${ext(l.linkedin)}>${svg('linkedin')} LinkedIn</a>
            <a class="btn" href="${esc(l.github)}"${ext(l.github)}>${svg('github')} GitHub</a>
            <a class="btn" href="mailto:${esc(l.email)}">${svg('mail')} Email</a>
          </div>
        </div>
        <img class="portrait" src="${esc(p.photo)}" alt="${esc(p.photoAlt)}" width="360" height="360" fetchpriority="high">
      </div>
      <div class="wrap"><ul class="highlights">${highlights}</ul></div>
    </section>

    <section id="about"><div class="wrap narrow">
      <h2>About</h2>
      ${p.about.map((t) => `<p>${esc(t)}</p>`).join('\n      ')}
    </div></section>

    <section id="experience" class="alt"><div class="wrap narrow">
      <h2>Experience</h2>
      <div class="timeline">${experience}</div>
    </div></section>

    <section id="projects"><div class="wrap">
      <h2>Projects</h2>
      <div class="grid three">${projects}</div>
    </div></section>

    <section id="skills" class="alt"><div class="wrap">
      <h2>Skills</h2>
      <div class="grid two">${skills}</div>
    </div></section>

    <section id="certifications"><div class="wrap">
      <h2>Certifications</h2>
      <ul class="grid three certs">${certs}</ul>
    </div></section>

    <section id="education" class="alt"><div class="wrap narrow">
      <h2>Education</h2>
      <ul class="edu">${education}</ul>
      <h3 class="sub">Languages</h3>
      <ul class="langs">${languages}</ul>
    </div></section>

    <section id="contact"><div class="wrap narrow center">
      <h2>Get in touch</h2>
      <p>I'm always happy to talk about cloud, Linux, and customer onboarding.</p>
      <ul class="contact">
        <li>${svg('mail')} <a href="mailto:${esc(l.email)}">${esc(l.email)}</a></li>
        <li>${svg('phone')} <a href="tel:${esc(l.phone.replace(/[^+\d]/g, ''))}">${esc(l.phone)}</a></li>
        <li>${svg('linkedin')} <a href="${esc(l.linkedin)}"${ext(l.linkedin)}>linkedin.com/in/afc2806</a></li>
        <li>${svg('github')} <a href="${esc(l.github)}"${ext(l.github)}>github.com/ODR3N</a></li>
      </ul>
    </div></section>
  </main>

  <footer>
    <div class="wrap">
      <p>© ${year} ${esc(p.name)} · Updated <time datetime="${today}">${today}</time></p>
    </div>
  </footer>

  <script>
    document.querySelector('.theme').addEventListener('click', function () {
      var root = document.documentElement;
      var dark = root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
      var next = dark ? 'light' : 'dark';
      root.dataset.theme = next;
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  </script>
</body>
</html>
`;

rmSync('dist', { recursive: true, force: true });
mkdirSync('dist', { recursive: true });
cpSync('static', 'dist', { recursive: true });
writeFileSync('dist/index.html', html);
writeFileSync(
  'dist/sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${site.url}/</loc><lastmod>${today}</lastmod></url></urlset>\n`,
);
console.log('Built dist/ (' + Math.round(html.length / 1024) + ' KB HTML)');
