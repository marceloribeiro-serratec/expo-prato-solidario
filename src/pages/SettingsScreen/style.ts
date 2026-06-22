import { StyleSheet } from "react-native";

import { COLORS } from "@/constants/colors";

export const settingsScreen = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.gray_100,
    },
    headerContainer: {
        backgroundColor: COLORS.gray_100,
        paddingHorizontal: 12,
        paddingVertical: 7,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray_200,
        justifyContent: "center",
    },
    content: {
        padding: 20,
        paddingBottom: 32,
        gap: 22,
    },
    accountCard: {
        width: "100%",
        padding: 18,
        borderRadius: 16,
        flexDirection: "row",
        alignItems: "center",
        gap: 14,
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.gray_200,
    },
    accountIcon: {
        width: 54,
        height: 54,
        borderRadius: 27,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.red,
    },
    accountAvatar: {
        width: 54,
        height: 54,
        borderRadius: 27,
        borderWidth: 2,
        borderColor: COLORS.red,
    },
    accountInfo: {
        flex: 1,
        gap: 2,
    },
    accountName: {
        color: COLORS.gray_700,
        fontSize: 18,
        lineHeight: 24,
        fontWeight: "700",
    },
    accountEmail: {
        color: COLORS.gray_500,
        fontSize: 13,
        lineHeight: 18,
    },
    statusBadge: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 999,
        backgroundColor: COLORS.green_light,
    },
    offlineBadge: {
        backgroundColor: COLORS.gray_200,
    },
    statusText: {
        color: COLORS.green_dark,
        fontSize: 12,
        fontWeight: "700",
    },
    offlineText: {
        color: COLORS.gray_500,
    },
    section: {
        gap: 12,
    },
});
