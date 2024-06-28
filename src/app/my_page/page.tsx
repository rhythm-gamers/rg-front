"use client";

import InputWithEditBtn from "@/components/my_page/atoms/InputWithEditBtn/InputWithEditBtn";
import MainSection from "@/components/public/molecules/MainSection/MainSection";
import { ReactNode, RefObject, useRef, useState } from "react";
import SettingElem from "@/components/my_page/molecules/SettingElem/SettingElem";
import SettingSection from "@/components/my_page/organisms/SettingSection/SettingSection";
import PlateFront from "@/components/public/molecules/PlateFront/PlateFront";
import PlateBack from "@/components/public/molecules/PlateBack/PlateBack";
import { TChinghoRank } from "@/types";
import { IChingho } from "@/interfaces";
import PlateChinghoBtn from "@/components/my_page/atoms/PlateChinghoBtn/PlateChinghoBtn";
import PlateChinghoRankExpl from "@/components/my_page/atoms/PlateChinghoRankExpl/PlateChinghoRankExpl";
import PlateBgSample from "@/components/my_page/atoms/PlateBgSample/PlateBgSample";
import PlateChinghoListByRank from "@/components/my_page/molecules/PlateChinghoListByRank/PlateChinghoListByRank";
import CustomImage from "../../components/public/atoms/CustomImage/CustomImage";
import useInput from "@/hooks/useInput";
import Checkbox from "@/components/public/atoms/Checkbox/Checkbox";
import AuthAPI from "@/api/auth";
import KeySetting from "@/components/my_page/molecules/KeySetting/KeySetting";
import CustomBtn from "@/components/public/atoms/CustomBtn/CustomBtn";

const MyPage = () => {
  // Input Management
  const [nickname, changeNickname] = useInput({
    type: "text",
    initValue: "닉네임",
    notIncludes: ["space", "specialChar"],
  });
  const [comment, changeComment] = useInput({
    type: "text",
    initValue: "한줄 소개",
  });

  const [localProfileImgSrc, changeLocalProfileImgSrc] = useInput({
    type: "file",
    initValue: "",
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

  // Game Key Settings Management
  const [keyNum, setKeyNum] = useState<4 | 5 | 6>(4);
  const [keySettingState, setKeySettingState] = useState<
    "init" | "started" | "finished"
  >("init");

  // Sidebar Shortcut
  const accountSettingRef = useRef<HTMLTableSectionElement>(null);
  const plateSettingRef = useRef<HTMLTableSectionElement>(null);
  const gameSettingRef = useRef<HTMLTableSectionElement>(null);

  const moveToSettingSectionByRef = (
    ref: RefObject<HTMLTableSectionElement>,
  ) => {
    if (!ref.current) return;

    const headerOffset = 100;
    const elementPosition = ref.current?.getBoundingClientRect().top;
    const finalPosition = elementPosition + window.scrollY - headerOffset;
    scrollTo({ top: finalPosition, behavior: "smooth" });
  };

  return (
    <MainSection>
      <div className="flex w-full h-full px-20 py-5 gap-10">
        <aside className="flex flex-col justify-between min-w-[20rem] h-full gap-10 sticky top-20">
          <div className="h-[35rem] bg-white rounded-lg shadow-md">
            <div className="flex flex-col px-10">
              <h1 className="my-8 text-lg font-bold">마이페이지</h1>
              <div className="flex flex-col">
                <CustomBtn
                  size="md"
                  type="clear"
                  onClick={() => moveToSettingSectionByRef(accountSettingRef)}
                  className="text-left hover:text-rose-400"
                  widthFull
                >
                  계정 설정
                </CustomBtn>
                <CustomBtn
                  size="md"
                  type="clear"
                  onClick={() => moveToSettingSectionByRef(plateSettingRef)}
                  className="text-left hover:text-rose-400"
                  widthFull
                >
                  플레이트 설정
                </CustomBtn>
                <CustomBtn
                  size="md"
                  type="clear"
                  onClick={() => moveToSettingSectionByRef(gameSettingRef)}
                  className="text-left hover:text-rose-400"
                  widthFull
                >
                  게임 설정
                </CustomBtn>
              </div>
            </div>
          </div>
          <CustomBtn
            size="xl"
            type="accept"
            widthFull
            roundedFull
            haveShadow
            onClick={() =>
              AuthAPI.login({
                username: "",
                password: "",
              })
            }
          >
            임시 로그인 버튼
          </CustomBtn>
        </aside>
        <section className="flex flex-col w-full bg-white shadow-md rounded-lg gap-12 px-20 py-12">
          <SettingSection ref={accountSettingRef} title="계정 설정">
            <SettingElem title="프로필 설정">
              <div className="flex items-center">
                <div className="relative mr-10">
                  <CustomImage
                    size="md"
                    src="/pp_stair.png"
                    alt="프로필 이미지"
                    highPriorityImgSrc={localProfileImgSrc}
                    roundedFull
                    border
                  />
                  <label className="flex justify-center items-center w-full h-full absolute top-0 left-0 bg-black/30 opacity-0 hover:opacity-100 rounded-full transition-all cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={changeLocalProfileImgSrc}
                    />
                    <span className="text-white font-semibold">
                      프로필 변경
                    </span>
                  </label>
                </div>
                <InputWithEditBtn
                  value={nickname}
                  changeValue={changeNickname}
                  placeholder="당신의 새로운 닉네임을 입력해주세요! (최소 1자 ~ 최대 12자)"
                  maxLength={15}
                  required
                />
              </div>
            </SettingElem>
            <SettingElem title="계정 연동">
              <CustomBtn
                size="lg"
                type="disabled"
                onClick={() => AuthAPI.steamLogin()}
                roundedFull
              >
                스팀
              </CustomBtn>
            </SettingElem>
          </SettingSection>

          <SettingSection ref={plateSettingRef} title="플레이트 설정">
            <SettingElem title="플레이트 미리보기">
              <div className="flex justify-around items-center w-full">
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
          </SettingSection>

          <SettingSection ref={gameSettingRef} title="게임 설정">
            <SettingElem title="키 설정">
              <KeySetting
                keyNum={keyNum}
                setKeyNum={setKeyNum}
                state={keySettingState}
                setState={setKeySettingState}
              />
            </SettingElem>
          </SettingSection>
        </section>
      </div>
    </MainSection>
  );
};

export default MyPage;
