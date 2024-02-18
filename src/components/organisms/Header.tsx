"use client";

import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between px-10 py-4 shadow sticky top-0 bg-white z-50">
      <Link data-testid="logo" className="flex items-center gap-4" href={"/"}>
        <Image
          width={30}
          height={10}
          loading="lazy"
          src="/images/logo.png"
          alt="로고"
        />
        <h2 className="text-rose-400 text-lg font-semibold">리듬게이머스</h2>
      </Link>
      <nav className="flex items-center w-1/2">
        <ul className={`flex gap-16 items-center`}>
          <li>
            <Link
              href={"/level_tests"}
              className="relative block after:block after:content-[''] after:absolute after:h-[2px] after:bg-rose-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:-bottom-2"
              data-testid="nav-rlt"
            >
              리듬 레벨 테스트
            </Link>
          </li>
          <li>
            <Link
              href={"/pattern_practice"}
              className="relative block after:block after:content-[''] after:absolute after:h-[2px] after:bg-rose-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:-bottom-2"
              data-testid="nav-pp"
            >
              패턴 연습
            </Link>
          </li>
        </ul>
      </nav>
      <Link href={"/login"} data-testid="link-login">
        로그인
      </Link>
    </header>
  );
};

export default Header;
