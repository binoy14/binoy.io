---
name: using-git-spice
description: Use for any PR workflow — creating a branch, opening or updating a PR, and especially stacking related changes into a series of dependent PRs. Triggers whenever the user wants to start a branch, open/submit a PR, "split this into a stack", or mentions git-spice, gs, or stacked PRs/CRs. Covers the non-interactive flags agents need to avoid TTY prompts.
metadata:
  author: Binoy Patel
  version: '1.0.0'
---

# Using git-spice (`gs`)

git-spice is a CLI for managing **stacks of branches**, each branch building on the one below it, and submitting each as its own PR. The binary is `git-spice`; the conventional alias is `gs`. Docs: https://abhinav.github.io/git-spice/

## Core mental model

- **trunk**: the integration branch (`main`/`master`). The bottom of every stack.
- **stack**: a chain `trunk → A → B → C` where each branch's base is the one below it.
- **downstack** of `B` = `[A]`. **upstack** of `B` = `[C]`. Submitting a branch creates/updates a PR targeting its base — so the PR for `B` targets `A`, not `trunk`.
- **restack** = rebase a branch onto its base. Needed after editing a branch mid-stack so the upstack stays linear.

## What a PR stack is, and why it's worth it

A **PR stack** is a sequence of small PRs that each build on the one below it, instead of one large PR. A change like "refactor → add feature → add tests" becomes three branches (`trunk → A → B → C`) and three PRs, each reviewed on its own. The payoff:

- **Faster, better review** — each PR is small and focused on one logical step, so reviewers approve sooner and miss less.
- **No blocking** — keep building on top (branch C) while branch A is still in review, instead of waiting.
- **Clean history** — every branch is one logical change with its own PR, base, and description.

The reason people _avoid_ stacking with plain git is bookkeeping: tracking which branch is based on which, rebasing the whole chain when a lower branch changes, and retargeting PRs as branches merge. git-spice automates exactly that bookkeeping — which is why it's worth using even when a change is small.

## When to use this skill

**Default to `gs` for all PR work — even a single, self-contained PR.** Creating a branch with `gs branch create` and submitting with `gs branch submit` costs nothing over plain git, and it means the moment a second dependent change appears you already have a tracked stack instead of hand-rebased branches. Reach for `gs` whenever you'd otherwise run `git checkout -b`, `git push` a feature branch, or open a PR by hand.

It becomes essential (not just convenient) when:

- The user asks to split work into multiple dependent PRs.
- A change is too large for one PR but has a natural order (refactor → feature → tests).
- A request mentions "stacked PR", "stacked diff", "PR chain", or "split this into a stack".
- The user already uses `gs`/git-spice.

Don't use only when you lack push access to the upstream (git-spice must push every branch in the stack — see Gotchas); there, fall back to plain git.

## CRITICAL: non-interactive use

`gs` prompts interactively by default. In an agent shell that has no TTY, prompts hang the command. Always either:

1. Pass `--no-prompt` globally **and** supply every required value via flags, or
2. Use commands that don't need interactive input (most navigation/restack commands).

For submissions specifically, use `--fill` (read PR title/body from the commit) **and** `--no-prompt`:

```
gs --no-prompt stack submit --fill                 # whole stack
gs --no-prompt branch submit --title T --body B    # one branch, explicit metadata
gs --no-prompt stack submit --fill --draft         # draft all
gs --no-prompt stack submit --dry-run              # preview without pushing
```

If `gs` returns a prompt error, you forgot `--no-prompt` or a required flag. Don't retry blindly — read the error and supply what's missing.

## First-time setup in a repo

Run **once per repo** before any other `gs` command:

```
gs auth login                # one-time per host; persists across repos
gs --no-prompt repo init --trunk main --remote origin
```

`auth login` needs a browser/TTY — if not already done, ask the user to run it.

## Workflow: build a stack

```
# from trunk:
git checkout main
git pull

# stage changes for branch 1, then:
gs --no-prompt branch create feat-a -m "feat: A"

# stage changes for branch 2 (on top of A):
gs --no-prompt branch create feat-b -m "feat: B"

# stage changes for branch 3:
gs --no-prompt branch create feat-c -m "feat: C"

gs log short                 # visualize the stack
```

`branch create` commits staged changes onto a new branch whose base is the current branch. With nothing staged it creates an empty commit — usually not what you want; stage first.

**Commit bodies matter for `--fill`.** `gs stack submit --fill` uses the commit subject as the PR title and the commit body as the PR body. If you only pass `-m "subject"`, the PR body is empty.

**`gs`'s `-m` is NOT git's `-m`.** Unlike `git commit` (where repeated `-m` flags concatenate into separate paragraphs), git-spice's `-m/--message` is a single scalar — passing it twice keeps only the **last** value and silently drops the subject. Verified: `gs branch create x -m "SUBJECT" -m "BODY"` produces a commit whose entire message is `BODY`. To give a branch a subject + body, use one of:

