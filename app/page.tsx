"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [showAboutText, setShowAboutText] = useState(false);
  const rotatingTerms = ["political", "economic", "cultural", "technological"];
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
  }, [isDeleting, rotatingTerms, showAboutText, termIndex, typedTerm]);

  const aboutText = `


(April 2026)

Founder's Note

A subcurrent (noun) refers to an obscured direction of thought, intention, or action—human agency—underlying what is manifested—it defines both our focus and our name.

We believe that beneath every complex system lies a subcurrent whose direction determines how outcomes unfold.

Our aim is to accurately identify, understand, and predict subcurrents in their natural, present states before they emerge.

We are building a foundation model that anticipates underlying human agency—enabling pioneers to make safer product, policy, and investment decisions across complex systems.`;

  return (
    <main
      className="eb-garamond-regular min-h-screen relative text-[#d9dde5]"
      style={{ backgroundColor: "#0b1324" }}
    >
      <div className="absolute left-4 top-10 hidden md:flex flex-col gap-6 text-[#3a4252] text-lg leading-none z-10">
      </div>

      <header className="absolute left-6 md:left-16 top-4 md:top-6 text-xl font-medium leading-relaxed z-10">
        <p>
          <span className="underline underline-offset-2 decoration-[1px]">‎ ‎ S</span>ubcurrent
          
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
              ? "body-text-after-header max-w-lg text-xl leading-relaxed whitespace-pre-line"
              : "body-text-after-header max-w-lg text-xl leading-relaxed whitespace-pre-line"
          }
        >
          {showAboutText
            ? aboutText
            : (
              <>
                <span className="relative top-0.5 inline-block mr-2 animate-pulse">■</span>
                an intelligence studio
            
                {"\n\n"}
                Predicting <em>human agency</em> underlying ({typedTerm}) shifts.
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

