import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TransitionWrapper from "./TransitionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Archi",
  description:
    "언어치료 어플리케이션 떠들자를 개발하는 Team Archi 홈페이지 입니다 ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="About Team Archi" />
        <meta name="keywords" content="아르키, Team Archi, About Us" />
        <meta name="author" content="Team Archi" />
        <meta property="og:title" content="Archi" />
        <meta property="og:description" content="About Team Archi" />
        {/* <meta property="og:image" content="/path/to/image.jpg" /> */}
        <meta property="og:url" content="https://www.architchat.com" />
        <title>Archi</title>
      </head>
      <body className={inter.className}>
        {children}
        {/* <TransitionWrapper>{children}</TransitionWrapper> */}
      </body>
    </html>
  );
}
