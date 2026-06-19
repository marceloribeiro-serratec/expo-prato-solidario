import { COLORS } from "@/constants";
import { StatusBar, Platform, StyleSheet } from "react-native";

export const homeScreen = StyleSheet.create({
    headerContainer: {
        backgroundColor: COLORS.gray_100,
        paddingHorizontal: 12,
        paddingVertical: 0,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray_200,
        justifyContent: "center",
    },
    searchInput: {
        flex: 1,
        marginLeft: 10,
        paddingVertical: 0,
        fontSize: 16,
        color: COLORS.gray_600,
    },
    badgeText: {
        lineHeight: 18,
        fontSize: 13,
        fontWeight: "600",
        color: COLORS.white,
        textAlign: "center",
    },
    image: {
        width: 370,
        height: 200,
        borderRadius: 12,
        alignSelf: "center",
        marginTop: 20,
    },
    imageDescription: {
        position: "absolute",
        left: 30,
        right: 40,
        bottom: 20,
    },
    containercategorias: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginVertical: 20,
    },
    containerCardCategorias: {
        flexDirection: "row",
        gap: 22,
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
    },
});
