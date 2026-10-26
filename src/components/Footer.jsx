import React from 'react';
import { restaurantConfig } from '../data/restaurantConfig';
import { ShieldCheck, Receipt, ClipboardCheck } from 'lucide-react';

export default function Footer({ onOpenVerification }) {
  return (
    <footer className="mt-14 bg-[#F5F2EB] border-t border-stone-200 pt-8 pb-20 px-4 text-center">
      <div className="max-w-2xl mx-auto space-y-5">
        
        {/* Statutory & Dietary Notice Cards from original physical menu */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5">
          <div className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white border border-stone-200/90 px-3.5 py-2 rounded-lg text-xs text-olive-900 font-medium shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
            <span>{restaurantConfig.notes.jain}</span>
          </div>

          <div className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white border border-stone-200/90 px-3.5 py-2 rounded-lg text-xs text-charcoal-800 font-medium shadow-2xs">
            <Receipt className="w-3.5 h-3.5 text-olive-800" />
            <span>{restaurantConfig.notes.gst}</span>
          </div>
        </div>

        {/* Verification Checklist Link */}
        <div>
          <button
            onClick={onOpenVerification}
            className="inline-flex items-center gap-1.5 text-xs text-stone-500 hover:text-olive-900 font-medium transition-colors"
          >
            <ClipboardCheck className="w-3.5 h-3.5 text-olive-700" />
            <span>Audit Menu Data & Price Checklist</span>
          </button>
        </div>

        {/* Footer Identity */}
        <div className="pt-4 border-t border-stone-200/60 text-stone-500 text-xs">
          <p className="font-serif font-bold text-charcoal-800 text-sm tracking-wide">
            {restaurantConfig.name}
          </p>
          <p className="mt-1 text-[11px] text-stone-400">
            Digital QR Menu System • Prices in {restaurantConfig.currency}
          </p>
        </div>

      </div>
    </footer>
  );
}
