'use client';

import { useState, useRef, useLayoutEffect } from 'react';
import CapabilitiesToggle from './components/DottedEffect';
import TypingEffect from './components/TypingEffect';
import AnimatedDots from './components/AnimatedDots';
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
    <main className="min-h-screen text-black" style={{backgroundColor: '#F3F3F5'}}>
      <div className="max-w-2xl w-full px-6 py-20 mx-auto space-y-6">
        <div className="flex items-center space-x-2">
          <span className="text-base text-black font-normal flex items-center space-x-1">
            <img src="/integralmachines.svg" alt="Integral Machines" className="w-6 h-6" />
          </span>
        </div> 
        <h1 className="text-base font-normal">
          <button onClick={() => handleToggleContent('home')} className="mr-2">
          </button>
        </h1>
        <div className="flex items-center space-x-2 text-base mono">
          <button onClick={() => handleToggleContent('home')} className={activeSection === 'home' ? 'text-black' : 'text-gray-600'}>
            <span className="text-base mono font-normal">Integrality</span> <br />
          </button>
          <span></span>
          <button onClick={() => handleToggleContent('about')} className={activeSection === 'about' ? 'text-black' : 'text-gray-600'}>
            About
          </button>
          <span></span>
          <button onClick={() => handleToggleContent('solutions')} className={activeSection === 'solutions' ? 'text-black' : 'text-gray-600'}>
            Tools
          </button>
          <span></span>
          <a href="https://medium.com/@Motionstate" className="text-base mono text-gray-600 hover:text-black">
            Research↗
          </a>
          <span></span>
          <a href="mailto:hello@motionstate.xyz" className="text-base mono text-gray-600 hover:text-black">
            Inquiries↗
          </a>
        </div>
        <hr className="my-4 border-t-1.5 border-black border-dashed" />
        {activeSection === 'about' ? (
  <>
    <h2 className="text-base font-normal mono">
      Founder's Note
    </h2>
    <p className="text-base mono">
    Integrality (abstract noun) refers to a state of wholeness in which all parts are interdependent and operate together as a unified system. We view our work in the same way — understanding both the intricacies and the totality of information systems.
    </p>
    <p className="text-base mono">
    We’ve noticed that private equity and venture capital often place investments in complex environments that rely on novelty and promise alone.
    </p>
    <p className="text-base mono">
    We believe this systematic behavior poses a significant problem for our economy’s ability to foster sovereign technology.
    </p> 
    <p className="text-base mono">
    We are insatiably skeptical and obsessed with uncovering truth in possibilities.
    </p>
    <p className="text-base mono">
    We’re developing ML capable of holistic perception — bypassing noise, identifying hidden patterns, and mapping the trajectory of human ingenuity.
    </p>
    <p className="text-base mono">
      Yannick Bruderlein, Founder
    </p>
  </>
) : activeSection === 'solutions' ? (
  <>
    <h2 className="text-base font-normal mono">
      Introducing Remark (pre-alpha)
    </h2>
    <p className="text-base mono">
    A bespoke set of language models capable of multidisciplinary precision.
    </p>
    <div className="mt-4">
      <button 
        onClick={() => setIsAccordionOpen(!isAccordionOpen)}
        className="flex items-center justify-between w-full text-base mono text-left p-2 border-2 border-black border-dashed transition-colors text-black"
      >
        <span>Capabilities</span>
        <span className={`transform transition-transform ${isAccordionOpen ? 'rotate-180' : ''}`}>
        ↑
        </span>
      </button>
      {isAccordionOpen && (
        <div className="border-l-2 border-r-2 border-b-2 border-black border-dashed" style={{backgroundColor: '#F3F3F5'}}>
          <div className="p-2 text-base mono border-b-2 border-black border-dashed">
            <div className="font-normal">Match research projects with sector-specific commercialization and investment opportunities.</div>
          </div>
          <div className="p-2 text-base mono border-b-2 border-black border-dashed">
            <div className="font-normal">Mitigate industry uncertainty through academic integrity.</div>
          </div>
          <div className="p-2 text-base mono">
            <div className="font-normal">Generate novel strategies grounded in contextual understanding.</div>
          </div>
        </div>
        
      )}
      <div className="mt-3">
        <a href="#" className="text-base mono"></a>
      </div>
    </div>
  </>
) : (
  <>
    <p className="text-base mono">
         Solving for complexity at the intersection of data, design, and decisions.
    </p>
  </>
)}
        <hr className="my-4 border-t-1.5 border-black border-dashed" />
        <div className="flex items-center space-x-2 text-base mono">
          <span className="flex items-center space-x-1">
            <span>© 2025 Integrality AI

            </span>
          </span>
        </div>
        <div className="mt-8">
          <AnimatedDots />
        </div>
      </div>
    </main>
  );
}