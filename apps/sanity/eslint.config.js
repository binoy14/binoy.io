const { FlatCompat } = require("@eslint/eslintrc");
const baseConfig = require("../../eslint.config.js");
const js = require("@eslint/js");
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});
module.exports = [
  ...baseConfig,
  ...compat.extends("plugin:@nx/react"),
  {
    files: ["apps/sanity/**/*.ts", "apps/sanity/**/*.tsx", "apps/sanity/**/*.js", "apps/sanity/**/*.jsx"],
    rules: {},
  },
  {
    files: ["apps/sanity/**/*.ts", "apps/sanity/**/*.tsx"],
    rules: {},
  },
  {
    files: ["apps/sanity/**/*.js", "apps/sanity/**/*.jsx"],
    rules: {},
  },
];
