import { setKeyNum } from "@/lib/features/practice/practiceSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

interface ICategoryBtn {
  value: number;
}

const CategoryBtn = ({ value }: ICategoryBtn) => {
  const { keyNum } = useAppSelector((state) => state.practice);
  const dispatch = useAppDispatch();

  return (
    <div
      className="flex justify-center first:mx-10 mr-10"
      onClick={() => dispatch(setKeyNum(value))}
    >
      <button
        type="button"
        className={`w-20 py-1 border-rose-400 ${
          keyNum === value && "border-b-4"
        }`}
      >
        {value}키
      </button>
    </div>
  );
};

export default CategoryBtn;
