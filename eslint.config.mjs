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
 *
 * @type {import('eslint').Linter.Config[]}
 */
const tkodevConfig = [
  // core rules
  ...nextVitals,
  ...nextTs,
  ...[prettierConfig],

  // base rules for all files
  {
    files: ['**/*.{js,jsx,ts,tsx,mjs}'],
    plugins: {
      '@next/eslint-plugin-next': nextPlugin,
      prettier: prettierPlugin,
      perfectionist: perfectionistPlugin
    },
    rules: {
      'no-restricted-syntax': [
        'error',
        {
          selector: 'ExportNamedDeclaration[declaration!=null]',
          message: 'Do not use inline exports. Use block exports at the end of the file.'
        }
      ],
      'import/no-default-export': 'error',
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function'
        }
      ],
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
            'next',
            'react',
            ['builtin', 'external'],
            'type',
            'internal',
            'type-internal',
            ['parent', 'sibling', 'index'],
            ['type-parent', 'type-sibling', 'type-index'],
            'side-effect',
            'style',
            'unknown'
          ],
          customGroups: [
            {
              groupName: 'next',
              elementNamePattern: ['^next$', '^next/']
            },
            {
              groupName: 'react',
              elementNamePattern: ['^react$', '^react-', '^react/']
            }
          ],
          newlinesBetween: 0
        }
      ],
      'perfectionist/sort-exports': [
        'error',
        {
          type: 'natural',
          order: 'asc',
          ignoreCase: false,
          groups: ['value-export', 'type-export']
        }
      ],
      'perfectionist/sort-named-imports': [
        'error',
        {
          type: 'natural',
          order: 'asc',
          ignoreAlias: false,
          ignoreCase: false,
          groups: ['value-import', 'type-import']
        }
      ],
      'perfectionist/sort-named-exports': [
        'error',
        {
          type: 'natural',
          order: 'asc',
          ignoreCase: false,
          groups: ['value-export', 'type-export']
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
          customGroups: [
            {
              groupName: 'react',
              elementNamePattern: ['^ref$', '^key$']
            },
            {
              groupName: 'name',
              elementNamePattern: ['^id$', '^name$']
            },
            {
              groupName: 'type',
              elementNamePattern: ['^rel$', '^type$']
            },
            {
              groupName: 'className',
              elementNamePattern: '^className$'
            },
            {
              groupName: 'img',
              elementNamePattern: ['^src$', '^href$', '^alt$', '^width$', '^height$']
            },
            {
              groupName: 'anchor',
              elementNamePattern: ['^href$', '^to$', '^target$']
            },
            {
              groupName: 'callback',
              elementNamePattern: '^on.+'
            }
          ]
        }
      ]
    }
  },

  // Type-aware rules for .ts/.tsx
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/consistent-type-exports': 'error',
      '@typescript-eslint/consistent-type-definitions': ['error', 'type']
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        projectService: true,
        tsconfigRootDir: import.meta.dirname
      }
    }
  },
  {
    files: ['**/*.{js,jsx,mjs}'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    }
  },

  // allow default exports in pages, app, api, and root files
  {
    files: ['pages/**/*', 'app/**/*', 'api/**/*', '*.{js,jsx,ts,tsx,mjs}'],
    rules: {
      'import/no-default-export': 'off'
    }
  },

  // Next.js / bundler entry files require inline re-exports
  {
    files: ['**/proxy.ts', '**/middleware.ts'],
    rules: {
      'no-restricted-syntax': 'off'
    }
  },

  // global ignores
  globalIgnores(['node_modules/**', '.next/**', 'out/**', 'build/**', 'next-env.d.ts'])
]

/**
 * Helper to merge this shared config with app-specific config entries.
 * @param {import('eslint').Linter.Config[]} [appConfig]
 * @returns {import('eslint').Linter.Config[]}
 */
const withTkodevConfig = (appConfig = []) => [...tkodevConfig, ...appConfig]

export default tkodevConfig
export { tkodevConfig, withTkodevConfig }
