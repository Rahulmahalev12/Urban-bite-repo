import React from 'react';
import { restaurantConfig } from '../data/restaurantConfig';

export default function Header() {
  return (
    <header className="relative bg-[#FAF8F4] border-b border-stone-200/90 pt-6 pb-4 px-4">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        
        {/* Understated Cafe Emblem / Monogram */}
        <div className="w-10 h-10 mb-2.5 rounded-full bg-olive-800 text-gold-400 flex items-center justify-center border border-olive-900 shadow-xs">
          <svg className="w-5 h-5 text-gold-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
            <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
            <line x1="6" y1="1" x2="6" y2="4" />
            <line x1="10" y1="1" x2="10" y2="4" />
            <line x1="14" y1="1" x2="14" y2="4" />
          </svg>
        </div>

        {/* Subtitle */}
        <div className="text-[11px] font-semibold tracking-widest uppercase text-olive-800/80 mb-1">
          {restaurantConfig.subtitle}
        </div>

        {/* Restaurant Name Placeholder */}
        <h1 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-charcoal-900 mb-1">
          {restaurantConfig.name}
        </h1>

        {/* Tagline */}
        <p className="text-xs sm:text-sm text-stone-600 max-w-sm font-normal leading-relaxed mb-3">
          {restaurantConfig.tagline}
        </p>

        {/* Dietary and Tax Badges */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 text-[11px] text-stone-600">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-stone-100 border border-stone-200 text-charcoal-800 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
            100% Pure Veg
          </span>
          <span className="text-stone-300">•</span>
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-stone-100 border border-stone-200 text-charcoal-800 font-medium">
            Jain Food Available
          </span>
          <span className="text-stone-300">•</span>
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-stone-100 border border-stone-200 text-charcoal-800 font-medium">
            GST 5% Extra
          </span>
        </div>

      </div>
    </header>
  );
}
