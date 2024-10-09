"use client";

import LevelTestAPI from "@/api/level_tests";
import PatternPracticeAPI from "@/api/pattern_practice";
import { setJudgeOffset, setSpeed } from "@/lib/features/unity/unitySlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useRouter } from "next/navigation";
import { useRouteChangeEvents } from "nextjs-router-events";
import { useCallback, useEffect, useRef, useState } from "react";
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

  const { speed, judgeOffset, fourKeyMaps, fiveKeyMaps, sixKeyMaps } =
    useAppSelector((state) => state.unity);

  const enableFullScreen = () => {
    requestFullscreen(true);
  };

  /** Send User Settings and SheetName To Unity */
  const initGame = async () => {
    await loadSheet();
    initUserState();
  };

  const loadSheet = async () => {
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
  };

  const rebindAllNoteKey = (keyNum: number) => {
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
    sendMessage("Sync", "WebGLInitUserJudgeOffset", judgeOffset);
  };

  useEffect(() => {
    if (isLoaded) initGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded]);
  /** END Send User Setting To Unity */

  /** Set Speed, JudgeTime From Unity */
  const handleSetSpeed = useCallback(
    (speed: ReactUnityEventParameter) => {
      if (typeof speed === "string") {
        dispatch(setSpeed(parseFloat(speed)));
      }
    },
    [dispatch],
  );

  const handleSetJudgeOffset = useCallback(
    (offset: ReactUnityEventParameter) => {
      if (typeof offset === "number") {
        dispatch(setJudgeOffset(offset));
      }
    },
    [dispatch],
  );

  useEffect(() => {
    addEventListener("SetSpeed", handleSetSpeed);
    addEventListener("SetJudgeOffset", handleSetJudgeOffset);
    return () => {
      removeEventListener("SetSpeed", handleSetSpeed);
      removeEventListener("SetJudgeOffset", handleSetJudgeOffset);
    };
  }, [
    addEventListener,
    handleSetJudgeOffset,
    handleSetSpeed,
    removeEventListener,
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
  }, [unload]);

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
    <div className="w-2/3 relative">
      {referer + " - " + id}
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
