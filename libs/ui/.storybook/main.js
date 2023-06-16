const rootMain = require("../../../.storybook/main");

module.exports = {
  ...rootMain,
  core: { ...rootMain.core },
  stories: [...rootMain.stories, "../src/lib/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-essentials", ...rootMain.addons, "@nx/react/plugins/storybook"],
};
