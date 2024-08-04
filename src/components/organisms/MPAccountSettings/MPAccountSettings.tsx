import React, { ChangeEvent, RefObject } from "react";
import AuthAPI from "@/api/auth";
import SettingTitle from "@/components/atoms/SettingTitle/SettingTitle";
import SettingElem from "@/components/molecules/SettingElem/SettingElem";
import CustomImage from "@/components/atoms/CustomImage/CustomImage";
import InputWithEditBtn from "@/components/atoms/InputWithEditBtn/InputWithEditBtn";
import CustomBtn from "@/components/atoms/CustomBtn/CustomBtn";

interface IMPAccountSettings {
  accountSettingRef: RefObject<HTMLTableSectionElement>;
  nicknameState: [string, (e: ChangeEvent<HTMLInputElement>) => void];
  localProfileImgSrcState: [string, (e: ChangeEvent<HTMLInputElement>) => void];
}

const MPAccountSettings = ({
  accountSettingRef,
  nicknameState,
  localProfileImgSrcState,
}: IMPAccountSettings) => {
  const [nickname, changeNickname] = nicknameState;
  const [localProfileImgSrc, changeLocalProfileImgSrc] =
    localProfileImgSrcState;

  return (
    <section ref={accountSettingRef} className="flex flex-col gap-24">
      <SettingTitle>계정 설정</SettingTitle>
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
              <span className="text-white font-semibold">프로필 변경</span>
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
      <hr className="border-2 rounded-lg" />
    </section>
  );
};

export default MPAccountSettings;
