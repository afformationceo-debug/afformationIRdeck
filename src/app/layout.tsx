import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Afformation IR Deck | Global No.1 Influencer Marketing OS",
  description: "K-메디컬부터 글로벌 틱톡샵까지, 전 세계 마케팅의 발굴-소통-정산을 하나로 잇는 글로벌 No.1 인플루언서 풀퍼널 마케팅 OS",
  keywords: ["Afformation", "ScoutManager", "Influencer Marketing", "AI Agent", "Marketing OS", "TikTok Shop"],
  openGraph: {
    title: "Afformation | Global No.1 Marketing OS",
    description: "Connect Influence, Automate Trust",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
