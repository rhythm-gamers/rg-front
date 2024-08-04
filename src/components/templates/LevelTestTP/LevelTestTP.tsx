import LevelTestAPI from "@/api/level_tests";
import FullScreenSection from "@/components/atoms/FullScreenSection/FullScreenSection";
import LTLevelCards from "@/components/organisms/LTLevelCards/LTLevelCards";
import LTTips from "@/components/organisms/LTTips/LTTips";
import React from "react";

const LevelTestTP = async () => {
  const { data: levelTests } = await LevelTestAPI.getAll();

  return (
    <FullScreenSection direction="col" className="bg-orange-100" asMainTag>
      {levelTests.map((list) => (
        <p key={list.id}>{list.title}</p>
      ))}
      <div className="flex w-full h-full justify-evenly items-center">
        <LTLevelCards levelTests={levelTests} />
        <LTTips />
      </div>
    </FullScreenSection>
  );
};

export default LevelTestTP;
