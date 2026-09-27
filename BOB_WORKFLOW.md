# BOB_WORKFLOW.md

This file contains the exact workflow to perform inside **IBM Bob IDE** for the
BobFix demo. Follow the steps in order. Each step lists the exact prompt/task
to give Bob, what capability it demonstrates, and what to capture as evidence.

Do not skip steps. Do not fabricate outputs — perform each Bob session
yourself and save the session summary as a screenshot in
`docs/bob-sessions/` (see the checklist there).

---

## STEP 1 — Repository analysis (Bob Agent mode)

Open the `bobfix` folder as a project in IBM Bob IDE. Start a new Agent
session and give Bob this task:

```
Analyze this repository as a software debugging assistant.

Read the source files, existing tests, README, and dataset.

Identify the important functions, existing test coverage, likely bugs,
and missing edge-case tests.

Do not modify any files yet.

Create a concise debugging and testing plan.
```

**Demonstrates:** Agent mode, repository/document understanding.
**Capture:** Screenshot of Bob's analysis/plan → save as
`docs/bob-sessions/01-repository-analysis.png` (or similar).

---

## STEP 2 — Parallel investigation (subagents)

Ask Bob to split the investigation into three parallel tasks — one per
module. If Bob supports subagents/parallel tasks, invoke that capability
explicitly with this prompt:

```
Using parallel tasks/subagents, investigate the three source modules
independently and then combine the findings:

Task A: Analyze src/calculator.js
Task B: Analyze src/user.js
Task C: Analyze src/order.js

For each module, identify:
- possible bugs
- missing tests
- edge cases
- expected behavior

Combine the three sets of findings into one summary.
```

**Demonstrates:** Parallel tasks / subagents managing multiple related
developer tasks at once, not just one coding question.
**Capture:** Screenshot showing the parallel/subagent task breakdown →
save as `docs/bob-sessions/02-parallel-investigation.png`.

---

## STEP 3 — Generate tests

```
Based on your analysis, create tests for the highest-priority bugs and
missing edge cases described in dataset/bug_cases.json.

Do not blindly change the application code.

First create tests that expose incorrect behavior.

Run the tests after creating them.
```

**Demonstrates:** Test generation, test execution.
**Capture:** Screenshot of the generated tests and the (expected) failing
test run → save as `docs/bob-sessions/03-test-generation.png`.

**Note:** these new tests are expected to FAIL initially — that failure is
the evidence the bugs are real, not a mistake to avoid.

---

## STEP 4 — Diagnose failures

```
Analyze every failing test.

Determine whether the failure is caused by:
1. a genuine defect in the application,
2. an incorrect test,
3. an incorrect assumption,
4. or a configuration/environment issue.

Explain the reasoning before making changes.
```

**Demonstrates:** Debugging / root-cause reasoning.
**Capture:** Screenshot of Bob's diagnosis →
save as `docs/bob-sessions/04-failure-diagnosis.png`.

---

## STEP 5 — Fix bugs

```
Fix only genuine application defects discovered through the tests.

Keep the existing intended behavior unchanged.

After fixing each issue, rerun the relevant tests.
```

**Demonstrates:** Automated/assisted bug repair.
**Capture:** Screenshot of the fix + rerun →
save as `docs/bob-sessions/05-bug-fixing.png`.

---

## STEP 6 — Final verification and report

```
Run the complete Jest test suite and coverage report.

Verify that all tests pass and that the fixes did not introduce
regressions.

Generate a final report containing:
- bugs discovered
- bugs fixed
- tests added
- tests passed
- tests failed before fixes
- final test result
- coverage before
- coverage after
- development steps automated by the Bob workflow

Save the report as reports/final-report.md.

Do not fabricate any measurements — use the actual Jest output.
```

**Demonstrates:** Verification, regression safety, final reporting.
**Capture:** Screenshot of the final passing suite + coverage report →
save as `docs/bob-sessions/06-final-verification.png`.

---

## Baseline reference (for comparison only)

Before Bob makes any changes, the baseline state of this repository is:

- `npm test` → 9 tests, 9 passing (only happy-path cases)
- `npm run coverage` → ~95% statement coverage, ~50% branch coverage
  (the untested branches are exactly where the seeded bugs live)

Keep this baseline in mind when filling in `reports/final-report.md` and the
benchmark table in `README.md` — "before" numbers should match this baseline,
not be invented.
