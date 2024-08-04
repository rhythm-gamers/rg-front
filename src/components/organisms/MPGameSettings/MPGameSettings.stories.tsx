import { Meta, StoryObj } from "@storybook/react";
import { useRef } from "react";
import MPGameSettings from "./MPGameSettings";

// Define the meta object
const meta = {
  title: "MPGameSettings",
  component: MPGameSettings,
} satisfies Meta<typeof MPGameSettings>;

export default meta;

type Story = StoryObj<typeof MPGameSettings>;

const Template = (args: any) => {
  const ref = useRef<HTMLTableSectionElement>(null);

  return <MPGameSettings gameSettingRef={ref} {...args} />;
};

// Define the story directly using StoryObj
export const Default: Story = {
  render: (args) => <Template {...args} />,
  args: {},
};
