import React from 'react';
import { restaurantConfig } from '../data/restaurantConfig';

export default function PizzaItemCard({ item }) {
  return (
    <div className="bg-white border border-[#E8E3D8] hover:border-olive-300 rounded-xl p-3 sm:p-3.5 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-xs transition-all flex flex-col justify-between">
      <div>
        
        {/* Header row: Veg indicator, Jain badge, 9" tag */}
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <div className="flex items-center gap-1.5">
            <span
              className="w-3.5 h-3.5 border border-emerald-600 rounded-[2.5px] flex items-center justify-center p-[2px] bg-white shrink-0"
              title="Vegetarian"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
            </span>

            {item.jainOption && (
              <span className="text-[10px] font-semibold tracking-wider uppercase text-olive-800 bg-olive-50/90 border border-olive-200/60 px-1.5 py-0.5 rounded">
                Jain
              </span>
            )}
          </div>

          <span className="text-[11px] font-medium text-stone-500 bg-stone-100/90 px-1.5 py-0.5 rounded">
            9" Pizza
          </span>
        </div>

        {/* Dish Name */}
        <h4 className="font-medium text-charcoal-900 text-sm sm:text-base leading-snug mb-2.5">
          {item.name}
        </h4>

      </div>

      {/* Dual Crust Pricing Row */}
      <div className="pt-2 border-t border-stone-100/90 flex flex-wrap items-center justify-between gap-1.5 text-xs">
        <span className="text-[11px] text-stone-600 font-medium">Crust</span>
        
        <div className="flex items-center gap-1.5 flex-wrap">
          {/* Pan Crust */}
          <div className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-stone-50 border border-stone-200/80">
            <span className="text-[10px] text-stone-600 uppercase font-semibold">Pan:</span>
            <span className="font-serif font-bold text-olive-900 text-sm tabular-nums">
              {restaurantConfig.currency}{item.prices.pan}
            </span>
          </div>

          {/* Thin Crust */}
          <div className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-stone-50 border border-stone-200/80">
            <span className="text-[10px] text-stone-600 uppercase font-semibold">Thin:</span>
            <span className="font-serif font-bold text-olive-900 text-sm tabular-nums">
              {restaurantConfig.currency}{item.prices.thin}
            </span>
          </div>
        </div>

      </div>

    </div>
  );
}
