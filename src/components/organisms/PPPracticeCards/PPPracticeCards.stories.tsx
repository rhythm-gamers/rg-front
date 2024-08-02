import type { Meta, StoryObj } from "@storybook/react";
import PPPracticeCards from "./PPPracticeCards";

const meta = {
  title: "PPPracticeCards",
  component: PPPracticeCards,
  args: {
    practices: [
      {
        id: 0,
        title: "계단 연습 1",
        imgSrc: `${process.env.STORYBOOK_AWS_CLOUDFRONT_URL}/pp_stair.png`,
        patternInfo: { stairs: 2, trill: 1 },
        level: 2,
        keyNum: 4,
        goalRate: "88.12",
      },
      {
        id: 0,
        title: "계단 연습 2",
        imgSrc: `${process.env.STORYBOOK_AWS_CLOUDFRONT_URL}/pp_stair.png`,
        patternInfo: { stairs: 2, trill: 1 },
        level: 2,
        keyNum: 4,
        goalRate: "88.12",
      },
    ],
  },
} satisfies Meta<typeof PPPracticeCards>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
