"use client";

import ActiveFilterItems from "@/components/molecules/ActiveFilterItem/ActiveFilterItems";
import SortBox from "@/components/molecules/SortBox/SortBox";
import { toggleFilterItems } from "@/lib/features/practice/practiceSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import PPFilterBox from "../PPFilterBox/PPFilterBox";

const PPPracticeCardsFilter = () => {
  const dispatch = useAppDispatch();
  const { filterItems } = useAppSelector((state) => state.practice);

  return (
    <>
      <div className="flex justify-between w-full text-black mt-3">
        <div className="flex gap-5">
          <PPFilterBox value="레벨" />
          <PPFilterBox value="패턴" />
        </div>
        <SortBox value="정렬" />
      </div>
      <ActiveFilterItems
        filterItems={filterItems}
        onClick={(item) => dispatch(toggleFilterItems(item))}
      />
    </>
  );
};

export default PPPracticeCardsFilter;
