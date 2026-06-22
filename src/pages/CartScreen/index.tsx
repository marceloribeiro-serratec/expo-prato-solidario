import React from 'react';
import { FlatList} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { styles } from './style';

import { useCart } from '../../hooks/useCart';
import { CartItemCard } from '../../components/CartItemCard';
import { CartSummary } from '../../components/CartSummary';
import { EmptyCart } from '../../components/EmptyCart';
import { useAuth } from '@/contexts/AuthContext';
import { pedidoService } from '@/services/pedidoService';
import { NavigationProps } from '@/routes/type';
import {
  toastErro,
  toastPedidoFinalizado,
} from '@/utils/toast';

export const CartScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  const { user, profile } = useAuth();
  const {
    cart,
    total,
    subtotal,
    socialContribution,
    clearCart,
    removeFromCart,
    updateQuantity,
  } = useCart();

  async function handleCheckout() {
    if (!user) {
      toastErro(
        'Você precisa estar logado para finalizar o pedido.',
        'Login obrigatório'
      );
      navigation.navigate('login');
      return;
    }

    const clienteId = profile?.id ?? user.id;

    if (!clienteId) {
      toastErro('Não foi possível identificar o usuário.', 'Erro no pedido');
      return;
    }

    try {
      const dataPedido = new Date().toISOString();
      const pedido = await pedidoService.criarPedido({
        id_cliente: String(clienteId),
        data: dataPedido,
        valor_total: total,
      });
      const codigoPedido = `PS-${pedido.id ?? Date.now()}`;

      clearCart();
      toastPedidoFinalizado();
      navigation.navigate('pedidoConfirmado', {
        codigoPedido,
        total,
        impactoSocial: socialContribution,
        data: pedido.data ?? dataPedido,
      });
    } catch (error) {
      console.error('Erro ao finalizar pedido:', error);
      toastErro('Não foi possível finalizar o pedido.', 'Erro no pedido');
    }
  }

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
            onCheckout={handleCheckout}
          />
        }
        ListFooterComponentStyle={styles.footer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};
