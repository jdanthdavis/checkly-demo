# Checkly setup for the Astronomy Shop

This directory contains a more realistic, customer-facing MVP for the Checkly challenge.

## Objective

The goal is to demonstrate that the prospect already has internal observability, but is still missing external validation of the customer experience. The Checkly setup should make that gap obvious and show how to close it.

## Recommended checks

### 1. Homepage / storefront availability

- Type: Browser check
- Purpose: confirm the storefront loads for a real user
- Why it matters: this is the first point where customers either convert or leave

### 2. Product discovery flow

- Type: Browser check
- Purpose: confirm users can browse or search for a product
- Why it matters: product discovery is fundamental to conversion in e-commerce

### 3. Add-to-cart and checkout flow

- Type: Browser check
- Purpose: verify the highest-value customer journey still works end-to-end
- Why it matters: this is the clearest proof that Checkly is protecting revenue-critical behavior

### 4. Catalog/API health

- Type: API check
- Purpose: validate the underlying catalog or recommendation service is healthy
- Why it matters: helps separate front-end problems from service-layer issues

## Suggested implementation approach

Use a small number of Playwright scripts to validate the critical flows. Keep the scripts deterministic and avoid overly brittle selectors.

## Interview narrative

The interview should not sound like a generic product demo. It should frame the setup around a real customer problem:

- they have metrics, logs, and traces
- they still miss customer-visible issues
- they need a synthetic signal on the most valuable user journeys
- Checkly gives them that signal without replacing their existing stack

## Implementation note

The example scripts in this folder are intentionally lightweight and designed as a starting point. They are meant to be adapted to the actual OTel demo URL and selectors once the app is running locally.
