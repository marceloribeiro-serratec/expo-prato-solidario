import { StyleSheet } from "react-native";

import { COLORS } from "@/constants/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: COLORS.gray_100,
        padding: 24,
    },
    content: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        color: COLORS.red,
        fontSize: 28,
        fontWeight: "800",
        textAlign: "center",
        marginBottom: 8,
    },
    subtitle: {
        color: COLORS.gray_600,
        fontSize: 15,
        lineHeight: 22,
        textAlign: "center",
        marginBottom: 28,
    },
    qrCodeContainer: {
        padding: 18,
        borderRadius: 8,
        backgroundColor: COLORS.white,
        marginBottom: 28,
    },
    infoContainer: {
        width: "100%",
        alignItems: "center",
        gap: 6,
    },
    label: {
        color: COLORS.gray_600,
        fontSize: 13,
        fontWeight: "400",
        marginTop: 8,
    },
    orderCode: {
        color: COLORS.black,
        fontSize: 20,
        fontWeight: "800",
    },
    value: {
        color: COLORS.black,
        fontSize: 18,
        fontWeight: "700",
    },
    impactValue: {
        color: COLORS.green_dark,
        fontSize: 18,
        fontWeight: "800",
    },
    button: {
        minHeight: 54,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        backgroundColor: COLORS.red,
    },
    buttonText: {
        color: COLORS.white,
        fontSize: 16,
        fontWeight: "800",
    },
});
