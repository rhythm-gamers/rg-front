import type { Meta, StoryObj } from "@storybook/react";
import FullScreenSection from "./FullScreenSection";

const meta = {
  title: "FullSizeSection",
  component: FullScreenSection,
  args: { direction: "row", children: "width: 100vw and height: 100vh" },
  argTypes: {
    direction: { control: "select", options: ["row", "col"] },
  },
} satisfies Meta<typeof FullScreenSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
