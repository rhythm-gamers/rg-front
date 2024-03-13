import type { Meta, StoryObj } from "@storybook/react";
import MainSectionWithBothSideAds from "./MainSectionWithBothSideAds";

const meta = {
  title: "MainSectionWithBothSideAds",
  component: MainSectionWithBothSideAds,
  args: { sectionTitle: "섹션 제목", children: "children" },
} satisfies Meta<typeof MainSectionWithBothSideAds>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const NoTitle: Story = {
  args: {
    sectionTitle: "",
  },
};
