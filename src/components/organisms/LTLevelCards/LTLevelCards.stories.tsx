import type { Meta, StoryObj } from "@storybook/react";
import LTLevelCards from "./LevelCards";

const meta = {
  title: "LevelCards",
  component: LTLevelCards,
  args: {
    level: 1,
  },
} satisfies Meta<typeof LTLevelCards>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
