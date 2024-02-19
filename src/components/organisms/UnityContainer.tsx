"use client";

import { setUnload } from "@/lib/features/unity/unitySlice";
import { useAppDispatch } from "@/lib/hooks";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const UnityContainer = () => {
  const {
    unityProvider,
    sendMessage,
    addEventListener,
    removeEventListener,
    requestFullscreen,
    unload,
  } = useUnityContext({
    loaderUrl: "unity/build/Build/build.loader.js",
    dataUrl: "unity/build/Build/build.data.gz",
    frameworkUrl: "unity/build/Build/build.framework.js.gz",
    codeUrl: "unity/build/Build/build.wasm.gz",
  });
  const dispatch = useAppDispatch();
  const router = useRouter();

  const enableFullScreen = () => {
    requestFullscreen(true);
  };

  const unloadAndBack = useCallback(async () => {
    await unload();
    dispatch(setUnload(null));
    // Because of unload state updating, stack two dummy hrefs
    router.back();
    router.back();
  }, [unload]);

  useEffect(() => {
    history.pushState(null, "", location.pathname); // prevent from unmounting
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
  return (
    <>
      <Unity unityProvider={unityProvider} className="w-full" />
      <button onClick={enableFullScreen}>전체화면</button>
    </>
  );
};

export default UnityContainer;
