# @tkodev/config-eslint-next

Shared ESLint flat config for Next.js + TypeScript projects.

## Install

```bash
pnpm add -D @tkodev/config-eslint-next eslint typescript
```

This config expects `next` to already be installed in the consuming project.

If using GitHub Packages, add this to your project `.npmrc`:

```ini
@tkodev:registry=https://npm.pkg.github.com
```

## Usage

Create `eslint.config.mjs` in your project:

```js
import tkodevEslintConfig from '@tkodev/config-eslint-next'

export default tkodevEslintConfig
```

## Publish to GitHub Packages

1. Ensure `package.json` name is `@tkodev/config-eslint-next`.
2. Create a GitHub token with `write:packages` and `read:packages`.
3. Authenticate npm/pnpm for GitHub Packages:

```bash
echo "//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}" >> ~/.npmrc
```

4. Publish:

```bash
pnpm publish --access restricted --no-git-checks
```

## Repository

[https://github.com/tkodev/config-eslint-next](https://github.com/tkodev/config-eslint-next)
