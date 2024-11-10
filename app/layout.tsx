import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import NavBar from "@/components/navbar";
import Link from "next/link";

import { Fira_Sans }  from "next/font/google";
const FiraSans = Fira_Sans({ weight: "400" })

export const metadata: Metadata = {
  title: "127.0.0.1",
  description: "A very random localhost.",
};

function Nav() {
  return (
    <nav className="flex flex-col gap-4 justify-center items-center">
      <div className="flex flex-row items-center justify-between w-full flex-wrap">
        <Link className="font-bold text-3xl no-underline" href="/">
          aervnu.moe
        </Link>
        <ThemeToggle />
      </div>
      <NavBar />
    </nav>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${FiraSans.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col items-center p-10">
            <div className="w-full max-w-[900px] items-center justify-center flex flex-col gap-4">
              <div className="w-full max-w-[875px]">
                <Nav />
              </div>
              <div className="border-[1px] w-full border-[#7a7a7a]"></div>
              <div className="w-full max-w-[900px]">{children}</div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
