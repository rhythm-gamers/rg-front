import type { Meta, StoryObj } from "@storybook/react";
import FilterBox from "./FilterBox";

const meta = {
  title: "FilterBox",
  component: FilterBox,
  args: { value: "레벨" },
  argTypes: { value: { control: "select", options: ["레벨", "패턴"] } },
} satisfies Meta<typeof FilterBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
