import { Meta, Story } from "@storybook/react";

import { Card, CardProps } from "./Card";

export default {
  component: Card,
  title: "Card",
  parameters: {
    backgrounds: {
      default: "black",
      values: [{ name: "black", value: "#000000" }],
    },
  },
} as Meta;

const Template: Story<CardProps> = (args) => (
  <Card>
    <h2 className="text-xl font-bold">Projects</h2>
  </Card>
);

export const Primary = Template.bind({});
Primary.args = {};
