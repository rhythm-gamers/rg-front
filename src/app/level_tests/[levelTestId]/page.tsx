import UnityContainer from "@/components/public/organisms/UnityContainer/UnityContainer";

interface ILevelTestFromLevelTestId {
  params: {
    levelTestId: number;
  };
}

const LevelTestFromLevelTestId = ({
  params: { levelTestId },
}: ILevelTestFromLevelTestId) => {
  return (
    <main className="w-screen max-w-7xl mx-auto mt-10 text-center relative">
      <UnityContainer category="level_tests" id={levelTestId} />
    </main>
  );
};

export default LevelTestFromLevelTestId;
