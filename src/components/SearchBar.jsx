import React from 'react';
import { Search, X, Check } from 'lucide-react';

export default function SearchBar({
  searchQuery,
  setSearchQuery,
  jainOnly,
  setJainOnly,
  totalResults,
  isFiltering
}) {
  return (
    <div className="bg-[#FAF8F4]/95 backdrop-blur-md border-b border-stone-200 px-3 sm:px-4 py-2.5 sticky top-0 z-30 shadow-xs">
      <div className="max-w-4xl mx-auto flex items-center gap-2">
        
        {/* Search Input Box */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search items, ingredients, portions..."
            className="w-full bg-white border border-stone-300 rounded-lg pl-9 pr-8 py-1.5 text-xs sm:text-sm text-charcoal-900 placeholder:text-stone-400 focus:outline-none focus:ring-1.5 focus:ring-olive-700 focus:border-olive-700 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 text-stone-400 hover:text-charcoal-800 transition-colors"
              aria-label="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Jain Filter Toggle */}
        <button
          onClick={() => setJainOnly(!jainOnly)}
          className={`shrink-0 flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
            jainOnly
              ? 'bg-olive-800 text-white border-olive-800 shadow-xs'
              : 'bg-white text-charcoal-700 border-stone-300 hover:bg-stone-50'
          }`}
          title="Filter Jain food items"
        >
          <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center text-[9px] ${
            jainOnly ? 'border-white bg-olive-700' : 'border-stone-400'
          }`}>
            {jainOnly && <Check className="w-2.5 h-2.5 text-white stroke-[3]" />}
          </span>
          <span className="hidden xs:inline">Jain</span> Friendly
        </button>

        {/* Results Count Badge (when active) */}
        {isFiltering && (
          <span className="shrink-0 text-xs font-semibold px-2 py-1 bg-olive-100/80 text-olive-800 rounded-md border border-olive-200/60">
            {totalResults}
          </span>
        )}

      </div>
    </div>
  );
}
