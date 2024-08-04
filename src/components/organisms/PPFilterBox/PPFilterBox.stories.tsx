import type { Meta, StoryObj } from "@storybook/react";
import PPFilterBox from "./PPFilterBox";

const meta = {
  title: "PPFilterBox",
  component: PPFilterBox,
  args: { value: "레벨" },
  argTypes: { value: { control: "select", options: ["레벨", "패턴"] } },
} satisfies Meta<typeof PPFilterBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
