import js from '@eslint/js';
import tsLint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginSvelte from 'eslint-plugin-svelte';
import svelteParser from 'svelte-eslint-parser';
import globals from 'globals';
import { FlatCompat } from '@eslint/eslintrc';

import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

export default [
  js.configs.recommended,
  ...eslintPluginSvelte.configs['flat/recommended'],
  eslintConfigPrettier,
  ...eslintPluginSvelte.configs['flat/prettier'],
  ...tsLint.configs.recommended,
  ...compat.extends('eslint-config-turbo'),
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2017,
        ...globals.node
      }
    },
    rules: {
      'no-constant-binary-expression': 'off'
    }
  },
  {
    files: ['**/*.svelte'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parser: svelteParser,
      parserOptions: {
        parser: tsLint.parser,
        extraFileExtensions: ['.svelte']
      }
    }
  }
];
