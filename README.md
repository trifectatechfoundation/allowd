<p align="center">
  <a href="https://github.com/trifectatechfoundation/allowd/actions/workflows/ci.yml">
    <img alt="Build Status"
      src="https://github.com/trifectatechfoundation/allowd/actions/workflows/ci.yml/badge.svg">
  </a>
</p>

<h1 align="center">allowd</h1>

An authorization daemon for Linux, written in Rust, that serves the D-Bus interfaces of [polkit].
allowd (always lowercase, pronounced "allow-d") aims to replace polkit's daemon without its
JavaScript engine, with policy rules that are simpler to write and to evaluate.

## Status

allowd is in early development: it doesn't do anything useful yet.

## The plan

- Serve the D-Bus interfaces of polkit, both the one for the programs that need authorization and
  the one for authentication agents, so that allowd works with the existing clients of polkit.
- Replace polkit's JavaScript rules with a simpler, declarative format, designed from an analysis
  of existing rules, and evaluate requests against it.
- Study how existing rules could be migrated to the new format automatically.

## Building

```bash
cargo build --release
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). You can also reach us in the
[#allowd:matrix.org](https://matrix.to/#/#allowd:matrix.org) Matrix room.

## Use of generative AI

Some of the contributors to allowd use LLM-based assistants, for writing code and for reviewing
changes, and disclose it in the commits that an LLM helped with. Our
[policy on the use of generative AI](AI_POLICY.md) has the details, and builds on version 1.1 of
[NLnet's policy][nlnet-policy].

## License

[GNU General Public License, version 2 or later](LICENSE) (`GPL-2.0-or-later`).

## Funding

allowd is developed by the [Trifecta Tech Foundation] and Zeeshan Ali Khan.

This project was funded through the [NGI0 Commons Fund], a fund established by [NLnet] with
financial support from the European Commission's [Next Generation Internet] programme, under the
aegis of DG Communications Networks, Content and Technology under grant agreement No 101135429.
Additional funding is made available by the Swiss State Secretariat for Education, Research and
Innovation (SERI).

[polkit]: https://github.com/polkit-org/polkit
[nlnet-policy]: https://nlnet.nl/foundation/policies/generativeAI/1.1/
[Trifecta Tech Foundation]: https://trifectatech.org/
[NGI0 Commons Fund]: https://nlnet.nl/commonsfund/
[NLnet]: https://nlnet.nl/project/allowd/
[Next Generation Internet]: https://ngi.eu/
