import { IPatternPracticeRes } from "@/api/pattern_practice";
import Image from "next/image";
import Link from "next/link";

const PracticeCard = ({
  id,
  title,
  imgSrc,
  patternInfo,
  keyNum,
}: IPatternPracticeRes) => {
  const dump = patternInfo; //임시데이터
  return (
    <Link
      href={`/pattern_practice/${keyNum}/${id}`}
      className="flex flex-col items-center max-w-80 pb-4 gap-3 rounded-2xl shadow-lg bg-white border hover:scale-105 transition-all overflow-hidden"
    >
      <div className="relative">
        <Image src={imgSrc} alt={title} width={1000} height={0} priority />
        <div className="absolute top-2 -left-7 w-28 -rotate-[35deg] text-center font-semibold bg-emerald-400 text-white">
          Lv. 2
        </div>
      </div>
      <p className="font-semibold text-lg">{title}</p>
      <div className="text-sm text-white px-3 py-1 bg-emerald-400 rounded-full">
        연타
      </div>
    </Link>
  );
};

/**
 * 이전 패턴정보 Display 코드
 * {Object.entries(patternInfo).map(
          (pattern) =>
            pattern[1] !== 0 && (
              <p
                key={`${pattern[0]} Lv.${pattern[1]}`}
                className="flex justify-between gap-5"
              >
                <span>{pattern[0]}</span>
                <span>Lv.{pattern[1]}</span>
              </p>
            ),
        )}
 */

export default PracticeCard;
