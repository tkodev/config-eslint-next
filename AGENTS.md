# Agent Instructions

Guidance for Claude Code when working in this repository.

## What this repo is

A shared ESLint flat config package (`@tkodev/config-eslint-next`) for Next.js + TypeScript projects at tkodev. It exports a pre-composed set of ESLint rules covering Next.js, TypeScript, Prettier formatting, and import ordering via Perfectionist.

## Repository layout

```text
.
├── CLAUDE.md              # This file
├── CONTRIBUTING.md        # Contributor guide
├── README.md              # Installation and usage
├── eslint.config.mjs      # Main config export
├── eslint.config.d.mts    # Type declarations
├── example.ts             # Usage example / smoke test
├── package.json
└── pnpm-lock.yaml
```

## Documentation

- **Setup and usage:** [`README.md`](./README.md)
- Git and contribution rules. Must read: @CONTRIBUTING.md

## Working conventions

- Use `pnpm` (not npm or yarn) for all package operations.
- The package targets ESLint v9 flat config format — do not use legacy `.eslintrc` patterns.
- Peer dependencies (`eslint`, `next`, `prettier`, `typescript`) are provided by the consuming project and must not be bundled.
- Runtime dependencies (plugins, configs) go in `dependencies`, not `devDependencies`.
- Keep the exported config composable: consumers spread `...tkodevEslintConfig` or use `withTkodevConfig()`.

## Things to avoid

- Don't add rules that are project-specific — this config is shared across all tkodev Next.js projects.
- Don't pin dependency versions tightly; use `^` ranges to stay compatible with upstream updates.
- Don't introduce new plugins without updating `README.md` and verifying peer dep requirements.

## Git

- Do not sign commits or PRs as Claude.
- Do not include `claude.ai/code` session links, `Co-Authored-By: Claude` trailers, or any other "Generated with Claude Code" markers in commit messages or PR bodies.
- Do not open a pull request unless explicitly asked.

## Notes

This is a living document. Key learnings that durably improve how work gets done here should be added — but only when they genuinely belong as a best practice. Don't append notes or observations better captured in a commit message. Preserve the intent and structure of the document; if something doesn't fit cleanly, it probably doesn't belong here.
