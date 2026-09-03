---
title: "About"
date: 2026-01-31T16:00:00Z
lastmod: 2026-09-03
draft: false
type: "about"
aliases: ["/work/"]
description: "Security engineer — I build security tooling, and I've spent years breaking the kinds of systems I now build. OSCP/OSWP, CVE-2025-65875."
---

I got into security by messing around with tools I barely understood until something
clicked. That turned into offensive work — penetration testing, red team engagements,
CTF development — and eventually into the more interesting half of the problem: building
the things that hold up.

Most of my time now goes into security tooling and vulnerability research. The offensive
background isn't a separate chapter; it's the reason the tooling is any good. Knowing
precisely how something fails is what tells you where to spend the effort when you build it.

Right now I'm finishing a B.Tech in Computer Science (Cyber Security & Digital Forensics)
at VIT Bhopal, where I run the OWASP student chapter, and taking independent security work
alongside it. I write about most of it — [that's the rest of this site](/posts/).

## Selected work

**[CVE-2025-65875](/posts/security-research/cve-2025-65875-fpdf-rce-vulnerability/) — remote code execution in FPDF**
FPDF's font definition files are PHP, and they get `include`d at runtime. Any application
that lets a user influence the path passed to `AddFont()` — a "custom font upload" feature
is the usual case — turns that into code execution. Affects every version through 1.86.
Found, reported, disclosed.
[Full writeup →](/posts/security-research/cve-2025-65875-fpdf-rce-vulnerability/)

**AISE — IoT scanning and exploitation framework**
Discovery and exploitation tooling for IoT estates. Wraps Rustscan and Nmap for local
sweeps, pulls external exposure from Shodan, Censys and Zoomeye, and normalises all of it
into SQLite so findings are queryable instead of scrollback. Containerised, so it runs the
same on an engagement laptop as it does in CI.
*Python · Docker · Rustscan · Nmap · SQLite3*

**Android pentesting framework** — CyberWarFare Labs
Mobile exploitation tooling, alongside Docker-based lab challenges spanning privilege
escalation, web security and forensics.

**Red team training framework** — DGTA, Indian Army
A practical curriculum taking defence personnel through red teaming and exploitation end
to end, with exploitation scenarios built for live training exercises.

**CTF design — 50+ challenges**
Digital forensics, web exploitation, reversing, cryptography and network challenges,
deployed with Docker and YAML. Built for **Vulncon** Bengaluru, **BSides Mumbai 2024**,
**BSides Indore**, and TheCyberDelta.

## Where I've worked

**Independent contractor** — security testing & CTF development · ongoing
Security assessments and CTF infrastructure for organisations and security events.

**Cyber security engineer intern** — DGTA, Indian Army · Delhi · Nov 2024 – Jan 2025

**Security engineer intern** — CyberWarFare Labs · remote · Jan 2024 – Jul 2024
Red, blue and purple team engagements focused on AD enumeration and threat detection.

**CTF development intern** — TheCyberDelta · remote · Jul 2022 – Sep 2022

**Cyber security intern** — CyberSecuredIndia · remote · Jan 2022 – May 2022
OWASP Top 10 testing across web, mobile and network targets, source code review, and
threat detection mapped to MITRE ATT&CK.

## Credentials

**[OSCP](https://www.credential.net/ea6beae4-9282-4c1d-9bbc-13efaa15b832)** and
**[OSWP](https://www.credential.net/e1677b26-b944-4aae-99c0-ac34bb1ebb8f)** — OffSec, 2023.
Also Fortinet NSE 2 and CNSP (SecOps Group), 2022.

## Competition and disclosure

Nine national CTF placements, including **1st at IIT Bhubaneswar**, 2nd at IIT Madras and
BITS Hyderabad, and 3rd at DSCI and IIT Roorkee — plus national finals at TCQ CTF (Indian
Army), IIT Patna, TrustLab (IIT Bombay) and the Embedded Security CTF (IIT Madras & DSCI).

On the disclosure side: bounties from **PhysicsWallah** and **Talent.com**, Hall of Fame at
**airtame.com**, and appreciation from **IndiaMart** and **NCIIPC**, Government of India.

I've also spoken on security at JECRC University Jaipur, with CyberSecuredIndia, Aspire
For Her and Infosys.

## Get in touch

Open to security engineering and research work — building tooling, breaking things, or both.

**[sanidhyasonii@proton.me](mailto:sanidhyasonii@proton.me)** · [résumé (PDF)](/sanidhya-resume.pdf)

Security issues in anything I've built or written about go to
[security.txt](/.well-known/security.txt).
