import PlateChinghoBtn from "@/components/my_page/atoms/PlateChinghoBtn/PlateChinghoBtn";
import { IChingho, IPlateVisible } from "@/interfaces";
import CustomImage from "../../atoms/CustomImage/CustomImage";

interface IPlateFront {
  nickname: string;
  level: number;
  fromBgColor: string;
  toBgColor: string;
  comment: string;
  chinghoSettings: IChingho;
  plateVisibleSettings: IPlateVisible;
  localImgSrc?: string;
}

const PlateFront = ({
  nickname,
  level,
  chinghoSettings,
  plateVisibleSettings,
  fromBgColor,
  toBgColor,
  comment,
  localImgSrc,
}: IPlateFront) => {
  const { visibleLevel, visibleChingho, visibleChinghoIcon } =
    plateVisibleSettings;
  const advancedChinghoSettings = {
    ...chinghoSettings,
    visibleChingho,
    visibleChinghoIcon,
  };

  return (
    <div
      className={`flex justify-between items-center w-[31rem] h-[17rem] p-10 rounded-xl shadow-lg bg-gradient-to-b ${fromBgColor} ${toBgColor}`}
    >
      <div className="flex flex-col gap-7">
        <div className="text-4xl">
          <p className="text-lg">{visibleLevel && `Lv.${level}`}</p>
          <p>{nickname}</p>
          <p className="text-sm text-neutral-700 mt-1">{comment}</p>
        </div>

        <PlateChinghoBtn {...advancedChinghoSettings} size="sm" viewOnly />
      </div>
      <CustomImage
        size="md"
        src="/pp_stair.png"
        alt="프로필 이미지"
        highPriorityImgSrc={localImgSrc}
        roundedFull
      />
    </div>
  );
};

export default PlateFront;
