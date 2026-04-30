import { useState, useEffect } from "react";

export const TypewriterText = ({ 
  phrases, 
  onComplete 
}: { 
  phrases: string[], 
  onComplete?: () => void 
}) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopCount, setLoopCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const maxLoops = index === 0 ? 2 : 1; // Loop first phrase more, others less for variety

  useEffect(() => {
    // Reset if phrases change
    setIndex(0);
    setSubIndex(0);
    setIsDeleting(false);
    setLoopCount(0);
    setIsFinished(false);
  }, [phrases]);

  useEffect(() => {
    if (isFinished) return;

    // Stop logic: Finish typing first phrase after maxLoops
    if (loopCount >= maxLoops && index === 0 && !isDeleting && subIndex === phrases[0].length) {
      setIsFinished(true);
      if (onComplete) onComplete();
      return; 
    }

    const currentPhrase = phrases[index];
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setSubIndex((s) => s - 1);
      }, 50); 
    } else {
      timeout = setTimeout(() => {
        setSubIndex((s) => s + 1);
      }, 100); 
    }

    if (subIndex === currentPhrase.length && !isDeleting) {
      timeout = setTimeout(() => {
        if (loopCount < maxLoops || index !== 0) {
          setIsDeleting(true);
        }
      }, 2500); 
    } 
    else if (subIndex === 0 && isDeleting) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        if (index === phrases.length - 1) {
          setIndex(0);
          setLoopCount((lc) => lc + 1);
        } else {
          setIndex((i) => i + 1);
        }
      }, 800);
    }

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting, loopCount, onComplete, isFinished, phrases]);

  return (
    <span className="inline-block">
      {phrases[index].substring(0, subIndex)}
      <span className={`font-light text-gold/60 ml-1 animate-pulse-soft select-none cursor-default ${isFinished ? 'opacity-0' : 'opacity-100'}`}>|</span>
    </span>
  );
};

