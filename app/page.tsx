"use client";

import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen relative" style={{ backgroundColor: '#FFFFFF' }}>
      {/* Text content center */}
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[90%] max-w-[500px] px-6">
        <img src="/gilogo.svg" alt="General Intellection" className="mb-6 w-[180px]" />
        <p className="text-sm mb-6" style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 400 }}>
        01<br />
        General Intellection — a coined compound — is defined as the process of understanding across multiple domains.
          <br /><br />
        02<br />
        We're a computational anthropology studio operating at the intersection of context, decision theory, and design.
          <br /><br />
        03<br />
        We develop models native to emergence, driven by our insatiable pursuit of truth in possibility and the identification of ingenuity trajectories.
        <br /><br />
        04<br />
        Our aim is to help venture pioneers systematically mitigate uncertainty and strengthen their capacity for judgment in fostering sovereign technologies.
        </p>
        <div className="flex flex-col items-start gap-0.5 mt-4">
          <a href="https://generalintellection.ai/playground" target="_blank" rel="noopener noreferrer" className="text-sm text-black hover:text-gray-300 transition-colors duration-200" style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 400 }}></a>
          <a href="https://medium.com/@generalintellection" target="_blank" rel="noopener noreferrer" className="text-sm text-black hover:text-gray-300 transition-colors duration-200" style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 400 }}>Research ↗</a>
          <a href="mailto:hello@generalintellection.ai" className="text-sm text-black hover:text-gray-300 transition-colors duration-200" style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 400 }}>Inquiries ↗</a>
          <p className="text-sm text-black mt-4" style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 400 }}>© 2025 General Intellection</p>
        </div>
      </div>
    </main>
  );
}
