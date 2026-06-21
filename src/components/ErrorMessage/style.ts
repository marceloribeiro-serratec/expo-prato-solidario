import { StyleSheet } from "react-native"
import { COLORS } from "@/constants/colors"

export const errorMessageStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 32,
        gap: 12,
    },
    icone: {
        marginBottom: 4,
    },
    botao: {
        marginTop: 8,
        width: "100%",
        height: 48,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.red,
    },
})