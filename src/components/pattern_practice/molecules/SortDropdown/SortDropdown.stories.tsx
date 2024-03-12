import type { Meta, StoryObj } from "@storybook/react";
import SortDropdown from "./SortDropdown";

const meta = {
  title: "SortDropdown",
  component: SortDropdown,
  args: {},
} satisfies Meta<typeof SortDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
