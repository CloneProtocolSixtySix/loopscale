'use client';

import { useState, useRef, useLayoutEffect } from "react";

function CapabilitiesToggle({ 
  options, 
  currentIndex, 
  setCurrentIndex, 
  tabRefs, 
  indicatorStyle 
}: {
  options: string[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  tabRefs: React.RefObject<(HTMLButtonElement | null)[]>;
  indicatorStyle: { left: number; width: number };
}) {
  return (
    <div className="mb-6">
      <div className="relative bg-[#E5E7EB] grid grid-cols-2 md:inline-flex md:flex-row md:items-center overflow-hidden md:overflow-x-auto max-w-full whitespace-nowrap">
        <div
          className="absolute inset-y-0 transition-all duration-300 ease-in-out z-0 bg-[#181818] hidden md:block"
          style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
        />
        {options.map((option, idx) => (
          <button
            key={option}
            ref={el => { if (tabRefs.current) tabRefs.current[idx] = el; }}
            onClick={() => setCurrentIndex(idx)}
            className={`font-mono relative z-10 px-4 py-3 md:py-2 text-sm transition-colors duration-200 whitespace-nowrap focus:outline-none focus:ring-0
              ${currentIndex === idx ? "text-white bg-[#181818] md:bg-transparent" : "text-[#181818]"}
            `}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CapabilitiesToggle; 