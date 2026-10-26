import React, { useState, useEffect } from 'react';
import { Layers, ArrowUp } from 'lucide-react';

export default function FloatingNav({ onOpenBottomSheet, categoriesCount }) {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
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

  return (
    <div className="fixed bottom-5 inset-x-0 z-40 pointer-events-none px-4 flex items-center justify-between max-w-lg mx-auto">
      
      {/* Mobile-First One-Hand Category Opener (Centered or Left) */}
      <button
        onClick={onOpenBottomSheet}
        className="pointer-events-auto flex items-center gap-2 px-4 py-2.5 rounded-full bg-olive-900/95 text-white border border-olive-700/80 shadow-lg backdrop-blur-sm hover:bg-olive-950 active:scale-95 transition-all text-xs font-semibold"
        aria-label="Open categories menu"
      >
        <Layers className="w-4 h-4 text-gold-400" />
        <span>Categories ({categoriesCount})</span>
      </button>

      {/* Back to Top Button (Smoothly appears on scroll) */}
      <div className="ml-auto">
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="pointer-events-auto w-10 h-10 rounded-full bg-white/95 text-charcoal-800 border border-stone-300 shadow-md backdrop-blur-sm flex items-center justify-center hover:bg-stone-100 active:scale-95 transition-all"
          >
            <ArrowUp className="w-4 h-4 stroke-[2.2] text-olive-900" />
          </button>
        )}
      </div>

    </div>
  );
}
