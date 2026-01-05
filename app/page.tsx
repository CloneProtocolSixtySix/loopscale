"use client";

import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen relative" style={{ backgroundColor: '#FFFFFF' }}>
      {/* Text content center */}
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[90%] max-w-[500px] px-6">
        <img src="/gi.svg" alt="General Intellection" className="mb-6 w-[220px]" />
        <p className="text-sm mb-6" style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 400 }}>
        01<br />
        We’re an intelligence studio operating at the intersection of context, decision theory, and design.
          <br /><br />
        02<br />
        We're developing and applying foundational models native to human ingenuity.
          <br /><br />
        03<br />
        Our aim is to help both public- and private-sector institutions systematically mitigate uncertainty, solve complex problems, and enhance their capacity to foster sovereign technologies.
        </p>
        <div className="flex flex-col items-start gap-0.5 mt-4">
          <a href="https://medium.com/@generalintellection" target="_blank" rel="noopener noreferrer" className="text-sm text-black hover:text-gray-300 transition-colors duration-200" style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 400 }}>Research ↗</a>
          <a href="mailto:hello@generalintellection.ai" className="text-sm text-black hover:text-gray-300 transition-colors duration-200" style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 400 }}>Inquiries ↗</a>
          <p className="text-sm text-black mt-4" style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 400 }}>© 2025 General Intellection</p>
        </div>
      </div>
    </main>
  );
}
