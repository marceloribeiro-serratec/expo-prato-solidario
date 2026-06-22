import React from 'react';
import { styles } from './style';
import { Text } from 'react-native';
import { Button } from '../Button';
import { COLORS } from '@/constants';

export type SortDirection = 'crescente' | 'decrescente' | 'desativado';

export interface SortButtonProps {
    titulo: string;
    isActive: boolean;
    direcao: SortDirection;
    onPress: () => void;
}

export function ButtonOrdenacao({ titulo, isActive, direcao, onPress }: SortButtonProps) {
    const backgroundColor = isActive ? COLORS.red : COLORS.gray_300;
    const textColor = isActive ? COLORS.white : COLORS.gray_500;

    return (
        <Button 
            color={backgroundColor} 
            onPress={onPress}
            style={styles.buttonAdjust}
        >
            <Text style={[styles.text, { color: textColor }]}>
                {titulo} {isActive && (direcao === 'crescente' ? '▲' : '▼')}
            </Text>
        </Button>
    );
}