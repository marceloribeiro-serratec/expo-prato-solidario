import { COLORS } from "@/constants";
import { StyleSheet } from "react-native";

export const cardMyWork = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        justifyContent: "flex-start",
        padding: 10,
    },
    containerIcon: {
        backgroundColor: COLORS.info_base,
        width: 32,
        height: 32,
        borderRadius: 5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
});
