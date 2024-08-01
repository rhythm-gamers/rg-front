import type { Meta, StoryObj } from "@storybook/react";
import PracticeCard from "./PracticeCard";

const meta = {
  title: "PracticeCard",
  component: PracticeCard,
  args: {
    id: 0,
    title: "계단 연습 1",
    imgSrc: `${process.env.STORYBOOK_AWS_CLOUDFRONT_URL}/pp_stair.png`,
    patternInfo: { stairs: 2, trill: 1 },
    level: 2,
    keyNum: 4,
  },
} satisfies Meta<typeof PracticeCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
