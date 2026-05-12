# Contributing

## Git workflow

- Work on the branch specified for the task.
- Create new commits rather than amending.
- Never force-push or skip hooks without explicit permission.
- Do not open a pull request unless explicitly asked.
- Base new PRs on the latest main branch.

## Conventional commits

All commit subjects must follow [Conventional Commits](https://www.conventionalcommits.org/):

```text
<type>(<optional scope>): <imperative summary>
```

**Allowed types:** `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`

**Scopes:** match the affected area — `rules`, `plugins`, `deps`, `config`, etc. Omit when global.

- Subject: ≤72 characters, lowercase, no trailing period.
- Body: explain the *why* when the diff alone doesn't.
- Breaking changes: use `!` suffix and a `BREAKING CHANGE:` footer for config API changes or dropped peer dep support.

## Branch naming

```text
<type>/<short-kebab-summary>
```

Examples: `feat/add-react-hooks-rules`, `fix/perfectionist-sort-order`, `chore/bump-deps`

- ≤40 characters, lowercase, hyphen-separated.
- Reference the affected area, not a ticket number.

## Releasing

Update the version in `package.json` following [semver](https://semver.org/):

- **patch** — rule tweaks, dep bumps with no config API changes.
- **minor** — new rules or plugins added in a backwards-compatible way.
- **major** — breaking changes to the exported config shape or dropped peer dep support.
