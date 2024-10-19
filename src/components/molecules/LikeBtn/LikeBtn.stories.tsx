import type { Meta, StoryObj } from "@storybook/react";
import LikeBtn from "./LikeBtn";

const meta = {
  title: "LikeBtn",
  component: LikeBtn,
  args: {
    apiType: "post",
    index: 0,
    initialLikes: 0,
    size: "md",
    type: "accept",
    children: "",
    border: true,
    widthFull: true,
    roundedFull: true,
    haveShadow: true,
    className: "mb-2 !px-8 flex gap-3 items-center",
    onClick: () => {},
  },
} satisfies Meta<typeof LikeBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
