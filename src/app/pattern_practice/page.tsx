"use client";

import CategoryBtn from "@/components/pattern_practice/atoms/CategoryBtn/CategoryBtn";
import FullSizeSection from "@/components/public/atoms/FullSizeSection/FullSizeSection";
import SectionTitle from "@/components/public/atoms/SectionTitle/SectionTitle";
import FilterBox from "@/components/pattern_practice/organisms/FilterBox/FilterBox";
import ActiveFilterItems from "@/components/pattern_practice/organisms/ActiveFilterItem/ActiveFilterItems";
import { useEffect } from "react";
import { toggleDropdownType } from "@/lib/features/practice/practiceSlice";
import { useAppDispatch } from "@/lib/hooks";
import PracticeCard from "@/components/pattern_practice/molecules/PracticeCard/PracticeCard";
import SortBox from "@/components/pattern_practice/organisms/SortBox/SortBox";
import CategoryWrapper from "@/components/pattern_practice/atoms/CategoryWrapper/CategoryWrapper";
import AdSideBox from "@/components/public/atoms/AdSideBox/AdSideBox";
import ppThumbnail from "/public/images/pp_stair.png";

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
    <FullSizeSection className="flex bg-gray-50">
      <AdSideBox />
      <main className="w-full flex flex-col justify-center items-center text-white">
        <FullSizeSection className="flex flex-col">
          <SectionTitle className="mt-10" isImportant>
            패턴 연습
          </SectionTitle>
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
          <div className="grid grid-cols-5 text-gray-500 mt-10">
            <PracticeCard
              practiceId={1}
              title="계단 연습 1"
              imgSrc={ppThumbnail}
              patterns={["계단 Lv.1", "폭타 Lv.1"]}
            />
          </div>
        </FullSizeSection>
      </main>
      <AdSideBox />
    </FullSizeSection>
  );
};

export default PatternPractice;
