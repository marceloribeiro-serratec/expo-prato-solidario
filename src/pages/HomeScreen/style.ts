import { COLORS } from "@/constants";
import { StatusBar, Platform, StyleSheet } from "react-native";

export const homeScreen = StyleSheet.create({
    headerContainer: {
        backgroundColor: COLORS.gray_100,
        paddingHorizontal: 12,
        paddingVertical: 14,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray_200,
        justifyContent: 'center', 
        // Isso garante que o header herde o comportamento de alinhamento
    },
});