import AdSideBox from "@/components/atoms/AdSideBox";
import FullSizeSection from "@/components/atoms/FullSizeSection";
import SectionTitle from "@/components/atoms/SectionTitle";

// redux state 사용예시
const RhythmLevelTests = () => {
  return (
    <FullSizeSection className="flex">
      <AdSideBox />
      <main className="w-full h-[70vh] flex flex-col justify-center items-center text-white">
        <FullSizeSection>
          <SectionTitle className="mt-10" isImportant>
            리듬레벨 테스트
          </SectionTitle>
        </FullSizeSection>
      </main>
      <AdSideBox />
    </FullSizeSection>
  );
};

export default RhythmLevelTests;
