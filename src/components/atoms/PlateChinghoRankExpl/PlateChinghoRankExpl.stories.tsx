import type { Meta, StoryObj } from "@storybook/react";
import PlateChinghoRankExpl from "./PlateChinghoRankExpl";

const meta = {
  title: "PlateChinghoRankExpl",
  component: PlateChinghoRankExpl,
  args: {
    rank: 1,
    children: "디맥 플레이어",
  },
} satisfies Meta<typeof PlateChinghoRankExpl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
