import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

export const EmptyCart: React.FC = () => {
  return (
    <View style={styles.container} accessible={true}>
      <Text style={styles.icon} accessibilityHidden={true}>🛒</Text>
      <Text style={styles.title}>Seu carrinho está vazio</Text>
      <Text style={styles.subtitle}>
        Adicione refeições ou itens para apoiar nossa causa e garantir o seu pedido!
      </Text>
    </View>
  );
};