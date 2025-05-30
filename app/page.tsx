'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
    <span className="text-blue-500 dark:text-blue-400">
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
  const [ixOpen, setIxOpen] = useState(false);
  const [useCasesOpen, setUseCasesOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [frameworksOpen, setFrameworksOpen] = useState(false);

  useEffect(() => {
    // Check if user has a theme preference in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
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
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
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
    <main ref={mainRef} className="h-screen overflow-y-scroll scroll-smooth bg-[#F3F3F5] dark:bg-black transition-colors duration-300 pb-32">
      {/* Background Pattern */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="text-[1000px] text-black/10 dark:text-white/10 blur-[400px] select-none" style={{ display: 'inline-block', transform: 'rotate(45deg)' }}>
          ∞
        </div>
      </div>
      <div className="max-w-2xl w-full px-6 mx-auto">
        {/* Theme Toggle */}
        <div className="fixed top-6 left-0 right-0 flex justify-between items-center px-4 sm:px-8 z-50">
          <span className="flex items-center text-lg sm:text-2xl text-black dark:text-white transition-all duration-300">
            <span className="mr-2 text-xl sm:text-2xl md:text-3xl font-extralight transform inline-block text-black dark:text-white" style={{ display: 'inline-block', transform: 'rotate(45deg)' }}>∞</span>
            <span
              className="text-base sm:text-lg md:text-xl text-black dark:text-white transition-all duration-300"
              style={{
                opacity: hasScrolled ? 0 : 1,
                display: 'inline-block',
                transition: 'opacity 0.3s',
              }}
            >Loopscale
            </span>
          </span>
          <button
            onClick={toggleTheme}
            className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-black dark:bg-white transition-colors duration-300 cursor-pointer self-center mt-0"
            aria-label="Toggle theme"
          />
        </div>

        {/* Hero Section */}
        <section id="vision" className="min-h-screen flex flex-col justify-center transition-all duration-300 ease-in-out p-4 mb-1">
          <div className="mb-16">
            <div className="text-base sm:text-lg font-light text-center mt-8 mb-10">
              <span className="text-black dark:text-white">A research-led design & technology studio</span><span className="inline-block animate-blink align-middle text-gray-400 dark:text-gray-500" style={{fontSize: '0.7em'}}>&#9608;</span>
            </div>
            <p className="text-4xl sm:text-6xl font-thin text-black dark:text-white text-center">
              We're <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-gradient italic">refining</span> frontier AI into <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-gradient italic">usable</span> tools.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section id="solution" className="flex flex-col justify-center transition-all duration-300 ease-in-out p-4 mb-1">
          <p className="text-base sm:text-lg leading-relaxed text-black dark:text-white">
            There exists a <span className="text-black dark:text-white">disconnect between the multifaceted capabilities of contemporary AI/ML models and non-specialist or resource-limited teams' ability to engage with them.</span> Our work seeks to address this limitation by designing <span className="text-black dark:text-white">intuitive access to advanced configurations</span>. The future of AI tools will be defined by <span className="text-black dark:text-white">anticipatory interactions</span>, seamlessly molding models into <span className="text-black dark:text-white">reliable workflow-native collaborators</span> that <span className="text-black dark:text-white">increase operational efficiency</span>, <span className="text-black dark:text-white">navigate complexity</span>, and <span className="text-black dark:text-white">uncover solutions</span>.
            <br />
            <br />
            Introducing:
          </p>
        </section>

        {/* IX Box Section */}
        <section id="work" className="flex flex-col justify-center transition-all duration-300 ease-in-out p-4 mb-1">
          <div className="flex items-center justify-start gap-4 sm:gap-8 relative">
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-64 md:h-64 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 p-2 sm:p-4 md:p-6 flex flex-col justify-between overflow-hidden">
              <div className="relative z-10">
                <p className="text-sm sm:text-base md:text-lg font-normal text-white dark:text-black text-left leading-tight">
                  Intelligent<br />Experiences
                </p>
              </div>
              <div className="relative z-10">
                <p className="text-5xl sm:text-9xl font-light text-white dark:text-black text-left leading-none mt-4 sm:mt-10 mr-2">
                  IX
                </p>
              </div>
            </div>
            <div className="w-px h-8 sm:h-12 bg-gray-400 dark:bg-gray-700 mx-2 sm:mx-6" />
            <div className="flex-1 flex items-start">
              <span className="text-base sm:text-lg md:text-xl text-black dark:text-white">Personalized<br />Adaptive<br />Conversational</span>
            </div>
          </div>
        </section>

        <section id="about" className="flex flex-col justify-center transition-all duration-300 ease-in-out p-4 mb-1">
          <div className="space-y-4">
            <p className="text-base sm:text-lg leading-relaxed text-black dark:text-white mb-2">
              Intelligent Experiences (IX) are configured to client specifications, trained on enterprise data, and housed within human-centred interfaces.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-black dark:text-white mb-2">
              Once deployed, <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-gradient">IX</span> tools can support everything from <span className="text-black dark:text-white">intricate task automation</span> to <span className="text-black dark:text-white">complex team workflows</span> by <span className="text-black dark:text-white">precisely matching user queries</span>. Through <span className="text-black dark:text-white">iterative learning</span>, <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-gradient">IX</span>-powered products can handle <span className="text-black dark:text-white">chaotic environments</span> where <span className="text-black dark:text-white">maintaining systems is critical</span>, freeing professionals to concentrate on <span className="text-black dark:text-white">higher-leverage and more intellectually stimulating work</span>.
            </p>
            <div className="w-full max-w-xs">
              <button
                type="button"
                onClick={() => setToolsOpen((open) => !open)}
                onKeyDown={(e) => handleAccordionKey(e, setToolsOpen)}
                tabIndex={0}
                aria-expanded={toolsOpen}
                aria-controls="tools-panel"
                id="tools-header"
                className="w-full flex justify-between items-center px-0 py-2 bg-transparent text-gray-400 dark:text-gray-400 font-normal text-base sm:text-lg transition-colors focus:outline-none focus:ring-0 text-left hover:bg-transparent rounded-none"
                style={{ letterSpacing: '0.01em' }}
              >
                <span className="text-left flex-1">Tools</span>
                <span className="ml-2 text-base sm:text-lg flex-shrink-0 transition-transform duration-200">
                  {toolsOpen ? '−' : '+'}
                </span>
              </button>
              <div
                id="tools-panel"
                role="region"
                aria-labelledby="tools-header"
                className={`overflow-hidden transition-all duration-300 ease-in-out ${toolsOpen ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'}`}
                aria-hidden={!toolsOpen}
              >
                {/* Agent SVG with IX Gradient and text above it */}
                <div className="flex flex-col items-start my-6 ml-2">
                  <svg width="32" height="32" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-2">
                    <defs>
                      <linearGradient id="ix-gradient-agent" x1="0" y1="0" x2="71" y2="71" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#3B82F6" />
                        <stop offset="0.5" stopColor="#A78BFA" />
                        <stop offset="1" stopColor="#EC4899" />
                      </linearGradient>
                    </defs>
                    <rect x="1" y="1" width="69" height="69" stroke="url(#ix-gradient-agent)" strokeWidth="2" />
                    <circle cx="35.5" cy="35.5" r="16.5" fill="url(#ix-gradient-agent)" />
                  </svg>
                  <div className="max-w-[280px]">
                    <div className="text-base text-black dark:text-white">AI-Coworker</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Designed to support teams by automating tasks, answering complex queries, and adapting to evolving operational needs.</div>
                  </div>
                </div>
                {/* Dashboard1 SVG with IX Gradient and text above it */}
                <div className="flex flex-col items-start my-6 ml-2">
                  <svg width="32" height="32" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-2">
                    <defs>
                      <linearGradient id="ix-gradient-agent" x1="0" y1="0" x2="71" y2="71" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#3B82F6" />
                        <stop offset="0.5" stopColor="#A78BFA" />
                        <stop offset="1" stopColor="#EC4899" />
                      </linearGradient>
                    </defs>
                    <path d="M35.7482 70H1V44M35.7482 70H70V26.813M35.7482 70L35.5928 26.813M35.5 1H1V22V44M35.5 1H70V26.813M35.5 1L35.5928 26.813M35.5928 26.813H70M35.5 44H1" stroke="url(#ix-gradient-agent)" strokeWidth="2" />
                  </svg>
                  <div className="max-w-[280px]">
                    <div className="text-base text-black dark:text-white">Turnkey Dashboard</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">A no-code interface for managing and monitoring AI-Coworkers, enabling performance insights, workflow automation, prompt refinement, model behavior control, and a customizable feature set.</div>
                  </div>
                </div>
              </div>
              <hr className="border-t border-gray-400 dark:border-gray-700 h-px mb-6 max-w-xs" />
            </div>
            <div className="w-full max-w-xs">
              <button
                type="button"
                onClick={() => setFrameworksOpen((open) => !open)}
                onKeyDown={(e) => handleAccordionKey(e, setFrameworksOpen)}
                tabIndex={0}
                aria-expanded={frameworksOpen}
                aria-controls="frameworks-panel"
                id="frameworks-header"
                className="w-full flex justify-between items-center px-0 py-2 bg-transparent text-gray-400 dark:text-gray-400 font-normal text-base sm:text-lg transition-colors focus:outline-none focus:ring-0 text-left hover:bg-transparent rounded-none"
                style={{ letterSpacing: '0.01em' }}
              >
                <span className="text-left flex-1">Frameworks</span>
                <span className="ml-2 text-base sm:text-lg flex-shrink-0 transition-transform duration-200">
                  {frameworksOpen ? '−' : '+'}
                </span>
              </button>
              <div
                id="frameworks-panel"
                role="region"
                aria-labelledby="frameworks-header"
                className={`overflow-hidden transition-all duration-300 ease-in-out ${frameworksOpen ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'}`}
                aria-hidden={!frameworksOpen}
              >
                <div className="flex items-start my-6 ml-2">
                  <div className="max-w-[280px]">
                    <div className="flex items-center">
                      <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">⛾</span>
                      <span className="text-base text-black dark:text-white ml-2">Loopscale Coffeehouse™</span>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1 max-w-[280px]">Our proprietary IX framework is purpose-built for small, retail-based establishments and fully configurable to each client's needs. It integrates a suite of interconnected tools and management systems to elevate operational efficiency, without the heavy cost of complex implementation.</div>
                  </div>
                </div>
              </div>
              <hr className="border-t border-gray-400 dark:border-gray-700 h-px mb-6 max-w-xs" />
            </div>
            <p className="text-base sm:text-lg leading-relaxed text-black dark:text-white mb-2">
              We partner with select clients, crafting <span className="text-black dark:text-white">bespoke <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-gradient">IX</span> tools</span> that deliver <span className="text-black dark:text-white">real strategic value</span>. In parallel, we're pioneering a product for <span className="text-black dark:text-white">broader applications</span>. If you'd like to become an <span className="text-black dark:text-white">early adopter</span>, please fill out this <a href="https://tally.so/r/mRla1p" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors">form</a>.
            </p>
          </div>
        </section>

        <section id="accordions" className="w-full flex flex-col items-start">
          <section id="contact" className="flex flex-col justify-center transition-all duration-300 ease-in-out p-4 mb-1">
            <div className="space-y-4">
              {/* Capabilities Accordion */}
              <div className="w-full max-w-xs">
                <button
                  type="button"
                  onClick={() => setIxOpen((open) => !open)}
                  onKeyDown={(e) => handleAccordionKey(e, setIxOpen)}
                  tabIndex={0}
                  aria-expanded={ixOpen}
                  aria-controls="ix-capabilities-panel"
                  id="ix-capabilities-header"
                  className="w-full flex justify-between items-center px-0 py-2 bg-transparent text-gray-400 dark:text-gray-400 font-normal text-base sm:text-lg transition-colors focus:outline-none focus:ring-0 text-left hover:bg-transparent rounded-none"
                  style={{ letterSpacing: '0.01em' }}
                >
                  <span className="text-left flex-1">Capabilities</span>
                  <span className="ml-2 text-base sm:text-lg flex-shrink-0 transition-transform duration-200">
                    {ixOpen ? '−' : '+'}
                  </span>
                </button>
                <div
                  id="ix-capabilities-panel"
                  role="region"
                  aria-labelledby="ix-capabilities-header"
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${ixOpen ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'}`}
                  aria-hidden={!ixOpen}
                >
                  <ul className="bg-transparent text-black dark:text-white">
                    <li className="px-2 py-1">
                      <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">✦</span> Automate
                      <div className="text-sm text-gray-500 dark:text-gray-400 mt-1 max-w-[280px]">Detect patterns and trigger actions automatically.</div>
                    </li>
                    <li className="px-2 py-1">
                      <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">𖡎</span> Remember
                      <div className="text-sm text-gray-500 dark:text-gray-400 mt-1 max-w-[280px]">Store and recall data, context, and instructions.</div>
                    </li>
                    <li className="px-2 py-1">
                      <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">⊹</span> Focus
                      <div className="text-sm text-gray-500 dark:text-gray-400 mt-1 max-w-[280px]">Highlight what's important and prioritize tasks.</div>
                    </li>
                    <li className="px-2 py-1">
                      <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">⚒</span> Repair
                      <div className="text-sm text-gray-500 dark:text-gray-400 mt-1 max-w-[280px]">Spot and resolve errors or inconsistencies.</div>
                    </li>
                    <li className="px-2 py-1">
                      <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">↔</span> Move
                      <div className="text-sm text-gray-500 dark:text-gray-400 mt-1 max-w-[280px]">Enable smooth transitions across tools and tasks.</div>
                    </li>
                  </ul>
                </div>
                <hr className="border-t border-gray-400 dark:border-gray-700 h-px mb-0.5" />
              </div>
              <div className="w-full max-w-xs">
                {/* Removed divider */}
              </div>

              {/* Use Cases Accordion */}
              <div className="w-full max-w-xs">
                <button
                  type="button"
                  onClick={() => setUseCasesOpen((open) => !open)}
                  onKeyDown={(e) => handleAccordionKey(e, setUseCasesOpen)}
                  tabIndex={0}
                  aria-expanded={useCasesOpen}
                  aria-controls="use-cases-panel"
                  id="use-cases-header"
                  className="w-full flex justify-between items-center px-0 py-2 bg-transparent text-gray-400 dark:text-gray-400 font-normal text-base sm:text-lg transition-colors focus:outline-none focus:ring-0 text-left hover:bg-transparent rounded-none"
                  style={{ letterSpacing: '0.01em' }}
                >
                  <span className="text-left flex-1">Use Cases</span>
                  <span className="ml-2 text-base sm:text-lg flex-shrink-0 transition-transform duration-200">
                    {useCasesOpen ? '−' : '+'}
                  </span>
                </button>
                <div
                  id="use-cases-panel"
                  role="region"
                  aria-labelledby="use-cases-header"
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${useCasesOpen ? 'max-h-[500px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'}`}
                  aria-hidden={!useCasesOpen}
                >
                  <ul className="bg-transparent text-black dark:text-white">
                    <li className="px-2 py-1">
                      <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">⛶</span> R&D Ops
                      <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Extract insights and surface key patterns.</div>
                    </li>
                    <li className="px-2 py-1">
                      <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">?</span> Support
                      <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Answer questions and guide better decisions.</div>
                    </li>
                    <li className="px-2 py-1">
                      <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">⧉</span> Maintenance Ops
                      <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Monitor systems and fix issues proactively.</div>
                    </li>
                    <li className="px-2 py-1">
                      <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">≡</span> Workflow Execution
                      <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Coordinate actions across complex processes.</div>
                    </li>
                    <li className="px-2 py-1">
                      <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">§</span> Regulatory & Policy
                      <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Ensure outputs meet compliance standards.</div>
                    </li>
                  </ul>
                </div>
                <hr className="border-t border-gray-400 dark:border-gray-700 h-px mb-2" />
              </div>
              <div className="w-full max-w-xs">
                {/* Removed divider */}
              </div>
              {/* Case Studies Link */}
              <div className="w-full max-w-xs mt-2">
                <div className="block text-base sm:text-lg text-gray-400 dark:text-gray-500 opacity-70 flex items-center gap-2 select-none">
                  Case Studies <span aria-hidden="true">→</span>
                  <span className="ml-1 px-2 py-0.5 rounded-full bg-gray-200 dark:bg-gray-700 text-xs font-medium text-gray-600 dark:text-gray-300">coming soon</span>
                </div>
              </div>
            </div>
          </section>

          <section id="about" className="flex flex-col justify-center transition-all duration-300 ease-in-out p-4 mb-1">
            <div className="space-y-4">
              <p className="text-base sm:text-lg leading-relaxed text-black dark:text-white">
                While Loopscale is still in its <span className="text-black dark:text-white">early stages</span>, we believe that if we are successful, <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-gradient">IX</span>-powered products will create <span className="text-black dark:text-white">noticeable results across multiple industries</span>. This makes us <span className="text-black dark:text-white">extremely excited to work on this</span>. Our goal is to assemble a team of <span className="text-black dark:text-white">relentless problem solvers</span> and shape the <span className="text-black dark:text-white">next phase of AI tools</span>. We have an opportunity to build a <span className="text-black dark:text-white">generational studio</span>.
              </p>
            </div>
          </section>

          <section id="contact" className="flex flex-col justify-center transition-all duration-300 ease-in-out p-4 mb-1">
            <div className="space-y-4">
              <p className="text-base sm:text-lg leading-relaxed text-black dark:text-white">
                If you're <span className="text-black dark:text-white">interested in learning more</span> about our work, feel free to <a href="mailto:hello@loopscale.com" className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors underline">reach out</a>.
              </p>
            </div>
          </section>
          <div className="h-64"></div>
        </section>
      </div>
      {atBottom && (
        <div className="fixed bottom-4 right-8 z-50 text-xs sm:text-sm text-black dark:text-white">
          © 2025 Loopscale · <a href="mailto:hello@loopscale.com" className="underline hover:text-blue-600 dark:hover:text-blue-400">hello@loopscale.com</a> · Montreal
        </div>
      )}
    </main>
  );
} 