"use client";

import LevelTestAPI from "@/api/level_tests";
import PatternPracticeAPI from "@/api/pattern_practice";
import {
  setJudgeOffset,
  setSpeed,
  setVolume,
} from "@/lib/features/unity/unitySlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useRouter } from "next/navigation";
import { useRouteChangeEvents } from "nextjs-router-events";
import {
  ChangeEvent,
  MouseEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { MdVolumeDown, MdVolumeOff, MdVolumeUp } from "react-icons/md";
import { SlSizeFullscreen } from "react-icons/sl";
import { Unity, useUnityContext } from "react-unity-webgl";
import { ReactUnityEventParameter } from "react-unity-webgl/distribution/types/react-unity-event-parameters";

interface IUnityContainer {
  referer: "pattern_practice" | "level_tests";
  id: number;
}

const UnityContainer = ({ id, referer }: IUnityContainer) => {
  const CLOUDFRONT_URL = process.env.NEXT_PUBLIC_AWS_CLOUDFRONT_URL;
  const dispatch = useAppDispatch();
  const router = useRouter();

  const {
    unityProvider,
    sendMessage,
    addEventListener,
    removeEventListener,
    requestFullscreen,
    unload,
    isLoaded,
  } = useUnityContext({
    loaderUrl: `${CLOUDFRONT_URL}/unity/build/Build/build.loader.js`,
    dataUrl: `${CLOUDFRONT_URL}/unity/build/Build/build.data`,
    frameworkUrl: `${CLOUDFRONT_URL}/unity/build/Build/build.framework.js`,
    codeUrl: `${CLOUDFRONT_URL}/unity/build/Build/build.wasm`,
  });

  const unloadRef = useRef<() => void>();

  const { speed, judgeOffset, volume, fourKeyMaps, fiveKeyMaps, sixKeyMaps } =
    useAppSelector((state) => state.unity);

  const [tempVolume, setTempVolume] = useState(volume.current);
  const changeTempVolume = (e: ChangeEvent<HTMLInputElement>) => {
    const parsedValue = parseFloat(e.currentTarget.value);
    setTempVolume(parsedValue);
    sendMessage("AudioManager", "WebGLSetVolume", parsedValue);
  };
  const mouseUpTempVolume = (e: MouseEvent<HTMLInputElement>) => {
    const parsedValue = parseFloat(e.currentTarget.value);
    setTempVolume(parsedValue);
    dispatch(
      setVolume({
        current: parsedValue,
      }),
    );
  };

  const muteVolume = () => {
    sendMessage("AudioManager", "WebGLSetVolume", 0);
    setTempVolume(0);
    dispatch(
      setVolume({
        current: 0,
        prevMute: volume.current,
      }),
    );
  };
  const unMuteVolume = () => {
    if (volume.prevMute) {
      sendMessage("AudioManager", "WebGLSetVolume", volume.prevMute);
      setTempVolume(volume.prevMute);
      dispatch(
        setVolume({
          current: volume.prevMute,
          prevMute: undefined,
        }),
      );
    }
  };

  const enableFullScreen = () => {
    requestFullscreen(true);
  };

  /** Send User Settings and SheetName To Unity */
  const rebindNoteKey = useCallback(
    (noteLine: number, newKey: string) => {
      const combinedArgs = `${noteLine},${newKey}`;
      sendMessage("RebindController", "WebGLRebindNoteKey", combinedArgs);
    },
    [sendMessage],
  );

  const rebindAllNoteKey = useCallback(
    (keyNum: number) => {
      if (keyNum === 4) {
        fourKeyMaps.forEach((key, idx) => {
          rebindNoteKey(idx, key);
        });
      } else if (keyNum === 5) {
        fiveKeyMaps.forEach((key, idx) => {
          rebindNoteKey(idx, key);
        });
      } else if (keyNum === 6) {
        sixKeyMaps.forEach((key, idx) => {
          rebindNoteKey(idx, key);
        });
      }
    },
    [fiveKeyMaps, fourKeyMaps, rebindNoteKey, sixKeyMaps],
  );

  const loadSheet = useCallback(async () => {
    let title;
    let keyNum;

    if (referer == "pattern_practice") {
      const { data } = await PatternPracticeAPI.getOne(id);
      title = data.title;
      keyNum = data.keyNum;
    } else {
      const { data } = await LevelTestAPI.getOne(id);
      title = data.title;
      keyNum = data.keyNum;
    }

    rebindAllNoteKey(keyNum);
    const combinedArgs = `${title},${keyNum}`;
    sendMessage("SheetLoader", "WebGLLoadSheet", combinedArgs);
  }, [id, rebindAllNoteKey, referer, sendMessage]);

  const initUserState = useCallback(() => {
    sendMessage("GameManager", "WebGLInitUserSpeed", speed);
    sendMessage("Sync", "WebGLInitUserJudgeOffset", judgeOffset);
  }, [judgeOffset, sendMessage, speed]);

  useEffect(() => {
    const initGame = async () => {
      await loadSheet();
      initUserState();
    };

    if (isLoaded) initGame();
  }, [initUserState, isLoaded, loadSheet]);
  /** END Send User Setting To Unity */

  /** Prevent WebGL Canvas Unmount Error */
  useRouteChangeEvents({
    onBeforeRouteChange: () => {
      unloadRef.current!();
    },
  });

  useEffect(() => {
    unloadRef.current = unload;
  }, [isLoaded, unload]);

  useEffect(() => {
    const unloadAndBack = () => {
      if (!unloadRef.current) return;
      unloadRef.current();
      router.back();
    };

    history.pushState(null, "", "");
    window.addEventListener("popstate", unloadAndBack);
    window.addEventListener("beforeunload", unloadAndBack);
    return () => {
      window.removeEventListener("popstate", unloadAndBack);
      window.removeEventListener("beforeunload", unloadAndBack);
    };
  }, [router]);
  /** END Prevent WebGL Canvas Unmount Error */

  /** Use Device Pixel Ratio */
  const [devicePixelRatio, setDevicePixelRatio] = useState(
    window.devicePixelRatio,
  );

  useEffect(
    function () {
      const updateDevicePixelRatio = function () {
        setDevicePixelRatio(window.devicePixelRatio);
      };
      // A media matcher which watches for changes in the device pixel ratio.
      const mediaMatcher = window.matchMedia(
        `screen and (resolution: ${devicePixelRatio}dppx)`,
      );
      mediaMatcher.addEventListener("change", updateDevicePixelRatio);
      return function () {
        mediaMatcher.removeEventListener("change", updateDevicePixelRatio);
      };
    },
    [devicePixelRatio],
  );
  /** END Use Device Pixel Ratio */

  return (
    <div className="w-2/3 max-w-[1280px] relative">
      {referer + " - " + id}
      <Unity
        unityProvider={unityProvider}
        devicePixelRatio={devicePixelRatio}
        className={`w-full`}
      />
      <SlSizeFullscreen
        onClick={enableFullScreen}
        className="absolute right-6 bottom-6 cursor-pointer text-white"
        size={30}
      />
      <div className="absolute left-6 bottom-6 flex justify-between items-center w-32">
        {tempVolume === 0 ? (
          <MdVolumeOff
            size={28}
            className="text-white"
            onClick={unMuteVolume}
          />
        ) : tempVolume < 0.5 ? (
          <MdVolumeDown size={28} className="text-white" onClick={muteVolume} />
        ) : (
          <MdVolumeUp size={28} className="text-white" onClick={muteVolume} />
        )}
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={tempVolume}
          onChange={changeTempVolume}
          onMouseUp={mouseUpTempVolume}
          className="w-20"
        />
      </div>
    </div>
  );
};

export default UnityContainer;
