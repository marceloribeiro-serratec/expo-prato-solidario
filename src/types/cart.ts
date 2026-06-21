import { ImageSourcePropType } from "react-native";

export interface Product {
  id: string | number;
  name: string;
  price: number;
  image?: ImageSourcePropType;
  description?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartContextData {
  cart: CartItem[];
  subtotal: number;
  socialContribution: number;
  total: number;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string | number) => void;
  updateQuantity: (productId: string | number, type: 'increment' | 'decrement') => void;
  clearCart: () => void;
}
