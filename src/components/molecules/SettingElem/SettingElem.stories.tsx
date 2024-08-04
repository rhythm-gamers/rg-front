import type { Meta, StoryObj } from "@storybook/react";
import SettingElem from "./SettingElem";

const meta = {
  title: "SettingElem",
  component: SettingElem,
  args: {
    title: "설정 제목",
    children: undefined,
  },
} satisfies Meta<typeof SettingElem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
