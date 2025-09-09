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
          <img src="/lightship.svg" alt="Lightship Logo" className="w-6 h-6" />
        </div>
        <h1 className="text-xl font-normal">
          <button onClick={() => handleToggleContent('home')} className="mr-2">
          </button>
        </h1>
        <div className="flex items-center space-x-4 text-sm mono">
          <button onClick={() => handleToggleContent('home')} className={activeSection === 'home' ? '' : 'underline'}>
            <span className="text-sm mono font-normal">Home</span>
          </button>
          <span>·</span>
          <button onClick={() => handleToggleContent('about')} className={activeSection === 'about' ? '' : 'underline'}>
            About
          </button>
          <span>·</span>
          <button onClick={() => handleToggleContent('tools')} className={activeSection === 'tools' ? '' : 'underline'}>
            Tools
          </button>
          <span>·</span>
          <a href="https://medium.com/@lightship" className="text-sm mono underline">
            Research↗
          </a>
        </div>
        <hr className="my-4 border-t-2 border-black border-dashed" />
        {activeSection === 'about' ? (
  <>
    <h2 className="text-lg font-normal serif">Founder's Note</h2>
    <p className="text-sm mono">Hello Reader,</p>
    <p className="text-sm mono">
      The truth is: while things ebb and flow, change itself is perpetual.
    </p>
    <p className="text-sm mono">
      Lightship explores and measures change, identifying hidden patterns that define the trajectory of human ingenuity.
    </p>
    <p className="text-sm mono">
      Though early, our tools aim to help the industry captains and venture pioneers perceive once-invisible change, we have an opportunity to build a monumental company.
    </p>
    <p className="text-sm mono">
      Yannick Bruderlein, Founder
    </p>
  </>
) : activeSection === 'tools' ? (
  <>
    <p className="text-lg font-normal serif">
      Introducing Deep Thought 1<br/>
    </p>
    <p className="text-sm mono">
    DT1 consists of a bespoke set of language models capable of multidisciplinary reasoning.
    </p>
    <div className="mt-4">
      <button 
        onClick={() => setIsAccordionOpen(!isAccordionOpen)}
        className="flex items-center justify-between w-full text-sm mono text-left p-2 border border-black transition-colors"
      >
        <span>Capabilities</span>
        <span className={`transform transition-transform ${isAccordionOpen ? 'rotate-180' : ''}`}>
        ↑
        </span>
      </button>
      {isAccordionOpen && (
        <div className="border-l border-r border-b border-black" style={{ backgroundColor: '#F5F4EE' }}>
          <div className="p-2 text-sm mono border-b border-gray-200">
            <div className="font-normal">Agent · Create agents that can reason, make decisions, and act based on contextual understanding in evolving environments.</div>
          </div>
          {/* <div className="p-2 text-sm mono border-b border-gray-200 cursor-pointer">Workflow</div>
          <div className="p-2 text-sm mono border-b border-gray-200 cursor-pointer">Observability</div>
          <div className="p-2 text-sm mono border-b border-gray-200 cursor-pointer">Orchestration</div> */}
          <div className="p-2 text-sm mono border-b border-gray-200 cursor-pointer">Peer · Match research projects to sector-specific commercialization and investment opportunities and mitigate industry uncertainty with academic integrity.

</div>

        </div>
        
      )}
      <div className="mt-3">
        <a href="#" className="text-sm mono underline">Work with DT1↗</a>
      </div>
    </div>
  </>
) : (
  <>
    <h2 className="text-lg font-normal serif">An intelligence partner</h2>
    <p className="text-sm mono">
         At Lightship, we develop and apply tools that navigate complexity at the intersection of data, design and decision.
    </p>
  </>
)}
        <hr className="my-4 border-t-2 border-black border-dashed" />
        <p className="text-sm mono">© 2025 Lightship · <a href="mailto:hello@lightship.xyz" className="underline">hello@lightship.xyz↗</a> · <a href="https://www.linkedin.com/company/lightship-studio" className="underline">@lightship↗</a></p>
      </div>
    </main>
  );
}