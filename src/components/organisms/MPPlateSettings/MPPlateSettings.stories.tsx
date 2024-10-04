import { Meta, StoryObj } from "@storybook/react";
import { useRef } from "react";
import MPPlateSettings from "./MPPlateSettings";

// Define the meta object
const meta = {
  title: "MPPlateSettings",
  component: MPPlateSettings,
} satisfies Meta<typeof MPPlateSettings>;

export default meta;

type Story = StoryObj<typeof MPPlateSettings>;

const Template = (args: any) => {
  const ref = useRef<HTMLTableSectionElement>(null);

  return (
    <MPPlateSettings
      plateSettingRef={ref}
      nickname=""
      localProfileImgSrc=""
      {...args}
    />
  );
};

// Define the story directly using StoryObj
export const Default: Story = {
  render: (args) => <Template {...args} />,
  args: {},
};