```
# single -m with embedded newlines (subject, blank line, body):
gs --no-prompt branch create feat-a -m "feat: add A

Implements A so that follow-up branches can build on it."

# or read the message from a file:
gs --no-prompt branch create feat-a -F /tmp/msg.txt
```

Pre-commit hooks (husky, lint-staged, etc.) run normally on each `gs branch create` / `gs commit *` because `gs` shells out to `git commit`. If a hook fails the branch is not created. Fix the hook failure and re-run, or use `--no-verify` to bypass (same semantics as `git commit --no-verify`) — but only when the user has asked you to skip hooks.

To insert a branch into the middle of an existing stack, check out the spot and use `--insert`:

```
gs branch checkout feat-a
gs --no-prompt branch create --insert feat-a2 -m "feat: A2"
```

## Workflow: submit as stacked PRs

```
gs --no-prompt stack submit --fill
```

This pushes every branch and opens/updates a PR per branch, each targeting the branch below. PR descriptions get a navigation comment linking the stack. Re-running is **idempotent** — existing PRs are updated, not duplicated.

Variants:

- `gs --no-prompt downstack submit --fill` — submit current branch and everything below it (skip upstack work in progress).
- `gs --no-prompt branch submit --title T --body B` — submit only the current branch.
- Add `--update-only` to update existing PRs without creating new ones for unsubmitted branches.

**Check for a PR template first.** Before submitting, look for a repo PR template — `.github/PULL_REQUEST_TEMPLATE.md`, `.github/pull_request_template.md`, `.github/PULL_REQUEST_TEMPLATE/*.md` (multiple choices), or the same names at repo root / under `docs/`. git-spice _does_ discover these (`spice.submit.template`), but it only pre-fills them in the **interactive editor** — which hangs under `--no-prompt`. And `--fill` ignores the template entirely (it fills body from the commit message). So when a template exists and you're non-interactive:

```
# fill the template's sections with real content, then pass it as the body.
# there is no --body-file flag — only scalar --title/--body — so read the file inline:
gs --no-prompt branch submit \
  --title "feat: add A" \
  --body "$(cat /tmp/pr-body.md)"
```

Fill in every template section (Description, What to review, Testing, etc.) rather than submitting the raw template with empty comments. Drop `--fill` whenever you supply `--body`. For a multi-branch stack each PR needs its own filled body, so submit branches individually with `branch submit` rather than one blanket `stack submit --fill`.

**Verify the stack after submit.** `gs` returns URLs in its log output, but to confirm each PR targets the correct base, use `gh`:

```
gh pr view <num> --json number,headRefName,baseRefName,url
```

For a 3-PR stack, the bottom PR's base should be trunk; each PR above should target the branch directly below it. If a PR targets trunk when it shouldn't, the branch wasn't tracked correctly — run `gs branch track --base <correct-base>` on that branch and re-submit.

## Workflow: update mid-stack

Edit a branch that's not on top, then propagate:

```
gs branch checkout feat-a
# make edits, stage them
gs --no-prompt commit amend             # or: commit create -m "..."
gs --no-prompt stack restack            # rebase feat-b, feat-c onto new feat-a
gs --no-prompt stack submit --fill      # force-push only what changed
```

`stack restack` is safe to run repeatedly. If a rebase hits a conflict, `gs` stops and tells you. Resolve it like a normal git rebase, then:

```
# resolve files, `git add` them, then:
gs rebase continue
# or to bail entirely:
gs rebase abort
```

Do **not** run plain `git rebase --continue` mid-`gs` operation — `gs` tracks extra state that `git rebase --continue` skips.

## Workflow: sync after merges

After PRs land on trunk, do this **per merge** (merge bottom-up, one at a time):

```
gh pr merge <N> --squash --delete-branch
gs --no-prompt repo sync --restack         # pull trunk, prune merged branches, restack upstack
gs --no-prompt stack submit --fill -u      # update remaining PRs (force-push + retarget); -u skips closed PRs
```

The `--restack` flag on `repo sync` does both pulling and rebasing in one shot. Without it you have to follow with `gs --no-prompt stack restack`.

### Merging a stack of PRs cleanly

To merge the entire stack, repeat the per-merge block above for each PR from the bottom up. Two specific behaviors to expect:

**GitHub auto-retargets the next PR most of the time.** When you merge PR #N at the bottom of the stack, GitHub usually retargets PR #N+1's base from the deleted branch to the merge commit's base (often `main`). The skill workflow then force-pushes the rebased commits via `gs stack submit -u` so the diff is accurate.

**Sometimes GitHub closes (does not retarget) the next PR instead.** This happens occasionally — especially when merging several stacked PRs in quick succession — and there's no public API to predict it. Symptoms: `gs repo sync` logs `WRN <branch>: #<N> was closed but not merged`, and a subsequent `gs stack submit --fill -u` says `Ignoring CR #<N> as it was closed`. GitHub also refuses to reopen a PR whose base branch was deleted (`Could not open the pull request`). Recovery:

