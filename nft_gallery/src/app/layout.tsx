import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

function TopNavigation() {
  return (
    <header className="flex justify-between items-center p-4">
      <h1 className="text-xl font-bold">NFT Gallery</h1>
      <nav className="flex w-full items-center justify-between border-b p-4">
        <ul className="flex gap-4">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans flex-col gap-4">
        <TopNavigation />
        {children}</body>
    </html>
  );
}
