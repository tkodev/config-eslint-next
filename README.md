# @tkodev/eslint-config-next

Shared ESLint flat config for Next.js + TypeScript projects.

## Install

```bash
pnpm add -D github:tkodev/config-eslint-next eslint typescript
```

This config expects `next` to already be installed in the consuming project.

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
import { withTkodevConfig } from '@tkodev/config-eslint-next'

export default withTkodevConfig([
  // your project-specific rules/config entries here
])
```
