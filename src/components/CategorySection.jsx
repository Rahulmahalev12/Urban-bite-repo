import React from 'react';
import MenuItemCard from './MenuItemCard';
import PizzaItemCard from './PizzaItemCard';

export default function CategorySection({ category }) {
  return (
    <section
      id={category.id}
      className="scroll-mt-28 pt-7 pb-3 border-b border-stone-200/70 last:border-b-0"
    >
      {/* Category Section Header */}
      <div className="flex items-center justify-between gap-3 mb-3.5 pb-2 border-b border-olive-900/10">
        <div>
          <h3 className="font-serif text-base sm:text-lg font-bold tracking-tight text-olive-950 uppercase">
            {category.name}
          </h3>
          {category.sizeNote && (
            <p className="text-[11px] text-stone-500 font-medium">
              {category.sizeNote}
            </p>
          )}
        </div>
        
        <span className="text-[11px] text-stone-500 font-medium bg-stone-100/90 px-2 py-0.5 rounded-full border border-stone-200/60 shrink-0">
          {category.items.length} {category.items.length === 1 ? 'dish' : 'dishes'}
        </span>
      </div>

      {/* Grid of Dishes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
        {category.items.map((item) => {
          if (category.isPizza && item.prices) {
            return (
              <PizzaItemCard
                key={item.id}
                item={item}
              />
            );
          }
          return (
            <MenuItemCard
              key={item.id}
              item={item}
              defaultPortion={category.portion}
            />
          );
        })}
      </div>
    </section>
  );
}
