import React from 'react'

const page = () => {
  return (
    <div className="containerOuter">
        <h1><strong>Special thanks</strong></h1>
        <br/>
        <p>
           This site wouldn't have been made possible without support from these people:
           <br /><br />
           - <a href="https://floatingmilkshake.com/">Milkshake</a> for the base frontend (well, most of the HTML code plus some parts of the CSS that is. I've successfully moved the page over to Vercel, but it's more or less still an indirect adaptation.)
           <br /><br />
           - <a href="https://erisa.uk/">Erisa</a> for her advices on DNS stuff. (fun fact: this page used to be hosted on Cloudflare Pages before being moved to Vercel because GitHub somehow takes an eternity to issue an SSL certificate.)
           <br /><br />
           - <a href="https://coburnius.net/">CoburnFuse</a> and <a href="https://github.com/sthivaios/">Stratos</a> for general page optimizations.
           <br /><br />
           (And do check out all their cool stuff as well.)
        </p>
        <br/>
        <hr/>
        <br/>
        <p>
            <a href="/" title="Current page">Root</a> |
            <a href="https://github.com/aervnu/aervnu.moe" title="Source code of this site"> Source</a> |
            <a href="/clock" title="Real time system clock"> Clock</a> |
            <a href="/devices" title="My devices"> Devices</a> |
            <a href="https://hastebin.aervnu.moe" title="All you can paste"> Hastebin</a> |
            <a className="aSelected" href="/credits" title="Special thanks"> Credits</a> |
            <span title="Coming soon."> Stay tuned.</span>
            <br/><br/>
            Photo by
            <a href="https://unsplash.com/@iamsantiago"> Santiago Gomez</a> on <a href="https://unsplash.com/photos/snow-capped-mountain-at-night-time-with-moon-WpZmGDzOAi0"> Unsplash</a>
        </p>
    </div>
  )
}

export default page