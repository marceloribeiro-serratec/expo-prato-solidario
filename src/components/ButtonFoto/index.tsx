import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './style';
import { COLORS } from "@/constants/colors";

interface ButtonFotoProps {
    label?: string;
    onPress?: () => void;
    style?: ViewStyle;
}
 
export function ButtonFoto({
    label = 'Adicionar Foto do Prato',
    onPress,
    style,
}: ButtonFotoProps) {
    return (
        <TouchableOpacity
            style={[styles.container, style]}
            onPress={onPress}
            activeOpacity={0.7}
        >
        <View style={styles.iconWrapper}>
            <Feather name="camera" size={28} color={COLORS.brown} />
            <View style={styles.plusBadge}>
                <Feather name="plus" size={12} color={COLORS.brown} />
            </View>
        </View>
        <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    );
}