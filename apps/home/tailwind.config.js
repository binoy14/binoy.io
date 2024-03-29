const { createGlobPatternsForDependencies } = require("@nx/next/tailwind");
const defaultTheme = require("tailwindcss/defaultTheme");
const { join } = require("path");

module.exports = {
  presets: [require("../../tailwind-workspace-preset.js")],
  content: [join(__dirname, "**/!(*.stories|*.spec).{ts,tsx,html}"), ...createGlobPatternsForDependencies(__dirname)],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-fira-code)", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
