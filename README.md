# Adrian Fonseca Coto — Portfolio

Live site: https://odr3n.github.io

A small, dependency-free static site. There is no framework and nothing to install.

## Update the site

Almost everything is edited in one file: **`content.json`** (role, experience, projects, skills, certifications, education, links).

1. Edit `content.json` (on GitHub: open the file, click the pencil icon, edit, commit).
2. Commit to `main`. GitHub Actions runs `npm run build` (which just runs `node build.mjs`) and publishes the site in about a minute.

Other files:

| File | What it is |
| --- | --- |
| `content.json` | All the text and links |
| `build.mjs` | Turns `content.json` into `dist/index.html` (Node only, no packages) |
| `static/style.css` | Design: colors are variables at the top of the file |
| `static/assets/profile.jpg` | Profile photo |
| `package.json` | Only defines the `build` script; there are no dependencies |
| `.github/workflows/` | Build and deploy to GitHub Pages |

## Preview locally

```sh
node build.mjs
npx serve dist   # or: python3 -m http.server -d dist
```
