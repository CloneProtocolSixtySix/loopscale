"use client";

import React from "react";
import AugmentedCognitionEffect from "./components/AugmentedCognitionEffect";

export default function Home() {

  return (
    <main className="min-h-screen relative" style={{ backgroundColor: '#FFFFFF' }}>
      {/* Text content center */}
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[90%] max-w-[700px] px-6">
        <h2 className="text-2xl mb-6 flex items-center gap-3" style={{ fontFamily: '"Old Standard TT", serif' }}>
          ⧉
        </h2>
        <p className="text-sm mb-6" style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 500 }}> Sensemaking Complexity with <i><AugmentedCognitionEffect /></i></p>
        <p className="text-sm mb-6" style={{ fontFamily: '"IBM Plex Mono", monospace' }}> At Augnition, we're building foundational tools and strategies native to continually evolving environments, capable of mapping the trajectories of human ingenuity. We want to help the world's venture pioneers systematically mitigate industry uncertainty and enhance their capacity to foster sovereign technologies. We're insatiably skeptical and obsessed with uncovering truth in possibility. For now, Augnition is an applied research project led by <a href="https://www.linkedin.com/in/yannick-bruderlein-423b0226a/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300 transition-colors duration-200">Yannick Bruderlein</a>, working towards becoming a holistic intelligence firm, operating at the intersection of design, data, and decision.

        </p>
        <div className="flex flex-col gap-2">
          <a href="https://medium.com/@symbolonai" target="_blank" rel="noopener noreferrer" className="text-sm text-black underline hover:text-gray-300 transition-colors duration-200 focus:outline-none focus:text-gray-300" style={{ fontFamily: '"IBM Plex Mono", monospace' }}>Case Studies</a>
          <a href="mailto:hello@symbolon.ai" className="text-sm text-black underline hover:text-gray-300 transition-colors duration-200 focus:outline-none focus:text-gray-300" style={{ fontFamily: '"IBM Plex Mono", monospace' }}>Inquiries</a>
          <p className="text-sm text-black mt-4" style={{ fontFamily: '"IBM Plex Mono", monospace' }}>© 2025 Augmented Cognition Labs</p>
        </div>
      </div>
    </main>
  );
}
