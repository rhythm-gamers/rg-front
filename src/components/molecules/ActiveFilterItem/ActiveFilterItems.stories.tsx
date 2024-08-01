import type { Meta, StoryObj } from "@storybook/react";
import ActiveFilterItems from "./ActiveFilterItems";
import { fn } from "@storybook/test";

const meta = {
  title: "ActiveFilterItems",
  component: ActiveFilterItems,
  args: { filterItems: ["활성화된 필터 아이템"], onClick: fn() },
} satisfies Meta<typeof ActiveFilterItems>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
