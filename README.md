# Checkly Customer Solutions Engineer Challenge 2026

This repository contains the customer-facing Checkly MVP I would present for the Customer Solutions Engineer challenge using the OpenTelemetry Astronomy Shop as the demo application.

## Summary

The prospect already has strong internal observability with metrics, logs, and traces, but they do not have synthetic monitoring. The key gap is customer-visible validation: they need a way to confirm that the critical buying journey still works before users report a problem.

This project focuses on a minimal but credible Checkly setup for an e-commerce use case:

- storefront health
- product discovery and browsing
- checkout conversion coverage
- critical backend/API health checks
- business rationale for synthetic monitoring

## What is in this repo

- docs/checkly-demo-plan.md — the monitoring strategy and rationale
- docs/interview-story.md — the 30-minute customer walkthrough narrative
- docs/rehearsal-script.md — an interview-ready script for walkthrough and Q&A
- checkly/astronomy_shop_checks.json — structured check definition for a Checkly MVP
- checkly/tests/ — lightweight Playwright examples for browser-based validation

## Recommended MVP

This is intentionally small, customer-focused, and defendable:

1. Browser check: Storefront loads successfully
2. Browser check: Product search and browsing continue to work
3. Browser check: Add-to-cart and checkout reach the expected state
4. API check: Product catalog or recommendation service stays healthy
5. Optional alert: A critical flow exceeds an acceptable latency threshold

This is enough to show business relevance without overbuilding a demo system.

## Why this fits the challenge

The challenge is not asking for a new app or a large feature build. It is asking for a small, use-case-driven Checkly setup against the OTel Demo that a prospect can understand and value.

The core story is:

- the customer already has internal telemetry
- they still miss customer-facing failures until users notice them
- Checkly adds an external signal on revenue-critical paths
- that matters most for storefront and checkout health

## Persona framing

This setup is designed to be explained to mixed stakeholders:

- Sr VP Engineering: protects conversion and customer trust
- Engineering Manager: improves triage and visibility into the critical path
- SRE: adds external monitoring beyond internal telemetry
- Developer: validates release confidence and product health
- Quality Engineer: tests the end-to-end journey that matters most

## GitHub submission intent

This repo is best viewed as a planning and presentation artifact for a real Checkly account setup. It is not meant to replace the live app itself, but to demonstrate how I would position Checkly to a customer with an existing observability stack.

## Suggested next steps

- run the OpenTelemetry Astronomy Shop locally
- validate selectors and URLs against the live app
- mirror this setup in a real Checkly account
- rehearse the walkthrough using the script in docs/rehearsal-script.md

## AI usage note

AI was used to help structure the approach, summarize the monitoring problem, and draft the customer narrative. The final decisions are grounded in the actual challenge scenario and the user-value story, not just generated output.
