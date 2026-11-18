# Contributing to allowd

We welcome contributions from everyone in the form of suggestions, bug reports, pull requests, and
feedback. This document gives some guidance if you are thinking of helping us.

Please reach out in a GitHub issue, or in the
[#allowd:matrix.org](https://matrix.to/#/#allowd:matrix.org) Matrix room, if we can do anything to
help you contribute. Matrix is for anything ephemeral, while design decisions are discussed in
GitHub issues, where everyone can find them later.

## Submitting bug reports and feature requests

You can create issues [here](https://github.com/trifectatechfoundation/allowd/issues/new). When
reporting a bug or asking for help, please include enough details so that the people helping you
can reproduce the behavior you are seeing. For some tips on how to approach this, read about how to
produce a [Minimal, Complete, and Verifiable Example](https://stackoverflow.com/help/mcve).

When making a feature request, please make it clear what problem you intend to solve with the
feature, any ideas for how allowd could support solving that problem, any possible alternatives,
and any disadvantages.

For security issues, see [SECURITY.md](SECURITY.md).

## Submitting pull requests

If you are working on something, there should be an issue for it, so:

1. If an issue doesn't exist yet, create it.
2. Work on a local clone, and push often to a branch of your fork.
3. After the first push of a new branch, open a draft pull request, and link it to the issue
   (e.g. with `Closes #123` in its description).
4. When you feel that the work is ready for review, take the pull request out of draft, and make
   sure that its description briefly summarizes the changes, to aid the reviewer.
5. Someone else reviews it and merges it, with a merge commit, which closes the linked issue.
   There's no need to rebase it onto `main`, unless it conflicts with `main`.

Every non-trivial pull request closes one or more issues. Trivial ones, such as those that fix a
line of `Cargo.toml` or drop a comment that should have been removed, can skip the issue.

### Commits

* We prefer a clean history of atomic commits. Please read
  [this excellent blog post](https://www.aleksandrhovhannisyan.com/blog/atomic-git-commits/) for
  more information, including the rationale. Don't leave "WIP" and "fixup" commits in a pull
  request that's ready for review: squash them into the commits that they belong to.
* Commit messages follow the [Conventional Commits](https://www.conventionalcommits.org/) format,
  which CI checks: `<type>: <description>`, such as `fix: reject unknown action IDs`, with the
  description starting in lowercase. A `!` after the type, as in `feat!: ...`, marks a breaking
  change. The changelog is generated from these, and lists the commits of these types:

  | Type       | For                                              | Changelog     |
  |------------|--------------------------------------------------|---------------|
  | `feat`     | New features                                     | Added         |
  | `fix`      | Bug fixes                                        | Fixed         |
  | `perf`     | Performance improvements                         | Performance   |
  | `refactor` | Changes to the code that keep its behavior       | Changed       |
  | `docs`     | Documentation                                    | Documentation |
  | `revert`   | Reverts of earlier commits                       | Reverted      |
  | `test`     | Tests                                            |               |
  | `ci`       | CI                                               |               |
  | `build`    | The build setup, such as `Cargo.toml`            |               |
  | `style`    | Formatting                                       |               |
  | `chore`    | Anything else, such as releases                  |               |

  Dependency updates are `chore(deps): ...`, which the changelog lists under Dependencies.
* Otherwise, please try your best to follow
  [these guidelines](https://handbook.gnome.org/development/commit-messages.html) for commit
  messages.
* Add details to each commit about the changes it contains. The pull request description is for
  summarizing the overall changes of the pull request, while commit messages are for describing
  the specific changes of the commit in question.
* When addressing review comments, fix the existing commits of the pull request (rather than
  adding "incorporate feedback" commits) and force push (as in `git push -f`) to your branch. You
  may find [`git-absorb`](https://github.com/tummychow/git-absorb) and
  [`git-revise`](https://github.com/mystor/git-revise) extremely useful, especially if you're not
  very familiar with interactive rebasing and modifying commits in git.
* Be hesitant about rebasing onto `main` in the middle of a review, unless you say so on the pull
  request.

### Code layout

Within a module, order items top-down, [as rustls does](https://github.com/rustls/rustls/blob/main/CONTRIBUTING.md#top-down-ordering-within-modules):
items depend on items defined *below* them, not above. In practice: the public API sits near the
top of the file, private helpers below the code that calls them, simple `const`s below their users,
and `#[cfg(test)] mod tests` at the very bottom.

### Use of generative AI

Please read our [policy on the use of generative AI](AI_POLICY.md) before contributing.

### Legal notice

allowd is licensed under the [GNU General Public License, version 2 or later](LICENSE). When
contributing to this project, you **implicitly** declare that:

* you have the necessary rights to the content, and
* you agree to providing the content under the project's license.

If your contribution is derived from other software, that software must be under a license that
allows its inclusion in allowd, and your contribution must clearly attribute it.

## Reviews

We are pragmatic about reviews: a pull request needs a single approving review. At this stage of
the project, an approval doesn't mean "I have verified that I see no concerns whatsoever and am
committing to this being correct".

A review is not the time to reconsider design decisions that were discussed earlier, so a review
only considers:

* whether the pull request really fixes an issue,
* whether the code introduces new issues to be fixed,
* whether there's a nicer way to do the same thing, and
* its impact on security.

If a pull request raises new design questions, but otherwise brings us closer to a milestone,
merge it, and open an issue to discuss the design questions later. Likewise, when you want to see
changes, consider whether they must be made now, or can be made in a follow-up pull request.

Give preference to reviewing others' work over working on your own issues.

As a reviewer:

* Only consider the changes made since `main`, or since your last review.
* Try to review the whole pull request at once, to minimize the back and forth.
* If you have a lot of non-trivial objections or questions, consider pair programming or setting
  up a meeting.

As the author:

* You can add comments of your own to the pull request, to flag potential issues.

Typically, the author of a pull request resolves the review comments on it, with two exceptions:

* If someone's pull request was mergeable (no conflicts, CI passed), but got into an unstable
  state because of another pull request that you reviewed and approved, try to resolve the issue
  and bring their pull request back into a mergeable state.
* If you can easily fix a minor style issue (such as with `cargo fmt`), you may push a commit that
  does so yourself.

## Running the test suite

We encourage you to check that the test suite passes locally before submitting a pull request with
your changes. If anything does not pass, typically it will be easier to iterate and fix it locally
than waiting for the CI servers to run tests for you.

```sh
cargo test
```

Also please ensure that code is formatted correctly by running:

```sh
cargo +nightly fmt --all
```

and clippy doesn't see anything wrong with the code:

```sh
cargo clippy --all-targets -- -D warnings
```

Please note that there are times when clippy is wrong and you know what you are doing. In such
cases, it's acceptable to tell clippy to
[ignore the specific error or warning in the code](https://github.com/rust-lang/rust-clippy#allowingdenying-lints).

If you intend to contribute often or think that's very likely, we recommend you set up the git
hook scripts contained within this repository. You can enable them with:

```sh
cp .githooks/* .git/hooks/
```

## Conduct

In all allowd-related forums, we follow the
[Rust Code of Conduct](https://www.rust-lang.org/policies/code-of-conduct).
