"use client";

import InputWithEditBtn from "@/components/my_page/atoms/InputWithEditBtn/InputWithEditBtn";
import MainSection from "@/components/public/molecules/MainSection/MainSection";
import { ChangeEvent, RefObject, useRef, useState } from "react";
import SettingElem from "@/components/my_page/molecules/SettingElem/SettingElem";
import SettingSection from "@/components/my_page/organisms/SettingSection/SettingSection";
import Image from "next/image";
import PlateFront from "@/components/public/atoms/PlateFront/PlateFront";
import PlateBack from "@/components/public/atoms/PlateBack/PlateBack";

const MyPage = () => {
  const [localProfileImgSrc, setLocalProfileImgSrc] = useState("");

  const accountSettingRef = useRef<HTMLTableSectionElement>(null);
  const plateSettingRef = useRef<HTMLTableSectionElement>(null);

  const moveToSettingSectionByRef = (
    ref: RefObject<HTMLTableSectionElement>,
  ) => {
    ref.current?.scrollIntoView({ block: "center", behavior: "smooth" });
  };

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
                  <Image
                    width={999}
                    height={999}
                    className="max-w-32 h-32 rounded-full object-cover border"
                    src={`${
                      localProfileImgSrc ||
                      process.env.NEXT_PUBLIC_AWS_CLOUDFRONT_URL + "/logo.png"
                    }`}
                    alt="프로필 이미지"
                  />
                  <label className="flex justify-center items-center w-full h-full absolute top-0 left-0 bg-black rounded-full opacity-0 hover:opacity-30 transition-all cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={encodeFileToBase64}
                    />
                    <span className="text-white font-semibold">
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
                  chingho="디맥 플레이어"
                  localImgSrc={localProfileImgSrc}
                />
                <PlateBack />
              </div>
            </SettingElem>
          </SettingSection>
        </main>
      </div>
    </MainSection>
  );
};

export default MyPage;
