import { StyleSheet } from "react-native";

import { COLORS } from "@/constants/colors";

export const settingsOptionStyles = StyleSheet.create({
    container: {
        width: "100%",
        minHeight: 76,
        padding: 16,
        borderRadius: 12,
        flexDirection: "row",
        alignItems: "center",
        gap: 14,
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.gray_200,
    },
    iconContainer: {
        width: 42,
        height: 42,
        borderRadius: 21,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.green_light,
    },
    dangerIcon: {
        backgroundColor: COLORS.danger_light,
    },
    content: {
        flex: 1,
        gap: 2,
    },
    title: {
        color: COLORS.gray_700,
        fontSize: 16,
        lineHeight: 22,
        fontWeight: "700",
    },
    dangerText: {
        color: COLORS.red,
    },
    description: {
        color: COLORS.gray_500,
        fontSize: 13,
        lineHeight: 18,
    },
});
