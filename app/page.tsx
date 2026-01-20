"use client";

import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center py-12 md:py-24" style={{ backgroundColor: '#D9D9D9' }}>
      <div className="flex flex-col items-start max-w-[400px] px-4">
        <img src="/subcurrent.svg" alt="Subcurrent" className="w-[120px] md:w-[150px] mb-4" />
        <p className="text-sm md:text-base text-left" style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 400 }}>
          We're a computational anthropology studio, operating at the intersection of choas, complexity, and emergence.
        </p>
        <p className="text-sm md:text-base text-left mt-4" style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 400 }}>
          We develop and apply predictive intelligence native human ingenuity.
        </p>
        <p className="text-sm md:text-base text-left mt-4" style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 400 }}>
          Our aim is to help venture pioneers systematically mitigate uncertainty while fostering sovereign technologies.
        </p>
        <div className="flex gap-6 mt-6" style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 400 }}>
          <a href="https://medium.com/@subcurrent" target="_blank" rel="noopener noreferrer" className="text-sm md:text-base text-black hover:text-gray-500 transition-colors duration-200 underline">Research</a>
          <a href="mailto:hello@subcurrent.ai" className="text-sm md:text-base text-black hover:text-gray-500 transition-colors duration-200 underline">Inquiries</a>
        </div>
      </div>
    </main>
  );
}
