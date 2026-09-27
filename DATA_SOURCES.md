# Data Sources

The file `dataset/bug_cases.json` is an **original dataset created specifically
for this hackathon project**. It is not sourced from any external dataset,
production system, client, or third party.

## What it contains

10 bug/test scenarios describing known defect behavior in the sample
application (`src/calculator.js`, `src/user.js`, `src/order.js`), each with:

- `id` — a unique bug identifier
- `module` — which source file the bug lives in
- `function` — which function is affected
- `scenario` — the input condition that triggers the bug
- `expected_behavior` — what the correct behavior should be
- `priority` — relative severity (`high` / `medium`)

## What it does NOT contain

- No personal information
- No client or customer information
- No confidential or proprietary business data
- No social-media data or scraped content

The scenarios were authored by hand to match intentional bugs seeded into the
sample application for demonstration purposes.
