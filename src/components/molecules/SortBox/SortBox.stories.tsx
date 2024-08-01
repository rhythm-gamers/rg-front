import type { Meta, StoryObj } from "@storybook/react";
import SortBox from "./SortBox";

const meta = {
  title: "SortBox",
  component: SortBox,
  args: { value: "클리어 레이트순" },
  argTypes: {
    value: { control: "select", options: ["클리어 레이트순", "레벨순"] },
  },
} satisfies Meta<typeof SortBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
