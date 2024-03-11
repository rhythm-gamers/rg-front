import { toggleFilterItems } from "@/lib/features/practice/practiceSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { MdClose } from "react-icons/md";

const ActiveFilterItems = () => {
  const { filterItems } = useAppSelector((state) => state.practice);
  const dispatch = useAppDispatch();

  return (
    <div className="flex w-full gap-2 text-black mt-3 overflow-x-auto min-h-3">
      {filterItems.map((item) => (
        <button
          key={item}
          type="button"
          className="flex items-center gap-3 px-3 py-1 border rounded-lg bg-white text-rose-400"
          onClick={() => dispatch(toggleFilterItems(item))}
        >
          {item}
          <MdClose />
        </button>
      ))}
    </div>
  );
};

export default ActiveFilterItems;
