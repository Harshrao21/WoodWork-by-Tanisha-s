import { Product } from './types';

export const CATEGORIES = ["Living Room", "Bedroom", "Dining", "Office", "Decor"];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Mid-Century Sheesham Coffee Table",
    category: "Living Room",
    price: 15499.00,
    image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=800&q=80",
    description: "A stunning handcrafted Sheesham wood coffee table featuring tapered legs and a smooth, matte finish natural teak polish.",
    rating: 4.8,
    material: "Solid Sheesham"
  },
  {
    id: 2,
    name: "Royal Velvet & Teak Lounge Chair",
    category: "Living Room",
    price: 24999.00,
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80",
    description: "Deep green velvet upholstery meets rich teak wood in this statement lounge chair, perfect for Indian living rooms.",
    rating: 4.9,
    material: "Teak & Velvet"
  },
  {
    id: 3,
    name: "Heritage King Size Bed",
    category: "Bedroom",
    price: 45000.00,
    image: "https://images.unsplash.com/photo-1505693314120-0d4438688d90?auto=format&fit=crop&w=800&q=80",
    description: "Reclaimed solid wood bed frame with a robust headboard, bringing traditional elegance to your sleep space.",
    rating: 4.7,
    material: "Reclaimed Wood"
  },
  {
    id: 4,
    name: "Modern Minimalist Work Desk",
    category: "Office",
    price: 18500.00,
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80",
    description: "A clean, functional desk made from engineered wood with oak finish and subtle drawer storage.",
    rating: 4.6,
    material: "Engineered Oak"
  },
  {
    id: 5,
    name: "Mahogany Dining Set (6 Seater)",
    category: "Dining",
    price: 65000.00,
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80",
    description: "Elegant mahogany dining table with six matching cushioned chairs. Perfect for family gatherings.",
    rating: 5.0,
    material: "Mahogany"
  },
  {
    id: 6,
    name: "Tripod Floor Lamp",
    category: "Decor",
    price: 4500.00,
    image: "https://images.unsplash.com/photo-1507473888900-52e1adad5481?auto=format&fit=crop&w=800&q=80",
    description: "Sculptural floor lamp with wooden tripod base and a beige linen shade.",
    rating: 4.5,
    material: "Pine & Linen"
  },
   {
    id: 7,
    name: "Vintage Chest of Drawers",
    category: "Bedroom",
    price: 32000.00,
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80",
    description: "Classic chest of drawers with six spacious compartments and antique brass handles.",
    rating: 4.8,
    material: "Mango Wood"
  },
  {
    id: 8,
    name: "Floating Wall Shelves (Set of 3)",
    category: "Decor",
    price: 2999.00,
    image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=800&q=80",
    description: "Set of three floating shelves made from seasoned wood, perfect for displaying plants and books.",
    rating: 4.4,
    material: "Seasoned Wood"
  }
];