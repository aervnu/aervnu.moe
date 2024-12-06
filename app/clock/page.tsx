import React from "react";
import ISOClock from "./clock";
import { Fira_Sans } from "next/font/google";
import type { Metadata } from "next";

const fira = Fira_Sans({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Real time system clock",
  description: "Is it bedtime already?",
};
const page = () => {
  return (
    <div className={fira.className + " text-center"}>
      <h1>
        <strong>Real time system clock (Indochina Standard Time/UTC+7)</strong>
      </h1>
      <br />
      <p>
        It is currently <ISOClock /> for me.
      </p>
    </div>
  );
};

export default page;
