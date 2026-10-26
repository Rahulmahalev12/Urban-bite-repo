/**
 * Complete Digital Menu Data
 * Extracted with 100% fidelity from the physical menu photograph (Tokicha Citylight).
 * All 29 categories, original spellings, portion measurements, and dual-pricing preserved.
 */

export const categories = [
  // ================= COLUMN 1 =================
  {
    id: "tea-with-milk",
    name: "TEA WITH MILK (120 ML)",
    shortName: "Tea With Milk",
    macroGroup: "beverages",
    portion: "120 ML",
    items: [
      { id: "masala-tea", name: "Masala Tea", price: 50,isVeg: true, jainOption: true },
      { id: "ginger-pudina-tea", name: "Ginger Pudina Tea", price: 65, isVeg: true, jainOption: true },
      { id: "pudina-tea", name: "Pudina Tea", price: 65, isVeg: true, jainOption: true },
      { id: "cinnamon-tea", name: "Cinnamon Tea", price: 75, isVeg: true, jainOption: true },
      { id: "elaichi-tea", name: "Elaichi Tea", price: 85, isVeg: true, jainOption: true },
    ]
  },
  {
    id: "tea-without-milk",
    name: "TEA WITHOUT MILK (120ML)",
    shortName: "Tea Without Milk",
    macroGroup: "beverages",
    portion: "120 ML",
    items: [
      { id: "black-lemon-ginger-tea", name: "Black Lemon Ginger Tea", price: 95, isVeg: true, jainOption: true },
      { id: "green-lemon-tea", name: "Green Lemon Tea", price: 110, isVeg: true, jainOption: true },
      { id: "darjeeling-lemon-ginger-tea", name: "Darjeeling Lemon Ginger Tea", price: 120, isVeg: true, jainOption: true },
      { id: "green-lemon-ginger-tea", name: "Green Lemon Ginger Tea", price: 130, isVeg: true, jainOption: true },
      { id: "kashmiri-kahwa", name: "Kashmiri Kahwa", price: 140, isVeg: true, jainOption: true },
    ]
  },
  {
    id: "more-than-tea",
    name: "MORE THAN TEA",
    shortName: "More Than Tea",
    macroGroup: "beverages",
    portion: "180 ML",
    items: [
      { id: "hot-chocolate", name: "Hot Chocolate (180 ML)", price: 210, portion: "180 ML", isVeg: true, jainOption: true },
    ]
  },
  {
    id: "iced-tea",
    name: "ICED TEA (280 ML)",
    shortName: "Iced Tea",
    macroGroup: "beverages",
    portion: "280 ML",
    items: [
      { id: "peach-ice-tea", name: "Peach Ice Tea", price: 220, isVeg: true, jainOption: true },
      { id: "lemon-ice-tea", name: "Lemon Ice Tea", price: 220, isVeg: true, jainOption: true },
    ]
  },
  {
    id: "hot-coffee",
    name: "HOT COFFEE",
    shortName: "Hot Coffee",
    macroGroup: "beverages",
    items: [
      { id: "espresso", name: "Espresso", price: 190, isVeg: true, jainOption: true },
      { id: "americano", name: "Americano", price: 190, isVeg: true, jainOption: true },
      { id: "cappuccino", name: "Cappuccino", price: 210, isVeg: true, jainOption: true },
      { id: "cafe-latte", name: "Cafe Latte", price: 210, isVeg: true, jainOption: true },
      { id: "flavoured-americano", name: "Flavoured Americano", price: 220, isVeg: true, jainOption: true },
      { id: "flavoured-cappuccino", name: "Flavoured Cappuccino", price: 235, isVeg: true, jainOption: true },
      { id: "mocha-latte", name: "Mocha Latte", price: 235, isVeg: true, jainOption: true },
    ]
  },
  {
    id: "cold-coffee",
    name: "COLD COFFEE (280ML)",
    shortName: "Cold Coffee",
    macroGroup: "beverages",
    portion: "280 ML",
    items: [
      { id: "cold-coffee-classic", name: "Cold Coffee", price: 200, isVeg: true, jainOption: true },
      { id: "cold-coffee-ice-cream", name: "Cold Coffee with Ice Cream", price: 240, isVeg: true, jainOption: true },
      { id: "caramel-cold-coffee", name: "Caramel Cold Coffee", price: 250, isVeg: true, jainOption: true },
      { id: "hazelnut-coffee", name: "Hazelnut Coffee", price: 260, isVeg: true, jainOption: true },
      { id: "brownie-mocha", name: "Brownie Mocha", price: 260, isVeg: true, jainOption: true },
      { id: "beaten-mocha", name: "Beaten Mocha", price: 280, isVeg: true, jainOption: true },
    ]
  },
  {
    id: "iced-coffee",
    name: "ICED COFFEE",
    shortName: "Iced Coffee",
    macroGroup: "beverages",
    items: [
      { id: "iced-coffee", name: "Iced Coffee", price: 240, isVeg: true, jainOption: true },
      { id: "iced-espresso", name: "Iced Espresso", price: 170, isVeg: true, jainOption: true },
      { id: "iced-americano", name: "Iced Americano", price: 190, isVeg: true, jainOption: true },
      { id: "tonic-espresso", name: "Tonic Espresso", price: 250, isVeg: true, jainOption: true },
      { id: "flavoured-iced-coffee", name: "Flavoured (Lemon, Orange)", price: 260, isVeg: true, jainOption: true },
    ]
  },
  {
    id: "cold-beverages",
    name: "COLD BEVERAGES",
    shortName: "Cold Beverages",
    macroGroup: "beverages",
    items: [
      { id: "cold-drink", name: "Cold Drink", price: "MRP", priceType: "mrp", isVeg: true, jainOption: true },
      { id: "water-bottle", name: "Water Bottle", price: "MRP", priceType: "mrp", isVeg: true, jainOption: true },
      { id: "red-bull", name: "Red Bull", price: "MRP", priceType: "mrp", isVeg: true, jainOption: true },
    ]
  },

  // ================= COLUMN 2 =================
  {
    id: "mojito-mocktails",
    name: "MOJITO & MOCKTAILS (280ML)",
    shortName: "Mojitos & Mocktails",
    macroGroup: "refreshers",
    portion: "280 ML",
    items: [
      { id: "mojito-mint", name: "Mojito Mint", price: 190, isVeg: true, jainOption: true },
      { id: "green-apple-mojito", name: "Green Apple", price: 220, isVeg: true, jainOption: true },
      { id: "aviation", name: "Aviation", price: 160, isVeg: true, jainOption: true },
      { id: "berry-breez", name: "Berry Breez", price: 170, isVeg: true, jainOption: true, note: "Spelled as on menu" },
      { id: "mango-masala-soda", name: "Mango Masala Soda", price: 150, isVeg: true, jainOption: true },
      { id: "orange-mojito", name: "Orange Mojito", price: 220, isVeg: true, jainOption: true },
      { id: "cranberry-mojito", name: "Cranberry Mojito", price: 230, isVeg: true, jainOption: true },
    ]
  },
  {
    id: "shakes",
    name: "SHAKES (280ML)",
    shortName: "Shakes",
    macroGroup: "refreshers",
    portion: "280 ML",
    items: [
      { id: "classic-vanilla-shake", name: "Classic Vanilla", price: 200, isVeg: true, jainOption: true },
      { id: "strawberry-shake", name: "Strawberry", price: 200, isVeg: true, jainOption: true },
      { id: "green-apple-shake", name: "Green Apple", price: 220, isVeg: true, jainOption: true },
      { id: "oreo-chocolate-shake", name: "Oreo Chocolate", price: 260, isVeg: true, jainOption: true },
      { id: "kitkat-shake", name: "Kitkat", price: 260, isVeg: true, jainOption: true },
      { id: "biscoff-shake", name: "Biscoff Shake", price: 300, isVeg: true, jainOption: true },
      { id: "nutella-shake", name: "Nutella Shake", price: 290, isVeg: true, jainOption: true },
    ]
  },
  {
    id: "farali-special",
    name: "FARALI SPECIAL",
    shortName: "Farali Special",
    macroGroup: "quick-bites",
    items: [
      { id: "sabudana-tikki", name: "Sabudana Tikki - 3 Pcs", price: 149, portion: "3 Pcs", isVeg: true, jainOption: true },
    ]
  },
  {
    id: "breakfast",
    name: "BREAKFAST",
    shortName: "Breakfast",
    macroGroup: "quick-bites",
    items: [
      { id: "idli-with-chutney", name: "Idli With Chutney - 2 Pcs", price: 60, portion: "2 Pcs", isVeg: true, jainOption: true },
      { id: "podi-idli-masala", name: "Podi Idli (Masala) - 2 Pcs", price: 90, portion: "2 Pcs", isVeg: true, jainOption: true },
    ]
  },
  {
    id: "salad",
    name: "SALAD",
    shortName: "Salad",
    macroGroup: "quick-bites",
    items: [
      { id: "peanut-chaat-salad", name: "Peanut Chaat Salad", price: 140, isVeg: true, jainOption: true },
      { id: "exotic-corn-salad", name: "Exotic Corn Salad", price: 160, isVeg: true, jainOption: true },
      { id: "exotic-veggie-salad", name: "Exotic Veggie Salad", price: 195, isVeg: true, jainOption: true },
    ]
  },
  {
    id: "chaat",
    name: "CHAAT",
    shortName: "Chaat",
    macroGroup: "quick-bites",
    items: [
      { id: "masala-corn-chaat", name: "Masala Corn Chaat", price: 125, isVeg: true, jainOption: true },
      { id: "mexican-bhel", name: "Mexican Bhel", price: 145, isVeg: true, jainOption: true },
      { id: "papadi-chaat", name: "Papadi Chaat", price: 120, isVeg: true, jainOption: true, note: "Spelled as on menu" },
      { id: "sev-puri-chaat", name: "Sev Puri Chaat", price: 120, isVeg: true, jainOption: true },
      { id: "dahi-puri-chaat", name: "Dahi Puri Chaat", price: 135, isVeg: true, jainOption: true },
      { id: "sukhi-bhel", name: "Sukhi Bhel", price: 95, isVeg: true, jainOption: true },
    ]
  },
  {
    id: "fries",
    name: "FRIES",
    shortName: "Fries",
    macroGroup: "quick-bites",
    items: [
      { id: "french-fries", name: "French Fries", price: 175, isVeg: true, jainOption: true },
      { id: "peri-peri-fries", name: "Peri Peri Fries", price: 195, isVeg: true, jainOption: true },
      { id: "cheese-balls", name: "Cheese Balls - 4 Pcs", price: 210, portion: "4 Pcs", isVeg: true, jainOption: true },
    ]
  },
  {
    id: "burger",
    name: "BURGER",
    shortName: "Burger",
    macroGroup: "fast-food",
    items: [
      { id: "aloo-tikki-burger", name: "Aloo Tikki Burger", price: 95, isVeg: true, jainOption: true },
      { id: "mexican-burger", name: "Mexican Burger", price: 135, isVeg: true, jainOption: true },
    ]
  },

  // ================= COLUMN 3 =================
  {
    id: "garlic-bread",
    name: "GARLIC BREAD",
    shortName: "Garlic Bread",
    macroGroup: "quick-bites",
    items: [
      { id: "garlic-bread", name: "Garlic Bread", price: 125, isVeg: true, jainOption: true },
      { id: "cheese-garlic-bread", name: "Cheese Garlic Bread", price: 170, isVeg: true, jainOption: true },
      { id: "loaded-cheese-garlic-bread", name: "Loaded Cheese Garlic Bread", price: 195, isVeg: true, jainOption: true },
      { id: "brusetta", name: "Brusetta", price: 200, isVeg: true, jainOption: true, note: "Spelled as on menu" },
      { id: "canapis", name: "Canapis", price: 110, isVeg: true, jainOption: true, note: "Spelled as on menu" },
    ]
  },
  {
    id: "snacks",
    name: "SNACKS",
    shortName: "Snacks",
    macroGroup: "quick-bites",
    items: [
      { id: "khakhra", name: "Khakhra - 2 Pcs", price: 50, portion: "2 Pcs", isVeg: true, jainOption: true },
      { id: "cookies", name: "Cookies - 4 Pcs", price: 50, portion: "4 Pcs", isVeg: true, jainOption: true },
      { id: "thepla", name: "Thepla - 2 Pcs", price: 50, portion: "2 Pcs", isVeg: true, jainOption: true },
      { id: "cheese-khakhra", name: "Cheese Khakhra - 2 Pcs", price: 80, portion: "2 Pcs", isVeg: true, jainOption: true },
      { id: "maska-bun", name: "Maska Bun", price: 90, isVeg: true, jainOption: true },
      { id: "nutella-bun", name: "Nutella Bun", price: 100, isVeg: true, jainOption: true },
      { id: "samosa", name: "Samosa - 2 Pcs", price: 80, portion: "2 Pcs", isVeg: true, jainOption: true },
      { id: "bread-butter", name: "Bread Butter", price: 100, isVeg: true, jainOption: true },
      { id: "biscuit-pie", name: "Biscuit Pie - 6 Pcs", price: 90, portion: "6 Pcs", isVeg: true, jainOption: true },
    ]
  },
  {
    id: "nachos",
    name: "NACHOS",
    shortName: "Nachos",
    macroGroup: "quick-bites",
    items: [
      { id: "mexican-nachos", name: "Mexican Nachos", price: 210, isVeg: true, jainOption: true },
      { id: "cheesy-nachos", name: "Cheesy Nachos", price: 225, isVeg: true, jainOption: true },
    ]
  },
  {
    id: "chinese",
    name: "CHINESE",
    shortName: "Chinese",
    macroGroup: "fast-food",
    items: [
      { id: "crispy-corn", name: "Crispy Corn", price: 290, isVeg: true, jainOption: true },
      { id: "paneer-chilli-dry", name: "Paneer Chilli Dry", price: 315, isVeg: true, jainOption: true },
      { id: "crispy-veg", name: "Crispy Veg", price: 295, isVeg: true, jainOption: true },
      { id: "singapore-noodles", name: "Singapore Noodles", price: 350, isVeg: true, jainOption: true },
      { id: "hakka-noodles", name: "Hakka Noodles", price: 330, isVeg: true, jainOption: true },
    ]
  },
  {
    id: "noodles",
    name: "NOODLES",
    shortName: "Noodles",
    macroGroup: "fast-food",
    items: [
      { id: "veg-maggin-noodles", name: "Veg Maggin Noodles", price: 125, isVeg: true, jainOption: true, note: "Spelled as on menu" },
      { id: "chowmein-noodles", name: "Chowmein Noodles", price: 170, isVeg: true, jainOption: true },
      { id: "chinese-bhel", name: "Chinese Bhel", price: 190, isVeg: true, jainOption: true },
      { id: "cheese-veg-maggie", name: "Cheese Veg Maggie", price: 160, isVeg: true, jainOption: true, note: "Spelled as on menu" },
    ]
  },
  {
    id: "grilled-sandwich",
    name: "GRILLED SANDWICH",
    shortName: "Grilled Sandwich",
    macroGroup: "fast-food",
    items: [
      { id: "cheese-chutney-sandwich", name: "Cheese Chutney Sandwich", price: 220, isVeg: true, jainOption: true },
      { id: "cheese-corn-sandwich", name: "Cheese Corn Sandwich", price: 260, isVeg: true, jainOption: true },
      { id: "tandoori-paneer-sandwich", name: "Tandoori Paneer Sandwich", price: 295, isVeg: true, jainOption: true },
      { id: "cheese-bombay-grilled-sandwich", name: "Cheese Bombay Grilled Sandwich", price: 195, isVeg: true, jainOption: true },
      { id: "basil-tomato-sandwich", name: "Basil Tomato Sandwich", price: 225, isVeg: true, jainOption: true },
      { id: "paneer-makhani-sandwich", name: "Paneer Makhani Sandwich", price: 295, isVeg: true, jainOption: true },
      { id: "tokicha-special-sandwich", name: "Tokicha Special Sandwich", price: 290, isVeg: true, jainOption: true },
    ]
  },
  {
    id: "toast-sandwich",
    name: "TOAST SANDWICH",
    shortName: "Toast Sandwich",
    macroGroup: "fast-food",
    items: [
      { id: "chowpatti-club-sandwich", name: "Chowpatti Club Sandwich", price: 150, isVeg: true, jainOption: true, note: "Spelled as on menu" },
      { id: "veg-toast-sandwich", name: "Veg Toast Sandwich", price: 145, isVeg: true, jainOption: true },
      { id: "veg-cheese-toast-sandwich", name: "Veg Cheese Toast Sandwich", price: 195, isVeg: true, jainOption: true },
      { id: "aloo-masala-toast-sandwich", name: "Aloo Masala Toast Sandwich", price: 140, isVeg: true, jainOption: true },
      { id: "paneer-masala-toast-sandwich", name: "Paneer Masala Toast Sandwich", price: 175, isVeg: true, jainOption: true },
    ]
  },

  // ================= COLUMN 4 =================
  {
    id: "wraps",
    name: "WRAPS",
    shortName: "Wraps",
    macroGroup: "fast-food",
    items: [
      { id: "fusion-veggies-wraps", name: "Fusion Veggies Wraps", price: 165, isVeg: true, jainOption: true },
      { id: "grilled-mex-corn-wraps", name: "Grilled Mex corn Wraps", price: 185, isVeg: true, jainOption: true, note: "Spelled as on menu" },
      { id: "bbq-paneer-wrap", name: "Bbq Paneer Wrap", price: 200, isVeg: true, jainOption: true },
      { id: "mini-kathi-roll", name: "Mini Kathi Roll", price: 210, isVeg: true, jainOption: true },
    ]
  },
  {
    id: "pizza-9-inches",
    name: "PIZZA - 9 INCHES",
    shortName: "Pizza (9 Inches)",
    macroGroup: "pizza-pasta",
    isPizza: true,
    sizeNote: "9 Inches Crust (Pan & Thin Available)",
    items: [
      {
        id: "margherita-pizza",
        name: "Margherita Pizza",
        prices: { pan: 295, thin: 270 },
        isVeg: true,
        jainOption: true
      },
      {
        id: "tandoori-paneer-pizza",
        name: "Tandoori Paneer Pizza",
        prices: { pan: 425, thin: 395 },
        isVeg: true,
        jainOption: true
      },
      {
        id: "farm-fresh-pizza",
        name: "Farm Fresh Pizza",
        prices: { pan: 340, thin: 310 },
        isVeg: true,
        jainOption: true
      },
      {
        id: "peri-peri-cottage-cheese-pizza",
        name: "Peri Peri Cottage Cheese Pizza",
        prices: { pan: 425, thin: 395 },
        isVeg: true,
        jainOption: true
      },
      {
        id: "all-pepper-pizza",
        name: "All Pepper Pizza",
        prices: { pan: 390, thin: 365 },
        isVeg: true,
        jainOption: true
      },
      {
        id: "grilled-veggies-pizza",
        name: "Grilled Veggies Pizza",
        prices: { pan: 375, thin: 350 },
        isVeg: true,
        jainOption: true
      },
      {
        id: "spinach-paneer-pizza",
        name: "Spinach Paneer Pizza",
        prices: { pan: 399, thin: 370 },
        isVeg: true,
        jainOption: true
      },
      {
        id: "paneer-makhani-pizza",
        name: "Paneer Makhani Pizza",
        prices: { pan: 425, thin: 399 },
        isVeg: true,
        jainOption: true
      },
      {
        id: "cecilia-pizza",
        name: "Cecilia Pizza",
        prices: { pan: 370, thin: 345 },
        isVeg: true,
        jainOption: true
      }
    ]
  },
  {
    id: "pasta",
    name: "PASTA",
    shortName: "Pasta",
    macroGroup: "pizza-pasta",
    items: [
      { id: "red-sauce-pasta", name: "Red Sauce Pasta", price: 240, isVeg: true, jainOption: true },
      { id: "white-sauce-pasta", name: "White Sauce Pasta", price: 280, isVeg: true, jainOption: true },
      { id: "pink-sauce-pasta", name: "Pink Sauce Pasta", price: 320, isVeg: true, jainOption: true },
    ]
  },
  {
    id: "main-course",
    name: "MAIN COURSE",
    shortName: "Main Course",
    macroGroup: "mains-desserts",
    items: [
      { id: "chole-masala-paratha", name: "Chole Masala With Malabari Paratha", price: 299, isVeg: true, jainOption: true },
      { id: "extra-malabari-paratha", name: "Extra Malabari Paratha - 1 Pc", price: 50, portion: "1 Pc", isAddon: true, isVeg: true, jainOption: true },
    ]
  },
  {
    id: "rice-bowl",
    name: "RICE BOWL",
    shortName: "Rice Bowl",
    macroGroup: "mains-desserts",
    items: [
      { id: "burnt-garlic-rice", name: "Burnt Garlic Rice With Creamy Curry", price: 380, isVeg: true, jainOption: true },
      { id: "mexican-rice", name: "Mexican Rice With Hot Pepper Curry", price: 390, isVeg: true, jainOption: true },
      { id: "lemon-coriander-rice", name: "Lemon Coriander Rice With Vegetable Curry", price: 350, isVeg: true, jainOption: true },
      { id: "veg-fried-rice-chinese-gravy", name: "Veg Fried Rice With Chinese Gravy", price: 385, isVeg: true, jainOption: true },
    ]
  },
  {
    id: "desserts",
    name: "DESSERTS",
    shortName: "Desserts",
    macroGroup: "mains-desserts",
    items: [
      { id: "chocolate-brownie-cookie", name: "Chocolate Brownie With Cookie Crumble", price: 195, isVeg: true, jainOption: true },
      { id: "nutella-brownie-cookie", name: "Nutella Brownie With Cookie Crumble", price: 270, isVeg: true, jainOption: true },
      { id: "biscoff-brownie", name: "Biscoff Brownie", price: 290, isVeg: true, jainOption: true },
      { id: "nutella-brownie", name: "Nutella Brownie", price: 170, isVeg: true, jainOption: true },
      { id: "cheesecake", name: "Cheesecake (Biscoff, Nutella, Strawberry)", price: 349, description: "Choice of flavour: Biscoff, Nutella, or Strawberry", isVeg: true, jainOption: true },
      { id: "add-ice-cream", name: "Add Ice Cream", price: 50, isAddon: true, isVeg: true, jainOption: true },
    ]
  }
];

