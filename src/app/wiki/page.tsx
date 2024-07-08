"use client";

import MainSection from "@/components/public/molecules/MainSection/MainSection";
import SectionTitle from "@/components/public/atoms/SectionTitle/SectionTitle";
import Dropdown from "@/components/wiki/atoms/Dropdown/Dropdown";
import { useState } from "react";

const wikiMenu = [
  "ㄱ",
  "ㄴ",
  "ㄷ",
  "ㄹ",
  "ㅁ",
  "ㅂ",
  "ㅅ",
  "ㅇ",
  "ㅈ",
  "ㅊ",
  "ㅋ",
  "ㅌ",
  "ㅍ",
  "ㅎ",
];
let index: number;

const wiki = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <MainSection sectionTitle="리듬 게임 용어집">
      {/* 용어집 자음 셀렉터 */}
      <div className="w-full flex justify-center">
        <div className="w-4/5 mt-5 mb-10 flex flex-row justify-between items-center">
          {/* TODO: 용어집 자음별 컴포넌트화 필요 */}
          {wikiMenu.map((menu) => (
            <div>{menu}</div>
          ))}
        </div>
      </div>
      <div className="flex flex-row">
        {/* 좌측 네비게이터 */}
        <div className="flex w-60">
          <div className="w-full h-full border-2 border-black flex flex-col items-center">
            {wikiMenu.map((menu, id) => {
              const active = activeIdx === index + 1 ? true : false;
              return (
                <Dropdown
                  menuItem={menu}
                  key={id}
                  idx={id}
                  activeIdx={activeIdx}
                  active={active}
                  setActiveIdx={setActiveIdx}
                  subMenu={[{ idx: id, name: menu }]}
                />
              );
            })}
          </div>
        </div>
        {/* 우측 설명란 */}
        <div className="ml-10 flex flex-1 flex-col">
          <SectionTitle className="mt-0">리듬 게임 용어집 항목 1</SectionTitle>
          리듬 게임 용어집 항목1 내용1
        </div>
      </div>
    </MainSection>
  );
};

export default wiki;
