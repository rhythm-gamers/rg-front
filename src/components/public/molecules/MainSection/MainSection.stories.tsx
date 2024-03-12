import type { Meta, StoryObj } from "@storybook/react";
import MainSection from "./MainSection";

const meta = {
  title: "MainSection",
  component: MainSection,
  args: { sectionTitle: "섹션 제목", children: "children" },
} satisfies Meta<typeof MainSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
