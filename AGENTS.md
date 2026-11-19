# AGENTS.md

This file provides guidance to AI coding agents when working with code in this repository.

Follow [`CONTRIBUTING.md`](CONTRIBUTING.md) for the contribution conventions, and
[`AI_POLICY.md`](AI_POLICY.md) for the rules on the use of AI, which apply to agents as much as to
the humans they work for. Above all:

- **Never write code for `polkit-agent-helper`**: the AI policy rules it out.
- **Keep commit messages concise**: a precise summary line and, where it isn't obvious, a short
  body on what changed and why. The human author rewords most of them, so leave out long
  explanations, and lists of the files or items that changed.
- **Commit messages follow the Conventional Commits**, with the description in lowercase, as
  `CONTRIBUTING.md` describes. Use `chore` for AI-workflow artifacts, such as design docs and
  implementation plans, which keeps them out of the changelog.
- **Disclose the AI's help in every commit**, with these trailers and no `Co-Authored-By`:

  ```
  Assisted-by: <model name> (<model ID>)
  Claude-Session: <link to the session>
  ```

  For example, `Assisted-by: Claude Opus 5.5 (claude-opus-5-5)`. Use the tool's own trailer for
  the session link if it isn't Claude Code. Pull request descriptions link to the session as well.
  The project's funder, NLnet, requires the sessions to be publicly visible.

## Project overview

allowd is an authorization daemon for Linux, a reimplementation of [polkit] in Rust. It's to serve
polkit's D-Bus interfaces, so that it works with polkit's existing clients and authentication
agents, but evaluate requests against declarative rules, rather than polkit's JavaScript ones.
allowd is never capitalized.

The crate is a single binary, `allowd` (`src/main.rs`), for now; polkit's helper binaries will
follow. It runs on [tokio], and talks D-Bus through [zbus], with its tokio backend.

[polkit]: https://github.com/polkit-org/polkit
[tokio]: https://tokio.rs
[zbus]: https://github.com/z-galaxy/zbus

## Development commands

```bash
# Build
cargo build
cargo build --release

# Test
cargo test

# Format (nightly rustfmt) and lint
cargo +nightly fmt --all
cargo clippy --all-targets -- -D warnings
```

The MSRV is the `rust-version` of `Cargo.toml`, which the `MSRV` of `.github/workflows/ci.yml`
must match.
