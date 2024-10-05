import { ReactNode, RefObject, useState } from "react";
import useInput from "@/hooks/useInput";
import { TChinghoRank } from "../../../types";
import { IChingho } from "../../../interfaces";
import SettingTitle from "@/components/atoms/SettingTitle/SettingTitle";
import SettingElem from "@/components/molecules/SettingElem/SettingElem";
import PlateBgSample from "@/components/atoms/PlateBgSample/PlateBgSample";
import PlateChinghoRankExpl from "@/components/atoms/PlateChinghoRankExpl/PlateChinghoRankExpl";
import PlateChinghoBtn from "@/components/atoms/PlateChinghoBtn/PlateChinghoBtn";
import PlateChinghoListByRank from "@/components/molecules/PlateChinghoListByRank/PlateChinghoListByRank";
import InputWithEditBtn from "@/components/atoms/InputWithEditBtn/InputWithEditBtn";
import PlateFront from "@/components/molecules/PlateFront/PlateFront";
import PlateBack from "@/components/molecules/PlateBack/PlateBack";
import Checkbox from "@/components/atoms/Checkbox/Checkbox";

interface IMPPlateSettings {
  plateSettingRef: RefObject<HTMLTableSectionElement>;
  nickname: string;
  localProfileImgSrc: string;
}

const MPPlateSettings = ({
  plateSettingRef,
  nickname,
  localProfileImgSrc,
}: IMPPlateSettings) => {
  // Input Management
  const [comment, changeComment] = useInput({
    type: "text",
    initValue: "한줄 소개",
  });

  const [visibleLevel, changeVisibleLevel] = useInput({
    type: "checkbox",
    initValue: true,
  });
  const [visibleChingho, changeVisibleChingho] = useInput({
    type: "checkbox",
    initValue: true,
  });
  const [visibleChinghoIcon, changeVisibleChinghoIcon] = useInput({
    type: "checkbox",
    initValue: true,
  });

  // Plate Background Color Management
  const [plateBgColor, setPlateBgColor] = useState("red");

  const changePlateBgColorById = (bgColor: string) => {
    setPlateBgColor(bgColor);
  };

  // Plate Chingho Current Settings Management
  const [plateChingoSettings, setPlateChinghoSettings] = useState<IChingho>({
    rank: 1,
    children: "디맥 플레이어",
    visibleChingho,
    visibleChinghoIcon,
  });
  const changePlateChingho = (rank: TChinghoRank, children: ReactNode) => {
    setPlateChinghoSettings({ rank, children });
  };

  return (
    <section ref={plateSettingRef} className="flex flex-col gap-24">
      <SettingTitle>플레이트 설정</SettingTitle>
      <SettingElem title="플레이트 미리보기">
        <div className="flex items-center gap-10">
          <PlateFront
            nickname={nickname}
            level={3}
            fromBgColor={`from-${plateBgColor}-500`}
            toBgColor={`to-${plateBgColor}-50`}
            comment={comment}
            chinghoSettings={plateChingoSettings}
            plateVisibleSettings={{
              visibleLevel,
              visibleChingho,
              visibleChinghoIcon,
            }}
            localImgSrc={localProfileImgSrc}
          />
          <PlateBack
            fromBgColor={`from-${plateBgColor}-500`}
            toBgColor={`to-${plateBgColor}-50`}
          />
        </div>
      </SettingElem>
      <SettingElem title="플레이트 색상">
        <div className="flex gap-10">
          <PlateBgSample
            color="red"
            currBgColor={plateBgColor}
            fromBgColor={`from-red-500`}
            toBgColor={`to-red-50`}
            onClick={changePlateBgColorById}
          />
          <PlateBgSample
            color="lime"
            currBgColor={plateBgColor}
            fromBgColor={`from-lime-500`}
            toBgColor={`to-lime-50`}
            onClick={changePlateBgColorById}
          />
          <PlateBgSample
            color="indigo"
            currBgColor={plateBgColor}
            fromBgColor={`from-indigo-500`}
            toBgColor={`to-indigo-50`}
            onClick={changePlateBgColorById}
          />
          <PlateBgSample
            color="purple"
            currBgColor={plateBgColor}
            fromBgColor={`from-purple-500`}
            toBgColor={`to-purple-50`}
            onClick={changePlateBgColorById}
          />
        </div>
      </SettingElem>
      <SettingElem title="칭호 설정">
        <div className="flex flex-col">
          <div className="flex items-center mb-5">
            <span className="text-lg mr-5">현재 사용 중인 칭호:</span>
            <PlateChinghoBtn {...plateChingoSettings} />
          </div>
          <div className="my-5">
            <div className="flex flex-wrap gap-5">
              <PlateChinghoRankExpl rank={1}>노말</PlateChinghoRankExpl>
              <PlateChinghoRankExpl rank={2}>리게이</PlateChinghoRankExpl>
              <PlateChinghoRankExpl rank={3}>
                능동적인 리게이
              </PlateChinghoRankExpl>
              <PlateChinghoRankExpl rank={4}>악귀</PlateChinghoRankExpl>
            </div>
          </div>
          <PlateChinghoListByRank rank={1} onClick={changePlateChingho} />
          <PlateChinghoListByRank rank={2} onClick={changePlateChingho} />
          <PlateChinghoListByRank rank={3} onClick={changePlateChingho} />
          <PlateChinghoListByRank rank={4} onClick={changePlateChingho} />
        </div>
      </SettingElem>
      <SettingElem title="한줄 소개">
        <InputWithEditBtn
          value={comment}
          changeValue={changeComment}
          placeholder="당신의 한줄 소개를 적어주세요!"
          maxLength={25}
        />
      </SettingElem>
      <SettingElem title="플레이트 표시 설정">
        <Checkbox
          value="레벨"
          checked={visibleLevel}
          onChange={changeVisibleLevel}
        />
        <Checkbox
          value="칭호"
          checked={visibleChingho}
          onChange={changeVisibleChingho}
        />
        <Checkbox
          value="칭호 아이콘"
          checked={visibleChinghoIcon}
          onChange={changeVisibleChinghoIcon}
        />
      </SettingElem>
      <hr className="border-2 rounded-lg" />
    </section>
  );
};

export default MPPlateSettings;
