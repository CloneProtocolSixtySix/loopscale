"use client";

import { useEffect, useState } from "react";

const rotatingTerms = [
  "political",
  "economic",
  "cultural",
  "technological",
];

export default function Home() {
  const [showAboutText, setShowAboutText] = useState(false);
  const [termIndex, setTermIndex] = useState(0);
  const [typedTerm, setTypedTerm] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (showAboutText) {
      return;
    }

    const currentTerm = rotatingTerms[termIndex];
    const atFullTerm = typedTerm === currentTerm;
    const atEmptyTerm = typedTerm === "";
    const baseDelay = isDeleting ? 45 : 90;
    const delay = atFullTerm && !isDeleting ? 900 : baseDelay;

    const timer = setTimeout(() => {
      if (!isDeleting && !atFullTerm) {
        setTypedTerm(currentTerm.slice(0, typedTerm.length + 1));
        return;
      }

      if (!isDeleting && atFullTerm) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && !atEmptyTerm) {
        setTypedTerm(currentTerm.slice(0, typedTerm.length - 1));
        return;
      }

      setIsDeleting(false);
      setTermIndex((prev) => (prev + 1) % rotatingTerms.length);
    }, delay);

    return () => clearTimeout(timer);
  }, [isDeleting, showAboutText, termIndex, typedTerm]);

  const aboutText = `

(April 2026)

A subcurrent (noun) refers to an obscured direction of thought, intention, or action—human agency—underlying what is manifested—it defines both our focus and our name.

We believe that beneath every complex system lies a subcurrent whose direction determines how outcomes unfold.

Our aim is to accurately identify, understand, and predict subcurrents in their natural, present states before they emerge—generating strategic insights for future proofing application.

We are building a foundation model that predicts underlying human agency—enabling pioneers to make safer product, policy, and investment decisions across complex systems.`;

  return (
    <main
      className="eb-garamond-regular min-h-screen relative text-[#d9dde5] text-[19px]"
      style={{ backgroundColor: "#0b1324" }}
    >
      <header className="absolute left-6 md:left-16 top-4 md:top-6 font-normal leading-relaxed z-10">
        <p>
          <span className="mr-1 underline decoration-[1px]"></span>
          _subcurrent
        </p>
      </header>

      <div
        className={
          showAboutText
            ? "z-10 relative pt-14 md:pt-16 pb-24 md:pb-28 pl-6 md:pl-16 pr-6"
            : "min-h-screen flex items-center pl-6 md:pl-16 pr-6 z-10 relative"
        }
      >
        <p className="body-text-after-header max-w-lg leading-relaxed whitespace-pre-line">
          {showAboutText ? (
            aboutText
          ) : (
            <>
              subcurrent is a computational social science and market
              intelligence studio predicting <em>human 𖠋 agency</em> underlying (
              {typedTerm}) shifts.
            </>
          )}
        </p>
      </div>

      <footer className="body-text-after-header fixed left-4 md:left-16 bottom-4 md:bottom-10 z-20 whitespace-nowrap">
        <button
          type="button"
          aria-label={showAboutText ? "Return home" : "Show about text"}
          onClick={() => setShowAboutText((prev) => !prev)}
          className="inline hover:opacity-80 transition-opacity cursor-pointer"
        >
          {showAboutText ? "< home" : "about"}
        </button>

        {" | "}

        <a
          href="mailto:info@subcurrent.ai"
          className="hover:opacity-80 transition-opacity"
        >
          inquiries
        </a>

        {" | "}

        <a
          href="https://medium.com/@yannickbruderlein"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          research
        </a>
      </footer>
    </main>
  );
}