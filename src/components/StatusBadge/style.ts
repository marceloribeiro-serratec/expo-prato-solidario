import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    badge: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "flex-start",
        gap: 6,
        paddingVertical: 7,
        paddingHorizontal: 14,
        borderRadius: 999,
    },
    badgeText: {
        fontSize: 14,
        fontWeight: "600",
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
    },
});