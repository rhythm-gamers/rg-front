import Image from "next/image";

interface IPlateFront {
  nickname: string;
  level: number;
  chingho: string;
  localImgSrc?: string;
}

const PlateFront = ({ nickname, level, chingho, localImgSrc }: IPlateFront) => {
  return (
    <div className="flex justify-around items-center w-[27rem] h-[17rem] rounded-lg bg-gradient-to-b from-red-500 to-red-50">
      <div className="flex flex-col gap-3">
        <p className="text-3xl">{nickname}</p>
        <p className="text-lg">
          <span className="mr-3">{`Lv.${level}`}</span>
          <span>{chingho}</span>
        </p>
      </div>
      <Image
        width={999}
        height={999}
        className="max-w-32 h-32 rounded-full object-cover bg-white shadow-lg"
        src={`${
          localImgSrc ||
          process.env.NEXT_PUBLIC_AWS_CLOUDFRONT_URL + "/logo.png"
        }`}
        alt="프로필 이미지"
      />
    </div>
  );
};

export default PlateFront;
