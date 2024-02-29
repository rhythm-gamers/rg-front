import UnityContainer from "@/components/organisms/UnityContainer";

interface iPatternPracticeFromPracticeId {
  params: {
    practiceId: number;
  };
}

const PatternPracticeFromPracticeId = ({
  params: { practiceId },
}: iPatternPracticeFromPracticeId) => {
  return (
    <main className="w-screen max-w-7xl mx-auto my-0 p-8 text-center relative">
      {practiceId}
      <UnityContainer />
    </main>
  );
};

export default PatternPracticeFromPracticeId;
