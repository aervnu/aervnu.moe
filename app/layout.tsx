import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import NavBar from "@/components/navbar";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "127.0.0.1",
  description: "A very random localhost.",
};

function Nav() {
  return (
    <nav className="flex flex-col gap-4 justify-center items-center">
      <div className="flex flex-row items-center justify-between w-full">
        <Link className="font-bold text-3xl no-underline" href="/">
          aervnu.moe
        </Link>
        <ThemeToggle />
      </div>
      <NavBar />
      {/*<nav className="flex flex-row items-center justify-center gap-4">*/}
      {/*  <a className="navA aSelected" href="/" title="Current page">*/}
      {/*    Root*/}
      {/*  </a>*/}
      {/*  <a*/}
      {/*    className="navA"*/}
      {/*    href="https://github.com/aervnu/aervnu.moe"*/}
      {/*    title="Source code of this site"*/}
      {/*  >*/}
      {/*    Source*/}
      {/*  </a>*/}
      {/*  <a className="navA" href="/clock" title="Real time system clock">*/}
      {/*    Clock*/}
      {/*  </a>*/}
      {/*  <a className="navA" href="/devices" title="My devices">*/}
      {/*    Devices*/}
      {/*  </a>*/}
      {/*  <a*/}
      {/*    className="navA"*/}
      {/*    href="https://hastebin.aervnu.moe"*/}
      {/*    title="All you can paste"*/}
      {/*  >*/}
      {/*    Hastebin*/}
      {/*  </a>*/}
      {/*  <a className="navA" href="/credits" title="Special thanks">*/}
      {/*    Credits*/}
      {/*  </a>*/}
      {/*</nav>*/}
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
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
