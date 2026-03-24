import type { Linter } from 'eslint'

/**
 * Shared ESLint flat config fragment for Next.js + TypeScript apps.
 * Include in your app config via:
 * `export default [...tkodevConfig, ...yourOwnConfig]`
 */
export const tkodevConfig: Linter.Config[]

/**
 * Merge this shared config with app-specific config entries.
 */
export function withTkodevConfig(appConfig?: Linter.Config[]): Linter.Config[]
