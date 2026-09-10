---
title: "Red Team Infrastructure: Architecture & Design"
date: 2026-09-10
draft: false
tags: ["red team", "red team infrastructure", "c2 infrastructure", "opsec"]
author: "Sanidhya Soni"
description: "How red team infrastructure is structured: short-haul vs long-haul, redirectors, CDNs, trust zones, and designing for failure. Part 1 of a series."
image: /images/red-team-infrastructure-architecture-and-design/og.png
---

**By Sanidhya Soni** | *September 10, 2026*

This is Part 1 of the series **"How to Design Red Team Infrastructure."**

Before getting into technical terms, it is worth being clear on what red team infrastructure actually is and what we are trying to achieve when we design it.

If the infrastructure is poorly designed, a single blocked domain, exposed server, failed service, or configuration mistake can disrupt a large part of the engagement.

The goal is simpler: **build an environment that gives operators reliable control while limiting unnecessary exposure, reducing failures, and making exposed or failed components easy to replace.**

---

## What is red team infrastructure?

**Red team infrastructure is the environment a red team builds and controls to support an operation.**

It includes the systems, communication paths, network boundaries, domains, servers, access controls, deployment processes, and supporting services required to operate throughout an engagement.

A basic setup might look like this:

{{< figure
    src="/images/red-team-infrastructure-architecture-and-design/basic-c2-setup.png"
    alt="A target endpoint or implant communicating directly with a C2 server, which the operator also connects to"
    caption="Figure 1: A basic C2 setup. The target endpoint talks straight to the C2 backend."
    width="1400" height="788" loading="eager"
>}}

Technically this can work, but the problem is that the target endpoint communicates directly with the C2 backend.

That means the C2 server's public address becomes visible to network telemetry inside the target environment. If defenders identify and block that destination, every implant depending on it may lose communication.

It also means that one public-facing component is performing too many roles at once:

- receiving callbacks
- hosting the backend C2 service
- exposing infrastructure to the target
- potentially providing operator access

For small labs or temporary testing this may be perfectly acceptable.

For more realistic engagements, however, we usually want some separation between the infrastructure visible to the target and the infrastructure we actually want to protect.

---

## Infrastructure is not the same as tooling

A common mistake is to think of red team infrastructure as the C2 framework itself.

Cobalt Strike, Sliver, Mythic, Havoc, or another framework may be part of the environment, but the infrastructure exists around them.

A more complete view looks something like this:

{{< figure
    src="/images/red-team-infrastructure-architecture-and-design/redteam-infra-overview.png"
    alt="A layered overview of red team infrastructure showing public, backend, operator, and control components around the C2 framework"
    caption="Figure 2: A more complete view of red team infrastructure."
    width="666" height="705"
>}}

Each of those areas can contain several components. Supporting all of this may also be:

- Infrastructure as Code
- monitoring and logging
- secrets management
- deployment pipelines (CI/CD)
- testing
- asset tracking

The exact architecture depends on the engagement. There is no single "correct" red team infrastructure design.

---

## Short-haul vs long-haul infrastructure

Red team infrastructure is sometimes divided into **short-haul** and **long-haul** communication infrastructure. This distinction is primarily about **operational purpose.**

### Short-haul infrastructure

Short-haul infrastructure is generally used for active operations (hours, days, weeks) where operators require regular communication with systems inside the target environment.

Because it is used more actively, it may receive greater exposure from defenders and may therefore be treated as more disposable.

Typical priorities include:

- reliable operator access
- responsive communication
- fast deployment
- easy replacement
- separation from more sensitive infrastructure

### Long-haul infrastructure

Long-haul infrastructure is generally designed around maintaining a stealthier and more durable communication path.

It may be used less frequently and kept separate from infrastructure used for everyday operational activity.

In larger engagements (spanning months), separating infrastructure by operational purpose can significantly reduce the impact of discovery or failure.

---

## Building a more robust red team infrastructure

The easiest mistake to make at this point is to assume that better infrastructure simply means adding more layers. It does not.

Every new component adds something else that has to be deployed, configured, secured, monitored, paid for, and eventually removed.

A more developed architecture may include several of the following layers.

### Redirectors

Redirectors sit between publicly reachable infrastructure and backend services. Their main purpose is **controlled traffic forwarding and egress filtering bypass.**

Instead of every target endpoint communicating directly with the C2 backend, traffic reaches a proxy (simply a middleman) system first.

This helps prevent unnecessary exposure of backend infrastructure and allows the public-facing component to be replaced without rebuilding the entire environment.

Redirectors can also apply certain filtering rules so that only expected C2 traffic reaches the backend.

There are multiple types of redirectors — HTTP, DNS, SMTP, protocol encapsulation — depending on the objectives of the operation. We will cover different redirector designs in a later part of this series.

---

### CDN and edge services

A CDN (Content Delivery Network) is a geographically distributed group of servers that speeds up the delivery of web content by caching it closer to users, and which in a red team context also acts as a dynamic request forwarder (reverse proxy) for C2 traffic.

Depending on the architecture, they can provide:

- distributed ingress
- reverse-proxy functionality
- TLS handling
- traffic filtering
- backend address separation
- easier changes to upstream infrastructure

