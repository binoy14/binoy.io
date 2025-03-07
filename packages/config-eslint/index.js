import js from '@eslint/js';
import tsLint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginSvelte from 'eslint-plugin-svelte';
import svelteParser from 'svelte-eslint-parser';
import turboConfig from 'eslint-config-turbo/flat';
import globals from 'globals';

export default [
  js.configs.recommended,
  ...eslintPluginSvelte.configs['flat/recommended'],
  eslintConfigPrettier,
  ...eslintPluginSvelte.configs['flat/prettier'],
  ...tsLint.configs.recommended,
  ...turboConfig,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2017,
        ...globals.node,
      },
    },
  },
  {
    files: ['**/*.svelte'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parser: svelteParser,
      parserOptions: {
        parser: tsLint.parser,
        extraFileExtensions: ['.svelte'],
      },
    },
  },
];
