---
title: "About"
date: 2026-01-31T16:00:00Z
lastmod: 2026-09-03
draft: false
type: "about"
aliases: ["/work/"]
headline: "I'm a security engineer. I build tools, find bugs, and write about both."
description: "Security engineer. I build security tooling and do vulnerability research. OSCP and OSWP, and I found CVE-2025-65875."
---

I got into security by messing around with tools I barely understood until something
clicked. That turned into pentesting, red team work, and building CTF challenges.

These days I mostly build security tooling and look for bugs. Breaking things for a few
years taught me where systems actually fail, and that's the useful part when you sit
down to build one.

I'm finishing a B.Tech in Computer Science (Cyber Security and Digital Forensics) at VIT
Bhopal, where I run the OWASP student chapter. I take independent security work alongside
it, and I write up most of what I find [here](/posts/).

## Selected work

### CVE-2025-65875 — remote code execution in FPDF

FPDF stores font definitions as PHP files and includes them at runtime. If an app lets a
user control the path passed to `AddFont()`, that turns into code execution. A "custom
font upload" feature is the usual way in. Everything up to version 1.86 is affected.
I found it, reported it, and wrote up how it works.

[Read the writeup](/posts/security-research/cve-2025-65875-fpdf-rce-vulnerability/)

### AISE — IoT scanner and exploitation framework

Finds IoT devices and tests them. It runs Rustscan and Nmap locally, pulls known exposure
from Shodan, Censys and Zoomeye, and writes it all to SQLite so you can query the results
instead of scrolling back through a terminal. Runs in Docker.

*Python · Docker · Rustscan · Nmap · SQLite*

### Android pentesting framework

Built at CyberWarFare Labs. Mobile exploitation tooling, plus Docker lab challenges
covering privilege escalation, web security and forensics.

### Red team training framework

Built for DGTA, Indian Army. A course that takes defence personnel through red teaming and
exploitation start to finish, with scenarios they could run themselves.

### 50+ CTF challenges

Forensics, web, reversing, crypto and network challenges, deployed with Docker and YAML.
Built for Vulncon Bengaluru, BSides Mumbai 2024, BSides Indore, and TheCyberDelta.

## Where I've worked

- **Independent contractor** · ongoing — security testing and CTF infrastructure for
  companies and security events.
- **DGTA, Indian Army** · Nov 2024 – Jan 2025 — cyber security engineer intern, Delhi.
- **CyberWarFare Labs** · Jan – Jul 2024 — security engineer intern. Red, blue and purple
  team work, mostly AD enumeration and threat detection.
- **TheCyberDelta** · Jul – Sep 2022 — CTF development intern.
- **CyberSecuredIndia** · Jan – May 2022 — security intern. OWASP Top 10 testing on web,
  mobile and network targets, code review, detection mapped to MITRE ATT&CK.

## Certifications

[OSCP](https://www.credential.net/ea6beae4-9282-4c1d-9bbc-13efaa15b832) and
[OSWP](https://www.credential.net/e1677b26-b944-4aae-99c0-ac34bb1ebb8f) from OffSec, 2023.
Fortinet NSE 2 and CNSP from SecOps Group, 2022.

## CTFs and disclosure

Nine national placements. 1st at IIT Bhubaneswar. 2nd at IIT Madras and BITS Hyderabad.
3rd at DSCI and IIT Roorkee. National finals at TCQ CTF (Indian Army), IIT Patna, TrustLab
at IIT Bombay, and the Embedded Security CTF run by IIT Madras and DSCI.

On the disclosure side: bounties from PhysicsWallah and Talent.com, Hall of Fame at
airtame.com, and appreciation from IndiaMart and NCIIPC, Government of India.

I've also run a security workshop at JECRC University Jaipur, with CyberSecuredIndia,
Aspire For Her and Infosys.

## Get in touch

I'm open to security engineering and research work. The fastest way to reach me is email.

**[sanidhyasonii@proton.me](mailto:sanidhyasonii@proton.me)**

Found a security issue in something I built or wrote about? Details are in
[security.txt](/.well-known/security.txt).
