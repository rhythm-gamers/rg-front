import type { Meta, StoryObj } from "@storybook/react";
import AdSideBox from "./AdSideBox";
import StoreProvider from "@/app/storeProvider";

const meta = {
  title: "Atoms/AdSideBox",
  component: AdSideBox,
  tags: ["autodocs"],
  parameters: {},
  decorators: [
    (Story) => (
      <StoreProvider>
        <Story />
      </StoreProvider>
    ),
  ],
} satisfies Meta<typeof AdSideBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