```
gs --no-prompt stack submit --fill          # drop -u so gs opens a NEW PR for the orphaned branch
```

`gs` detects the closed PR and creates a fresh one against the current trunk. The closed PR stays closed; mention this in the new PR's description if reviewers need the history.

## Quick reference

| Intent                                      | Command                                                                              | Shorthand                               |
| ------------------------------------------- | ------------------------------------------------------------------------------------ | --------------------------------------- |
| Init repo                                   | `gs repo init --trunk main --remote origin`                                          | `gs ri`                                 |
| Track existing branch                       | `gs branch track`                                                                    | `gs btr`                                |
| Create stacked branch                       | `gs branch create <name> -m "msg"`                                                   | `gs bc`                                 |
| Insert into middle                          | `gs branch create --insert <name>`                                                   | —                                       |
| Visualize stack                             | `gs log short` / `gs log long`                                                       | `gs ls` / `gs ll`                       |
| Navigate                                    | `gs up` / `gs down` / `gs top` / `gs bottom` / `gs trunk`                            | `gs u` / `gs d` / `gs U` / `gs D`       |
| Checkout branch                             | `gs branch checkout <name>`                                                          | `gs bco`                                |
| Restack one / upstack / whole               | `gs branch restack` / `gs upstack restack` / `gs stack restack`                      | `gs br` / `gs usr` / `gs sr`            |
| Submit branch / upstack / downstack / stack | `gs branch submit` / `gs upstack submit` / `gs downstack submit` / `gs stack submit` | `gs bs` / `gs uss` / `gs dss` / `gs ss` |
| Sync trunk + prune merged                   | `gs repo sync`                                                                       | `gs rs`                                 |
| Resume / abort rebase                       | `gs rebase continue` / `gs rebase abort`                                             | `gs rbc` / `gs rba`                     |
| Move branch onto new base                   | `gs branch onto <base>`                                                              | `gs bon`                                |
| Delete branch (keep stack linear)           | `gs branch delete <name>`                                                            | `gs bd`                                 |

Full reference: `gs <cmd> --help` always works and lists every flag. Shorthand pattern: the bits in parentheses joined together (`gs branch (b) create (c)` → `gs bc`).

## Key flags (memorize these)

- `--no-prompt` (global): never prompt for missing values; required for agent use.
- `-C DIR` (global): run as if in DIR — useful when not cd'd into the repo.
- `--fill` / `-c`: PR title and body from commit messages (on all `*submit` commands).
- `--draft` / `--no-draft`: explicit draft state. Without it, new PR drafts default to `false` and existing PRs are left unchanged.
- `--dry-run` / `-n`: preview submit without pushing.
- `--update-only` / `-u`: don't create new PRs, only update existing ones.
- `--no-publish`: push branches without opening PRs.
- `--branch <name>`: target a specific branch instead of the current one (`stack submit`, `branch submit`, etc.).

## Common mistakes

| Mistake                                         | Fix                                                                                                                                                                                                                                                                                   |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Hangs forever on submit                         | Missing `--no-prompt` or `--fill`. Cancel; re-run with both.                                                                                                                                                                                                                          |
| `gs branch create` makes an empty commit        | Stage changes first (`git add ...`), or pass `-a`.                                                                                                                                                                                                                                    |
| Edited mid-stack branch; upstack PRs now wrong  | Run `gs stack restack`, then `gs stack submit --fill`.                                                                                                                                                                                                                                |
| Rebase conflict during `gs stack restack`       | Resolve files, `git add`, then `gs rebase continue` (NOT `git rebase --continue`).                                                                                                                                                                                                    |
| PR opened against `main` instead of base branch | You ran `gs branch submit` from a branch whose base is `main` — that's expected for the bottom of the stack. For higher branches, ensure each was created via `gs branch create` (so it has a tracked base), not plain `git checkout -b`. Use `gs branch track --base <base>` to fix. |
| "Cannot rebase onto multiple branches."         | Background git fetcher (IDE/shell plugin) raced `gs`. Retry once; if persistent, disable autofetch.                                                                                                                                                                                   |
| Forked repo: only trunk-based branches get PRs  | Fork mode (v0.28+) only opens PRs for branches based on trunk. For a fully stacked series, request push access to upstream.                                                                                                                                                           |

## Gotchas worth knowing before you start

- **Push access to upstream is required** for stacked PRs — each branch must be pushed to the same repo the PRs target. No way around this on forks without write access.
- **Squash-merge invalidates upstack history.** After a squash-merge, run `gs repo sync --restack` before continuing.
- **Base-branch changes can dismiss approvals** on some repos. If a reviewer approves a mid-stack PR and the branch below it merges (causing the base to change), approvals may be dismissed. Repo-level setting, not a `gs` bug.
- **`gs` does not call `git push` directly for submit** — it always pushes via its own logic. Don't `git push` branches manually; let `gs *submit` do it.
- **Per-project CLAUDE.md rules still apply.** If a repo forbids direct commits to `main`, `gs` respects that — every branch you create with `gs branch create` is a feature branch.
