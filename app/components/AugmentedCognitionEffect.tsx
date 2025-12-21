"use client";
import React, { useState, useEffect } from "react";

interface AugmentedCognitionEffectProps {
  typingSpeed?: number;
  pauseDuration?: number;
  backspaceSpeed?: number;
}

export default function AugmentedCognitionEffect({ 
  typingSpeed = 120, 
  pauseDuration = 2000,
  backspaceSpeed = 80,
}: AugmentedCognitionEffectProps) {
  const [middleText, setMiddleText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  
  const fullMiddle = "Augural AI";

  useEffect(() => {
    if (isTyping) {
      // Typing forward
      if (middleText.length < fullMiddle.length) {
        const timer = setTimeout(() => {
          setMiddleText(fullMiddle.slice(0, middleText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timer);
      } else {
        // Finished typing, wait then start deleting
        const timer = setTimeout(() => {
          setIsTyping(false);
        }, pauseDuration);
        return () => clearTimeout(timer);
      }
    } else {
      // Deleting/backspacing
      if (middleText.length > 0) {
        const timer = setTimeout(() => {
          setMiddleText(middleText.slice(0, -1));
        }, backspaceSpeed);
        return () => clearTimeout(timer);
      } else {
        // Finished deleting, start typing again
        const timer = setTimeout(() => {
          setIsTyping(true);
        }, pauseDuration);
        return () => clearTimeout(timer);
      }
    }
  }, [middleText, isTyping, typingSpeed, pauseDuration, backspaceSpeed]);

  return (
    <>
      {middleText}
    </>
  );
}

