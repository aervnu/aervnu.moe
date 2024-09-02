'use client';
import React from 'react'
import ISOClock from './clock'
const page = () => {
  return (
    <div className= "containerOuter">
    <h1>Real time system clock</h1>
    <br />
    <p><ISOClock></ISOClock></p>
    <br />
    <hr />
    <br />
    <p>
      <a href="/" title="Head back home">Root</a> |
      <a href="https://github.com/aervnu/aervnu.moe" title="Source code of this site"> Source</a> |
      <a className="aSelected" href="/clock" title="Current page"> Clock</a> |
      <a href="/devices" title="My devices"> Devices</a> |
      <a href="https://hastebin.aervnu.moe" title="All you can paste"> Starbin</a> |
      <span title="Coming soon."> Stay tuned.</span>
      <br />
      <br />
      Photo by
      <a
        href="https://unsplash.com/@iamsantiago?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
      >
        Santiago Gomez
      </a>
      on
      <a
        href="https://unsplash.com/photos/snow-capped-mountain-at-night-time-with-moon-WpZmGDzOAi0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
      >
        Unsplash
      </a>
    </p>
    </div>
  );
}

export default page