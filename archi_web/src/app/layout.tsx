import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Archi",
  description: "About Team Archi",
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
        <meta name="keywords" content="Archi, Team Archi, About Us" />
        <meta name="author" content="Team Archi" />
        <meta property="og:title" content="Archi" />
        <meta property="og:description" content="About Team Archi" />
        {/* <meta property="og:image" content="/path/to/image.jpg" /> */}
        <meta property="og:url" content="https://www.architchat.com" />
        <title>Archi</title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}