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
        base frontend (well, most of the HTML code plus some parts of the CSS
        that is. I&apos;ve successfully moved the page over to Vercel, but
        it&apos;s more or less still an indirect adaptation.)
        <br />
        <br />- <a href="https://erisa.uk/">Erisa</a> for her advices on DNS
        stuff. (fun fact: this page used to be hosted on Cloudflare Pages before
        being moved to Vercel because GitHub somehow takes an eternity to issue
        an SSL certificate.)
        <br />
        <br />- <a href="https://coburnius.net/">CoburnFuse</a> and{" "}
        <a href="https://github.com/sthivaios/">Stratos</a> for general page
        optimizations.
        <br />
        <br />- <a href="https://1k2s.netlify.app/">1Git2Clone</a> for code
        formatting optimizations. (sorry dude I broke your Prettier config but
        I&apos;ll throw things into src for dev before pushing to prod.)
        <br />
        <br />
        (And do check out all their cool stuff as well.)
      </p>
    </div>
  );
};

export default page;
