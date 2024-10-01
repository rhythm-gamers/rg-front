import { ReactNode } from "react";

interface IDropdown {
  menu: ReactNode;
  active: boolean;
  subMenu: ReactNode;
  float?: "left" | "right";
}

const Dropdown = ({ menu, active, subMenu, float }: IDropdown) => {
  return (
    <div className={`w-fit relative`}>
      {menu}
      {active && (
        <ul
          className={`flex flex-col w-fit absolute right-0 z-10 bg-white border rounded-md mt-1 
            ${float === "right" ? "right-0" : "left-0"}`}
        >
          {subMenu}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
