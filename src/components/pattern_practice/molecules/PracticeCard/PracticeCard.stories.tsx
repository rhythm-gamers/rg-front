import type { Meta, StoryObj } from "@storybook/react";
import PracticeCard from "./PracticeCard";
import ppThumbnail from "/public/images/pp_stair.png";

const meta = {
  title: "PracticeCard",
  component: PracticeCard,
  args: {
    practiceId: 1,
    title: "계단 연습 1",
    imgSrc: ppThumbnail,
    patterns: ["계단 Lv.1", "폭타 Lv.1"],
  },
} satisfies Meta<typeof PracticeCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
