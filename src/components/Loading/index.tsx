import { View } from "react-native";
import { ActivityIndicator } from "react-native";
import { loadingStyles as styles } from "./style";
import { COLORS } from "@/constants/colors"

type LoadingProps = {
    color?: string;
    size: number;
    paddingtop?: number;
};

export default function Loading({ size, color, paddingtop }: LoadingProps) {
    return (
        <View style={[styles.container, { paddingTop: paddingtop || 0 }]}>
            <ActivityIndicator size={size} animating={true} color={color} />
        </View>
    );
}

export function LoadingPage() {
    return (
        <View style={styles.pageContainer}>
            <ActivityIndicator
                size={32}
                animating={true}
                color={COLORS.red}
            />
        </View>
    )
}