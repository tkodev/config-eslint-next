# @tkodev/eslint-config-next

Shared ESLint flat config for Next.js + TypeScript projects at tkodev.

## What this repo is

A composable ESLint flat config package for Next.js projects. It bundles rules for Next.js, TypeScript, Prettier formatting, and import ordering via Perfectionist so consuming projects don't need to wire up each plugin individually.

## Tech stack

| Tool / Library                | Version / Notes                    |
|-------------------------------|------------------------------------|
| Node                          | 20+                                |
| pnpm                          | 9+                                 |
| ESLint                        | 9, flat config                     |
| eslint-config-next            | Next.js recommended rules          |
| eslint-plugin-perfectionist   | Import and member ordering         |
| eslint-plugin-prettier        | Prettier as an ESLint rule         |

## Install

```sh
pnpm add -D github:tkodev/eslint-config-next eslint prettier typescript
```

This config expects `next`, `prettier`, and `typescript` to already be installed in the consuming project.

## Usage

Create `eslint.config.mjs` in your project:

```js
import tkodevEslintConfig from '@tkodev/eslint-config-next'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  ...tkodevEslintConfig,
  // your project-specific rules/config entries here
])
```

Or use the helper:

```js
import { withTkodevConfig } from '@tkodev/eslint-config-next'

export default withTkodevConfig([
  // your project-specific rules/config entries here
])
```

## Dev commands

```sh
pnpm install        # Install dependencies
pnpm lint           # Lint all files
```

## Documentation

- **AI and working conventions:** [`CLAUDE.md`](./CLAUDE.md)
- **Git and contribution rules:** [`CONTRIBUTING.md`](./CONTRIBUTING.md)
- **License:** [`LICENSE.md`](./LICENSE.md)
