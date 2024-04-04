import type { Meta, StoryObj } from "@storybook/react";
import PlateBack from "./PlateBack";

const meta = {
  title: "PlateBack",
  component: PlateBack,
  args: {
    fromBgColor: "from-red-500",
    toBgColor: "to-red-50",
  },
} satisfies Meta<typeof PlateBack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
