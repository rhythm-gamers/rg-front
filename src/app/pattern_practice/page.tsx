"use client";

import CategoryBtn from "@/components/pattern_practice/atoms/CategoryBtn/CategoryBtn";
import FilterBox from "@/components/pattern_practice/organisms/FilterBox/FilterBox";
import ActiveFilterItems from "@/components/pattern_practice/organisms/ActiveFilterItem/ActiveFilterItems";
import { useEffect } from "react";
import { toggleDropdownType } from "@/lib/features/practice/practiceSlice";
import { useAppDispatch } from "@/lib/hooks";
import PracticeCard from "@/components/pattern_practice/molecules/PracticeCard/PracticeCard";
import SortBox from "@/components/pattern_practice/organisms/SortBox/SortBox";
import CategoryWrapper from "@/components/pattern_practice/atoms/CategoryWrapper/CategoryWrapper";
import MainSectionWithBothSideAds from "@/components/public/molecules/MainSectionWithBothSideAds/MainSectionWithBothSideAds";

const PatternPractice = () => {
  const dispatch = useAppDispatch();

  const clearDropdownType = () => {
    dispatch(toggleDropdownType(""));
  };

  useEffect(() => {
    window.addEventListener("click", clearDropdownType);
    return () => {
      window.removeEventListener("click", clearDropdownType);
    };
  }, [clearDropdownType]);

  return (
    <MainSectionWithBothSideAds sectionTitle="패턴 연습">
      <CategoryWrapper>
        <CategoryBtn value="4키" />
        <CategoryBtn value="5키" />
        <CategoryBtn value="6키" />
      </CategoryWrapper>
      <div className="flex justify-between w-full text-black mt-3">
        <div className="flex gap-5">
          <FilterBox value="레벨" />
          <FilterBox value="패턴" />
        </div>
        <SortBox value="정렬" />
      </div>
      <ActiveFilterItems />
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 text-gray-500 mt-10 gap-8">
        {[1, 2, 3, 4, 5, 6].map((id) => (
          <PracticeCard
            key={id}
            practiceId={id}
            title="계단 연습 1"
            imgSrc={`${process.env.NEXT_PUBLIC_AWS_CLOUDFRONT_URL}/pp_stair.png`}
            patterns={["계단 Lv.1", "폭타 Lv.1"]}
          />
        ))}
      </div>
    </MainSectionWithBothSideAds>
  );
};

export default PatternPractice;
