import type { Meta, StoryObj } from "@storybook/react";
import FilterDropdown from "./FilterDropdown";

const meta = {
  title: "FilterDropdown",
  component: FilterDropdown,
  args: { dropdownType: "레벨" },
  argTypes: { dropdownType: { control: "select", options: ["레벨", "패턴"] } },
} satisfies Meta<typeof FilterDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
