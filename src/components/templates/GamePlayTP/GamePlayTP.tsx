import UnityContainer from "@/components/organisms/UnityContainer/UnityContainer";
import Link from "next/link";
import React from "react";

interface IGamePlayTP {
  id: number;
  referer: "pattern_practice" | "level_tests";
}

const GamePlayTP = ({ id, referer }: IGamePlayTP) => {
  return (
    <main className="flex flex-col items-center w-full mt-10 relative">
      <UnityContainer referer={referer} id={id} />
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

export default GamePlayTP;
