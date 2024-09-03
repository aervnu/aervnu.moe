import React from 'react';

export default function Custom404() {
  return (
    <div className="containerOuter">
      <h1 className="fira-sans-semibold">Bad Command or File Name</h1>
      <p className="fira-sans-regular">Abort, Retry, Fail?</p>
      <br />
      <p className="fira-sans-light"><code>404 Not Found</code></p>
      <br />
      <p className="fira-sans-light"><a href="./index.html" className="aSelected">Head back to root?</a></p>
    </div>
  );
}