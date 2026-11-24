---
slug: ai-avalon
title: AI Avalon
summary: "A playable web game and a 140-game dataset in which language models play the social-deduction game The Resistance: Avalon."
links:
  - { label: Play, href: 'https://ai-avalon.com' }
  - { label: Source, href: 'https://github.com/Felix471/avalon-ai' }
image: ../../assets/projects/ai-avalon-table.png
tone: dark
alt: AI Avalon game table with player roles and the voting interface in Chinese
caption: The AI Avalon game table in Chinese, shown with mock models.
---

## What it is

Language models discuss, vote and run quests in The Resistance: Avalon. The web game and the batch runner share the same TypeScript game engine. The frozen dataset contains 140 games across nine configurations.

## What it measured

The study compared evil-side win rates under a full prompt with strategy guidance and a naive prompt with role and game state.

| Matched pair | Full prompt | Naive prompt | p |
| --- | ---: | ---: | ---: |
| GPT | 7/15 | 14/15 | 0.0053 |
| Claude | 11/15 | 11/15 | 1.0000 |
| Mixed providers | 19/20 | 12/15 | 0.1675 |

## What it does not do

Only the GPT pair was statistically significant. Its sample was 15 games per arm. A logger bug left a wrong round number in 144 of 564 quest records, so the analysis derives rounds from quest order and results from quest actions. Some stored discussion lines are canned provider-failure text.

## Reproduce it

From the source checkout, regenerate the summaries and statistics from the frozen dataset.

```sh
npm install
npm run metrics
python analysis/stats.py
```
