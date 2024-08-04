import MainSectionWithBothSideAds from "@/components/molecules/MainSectionWithBothSideAds/MainSectionWithBothSideAds";
import { ReactNode } from "react";

interface IPatternPracticeTP {
  KeyNumTabs: ReactNode;
  PracticeCardsFilter: ReactNode;
  PracticeCards: ReactNode;
}

const PatternPracticeTP = ({
  KeyNumTabs,
  PracticeCardsFilter,
  PracticeCards,
}: IPatternPracticeTP) => {
  return (
    <MainSectionWithBothSideAds sectionTitle="패턴 연습">
      {KeyNumTabs}
      {PracticeCardsFilter}
      {PracticeCards}
    </MainSectionWithBothSideAds>
  );
};

export default PatternPracticeTP;
