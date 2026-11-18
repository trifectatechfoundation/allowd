# Policy on the use of generative AI

allowd is funded by [NLnet], and follows version 1.1 of
[its policy on the use of generative AI][nlnet-policy]. On top of that, contributors to allowd
agree to the following.

## Communication

Communication and documentation, comments included, are exclusively between humans. If you feel
the need to copy the output of an LLM into a comment, clearly flag it as such.

## Code

- LLMs may be used to write code anywhere in allowd, except for `polkit-agent-helper`. We will
  revisit this once we get to implementing it.
- We prefer security-critical code paths to be written by humans, with AI review if desired.
- Disclose the use of LLMs in commit messages, with an `Assisted-by:` trailer that mentions the
  name and version of the model, and links to the session or interaction, or in some other way
  you prefer.

## Reviews

- Pull requests must have been self-reviewed by their author, who also takes all the
  responsibility for the changes.
- Self-review with AI is welcome, but don't throw AI reviews at other contributors unless
  communicated beforehand. You can ask on the pull request whether they'd be okay with it.
- Zeeshan Ali Khan may have an LLM review a pull request directly, but does the first round of
  reviewing its comments, and rephrases them when necessary. We will revisit this later.

[NLnet]: https://nlnet.nl/project/allowd/
[nlnet-policy]: https://nlnet.nl/foundation/policies/generativeAI/1.1/
