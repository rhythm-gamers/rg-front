"use client";

import { IWiki } from "@/api/wiki";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface IWikiDropdown {
  menuItem: string;
  active: boolean;
  subMenuActive: string | undefined;
  subMenus: IWiki[];
}

const WikiDropdown = ({
  menuItem,
  active,
  subMenuActive,
  subMenus,
}: IWikiDropdown) => {
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
                    ? " bg-orange-300 text-white"
                    : " bg-gray-100  text-rhythm-theme"
                } py-1.5 flex justify-center items-center cursor-pointer font-bold transition-all`}
              >
                {subMenu.title}
              </Link>
            );
          })}
      </div>
    </>
  );
};

export default WikiDropdown;
