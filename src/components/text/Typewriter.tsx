"use client";
import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string[];
  speed?: number;
  className?: string;
  waitTime?: number;
  deleteSpeed?: number;
  cursorChar?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({
  text = [],
  speed = 70,
  className = '',
  waitTime = 1500,
  deleteSpeed = 40,
  cursorChar = '_'
}) => {
  // Early return if text array is empty
  if (!text || text.length === 0) {
    return <span className={className}>{cursorChar}</span>;
  }

  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Ensure currentIndex stays within bounds
  const safeIndex = currentIndex % text.length;
  const currentText = text[safeIndex] || '';

  useEffect(() => {
    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (displayText.length < currentText.length) {
        // Typing
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, speed);
      } else {
        // Wait before deleting
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, waitTime);
      }
    } else {
      if (displayText.length > 0) {
        // Deleting
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, deleteSpeed);
      } else {
        // Move to next text
        setCurrentIndex((prev) => (prev + 1) % text.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentText, isTyping, text, speed, waitTime, deleteSpeed]);

  return (
    <span className={className}>
      {displayText}
      <span 
        className={`opacity-${cursorVisible ? '100' : '0'} transition-opacity duration-100`}
        aria-hidden="true"
      >
        {cursorChar}
      </span>
    </span>
  );
};

export default Typewriter;