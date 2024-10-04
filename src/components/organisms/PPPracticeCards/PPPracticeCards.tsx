import { IPatternPracticeRes } from "@/api/pattern_practice";
import { TKeyNum } from "@/api/types";
import PracticeCard from "@/components/molecules/PracticeCard/PracticeCard";
import React from "react";

interface IPPPracticeCards {
  practices: IPatternPracticeRes[];
  selectedOrder: string;
  keyNum: number;
}

const PPPracticeCards = ({ practices, keyNum }: IPPPracticeCards) => {
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
          keyNum={keyNum as TKeyNum}
        />
      ))}
    </div>
  );
};

export default PPPracticeCards;
