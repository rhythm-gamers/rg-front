import type { Meta, StoryObj } from "@storybook/react";
import UnityContainer from "./UnityContainer";

const meta = {
  title: "UnityContainer",
  component: UnityContainer,
  args: {
    id: 1,
    referer: "level_tests",
  },
} satisfies Meta<typeof UnityContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
