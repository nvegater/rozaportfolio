import "~/styles/globals.css";

import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Roza Czarnota",
  description: "Portfolio of Roza Czarnota",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <header id="header" className="flex justify-between bg-[#d8c4e2]">
          <h1 className="w-1/5 bg-[#191923] text-2xl font-bold text-amber-950"></h1>
          <div className="my-4 flex w-4/5 justify-end">
            <nav id="navigation" className="pr-8">
              <Link href="/" className="mr-2 text-lg text-black">
                HOME |
              </Link>
              <Link href="#" className="mr-2 text-lg text-black">
                GALLERY |
              </Link>
              <Link href="#" className="mr-4 text-lg text-black">
                balance.travels
              </Link>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
