import type { Meta, StoryObj } from "@storybook/react";
import SettingTitle from "./SettingTitle";

const meta = {
  title: "SettingTitle",
  component: SettingTitle,
  args: {
    children: "설정 대제목",
  },
} satisfies Meta<typeof SettingTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
