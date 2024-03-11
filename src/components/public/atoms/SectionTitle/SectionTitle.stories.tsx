import type { Meta, StoryObj } from "@storybook/react";
import SectionTitle from "./SectionTitle";

const meta = {
  title: "SectionTitle",
  component: SectionTitle,
  tags: ["autodocs"],
  args: { children: "해당 섹션 제목" },
} satisfies Meta<typeof SectionTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
