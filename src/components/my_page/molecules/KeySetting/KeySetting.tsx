import {
  Dispatch,
  KeyboardEvent as ReactKeyboardEvent,
  SetStateAction,
} from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  setFiveKeyMaps,
  setFourKeyMaps,
  setSixKeyMaps,
} from "@/lib/features/unity/unitySlice";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import KeySettingElem from "../../atoms/KeySettingElem/KeySettingElem";

interface IKeySetting {
  keyNum: number;
  setKeyNum: Dispatch<SetStateAction<4 | 5 | 6>>;
  state: "init" | "started" | "finished";
  setState: Dispatch<SetStateAction<"init" | "started" | "finished">>;
}

const KeySetting = ({ keyNum, setKeyNum, state, setState }: IKeySetting) => {
  const dispatch = useAppDispatch();

  let setLocalKeyMaps: ActionCreatorWithPayload<string[], any>;
  const localKeyMaps = useAppSelector((state) => {
    if (keyNum === 4) {
      setLocalKeyMaps = setFourKeyMaps;
      return state.unity.fourKeyMaps;
    } else if (keyNum === 5) {
      setLocalKeyMaps = setFiveKeyMaps;
      return state.unity.fiveKeyMaps;
    } else if (keyNum === 6) {
      setLocalKeyMaps = setSixKeyMaps;
      return state.unity.sixKeyMaps;
    } else return [""];
  });

  const onKeyDown = (e: ReactKeyboardEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (state === "finished") return;

    let value = e.key;
    let newKeyMaps = [...localKeyMaps];
    const changeIdx = newKeyMaps.indexOf("");

    // 쉬프트 키의 경우
    if (e.shiftKey) {
      if (e.nativeEvent.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT) {
        value = "LeftShift";
      } else if (
        e.nativeEvent.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT
      ) {
        value = "RightShift";
      }
    }
    // 스페이스바의 경우
    else if (e.key === " ") {
      value = "Space";
    }

    newKeyMaps[changeIdx] = value;
    dispatch(setLocalKeyMaps(newKeyMaps));

    // 마지막 입력일 경우
    if (localKeyMaps.length == changeIdx + 1) {
      setState("finished");
    }
  };

  const modifyKeys = () => {
    setState("started");
    dispatch(
      setLocalKeyMaps(Array(keyNum === 5 ? keyNum + 1 : keyNum).fill("")),
    );
  };
  return (
    <div className="flex flex-col gap-10">
      {/** 키 선택 */}
      <div className="flex h-14 bg-neutral-100 shadow-md rounded-full">
        <button
          className={`w-full py-1 text-lg ${keyNum === 4 && "text-rose-400"}`}
          onClick={() => setKeyNum(4)}
        >
          4키
        </button>
        <button
          className={`w-full py-1 text-lg ${keyNum === 5 && "text-rose-400"}`}
          onClick={() => setKeyNum(5)}
        >
          5키
        </button>
        <button
          className={`w-full py-1 text-lg ${keyNum === 6 && "text-rose-400"}`}
          onClick={() => setKeyNum(6)}
        >
          6키
        </button>
      </div>

      {/** 현재 설정된 조작키 */}
      <div className="flex justify-center w-full gap-10">
        {localKeyMaps.map((key, idx) => (
          <KeySettingElem key={idx} value={key} />
        ))}
      </div>

      <button
        type="button"
        onClick={modifyKeys}
        onKeyDown={onKeyDown}
        className="w-1/2 h-14 mx-auto bg-blue-400 text-white rounded-full text-lg outline-none"
      >
        재설정
      </button>

      <p className="mx-auto">
        {state === "init"
          ? "재설정 버튼을 누르고, 사용할 조작키를 차례대로 눌러주세요!"
          : state === "started"
          ? `진행도: ${localKeyMaps.indexOf("")}개 설정 / ${
              keyNum === 5 ? keyNum + 1 : keyNum
            }개`
          : "재설정이 정상적으로 완료되었습니다!"}
      </p>
    </div>
  );
};

export default KeySetting;
