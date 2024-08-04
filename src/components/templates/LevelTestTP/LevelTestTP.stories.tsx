import type { Meta, StoryObj } from "@storybook/react";
import LevelTestTP from "./LevelTestTP";

const meta = {
  title: "LevelTestTP",
  component: LevelTestTP,
  args: {},
} satisfies Meta<typeof LevelTestTP>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
