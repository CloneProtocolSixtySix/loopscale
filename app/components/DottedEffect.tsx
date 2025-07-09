'use client';

import React, { useEffect, useRef } from 'react';

interface DottedEffectProps {
  isDarkMode?: boolean;
  className?: string;
}

export default function DottedEffect({ 
  isDarkMode = false, 
  className = '' 
}: DottedEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create circular dot pattern
    const createCircularDots = () => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const maxRadius = Math.min(canvas.width, canvas.height) * 0.35;
      
      const dots = [];
      
      // Create multiple rings of dots
      const rings = 5;
      const dotsPerRing = 12;
      
      for (let ring = 0; ring < rings; ring++) {
        const radius = (maxRadius / rings) * (ring + 1);
        const dotsInThisRing = dotsPerRing + (ring * 2); // More dots in outer rings
        
        for (let i = 0; i < dotsInThisRing; i++) {
          const angle = (i / dotsInThisRing) * Math.PI * 2;
          const x = centerX + Math.cos(angle) * radius;
          const y = centerY + Math.sin(angle) * radius;
          
          dots.push({
            x,
            y,
            ox: x, // original x
            oy: y, // original y
          });
        }
      }
      
      // Add some random dots in the center
      for (let i = 0; i < 8; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * maxRadius * 0.3;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        
        dots.push({
          x,
          y,
          ox: x,
          oy: y,
        });
      }
      
      return dots;
    };

    // Create points array with circular pattern
    let points = createCircularDots();

    // Update points on resize
    const updatePoints = () => {
      points = createCircularDots();
    };

    window.addEventListener('resize', updatePoints);

    // Mouse tracking
    let mouseX = 0;
    let mouseY = 0;
    const strength = 500; // higher is stronger

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw dots with repulsion effect
      points.forEach(point => {
        // Repulsion calculation (exact same as CodePen)
        const dx = point.x - mouseX;
        const dy = point.y - mouseY;
        const angle = Math.atan2(dy, dx);
        const dist = strength / Math.sqrt(dx * dx + dy * dy);
        
        point.x += Math.cos(angle) * dist;
        point.y += Math.sin(angle) * dist;
        
        // Return to original position
        point.x += (point.ox - point.x) * 0.1;
        point.y += (point.oy - point.y) * 0.1;

        // Draw the circle
        ctx.beginPath();
        ctx.arc(point.x, point.y, 5 * Math.min(canvas.width, canvas.height) * 0.02, 0, Math.PI * 2);
        ctx.fillStyle = isDarkMode ? '#ffffff' : '#000000';
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDarkMode]);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full ${className}`}
      style={{ display: 'block' }}
    />
  );
} 