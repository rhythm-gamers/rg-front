"use client";

import { setJudgeTime, setSpeed } from "@/lib/features/unity/unitySlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useRouter } from "next/navigation";
import { useRouteChangeEvents } from "nextjs-router-events";
import { useCallback, useEffect, useRef, useState } from "react";
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
    loaderUrl: "/unity/build/Build/build.loader.js",
    dataUrl: "/unity/build/Build/build.data.gz",
    frameworkUrl: "/unity/build/Build/build.framework.js.gz",
    codeUrl: "/unity/build/Build/build.wasm.gz",
  });
  const { speed, judgeTime } = useAppSelector((state) => state.unity);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const unloadRef = useRef<() => Promise<void>>();

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
  useRouteChangeEvents({
    onBeforeRouteChange: async () => {
      await unloadRef.current!();
    },
  });

  useEffect(() => {
    unloadRef.current = unload;
  }, [isLoaded]);

  useEffect(() => {
    const unloadAndBack = async () => {
      if (!unloadRef.current) return;
      await unloadRef.current();
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
    <>
      <Unity
        unityProvider={unityProvider}
        devicePixelRatio={devicePixelRatio}
        className={`w-full ${isLoaded ? "block" : "hidden"}`}
      />
      <SlSizeFullscreen
        onClick={enableFullScreen}
        className="absolute right-12 bottom-12 cursor-pointer text-white"
        size={30}
      />
    </>
  );
};

export default UnityContainer;
