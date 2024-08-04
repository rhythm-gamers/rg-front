"use client";

import { RefObject, useRef } from "react";
import useInput from "@/hooks/useInput";
import MPSideBar from "@/components/organisms/MPSideBar/MPSideBar";
import MyPageTP from "@/components/templates/MyPageTP/MyPageTP";
import MPPlateSettings from "@/components/organisms/MPPlateSettings/MPPlateSettings";
import MPGameSettings from "@/components/organisms/MPGameSettings/MPGameSettings";
import MPAccountSettings from "@/components/organisms/MPAccountSettings/MPAccountSettings";

const MyPage = () => {
  // Sidebar Shortcut
  const accountSettingRef = useRef<HTMLTableSectionElement>(null);
  const plateSettingRef = useRef<HTMLTableSectionElement>(null);
  const gameSettingRef = useRef<HTMLTableSectionElement>(null);

  const moveToSettingRef = (ref: RefObject<HTMLTableSectionElement>) => {
    if (!ref.current) return;

    const headerOffset = 100;
    const elementPosition = ref.current?.getBoundingClientRect().top;
    const finalPosition = elementPosition + window.scrollY - headerOffset;
    scrollTo({ top: finalPosition, behavior: "smooth" });
  };

  const [localProfileImgSrc, changeLocalProfileImgSrc] = useInput({
    type: "file",
    initValue: "",
  });

  const [nickname, changeNickname] = useInput({
    type: "text",
    initValue: "닉네임",
    notIncludes: ["space", "specialChar"],
  });

  return (
    <MyPageTP
      SideBar={
        <MPSideBar
          settingTitles={["계정 설정", "플레이트 설정", "게임 설정"]}
          moveToSettingRef={moveToSettingRef}
          refs={[accountSettingRef, plateSettingRef, gameSettingRef]}
        />
      }
      AccountSettings={
        <MPAccountSettings
          accountSettingRef={accountSettingRef}
          nicknameState={[nickname, changeNickname]}
          localProfileImgSrcState={[
            localProfileImgSrc,
            changeLocalProfileImgSrc,
          ]}
        />
      }
      PlateSettings={
        <MPPlateSettings
          plateSettingRef={plateSettingRef}
          nickname={nickname}
          localProfileImgSrc={localProfileImgSrc}
        />
      }
      GameSettings={<MPGameSettings gameSettingRef={gameSettingRef} />}
    />
  );
};

export default MyPage;
