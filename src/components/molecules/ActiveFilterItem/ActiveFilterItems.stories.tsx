import type { Meta, StoryObj } from "@storybook/react";
import ActiveFilterItems from "./ActiveFilterItems";

const meta = {
  title: "ActiveFilterItems",
  component: ActiveFilterItems,
  args: {},
} satisfies Meta<typeof ActiveFilterItems>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
