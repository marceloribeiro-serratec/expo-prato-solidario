import { COLORS } from "@/constants";
import { StatusBar, Platform, StyleSheet } from "react-native";

export const homeScreen = StyleSheet.create({
    headerContainer: {
        backgroundColor: COLORS.gray_100,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight! + 20 : 40,
        paddingHorizontal: 16,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray_200,
        // alignItems: 'center', // Centraliza o conteúdo do header horizontalmente
        // Isso garante que o header herde o comportamento de alinhamento
    },
});