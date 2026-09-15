---
title: Ask the Fly
slug: ask-the-fly
summary: A chat interface over a genetics knowledge base, tuned for researchers who dislike chat interfaces.
thumbnail: ../../assets/projects/ask-the-fly.svg
tags: [TypeScript, LLM, Retrieval]
demo_url: https://example.com/ask-the-fly
repo_url: https://github.com/Felix471/ask-the-fly
order: 2
featured: true
---

## What it is

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ask the Fly answers
questions about *Drosophila* gene function by retrieving from a curated corpus
and always showing the source paragraph next to the answer.

## Why I built it

Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
cubilia curae; researchers wanted citations, not confidence. Every answer is
either grounded in a quoted passage or explicitly marked as "not in corpus".

## How it works

1. Documents are chunked by section, not by token count
2. Hybrid search: BM25 for gene symbols, embeddings for everything else
3. The model is asked to quote before it is asked to summarise

Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu
vulputate magna eros eu erat. Aliquam erat volutpat.

## What I learned

Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.
Phasellus ultrices nulla quis nibh. Quisque a lectus.
