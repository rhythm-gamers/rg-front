import type { Metadata } from "next";
import "./globals.css";
import { RouteChangesProvider } from "nextjs-router-events";
import React, { ReactNode } from "react";
import StoreProvider from "./storeProvider";
import Header from "@/components/organisms/Header/Header";
import { META } from "@/const";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko">
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
