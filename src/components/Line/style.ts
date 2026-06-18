import { COLORS } from "@/constants";
import { StyleSheet } from "react-native";

export const line = StyleSheet.create({
    container: {
        alignItems: "center",
        flexDirection: "row",
        marginTop: 14,
        width: 60,
    },
    line: {
        flex: 1,
        height: 5,
        backgroundColor: COLORS.green_dark,
    }
})
