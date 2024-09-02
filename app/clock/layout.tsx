import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../small.css";

const inter = Inter({ subsets: ["latin"] });

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
