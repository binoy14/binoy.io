module.exports = {
  builder: "@storybook/builder-vite",
  addons: ["storybook-addon-next-router", "@storybook/addon-backgrounds", "storybook-addon-swc"],
  stories: [],
  // uncomment the property below if you want to apply some webpack config globally
  // webpackFinal: async (config, { configType }) => {
  //   // Make whatever fine-grained changes you need that should apply to all storybook configs

  //   // Return the altered config
  //   return config;
  // },
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: true,
  },
};
