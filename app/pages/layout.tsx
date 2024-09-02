import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../small.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "404 Not Found",
  description: "Bad command or file name",
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
