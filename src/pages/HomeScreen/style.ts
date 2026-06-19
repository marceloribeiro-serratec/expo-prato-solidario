import { COLORS } from "@/constants";
import { StatusBar, Platform, StyleSheet } from "react-native";

export const homeScreen = StyleSheet.create({
    headerContainer: {
        backgroundColor: COLORS.gray_100,
        paddingHorizontal: 12,
        paddingVertical: 0,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray_200,
        justifyContent: 'center', 
    },
    searchInput: {
        flex: 1,
        marginLeft: 10,
        paddingVertical: 0,
        fontSize: 16,
        color: COLORS.gray_600,
    },
    badgeText: {
        width: "auto",
        paddingTop: 0,
        lineHeight: 18,
        fontSize: 13,
        color: COLORS.white,
        textAlign: "center",
    },
});
