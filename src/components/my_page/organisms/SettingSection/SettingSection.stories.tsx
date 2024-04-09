import type { Meta, StoryObj } from "@storybook/react";
import SettingSection from "./SettingSection";
import SettingElem from "../../molecules/SettingElem/SettingElem";

const meta = {
  title: "SettingSection",
  component: SettingSection,
  args: {
    title: "설정 대제목",
    children: <SettingElem title="설정 제목" />,
  },
} satisfies Meta<typeof SettingSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
