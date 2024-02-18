import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/organisms/Header";
import StoreProvider from "./storeProvider";

export const metadata: Metadata = {
  title: "리듬게이머스",
  description: "리듬게이머들을 위한 패턴 연습 사이트입니다.",
  icons: {
    icon: [
      { url: "/images/apple-icon-76x76.png" },
      { url: "/images/apple-icon-114x114.png" },
      { url: "/images/apple-icon-120x120.png" },
      { url: "/images/apple-icon-144x144.png" },
      { url: "/images/apple-icon-152x152.png" },
      { url: "/images/apple-icon-180x180.png" },
      { url: "/images/apple-icon-precomposed.png" },
      { url: "/images/apple-icon.png" },
      { url: "/images/favicon-16x16.png" },
      { url: "/images/favicon-32x32.png" },
      { url: "/images/favicon-96x96.png" },
      { url: "/images/ms-icon-70x70.png" },
      { url: "/images/ms-icon-144x144.png" },
      { url: "/images/ms-icon-150x150.png" },
      { url: "/images/ms-icon-310x310.png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <StoreProvider>
          <Header />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
