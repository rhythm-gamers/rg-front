import Link from "next/link";
import { useRouter } from "next/navigation";
import { MouseEvent } from "react";

interface ILevelCard {
  level: number;

  isDragging: boolean;
}

const LevelCard = ({ level, isDragging }: ILevelCard) => {
  const router = useRouter();

  const navigateToLevelTestByClick = (e: MouseEvent) => {
    e.preventDefault();
    if (isDragging) return;
    router.push(`/level_tests/${level + 1}`);
  };

  return (
    <Link
      href={`/level_tests/${level + 1}`}
      id={`lt-${level + 1}`}
      onDragStart={(e) => e.preventDefault()}
      onClick={navigateToLevelTestByClick}
      className="flex flex-col min-w-[26rem] h-full bg-white hover:scale-110 focus:scale-110 origin-center transition-all p-2 rounded-2xl shadow-xl"
    >
      <div className="w-full h-full my-5">
        <img
          src="/images/pp_stair.png"
          alt="레벨 테스트별 자켓 사진"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col items-center w-full h-full px-10">
        <div className="flex flex-col items-center">
          <p className="py-5 text-3xl">Lv.{level + 1}</p>
          <p className="text-lg">달성도: 99.99%</p>
          <p className="text-lg">목표치: 85.00%</p>
        </div>
        <hr className="w-full mt-10 border-2" />
        <div className="flex flex-nowrap min-h-24 items-center gap-5 mt-2">
          <div className="flex flex-col w-10 items-center gap-1">
            <img
              src="/images/pp_stair.png"
              alt="레벨 테스트별 패턴 아이콘"
              loading="lazy"
            />
            <p>Lv.{level + 1}</p>
          </div>
          <div className="flex flex-col w-10 items-center gap-1">
            <img
              src="/images/pp_stair.png"
              alt="레벨 테스트별 패턴 아이콘"
              loading="lazy"
            />
            <p>Lv.{level + 1}</p>
          </div>
          <div className="flex flex-col w-10 items-center gap-1">
            <img
              src="/images/pp_stair.png"
              alt="레벨 테스트별 패턴 아이콘"
              loading="lazy"
            />
            <p>Lv.{level + 1}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LevelCard;
