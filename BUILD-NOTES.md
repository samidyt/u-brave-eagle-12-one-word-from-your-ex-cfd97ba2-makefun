# Build notes — One Word From Your Ex

- Bounty: https://make.fun/bounty/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2
- Prize: $2, 1 winner takes all. Deadline Sat 28 Nov 2026 19:00 WIB.
- Submissions at build time: 340 (grew from 37 within hours — fast flood).
- Kit: ~/workspace/makefun/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2-kit/
- Repo: https://github.com/samidyt/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2-makefun

## Word choice

**Project** (7 chars, 1 word).

Why this word, against the judge's brief (funniest + most painfully honest,
in order):
1. Exactly one word an ex would use: "He was a project" is a sentence an ex
   actually says. It is a noun, not another adjective in a pile of
   "selfish / immature / lazy" entries, so it reframes the whole
   relationship instead of grading it.
2. Funny through surprise: the turn is that you were not a partner, you were
   a renovation — months of attempted fixes, then quietly abandoned.
3. Stings with recognition: it is painfully true and the entrant plainly
   knows it. Everyone has been someone's project, or dated one.
4. Lands instantly, no explanation needed, and no near synonym keeps the
   edge ("Assignment" is a chore, "Homework" is weaker, "Draft" is poetic
   but not something an ex would say out loud).
5. Relatable: the "fix him" dynamic is one of the most repeated
   post-breakup stories there is.

Alternatives considered and rejected:
- "Draft" — same noun-reframe family, but poetic rather than spoken;
  an ex says "project", not "draft".
- "Rebound" — strong ex-voice noun, but about timing/role rather than you,
  and a very common joke (likely crowded).
- "Lesson" — relatable but soft, less funny.
- "Phase" — decent, but "phase" implies she outgrew you; "project"
  implies she tried to fix you and failed, which stings more.
- "Potential", "Practice", "Almost", "Unfinished", "Placeholder" — all
  appeared as titles among the first submissions, so avoided as likely
  taken/duplicated.

## Build passes (3, all in the repo clone)

1. **Pass 1:** `main.ts` v1 — writes `Project` to `entry.txt`;
   `LICENSE` (MIT), `README.md` (3 live make.fun badges + rationale),
   `.makefun/owner.json`, `.gitignore` written.
2. **Pass 2:** hardened `main.ts` with a gate self-check — throws instead of
   writing if the word is not 1–24 chars or contains whitespace.
3. **Pass 3:** sharpened the README rationale wording (added the
   "abandoned the worksite" beat); word choice re-examined against the
   alternatives and kept.

## Verification evidence

- **No local grader exists for this bounty** — RULES.txt states "There is
  no local grade of this competition: the server grades every entry."
  Verified locally instead, per the task:
- **Run 1:** `MAKEFUN_OUTPUT_DIR=/tmp/ex-out1 node main.ts` →
  `entry ok: 7 chars`; `entry.txt` = `Project`, 7 bytes.
- **Run 2:** `MAKEFUN_OUTPUT_DIR=/tmp/ex-out2 node main.ts` → identical.
- **Byte-identical:** `sha256sum` both runs =
  `985959785319747668373cc6dee294b11db782b03cdd90a2851fbdc0637c6b7b`;
  `cmp` → `BYTE-IDENTICAL`.
- **Gate check (Python, read as UTF-8):** 7 chars, 1 word, not
  whitespace-only → `GATE CHECK: PASS`.
- Node v24.22.1 locally (grader runs Node 22.23.4; `main.ts` uses only
  node:fs, no network, no dependencies).
- GitHub repo creation: `gh repo create` succeeded on first try at ~19:24
  WIB — the earlier rate limit ("created too many repositories, too
  quickly", hit ~18:51) had already cleared.

## Left undone (main agent's job — NOT done here)

- [ ] Pre-submit `check` and `submit` — main agent's flow (signs with the
  paired keypair; entry_message + entry_signature as in prior submits).
- [ ] Record in `~/workspace/makefun/submissions.md` after submit.
