"use client";

import React from "react";
import AugmentedCognitionEffect from "./components/AugmentedCognitionEffect";

export default function Home() {

  return (
    <main className="min-h-screen relative" style={{ backgroundColor: '#FFFFFF' }}>
      {/* Text content center */}
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[90%] max-w-[700px] px-6">
        <h2 className="text-2xl mb-6 flex items-center gap-3" style={{ fontFamily: '"Old Standard TT", monospace' }}>
          <img src="/gi.svg" alt="Lightship Logo" className="mr-2" width="240" height="240" />
        </h2>
        <p className="text-sm mb-6" style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 400 }}> At GI, we're building <span style={{ fontWeight: 500 }}>foundational tools</span> and <span style={{ fontWeight: 500 }}>strategies</span> native to <span style={{ fontWeight: 500 }}>continually evolving environments</span>, capable of <span style={{ fontWeight: 500 }}>identifying the trajectories of human ingenuity</span>. We want to help venture pioneers <span style={{ fontWeight: 500 }}>systematically mitigate uncertainty</span> and enhance their capacity to foster <span style={{ fontWeight: 500 }}>sovereign technologies</span>. We're <span style={{ fontWeight: 500 }}>insatiably skeptical</span> and obsessed with <span style={{ fontWeight: 500 }}>uncovering truth in possibility</span>. For now, GI is an <span style={{ fontWeight: 500 }}>applied research project</span> led by <a href="https://www.linkedin.com/in/yannick-bruderlein-423b0226a/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300 transition-colors duration-200">Yannick Bruderlein</a>, working towards becoming a <span style={{ fontWeight: 500 }}>predictive intelligence firm</span>, operating at the <span style={{ fontWeight: 500 }}>intersection of design, data, and decision</span>.

        </p>
        <div className="flex flex-col gap-2">
        <a href="https://medium.com/@foretoken" target="_blank" rel="noopener noreferrer" className="text-sm text-black underline hover:text-gray-300 transition-colors duration-200 focus:outline-none focus:text-gray-300" style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 400 }}>Case Studies</a>
        <a href="mailto:hello@foretoken.xyz" className="text-sm text-black underline hover:text-gray-300 transition-colors duration-200 focus:outline-none focus:text-gray-300" style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 400 }}>Inquiries</a>
        <p className="text-sm text-black mt-4" style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 400 }}>© 2025 General Intellection</p>
        </div>
      </div>
    </main>
  );[]
}
