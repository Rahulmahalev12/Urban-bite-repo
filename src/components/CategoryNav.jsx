import React, { useRef, useEffect } from 'react';
import { Layers } from 'lucide-react';

export default function CategoryNav({
  categories,
  activeCategoryId,
  onSelectCategory,
  onOpenBottomSheet
}) {
  const scrollRef = useRef(null);

  // Auto-scroll the active category button smoothly into view
  useEffect(() => {
    if (!scrollRef.current) return;
    const activeButton = scrollRef.current.querySelector(`[data-category-id="${activeCategoryId}"]`);
    if (activeButton) {
      const container = scrollRef.current;
      const scrollLeft = activeButton.offsetLeft - container.offsetWidth / 2 + activeButton.offsetWidth / 2;
      container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    }
  }, [activeCategoryId]);

  return (
    <nav className="bg-[#FAF8F4]/95 backdrop-blur-md border-b border-stone-200 sticky top-[57px] z-20 shadow-xs transition-all">
      <div className="max-w-4xl mx-auto px-3 sm:px-4 py-2 flex items-center gap-2">
        
        {/* Quick Menu Button (Opens Drawer / Bottom Sheet) */}
        <button
          onClick={onOpenBottomSheet}
          className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-olive-800 text-gold-300 text-xs font-semibold shadow-xs hover:bg-olive-900 active:scale-95 transition-all"
          title="Browse all 29 categories"
        >
          <Layers className="w-3.5 h-3.5 text-gold-400" />
          <span className="hidden xs:inline">Menu</span>
        </button>

        {/* Vertical divider */}
        <div className="w-[1px] h-5 bg-stone-300 shrink-0" />

        {/* Horizontally Scrollable Category Pills */}
        <div
          ref={scrollRef}
          className="flex items-center gap-1.5 overflow-x-auto no-scrollbar scroll-smooth flex-1 py-0.5"
        >
          {categories.map((cat) => {
            const isActive = activeCategoryId === cat.id;
            return (
              <button
                key={cat.id}
                data-category-id={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`shrink-0 text-xs px-3 py-1.5 rounded-lg font-medium transition-all ${
                  isActive
                    ? 'bg-olive-800 text-white font-semibold shadow-xs'
                    : 'bg-white text-charcoal-800 border border-stone-200/90 hover:border-olive-400 hover:text-charcoal-950'
                }`}
              >
                {cat.shortName || cat.name}
              </button>
            );
          })}
        </div>

      </div>
    </nav>
  );
}
