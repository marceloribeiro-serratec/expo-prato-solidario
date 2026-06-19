import { ReactNode } from "react";
import { Text, TextStyle } from "react-native";
import { styles } from "./styles";

interface LabelProps {
    children: ReactNode;
    color?: string;
    style?: TextStyle;
}

export function Label({ children, color, style }: LabelProps) {
    return <Text style={[styles.container, { color: color }, style]}>{children}</Text>;
}
