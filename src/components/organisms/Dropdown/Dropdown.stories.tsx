import type { Meta, StoryObj } from "@storybook/react";
import Dropdown from "./Dropdown";
import { fn } from "@storybook/test";
import { MdArrowDropDown } from "react-icons/md";
import Checkbox from "@/components/atoms/Checkbox/Checkbox";

const meta = {
  title: "Dropdown",
  component: Dropdown,
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    menu: (
      <div className="w-40 bg-white border rounded-md">
        <button
          type="button"
          className="w-full relative px-4 py-2 text-start"
          onClick={fn}
        >
          레벨
          <MdArrowDropDown
            size={20}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10"
          />
        </button>
      </div>
    ),
    subMenu: (
      <li className="first:py-3 pb-3 px-4">
        <Checkbox value={"subMenu"} checked={true} onClick={fn} onChange={fn} />
      </li>
    ),
    float: "left",
    active: true,
  },
};
