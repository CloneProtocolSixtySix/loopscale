'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
    <main ref={mainRef} className="overflow-y-scroll scroll-smooth bg-white transition-colors duration-300 pb-32">
      <div className="max-w-2xl w-full px-6 mx-auto">
        {/* Theme Toggle */}
        <div className="fixed top-6 left-0 right-0 flex justify-between items-center px-4 sm:px-8 z-50">
          <span className="flex items-center text-lg sm:text-2xl text-black transition-all duration-300">
          </span>
        </div>

        {/* Hero Section */}
        <section id="vision" className="flex flex-col transition-all duration-300 ease-in-out p-4 pt-0 md:pt-4 mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-0 md:gap-8 md:gap-0">
            <div className="flex-1">
              <div className="text-base text-left mt-48 md:mt-48 mb-2 md:mb-10">
                <div className="mb-6 flex items-center gap-2 justify-start">
                  <div>
                    <span className="inline-block transform rotate-0 text-2xl text-black font-semibold">◾ reasonlab</span>
                  </div>
                </div>
                <h2 className="text-1xl text-black font-semibold mb-2">
                  Reasonlab is developing a new generation of consistent and controllable AI.
                </h2>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section id="solution" className="flex flex-col justify-center transition-all duration-300 ease-in-out p-4 mb-16">
          <h2 className="text-base text-black mb-6">Our Work</h2>
          <p className="text-base leading-relaxed text-black">
            There is a gap between the capabilities of general-purpose AI models and the ability of non-specialist teams to apply them. We address this by designing intuitive access to advanced configurations. We believe the future of AI tools lies in anticipatory interactions—molding models into reliable collaborators that enhance efficiency, navigate complexity, and uncover solutions. We call this: Usable Intelligence (UI).
          </p>
        </section>

        <section id="about" className="flex flex-col justify-center transition-all duration-300 ease-in-out p-4 mb-16">
          <div className="space-y-4">
            <h2 className="text-base text-black mb-6">
              <div className="flex items-center gap-2">
                <span className={altform.className + " text-black"}>
                  Introducing Reasonlab UI Gen-1
                </span>
                <span className="bg-black text-white text-xs font-semibold px-2 py-1 rounded-full">pre-alpha</span>
              </div>
            </h2>
            <p className="text-base leading-relaxed text-black mb-8">
              Our research focuses on combining Agentic Systems—autonomous AI that completes layered tasks—with Intelligent Experiences—adaptive interfaces that personalize interactions. Together they form UI Gen‑1: agents operate in the background while users engage through seamless, configurable interfaces. Freeing professionals to focus on higher-leverage work.
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
                className="w-full flex justify-between items-center px-0 py-2 bg-transparent text-gray-400 text-base transition-colors focus:outline-none focus:ring-0 text-left hover:bg-transparent rounded-none"
                style={{ letterSpacing: '0.01em' }}
              >
                <span className="text-left flex-1">Core Functions</span>
                <span className="ml-2 text-base flex-shrink-0 transition-transform duration-200">
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
                <ul className="bg-transparent text-black">
                  <li className="px-2 py-1">
                    <span className="text-black">⟡</span> Autonomous Execution
                    <div className="text-sm text-gray-500 mt-1 max-w-[280px]">Completes complex tasks with minimal supervision and adapts over time.</div>
                  </li>
                  <li className="px-2 py-1">
                    <span className="text-black">⤷</span> Conversational Interface
                    <div className="text-sm text-gray-500 mt-1 max-w-[280px]">Engages users through human-centred inputs.</div>
                  </li>
                  <li className="px-2 py-1">
                    <span className="text-black">〜</span> Real-Time Adaptation
                    <div className="text-sm text-gray-500 mt-1 max-w-[280px]">Adjusts to new inputs, contexts, and feedback instantly.</div>
                  </li>
                  <li className="px-2 py-1">
                    <span className="text-black">⧖</span> Context & Reasoning
                    <div className="text-sm text-gray-500 mt-1 max-w-[280px]">Understands environment, sets goals, and makes decisions.</div>
                  </li>
                  <li className="px-2 py-1">
                    <span className="text-black">❉</span> Orchestration & Control
                    <div className="text-sm text-gray-500 mt-1 max-w-[280px]">Coordinates tools and agents while simplifying management.</div>
                  </li>
                  <li className="px-2 py-1">
                    <span className="text-black">⧆</span> Personalization & Insights
                    <div className="text-sm text-gray-500 mt-1 max-w-[280px]">Tailors responses and displays performance with clarity.</div>
                  </li>
                </ul>
              </div>
              <hr className="border-t border-gray-400 h-px" />
            </div>
          </div>
        </section>

        <section id="solutions" className="flex flex-col justify-center transition-all duration-300 ease-in-out p-4 mb-16">
          <div>
            <h2 className="text-base text-black mb-6">Our Products</h2>
            <p className="text-base leading-relaxed text-black mb-8">
              We're developing ready-to-deploy UI-tools and frameworks tailored to sector-specific needs. Though still early-stage, we aim to create measurable impact across industries—and build a generational company.
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
                className="w-full flex justify-between items-center px-0 py-2 bg-transparent text-gray-400 text-base transition-colors focus:outline-none focus:ring-0 text-left hover:bg-transparent rounded-none"
                style={{ letterSpacing: '0.01em' }}
              >
                <span className="text-left flex-1">Tools</span>
                <span className="ml-2 text-base flex-shrink-0 transition-transform duration-200">
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
                    <div className="text-base text-black">
                      <span className="text-black">⧇</span> Agents
                    </div>
                    <div className="text-sm text-gray-600">Supports teams by automating tasks and evolving with operational needs.</div>
                  </div>
                </div>
                <div className="flex flex-col items-start my-6 ml-2">
                  <div className="max-w-[280px]">
                    <div className="text-base text-black">
                      <span className="text-black">⧈</span> Dashboard
                    </div>
                    <div className="text-sm text-gray-600">No-code interface for managing agents, refining prompts, and monitoring performance.</div>
                  </div>
                </div>
              </div>
              <hr className="border-t border-gray-400 h-px" />

              {/* Frameworks Accordion */}
              <button
                type="button"
                onClick={() => openOnly('frameworks')}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openOnly('frameworks'); } }}
                tabIndex={0}
                aria-expanded={frameworksOpen}
                aria-controls="frameworks-panel"
                id="frameworks-header"
                className="w-full flex justify-between items-center px-0 py-2 bg-transparent text-gray-400 text-base transition-colors focus:outline-none focus:ring-0 text-left hover:bg-transparent rounded-none"
                style={{ letterSpacing: '0.01em' }}
              >
                <span className="text-left flex-1">Frameworks</span>
                <span className="ml-2 text-base flex-shrink-0 transition-transform duration-200">
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
                      <span className="text-black inline-block transform rotate-90">▮</span>
                      <span className="text-base text-black ml-2">UI-Counter</span>
                    </div>
                    <div className="text-sm text-gray-500 mt-1 max-w-[280px]">Sector-specific, plug-and-play UI framework built for small retail teams.</div>
                  </div>
                </div>
              </div>
              <hr className="border-t border-gray-400 h-px" />

              {/* Capabilities Accordion */}
              <button
                type="button"
                onClick={() => openOnly('capabilities')}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openOnly('capabilities'); } }}
                tabIndex={0}
                aria-expanded={ixOpen}
                aria-controls="ix-capabilities-panel"
                id="ix-capabilities-header"
                className="w-full flex justify-between items-center px-0 py-2 bg-transparent text-gray-400 text-base transition-colors focus:outline-none focus:ring-0 text-left hover:bg-transparent rounded-none"
                style={{ letterSpacing: '0.01em' }}
              >
                <span className="text-left flex-1">Capabilities</span>
                <span className="ml-2 text-base flex-shrink-0 transition-transform duration-200">
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
                <ul className="bg-transparent text-black">
                  <li className="px-2 py-1">
                    <span className="text-black">●</span> Automate
                    <div className="text-sm text-gray-500 mt-1 max-w-[280px]">Trigger actions based on patterns.</div>
                  </li>
                  <li className="px-2 py-1">
                    <span className="text-black">𖡎</span> Remember
                    <div className="text-sm text-gray-500 mt-1 max-w-[280px]">Retain and apply context across tasks.</div>
                  </li>
                  <li className="px-2 py-1">
                    <span className="text-black">⊹</span> Focus
                    <div className="text-sm text-gray-500 mt-1 max-w-[280px]">Highlight key tasks or data.</div>
                  </li>
                  <li className="px-2 py-1">
                    <span className="text-black">⊠</span> Repair
                    <div className="text-sm text-gray-500 mt-1 max-w-[280px]">Detect and fix problems autonomously.</div>
                  </li>
                  <li className="px-2 py-1">
                    <span className="text-black">↔</span> Move
                    <div className="text-sm text-gray-500 mt-1 max-w-[280px]">Quickly apply across systems and infrastructure.</div>
                  </li>
                </ul>
              </div>
              <hr className="border-t border-gray-400 h-px" />

              {/* Use Cases Accordion */}
              <button
                type="button"
                onClick={() => openOnly('usecases')}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openOnly('usecases'); } }}
                tabIndex={0}
                aria-expanded={useCasesOpen}
                aria-controls="use-cases-panel"
                id="use-cases-header"
                className="w-full flex justify-between items-center px-0 py-2 bg-transparent text-gray-400 text-base transition-colors focus:outline-none focus:ring-0 text-left hover:bg-transparent rounded-none"
                style={{ letterSpacing: '0.01em' }}
              >
                <span className="text-left flex-1">Use Cases</span>
                <span className="ml-2 text-base flex-shrink-0 transition-transform duration-200">
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
                <ul className="bg-transparent text-black">
                  <li className="px-2 py-1">
                    <span className="text-black">⧉</span> R&D Ops
                    <div className="text-sm text-gray-500 mt-1">Extract insights and surface patterns.</div>
                  </li>
                  <li className="px-2 py-1">
                    <span className="text-black">?</span> Support
                    <div className="text-sm text-gray-500 mt-1">Answer questions and guide decisions.</div>
                  </li>
                  <li className="px-2 py-1">
                    <span className="text-black">⛭</span> Maintenance
                    <div className="text-sm text-gray-500 mt-1">Proactively monitor and fix issues.</div>
                  </li>
                  <li className="px-2 py-1">
                    <span className="text-black">☰</span> Workflow Execution
                    <div className="text-sm text-gray-500 mt-1">Run coordinated, multi-step processes.</div>
                  </li>
                  <li className="px-2 py-1">
                    <span className="text-black">§</span> Compliance
                    <div className="text-sm text-gray-500 mt-1">Ensure outputs meet standards.</div>
                  </li>
                </ul>
              </div>
              <hr className="border-t border-gray-400 h-px" />
            </div>
          </div>
        </section>

        <section id="approach" className="flex flex-col justify-center transition-all duration-300 ease-in-out p-4 mb-16">
          <h2 className="text-base text-black mb-6">Our Approach</h2>
          <p className="text-base leading-relaxed text-black">
            We're building AI alignment that preserves and amplifies human reasoning and work similar to the shift from pen and paper to laptops enhanced the way we solve problems.
          </p>
        </section>

        <section id="contact" className="flex flex-col justify-center transition-all duration-300 ease-in-out p-4 mb-16">
          <div className="space-y-4">
            <h2 className="text-base text-black mb-6">Let's Talk</h2>
            <p className="text-base leading-relaxed text-black mb-2">
              If you'd like to become an early adopter, please fill out this
              <a
                href="https://tally.so/r/mRla1p"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-600 transition-colors mx-1"
              >
                form
              </a>
              . To learn more about our work, feel free to
              <a
                href="mailto:hello@reasonlab.ai"
                className="underline hover:text-blue-600 transition-colors mx-1"
              >
                reach out
              </a>
              .
            </p>
            <div className="text-sm text-black mt-4">© 2025 Reasonlab · Montreal</div>
          </div>
        </section>
      </div>
    </main>
  );
} 