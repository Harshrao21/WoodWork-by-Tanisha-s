export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  rating: number;
  material: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  name: string;
  email: string;
}

export interface DesignAdvice {
  tips: string[];
  careInstructions: string;
}
