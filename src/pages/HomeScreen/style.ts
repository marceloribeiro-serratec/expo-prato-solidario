import { COLORS } from "@/constants";
import { StatusBar, Platform, StyleSheet } from "react-native";

export const homeScreen = StyleSheet.create({
    headerContainer: {
        backgroundColor: COLORS.white,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight! + 20 : 40,
        paddingHorizontal: 20,
        paddingBottom: 20,
        // Isso garante que o header herde o comportamento de alinhamento
    },
});