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

// ASCII morphing component
function AsciiMorph({ isDarkMode }: { isDarkMode: boolean }) {
  const [currentShape, setCurrentShape] = useState(0);
  const [morphProgress, setMorphProgress] = useState(0);

  // Define the different ASCII shapes
  const shapes = [
    // Shape 0 - New geometric pattern
    [
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠁⠀⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    ],
    // Shape 1 - Complex geometric pattern
    [
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⢸⡇⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⠀⢸⡇⠀⠘⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠁⠀⠀⢸⡇⠀⠀⠈⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣤⣀⠀⠀⢸⡇⠀⢀⣀⣤⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣼⣧⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    ],
    // Shape 2 - Organic flowing pattern
    [
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢹⡟⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠁⢸⡇⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⢸⡇⠀⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠀⠀⡠⠜⠢⢄⠀⠀⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣏⠴⠂⠁⠀⠀⠀⠀⠈⠐⠄⣹⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    ],
    // Shape 3 - Abstract geometric composition
    [
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⡌⠀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⠀⢰⠀⠀⠀⠀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣥⠄⣀⣀⣇⣀⣀⢀⣀⡠⠤⢬⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡀⠀⢃⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡌⠄⠀⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    ],
    // Shape 4 - Dynamic wave pattern
    [
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⢀⠇⠈⢎⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⠀⠀⠘⠀⠀⠀⠳⡀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣅⡀⠀⠀⠀⠇⠀⠀⠀⠀⠐⢄⢸⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⡒⢄⣰⢀⣀⣀⠤⢤⠤⣨⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡘⡄⠀⠀⣀⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    ],
    // Shape 5 - Complex geometric pattern
    [
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠛⠛⠛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢉⡀⠀⠀⣀⡠⢧⠈⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⠀⡏⠁⠀⠀⠀⠱⡀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⡸⠺⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⣀⠤⠓⠤⣀⠀⠀⠌⠀⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣄⠀⠀⠀⠀⠈⡏⣀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⣤⣤⣤⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    ]
  ];

  // Function to interpolate between two strings
  const interpolateString = (str1: string, str2: string, progress: number) => {
    if (progress <= 0) return str1;
    if (progress >= 1) return str2;
    
    const chars1 = str1.split('');
    const chars2 = str2.split('');
    const maxLength = Math.max(chars1.length, chars2.length);
    
    let result = '';
    for (let i = 0; i < maxLength; i++) {
      const char1 = chars1[i] || ' ';
      const char2 = chars2[i] || ' ';
      
      if (Math.random() < progress) {
        result += char2;
      } else {
        result += char1;
      }
    }
    
    return result;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setMorphProgress(prev => {
        if (prev >= 1) {
          setCurrentShape((currentShape + 1) % shapes.length);
          return 0;
        }
        return prev + 0.02; // Adjust speed here
      });
    }, 50); // Adjust timing here

    return () => clearInterval(interval);
  }, [currentShape, shapes.length]);

  const currentShapeData = shapes[currentShape];
  const nextShapeData = shapes[(currentShape + 1) % shapes.length];

  return (
    <div className={`text-lg leading-tight text-center mt-8 md:mt-16 ${isDarkMode ? 'text-white' : 'text-black'}`}>
      {currentShapeData.map((line, index) => {
        const nextLine = nextShapeData[index] || line;
        const morphedLine = interpolateString(line, nextLine, morphProgress);
        return <div key={index}>{morphedLine}</div>;
      })}
    </div>
  );
}

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const totalSections = 7; // Total number of snap sections
  const mainRef = useRef<HTMLDivElement>(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [atBottom, setAtBottom] = useState(false);
  const [useCasesOpen, setUseCasesOpen] = useState(false);
  const [coreFunctionsOpen, setCoreFunctionsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Helper to toggle accordions: open if closed, close if open
  const openOnly = (section: 'usecases' | 'corefunctions') => {
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

      // Track scroll for header collapse
      setIsScrolled(window.scrollY > 50);
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
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
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
    <main ref={mainRef} className={`overflow-y-scroll scroll-smooth transition-colors duration-300 pb-32 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="max-w-2xl w-full px-6 mx-auto">
        {/* Theme Toggle */}
        <div className="fixed top-6 left-0 right-0 flex justify-between items-center px-4 sm:px-8 z-50">
          <span className={`flex items-center text-xl sm:text-2xl font-bold transition-all duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`}>
            <Image
              src="/leeway.png"
              alt="Leeway Logo"
              width={22}
              height={22}
              unoptimized
              className={`inline-block align-middle mr-2 transition-all duration-300 ${isDarkMode ? 'invert brightness-0' : ''}`}
              priority
            />
            <span className={`transition-all duration-300 ${isScrolled ? 'w-0 overflow-hidden opacity-0' : 'w-auto opacity-100'}`}>
              Leeway
            </span>
          </span>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-colors duration-200 ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-black'}`}
            aria-label="Toggle theme"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </button>
        </div>

        {/* Hero Section */}
        <section id="vision" className="flex flex-col transition-all duration-300 ease-in-out p-4 pt-0 md:pt-4 mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-0 md:gap-8 md:gap-0">
            <div className="flex-1">
              <div className={`text-base text-center mt-24 md:mt-48 mb-2 md:mb-10 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                <div className="mb-6 flex items-center gap-2 justify-center">
                </div>
                <h1 className={`text-5xl font-regular mb-8 mt-16 md:mt-32 text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>
                  Intelligence, for use.
                </h1>
                <h2 className={`text-lg font-regular mb-1 text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>
                  <span className="font-regular">Leeway</span> is a research-led design studio pioneering a new generation of consistent and controllable knowledge tools.
                </h2>
                <div className="flex gap-4 mt-6 justify-center">
                  <button 
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                    className={`px-3 py-1 rounded-full border text-sm font-semibold transition-all duration-300 ${isDarkMode ? 'border-white text-white hover:bg-white hover:text-black' : 'border-black text-black hover:bg-black hover:text-white'}`}
                  >
                    UI Gen-1
                  </button>
                  <button 
                    onClick={() => document.getElementById('ui-counter')?.scrollIntoView({ behavior: 'smooth' })}
                    className={`px-3 py-1 rounded-full border text-sm font-semibold transition-all duration-300 ${isDarkMode ? 'border-white text-white hover:bg-white hover:text-black' : 'border-black text-black hover:bg-black hover:text-white'}`}
                  >
                    Counter
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <AsciiMorph isDarkMode={isDarkMode} />
          </div>
        </section>

        {/* Main Content */}
        <section id="solution" className="flex flex-col justify-center transition-all duration-300 ease-in-out p-4 mb-16">
          <h2 className={`text-lg mb-6 ${isDarkMode ? 'text-white' : 'text-black'}`}>Our Work</h2>
          <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-white' : 'text-black'}`}>
          We create general-purpose AI that anticipates user needs. These reliable collaborators help save time, navigate complexity, and perform layered tasks. Our work is to make their power accessible. We call this: Usable Intelligence.
          </p>
        </section>

        <section id="about" className="flex flex-col justify-center transition-all duration-300 ease-in-out p-4 mb-16">
          <div className="space-y-4">
            <h2 className={`text-lg mb-6 ${isDarkMode ? 'text-white' : 'text-black'}`}>
              <div className="flex items-center gap-2">
                <span className={`${altform.className} ${isDarkMode ? 'text-white' : 'text-black'}`}>
                  Our Technology: Leeway UI Gen‑1
                </span>
              </div>
            </h2>
            <p className={`text-lg leading-relaxed mb-8 ${isDarkMode ? 'text-white' : 'text-black'}`}>
            We combine agentic systems with intuitive interfaces to create UI Gen‑1. These tools operate in the background, freeing professionals to focus on higher leverage, more intellectually stimulating work.
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
                className={`w-full flex justify-between items-center px-0 py-2 bg-transparent text-base transition-colors focus:outline-none focus:ring-0 text-left hover:bg-transparent rounded-none ${isDarkMode ? 'text-gray-300' : 'text-gray-400'}`}
                style={{ letterSpacing: '0.01em' }}
              >
                <span className="text-left flex-1">Capabilities</span>
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
                <ul className="bg-transparent">
                  <li className="px-2 py-1">
                    <span className={isDarkMode ? 'text-white' : 'text-black'}>Autonomous Execution</span>
                  </li>
                  <li className="px-2 py-1">
                    <span className={isDarkMode ? 'text-white' : 'text-black'}>Conversational Interface</span>
                  </li>
                  <li className="px-2 py-1">
                    <span className={isDarkMode ? 'text-white' : 'text-black'}>Real-Time Adaptation</span>
                  </li>
                  <li className="px-2 py-1">
                    <span className={isDarkMode ? 'text-white' : 'text-black'}>Contextual Reasoning</span>
                  </li>
                  <li className="px-2 py-1">
                    <span className={isDarkMode ? 'text-white' : 'text-black'}>Orchestration</span>
                  </li>
                  <li className="px-2 py-1">
                    <span className={isDarkMode ? 'text-white' : 'text-black'}>Personalized Insights</span>
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
                className={`w-full flex justify-between items-center px-0 py-2 bg-transparent text-base transition-colors focus:outline-none focus:ring-0 text-left hover:bg-transparent rounded-none ${isDarkMode ? 'text-gray-300' : 'text-gray-400'}`}
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
                <ul className="bg-transparent">
                  <li className="px-2 py-1">
                    <span className={isDarkMode ? 'text-white' : 'text-black'}>R&D Ops</span>
                  </li>
                  <li className="px-2 py-1">
                    <span className={isDarkMode ? 'text-white' : 'text-black'}>Support</span>
                  </li>
                  <li className="px-2 py-1">
                    <span className={isDarkMode ? 'text-white' : 'text-black'}>Maintenance</span>
                  </li>
                  <li className="px-2 py-1">
                    <span className={isDarkMode ? 'text-white' : 'text-black'}>Workflow</span>
                  </li>
                  <li className="px-2 py-1">
                    <span className={isDarkMode ? 'text-white' : 'text-black'}>Compliance</span>
                  </li>
                </ul>
              </div>
              <hr className="border-t border-gray-400 h-px" />
            </div>
          </div>
        </section>

        <section id="ui-counter" className="flex flex-col justify-center transition-all duration-300 ease-in-out p-4 mb-16">
          <h2 className={`text-lg mb-6 ${isDarkMode ? 'text-white' : 'text-black'}`}>Our Product</h2>
          <div className="mb-16">
            <div className="mb-8">
              <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              We apply UI-Gen 1 through sector-specific knowledge suites that elevate operational capabilities and gamify AI workflow experiences.
              </p>
            </div>
          </div>
          <div className={`border rounded-lg p-4 w-[300px] h-[300px] relative overflow-hidden ${isDarkMode ? 'bg-white text-black border-gray-200' : 'bg-black text-white border-gray-800'}`}>
            <div className={`text-xs font-semibold ${isDarkMode ? 'text-gray-700' : 'text-gray-300'}`}>
              Product
            </div>
            <div className={`text-xl font-bold mt-2 ${isDarkMode ? 'text-black' : 'text-white'}`}>
              Meet Counter
            </div>
            <div className={`text-base leading-relaxed mt-2 ${isDarkMode ? 'text-gray-800' : 'text-gray-200'}`}>
             A ready-to-use framework and toolkit built for retail teams.
            </div>
            <div className={`text-xs mt-2 ${isDarkMode ? 'text-gray-600' : 'text-gray-400'}`}>
              | configurable components
            </div>
            <div className="absolute bottom-4 left-4">
              <button 
                onClick={() => window.open('https://tally.so/r/mRla1p', '_blank')}
                className={`px-4 py-2 text-sm font-bold rounded-lg transition-colors ${isDarkMode ? 'bg-black text-white hover:bg-gray-800' : 'bg-white text-black hover:bg-gray-200'}`}
              >
                Book Demo
              </button>
            </div>
            <div className={`absolute top-40 left-30 text-base font-mono leading-none ${isDarkMode ? 'text-gray-400 opacity-100' : 'text-gray-200 opacity-100'} pointer-events-none select-none`}>
              ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠘⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀<br/>
              ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣷⣄⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀<br/>
              ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣷⣄⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀<br/>
              ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣷⣄⠙⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀<br/>
              ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀<br/>
              ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀<br/>
              ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀<br/>
              ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⣿⣿⣿⣿⣿⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀<br/>
              ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣿⣿⣿⣿⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀<br/>
              ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣿⣿⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀<br/>
              ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇
            </div>
          </div>
        </section>

        <section id="approach" className="flex flex-col justify-center transition-all duration-300 ease-in-out p-4 mb-16">
          <h2 className={`text-lg mb-6 ${isDarkMode ? 'text-white' : 'text-black'}`}>Our Approach</h2>
          <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-white' : 'text-black'}`}>
            We're building alignment that preserves human reasoning, similar to the shift from pen and paper to laptopt changed how we solve problems and scale ideas.
          </p>
        </section>

        <section id="contact" className="flex flex-col justify-center transition-all duration-300 ease-in-out p-4 mb-16">
          <div className="space-y-4">
            <h2 className={`text-lg mb-6 ${isDarkMode ? 'text-white' : 'text-black'}`}>Let's Talk</h2>
            <p className={`text-lg leading-relaxed mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>
              if you'd like to learn more about our work, feel free to
              <a
                href="mailto:hello@leewaylabs.ai"
                className="underline hover:text-blue-600 transition-colors mx-1"
              >
                reach out
              </a>
              .
            </p>
            <div className={`text-sm mt-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>© 2025 Leeway Labs · Montreal</div>
          </div>
        </section>
      </div>
    </main>
  );
} 