"use client";

import AdSideBox from "@/components/atoms/AdSideBox/AdSideBox";
import CategoryBtn from "@/components/atoms/CategoryBtn";
import CategoryWrapper from "@/components/atoms/CategoryWrapper";
import FilterAndSortWrapper from "@/components/atoms/FilterWrapper";
import FullSizeSection from "@/components/atoms/FullSizeSection";
import SectionTitle from "@/components/atoms/SectionTitle";
import FilterBox from "@/components/organisms/FilterBox";
import ActiveFilterItems from "@/components/organisms/ActiveFilterItems";
import { useEffect } from "react";
import { toggleDropdownType } from "@/lib/features/practice/practiceSlice";
import { useAppDispatch } from "@/lib/hooks";
import PracticeCard from "@/components/moleclues/PracticeCard";
import SortBox from "@/components/organisms/SortBox";

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
          <FilterAndSortWrapper>
            <div className="flex gap-5">
              <FilterBox value="레벨" />
              <FilterBox value="패턴" />
            </div>
            <SortBox value="정렬" />
          </FilterAndSortWrapper>
          <ActiveFilterItems />
          <div className="grid grid-cols-5 text-gray-500 mt-10">
            <PracticeCard
              practiceId={1}
              title="계단 연습 1"
              imgSrc="/images/pp_stair.png"
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
