import type { Meta, StoryObj } from "@storybook/react";
import PPKeyNumTabs from "./PPKeyNumTabs";

const meta = {
  title: "PPKeyNumTabs",
  component: PPKeyNumTabs,
  args: {
    keyNums: [4, 5, 6],
  },
} satisfies Meta<typeof PPKeyNumTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
