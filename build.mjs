// Builds the portfolio into ./dist from content.json (English) + content.es.json (Spanish) + ./static.
// No dependencies: run with `node build.mjs`.
import { readFileSync, writeFileSync, mkdirSync, cpSync, rmSync } from 'node:fs';

const en = JSON.parse(readFileSync('content.json', 'utf8'));
const esOverrides = JSON.parse(readFileSync('content.es.json', 'utf8'));

// Spanish = English with Spanish text laid over it. Objects merge by key, lists merge by position.
const merge = (base, over) => {
  if (over === undefined) return base;
  if (Array.isArray(base) && Array.isArray(over)) return base.map((b, i) => (i < over.length ? merge(b, over[i]) : b));
  if (base && typeof base === 'object' && over && typeof over === 'object' && !Array.isArray(over)) {
    const out = { ...base };
    for (const k of Object.keys(over)) if (!k.startsWith('_')) out[k] = merge(base[k], over[k]);
    return out;
  }
  return over;
};
const es = merge(en, esOverrides);

const esc = (s = '') =>
  String(s).replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[ch]);
const today = new Date().toISOString().slice(0, 10);
const year = new Date().getFullYear();

const icon = {
  mail: '<path d="M3 6h18v12H3z"/><path d="m3 7 9 6 9-6"/>',
  phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
  linkedin: '<path d="M4 9h4v11H4zM6 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM10 9h4v1.5c.8-1.2 2-1.8 3.5-1.8 3 0 3.5 2 3.5 4.6V20h-4v-6c0-1.4-.3-2.3-1.6-2.3-1.4 0-1.9 1-1.9 2.4V20h-4z"/>',
  github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>',
  doc: '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/>',
  link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  moon: '<path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z"/>',
  award: '<circle cx="12" cy="9" r="6"/><path d="m8.5 13.9-1.5 7.1 5-3 5 3-1.5-7.1"/>',
  pin: '<path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z"/>',
};
const svg = (name) =>
  `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${icon[name]}</svg>`;
const ext = (url) => (/^https?:|\.pdf$/.test(url) ? ' target="_blank" rel="noopener noreferrer"' : '');
const initials = (name) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('');

