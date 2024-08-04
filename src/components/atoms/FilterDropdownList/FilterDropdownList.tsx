import { toggleFilterItems } from "@/lib/features/practice/practiceSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Checkbox from "../Checkbox/Checkbox";

interface IFilterDropdownList {
  value: string;
}

const FilterDropdownList = ({ value }: IFilterDropdownList) => {
  const { filterItems } = useAppSelector((state) => state.practice);
  const dispatch = useAppDispatch();
  return (
    <li className="first:py-3 pb-3">
      <Checkbox
        value={value}
        checked={filterItems.includes(value)}
        onClick={(e) => e.stopPropagation()}
        onChange={() => dispatch(toggleFilterItems(value))}
      />
    </li>
  );
};

export default FilterDropdownList;
