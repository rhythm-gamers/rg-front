import type { Meta, StoryObj } from "@storybook/react";
import LevelCards from "./LevelCards";

const meta = {
  title: "LevelCards",
  component: LevelCards,
  args: {
    level: 1,
  },
} satisfies Meta<typeof LevelCards>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
