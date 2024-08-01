import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import InputWithEditBtn from "./InputWithEditBtn";

const meta = {
  title: "InputWithEditBtn",
  component: InputWithEditBtn,
  args: {
    value: "",
    changeValue: fn(),
    placeholder: "placeholder",
    maxLength: undefined,
    required: false,
  },
} satisfies Meta<typeof InputWithEditBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
