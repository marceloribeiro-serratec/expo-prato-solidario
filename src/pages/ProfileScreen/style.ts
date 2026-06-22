import { StyleSheet } from "react-native";

import { COLORS } from "@/constants/colors";

export const profileScreen = StyleSheet.create({
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
        gap: 20,
    },
    profileCard: {
        alignItems: "center",
        padding: 24,
        borderRadius: 16,
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.gray_200,
    },
    avatarContainer: {
        width: 104,
        height: 104,
        padding: 3,
        borderRadius: 52,
        marginBottom: 16,
        backgroundColor: COLORS.red,
    },
    avatar: {
        width: "100%",
        height: "100%",
        borderRadius: 50,
    },
    name: {
        color: COLORS.gray_700,
        fontSize: 24,
        lineHeight: 32,
        fontWeight: "700",
        textAlign: "center",
    },
    email: {
        marginTop: 4,
        color: COLORS.gray_500,
        fontSize: 15,
        lineHeight: 22,
        textAlign: "center",
    },
    badge: {
        marginTop: 14,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 999,
        backgroundColor: COLORS.green_light,
    },
    badgeText: {
        color: COLORS.green_dark,
        fontSize: 13,
        fontWeight: "700",
    },
    stats: {
        alignItems: "center",
        gap: 12,
    },
    section: {
        gap: 12,
    },
});
