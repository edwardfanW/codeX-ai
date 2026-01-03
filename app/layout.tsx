import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "观赏鱼指南 · 家庭水族入门",
  description: "适合家庭饲养的观赏鱼图鉴与基础养护指南"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="bg-slate-50 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
