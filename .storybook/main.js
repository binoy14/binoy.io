const path = require("path");

module.exports = {
  addons: ["@storybook/addon-backgrounds", "storybook-addon-swc"],
  stories: [],
  // uncomment the property below if you want to apply some webpack config globally
  // webpackFinal: async (config, { configType }) => {
  //   // Make whatever fine-grained changes you need that should apply to all storybook configs

  //   // Return the altered config
  //   return config;
  // },
  framework: {
    name: "@storybook/nextjs", // Needed for NextJs routing in storybook
    options: {
      nextConfigPath: path.resolve(__dirname, "apps/home/next.config.js"),
    },
  },
  docs: {
    autodocs: true,
  },
};
