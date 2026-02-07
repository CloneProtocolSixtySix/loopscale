"use client";

import React, { useEffect, useRef, useState } from "react";

export default function Home() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hour = String(now.getHours()).padStart(2, '0');
      const minute = String(now.getMinutes()).padStart(2, '0');
      const second = String(now.getSeconds()).padStart(2, '0');
      setCurrentTime(`${hour}:${minute}:${second}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <main className="h-[180vh] md:h-[200vh] max-h-[180vh] md:max-h-[200vh] flex flex-col items-start justify-start overflow-x-hidden relative" style={{ backgroundColor: '#D9D9D9' }}>
      {/* First section - hero */}
      <section className="h-[90vh] md:h-screen w-full relative py-12 md:py-24">
      {/* Subcurrent mono - upper left */}
      <p className="absolute top-4 left-4 md:top-4 md:left-8 text-black z-10 text-sm md:text-sm opacity-0" style={{ 
        fontFamily: '"IBM Plex Mono", monospace',
        animation: 'fadeIn 1.5s ease-out forwards',
        animationDelay: '7s'
      }}>
        Subcurrent
      </p>
      {/* Local time - upper right */}
      <p className="absolute top-4 right-4 md:top-4 md:right-8 text-black z-10 text-sm md:text-sm opacity-0" style={{ 
        fontFamily: '"IBM Plex Mono", monospace',
        animation: 'fadeIn 1.5s ease-out forwards',
        animationDelay: '7s'
      }}>
        {currentTime}
      </p>
      {/* Main text appears after animation */}
      <p className="absolute top-12 left-4 md:top-16 md:left-8 text-black z-10 text-2xl md:text-3xl opacity-0 max-w-[300px] md:max-w-[600px]" style={{ 
        fontFamily: '"Old Standard TT", serif', 
        fontWeight: 400,
        animation: 'fadeIn 1.5s ease-out forwards',
        animationDelay: '7s'
      }}>
       At <span className="animated-underline">Subcurrent</span>, we develop and apply <em>predictive intelligence</em> native to  <em> latent intentionality.</em> 
      </p>
      {/* SM1 - right under main text */}
      <p className="absolute top-44 left-4 md:top-48 md:left-8 text-black z-10 text-sm md:text-sm opacity-0" style={{ 
        fontFamily: '"IBM Plex Mono", monospace',
        animation: 'fadeIn 1.5s ease-out forwards',
        animationDelay: '7s'
      }}>
        	SM1 — Our Flagship Model <span className="text-gray-500">(coming soon)</span>
      </p>
      
      {/* Bottom left - copyright */}
      <p className="fixed bottom-4 left-4 md:bottom-8 md:left-8 text-black z-10 text-sm md:text-sm opacity-0" style={{ 
        fontFamily: '"IBM Plex Mono", monospace',
        animation: 'fadeIn 1.5s ease-out forwards',
        animationDelay: '7s'
      }}>
        © 2025 Subcurrent AI
      </p>
      
      {/* Bottom right - links */}
      <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 text-black z-10 text-sm md:text-sm flex gap-3 md:gap-6 opacity-0" style={{ 
        fontFamily: '"IBM Plex Mono", monospace',
        animation: 'fadeIn 1.5s ease-out forwards',
        animationDelay: '7s'
      }}>
        <a href="mailto:hello@subcurrent.ai" className="hover:underline">Inquiries</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes drawUnderline {
          0% { width: 0; }
          100% { width: 100%; }
        }
        .animated-underline {
          position: relative;
          display: inline-block;
        }
        .animated-underline::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 2px;
          height: 1px;
          background-color: black;
          width: 0;
          animation: drawUnderline 1s ease-out forwards;
          animation-delay: 8s;
        }
      `}</style>
      
      {/* Animated wavy line - diagonal from top-left to bottom-right */}
      <svg
        className="absolute top-0 left-0 pointer-events-none"
        width="100%"
        height="100%"
        style={{ minHeight: '100vh', minWidth: '100vw' }}
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <style>
          {`
            @keyframes draw {
              0% { stroke-dashoffset: 1500; }
              100% { stroke-dashoffset: 0; }
            }
            .line {
              stroke-dasharray: 1500;
              stroke-dashoffset: 1500;
              animation: draw 6s ease-out forwards;
            }
          `}
        </style>
        
        {/* Parallel wavy lines - lower on page */}
        {/* Top lines - tiny ripples (influenced by below) */}
        <path className="line" d="M-50 330 Q75 328 200 330 Q325 332 450 330 Q575 328 700 330 Q825 332 950 330 Q1075 328 1050 330" fill="none" stroke="black" strokeWidth="1.5" style={{ animationDelay: '1.65s' }} />
        <path className="line" d="M-50 375 Q75 372 200 375 Q325 378 450 375 Q575 372 700 375 Q825 378 950 375 Q1075 372 1050 375" fill="none" stroke="black" strokeWidth="1.5" style={{ animationDelay: '1.5s' }} />
        <path className="line" d="M-50 420 Q75 415 200 420 Q325 425 450 420 Q575 415 700 420 Q825 425 950 420 Q1075 415 1050 420" fill="none" stroke="black" strokeWidth="1.5" style={{ animationDelay: '1.35s' }} />
        {/* Middle-upper lines - small waves */}
        <path className="line" d="M-50 465 Q75 457 200 465 Q325 473 450 465 Q575 457 700 465 Q825 473 950 465 Q1075 457 1050 465" fill="none" stroke="black" strokeWidth="1.5" style={{ animationDelay: '1.2s' }} />
        <path className="line" d="M-50 510 Q75 498 200 510 Q325 522 450 510 Q575 498 700 510 Q825 522 950 510 Q1075 498 1050 510" fill="none" stroke="black" strokeWidth="1.5" style={{ animationDelay: '1.05s' }} />
        {/* Middle lines - medium waves */}
        <path className="line" d="M-50 555 Q75 538 200 555 Q325 572 450 555 Q575 538 700 555 Q825 572 950 555 Q1075 538 1050 555" fill="none" stroke="black" strokeWidth="1.5" style={{ animationDelay: '0.9s' }} />
        <path className="line" d="M-50 600 Q75 578 200 600 Q325 622 450 600 Q575 578 700 600 Q825 622 950 600 Q1075 578 1050 600" fill="none" stroke="black" strokeWidth="1.5" style={{ animationDelay: '0.75s' }} />
        {/* Lower-middle lines - larger waves */}
        <path className="line" d="M-50 645 Q75 615 200 645 Q325 675 450 645 Q575 615 700 645 Q825 675 950 645 Q1075 615 1050 645" fill="none" stroke="black" strokeWidth="1.5" style={{ animationDelay: '0.6s' }} />
        <path className="line" d="M-50 690 Q75 650 200 690 Q325 730 450 690 Q575 650 700 690 Q825 730 950 690 Q1075 650 1050 690" fill="none" stroke="black" strokeWidth="1.5" style={{ animationDelay: '0.45s' }} />
        {/* Bottom lines - largest waves (the source) */}
        <path className="line" d="M-50 735 Q75 685 200 735 Q325 785 450 735 Q575 685 700 735 Q825 785 950 735 Q1075 685 1050 735" fill="none" stroke="black" strokeWidth="1.5" style={{ animationDelay: '0.3s' }} />
        <path className="line" d="M-50 780 Q75 720 200 780 Q325 840 450 780 Q575 720 700 780 Q825 840 950 780 Q1075 720 1050 780" fill="none" stroke="black" strokeWidth="1.5" style={{ animationDelay: '0.15s' }} />
        <path className="line" d="M-50 825 Q75 755 200 825 Q325 895 450 825 Q575 755 700 825 Q825 895 950 825 Q1075 755 1050 825" fill="none" stroke="black" strokeWidth="1.5" style={{ animationDelay: '0s' }} />
      </svg>
      </section>
      
      {/* Second section - scroll reveal */}
      <section ref={sectionRef} className="h-[90vh] md:h-screen w-full relative flex items-center justify-start px-4 md:px-8 overflow-hidden">
        <div className="text-left z-10" style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(-10px)',
          transition: 'opacity 1.5s ease-out, transform 1.5s ease-out'
        }}>
          <p className="text-black text-sm md:text-sm mb-4" style={{ 
            fontFamily: '"IBM Plex Mono", monospace'
          }}>
            Our Approach + Aim
          </p>
          <p className="text-black text-2xl md:text-3xl max-w-[320px] md:max-w-[600px]" style={{ 
            fontFamily: '"Old Standard TT", serif', 
            fontWeight: 400
          }}>
            Merging <em>computational anthropology</em> with <em>investment research</em> to help venture pioneers systematically mitigate uncertainty while fostering sovereign technologies.
          </p>
          <a href="https://medium.com" target="_blank" rel="noopener noreferrer" className="text-black text-sm md:text-sm mt-4 block hover:underline" style={{ 
            fontFamily: '"IBM Plex Mono", monospace'
          }}>
          Case Studies
          </a>
        </div>
        
        {/* Animated wavy lines - from right to bottom middle */}
        <svg
          className="absolute top-0 left-0 pointer-events-none hidden md:block"
          width="100%"
          height="100%"
          style={{ minHeight: '100vh', minWidth: '100vw' }}
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
        >
          <style>
            {`
              @keyframes drawVertical {
                0% { stroke-dashoffset: 1500; }
                100% { stroke-dashoffset: 0; }
              }
              .line-vertical {
                stroke-dasharray: 1500;
                stroke-dashoffset: 1500;
              }
              .line-vertical.animate {
                animation: drawVertical 6s ease-out forwards;
              }
            `}
          </style>
          
          {/* Horizontal wavy lines - from right end to bottom middle */}
          {/* Top lines - tiny ripples */}
          <path className={`line-vertical ${isVisible ? 'animate' : ''}`} d="M1200 330 Q1100 328 1000 330 Q900 332 800 330 Q700 328 600 330 Q500 332 600 1050" fill="none" stroke="black" strokeWidth="1.5" style={{ animationDelay: '1.65s' }} />
          <path className={`line-vertical ${isVisible ? 'animate' : ''}`} d="M1200 375 Q1100 372 1000 375 Q900 378 800 375 Q700 372 600 375 Q500 378 600 1050" fill="none" stroke="black" strokeWidth="1.5" style={{ animationDelay: '1.5s' }} />
          <path className={`line-vertical ${isVisible ? 'animate' : ''}`} d="M1200 420 Q1100 415 1000 420 Q900 425 800 420 Q700 415 600 420 Q500 425 600 1050" fill="none" stroke="black" strokeWidth="1.5" style={{ animationDelay: '1.35s' }} />
          {/* Middle-upper lines - small waves */}
          <path className={`line-vertical ${isVisible ? 'animate' : ''}`} d="M1200 465 Q1100 457 1000 465 Q900 473 800 465 Q700 457 600 465 Q500 473 600 1050" fill="none" stroke="black" strokeWidth="1.5" style={{ animationDelay: '1.2s' }} />
          <path className={`line-vertical ${isVisible ? 'animate' : ''}`} d="M1200 510 Q1100 498 1000 510 Q900 522 800 510 Q700 498 600 510 Q500 522 600 1050" fill="none" stroke="black" strokeWidth="1.5" style={{ animationDelay: '1.05s' }} />
          {/* Middle lines - medium waves */}
          <path className={`line-vertical ${isVisible ? 'animate' : ''}`} d="M1200 555 Q1100 538 1000 555 Q900 572 800 555 Q700 538 600 555 Q500 572 600 1050" fill="none" stroke="black" strokeWidth="1.5" style={{ animationDelay: '0.9s' }} />
          <path className={`line-vertical ${isVisible ? 'animate' : ''}`} d="M1200 600 Q1100 578 1000 600 Q900 622 800 600 Q700 578 600 600 Q500 622 600 1050" fill="none" stroke="black" strokeWidth="1.5" style={{ animationDelay: '0.75s' }} />
          {/* Lower-middle lines - larger waves */}
          <path className={`line-vertical ${isVisible ? 'animate' : ''}`} d="M1200 645 Q1100 615 1000 645 Q900 675 800 645 Q700 615 600 645 Q500 675 600 1050" fill="none" stroke="black" strokeWidth="1.5" style={{ animationDelay: '0.6s' }} />
          <path className={`line-vertical ${isVisible ? 'animate' : ''}`} d="M1200 690 Q1100 650 1000 690 Q900 730 800 690 Q700 650 600 690 Q500 730 600 1050" fill="none" stroke="black" strokeWidth="1.5" style={{ animationDelay: '0.45s' }} />
          {/* Bottom lines - largest waves */}
          <path className={`line-vertical ${isVisible ? 'animate' : ''}`} d="M1200 735 Q1100 685 1000 735 Q900 785 800 735 Q700 685 600 735 Q500 785 600 1050" fill="none" stroke="black" strokeWidth="1.5" style={{ animationDelay: '0.3s' }} />
          <path className={`line-vertical ${isVisible ? 'animate' : ''}`} d="M1200 780 Q1100 720 1000 780 Q900 840 800 780 Q700 720 600 780 Q500 840 600 1050" fill="none" stroke="black" strokeWidth="1.5" style={{ animationDelay: '0.15s' }} />
          <path className={`line-vertical ${isVisible ? 'animate' : ''}`} d="M1200 825 Q1100 755 1000 825 Q900 895 800 825 Q700 755 600 825 Q500 895 600 1050" fill="none" stroke="black" strokeWidth="1.5" style={{ animationDelay: '0s' }} />
        </svg>
      </section>
    </main>
  );
}
