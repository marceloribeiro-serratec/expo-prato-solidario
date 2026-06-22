import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { Search } from 'lucide-react-native';
import { COLORS } from '@/constants';

interface MessageNotFoundProps {
  title: string;
  subtitle: string;
}

export const MessageNotFound: React.FC<MessageNotFoundProps> = ({ title, subtitle }) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Search size={48} color={COLORS.gray_400} strokeWidth={1.2} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};