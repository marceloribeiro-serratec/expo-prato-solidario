import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { styles } from './style';

import { useCart } from '../../hooks/useCart';
import { CartItemCard } from '../../components/CartItemCard';
import { CartSummary } from '../../components/CartSummary';
import { EmptyCart } from '../../components/EmptyCart';

export const CartScreen = () => {
  const {
    cart,
    total,
    subtotal,
    socialContribution,
    removeFromCart,
    updateQuantity,
  } = useCart();

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <CartItemCard
            item={item}
            onIncrement={(id) => updateQuantity(id, 'increment')}
            onDecrement={(id) => updateQuantity(id, 'decrement')}
            onRemove={removeFromCart}
          />
        )}
        contentContainerStyle={styles.listContent}
        ListFooterComponent={
          <CartSummary 
            subtotal={subtotal}
            socialContribution={socialContribution}
            total={total} 
            onCheckout={() => undefined}
          />
        }
        ListFooterComponentStyle={styles.footer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};
