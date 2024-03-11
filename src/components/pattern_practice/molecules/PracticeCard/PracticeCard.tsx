import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface IPracticeCard {
  practiceId: number;
  title: string;
  imgSrc: StaticImageData;
  patterns: string[];
}

const PracticeCard = ({
  practiceId,
  title,
  imgSrc,
  patterns,
}: IPracticeCard) => {
  return (
    <Link
      href={`/pattern_practice/${practiceId}`}
      className="flex flex-col items-center w-full py-4 gap-3 rounded-2xl shadow-lg bg-white"
    >
      <Image
        src={imgSrc}
        alt="계단"
        width={200}
        height={200}
        className="w-auto h-full"
        priority
      />
      <p className="font-semibold">{title}</p>
      <p className="text-sm text-rose-400 break-keep">{patterns.join(" | ")}</p>
    </Link>
  );
};

export default PracticeCard;
