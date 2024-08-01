import { Meta, StoryObj } from "@storybook/react";
import { useRef } from "react";
import MPSideBar from "./MPSideBar";
import { fn } from "@storybook/test";

// Define the meta object
const meta = {
  title: "MPSideBar",
  component: MPSideBar,
} satisfies Meta<typeof MPSideBar>;

export default meta;

type Story = StoryObj<typeof MPSideBar>;

const Template = (args: any) => {
  const ref = useRef<HTMLTableSectionElement>(null);

  return (
    <MPSideBar
      settingTitles={["계정 설정", "플레이트 설정", "게임 설정"]}
      moveToSettingRef={fn}
      refs={ref}
      {...args}
    />
  );
};

// Define the story directly using StoryObj
export const Default: Story = {
  render: (args) => <Template {...args} />,
  args: {},
};
