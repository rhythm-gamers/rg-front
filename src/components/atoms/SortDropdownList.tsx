import {
  setSortType,
  toggleDropdownType,
} from "@/lib/features/practice/practiceSlice";
import { useAppDispatch } from "@/lib/hooks";

interface ISortDropdownList {
  value: string;
}

const SortDropdownList = ({ value }: ISortDropdownList) => {
  const dispatch = useAppDispatch();
  const handleClickDropdownList = () => {
    dispatch(setSortType(value));
    dispatch(toggleDropdownType(""));
  };

  return (
    <li className="first:py-3 pb-3">
      <button
        type="button"
        className="flex items-center w-full gap-2 cursor-pointer"
        onClick={handleClickDropdownList}
      >
        {value}
      </button>
    </li>
  );
};

export default SortDropdownList;
