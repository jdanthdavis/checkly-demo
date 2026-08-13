# Rehearsal Script

## 30-minute walkthrough

### 1. Startup (2–3 minutes)

> “Thanks for meeting with me. I put together a small Checkly MVP focused on the customer journey for this e-commerce demo.”

> “The prospect already has logs, metrics, and traces, but they are missing external validation of the real customer experience.”

### 2. Problem statement (4–5 minutes)

> “The real blind spot is not whether internal services are reporting healthy metrics; it is whether a customer can still browse, add to cart, and complete checkout.”

> “That’s where synthetic monitoring adds value.”

### 3. What I built (8–10 minutes)

> “I focused on the most important flows: storefront health, product discovery, and checkout conversion.”

> “The first check validates the storefront loads successfully. The second validates that a customer can search or browse a product. The third validates the checkout path, which is the most revenue-critical flow in the app.”

> “I also included an API check for the catalog or recommendation layer to separate UI issues from backend dependency problems.”

### 4. Why it matters to the personas (7–8 minutes)

> “For a VP of engineering, this reduces customer trust risk and protects conversion.”

> “For an engineering manager, it creates a more actionable signal and helps prioritize issues faster.”

> “For SREs, this extends monitoring beyond internal telemetry into customer experience.”

> “For developers and QA, it gives confidence that key user flows remain healthy after changes.”

### 5. Closing (3–5 minutes)

> “This is intentionally a focused setup, not a broad platform demo. The point is to demonstrate the value of synthetic monitoring for the customer-critical path.”

> “If we were scaling this further, I’d expand around high-conversion journeys, alerting, and customer-facing performance thresholds.”

## Interview Q&A cues

### Why these checks?

> “Because these are the flows that matter most to a customer and to the business. I wanted to validate the path that directly affects conversion.”

### Why not just look at logs and metrics?

> “Because internal telemetry tells us what the system is doing, not whether the customer can still complete the journey.”

### What would you do next?

> “I’d expand the synthetic coverage to more critical funnels, add alert routing, and tune thresholds around customer-facing performance.”

### How do you use AI?

> “I used AI to accelerate understanding of the demo architecture and structure the rationale for the checks, then validated the recommendations against the actual customer scenario.”
