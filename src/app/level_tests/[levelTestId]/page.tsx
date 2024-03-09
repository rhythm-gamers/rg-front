import UnityContainer from "@/components/organisms/UnityContainer";

interface ILevelTestFromLevelTestId {
  params: {
    levelTestId: number;
  };
}

const LevelTestFromLevelTestId = ({
  params: { levelTestId },
}: ILevelTestFromLevelTestId) => {
  return (
    <main className="w-screen max-w-7xl mx-auto my-0 p-8 text-center relative">
      {levelTestId}
      <UnityContainer />
    </main>
  );
};

export default LevelTestFromLevelTestId;
