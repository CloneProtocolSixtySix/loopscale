"use client";

import { useState } from "react";

export default function Home() {
  const [showAboutText, setShowAboutText] = useState(false);
  const aboutText = `
(April 2026)

A subcurrent (noun) refers to a partially revealed direction of thought, intention, or action underlying what is manifested-it defines both our focus and our name.

In our view, every system-whether in industry, research, or culture-contains latent directions that influence how outcomes unfold. These subcurrents are often invisible, yet they shape adoption, behavior, and trajectory.

At Subcurrent, we aim to identify and understand them.

We are building an intelligence layer native to human granularity, capable of identifying and assessing hidden forces before they emerge-helping venture pioneers make safer bets in continually evolving environments.`;

  return (
    <main
      className="eb-garamond-regular min-h-screen relative text-[#d9dde5]"
      style={{ backgroundColor: "#0b1324" }}
    >
      <div className="absolute left-4 top-10 hidden md:flex flex-col gap-6 text-[#3a4252] text-lg leading-none z-10">
      </div>

      <header className="absolute left-6 md:left-16 top-4 md:top-6 text-xl font-normal leading-relaxed z-10">
        <p>
          Subcurrent
        </p>
      </header>

      <div
        className={
          showAboutText
            ? "z-10 relative pt-24 md:pt-28 pb-10 md:pb-14 pl-6 md:pl-16 pr-6"
            : "min-h-screen flex items-center pl-6 md:pl-16 pr-6 z-10 relative"
        }
      >
        <p
          className={
            showAboutText
              ? "body-text-after-header max-w-md text-xl leading-relaxed whitespace-pre-line"
              : "body-text-after-header max-w-md text-xl leading-relaxed whitespace-pre-line"
          }
        >
          {showAboutText
            ? aboutText
            : (
              <>
                <span className="relative -top-0.5 inline-block mr-2 align-middle animate-pulse">■</span>
                An intelligence project
            
                {"\n\n"}
                We study human agency underlying economies.
              </>
            )}
        </p>
      </div>

      <footer
        className={
          showAboutText
            ? "body-text-after-header relative z-20 pl-6 md:pl-16 pb-6 md:pb-10 flex items-center gap-3 md:gap-4 text-xl"
            : "body-text-after-header fixed md:absolute left-4 md:left-16 bottom-4 md:bottom-10 flex items-center gap-3 md:gap-4 text-xl z-20"
        }
      >
        <button
          type="button"
          onClick={() => setShowAboutText((prev) => !prev)}
          className="hover:opacity-80 transition-opacity"
        >
          {showAboutText ? "home" : "about"}
        </button>
        <span className="opacity-70">|</span>
        <a href="mailto:info@subcurrent.ai" className="hover:opacity-80 transition-opacity">inquiries</a>
      </footer>
    </main>
  );
}

