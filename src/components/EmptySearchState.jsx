import React from 'react';
import { SearchX, RotateCcw } from 'lucide-react';

export default function EmptySearchState({ searchQuery, onReset }) {
  return (
    <div className="py-16 px-4 text-center max-w-md mx-auto">
      <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-cream-200 border border-stone-300 flex items-center justify-center text-stone-400">
        <SearchX className="w-7 h-7 stroke-[1.5]" />
      </div>
      <h3 className="font-serif text-lg font-bold text-charcoal-900 mb-1">
        No Dishes Found
      </h3>
      <p className="text-xs sm:text-sm text-stone-600 mb-5 leading-relaxed">
        We couldn't find any items matching <span className="font-semibold text-charcoal-800">"{searchQuery}"</span>. Please try another term or browse our categories.
      </p>
      <button
        onClick={onReset}
        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-olive-800 text-white hover:bg-olive-900 shadow-sm transition-all"
      >
        <RotateCcw className="w-3.5 h-3.5" />
        Reset Search & Filters
      </button>
    </div>
  );
}
