import type { Metadata } from "next";
import "./globals.css";

const isProduction = process.env.NODE_ENV === "production";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (isProduction ? "/website" : "");
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? (isProduction ? "https://hhjhhaaa.github.io/website" : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "林序｜建筑师个人主页",
  description: "林序，独立建筑师与空间研究者，关注居住、光、材料与日常生活之间的长期关系。",
  icons: {
    icon: `${basePath}/favicon.svg`,
    shortcut: `${basePath}/favicon.svg`,
  },
  openGraph: {
    title: "林序｜LIN XU · ARCHITECT",
    description: "独立建筑师与空间研究者。Selected works 2019—2026.",
    type: "website",
    locale: "zh_CN",
    images: [{ url: `${basePath}/og-personal.webp`, width: 1200, height: 630, alt: "LIN XU · ARCHITECT" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "林序｜LIN XU · ARCHITECT",
    description: "独立建筑师与空间研究者。",
    images: [`${basePath}/og-personal.webp`],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
