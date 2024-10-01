import { LINK_PP } from "@/const";
import Link from "next/link";

interface ICategoryBtn {
  value: number;
  currentKeyNum: number;
}

const CategoryBtn = ({ value, currentKeyNum }: ICategoryBtn) => {
  return (
    <Link
      href={`${LINK_PP}/${value}`}
      className="flex justify-center first:mx-10 mr-10"
    >
      <button
        type="button"
        className={`w-20 py-1 border-rose-400 ${
          currentKeyNum === value && "border-b-4"
        }`}
      >
        {value}키
      </button>
    </Link>
  );
};

export default CategoryBtn;
