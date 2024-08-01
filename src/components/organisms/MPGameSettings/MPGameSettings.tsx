import { RefObject, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import SettingTitle from "@/components/atoms/SettingTitle/SettingTitle";
import SettingElem from "@/components/molecules/SettingElem/SettingElem";
import CustomBtn from "@/components/atoms/CustomBtn/CustomBtn";
import KeySetting from "@/components/molecules/KeySetting/KeySetting";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setSpeed } from "@/lib/features/unity/unitySlice";

interface MPGameSettings {
  gameSettingRef: RefObject<HTMLTableSectionElement>;
}

const MPGameSettings = ({ gameSettingRef }: MPGameSettings) => {
  const dispatch = useAppDispatch();
  const speed = useAppSelector((state) => state.unity.speed);

  // Game Key Settings Management
  const [keyNum, setKeyNum] = useState<4 | 5 | 6>(4);
  const [keySettingState, setKeySettingState] = useState<
    "init" | "started" | "finished"
  >("init");

  const calculateSpeed = (amount: number) => {
    dispatch(setSpeed(speed + amount));
  };
  const changeSpeed = (speed: number) => {
    dispatch(setSpeed(speed));
  };

  return (
    <section ref={gameSettingRef} className="flex flex-col gap-24">
      <SettingTitle>게임 설정</SettingTitle>
      <SettingElem title="속도 설정">
        <div className="flex flex-col items-center gap-10">
          <div className="flex gap-5">
            <CustomBtn
              size={"xs"}
              type={"clear"}
              onClick={() => calculateSpeed(-0.1)}
            >
              <IoIosArrowBack size={44} />
            </CustomBtn>
            <span className="text-5xl tracking-widest">{speed.toFixed(1)}</span>
            <CustomBtn size={"xs"} type={"clear"}>
              <IoIosArrowForward
                size={44}
                onClick={() => calculateSpeed(0.1)}
              />
            </CustomBtn>
          </div>
          <div className="flex gap-20">
            <div className="flex flex-col items-center gap-3">
              <CustomBtn
                className="bg-green-400 text-white text-xl tracking-wider"
                size={"lg"}
                type={"clear"}
                onClick={() => changeSpeed(1.0)}
                roundedFull
              >
                <span>1.0</span>
              </CustomBtn>
              <p className="text-lg text-green-400 font-semibold">
                초심자에게 추천!
              </p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <CustomBtn
                className="bg-blue-400 text-white text-xl tracking-wider"
                size={"lg"}
                type={"clear"}
                onClick={() => changeSpeed(2.5)}
                roundedFull
              >
                <span>2.5</span>
              </CustomBtn>
              <p className="text-lg text-blue-400 font-semibold">
                중수라면 이 정도?
              </p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <CustomBtn
                className="bg-red-400 text-white text-xl tracking-wider"
                size={"lg"}
                type={"clear"}
                onClick={() => changeSpeed(3.0)}
                roundedFull
              >
                <span>3.0</span>
              </CustomBtn>
              <p className="text-lg text-red-400 font-semibold">
                고인물 어서오고~
              </p>
            </div>
          </div>
        </div>
      </SettingElem>
      <SettingElem title="키 설정">
        <KeySetting
          keyNum={keyNum}
          setKeyNum={setKeyNum}
          state={keySettingState}
          setState={setKeySettingState}
        />
      </SettingElem>
      <hr className="border-2 rounded-lg" />
    </section>
  );
};

export default MPGameSettings;
