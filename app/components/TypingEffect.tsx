"use client";
import React, { useState, useEffect } from "react";

interface TypingEffectProps {
  words: string[];
  typingSpeed?: number;
  pauseDuration?: number;
  backspaceSpeed?: number;
  restart?: number;
}

export default function TypingEffect({ 
  words, 
  typingSpeed = 120, 
  pauseDuration = 1500,
  backspaceSpeed = 50,
  restart = 0
}: TypingEffectProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  // Reset effect when restart prop changes
  useEffect(() => {
    if (restart > 0) {
      setCurrentWordIndex(0);
      setCurrentText("");
      setIsTyping(true);
      setIsDeleting(false);
    }
  }, [restart]);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    if (isTyping && !isDeleting) {
      // Typing forward
      if (currentText.length < currentWord.length) {
        const timer = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timer);
      } else {
        // Finished typing, wait then start deleting
        const timer = setTimeout(() => {
          setIsDeleting(true);
          setIsTyping(false);
        }, pauseDuration);
        return () => clearTimeout(timer);
      }
    } else if (isDeleting && !isTyping) {
      // Deleting/backspacing
      if (currentText.length > 0) {
        const timer = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, backspaceSpeed);
        return () => clearTimeout(timer);
      } else {
        // Finished deleting, move to next word
        setIsDeleting(false);
        setIsTyping(true);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }
  }, [currentText, currentWordIndex, isTyping, isDeleting, words, typingSpeed, pauseDuration, backspaceSpeed]);

  return (
    <span className="inline serif italic">
      {currentText}
    </span>
  );
}
