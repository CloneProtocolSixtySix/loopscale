'use client';

import { useState, useEffect } from 'react';

const dotPatterns = [
  ''
];

export default function AnimatedDots() {
  const [currentPattern, setCurrentPattern] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPattern((prev) => (prev + 1) % dotPatterns.length);
    }, 150); // Change pattern every 150ms for smooth animation

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-mono text-xs leading-tight whitespace-pre-wrap break-all opacity-20">
      {dotPatterns[currentPattern]}
    </div>
  );
}

