import { setCurrentLevel } from "@/lib/features/levelTest/levelTestSlice";
import { useAppDispatch } from "@/lib/hooks";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MouseEvent, MutableRefObject } from "react";

interface ILevelCard {
  level: number;
  isDragging: MutableRefObject<boolean>;
}

const LevelCard = ({ level, isDragging }: ILevelCard) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const navigateToLevelTestByClick = (e: MouseEvent) => {
    e.preventDefault();
    if (isDragging.current) return;
    dispatch(setCurrentLevel(level));
    router.push(`/level_tests/${level}`);
  };

  return (
    <Link
      href={`/level_tests/${level}`}
      id={`lt-${level}`}
      onDragStart={(e) => e.preventDefault()}
      onClick={navigateToLevelTestByClick}
      className="flex flex-col min-w-[26rem] h-full bg-white hover:scale-110 hover:ring-4 hover:ring-rose-200 focus:scale-110 focus:outline-none focus:ring-4 focus:ring-rose-200 origin-center transition-all p-2 rounded-2xl shadow-xl"
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
          <p className="py-5 text-3xl">Lv.{level}</p>
          <p className="text-lg">달성도: 99.99%</p>
          <p className="text-lg">목표치: 85.00%</p>
        </div>
        <hr className="w-full mt-10 border-2 border-rose-200 rounded-lg" />
        <div className="flex flex-nowrap min-h-24 items-center gap-5 mt-2">
          <div className="flex flex-col w-10 items-center gap-1">
            <img
              src="/images/pp_stair.png"
              alt="레벨 테스트별 패턴 아이콘"
              loading="lazy"
            />
            <p>Lv.{level}</p>
          </div>
          <div className="flex flex-col w-10 items-center gap-1">
            <img
              src="/images/pp_stair.png"
              alt="레벨 테스트별 패턴 아이콘"
              loading="lazy"
            />
            <p>Lv.{level}</p>
          </div>
          <div className="flex flex-col w-10 items-center gap-1">
            <img
              src="/images/pp_stair.png"
              alt="레벨 테스트별 패턴 아이콘"
              loading="lazy"
            />
            <p>Lv.{level}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LevelCard;
