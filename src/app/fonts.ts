import { Black_Han_Sans } from "next/font/google";
import localFont from "next/font/local";

export const BlackHanSans = Black_Han_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-black-han-sans",
  weight: "400",
});

export const Gyeonggi = localFont({
  src: "../../assets/Gyeonggi.woff",
  display: "swap",
  variable: "--font-gyeonggi",
  weight: "400",
});
