import UnityContainer from "@/components/organisms/UnityContainer";

interface IPatternPracticeFromPracticeId {
  params: {
    practiceId: number;
  };
}

const PatternPracticeFromPracticeId = ({
  params: { practiceId },
}: IPatternPracticeFromPracticeId) => {
  return (
    <main className="w-screen max-w-7xl mx-auto my-0 p-8 text-center relative">
      {practiceId}
      <UnityContainer />
    </main>
  );
};

export default PatternPracticeFromPracticeId;
