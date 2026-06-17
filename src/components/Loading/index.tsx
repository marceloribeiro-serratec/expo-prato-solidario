import { View } from "react-native";
import { ActivityIndicator } from "react-native";
import { loadingStyles as styles } from "./style";

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