This CDN-as-reverse-proxy distinction becomes important when designing modern infrastructure and will be covered separately later in the series.

---

### Network segmentation

Public-facing infrastructure and sensitive backend systems should not automatically share the same level of network access.

Cloud networks such as VPCs can be used to separate infrastructure based on purpose.

The goal here is to control **which systems are allowed to communicate with which other systems.** If a public system is compromised, that should not automatically provide unrestricted access to the rest of the infrastructure.

---

### Domains and DNS

While registering a domain name, a red team may need to consider:

- DNS configuration
- certificates
- reputation
- categorization
- ownership separation
- rotation
- expiration
- teardown

Domain architecture also affects how easily infrastructure can be changed without modifying every other component.

We will cover domain strategy separately and in depth.

---

### Role-specific systems

Activities like scanning, payload delivery, phishing infrastructure, and other operations may have very different exposure requirements and must use separate systems, hosts, or even separate networks.

Separating systems by purpose can reduce accidental detection and limit the impact of a single compromised component. The exact use and setup depends on the objectives of an operation.

---

### Automation and rebuildability

If a public-facing server is considered compromised, restoring an old copy of that same server may not solve the underlying problem.

A better goal is often **rebuildability** through automated deployment and validation.

Infrastructure as Code tools, configuration management, deployment scripts, and automated validation can make replacement much faster and more predictable.

The objective is to avoid rebuilding important infrastructure manually under pressure, which can consume a lot of time and effort and may lead to operational loss as well.

---

### Monitoring and logging

Red team infrastructure also needs visibility. Like any other organization's infrastructure, operators need visibility into their own systems — for example, knowing when:

- a service becomes unavailable
- a certificate is nearing expiration
- DNS unexpectedly changes
- a deployment fails
- unexpected requests reach exposed infrastructure
- administrative authentication fails
- there are configuration issues

Through thorough monitoring and logging we are not only guarding against attacks but also knowing whether the environment is working correctly as intended.

---

## Dividing the whole architecture into trust zones

One useful way to think about red team infrastructure architecture is to divide it into a few simple trust zones.

{{< figure
    src="/images/red-team-infrastructure-architecture-and-design/trust-zones.png"
    alt="Red team infrastructure split into trust zones: public, backend, operator administration, and infrastructure control"
    caption="Figure 3: Trust zones in red team infrastructure."
    width="1040" height="382"
>}}

Public infrastructure should generally be treated as more exposed. Backend infrastructure should have fewer reasons to communicate directly with the target environment. Operator administration should be separated from normal callback traffic.

And systems controlling the infrastructure itself — deployment credentials, DNS credentials, cloud accounts, secrets, and automation — should be treated carefully, because compromising them may expose much more than a single server.

---

## A more complete architecture

Putting these ideas together, a modern red team infrastructure architecture might look like this:

{{< figure
    src="/images/red-team-infrastructure-architecture-and-design/complete-architecture.png"
    alt="A complete red team operational infrastructure diagram spanning victim network, DNS and edge provider, engagement VPC, private operator access, and engineering services"
    caption="Figure 4: A more complete red team operational infrastructure."
    width="1600" height="865"
>}}

Not every engagement needs every layer shown here. The important part is to understand **why a layer exists**, what it protects, and what happens when it fails.

---

## Assuming components will fail

A useful mindset when designing infrastructure is to assume that individual components may eventually become unavailable. It means we should avoid designs where the failure of one disposable component causes the entire operation to collapse.

- A domain may be blocked.
- A public server may be identified.
- A provider may suspend an asset.
- A certificate may expire.
- A service may crash.
- A configuration may break.
- An exposed component may need to be replaced.

For example, if every server is deployed using one unrestricted cloud credential, network segmentation alone will not protect the environment if that credential is compromised.

Now, the important question is:

> **If this component disappears, what else stops working with it?**

For every component, think about:

- **Exposure:** what can an external observer learn from it?
- **Failure:** what stops working if it goes down?
- **Compromise:** what additional systems become reachable if it is taken over?
- **Replacement:** how difficult is it to replace safely?
- **Dependencies:** what other components depend on it?

This simple exercise often minimizes architecture problems before an engagement starts.

---

In the next part of this series, we will break the architecture down layer by layer and look at the purpose, exposure, failure modes, and design considerations of various components.

## References

1. [Modern Red Team Infrastructure — NetSPI](https://www.netspi.com/modern-red-team-infrastructure/)
2. [Praetorian's Approach to Red Team Infrastructure](https://www.praetorian.com/blog/praetorians-approach-to-red-team-infrastructure)
3. [Mastering Modern Red Teaming Infrastructure, Part 2 — frsfaisall](https://medium.com/@frsfaisall/mastering-modern-red-teaming-infrastructure-part-2-building-stealthy-c2-infrastructure-with-312aec7e1e48)
4. [Red Team Infrastructure Done Right — huskyhacks](https://huskyhacks.io/blog/red-team-infrastructure-done-right)
5. [Red Team Infrastructure Wiki — bluscreenofjeff](https://github.com/bluscreenofjeff/red-team-infrastructure-wiki)
