import { ReactNode } from "react";
import { View } from "react-native";
import { styles } from "./styles";

interface BadgeProps {
    children: ReactNode;
    color?: string;
}

export function Badge({ children, color }: BadgeProps) {
    return (
        <View style={[styles.container, { backgroundColor: color }]}>
            {children}
        </View>
    );
}
