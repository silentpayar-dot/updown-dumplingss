import heroDumplingsImg from '../assets/images/hero_dumplings_spread_1793174820342.jpg';
import aboutDimsumImg from '../assets/images/about_steamed_dimsum_1793174820994.jpg';
import signaturePotstickersImg from '../assets/images/signature_crispy_potstickers_1793174822226.jpg';
import chiliOilDumplingsImg from '../assets/images/dish_chili_oil_dumplings_1793174823093.jpg';
import danDanNoodlesImg from '../assets/images/dish_dan_dan_noodles_1793174822460.jpg';
import panFriedBaoImg from '../assets/images/dish_pan_fried_bao_1793174839182.jpg';
import diningSpreadImg from '../assets/images/table_dining_spread_1793174840156.jpg';

export const IMAGE_ASSETS = {
  hero: heroDumplingsImg,
  about: aboutDimsumImg,
  signature: signaturePotstickersImg,
  chiliOilDumplings: chiliOilDumplingsImg,
  danDanNoodles: danDanNoodlesImg,
  panFriedBao: panFriedBaoImg,
  diningSpread: diningSpreadImg,
};

export interface MenuItem {
  id: string;
  name: string;
  category: 'dumplings' | 'noodles' | 'rice' | 'sides';
  description: string;
  priceNote: string;
  image: string;
  badge?: string;
  spicy?: boolean;
  vegetarian?: boolean;
  servings?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  category: string;
  src: string;
  aspect?: string;
}

