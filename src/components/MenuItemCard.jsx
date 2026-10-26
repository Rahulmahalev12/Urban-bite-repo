import React from 'react';
import { restaurantConfig } from '../data/restaurantConfig';

export default function MenuItemCard({ item, defaultPortion }) {
  const portion = item.portion || defaultPortion;
  const isMRP = item.priceType === 'mrp' || item.price === 'MRP';
  const isAddon = item.isAddon;

  return (
    <div className="bg-white border border-[#E8E3D8] hover:border-olive-300 rounded-xl p-3 sm:p-3.5 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-xs transition-all flex flex-col justify-between">
      <div>
        
        {/* Top Header: Veg Indicator, Badges, and Price */}
        <div className="flex items-start justify-between gap-2">
          
          {/* Left: Name and Badges */}
          <div className="flex-1 min-w-0 pr-1">
            <div className="flex items-center gap-1.5 flex-wrap mb-1">
              
              {/* Official Green Veg Indicator (Square with Circle) */}
              <span
                className="w-3.5 h-3.5 border border-emerald-600 rounded-[2.5px] flex items-center justify-center p-[2px] bg-white shrink-0"
                title="Vegetarian"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
              </span>

              {/* Jain Option Tag */}
              {item.jainOption && (
                <span className="text-[10px] font-semibold tracking-wider uppercase text-olive-800 bg-olive-50/90 border border-olive-200/60 px-1.5 py-0.5 rounded">
                  Jain
                </span>
              )}

              {/* Add-on Tag */}
              {isAddon && (
                <span className="text-[10px] font-semibold tracking-wide text-amber-800 bg-amber-50 border border-amber-200/80 px-1.5 py-0.5 rounded">
                  Add-on
                </span>
              )}

              {/* Portion / Pieces Tag */}
              {portion && (
                <span className="text-[11px] font-medium text-stone-500 bg-stone-100/90 px-1.5 py-0.5 rounded">
                  {portion}
                </span>
              )}
            </div>

            {/* Dish Name */}
            <h4 className="font-medium text-charcoal-900 text-sm sm:text-base leading-snug">
              {item.name}
            </h4>

            {/* Description or flavor details */}
            {item.description && (
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                {item.description}
              </p>
            )}
          </div>

          {/* Right: Exact Price Display */}
          <div className="text-right shrink-0 pt-0.5">
            {isMRP ? (
              <span className="inline-block px-2 py-0.5 rounded bg-stone-100 text-stone-700 font-bold text-xs tracking-wider border border-stone-200">
                MRP
              </span>
            ) : (
              <span className="font-serif font-bold text-olive-900 text-base sm:text-lg tabular-nums">
                {isAddon ? '+' : ''}{restaurantConfig.currency}{item.price}
              </span>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
