"use client";

import {
  LINK_COMMUNITY,
  LINK_LOGIN,
  LINK_MYPAGE,
  LINK_PP,
  LINK_RLT,
  LINK_WIKI,
} from "@/const";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import CustomImage from "../../atoms/CustomImage/CustomImage";

interface IHeader {
  isLogin: boolean;
}

const Header = ({ isLogin }: IHeader) => {
  const pathname = usePathname();
  const firstPathname = `/${pathname.split("/")[1]}`;

  return (
    <header className="flex justify-between px-10 py-4 shadow sticky top-0 bg-white z-50">
      <Link
        href={"/"}
        data-testid="logo"
        className="flex items-center gap-4 relative"
      >
        <CustomImage
          size="xs"
          src="/logo.png"
          alt="로고"
          className="absolute -top-1"
        />
        <h2 className="text-rose-400 text-2xl font-BlackHanSans">
          리듬게이머즈
        </h2>
      </Link>
      <nav className="flex items-center w-1/2">
        <ul className={`flex gap-16 items-center`}>
          <li>
            <Link
              href={`${LINK_PP}/4`}
              data-testid="link-pp"
              className={`relative after:block after:content-[''] after:absolute after:h-[2px] after:bg-rose-400 after:w-full after:-bottom-2 ${
                firstPathname !== LINK_PP &&
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
                firstPathname !== LINK_RLT &&
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
                firstPathname !== LINK_WIKI &&
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
                firstPathname !== LINK_COMMUNITY &&
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
          href={LINK_MYPAGE}
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
