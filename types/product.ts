export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
  brand?: string;
  description: string;
  rating?: number;
  reviews?: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface FilterState {
  categories: string[];
  priceRange: [number, number];
  brands: string[];
  searchQuery: string;
}