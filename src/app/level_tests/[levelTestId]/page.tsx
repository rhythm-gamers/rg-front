import UnityContainer from "@/components/public/organisms/UnityContainer/UnityContainer";
import { useAppSelector } from "@/lib/hooks";

interface ILevelTestFromLevelTestId {
  params: {
    levelTestId: number;
  };
}

const LevelTestFromLevelTestId = ({
  params: { levelTestId },
}: ILevelTestFromLevelTestId) => {
  const { keyNum } = useAppSelector((state) => state.practice);
  return (
    <main className="w-screen max-w-7xl mx-auto mt-10 text-center relative">
      <UnityContainer category="level_tests" id={levelTestId} keyNum={keyNum} />
    </main>
  );
};

export default LevelTestFromLevelTestId;
