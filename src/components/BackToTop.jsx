import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 350);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-6 right-5 z-40 w-11 h-11 rounded-full bg-olive-800 text-gold-300 shadow-elevated border border-olive-700/60 flex items-center justify-center hover:bg-olive-900 active:scale-95 transition-all animate-in fade-in slide-in-from-bottom-2 duration-300"
    >
      <ArrowUp className="w-5 h-5 stroke-[2.2]" />
    </button>
  );
}
