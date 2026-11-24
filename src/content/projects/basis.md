---
slug: basis
title: basis
summary: A C++20 market data engine that records Hyperliquid stock perpetuals and IEX equity quotes side by side.
links:
  - { label: Source, href: 'https://github.com/Felix471/basis' }
panel: |-
  $ basis_report aligned.csv
  NVDA basis   +0.67 bps
  lead-lag     IEX leads ~1 s
  corr 0.50 at lag -1 s
caption: NVDA results from basis_report.
---

## What it is

basis records Hyperliquid stock perpetuals and IEX equity quotes via Alpaca. Nanosecond receive timestamps let the offline tools align the two feeds.

## What it measured

In one 15-minute session, the NVDA perpetual mid was a median 0.67 bps above the IEX mid. Cross-correlation of mid-price changes put IEX ahead by about 1 s. The analysis detected no lead-lag for TSLA.

In the benchmark, the recorder wrote 7.6M records/s with 72-byte records, including flush, and the reader read 30.5M records/s.

## What it does not do

IEX quotes cover one venue and cannot stand in for the national best bid and offer. The capture covers one 15-minute session. The assumption that Hyperliquid's trade-side field identifies the aggressor remains unverified.

## Reproduce it

After building on Linux, align the recorded fixtures for NVDA and run the report.

```sh
./build/src/basis_align data/hl_bbo_open.bin data/iex_open.bin --symbol NVDA --out nvda.csv
./build/src/basis_report nvda.csv
```
