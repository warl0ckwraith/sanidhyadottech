---
title: "About"
date: 2026-01-31T16:00:00Z
lastmod: 2026-09-03
draft: false
type: "about"
aliases: ["/work/"]
headline: "I build security tooling and find bugs in software people actually run."
description: "Security engineer. Vulnerability research and security tooling. OSCP and OSWP, and I found CVE-2025-65875 in FPDF."
---

I'm a security engineer. I spent a few years breaking things — pentesting, red team
work, CTF infrastructure — and these days I mostly build tooling and do vulnerability
research. Knowing where systems fail is the useful part when you sit down to build one.

Most recently I found [CVE-2025-65875](/posts/security-research/cve-2025-65875-fpdf-rce-vulnerability/),
a remote code execution bug in FPDF: font definitions are PHP files included at runtime,
so an attacker-controlled font path becomes code execution. Affects everything up to 1.86.
I hold [OSCP](https://www.credential.net/ea6beae4-9282-4c1d-9bbc-13efaa15b832) and
[OSWP](https://www.credential.net/e1677b26-b944-4aae-99c0-ac34bb1ebb8f) from OffSec, and
I'm finishing a B.Tech in Computer Science (Cyber Security and Digital Forensics) at VIT
Bhopal. Before that: security work at CyberWarFare Labs and DGTA, Indian Army.

What I want to do next is more of the research — finding bugs in widely deployed software,
and building the tooling that finds them at scale. I write up what I find [here](/posts/).

I'm open to security engineering and research work. Email is the fastest way to reach me.

**[sanidhyasonii@proton.me](mailto:sanidhyasonii@proton.me)**

Found a security issue in something I built or wrote about? Details are in
[security.txt](/.well-known/security.txt).
