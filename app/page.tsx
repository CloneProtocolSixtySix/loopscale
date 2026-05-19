"use client";

import { useEffect, useState } from "react";
import { EB_Garamond } from "next/font/google";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

const rotatingTerms = [
  "cultural",
  "technological",
  "economic",
  "political",
];

export default function Home() {
  const [termIndex, setTermIndex] = useState(0);
  const [typedTerm, setTypedTerm] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTerm = rotatingTerms[termIndex];
    const atFullTerm = typedTerm === currentTerm;
    const atEmptyTerm = typedTerm === "";

    const baseDelay = isDeleting ? 45 : 90;
    const delay = atFullTerm && !isDeleting ? 1000 : baseDelay;

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
  }, [isDeleting, termIndex, typedTerm]);

  return (
    <main
      className={`${ebGaramond.className} min-h-screen text-[#1f1a17] text-[20px]`}
      style={{ backgroundColor: "#E5CBBA" }}
    >
      <div className="px-10 md:px-20 py-24">
        <div className="max-w-[700px]">
          <img
            src="/augur.svg"
            alt="Augur"
            className="w-[70px] h-auto mb-10"
          />


          <div className="mb-10">
            <p className="tracking-[-0.01em] mb-2">
              (May 2026)
            </p>
            <h1 className="leading-[1.45] tracking-[-0.01em]">
              Introducing <span className="font-semibold">Augur</span>, a venture intelligence project.
            </h1>
          </div>
          <p className="leading-[1.45] tracking-[-0.01em] mb-12 max-w-[600px]">
          We’re building <em>multi-agent research workflows</em> that help{" "}
          <span className="underline decoration-[1px] underline-offset-2">
            founders and investors
          </span>{" "}
          anticipate{" "}
          <span>
            ({typedTerm})
          </span>{" "}
          directionality.
        </p>
          <footer className="fixed bottom-8 left-10 md:left-20 tracking-[-0.01em] opacity-70 z-20">
          <p>
            inquiries |{" "}
            <a
              href="mailto:info@augur.ventures"
              className="hover:opacity-60 transition-opacity"
            >
              info@augur.ventures
            </a>
          </p>
        </footer>
        </div>
      </div>
    </main>
  );
}