import { COLORS } from "@/constants";
import { StyleSheet } from "react-native";

export const emphasisCard = StyleSheet.create({
    badge: {
        position: "relative",
        top: -186,
        left: 110,
    },
    badgeText: {
        lineHeight: 18,
        fontSize: 13,
        fontWeight: "600",
        color: COLORS.white,
        textAlign: "center",
    },
    footer: {
        marginTop: 16,
        marginBottom: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
    },
    timeText: {
        flex: 1,
        lineHeight: 20,
    },
    addButton: {
        minWidth: 116,
        height: 40,
        paddingHorizontal: 16,
        paddingVertical: 0,
        borderRadius: 20,
    },
    container: {
        width: "100%",
        height: 400,
        backgroundColor: COLORS.gray_100,
        borderRadius: 12,
        alignItems: "center",
        borderColor: COLORS.gray_300,
        borderWidth: 1,
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.1,
        elevation: 3,
        overflow: "hidden",
    },
});
