import type { Meta, StoryObj } from "@storybook/react";
import CategoryWrapper from "./CategoryWrapper";
import CategoryBtn from "../CategoryBtn/CategoryBtn";

const meta = {
  title: "CategoryWrapper",
  component: CategoryWrapper,
  tags: ["autodocs"],
  args: {
    children: (
      <>
        <CategoryBtn value="4키" />
        <CategoryBtn value="5키" />
        <CategoryBtn value="6키" />
      </>
    ),
  },
} satisfies Meta<typeof CategoryWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
