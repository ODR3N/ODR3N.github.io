# Adrian Fonseca Coto — Portfolio

Live site: https://odr3n.github.io

A small, dependency-free static site. There is no framework and nothing to install.

## Update the site

Almost everything is edited in one file: **`content.json`** (role, experience, projects, recommendations, skills, certifications, education, links).

The Spanish page (`/es/`) comes from **`content.es.json`**, which holds only the translated text. Anything it leaves out is taken from `content.json`, and lists line up by position (the 2nd job in one file is the 2nd job in the other). When you add something in English, add its translation at the same position in `content.es.json`.

1. Edit `content.json` (on GitHub: open the file, click the pencil icon, edit, commit).
2. Commit to `main`. GitHub Actions runs `npm run build` (which just runs `node build.mjs`) and publishes the site in about a minute.

Other files:

| File | What it is |
| --- | --- |
| `content.json` | All the text and links (English) |
| `content.es.json` | Spanish text for `/es/` |
| `build.mjs` | Turns `content.json` into `dist/index.html` (Node only, no packages) |
| `static/style.css` | Design: colors are variables at the top of the file |
| `static/assets/` | Photo, CV (PDF), company logos, certification badges, project covers, link-preview image |
| `package.json` | Only defines the `build` script; there are no dependencies |
| `.github/workflows/` | Build and deploy to GitHub Pages |

## Preview locally

```sh
node build.mjs
npx serve dist   # or: python3 -m http.server -d dist
```

## Visitor stats (optional)

The site supports [GoatCounter](https://www.goatcounter.com) (free, no cookies). Create an account, pick a code
(for example `odr3n`, which gives `odr3n.goatcounter.com`), then put that code in `content.json`:

```json
"analytics": { "goatcounter": "odr3n" }
```
