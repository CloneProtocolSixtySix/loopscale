'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Playfair_Display } from 'next/font/google';

import { altform } from './fonts';
import DottedEffect from './components/DottedEffect';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair'
});

function Typewriter({ words, speed = 80, pause = 1200 }: { words: string[]; speed?: number; pause?: number }) {
  const [displayed, setDisplayed] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | undefined;
    if (!deleting && charIndex < words[wordIndex].length) {
      timeout = setTimeout(() => {
        setDisplayed(words[wordIndex].slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, speed);
    } else if (!deleting && charIndex === words[wordIndex].length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(words[wordIndex].slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, speed / 2);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setWordIndex((wordIndex + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words, speed, pause]);

  return (
    <span className="text-blue-500">
      {displayed}
    </span>
  );
}

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const totalSections = 7; // Total number of snap sections
  const mainRef = useRef<HTMLDivElement>(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [atBottom, setAtBottom] = useState(false);
  const [useCasesOpen, setUseCasesOpen] = useState(false);
  const [coreFunctionsOpen, setCoreFunctionsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Helper to toggle accordions: open if closed, close if open
  const openOnly = (section: 'usecases' | 'corefunctions') => {
    setUseCasesOpen((prev) => section === 'usecases' ? !useCasesOpen : false);
    setCoreFunctionsOpen((prev) => section === 'corefunctions' ? !coreFunctionsOpen : false);
  };

  useEffect(() => {
    // Check if user has a theme preference in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      // Default to light mode
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setCurrentSection(index);
        }
      });

      // Track scroll for header collapse
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const main = mainRef.current;
    if (!main) return;
    const onScroll = () => {
      setHasScrolled(main.scrollTop > 0);
      setAtBottom(main.scrollHeight - main.scrollTop - main.clientHeight < 10);
    };
    main.addEventListener('scroll', onScroll);
    return () => main.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      localStorage.setItem('theme', 'light');
    }
  };

  const progress = (currentSection / (totalSections - 1)) * 100;

  const handleAccordionKey = (e: React.KeyboardEvent, toggleFn: (fn: (open: boolean) => boolean) => void) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleFn((open) => !open);
    }
  };

  return (
    <main ref={mainRef} className={`overflow-y-scroll scroll-smooth transition-colors duration-300 pb-32 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="max-w-2xl w-full px-6 mx-auto">
        {/* Theme Toggle */}
        <div className="fixed top-6 left-0 right-0 flex justify-between items-center px-4 sm:px-8 z-50">
          <span className={`flex items-center text-xl sm:text-2xl transition-all duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`}>
            <span className="mr-2 font-bold">⛶</span>
            <span className={`transition-all duration-300 ${isScrolled ? 'w-0 overflow-hidden opacity-0' : 'w-auto opacity-100'}`}>Leeway</span>
          </span>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-colors duration-200 ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-black'}`}
            aria-label="Toggle theme"
          >
            <span className="block w-3 h-3 rounded-full bg-current"></span>
          </button>
        </div>

        {/* Hero Section */}
        <section id="vision" className="flex flex-col transition-all duration-300 ease-in-out p-4 pt-0 md:pt-4 mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-0 md:gap-8 md:gap-0">
            <div className="flex-1">
              <div className={`text-base text-center mt-24 md:mt-48 mb-2 md:mb-10 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                <div className="mb-6 flex items-center gap-2 justify-center">
                </div>
                <h1 className={`text-4xl font-regular mb-8 mt-16 md:mt-32 text-center ${isDarkMode ? 'text-white' : 'text-black'} ${playfair.className}`}>
                  Intelligence, for human-use.
                </h1>
                <h2 className={`text-lg font-regular mb-1 text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>
                  <span className="font-regular">Leeway</span> is a research-led design studio pioneering a generation of consistent and controllable knowledge tools.
                </h2>
                <div className="flex gap-4 mt-6 justify-center">
                  <button 
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                    className={`px-3 py-1 rounded-full border text-sm font-semibold transition-all duration-300 ${isDarkMode ? 'border-white text-white hover:bg-white hover:text-black' : 'border-black text-black hover:bg-black hover:text-white'}`}
                  >
                    Discover UI-Gen 1
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center mt-16">
            <div className="relative w-full max-w-2xl flex justify-center items-center">
              <div className="w-full h-[500px]">
                <DottedEffect isDarkMode={isDarkMode} />
              </div>
              <span className="absolute inset-0 flex items-center justify-center text-[12rem] md:text-[18rem] z-10 pointer-events-none select-none text-white font-light" style={{mixBlendMode: 'difference'}}>
                ⛶
              </span>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section id="solution" className="flex flex-col justify-center transition-all duration-300 ease-in-out p-4 mb-16">
          <h2 className={`text-lg mb-6 ${isDarkMode ? 'text-white' : 'text-black'}`}>Research</h2>
          <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-white' : 'text-black'}`}>
            We're molding general-purpose AI into human-centered collaborators that anticipate user needs, navigate complexity, and perform layered tasks. We call this <span className="font-semibold">Usable Intelligence (UI)</span>.
          </p>
        </section>

        <section id="about" className="flex flex-col justify-center transition-all duration-300 ease-in-out p-4 mb-16">
          <h2 className={`text-lg mb-6 ${isDarkMode ? 'text-white' : 'text-black'}`}>
            <span className={`${altform.className} ${isDarkMode ? 'text-white' : 'text-black'}`}>Technology</span>
          </h2>
          <p className={`text-lg leading-relaxed mb-6 font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>
            Leeway UI Gen‑1: Agentic Interfaces (AI)
          </p>
          <p className={`text-lg leading-relaxed mb-6 text- ${isDarkMode ? 'text-white' : 'text-black'}`}>
            Our first iteration of UI introduces AI: gamified workflow automations that enable the orchestration of multiple agents within a system, freeing professionals to focus on higher-leverage, more intellectually stimulating work. If you're interested in early access, please fill out the <a href="https://tally.so/r/mRla1p" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600 transition-colors">form</a>.
          </p>
          <blockquote className={`border-l-4 pl-2 mb-6 ${isDarkMode ? 'border-gray-400' : 'border-gray-600'}`}>
            <p className={`text-xs font-mono uppercase ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              continually evolving
            </p>
          </blockquote>
        </section>

        <section id="approach" className="flex flex-col justify-center transition-all duration-300 ease-in-out p-4 mb-16">
          <h2 className={`text-lg mb-6 ${isDarkMode ? 'text-white' : 'text-black'}`}>Approach</h2>
          <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-white' : 'text-black'}`}> 
            We're building foundational instruments for alignment and safety that preserve and extend human reasoning—much like how the shift from pen and paper to laptops transformed how we solve problems and scale ideas.
          </p>
        </section>

        <section id="contact" className="flex flex-col justify-center transition-all duration-300 ease-in-out p-4 mb-16">
          <h2 className={`text-lg mb-6 ${isDarkMode ? 'text-white' : 'text-black'}`}>Let's Talk</h2>
          <p className={`text-lg leading-relaxed mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>
            If you'd like to learn more about our work, feel free to
            <a
              href="mailto:hello@leewaylabs.ai"
              className="underline hover:text-gray-600 transition-colors mx-1"
            >
              reach out</a>.
          </p>
          <div className={`text-xs font-mono uppercase mt-6 ${isDarkMode ? 'text-white' : 'text-black'}`}>© 2025 Leeway Labs · Montreal</div>
        </section>
      </div>
    </main>
  );
} 