import UnityContainer from "@/components/public/organisms/UnityContainer/UnityContainer";

interface IPatternPracticeFromPracticeId {
  params: {
    practiceId: number;
  };
}

const PatternPracticeFromPracticeId = ({
  params: { practiceId },
}: IPatternPracticeFromPracticeId) => {
  return (
    <main className="w-screen max-w-7xl mx-auto mt-10 text-center relative">
      <UnityContainer category="pattern_practice" id={practiceId} />
    </main>
  );
};

export default PatternPracticeFromPracticeId;
