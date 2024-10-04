"use client";

import GamePlayTP from "@/components/templates/GamePlayTP/GamePlayTP";

interface ILevelTestFromLevelTestId {
  params: {
    levelTestId: number;
  };
}

const LevelTestFromLevelTestId = ({
  params: { levelTestId },
}: ILevelTestFromLevelTestId) => {
  return <GamePlayTP id={levelTestId} referer={"level_tests"} />;
};

export default LevelTestFromLevelTestId;
