import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { formatCurrency } from '../../utils/formatCurrency';
import { styles } from './styles';

interface CartSummaryProps {
  subtotal: number;
  socialContribution: number;
  total: number;
  onCheckout: () => void;
}

export const CartSummary: React.FC<CartSummaryProps> = ({
  subtotal,
  socialContribution,
  total,
  onCheckout,
}) => {
  const socialMessage = `Com essa compra, você gera ${formatCurrency(socialContribution)} para doação de refeições solidárias.`;

  return (
    <View style={styles.container}>
      <View 
        style={styles.socialBadge}
        accessible={true}
        accessibilityLabel={`Impacto Social. ${socialMessage}`}
      >
        <Text style={styles.socialHeart}>🌟</Text>
        <View style={styles.socialTextContainer}>
          <Text style={styles.socialTitle}>Impacto Social Garantido</Text>
          <Text style={styles.socialDescription}>
            <Text style={styles.socialHighlight}>{formatCurrency(socialContribution)}</Text> deste pedido serão convertidos em refeições solidárias.
          </Text>
        </View>
      </View>

      <View style={styles.row} accessible={true} accessibilityLabel={`Subtotal: ${formatCurrency(subtotal)}`}>
        <Text style={styles.label}>Subtotal</Text>
        <Text style={styles.value}>{formatCurrency(subtotal)}</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.row} accessible={true} accessibilityLabel={`Total Geral: ${formatCurrency(total)}`}>
        <Text style={styles.totalLabel}>Total</Text>
        <Text style={styles.totalValue}>{formatCurrency(total)}</Text>
      </View>

      <TouchableOpacity
        onPress={onCheckout}
        style={styles.checkoutButton}
        accessibilityRole="button"
        accessibilityLabel="Continuar para o checkout"
        accessibilityHint="Avança para a tela de seleção de pagamento e endereço"
      >
        <Text style={styles.checkoutButtonText}>Continuar para o Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};