# HACKATHON_CRITERIA.md

Mapping of BobFix to the "Build with purpose using IBM Bob 2.0" hackathon
requirements.

| Hackathon requirement | BobFix evidence |
|---|---|
| Specific developer workflow | Bug detection, test generation, and repair on a small Node.js codebase |
| Clearly defined problem | Manual bug detection and test writing is slow and easy to under-cover (see README problem statement) |
| Working prototype | Executable Node.js/Jest project — `npm install`, `npm test`, `npm run coverage` all work |
| IBM Bob IDE as core | Bob performs the analysis, test generation, diagnosis, and fixes described in `BOB_WORKFLOW.md` — not just an editor |
| Agent mode | Step 1 of `BOB_WORKFLOW.md` — repository analysis and planning |
| Parallel tasks | Step 2 — three modules investigated together |
| Subagents | Step 2 — dedicated calculator/user/order investigation tasks |
| Document/repository understanding | Step 1 — Bob reads source, tests, README, and dataset before acting |
| Reduced manual effort | Automated analysis and test generation vs. manual code reading (Step 3) |
| Reduced errors | Regression tests added for previously-uncovered buggy branches (Step 3–5) |
| Reduced rework | Explicit failure diagnosis before any fix is applied (Step 4) |
| Measurable impact | Manual-vs-Bob benchmark procedure and table in `README.md` |
| Own dataset | `dataset/bug_cases.json` — 10 original bug scenarios, see `DATA_SOURCES.md` |
| Bob evidence | Session screenshots checklist in `docs/bob-sessions/README.md` |

This project does not claim any capability that has not actually been
demonstrated by a real Bob session and captured as evidence.
