"use client";

import InputWithEditBtn from "@/components/my_page/atoms/InputWithEditBtn/InputWithEditBtn";
import MainSection from "@/components/public/molecules/MainSection/MainSection";
import { RefObject, useRef } from "react";

const MyPage = () => {
  const accountSettingRef = useRef<HTMLTableSectionElement>(null);

  const moveToSettingSectionByRef = (
    ref: RefObject<HTMLTableSectionElement>,
  ) => {
    ref.current?.scrollIntoView({ block: "end", behavior: "smooth" });
  };

  return (
    <MainSection>
      <div className="flex w-full h-full px-20 py-5 gap-10">
        <div className="w-[25rem] h-[35rem] sticky top-20 bg-white rounded-lg shadow-md">
          <div className="flex flex-col px-5">
            <h1 className="my-5 text-lg font-bold">마이페이지</h1>
            <div className="flex flex-col ml-4">
              <button
                type="button"
                onClick={() => moveToSettingSectionByRef(accountSettingRef)}
                className="w-full py-3 rounded-lg text-left hover:text-rose-400 transition-all"
              >
                계정 설정
              </button>
              <button
                type="button"
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
        <main className="flex flex-col w-full h-screen bg-white shadow-md rounded-lg gap-40 px-20 py-12">
          <section ref={accountSettingRef}>
            <h3 className="text-2xl mb-10 font-semibold">계정 설정</h3>
            <div className="flex flex-col gap-8">
              <p className="text-lg font-semibold">프로필 설정</p>
              <div className="flex items-center">
                <div className="relative">
                  <img
                    className="min-w-32 min-h-32 rounded-full object-cover border"
                    src={`${process.env.NEXT_PUBLIC_AWS_CLOUDFRONT_URL}/logo.png`}
                    alt="프로필 이미지"
                  />
                  <label className="flex justify-center items-center w-full h-full absolute top-0 left-0 bg-black rounded-full opacity-0 hover:opacity-30 transition-all cursor-pointer">
                    <input type="file" className="hidden" />
                    <span className="text-white font-semibold">
                      프로필 변경
                    </span>
                  </label>
                </div>
                <InputWithEditBtn placeholder="당신의 새로운 닉네임을 입력해주세요!" />
              </div>
            </div>
          </section>
        </main>
      </div>
    </MainSection>
  );
};

export default MyPage;
