import type { Meta, StoryObj } from "@storybook/react";
import CustomImage from "./CustomImage";

const meta = {
  title: "CustomImage",
  component: CustomImage,
  args: {
    size: "md",
    src: "/logo.png",
    alt: "프로필 사진",
    border: true,
    roundedFull: false,
    priority: false,
    objectCover: false,
    className: undefined,
    highPriorityImgSrc: undefined,
  },
} satisfies Meta<typeof CustomImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
