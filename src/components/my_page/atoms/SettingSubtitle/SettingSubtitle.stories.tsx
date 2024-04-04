import type { Meta, StoryObj } from "@storybook/react";
import SettingSubtitle from "./SettingSubtitle";

const meta = {
  title: "SettingSubtitle",
  component: SettingSubtitle,
  args: {
    children: "설정 제목",
  },
} satisfies Meta<typeof SettingSubtitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
