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
    files: ["libs/ui/**/*.ts", "libs/ui/**/*.tsx", "libs/ui/**/*.js", "libs/ui/**/*.jsx"],
    rules: {},
  },
  {
    files: ["libs/ui/**/*.ts", "libs/ui/**/*.tsx"],
    rules: {},
  },
  {
    files: ["libs/ui/**/*.js", "libs/ui/**/*.jsx"],
    rules: {},
  },
];
