import type { Meta, StoryObj } from "@storybook/react";
import CustomBtn from "./CustomBtn";
import { fn } from "@storybook/test";

const meta = {
  title: "CustomBtn",
  component: CustomBtn,
  args: {
    size: "md",
    type: "clear",
    children: "커스텀 버튼",
    border: false,
    widthFull: false,
    roundedFull: false,
    haveShadow: false,
    className: undefined,
    onClick: fn(),
  },
} satisfies Meta<typeof CustomBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const typeClear: Story = {};
export const typeDisabled: Story = {
  args: {
    type: "disabled",
  },
};
export const typeAccept: Story = {
  args: {
    type: "accept",
  },
};
export const typeDeny: Story = {
  args: {
    type: "deny",
  },
};
