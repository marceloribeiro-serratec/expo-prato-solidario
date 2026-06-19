import React, { createContext, useState, useMemo } from 'react';
import { CartContextData, CartItem, Product } from '../types/cart';
import { calculateSocialContribution } from '../utils/formatCurrency';

export const CartContext = createContext<CartContextData>({} as CartContextData);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    if (!product.id) {
      console.warn('Tentativa de adicionar produto sem ID rejeitada.');
      return;
    }

    setCart((currentCart) => {
      const isProductInCart = currentCart.find((item) => item.id === product.id);

      if (isProductInCart) {
        return currentCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string | number) => {
    setCart((currentCart) => currentCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId: string | number, type: 'increment' | 'decrement') => {
    setCart((currentCart) => {
      return currentCart
        .map((item) => {
          if (item.id === productId) {
            const newQuantity = type === 'increment' ? item.quantity + 1 : item.quantity - 1;
            return { ...item, quantity: newQuantity };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
    });
  };

  const clearCart = () => setCart([]);

  const subtotal = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [cart]);

  const socialContribution = useMemo(() => {
    return calculateSocialContribution(subtotal);
  }, [subtotal]);

  const total = useMemo(() => {
    return subtotal; // Em sistemas de delivery tradicionais, somaria-se a taxa de entrega aqui.
  }, [subtotal]);

  return (
    <CartContext.Provider
      value={{
        cart,
        subtotal,
        socialContribution,
        total,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};