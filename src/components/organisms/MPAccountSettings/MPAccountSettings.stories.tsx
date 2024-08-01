import { Meta, StoryObj } from "@storybook/react";
import MPAccountSettings from "./MPAccountSettings";
import { useRef } from "react";
import useInput from "@/hooks/useInput";

// Define the meta object
const meta = {
  title: "MPAccountSettings",
  component: MPAccountSettings,
} satisfies Meta<typeof MPAccountSettings>;

export default meta;

type Story = StoryObj<typeof MPAccountSettings>;

const Template = (args: any) => {
  const ref = useRef<HTMLTableSectionElement>(null);
  const nicknameState = useInput({ type: "text", initValue: "" });
  const localProfileImgSrcState = useInput({ type: "text", initValue: "" });

  return (
    <MPAccountSettings
      accountSettingRef={ref}
      nicknameState={nicknameState}
      localProfileImgSrcState={localProfileImgSrcState}
      {...args}
    />
  );
};

// Define the story directly using StoryObj
export const Default: Story = {
  render: (args) => <Template {...args} />,
  args: {},
};
