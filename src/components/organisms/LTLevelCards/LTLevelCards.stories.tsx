import type { Meta, StoryObj } from "@storybook/react";
import LTLevelCards from "./LTLevelCards";

const meta = {
  title: "LTLevelCards",
  component: LTLevelCards,
  args: {
    levelTests: [
      {
        level: 1,
        id: 0,
        title: "",
        goalRate: 0,
        keyNum: 4,
        imgSrc: "",
        noteSrc: "",
        musicSrc: "",
        patternInfo: {},
      },
    ],
  },
} satisfies Meta<typeof LTLevelCards>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
