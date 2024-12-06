import React from "react";
import { Fira_Sans } from "next/font/google";
import type { Metadata } from "next";

const fira = Fira_Sans({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abandonware",
  description: "My past projects",
};
const page = () => {
  return (
    <div className={fira.className}>
      <h1>
        <strong>My past projects</strong>
      </h1>
      <br />
      <p>
        For as long as I have lived on this planet, I&apos;ve created and worked
        on some (but not a lot of) software projects, mostly fueled by passion:
        <br />
        <br />-{" "}
        <a href="https://github.com/AbandonedWarehouse/pycalc">pycalc</a>,
        nothing special, a basic Python calculator with just about most features
        you&apos;d need. Capable of addition, subtraction, multiplication,
        division, exponentiation, modulo, plus square and cube roots. Please
        don&apos;t use it to deal with advanced math though. It&apos;s too dumb
        for that.
        <br />
        <br />-{" "}
        <a href="https://github.com/AbandonedWarehouse/disfcmd">disfcmd</a> (a
        combination of DISM, SFC and CMD), this one is a bit more interesting.
        I&apos;ve noticed that people usually run <code>sfc /scannow</code>{" "}
        alongside with <code>dism /online /cleanup-image /restorehealth</code>{" "}
        as one of their Windows troubleshooting steps, so, alright, I shall make
        a script that automates exactly that and try to account for all
        possibilities that can happen during the process, I thought.
        <br />
        <br /> Ultimately it turned into a highly inefficient tool and the code
        was messy as hell so I abandoned it. But I still appreciate that idea so
        it&apos;s kept as an archived repo for you to dissect.
      </p>
    </div>
  );
};

export default page;
