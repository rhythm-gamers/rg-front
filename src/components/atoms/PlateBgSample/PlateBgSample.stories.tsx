import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import PlateBgSample from "./PlateBgSample";

const meta = {
  title: "PlateBgSample",
  component: PlateBgSample,
  args: {
    color: "red",
    currBgColor: undefined,
    fromBgColor: "from-red-500",
    toBgColor: "to-red-50",
    onClick: fn(),
  },
} satisfies Meta<typeof PlateBgSample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Applied: Story = {
  args: {
    currBgColor: "red",
  },
};
