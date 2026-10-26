import { categories, itemsForVerification } from './src/data/menuData.js';
import { restaurantConfig } from './src/data/restaurantConfig.js';

let passedTests = 0;
let failedTests = 0;

function assert(condition, message) {
  if (condition) {
    passedTests++;
    console.log(`  ✓ ${message}`);
  } else {
    failedTests++;
    console.error(`  ✗ FAILED: ${message}`);
  }
}

console.log('=== TEST SUITE 1: Menu Data & Pricing Integrity ===');

// Check total categories
assert(categories.length === 29, `Found ${categories.length} categories (expected 29)`);

// Check unique IDs for all categories
const catIds = new Set();
let duplicateCatIds = 0;
categories.forEach(c => {
  if (catIds.has(c.id)) duplicateCatIds++;
  catIds.add(c.id);
});
assert(duplicateCatIds === 0, 'All category IDs are strictly unique');

// Check items and prices
let totalDishes = 0;
let missingPriceCount = 0;
let invalidPriceCount = 0;
const itemIds = new Set();
let duplicateItemIds = 0;

categories.forEach(cat => {
  assert(cat.name && cat.name.length > 0, `Category ${cat.id} has valid name: "${cat.name}"`);
  assert(cat.items && cat.items.length > 0, `Category "${cat.name}" has at least 1 item (found ${cat.items.length})`);
  
  cat.items.forEach(item => {
    totalDishes++;
    if (itemIds.has(item.id)) duplicateItemIds++;
    itemIds.add(item.id);

    if (cat.isPizza) {
      if (!item.prices || typeof item.prices.pan !== 'number' || typeof item.prices.thin !== 'number') {
        missingPriceCount++;
        console.error(`Pizza item ${item.name} missing pan/thin prices!`);
      } else {
        if (item.prices.pan <= 0 || item.prices.thin <= 0) {
          invalidPriceCount++;
        }
      }
    } else {
      if (item.price === undefined || item.price === null || item.price === '') {
        missingPriceCount++;
        console.error(`Item ${item.name} missing price!`);
      } else if (typeof item.price === 'number') {
        if (item.price <= 0) invalidPriceCount++;
      } else if (item.price !== 'MRP') {
        invalidPriceCount++;
        console.error(`Item ${item.name} has unexpected non-numeric price: ${item.price}`);
      }
    }
  });
});

assert(duplicateItemIds === 0, `All ${totalDishes} item IDs are strictly unique`);
assert(missingPriceCount === 0, `0 items missing prices (all ${totalDishes} have prices)`);
assert(invalidPriceCount === 0, 'All prices are valid positive numbers or "MRP"');

console.log(`\n=== TEST SUITE 2: Dual Pizza Pricing Verification ===`);
const pizzaCategory = categories.find(c => c.id === 'pizza-9-inches');
assert(Boolean(pizzaCategory), 'Found "PIZZA - 9 INCHES" category');
assert(pizzaCategory.items.length === 9, `9-Inch Pizza category has exactly 9 pizzas (found ${pizzaCategory.items.length})`);

pizzaCategory.items.forEach(pizza => {
  assert(
    pizza.prices.pan >= pizza.prices.thin,
    `"${pizza.name}" Pan price (₹${pizza.prices.pan}) >= Thin price (₹${pizza.prices.thin})`
  );
});

console.log(`\n=== TEST SUITE 3: Search Functionality Simulation ===`);
// Simulate App.jsx search logic
function searchMenu(query, jainOnly = false) {
  const q = query.toLowerCase().trim();
  return categories
    .map(cat => {
      const items = cat.items.filter(item => {
        if (jainOnly && !item.jainOption) return false;
        if (!q) return true;
        const nameMatches = item.name.toLowerCase().includes(q);
        const descMatches = item.description?.toLowerCase().includes(q);
        const catMatches = cat.name.toLowerCase().includes(q);
        const portionMatches = item.portion?.toLowerCase().includes(q);
        return nameMatches || descMatches || catMatches || portionMatches;
      });
      return { ...cat, items };
    })
    .filter(cat => cat.items.length > 0);
}

// Test search queries
const searchTests = [
  { q: 'margherita', minExpected: 1 },
  { q: 'masala', minExpected: 4 }, // Masala tea, Mango Masala Soda, Masala Corn Chaat, Aloo Masala Toast, Paneer Masala Toast
  { q: 'cold coffee', minExpected: 4 },
  { q: 'brownie', minExpected: 4 },
  { q: 'paratha', minExpected: 2 },
  { q: 'garlic', minExpected: 4 },
  { q: 'xyznonexistentdish123', minExpected: 0 }
];

searchTests.forEach(t => {
  const results = searchMenu(t.q);
  const count = results.reduce((acc, c) => acc + c.items.length, 0);
  if (t.minExpected === 0) {
    assert(count === 0, `Search for "${t.q}" returns 0 results (empty state test)`);
  } else {
    assert(count >= t.minExpected, `Search for "${t.q}" found ${count} items (expected >= ${t.minExpected})`);
  }
});

console.log(`\n=== TEST SUITE 4: Category Navigation & Anchor Links ===`);
// Check that every category ID is a valid HTML ID string (no spaces, valid characters)
const validHtmlIdRegex = /^[a-z0-9\-_]+$/i;
let invalidHtmlIds = 0;
categories.forEach(c => {
  if (!validHtmlIdRegex.test(c.id)) {
    invalidHtmlIds++;
    console.error(`Invalid HTML ID: ${c.id}`);
  }
});
assert(invalidHtmlIds === 0, 'All 29 category IDs are valid HTML anchor targets');

console.log(`\n=== TEST SUITE 5: Statutory Notes & Configuration ===`);
assert(restaurantConfig.notes.jain.includes('Jain'), `Jain note configured: "${restaurantConfig.notes.jain}"`);
assert(restaurantConfig.notes.gst.includes('GST'), `GST note configured: "${restaurantConfig.notes.gst}"`);
assert(restaurantConfig.currency === '₹', `Currency symbol is "${restaurantConfig.currency}"`);

console.log(`\n=== TEST SUITE 6: Verification Checklist Audit ===`);
assert(itemsForVerification.length > 0, `Verification audit list contains ${itemsForVerification.length} documented items`);
itemsForVerification.forEach(item => {
  assert(item.itemName && item.listedPrice && item.verificationStatus, `Audited item "${item.itemName}" has complete metadata`);
});

console.log(`\n=================================================`);
console.log(`RESULTS: ${passedTests} passed, ${failedTests} failed.`);
if (failedTests > 0) {
  process.exit(1);
} else {
  console.log(`All automated menu data, search, and navigation tests PASSED!`);
}
