"use client";

import { useEffect, useState } from "react";
import Checkbox from "@/components/atoms/Checkbox/Checkbox";
import { MdArrowDropDown, MdClose } from "react-icons/md";
import { LINK_PP } from "@/const";
import { useRouter } from "next/navigation";
import { toQueryString } from "@/utils";
import { IoIosArrowDown } from "react-icons/io";
import Dropdown from "../Dropdown/Dropdown";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  setSelectedLevels,
  setSelectedOrder,
  setSelectedPatterns,
} from "@/lib/features/practice/practiceSlice";

type TDropdownName = "" | "레벨" | "패턴" | "정렬";

interface IPracticeCardsFilter {
  selectedLevels: string[];
  selectedPatterns: string[];
  selectedOrder: string;
  keyNum: number;
}

const levelSubMenu = ["1", "2", "3"];
const patternSubMenu = ["연타", "즈레", "계단", "폭타", "동타", "트릴", "롱잡"];
const orderSubMenu = ["클리어 레이트순", "레벨순"] as const;

const PPPracticeCardsFilter = ({
  selectedLevels,
  selectedPatterns,
  keyNum,
  selectedOrder,
}: IPracticeCardsFilter) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const {
    selectedLevels: localSelectedLevels,
    selectedOrder: localSelectedOrder,
    selectedPatterns: localSelectedPatterns,
  } = useAppSelector((state) => state.practice);

  const [currentDropdownName, setCurrentDropdownName] =
    useState<TDropdownName>("");

  const toggleDropdownName = (dropdownName: TDropdownName) => {
    setCurrentDropdownName((prev) =>
      prev === dropdownName ? "" : dropdownName,
    );
  };

  const toggleSelectedLevelsAndRouting = (subMenu: string) => {
    const newSelectedLevels = selectedLevels.includes(subMenu)
      ? selectedLevels.filter((item) => item != subMenu)
      : [...selectedLevels, subMenu];

    const query = toQueryString([
      { levels: newSelectedLevels },
      { patterns: selectedPatterns },
      { order: selectedOrder },
    ]);

    dispatch(setSelectedLevels(newSelectedLevels));
    router.push(`${LINK_PP}/${keyNum}${query}`);
  };

  const toggleSelectedPatternsAndRouting = (subMenu: string) => {
    const newSelectedPatterns = selectedPatterns.includes(subMenu)
      ? selectedPatterns.filter((item) => item != subMenu)
      : [...selectedPatterns, subMenu];

    const query = toQueryString([
      { levels: selectedLevels },
      { patterns: newSelectedPatterns },
      { order: selectedOrder },
    ]);

    dispatch(setSelectedPatterns(newSelectedPatterns));
    router.push(`${LINK_PP}/${keyNum}${query}`);
  };

  const toggleOrderAndRouting = (order: "레벨순" | "클리어 레이트순") => {
    const query = toQueryString([
      { levels: selectedLevels },
      { patterns: selectedPatterns },
      { order: order },
    ]);

    dispatch(setSelectedOrder(order));
    router.push(`${LINK_PP}/${keyNum}${query}`);
  };

  useEffect(() => {
    if (
      selectedLevels.length === 0 &&
      selectedPatterns.length === 0 &&
      selectedOrder === "레벨순"
    ) {
      const query = toQueryString([
        { levels: localSelectedLevels },
        { patterns: localSelectedPatterns },
        { order: localSelectedOrder },
      ]);
      router.replace(`${LINK_PP}/${keyNum}${query}`);
    }
  }, [selectedLevels, selectedOrder, selectedPatterns]);

  useEffect(() => {
    window.addEventListener("click", () => setCurrentDropdownName(""));
    return () => {
      window.removeEventListener("click", () => setCurrentDropdownName(""));
    };
  }, []);

  return (
    <>
      <div className="flex justify-between w-full text-black mt-3">
        <div className="flex gap-5">
          <Dropdown
            menu={
              <div className="w-40 bg-white border rounded-md">
                <button
                  type="button"
                  className="w-full relative px-4 py-2 text-start"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDropdownName("레벨");
                  }}
                >
                  레벨
                  <MdArrowDropDown
                    size={20}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-10"
                  />
                </button>
              </div>
            }
            subMenu={levelSubMenu.map((subMenu) => (
              <li key={subMenu} className="w-40 first:py-3 pb-3 px-4">
                <Checkbox
                  value={`Lv. ${subMenu}`}
                  checked={selectedLevels.includes(subMenu)}
                  onClick={(e) => e.stopPropagation()}
                  onChange={() => toggleSelectedLevelsAndRouting(subMenu)}
                />
              </li>
            ))}
            active={currentDropdownName === "레벨"}
          />
          <Dropdown
            menu={
              <div className="w-40 bg-white border rounded-md">
                <button
                  type="button"
                  className="w-full relative px-4 py-2 text-start"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDropdownName("패턴");
                  }}
                >
                  패턴
                  <MdArrowDropDown
                    size={20}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-10"
                  />
                </button>
              </div>
            }
            subMenu={patternSubMenu.map((subMenu) => (
              <li key={subMenu} className="w-40 first:py-3 pb-3 px-4">
                <Checkbox
                  value={subMenu}
                  checked={selectedPatterns.includes(subMenu)}
                  onClick={(e) => e.stopPropagation()}
                  onChange={() => toggleSelectedPatternsAndRouting(subMenu)}
                />
              </li>
            ))}
            active={currentDropdownName === "패턴"}
          />
        </div>
        <Dropdown
          menu={
            <div className="flex justify-end w-36 rounded-md">
              <button
                type="button"
                className="relative pr-6 py-2 text-end"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleDropdownName("정렬");
                }}
              >
                {selectedOrder}
                <IoIosArrowDown
                  size={20}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
                />
              </button>
            </div>
          }
          subMenu={orderSubMenu.map((subMenu) => (
            <li key={subMenu} className="first:py-3 pb-3 px-4">
              <button
                type="button"
                className="flex w-full gap-2 cursor-pointer"
                onClick={() => toggleOrderAndRouting(subMenu)}
              >
                {subMenu}
              </button>
            </li>
          ))}
          active={currentDropdownName === "정렬"}
          float="right"
        />
      </div>
      <div className="flex w-full gap-2 text-black mt-3 overflow-x-auto min-h-3">
        {selectedLevels.map((level) => (
          <button
            key={level}
            type="button"
            className="flex items-center gap-3 px-3 py-1 border rounded-lg bg-white text-rose-400"
            onClick={() => toggleSelectedLevelsAndRouting(level)}
          >
            {`Lv. ${level}`}
            <MdClose />
          </button>
        ))}
        {selectedPatterns.map((pattern) => (
          <button
            key={pattern}
            type="button"
            className="flex items-center gap-3 px-3 py-1 border rounded-lg bg-white text-rose-400"
            onClick={() => toggleSelectedPatternsAndRouting(pattern)}
          >
            {pattern}
            <MdClose />
          </button>
        ))}
      </div>
    </>
  );
};

export default PPPracticeCardsFilter;
