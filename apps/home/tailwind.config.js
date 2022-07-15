const { createGlobPatternsForDependencies } = require("@nrwl/next/tailwind");
const defaultTheme = require("tailwindcss/defaultTheme");
const { join } = require("path");

module.exports = {
  presets: [require("../../tailwind-workspace-preset.js")],
  content: [
    join(__dirname, "**/!(*.stories|*.spec).{ts,tsx,html}"),
    ...createGlobPatternsForDependencies(__dirname),
    `${join(__dirname, "pages/**/*.mdx")}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Fira Code", ...defaultTheme.fontFamily.sans],
      },
      // typography: (theme) => ({
      //   DEFAULT: {

      //   },
      // }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
