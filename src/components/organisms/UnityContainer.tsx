"use client";

import {
  setJudgeTime,
  setSpeed,
  setUnload,
} from "@/lib/features/unity/unitySlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";
import { SlSizeFullscreen } from "react-icons/sl";
import { Unity, useUnityContext } from "react-unity-webgl";
import { ReactUnityEventParameter } from "react-unity-webgl/distribution/types/react-unity-event-parameters";

const UnityContainer = () => {
  const {
    unityProvider,
    sendMessage,
    addEventListener,
    removeEventListener,
    requestFullscreen,
    unload,
    isLoaded,
  } = useUnityContext({
    loaderUrl: "unity/build/Build/build.loader.js",
    dataUrl: "unity/build/Build/build.data.gz",
    frameworkUrl: "unity/build/Build/build.framework.js.gz",
    codeUrl: "unity/build/Build/build.wasm.gz",
  });
  const { speed, judgeTime } = useAppSelector((state) => state.unity);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const enableFullScreen = () => {
    requestFullscreen(true);
  };

  /** Send User Setting To Unity */
  const initGameState = () => {
    sendMessage("GameManager", "WebGLInitUserSpeed", speed);
    sendMessage("Judgement", "WebGLInitUserJudgeTime", judgeTime);
  };

  useEffect(() => {
    if (isLoaded) initGameState();
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
  const unloadAndBack = useCallback(async () => {
    await unload();
    dispatch(setUnload(null));
    // Because of unload state updating, stack two dummy hrefs
    router.back();
    router.back();
  }, [unload]);

  useEffect(() => {
    history.pushState(null, "", location.pathname);
  }, []);

  useEffect(() => {
    dispatch(setUnload(unload));
  }, [unload]);

  useEffect(() => {
    window.addEventListener("popstate", unloadAndBack);
    return () => {
      window.removeEventListener("popstate", unloadAndBack);
    };
  }, [unloadAndBack]);
  /** END Prevent WebGL Canvas Unmount Error */

  return (
    <>
      <Unity unityProvider={unityProvider} className="w-full" />
      <SlSizeFullscreen
        onClick={enableFullScreen}
        className="absolute right-12 bottom-12 cursor-pointer text-white"
        size={30}
      />
    </>
  );
};

export default UnityContainer;
