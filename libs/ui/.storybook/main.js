const rootMain = require("../../../.storybook/main");
const { mergeConfig } = require("vite");

module.exports = {
  ...rootMain,

  core: { ...rootMain.core, builder: "@storybook/builder-vite" },

  stories: [...rootMain.stories, "../src/lib/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-essentials", ...rootMain.addons, "@nx/react/plugins/storybook"],
  viteFinal: async (config, { configType }) => {
    return mergeConfig(config, {
      plugins: [],
    });
  },
};
