import { ReactNode } from "react";
import { Text } from "react-native";
import { styles } from "./styles";

interface LabelProps {
    children: ReactNode;
    color?: string;
}

export function Label({ children, color }: LabelProps) {
    return <Text style={[styles.container, { color: color }]}>{children}</Text>;
}
