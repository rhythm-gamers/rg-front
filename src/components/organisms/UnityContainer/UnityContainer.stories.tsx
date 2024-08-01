import type { Meta, StoryObj } from "@storybook/react";
import UnityContainer from "./UnityContainer";

const meta = {
  title: "UnityContainer",
  component: UnityContainer,
  args: {
    category: "level_tests",
    id: 1,
    keyNum: 4,
  },
} satisfies Meta<typeof UnityContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
