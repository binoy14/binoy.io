const { createGlobPatternsForDependencies } = require("@nrwl/react/tailwind");

module.exports = {
  presets: [require("../../tailwind-workspace-preset.js")],
  content: ["libs/ui/src/**/*.{js,ts,jsx,tsx}", ...createGlobPatternsForDependencies(__dirname)],
  theme: {
    extend: {},
  },
  plugins: [],
};
