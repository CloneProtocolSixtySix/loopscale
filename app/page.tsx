"use client";

import React from "react";

export default function Home() {

  return (
    <main className="min-h-screen relative" style={{ backgroundColor: '#FFFFFF' }}>
      {/* Text content center */}
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[90%] max-w-[700px] px-6">
        <img src="/symbolon.svg" alt="" className="h-6 mb-6" />
        <h2 className="text-sm font-normal mb-6">
    
        </h2>
        <p className="text-sm mb-6" style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 500 }}> Sensemaking complexity at the intersection of data, design, and strategy.</p>
        <p className="text-sm mb-6" style={{ fontFamily: '"IBM Plex Mono", monospace' }}> At Symbolon, we're developing foundational knowledge tools native to continually evolving environments, capable of mapping the trajectories of human ingenuity. We want to help the world's venture pioneers systematically mitigate industry uncertainty and enhance their capacity to foster sovereign technologies. We're insatiably skeptical and obsessed with uncovering truth in possibility. For now, Symbolon is an applied research project led by <a href="https://www.linkedin.com/in/yannick-bruderlein-423b0226a/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300 transition-colors duration-200">Yannick Bruderlein</a>, working towards becoming a holistic intelligence firm.

        </p>
        <div className="flex flex-col gap-2">
          <a href="https://medium.com/@symbolonai" target="_blank" rel="noopener noreferrer" className="text-sm text-black underline hover:text-gray-300 transition-colors duration-200 focus:outline-none focus:text-gray-300" style={{ fontFamily: '"IBM Plex Mono", monospace' }}>Case Studies</a>
          <a href="mailto:hello@symbolon.ai" className="text-sm text-black underline hover:text-gray-300 transition-colors duration-200 focus:outline-none focus:text-gray-300" style={{ fontFamily: '"IBM Plex Mono", monospace' }}>Inquiries</a>
          <p className="text-sm text-black mt-4" style={{ fontFamily: '"IBM Plex Mono", monospace' }}>© 2025 Symbolon AI</p>
        </div>
      </div>
    </main>
  );
}
