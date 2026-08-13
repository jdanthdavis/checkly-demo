# Solution Summary

## Customer problem

The prospect already has a mature observability stack: metrics, logs, and traces are all available. However, those signals are primarily internal. They do not answer the most important business question: can a customer still reach the storefront, browse products, and complete checkout successfully?

This creates a gap where customer-facing issues appear before internal alerting catches them.

## Proposed solution

I would position Checkly as a synthetic monitoring layer that complements the existing stack by validating the customer journey from the outside.

The MVP focuses on the higher-value user flows for an e-commerce platform:

- storefront availability
- product discovery and browsing
- add-to-cart and checkout path
- API health for the catalog layer

## Why this matters

For an e-commerce business, the critical issue is not just whether services are healthy; it is whether customers can still complete a purchase. That is directly tied to conversion, retention, and trust.

Synthetic monitoring gives the prospect a proactive signal on the user experience, not only on server health.

## What I built

This repo includes:

- a minimal Checkly check plan
- a browser-based storefront validity test
- a browser-based conversion path test
- a structured explanation of the problem, setup, and interview narrative

## How I would present it

I would walk through the demo by explaining:

1. the customer problem and the missing external signal
2. the exact user journeys I chose to monitor
3. why each check matters for different stakeholders
4. how this complements, rather than replaces, the existing observability stack
5. why the setup is a strong fit for a revenue-critical e-commerce flow

## Final positioning

This MVP is intentionally focused and realistic. It demonstrates that I understand both the technical and business dimensions of observability and can tailor a monitoring story to a prospect’s actual goals.
