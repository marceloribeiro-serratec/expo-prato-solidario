import { COLORS } from "@/constants";
import { StyleSheet } from "react-native";

export const divisor = StyleSheet.create({
    container: {
        alignItems: "center",
        flexDirection: "row",
        gap: 12,
        marginVertical: 24,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: COLORS.gray_400,
    },
    text: {
        color: COLORS.gray_500,
        fontSize: 12,
        fontWeight: "600",
    }
})
