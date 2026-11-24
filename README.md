# felix471.github.io

Felix's static Astro portfolio. The home page has a profile, the Ask the Fly picker, selected projects and contact links. About appears when it has content. Project write-ups live at `/projects/<slug>/`. The day and night themes follow the system preference until a visitor selects one.

## Content

- `src/data/poems.ts` holds the Poetry section: the intro line, the Medium profile link and the list of poems. An empty list hides the section.
- `src/data/site.ts` holds the site metadata, contact links and About paragraphs. The cover layout and the languages line live in `src/components/Hero.astro`.
- `src/data/fly-picker.ts` holds the dish readings and sprite references.
- `src/content/projects/` holds the project Markdown files. Project images live in `src/assets/projects/`.

To add a project, create a Markdown file in `src/content/projects/` with a unique `slug`, `title`, one-sentence `summary`, `links` (each with a `label` and `href`), and `caption`. Add either an `image` path relative to the Markdown file with `alt` and `tone` (`light` or `dark`), or a text `panel`. Use the headings What it is, What it measured, What it does not do, and Reproduce it. The collection generates the project route. The home selection is in `src/components/ProjectGrid.astro`.

## Checks

Use Node 22.12 or newer and pnpm.

```sh
pnpm install
pnpm check
pnpm test
pnpm build
```

The build writes the static site to `dist/`.
