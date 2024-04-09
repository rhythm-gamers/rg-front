import type { Meta, StoryObj } from "@storybook/react";
import PlateChinghoListByRank from "./PlateChinghoListByRank";
import { fn } from "@storybook/test";

const meta = {
  title: "PlateChinghoListByRank",
  component: PlateChinghoListByRank,
  args: {
    rank: 1,
    onClick: fn(),
  },
} satisfies Meta<typeof PlateChinghoListByRank>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
