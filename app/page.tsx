"use client";

import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center py-12 md:py-24" style={{ backgroundColor: '#D9D9D9' }}>
      <div className="flex flex-col items-start max-w-[450px] px-4">
        <img src="/subcurrent.svg" alt="Subcurrent" className="w-[120px] md:w-[150px] mb-4" />
        <p className="text-sm md:text-base text-left" style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 400 }}>
          01<br />
          We're an intelligence studio operating at the intersection of chaos, complexity, and emergence.
        </p>
        <p className="text-sm md:text-base text-left mt-4" style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 400 }}>
          02<br />
          We develop and apply predictive models native to human ingenuity.
        </p>
        <p className="text-sm md:text-base text-left mt-4" style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 400 }}>
          03<br />
          We want to help venture pioneers systematically mitigate uncertainty while fostering sovereign technologies.
        </p>
        <div className="flex gap-6 mt-4" style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 400 }}>
          <a href="https://medium.com/@subcurrent" target="_blank" rel="noopener noreferrer" className="text-sm md:text-base text-black hover:text-gray-500 transition-colors duration-200 underline">Research</a>
          <a href="mailto:hello@subcurrent.ai" className="text-sm md:text-base text-black hover:text-gray-500 transition-colors duration-200 underline">Inquiries</a>
        </div>
        <p className="text-sm md:text-base text-left mt-4" style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 400 }}>
          © 2026 Subcurrent AI
        </p>
      </div>
    </main>
  );
}
