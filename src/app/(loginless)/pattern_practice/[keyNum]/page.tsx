import PPPracticeCardsFilter from "@/components/organisms/PPPracticeCardsFilter/PPPracticeCardsFilter";
import PPPracticeCards from "@/components/organisms/PPPracticeCards/PPPracticeCards";
import PatternPracticeAPI from "@/api/pattern_practice";
import Footer from "@/components/organisms/Footer/Footer";
import MainSectionWithBothSideAds from "@/components/molecules/MainSectionWithBothSideAds/MainSectionWithBothSideAds";
import CategoryBtn from "@/components/atoms/CategoryBtn/CategoryBtn";
import React from "react";

interface IPatternPractice {
  params: { keyNum: string };
  searchParams: { levels?: string; patterns?: string; order?: string };
}

const PatternPractice = async ({
  params: { keyNum },
  searchParams: { levels, patterns, order },
}: IPatternPractice) => {
  const { data: practices } = await PatternPracticeAPI.getAll();

  const selectedLevels = levels?.split(",") ?? [];
  const selectedPatterns = patterns?.split(",") ?? [];
  const selectedOrder = order ?? "레벨순";
  const parsedKeyNum = parseInt(keyNum);
  return (
    <>
      <MainSectionWithBothSideAds sectionTitle="패턴 연습">
        <div className="flex text-black py-2 mt-5 text-lg bg-white border rounded-md">
          {[4, 5, 6].map((value) => (
            <CategoryBtn
              key={`${value}키`}
              currentKeyNum={parsedKeyNum}
              value={value}
            />
          ))}
        </div>
        <PPPracticeCardsFilter
          keyNum={parsedKeyNum}
          selectedLevels={selectedLevels}
          selectedPatterns={selectedPatterns}
          selectedOrder={selectedOrder}
        />
        <PPPracticeCards
          keyNum={parsedKeyNum}
          practices={practices}
          selectedOrder={selectedOrder}
        />
      </MainSectionWithBothSideAds>
      <Footer />
    </>
  );
};

export default PatternPractice;
