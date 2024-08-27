import type { Meta, StoryObj } from "@storybook/react";
import BoardRow from "./BoardRow";

const meta = {
  title: "BoardRow",
  component: BoardRow,
  args: {
    isHeader: false,
    index: "인덱스",
    title: "게시글 제목",
    writer: "작성자",
    createdAt: "작성일",
    views: "조회수",
    likes: "추천",
    commentCount: 0,
  },
} satisfies Meta<typeof BoardRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const typeHeader: Story = {
  args: {
    isHeader: true,
    index: "번호",
    title: "제목",
    writer: "작성자",
    createdAt: "작성일",
    views: "조회수",
    likes: "추천",
  },
};
export const typeDefault: Story = {
  args: {
    isHeader: false,
    index: "123",
    title: "리듬게이머스 게시글",
    writer: "관리자",
    createdAt: "1901-01-01",
    views: "123",
    likes: "12",
    commentCount: 1,
  },
};
