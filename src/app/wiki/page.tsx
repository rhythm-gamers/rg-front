"use client";

import MainSection from "@/components/public/molecules/MainSection/MainSection";
import SectionTitle from "@/components/public/atoms/SectionTitle/SectionTitle";
import Dropdown from "@/components/wiki/atoms/Dropdown/Dropdown";
import { useEffect, useState } from "react";
import WikiAPI, { IWiki, IWikiRes } from "@/api/wiki";

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

type TWikis = [string, number | IWiki[]];

const Wiki = () => {
  const [wikis, setWikis] = useState<TWikis[]>();

  const getWikis = async () => {
    const newWikis = await WikiAPI.getAll();
    setWikis(Object.entries(newWikis.data));
  };

  useEffect(() => {
    getWikis();
  }, []);

  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <MainSection sectionTitle="리듬 게임 용어집">
      {/* 용어집 자음 셀렉터 */}
      <div className="w-full  flex justify-center">
        <div className="w-4/5 mt-5 mb-16 px-16 rounded-xl border-2 border-stone-300 flex flex-row justify-between items-center shadow-md">
          {/* TODO: 용어집 자음별 컴포넌트화 필요 */}
          {wikiMenu.map((menu) => (
            <div>{menu}</div>
          ))}
        </div>
      </div>
      <div className="flex flex-row">
        {/* 좌측 네비게이터 */}
        <div className="flex w-60">
          <div className="w-full h-[500px] rounded-xl border-2 border-stone-300 flex flex-col items-center shadow-xl">
            {wikis?.map((menu, idx) => {
              const active = activeIdx === idx ? true : false;
              const subMenu = menu[1] as IWiki[];
              return (
                <Dropdown
                  menuItem={menu[0]}
                  key={idx}
                  idx={idx}
                  activeIdx={activeIdx}
                  active={active}
                  setActiveIdx={setActiveIdx}
                  subMenu={subMenu}
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

export default Wiki;
