import type { Meta, StoryObj } from "@storybook/react";
import MyPageTP from "./MyPageTP";
import MPSideBar from "@/components/organisms/MPSideBar/MPSideBar";
import { fn } from "@storybook/test";
import MPAccountSettings from "@/components/organisms/MPAccountSettings/MPAccountSettings";
import { useRef } from "react";
import useInput from "@/hooks/useInput";
import MPPlateSettings from "@/components/organisms/MPPlateSettings/MPPlateSettings";
import MPGameSettings from "@/components/organisms/MPGameSettings/MPGameSettings";

const meta = {
  title: "MyPageTP",
  component: MyPageTP,
  args: {
    SideBar: <MPSideBar settingTitles={[]} moveToSettingRef={fn} refs={[]} />,
    AccountSettings: (
      <MPAccountSettings
        accountSettingRef={useRef(null)}
        nicknameState={useInput({ type: "text", initValue: "" })}
        localProfileImgSrcState={useInput({ type: "text", initValue: "" })}
      />
    ),
    PlateSettings: (
      <MPPlateSettings
        plateSettingRef={useRef(null)}
        nickname={""}
        localProfileImgSrc={""}
      />
    ),
    GameSettings: <MPGameSettings gameSettingRef={useRef(null)} />,
  },
} satisfies Meta<typeof MyPageTP>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
