import type { Meta, StoryObj } from "@storybook/react";
import CategoryWrapper from "./CategoryWrapper";
import CategoryBtn from "../CategoryBtn/CategoryBtn";

const meta = {
  title: "CategoryWrapper",
  component: CategoryWrapper,
  args: {
    children: (
      <>
        <CategoryBtn value={4} />
        <CategoryBtn value={5} />
        <CategoryBtn value={6} />
      </>
    ),
  },
} satisfies Meta<typeof CategoryWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
