import type { Metadata } from "next";
import "./globals.css";

const isProduction = process.env.NODE_ENV === "production";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (isProduction ? "/website" : "");
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? (isProduction ? "https://hhjhhaaa.github.io/website" : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "郭羽棋｜建筑学生作品集 2019—2026",
  description: "应届建筑学硕士郭羽棋的学生作品集，展示建筑绘图、排版、建模、实体制作与软件运用能力。",
  icons: {
    icon: `${basePath}/favicon.svg`,
    shortcut: `${basePath}/favicon.svg`,
  },
  openGraph: {
    title: "郭羽棋｜ARCHITECTURE STUDENT PORTFOLIO",
    description: "建筑学生作品集 2019—2026：图纸、模型、排版与设计过程。",
    type: "website",
    locale: "zh_CN",
    images: [{ url: `${basePath}/og-guo-yuqi.webp`, width: 1200, height: 630, alt: "GUO YUQI ARCHITECTURE STUDENT PORTFOLIO" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "郭羽棋｜建筑学生作品集",
    description: "图纸、模型、排版与设计过程。",
    images: [`${basePath}/og-guo-yuqi.webp`],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
