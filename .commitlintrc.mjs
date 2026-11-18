export default {
    extends: ["@commitlint/config-conventional"],
    // Dependabot puts the release notes of the dependencies that it updates in the bodies of its
    // commits, whose lines are often longer than the conventional config allows.
    ignores: [(message) => message.includes("Signed-off-by: dependabot[bot]")],
};
