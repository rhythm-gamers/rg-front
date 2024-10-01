"use client";

import GamePlayTP from "@/components/templates/GamePlayTP/GamePlayTP";

interface IPatternPracticeFromPracticeId {
  params: {
    keyNum: number;
    practiceId: number;
  };
}

const PatternPracticeFromPracticeId = ({
  params: { practiceId },
}: IPatternPracticeFromPracticeId) => {
  return <GamePlayTP id={practiceId} referer={"pattern_practice"} />;
};

export default PatternPracticeFromPracticeId;