function render(c, { lang, root, pageUrl, altUrl, altLang }) {
  const { site, profile: p, links: l, ui } = c;
  const a = (path) => (/^(https?:|mailto:|#)/.test(path) ? path : root + path); // asset path from this page

  const navIds = ['experience', 'projects', 'recommendations', 'skills', 'certifications', 'contact'];

  const highlights = c.highlights
    .map((h) => `<li><strong>${esc(h.value)}</strong><span>${esc(h.label)}</span></li>`)
    .join('');

  const experience = c.experience
    .map(
      (e) => `
      <article class="job">
        <div class="job-top">
          ${
            e.logos?.length
              ? `<div class="logos">${e.logos
                  .map((lg) => `<img src="${esc(a(lg.src))}" alt="${esc(lg.alt)}" width="48" height="48" loading="lazy">`)
                  .join('')}</div>`
              : ''
          }
          <div class="job-head">
            <h3>${esc(e.role)}</h3>
            <p class="period">${esc(e.period)}</p>
          </div>
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
        ${
          pr.image
            ? `<img class="cover" src="${esc(a(pr.image))}" alt="${esc(pr.imageAlt || '')}" width="960" height="540" loading="lazy">`
            : ''
        }
        <h3><a class="stretched" href="${esc(pr.url)}"${ext(pr.url)}>${esc(pr.title)}</a></h3>
        <p>${esc(pr.description)}</p>
        <ul class="tags">${pr.tags.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
        <span class="more" aria-hidden="true">${esc(ui.viewRepo)} →</span>
      </article>`,
    )
    .join('');

  const recommendations = (c.recommendations || [])
    .map(
      (r) => `
      <figure class="card rec">
        <blockquote><p>${esc(r.quote)}</p></blockquote>
        <figcaption>
          <span class="avatar" aria-hidden="true">${esc(initials(r.name))}</span>
          <span><strong>${esc(r.name)}</strong><span class="rec-meta">${esc(r.title)}</span><span class="rec-meta">${esc(
            r.relation,
          )} · ${esc(r.date)}</span></span>
        </figcaption>
      </figure>`,
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
      const badge = ce.badge
        ? `<img class="badge" src="${esc(a(ce.badge))}" alt="${esc(ce.name)} ${esc(ui.badge)}" width="72" height="72" loading="lazy">`
        : ce.logo
        ? `<img class="badge tile" src="${esc(a(ce.logo))}" alt="${esc(ui.logo)} ${esc(ce.issuer || ce.name)}" width="72" height="72" loading="lazy">`
        : `<span class="badge placeholder" aria-hidden="true">${svg('award')}</span>`;
      const name = esc(ce.name).replace(/\(([^)]+)\)/g, '<span class="nowrap">($1)</span>');
      const text = `<div><h3>${name}</h3>${meta ? `<p>${meta}</p>` : ''}${
        ce.url ? `<span class="verify">${esc(ui.verify)} ${svg('link')}</span>` : ''
      }</div>`;
      return ce.url
        ? `<li class="card cert"><a href="${esc(ce.url)}"${ext(ce.url)}>${badge}${text}</a></li>`
        : `<li class="card cert"><div class="cert-body">${badge}${text}</div></li>`;
    })
    .join('');

  const education = c.education
    .map(
      (e) => `
      <li>
        ${e.logo ? `<img class="edu-logo" src="${esc(a(e.logo))}" alt="${esc(ui.logo)} ${esc(e.school)}" width="48" height="48" loading="lazy">` : ''}
        <div>
          <h3>${esc(e.school)}</h3>
          <p>${esc(e.program)}${e.period ? ` <span class="sep">·</span> <span class="period">${esc(e.period)}</span>` : ''}${
            e.note ? ` <span class="sep">·</span> <em>${esc(e.note)}</em>` : ''
          }</p>
        </div>
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
    address: { '@type': 'PostalAddress', addressLocality: 'San José', addressCountry: 'CR' },
    url: site.url,
    image: `${site.url}/${p.photo}`,
    sameAs: [l.linkedin, l.github],
  };

  return `<!doctype html>
<html lang="${esc(ui.lang)}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(site.title)}</title>
  <meta name="description" content="${esc(site.description)}">
  <meta name="author" content="${esc(p.name)}">
  <link rel="canonical" href="${esc(pageUrl)}">
  <link rel="alternate" hreflang="${esc(lang)}" href="${esc(pageUrl)}">
  <link rel="alternate" hreflang="${esc(altLang)}" href="${esc(altUrl)}">
  <link rel="alternate" hreflang="x-default" href="${esc(site.url)}/">
  <link rel="icon" href="${a('favicon.svg')}" type="image/svg+xml">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="${esc(ui.locale)}">
  <meta property="og:title" content="${esc(site.title)}">
  <meta property="og:description" content="${esc(site.description)}">
  <meta property="og:url" content="${esc(pageUrl)}">
  <meta property="og:image" content="${esc(site.url)}/${esc(site.ogImage || p.photo)}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="${esc(p.name)}: ${esc(p.headline)}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="color-scheme" content="light dark">
  <script>try{var t=localStorage.getItem('theme');if(t)document.documentElement.dataset.theme=t}catch(e){}</script>
  <link rel="stylesheet" href="${a('style.css')}">
${
  c.analytics?.goatcounter
    ? `  <script data-goatcounter="https://${esc(c.analytics.goatcounter)}.goatcounter.com/count" async src="https://gc.zgo.at/count.js"></script>\n`
    : ''
}  <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
</head>
<body>
  <a class="skip" href="#main">${esc(ui.skip)}</a>
  <header class="topbar">
    <div class="wrap bar">
      <a class="brand" href="#top">${esc(p.name)}</a>
      <nav aria-label="Sections"><ul>${navIds
        .map((id) => `<li><a href="#${id}">${esc(ui.nav[id])}</a></li>`)
        .join('')}</ul></nav>
      <a class="lang" href="${esc(lang === 'en' ? 'es/' : '../')}" hreflang="${esc(altLang)}" lang="${esc(altLang)}" title="${esc(
        ui.switchTitle,
      )}">${svg('globe')} ${esc(ui.switchLabel)}</a>
      <button class="theme" type="button" aria-label="${esc(ui.theme)}">
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
            <a class="btn primary" href="${esc(a(l.resume))}"${ext(l.resume)}>${svg('doc')} ${esc(ui.resume)}</a>
            <a class="btn" href="${esc(l.linkedin)}"${ext(l.linkedin)}>${svg('linkedin')} LinkedIn</a>
            <a class="btn" href="${esc(l.github)}"${ext(l.github)}>${svg('github')} GitHub</a>
            <a class="btn" href="mailto:${esc(l.email)}">${svg('mail')} ${esc(ui.email)}</a>
          </div>
        </div>
        <img class="portrait" src="${esc(a(p.photo))}" alt="${esc(p.photoAlt)}" width="360" height="360" fetchpriority="high">
      </div>
      <div class="wrap"><ul class="highlights">${highlights}</ul></div>
    </section>

    <section id="about"><div class="wrap narrow">
      <h2>${esc(ui.about)}</h2>
      ${p.about.map((t) => `<p>${esc(t)}</p>`).join('\n      ')}
    </div></section>

    <section id="experience" class="alt"><div class="wrap narrow">
      <h2>${esc(ui.experience)}</h2>
      <div class="timeline">${experience}</div>
    </div></section>

    <section id="projects"><div class="wrap">
      <h2>${esc(ui.projects)}</h2>
      <div class="grid two projects">${projects}</div>
    </div></section>

    <section id="recommendations" class="alt"><div class="wrap">
      <h2>${esc(ui.recommendations)}</h2>
      <div class="grid three recs">${recommendations}</div>
      <p class="recs-more">${ui.recsNote ? `${esc(ui.recsNote)} ` : ''}<a href="${esc(l.linkedinRecommendations || l.linkedin)}"${ext(
        l.linkedin,
      )}>${esc(ui.recsMore)} →</a></p>
    </div></section>

    <section id="skills"><div class="wrap">
      <h2>${esc(ui.skills)}</h2>
      <div class="grid two">${skills}</div>
    </div></section>

    <section id="certifications" class="alt"><div class="wrap">
      <h2>${esc(ui.certifications)}</h2>
      <ul class="grid three certs">${certs}</ul>
    </div></section>

    <section id="education"><div class="wrap narrow">
      <h2>${esc(ui.education)}</h2>
      <ul class="edu">${education}</ul>
      <h3 class="sub">${esc(ui.languages)}</h3>
      <ul class="langs">${languages}</ul>
    </div></section>

    <section id="contact" class="alt"><div class="wrap narrow center">
      <h2>${esc(ui.contact)}</h2>
      <p>${esc(ui.contactText)}</p>
      <ul class="contact">
        <li>${svg('mail')} <a href="mailto:${esc(l.email)}">${esc(l.email)}</a></li>
