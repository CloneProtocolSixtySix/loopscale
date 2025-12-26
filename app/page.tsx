"use client";

import React, { useState } from "react";
import AugmentedCognitionEffect from "./components/AugmentedCognitionEffect";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen relative" style={{ backgroundColor: '#FFFFFF' }}>
      {/* Logo top left */}
      <img src="/gi.svg" alt="GI Logo" className="fixed top-[18px] left-6 z-30" width="220" height="220" />
      {/* Desktop Nav top right */}
      <nav className="fixed top-6 right-6 z-20 hidden md:flex flex-row items-center gap-6">
        <a href="https://medium.com/@generalintellection" target="_blank" rel="noopener noreferrer" className="text-sm text-black underline hover:text-gray-300 transition-colors duration-200" style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 400 }}>Case Studies</a>
        <a href="mailto:hello@generalintellection.ai" className="text-sm text-black underline hover:text-gray-300 transition-colors duration-200" style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 400 }}>Inquiries</a>
      </nav>
      {/* Mobile menu button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="fixed top-[18px] right-6 z-30 md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-px bg-black transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
        <span className={`block w-6 h-px bg-black transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-px bg-black transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
      </button>
      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-20 bg-white md:hidden flex flex-col items-center justify-center gap-8">
          <a href="https://medium.com/@generalintellection" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="text-lg text-black underline hover:text-gray-300 transition-colors duration-200" style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 400 }}>Case Studies</a>
          <a href="mailto:hello@generalintellection.ai" onClick={() => setMenuOpen(false)} className="text-lg text-black underline hover:text-gray-300 transition-colors duration-200" style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 400 }}>Inquiries</a>
        </div>
      )}
      {/* Top line */}
      <div className="fixed top-16 left-0 right-0 z-10 h-px bg-black opacity-10"></div>
      {/* Text content center */}
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[90%] max-w-[500px] px-6">
        <p className="text-sm mb-6" style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 400 }}>
          GI is an applied research studio operating at the intersection of probability, economics, and design.
          <br /><br />
          We're developing foundational models native to continually evolving environments, capable of identifying the trajectories of human ingenuity.
          <br /><br />
          We're insatiably skeptical and obsessed with uncovering truth in possibility.
          <br /><br />
         We want to build predictive intelligence that help public and private sector institutions systematically mitigate uncertainty and enhance their capacity to foster sovereign technologies.
        </p>
      </div>
      {/* Bottom line */}
      <div className="fixed bottom-16 left-0 right-0 z-10 h-px bg-black opacity-10"></div>
      {/* Copyright bottom left */}
      <p className="fixed bottom-6 left-6 z-20 text-sm text-black" style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 400 }}>© 2025 General Intellection</p>
      {/* LinkedIn bottom right */}
      <a href="https://www.linkedin.com/company/epistemicmachines/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-20 text-sm text-black underline hover:text-gray-300 transition-colors duration-200" style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 400 }}>LinkedIn</a>
    </main>
  );[]
}
