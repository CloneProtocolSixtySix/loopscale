"use client";

import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center py-12 md:py-24" style={{ backgroundColor: '#D9D9D9' }}>
      <div className="flex flex-col items-start max-w-[550px] px-4 gap-4">
        <img src="/subcurrent.svg" alt="Subcurrent" className="w-[20px] md:w-[26px] mb-2" />
        <p className="text-lg md:text-base text-left" style={{ fontFamily: 'var(--font-altform), sans-serif', fontWeight: 400 }}>
 <a href="https://www.collinsdictionary.com/dictionary/english/subcurrent" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#D9D9D9] transition-colors duration-200">Subcurrent</a> (noun) refers to the hidden directions of intentionality underlying what is manifested. It defines both our focus and our name.

        </p>
        <p className="text-lg md:text-base text-left" style={{ fontFamily: 'var(--font-altform), sans-serif', fontWeight: 400 }}>
          We are a small, applied intelligence studio operating at the intersection of chaos, complexity, and emergence, building predictive models native to human ingenuity. 
        </p>
        <p className="text-lg md:text-base text-left" style={{ fontFamily: 'var(--font-altform), sans-serif', fontWeight: 400 }}>
          Our aim is to combine investment research and <a href="https://www.technologyreview.com/2014/06/10/172631/the-emerging-science-of-computational-anthropology/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#D9D9D9] transition-colors duration-200">computational anthropology</a> to help venture pioneers systematically mitigate industry uncertainty while fostering sovereign technologies.
        </p>
        <div className="flex gap-6" style={{ fontFamily: 'var(--font-altform), sans-serif', fontWeight: 400 }}>
          <a href="https://medium.com/@subcurrent" target="_blank" rel="noopener noreferrer" className="text-lg md:text-base text-black hover:text-[#D9D9D9] transition-colors duration-200 underline">Case Studies</a>
          <a href="mailto:hello@subcurrent.ai" className="text-lg md:text-base text-black hover:text-[#D9D9D9] transition-colors duration-200 underline">Inquiries</a>
        </div>
        <p className="text-lg md:text-base text-left" style={{ fontFamily: 'var(--font-altform), sans-serif', fontWeight: 400 }}>
          © 2026 Subcurrent AI
        </p>
      </div>
    </main>
  );
}
