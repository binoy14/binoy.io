const { FlatCompat } = require("@eslint/eslintrc");
const baseConfig = require("../../eslint.config.js");
const js = require("@eslint/js");
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});
module.exports = [
  ...baseConfig,
  ...compat.extends("plugin:@nx/react-typescript", "next", "next/core-web-vitals"),
  {
    files: ["apps/home/**/*.ts", "apps/home/**/*.tsx", "apps/home/**/*.js", "apps/home/**/*.jsx"],
    rules: { "@next/next/no-html-link-for-pages": ["error", "apps/home/pages"] },
  },
  {
    files: ["apps/home/**/*.ts", "apps/home/**/*.tsx"],
    rules: {},
  },
  {
    files: ["apps/home/**/*.js", "apps/home/**/*.jsx"],
    rules: {},
  },
];
