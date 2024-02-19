"use client";

import {
  LINK_COMMUNITY,
  LINK_LOGIN,
  LINK_PP,
  LINK_RLT,
  LINK_WIKI,
} from "@/const";
import { setUnload } from "@/lib/features/unity/unitySlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const unloadUnity = useAppSelector((state) => state.unity.unload);

  const unloadAndNavigate = async (href: string) => {
    if (unloadUnity) {
      await unloadUnity();
      dispatch(setUnload(null));
    }
    router.push(href);
  };

  return (
    <header className="flex justify-between px-10 py-4 shadow sticky top-0 bg-white z-50">
      <button
        type="button"
        data-testid="logo"
        onClick={() => unloadAndNavigate("/")}
        className="flex items-center gap-4"
      >
        <Image
          width={20}
          height={0}
          loading="lazy"
          src="/images/logo.png"
          alt="로고"
          className="w-auto"
        />
        <h2 className="text-rose-400 text-lg font-semibold">리듬게이머스</h2>
      </button>
      <nav className="flex items-center w-1/2">
        <ul className={`flex gap-16 items-center`}>
          <li>
            <button
              type="button"
              data-testid="link-pp"
              onClick={() => unloadAndNavigate(LINK_PP)}
              className={`relative block after:block after:content-[''] after:absolute after:h-[2px] after:bg-rose-400 after:w-full after:-bottom-2 ${
                pathname !== LINK_PP &&
                "after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300"
              }`}
            >
              패턴 연습
            </button>
          </li>
          <li>
            <button
              type="button"
              data-testid="link-rlt"
              onClick={() => unloadAndNavigate(LINK_RLT)}
              className={`relative block after:block after:content-[''] after:absolute after:h-[2px] after:bg-rose-400 after:w-full after:-bottom-2 ${
                pathname !== LINK_RLT &&
                "after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300"
              }`}
            >
              리듬레벨 테스트
            </button>
          </li>
          <li>
            <button
              type="button"
              data-testid="link-wiki"
              className={`relative block after:block after:content-[''] after:absolute after:h-[2px] after:bg-rose-400 after:w-full after:-bottom-2 ${
                pathname !== LINK_WIKI &&
                "after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300"
              }`}
              onClick={() => unloadAndNavigate(LINK_WIKI)}
            >
              리듬게임 용어집
            </button>
          </li>
          <li>
            <button
              type="button"
              data-testid="link-community"
              className={`relative block after:block after:content-[''] after:absolute after:h-[2px] after:bg-rose-400 after:w-full after:-bottom-2 ${
                pathname !== LINK_COMMUNITY &&
                "after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300"
              }`}
              onClick={() => unloadAndNavigate(LINK_COMMUNITY)}
            >
              커뮤니티
            </button>
          </li>
        </ul>
      </nav>
      <button
        type="button"
        data-testid="link-login"
        onClick={() => unloadAndNavigate(LINK_LOGIN)}
      >
        로그인
      </button>
    </header>
  );
};

export default Header;
