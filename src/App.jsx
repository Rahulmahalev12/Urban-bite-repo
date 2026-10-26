import React, { useState, useMemo, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CategoryNav from './components/CategoryNav';
import CategorySection from './components/CategorySection';
import CategoryBottomSheet from './components/CategoryBottomSheet';
import FloatingNav from './components/FloatingNav';
import EmptySearchState from './components/EmptySearchState';
import Footer from './components/Footer';
import VerificationModal from './components/VerificationModal';
import { categories } from './data/menuData';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [jainOnly, setJainOnly] = useState(false);
  const [activeCategoryId, setActiveCategoryId] = useState(categories[0]?.id || '');
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [isVerificationOpen, setIsVerificationOpen] = useState(false);

  // Filtered categories and items based on search and Jain option
  const filteredCategories = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return categories
      .map((cat) => {
        const matchingItems = cat.items.filter((item) => {
          // Jain dietary filter
          if (jainOnly && !item.jainOption) return false;

          // Search text filter
          if (!q) return true;
          const nameMatches = item.name.toLowerCase().includes(q);
          const descMatches = item.description?.toLowerCase().includes(q);
          const categoryMatches = cat.name.toLowerCase().includes(q);
          const portionMatches = item.portion?.toLowerCase().includes(q);

          return nameMatches || descMatches || categoryMatches || portionMatches;
        });

        return {
          ...cat,
          items: matchingItems
        };
      })
      .filter((cat) => cat.items.length > 0);
  }, [searchQuery, jainOnly]);

  // Total matching items across all visible categories
  const totalResults = useMemo(() => {
    return filteredCategories.reduce((sum, cat) => sum + cat.items.length, 0);
  }, [filteredCategories]);

  // Handle smooth scrolling to target category
  const handleSelectCategory = (catId) => {
    const targetElement = document.getElementById(catId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setActiveCategoryId(catId);
    }
  };

  // Active Category Scroll Spy
  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = filteredCategories
        .map((c) => document.getElementById(c.id))
        .filter(Boolean);
      
      const scrollPosition = window.scrollY + 140;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el.offsetTop <= scrollPosition) {
          setActiveCategoryId(el.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [filteredCategories]);

  // Reset search and filters
  const handleResetFilters = () => {
    setSearchQuery('');
    setJainOnly(false);
  };

  const isFiltering = searchQuery.length > 0 || jainOnly;

  return (
    <div className="min-h-screen bg-[#FAF8F4] flex flex-col font-sans text-charcoal-900 selection:bg-olive-200">
      
      {/* Restaurant Header */}
      <Header />

      {/* Sticky Compact Search Bar */}
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        jainOnly={jainOnly}
        setJainOnly={setJainOnly}
        totalResults={totalResults}
        isFiltering={isFiltering}
      />

      {/* Sticky Compact Category Bar */}
      <CategoryNav
        categories={filteredCategories.length > 0 ? filteredCategories : categories}
        activeCategoryId={activeCategoryId}
        onSelectCategory={handleSelectCategory}
        onOpenBottomSheet={() => setIsBottomSheetOpen(true)}
      />

      {/* Main Dishes Menu */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-3 sm:px-4 py-4 sm:py-6">
        
        {/* Active Filter Notification Bar */}
        {isFiltering && (
          <div className="mb-4 flex items-center justify-between text-xs bg-olive-50 border border-olive-200/70 px-3 py-2 rounded-lg text-olive-900">
            <span>
              Showing <span className="font-bold">{totalResults}</span> {totalResults === 1 ? 'dish' : 'dishes'}
              {searchQuery && <> matching "<span className="italic font-medium">{searchQuery}</span>"</>}
              {jainOnly && <> (Jain Friendly only)</>}
            </span>
            <button
              onClick={handleResetFilters}
              className="text-olive-800 hover:text-olive-950 font-semibold underline underline-offset-2 ml-3"
            >
              Clear
            </button>
          </div>
        )}

        {/* Categories or Empty State */}
        {filteredCategories.length > 0 ? (
          <div className="space-y-2">
            {filteredCategories.map((category) => (
              <CategorySection
                key={category.id}
                category={category}
              />
            ))}
          </div>
        ) : (
          <EmptySearchState
            searchQuery={searchQuery}
            onReset={handleResetFilters}
          />
        )}
      </main>

      {/* Floating Bottom Nav for One-Hand Mobile Thumb Usage */}
      <FloatingNav
        onOpenBottomSheet={() => setIsBottomSheetOpen(true)}
        categoriesCount={categories.length}
      />

      {/* Category Bottom Sheet Drawer */}
      <CategoryBottomSheet
        isOpen={isBottomSheetOpen}
        onClose={() => setIsBottomSheetOpen(false)}
        activeCategoryId={activeCategoryId}
        onSelectCategory={handleSelectCategory}
      />

      {/* Footer */}
      <Footer onOpenVerification={() => setIsVerificationOpen(true)} />

      {/* Verification Audit Modal */}
      <VerificationModal
        isOpen={isVerificationOpen}
        onClose={() => setIsVerificationOpen(false)}
      />

    </div>
  );
}