${l.phone ? `        <li>${svg('phone')} <a href="tel:${esc(l.phone.replace(/[^+\d]/g, ''))}">${esc(l.phone)}</a></li>\n` : ''}        <li>${svg('linkedin')} <a href="${esc(l.linkedin)}"${ext(l.linkedin)}>${esc(l.linkedin.replace(/^https?:\/\/(www\.)?/, ''))}</a></li>
        <li>${svg('github')} <a href="${esc(l.github)}"${ext(l.github)}>${esc(l.github.replace(/^https?:\/\//, ''))}</a></li>
      </ul>
    </div></section>
  </main>

  <footer>
    <div class="wrap">
      <p>© ${year} ${esc(p.name)} · ${esc(ui.updated)} <time datetime="${today}">${today}</time></p>
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
}

const base = en.site.url;
const htmlEn = render(en, { lang: 'en', root: '', pageUrl: `${base}/`, altUrl: `${base}/es/`, altLang: 'es' });
const htmlEs = render(es, { lang: 'es', root: '../', pageUrl: `${base}/es/`, altUrl: `${base}/`, altLang: 'en' });

rmSync('dist', { recursive: true, force: true });
mkdirSync('dist/es', { recursive: true });
cpSync('static', 'dist', { recursive: true });
writeFileSync('dist/index.html', htmlEn);
writeFileSync('dist/es/index.html', htmlEs);
writeFileSync(
  'dist/sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url><loc>${base}/</loc><lastmod>${today}</lastmod><xhtml:link rel="alternate" hreflang="es" href="${base}/es/"/></url>
  <url><loc>${base}/es/</loc><lastmod>${today}</lastmod><xhtml:link rel="alternate" hreflang="en" href="${base}/"/></url>
</urlset>
`,
);
console.log(`Built dist/ (EN ${Math.round(htmlEn.length / 1024)} KB, ES ${Math.round(htmlEs.length / 1024)} KB)`);
