import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { CartContextData } from '../types/cart';

export const useCart = (): CartContextData => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart deve ser usado dentro de um CartProvider');
  }

  return context;
};