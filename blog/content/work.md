---
title: "Work"
date: 2026-09-03
draft: false
description: "Tools, research and challenge design — what I've built and what came out of it."
---

Selected work. Where there's a writeup, it's linked — the writeup is the point, the
bullet list is just the index.

## AISE — IoT scanning & exploitation framework

A discovery and exploitation tool for IoT estates. Wraps Rustscan and Nmap for local
sweeps and pulls from Shodan, Censys and Zoomeye for external exposure, normalising
everything into SQLite so findings are queryable rather than scrollback.

*Python, Docker, Rustscan, Nmap, SQLite3, Shodan/Censys/Zoomeye APIs*

## CVE-2025-65875 — RCE in FPDF

FPDF's font definition files are PHP and get `include`d at runtime. Any application that
lets a user influence the path passed to `AddFont()` — a "custom font upload" feature is
the common case — turns that into code execution. Affects FPDF ≤ 1.86.

[Read the writeup →](/posts/security-research/cve-2025-65875-fpdf-rce-vulnerability/)

## CTF challenge design

Digital forensics, web exploitation, reverse engineering, cryptography and network
challenges, built and deployed with Docker and YAML.

- **Vulncon**, Bengaluru — digital forensics challenges
- **BSides Mumbai 2024** — web, reversing, crypto and network challenges
- **BSides Indore** — digital forensics, onsite event
- **TheCyberDelta** — 50+ challenges, standardised deployment

## Speaking & community

- Security workshop speaker, JECRC University Jaipur — with CyberSecuredIndia,
  Aspire For Her and Infosys
- President, OWASP VIT Bhopal chapter
