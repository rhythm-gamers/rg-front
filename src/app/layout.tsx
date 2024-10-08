import type { Metadata } from "next";
import "./globals.css";
import { RouteChangesProvider } from "nextjs-router-events";
import React, { ReactNode } from "react";
import StoreProvider from "./storeProvider";
import Header from "@/components/organisms/Header/Header";
import { META } from "@/const";
import { Black_Han_Sans } from "next/font/google";

export const metadata: Metadata = {
  metadataBase: new URL(META.url),
  title: META.title,
  description: META.description,
  keywords: [...META.keyword],
  openGraph: {
    type: "website",
    url: "/",
    siteName: META.siteName,
    locale: "ko_KR",
    images: {
      url: "/og",
      width: 1200,
      height: 630,
    },
  },
};

const BlackHanSans = Black_Han_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-black-han-sans",
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko" className={`${BlackHanSans.variable}`}>
      <body className="bg-gray-50">
        <StoreProvider>
          <RouteChangesProvider>
            <Header isLogin={true} />
            {children}
          </RouteChangesProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