/**
 * Items requiring verification or with special pricing formats
 * Created as per specification for transparent auditing.
 */
export const itemsForVerification = [
  {
    category: "COLD BEVERAGES",
    itemName: "Cold Drink",
    listedPrice: "MRP",
    type: "Packaged Good / Market Retail Price",
    verificationStatus: "Verified as printed 'MRP' on the physical board. No numeric value specified on menu.",
    recommendation: "Keep as 'MRP' or specify exact canned drink price when confirmed."
  },
  {
    category: "COLD BEVERAGES",
    itemName: "Water Bottle",
    listedPrice: "MRP",
    type: "Packaged Good / Market Retail Price",
    verificationStatus: "Verified as printed 'MRP' on the physical board.",
    recommendation: "Keep as 'MRP' or specify mineral water brand/price when confirmed."
  },
  {
    category: "COLD BEVERAGES",
    itemName: "Red Bull",
    listedPrice: "MRP",
    type: "Packaged Good / Market Retail Price",
    verificationStatus: "Verified as printed 'MRP' on the physical board.",
    recommendation: "Keep as 'MRP' or specify ₹125/₹150 if sold at set rate."
  },
  {
    category: "MOJITO & MOCKTAILS (280ML)",
    itemName: "Berry Breez",
    listedPrice: "₹170",
    type: "Spelling fidelity",
    verificationStatus: "Spelled 'Berry Breez' (without 'e') on physical board. Maintained exact spelling.",
    recommendation: "Can be updated to 'Berry Breeze' if restaurant prefers corrected English."
  },
  {
    category: "GARLIC BREAD",
    itemName: "Brusetta",
    listedPrice: "₹200",
    type: "Spelling fidelity",
    verificationStatus: "Spelled 'Brusetta' on physical board (traditional: Bruschetta). Maintained exact spelling.",
    recommendation: "Can be updated to 'Bruschetta' if desired."
  },
  {
    category: "GARLIC BREAD",
    itemName: "Canapis",
    listedPrice: "₹110",
    type: "Spelling fidelity",
    verificationStatus: "Spelled 'Canapis' on physical board (traditional: Canapés). Maintained exact spelling.",
    recommendation: "Can be updated to 'Canapés' if desired."
  },
  {
    category: "NOODLES",
    itemName: "Veg Maggin Noodles",
    listedPrice: "₹125",
    type: "Spelling fidelity",
    verificationStatus: "Spelled 'Veg Maggin Noodles' on line 1, while line 4 is 'Cheese Veg Maggie'. Maintained exact spelling.",
    recommendation: "Can normalize both to 'Maggi' or 'Maggie' if desired."
  },
  {
    category: "CHAAT",
    itemName: "Papadi Chaat",
    listedPrice: "₹120",
    type: "Spelling fidelity",
    verificationStatus: "Spelled 'Papadi Chaat' on physical board. Maintained exact spelling.",
    recommendation: "Can be normalized to 'Papdi Chaat' if preferred."
  },
  {
    category: "TOAST SANDWICH",
    itemName: "Chowpatti Club Sandwich",
    listedPrice: "₹150",
    type: "Spelling fidelity",
    verificationStatus: "Spelled 'Chowpatti' with 'i'. Maintained exact spelling.",
    recommendation: "Matches regional Mumbai spelling convention."
  },
  {
    category: "WRAPS",
    itemName: "Grilled Mex corn Wraps",
    listedPrice: "₹185",
    type: "Casing fidelity",
    verificationStatus: "Printed with lowercase 'corn' on physical board. Maintained exact wording.",
    recommendation: "Can be normalized to 'Grilled Mex Corn Wraps' for title-case."
  },
  {
    category: "DESSERTS",
    itemName: "Add Ice Cream",
    listedPrice: "₹50",
    type: "Add-on Modifier",
    verificationStatus: "Listed as an add-on item under desserts with price 50.",
    recommendation: "Styled with an 'Add-on' badge for clarity."
  },
  {
    category: "MAIN COURSE",
    itemName: "Extra Malabari Paratha - 1 Pc",
    listedPrice: "₹50",
    type: "Add-on Side",
    verificationStatus: "Listed under Main Course with price 50 for 1 piece.",
    recommendation: "Styled with a portion badge '1 Pc'."
  }
];
