import { StyleSheet } from "react-native";

import { COLORS } from "@/constants/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        backgroundColor: COLORS.white,
    },
    iconContainer: {
        width: 96,
        height: 96,
        borderRadius: 48,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 24,
        backgroundColor: COLORS.green_light,
    },
    title: {
        marginBottom: 12,
        color: COLORS.gray_700,
        fontSize: 24,
        fontWeight: "700",
        textAlign: "center",
    },
    description: {
        marginBottom: 32,
        color: COLORS.gray_500,
        fontSize: 16,
        lineHeight: 24,
        textAlign: "center",
    },
    button: {
        width: "100%",
        maxWidth: 280,
        height: 48,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.green_dark,
    },
    buttonText: {
        color: COLORS.white,
        fontSize: 16,
        fontWeight: "700",
    },
});
