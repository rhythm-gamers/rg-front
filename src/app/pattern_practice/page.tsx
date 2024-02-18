"use client";

import { Unity, useUnityContext } from "react-unity-webgl";

const PatternPractice = () => {
  const {
    unityProvider,
    sendMessage,
    addEventListener,
    removeEventListener,
    requestFullscreen,
  } = useUnityContext({
    loaderUrl: "unity/build/Build/build.loader.js",
    dataUrl: "unity/build/Build/build.data.gz",
    frameworkUrl: "unity/build/Build/build.framework.js.gz",
    codeUrl: "unity/build/Build/build.wasm.gz",
  });

  const enableFullScreen = () => {
    requestFullscreen(true);
  };

  return (
    <div className="w-screen max-w-7xl mx-auto my-0 p-8 text-center">
      <Unity unityProvider={unityProvider} className="w-full" />
      <button onClick={enableFullScreen}>전체화면</button>
    </div>
  );
};

export default PatternPractice;
