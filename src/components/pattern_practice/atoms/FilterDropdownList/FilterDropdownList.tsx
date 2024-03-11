import { toggleFilterItems } from "@/lib/features/practice/practiceSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

interface IFilterDropdownList {
  value: string;
}

const FilterDropdownList = ({ value }: IFilterDropdownList) => {
  const { filterItems } = useAppSelector((state) => state.practice);
  const dispatch = useAppDispatch();
  return (
    <li className="first:py-3 pb-3">
      <label
        className="flex items-center gap-2 cursor-pointer"
        onClick={(e) => e.stopPropagation()}
      >
        <input
          type="checkbox"
          className="w-4 h-4 border-2 checked:bg-red-300 appearance-none cursor-pointer"
          onChange={() => dispatch(toggleFilterItems(value))}
          checked={filterItems.includes(value)}
        />
        {value}
      </label>
    </li>
  );
};

export default FilterDropdownList;
