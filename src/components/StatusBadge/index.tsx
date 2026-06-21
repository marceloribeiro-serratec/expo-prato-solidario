import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { styles } from "./style";
import { COLORS } from "@/constants";

type StatusBadgeProps = {
    ativo: boolean;
    onPress: () => void;
};

export function StatusBadge({ ativo, onPress }: StatusBadgeProps) {
    const backgroundColor = ativo ? COLORS.green_light : COLORS.gray_300;
    const textColor = ativo ? COLORS.green_dark : COLORS.gray_600;
    const dotColor = ativo ? COLORS.green_dark : COLORS.gray_600;

    return (
        <TouchableOpacity 
            onPress={onPress} 
            activeOpacity={0.8}
            style={[styles.badge, { backgroundColor }]}
        >
            <View style={[styles.dot, { backgroundColor: dotColor }]} />
            
            <Text style={[styles.badgeText, { color: textColor }]}>
                {ativo ? "Ativo" : "Inativo"}
            </Text>
        </TouchableOpacity>
    );
}