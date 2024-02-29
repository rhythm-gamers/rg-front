import { setKeyName } from "@/lib/features/practice/practiceSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

interface ICategoryBtn {
  value: string;
}

const CategoryBtn = ({ value }: ICategoryBtn) => {
  const { keyName } = useAppSelector((state) => state.practice);
  const dispatch = useAppDispatch();

  return (
    <div
      className="flex justify-center first:mx-10 mr-10"
      onClick={() => dispatch(setKeyName(value))}
    >
      <button
        type="button"
        className={`w-20 py-1 border-rose-400 ${
          keyName === value && "border-b-4"
        }`}
      >
        {value}
      </button>
    </div>
  );
};

export default CategoryBtn;
