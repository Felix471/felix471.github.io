---
slug: retrace
title: Retrace
summary: A local-first viewer for replaying, tagging and comparing multi-agent logs.
links:
  - { label: Source, href: 'https://github.com/Felix471/Retrace' }
image: ../../assets/projects/retrace-compare.png
tone: light
alt: Retrace aligns two support runs and highlights their first divergence
caption: Side-by-side comparison of two runs in Retrace.
---

## What it is

Retrace opens structured multi-agent logs locally. The run table supports sorting and filtering. The replay view presents events in order and lets you attach failure tags and notes.

## What it measured

Validation of the bundled demo reported 40 runs and 523 events with zero warnings. Retrace makes zero outbound network requests. The public tests check that the code imports nothing capable of outbound requests and that the served interface contains no external URLs. They also check that the viewer binds to loopback by default and that tagging leaves the source logs byte-identical.

## What it does not do

Retrace accepts structured logs only. The comparison aligns stored events and identifies differences in structure and content. It does not measure semantic similarity. Custom Python adapters are unavailable in v1.

## Reproduce it

Install from the source checkout with Python 3.11 or newer and pipx.

```sh
pipx install .
retrace-logs check demo/
retrace-logs view demo/
```
