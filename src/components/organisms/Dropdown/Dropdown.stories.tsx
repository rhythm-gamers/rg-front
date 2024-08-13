import type { Meta, StoryObj } from "@storybook/react";
import Dropdown from "./Dropdown";

const meta = {
  title: "Dropdown",
  component: Dropdown,
  args: {
    menuItem: "메뉴 이름",
    active: true,
    subMenuActive: "소제목 이름",
    subMenus: [
      { wikiId: 0, title: "소제목 이름", content: "내용", mustRead: true },
      { wikiId: 1, title: "소제목 이름1", content: "내용1", mustRead: true },
      { wikiId: 2, title: "소제목 이름2", content: "내용2", mustRead: true },
      { wikiId: 3, title: "소제목 이름3", content: "내용3", mustRead: true },
    ],
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
