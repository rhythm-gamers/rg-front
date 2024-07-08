import React, { Dispatch, SetStateAction } from "react";

interface IDropdown {
  menuItem: string;
  idx: number;
  activeIdx: number;
  active: boolean;
  setActiveIdx: Dispatch<SetStateAction<number>>;
  subMenu: ISubMenu[];
}

export interface ISubMenu {
  idx: number;
  name: string;
}

const Dropdown = ({
  menuItem,
  idx,
  activeIdx,
  active,
  setActiveIdx,
  subMenu,
}: IDropdown) => {
  return (
    <>
      <div
        className="w-[300px] h-[65px] bg-[#FCFCFC] border-[1px] border-black rounded-lg flex justify-center items-center cursor-pointer hover:bg-blue-gray-50 transition-all"
        onClick={() => {
          setActiveIdx(idx);
        }}
      >
        {menuItem}
      </div>
      <div
        className={`${active ? "visibile" : "invisible"} ${
          active && subMenu.length > 0 ? "h-[100px]" : "h-0"
        } transition-all duration-300`}
      >
        {active &&
          subMenu.map((submenu, index) => {
            return (
              <div
                key={index}
                className="w-[300px] h-[50px] bg-white flex justify-center items-center cursor-pointer hover:bg-blue-gray-50 transition-all"
              >
                {submenu.name}
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Dropdown;
