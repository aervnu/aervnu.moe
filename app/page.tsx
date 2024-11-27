import React from "react";
const Page = () => {
  return (
    <main>
      <div className="">
        <h1>
          <strong>Hello. No, this is my localhost. Not yours.</strong>
        </h1>
        <br />
        <p>
          It&apos;s me, Andy Nguyen. I live in Vietnam, last I checked I was 17.
          I make things that either break or are not of much use. Plus insane
          computers you probably wouldn&apos;t find in an average house.
        </p>
        <br />
        <h1>
          <strong>My hobbies</strong>
        </h1>
        <p>
          <br />
          Regular expressions. I don&apos;t know why, but to me it&apos;s just
          really fun to craft and debug regex.
          <br />
          <br />
          Hardware virtualization and (some) low level stuff. I did learn a bit
          of x86 asm before but...you know what I mean. Not my priority either,
          since it has limited practicality in production environments.
          <br />
          <br />
          Photography. Insta is{" "}
          <a href="https://www.instagram.com/aervnu.0/">aervnu.0</a>, go check
          things out there.
        </p>
        <br />
        <h1>
          <strong>Things I wanna learn more in the future</strong>
        </h1>
        <p>
          <br />
          French and Japanese. Currently at DELF B1 for French, used to be at
          JLPT N5 for Japanese but I ended up not using it much. I still need a
          JLPT N2 after I finish university, as I&apos;m aiming for a masters
          degree in Japan.
          <br />
          <br />
          Networking. Funnily I love networking more than writing code. Aiming for the CCNA before CCNP.
          <br />
          <br />
          Some web-oriented (idek if I got this right) languages, like C#, Java
          or JS. I have some experience with C# but haven&apos;t touched it for
          like...months? Anyway, it seems like they&apos;re what the market is
          targeting for now, so it kinda makes sense to learn them.
        </p>
        <br />
        <h1>
          <strong>Where to contact me</strong>
        </h1>
        <br />
        <ul>
          <li>
            Discord:{" "}
            <a href="https://discordapp.com/users/717255311060238387">
              @aervnu
            </a>
            ; I also talk in the{" "}
            <a href="discord.gg/microsoft">Microsoft Community server</a> a lot,
            be sure to check it out.
          </li>
          <li>
            Signal:{" "}
            <a href="https://signal.me/#eu/GzuQlUo5hWHjbngK7sIXAjiHMRavHLgoLA-K11mlXCSzI7DSszlI1ZbGpi8_suMp">
              @aervnu.43
            </a>
          </li>
          <li>
            Twitter: <a href="https://x.com/aervnu">@aervnu</a>
          </li>
          <li>
            Work email: <a href="mailto:andy@aervnu.moe">andy@aervnu.moe</a>
          </li>
          <li>
            GitHub profile: <a href="https://github.com/aervnu">aervnu</a> (only
            for PRs or issues please.)
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Page;
