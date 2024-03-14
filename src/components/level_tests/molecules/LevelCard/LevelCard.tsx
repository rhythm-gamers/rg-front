import Image from "next/image";
import levelTestPreviewImg from "/public/images/pp_stair.png";
import { MouseEvent, useEffect } from "react";
import { useRouter } from "next/navigation";

interface ILevelCard {
  level: number;
  onClick: (e: MouseEvent, level: number) => void;
}

const LevelCard = ({ level, onClick }: ILevelCard) => {
  const router = useRouter();

  useEffect(() => {
    router.prefetch(`/level_tests/${level}`);
  }, []);
  return (
    <button
      id={`lt-${level}`}
      onDragStart={(e) => e.preventDefault()}
      onClick={(e) => onClick(e, level)}
      className="flex flex-col w-[28rem] bg-white hover:scale-110 hover:ring-4 hover:ring-rose-200 focus:scale-110 focus:outline-none focus:ring-4 focus:ring-rose-200 origin-center transition-all p-2 rounded-2xl shadow-xl"
    >
      <div className="w-full h-full my-5">
        <Image
          width={2000}
          height={0}
          src={levelTestPreviewImg}
          alt="레벨 테스트별 자켓 사진"
          priority
        />
      </div>
      <div className="flex flex-col items-center w-full h-full px-10">
        <div className="flex flex-col items-center">
          <p className="py-5 text-3xl">Lv.{level}</p>
          <p className="text-lg">달성도: 99.99%</p>
          <p className="text-lg">목표치: 85.00%</p>
        </div>
        <hr className="w-full mt-10 border-2 border-rose-200 rounded-lg" />
        <div className="flex flex-nowrap min-h-24 items-center gap-5 mt-2">
          <div className="flex flex-col w-10 items-center gap-1">
            <Image
              width={50}
              height={50}
              src={levelTestPreviewImg}
              alt="레벨 테스트별 패턴 아이콘"
              loading="lazy"
            />
            <p>Lv.{level}</p>
          </div>
          <div className="flex flex-col w-10 items-center gap-1">
            <Image
              width={50}
              height={50}
              src={levelTestPreviewImg}
              alt="레벨 테스트별 패턴 아이콘"
              loading="lazy"
            />
            <p>Lv.{level}</p>
          </div>
          <div className="flex flex-col w-10 items-center gap-1">
            <Image
              width={50}
              height={50}
              src={levelTestPreviewImg}
              alt="레벨 테스트별 패턴 아이콘"
              loading="lazy"
            />
            <p>Lv.{level}</p>
          </div>
        </div>
      </div>
    </button>
  );
};

export default LevelCard;
