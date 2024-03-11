import type { Meta, StoryObj } from "@storybook/react";
import FilterDropdownList from "./FilterDropdownList";

const meta = {
  title: "FilterDropdownList",
  component: FilterDropdownList,
  tags: ["autodocs"],
  args: {
    value: "요소1",
  },
} satisfies Meta<typeof FilterDropdownList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
