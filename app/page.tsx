"use client";

import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center py-12 md:py-24" style={{ backgroundColor: '#D9D9D9' }}>
      {/* Text content center */}
      <div className="w-[90%] max-w-[500px] px-4 md:px-6">
        <div className="flex items-center gap-1.5 mb-6">
          <img src="/subcurrent.svg" alt="Subcurrent" className="w-[140px] md:w-[200px]" />
        </div>
        <p className="text-xs md:text-sm mb-6 leading-relaxed" style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 400 }}>
        01<br />
        A subcurrent (noun) is an underlying, often subtle force that unfolds beneath the surface of events, shaping outcomes without being apparent.
<br /><br />
At Subcurrent, this is our central focus: identifying the hidden yet powerful externalities of human ingenuity.
<br /><br />
02<br />
We're a computational anthropology studio operating at the intersection of context, decision theory, and design.
<br /><br />
03<br />
We develop and apply ML models native to emergence, driven by our insatiable pursuit of truth in possibility.
<br /><br />
04<br />
Our aim is to help venture pioneers systematically mitigate uncertainty and enhance their capacity for judgment in fostering sovereign technologies.
        </p>
        <div className="flex flex-col items-start gap-0.5 mt-4">
          <a href="https://medium.com/@subcurrent" target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm text-black hover:text-gray-300 transition-colors duration-200" style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 400 }}>Research ↗</a>
          <a href="mailto:hello@subcurrent.ai" className="text-xs md:text-sm text-black hover:text-gray-300 transition-colors duration-200" style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 400 }}>Inquiries ↗</a>
          <p className="text-xs md:text-sm text-black mt-4" style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 400 }}>© 2026 Subcurrent AI</p>
        </div>
      </div>
    </main>
  );
}
