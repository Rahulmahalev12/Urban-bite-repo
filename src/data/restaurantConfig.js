/**
 * Restaurant Global Configuration
 * Edit restaurant details, placeholders, notes and currency here.
 */
export const restaurantConfig = {
  // Placeholder restaurant name - easily changed by owner
  name: "[RESTAURANT NAME]",
  
  // Reference source (from uploaded menu photo)
  originalMenuReference: "Tokicha Citylight",
  
  // Subtitle & Tagline
  subtitle: "Digital Menu",
  tagline: "Artisanal Brews, Global Bites & Handcrafted Pizzas",
  
  // Table info (optional hint for QR scans)
  tableLabel: "Table Service",
  
  // Currency symbol
  currency: "₹",
  
  // Compliance and dietary notices from the original physical menu
  notes: {
    jain: "Jain Food Available",
    gst: "GST 5% Extra Applicable",
    veg: "100% Pure Vegetarian Kitchen",
  },
  
  // Navigation Macro Groupings
  macroGroups: [
    { id: "all", name: "All Items" },
    { id: "beverages", name: "Tea & Coffee" },
    { id: "refreshers", name: "Mocktails & Shakes" },
    { id: "quick-bites", name: "Chaat & Snacks" },
    { id: "fast-food", name: "Burgers & Sandwiches" },
    { id: "pizza-pasta", name: "Pizza & Pasta" },
    { id: "mains-desserts", name: "Mains & Desserts" },
  ]
};
