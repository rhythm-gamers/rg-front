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
  return (
    <Link
      href={`/pattern_practice/${keyNum}/${id}`}
      className="flex flex-col items-center max-w-80 py-4 gap-3 rounded-2xl shadow-lg bg-white border hover:scale-105 transition-all"
    >
      <Image src={imgSrc} alt="계단" width={1000} height={0} priority />
      <p className="font-semibold">{title}</p>
      <div className="text-sm text-rose-400 break-keep">
        {Object.entries(patternInfo).map(
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
      </div>
    </Link>
  );
};

export default PracticeCard;
