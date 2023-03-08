import { Navigation, UiProps } from "./Navigation";

import type { Story, Meta } from "@storybook/react";

export default {
  component: Navigation,
  title: "Navigation",
} as Meta;

const Template: Story<UiProps> = (args) => <Navigation {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  links: [
    {
      link: "",
      text: "Home",
    },
    {
      link: "about",
      text: "About",
    },
    {
      link: "blog",
      text: "Blog",
    },
    {
      link: "contact",
      text: "Contact",
    },
  ],
};
