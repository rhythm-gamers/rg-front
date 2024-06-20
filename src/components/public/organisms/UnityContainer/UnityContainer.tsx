"use client";

import { setJudgeTime, setSpeed } from "@/lib/features/unity/unitySlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useRouter } from "next/navigation";
import { useRouteChangeEvents } from "nextjs-router-events";
import { useCallback, useEffect, useRef, useState } from "react";
import { SlSizeFullscreen } from "react-icons/sl";
import { Unity, useUnityContext } from "react-unity-webgl";
import { ReactUnityEventParameter } from "react-unity-webgl/distribution/types/react-unity-event-parameters";

interface IUnityContainer {
  category: "pattern_practice" | "level_tests";
  id: number;
  keyNum: number;
}

const UnityContainer = ({ id, category, keyNum }: IUnityContainer) => {
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
  const { speed, judgeTime, fourKeyMaps, fiveKeyMaps, sixKeyMaps } =
    useAppSelector((state) => state.unity);

  const enableFullScreen = () => {
    requestFullscreen(true);
  };

  /** Send User Settings and SheetName To Unity */
  const initGame = async () => {
    loadSheet();
    rebindAllNoteKey();
    initUserState();
  };

  const loadSheet = () => {
    // 추후 아래 주석의 코드로 변경
    const title = "Splendid Circus";
    // const {
    //   data: { title },
    // } = await PatternPracticeAPI.getOne(id);

    sendMessage("SheetLoader", "WebGLLoadSheet", title);
  };

  const rebindAllNoteKey = () => {
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
  };

  const rebindNoteKey = (noteLine: number, newKey: string) => {
    const combinedArgs = `${noteLine},${newKey}`;
    sendMessage("RebindController", "WebGLRebindNoteKey", combinedArgs);
  };

  const initUserState = () => {
    sendMessage("GameManager", "WebGLInitUserSpeed", speed);
    sendMessage("Judgement", "WebGLInitUserJudgeTime", judgeTime);
  };

  useEffect(() => {
    if (isLoaded) initGame();
  }, [isLoaded]);
  /** END Send User Setting To Unity */

  /** Set Speed, JudgeTime From Unity */
  const handleSetSpeed = useCallback((speed: ReactUnityEventParameter) => {
    if (typeof speed === "string") {
      dispatch(setSpeed(parseFloat(speed)));
    }
  }, []);

  const handleSetJudgeTime = useCallback((speed: ReactUnityEventParameter) => {
    if (typeof speed === "number") {
      console.log(speed);
      dispatch(setJudgeTime(speed));
    }
  }, []);

  useEffect(() => {
    addEventListener("SetSpeed", handleSetSpeed);
    addEventListener("SetJudgeTime", handleSetJudgeTime);
    return () => {
      removeEventListener("SetSpeed", handleSetSpeed);
      removeEventListener("SetJudgeTime", handleSetJudgeTime);
    };
  }, [
    addEventListener,
    removeEventListener,
    handleSetSpeed,
    handleSetJudgeTime,
  ]);
  /** END Set Speed, JudgeTime From Unity */

  /** Prevent WebGL Canvas Unmount Error */
  useRouteChangeEvents({
    onBeforeRouteChange: () => {
      unloadRef.current!();
    },
  });

  useEffect(() => {
    unloadRef.current = unload;
  }, [isLoaded]);

  useEffect(() => {
    const unloadAndBack = () => {
      if (!unloadRef.current) return;
      unloadRef.current();
      // delete pushState history and back
      router.back();
      router.back();
    };

    history.pushState(null, "", "");
    window.addEventListener("popstate", unloadAndBack);
    window.addEventListener("beforeunload", unloadAndBack);
    return () => {
      window.removeEventListener("popstate", unloadAndBack);
      window.removeEventListener("beforeunload", unloadAndBack);
    };
  }, []);
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
    <div className="w-2/3 relative">
      {category + " - " + id}
      <Unity
        unityProvider={unityProvider}
        devicePixelRatio={devicePixelRatio}
        className={`w-full ${isLoaded ? "block" : "hidden"}`}
      />
      <SlSizeFullscreen
        onClick={enableFullScreen}
        className="absolute right-6 bottom-6 cursor-pointer text-white"
        size={30}
      />
    </div>
  );
};

export default UnityContainer;
