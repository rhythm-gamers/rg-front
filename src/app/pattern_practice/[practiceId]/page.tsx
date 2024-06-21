"use client";

import UnityContainer from "@/components/public/organisms/UnityContainer/UnityContainer";
import { useAppSelector } from "@/lib/hooks";
import Link from "next/link";

interface IPatternPracticeFromPracticeId {
  params: {
    practiceId: number;
  };
}

const PatternPracticeFromPracticeId = ({
  params: { practiceId },
}: IPatternPracticeFromPracticeId) => {
  const { keyNum } = useAppSelector((state) => state.practice);
  return (
    <main className="flex flex-col items-center w-full mt-10 relative">
      <UnityContainer
        category="pattern_practice"
        id={practiceId}
        keyNum={keyNum}
      />
      <section className="flex flex-col w-2/3 mt-10">
        <Link
          href={"/my_page"}
          className="w-32 py-2 text-center bg-blue-400 text-white rounded-full"
        >
          키 설정 변경
        </Link>
      </section>
    </main>
  );
};

export default PatternPracticeFromPracticeId;
