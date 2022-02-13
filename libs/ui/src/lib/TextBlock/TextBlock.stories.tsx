import { Meta, Story } from "@storybook/react";

import Section from "../Section/Section";
import { TextBlock, TextBlockProps } from "./TextBlock";

export default {
  component: TextBlock,
  title: "TextBlock",
} as Meta;

const Template: Story<TextBlockProps> = (args) => (
  <Section type="dark">
    <TextBlock {...args} />
  </Section>
);

export const Primary = Template.bind({});
Primary.args = {
  header: "Hi, this is a header",
  subtext: "This is a sub header",
};
