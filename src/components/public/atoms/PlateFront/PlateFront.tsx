import PlateChinghoBtn from "@/components/my_page/atoms/PlateChinghoBtn/PlateChinghoBtn";
import { IChingho } from "@/interfaces";
import CustomImage from "../CustomImage/CustomImage";

interface IPlateFront {
  nickname: string;
  level: number;
  fromBgColor: string;
  toBgColor: string;
  chinghoSettings: IChingho;
  localImgSrc?: string;
}

const PlateFront = ({
  nickname,
  level,
  chinghoSettings,
  fromBgColor,
  toBgColor,
  localImgSrc,
}: IPlateFront) => {
  return (
    <div
      className={`flex justify-between items-center w-[30rem] h-[17rem] p-10 rounded-xl shadow-lg bg-gradient-to-b ${fromBgColor} ${toBgColor}`}
    >
      <div className="flex flex-col gap-7">
        <div className="text-4xl">
          <p className="text-lg">{`Lv.${level}`}</p>
          <p>{nickname}</p>
        </div>
        <PlateChinghoBtn {...chinghoSettings} size="sm" />
      </div>
      <CustomImage
        size="md"
        src="/logo.png"
        alt="프로필 이미지"
        highPriorityImgSrc={localImgSrc}
        roundedFull
        objectCover
      />
    </div>
  );
};

export default PlateFront;
