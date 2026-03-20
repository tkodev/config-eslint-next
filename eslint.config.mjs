import nextPlugin from '@next/eslint-plugin-next'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import prettierConfig from 'eslint-config-prettier/flat'
import perfectionistPlugin from 'eslint-plugin-perfectionist'
import prettierPlugin from 'eslint-plugin-prettier'
import { globalIgnores } from 'eslint/config'

/**
 * Shared ESLint flat config fragment for Next.js + TypeScript apps.
 * Include in your app config via:
 * export default [...tkodevEslintConfig, ...yourOwnConfig]
 */
const tkodevEslintConfig = [
  ...nextVitals,
  ...nextTs,
  ...[prettierConfig],
  {
    files: ['**/*.{js,jsx,ts,tsx,mjs}'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
    plugins: {
      '@next/eslint-plugin-next': nextPlugin,
      prettier: prettierPlugin,
      perfectionist: perfectionistPlugin
    },
    rules: {
      'import/no-default-export': 'off',
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function'
        }
      ],
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      'prettier/prettier': [
        'error',
        {
          plugins: ['prettier-plugin-tailwindcss'],
          tailwindFunctions: ['cva'],
          semi: false,
          singleQuote: true,
          trailingComma: 'none',
          printWidth: 100,
          endOfLine: 'auto'
        }
      ],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_'
        }
      ],
      'import/order': 'off',
      'perfectionist/sort-imports': [
        'error',
        {
          type: 'natural',
          order: 'asc',
          ignoreCase: false,
          groups: [
            'type',
            'next',
            'react',
            ['builtin', 'external'],
            'internal-type',
            'internal',
            ['parent-type', 'sibling-type', 'index-type'],
            ['parent', 'sibling', 'index'],
            'side-effect',
            'style',
            'object',
            'unknown'
          ],
          customGroups: {
            value: {
              next: ['next', 'next-*'],
              react: ['react', 'react-*']
            }
          },
          newlinesBetween: 'never'
        }
      ],
      'perfectionist/sort-exports': [
        'error',
        {
          type: 'natural',
          order: 'asc',
          ignoreCase: false,
          groupKind: 'values-first'
        }
      ],
      'perfectionist/sort-named-imports': [
        'error',
        {
          type: 'natural',
          order: 'asc',
          ignoreAlias: false,
          ignoreCase: false,
          groupKind: 'values-first'
        }
      ],
      'perfectionist/sort-named-exports': [
        'error',
        {
          type: 'natural',
          order: 'asc',
          ignoreCase: false,
          groupKind: 'values-first'
        }
      ],
      'perfectionist/sort-jsx-props': [
        'error',
        {
          type: 'natural',
          order: 'asc',
          ignoreCase: false,
          groups: [
            'react',
            'name',
            'type',
            'className',
            'unknown',
            'img',
            'anchor',
            'callback',
            'multiline',
            'shorthand'
          ],
          customGroups: {
            react: ['^ref$', '^key$'],
            name: ['^id$', '^name$'],
            type: ['^rel$', '^type$'],
            className: 'className',
            img: ['^src$', '^href$', '^alt$', '^width$', '^height$'],
            anchor: ['^href$', '^to$', '^target$'],
            callback: '^on.+'
          }
        }
      ]
    }
  },
  globalIgnores(['node_modules/**', '.next/**', 'out/**', 'build/**', 'next-env.d.ts'])
]

/**
 * Helper to merge this shared config with app-specific config entries.
 * @param {import('eslint').Linter.Config[]} appConfig
 */
export const withTkodevConfig = (appConfig = []) => [...tkodevEslintConfig, ...appConfig]

export default tkodevEslintConfig
