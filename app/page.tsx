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
    if (showAboutText) return;

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

  return (
    <main
      className="eb-garamond-regular min-h-screen relative text-[#d9dde5] text-[19px]"
      style={{ backgroundColor: "#0b1324" }}
    >
      <header className="fixed left-6 md:left-16 top-4 md:top-6 font-[700] leading-relaxed z-30">
        <p>
          <span className="mr-1 underline decoration-[1px]"></span>
          _subcurrent
        </p>
      </header>

      <div
        className={
          showAboutText
            ? "z-10 relative pt-24 md:pt-28 pb-24 md:pb-28 pl-6 md:pl-16 pr-6"
            : "min-h-screen flex items-center pl-6 md:pl-16 pr-6 z-10 relative"
        }
      >
        <div className="body-text-after-header max-w-[500px] leading-relaxed">
          {showAboutText ? (
            <>
              <p className="mb-8">
                (April 2026) | Our Thesis
              </p>

              <div className="border-l-[1px] border-[#d9dde5] pl-6 mb-8 ml-1">
                <p className="leading-relaxed">
                  <span className="italic">subcurrent</span>
                  <br />
                  (ˈsʌbˌkɜːrənt, -ˌkʌr-)
                  <br />
                  noun
                  <br />
                  an obscured or not yet clearly formulated direction of
                  thought, intention, or action—human agency—underlying what is manifested
                </p>
              </div>

              <p className="mb-6">
                Markets, institutions, and societies are shaped by underlying human agency. Beneath every transaction, adoption cycle, alignment, and migration pattern lie hidden directional forces that determine how systems evolve over time.
              </p>

              <p className="mb-6">
              Yet human granularity, dynamism  and noise make these forces extremely difficult to identify before they become apparent. As a result, many of the most consequential decisions in product development, policy, and investment are still made using surface-level indicators.
              </p>

              <p className="mb-6">
              We are building a foundation model that predicts underlying human agency across complex social systems.
              </p>

              <p className="mb-6">
              Our research focuses on identifying and understanding underlying forces of agency—subcurrents—in their natural, present states—generating strategic insight for research, development, and real-world application.
              </p>

              <p className="mb-6">
              We envision a future where organizations can anticipate human direction, before decisions are deployed at scale.
              </p>

            </>
          ) : (
            <>
              {" "}
              A computational social science venture | We predict <em>human agency</em> {" "} 
              <span className="underline decoration-[1px] underline-offset-2">
              underlying
              </span>{" "}
              ({typedTerm}) shifts.
            </>
          )}
        </div>
      </div>

      <div
        className="pointer-events-none fixed left-0 right-0 top-0 z-10 h-28"
        style={{
          background:
            "linear-gradient(to bottom, #0b1324 0%, #0b1324 35%, transparent 100%)",
        }}
      />

      <div
        className="pointer-events-none fixed left-0 right-0 bottom-0 z-10 h-32"
        style={{
          background:
            "linear-gradient(to top, #0b1324 0%, #0b1324 35%, transparent 100%)",
        }}
      />

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