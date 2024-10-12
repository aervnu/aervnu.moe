import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import "./big.css";

const inter = Fira_Sans({ subsets: ['latin'], weight: "400"});

export const metadata: Metadata = {
  title: "127.0.0.1",
  description: "A very random localhost",
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
