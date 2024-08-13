import type { Meta, StoryObj } from "@storybook/react";
import Dropdown from "./Dropdown";
import { fn } from "@storybook/test";

const meta = {
  title: "Dropdown",
  component: Dropdown,
  args: {
    menuItem: "메뉴 이름",
    idx: 0,
    activeIdx: 0,
    active: true,
    setActiveIdx: fn(),
    subMenu: [
      { idx: 0, name: "부제목" },
      { idx: 1, name: "부제목2" },
    ],
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
