import { TSize } from "@/types";
import Image from "next/image";

interface ICustomImage {
  size: TSize;
  src: string;
  alt: string;
  border?: boolean;
  roundedFull?: boolean;
  priority?: boolean;
  objectCover?: boolean;
  className?: string;
  highPriorityImgSrc?: string;
}

const CustomImage = ({
  size,
  src,
  alt,
  border,
  roundedFull,
  priority,
  objectCover,
  className,
  highPriorityImgSrc,
}: ICustomImage) => {
  return (
    <div
      className={`relative ${
        size === "xs"
          ? "min-w-7 min-h-7"
          : size === "sm"
          ? "min-w-14 min-h-14"
          : "min-w-32 min-h-32"
      } ${className ? className : ""}`}
    >
      <Image
        className={`${border ? "border" : ""} ${
          objectCover ? "object-cover" : "object-contain"
        } ${roundedFull ? "rounded-full" : ""}`}
        src={`${
          highPriorityImgSrc || process.env.NEXT_PUBLIC_AWS_CLOUDFRONT_URL + src
        }`}
        priority={priority}
        fill
        sizes="100%"
        alt={alt}
      />
    </div>
  );
};

export default CustomImage;
