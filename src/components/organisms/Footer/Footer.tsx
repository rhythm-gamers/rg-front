import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center h-28 bg-[#606060] text-white mt-96">
      <div>
        <p className="mb-1">
          &copy; 2024 <span className="text-rose-400">Rhythmgamers.</span> All
          rights reserved.
        </p>
        <p className="flex items-center justify-center">
          <Link href="/" target="_blank" className="text-rose-400">
            개인정보 처리 방침
          </Link>
          <span className="mx-2">|</span>
          <Link href="/" target="_blank">
            이용약관
          </Link>
          <span className="mx-2">|</span>
          <Link
            href="https://github.com/rhythm-gamers/rg-front/releases"
            target="_blank"
            className="flex items-center gap-1"
          >
            <FaGithub className="inline" size={20} /> Github
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
