import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Credits",
  description: "Special thanks",
};

const page = () => {
  return (
    <div className="containerOuter">
      <h1>
        <strong>Special thanks</strong>
      </h1>
      <br />
      <p>
        This site wouldn&apos;t have been made possible without support from
        these people:
        <br />
        <br />- <a href="https://floatingmilkshake.com/">Milkshake</a> for the
        base frontend. The site started off with vanilla HTML and a while later
        it got a big update to NextJS. Now there's not a lot of this original
        code on this site, but still his code is what made it possible.
        <br />
        <br />- <a href="https://erisa.uk/">Erisa</a> for her advices on DNS
        stuff. (fun fact: this page used to be hosted on Cloudflare Pages before
        being moved to Vercel because GitHub somehow takes an eternity to issue
        an SSL certificate.)
        <br />
        <br />- <a href="https://coburnius.net/">CoburnFuse</a> and{" "}
        <a href="https://github.com/sthivaios/">Stratos</a> for general page
        optimizations. You. Guys. Helped. A. Lot.
        <br />
        <br />- <a href="https://1k2s.netlify.app/">1Kill2Steal</a> for code
        formatting optimizations.
        <br />
        <br />
        (And do check out all their cool stuff as well.)
      </p>
    </div>
  );
};

export default page;
