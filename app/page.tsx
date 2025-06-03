'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import asixLogo from './assets/asix1.svg';

import { altform } from './fonts';

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
  const [coreFunctionsOpen, setCoreFunctionsOpen] = useState(false);

  // Helper to toggle accordions: open if closed, close if open
  const openOnly = (section: 'tools' | 'frameworks' | 'capabilities' | 'usecases' | 'corefunctions') => {
    setToolsOpen((prev) => section === 'tools' ? !toolsOpen : false);
    setFrameworksOpen((prev) => section === 'frameworks' ? !frameworksOpen : false);
    setIxOpen((prev) => section === 'capabilities' ? !ixOpen : false);
    setUseCasesOpen((prev) => section === 'usecases' ? !useCasesOpen : false);
    setCoreFunctionsOpen((prev) => section === 'corefunctions' ? !coreFunctionsOpen : false);
  };

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
      <div className="fixed inset-0 flex items-start justify-center pointer-events-none z-0 pt-8">
        <div className="text-[1000px] text-black/10 dark:text-white/10 blur-[400px] select-none" style={{ display: 'inline-block', transform: 'rotate(45deg)' }}>
          ∞
        </div>
      </div>
      <div className="max-w-2xl w-full px-6 mx-auto">
        {/* Theme Toggle */}
        <div className="fixed top-6 left-0 right-0 flex justify-between items-center px-4 sm:px-8 z-50">
          <span className="flex items-center text-lg sm:text-2xl text-black dark:text-white transition-all duration-300">
            <span className="mr-1 text-xl sm:text-2xl md:text-3xl font-light transform inline-block text-black dark:text-white" style={{ display: 'inline-block', transform: 'rotate(45deg)' }}>∞</span>
            <span
              className="text-base sm:text-lg md:text-xl font-normal text-black dark:text-white transition-all duration-300"
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
        <section id="vision" className="min-h-screen flex flex-col justify-center transition-all duration-300 ease-in-out p-4 mb-16">
          <div className="mb-16">
            <div className="text-base sm:text-lg font-light text-center mt-8 mb-10">
              <span className="text-black dark:text-white">A research-led design studio</span><span className="inline-block animate-blink align-middle text-gray-400 dark:text-gray-500" style={{fontSize: '0.7em'}}>&#9608;</span>
            </div>
            <p className="text-4xl sm:text-6xl font-thin text-black dark:text-white text-center">
              We're <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-gradient">refining</span> frontier AI into <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-gradient">usable</span> tools.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section id="solution" className="flex flex-col justify-center transition-all duration-300 ease-in-out p-4 mb-16">
          <h2 className="text-lg sm:text-xl md:text-2xl font-normal text-black dark:text-white mb-6">Our Work</h2>
          <p className="text-base sm:text-lg leading-relaxed text-black dark:text-white">
            There exists a <span className="text-black dark:text-white">disconnect between the multifaceted capabilities of contemporary AI/ML models and non-specialist or resource-limited teams' ability to engage with them.</span> Our work seeks to address this limitation by designing <span className="text-black dark:text-white">intuitive access to advanced configurations</span>.
            <br />
            <br />
            The future of AI tools will be defined by <span className="text-black dark:text-white">anticipatory interactions</span>, seamlessly molding models into <span className="text-black dark:text-white">reliable, collaborators</span> that <span className="text-black dark:text-white">enhance operational efficiency</span>, <span className="text-black dark:text-white">navigate complexity</span>, and <span className="text-black dark:text-white">uncover solutions</span>.
          </p>
        </section>

        <section id="about" className="flex flex-col justify-center transition-all duration-300 ease-in-out p-4 mb-16">
          <div className="space-y-4">
            <h2 className="text-lg sm:text-xl md:text-2xl font-normal text-black dark:text-white mb-6">
              <div className="flex items-center gap-2">
                <span className={altform.className}>Introducing</span>
                <Image
                  src={asixLogo}
                  alt="ASIX Logo"
                  width={32}
                  height={30}
                  className="w-8 h-8"
                />
                <span className="text-black dark:text-white">ASIX</span>
              </div>
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-black dark:text-white mb-8">
              We're combining <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-gradient">Agentic Systems</span>—autonomous multi-agent AI capable of completing layered tasks with minimal supervision—with <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-gradient">Intelligent Experiences</span>—adaptive, human-centered interfaces that personalize interactions in real time—to create <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-gradient">ASIX</span>: a system where intelligent agents operate in the background while users engage through seamless, configurable, and conversational interfaces. It enables advanced orchestration, performance display, and frictionless system control, freeing professionals to concentrate on higher-leverage and more intellectually stimulating work.
            </p>
            <div className="w-full max-w-xs space-y-0 mt-4">
              <button
                type="button"
                onClick={() => openOnly('corefunctions')}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openOnly('corefunctions'); } }}
                tabIndex={0}
                aria-expanded={coreFunctionsOpen}
                aria-controls="core-functions-panel"
                id="core-functions-header"
                className="w-full flex justify-between items-center px-0 py-2 bg-transparent text-gray-400 dark:text-gray-400 font-normal text-base sm:text-lg transition-colors focus:outline-none focus:ring-0 text-left hover:bg-transparent rounded-none"
                style={{ letterSpacing: '0.01em' }}
              >
                <span className="text-left flex-1">Core Functions</span>
                <span className="ml-2 text-base sm:text-lg flex-shrink-0 transition-transform duration-200">
                  {coreFunctionsOpen ? '−' : '+'}
                </span>
              </button>
              <div
                id="core-functions-panel"
                role="region"
                aria-labelledby="core-functions-header"
                className={`overflow-hidden transition-all duration-300 ease-in-out ${coreFunctionsOpen ? 'max-h-[800px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'}`}
                aria-hidden={!coreFunctionsOpen}
              >
                <ul className="bg-transparent text-black dark:text-white">
                  <li className="px-2 py-1">
                    <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">⟡</span> Autonomous Execution
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1 max-w-[280px]">Completes complex tasks with minimal supervision and adapts over time.</div>
                  </li>
                  <li className="px-2 py-1">
                    <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">⤷</span> Conversational Interface
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1 max-w-[280px]">Engages users through intuitive, natural language inputs.</div>
                  </li>
                  <li className="px-2 py-1">
                    <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">〜</span> Real-Time Adaptation
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1 max-w-[280px]">Adjusts to new inputs, contexts, and feedback instantly.</div>
                  </li>
                  <li className="px-2 py-1">
                    <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">⧖</span> Context & Reasoning
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1 max-w-[280px]">Understands environment, sets goals, and makes intelligent decisions.</div>
                  </li>
                  <li className="px-2 py-1">
                    <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">❉</span> Orchestration & Control
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1 max-w-[280px]">Coordinates tools and agents while simplifying management.</div>
                  </li>
                  <li className="px-2 py-1">
                    <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">⧆</span> Personalization & Insights
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1 max-w-[280px]">Tailors responses and displays performance with clarity.</div>
                  </li>
                </ul>
              </div>
              <hr className="border-t border-gray-400 dark:border-gray-700 h-px" />
            </div>
          </div>
        </section>

        <section id="solutions" className="flex flex-col justify-center transition-all duration-300 ease-in-out p-4 mb-16">
          <div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-normal text-black dark:text-white mb-6">Our Solutions</h2>
            <p className="text-base sm:text-lg leading-relaxed text-black dark:text-white mb-8">
              We partner with select clients, crafting <span className="text-black dark:text-white">bespoke <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-gradient">ASIX</span> tools</span> that deliver <span className="text-black dark:text-white">real strategic value</span>. In parallel, we're pioneering ready-to-deploy frameworks tailored to sector-specific use.
            </p>
            <div className="w-full max-w-xs space-y-0">
              {/* Tools Accordion */}
              <button
                type="button"
                onClick={() => openOnly('tools')}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openOnly('tools'); } }}
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
                {/* Tools content */}
                <div className="flex flex-col items-start my-6 ml-2">
                  <div className="max-w-[280px]">
                    <div className="text-base text-black dark:text-white">
                      <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">⧇</span> AI-Collaborators
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Supports teams by automating tasks and evolving with operational needs.</div>
                  </div>
                </div>
                <div className="flex flex-col items-start my-6 ml-2">
                  <div className="max-w-[280px]">
                    <div className="text-base text-black dark:text-white">
                      <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">⧈</span> Turnkey Dashboard
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">No-code interface for managing AI-Coworkers, refining prompts, and monitoring performance.</div>
                  </div>
                </div>
              </div>
              <hr className="border-t border-gray-400 dark:border-gray-700 h-px" />

              {/* Frameworks Accordion */}
              <button
                type="button"
                onClick={() => openOnly('frameworks')}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openOnly('frameworks'); } }}
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
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1 max-w-[280px]">Sector-specific, plug-and-play ASIX framework built for small retail teams.</div>
                  </div>
                </div>
              </div>
              <hr className="border-t border-gray-400 dark:border-gray-700 h-px" />

              {/* Capabilities Accordion */}
              <button
                type="button"
                onClick={() => openOnly('capabilities')}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openOnly('capabilities'); } }}
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
                    <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">●</span> Automate
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1 max-w-[280px]">Trigger actions based on patterns.</div>
                  </li>
                  <li className="px-2 py-1">
                    <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">𖡎</span> Remember
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1 max-w-[280px]">Retain and apply context across tasks.</div>
                  </li>
                  <li className="px-2 py-1">
                    <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">⊹</span> Focus
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1 max-w-[280px]">Highlight key tasks or data.</div>
                  </li>
                  <li className="px-2 py-1">
                    <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">⊠</span> Repair
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1 max-w-[280px]">Detect and fix problems autonomously.</div>
                  </li>
                  <li className="px-2 py-1">
                    <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">↔</span> Move
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1 max-w-[280px]">Integrate seamlessly across tools.</div>
                  </li>
                </ul>
              </div>
              <hr className="border-t border-gray-400 dark:border-gray-700 h-px" />

              {/* Use Cases Accordion */}
              <button
                type="button"
                onClick={() => openOnly('usecases')}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openOnly('usecases'); } }}
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
                    <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">⧉</span> R&D Ops
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Extract insights and surface patterns.</div>
                  </li>
                  <li className="px-2 py-1">
                    <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">?</span> Support
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Answer questions and guide decisions.</div>
                  </li>
                  <li className="px-2 py-1">
                    <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">⛭</span> Maintenance
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Proactively monitor and fix issues.</div>
                  </li>
                  <li className="px-2 py-1">
                    <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">☰</span> Workflow Execution
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Run coordinated, multi-step processes.</div>
                  </li>
                  <li className="px-2 py-1">
                    <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">§</span> Compliance
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Ensure outputs meet standards.</div>
                  </li>
                </ul>
              </div>
              <hr className="border-t border-gray-400 dark:border-gray-700 h-px" />
            </div>
          </div>
        </section>

        <section id="contact" className="flex flex-col justify-center transition-all duration-300 ease-in-out p-4 mb-16">
          <div className="space-y-4">
            <h2 className="text-lg sm:text-xl md:text-2xl font-normal text-black dark:text-white mb-6">Let's Talk</h2>
            <p className="text-base sm:text-lg leading-relaxed text-black dark:text-white">
              If you'd like to become an <span className="text-black dark:text-white">early adopter</span>, please fill out this <a href="https://tally.so/r/mRla1p" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors">form</a>. To learn more about our work, feel free to <a href="mailto:hello@loopscale.com" className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors underline">reach out</a>.
            </p>
          </div>
        </section>
        <div className="h-64"></div>
      </div>
      {atBottom && (
        <div className="fixed bottom-4 right-8 z-50 text-xs sm:text-sm text-black dark:text-white">
          © 2025 Loopscale AI · <a href="mailto:hello@loopscale.ai" className="underline hover:text-blue-600 dark:hover:text-blue-400">hello@loopscale.ai</a> · Montreal
        </div>
      )}
    </main>
  );
} 