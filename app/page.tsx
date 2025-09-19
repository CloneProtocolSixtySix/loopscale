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
    <main className="min-h-screen" style={{ backgroundColor: '#F5F4EE' }}>
      <div className="max-w-2xl w-full px-6 py-16 mx-auto space-y-6">
        <div className="flex items-center space-x-2">
   <img src="/integrality.svg" alt="Lightship Logo" className="w-32 h-8" />
        </div> 
        <h1 className="text-xl font-normal">
          <button onClick={() => handleToggleContent('home')} className="mr-2">
          </button>
        </h1>
        <div className="flex items-center space-x-2 text-sm mono">
          <button onClick={() => handleToggleContent('home')} className={activeSection === 'home' ? 'text-black' : 'text-gray-500'}>
            <span className="text-sm mono font-normal">Home</span> <br />
          </button>
          <span></span>
          <button onClick={() => handleToggleContent('about')} className={activeSection === 'about' ? 'text-black' : 'text-gray-500'}>
            About
          </button>
          <span></span>
          <button onClick={() => handleToggleContent('tools')} className={activeSection === 'tools' ? 'text-black' : 'text-gray-500'}>
            Tools
          </button>
          <span></span>
          <a href="https://medium.com/@lightship" className="text-sm mono text-gray-500 hover:text-black">
            Research↗
          </a>
        </div>
        <hr className="my-4 border-t border-black border-dashed" />
        {activeSection === 'about' ? (
  <>

<p className="text-sm font-normal mono">
      Menifesto<br/>
    </p>
    <p className="text-sm mono">
      The truth is: while things ebb and flow, change itself is perpetual.
    </p>
    <p className="text-sm mono">
      Integrality is building ML that explores and measures change as a whole, identifying hidden patterns that define the trajectory of human ingenuity.
    </p>
    <p className="text-sm mono">
      Though early, our tools aim to help venture pioneers see once-invisible change, we have an opportunity to build a monumental company.
    </p>
    <p className="text-sm mono">
      Yannick Bruderlein, Founder
    </p>
  </>
) : activeSection === 'tools' ? (
  <>
    <p className="text-sm font-normal mono">
      Introducing Integral Operator 1<br/>
    </p>
    <p className="text-sm mono">
    IO-1 consists of a bespoke set of language models capable of multidisciplinary reasoning and action.
    </p>
    <div className="mt-4">
      <button 
        onClick={() => setIsAccordionOpen(!isAccordionOpen)}
        className="flex items-center justify-between w-full text-sm mono text-left p-2 border border-black border-dashed transition-colors"
      >
        <span>Capabilities</span>
        <span className={`transform transition-transform ${isAccordionOpen ? 'rotate-180' : ''}`}>
        ↑
        </span>
      </button>
      {isAccordionOpen && (
        <div className="border-l border-r border-b border-black border-dashed" style={{ backgroundColor: '#F5F4EE' }}>
          <div className="p-2 text-sm mono border-b border-gray-200 border-dashed">
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
        <a href="#" className="text-sm mono">Work with IO-1↗ (coming soon)</a>
      </div>
    </div>
  </>
) : (
  <>
    <h2 className="text-sm font-normal mono">A knowledge partner</h2>
    <p className="text-sm mono">
         We build tools that solve complex problems at the intersection of data, design and decision.
    </p>
  </>
)}
        <hr className="my-4 border-t border-black border-dashed" />
        <div className="flex items-center space-x-2 text-xs mono">
          <span>© 2025 Integrality AI</span>
          <span></span>
          <a href="mailto:hello@integrality.ai" className="text-gray-500 hover:text-black">hello@integrality.ai↗</a>
        </div>
      </div>
    </main>
  );
}