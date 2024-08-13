"use client";

import { IWiki } from "@/api/wiki";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface IDropdown {
  menuItem: string;
  active: boolean;
  subMenuActive: string | undefined;
  subMenus: IWiki[];
}

const Dropdown = ({ menuItem, active, subMenuActive, subMenus }: IDropdown) => {
  const router = useRouter();

  const handleOnClick = () => {
    router.replace(`/wiki/${menuItem}`);
  };

  return (
    <>
      <div
        className="w-full py-3 flex justify-center items-center cursor-pointer bg-rhythm-theme text-white font-bold transition-all"
        onClick={handleOnClick}
      >
        {menuItem}
      </div>
      <div
        className={`${active ? "visible" : "invisible"} ${
          active && subMenus.length > 0 ? "" : "h-0"
        } w-full transition-all duration-300`}
      >
        {active &&
          subMenus.map((subMenu, index) => {
            return (
              <Link
                href={`/wiki/${menuItem}/${subMenu.title}`}
                key={index}
                className={`${
                  subMenu.title === subMenuActive
                    ? " bg-yellow-200"
                    : " bg-gray-100"
                } py-1.5 flex justify-center items-center cursor-pointer text-rhythm-theme font-bold transition-all`}
              >
                {subMenu.title}
              </Link>
            );
          })}
      </div>
    </>
  );
};

export default Dropdown;
