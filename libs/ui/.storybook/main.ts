import rootMain from "../../../.storybook/main";

export default {
  ...rootMain,
  core: { ...rootMain.core },
  stories: [...rootMain.stories, "../src/lib/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-essentials", ...rootMain.addons],
  framework: {
    name: "@storybook/nextjs",
    options: {
      builder: {
        useSWC: true, // Enables SWC support
      },
    },
  },
};
