import type { Meta, StoryObj } from "@storybook/react";
import CategoryBtn from "./CategoryBtn";

const meta = {
  title: "CategoryBtn",
  component: CategoryBtn,
  args: {
    value: "4키",
  },
} satisfies Meta<typeof CategoryBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
