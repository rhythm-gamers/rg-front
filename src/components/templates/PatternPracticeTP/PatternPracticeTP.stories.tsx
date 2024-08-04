import type { Meta, StoryObj } from "@storybook/react";
import PatternPracticeTP from "./PatternPracticeTP";
import PPKeyNumTabs from "@/components/organisms/PPKeyNumTabs/PPKeyNumTabs";
import PPPracticeCardsFilter from "@/components/organisms/PPPracticeCardsFilter/PPPracticeCardsFilter";
import PPPracticeCards from "@/components/organisms/PPPracticeCards/PPPracticeCards";

const meta = {
  title: "PatternPracticeTP",
  component: PatternPracticeTP,
  args: {
    KeyNumTabs: <PPKeyNumTabs keyNums={[4, 5, 6]} />,
    PracticeCardsFilter: <PPPracticeCardsFilter />,
    PracticeCards: <PPPracticeCards practices={[]} />,
  },
} satisfies Meta<typeof PatternPracticeTP>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
