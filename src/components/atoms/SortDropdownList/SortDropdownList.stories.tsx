import type { Meta, StoryObj } from "@storybook/react";
import SortDropdownList from "./SortDropdownList";

const meta = {
  title: "SortDropdownList",
  component: SortDropdownList,
  args: {
    value: "요소1",
  },
} satisfies Meta<typeof SortDropdownList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
