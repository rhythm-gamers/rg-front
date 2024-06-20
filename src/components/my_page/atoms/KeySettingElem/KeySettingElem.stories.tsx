import type { Meta, StoryObj } from "@storybook/react";
import KeySettingElem from "./KeySettingElem";

const meta = {
  title: "KeySettingElem",
  component: KeySettingElem,
  args: {
    value: "a",
  },
} satisfies Meta<typeof KeySettingElem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
