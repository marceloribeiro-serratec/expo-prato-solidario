import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { CartItem } from '../../types/cart';
import { formatCurrency } from '../../utils/formatCurrency';
import { styles } from './styles';

interface CartItemCardProps {
  item: CartItem;
  onIncrement: (id: string | number) => void;
  onDecrement: (id: string | number) => void;
  onRemove: (id: string | number) => void;
}

export const CartItemCard: React.FC<CartItemCardProps> = ({
  item,
  onIncrement,
  onDecrement,
  onRemove,
}) => {
  const itemTotal = item.price * item.quantity;

  return (
    <View 
      style={styles.container}
      accessible={true}
      accessibilityLabel={`Item: ${item.name}. Preço unitário: ${formatCurrency(item.price)}. Quantidade: ${item.quantity}. Total do item: ${formatCurrency(itemTotal)}.`}
    >
      {item.image && (
        <Image source={item.image} style={styles.image} accessibilityIgnoresInvertColors />
      )}
      
      <View style={styles.content}>
        <View style={styles.headerRow}>
          <Text style={styles.name}>{item.name}</Text>
          <TouchableOpacity
            onPress={() => onRemove(item.id)}
            accessibilityRole="button"
            accessibilityLabel={`Remover ${item.name} do carrinho`}
            style={styles.removeButton}
          >
            <Text style={styles.removeText}>✕</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.price}>{formatCurrency(item.price)}</Text>

        <View style={styles.actionsRow}>
          <View style={styles.quantitySelector}>
            <TouchableOpacity
              onPress={() => onDecrement(item.id)}
              accessibilityRole="button"
              accessibilityLabel="Diminuir quantidade"
              accessibilityHint={item.quantity === 1 ? "Removerá o item do carrinho" : "Diminui em um"}
              style={styles.qtyButton}
            >
              <Text style={styles.qtyButtonText}>-</Text>
            </TouchableOpacity>

            <Text style={styles.quantity} accessibilityLiveRegion="polite">
              {item.quantity}
            </Text>

            <TouchableOpacity
              onPress={() => onIncrement(item.id)}
              accessibilityRole="button"
              accessibilityLabel="Aumentar quantidade"
              style={styles.qtyButton}
            >
              <Text style={styles.qtyButtonText}>+</Text>
            </TouchableOpacity>
          </View>
          
          <Text style={styles.itemTotal}>{formatCurrency(itemTotal)}</Text>
        </View>
      </View>
    </View>
  );
};
