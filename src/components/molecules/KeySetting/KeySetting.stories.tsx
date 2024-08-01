import type { Meta, StoryObj } from "@storybook/react";
import KeySetting from "./KeySetting";
import { fn } from "@storybook/test";

const meta = {
  title: "KeySetting",
  component: KeySetting,
  args: {
    keyNum: 4,
    setKeyNum: fn(),
    state: "init",
    setState: fn(),
  },
} satisfies Meta<typeof KeySetting>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
