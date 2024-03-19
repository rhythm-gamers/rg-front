"use client";

import {
  LINK_COMMUNITY,
  LINK_LOGIN,
  LINK_PP,
  LINK_RLT,
  LINK_WIKI,
} from "@/const";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useAppSelector } from "@/lib/hooks";

const Header = () => {
  const pathname = usePathname();
  const { isLogin } = useAppSelector((state) => state.user);
  console.log(isLogin);

  return (
    <header className="flex justify-between px-10 py-4 shadow sticky top-0 bg-white z-50">
      <Link href={"/"} data-testid="logo" className="flex items-center gap-4">
        <Image
          width={20}
          height={0}
          loading="lazy"
          src={`${process.env.NEXT_PUBLIC_AWS_CLOUDFRONT_URL}/logo.png`}
          alt="로고"
          className="w-auto"
        />
        <h2 className="text-rose-400 text-lg font-semibold">리듬게이머스</h2>
      </Link>
      <nav className="flex items-center w-1/2">
        <ul className={`flex gap-16 items-center`}>
          <li>
            <Link
              href={LINK_PP}
              data-testid="link-pp"
              className={`relative after:block after:content-[''] after:absolute after:h-[2px] after:bg-rose-400 after:w-full after:-bottom-2 ${
                pathname !== LINK_PP &&
                "after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300"
              }`}
            >
              패턴 연습
            </Link>
          </li>
          <li>
            <Link
              href={LINK_RLT}
              data-testid="link-rlt"
              className={`relative after:block after:content-[''] after:absolute after:h-[2px] after:bg-rose-400 after:w-full after:-bottom-2 ${
                pathname !== LINK_RLT &&
                "after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300"
              }`}
            >
              리듬레벨 테스트
            </Link>
          </li>
          <li>
            <Link
              href={LINK_WIKI}
              data-testid="link-wiki"
              className={`relative after:block after:content-[''] after:absolute after:h-[2px] after:bg-rose-400 after:w-full after:-bottom-2 ${
                pathname !== LINK_WIKI &&
                "after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300"
              }`}
            >
              리듬게임 용어집
            </Link>
          </li>
          <li>
            <Link
              href={LINK_COMMUNITY}
              data-testid="link-community"
              className={`relative after:block after:content-[''] after:absolute after:h-[2px] after:bg-rose-400 after:w-full after:-bottom-2 ${
                pathname !== LINK_COMMUNITY &&
                "after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300"
              }`}
            >
              커뮤니티
            </Link>
          </li>
        </ul>
      </nav>
      {isLogin ? (
        <Link
          href={"/mypage"}
          className="flex items-center gap-5"
          data-testid="link-mypage"
        >
          <Image
            width={40}
            height={40}
            src={`${process.env.NEXT_PUBLIC_AWS_CLOUDFRONT_URL}/pp_stair.png`}
            alt="프로필 사진"
          />
          <span>이름</span>
        </Link>
      ) : (
        <Link href={LINK_LOGIN} data-testid="link-login">
          로그인
        </Link>
      )}
    </header>
  );
};

export default Header;
