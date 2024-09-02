const Page = () => {
    return (
        <main>
          <div className="containerOuter text-center sm:text-left">
            <h1><strong>Hello.</strong></h1>
            <br/>
            <p>
              It's me, Andy Nguyen. I live in Vietnam, last I checked I was 17. I make
              things that either break or are not of much use. I run a home server
              funnily named Milan (see
              <a href="/devices" title="My devices"> Devices</a>), an Oracle VPS
              coordinating my tailnet, and this very website you're viewing.
            </p>
            <br/>
            <h1><strong>My hobbies</strong></h1>
            <p>
              <br/>
              Regular expressions. I don't know why, but to me it's just really fun to
              craft and debug regex.
              <br/><br/>
              Hardware virtualization and (some) low level stuff. I did learn a bit of
              x86 asm before but...you know what I mean. Not my priority either, since
              it has limited practicality in production environments.
              <br/><br/>
              Photography. Insta is <a href="https://www.instagram.com/aervnu.0/">aervnu.0</a>, go check things out
              there.
            </p>
            <br/>
            <h1><strong>Things I wanna learn more in the future</strong></h1>
            <p>
              <br/>
              French and Japanese. Currently at DELF A2 for French, used to be at JLPT
              N5 for Japanese but I ended up not using it much. I still need a JLPT N2
              after I finish university, as I'm aiming for a masters degree in Japan.
              <br/><br/>
              Networking. Lowkey my favorite when it comes to computing, even as
              traumatizing as it is setting up my Oracle VPS. Heading to a telecom
              corporation and aiming for a CCNA, but if need be I can attempt to get
              the CCNP.
              <br/><br/>
              Some web-oriented (idek if I got this right) languages, like
              C#, Java or JS. I have some experience with C# but haven't touched it
              for like...months? Anyway, it seems like they're what the market is
              targeting for now, so it kinda makes sense to learn them.
            </p>
            <br/>
            <h1><strong>Where to contact me</strong></h1>
            <ul>
              <li>Discord: <a href="https://discordapp.com/users/717255311060238387">@aervnu</a>; I also talk in the <a
                  href="discord.gg/microsoft">Microsoft Community server</a> a lot, be sure to check it out.
              </li>
              <li>Signal: <a
                  href="https://signal.me/#eu/GzuQlUo5hWHjbngK7sIXAjiHMRavHLgoLA-K11mlXCSzI7DSszlI1ZbGpi8_suMp">@aervnu.43</a>
              </li>
              <li>Twitter: <a href="https://x.com/aervnu">@aervnu</a></li>
              <li>Work email: <a href="mailto:andy@aervnu.moe">andy@aervnu.moe</a>
              </li>
            </ul>
            <br/>
            <hr/>
            <br/>
            <p>
              <a className="aSelected" href="/" title="Current page">Root</a> |
              <a href="https://github.com/aervnu/aervnu.moe" title="Source code of this site"> Source</a> |
              <a href="/clock" title="Real time system clock"> Clock</a> |
              <a href="/devices" title="My devices"> Devices</a> |
              <a href="https://hastebin.aervnu.moe" title="All you can paste"> Starbin</a> |
              <span title="Coming soon."> Stay tuned.</span>
              <br/><br/>
              Photo by
              <a href="https://unsplash.com/@iamsantiago"> Santiago Gomez</a> on <a
                href="https://unsplash.com/photos/snow-capped-mountain-at-night-time-with-moon-WpZmGDzOAi0"> Unsplash</a>
            </p>
          </div>
        </main>
    );
};

export default Page;