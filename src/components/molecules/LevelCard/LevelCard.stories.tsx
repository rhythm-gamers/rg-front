import type { Meta, StoryObj } from "@storybook/react";
import LevelCard from "./LevelCard";

const meta = {
  title: "LevelCard",
  component: LevelCard,
  args: {
    level: 1,
  },
} satisfies Meta<typeof LevelCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
