import type { Meta, StoryObj } from "@storybook/react";
import PlateChinghoBtn from "./PlateChinghoBtn";
import { fn } from "@storybook/test";

const meta = {
  title: "PlateChinghoBtn",
  component: PlateChinghoBtn,
  args: {
    size: "md",
    rank: 1,
    children: "디맥 플레이어",
    viewOnly: false,
    disabled: false,
    visibleChingho: true,
    visibleChinghoIcon: true,
    onClick: fn(),
  },
} satisfies Meta<typeof PlateChinghoBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
