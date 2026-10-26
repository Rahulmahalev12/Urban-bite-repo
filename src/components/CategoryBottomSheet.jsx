import React, { useEffect } from 'react';
import { X, ChevronRight, UtensilsCrossed } from 'lucide-react';
import { categories } from '../data/menuData';
import { restaurantConfig } from '../data/restaurantConfig';

export default function CategoryBottomSheet({
  isOpen,
  onClose,
  activeCategoryId,
  onSelectCategory
}) {
  // Prevent background scroll when sheet is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-charcoal-950/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Container */}
      <div className="relative w-full sm:max-w-md bg-white rounded-t-2xl sm:rounded-2xl max-h-[82vh] flex flex-col shadow-2xl z-10 overflow-hidden border border-stone-200 animate-in slide-in-from-bottom duration-250">
        
        {/* Grab Handle for Mobile */}
        <div className="w-10 h-1 bg-stone-300 rounded-full mx-auto mt-2.5 mb-1 sm:hidden shrink-0" />

        {/* Header */}
        <div className="px-5 py-3.5 border-b border-stone-200/80 bg-cream-100 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <UtensilsCrossed className="w-4 h-4 text-olive-800" />
            <h3 className="font-serif font-bold text-base text-charcoal-900">
              Menu Categories
            </h3>
            <span className="text-[11px] font-medium text-stone-500 bg-white px-2 py-0.5 rounded-full border border-stone-200">
              {categories.length} Sections
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-stone-400 hover:text-charcoal-900 rounded-lg hover:bg-stone-200/60 transition-colors"
            aria-label="Close categories"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Category List with One-Hand Thumb Targets */}
        <div className="p-3 overflow-y-auto divide-y divide-stone-100">
          {restaurantConfig.macroGroups
            .filter((m) => m.id !== 'all')
            .map((macro) => {
              const macroCategories = categories.filter((c) => c.macroGroup === macro.id);
              if (macroCategories.length === 0) return null;

              return (
                <div key={macro.id} className="py-2.5 first:pt-1">
                  <span className="block px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-olive-800/80">
                    {macro.name}
                  </span>
                  <div className="mt-1 space-y-1">
                    {macroCategories.map((cat) => {
                      const isActive = activeCategoryId === cat.id;
                      return (
                        <button
                          key={cat.id}
                          onClick={() => {
                            onSelectCategory(cat.id);
                            onClose();
                          }}
                          className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left transition-all ${
                            isActive
                              ? 'bg-olive-800 text-white font-semibold shadow-xs'
                              : 'text-charcoal-800 hover:bg-cream-200/80'
                          }`}
                        >
                          <span className="text-sm font-medium">
                            {cat.shortName || cat.name}
                          </span>
                          <div className="flex items-center gap-2">
                            <span className={`text-xs px-2 py-0.5 rounded-md ${
                              isActive ? 'bg-olive-900 text-gold-300' : 'bg-stone-100 text-stone-600'
                            }`}>
                              {cat.items.length}
                            </span>
                            <ChevronRight className={`w-4 h-4 ${isActive ? 'text-gold-300' : 'text-stone-400'}`} />
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
        </div>

        {/* Close Button at Bottom for Extra Thumb Reachability */}
        <div className="p-3 border-t border-stone-200 bg-cream-50 sm:hidden">
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl bg-olive-800 text-white font-medium text-sm shadow-sm active:bg-olive-900 transition-colors"
          >
            Back to Menu
          </button>
        </div>

      </div>
    </div>
  );
}
