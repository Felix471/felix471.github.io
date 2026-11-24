---
slug: ask-the-fly
title: Ask the Fly
summary: A fruit-fly brain model tastes a few dishes and picks one for you.
links:
  - { label: Try it, href: 'https://askthefly.app/' }
  - { label: Source, href: 'https://github.com/Felix471/ask-the-fly' }
image: ../../assets/projects/ask-the-fly-card.png
tone: light
alt: Ask the Fly tasting card with ranked dishes
caption: A tasting result from Ask the Fly.
---

## What it is

Ask the Fly ranks dishes using precomputed responses from a published fruit-fly brain model. The menu uses taste inputs estimated for each dish. The brain view replays recorded spikes.

The sprites are original pixel art from Ask the Fly, licensed [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

## What it measured

The model reads one feeding motor neuron, left MN9. Its firing rate stands in for how strongly the fly extends its proboscis. Sugar increased the response and bitter input suppressed it. The lookup table covers 400 stimulus conditions with 30 trials per condition.

## What it does not do

The model has no spontaneous activity. It covers the first bite only, at the labellar bristles. The feeding-state labels have no calibration against measured animal behaviour.

## Reproduce it

From the source checkout, serve the shipped site and run the quick tests.

```sh
python -m http.server 8765 --directory site
node --test site/test/app.test.mjs site/test/regress.test.mjs
```

To recompute the lookup table, use the verified simulation inputs and environment listed in the README. Run `scripts/run_grid.py --stage full` followed by `scripts/build_lookup.py`.
