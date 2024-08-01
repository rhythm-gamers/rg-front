import type { Meta, StoryObj } from "@storybook/react";
import LTTips from "./LTTips";

const meta = {
  title: "LTTips",
  component: LTTips,
  args: {},
} satisfies Meta<typeof LTTips>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
