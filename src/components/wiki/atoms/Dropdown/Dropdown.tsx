import { IWiki } from "@/api/wiki";
import React, { Dispatch, SetStateAction } from "react";

interface IDropdown {
  menuItem: string;
  idx: number;
  activeIdx: number;
  active: boolean;
  setActiveIdx: Dispatch<SetStateAction<number>>;
  subMenu: IWiki[];
}

const Dropdown = ({
  menuItem,
  idx,
  active,
  setActiveIdx,
  subMenu,
}: IDropdown) => {
  return (
    <>
      <div
        className="w-full py-2 flex justify-center items-center cursor-pointer hover:bg-blue-gray-50 transition-all"
        onClick={() => {
          setActiveIdx(idx);
        }}
      >
        {menuItem}
      </div>
      <div
        className={`${active ? "visibile" : "invisible"} ${
          active && subMenu.length > 0 ? "" : "h-0"
        } transition-all duration-300`}
      >
        {active &&
          subMenu.map((submenu, index) => {
            return (
              <div
                key={index}
                className="w-full flex first-letter:flex justify-center items-center cursor-pointer hover:bg-blue-gray-50 transition-all"
              >
                {submenu.title}
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Dropdown;
