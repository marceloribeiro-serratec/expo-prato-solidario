import { StyleSheet } from "react-native";

import { COLORS } from "@/constants";

export const customDrawer = StyleSheet.create({
    container: {
        flex: 1,
        width: 280,
        padding: 16,
        justifyContent: "space-between",
        backgroundColor: "#FBF9F8",
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 20,
        },
        shadowOpacity: 0.1,
        shadowRadius: 25,
        elevation: 8,
    },
    profile: {
        width: "100%",
        padding: 16,
        paddingBottom: 24,
    },
    avatar: {
        width: 64,
        height: 64,
        padding: 2,
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        borderWidth: 2,
        borderColor: "rgba(187, 0, 27, 0.1)",
        borderRadius: 32,
        backgroundColor: "#E6182A",
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
        marginTop: 20,
    },
    avatarImage: {
        width: "100%",
        height: "100%",
    },
    profileTitle: {
        marginTop: 16,
        color: COLORS.red,
        fontSize: 24,
        lineHeight: 32,
        fontWeight: "600",
    },
    profileSubtitle: {
        color: "#5D3F3D",
        fontSize: 16,
        lineHeight: 24,
        fontWeight: "400",
    },
    levelBadge: {
        alignSelf: "flex-start",
        marginTop: 8,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 999,
        backgroundColor: "#7BF8A1",
    },
    levelText: {
        color: COLORS.green_dark,
        fontSize: 12,
        lineHeight: 16,
        fontWeight: "700",
    },
    nav: {
        flex: 1,
        width: "100%",
        gap: 8,
    },
    navItem: {
        width: "100%",
        minHeight: 56,
        padding: 16,
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
        borderRadius: 8,
    },
    navItemActive: {
        backgroundColor: "#7BF8A1",
    },
    navText: {
        color: "#5D3F3D",
        fontSize: 16,
        lineHeight: 24,
        fontWeight: "400",
    },
    navTextActive: {
        color: COLORS.green_dark,
        fontWeight: "700",
    },
    inactiveIcon: {
        color: "#5D3F3D",
    },
    footer: {
        width: "100%",
        paddingTop: 17,
        paddingHorizontal: 16,
        borderTopWidth: 1,
        borderTopColor: "#E7BCB9",
    },
    footerText: {
        color: COLORS.red,
        fontSize: 18,
        lineHeight: 28,
        fontWeight: "700",
    },
});
