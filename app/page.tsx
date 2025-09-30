'use client';

import { useState, useRef, useLayoutEffect } from 'react';
import CapabilitiesToggle from './components/DottedEffect';
import TypingEffect from './components/TypingEffect';
import Link from 'next/link';

export default function Home() {
  const options = ['Overview', 'Agent', 'Workflow', 'Observability'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const [activeSection, setActiveSection] = useState('home');
  const [restartTyping, setRestartTyping] = useState(0);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [selectedAccordionItem, setSelectedAccordionItem] = useState(null);

  const handleToggleContent = (section: string) => {
    setActiveSection(section);
  };

  const handleRestartTyping = () => {
    setRestartTyping(prev => prev + 1);
  };


  useLayoutEffect(() => {
    const currentTab = tabRefs.current[currentIndex];
    if (currentTab) {
      setIndicatorStyle({
        left: currentTab.offsetLeft,
        width: currentTab.offsetWidth,
      });
    }
  }, [currentIndex]);

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-2xl w-full px-6 py-20 mx-auto space-y-6">
        <div className="w-10 h-10 flex items-center justify-start">
          <span className="text-4xl text-white">▪</span>
        </div> 
        <h1 className="text-xl font-normal">
          <button onClick={() => handleToggleContent('home')} className="mr-2">
          </button>
        </h1>
        <div className="flex items-center space-x-2 text-sm mono">
          <button onClick={() => handleToggleContent('home')} className={activeSection === 'home' ? 'text-white' : 'text-gray-400'}>
            <span className="text-sm mono font-normal">Arkenstone</span> <br />
          </button>
          <span></span>
          <button onClick={() => handleToggleContent('about')} className={activeSection === 'about' ? 'text-white' : 'text-gray-400'}>
            About
          </button>
          <span></span>
          <button onClick={() => handleToggleContent('tools')} className={activeSection === 'tools' ? 'text-white' : 'text-gray-400'}>
            Tools
          </button>
          <span></span>
          <a href="https://medium.com/@arkenstone" className="text-sm mono text-gray-400 hover:text-white">
            Research↗
          </a>
        </div>
        <hr className="my-4 border-t border-white border-dashed" />
        {activeSection === 'about' ? (
  <>

<p className="text-sm font-normal mono">
      Manifesto<br/>
    </p>
    <p className="text-sm mono">
      The truth is: while things ebb and flow, change itself is perpetual.
    </p>
    <p className="text-sm mono">
      Arkenstone explores and measures change as a whole, identifying hidden patterns that define the trajectory of human ingenuity.
    </p>
    <p className="text-sm mono">
      Though in its early stages, arkenstone aims to one day build tools capable of seeing once-invisible change.
    </p>
    <p className="text-sm mono">
      Yannick Bruderlein, Project Founder
    </p>
  </>
) : activeSection === 'tools' ? (
  <>
    <p className="text-sm font-normal mono">
      Introducing Arkenstone 1<br/>
    </p>
    <p className="text-sm mono">
    A1 consists of a bespoke set of language models capable of multidisciplinary reasoning and action.
    </p>
    <div className="mt-4">
      <button 
        onClick={() => setIsAccordionOpen(!isAccordionOpen)}
        className="flex items-center justify-between w-full text-sm mono text-left p-2 border border-white border-dashed transition-colors text-white"
      >
        <span>Capabilities</span>
        <span className={`transform transition-transform ${isAccordionOpen ? 'rotate-180' : ''}`}>
        ↑
        </span>
      </button>
      {isAccordionOpen && (
        <div className="border-l border-r border-b border-white border-dashed bg-black">
          <div className="p-2 text-sm mono border-b border-gray-600 border-dashed">
            <div className="font-normal">Agent | Create agents that can reason, make decisions, and act based on contextual understanding in evolving environments.</div>
          </div>
          {/* <div className="p-2 text-sm mono border-b border-gray-200 cursor-pointer">Workflow</div>
          <div className="p-2 text-sm mono border-b border-gray-200 cursor-pointer">Observability</div>
          <div className="p-2 text-sm mono border-b border-gray-200 cursor-pointer">Orchestration</div> */}
          <div className="p-2 text-sm mono border-b border-gray-200 border-dashed cursor-pointer">Peer | Match research projects to sector-specific commercialization and investment opportunities and mitigate industry uncertainty with academic integrity.

</div>

        </div>
        
      )}
      <div className="mt-3">
        <a href="#" className="text-sm mono">Work with A1↗ (coming soon)</a>
      </div>
    </div>
  </>
) : (
  <>
    <h2 className="text-sm font-normal mono">A knowledge partner</h2>
    <p className="text-sm mono">
         Building tools that solve complex problems at the intersection of data, design, and decision.
    </p>
  </>
)}
        <hr className="my-4 border-t border-white border-dashed" />
        <div className="flex items-center space-x-2 text-xs mono">
          <span>© 2025 Arkenstone</span>
          <span></span>
          <a href="mailto:hello@arkenstone.xyz" className="text-gray-400 hover:text-white">hello@arkenstone.xyz↗</a>
        </div>
      </div>
    </main>
  );
}