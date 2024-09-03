import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import "./small.css";

const inter = Fira_Sans({ subsets: ['latin'], weight: "300"});

export const metadata: Metadata = {
  title: "Real time system clock",
  description: "Is it bedtime already?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
