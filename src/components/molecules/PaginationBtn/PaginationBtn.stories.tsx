import type { Meta, StoryObj } from "@storybook/react";
import PaginationBtn from "./PaginationBtn";

const meta = {
  title: "PaginationBtn",
  component: PaginationBtn,
  args: {
    pageNumber: 1,
    currentPage: 1,
  },
} satisfies Meta<typeof PaginationBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const typeDefault: Story = {};
