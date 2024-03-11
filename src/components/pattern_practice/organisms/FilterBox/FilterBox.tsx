import { MdArrowDropDown } from "react-icons/md";
import FilterDropdown from "../../molecules/FilterDropdown/FilterDropdown";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { toggleDropdownType } from "@/lib/features/practice/practiceSlice";
import { MouseEvent } from "react";

interface IFilterBox {
  value: string;
}

const FilterBox = ({ value }: IFilterBox) => {
  const dispatch = useAppDispatch();
  const { dropdownType } = useAppSelector((state) => state.practice);

  const toggleStoredDropdownId = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(toggleDropdownType(value));
  };

  return (
    <div className="relative min-w-40 bg-white border rounded-md">
      <button
        type="button"
        className="w-full relative px-4 py-2 text-start"
        onClick={toggleStoredDropdownId}
      >
        {value}
        <MdArrowDropDown
          size={20}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10"
        />
      </button>
      <FilterDropdown dropdownType={dropdownType} />
    </div>
  );
};

export default FilterBox;
