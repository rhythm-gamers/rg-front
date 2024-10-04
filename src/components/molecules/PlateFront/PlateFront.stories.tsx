import type { Meta, StoryObj } from "@storybook/react";
import PlateFront from "./PlateFront";

const meta = {
  title: "PlateFront",
  component: PlateFront,
  args: {
    nickname: "닉네임",
    level: 3,
    chinghoSettings: { rank: 1, children: "디맥 플레이어" },
    plateVisibleSettings: {
      visibleChingho: true,
      visibleChinghoIcon: true,
      visibleLevel: true,
    },
    fromBgColor: "from-red-500",
    toBgColor: "to-red-50",
    comment: "한줄 소개",
  },
} satisfies Meta<typeof PlateFront>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
