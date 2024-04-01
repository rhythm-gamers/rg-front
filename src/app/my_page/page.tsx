"use client";

import InputWithEditBtn from "@/components/my_page/atoms/InputWithEditBtn/InputWithEditBtn";
import MainSection from "@/components/public/molecules/MainSection/MainSection";
import { ChangeEvent, ReactNode, RefObject, useRef, useState } from "react";
import SettingElem from "@/components/my_page/molecules/SettingElem/SettingElem";
import SettingSection from "@/components/my_page/organisms/SettingSection/SettingSection";
import PlateFront from "@/components/public/atoms/PlateFront/PlateFront";
import PlateBack from "@/components/public/atoms/PlateBack/PlateBack";
import { TChinghoRank } from "@/types";
import { IChingho } from "@/interfaces";
import PlateChinghoBtn from "@/components/my_page/atoms/PlateChinghoBtn/PlateChinghoBtn";
import PlateChinghoRankExpl from "@/components/my_page/atoms/PlateChinghoRankExpl/PlateChinghoRankExpl";
import PlateBgSample from "@/components/my_page/atoms/PlateBgSample/PlateBgSample";
import PlateChinghoListByRank from "@/components/my_page/molecules/PlateChinghoListByRank/PlateChinghoListByRank";
import CustomImage from "../../components/public/atoms/CustomImage/CustomImage";

const MyPage = () => {
  // Plate Background Color Management
  const [plateBgColor, setPlateBgColor] = useState("red");

  const changePlateBgColorById = (bgColor: string) => {
    setPlateBgColor(bgColor);
  };

  // Plate Chingho Current Settings Management
  const [plateChingoSettings, setPlateChinghoSettings] = useState<IChingho>({
    rank: 1,
    children: "디맥 플레이어",
  });

  const changePlateChingho = (rank: TChinghoRank, children: ReactNode) => {
    setPlateChinghoSettings({ rank, children });
  };

  // Sidebar Shortcut
  const accountSettingRef = useRef<HTMLTableSectionElement>(null);
  const plateSettingRef = useRef<HTMLTableSectionElement>(null);

  const moveToSettingSectionByRef = (
    ref: RefObject<HTMLTableSectionElement>,
  ) => {
    if (!ref.current) return;

    const headerOffset = 100;
    const elementPosition = ref.current?.getBoundingClientRect().top;
    const finalPosition = elementPosition + window.scrollY - headerOffset;
    scrollTo({ top: finalPosition, behavior: "smooth" });
  };

  // Local File Preview
  const [localProfileImgSrc, setLocalProfileImgSrc] = useState("");

  const encodeFileToBase64 = (e: ChangeEvent<HTMLInputElement>) => {
    const fileBlob = e.target.files?.[0];
    if (!fileBlob) return;

    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise<void>((resolve) => {
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setLocalProfileImgSrc(reader.result);
        }
        resolve();
      };
    });
  };

  return (
    <MainSection>
      <div className="flex w-full h-full px-20 py-5 gap-10">
        <div className="w-[25rem] h-[35rem] sticky top-20 bg-white rounded-lg shadow-md">
          <div className="flex flex-col px-10">
            <h1 className="mt-8 mb-5 text-lg font-bold">마이페이지</h1>
            <div className="flex flex-col">
              <button
                type="button"
                onClick={() => moveToSettingSectionByRef(accountSettingRef)}
                className="w-full py-3 rounded-lg text-left hover:text-rose-400 transition-all"
              >
                계정 설정
              </button>
              <button
                type="button"
                onClick={() => moveToSettingSectionByRef(plateSettingRef)}
                className="w-full py-3 rounded-lg text-left hover:text-rose-400 transition-all"
              >
                플레이트 설정
              </button>
              <button
                type="button"
                className="w-full py-3 rounded-lg text-left hover:text-rose-400 transition-all"
              >
                게임 설정
              </button>
            </div>
          </div>
        </div>
        <main className="flex flex-col w-full bg-white shadow-md rounded-lg gap-12 px-20 py-12">
          <SettingSection ref={accountSettingRef} title="계정 설정">
            <SettingElem title="프로필 설정">
              <div className="flex items-center">
                <div className="relative">
                  <CustomImage
                    size="md"
                    src="/logo.png"
                    alt="프로필 이미지"
                    highPriorityImgSrc={localProfileImgSrc}
                    roundedFull
                    border
                    objectCover
                  />
                  <label className="flex justify-center items-center w-full h-full absolute top-0 left-0 bg-black/30 opacity-0 hover:opacity-100 rounded-full transition-all cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={encodeFileToBase64}
                    />
                    <span className="text-white font-semibold absolute z-50">
                      프로필 변경
                    </span>
                  </label>
                </div>
                <InputWithEditBtn placeholder="당신의 새로운 닉네임을 입력해주세요!" />
              </div>
            </SettingElem>
            <SettingElem title="계정 연동">
              <button
                type="button"
                className="w-20 h-10 rounded-lg bg-gray-100"
              >
                스팀
              </button>
            </SettingElem>
          </SettingSection>

          <SettingSection ref={plateSettingRef} title="플레이트 설정">
            <SettingElem title="플레이트 미리보기">
              <div className="flex justify-around items-center w-full">
                <PlateFront
                  nickname="닉네임"
                  level={3}
                  fromBgColor={`from-${plateBgColor}-500`}
                  toBgColor={`to-${plateBgColor}-50`}
                  chinghoSettings={plateChingoSettings}
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
          </SettingSection>
        </main>
      </div>
    </MainSection>
  );
};

export default MyPage;
