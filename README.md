# felix471.github.io

Personal portfolio. Built with [Astro](https://astro.build) as a fully static site, styled with plain CSS, deployed to GitHub Pages by GitHub Actions.

- Single page (`/`) with Hero, Projects grid and About sections.
- One page per project at `/projects/<slug>/`.
- Light/dark theme follows the system preference, with a manual toggle.
- No analytics, no cookies, no external scripts or fonts.

## Run locally

Requires Node 22+ and [pnpm](https://pnpm.io) (`npm install -g pnpm`).

```sh
pnpm install
pnpm dev        # http://localhost:4321, hot reload
pnpm build      # static output in dist/
pnpm preview    # serve dist/ at http://localhost:4321
pnpm check      # type-check .astro/.ts files (optional)
```

## Where the content lives

| What | File |
| --- | --- |
| Name, tagline, links row, about paragraphs | `src/data/site.ts` |
| Projects (one file each) | `src/content/projects/*.md` |
| Project thumbnails | `src/assets/projects/` |
| Resume | `public/resume.pdf` |
| Favicon | `public/favicon.svg` |

Components never contain copy. Edit the files above.

## Add a project

1. Drop a thumbnail into `src/assets/projects/` (PNG, JPG, WebP or SVG; ideally 8:5, at least 800 px wide). Astro resizes and converts raster images at build time.
2. Create `src/content/projects/<slug>.md`:

```md
---
title: My Project                      # required
slug: my-project                       # required, lowercase kebab-case, becomes /projects/my-project
summary: One sentence, max 160 chars.  # required, shown on the card
thumbnail: ../../assets/projects/my-project.png   # required, relative to this file
tags: [TypeScript, CLI]                # optional, default []
demo_url: https://example.com          # optional
repo_url: https://github.com/you/repo  # optional
writeup_url: https://example.com/post  # optional; if omitted, "Write-up" links to this page
order: 10                              # optional, default 100; lower sorts first
featured: false                        # optional, default false (available for future filtering)
---

Long write-up in Markdown. Rendered on /projects/<slug>.
```

3. `pnpm dev` and check `/projects/<slug>/`. The frontmatter is validated by the schema in `src/content.config.ts`; a missing or malformed field fails the build with a pointer to the file.

To remove a project, delete its `.md` file.

## Deploy

Deployment is automatic. Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to GitHub Pages.

One-time setup after creating the repo on GitHub:

1. Push this repo to `Felix471/felix471.github.io`, branch `main`.
2. In the repo go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Open the **Actions** tab. The first run may already be in progress; if not, run "Deploy to GitHub Pages" manually.

The site is then served at <https://felix471.github.io>. Because this is a *user site* repo, it lives at the domain root, so no `base` path is configured in `astro.config.mjs`.

## Custom domain (later)

Nothing is configured now. When you have a domain:

1. At your DNS provider, add either a `CNAME` record for a subdomain (e.g. `www` → `felix471.github.io`) or, for an apex domain, `A`/`AAAA` records pointing at GitHub Pages' IPs (see [GitHub's docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)).
2. In the repo go to **Settings → Pages → Custom domain**, enter the domain and save. GitHub verifies DNS and, once it passes, lets you tick **Enforce HTTPS**.
3. Change `site` in `astro.config.mjs` to the new origin (e.g. `https://example.com`) so canonical URLs and the sitemap point at the right host. Commit and push.

There is deliberately no `public/CNAME` file. Setting the domain in repo Settings is enough for a site deployed via GitHub Actions, and keeping it out of the repo avoids the two getting out of sync.

## Project layout

```
.github/workflows/deploy.yml   build + deploy on push to main
astro.config.mjs               site URL, static output, sitemap integration
public/                        copied as-is (resume.pdf, favicon)
src/
  assets/projects/             thumbnails (processed by Astro's image pipeline)
  content/projects/*.md        project entries
  content.config.ts            collection schema (frontmatter validation)
  data/site.ts                 name, tagline, links, about text
  styles/global.css            tokens, light/dark themes, base styles
  layouts/Base.astro           <head>, header, theme bootstrap, footer
  components/                  Hero, ProjectGrid, ProjectCard, About, Footer, LinksRow, ThemeToggle
  pages/index.astro            home page
  pages/projects/[slug].astro  one page per project
```
