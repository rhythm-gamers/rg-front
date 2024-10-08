import type { Meta, StoryObj } from "@storybook/react";
import LevelCard from "./LevelCard";
import { fn } from "@storybook/test";

const meta = {
  title: "LevelCard",
  component: LevelCard,
  args: {
    id: 1,
    level: 1,
    title:'제목',
    onClick: fn,
  },
} satisfies Meta<typeof LevelCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
