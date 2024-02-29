import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { MouseEvent } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { toggleDropdownType } from "@/lib/features/practice/practiceSlice";
import SortDropdown from "../moleclues/SortDropdown";

interface ISortBox {
  value: string;
}

const SortBox = ({ value }: ISortBox) => {
  const dispatch = useAppDispatch();
  const { dropdownType } = useAppSelector((state) => state.practice);
  const { sortType } = useAppSelector((state) => state.practice);

  const toggleStoredDropdownId = (e: MouseEvent) => {
    e.stopPropagation();
    dispatch(toggleDropdownType(value));
  };

  return (
    <div className="relative min-w-40 rounded-md">
      <button
        type="button"
        className="w-full relative px-4 py-2 text-start"
        onClick={toggleStoredDropdownId}
      >
        {sortType}
        <IoIosArrowDown
          size={20}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10"
        />
      </button>
      {dropdownType === value && <SortDropdown />}
    </div>
  );
};

export default SortBox;
