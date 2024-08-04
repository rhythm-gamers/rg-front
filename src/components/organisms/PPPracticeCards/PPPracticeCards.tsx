"use client";

import { IPatternPracticeRes } from "@/api/pattern_practice";
import PracticeCard from "@/components/molecules/PracticeCard/PracticeCard";
import { toggleDropdownType } from "@/lib/features/practice/practiceSlice";
import { useAppDispatch } from "@/lib/hooks";
import React, { useEffect } from "react";

interface IPPPracticeCards {
  practices: IPatternPracticeRes[];
}

const PPPracticeCards = ({ practices }: IPPPracticeCards) => {
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
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 text-gray-500 mt-10 gap-8">
      {practices.map((practice) => (
        <PracticeCard
          key={practice.title}
          id={practice.id}
          title={practice.title}
          imgSrc={`${process.env.NEXT_PUBLIC_AWS_CLOUDFRONT_URL}/pp_stair.png`}
          patternInfo={practice.patternInfo}
          goalRate={practice.goalRate}
          level={0}
          keyNum={4}
        />
      ))}
    </div>
  );
};

export default PPPracticeCards;
