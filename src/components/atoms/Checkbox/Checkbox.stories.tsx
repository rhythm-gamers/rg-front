import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Checkbox from "./Checkbox";

const meta = {
  title: "Checkbox",
  component: Checkbox,
  args: {
    value: "내용1",
    checked: false,
    onChange: fn(),
    onClick: () => {},
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
