import type { Meta, StoryObj } from "@storybook/react";
import AdSideBox from "./AdSideBox";

const meta = {
  title: "AdSideBox",
  component: AdSideBox,
  tags: ["autodocs"],
  parameters: {},
} satisfies Meta<typeof AdSideBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
