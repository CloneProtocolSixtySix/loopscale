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
    <main className="min-h-screen text-white" style={{backgroundColor: '#2E588A'}}>
      <div className="max-w-2xl w-full px-6 py-20 mx-auto space-y-6">
        <div className="flex items-center space-x-2">
          <img src="/prehension.svg" alt="Integrality" className="w-4 brightness-0 invert" />
          <span className="text-sm text-white font-normal"></span>
        </div> 
        <h1 className="text-sm font-normal">
          <button onClick={() => handleToggleContent('home')} className="mr-2">
          </button>
        </h1>
        <div className="flex items-center space-x-2 text-sm mono">
          <button onClick={() => handleToggleContent('home')} className={activeSection === 'home' ? 'text-white' : 'text-gray-400'}>
            <span className="text-sm mono font-normal">Motionstate</span> <br />
          </button>
          <span></span>
          <button onClick={() => handleToggleContent('about')} className={activeSection === 'about' ? 'text-white' : 'text-gray-400'}>
            About
          </button>
          <span></span>
          <button onClick={() => handleToggleContent('solutions')} className={activeSection === 'solutions' ? 'text-white' : 'text-gray-400'}>
            Solutions
          </button>
          <span></span>
          <a href="https://medium.com/@motionstate" className="text-sm mono text-gray-400 hover:text-white">
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
    Motionstate is a coined term meaning a condition defined by the process of movement.
    </p>
    <p className="text-sm mono">
    We've noticed that institutional investors place capital in environments riddled with half-baked deliverables and fanciful valuations.
    </p>
    <p className="text-sm mono">
    We believe this systematic behaviour poses a significant problem for our economy's ability to foster sovereign technology.
    </p> 
    <p className="text-sm mono">
    We are insatiably skeptical and obsessed with uncovering truth in possibility.
    </p>
    <p className="text-sm mono">
    We develop and apply machine learning capable of holistic perception, identifying hidden patterns that map the trajectory of human ingenuity.
    </p>
    <p className="text-sm mono">
      Yannick Bruderlein, Founder
    </p>
  </>
) : activeSection === 'solutions' ? (
  <>
    <p className="text-sm font-normal mono">
      Introducing Field Analyst<br/>
    </p>
    <p className="text-sm mono">
    A bespoke set of language models capable of multidisciplinary reasoning and action.
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
        <div className="border-l border-r border-b border-white border-dashed" style={{backgroundColor: '#2E588A'}}>
          <div className="p-2 text-sm mono border-b border-white border-dashed">
            <div className="font-normal">Match research projects with sector-specific commercialization and investment opportunities.</div>
          </div>
          <div className="p-2 text-sm mono border-b border-white border-dashed">
            <div className="font-normal">Mitigate industry uncertainty through academic integrity.</div>
          </div>
          <div className="p-2 text-sm mono">
            <div className="font-normal">Generate novel strategies grounded in contextual understanding.</div>
          </div>
        </div>
        
      )}
      <div className="mt-3">
        <a href="#" className="text-sm mono">Work with Field Analyst↗ (coming soon)</a>
      </div>
    </div>
  </>
) : (
  <>
    <h2 className="text-sm font-normal mono">A knowledge partner</h2>
    <p className="text-sm mono">
         Building ML to solve complex problems at the intersection of data, design, and decision.
    </p>
  </>
)}
        <hr className="my-4 border-t border-white border-dashed" />
        <div className="flex items-center space-x-2 text-sm mono">
          <span>© 2025 Motionstate</span>
          <span></span>
          <a href="mailto:hello@motionstate.xyz" className="text-gray-400 hover:text-white">hello@motionstate.xyz↗</a>
        </div>
      </div>
    </main>
  );
}