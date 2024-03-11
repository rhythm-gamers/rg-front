import type { Meta, StoryObj } from "@storybook/react";
import FullSizeSection from "./FullSizeSection";

const meta = {
  title: "FullSizeSection",
  component: FullSizeSection,
  tags: ["autodocs"],
  args: { children: "width: 100% and height: 100%" },
} satisfies Meta<typeof FullSizeSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