export const RESTAURANT_INFO = {
  name: "Uptown Dumpling",
  legalName: "Uptown Dumpling LLC",
  cuisine: "Asian Dumplings & Specialties",
  tagline: "Little Pockets of Joy. Big Flavors.",
  eyebrow: "FRESHLY MADE • FULL OF FLAVOR",
  address: {
    street: "18101 Preston Rd #204c",
    city: "Dallas",
    state: "TX",
    zip: "75252",
    country: "United States",
    full: "18101 Preston Rd #204c, Dallas, TX 75252, United States",
    short: "18101 Preston Rd #204c, Dallas, TX 75252"
  },
  phone: {
    display: "+1 214-238-6058",
    raw: "+12142386058",
    telLink: "tel:+12142386058"
  },
  googleMaps: {
    profileUrl: "https://maps.app.goo.gl/R3DEpH9V8L2DbKec7",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=18101+Preston+Rd+%23204c,+Dallas,+TX+75252",
    embedQuery: "18101 Preston Rd %23204c, Dallas, TX 75252"
  },
  hours: {
    statusText: "Please call to confirm today's hours",
    note: "Kitchen hours and holiday schedules may vary. We recommend giving our team a quick call before heading over."
  }
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "steamed-xiao-long-bao",
    name: "Steamed Soup Dumplings (Xiao Long Bao)",
    category: "dumplings",
    description: "Delicate wrappers filled with seasoned pork and rich, savory broth. Served hot with shredded ginger and aged black vinegar.",
    priceNote: "$12.95 (Sample Price)",
    image: aboutDimsumImg,
    badge: "Guest Favorite",
    servings: "6 pieces"
  },
  {
    id: "crispy-potstickers",
    name: "Pan-Fried Crispy Dumplings",
    category: "dumplings",
    description: "Savory pork and scallion filling with a signature golden, crispy bottom lace skirt. Accompanied by house garlic soy dipping sauce.",
    priceNote: "$11.95 (Sample Price)",
    image: signaturePotstickersImg,
    badge: "Crispy Bottom",
    servings: "6 pieces"
  },
  {
    id: "szechuan-chili-dumplings",
    name: "Szechuan Chili Oil Dumplings",
    category: "dumplings",
    description: "Tender steamed pork dumplings tossed in aromatic roasted chili oil, crushed roasted peanuts, fresh cilantro, and scallions.",
    priceNote: "$12.50 (Sample Price)",
    image: chiliOilDumplingsImg,
    badge: "Spicy & Bold",
    spicy: true,
    servings: "8 pieces"
  },
  {
    id: "dan-dan-noodles",
    name: "Artisanal Dan Dan Noodles",
    category: "noodles",
    description: "Springy wheat noodles tossed in a fragrant sesame-chili sauce, topped with seasoned minced meat, crisp baby bok choy, and toasted sesame.",
    priceNote: "$13.95 (Sample Price)",
    image: danDanNoodlesImg,
    badge: "Chef's Special",
    spicy: true
  },
  {
    id: "sheng-jian-bao",
    name: "Golden Pan-Fried Pork Buns (Sheng Jian Bao)",
    category: "dumplings",
    description: "Fluffy yeast dough with a juicy pork and broth center, pan-crisped to a golden crunch on the bottom and topped with black sesame.",
    priceNote: "$12.95 (Sample Price)",
    image: panFriedBaoImg,
    badge: "Fluffy & Crispy",
    servings: "4 pieces"
  },
  {
    id: "family-dumpling-feast",
    name: "Dumpling House Sharing Feast",
    category: "rice",
    description: "An assortment of steamed and pan-fried dumplings paired with aromatic jasmine rice, pickled greens, and signature house condiments.",
    priceNote: "$24.50 (Sample Price)",
    image: diningSpreadImg,
    badge: "Made to Share"
  },
  {
    id: "steamed-veggie-dumplings",
    name: "Garden Greens & Shiitake Dumplings",
    category: "dumplings",
    description: "Finely minced baby bok choy, fragrant shiitake mushrooms, glass noodles, and water chestnuts hand-folded in jade green wrappers.",
    priceNote: "$11.50 (Sample Price)",
    image: heroDumplingsImg,
    vegetarian: true,
    servings: "6 pieces"
  },
  {
    id: "scallion-garlic-noodles",
    name: "Crispy Scallion Oil Noodles",
    category: "noodles",
    description: "Warm pulled noodles dressed in slow-simmered caramel scallion oil, premium soy blend, and topped with crispy wok-browned scallions.",
    priceNote: "$11.95 (Sample Price)",
    image: danDanNoodlesImg,
    vegetarian: true
  },
  {
    id: "garlic-baby-bok-choy",
    name: "Wok-Tossed Baby Bok Choy with Garlic",
    category: "sides",
    description: "Fresh crisp baby bok choy flash-seared with crushed golden garlic and a touch of roasted sesame oil.",
    priceNote: "$8.95 (Sample Price)",
    image: diningSpreadImg,
    vegetarian: true
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Steamed Xiao Long Bao",
    caption: "Handmade soup dumplings steamed to order in traditional bamboo baskets.",
    category: "Dim Sum",
    src: aboutDimsumImg
  },
  {
    id: "gal-2",
    title: "Golden Pan-Fried Dumplings",
    caption: "Crispy lacy bottom potstickers served with artisan house chili oil.",
    category: "Signature",
    src: signaturePotstickersImg
  },
  {
    id: "gal-3",
    title: "Szechuan Chili Oil Dumplings",
    caption: "Silky wrappers bathed in fragrant roasted chili oil and crushed peanuts.",
    category: "Spicy",
    src: chiliOilDumplingsImg
  },
  {
    id: "gal-4",
    title: "Artisanal Asian Noodles",
    caption: "Tender noodles tossed with seasoned minced meat and fresh baby bok choy.",
    category: "Noodles",
    src: danDanNoodlesImg
  },
  {
    id: "gal-5",
    title: "Sheng Jian Bao Pork Buns",
    caption: "Fluffy steamed buns with a crispy pan-seared bottom and hot savory broth.",
    category: "Dim Sum",
    src: panFriedBaoImg
  },
  {
    id: "gal-6",
    title: "Dumpling Table Spread",
    caption: "A welcoming gathering of steamed dumplings, hot tea, and dipping sauces.",
    category: "Atmosphere",
    src: diningSpreadImg
  },
  {
    id: "gal-7",
    title: "Fresh Dumpling Platter",
    caption: "Plump dumplings plated on handcrafted ceramic tableware.",
    category: "Favorites",
    src: heroDumplingsImg
  }
];
