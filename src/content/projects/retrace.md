---
title: Retrace
slug: retrace
summary: Replay and diff production traces locally to find the request that broke things.
thumbnail: ../../assets/projects/retrace.svg
tags: [Rust, Observability, CLI]
demo_url: https://example.com/retrace
repo_url: https://github.com/Felix471/retrace
order: 1
featured: true
---

## What it is

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Retrace records the
requests a service receives in production and lets you replay them against a
local build, then diffs the responses so the regression shows up as a red line
instead of a vague bug report.

## Why I built it

Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
commodo consequat.

- Captures traffic with a sidecar, no code changes required
- Redacts headers and bodies using a small allow-list DSL
- Replays at 1x, 10x or "as fast as possible"

## How it works

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
culpa qui officia deserunt mollit anim id est laborum.

```sh
retrace record --service api --minutes 5 > traffic.jsonl
retrace replay traffic.jsonl --against http://localhost:8080 --diff
```

## What I learned

Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius,
turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis
sollicitudin mauris.
